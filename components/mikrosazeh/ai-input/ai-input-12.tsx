"use client";

import { ArrowLeft, User } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const AVATARS = [
    { id: 1, nickname: "سارا چن", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
    { id: 2, nickname: "مایکل جانسون", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: 3, nickname: "اما ویلسون", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: 4, nickname: "رضا محمدی", color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" },
];

export default function AIInput_12() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                console.log("Sent:", value);
                setValue("");
                adjustHeight(true);
            }
        }
    };

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="flex flex-col max-w-2xl mx-auto">
                {/* Header: Status and Avatars */}
                <div className="flex items-center px-2 justify-between mb-2">
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium bg-zinc-100 dark:bg-zinc-800/50 px-2 py-0.5 rounded-full">
                        اشتراک‌گذاری شده با {AVATARS.length} نفر
                    </div>
                    <div className="flex items-center">
                        <div className="inline-flex flex-row-reverse items-center justify-center">
                            <TooltipProvider delayDuration={0}>
                                {AVATARS.map((avatar, i) => (
                                    <Tooltip key={avatar.id}>
                                        <TooltipTrigger asChild>
                                            <div
                                                className={cn(
                                                    "relative w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-950 transition-all hover:scale-110 hover:z-20 cursor-help shadow-sm ",
                                                    avatar.color
                                                )}
                                                style={{
                                                    marginLeft: i > 0 ? "-10px" : "0",
                                                }}
                                            >
                                                <User className="w-4 h-4" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" className="text-[11px] px-2 py-1">
                                            {avatar.nickname}
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </TooltipProvider>
                        </div>
                    </div>
                </div>

                {/* Input Container */}
                <div className="relative group bg-zinc-100/80 dark:bg-zinc-900/50 rounded-2xl border border-transparent focus-within:border-zinc-200 dark:focus-within:border-zinc-800 focus-within:bg-white dark:focus-within:bg-zinc-900 transition-all duration-200 shadow-sm">
                    <div className="relative px-2 py-2">
                        <Textarea
                            id="ai-input-12"
                            value={value}
                            ref={textareaRef}
                            placeholder="پیام خود را بنویسید..."
                            className={cn(
                                "w-full rounded-xl pr-4 pl-12 border-none resize-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 leading-relaxed text-right text-sm",
                                "min-h-[44px]"
                            )}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                        />

                        <button
                            type="button"
                            onClick={() => {
                                if(value.trim()){
                                    setValue("");
                                    adjustHeight(true);
                                }
                            }}
                            className={cn(
                                "absolute left-2.5 top-1/2 -translate-y-1/2 rounded-xl p-1.5 transition-all duration-200",
                                value 
                                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" 
                                    : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
                            )}
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Footer: Typing Indicator */}
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400 px-3 py-2">
                    <div className="flex gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span>
                        {`${AVATARS[0].nickname} و ${AVATARS[2].nickname} در حال نوشتن...`}
                    </span>
                </div>
            </div>
        </div>
    );
}