import {
    LogOut,
    MoveUpLeft, // تغییر از MoveUpRight برای جهت فارسی
    Settings,
    CreditCard,
    FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuItem {
    label: string;
    value?: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
}

interface Profile01Props {
    name: string;
    role: string;
    avatar: string;
    subscription?: string;
}

const defaultProfile = {
    name: "یوجین آن",
    role: "مهندس پرامپت",
    avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
    subscription: "نسخه آزمایشی",
} satisfies Required<Profile01Props>;

export default function Profile01({
    name = defaultProfile.name,
    role = defaultProfile.role,
    avatar = defaultProfile.avatar,
    subscription = defaultProfile.subscription,
}: Partial<Profile01Props> = defaultProfile) {
    const menuItems: MenuItem[] = [
        {
            label: "اشتراک من",
            value: subscription,
            href: "#",
            icon: <CreditCard className="w-4 h-4" />,
            external: false,
        },
        {
            label: "تنظیمات کاربری",
            href: "#",
            icon: <Settings className="w-4 h-4" />,
        },
        {
            label: "قوانین و مقررات",
            href: "#",
            icon: <FileText className="w-4 h-4" />,
            external: true,
        },
    ];

    return (
        <div dir="rtl" className="w-full max-w-sm mx-auto font-[vazirmatn,system-ui]">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 backdrop-blur-xl">
                <div className="relative px-6 pt-12 pb-6">
                    {/* بخش اطلاعات پروفایل */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative shrink-0">
                            <Image
                                src={avatar}
                                alt={name}
                                width={72}
                                height={72}
                                className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
                            />
                            {/* نقطه وضعیت آنلاین - انتقال به سمت چپ تصویر در حالت RTL */}
                            <div className="absolute bottom-0 left-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                        </div>

                        <div className="flex-1 text-right">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                {name}
                            </h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {role}
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />

                    {/* منوی کاربری */}
                    <div className="space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between p-2.5 
                                    hover:bg-zinc-100 dark:hover:bg-zinc-800/50 
                                    rounded-xl transition-all duration-200 group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                                        {item.icon}
                                    </span>
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {item.value && (
                                        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
                                            {item.value}
                                        </span>
                                    )}
                                    {item.external && (
                                        <MoveUpLeft className="w-3.5 h-3.5 text-zinc-400" />
                                    )}
                                </div>
                            </Link>
                        ))}

                        <button
                            type="button"
                            className="w-full flex items-center justify-between p-2.5 mt-2
                                hover:bg-red-50 dark:hover:bg-red-950/20 
                                rounded-xl transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-3">
                                <LogOut className="w-4 h-4 text-red-500 group-hover:rotate-180 transition-transform duration-300" />
                                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                                    خروج از حساب
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}