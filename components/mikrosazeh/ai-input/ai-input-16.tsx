"use client";

import { useState, useRef, useCallback, type RefObject } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { MessageSquare, Wand2, Search, SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/use-click-outside";

const COMMANDS = [
    {
        id: "chat",
        label: "گفتگو",
        description: "شروع یک مکالمه جدید",
        icon: MessageSquare,
        prefix: "/chat",
    },
    {
        id: "generate",
        label: "تولید محتوا",
        description: "تولید کد یا متن خلاقانه",
        icon: Wand2,
        prefix: "/generate",
    },
    {
        id: "analyze",
        label: "تحلیل",
        description: "بررسی و تحلیل متن یا کد",
        icon: Search,
        prefix: "/analyze",
    },
];

export default function AIInput_16() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCommand, setActiveCommand] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");

    useClickOutside(containerRef as RefObject<HTMLElement>, () => {
        if (isOpen) setIsOpen(false);
    });

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!inputValue.trim() && !activeCommand) return;

                setInputValue("");
                setActiveCommand(null);
            }

            if (e.key === "Backspace" && inputValue === "" && activeCommand) {
                setActiveCommand(null);
            }
        },
        [activeCommand, inputValue]
    );

    const handleCommandSelect = (commandId: string) => {
        const command = COMMANDS.find((cmd) => cmd.id === commandId);
        if (command) {
            setInputValue("");
            setActiveCommand(commandId);
            setIsOpen(false);
            // Delay focus to ensure input is ready
            setTimeout(() => inputRef.current?.focus(), 10);
        }
    };

    const handleButtonClick = () => {
        if (!inputValue.trim() && !activeCommand) return;
        setInputValue("");
        setIsOpen(false);
        setActiveCommand(null);
    };

    return (
        <div className="w-full py-4 min-h-[244px]" dir="rtl">
            <div className="relative" ref={containerRef}>
                <div className="relative rounded-xl bg-black/5 dark:bg-white/5 border border-transparent focus-within:border-black/10 dark:focus-within:border-white/10 transition-all">
                    <div className="flex items-center flex-wrap gap-2 px-3 h-auto min-h-[52px] py-2">
                        {/* Selected Command Tag */}
                        {activeCommand &&
                            (() => {
                                const activeCmd = COMMANDS.find(
                                    (cmd) => cmd.id === activeCommand
                                );
                                if (!activeCmd) return null;

                                return (
                                    <motion.div 
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="flex items-center gap-2 text-xs bg-sky-500/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400 px-2.5 py-1.5 rounded-lg font-medium border border-sky-500/20"
                                    >
                                        <activeCmd.icon className="w-3.5 h-3.5" />
                                        <span>{activeCmd.label}</span>
                                    </motion.div>
                                );
                            })()}

                        <div className="flex-1 flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    if (e.target.value === "/" && !activeCommand) {
                                        setIsOpen(true);
                                    }
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => !activeCommand && inputValue === "" && setIsOpen(true)}
                                placeholder={
                                    activeCommand
                                        ? "پیام خود را بنویسید..."
                                        : "برای دستورات / را تایپ کنید..."
                                }
                                className="flex-1 bg-transparent border-none outline-none text-sm dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 py-1"
                            />
                            
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className={cn(
                                    "p-2 rounded-lg transition-all shrink-0",
                                    inputValue || activeCommand
                                        ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                                        : "text-black/30 dark:text-white/30 hover:bg-black/5 dark:hover:bg-white/5"
                                )}
                            >
                                <SendHorizontal className="w-4 h-4 flip-x rtl:rotate-180" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Command Palette Dropdown */}
                <AnimatePresence>
                    {isOpen && !activeCommand && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute z-50 w-full mt-2 rounded-xl bg-white dark:bg-[#1c1c1c] shadow-2xl shadow-black/20 border border-black/5 dark:border-white/5 overflow-hidden"
                        >
                            <Command className="w-full" dir="rtl">
                                <div className="px-3 py-2 text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-wider border-b border-black/5 dark:border-white/5">
                                    دستورات در دسترس
                                </div>
                                <Command.List className="py-1 max-h-[280px] overflow-y-auto">
                                    {COMMANDS.map((command) => (
                                        <Command.Item
                                            key={command.id}
                                            onSelect={() => handleCommandSelect(command.id)}
                                            className="px-3 py-3 flex items-center gap-4 text-sm hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer group transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-sky-500/10 transition-colors">
                                                <command.icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-sky-500" />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <span className="font-semibold text-black/80 dark:text-white/80">
                                                    {command.label}
                                                </span>
                                                <span className="text-xs text-black/40 dark:text-white/40 mt-0.5">
                                                    {command.description}
                                                </span>
                                            </div>
                                            <kbd className="mr-auto font-mono text-[10px] bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-black/30 dark:text-white/30">
                                                {command.prefix}
                                            </kbd>
                                        </Command.Item>
                                    ))}
                                </Command.List>
                            </Command>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}