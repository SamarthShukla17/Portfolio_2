# 🎵 Get Your Spotify Refresh Token - Easy Method

## Current Status
✅ Client ID: Configured
✅ Client Secret: Configured
⏳ Refresh Token: **Need to get this**

## Quick Method

### Step 1: Authorize Spotify

Click this link (or copy/paste in your browser):

**http://localhost:3000/api/spotify/auth**

This will:
1. Redirect you to Spotify login
2. Ask you to authorize the app
3. Redirect you back with a code
4. Exchange code for tokens
5. Show you the refresh token

### Step 2: Copy the Refresh Token

After authorization, you'll see JSON like:
```json
{
  "refresh_token": "AQC...very-long-token...",
  "expires_in": 3600,
  "note": "Copy this refresh_token..."
}
```

Copy the `refresh_token` value.

### Step 3: Add to .env

```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Find this line:
```env
# SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

Remove the `#` and paste your token:
```env
SPOTIFY_REFRESH_TOKEN=AQC...your-actual-token...
```

### Step 4: Restart Server

The server will auto-reload when you save .env!

### Step 5: Check Your Portfolio

Visit http://localhost:3000

You should now see your Spotify section! 🎉

---

## Alternative: Manual OAuth

If the above doesn't work:

1. Visit:
```
https://accounts.spotify.com/authorize?response_type=code&client_id=84b04297902e45f1aea8cf4c7544eca3&scope=user-read-currently-playing,user-read-recently-played,user-read-playback-state&redirect_uri=http://localhost:3000/api/spotify/callback
```

2. Login and authorize
3. You'll be redirected to `http://localhost:3000/api/spotify/callback?code=...`
4. This will return your refresh token

## Troubleshooting

- **400 error on callback?** Make sure redirect URI in Spotify dashboard matches exactly
- **500 error?** Check that Client ID and Secret are correct
- **No data showing?** Wait 30 seconds for auto-refresh

