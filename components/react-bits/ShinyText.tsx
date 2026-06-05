"use client";

import React, { useCallback, useMemo, useState } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const style = useMemo(
    () =>
      ({
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationName: disabled ? "none" : direction === "left" ? "shiny-text-left" : "shiny-text-right",
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDirection: yoyo ? "alternate" : "normal",
        animationPlayState: isPaused ? "paused" : "running",
      }) as React.CSSProperties,
    [color, delay, direction, disabled, isPaused, shineColor, speed, spread, yoyo]
  );

  return (
    <span
      className={`inline-block ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default ShinyText;
