import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

function getClientIP(request: NextRequest): string {
  // Get IP from various headers in order of preference
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // First request or window expired
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count
  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

// Option 1: Using Resend (EASIEST - Recommended)
async function sendWithResend(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey) {
    console.log('Resend not configured - skipping email notification');
    return false;
  }

  try {
    const resend = new Resend(resendApiKey);

    const result = await resend.emails.send({
      from: resendFrom || 'onboarding@resend.dev',
      to: 'samarthofficial52@gmail.com',
      subject: `New Contact Form: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${data.name.trim()}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${data.email.trim()}</p>
            <p style="margin: 10px 0;"><strong>📱 Phone:</strong> ${data.phone.trim()}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💬 Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.message.trim()}</p>
          </div>
          <div style="color: #999; font-size: 12px; margin-top: 20px;">
            <p>⏰ Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    return !!result.data;
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    return false;
  }
}

// Option 2: Using Nodemailer with Gmail (Complex setup)
async function sendWithGmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPassword || emailPassword.includes('your_16_character')) {
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${data.name.trim()}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${data.email.trim()}</p>
            <p style="margin: 10px 0;"><strong>📱 Phone:</strong> ${data.phone.trim()}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💬 Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.message.trim()}</p>
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Error sending email with Gmail:', error);
    return false;
  }
}

async function sendToEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  // Try Resend first (easier), fallback to Gmail
  const resendSuccess = await sendWithResend(data);
  if (resendSuccess) return true;

  return await sendWithGmail(data);
}

async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  // Check if Telegram is configured
  if (!telegramToken || !telegramChatId) {
    console.log('Telegram not configured - skipping Telegram notification');
    return false;
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name.trim()}
📧 *Email:* ${data.email.trim()}
📱 *Phone:* ${data.phone.trim()}

💬 *Message:*
${data.message.trim()}

⏰ *Submitted:* ${new Date().toISOString()}
📍 *Timezone:* ${Intl.DateTimeFormat().resolvedOptions().timeZone}
  `.trim();

  try {
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      console.error('Failed to send to Telegram:', errorText);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Try to send to both email and Telegram
    const [emailSent, telegramSent] = await Promise.allSettled([
      sendToEmail(validatedData),
      sendToTelegram(validatedData),
    ]);

    const emailSuccess = emailSent.status === 'fulfilled' && emailSent.value === true;
    const telegramSuccess = telegramSent.status === 'fulfilled' && telegramSent.value === true;

    console.log('📧 Email sent:', emailSuccess);
    console.log('📱 Telegram sent:', telegramSuccess);

    // Log errors if any
    if (emailSent.status === 'rejected') {
      console.error('Email sending failed:', emailSent.reason);
    }
    if (telegramSent.status === 'rejected') {
      console.error('Telegram sending failed:', telegramSent.reason);
    }

    // Return success if at least one method worked, or both failed
    // But still show success to user since the message was received
    // (both methods might be misconfigured but we still want to receive the data)
    if (!emailSuccess && !telegramSuccess) {
      console.warn('⚠️  Both email and Telegram failed, but accepting the submission anyway');
      // Log the message data for debugging
      console.log('Message data:', validatedData);
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully!',
        success: true,
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
