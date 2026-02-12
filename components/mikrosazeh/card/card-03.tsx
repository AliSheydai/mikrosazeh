"use client";

import { Rocket, CheckCircle2, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
    name: string;
    role: string;
    status: "online" | "busy" | "offline";
}

interface Milestone {
    title: string;
    dueDate: string;
    completed: boolean;
}

interface Card03Props {
    projectName?: string;
    description?: string;
    teamMembers?: TeamMember[];
    milestones?: Milestone[];
}

// Helper to get initials and a consistent color
const getAvatarFallback = (name: string) => {
    const initials = name.substring(0, 1).toUpperCase();
    const colors = [
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    ];
    // Simple hash to keep color consistent for the same name
    const charCode = name.charCodeAt(0);
    return { initials, colorClass: colors[charCode % colors.length] };
};

export default function Card03({
    projectName = "در حال تکمیل",
    description = "بازطراحی و نوسازی رابط کاربری وب‌سایت",
    teamMembers = [
        { name: "الکس", role: "طراح ارشد", status: "online" },
        { name: "سارا", role: "توسعه‌دهنده", status: "busy" },
        { name: "مایک", role: "مدیر پروژه", status: "offline" },
    ],
    milestones = [
        { title: "حالت تاریک", dueDate: "۲ روز", completed: true },
        { title: "طراحی کامپوننت‌ها", dueDate: "۵ روز مانده", completed: false },
        { title: "مستندسازی", dueDate: "۷ روز مانده", completed: false },
    ],
}: Card03Props) {
    return (
        <div className="w-full max-w-md mx-auto" dir="rtl">
            <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl dark:hover:shadow-none">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{projectName}</h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                        </div>
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Team Initials/Icons Stacked */}
                        <div className="flex flex-row-reverse justify-end -space-x-3 space-x-reverse">
                            {teamMembers.map((member) => {
                                const { initials, colorClass } = getAvatarFallback(member.name);
                                return (
                                    <div key={member.name} className="relative group cursor-pointer">
                                        <div className={cn(
                                            "relative w-9 h-9 flex items-center justify-center rounded-full ring-2 ring-white dark:ring-zinc-900 text-xs font-bold transition-transform group-hover:-translate-y-1",
                                            colorClass
                                        )}>
                                            {initials}
                                        </div>
                                        <div className={cn(
                                            "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-zinc-900",
                                            member.status === "online" && "bg-emerald-500",
                                            member.status === "busy" && "bg-amber-500",
                                            member.status === "offline" && "bg-zinc-300 dark:bg-zinc-600"
                                        )} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Milestones */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3">مراحل کلیدی پروژه</h3>
                            {milestones.map((milestone) => (
                                <div key={milestone.title} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-transparent transition-all duration-200 hover:border-zinc-200 dark:hover:border-zinc-700">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-6 h-6 rounded-lg flex items-center justify-center",
                                            milestone.completed ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600" : "bg-zinc-200 dark:bg-zinc-700 text-zinc-400"
                                        )}>
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className={cn(
                                            "text-sm font-medium",
                                            milestone.completed ? "text-zinc-400 line-through decoration-zinc-300" : "text-zinc-700 dark:text-zinc-300"
                                        )}>
                                            {milestone.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400 bg-white dark:bg-zinc-800 px-2 py-1 rounded-md shadow-xs">
                                        <Clock className="w-3 h-3" />
                                        {milestone.dueDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}