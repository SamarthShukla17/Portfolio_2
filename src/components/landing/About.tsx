import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container id="about" className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />

      {/* Modern About Section */}
      <div className="mt-12 md:mt-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Modern image container with effects */}
              <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-200 bg-slate-100 dark:bg-slate-800 p-0.3 border border-slate-200 dark:border-slate-700 shadow-md">
                <Image
                  src="/assets/image.png"
                  alt="About"
                  width={300}
                  height={300}
                  className="rounded-xl border-2 border-white dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
            <div className="space-y-6 md:space-y-8">
            {/* Name */}
            <div>
              <h3 className="text-3xl md:text-5xl font-light text-slate-900 dark:text-slate-100 tracking-tight">
                {about.name}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {about.description}
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full" />
                <h4 className="text-xl font-medium text-slate-700 dark:text-slate-300 tracking-tight">Technical Skills</h4>
              </div>

              {/* Minimal Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {mySkills.map((skill) => (
                  <Tooltip key={skill.key}>
                    <TooltipTrigger asChild>
                      <div className="group relative p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer flex items-center justify-center">
                        <div className="w-8 h-8 transition-transform duration-200 [&>svg]:w-full [&>svg]:h-full">
                          {skill}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-slate-900/95 dark:bg-slate-100/95 text-white dark:text-slate-900 border-slate-700/50 dark:border-slate-300/50">
                      {skill.key}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="pt-8">
              <div className="inline-block text-left p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-light text-slate-900 dark:text-slate-50">{mySkills.length}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
