# 🔒 Fix "Insecure Redirect URI" Error

## Problem
You're seeing: **"Insecure Redirect URI"**

This happens because Spotify has specific rules about localhost redirects.

## ✅ Solutions (Try Each)

### Solution 1: Use 127.0.0.1 Instead

Update your Spotify redirect URI to use `127.0.0.1` instead of `localhost`:

**In Spotify Dashboard:**
1. Go to https://developer.spotify.com/dashboard/applications
2. Select your app
3. Click "Settings"
4. Find your redirect URI: `http://localhost:3000/api/spotify/callback`
5. **Delete it** and add this instead:
   ```
   http://127.0.0.1:3000/api/spotify/callback
   ```
6. Click "Add" then "Save"

**In your .env file:**
```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Change this line:
```env
SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/spotify/callback
```

Save and restart the server.

---

### Solution 2: Update Redirect URI Settings

**In Spotify Dashboard Settings:**
Make sure you have these URIs added (add BOTH):
1. `http://localhost:3000/api/spotify/callback`
2. `http://127.0.0.1:3000/api/spotify/callback`

Sometimes having both helps.

---

### Solution 3: Check App Type

In your Spotify app settings, check:
1. Go to Settings
2. Under "Application Type" or "Redirect URIs" section
3. Make sure "Web API" or "Website" is selected
4. Make sure localhost/127.0.0.1 is explicitly allowed

---

### Solution 4: Use ngrok (Advanced)

If localhost still doesn't work, use ngrok for a secure tunnel:

1. Install ngrok: https://ngrok.com/download
2. Start it: `ngrok http 3000`
3. Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)
4. In Spotify Dashboard, add redirect URI:
   ```
   https://abc123.ngrok.io/api/spotify/callback
   ```
5. In .env, update:
   ```env
   SPOTIFY_REDIRECT_URI=https://abc123.ngrok.io/api/spotify/callback
   ```

---

## 🎯 Quick Fix Summary

**Easiest Solution:**

1. Go to Spotify Dashboard → Your App → Settings
2. Add this redirect URI:
   ```
   http://127.0.0.1:3000/api/spotify/callback
   ```
3. Update your `.env` file:
   ```bash
   cd /home/samarth/Portfolio_2/sleek-portfolio
   nano .env
   ```

   Change line to:
   ```env
   SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/spotify/callback
   ```

4. Save and the server will auto-reload
5. Try: http://localhost:3000/api/spotify/auth

This usually fixes the "insecure redirect URI" error! ✅

