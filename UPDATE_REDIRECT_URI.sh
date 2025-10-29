#!/bin/bash
# Script to update Spotify redirect URI in .env file

cd /home/samarth/Portfolio_2/sleek-portfolio

# Backup .env
cp .env .env.backup

# Update the redirect URI
sed -i 's|SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback|SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/spotify/callback|g' .env

echo "✅ Updated redirect URI to use 127.0.0.1"
echo ""
echo "📝 Also update in Spotify Dashboard:"
echo "   Go to: https://developer.spotify.com/dashboard/applications"
echo "   Settings → Redirect URIs"
echo "   Remove: http://localhost:3000/api/spotify/callback"
echo "   Add:    http://127.0.0.1:3000/api/spotify/callback"
echo "   Click Save"
echo ""
echo "Then try: http://localhost:3000/api/spotify/auth"

