"use client";

import { cn } from "@/lib/utils";
import { 
    Heart, 
    MessageCircle, 
    MoreHorizontal, 
    User, 
    UserCircle, 
    UserCircle2 
} from "lucide-react";

export default function List06() {
    return (
        <div
            dir="rtl"
            className={cn(
                "w-full max-w-xl mx-auto",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "rounded-2xl shadow-xs overflow-hidden"
            )}
        >
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            <User className="w-5 h-5 text-zinc-500" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    سارا چن
                                </h3>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500" dir="ltr">
                                    2h
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                    </button>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">
                    قابلیت‌های جدید هوش مصنوعی در فیگما فوق‌العاده هستند! سیستم متغیرهای جدید را امتحان کردم؛ 
                    این یک تحول بزرگ برای سیستم‌های طراحی است. 🎨
                </p>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="p-4">
                    <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-none">
                            <UserCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 space-y-2 text-right">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    الکس ریورا
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500" dir="ltr">
                                    45m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                کاملاً موافقم! بهبودهای چیدمان خودکار (Auto-layout) هم عالی هستند. 
                                طراحی ریسپانسیو را بسیار آسان‌تر کرده است.
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span dir="ltr">18</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>پاسخ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 pr-12">
                    <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-none">
                            <UserCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1 space-y-2 text-right">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    مایا پاتل
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500" dir="ltr">
                                    12m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                آیا واریانت‌های جدید کامپوننت را امتحان کرده‌اید؟ 
                                برای تم‌بندی بی‌نظیر هستند!
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span dir="ltr">8</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>پاسخ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            <User className="w-4 h-4 text-zinc-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="افزودن به گفتگو..."
                            className="flex-1 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 
                                placeholder:text-zinc-400 focus:outline-none text-right"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}