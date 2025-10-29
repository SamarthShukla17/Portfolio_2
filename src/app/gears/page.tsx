import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { devices } from '@/config/Gears';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/gears'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function GearsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Gears
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My gears and tools i use to get my work done.
          </p>
        </div>
        <Separator />

        {/* Devices Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Devices</h2>
          <div className="flex flex-col flex-wrap gap-4">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                  {device.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm text-secondary">{device.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
