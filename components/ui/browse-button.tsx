"use client";

import { Link } from "next-view-transitions";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { ArrowDownRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CustomLinkButtonProps {
  href: string;
  children?: ReactNode;
  title?: string;
  icon?: LucideIcon;
  buttonClassName?: string;
  spanClassName?: string;
  containerClassName?: string;
  motionProps?: HTMLMotionProps<"div">;
}

export function BrowseComponentsButton({
  href,
  children,
  title = "مشاهده کامپوننت‌ها",
  icon: Icon = ArrowDownRight,
  buttonClassName,
  spanClassName,
  containerClassName,
  motionProps,
}: CustomLinkButtonProps) {
  return (
    <Link 
      href={href} 
      className={cn("flex items-center gap-8", containerClassName)}
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        {...motionProps} // اجازه بازنویسی انیمیشن‌ها از بیرون
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
            "relative h-12 px-6 min-w-72 md:min-w-56",
            "bg-black dark:bg-white",
            "text-white dark:text-black",
            "border-2 border-orange-500/20 dark:border-orange-400/20",
            "shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]",
            "dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]",
            "backdrop-blur-xs transition-all",
            buttonClassName
          )}
        >
          {children ? (
            children
          ) : (
            <>
              <span className={cn("font-medium", spanClassName)}>{title}</span>
              {Icon && <Icon className="w-5 h-5 rotate-[270deg]" />}
            </>
          )}
        </Button>
      </motion.div>
    </Link>
  );
}