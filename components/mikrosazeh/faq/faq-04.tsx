"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    category: string;
}

function CategoryButton({
    name,
    isActive,
    onClick,
}: {
    name: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "px-4 py-2 text-right rounded-lg transition-all w-full relative",
                "text-gray-600 dark:text-gray-400",
                "hover:bg-white dark:hover:bg-black/20",
                isActive && [
                    "bg-zinc-100 dark:bg-black/20",
                    "text-primary font-bold",
                    "hover:bg-zinc-100 dark:hover:bg-black/20",
                    // تغییر جهت خط کنار دکمه فعال از چپ به راست
                    "before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2",
                    "before:w-1 before:h-6 before:bg-primary before:rounded-l-full"
                ]
            )}
        >
            {name}
        </button>
    );
}

function Faq04() {
    // مقدار پیش‌فرض به معادل فارسی تغییر یافت
    const [activeCategory, setActiveCategory] = useState<string>("عمومی");

    const faqs: FAQItemProps[] = [
        {
            category: "عمومی",
            question: "چگونه می‌توانم شروع کنم؟",
            answer: "شروع کار بسیار ساده است! کافیست یک حساب کاربری ایجاد کنید و راهنمای راه‌اندازی سریع ما را دنبال کنید. ما شما را در تمام مراحل همراهی خواهیم کرد.",
        },
        {
            category: "عمومی",
            question: "چه چیزی خدمات شما را متمایز می‌کند؟",
            answer: "پلتفرم ما سادگی در استفاده را با ویژگی‌های قدرتمند ترکیب کرده و با پشتیبانی ۲۴/۷ و به‌روزرسانی‌های مداوم بر اساس بازخورد کاربران همراه است.",
        },
        {
            category: "پرداخت",
            question: "چه روش‌های پرداختی را می‌پذیرید؟",
            answer: "ما تمامی کارت‌های بانکی عضو شبکه شتاب و پرداخت‌های مستقیم بانکی را می‌پذیریم. تمامی تراکنش‌ها در بستری امن و رمزنگاری شده انجام می‌شوند.",
        },
        {
            category: "پرداخت",
            question: "آیا می‌توانم طرح خود را بعداً تغییر دهم؟",
            answer: "بله، شما می‌توانید در هر زمان طرح خود را ارتقا یا کاهش دهید. تغییرات در چرخه صورتحساب بعدی شما اعمال خواهد شد.",
        },
        {
            category: "قابلیت‌ها",
            question: "آیا دوره تست رایگان وجود دارد؟",
            answer: "بله! ما یک دوره تست ۱۴ روزه با دسترسی کامل به تمامی امکانات ارائه می‌دهیم. برای شروع نیاز به وارد کردن اطلاعات پرداخت نیست.",
        },
        {
            category: "پشتیبانی",
            question: "چگونه می‌توانم با پشتیبانی در ارتباط باشم؟",
            answer: "تیم پشتیبانی ما از طریق مرکز تماس، تیکت و چت آنلاین به صورت شبانه‌روزی در دسترس است. زمان پاسخگویی ما معمولاً کمتر از ۲ ساعت است.",
        },
    ];

    const categories = Array.from(new Set(faqs.map((faq) => faq.category)));
    const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

    return (
        <section dir="rtl" className="py-8 w-full rounded-xl font-sans">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                        چطور می‌توانیم به شما کمک کنیم؟
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                        پاسخ سوالات متداول خود را در دسته‌بندی‌های زیر بیابید
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                    {/* سایدبار دسته‌بندی‌ها در سمت راست قرار می‌گیرد */}
                    <div className="bg-white dark:bg-black/5 p-4 rounded-xl border border-gray-100 dark:border-gray-800/60 h-fit">
                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-3 px-4 uppercase tracking-wider">
                            دسته‌بندی‌ها
                        </h3>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category}
                                    name={category}
                                    isActive={category === activeCategory}
                                    onClick={() => setActiveCategory(category)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* محتوای پرسش‌ها */}
                    <div className="bg-white dark:bg-black/5 p-6 rounded-xl border border-gray-100 dark:border-gray-800/60">
                        <Accordion
                            type="single"
                            collapsible
                            className="space-y-4"
                        >
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`${index}`}
                                    className="border border-gray-100 dark:border-gray-800/60 rounded-lg px-4"
                                >
                                    <AccordionTrigger className="hover:no-underline">
                                        <span className="text-right font-bold text-gray-900 dark:text-gray-200 hover:text-primary leading-snug">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-400 pt-2 text-right leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                سوالی در این دسته پیدا نشد.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq04;