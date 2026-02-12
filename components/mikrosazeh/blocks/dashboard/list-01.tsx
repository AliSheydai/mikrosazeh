import { cn } from "@/lib/utils";
import {
    ArrowUpLeft,
    ArrowDownLeft,
    Wallet,
    SendHorizontal,
    QrCode,
    Plus,
    ArrowLeft, // تغییر از ArrowRight به ArrowLeft برای محیط RTL
    CreditCard,
} from "lucide-react";

interface AccountItem {
    id: string;
    title: string;
    description?: string;
    balance: string;
    type: "savings" | "checking" | "investment" | "debt";
}

interface List01Props {
    totalBalance?: string;
    accounts?: AccountItem[];
    className?: string;
}

const ACCOUNTS: AccountItem[] = [
    {
        id: "1",
        title: "پس‌انداز اصلی",
        description: "پس‌انداز شخصی",
        balance: "۸,۴۵۹,۴۵۰ ریال",
        type: "savings",
    },
    {
        id: "2",
        title: "حساب جاری",
        description: "مخارج روزمره",
        balance: "۲,۸۵۰,۰۰۰ ریال",
        type: "checking",
    },
    {
        id: "3",
        title: "سبد سرمایه‌گذاری",
        description: "سهام و صندوق‌ها",
        balance: "۱۵,۲۳۰,۸۰۰ ریال",
        type: "investment",
    },
    {
        id: "4",
        title: "کارت اعتباری",
        description: "بدهی معوقه",
        balance: "۱,۲۰۰,۰۰۰ ریال",
        type: "debt",
    },
];

export default function List01({
    totalBalance = "۲۶,۵۴۰,۲۵۰ ریال",
    accounts = ACCOUNTS,
    className,
}: List01Props) {
    return (
        <div
            dir="rtl"
            className={cn(
                "w-full max-w-xl mx-auto font-[vazirmatn,system-ui]", // پیشنهاد استفاده از یک فونت فارسی
                "bg-white dark:bg-zinc-900/70",
                "border border-zinc-100 dark:border-zinc-800",
                "rounded-xl shadow-sm backdrop-blur-xl",
                className
            )}
        >
            {/* بخش موجودی کل */}
            <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                    موجودی کل
                </p>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {totalBalance}
                </h1>
            </div>

            {/* لیست حساب‌ها */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-3 px-1">
                    <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        حساب‌های شما
                    </h2>
                </div>

                <div className="space-y-1">
                    {accounts.map((account) => (
                        <div
                            key={account.id}
                            className={cn(
                                "group flex items-center justify-between",
                                "p-2.5 rounded-lg",
                                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                                "transition-all duration-200 cursor-pointer"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={cn("p-2 rounded-lg", {
                                        "bg-emerald-100 dark:bg-emerald-900/30":
                                            account.type === "savings",
                                        "bg-blue-100 dark:bg-blue-900/30":
                                            account.type === "checking",
                                        "bg-purple-100 dark:bg-purple-900/30":
                                            account.type === "investment",
                                        "bg-red-100 dark:bg-red-900/30":
                                            account.type === "debt",
                                    })}
                                >
                                    {account.type === "savings" && (
                                        <Wallet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    )}
                                    {account.type === "checking" && (
                                        <QrCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    )}
                                    {account.type === "investment" && (
                                        <ArrowUpLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    )}
                                    {account.type === "debt" && (
                                        <CreditCard className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {account.title}
                                    </h3>
                                    {account.description && (
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                            {account.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="text-left"> {/* تغییر جهت موجودی برای هماهنگی با اعداد فارسی */}
                                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                    {account.balance}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* فوتر با دکمه‌های فارسی شده */}
            <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="grid grid-cols-4 gap-2">
                    <button
                        type="button"
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        <span>افزودن</span>
                    </button>
                    <button
                        type="button"
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                    >
                        <SendHorizontal className="w-3.5 h-3.5" />
                        <span>انتقال</span>
                    </button>
                    <button
                        type="button"
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                    >
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                        <span>واریز</span>
                    </button>
                    <button
                        type="button"
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>بیشتر</span>
                    </button>
                </div>
            </div>
        </div>
    );
}