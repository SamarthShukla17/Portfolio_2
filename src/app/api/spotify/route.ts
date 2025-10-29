import { NextResponse } from 'next/server';
import {
  getCurrentlyPlaying,
  getRecentlyPlayed,
  getListeningTimeThisMonth,
} from '@/lib/spotify';

export async function GET() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!refreshToken) {
    return NextResponse.json(
      { error: 'Spotify not configured' },
      { status: 500 }
    );
  }

  try {
    const [
      currentlyPlaying,
      recentlyPlayed,
      listeningTime,
    ] = await Promise.all([
      getCurrentlyPlaying(refreshToken),
      getRecentlyPlayed(refreshToken),
      getListeningTimeThisMonth(refreshToken),
    ]);

    return NextResponse.json({
      currentlyPlaying,
      recentlyPlayed,
      listeningTime,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Spotify API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}

