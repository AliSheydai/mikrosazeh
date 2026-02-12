"use client";

import { motion } from "motion/react";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { type Product } from "./data";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductModal({
    product,
    onClose,
    onAddToCart,
}: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <div dir="rtl" className="font-[vazirmatn,system-ui]">
            {/* لایه تیره پس‌زمینه */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* محفظه اصلی مودال */}
            <motion.div
                layoutId={`product-${product.id}`}
                className="fixed inset-x-4 bottom-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[60] bg-white dark:bg-zinc-950 rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl"
            >
                <div className="flex flex-col md:flex-row-reverse h-full max-h-[90vh] md:max-h-[500px]">
                    {/* بخش تصویر محصول */}
                    <div className="relative md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* دکمه بستن در گوشه بالا-چپ برای RTL */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* بخش اطلاعات و خرید */}
                    <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between bg-white dark:bg-zinc-950">
                        <div className="space-y-4">
                            <div>
                                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                                    {product.category}
                                </span>
                                <h2 className="text-xl font-black mt-2 text-zinc-900 dark:text-zinc-50">
                                    {product.name}
                                </h2>
                            </div>

                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between py-4 border-y border-zinc-100 dark:border-zinc-800">
                                <span className="text-zinc-500 text-sm">قیمت واحد:</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-black text-zinc-900 dark:text-zinc-50">
                                        {product.price.toLocaleString('fa-IR')}
                                    </span>
                                    <span className="text-xs text-zinc-500">تومان</span>
                                </div>
                            </div>

                            {/* کنترلر تعداد */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-zinc-500">تعداد:</span>
                                <div className="flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-xl">
                                    <button onClick={handleDecrease} className="p-1 hover:text-blue-500 transition-colors">
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-6 text-center font-bold text-sm">
                                        {quantity.toLocaleString('fa-IR')}
                                    </span>
                                    <button onClick={handleIncrease} className="p-1 hover:text-blue-500 transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* دکمه نهایی افزودن */}
                        <div className="mt-8">
                            <button
                                onClick={() => onAddToCart(product, quantity)}
                                className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-zinc-200 dark:shadow-none"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                افزودن به سبد خرید
                            </button>
                            <p className="text-[10px] text-center text-zinc-400 mt-3">
                                کد محصول: <span className="uppercase">{product.id}</span> | موجود در انبار
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}