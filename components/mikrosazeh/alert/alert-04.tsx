"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PartyPopper } from "lucide-react";

export default function Alert04() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto px-4 sm:px-0"
            dir="rtl"
        >
            <div
                className={cn(
                    "relative overflow-hidden group",
                    "bg-linear-to-b from-violet-50 to-white",
                    "dark:from-violet-950/20 dark:to-zinc-950",
                    "border border-violet-100 dark:border-violet-900/50",
                    "shadow-[0_8px_30px_rgb(139,92,246,0.04)]",
                    "rounded-2xl p-4 sm:p-5"
                )}
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ rotate: 15, scale: 0.5 }}
                        animate={{ rotate: 0, scale: 1 }}
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                        }}
                    >
                        <div
                            className={cn(
                                "p-3 rounded-2xl shadow-lg shadow-violet-500/20",
                                "bg-linear-to-br from-fuchsia-500 via-violet-500 to-indigo-500",
                                "dark:from-fuchsia-600 dark:via-violet-600 dark:to-indigo-600"
                            )}
                        >
                            <PartyPopper className="h-6 w-6 text-white" />
                        </div>
                    </motion.div>

                    <div className="space-y-1.5 flex-1">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className={cn(
                                "font-bold text-lg leading-none",
                                "text-violet-900 dark:text-violet-100"
                            )}
                        >
                            یک دستاورد فوق‌العاده! 🎉
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className={cn(
                                "text-[13px] sm:text-sm leading-relaxed",
                                "text-violet-600/80 dark:text-violet-300/80"
                            )}
                        >
                            تبریک می‌گوییم! شما به تازگی از مرز ۱,۰۰۰ دنبال‌کننده عبور کردید.
                        </motion.p>
                    </div>
                </div>

                <div className="hidden sm:block absolute top-5 left-5">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: 0.3,
                        }}
                        className={cn(
                            "text-[10px] uppercase tracking-wider font-bold",
                            "px-3 py-1 rounded-lg",
                            "bg-violet-500/10 dark:bg-violet-400/10",
                            "text-violet-600 dark:text-violet-300",
                            "ring-1 ring-violet-500/20 dark:ring-violet-400/20"
                        )}
                    >
                        نقطه عطف
                    </motion.div>
                </div>

                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-violet-500/5 dark:bg-violet-400/5 blur-2xl group-hover:bg-violet-500/10 transition-colors" />
            </div>
        </motion.div>
    );
}