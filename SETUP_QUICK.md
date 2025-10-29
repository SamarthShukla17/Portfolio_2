# 🚀 Quick Setup - Get Your Contact Form Working

## Problem
Your contact form isn't working because:
- ❌ Gmail App Password not configured
- ❌ Telegram Chat ID is wrong (using phone number)

## Quick Fix

### 1. Email Setup (5 minutes)

1. Go to: https://myaccount.google.com/apppasswords
2. Generate a password:
   - App: Mail
   - Device: Other (name it "Portfolio")
3. Copy the 16-character password
4. Update .env:
   ```bash
   cd /home/samarth/Portfolio_2/sleek-portfolio
   nano .env
   ```
5. Find this line and replace with your password:
   ```
   EMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

### 2. Telegram Setup (2 minutes)

1. Open Telegram
2. Message @userinfobot
3. Send: /start
4. Copy your User ID number
5. Update .env with your correct Chat ID
6. Message @SammyPortBot to activate it

### 3. Restart Server

```bash
pkill -f "next dev"
cd /home/samarth/Portfolio_2/sleek-portfolio
npm run dev
```

### 4. Test

Go to http://localhost:3000/contact and submit a test message.

---

📖 **Detailed instructions**: See CONTACT_SETUP.md
