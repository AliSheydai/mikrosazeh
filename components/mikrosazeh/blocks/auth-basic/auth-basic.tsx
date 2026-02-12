import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AuthForm } from "./auth-form";
import { SocialLogin } from "./social-login";

export default function AuthBasic() {
    return (
        /* استفاده از dir="rtl" برای راست‌چین کردن کل کانتینر */
        <div dir="rtl" className="flex items-center justify-center my-12 p-4 bg-white dark:bg-black font-sans">
            <div className="w-full max-w-[450px]">
                <div className="w-full h-48 relative mb-4">
                    <Image
                        src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/to-the-moon-u5UJD9sRK8WkmaTY8HdEsNKjAQ9bjN.svg"
                        alt="تصویر خوش‌آمدگویی"
                        fill
                        className="object-cover"
                    />
                </div>
                <Card className="w-full border-0 shadow-lg bg-white dark:bg-zinc-950">
                    <CardHeader className="space-y-2 text-right">
                        <CardTitle className="text-2xl font-bold tracking-tight text-black dark:text-white">
                            خوش آمدید
                        </CardTitle>
                        <CardDescription className="text-neutral-600 dark:text-neutral-400">
                            برای دسترسی به حساب کاربری خود، اطلاعات ورود را وارد کنید
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <AuthForm />
                        {/* خط جداکننده بصری بین فرم و ورود اجتماعی (در صورت نیاز) */}
                        {/* <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-zinc-950 px-2 text-zinc-500">
                                    یا ادامه با
                                </span>
                            </div>
                        </div> */}
                        <SocialLogin />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}