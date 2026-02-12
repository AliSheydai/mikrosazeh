"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { User, Plus, Minus, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_TEAM_SIZE = 4;

const animations = {
    container: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    },
    avatar: {
        initial: { opacity: 0, scale: 0.5, x: 20 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
        exit: { opacity: 0, scale: 0.5, x: -20, transition: { duration: 0.2 } },
    },
} as const;

// رنگ‌های مختلف برای آیکون‌ها جهت تنوع بصری
const iconColors = [
    "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
    "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
];

export default function Input09() {
    const [peopleCount, setPeopleCount] = useState(1);
    const [isVibrating, setIsVibrating] = useState(false);

    function handleIncrement(e: React.MouseEvent) {
        e.preventDefault();
        if (peopleCount < MAX_TEAM_SIZE) setPeopleCount(peopleCount + 1);
        else triggerVibration();
    }

    function handleDecrement(e: React.MouseEvent) {
        e.preventDefault();
        if (peopleCount > 1) setPeopleCount(peopleCount - 1);
        else triggerVibration();
    }

    function triggerVibration() {
        setIsVibrating(true);
        setTimeout(() => setIsVibrating(false), 300);
    }

    function renderAvatars() {
        return Array.from({ length: peopleCount }, (_, i) => (
            <motion.div
                key={i}
                variants={animations.avatar}
                initial="initial"
                animate="animate"
                exit="exit"
                className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 shadow-sm",
                    iconColors[i % iconColors.length]
                )}
                style={{
                    zIndex: peopleCount - i,
                    marginRight: i === 0 ? 0 : -20,
                }}
            >
                <User size={32} strokeWidth={2.5} />
            </motion.div>
        ));
    }

    return (
        <motion.div
            variants={animations.container}
            initial="initial"
            animate="animate"
            className="flex w-full flex-col items-center justify-center gap-10 p-8"
            dir="rtl"
        >
            <div className="flex flex-col items-center gap-3">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Users className="text-zinc-600 dark:text-zinc-400" size={20} />
                </div>
                <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                    مدیریت اعضای تیم
                </span>
            </div>

            {/* بخش نمایش آیکون‌ها */}
            <div className="relative h-20 w-full flex justify-center items-center">
                <AnimatePresence mode="popLayout">
                    {renderAvatars()}
                </AnimatePresence>
            </div>

            {/* کنترلرها */}
            <motion.div
                animate={isVibrating ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-6 bg-zinc-50 dark:bg-zinc-900/50 p-2 rounded-full border border-zinc-200 dark:border-zinc-800"
            >
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:text-red-500 transition-all border border-zinc-200 dark:border-zinc-800"
                    aria-label="کاهش"
                >
                    <Minus size={20} />
                </button>

                <div className="flex flex-col items-center min-w-10">
                    <motion.span
                        key={peopleCount}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
                    >
                        {peopleCount}
                    </motion.span>
                </div>

                <button
                    type="button"
                    onClick={handleIncrement}
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:text-indigo-500 transition-all border border-zinc-200 dark:border-zinc-800"
                    aria-label="افزایش"
                >
                    <Plus size={20} />
                </button>
            </motion.div>

            {/* هشدار ظرفیت */}
            <div className="h-4">
                <AnimatePresence>
                    {peopleCount === MAX_TEAM_SIZE && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs font-medium text-amber-600 dark:text-amber-500"
                        >
                            تکمیل ظرفیت (حداکثر {MAX_TEAM_SIZE} نفر)
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}