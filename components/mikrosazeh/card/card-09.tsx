import { cn } from "@/lib/utils";
import { ArrowUpLeft } from "lucide-react"; // تغییر آیکون به سمت چپ برای زبان فارسی

interface OrderItem {
    itemName: string;
    quantity: number;
    unitPrice: number;
}

interface Card09Props {
    orderDetails?: OrderItem[];
    subtotal?: number;
    tax?: number;
    shipping?: number;
    discount?: {
        code: string;
        amount: number;
    };
    total?: number;
    currency?: string;
    onCheckout?: () => void;
}

const defaultOrderDetails: OrderItem[] = [
    {
        itemName: "پلن ویژه (Premium)",
        quantity: 1,
        unitPrice: 500000,
    },
];

export default function Card09({
    orderDetails = defaultOrderDetails,
    subtotal = defaultOrderDetails.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
    ),
    tax = subtotal * 0.09, // ۹٪ مالیات بر ارزش افزوده
    shipping = 0,
    discount = {
        code: "WELCOME10",
        amount: subtotal * 0.1, // ۱۰٪ تخفیف خوش‌آمدگویی
    },
    total = subtotal + tax + shipping - discount.amount,
    currency = "تومان",
}: Card09Props) {
    
    // تابع فرمت‌دهی اعداد به فارسی
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fa-IR").format(amount) + " " + currency;
    };

    return (
        <div
            dir="rtl"
            className={cn(
                "w-full max-w-[400px] font-[vazir,system-ui]",
                "rounded-2xl",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "shadow-sm"
            )}
        >
            <div className="p-6 space-y-6">
                {/* هدر خلاصه سفارش */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        خلاصه سفارش
                    </h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {orderDetails.reduce((acc, item) => acc + item.quantity, 0)} مورد
                    </span>
                </div>

                {/* اقلام سفارش */}
                <div className="space-y-4">
                    {orderDetails.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start"
                        >
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                    {item.itemName}
                                </p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    تعداد: {item.quantity} × {formatPrice(item.unitPrice)}
                                </p>
                            </div>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                {formatPrice(item.unitPrice * item.quantity)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* جزئیات قیمت */}
                <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">
                            جمع جزء
                        </span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            {formatPrice(subtotal)}
                        </span>
                    </div>

                    {shipping > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">
                                هزینه ارسال
                            </span>
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                {formatPrice(shipping)}
                            </span>
                        </div>
                    )}

                    {tax > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">
                                مالیات (۹٪)
                            </span>
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                {formatPrice(tax)}
                            </span>
                        </div>
                    )}

                    {discount && (
                        <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400">
                            <span>تخفیف ({discount.code})</span>
                            <span className="font-bold">-{formatPrice(discount.amount)}</span>
                        </div>
                    )}
                </div>

                {/* مبلغ کل */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
                    <span className="text-base font-black text-zinc-900 dark:text-zinc-100">
                        مبلغ قابل پرداخت
                    </span>
                    <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                        {formatPrice(total)}
                    </span>
                </div>

                {/* دکمه پرداخت */}
                <button
                    type="button"
                    className={cn(
                        "w-full px-4 py-4 rounded-xl text-sm font-bold",
                        "bg-indigo-600 text-white",
                        "hover:bg-indigo-700 active:scale-[0.98]",
                        "transition-all duration-300",
                        "flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                    )}
                >
                    تکمیل خرید و پرداخت
                    <ArrowUpLeft className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}