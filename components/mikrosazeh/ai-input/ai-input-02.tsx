"use client";

import { CornerLeftUp, FileUp, Paperclip, X } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFileInput } from "@/hooks/use-file-input";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface FileDisplayProps {
    fileName: string;
    onClear: () => void;
}

const FileDisplay = ({ fileName, onClear }: FileDisplayProps) => (
    <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 w-fit px-3 py-1 rounded-lg group border dark:border-white/10">
        <FileUp className="w-4 h-4 dark:text-white" />
        <span className="text-sm dark:text-white font-medium">{fileName}</span>
        <button
            type="button"
            onClick={onClear}
            className="mr-1 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
            <X className="w-3 h-3 dark:text-white" />
        </button>
    </div>
);

export default function AIInput_02() {
    const [inputValue, setInputValue] = useState<string>("");
    const { fileName, fileInputRef, handleFileSelect, clearFile } =
        useFileInput({ accept: "image/*", maxSize: 5 });

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 52,
        maxHeight: 200,
    });

    const handleSend = () => {
        if (inputValue.trim() || fileName) {
            setInputValue("");
            clearFile();
            adjustHeight(true);
        }
    };

    return (
        <div className="w-full py-2 sm:py-4 px-2 sm:px-0" dir="rtl">
            <div className="relative max-w-xl w-full mx-auto flex flex-col gap-2">
                {fileName && (
                    <FileDisplay fileName={fileName} onClear={clearFile} />
                )}

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className={cn(
                            "absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-9 w-9 rounded-xl transition-all z-20",
                            "bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700",
                            "hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 text-zinc-600 dark:text-zinc-300",
                        )}
                        title="پیوست فایل"
                    >
                        <Paperclip className="w-4 h-4 rotate-[-45deg]" />
                    </button>

                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                    />

                    <Textarea
                        id="ai-input-02"
                        placeholder="آپلود فایل و گفتگو..."
                        className={cn(
                            "max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-2xl sm:rounded-3xl pr-10 sm:pr-12 pl-12 sm:pl-16",
                            "placeholder:text-black/70 dark:placeholder:text-white/70",
                            "border-none ring-black/30 dark:ring-white/30",
                            "text-black dark:text-white text-wrap py-3 sm:py-4",
                            "text-sm sm:text-base text-right",
                            "max-h-[200px] overflow-y-auto resize-none leading-[1.2]",
                            "min-h-[52px]"
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
                                handleSend();
                            }
                        }}
                    />

                    <button
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 py-1 px-1 transition-colors hover:bg-black/10"
                        type="button"
                        onClick={handleSend}
                    >
                        <CornerLeftUp
                            className={cn(
                                "w-3.5 sm:w-4 h-3.5 sm:h-4 transition-opacity dark:text-white",
                                inputValue || fileName ? "opacity-100" : "opacity-30"
                            )}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}