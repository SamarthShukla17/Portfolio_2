# Spotify Integration Setup

## Overview

Adding a Spotify component that shows:
- 🎵 Currently playing track
- 🎧 Recently played tracks
- ⏱️ Total listening time
- 📊 Top tracks & artists
- 🎨 Your music taste analysis

## Setup Required

### 1. Spotify Developer Account

1. Go to https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in details:
   - App name: "My Portfolio"
   - Description: "Portfolio integration"
   - Redirect URI: `http://localhost:3000/api/spotify/callback` (for dev)
   - Redirect URI: `https://yourdomain.com/api/spotify/callback` (for production)
5. Click "Save"
6. **Copy your Client ID and Client Secret**

### 2. Environment Variables

Add to your `.env` file:

```env
# Spotify API Credentials
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback

# Spotify Refresh Token (get after first auth)
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

### 3. Get Refresh Token (One-time setup)

To get your refresh token:

**Option A: Simple Script**
1. Run the auth script (will be created)
2. Authorize the app
3. Copy the refresh token from console

**Option B: Manual OAuth**
1. Visit: `http://localhost:3000/api/spotify/auth`
2. Authorize the app
3. You'll be redirected with a code
4. Exchange code for refresh token

### 4. What Data Will Be Shown

- ✅ Currently Playing (real-time)
- ✅ Recently Played (last 50 tracks)
- ✅ Profile Info
- ✅ Your music preferences
- ✅ Visual stats and charts

## Files to Create

1. `src/components/landing/Spotify.tsx` - Display component
2. `src/app/api/spotify/route.ts` - API endpoint
3. `src/app/api/spotify/auth/route.ts` - OAuth handler
4. `src/lib/spotify.ts` - Spotify API utilities

## Installation

You'll need:
```bash
npm install spotify-web-api-node
```

## Security Note

- Keep refresh tokens secure (never commit to git)
- Refresh tokens are used to maintain access
- App will auto-refresh tokens when expired

