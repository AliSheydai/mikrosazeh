"use client";

import {
    Plus,
    File,
    Camera,
    X,
    ArrowLeft,
    Brain,
    ChevronDown,
    Lock,
    Unlock,
} from "lucide-react";
import { useState, useRef, useCallback, type RefObject } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { useFileInput } from "@/hooks/use-file-input";
import { useClickOutside } from "@/hooks/use-click-outside";

const AI_MODELS = [
    { name: "GPT-4", description: "محبوب‌ترین مدل" },
    { name: "GPT-3.5", description: "مدل کلاسیک و سریع" },
    { name: "Claude", description: "بهترین برای برنامه‌نویسی" },
].map((model) => ({ ...model, icon: <Brain className="w-4 h-4" /> }));

const FileDisplay = ({
    fileName,
    onClear,
}: {
    fileName: string;
    onClear: () => void;
}) => (
    <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 w-fit px-3 py-1 rounded-lg" dir="rtl">
        <File className="w-4 h-4 dark:text-white" />
        <span className="text-sm dark:text-white">{fileName}</span>
        <button
            type="button"
            onClick={onClear}
            className="mr-1 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
        >
            <X className="w-3 h-3 dark:text-white" />
        </button>
    </div>
);

export default function AIInput_10() {
    const menuRef = useRef<HTMLDivElement>(null);

    const [state, setState] = useState({
        value: "",
        isPrivacyMode: false,
        selectedModel: "GPT-4",
        isMenuOpen: false,
        isModelMenuOpen: false,
    });

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });
    
    const { fileName, fileInputRef, handleFileSelect, clearFile } =
        useFileInput({ accept: "image/*", maxSize: 5 });

    const updateState = useCallback(
        (updates: Partial<typeof state>) =>
            setState((prev) => ({ ...prev, ...updates })),
        []
    );

    useClickOutside(menuRef as RefObject<HTMLElement>, () => {
        if (state.isMenuOpen) updateState({ isMenuOpen: false });
        if (state.isModelMenuOpen) updateState({ isModelMenuOpen: false });
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            updateState({ value: "" });
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-4" dir="rtl">
            <div className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <div ref={menuRef}>
                    {/* Top Bar: Model Selector and Privacy Toggle */}
                    <div className="border-b border-black/10 dark:border-white/10">
                        <div className="flex justify-between items-center px-4 py-2 text-sm">
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        updateState({
                                            isModelMenuOpen: !state.isModelMenuOpen,
                                        })
                                    }
                                    className="flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg px-2 py-1 transition-colors"
                                >
                                    <Brain className="w-4 h-4 dark:text-white" />
                                    <span className="dark:text-white font-medium">
                                        {state.selectedModel}
                                    </span>
                                    <ChevronDown className="w-3 h-3 mr-0.5 dark:text-white" />
                                </button>

                                {state.isModelMenuOpen && (
                                    <div className="absolute top-full right-0 mt-1 w-64 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-1 z-50 border border-black/10 dark:border-white/10">
                                        {AI_MODELS.map((model) => (
                                            <button
                                                type="button"
                                                key={model.name}
                                                className="w-full px-3 py-2 text-right hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between gap-2 text-sm transition-colors dark:text-white"
                                                onClick={() =>
                                                    updateState({
                                                        selectedModel: model.name,
                                                        isModelMenuOpen: false,
                                                    })
                                                }
                                            >
                                                <div className="flex items-center gap-2">
                                                    {model.icon}
                                                    <span>{model.name}</span>
                                                </div>
                                                <span className="text-[10px] opacity-60">
                                                    {model.description}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    updateState({
                                        isPrivacyMode: !state.isPrivacyMode,
                                    })
                                }
                                className={cn(
                                    "flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
                                    state.isPrivacyMode
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-zinc-600 dark:text-zinc-400"
                                )}
                            >
                                {state.isPrivacyMode ? (
                                    <Lock className="w-4 h-4" />
                                ) : (
                                    <Unlock className="w-4 h-4" />
                                )}
                                <span className="text-xs font-medium">حریم خصوصی</span>
                            </button>
                        </div>
                    </div>

                    {/* Attached File Display */}
                    {fileName && (
                        <div className="px-4 pt-3">
                            <FileDisplay
                                fileName={fileName}
                                onClear={() => {
                                    clearFile();
                                    if (fileInputRef.current) fileInputRef.current.value = "";
                                }}
                            />
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="relative px-2 py-2">
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <button
                                type="button"
                                onClick={() =>
                                    updateState({
                                        isMenuOpen: !state.isMenuOpen,
                                    })
                                }
                                className="rounded-3xl bg-black/5 dark:bg-white/5 p-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                            >
                                <Plus className={cn("w-4 h-4 dark:text-white transition-transform", state.isMenuOpen && "rotate-45")} />
                            </button>

                            {state.isMenuOpen && (
                                <div className="absolute right-0 top-full mt-1 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-1 min-w-[150px] z-50 border border-black/10 dark:border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            fileInputRef.current?.click();
                                            updateState({ isMenuOpen: false });
                                        }}
                                        className="w-full px-3 py-2 flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 text-sm dark:text-white"
                                    >
                                        <File className="w-4 h-4" />
                                        <span>بارگذاری فایل</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-3 py-2 flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 text-sm dark:text-white"
                                    >
                                        <Camera className="w-4 h-4" />
                                        <span>گرفتن عکس</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                        />

                        <Textarea
                            id="ai-input-10"
                            ref={textareaRef}
                            value={state.value}
                            placeholder="پیام خود را بنویسید..."
                            className={cn(
                                "w-full rounded-xl pr-14 pl-12 border-none resize-none bg-transparent dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus-visible:ring-0 leading-[1.6] text-right",
                                "min-h-[44px]"
                            )}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                updateState({ value: e.target.value });
                                adjustHeight();
                            }}
                        />

                        <button
                            type="button"
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-1.5 hover:bg-black/10 transition-colors"
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
            </div>
        </div>
    );
}