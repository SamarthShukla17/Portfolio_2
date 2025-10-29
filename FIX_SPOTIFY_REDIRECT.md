# 🔧 Fix Spotify "Invalid Redirect URI" Error

## Problem
You're seeing: **"Invalid redirect URI"**

This happens when your Spotify app's redirect URI list doesn't match what we're using.

## ✅ Quick Fix

### Step 1: Go to Spotify Dashboard
Visit: **https://developer.spotify.com/dashboard/applications**

### Step 2: Select Your App
Click on your app (the one with Client ID: `84b04297902e45f1aea8cf4c7544eca3`)

### Step 3: Click "Settings"

### Step 4: Add Redirect URI

Scroll down to **"Redirect URIs"** section.

Click **"Add URI"** and paste this EXACTLY:
```
http://localhost:3000/api/spotify/callback
```

⚠️ **Important**: Copy/paste exactly - no trailing slash, must be `http` not `https`

### Step 5: Click "Add" (the green button)

### Step 6: Scroll down and click "Save" (green button at bottom)

### Step 7: Try Again!

Visit: **http://localhost:3000/api/spotify/auth**

---

## 📸 Visual Guide

1. **Dashboard**: See your app
2. **Click "Settings"** button
3. **Scroll to "Redirect URIs"** section
4. **Add URI**: Type/paste `http://localhost:3000/api/spotify/callback`
5. **Click green "Add" button**
6. **Save changes** (scroll down, green "Save" button)

---

## ⚠️ Common Mistakes

❌ **WRONG**:
```
https://localhost:3000/api/spotify/callback
http://localhost:3000/api/spotify/callback/
http://localhost:3000/api/spotify/callback
http://localhost:3000
```

✅ **CORRECT**:
```
http://localhost:3000/api/spotify/callback
```

---

## 🎯 Alternative: Production Setup

If you want to use this in production later, you'd also add:
```
https://yourdomain.com/api/spotify/callback
```

But for now, just use localhost for development!

---

## ✅ After This Works

Once you see the beautiful token page, you'll be all set! 🎉

