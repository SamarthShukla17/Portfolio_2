# Environment Setup for Contact Form

## Telegram Notifications Setup

To receive contact form messages on Telegram, follow these steps:

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send the command: `/newbot`
3. Follow the instructions to create a bot
4. You'll receive a token like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`
5. Save this token - this is your **TELEGRAM_BOT_TOKEN**

### Step 2: Get Your Chat ID

1. Open Telegram and search for **@userinfobot**
2. Send the command: `/start`
3. The bot will reply with your User ID (a number)
4. This number is your **TELEGRAM_CHAT_ID**

### Step 3: Create .env file

Create a file named `.env` in the `sleek-portfolio` directory with:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### Example:
```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=9369976077
```

**Note:** Replace the values with your actual token and chat ID.

### Step 4: Restart the dev server

After creating the `.env` file, restart your development server to load the environment variables.

---

## Email Notifications Setup

To receive contact form messages via email to `samarthofficial52@gmail.com`:

### Step 1: Enable 2-Factor Authentication

If you haven't already, enable 2FA on your Google account:
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification"

### Step 2: Generate App Password

1. Go to https://myaccount.google.com/apppasswords
2. Sign in with your Google account
3. Select "Mail" from the app dropdown
4. Select "Other (Custom name)" from the device dropdown
5. Name it "Portfolio Contact Form"
6. Click "Generate"
7. Copy the 16-character password (spaces don't matter)

### Step 3: Add to .env file

Update your `.env` file with:

```env
EMAIL_USER=samarthofficial52@gmail.com
EMAIL_APP_PASSWORD=your_16_character_password_here
```

**Example:**
```env
EMAIL_USER=samarthofficial52@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

---

## Important Notes

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The `.env` file is only for local development
- For production, add these variables to your hosting platform's environment settings
- Messages will be sent to BOTH email AND Telegram (if both are configured)
- The form will succeed if at least one method works
