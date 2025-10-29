/**
 * ParticleBackground Component
 *
 * Developed by Samarth Shukla
 *
 * Custom constellation particle system with twinkling stars, constellation lines,
 * and dynamic color effects. Creates an immersive space-themed background.
 */

'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  glowIntensity: number;
  twinklePhase: number;
  constellation: number; // Group stars into constellations
}

interface Constellation {
  stars: Star[];
  connections: { from: number; to: number }[];
  color: string;
  opacity: number;
}


export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const constellationsRef = useRef<Constellation[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create constellations
    const createConstellations = () => {
      const constellations: Constellation[] = [];
      const stars: Star[] = [];

      // Define constellation colors
      const constellationColors = [
        '#4A90E2', // Blue
        '#7B68EE', // Medium Slate Blue
        '#FF6B6B', // Coral
        '#4ECDC4', // Turquoise
        '#45B7D1', // Sky Blue
        '#96CEB4', // Mint Green
        '#FFEAA7', // Soft Yellow
        '#DDA0DD', // Plum
      ];

      // Create 4-6 constellations
      const numConstellations = 5;

      for (let c = 0; c < numConstellations; c++) {
        const constellationStars: Star[] = [];
        const numStars = Math.floor(Math.random() * 8) + 4; // 4-12 stars per constellation

        // Create stars for this constellation
        for (let i = 0; i < numStars; i++) {
          const star: Star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5, // Small stars
            opacity: Math.random() * 0.8 + 0.2,
            color: constellationColors[c],
            glowIntensity: Math.random() * 0.5 + 0.3,
            twinklePhase: Math.random() * Math.PI * 2,
            constellation: c,
          };

          constellationStars.push(star);
          stars.push(star);
        }

        // Create connections between nearby stars in the same constellation
        const connections: { from: number; to: number }[] = [];
        for (let i = 0; i < constellationStars.length; i++) {
          for (let j = i + 1; j < constellationStars.length; j++) {
            const dx = constellationStars[i].x - constellationStars[j].x;
            const dy = constellationStars[i].y - constellationStars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connect stars that are close enough
            if (distance < 150 && Math.random() > 0.7) {
              connections.push({ from: i, to: j });
            }
          }
        }

        constellations.push({
          stars: constellationStars,
          connections,
          color: constellationColors[c],
          opacity: Math.random() * 0.3 + 0.1,
        });
      }

      starsRef.current = stars;
      constellationsRef.current = constellations;
    };

    createConstellations();

    // Scroll-based reveal
    let scrollProgress = 0;
    const handleScroll = () => {
      scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = Math.min(scrollProgress, 1);
    };

    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.016; // ~60fps

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellations
      constellationsRef.current.forEach((constellation, constellationIndex) => {
        // Draw connections first (behind stars)
        ctx.strokeStyle = constellation.color;
        ctx.lineWidth = 0.5;

        constellation.connections.forEach(connection => {
          const fromStar = constellation.stars[connection.from];
          const toStar = constellation.stars[connection.to];

          if (fromStar && toStar) {
            // Fade connections based on scroll and time
            const baseOpacity = constellation.opacity * (0.3 + scrollProgress * 0.7);
            const timeGlow = Math.sin(timeRef.current * 0.5 + constellationIndex) * 0.2 + 0.8;

            ctx.globalAlpha = baseOpacity * timeGlow;
            ctx.beginPath();
            ctx.moveTo(fromStar.x, fromStar.y);
            ctx.lineTo(toStar.x, toStar.y);
            ctx.stroke();
          }
        });

        // Draw stars
        constellation.stars.forEach(star => {
          // Twinkle effect
          const twinkle = Math.sin(timeRef.current * 2 + star.twinklePhase) * 0.3 + 0.7;
          const glow = Math.sin(timeRef.current * 0.8 + star.twinklePhase * 2) * 0.2 + 0.8;

          // Scroll-based reveal
          const revealOpacity = scrollProgress * 0.8 + 0.2;

          // Draw glow
          ctx.globalAlpha = star.opacity * glow * revealOpacity * 0.3;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Draw star core
          ctx.globalAlpha = star.opacity * twinkle * revealOpacity;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw bright center
          ctx.globalAlpha = star.opacity * twinkle * revealOpacity * 0.8;
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
