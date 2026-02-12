"use client";

import { ArrowLeft, Brain } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface ToggleButtonProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

function ToggleButton({ icon, label, isActive, onClick }: ToggleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
        >
            <div
                className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-black/40 dark:text-white/40"
                )}
            >
                {icon}
            </div>
            <span className="font-medium">{label}</span>
            <div
                className={cn(
                    "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
                    isActive
                        ? "bg-blue-500 dark:bg-blue-400"
                        : "bg-black/20 dark:bg-white/20"
                )}
            >
                <div
                    className={cn(
                        "absolute h-4 w-4 transform rounded-full transition-transform shadow-sm bg-white",
                        // In RTL, "translate-x-1" stays on the right, "translate-x-[-1rem]" moves left
                        isActive ? "-translate-x-4" : "-translate-x-1"
                    )}
                />
            </div>
        </button>
    );
}

export default function AIInput_14() {
    const [value, setValue] = useState("");
    const [useMemory, setUseMemory] = useState(false);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setValue("");
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="flex flex-col gap-3">
                {/* Input Container */}
                <div className="bg-black/5 dark:bg-white/5 rounded-xl relative border border-transparent focus-within:border-black/10 dark:focus-within:border-white/10 transition-all">
                    <div className="relative px-2 py-2">
                        <Textarea
                            value={value}
                            placeholder="پیام خود را اینجا بنویسید..."
                            className={cn(
                                "w-full rounded-xl pr-4 pl-12 border-none resize-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 leading-relaxed text-right",
                                "min-h-[40px]"
                            )}
                            ref={textareaRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                        />
                        {/* Send Button - Placed on the Left for RTL */}
                        <button
                            type="button"
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-1.5 hover:bg-black/10 transition-colors"
                        >
                            <ArrowLeft
                                className={cn(
                                    "w-4 h-4 dark:text-white transition-opacity",
                                    value ? "opacity-100" : "opacity-30"
                                )}
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom Settings Area */}
                <div className="flex justify-start px-1">
                    <ToggleButton
                        icon={<Brain className="w-4 h-4" />}
                        label="استفاده از حافظه"
                        isActive={useMemory}
                        onClick={() => setUseMemory(!useMemory)}
                    />
                </div>
            </div>
        </div>
    );
}