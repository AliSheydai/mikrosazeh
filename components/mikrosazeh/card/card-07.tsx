import { Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Event {
    title: string;
    time: string;
    attendees: number;
    status: "upcoming" | "inProgress" | "completed";
}

interface Card07Props {
    date?: string;
    events?: Event[];
}

export default function Card07({
    date = "امروز، ۲۴ آذر",
    events = [
        {
            title: "بررسی طراحی",
            time: "۱۰:۰۰ ق.ظ",
            attendees: 5,
            status: "completed"
        },
        {
            title: "هماهنگی تیم",
            time: "۰۲:۳۰ ب.ظ",
            attendees: 8,
            status: "inProgress"
        },
        {
            title: "برنامه‌ریزی محصول",
            time: "۰۴:۰۰ ب.ظ",
            attendees: 12,
            status: "upcoming"
        }
    ]
}: Card07Props) {
    return (
        <div className="w-full max-w-sm mx-auto font-[vazir,system-ui]" dir="rtl">
            <div className={cn(
                "overflow-hidden",
                "bg-white dark:bg-zinc-900",
                "rounded-2xl",
                "transition-all duration-200",
                "border border-zinc-200 dark:border-zinc-800",
                "hover:border-zinc-300 dark:hover:border-zinc-700"
            )}>
                {/* Header */}
                <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                        <div className={cn(
                            "p-2.5 rounded-xl",
                            "bg-zinc-100 dark:bg-zinc-800"
                        )}>
                            <Calendar className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                برنامه زمانی
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                {date}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Events List */}
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {events.map((event, index) => (
                        <div 
                            key={index}
                            className={cn(
                                "p-5",
                                "transition-colors duration-200",
                                "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            )}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    {event.title}
                                </h4>
                                <div className={cn(
                                    "h-1.5 w-1.5 rounded-full",
                                    event.status === "completed" && "bg-emerald-500", // تغییر به سبز برای حس تکمیل شدن
                                    event.status === "inProgress" && "bg-blue-500",
                                    event.status === "upcoming" && "bg-zinc-300 dark:bg-zinc-600"
                                )} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5" />
                                        {event.attendees} نفر
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-zinc-200 dark:border-zinc-800">
                    <button className={cn(
                        "w-full",
                        "flex items-center justify-center gap-2",
                        "px-4 py-2.5 rounded-xl",
                        "bg-zinc-100 dark:bg-zinc-800",
                        "text-sm font-bold text-zinc-900 dark:text-zinc-100",
                        "transition-colors duration-200",
                        "hover:bg-zinc-200 dark:hover:bg-zinc-700",
                        "group"
                    )}>
                        مشاهده کامل برنامه
                        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}