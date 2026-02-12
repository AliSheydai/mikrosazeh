"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Alert06() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto px-4 sm:px-0"
            dir="rtl"
        >
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-zinc-950 border border-purple-100 dark:border-purple-800/50 shadow-[0_8px_30px_rgb(147,51,234,0.04)] p-1">
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 p-4 bg-white/60 dark:bg-zinc-950/40 rounded-xl backdrop-blur-sm">
                    <div className="shrink-0">
                        <motion.div
                            initial={{ rotate: 15, scale: 0.5 }}
                            animate={{ rotate: 0, scale: 1 }}
                            whileHover={{ rotate: -10, scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                            }}
                            className="rounded-xl bg-linear-to-br from-purple-500 to-indigo-600 p-3 shadow-lg shadow-purple-500/20"
                        >
                            <Sparkles className="h-6 w-6 text-white" />
                        </motion.div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-right">
                        <h3 className="font-bold text-purple-950 dark:text-purple-50 text-lg">
                            جشنواره جمعه سیاه! 🎉
                        </h3>
                        <p className="mt-1 text-sm text-purple-900/70 dark:text-purple-300/80 leading-relaxed line-clamp-2">
                            ۵۰٪ تخفیف روی تمامی اشتراک‌های ویژه. همین حالا از این فرصت محدود استفاده کنید!
                        </p>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                        <button
                            type="button"
                            className={cn(
                                "w-full sm:w-auto px-6 h-11 flex items-center justify-center font-bold text-sm transition-all duration-300",
                                "bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-xl shadow-md shadow-purple-500/20",
                                "dark:bg-purple-500 dark:hover:bg-purple-400"
                            )}
                        >
                            دریافت تخفیف
                        </button>
                    </div>
                </div>
                
                <div className="absolute -left-10 -top-10 h-32 w-32 bg-purple-500/10 dark:bg-purple-500/5 blur-3xl rounded-full" />
            </div>
        </motion.div>
    );
}