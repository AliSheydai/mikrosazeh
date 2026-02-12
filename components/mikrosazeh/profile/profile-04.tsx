import { LogOut, Flame, Shield, ArrowUpLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Profile04Props {
    name: string;
    role: string;
    subscription?: string;
    email?: string;
    level?: number;
    currentExp?: number;
    maxExp?: number;
}

const defaultProfile = {
    name: "کوکونات",
    role: "توسعه‌دهنده اپلیکیشن",
    subscription: "اشتراک ویژه",
    email: "hello@mikrosazeh.com",
    level: 42,
    currentExp: 2800,
    maxExp: 4000,
} satisfies Required<Profile04Props>;

export default function Profile04({
    name = defaultProfile.name,
    role = defaultProfile.role,
    subscription = defaultProfile.subscription,
    email = defaultProfile.email,
    level = defaultProfile.level,
    currentExp = defaultProfile.currentExp,
    maxExp = defaultProfile.maxExp,
}: Partial<Profile04Props> = defaultProfile) {
    const menuItems = [
        {
            icon: <ArrowUpLeft className="w-4 h-4 text-amber-500" />,
            label: "سطح فعلی",
            value: level,
            desc: `${currentExp} / ${maxExp} امتیاز (XP)`,
            progress: (currentExp / maxExp) * 100,
        },
        {
            icon: <Flame className="w-4 h-4 text-red-500" />,
            label: "فعالیت مستمر",
            value: "۷ روز",
            desc: "🔥 همین‌طور ادامه بده!",
        },
        {
            icon: <Shield className="w-4 h-4 text-emerald-500" />,
            label: "دستاوردها",
            value: "۱۲/۳۰",
            desc: "سطح استاد ۳",
        },
    ];

    return (
        <div className="w-full max-w-md mx-auto" dir="rtl">
            <div
                className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 
                bg-linear-to-b from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-900/50"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-xl ring-2 ring-zinc-100 dark:ring-zinc-800 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
                                <User className="w-8 h-8 text-zinc-400" />
                            </div>
                            <Badge
                                variant="secondary"
                                className="mt-2 px-2 py-0.5 text-xs font-medium 
                                    bg-linear-to-r from-amber-100 to-amber-200 
                                    dark:from-amber-900/50 dark:to-amber-800/50 
                                    text-amber-700 dark:text-amber-400
                                    border-amber-200/50 dark:border-amber-800/50"
                            >
                                {subscription}
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
                            <p className="text-sm text-zinc-500">{role}</p>
                            <p className="text-sm text-zinc-400" dir="ltr">{email}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                        <LogOut className="w-4 h-4" />
                    </Button>
                </div>

                <div className="space-y-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 
                                border border-zinc-200/50 dark:border-zinc-800/50"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-sm font-medium">
                                        {item.label}
                                    </span>
                                </div>
                                <span className="text-lg font-semibold">
                                    {item.value}
                                </span>
                            </div>
                            {item.progress ? (
                                <div className="space-y-2">
                                    <Progress
                                        value={item.progress}
                                        className="h-2"
                                    />
                                    <p className="text-xs text-zinc-400">
                                        {item.desc}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-xs text-zinc-400">
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}