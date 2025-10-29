# 🎵 Quick Spotify Setup (5 minutes)

## Step 1: Spotify Developer Account

1. Go to: https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click **"Create App"**
4. Fill in:
   - **App name:** `My Portfolio`
   - **Description:** `Portfolio integration`
   - **Website:** Your website URL (can be localhost for now)
   - **Redirect URI:** `http://localhost:3000/api/spotify/callback`
   - ✅ **Agree to terms**
5. Click **"Save"**
6. **Copy your Client ID and Client Secret**

## Step 2: Add to .env File

```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Add these lines:
```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
```

## Step 3: Get Refresh Token

I'll create a simple auth endpoint for you. For now, add this temporarily:

```bash
# In your terminal
cd /home/samarth/Portfolio_2/sleek-portfolio
node -e "
const SpotifyWebApi = require('spotify-web-api-node');
const scopes = ['user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state'];
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID || '84b04297902e45f1aea8cf4c7544eca3',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || 'cbcabe13babe4d7e86c8be97de01c617',
  redirectUri: 'http://localhost:3000/api/spotify/callback'
});
const authURL = spotifyApi.createAuthorizeURL(scopes, 'state');
console.log('Authorize URL:', authURL);
"
```

Or visit this URL in your browser (replace with your Client ID):
```
https://accounts.spotify.com/authorize?response_type=code&client_id=84b04297902e45f1aea8cf4c7544eca3&scope=user-read-currently-playing,user-read-recently-played,user-read-playback-state&redirect_uri=http://localhost:3000/api/spotify/callback
```

Then follow the authorization flow to get your refresh token.

## Step 4: Add Refresh Token to .env

```env
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

## Step 5: Restart Server

```bash
pkill -f "next dev"
npm run dev
```

## ✅ Done!

Visit http://localhost:3000 and you'll see your Spotify Now Playing section!

---

## What You'll See:

- 🎵 **Currently Playing** - Real-time track (if you're listening)
- 🎧 **Recently Played** - Last 5 tracks
- 📊 **Top Tracks** - Your top 5 tracks
- 🎨 Beautiful animated cards
- 🔄 Auto-refreshes every 30 seconds

