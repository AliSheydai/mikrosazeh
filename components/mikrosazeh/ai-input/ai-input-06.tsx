"use client";

import { CornerLeftUp } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_06() {
    const [inputValue, setInputValue] = useState("");
    const MAX_CHARS = 100; 

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 50,
        maxHeight: 200,
    });

    const handleSubmit = () => {
        if (inputValue.trim()) {
            setInputValue("");
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="relative max-w-xl w-full mx-auto flex items-start flex-col gap-2">
                <div className="relative max-w-xl w-full mx-auto">
                    <Textarea
                        ref={textareaRef}
                        id="ai-input-06"
                        placeholder="هر چه می‌خواهید بپرسید..."
                        maxLength={MAX_CHARS} 
                        className={cn(
                            "max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pr-6 pl-12 py-4 placeholder:text-black/70 dark:placeholder:text-white/70 border-none ring-black/30 dark:ring-white/30 text-black dark:text-white resize-none text-wrap leading-[1.2] text-right transition-all",
                            "min-h-[56px] focus-visible:ring-1",
                            inputValue.length >= MAX_CHARS && "ring-1 ring-orange-400/50"
                        )}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.shiftKey) {
                                    return;
                                }
                                e.preventDefault();
                                handleSubmit();
                            }
                        }}
                        onChange={(e) => {
                            if (e.target.value.length <= MAX_CHARS) {
                                setInputValue(e.target.value);
                                adjustHeight();
                            }
                        }}
                    />
                    <button
                        className={cn(
                            "absolute left-3 top-1/2 -translate-y-1/2 rounded-xl py-1 px-1 transition-all",
                            inputValue 
                                ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20" 
                                : "bg-black/5 dark:bg-white/5 cursor-not-allowed"
                        )}
                        type="button"
                        onClick={handleSubmit}
                        disabled={!inputValue}
                    >
                        <CornerLeftUp
                            className={cn(
                                "w-4 h-4 transition-opacity dark:text-white",
                                inputValue ? "opacity-100" : "opacity-30"
                            )}
                        />
                    </button>
                </div>
                
                <p className={cn(
                    "mr-4 text-xs transition-colors",
                    inputValue.length >= MAX_CHARS 
                        ? "text-red-500 font-medium" 
                        : "text-black/40 dark:text-white/40"
                )}>
                    {inputValue.length}/{MAX_CHARS} کاراکتر
                </p>
            </div>
        </div>
    );
}