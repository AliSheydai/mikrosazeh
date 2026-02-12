import { cn } from "@/lib/utils";
import {
    ArrowUpLeft,
    ArrowDownLeft,
    Wallet,
    ShoppingCart,
    CreditCard,
    type LucideIcon,
    ArrowLeft,
    ArrowUpRight, // تغییر جهت برای RTL
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

const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        title: "خرید از فروشگاه اپل",
        amount: "۹۹۹,۰۰۰",
        type: "outgoing",
        category: "shopping",
        icon: ShoppingCart,
        timestamp: "امروز، ۱۴:۴۵",
        status: "completed",
    },
    {
        id: "2",
        title: "واریز حقوق",
        amount: "۴,۵۰۰,۰۰۰",
        type: "incoming",
        category: "transport",
        icon: Wallet,
        timestamp: "امروز، ۰۹:۰۰",
        status: "completed",
    },
    {
        id: "3",
        title: "اشتراک نتفلیکس",
        amount: "۱۵,۹۰۰",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "دیروز",
        status: "pending",
    },
    {
        id: "4",
        title: "حق اشتراک ساد‌ه‌بیس",
        amount: "۱۵,۹۰۰",
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
                "w-full max-w-xl mx-auto font-[vazirmatn,system-ui]",
                "bg-white dark:bg-zinc-900/70",
                "border border-zinc-100 dark:border-zinc-800",
                "rounded-xl shadow-sm backdrop-blur-xl",
                className
            )}
        >
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        فعالیت‌های اخیر
                        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 mr-2">
                            (۲۳ تراکنش)
                        </span>
                    </h2>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-md">
                        این ماه
                    </span>
                </div>

                <div className="space-y-1">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={cn(
                                "group flex items-center gap-3",
                                "p-2.5 rounded-lg",
                                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                                "transition-all duration-200 cursor-pointer"
                            )}
                        >
                            <div
                                className={cn(
                                    "p-2 rounded-lg shrink-0",
                                    "bg-zinc-100 dark:bg-zinc-800",
                                    "border border-zinc-200 dark:border-zinc-700"
                                )}
                            >
                                <transaction.icon className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                            </div>

                            <div className="flex-1 flex items-center justify-between min-w-0">
                                <div className="space-y-1">
                                    <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                        {transaction.title}
                                    </h3>
                                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                                        {transaction.timestamp}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 pr-3">
                                    <span
                                        className={cn(
                                            "text-xs font-bold tabular-nums", // استفاده از فونت اعداد یکدست
                                            transaction.type === "incoming"
                                                ? "text-emerald-600 dark:text-emerald-400"
                                                : "text-red-600 dark:text-red-400"
                                        )}
                                    >
                                        {transaction.amount}
                                        <span className="mr-1 text-[10px] font-normal text-zinc-400">تومان</span>
                                        {transaction.type === "incoming" ? " +" : " -"}
                                    </span>
                                    {transaction.type === "incoming" ? (
                                        <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                    ) : (
                                        <ArrowUpRight className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="button"
                    className={cn(
                        "w-full flex items-center justify-center gap-2",
                        "py-2.5 px-3 rounded-lg text-xs font-bold",
                        "bg-gradient-to-r from-zinc-900 to-zinc-800",
                        "dark:from-zinc-50 dark:to-zinc-200",
                        "text-zinc-50 dark:text-zinc-900",
                        "hover:shadow-md transform transition-all duration-200 active:scale-95",
                        "focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    )}
                >
                    <span>مشاهده تمام تراکنش‌ها</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}