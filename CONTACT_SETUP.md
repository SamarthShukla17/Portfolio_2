# Contact Form Setup Guide

## Current Status ⚠️

Your contact form is **NOT receiving messages** because:

1. ❌ **Email not configured** - Gmail App Password not set up
2. ❌ **Telegram Chat ID incorrect** - Using phone number instead of Telegram User ID

---

## Fix Email Notifications 📧

### Step 1: Get Gmail App Password

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Sign in with your Google account (samarthofficial52@gmail.com)
   - Click "Select app" → Choose **"Mail"**
   - Click "Select device" → Choose **"Other (Custom name)"**
   - Enter name: **"Portfolio Contact Form"**
   - Click **"Generate"**
   - **COPY the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

3. **Update `.env` file**:
   ```bash
   cd /home/samarth/Portfolio_2/sleek-portfolio
   nano .env
   ```

   Replace this line:
   ```
   EMAIL_APP_PASSWORD=your_16_character_app_password_here
   ```

   With your actual password (remove spaces):
   ```
   EMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

4. **Restart server**:
   ```bash
   # Kill current server (Ctrl+C if running in foreground)
   # Or:
   pkill -f "next dev"

   # Start server again
   npm run dev
   ```

---

## Fix Telegram Notifications 📱

### Step 1: Get Your Telegram Chat ID

The phone number `9369976077` is **NOT** your Telegram Chat ID.

**To get your correct Chat ID:**

1. Open Telegram on your phone or desktop
2. Search for **@userinfobot**
3. Click "Start" or send `/start`
4. The bot will reply with your **User ID** (a numeric value)
5. Copy that number

**Example output from @userinfobot:**
```
🆔 Your Information
━━━━━━━━━━━━━━━━━
👤 First Name: Samarth
🔗 Username: @yourusername
🆔 ID: 123456789 ← THIS IS YOUR CHAT ID
...
```

### Step 2: Update `.env` file

```bash
cd /home/samarth/Portfolio_2/sleek-portfolio
nano .env
```

Replace:
```
TELEGRAM_CHAT_ID=9369976077
```

With your actual Telegram User ID:
```
TELEGRAM_CHAT_ID=123456789
```

### Step 3: Restart server

```bash
pkill -f "next dev"
npm run dev
```

### Step 4: Test Telegram

1. Open Telegram
2. Search for your bot: **@SammyPortBot**
3. Send a message to your bot (any message like "hi")
4. This is important - the bot needs to receive a message from you before it can send you messages

---

## Verify Setup ✅

After completing both setups:

1. Go to http://localhost:3000/contact
2. Fill out the contact form
3. Check your email inbox (samarthofficial52@gmail.com)
4. Check your Telegram for a message from @SammyPortBot

---

## Troubleshooting

### "Bad Request: chat not found" error

**Cause**: Invalid Telegram Chat ID
**Fix**: Get your correct User ID using @userinfobot and update `.env`

### "Username and Password not accepted" error

**Cause**: Invalid or missing Gmail App Password
**Fix**:
- Make sure you're using an App Password, not your regular Gmail password
- Ensure you enabled 2-Step Verification
- Double-check the password in `.env` (remove any spaces)

### Form submits but no messages received

**Check the console logs** for:
```
📧 Email sent: true/false
📱 Telegram sent: true/false
```

If both show `false`, check your configuration.

---

## Important Files

- `.env` - Contains your credentials (DO NOT COMMIT TO GIT)
- `ENV_SETUP.md` - Detailed setup instructions
- `src/app/api/contact/route.ts` - Contact form API

---

## Need Help?

Check the console output when submitting the form. You should see:
- ✅ Green checkmarks if messages were sent
- ❌ Error messages if something failed


