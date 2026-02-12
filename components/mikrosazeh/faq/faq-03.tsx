"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItemProps {
    question: string;
    answer: string;
    category?: string;
}

function FAQItem({ question, answer, category }: FAQItemProps) {
    return (
        <AccordionItem
            value={question}
            className="mb-4 bg-white dark:bg-black/5 rounded-xl border border-gray-100 dark:border-gray-800/60 shadow-xs dark:shadow-black/10 overflow-hidden"
        >
            <AccordionTrigger className="px-6 py-4 text-right hover:no-underline data-[state=open]:border-b data-[state=open]:border-gray-100 dark:data-[state=open]:border-gray-800/60 transition-all">
                <div className="flex flex-col gap-2 items-start">
                    {category && (
                        <Badge
                            variant="secondary"
                            className="w-fit text-[10px] font-medium dark:bg-black/10 dark:text-gray-300 px-2 py-0"
                        >
                            {category}
                        </Badge>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary leading-snug">
                        {question}
                    </h3>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4 pb-6 text-right">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq03() {
    const faqs: FAQItemProps[] = [
        {
            question: "چگونه می‌توانم شروع کنم؟",
            answer: "شروع کار بسیار ساده است! کافی است یک حساب کاربری ایجاد کنید و راهنمای راه‌اندازی سریع ما را دنبال کنید. ما شما را در تمام مراحل همراهی خواهیم کرد.",
            category: "شروع کار",
        },
        {
            question: "چه روش‌های پرداختی را می‌پذیرید؟",
            answer: "ما تمامی کارت‌های بانکی عضو شبکه شتاب، درگاه‌های پرداخت مستقیم و فیش‌های بانکی را می‌پذیریم. تمامی پرداخت‌ها از طریق درگاه‌های امن بانکی پردازش می‌شوند.",
            category: "پرداخت",
        },
        {
            question: "آیا دوره تست رایگان وجود دارد؟",
            answer: "بله! ما یک دوره تست ۱۴ روزه رایگان با دسترسی کامل به تمام امکانات ارائه می‌دهیم. برای شروع این دوره، نیازی به وارد کردن اطلاعات کارت بانکی نیست.",
            category: "قیمت‌گذاری",
        },
        {
            question: "چگونه با پشتیبانی در ارتباط باشم؟",
            answer: "تیم پشتیبانی ما ۲۴ ساعته در ۷ روز هفته از طریق تیکت، ایمیل و چت آنلاین آماده پاسخگویی است. ما معمولاً در کمتر از ۲ ساعت به درخواست‌ها رسیدگی می‌کنیم.",
            category: "پشتیبانی",
        },
    ];

    return (
        <section dir="rtl" className="py-16 w-full font-sans">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            سوالات متداول
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            پاسخ به پرسش‌های رایج درباره خدمات ما را اینجا بخوانید
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                            هنوز پاسخ سوال خود را پیدا نکرده‌اید؟
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity shadow-lg"
                        >
                            تماس با کارشناسان پشتیبانی
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq03;