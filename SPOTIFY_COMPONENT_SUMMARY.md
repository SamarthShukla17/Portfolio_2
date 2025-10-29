# 🎵 Spotify Component - Complete Setup

## ✅ What I Created

### Components & Files:
1. ✅ **Spotify.tsx** - Main display component
2. ✅ **spotify.ts** - API utilities and helpers
3. ✅ **api/spotify/route.ts** - Main API endpoint
4. ✅ **api/spotify/auth/route.ts** - OAuth authentication
5. ✅ **api/spotify/callback/route.ts** - OAuth callback handler
6. ✅ **Added to homepage** - Shows on your portfolio

### What It Shows:
- 🎵 **Currently Playing** - Real-time track (if listening)
- 🎧 **Recently Played** - Last 5 tracks you listened to
- 📊 **Top Tracks** - Your top 5 most played tracks
- 👤 **Profile Link** - Quick access to your Spotify
- 🔄 **Auto-refresh** - Updates every 30 seconds

## 🎨 Design Features

- Beautiful gradient cards
- Album art displayed
- Animated hover effects
- Responsive grid layout
- Dark/light mode support
- Click to open in Spotify app

## 📋 What You Need to Do

### 1. Spotify Developer Setup (5 min)

1. Visit: https://developer.spotify.com/dashboard
2. Create an app
3. Set redirect URI: `http://localhost:3000/api/spotify/callback`
4. Copy Client ID and Client Secret

### 2. Add Credentials to .env

```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Add:
```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
SPOTIFY_REFRESH_TOKEN=will_get_after_auth
```

### 3. Get Refresh Token

Visit: `http://localhost:3000/api/spotify/auth`

This will:
- Redirect you to Spotify login
- Ask for permissions
- Redirect back with a code
- Exchange code for refresh token
- Show you the refresh token to add to .env

### 4. Restart Server

```bash
pkill -f "next dev"
npm run dev
```

### 5. Visit Your Portfolio

Go to http://localhost:3000

You should now see the Spotify "Now Playing" section!

---

## 📚 Documentation Files

- `SPOTIFY_SETUP.md` - Detailed setup guide
- `SPOTIFY_QUICK_SETUP.md` - Quick 5-minute guide
- `SPOTIFY_COMPONENT_SUMMARY.md` - This file

## 🔧 How It Works

1. Component fetches data from `/api/spotify`
2. API uses refresh token to get access token
3. Access token queries Spotify Web API
4. Returns currently playing, recently played, top tracks
5. Component displays with beautiful UI
6. Auto-refreshes every 30 seconds

## 🎯 Current Status

**Component:** ✅ Created and added to homepage
**API:** ✅ Ready to use
**Config:** ⏳ Needs credentials in .env
**Working:** ⏳ Will work after adding credentials

Once you add the credentials and get the refresh token, it will work immediately!

## 💡 Pro Tips

- The component only shows if you have credentials configured
- If not configured, it won't show (won't break your site)
- Refresh token is long-lived (doesn't expire often)
- Update your redirect URI for production deployment

