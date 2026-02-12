"use client";

import {
    ArrowLeft,
    Brain,
    type LucideIcon,
    Mic,
    Paperclip,
    TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface ToolbarButton {
    icon: LucideIcon;
    onClick?: () => void;
    className: string | ((isRecording: boolean) => string);
    isFileInput?: boolean;
    isRecording?: boolean;
}

export default function AIInput_15() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 96,
        maxHeight: 300,
    });
    const [useMemory, setUseMemory] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const AI_MODELS = ["GPT-4", "Claude", "Gemini"];

    const TOOLBAR_BUTTONS: ToolbarButton[] = [
        {
            icon: Mic,
            onClick: () => setIsRecording(!isRecording),
            className: (isRecording: boolean) =>
                cn(
                    "rounded-lg p-2 transition-all",
                    isRecording
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                ),
            isRecording,
        },
        {
            icon: Paperclip,
            isFileInput: true,
            className: "rounded-lg p-2 bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white",
        },
    ];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setValue("");
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/5">
                {/* Header: Model Selection and Memory Toggle */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-3">
                        <select className="text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md px-3 py-1.5 dark:text-white outline-none focus:ring-1 focus:ring-blue-500/50 transition-all cursor-pointer font-sans">
                            {AI_MODELS.map((model) => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="button"
                        onClick={() => setUseMemory(!useMemory)}
                        className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors group"
                    >
                        <span className="font-medium">حافظه</span>
                        <div
                            className={cn(
                                "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
                                useMemory
                                    ? "bg-blue-500 dark:bg-blue-400"
                                    : "bg-black/20 dark:bg-white/20"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm",
                                    useMemory ? "-translate-x-4" : "-translate-x-1"
                                )}
                            />
                        </div>
                        <Brain
                            className={cn(
                                "w-4 h-4 transition-colors",
                                useMemory
                                    ? "text-blue-500 dark:text-blue-400"
                                    : "text-black/40 dark:text-white/40 group-hover:text-black/60"
                            )}
                        />
                    </button>
                </div>

                {/* Input and Toolbar Area */}
                <div className="relative">
                    <div className="relative flex flex-col">
                        <div
                            className="overflow-y-auto"
                            style={{ maxHeight: "400px" }}
                        >
                            <Textarea
                                id="ai-input-15"
                                value={value}
                                placeholder={
                                    isRecording
                                        ? "در حال گوش دادن..."
                                        : "چه سوالی دارید؟"
                                }
                                className={cn(
                                    "w-full rounded-xl rounded-b-none px-4 py-3 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 leading-relaxed text-right",
                                    "min-h-[120px]"
                                )}
                                ref={textareaRef}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                            />
                        </div>

                        {/* Integrated Toolbar */}
                        <div className="h-14 bg-black/5 dark:bg-white/5 rounded-b-xl relative border-t border-black/5 dark:border-white/5">
                            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between flex-row-reverse">
                                {/* Action Buttons (Right in RTL flow, Left in UI) */}
                                <div className="flex items-center gap-2 flex-row-reverse">
                                    {TOOLBAR_BUTTONS.map((button, index) =>
                                        button.isFileInput ? (
                                            <label
                                                key={index}
                                                className={cn(
                                                    "cursor-pointer transition-colors",
                                                    typeof button.className === "string" 
                                                        ? button.className 
                                                        : button.className(isRecording)
                                                )}
                                            >
                                                <input type="file" className="hidden" />
                                                <button.icon className="w-4 h-4" />
                                            </label>
                                        ) : (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={button.onClick}
                                                className={
                                                    typeof button.className === "string"
                                                        ? button.className
                                                        : button.className(isRecording)
                                                }
                                            >
                                                <button.icon className="w-4 h-4" />
                                            </button>
                                        )
                                    )}
                                </div>

                                {/* Send Button */}
                                <button
                                    type="button"
                                    className="rounded-lg p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
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
                    </div>
                </div>

                {/* Footer Warning */}
                <div className="mt-4 flex items-center gap-2 text-[10px] text-black/40 dark:text-white/40 justify-center">
                    <div className="flex items-center gap-1.5 border border-black/5 dark:border-white/5 px-3 py-1 rounded-full">
                        <TriangleAlert className="w-3 h-3" />
                        <span>هوش مصنوعی ممکن است اشتباه کند، با احتیاط استفاده کنید.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}