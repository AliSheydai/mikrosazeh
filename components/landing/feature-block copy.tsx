"use client";

import React, { useMemo } from 'react';
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import LogoLoop, { LogoItem } from '../LogoLoop';

// Icons
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";
import Motion from "../icons/motion";

export default function Features() {
  
  // تعریف لوگوها به صورت Node برای حفظ ترکیب آیکون + متن
  const techLogos: LogoItem[] = useMemo(() => [
    {
      title: "TailwindCSS",
      node: (
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 54 33" className="w-8 h-8" role="img">
            <path
              fill="#38bdf8"
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs text-black dark:text-white">TailwindCSS</span>
        </div>
      )
    },
    {
      title: "Motion",
      node: (
        <div className="flex flex-col items-center gap-2">
          <Motion className="text-3xl text-yellow-500 dark:text-[#F5EA1E]" />
          <span className="text-xs text-black dark:text-white">Motion</span>
        </div>
      )
    },
    {
      title: "Shadcn UI",
      node: (
        <div className="flex flex-col items-center gap-2">
          <ShadcnIcon className="w-8 h-8 text-black dark:text-white" />
          <span className="text-xs text-black dark:text-white">shadcn/ui</span>
        </div>
      )
    },
    {
      title: "Next.js",
      node: (
        <div className="flex flex-col items-center gap-2">
          <Nextjs className="w-8 h-8 text-black dark:text-white" />
          <span className="text-xs text-black dark:text-white">Next.js</span>
        </div>
      )
    },
    {
      title: "React",
      node: (
        <div className="flex flex-col items-center gap-2">
          <ReactIcon className="w-8 h-8 text-black dark:text-white" />
          <span className="text-xs text-black dark:text-white">React</span>
        </div>
      )
    }
  ], []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="w-screen text-center py-10 overflow-hidden"
    >
      <LogoLoop
        logos={techLogos}
        speed={160}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
      />
    </motion.div>
  );
}