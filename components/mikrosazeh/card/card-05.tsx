"use client";

import {
    Activity,
    ArrowUpLeft,
    Plus,
    Target,
    CheckCircle2,
    Edit3,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// --- Interfaces ---
export interface Metric {
    label: string;
    value: string;
    trend: number;
    unit?: "کالری" | "دقیقه" | "ساعت";
}

export interface Goal {
    id: string;
    title: string;
    isCompleted: boolean;
}

const METRIC_COLORS = {
    حرکت: "#FF2D55",
    ورزش: "#2CD758",
    ایستادن: "#007AFF",
} as const;

export default function Card05() {
    const [goals, setGoals] = useState<Goal[]>([
        { id: "1", title: "۳۰ دقیقه یوگای صبحگاهی", isCompleted: true },
        { id: "2", title: "۱۰ هزار قدم", isCompleted: false },
        { id: "3", title: "نوشیدن ۲ لیتر آب", isCompleted: true },
    ]);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const metrics: Metric[] = [
        { label: "حرکت", value: "۴۲۰", trend: 85, unit: "کالری" },
        { label: "ورزش", value: "۳۵", trend: 70, unit: "دقیقه" },
        { label: "ایستادن", value: "۱۰", trend: 83, unit: "ساعت" },
    ];

    // فوکوس خودکار روی اینپوت هنگام ویرایش
    useEffect(() => {
        if (editingId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editingId]);

    const handleToggleGoal = (goalId: string) => {
        setGoals(prev => prev.map(g => g.id === goalId ? { ...g, isCompleted: !g.isCompleted } : g));
    };

    const handleAddGoal = () => {
        const newId = Math.random().toString(36).substr(2, 9);
        const newGoal: Goal = {
            id: newId,
            title: "هدف جدید...",
            isCompleted: false
        };
        setGoals([newGoal, ...goals]);
        setEditingId(newId);
        setEditValue("");
    };

    const startEditing = (e: React.MouseEvent, goal: Goal) => {
        e.stopPropagation(); // جلوگیری از تیک خوردن تسک هنگام کلیک برای ویرایش
        setEditingId(goal.id);
        setEditValue(goal.title);
    };

    const saveEdit = () => {
        if (editingId) {
            setGoals(prev => prev.map(g => 
                g.id === editingId ? { ...g, title: editValue.trim() || g.title } : g
            ));
            setEditingId(null);
        }
    };

    return (
        <div className="p-8 font-[vazir,system-ui]" dir="rtl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto rounded-3xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-500">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-none">تندرستی</h3>
                            <p className="text-xs text-zinc-500 mt-1">پیشرفت روزانه شما</p>
                        </div>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddGoal}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold transition-hover hover:opacity-90"
                    >
                        <Plus className="w-4 h-4" />
                        افزودن هدف
                    </motion.button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col items-center">
                            <div className="relative w-20 h-20 mb-3">
                                <svg className="w-full h-full -rotate-90">
                                    <circle cx="40" cy="40" r="36" className="fill-none stroke-zinc-100 dark:stroke-zinc-800 stroke-[5]" />
                                    <motion.circle 
                                        cx="40" cy="40" r="36"
                                        className="fill-none stroke-[5]"
                                        stroke={METRIC_COLORS[metric.label as keyof typeof METRIC_COLORS]}
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: "0 226" }}
                                        animate={{ strokeDasharray: `${(metric.trend / 100) * 226} 226` }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-sm font-bold dark:text-white leading-none">{metric.value}</span>
                                    <span className="text-[9px] text-zinc-500 mt-0.5">{metric.unit}</span>
                                </div>
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400">{metric.label}</span>
                        </div>
                    ))}
                </div>

                {/* Goals List */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white">
                        <Target className="w-4 h-4 text-zinc-400" />
                        <span className="text-sm font-bold">لیست اهداف</span>
                    </div>

                    <div className="space-y-2 relative">
                        <AnimatePresence mode="popLayout">
                            {goals.map((goal) => (
                                <motion.div
                                    layout
                                    key={goal.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={cn(
                                        "group flex items-center gap-3 p-3 rounded-2xl border transition-all",
                                        goal.isCompleted 
                                            ? "bg-zinc-50/50 border-transparent opacity-70" 
                                            : "bg-white dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-800"
                                    )}
                                >
                                    <button 
                                        onClick={() => handleToggleGoal(goal.id)}
                                        className="focus:outline-none"
                                    >
                                        <CheckCircle2 className={cn(
                                            "w-6 h-6 transition-colors",
                                            goal.isCompleted ? "text-emerald-500" : "text-zinc-200 dark:text-zinc-700"
                                        )} />
                                    </button>

                                    <div className="flex-1 overflow-hidden">
                                        {editingId === goal.id ? (
                                            <input
                                                ref={inputRef}
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                onBlur={saveEdit}
                                                onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                                                className="w-full bg-transparent border-none outline-none text-sm font-medium dark:text-white"
                                            />
                                        ) : (
                                            <span 
                                                onClick={(e) => startEditing(e, goal)}
                                                className={cn(
                                                    "text-sm font-medium cursor-text block truncate dark:text-zinc-200",
                                                    goal.isCompleted && "line-through text-zinc-400"
                                                )}
                                            >
                                                {goal.title}
                                            </span>
                                        )}
                                    </div>

                                    {!goal.isCompleted && editingId !== goal.id && (
                                        <Edit3 
                                            className="w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity" 
                                            onClick={(e) => startEditing(e, goal)}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <button className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        تحلیل کامل هفته
                        <ArrowUpLeft className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}