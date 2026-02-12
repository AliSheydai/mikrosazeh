"use client";

import { motion } from "motion/react";
import ShinyText from "../react-bits/ShinyText";
// import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { Layers, LayoutTemplate, BookOpen, ArrowLeft } from "lucide-react";

// تنظیمات انیمیشن برای پدربزرگ (Container)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // فاصله بین شروع انیمیشن هر کارت
    },
  },
};

// تنظیمات انیمیشن برای هر کارت
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function ComponentCategory() {
  const categories = [
    {
      title: "کامپوننت‌ها",
      description: "اجزای رابط کاربری کوچک و قابل استفاده مجدد شامل دکمه‌ها، فرم‌ها و کارت‌های مدرن.",
      link: "/docs/components/ai-input",
      icon: Layers,
      glowGradient: "linear-gradient(90deg, #4c1d95 0%, #2e1065 100%)",
      themeColor: "#a855f7",
    },
    {
      title: "بلاک‌ها",
      description: "الگوهای ترکیبی و بلوک‌های آماده برای ساخت صفحات کامل در کمترین زمان ممکن.",
      link: "/docs/blocks/ai-card-generation",
      icon: LayoutTemplate,
      glowGradient: "linear-gradient(90deg, #4c1d95 0%, #2e1065 100%)",
      themeColor: "#a855f7",
    },
    {
      title: "کامپوننت‌های پیشرفته",
      description: "ابزارهای حرفه‌ای و پیشرفته برای توسعه‌دهندگان که نیاز به عملکردهای خاص و سفارشی دارند.",
      link: "/docs/components/antigravity",
      icon: BookOpen,
      glowGradient: "linear-gradient(90deg, #4c1d95 0%, #2e1065 100%)",
      themeColor: "#a855f7",
    },
  ];

  return (
    <section dir="rtl" className="py-12 lg:py-20 font-[vazirmatn,system-ui] overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <ShinyText
            text="دسته‌بندی"
            speed={2}
            color="#a855f7"
            shineColor="#f472b6"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl text-center"
        >
          مجموعه‌ای از ابزارهای رایگان و حرفه‌ای برای سرعت بخشیدن به فرآیند توسعه پروژه‌های شما.
        </motion.p>
      </div>

      {/* Grid Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{  
              transition: { type: "spring", stiffness: 400, damping: 10 } 
            }}
            className="group relative"
          >
            {/* Background Glow */}
            <div
              className="absolute -inset-0.5 rounded-[2.2rem] blur-md opacity-0 group-hover:opacity-40 transition duration-300"
              style={{ background: item.glowGradient }}
            />

            <div className="relative h-full p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-500 flex flex-col shadow-sm">
              
              {/* Icon Container */}
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <item.icon 
                  className="w-5 h-5" 
                  style={{ color: item.themeColor }} 
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 flex-1">
                {item.description}
              </p>

              {/* Action Link */}
              <ViewTransitionsLink
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-bold group/link "
              >
                <span className="text-zinc-900 dark:text-zinc-100 group-hover:text-purple-800 transition-colors">
                  مشاهده بیشتر
                </span>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowLeft className="w-4 h-4 text-purple-500 group-hover:text-purple-800" />
                </motion.div>
              </ViewTransitionsLink>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}