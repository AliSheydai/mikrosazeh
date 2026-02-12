"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ProductGrid } from "./product-grid";
import { CartDrawer } from "./cart-drawer";
import { ProductModal } from "./product-modal";
import { Header } from "./header"; // نام از TopBar به Header (طبق فایل قبلی) اصلاح شد
import { type Product, type CartItem, products } from "./data";

export default function MinimalShop() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // رفع مشکل اسکرول بدنه هنگام باز بودن مودال یا سبد خرید
    useEffect(() => {
        if (isCartOpen || selectedProduct) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isCartOpen, selectedProduct]);

    // محاسبه مجموع تعداد کالاها (به جای تعداد انواع کالا)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const addToCart = (product: Product, quantity: number = 1) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    // جستجوی هوشمند در نام و توضیحات
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div dir="rtl" className="min-h-screen bg-zinc-50 min-w-full rounded-2xl overflow-hidden dark:bg-zinc-950 font-[vazirmatn,system-ui]">
            {/* هدر سایت */}
            <Header
                cartCount={totalItems}
                onCartOpen={() => setIsCartOpen(true)}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {/* محتوای اصلی فروشگاه */}
            <main className="container mx-auto px-4 pt-24 pb-16 w-full">
                {/* نمایش پیغام در صورت پیدا نشدن محصول */}
                {filteredProducts.length > 0 ? (
                    <ProductGrid
                        products={filteredProducts}
                        onProductSelect={setSelectedProduct}
                    />
                ) : (
                    <div className="flex w-full flex-col items-center justify-center py-20 text-zinc-400">
                        <p className="text-lg">محصولی با این مشخصات پیدا نشد.</p>
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            پاک کردن جستجو
                        </button>
                    </div>
                )}
            </main>

            {/* مودال جزئیات محصول */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onAddToCart={(product) => {
                            addToCart(product);
                            setSelectedProduct(null);
                            // یک وقفه کوتاه برای باز شدن سبد خرید بعد از بستن مودال
                            setTimeout(() => setIsCartOpen(true), 300);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* کشوی سبد خرید */}
            <AnimatePresence>
                {isCartOpen && (
                    <CartDrawer
                        cart={cart}
                        onClose={() => setIsCartOpen(false)}
                        onRemoveFromCart={removeFromCart}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}