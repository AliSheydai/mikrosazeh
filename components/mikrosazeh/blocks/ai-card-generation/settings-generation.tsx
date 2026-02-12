import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Palette,
    Image as ImageIcon,
    Sun,
    User,
    Monitor
} from "lucide-react";

interface VideoSettings {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}

interface SettingsProps {
    settings: VideoSettings;
    onSettingsChange: (settings: VideoSettings) => void;
}

// تنظیمات انیمیشن برای باز و بسته شدن نرم لیست
const dropdownVariants = {
    hidden: { 
        opacity: 0, 
        y: -6,
        transition: { duration: 0.15, ease: "easeInOut" }
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
        opacity: 0, 
        y: -6,
        transition: { duration: 0.15, ease: "easeInOut" }
    }
};

export const SettingsGeneration = ({
    settings,
    onSettingsChange,
}: SettingsProps) => {

    const AnimatedRow = ({ icon: Icon, label, value, onChange, options }: any) => (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-zinc-500" />
                <span className="text-sm text-zinc-500">{label}</span>
            </div>
            <Select value={value} onValueChange={onChange}>
                {/* حذف انیمیشن‌های Hover و Tap از روی دکمه */}
                <div className="w-[140px]">
                    <SelectTrigger className="w-full h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm focus:ring-0 transition-none">
                        <SelectValue />
                    </SelectTrigger>
                </div>
                
                <SelectContent dir="rtl" className="border-zinc-200 dark:border-zinc-800 p-0 overflow-hidden shadow-2xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                    >
                        {options.map((option: any) => (
                            <SelectItem 
                                key={option.value} 
                                value={option.value}
                                className="cursor-pointer focus:bg-zinc-100 dark:focus:bg-zinc-800 transition-colors"
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </motion.div>
                </SelectContent>
            </Select>
        </div>
    );

    return (
        <div dir="rtl" className="space-y-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 font-sans border border-zinc-200/50 dark:border-zinc-700/50">
            
            <AnimatedRow 
                icon={Palette}
                label="سبک"
                value={settings.style}
                onChange={(val: string) => onSettingsChange({ ...settings, style: val })}
                options={[
                    { value: "professional", label: "حرفه‌ای" },
                    { value: "artistic", label: "هنری" },
                    { value: "casual", label: "روزمره" },
                    { value: "vintage", label: "کلاسیک" },
                ]}
            />

            <AnimatedRow 
                icon={ImageIcon}
                label="پس‌زمینه"
                value={settings.backgroundColor}
                onChange={(val: string) => onSettingsChange({ ...settings, backgroundColor: val })}
                options={[
                    { value: "studio", label: "استودیویی" },
                    { value: "gradient", label: "طیف رنگی" },
                    { value: "solid", label: "تک رنگ" },
                    { value: "transparent", label: "شفاف" },
                ]}
            />

            <AnimatedRow 
                icon={Sun}
                label="نورپردازی"
                value={settings.lighting}
                onChange={(val: string) => onSettingsChange({ ...settings, lighting: val })}
                options={[
                    { value: "soft", label: "ملایم" },
                    { value: "dramatic", label: "دراماتیک" },
                    { value: "natural", label: "طبیعی" },
                    { value: "studio", label: "استودیویی" },
                ]}
            />

            <AnimatedRow 
                icon={User}
                label="فیگور"
                value={settings.pose}
                onChange={(val: string) => onSettingsChange({ ...settings, pose: val })}
                options={[
                    { value: "headshot", label: "تصویر صورت" },
                    { value: "half-body", label: "نیم‌تنه" },
                    { value: "full-body", label: "تمام‌قد" },
                    { value: "profile", label: "نیم‌رخ" },
                ]}
            />

            <div className="flex items-center justify-between gap-4 pt-2 border-t border-zinc-200 dark:border-zinc-700/50">
                <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">کیفیت</span>
                </div>
                <span className="text-sm text-zinc-900 dark:text-zinc-100 font-mono" dir="ltr">
                    720p
                </span>
            </div>
        </div>
    );
};