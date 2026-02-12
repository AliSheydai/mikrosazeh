"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface SidebarSection {
    title: string;
    subtitle: string;
    count: number;
    items: string[];
}

export default function AIInput_13() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });

    const sidebarSections: SidebarSection[] = [
        {
            title: "ابزارهای ذخیره شده",
            subtitle: "بیشترین استفاده",
            count: 12,
            items: ["ترجمه به فرانسوی", "خلاصه‌سازی متن", "تولید عنوان"],
        },
        {
            title: "تاریخچه",
            subtitle: "گفتگوهای اخیر",
            count: 24,
            items: [
                "راهنمای اتصال API",
                "دستیار رفع خطا",
                "جلسه بررسی کد",
            ],
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
            <div className="flex flex-col gap-4">
                {/* Main Input Area */}
                <div className="bg-black/5 dark:bg-white/5 rounded-xl border border-transparent focus-within:border-black/10 dark:focus-within:border-white/10 transition-all">
                    <div className="relative px-2 py-2">
                        <Textarea
                            id="ai-input-13"
                            value={value}
                            placeholder="پیام خود را بنویسید..."
                            className={cn(
                                "w-full rounded-xl pr-4 pl-12 border-none resize-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 leading-[1.6] text-right",
                                "min-h-[40px]"
                            )}
                            ref={textareaRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                        />

                        {/* Submit Button (Left Side for RTL) */}
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

                {/* Dashboard / Sidebar Sections (Below Input) */}
                <div className="flex justify-center gap-4 flex-col sm:flex-row">
                    {sidebarSections.map((section) => (
                        <div
                            key={section.title}
                            className="bg-black/5 dark:bg-white/5 rounded-xl p-4 flex-1 border border-black/5 dark:border-white/5"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-bold text-sm dark:text-white text-right">
                                        {section.title}
                                    </h3>
                                    <p className="text-[11px] text-black/50 dark:text-white/40 text-right mt-0.5">
                                        {section.subtitle}
                                    </p>
                                </div>
                                <span className="text-[10px] bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-black/40 dark:text-white/40 font-mono">
                                    {section.count}
                                </span>
                            </div>

                            <div className="space-y-2 mt-3">
                                {section.items.map((item) => (
                                    <button
                                        key={item}
                                        className="w-full text-right text-xs text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white cursor-pointer transition-colors block py-1 border-r-2 border-transparent hover:border-black/20 dark:hover:border-white/20 pr-2"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}