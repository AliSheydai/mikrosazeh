import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Bell, Sun, Moon, ChevronLeft } from "lucide-react"; // تغییر از ChevronRight
import Profile01 from "./profile-01";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function TopNav() {
    const breadcrumbs: BreadcrumbItem[] = [
        { label: "پنل مدیریت", href: "#" },
        { label: "داشبورد اصلی", href: "#" },
    ];

    return (
        <nav 
            dir="rtl" 
            className="px-4 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full font-[vazirmatn,system-ui]"
        >
            {/* بخش مسیر راه (Breadcrumbs) - در سمت راست */}
            <div className="font-medium text-sm hidden sm:flex items-center truncate max-w-[400px]">
                {breadcrumbs.map((item, index) => (
                    <div key={item.label} className="flex items-center">
                        {index > 0 && (
                            <ChevronLeft className="h-4 w-4 text-gray-400 mx-2" />
                        )}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 dark:text-gray-100 font-bold">
                                {item.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* بخش ابزارها و پروفایل - در سمت چپ */}
            <div className="flex items-center gap-2 sm:gap-4 mr-auto sm:mr-0">
                {/* اعلان‌ها */}
                <button
                    type="button"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors relative"
                >
                    <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0F0F12]" />
                </button>

                {/* تغییر تم */}
                <button
                    type="button"
                    className="relative p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors overflow-hidden"
                >
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
                    <Moon className="absolute h-5 w-5 text-gray-600 dark:text-gray-300 transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="sr-only">تغییر تم</span>
                </button>

                {/* منوی پروفایل */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none flex items-center">
                        <div className="relative group">
                            <Image
                                src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                                alt="آواتار کاربر"
                                width={36}
                                height={36}
                                className="rounded-full ring-2 ring-gray-100 dark:ring-[#2B2B30] group-hover:ring-blue-400 transition-all cursor-pointer"
                            />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="start" // تغییر از end به start برای باز شدن در جهت درست RTL
                        sideOffset={12}
                        className="w-[280px] sm:w-80 bg-white dark:bg-[#0F0F12] border-gray-200 dark:border-[#1F1F23] rounded-xl shadow-2xl p-0"
                    >
                        <Profile01 avatar="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png" />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}