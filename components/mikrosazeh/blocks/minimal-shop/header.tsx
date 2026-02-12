import { Search, ShoppingBag, Menu } from "lucide-react";

interface HeaderProps {
    cartCount: number;
    onCartOpen: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function Header({
    cartCount,
    onCartOpen,
    searchQuery,
    onSearchChange,
}: HeaderProps) {
    return (
        <header 
            dir="rtl" 
            className="w-full z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 font-[vazirmatn,system-ui]"
        >
            <div className="container mx-auto px-4">
                <div className="h-16 flex items-center justify-between gap-4">
                    
                    {/* بخش سمت راست: منو و نام فروشگاه */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-bold tracking-tight hidden sm:block">فروشگاه مدرن</span>
                    </div>

                    {/* بخش وسط: باکس جستجو */}
                    <div className="flex-1 max-w-md">
                        <div className="relative group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                placeholder="جستجوی محصولات..."
                                /* pr-10 برای ایجاد فضا برای آیکون در سمت راست */
                                className="w-full h-10 pr-10 pl-4 text-sm bg-zinc-100 dark:bg-zinc-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-800 transition-all border border-transparent focus:bg-white dark:focus:bg-zinc-950"
                            />
                            {/* آیکون در سمت راست قرار گرفت */}
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-900 dark:group-focus-within:text-zinc-100 transition-colors" />
                        </div>
                    </div>

                    {/* بخش سمت چپ: سبد خرید */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={onCartOpen}
                            className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                            {cartCount > 0 && (
                                <span 
                                    className="absolute -top-0.5 -left-0.5 w-5 h-5 text-[11px] font-bold flex items-center justify-center bg-red-500 text-white rounded-full border-2 border-white dark:border-zinc-950 animate-in zoom-in"
                                >
                                    {cartCount.toLocaleString('fa-IR')}
                                </span>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}