"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // اصلاح نام پکیج به استاندارد رایج

interface TextSplitProps {
    text?: string;
    className?: string;
    containerClassName?: string;
    splitSpacing?: number;
}

const Text_02: React.FC<TextSplitProps> = ({
    text = "کارمزد پرداخت", // متن فارسی جایگزین
    className = "",
    containerClassName = "",
    splitSpacing = 8, // کمی فاصله بیشتر برای زیبایی در فونت فارسی
}) => {
    return (
        <motion.div
            className={cn(
                "w-full text-center relative inline-block cursor-default select-none",
                containerClassName
            )}
            whileHover="hover"
            initial="default"
            dir="rtl"
        >
            {/* نیمه بالایی */}
            <motion.div
                className={cn("absolute w-full text-4xl font-bold text-zinc-800 dark:text-zinc-200", className)}
                variants={{
                    default: {
                        clipPath: "inset(0 0 50% 0)",
                        y: -splitSpacing / 2,
                        opacity: 1,
                    },
                    hover: {
                        clipPath: "inset(0 0 0 0)",
                        y: 0,
                        opacity: 0,
                    },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {text}
            </motion.div>

            {/* نیمه پایینی */}
            <motion.div
                className={cn("absolute w-full text-4xl font-bold text-zinc-800 dark:text-zinc-200", className)}
                variants={{
                    default: {
                        clipPath: "inset(50% 0 0 0)",
                        y: splitSpacing / 2,
                        opacity: 1,
                    },
                    hover: {
                        clipPath: "inset(0 0 0 0)",
                        y: 0,
                        opacity: 1,
                    },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {text}
            </motion.div>

            <div className={cn("invisible text-4xl font-bold px-4", className)}>{text}</div>
        </motion.div>
    );
};

export default Text_02;