"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { MultimodalInput } from "./multimodal-input";

export default function AiChat() {
    return (
        /* اضافه شدن dir="rtl" برای راست‌چین شدن کل صفحه */
        <div dir="rtl" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black dark:from-black dark:via-zinc-800/40 dark:to-black px-4 font-sans">
            <div className="w-full p-4 flex flex-col items-center justify-center h-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className={cn("text-center mb-10", "opacity-100 scale-100")}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-clip-text bg-gradient-to-b from-white to-white/70 text-transparent">
                        خوش آمدی مسافر
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400">
                        امروز چطور می‌توانم به شما کمک کنم؟
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className={cn(
                        "w-full rounded-2xl relative overflow-hidden",
                        "h-0 overflow-hidden" // این کلاس بر اساس کد اصلی شما ارتفاع را صفر نگه می‌دارد
                    )}
                >
                    <div className="relative p-6">
                        <div className="flex flex-col gap-4">
                            {/* پیام‌ها در اینجا قرار می‌گیرند */}
                        </div>
                        <div className="shrink-0 min-w-[24px] min-h-[24px]" />
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-3xl px-4 md:px-0 mt-6"
                >
                    <div className="relative backdrop-blur-xl rounded-xl">
                        <MultimodalInput />
                    </div>
                </motion.form>
            </div>
        </div>
    );
}