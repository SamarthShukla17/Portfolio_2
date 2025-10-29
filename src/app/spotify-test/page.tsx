'use client';

import { useEffect, useState } from 'react';

export default function SpotifyTestPage() {
  const [status, setStatus] = useState('Checking configuration...');

  useEffect(() => {
    checkConfig();
  }, []);

  const checkConfig = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '84b04297902e45f1aea8cf4c7544eca3';

    if (clientId && clientId !== 'YOUR_CLIENT_ID') {
      setStatus('✅ Configuration detected! Click button below to authorize.');
    } else {
      setStatus('❌ Spotify credentials not found. Please configure .env file.');
    }
  };

  const handleAuthorize = () => {
    window.location.href = '/api/spotify/auth';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          🎵 Spotify Integration Test
        </h1>

        <div className="space-y-6">
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-300">{status}</p>
          </div>

          {status.includes('✅') && (
            <div className="space-y-4">
              <button
                onClick={handleAuthorize}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                🚀 Authorize with Spotify
              </button>

              <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg text-sm text-gray-300">
                <p className="mb-2">📝 <strong>After authorization:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>You'll be redirected to Spotify login</li>
                  <li>Login and click "Agree"</li>
                  <li>You'll be redirected back here</li>
                  <li>Copy the refresh_token shown</li>
                  <li>Add it to your .env file</li>
                </ol>
              </div>
            </div>
          )}

          <div className="p-4 bg-gray-900 rounded-lg text-xs font-mono text-gray-400">
            <p className="mb-2">Current Client ID: <span className="text-green-400">84b04297902e45f1aea8cf4c7544eca3</span></p>
            <p>Redirect URI: <span className="text-blue-400">http://localhost:3000/api/spotify/callback</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

