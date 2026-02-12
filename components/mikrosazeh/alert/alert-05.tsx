"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CircleDollarSign } from "lucide-react";

export default function Alert05() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto px-4"
            dir="rtl"
        >
            <div
                className={cn(
                    "relative overflow-hidden group",
                    "bg-linear-to-br from-indigo-50 via-white to-violet-50",
                    "dark:from-indigo-950/40 dark:via-zinc-950 dark:to-violet-950/40",
                    "border border-indigo-200/60 dark:border-indigo-800/50",
                    "shadow-[0_10px_40px_rgba(79,70,229,0.1)] dark:shadow-none",
                    "p-5 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                )}
            >
                <div className="flex items-center gap-5">
                    <motion.div
                        initial={{ scale: 0.5, rotate: -15 }}
                        animate={{ scale: 1, rotate: -3 }}
                        whileHover={{ rotate: 0, scale: 1.05 }}
                        className="shrink-0"
                    >
                        <div
                            className={cn(
                                "w-14 h-14 rounded-2xl",
                                "bg-linear-to-br from-indigo-500 to-violet-600",
                                "flex items-center justify-center",
                                "shadow-lg shadow-indigo-500/30 ring-4 ring-white dark:ring-zinc-900"
                            )}
                        >
                            <CircleDollarSign className="h-7 w-7 text-white" />
                        </div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="space-y-1"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-base font-bold text-indigo-950 dark:text-indigo-50">
                                    پرداخت دریافت شد
                                </h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-black bg-indigo-600 text-white dark:bg-indigo-500 shadow-sm">
                                    ۲,۴۰۰,۰۰۰ تومان
                                </span>
                            </div>
                            <p className="text-[13px] leading-relaxed text-indigo-700/80 dark:text-indigo-300/70 font-medium">
                                مبلغ مورد نظر پردازش و به موجودی حساب شما افزوده شد.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
            </div>
        </motion.div>
    );
}