'use client';

import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Container className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl mx-4 my-2">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              className="h-10 w-10 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:scale-105"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navbarConfig.navItems.map((item) => {
              if (item.href.startsWith('#')) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item.href)}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.label}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={navbarConfig.hireButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2.5 overflow-hidden rounded-xl font-semibold text-xs tracking-wide transition-all duration-500 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-100 dark:to-slate-50 text-slate-50 dark:text-slate-900 border border-slate-700/50 dark:border-slate-300/50 hover:border-slate-600/80 dark:hover:border-slate-400/80 shadow-lg hover:shadow-xl shadow-slate-900/10 dark:shadow-slate-50/10 hover:shadow-slate-900/30 dark:hover:shadow-slate-50/30 hover:scale-[1.02]"
          >
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2.5">
              {navbarConfig.hireButton.label}
              <svg className="w-3.5 h-3.5 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>

            {/* Subtle glow effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 dark:from-slate-200 dark:via-slate-300 dark:to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
          </a>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
