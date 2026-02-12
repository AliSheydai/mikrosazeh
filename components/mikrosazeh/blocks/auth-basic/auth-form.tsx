"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockIcon } from "lucide-react";

export function AuthForm() {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            /**
             * برای پیاده‌سازی منطق احراز هویت واقعی
             */
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("ورود با:", email, password);
        } catch (error) {
            console.error("خطای احراز هویت:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-right" noValidate dir="rtl">
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-black dark:text-white block"
                >
                    ایمیل
                </label>
                <div className="relative">
                    {/* آیکون به سمت راست منتقل شد (right-3) */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center w-4 h-4 font-sans">
                        @
                    </span>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        disabled={isLoading}
                        /* پدینگ راست (pr-10) برای ایجاد فضا جهت آیکون اضافه شد */
                        className="pr-10 h-12 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring text-left font-sans"
                        autoComplete="email"
                        dir="ltr" // ایمیل همیشه باید چپ‌به‌راست باشد
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black dark:text-white block">
                    رمز عبور
                </label>
                <div className="relative">
                    {/* آیکون قفل به سمت راست منتقل شد (right-3) */}
                    <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                        type="password"
                        name="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        required
                        disabled={isLoading}
                        /* پدینگ راست (pr-10) برای ایجاد فضا جهت آیکون اضافه شد */
                        className="pr-10 h-12 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring text-left"
                        dir="ltr" // رمز عبور بهتر است چپ‌به‌راست تایپ شود
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-base font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors"
            >
                {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                {isLoading ? "در حال ورود..." : "ورود به حساب"}
            </Button>
        </form>
    );
}