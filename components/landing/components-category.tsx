"use client";

import { motion } from "motion/react";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { Layers, LayoutTemplate, Sparkles, ArrowLeft } from "lucide-react";
import ShinyText from "../react-bits/ShinyText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

export function ComponentCategory() {
  const categories = [
    {
      index: "01",
      title: "کامپوننت‌ها",
      description:
        "اجزای رابط کاربری کوچک و قابل استفاده مجدد شامل دکمه‌ها، فرم‌ها و کارت‌های مدرن.",
      link: "/docs/components/ai-input",
      icon: Layers,
    },
    {
      index: "02",
      title: "بلاک‌ها",
      description:
        "الگوهای ترکیبی و بلوک‌های آماده برای ساخت صفحات کامل در کمترین زمان ممکن.",
      link: "/docs/blocks/ai-card-generation",
      icon: LayoutTemplate,
    },
    {
      index: "03",
      title: "کامپوننت‌های پیشرفته",
      description:
        "ابزارهای حرفه‌ای و پیشرفته برای توسعه‌دهندگان که نیاز به عملکردهای خاص و سفارشی دارند.",
      link: "/docs/components/antigravity",
      icon: Sparkles,
    },
  ];

  return (
    <section
      dir="rtl"
      className="py-16 lg:py-24 font-[vazirmatn,system-ui] overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 px-4">
        {/* Pill tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          کتابخانه رابط کاربری
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
        >
         <ShinyText
            text="دسته‌بندی"
            speed={2}
            color="#a855f7"
            shineColor="#f472b6"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          />
          
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-base text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed"
        >
          مجموعه‌ای از ابزارهای رایگان و حرفه‌ای برای سرعت بخشیدن به فرآیند
          توسعه پروژه‌های شما.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 max-w-5xl mx-auto"
      >
        {categories.map((item) => (
          <motion.div
            key={item.index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 15 } }}
            className="group relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden transition-colors duration-300 hover:border-purple-400/50 dark:hover:border-purple-500/40"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Index number */}
            <span className="absolute top-7 left-7 text-[11px] font-bold tabular-nums text-zinc-300 dark:text-zinc-700 tracking-widest">
              {item.index}
            </span>

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-purple-500" />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

            {/* Description */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
              {item.description}
            </p>

            {/* Link */}
            <ViewTransitionsLink
              href={item.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/link"
            >
              مشاهده بیشتر
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:-translate-x-1" />
            </ViewTransitionsLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}