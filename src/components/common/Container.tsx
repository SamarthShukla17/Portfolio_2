/**
 * Container Component
 * @author Samarth Shukla
 * Wrapper component for consistent page layout with support for id prop
 */
import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={`container mx-auto max-w-3xl px-4 animate-fade-in-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
