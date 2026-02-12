"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.15,
                ease: "easeOut",
            }}
            className={cn(
                "group rounded-lg border-[0.5px] border-gray-200/50 dark:border-gray-800/50",
                "transition-all duration-200 ease-in-out",
                isOpen
                    ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
                    : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4"
            >
                <h3
                    className={cn(
                        "text-base font-medium transition-colors duration-200 text-right",
                        "text-gray-700 dark:text-gray-300",
                        isOpen && "text-gray-900 dark:text-white"
                    )}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "p-0.5 rounded-full shrink-0",
                        "transition-colors duration-200",
                        isOpen
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2 text-right">
                            <motion.p
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function Faq02() {
    const faqs: Omit<FAQItemProps, "index">[] = [
        {
            question: "چه چیزی پلتفرم شما را متمایز می‌کند؟",
            answer: "پلتفرم ما با طراحی بصری، قابلیت‌های اتوماسیون قدرتمند و گزینه‌های یکپارچه‌سازی بی‌نظیر متمایز می‌شود. تمرکز ما بر ایجاد تجربه‌ای کاربری است که سادگی را با ویژگی‌های پیشرفته ترکیب می‌کند.",
        },
        {
            question: "ساختار قیمت‌گذاری چگونه است؟",
            answer: "ما سطوح قیمت‌گذاری منعطف و شفافی را ارائه می‌دهیم که متناسب با نیازهای شما مقیاس‌پذیر هستند. هر سطح شامل مجموعه‌ای از ویژگی‌های اصلی است و با ارتقا، قابلیت‌های بیشتری اضافه می‌شود. تمام طرح‌ها با ۱۴ روز تست رایگان شروع می‌شوند.",
        },
        {
            question: "چه نوع پشتیبانی‌ای ارائه می‌دهید؟",
            answer: "ما پشتیبانی جامع را از طریق کانال‌های مختلف ارائه می‌دهیم. این شامل چت زنده ۲۴/۷، مستندات دقیق، آموزش‌های ویدئویی و مدیران حساب اختصاصی برای مشتریان سازمانی است.",
        },
        {
            question: "چگونه می‌توانم شروع کنم؟",
            answer: "شما می‌توانید با ثبت‌نام برای دوره تست رایگان شروع کنید. پس از ثبت‌نام، به تمامی ویژگی‌های پلتفرم دسترسی خواهید داشت. همچنین می‌توانید برای راهنمایی با تیم پشتیبانی ما در تماس باشید.",
        },
    ];

    return (
        <section 
            dir="rtl" 
            className="py-16 w-full bg-linear-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-white/[0.02] dark:to-transparent font-sans"
        >
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-3 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                        سوالات متداول
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        هر آنچه برای شروع کار با پلتفرم ما نیاز دارید
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={cn(
                        "max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
                    )}
                >
                    <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4 bg-gray-100 dark:bg-white/5">
                        <Mail className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        هنوز سوالی دارید؟
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                        ما اینجا هستیم تا به شما کمک کنیم
                    </p>
                    <button
                        type="button"
                        className={cn(
                            "px-6 py-2 text-sm rounded-md",
                            "bg-gray-900 dark:bg-white text-white dark:text-gray-900",
                            "hover:bg-gray-800 dark:hover:bg-gray-100",
                            "transition-colors duration-200",
                            "font-semibold"
                        )}
                    >
                        تماس با پشتیبانی
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default Faq02;