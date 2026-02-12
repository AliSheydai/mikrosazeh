"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    id: string;
    question: string;
    answer: string | React.ReactNode;
    category: FAQCategory;
}

type FAQCategory = 'getting-started' | 'billing' | 'features' | 'support';

const CATEGORIES: Record<FAQCategory, { label: string; color: string }> = {
    'getting-started': { label: 'شروع کار', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
    'billing': { label: 'پرداخت و صورتحساب', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
    'features': { label: 'قابلیت‌ها', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
    'support': { label: 'پشتیبانی', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' },
};

const FAQ_ITEMS: FAQItemProps[] = [
    {
        id: "getting-started-1",
        category: "getting-started",
        question: "چگونه می‌توانم کار با پلتفرم را شروع کنم؟",
        answer: "شروع کار بسیار ساده است! کافیست یک حساب کاربری ایجاد کنید و راهنمای راه‌اندازی سریع ما را دنبال کنید. ما شما را در تمام مراحل همراهی خواهیم کرد.",
    },
    {
        id: "billing-1",
        category: "billing",
        question: "چه روش‌های پرداختی را می‌پذیرید؟",
        answer: "ما تمامی کارت‌های بانکی عضو شتاب، درگاه‌های پرداخت مستقیم و کارت‌های اعتباری معتبر را می‌پذیریم. تمامی تراکنش‌ها در بستری کاملاً امن انجام می‌شوند.",
    },
    {
        id: "features-1",
        category: "features",
        question: "قابلیت‌های اصلی پلتفرم چیست؟",
        answer: "پلتفرم ما شامل تحلیل‌های آنی، ابزارهای همکاری تیمی، جریان‌های کاری خودکار و داشبوردهای قابل شخصی‌سازی است.",
    },
    {
        id: "support-1",
        category: "support",
        question: "چگونه می‌توانم کمک بگیرم؟",
        answer: "تیم پشتیبانی ما ۲۴/۷ از طریق مرکز راهنما، ایمیل و چت آنلاین در دسترس است. ما معمولاً در کمتر از ۲ ساعت پاسخگوی شما هستیم.",
    },
];

function CategoryBadge({ category }: { category: FAQCategory }) {
    return (
        <Badge 
            variant="secondary" 
            className={cn("ml-2 font-medium", CATEGORIES[category].color)}
        >
            {CATEGORIES[category].label}
        </Badge>
    );
}

function FAQItem({ id, question, answer, category }: FAQItemProps) {
    return (
        <AccordionItem 
            value={id}
            className="bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 px-4"
        >
            <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex flex-col items-start gap-2 text-right">
                    <CategoryBadge category={category} />
                    <span className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary transition-colors leading-snug">
                        {question}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed prose dark:prose-invert max-w-none pb-4 text-right">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq01() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'all'>('all');

    const filteredFAQs = FAQ_ITEMS.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            String(faq.answer).toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section dir="rtl" className="py-16 bg-gray-50 dark:bg-black/5 w-full font-sans" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 
                        id="faq-heading"
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        سوالات متداول
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        پاسخ پرسش‌های معمول درباره پلتفرم ما را اینجا بیابید
                    </p>
                </div>

                <div className="mb-8 space-y-4">
                    <div className="relative">
                        {/* آیکون جستجو به سمت راست منتقل شد */}
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                            type="search"
                            placeholder="جستجو در سوالات..."
                            className="pr-10 pl-3 text-right"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Badge 
                            variant="secondary"
                            className={cn(
                                "cursor-pointer transition-all px-4 py-1",
                                selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                            )}
                            onClick={() => setSelectedCategory('all')}
                        >
                            همه
                        </Badge>
                        {Object.entries(CATEGORIES).map(([key, { label, color }]) => (
                            <Badge
                                key={key}
                                variant="secondary"
                                className={cn(
                                    "cursor-pointer transition-all px-4 py-1",
                                    selectedCategory === key ? color : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                                )}
                                onClick={() => setSelectedCategory(key as FAQCategory)}
                            >
                                {label}
                            </Badge>
                        ))}
                    </div>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4"
                >
                    {filteredFAQs.map((faq) => (
                        <FAQItem key={faq.id} {...faq} />
                    ))}
                </Accordion>

                {filteredFAQs.length === 0 && (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
                        موردی مطابق با جستجوی شما پیدا نشد
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq01;