import SpotifyWebApi from 'spotify-web-api-node';

export const SPOTIFY_SCOPES = 'user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-read-email';

export function getSpotifyClient(): SpotifyWebApi {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Spotify credentials not configured');
  }

  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    redirectUri,
  });

  return spotifyApi;
}

export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const spotifyApi = getSpotifyClient();

  spotifyApi.setRefreshToken(refreshToken);
  const data = await spotifyApi.refreshAccessToken();

  return data.body.access_token;
}

export async function getCurrentlyPlaying(refreshToken: string) {
  try {
    const accessToken = await refreshAccessToken(refreshToken);
    const spotifyApi = getSpotifyClient();

    spotifyApi.setAccessToken(accessToken);
    const data = await spotifyApi.getMyCurrentPlayingTrack();

    return data.body;
  } catch (error) {
    console.error('Error fetching currently playing:', error);
    return null;
  }
}

export async function getRecentlyPlayed(refreshToken: string) {
  try {
    const accessToken = await refreshAccessToken(refreshToken);
    const spotifyApi = getSpotifyClient();

    spotifyApi.setAccessToken(accessToken);
    const data = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 10 });

    return data.body;
  } catch (error) {
    console.error('Error fetching recently played:', error);
    return null;
  }
}

export async function getTopTracks(refreshToken: string) {
  try {
    const accessToken = await refreshAccessToken(refreshToken);
    const spotifyApi = getSpotifyClient();

    spotifyApi.setAccessToken(accessToken);
    const data = await spotifyApi.getMyTopTracks({ limit: 5 });

    return data.body;
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return null;
  }
}

export async function getUserProfile(refreshToken: string) {
  try {
    const accessToken = await refreshAccessToken(refreshToken);
    const spotifyApi = getSpotifyClient();

    spotifyApi.setAccessToken(accessToken);
    const data = await spotifyApi.getMe();

    return data.body;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

/**
 * Get listening time for current month
 * @author Samarth Shukla
 * Fetches and calculates total listening time from Spotify API with pagination support
 */
export async function getListeningTimeThisMonth(refreshToken: string) {
  try {
    const accessToken = await refreshAccessToken(refreshToken);
    const spotifyApi = getSpotifyClient();

    spotifyApi.setAccessToken(accessToken);

    // Get current month start timestamp
    const currentDate = new Date();
    const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    // Spotify API expects timestamps in milliseconds for 'after' parameter
    const monthStartTimestamp = monthStart.getTime();

    // Fetch recently played tracks - start with single request to avoid timeout
    // Spotify API limit is 50 tracks per request
    let allItems: SpotifyApi.PlayHistoryObject[] = [];

    try {
      // First request: get tracks from month start onwards
      const firstPage = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 50,
        after: monthStartTimestamp,
      });

      const firstItems = firstPage.body.items ?? [];
      allItems.push(...firstItems);

      // If we got a full page and oldest item is still in this month, try one more page
      if (firstItems.length === 50) {
        const oldestItem = firstItems[firstItems.length - 1];
        const oldestTimestamp = new Date(oldestItem.played_at).getTime();

        if (oldestTimestamp >= monthStartTimestamp) {
          // Try to get one more page using 'before' cursor
          try {
            const secondPage = await spotifyApi.getMyRecentlyPlayedTracks({
              limit: 50,
              before: Math.floor(oldestTimestamp),
            });

            const secondItems = secondPage.body.items ?? [];
            // Add items that are still from this month
            const validItems = secondItems.filter(item => {
              const playedAt = new Date(item.played_at).getTime();
              return playedAt >= monthStartTimestamp;
            });
            allItems.push(...validItems);
          } catch (secondPageError) {
            // Ignore second page errors, we have at least first page
            console.error('Error fetching second page (non-critical):', secondPageError);
          }
        }
      }
    } catch (firstPageError) {
      console.error('Error fetching first page:', firstPageError);
      // Return empty data on complete failure
      return { totalMs: 0, hours: 0, minutes: 0, trackCount: 0 };
    }

    // Filter to only tracks from this month (in case we got some older ones)
    const thisMonthItems = allItems.filter((play) => {
      const playedAt = new Date(play.played_at);
      return playedAt >= monthStart;
    });

    // Calculate total listening time
    const totalMs = thisMonthItems.reduce((sum, play) => {
      return sum + (play.track?.duration_ms || 0);
    }, 0);

    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));

    return {
      totalMs,
      hours,
      minutes,
      trackCount: thisMonthItems.length,
    };
  } catch (error) {
    console.error('Error fetching listening time:', error);
    // Return empty data instead of null so the UI still shows the section
    return { totalMs: 0, hours: 0, minutes: 0, trackCount: 0 };
  }
}

