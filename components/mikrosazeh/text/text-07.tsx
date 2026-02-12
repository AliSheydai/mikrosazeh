"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MagneticTextProps {
    text?: string;
    className?: string;
}

export default function Text_06({
    text = "خلاقیت بی‌مرز",
    className = "",
}: MagneticTextProps) {
    // تقسیم متن به حروف برای کنترل جداگانه
    const letters = text.split("");

    const containerVariants = {
        initial: {},
        hover: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        initial: { 
            y: 0, 
            color: "currentColor" 
        },
        animate: (i: number) => ({
            y: [0, -10, 0],
            transition: {
                delay: i * 0.1,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        }),
        hover: {
            y: -15,
            scale: 1.4,
            color: "#8B5CF6", // بنفش ویوید
            rotate: [0, -10, 10, 0],
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 10,
            },
        },
    };

    return (
        <div className="flex items-center justify-center py-20" dir="ltr">
            <motion.div
                className={cn(
                    "flex gap-1 cursor-pointer select-none",
                    "text-5xl md:text-7xl font-black tracking-tighter",
                    "text-zinc-800 dark:text-zinc-100",
                    className
                )}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
            >
                {letters.map((char, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        className="inline-block"
                        style={{ display: char === " " ? "inline" : "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}