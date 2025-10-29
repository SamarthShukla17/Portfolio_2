# 🎵 Spotify Integration - Final Setup Guide

## ✅ Current Status

Your Spotify credentials are already configured in `.env`:
- ✅ Client ID: `84b04297902e45f1aea8cf4c7544eca3`
- ✅ Client Secret: `cbcabe13babe4d7e86c8be97de01c617`
- ✅ Redirect URI: `http://localhost:3000/api/spotify/callback`
- ⏳ **Refresh Token**: Need to get this (takes 1 minute)

## 🚀 Quick Setup (3 Steps)

### Step 1: Authorize with Spotify

Visit: **http://localhost:3000/api/spotify/auth**

Or use the test page: **http://localhost:3000/spotify-test**

This will:
1. Redirect you to Spotify login
2. Ask you to authorize the app (click "Agree")
3. Redirect back with your refresh token

### Step 2: Copy Your Refresh Token

After authorization, you'll see a beautiful page with your token.

Click the **"📋 Copy Token"** button (or manually copy it).

### Step 3: Add to .env

Open your `.env` file:
```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Find this line (around line 48):
```env
# SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

Remove the `#` and paste your token:
```env
SPOTIFY_REFRESH_TOKEN=AQC...your-actual-token-here...
```

**Save** (Ctrl+X, then Y, then Enter)

The server will auto-reload! 🎉

### Step 4: View Your Portfolio

Visit: **http://localhost:3000**

Scroll to the bottom - you'll see your Spotify section!

---

## 🎨 What You Get

- **Currently Playing**: Shows what you're listening to right now (live updates!)
- **Recently Played**: Your last 5 tracks
- **Top Tracks**: Your most played songs
- **Auto-refresh**: Updates every 30 seconds
- **Beautiful cards**: Animated, gradient backgrounds, album art

---

## 📝 Troubleshooting

### Getting 500 errors?
- Make sure your Client ID and Secret are correct in `.env`
- The redirect URI must match EXACTLY in your Spotify dashboard

### Redirect URI mismatch?
Go to: https://developer.spotify.com/dashboard
1. Select your app
2. Click "Settings"
3. Under "Redirect URIs", add:
   ```
   http://localhost:3000/api/spotify/callback
   ```
4. Click "Save"

### Component not showing?
- Wait 30 seconds for the auto-refresh
- Check browser console for any errors
- Make sure you're actually listening to something on Spotify (for "Now Playing")

---

## 🎯 What's Already Working

✅ API routes created
✅ OAuth flow implemented
✅ Component added to homepage
✅ Auto-refresh configured
✅ Error handling in place
✅ Beautiful UI ready
✅ Responsive design
✅ Loading states

**Just need the refresh token and you're done!** 🚀

