import { Sparkles } from "lucide-react";

export function TechnologyBadges() {
  return (
    <div className="flex items-center justify-center">
      <div
        dir="rtl"
        className="flex flex-col sm:flex-row justify-center my-8 sm:my-24 gap-4 font-[vazirmatn,system-ui] px-12 md:px-8 w-full max-w-4xl">
        {/* Badge 1: Next.js & Tailwind */}
        <div
          className="flex items-center justify-center px-4 py-2 rounded-full text-sm 
        bg-linear-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800
        border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 font-medium">
            ساخته شده با Next.js 16 و Tailwind CSS
          </span>
          <Sparkles className="w-4 h-4 text-emerald-500 mr-2" />
        </div>

        {/* Badge 2: Shadcn & Framer Motion */}
        <div
          className="flex justify-center items-center px-4 py-2 rounded-full text-sm 
        bg-linear-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30
        border border-orange-200 dark:border-orange-800/30 shadow-sm">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-800 to-orange-600 dark:from-orange-200 dark:to-orange-400 font-medium">
            سازگار با shadcn/ui و Framer Motion
          </span>
          <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
        </div>
      </div>
    </div>
  );
}
