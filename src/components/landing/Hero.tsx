'use client';

import React from 'react';
import Image from 'next/image';
import Typewriter from '@/components/common/Typewriter';
import { heroConfig, socialLinks } from '@/config/Hero';

export default function Hero() {
  const typewriterTexts = [
    'Your Friendly Neighbourhood Developer.',
    'A Full Stack web developer.',
    'An Open Source Contributor.',
    'A Front-End Enthusiast.',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Transparent Background */}
      <div className="absolute inset-0">
        {/* Minimal background - completely transparent */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Hello, I&apos;m</p>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-600 dark:text-slate-400 leading-tight tracking-tight">
                Samarth
              </h1>
            </div>

            {/* Dynamic Title */}
            <div className="h-16 flex items-center">
              <div className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium">
                <Typewriter
                  texts={typewriterTexts}
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                  className="font-semibold"
                />
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl">
              <p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: heroConfig.description.template
                    .replace(/\{skills:(\d+)\}/g, (match, index) => heroConfig.skills[parseInt(index)]?.name || match)
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>')
                }}
              />
            </div>

            {/* Social Links - Modern Grid */}
            <div className="grid grid-cols-4 gap-4 max-w-md">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                >
                  <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-200 text-xl">
                    {link.icon}
                  </div>
                  {/* Modern Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900/95 dark:bg-slate-100/95 text-white dark:text-slate-900 text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none backdrop-blur-md shadow-lg">
                    {link.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95 dark:border-t-slate-100/95" />
                  </div>
                </a>
              ))}
            </div>

            {/* Action Buttons - Minimal Premium */}
            <div className="flex flex-col sm:flex-row gap-4">
              {heroConfig.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`group relative px-8 py-4 rounded-lg font-medium transition-all duration-200 tracking-tight ${
                    button.variant === 'default'
                      ? 'bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-sm hover:shadow-md'
                      : 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <span className="relative z-10">{button.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Avatar & Visual Elements */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar Container with Modern Effects */}
              <div className="relative inline-block">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-slate-300 dark:border-slate-600 animate-pulse" />

                {/* Avatar */}
                <Image
                  src={heroConfig.avatar}
                  alt={heroConfig.name}
                  width={256}
                  height={256}
                  className="relative w-64 h-64 rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}