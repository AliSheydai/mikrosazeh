"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Alert01() {
    return (
        <div className="w-full max-w-xl mx-auto p-4" dir="rtl">
            <div className={cn(
                "relative overflow-hidden rounded-2xl p-4 transition-all duration-300",
                "bg-white dark:bg-zinc-900",
                "border border-emerald-100 dark:border-emerald-900/30",
                "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
            )}>
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-emerald-50/50 dark:bg-emerald-900/10 blur-2xl" />

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="h-6 w-6 stroke-[2.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 py-1">
                        <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                            میکروسازه
                        </h3>
                        <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                            عملیات با موفقیت انجام شد! از <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">CLI</code> برای نصب سریع استفاده کنید.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}