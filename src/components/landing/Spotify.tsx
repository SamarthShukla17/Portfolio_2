/**
 * Spotify Component
 * @author Samarth Shukla
 * Displays Spotify listening activity including currently playing and recently played tracks
 */
'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Image from 'next/image';

interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string; height: number; width: number }[];
  };
  external_urls: { spotify: string };
}

interface SpotifyData {
  currentlyPlaying: {
    item: SpotifyTrack;
    is_playing: boolean;
  } | null;
  recentlyPlayed: {
    items: { track: SpotifyTrack; played_at: string }[];
  } | null;
}

export default function Spotify() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpotifyData() {
      try {
        const response = await fetch('/api/spotify');

        if (!response.ok) {
          throw new Error('Failed to fetch Spotify data');
        }

        const spotifyData = await response.json();
        setData(spotifyData);
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
        setError('Unable to load Spotify data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchSpotifyData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <Container className="mt-20">
        <SectionHeading subHeading="Music" heading="Now Playing" />
        <div className="mt-12 flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Container>
    );
  }

  if (error || !data) {
    return null; // Don't show section if error or no data
  }

  const { currentlyPlaying, recentlyPlayed } = data;

  // Get last played track
  const lastPlayed = recentlyPlayed?.items?.[0];

  // Check if currently listening
  const isListening = currentlyPlaying?.is_playing;

  // Always show if we have last played or currently playing
  if (!lastPlayed && !currentlyPlaying?.item) {
    return null;
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Music" heading="Spotify Activity" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Currently Listening */}
        {isListening && currentlyPlaying?.item && (
          <div className="relative p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 transition-all duration-500 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide uppercase">Now Playing</span>
            </div>

            <a
              href={currentlyPlaying.item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              {currentlyPlaying.item.album.images?.[0]?.url && (
                <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={currentlyPlaying.item.album.images[0].url}
                    alt={currentlyPlaying.item.name}
                    width={64}
                    height={64}
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg truncate text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {currentlyPlaying.item.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                  {currentlyPlaying.item.artists.map(a => a.name).join(', ')}
                </p>
              </div>
            </a>
          </div>
        )}

        {/* Last Played - Always show if not currently listening or as second card */}
        {lastPlayed && (
          <div className="relative p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 transition-all duration-500 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide uppercase">Last Played</span>
            </div>

            <a
              href={lastPlayed.track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              {lastPlayed.track.album.images?.[2]?.url && (
                <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={lastPlayed.track.album.images[2].url}
                    alt={lastPlayed.track.name}
                    width={64}
                    height={64}
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg truncate text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {lastPlayed.track.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                  {lastPlayed.track.artists.map(a => a.name).join(', ')}
                </p>
              </div>
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}

