"use client";

import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    ArrowDownLeft,
    Wallet,
    ShoppingCart,
    CreditCard,
    type LucideIcon,
} from "lucide-react";

interface Transaction {
    id: string;
    title: string;
    amount: string;
    type: "incoming" | "outgoing";
    category: string;
    icon: LucideIcon;
    timestamp: string;
    status: "completed" | "pending" | "failed";
}

interface List02Props {
    transactions?: Transaction[];
    className?: string;
}

const categoryStyles = {
    shopping:
        "from-violet-600/10 via-violet-600/5 to-violet-600/0 text-violet-700 dark:from-violet-500/20 dark:via-violet-500/10 dark:to-transparent dark:text-violet-400",
    food: "from-orange-600/10 via-orange-600/5 to-orange-600/0 text-orange-700 dark:from-orange-500/20 dark:via-orange-500/10 dark:to-transparent dark:text-orange-400",
    transport:
        "from-blue-600/10 via-blue-600/5 to-blue-600/0 text-blue-700 dark:from-blue-500/20 dark:via-blue-500/10 dark:to-transparent dark:text-blue-400",
    entertainment:
        "from-pink-600/10 via-pink-600/5 to-pink-600/0 text-pink-700 dark:from-pink-500/20 dark:via-pink-500/10 dark:to-transparent dark:text-pink-400",
};

const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        title: "خرید از اپل استور",
        amount: "۹۹۹,۰۰",
        type: "outgoing",
        category: "shopping",
        icon: ShoppingCart,
        timestamp: "امروز، ۲:۴۵ ب.ظ",
        status: "completed",
    },
    {
        id: "2",
        title: "واریز حقوق",
        amount: "۴,۵۰۰,۰۰",
        type: "incoming",
        category: "transport",
        icon: Wallet,
        timestamp: "امروز، ۹:۰۰ ق.ظ",
        status: "completed",
    },
    {
        id: "3",
        title: "اشتراک نتفلیکس",
        amount: "۱۵,۹۹",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "دیروز",
        status: "pending",
    },
];

export default function List02({
    transactions = TRANSACTIONS,
    className,
}: List02Props) {
    return (
        <div
            dir="rtl"
            className={cn(
                "w-full max-w-2xl mx-auto",
                "bg-white dark:bg-zinc-900/70",
                "border border-zinc-100 dark:border-zinc-800",
                "rounded-3xl shadow-sm backdrop-blur-xl",
                className
            )}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                            فعالیت‌های اخیر
                        </h2>
                        <p className="text-sm text-zinc-600 dark:text-zinc-500 ">
                            ۲۳ تراکنش
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-600 dark:text-zinc-500">
                            این ماه
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={cn(
                                "group relative flex items-center gap-4",
                                "p-3 -mx-3 rounded-2xl",
                                "transition-all duration-300 ease-out",
                                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                                "hover:shadow-sm",
                                "border border-transparent",
                                "hover:border-zinc-300 dark:hover:border-zinc-700/50"
                            )}
                        >
                            <div
                                className={cn(
                                    "relative shrink-0",
                                    "w-12 h-12 flex items-center justify-center",
                                    "rounded-2xl",
                                    "bg-linear-to-br",
                                    categoryStyles[
                                        transaction.category as keyof typeof categoryStyles
                                    ],
                                    "transition-all duration-300",
                                    "group-hover:shadow-lg",
                                    "border border-zinc-200/50 dark:border-zinc-700/50",
                                    "shadow-xs"
                                )}
                            >
                                <transaction.icon className="w-5 h-5" />
                            </div>

                            <div className="flex-1 flex items-center justify-between min-w-0">
                                <div className="space-y-1 min-w-0 text-right">
                                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                        {transaction.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {transaction.timestamp}
                                    </p>
                                </div>

                                <div
                                    dir="ltr"
                                    className={cn(
                                        "flex items-center gap-2 shrink-0 pr-4",
                                        "transition-colors duration-300"
                                    )}
                                >
                                    {transaction.type === "incoming" ? (
                                        <ArrowDownLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                                    ) : (
                                        <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                    )}
                                    <span
                                        className={cn(
                                            "text-base font-semibold",
                                            transaction.type === "incoming"
                                                ? "text-emerald-700 dark:text-emerald-400"
                                                : "text-zinc-800 dark:text-zinc-100"
                                        )}
                                    >
                                        {transaction.type === "incoming"
                                            ? "+"
                                            : "-"}
                                        {transaction.amount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-medium
                    text-zinc-700 dark:text-zinc-400 
                    hover:bg-zinc-100 dark:hover:bg-zinc-800
                    transition-colors duration-200"
                >
                    مشاهده تمام تراکنش‌ها
                </button>
            </div>
        </div>
    );
}