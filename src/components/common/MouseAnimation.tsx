'use client';

import React from 'react';

export default function MouseAnimation() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Mouse Icon */}
      <div className="relative group">
        {/* Mouse Body */}
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500 dark:group-hover:border-blue-400">
          {/* Scroll Wheel */}
          <div className="w-1.5 h-3 bg-slate-600 dark:bg-slate-400 rounded-full mt-2 animate-pulse group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" />
        </div>

        {/* Mouse Cable */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </div>

      {/* Scroll Text */}
      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium animate-pulse group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        Scroll to explore
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1 mt-2">
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
