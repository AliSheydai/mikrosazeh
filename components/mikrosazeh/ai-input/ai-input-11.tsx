"use client";

import { ArrowLeft, Bot } from "lucide-react";
import { useState, useRef, type RefObject } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { useClickOutside } from "@/hooks/use-click-outside";

const AI_AGENTS = [
    { name: "نماینده کپی‌رایتر", description: "هر چه می‌خواهید بنویسید" },
    { name: "نماینده Nextjs", description: "کدنویسی برای هر پروژه‌ای" },
].map((model) => ({ ...model }));

export default function AIInput_11() {
    const [state, setState] = useState({
        value: "",
        selectedModel: "نماینده کپی‌رایتر",
        isModelMenuOpen: false,
    });

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });
    const menuRef = useRef<HTMLDivElement>(null);

    const updateState = (updates: Partial<typeof state>) =>
        setState((prev) => ({ ...prev, ...updates }));

    useClickOutside(menuRef as RefObject<HTMLElement>, () => {
        updateState({ isModelMenuOpen: false });
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            updateState({ value: "" });
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-8" dir="rtl">
            <div className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-all">
                <div className="relative">
                    <div className="px-2 pt-2 pb-2 flex items-center">
                        {/* Agent Trigger Button */}
                        <button
                            type="button"
                            onClick={() =>
                                updateState({
                                    isModelMenuOpen: !state.isModelMenuOpen,
                                })
                            }
                            className="flex items-center p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <Bot className="w-4 h-4 dark:text-white" />
                        </button>

                        <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-2" />

                        <Textarea
                            id="ai-input-11"
                            placeholder="هر چه می‌خواهید بپرسید..."
                            className={cn(
                                "max-w-xl w-full rounded-3xl pr-2 pl-10 placeholder:text-black/50 dark:placeholder:text-white/50 border-none focus-visible:ring-0 text-black dark:text-white resize-none text-wrap py-2 bg-transparent leading-[1.6] text-right",
                                "min-h-[40px]"
                            )}
                            ref={textareaRef}
                            value={state.value}
                            onChange={(e) => {
                                updateState({ value: e.target.value });
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                        />

                        {/* Submit Button (Positioned Left for RTL) */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <button
                                type="button"
                                className="rounded-xl bg-black/5 dark:bg-white/5 p-1.5 hover:bg-black/10 transition-colors"
                            >
                                <ArrowLeft
                                    className={cn(
                                        "w-4 h-4 dark:text-white transition-opacity",
                                        state.value ? "opacity-100" : "opacity-30"
                                    )}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Agent Label (Bottom Right for RTL) */}
                    <div className="absolute -bottom-6 right-1 flex items-center gap-1.5 text-[10px] text-muted-foreground dark:text-white/40 font-medium">
                        <span>{state.selectedModel}</span>
                    </div>

                    {/* Model Selection Menu */}
                    {state.isModelMenuOpen && (
                        <div
                            ref={menuRef}
                            className="absolute top-12 right-2 mt-1 bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-black/10 dark:border-white/10 py-1 w-72 z-50 overflow-hidden"
                        >
                            {AI_AGENTS.map((model) => (
                                <button
                                    key={model.name}
                                    type="button"
                                    onClick={() => {
                                        updateState({
                                            selectedModel: model.name,
                                            isModelMenuOpen: false,
                                        });
                                    }}
                                    className="w-full px-4 py-2 text-right hover:bg-black/5 dark:hover:bg-white/5 flex flex-col gap-0.5 transition-colors"
                                >
                                    <div className="text-sm font-medium dark:text-white">
                                        {model.name}
                                    </div>
                                    <div className="text-xs text-black/50 dark:text-white/50">
                                        {model.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}