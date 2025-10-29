'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

export default function Projects() {
  return (
    <Container id="projects" className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      {/* Modern Projects Grid */}
      <div className="mt-16">
        <ProjectList className="mt-8" projects={projects.slice(0, 4)} />

        {/* Modern CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="group px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
          >
            <Link href="/projects" className="flex items-center gap-3">
              <span>Show all projects</span>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full group-hover:scale-150 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
