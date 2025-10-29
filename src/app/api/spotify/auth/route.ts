import { NextResponse } from 'next/server';
import { SPOTIFY_SCOPES } from '@/lib/spotify';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: 'Spotify not configured' },
      { status: 500 }
    );
  }

  const authUrl = `https://accounts.spotify.com/authorize?` +
    `response_type=code&` +
    `client_id=${clientId}&` +
    `scope=${SPOTIFY_SCOPES}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `state=random_state_string`;

  return NextResponse.redirect(authUrl);
}

