"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
} from "lucide-react";

export function VercelV0Chat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                setValue("");
                adjustHeight(true);
            }
        }
    };

    return (
        <div dir="rtl" className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-4 sm:space-y-8 font-sans">
            {/* تیتر اصلی با لحن ترغیب‌کننده */}
            <h1 className="text-2xl sm:text-4xl font-bold text-black dark:text-white text-center tracking-tight">
                چه پروژه‌ای در ذهن داری؟
            </h1>

            <div className="w-full">
                <div className="relative bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="از v0 بپرس..."
                            className={cn(
                                "w-full px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-white text-sm leading-relaxed",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-neutral-500 placeholder:text-sm",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-3 border-t border-neutral-800/50">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="group p-2 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Paperclip className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                                <span className="text-xs text-zinc-500 hidden group-hover:inline transition-opacity">
                                    پیوست فایل
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="px-3 py-1.5 rounded-lg text-xs text-zinc-400 transition-colors border border-dashed border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 flex items-center gap-2"
                            >
                                <PlusIcon className="w-3.5 h-3.5" />
                                پروژه جدید
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "p-2 rounded-lg transition-all border border-zinc-700 flex items-center justify-center",
                                    value.trim()
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-zinc-500"
                                )}
                            >
                                <ArrowUpIcon className="w-4 h-4" />
                                <span className="sr-only">ارسال</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* دکمه‌های اکشن سریع */}
                <div className="mt-6">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        <ActionButton
                            icon={<ImageIcon className="w-4 h-4" />}
                            label="شبیه‌سازی اسکرین‌شات"
                        />
                        <ActionButton
                            icon={<Figma className="w-4 h-4" />}
                            label="ایمپورت از Figma"
                        />
                        <ActionButton
                            icon={<FileUp className="w-4 h-4" />}
                            label="آپلود پروژه"
                        />
                        <ActionButton
                            icon={<MonitorIcon className="w-4 h-4" />}
                            label="صفحه لندینگ"
                        />
                        <ActionButton
                            icon={<CircleUserRound className="w-4 h-4" />}
                            label="فرم ثبت‌نام"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-all whitespace-nowrap flex-shrink-0 text-xs"
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

export default VercelV0Chat;