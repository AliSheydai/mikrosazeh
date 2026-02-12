import { Clock, X, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Card_10() {
    // تابع کمکی برای نمایش تاریخ شمسی به صورت ساده
    const getPersianDate = () => {
        return new Intl.DateTimeFormat("fa-IR").format(new Date());
    };

    return (
        <div className="w-full max-w-sm mx-auto font-[vazir,system-ui]" dir="rtl">
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden">
                {/* هدر کارت */}
                <div className="p-5 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xs">
                    <div className="flex items-start justify-between mb-2">
                        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                            مشاوره دندان‌پزشکی
                        </h2>
                        <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-orange-100 text-orange-700 border-orange-200">
                            در انتظار
                        </div>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        تهران، خیابان سلامت، مرکز پزشکی پلاک ۱۲۳
                    </p>
                </div>

                <div className="p-5 space-y-5">
                    {/* اطلاعات بیمار */}
                    <div className="flex items-center gap-3 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                            {/* <Image
                                src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                                fill
                                alt="آواتار"
                                className="object-cover"
                            /> */}
                            <User className="object-cover"/>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                سارا احمدی
                            </div>
                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                                sarah.j@example.com
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-3">
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                نوبت شما
                            </span>
                            <div className="flex items-baseline mt-1 gap-1">
                                <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                                    ۳ 
                                </span>
                                <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                                     امین در صف
                                </span>
                            </div>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-3">
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                انتظار تقریبی
                            </span>
                            <div className="flex items-baseline mt-1 gap-1">
                                <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                                    ۲۵
                                </span>
                                <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                                    دقیقه
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs px-1">
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                                <span className="text-zinc-500 font-bold">
                                    ۰۹:۳۰
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-zinc-500 font-bold">
                                    {getPersianDate()}
                                </span>
                                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            </div>
                        </div>
                        <div>
                            <Progress
                                value={45}
                                className="h-1 bg-zinc-200 dark:bg-zinc-700"
                            />
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        className="w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 h-10 text-sm font-bold"
                    >
                        <X className="w-4 h-4 ml-2" />
                        لغو نوبت رزرو شده
                    </Button>
                </div>
            </div>
        </div>
    );
}