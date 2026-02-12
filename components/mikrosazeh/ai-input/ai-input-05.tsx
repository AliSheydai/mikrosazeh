"use client";

import { CornerLeftUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const INITIAL_TEXT = "چه کاری می‌توانم برایتان انجام دهم؟";
const SPEED = 50;

export default function AIInput_05() {
    const [inputValue, setInputValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 50,
        maxHeight: 200,
    });
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const handleSubmit = useCallback(() => {
        if (inputValue.trim()) {
            setInputValue("");
            adjustHeight(true);
        }
    }, [inputValue, adjustHeight]);

    useEffect(() => {
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex < INITIAL_TEXT.length) {
                setDisplayText(INITIAL_TEXT.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeText, SPEED);
            } else {
                setIsTyping(false);
            }
        };

        typeText();
    }, []);

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="text-2xl p-4 bg-background min-h-[100px] flex items-center justify-center">
                <p className="text-black dark:text-white font-semibold text-right">
                    {displayText}
                    {isTyping && <span className="animate-blink mr-1">|</span>}
                </p>
            </div>

            <div className="relative max-w-xl w-full mx-auto">
                <Textarea
                    id="ai-input-05"
                    placeholder="هر چه می‌خواهید بپرسید..."
                    className="max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pr-4 pl-12 placeholder:text-black/70 dark:placeholder:text-white/70 border-none text-black dark:text-white resize-none text-wrap min-h-[40px] py-4 text-right leading-[1.6]"
                    ref={textareaRef}
                    value={inputValue}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        adjustHeight();
                    }}
                />
                <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-colors hover:bg-black/10"
                    type="button"
                    onClick={handleSubmit}
                >
                    <CornerLeftUp
                        className={cn(
                            "w-4 h-4 transition-opacity dark:text-white",
                            {
                                "opacity-100": inputValue,
                                "opacity-30": !inputValue,
                            }
                        )}
                    />
                </button>
            </div>
        </div>
    );
}