/**
 * Root Layout Component
 *
 * Developed by Samarth Shukla
 * Portfolio Website - samarthshukla.vercel.app
 *
 * This layout component wraps the entire application and provides:
 * - Theme provider for dark/light mode
 * - Smooth scrolling with Lenis
 * - Particle background animations
 * - Navigation and footer components
 * - View transitions for smooth page changes
 */

// import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
// import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import HeroAsteroids from '@/components/common/HeroAsteroids';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import ParticleBackground from '@/components/common/ParticleBackground';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/assets/image.png" type="image/png" />
          <link rel="shortcut icon" href="/assets/image.png" type="image/png" />
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <ParticleBackground />
              <HeroAsteroids />
              <Navbar />
              {children}
              <OnekoCat />
              <Quote />
              <Footer />
              {/* <ChatBubble /> */}
              {/* <UmamiAnalytics /> */}
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
