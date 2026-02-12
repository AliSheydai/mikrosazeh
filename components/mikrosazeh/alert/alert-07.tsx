"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Clock } from "lucide-react";

export default function Alert07() {
    return (
        <div className="w-full max-w-sm mx-auto p-4" dir="rtl">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                    "relative overflow-hidden p-8",
                    "bg-white dark:bg-zinc-950",
                    "border border-zinc-200 dark:border-zinc-800",
                    "rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none",
                    "flex flex-col items-center gap-6"
                )}
            >
                {/* Visual Icon */}
                <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full" />
                    <div className="relative bg-amber-50 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/50">
                        <Clock className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                        پایان دوره رایگان
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[200px] mx-auto">
                        زمان استفاده رایگان شما به پایان رسید. برای دسترسی نامحدود، اشتراک خود را تهیه کنید.
                    </p>
                </div>

                {/* Action */}
                <Button
                    type="button"
                    className={cn(
                        "w-full relative group overflow-hidden h-12 rounded-xl transition-all duration-300 active:scale-95",
                        "bg-zinc-900 hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-500",
                        "text-white shadow-xl shadow-zinc-200 dark:shadow-blue-900/20"
                    )}
                >
                    <span className="relative z-10 font-bold text-sm">
                        خرید اشتراک ویژه
                    </span>
                    
                    {/* Animated Shine Effect */}
                    <motion.div 
                        animate={{ 
                            left: ['-100%', '200%'] 
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: 1
                        }}
                        className="absolute top-0 h-full w-12 bg-white/20 skew-x-12 blur-sm"
                    />
                </Button>

                {/* Decoration */}
                <div className="absolute -bottom-12 -right-12 h-24 w-24 bg-zinc-100 dark:bg-zinc-900 rounded-full" />
            </motion.div>
        </div>
    );
}