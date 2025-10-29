/**
 * Footer Component
 * @author Samarth Shukla
 * Displays footer with developer attribution
 */
import React from 'react';

import Container from './Container';
import { footerConfig } from '@/config/Footer';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-secondary text-center">
          {footerConfig.text} <b>{footerConfig.developer}</b>
        </p>
      </div>
    </Container>
  );
}
