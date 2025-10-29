import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { resumeConfig } from '@/config/Resume';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My resume and professional experience.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900">
            <iframe
              src={resumeConfig.url}
              className="w-full min-h-[900px]"
              title="Resume PDF"
              allow="fullscreen"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={resumeConfig.url}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
