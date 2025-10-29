'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

interface InteractiveSkillsProps {
  skills: Skill[];
}

export default function InteractiveSkills({ skills }: InteractiveSkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSkillHover = (index: number) => {
    setHoveredSkill(index);
  };

  const handleSkillClick = (index: number) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative group cursor-pointer"
            onHoverStart={() => handleSkillHover(index)}
            onHoverEnd={() => setHoveredSkill(null)}
            onClick={() => handleSkillClick(index)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Skill Card */}
            <div className="relative p-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              {/* Skill Icon */}
              <div className="flex justify-center mb-2">
                <div className="text-2xl">{skill.icon}</div>
              </div>

              {/* Skill Name */}
              <div className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </div>

              {/* Progress Bar */}
              <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
                <motion.div
                  className={`h-1 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                />
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0"
                animate={{ opacity: hoveredSkill === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{skills[selectedSkill].icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {skills[selectedSkill].name}
                  </h3>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {skills[selectedSkill].level}% Proficiency
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {skills[selectedSkill].description}
              </p>

              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${skills[selectedSkill].color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skills[selectedSkill].level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
