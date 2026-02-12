"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";
import Motion from "../icons/motion";

// تعریف داده‌ها برای جلوگیری از تکرار کد
const FEATURES = [
  { id: "TailwindCSS", label: "TailwindCSS", icon: TailwindIcon, color: "text-blue-500" },
  { id: "Motion", label: "Motion", icon: Motion, color: "text-yellow-500" },
  { id: "Shadcn UI", label: "shadcn/ui", icon: ShadcnIcon, color: "text-black dark:text-white" },
  { id: "Next.js", label: "Next.js", icon: Nextjs, color: "text-black dark:text-white" },
  { id: "React", label: "React", icon: ReactIcon, color: "text-black dark:text-white" },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-none flex justify-center items-center z-10 mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-[95%] mx-auto py-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-4 flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* انیمیشن پس‌زمینه (Hover Effect) */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-gray-100 dark:bg-zinc-800/50 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </AnimatePresence>

            {/* بخش آیکون */}
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={cn("w-8 h-8 flex items-center justify-center", feature.color)}
            >
              <feature.icon className="w-full h-full" />
            </motion.div>

            {/* متن */}
            <motion.span
              animate={{
                color: hoveredIndex === index ? "var(--foreground)" : "var(--muted-foreground)",
              }}
              className="text-xs font-medium transition-colors"
            >
              {feature.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// کامپوننت داخلی برای تمیزی کد
function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 33" className={className} fill="currentColor">
      <path
        fill="#38bdf8"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
      />
    </svg>
  );
}