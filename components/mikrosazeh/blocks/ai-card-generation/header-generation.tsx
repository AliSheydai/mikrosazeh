import React from "react";

export const HeaderGeneration = () => {
    return (
        <div dir="rtl" className="p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 font-sans">
            <div className="flex items-center gap-3">
                <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        تولید پرتره با هوش مصنوعی
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        پرتره‌های خیره‌کننده با قدرت هوش مصنوعی بسازید
                    </p>
                </div>
            </div>
        </div>
    );
};