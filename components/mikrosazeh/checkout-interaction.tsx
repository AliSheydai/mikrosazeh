"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, ShoppingCart, X, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
// Removed NumberFlow import due to type mismatches in build

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  color: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutInteractionProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "ایر مکس ۹۰",
    price: 1290000,
    category: "دویدن",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "مشکی/سفید",
  },
  {
    id: "2",
    name: "اولترا بوست",
    price: 1790000,
    category: "حرفه‌ای",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "طوسی/آبی",
  },
  {
    id: "3",
    name: "ترینر کلاسیک",
    price: 890000,
    category: "روزمره",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "سفید/قرمز",
  },
];

export default function CheckoutInteraction({
  products = defaultProducts,
}: CheckoutInteractionProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }),
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    // اضافه شدن dir="rtl" برای استاندارد فارسی
    <div className="w-full max-w-4xl mx-auto font-sans" dir="rtl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* لیست محصولات */}
        <div className="flex-1 space-y-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group p-4 rounded-xl transition-all duration-200",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
              )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden transition-colors duration-200",
                      "bg-zinc-100 dark:bg-zinc-800",
                      "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700",
                    )}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {product.name}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{product.price.toLocaleString("fa-IR")} تومان</span>
                      <span>•</span>
                      <span>{product.color}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addToCart(product)}
                  className="gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  افزودن
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* سبد خرید */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn(
            "w-full md:w-80 flex flex-col p-4 rounded-xl sticky top-4 max-h-[32rem]",
            "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
          )}>
          {/* هدر سبد خرید */}
          <div className="flex items-center gap-2 mb-3 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            <ShoppingCart className="w-4 h-4 text-zinc-500" />
            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              سبد خرید ({totalItems.toLocaleString("fa-IR")})
            </h2>
          </div>

          {/* آیتم‌های سبد خرید */}
          <motion.div className="flex-1 overflow-y-auto min-h-0 -mx-2 px-2 space-y-3">
            <AnimatePresence initial={false} mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 truncate">
                        {item.name}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700">
                        <X className="w-3 h-3 text-zinc-400" />
                      </motion.button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700 px-1">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-0.5 text-zinc-600 dark:text-zinc-400">
                          <Plus className="w-3 h-3" />
                        </motion.button>
                        <span className="text-[11px] font-mono w-4 text-center">
                          {item.quantity.toLocaleString("fa-IR")}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-0.5 text-zinc-600 dark:text-zinc-400">
                          <Minus className="w-3 h-3" />
                        </motion.button>
                      </div>
                      <span className="text-[10px] text-zinc-500">
                        {(item.price * item.quantity).toLocaleString("fa-IR")}{" "}
                        تومان
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* خلاصه سبد خرید */}
          <motion.div
            layout
            className={cn(
              "pt-3 mt-3",
              "border-t border-zinc-200 dark:border-zinc-800",
              "bg-white dark:bg-zinc-900",
            )}>
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                جمع کل
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {/* استفاده از NumberFlow با تنظیمات ساده‌تر برای اطمینان از رندر */}
                <span className="font-mono tabular-nums">
                  {totalPrice.toLocaleString("fa-IR")}
                </span>
                <span className="text-[11px] font-normal mr-1">تومان</span>
              </div>
            </div>
            <Button
              size="sm"
              className="w-full gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90">
              <CreditCard className="w-4 h-4" />
              تکمیل خرید
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
