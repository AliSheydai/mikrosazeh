"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Check, X } from "lucide-react";

const passwordRequirements = [
    { label: "حداقل ۸ کاراکتر", test: (v: string) => v.length >= 8 },
    { label: "شامل عدد", test: (v: string) => /\d/.test(v) },
    { label: "حروف کوچک", test: (v: string) => /[a-z]/.test(v) },
    { label: "حروف بزرگ", test: (v: string) => /[A-Z]/.test(v) },
    {
        label: "کاراکتر خاص (!@#$)",
        test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v),
    },
] as const;

export default function Input_05() {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const getStrength = (value: string): number => {
        if (!value) return 0;
        return (
            passwordRequirements.filter((req) => req.test(value)).length * 20
        );
    };

    const strength = getStrength(value);
    const strengthLabel =
        strength <= 40 ? "ضعیف" : strength <= 80 ? "متوسط" : "قوی";

    return (
        <div className="w-full space-y-2" dir="rtl">
            <label
                htmlFor="input-06"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
                رمز عبور
            </label>

            <div className="relative">
                <input
                    id="input-06"
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    placeholder="رمز عبور خود را وارد کنید"
                    className={cn(
                        "w-full px-3 py-2 pl-10 text-right",
                        "rounded-md border",
                        "bg-white dark:bg-black/5",
                        "border-zinc-200 dark:border-zinc-800",
                        "focus:outline-hidden focus:ring-2",
                        "focus:ring-zinc-900/20 dark:focus:ring-zinc-100/20"
                    )}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                        showPassword ? "مخفی‌سازی رمز" : "نمایش رمز"
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2
                    text-zinc-400 hover:text-zinc-900 
                    dark:text-zinc-500 dark:hover:text-zinc-100
                    transition-colors"
                >
                    {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                    ) : (
                        <Eye className="w-4 h-4" />
                    )}
                </button>
            </div>

            {value && (
                <div className="space-y-1">
                    <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full">
                        <div
                            className={cn(
                                "h-full transition-all duration-300 rounded-full",
                                strength <= 40 ? "bg-red-500" : strength <= 80 ? "bg-yellow-500" : "bg-green-500"
                            )}
                            style={{ width: `${strength}%` }}
                        />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        امنیت:{" "}
                        <span className="font-medium">{strengthLabel}</span>
                    </p>
                </div>
            )}

            <div className="space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                {passwordRequirements.map(({ label, test }) => (
                    <div key={label} className="flex items-center gap-2">
                        {test(value) ? (
                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                        ) : (
                            <X className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700" />
                        )}
                        <span className={cn(test(value) && "text-zinc-900 dark:text-zinc-100")}>
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}