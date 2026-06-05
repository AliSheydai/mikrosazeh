"use client";

import type React from "react";

import TailwindCSS from "@/components/icons/tailwindcss";
import { motion } from "motion/react";
import Threads from "../react-bits/Threads";

import {
  PlaneTakeoff,
  BarChart2,
  Video,
  AudioLines,
  Globe,
  Diamond,
  Sparkles,
  Code,
  Layers,
} from "lucide-react";


import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "./feature-block";



interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
}

export function HeroSection() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="relative w-screen min-h-screen py-12 md:py-16 lg:py-20">
      <div className="absolute z-0 top-0 left-0 w-full h-full">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>
      <div className="container mx-auto px-4 h-screen relative z-10 w-full flex items-center justify-center">
        <div className="w-[90%] lg:w-[80%] xl:w-[75%] flex flex-col items-end text-center space-y-8 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100 text-center">
              با ظرافت طراحی کنید و با سهولت پیاده‌سازی کنید.
            </h1>
            <p className="mt-6 text-base text-center md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
              مجموعه‌ای گزیده از بیش از{" "}
              <span className="font-semibold">۱۰۰ کامپوننت حرفه‌ای</span> UI
              ساخته‌شده با
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
                {" "}
                Tailwind CSS
              </span>
              و
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
                {" "}
                shadcn/ui{" "}
              </span>
              برای برنامه‌های مدرن React و Next.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center w-full pointer-events-auto">
            <span
              dir="rtl"
              className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 flex items-center gap-2 justify-start">
              <TailwindCSS className="w-4 h-4" />
              <span className="flex items-center gap-1.5">
                اکنون برای Tailwind CSS 4.0 به‌روز شده است!
                <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                  جدید
                  <Sparkles className="h-3 w-3 mr-1" />
                </span>
              </span>
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 pointer-events-auto">
              <BrowseComponentsButton href="/docs/components/ai-input" />
              <BrowseBlocksButton />
            </div>
          </motion.div>

          <div className="flex justify-center items-center w-full pointer-events-auto">
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
}
