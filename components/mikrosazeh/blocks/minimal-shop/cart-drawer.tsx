import { motion } from "motion/react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { type CartItem } from "./data";

interface CartDrawerProps {
    cart: CartItem[];
    onClose: () => void;
    onRemoveFromCart: (productId: string) => void;
}

export function CartDrawer({
    cart,
    onClose,
    onRemoveFromCart,
}: CartDrawerProps) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div dir="rtl" className="font-[vazirmatn,system-ui]">
            {/* لایه تیره پس‌زمینه */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-[60]"
                onClick={onClose}
            />
            
            {/* پنل سبد خرید */}
            <motion.div
                initial={{ x: "-100%" }} // ورود از سمت چپ در حالت RTL
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="fixed left-0 z-[70] top-0 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-950 shadow-2xl border-r border-zinc-200 dark:border-zinc-800"
            >
                <div className="flex flex-col h-full">
                    {/* هدر سبد خرید */}
                    <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-zinc-500" />
                            <h2 className="text-lg font-bold">سبد خرید شما</h2>
                            <span className="bg-zinc-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full text-zinc-500">
                                {cart.length} کالا
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                        >
                            <X className="w-6 h-6 text-zinc-400" />
                        </button>
                    </div>

                    {/* لیست کالاها */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                <ShoppingBag className="w-16 h-16" />
                                <p className="text-sm">سبد خرید شما در حال حاضر خالی است.</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 group"
                                >
                                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => onRemoveFromCart(item.id)}
                                                className="p-1 text-zinc-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="text-xs text-zinc-500">
                                                تعداد: <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.quantity}</span>
                                            </div>
                                            <div className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                                                {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* فوتر و دکمه پرداخت */}
                    <div className="p-5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-zinc-500">مجموع کل:</span>
                            <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                                {total.toLocaleString('fa-IR')} تومان
                            </span>
                        </div>
                        <button className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-bold rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-[0.98] shadow-lg shadow-zinc-200 dark:shadow-none">
                            تکمیل فرآیند خرید
                        </button>
                        <p className="text-[10px] text-center text-zinc-400 mt-4">
                            هزینه ارسال در مرحله بعد محاسبه خواهد شد.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}