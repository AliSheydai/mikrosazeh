"use client";

import { Search, ShoppingBag, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface TopBarProps {
    cartItemCount: number;
    onCartClick: () => void;
    onSearch: (query: string) => void;
}

const categories = [
    "همه",
    "روشنایی",
    "آشپزخانه",
    "دکوراسیون",
    "گیاهان",
    "اداری",
    "منسوجات",
];

export function TopBar({ cartItemCount, onCartClick, onSearch }: TopBarProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("همه");
    const [isScrolled, setIsScrolled] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setIsSearchOpen(false);
            onSearch("");
        }
    };

    return (
        <div
            dir="rtl"
            className={`sticky top-0 z-40 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 dark:bg-zinc-950/95 shadow-md backdrop-blur-md"
                    : "bg-white dark:bg-zinc-950"
            } border-b border-zinc-200 dark:border-zinc-800 font-[vazirmatn,system-ui]`}
        >
            <div className="flex items-center justify-between px-4 h-14 max-w-7xl mx-auto">
                {/* لوگو یا نام فروشگاه */}
                <Link
                    href="/"
                    className="text-lg font-black shrink-0 text-zinc-900 dark:text-white tracking-tighter"
                >
                    مدرن‌شاپ
                </Link>

                {/* دسته‌بندی‌ها - اسکرول افقی در موبایل */}
                <nav className="flex-1 px-6 overflow-x-auto no-scrollbar hidden md:flex items-center justify-center gap-8">
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={`whitespace-nowrap transition-all relative py-1 text-sm ${
                                selectedCategory === category
                                    ? "text-zinc-900 dark:text-white font-bold"
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                            {selectedCategory === category && (
                                <motion.div 
                                    layoutId="activeCategory"
                                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                {/* بخش عملیات: جستجو و سبد خرید */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="relative flex items-center">
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="relative">
                                        <input
                                            ref={searchInputRef}
                                            autoFocus
                                            type="text"
                                            placeholder="جستجو..."
                                            className="w-40 sm:w-64 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-sm pr-3 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-800 transition-all"
                                            onChange={(e) => onSearch(e.target.value)}
                                            onKeyDown={handleKeyPress}
                                        />
                                        <button
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                onSearch("");
                                            }}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!isSearchOpen && (
                            <button
                                type="button"
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onCartClick}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full relative transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartItemCount > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-1 left-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white dark:border-zinc-950"
                            >
                                {cartItemCount.toLocaleString('fa-IR')}
                            </motion.span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}