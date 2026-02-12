"use client";

import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Alert03() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="w-full max-w-sm mx-auto" dir="rtl">
            <div className={cn(
                "relative overflow-hidden rounded-xl border p-3 shadow-sm transition-all animate-in fade-in slide-in-from-top-2",
                "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/40"
            )}>
                <div className="flex items-center justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-2.5">
                        <div className="flex shrink-0 items-center justify-center rounded-full bg-emerald-200/50 dark:bg-emerald-500/20 p-1">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 stroke-[2.5px]" />
                        </div>
                        <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                            با موفقیت در دیتابیس ذخیره شد
                        </p>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="rounded-lg p-1 text-emerald-700/50 hover:bg-emerald-200/50 hover:text-emerald-800 dark:text-emerald-400/50 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300 transition-colors"
                        type="button"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Animated progress bar */}
                <div className="absolute bottom-0 right-0 left-0 h-1 bg-emerald-600/10 dark:bg-emerald-400/10">
                    <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                            duration: 3, 
                            ease: "easeInOut" 
                        }}
                        className="h-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                    />
                </div>
            </div>
        </div>
    );
}