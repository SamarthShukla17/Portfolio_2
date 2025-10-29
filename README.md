# Samarth Shukla - Portfolio Website

> A modern, responsive portfolio website developed by Samarth Shukla using Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. Features a fully custom blog system, project showcase, work experience timeline, contact form with Telegram integration, and Spotify now-playing widget.

![Portfolio Preview](/public/meta/opengraph-image.png)

**Live Site**: [samarthshukla.vercel.app](https://samarthshukla.vercel.app)

---

**Note**: This portfolio is developed and maintained by Samarth Shukla. All code, design, and implementation choices are original work.

## ✨ Features

- **Next.js 15** with App Router and Turbopack
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Dark/Light** mode with smooth transitions
- **Responsive** design for all devices
- **MDX** for blog posts and project details
- **Contact Form** with Telegram integration
- **Spotify Integration** to showcase music taste
- **AI Chat** with Gemini API
- **SEO** optimized with metadata
- **TypeScript** for type safety
- **Umami Analytics** for privacy-focused web analytics
- **Interactive Animations** with Framer Motion
- **Oneko Cat** that follows your cursor
- **Particle Background** with constellations and twinkling stars

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- Bun (preferred) or npm

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Telegram Integration
TELEGRAM_BOT_TOKEN="your-bot-token"
TELEGRAM_CHAT_ID="your-chat-id"

# Gemini AI (for chat functionality)
GEMINI_API_KEY="your-gemini-api-key"

# Environment
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"

# Umami Analytics (optional)
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"

# Spotify Integration (optional)
SPOTIFY_CLIENT_ID="your-spotify-client-id"
SPOTIFY_CLIENT_SECRET="your-spotify-client-secret"
SPOTIFY_REDIRECT_URI="http://localhost:3000/api/spotify/callback"
SPOTIFY_REFRESH_TOKEN="your-refresh-token"
```

### Setting up Telegram Integration

1. Create a new bot with [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token provided
3. Get your chat ID:
   - Message [@userinfobot](https://t.me/userinfobot) and send `/start`
   - Copy your numeric User ID
4. Update your `.env` file with these values
5. Send a message to your bot to initialize it

### Setting up Spotify Integration

1. Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Set redirect URI to: `http://localhost:3000/api/spotify/callback`
4. Copy Client ID and Client Secret
5. Get your refresh token by visiting: `http://localhost:3000/api/spotify/auth`
6. Add all credentials to your `.env` file

### Setting up Umami Analytics

1. Visit [Umami Cloud](https://cloud.umami.is) or self-host Umami
2. Follow Umami's [installation guide](https://umami.is/docs/install)
3. Get your website ID and script URL
4. Add to `.env` file:
   ```env
   NEXT_PUBLIC_UMAMI_SRC="https://[your-umami-instance]/script.js"
   NEXT_PUBLIC_UMAMI_ID="your-website-id"
   ```

## 🚀 Getting Started

1. Clone the repository (or download if private):

   ```bash
   git clone <your-repo-url>
   cd sleek-portfolio
   ```

2. Install dependencies:

   ```bash
   # Using bun (recommended)
   bun install

   # Using npm
   npm install
   ```

3. Set up environment variables (see above)

4. Run the development server:

   ```bash
   # Using bun
   bun dev

   # Using npm
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## ⚙️ Customization

This portfolio is configured in the `src/config` directory. Customize the following files:

### Personal Information

- **`Hero.tsx`** - Name, title, skills, description, and social links
- **`About.tsx`** - About section content
- **`Meta.tsx`** - SEO metadata and site configuration

### Content

- **`Navbar.tsx`** - Navigation links
- **`Footer.tsx`** - Footer links and content
- **`Projects.tsx`** - Project showcase settings
- **`Experience.tsx`** - Work experience details
- **`Gears.tsx`** - Setup/gear section
- **`Setup.tsx`** - Development setup information
- **`Resume.ts`** - Resume section details
- **`Spotify.tsx`** - Spotify component configuration
- **`Cat.ts`** - Enable/disable the Oneko cat
- **`Quote.ts`** - Random quotes configuration

## 📝 Adding Content

### Blog Posts

1. Create a new MDX file in `src/data/blog/`
2. Add metadata frontmatter:
   ```mdx
   ---
   title: 'Your Blog Post Title'
   description: 'A brief description'
   date: '2024-03-20'
   tags: ['nextjs', 'react']
   ---

   Your content here...
   ```
3. Add blog thumbnail in `public/blog/`

### Projects

1. Create a new MDX file in `src/data/projects/`
2. Add metadata frontmatter:
   ```mdx
   ---
   title: 'Your Project Title'
   description: 'Project description'
   date: '2024-03-20'
   tags: ['react', 'typescript']
   github: 'https://github.com/...'
   live: 'https://...'
   ---

   Your project details...
   ```
3. Add project thumbnail in `public/project/`

### Adding Technology Icons

1. Visit [Devicon](https://devicon.dev/) to find the icon you want
2. Create a new component in `src/components/technologies/`
3. Follow the existing component structure:

```tsx
export const NewTechIcon = () => {
  return <svg>// SVG content from devicon</svg>;
};
```

## 🗂️ Project Structure

```
sleek-portfolio/
├── public/              # Static assets
│   ├── assets/         # General assets & avatars
│   ├── blog/           # Blog post images
│   ├── company/        # Company logos
│   ├── meta/          # Meta images for SEO
│   ├── project/       # Project thumbnails
│   ├── setup/         # Setup related files
│   └── skills/        # Skill icons
├── src/
│   ├── app/           # Next.js app router pages
│   │   └── api/       # API routes
│   ├── components/    # React components
│   │   ├── blog/     # Blog related components
│   │   ├── common/   # Shared components
│   │   ├── landing/  # Landing page sections
│   │   ├── svgs/     # SVG icons
│   │   ├── technologies/ # Technology icons
│   │   └── ui/       # Shadcn UI components
│   ├── config/       # Configuration files
│   ├── data/         # MDX content
│   │   ├── blog/    # Blog posts
│   │   ├── journey/ # Journey/certificates
│   │   └── projects/ # Project details
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   └── types/        # TypeScript types
├── README.md          # This file
├── CONTRIBUTING.md    # Contribution guidelines
└── LICENSE            # MIT License
```

## 🛠️ Available Scripts

### Development

```bash
# Start development server with Turbopack
npm run dev
# or
bun dev

# Run linter
npm run lint
```

### Production

```bash
# Build for production
npm run build
# or
bun run build

# Start production server
npm run start
# or
bun run start
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to your repository
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically redeploy on every push to the main branch.

### Environment Variables for Production

Make sure to update `NEXT_PUBLIC_URL` with your production URL:

```env
NEXT_PUBLIC_URL="https://your-domain.com"
```

Also update the Spotify redirect URI in your Spotify app settings to your production URL:

```
https://your-domain.com/api/spotify/callback
```

## 🛡️ Privacy & Security

- This is a **private repository** developed by Samarth Shukla
- API keys and secrets are stored in environment variables
- Never commit `.env` files to version control
- Use Vercel's environment variables for production secrets
- All code and design are original work by Samarth Shukla

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Font from [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)

## 📞 Contact

- **Email**: samarthofficial52@gmail.com
- **LinkedIn**: [samarth-shukla-986635379](https://www.linkedin.com/in/samarth-shukla-986635379/)
- **GitHub**: [@SamarthShukla17](https://github.com/SamarthShukla17)
- **Twitter/X**: [@Sam39741](https://x.com/Sam39741)

---

## 👨‍💻 About This Project

This portfolio represents my personal work and showcases my expertise in modern web development. Every component, design decision, and line of code has been carefully crafted to create a unique and professional showcase of my skills.

### Development Timeline

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI with custom modifications
- **Animations**: Framer Motion for interactive elements
- **Content**: MDX for blog posts and projects

### Key Features Implemented

- Custom particle background system with constellations
- Interactive hero section with typewriter effect
- Dynamic Spotify integration via OAuth
- Telegram bot integration for contact form notifications
- AI-powered chat interface using Gemini API
- Fully responsive design with dark/light themes
- SEO optimization with dynamic metadata
- Performance optimization with Turbopack

---

**Developed with ❤️ by Samarth Shukla**

*Portfolio v1.0 - Built with Next.js 15, TypeScript, and Tailwind CSS*
