/**
 * HeroAsteroids Component
 *
 * Developed by Samarth Shukla
 *
 * Custom asteroid animation system with dust trails for the hero section.
 * Features minimal asteroids with dynamic colors and smooth animations.
 */

'use client';

import React, { useEffect, useRef } from 'react';

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  dustTrail: { x: number; y: number; opacity: number; size: number; color: string }[];
  life: number;
  maxLife: number;
}

export default function HeroAsteroids() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create asteroids
    const createAsteroids = () => {
      const asteroids: Asteroid[] = [];
      const numAsteroids = 1; // Only 1 asteroid at a time for minimal effect

      // Define asteroid colors (same as background particles)
      const asteroidColors = [
        '#4A90E2', // Blue
        '#7B68EE', // Medium Slate Blue
        '#FF6B6B', // Coral
        '#4ECDC4', // Turquoise
        '#45B7D1', // Sky Blue
        '#96CEB4', // Mint Green
        '#FFEAA7', // Soft Yellow
        '#DDA0DD', // Plum
      ];

      for (let i = 0; i < numAsteroids; i++) {
        // Create asteroid spread across screen
        const startX = -80; // Fixed X position from left
        const startY = canvas.height / 2; // Center of screen for single asteroid

        // All asteroids move to the same end point for parallel movement
        const endX = canvas.width + 100;
        const endY = canvas.height + 100;

        // Calculate velocity for parallel diagonal movement
        const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        const speed = 5.0 + Math.random() * 5.0; // Very fast speed between 5.0-10.0
        const vx = ((endX - startX) / distance) * speed;
        const vy = ((endY - startY) / distance) * speed;

        const asteroid: Asteroid = {
          x: startX,
          y: startY,
          vx: vx,
          vy: vy,
          size: 0.2 + Math.random() * 0.6, // Slightly larger size between 0.2-0.8 for visibility behind card
          opacity: 0.95 + Math.random() * 0.05, // Maximum opacity between 0.95-1.0
          color: asteroidColors[Math.floor(Math.random() * asteroidColors.length)], // Random color from palette
          dustTrail: [],
          life: 0,
          maxLife: Math.floor(distance / speed) + 200, // Life based on travel distance
        };

        // Add random delay so asteroids don't all start at once
        setTimeout(() => {
          asteroidsRef.current.push(asteroid);
        }, Math.random() * 6000); // Random delay between 0-6 seconds (rare initial appearance)
      }

      asteroidsRef.current = asteroids;
    };

    createAsteroids();


    // Continuous asteroid generation (rare) with distance constraint
    const generateNewAsteroid = () => {
      // Check if we already have maximum asteroids
      if (asteroidsRef.current.length >= 1) {
        return; // Don't generate more than 1 asteroid
      }

      // Define asteroid colors (same as background particles)
      const asteroidColors = [
        '#4A90E2', // Blue
        '#7B68EE', // Medium Slate Blue
        '#FF6B6B', // Coral
        '#4ECDC4', // Turquoise
        '#45B7D1', // Sky Blue
        '#96CEB4', // Mint Green
        '#FFEAA7', // Soft Yellow
        '#DDA0DD', // Plum
      ];

      // Create asteroid spread across screen
      const startX = -80; // Fixed X position from left
      const startY = Math.random() * canvas.height; // Random Y position across screen

      // Parallel diagonal movement to bottom-right
      const endX = canvas.width + 100;
      const endY = canvas.height + 100;

      // Calculate velocity for parallel diagonal movement
      const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
      const speed = 5.0 + Math.random() * 5.0; // Very fast speed between 5.0-10.0
      const vx = ((endX - startX) / distance) * speed;
      const vy = ((endY - startY) / distance) * speed;

      const asteroid: Asteroid = {
        x: startX,
        y: startY,
        vx: vx,
        vy: vy,
        size: 0.2 + Math.random() * 0.6, // Slightly larger size between 0.2-0.8 for visibility behind card
        opacity: 0.95 + Math.random() * 0.05, // Maximum opacity between 0.95-1.0
        color: asteroidColors[Math.floor(Math.random() * asteroidColors.length)], // Random color from palette
        dustTrail: [],
        life: 0,
        maxLife: Math.floor(distance / speed) + 200, // Life based on travel distance
      };

      // Add random delay for staggered appearance
      setTimeout(() => {
        asteroidsRef.current.push(asteroid);
      }, Math.random() * 8000); // Random delay between 0-8 seconds (very rare)
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 0.016; // ~60fps

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate new asteroids rarely (max 1 at a time)
      if (Math.random() < 0.001 && asteroidsRef.current.length < 1) { // 0.1% chance per frame, max 1 asteroid
        generateNewAsteroid();
      }

      // Update and draw asteroids
      asteroidsRef.current.forEach((asteroid, index) => {
        // Update position
        asteroid.x += asteroid.vx;
        asteroid.y += asteroid.vy;
        asteroid.life++;

            // Add ultra-clean dust particles to trail with sparkle effects
            if (asteroid.life % 1 === 0) { // Add dust every frame
              // Add minimal dust particles for fast rendering
              for (let j = 0; j < 6; j++) {
                asteroid.dustTrail.push({
                  x: asteroid.x + (Math.random() - 0.5) * 3, // Minimal spread for ultra-clean trails
                  y: asteroid.y + (Math.random() - 0.5) * 3,
                  opacity: asteroid.opacity * (0.8 + Math.random() * 0.15), // Higher opacity for cleaner visibility
                  size: Math.random() * 0.4 + 0.1, // Slightly larger dust particles for visibility behind card
                  color: asteroid.color, // Use asteroid's color for dust particles
                });
              }

              // Add sparkle particles occasionally (reduced for speed)
              if (Math.random() < 0.3) { // 30% chance for sparkle (reduced for speed)
                for (let k = 0; k < 2; k++) {
                  asteroid.dustTrail.push({
                    x: asteroid.x + (Math.random() - 0.5) * 6, // Smaller spread for cleaner sparkles
                    y: asteroid.y + (Math.random() - 0.5) * 6,
                    opacity: asteroid.opacity * (0.98 + Math.random() * 0.02), // Maximum opacity for sparkles
                    size: Math.random() * 0.3 + 0.15, // Slightly larger sparkles for visibility behind card
                    color: asteroid.color, // Use asteroid's color for sparkles
                  });
                }
              }
            }

        // Update dust trail - Ultra-clean fade for refined effect
        asteroid.dustTrail.forEach((dust, dustIndex) => {
          dust.opacity -= 0.005; // Faster fade for ultra-clean trails
          dust.size -= 0.002; // Faster shrink for ultra-clean trails

          // Remove old dust
          if (dust.opacity <= 0 || dust.size <= 0) {
            asteroid.dustTrail.splice(dustIndex, 1);
          }
        });

        // Keep trail length for fast rendering
        if (asteroid.dustTrail.length > 150) {
          asteroid.dustTrail.shift();
        }

        // Respawn asteroid if it reaches bottom-right or has been alive too long
        if (asteroid.life > asteroid.maxLife || asteroid.x > canvas.width + 50 || asteroid.y > canvas.height + 50) {
          // Remove asteroid instead of respawning (continuous generation handles new ones)
          const asteroidIndex = asteroidsRef.current.indexOf(asteroid);
          asteroidsRef.current.splice(asteroidIndex, 1);
        }

        // Draw ultra-clean dust trail first (behind asteroid) with random color effects
        asteroid.dustTrail.forEach((dust, index) => {
          // Create subtle twinkling effect for ultra-clean dust
          const twinkle = Math.sin(timeRef.current * 2 + index * 0.3) * 0.2 + 0.8;

          // Determine if this is a sparkle particle (smaller, brighter)
          const isSparkle = dust.size < 0.3 && dust.opacity > 0.95;
          const sparkleIntensity = isSparkle ? 2.5 : 1;

          // Convert hex color to RGB for gradient
          const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          };

          const rgb = hexToRgb(dust.color);
          if (rgb) {
            // Create refined gradient effect using asteroid's color
            const gradient = ctx.createRadialGradient(dust.x, dust.y, 0, dust.x, dust.y, dust.size * 1.5);

            gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${dust.opacity * twinkle * sparkleIntensity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${dust.opacity * twinkle * sparkleIntensity * 0.6})`);
            gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${dust.opacity * twinkle * sparkleIntensity * 0.2})`);

            ctx.globalAlpha = 1;
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
            ctx.fill();

            // Add refined glow using asteroid's color
            if (isSparkle) {
              ctx.globalAlpha = dust.opacity * twinkle * 0.5;
              ctx.fillStyle = dust.color;
              ctx.beginPath();
              ctx.arc(dust.x, dust.y, dust.size * 2, 0, Math.PI * 2);
              ctx.fill();

              ctx.globalAlpha = dust.opacity * twinkle * 0.3;
              ctx.fillStyle = dust.color;
              ctx.beginPath();
              ctx.arc(dust.x, dust.y, dust.size * 1.5, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.globalAlpha = dust.opacity * twinkle * 0.3;
              ctx.fillStyle = dust.color;
              ctx.beginPath();
              ctx.arc(dust.x, dust.y, dust.size * 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });

        // Draw ultra-clean asteroid with random color effect
        const glowPulse = Math.sin(timeRef.current * 1.5 + index) * 0.2 + 0.8;
        const twinkle = Math.sin(timeRef.current * 3 + index * 0.6) * 0.15 + 0.85;

        // Convert hex color to RGB for gradient
        const hexToRgb = (hex: string) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        };

        const rgb = hexToRgb(asteroid.color);
        if (rgb) {
          // Draw asteroid outer glow with random color
          ctx.globalAlpha = asteroid.opacity * glowPulse * 0.3;
          ctx.fillStyle = asteroid.color;
          ctx.beginPath();
          ctx.arc(asteroid.x, asteroid.y, asteroid.size * 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.globalAlpha = asteroid.opacity * glowPulse * 0.2;
          ctx.fillStyle = asteroid.color;
          ctx.beginPath();
          ctx.arc(asteroid.x, asteroid.y, asteroid.size * 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Draw asteroid core with refined twinkling
          ctx.globalAlpha = asteroid.opacity * glowPulse * twinkle;
          ctx.fillStyle = asteroid.color;
          ctx.beginPath();
          ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw refined twinkling center
          ctx.globalAlpha = asteroid.opacity * glowPulse * twinkle;
          ctx.fillStyle = asteroid.color;
          ctx.beginPath();
          ctx.arc(asteroid.x, asteroid.y, asteroid.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
