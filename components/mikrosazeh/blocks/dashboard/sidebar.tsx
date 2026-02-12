"use client";

import {
    BarChart2,
    Receipt,
    Building2,
    CreditCard,
    Folder,
    Wallet,
    Users2,
    Shield,
    MessagesSquare,
    Video,
    Settings,
    HelpCircle,
    Menu,
    Home,
    X, // اضافه شده برای دکمه بستن
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function handleNavigation() {
        setIsMobileMenuOpen(false);
    }

    function NavItem({
        href,
        icon: Icon,
        children,
    }: {
        href: string;
        icon: any;
        children: React.ReactNode;
    }) {
        return (
            <Link
                href={href}
                onClick={handleNavigation}
                className="flex items-center px-3 py-2 text-sm rounded-lg transition-all text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23] group"
            >
                {/* در حالت RTL فاصله آیکون باید در سمت چپ آن باشد (ml-3) */}
                <Icon className="h-4 w-4 ml-3 flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-medium">{children}</span>
            </Link>
        );
    }

    return (
        <div dir="rtl" className="font-[vazirmatn,system-ui]">
            {/* دکمه همبرگری موبایل - قرارگیری در سمت راست بالا */}
            <button
                type="button"
                className="lg:hidden fixed top-4 right-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md border border-gray-100 dark:border-[#1F1F23]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                    <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
            </button>

            {/* سایدبار اصلی */}
            <nav
                className={cn(
                    "fixed inset-y-0 right-0 z-[70] w-72 bg-white dark:bg-[#0F0F12] transform transition-transform duration-300 ease-in-out",
                    "lg:translate-x-0 lg:static lg:w-64 border-l border-gray-200 dark:border-[#1F1F23]",
                    // تغییر جهت انیمیشن برای ورود از سمت راست
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
                )}
            >
                <div className="h-full flex flex-col">
                    {/* لوگو و نام برند */}
                    <Link
                        href="/"
                        className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src="https://ui.codesnipet.dev/logo.svg"
                                alt="لوگو"
                                width={30}
                                height={30}
                                className="flex-shrink-0 hidden dark:block"
                            />
                            <Image
                                src="https://ui.codesnipet.dev/logo-black.svg"
                                alt="لوگو"
                                width={30}
                                height={30}
                                className="flex-shrink-0 block dark:hidden"
                            />
                            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                پیشخوان مدیر
                            </span>
                        </div>
                    </Link>

                    {/* محتوای اسکرول‌شونده */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="space-y-8">
                            {/* بخش اصلی */}
                            <div>
                                <div className="px-3 mb-3 text-[11px] font-bold uppercase tracking-[2px] text-gray-400 dark:text-gray-500">
                                    مرور کلی
                                </div>
                                <div className="space-y-1">
                                    <NavItem href="#" icon={Home}>داشبورد</NavItem>
                                    <NavItem href="#" icon={BarChart2}>تحلیل آمار</NavItem>
                                    <NavItem href="#" icon={Building2}>سازمان</NavItem>
                                    <NavItem href="#" icon={Folder}>پروژه‌ها</NavItem>
                                </div>
                            </div>

                            {/* بخش مالی */}
                            <div>
                                <div className="px-3 mb-3 text-[11px] font-bold uppercase tracking-[2px] text-gray-400 dark:text-gray-500">
                                    امور مالی
                                </div>
                                <div className="space-y-1">
                                    <NavItem href="#" icon={Wallet}>تراکنش‌ها</NavItem>
                                    <NavItem href="#" icon={Receipt}>صورت‌حساب‌ها</NavItem>
                                    <NavItem href="#" icon={CreditCard}>پرداخت‌ها</NavItem>
                                </div>
                            </div>

                            {/* بخش تیم */}
                            <div>
                                <div className="px-3 mb-3 text-[11px] font-bold uppercase tracking-[2px] text-gray-400 dark:text-gray-500">
                                    تیم و ارتباطات
                                </div>
                                <div className="space-y-1">
                                    <NavItem href="#" icon={Users2}>اعضا</NavItem>
                                    <NavItem href="#" icon={Shield}>دسترسی‌ها</NavItem>
                                    <NavItem href="#" icon={MessagesSquare}>گفتگو</NavItem>
                                    <NavItem href="#" icon={Video}>جلسات آنلاین</NavItem>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* بخش پایین سایدبار */}
                    <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
                        <div className="space-y-1">
                            <NavItem href="#" icon={Settings}>تنظیمات سیستم</NavItem>
                            <NavItem href="#" icon={HelpCircle}>مرکز پشتیبانی</NavItem>
                        </div>
                    </div>
                </div>
            </nav>

            {/* لایه تیره پس‌زمینه در موبایل */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[65] lg:hidden transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}