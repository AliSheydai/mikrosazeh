"use client";

import { Link } from "next-view-transitions";
import Grainient from "../react-bits/Grainient";
import { BrowseComponentsButton } from "../ui/browse-button";
import { Icon, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ShinyText from "../react-bits/ShinyText";

interface BuildInterfacesCardProps {
  className?: string;
}

export function BuildInterfacesCard({ className }: BuildInterfacesCardProps) {
  return (
    <div className={`flex justify-center items-center py-16 ${className}`}>
      <div className="relative w-[90%] md:w-[70%] h-[300px] rounded-[50px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B19EEF"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-10 text-center bg-black/15">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            شروع به کاوش کنید
          </h1>

          <p className="mb-8 max-w-[500px] text-lg text-gray-200/90">
            انیمیشن‌ها، کامپوننت‌ها، پس‌زمینه‌ها - یک کلیک فاصله
          </p>

          {/* <BrowseComponentsButton
            href="/docs/components/ai-input"
            spanClassName="bg-gradient-to-r from-[#4C09D9] to-[#D989D9] bg-clip-text text-transparent md:text-lg"
            buttonClassName="min-w-46 md:min-w-64 lg:min-w-72 bg-white"
          /> */}

          <button
            className={cn(
              "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
              "relative h-12 px-6 min-w-72 md:min-w-56",
              "bg-black dark:bg-white",
              "text-white dark:text-black",
              "border-2 border-orange-500/20 dark:border-orange-400/20",
              "shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]",
              "dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]",
              "backdrop-blur-xs transition-all",
              "min-w-46 md:min-w-64 lg:min-w-72 bg-white",
              "transition-all duration-300 ease-in-out",
              "hover:shadow-[0_20px_40px_-6px_rgba(251,113,133,0.5),0_0px_40px_-6px_rgba(168,85,247,0.5)]",
            )}>
            <ShinyText
              text="مشاهده کامپوننت ها"
              speed={2}
              delay={0}
              color="#4C09D9"
              shineColor="#D989D9"
              spread={120}
              direction="right"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="font-medium md:text-lg"
            />
            <ArrowDownRight className="w-5 h-5 rotate-[270deg] text-purple-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
