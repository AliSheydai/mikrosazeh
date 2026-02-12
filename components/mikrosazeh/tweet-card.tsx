"use client";

import { User, VerifiedIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Vazirmatn } from "next/font/google";
import Image from "next/image";

// استفاده از فونت فارسی برای نمایش بهتر متون
const vazir = Vazirmatn({ subsets: ["arabic"] });

interface ReplyProps {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string;
    isVerified?: boolean;
    timestamp: string;
}

interface TweetCardProps {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string[];
    isVerified?: boolean;
    timestamp: string;
    reply?: ReplyProps;
}

export default function TweetCard({
    authorName = "دوریان",
    authorHandle = "dorian_baffier",
    authorImage = "https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg",
    content = [
        "تمام کامپوننت‌های میکروسازه اکنون قابل مشاده و استفاده هستند.🎉",
        "۱. وارد وبسایت میکروسازه شوید",
        "۲. کامپوننت دلخواه رو انتخاب کنید.",
        "۳. در اپلیکیشن خود مستقر کنید",
    ],
    isVerified = true,
    timestamp = "۲۹ دی ۱۴۰۳",
    reply = {
        authorName: "shadcn",
        authorHandle: "shadcn",
        authorImage:
            "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
        content: "فوق‌العاده است.",
        isVerified: true,
        timestamp: "۲۹ دی",
    },
}: TweetCardProps) {
    return (
        <Link
            href="https://x.com/dorian_baffier/status/1880291036410572934"
            target="_blank"
            dir="rtl" // فعال‌سازی راست‌چین
            className={vazir.className}
        >
            <div
                className={cn(
                    "w-full min-w-[400px] md:min-w-[500px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
                    "bg-white/5 dark:bg-black/90",
                    "bg-linear-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]",
                    "backdrop-blur-xl backdrop-saturate-[180%]",
                    "border border-black/10 dark:border-white/10",
                    "shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]",
                    "will-change-transform translate-z-0"
                )}
            >
                <div
                    className={cn(
                        "w-full p-5 rounded-xl relative",
                        "bg-linear-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent",
                        "backdrop-blur-md backdrop-saturate-150",
                        "border border-black/[0.05] dark:border-white/[0.08]",
                        "text-black/90 dark:text-white",
                        "shadow-xs",
                        "will-change-transform translate-z-0",
                        "before:absolute before:inset-0 before:bg-linear-to-br before:from-black/[0.02] before:to-black/[0.01] dark:before:from-white/[0.03] dark:before:to-white/[0.01] before:opacity-0 before:transition-opacity before:pointer-events-none",
                        "hover:before:opacity-100"
                    )}
                >
                    <div className="flex gap-3">
                        {/* تصویر پروفایل در سمت راست */}
                        <div className="shrink-0">
                            <div className="h-10 w-10 rounded-full overflow-hidden border border-black/5 dark:border-white/10">
                                {/* <Image
                                    fill
                                    src={authorImage}
                                    alt={authorName}
                                    className="h-full w-full object-cover"
                                /> */}
                                <User className="h-full w-full p-1"/>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-black dark:text-white/90 hover:underline cursor-pointer">
                                            {authorName}
                                        </span>
                                        {isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                    </div>
                                    <span className="text-black/60 dark:text-white/60 text-sm font-mono" dir="ltr">
                                        @{authorHandle}
                                    </span>
                                </div>
                                {/* آیکون X در سمت چپ */}
                                <button
                                    type="button"
                                    className="h-8 w-8 text-black dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg p-1 flex items-center justify-center transition-colors"
                                >
                                    <svg viewBox="0 0 1200 1227" className="w-4 h-4" fill="currentColor">
                                        <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        {content.map((item, index) => (
                            <p
                                key={index}
                                className="text-black/90 dark:text-white/90 text-[15px] leading-relaxed"
                            >
                                {item}
                            </p>
                        ))}
                        <span className="text-black/40 dark:text-white/40 text-xs mt-3 block">
                            {timestamp}
                        </span>
                    </div>

                    {reply && (
                        <div className="mt-4 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                            <div className="flex gap-3">
                                <div className="shrink-0">
                                    <div className="h-9 w-9 rounded-full overflow-hidden border border-black/5 dark:border-white/10">
                                        {/* <Image
                                            fill
                                            src={reply.authorImage}
                                            alt={reply.authorName}
                                            className="h-full w-full object-cover"
                                        /> */}
                                    <User className="h-full w-full p-1"/>

                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="font-bold text-black/90 dark:text-white/90 text-sm hover:underline cursor-pointer">
                                            {reply.authorName}
                                        </span>
                                        {reply.isVerified && (
                                            <VerifiedIcon className="h-3.5 w-3.5 text-blue-400" />
                                        )}
                                        <span className="text-black/50 dark:text-white/50 text-xs font-mono" dir="ltr">
                                            @{reply.authorHandle}
                                        </span>
                                        <span className="text-black/30 dark:text-white/30 text-xs">·</span>
                                        <span className="text-black/50 dark:text-white/50 text-xs">
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-black/80 dark:text-white/80 text-sm mt-1 leading-normal">
                                        {reply.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}