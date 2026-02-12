import { motion } from "motion/react";
import { type Product } from "./data";

interface ProductGridProps {
    products: Product[];
    onProductSelect: (product: Product) => void;
}

export function ProductGrid({ products, onProductSelect }: ProductGridProps) {
    return (
        <div 
            dir="rtl" 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 font-[vazirmatn,system-ui]"
        >
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    layoutId={`product-${product.id}`}
                    onClick={() => onProductSelect(product)}
                    className="group cursor-pointer flex flex-col"
                    whileHover={{ y: -5 }} // کمی جابه‌جایی بیشتر برای حس پویایی
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {/* کانتینر تصویر */}
                    <div className="aspect-[4/5] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors group-hover:border-zinc-200 dark:group-hover:border-zinc-700">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* اطلاعات محصول */}
                    <div className="mt-3 px-1 space-y-1">
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate flex-1">
                                {product.name}
                            </h3>
                            <span className="text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-md whitespace-nowrap">
                                {product.category}
                            </span>
                        </div>
                        
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm font-black text-zinc-950 dark:text-zinc-50">
                                {product.price.toLocaleString('fa-IR')}
                            </span>
                            <span className="text-[10px] text-zinc-500">تومان</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}