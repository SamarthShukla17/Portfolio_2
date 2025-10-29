/**
 * ProjectCard Component
 * @author Samarth Shukla
 * Displays project information in a card format with about section embedded
 */
'use client';

import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group h-full w-full overflow-hidden transition-all duration-500 p-0 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-lg hover:shadow-2xl md:hover:scale-105">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />

          {/* Modern overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Maintenance tag - only for Mistry Message */}
          {project.status === 'maintenance' && (
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-blue-500/90 text-white border border-blue-500/50">
                Maintenance
              </div>
            </div>
          )}

          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <button className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:cursor-pointer hover:bg-white/30 hover:scale-110 border border-white/30">
                    <PlayCircle />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0 bg-slate-900/95 backdrop-blur-md">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full object-cover rounded-lg"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-5 md:px-6 py-6">
        <div className="space-y-6">
          {/* Project Header - Title and Icons */}
          <div className="flex items-start justify-between gap-3 md:gap-4">
            <h3 className="text-lg md:text-xl font-bold leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 md:gap-3">
              {project.showWebLink && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className="text-slate-600 dark:text-slate-400 flex size-8 items-center justify-center rounded-lg bg-white/60 dark:bg-slate-700/60 backdrop-blur-md hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
                      href={project.link}
                      target="_blank"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900/95 dark:bg-slate-100/95 text-white dark:text-slate-900">
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className="text-slate-600 dark:text-slate-400 flex size-8 items-center justify-center rounded-lg bg-white/60 dark:bg-slate-700/60 backdrop-blur-md hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900/95 dark:bg-slate-100/95 text-white dark:text-slate-900">
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Simple About Project */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">About</h4>
            <p className="text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-8 hover:scale-125 transition-all duration-300 hover:cursor-pointer rounded-lg bg-white/60 dark:bg-slate-700/60 backdrop-blur-md flex items-center justify-center border border-slate-200/50 dark:border-slate-600/50">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900/95 dark:bg-slate-100/95 text-white dark:text-slate-900">
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {/* No dedicated details page; footer removed */}
    </Card>
  );
}
