"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Facebook, Linkedin, Link, Share2 } from "lucide-react";

export default function Btn08({
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const [isHovered, setIsHovered] = useState(false);
    
    const shareButtons = [
        { icon: Twitter, color: "hover:bg-[#1DA1F2]" },
        { icon: Facebook, color: "hover:bg-[#4267B2]" },
        { icon: Linkedin, color: "hover:bg-[#0077b5]" },
        { icon: Link, color: "hover:bg-zinc-600" },
    ];

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            dir="rtl"
        >
            <Button
                className={cn(
                    "min-w-[160px] h-11 rounded-xl transition-all duration-300",
                    "bg-white dark:bg-zinc-900",
                    "text-zinc-900 dark:text-zinc-100",
                    "border border-zinc-200 dark:border-zinc-800 shadow-sm",
                    isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100",
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-2 font-bold">
                    <Share2 className="w-4 h-4" />
                    اشتراک‌گذاری
                </span>
            </Button>

            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            className="flex h-11 pointer-events-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {shareButtons.map((button, index) => (
                                <motion.button
                                    key={index}
                                    type="button"
                                    initial={{ y: 10, opacity: 0, scale: 0.8 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ 
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }}
                                    className={cn(
                                        "flex-1 w-10 flex items-center justify-center transition-colors duration-200",
                                        "bg-zinc-900 dark:bg-white text-white dark:text-black",
                                        button.color,
                                        index === 0 && "rounded-r-xl",
                                        index === 3 && "rounded-l-xl",
                                        "border-l border-white/10 dark:border-black/10 last:border-l-0"
                                    )}
                                >
                                    <button.icon className="w-4 h-4" />
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}