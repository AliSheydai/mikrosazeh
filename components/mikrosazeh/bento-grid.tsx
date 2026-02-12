"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

const itemsSample: BentoItem[] = [
    {
        title: "داشبورد تحلیلی",
        meta: "نسخه ۲.۴.۱",
        description:
            "مشاهده شاخص‌ها در لحظه با تحلیل‌های مبتنی بر هوش مصنوعی و پیش‌بینی داده‌ها",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "زنده",
        tags: ["آمار", "گزارش‌ها", "هوش مصنوعی"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "مدیریت وظایف",
        meta: "۸۴ مورد انجام شده",
        description: "مدیریت خودکار جریان‌های کاری با قابلیت زمان‌بندی اولویت‌ها",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "بروزرسانی شده",
        tags: ["بهره‌وری", "اتوماسیون"],
    },
    {
        title: "کتابخانه رسانه",
        meta: "۱۲ گیگابایت مصرف شده",
        description: "فضای ذخیره‌سازی ابری همراه با پردازش هوشمند محتوا",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["ذخیره‌سازی", "CDN"],
        colSpan: 2,
    },
    {
        title: "شبکه جهانی",
        meta: "۶ منطقه فعال",
        description: "استقرار در چندین منطقه جغرافیایی با استفاده از پردازش لبه‌ای",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "بتا",
        tags: ["زیرساخت", "Edge"],
    },
];

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
    return (
        // اضافه شدن dir="rtl" برای چیدمان صحیح فارسی
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto" dir="rtl">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
                        "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                                item.hasPersistentHover,
                            "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-linear-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-xs",
                                    "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",
                                    "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                                )}
                            >
                                {item.status || "فعال"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px] flex items-center gap-1">
                                {item.title}
                                <span className="mr-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-reverse gap-2 text-xs text-gray-500 dark:text-gray-400">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                {item.cta || "مشاهده بیشتر ←"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}