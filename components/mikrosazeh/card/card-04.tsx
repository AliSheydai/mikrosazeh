"use client";

import {
    SmilePlus,
    Send,
    MoreHorizontal,
    CheckCheck,
    Check,
    Users,
    User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    content: string;
    sender: {
        name: string;
        isOnline: boolean;
    };
    timestamp: string;
    status: "sent" | "delivered" | "read";
    reactions?: Array<{
        emoji: string;
        count: number;
        reacted: boolean;
    }>;
}

interface Card04Props {
    chatName?: string;
    messages?: Message[];
}

export default function Card04({
    chatName = "تیم طراحی",
    messages = [
        {
            id: "1",
            content: "آخرین تغییرات سیستم طراحی رو آپدیت کردم ✨",
            sender: {
                name: "الکس چن",
                isOnline: true,
            },
            timestamp: "۱۰:۲۴",
            status: "read",
            reactions: [
                { emoji: "🙌", count: 2, reacted: true },
                { emoji: "✨", count: 1, reacted: false },
            ],
        },
        {
            id: "2",
            content: "کامپوننت‌های جدید عالی به نظر می‌رسن! خسته نباشی.",
            sender: {
                name: "سارا کیم",
                isOnline: true,
            },
            timestamp: "۱۰:۲۶",
            status: "delivered",
        },
    ],
}: Card04Props) {
    return (
        <div className="w-full max-w-md mx-auto" dir="rtl">
            <div
                className={cn(
                    "relative overflow-hidden",
                    "bg-white/50 dark:bg-zinc-900/50",
                    "backdrop-blur-xl",
                    "border border-zinc-200/50 dark:border-zinc-800/50",
                    "rounded-2xl",
                    "transition-all duration-300",
                    "hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20"
                )}
            >
                {/* Header */}
                <div className="px-5 py-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                    {chatName}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    ۳ عضو • ۲ نفر آنلاین
                                </p>
                            </div>
                        </div>
                        <button type="button" className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-zinc-500" />
                        </button>
                    </div>
                </div>

                {/* Chat Content */}
                <div className="h-[350px] overflow-y-auto p-5 space-y-6">
                    {messages.map((message) => (
                        <div key={message.id} className="group/message">
                            <div className="flex items-start gap-3 mb-1">
                                {/* Icon instead of Image */}
                                <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200/50 dark:border-zinc-700/50 transition-transform group-hover/message:scale-105">
                                    <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                </div>

                                <div className="flex-1 space-y-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                            {message.sender.name}
                                        </span>
                                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500" dir="ltr">
                                            {message.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                                        {message.content}
                                    </p>
                                </div>

                                {/* Status Icon */}
                                <div className="flex items-center pt-1">
                                    {message.status === "read" && <CheckCheck className="w-4 h-4 text-blue-500" />}
                                    {message.status === "delivered" && <Check className="w-4 h-4 text-zinc-400" />}
                                </div>
                            </div>

                            {/* Reactions */}
                            {message.reactions && (
                                <div className="flex items-center gap-1.5 mr-11">
                                    {message.reactions.map((reaction) => (
                                        <button
                                            key={reaction.emoji}
                                            className={cn(
                                                "px-2 py-0.5 rounded-lg text-xs transition-colors",
                                                reaction.reacted
                                                    ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                            )}
                                        >
                                            <span className="ml-1">{reaction.emoji}</span>
                                            <span className="font-sans">{reaction.count}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                    <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="پیامی بنویسید..."
                                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                            />
                            <button className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                                <SmilePlus className="w-4 h-4 text-zinc-500" />
                            </button>
                        </div>
                        <button className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition-opacity">
                            <Send className="w-4 h-4 rotate-180" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}