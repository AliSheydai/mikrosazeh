import { cn } from "@/lib/utils";
import {
    Calendar,
    type LucideIcon,
    ArrowLeft, // تغییر از ArrowRight
    CheckCircle2,
    Timer,
    AlertCircle,
    PiggyBank,
    TrendingUp,
    CreditCard,
} from "lucide-react";
import React from "react";

interface ListItem {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    iconStyle: string;
    date: string;
    time?: string;
    amount?: string;
    status: "pending" | "in-progress" | "completed";
    progress?: number;
}

interface List03Props {
    items?: ListItem[];
    className?: string;
}

const iconStyles = {
    savings: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
    investment: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
    debt: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
};

const statusConfig = {
    pending: {
        label: "در انتظار",
        icon: Timer,
        class: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    "in-progress": {
        label: "در جریان",
        icon: AlertCircle,
        class: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    completed: {
        label: "تکمیل شده",
        icon: CheckCircle2,
        class: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
};

const ITEMS: ListItem[] = [
    {
        id: "1",
        title: "صندوق اضطراری",
        subtitle: "ذخیره مخارج ۳ ماه آینده",
        icon: PiggyBank,
        iconStyle: "savings",
        date: "هدف: آذر ۱۴۰۴",
        amount: "۱۵۰,۰۰۰,۰۰۰ ریال",
        status: "in-progress",
        progress: 65,
    },
    {
        id: "2",
        title: "سبد سهام",
        subtitle: "برنامه سرمایه‌گذاری بخش تکنولوژی",
        icon: TrendingUp,
        iconStyle: "investment",
        date: "هدف: خرداد ۱۴۰۴",
        amount: "۵۰۰,۰۰۰,۰۰۰ ریال",
        status: "pending",
        progress: 30,
    },
    {
        id: "3",
        title: "تسویه بدهی",
        subtitle: "برنامه پرداخت وام تحصیلی",
        icon: CreditCard,
        iconStyle: "debt",
        date: "هدف: اسفند ۱۴۰۴",
        amount: "۲۵۰,۰۰۰,۰۰۰ ریال",
        status: "in-progress",
        progress: 45,
    },
];

export default function List03({ items = ITEMS, className }: List03Props) {
    return (
        <div 
            dir="rtl" 
            className={cn("w-full overflow-x-auto scrollbar-none font-[vazirmatn,system-ui]", className)}
        >
            <div className="flex gap-4 min-w-full p-1">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "flex flex-col",
                            "w-[290px] shrink-0",
                            "bg-white dark:bg-zinc-900/70",
                            "rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800",
                            "hover:shadow-md transition-all duration-300"
                        )}
                    >
                        <div className="p-5 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className={cn("p-2.5 rounded-xl", iconStyles[item.iconStyle as keyof typeof iconStyles])}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className={cn(
                                    "px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5",
                                    statusConfig[item.status].bg,
                                    statusConfig[item.status].class
                                )}>
                                    {React.createElement(statusConfig[item.status].icon, { className: "w-3.5 h-3.5" })}
                                    {statusConfig[item.status].label}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                                    {item.subtitle}
                                </p>
                            </div>

                            {typeof item.progress === "number" && (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-[11px]">
                                        <span className="text-zinc-500">میزان پیشرفت</span>
                                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{item.progress}٪</span>
                                    </div>
                                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full transition-all duration-500"
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="pt-1 flex flex-col gap-2">
                                {item.amount && (
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.amount}</span>
                                        <span className="text-[10px] text-zinc-500">هدف مالی</span>
                                    </div>
                                )}
                                <div className="flex items-center text-[11px] text-zinc-500">
                                    <Calendar className="w-3.5 h-3.5 ml-1.5" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
                            <button className="w-full flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                مشاهده جزئیات
                                <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}