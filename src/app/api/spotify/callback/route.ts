import { NextRequest, NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { error: 'No authorization code' },
      { status: 400 }
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: 'Spotify not configured' },
      { status: 500 }
    );
  }

  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    redirectUri,
  });

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token, expires_in } = data.body;

    // Return a nice HTML page with the token
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Spotify Authorization Success</title>
          <meta charset="utf-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              color: white;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              background: rgba(40, 40, 40, 0.8);
              backdrop-filter: blur(20px);
              border-radius: 20px;
              padding: 40px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            }
            .success { color: #4ade80; font-size: 48px; margin-bottom: 20px; }
            h1 { font-size: 28px; margin-bottom: 10px; }
            .token-container {
              background: rgba(0,0,0,0.3);
              border: 2px solid #4ade80;
              border-radius: 12px;
              padding: 20px;
              margin: 30px 0;
              font-family: monospace;
              word-break: break-all;
              position: relative;
            }
            .token {
              color: #4ade80;
              font-size: 16px;
              font-weight: bold;
            }
            .copy-btn {
              background: #4ade80;
              color: black;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.2s;
              width: 100%;
              margin-top: 15px;
            }
            .copy-btn:hover { background: #22c55e; transform: scale(1.02); }
            .instructions {
              background: rgba(59, 130, 246, 0.1);
              border-left: 4px solid #3b82f6;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .instructions ol { margin-left: 20px; margin-top: 10px; }
            .instructions li { margin: 8px 0; }
            code { background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success">✅</div>
            <h1>Spotify Authorization Successful!</h1>
            <p style="color: #9ca3af; margin-bottom: 20px;">
              Your refresh token is ready. Copy it below and add it to your .env file.
            </p>

            <div class="token-container">
              <div style="font-size: 12px; color: #9ca3af; margin-bottom: 10px;">REFRESH TOKEN:</div>
              <div class="token" id="refreshToken">${refresh_token}</div>
              <button class="copy-btn" onclick="copyToken()">📋 Copy Token</button>
            </div>

            <div class="instructions">
              <strong>📝 Next Steps:</strong>
              <ol>
                <li>Copy the refresh token above</li>
                <li>Open <code>.env</code> in your project</li>
                <li>Find the line: <code># SPOTIFY_REFRESH_TOKEN=your_refresh_token_here</code></li>
                <li>Remove the <code>#</code> and paste your token</li>
                <li>Save the file</li>
                <li>Visit <a href="/" style="color: #4ade80;">your portfolio</a> to see it working!</li>
              </ol>
            </div>
          </div>

          <script>
            function copyToken() {
              const token = document.getElementById('refreshToken').textContent;
              navigator.clipboard.writeText(token).then(() => {
                const btn = document.querySelector('.copy-btn');
                btn.textContent = '✅ Copied!';
                btn.style.background = '#22c55e';
                setTimeout(() => {
                  btn.textContent = '📋 Copy Token';
                  btn.style.background = '#4ade80';
                }, 2000);
              });
            }
          </script>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('Error exchanging code for token:', error);

    const errorHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Authorization Failed</title>
          <style>
            body {
              font-family: sans-serif;
              background: #1e1e1e;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 20px;
            }
            .error { color: #ef4444; font-size: 48px; margin-bottom: 20px; }
            h1 { font-size: 28px; }
          </style>
        </head>
        <body>
          <div style="text-align: center;">
            <div class="error">❌</div>
            <h1>Authorization Failed</h1>
            <p>Please try again: <a href="/api/spotify/auth" style="color: #4ade80;">Start Over</a></p>
          </div>
        </body>
      </html>
    `;

    return new NextResponse(errorHtml, {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

