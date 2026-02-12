"use client";

import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Alert02() {
    return (
        <div className="w-full max-w-xl mx-auto" dir="rtl">
            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl p-4 transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 shrink-0">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                            alt="Sarah Chen"
                            sizes="48px"
                            fill
                            className="rounded-full object-cover border border-zinc-100 dark:border-zinc-800"
                        />
                        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                    </div>

                    <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                دعوت‌نامه تیم
                            </p>
                            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                <span className="font-medium text-zinc-900 dark:text-zinc-200">Kokonut</span>
                                {" "}شما را به گروه{" "}
                                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                    تیم طراحی
                                </span>
                                {" "}دعوت کرده است.
                            </p>
                            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-1">
                                ۵ دقیقه پیش
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                        <button
                            type="button"
                            className="group rounded-xl flex items-center justify-center h-9 w-9 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-red-50 dark:hover:bg-red-900/20 text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-all active:scale-90"
                        >
                            <X className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className={cn(
                                "group rounded-xl flex items-center justify-center h-9 w-9 transition-all active:scale-90",
                                "bg-zinc-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                                "text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                            )}
                        >
                            <Check className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}