"use client";

import type React from "react";

import Link from "next/link";
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
import { Btn14 } from "../mikrosazeh/button/btn-14";
import Btn03 from "../mikrosazeh/button/btn-03";
import Input09 from "../mikrosazeh/input/input-09";
import AIInput_04 from "../mikrosazeh/ai-input/ai-input-04";

import Card08 from "../mikrosazeh/card/card-08";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "./feature-block";

import Card02 from "../mikrosazeh/card/card-02";
import Stepper, { Step } from "../react-bits/Stepper";
import Btn02 from "../mikrosazeh/button/btn-02";
import Btn15 from "../mikrosazeh/button/btn-15";
import Btn04 from "../mikrosazeh/button/btn-04";

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
      {/* Left side - Title and CTA */}
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
              <BrowseComponentsButton href="/docs/components/ai-input"/>
              <BrowseBlocksButton />
            </div>
          </motion.div>

          <div className="flex justify-center items-center w-full pointer-events-auto">
            <Features />
          </div>
        </div>
      </div>

      {/* Right side - Components Layout */}
      {/* <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center ">
            
            <div className="w-full grid grid-cols-1 gap-6">
              <div className="w-full">
                <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                  دکمه‌ها
                </span>
                <div className="w-full h-64 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-5">
                  <Link href="/docs/components/button">
                    <Btn14 label="مشاهده" className=" w-42 py-5" />
                  </Link>
                  <Link href="/docs/components/button">
                    <Btn04 className="w-42 py-3" />
                  </Link>
                  <Link href="/docs/components/button">
                    <Btn15 className=" w-42 py-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[600px] bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              کامپوننت‌ها
            </span>

            <Card02 />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full">
          
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("همه مراحل انجام شد!")}
            backButtonText="قبلی"
            nextButtonText="بعدی">
            <Step>
              <h2>به میکروسازه خوش آمدید!</h2>
              <p>مرحله بعدی رو بررسی کنید.</p>
            </Step>
            <Step>
              <h2>مرحله 2</h2>
              <p>محتوای این مرحله رو شخصی سازی کنید.</p>
            </Step>
            <Step>
              <h2>میتونی یک اینپوت داشته باشی.</h2>
            </Step>
            <Step>
              <h2>مرحله اخر</h2>
              <p>تمام!</p>
            </Step>
          </Stepper>
        </motion.div>
      </div> */}
    </div>
  );
}
