"use client";

import { CornerLeftUp, Mic } from "lucide-react"; // تغییر آیکون به جهت چپ
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_01_Farsi() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4" dir="rtl"> 
      <div className="relative max-w-xl w-full mx-auto">
        <Textarea
          id="ai-input-01"
          placeholder="پیام خود را بنویسید..."
          className={cn(
            "max-w-xl bg-black/5 dark:bg-white/5 rounded-3xl pr-6 pl-16",
            "placeholder:text-black/50 dark:placeholder:text-white/50",
            "border-none ring-black/20 dark:ring-white/20",
            "text-black dark:text-white text-wrap text-right", 
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "transition-[height] duration-100 ease-out",
            "leading-[1.2] py-[16px]",
            "min-h-[52px]",
            "max-h-[200px]"
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (inputValue.trim()) {
                handleReset();
              }
            }
          }}
        />

        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-200",
            inputValue ? "left-10" : "left-3" 
          )}
        >
          <Mic className="w-4 h-4 text-black/70 dark:text-white/70" />
        </div>

        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-all duration-700",
            inputValue
              ? "block left-3 animate-slide-in cursor-pointer"
              : "hidden"
          )}
        >
          <CornerLeftUp className="w-4 h-4 text-black/70 dark:text-white/70 transition-opacity duration-700" />
        </button>
      </div>
    </div>
  );
}