"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface ColorInputProps {
  onChange?: (color: string) => void;
  defaultValue?: string;
  swatches?: string[];
  showOpacity?: boolean;
  label?: string;
}

const defaultSwatches = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

const generateFinalColor = (color: string, opacity: number): string => {
  if (opacity === 100) return color;
  const alpha = Math.round(opacity * 2.55)
    .toString(16)
    .padStart(2, "0");
  return `${color}${alpha}`;
};

export default function Input_08({
  onChange,
  defaultValue = "#3b82f6",
  swatches = defaultSwatches,
  showOpacity = true,
  label = "انتخاب رنگ",
}: ColorInputProps) {
  const [color, setColor] = useState(defaultValue);
  const [opacity, setOpacity] = useState(100);
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const finalColor = generateFinalColor(color, opacity);

  const updateFinalColor = (newColor: string, newOpacity = opacity) => {
    const updatedColor = generateFinalColor(newColor, newOpacity);
    setColor(newColor);
    onChange?.(updatedColor);
  };

  const updateOpacity = (newOpacity: number) => {
    setOpacity(newOpacity);
    onChange?.(generateFinalColor(color, newOpacity));
  };

  const handleCopy = () => {
    copyToClipboard(finalColor);
  };

  return (
    <div className="w-full max-w-xs space-y-2 relative z-10 min-h-[200px]" dir="rtl">
      {label && (
        <label
          htmlFor="color-input"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          {label}
        </label>
      )}

      <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <div className="flex gap-2 items-center">
          <div
            className="w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-700 shrink-0"
            style={{ backgroundColor: finalColor }}
          />
          <input
            id="color-input"
            type="text"
            value={finalColor.toUpperCase()}
            dir="ltr"
            onChange={(e) => {
              const value = e.target.value.slice(0, 7);
              if (/^#[0-9A-F]{6}$/i.test(value)) {
                updateFinalColor(value);
              }
            }}
            className={cn(
              "flex-1 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800",
              "bg-white dark:bg-zinc-900 text-sm font-mono text-center",
              "focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
            )}
          />
          <button type="button" onClick={handleCopy} className="mr-1 hover:opacity-70 transition-opacity">
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-500" />
            )}
          </button>
        </div>

        {showOpacity && (
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
              <span>شفافیت</span>
              <span dir="ltr">{opacity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => updateOpacity(Number(e.target.value))}
              className={cn(
                "w-full h-2 rounded-full appearance-none",
                "bg-linear-to-r from-transparent to-current cursor-pointer"
              )}
              style={{ color }}
            />
          </div>
        )}

        <div className="mt-4 space-y-1.5">
          <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">رنگ‌های پیشنهادی</div>
          <div className="grid grid-cols-6 gap-1.5">
            {swatches.map((swatch) => (
              <button
                type="button"
                key={swatch}
                onClick={() => updateFinalColor(swatch)}
                className={cn(
                  "w-full aspect-square rounded-md border border-zinc-200 dark:border-zinc-700",
                  "transition-transform hover:scale-110 relative"
                )}
                style={{ backgroundColor: swatch }}
              >
                {color === swatch && (
                  <Check
                    className={cn(
                      "w-4 h-4 absolute inset-0 m-auto text-white",
                      "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
                    )}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}