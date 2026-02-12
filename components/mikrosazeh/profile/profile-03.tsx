"use client";

import { Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfileFormProps {
    defaultValues?: {
        name: string;
        username: string;
        bio: string;
        location?: string;
        website?: string;
        twitter?: string;
        instagram?: string;
    };
}

const socialLabels: Record<string, string> = {
    website: "وب‌سایت",
    twitter: "توییتر (X)",
    instagram: "اینستاگرام",
};

export default function ProfileForm({ defaultValues }: ProfileFormProps) {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const inputFocusVariants = {
        focus: { scale: 1.01, borderColor: "rgb(161 161 170 / 0.8)" }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-2xl mx-auto space-y-8 p-6 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xs rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs" 
            dir="rtl"
        >
            <div className="flex items-center justify-center gap-6">
                <Avatar className="h-24 w-24 rounded-full border-2 border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
                    <AvatarFallback className="bg-zinc-100 dark:bg-zinc-900">
                        <User className="h-12 w-12 text-zinc-400" />
                    </AvatarFallback>
                </Avatar>
                <Button
                    variant="outline"
                    className="h-24 w-24 rounded-full border-2 border-dashed border-zinc-200/80 dark:border-zinc-800/80 
                             hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50
                             transition-colors shadow-sm"
                >
                    <Sparkles className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                </Button>
            </div>
            
            <p className="text-zinc-700 dark:text-zinc-300 w-full text-center text-sm hover:cursor-pointer">
                بارگذاری / ساخت تصویر پروفایل جدید
            </p>

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="name" className="text-zinc-700 dark:text-zinc-300">
                        نام نمایشی
                    </Label>
                    <motion.div whileFocus="focus" variants={inputFocusVariants}>
                        <Input
                            id="name"
                            placeholder="نام کامل شما"
                            defaultValue={defaultValues?.name}
                            autoComplete="off"
                            className="bg-white dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80
                                     focus-visible:ring-2 focus-visible:ring-zinc-500/20 transition-all duration-300"
                        />
                    </motion.div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="username" className="text-zinc-700 dark:text-zinc-300">
                        نام کاربری
                    </Label>
                    <motion.div whileFocus="focus" variants={inputFocusVariants}>
                        <Input
                            id="username"
                            placeholder="username@"
                            defaultValue={defaultValues?.username}
                            autoComplete="off"
                            dir="ltr"
                            className="bg-white dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80
                                     focus-visible:ring-2 focus-visible:ring-zinc-500/20 text-right transition-all duration-300"
                        />
                    </motion.div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="bio" className="text-zinc-700 dark:text-zinc-300">
                        درباره من
                    </Label>
                    <motion.div whileFocus="focus" variants={inputFocusVariants}>
                        <Textarea
                            id="bio"
                            placeholder="کمی درباره خودتان بنویسید"
                            rows={4}
                            defaultValue={defaultValues?.bio}
                            className="resize-none bg-white dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80
                                     focus-visible:ring-2 focus-visible:ring-zinc-500/20 transition-all duration-300"
                        />
                    </motion.div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        شبکه‌های اجتماعی
                    </h3>
                    <div className="grid gap-4">
                        {["website", "twitter", "instagram"].map((social) => (
                            <div key={social} className="grid gap-2">
                                <Label htmlFor={social} className="text-zinc-700 dark:text-zinc-300">
                                    {socialLabels[social]}
                                </Label>
                                <motion.div whileFocus="focus" variants={inputFocusVariants}>
                                    <Input
                                        id={social}
                                        dir="ltr"
                                        placeholder={social === "website" ? "https://your-website.com" : "@username"}
                                        defaultValue={defaultValues?.[social as keyof typeof defaultValues]}
                                        className="bg-white dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80
                                                 focus-visible:ring-2 focus-visible:ring-zinc-500/20 text-left transition-all duration-300"
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="border-zinc-200/80 dark:border-zinc-800/80">
                    انصراف
                </Button>
                <Button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
                    ذخیره تغییرات
                </Button>
            </div>
        </motion.div>
    );
}