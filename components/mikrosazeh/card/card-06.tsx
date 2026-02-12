"use client";

import {
  Sun,
  Moon,
  Thermometer,
  Wind,
  Settings2,
  Lightbulb,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Device {
  id: string;
  name: string;
  status: "on" | "off";
  value: number;
  unit: string;
  icon: React.ReactNode;
}

export default function Card06() {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: "1",
      name: "نور اصلی",
      status: "on",
      value: 80,
      unit: "%",
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      id: "2",
      name: "کولر گازی",
      status: "off",
      value: 22,
      unit: "°C",
      icon: <Wind className="w-4 h-4" />,
    },
  ]);

  const [activeScene, setActiveScene] = useState<string>("2");

  const toggleDevice = (id: string) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: d.status === "on" ? "off" : "on" } : d,
      ),
    );
  };

  const updateValue = (e: React.MouseEvent, id: string, delta: number) => {
    e.stopPropagation(); // جلوگیری از خاموش/روشن شدن هنگام تنظیم مقدار
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, value: Math.max(0, d.value + delta), status: "on" }
          : d,
      ),
    );
  };

  const handleSceneChange = (sceneId: string) => {
    setActiveScene(sceneId);
    if (sceneId === "1") {
      setDevices((prev) =>
        prev.map((d) => ({
          ...d,
          status: "on",
          value: d.id === "1" ? 100 : 20,
        })),
      );
    } else {
      setDevices((prev) =>
        prev.map((d) => ({
          ...d,
          status: d.id === "1" ? "off" : "on",
          value: d.id === "2" ? 24 : d.value,
        })),
      );
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto font-[vazir,system-ui]" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">
              اتاق نشیمن
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20">
                <Thermometer className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-bold text-amber-600 dark:text-amber-500 font-sans">
                  24.5°C
                </span>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500 transition-all">
            <Settings2 className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {devices.map((device) => (
            <motion.div
              key={device.id}
              layout
              onClick={() => toggleDevice(device.id)}
              className={cn(
                "cursor-pointer p-4 rounded-[2rem] border transition-all duration-500 relative overflow-hidden group h-44 flex flex-col justify-between",
                device.status === "on"
                  ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/20"
                  : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800",
              )}>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "p-2.5 rounded-xl transition-colors",
                      device.status === "on"
                        ? "bg-white/20 text-white"
                        : "bg-white dark:bg-zinc-800 text-zinc-400 shadow-sm",
                    )}>
                    {device.icon}
                  </div>
                  <div
                    className={cn(
                      "w-12 h-6 rounded-full relative transition-colors duration-300",
                      device.status === "on"
                        ? "bg-white/30"
                        : "bg-zinc-200 dark:bg-zinc-700",
                    )}>
                    <motion.div
                      animate={{
                        x: device.status === "on" ? -24 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                    />
                  </div>
                </div>

                <div>
                  <h4
                    className={cn(
                      "text-xs font-bold mb-1",
                      device.status === "on"
                        ? "text-blue-100"
                        : "text-zinc-500",
                    )}>
                    {device.name}
                  </h4>
                  <div className="flex items-center justify-between group/val">
                    <span
                      className={cn(
                        "text-lg font-black font-sans",
                        device.status === "on"
                          ? "text-white"
                          : "text-zinc-900 dark:text-zinc-100",
                      )}>
                      {device.status === "on"
                        ? `${device.value}${device.unit}`
                        : "خاموش"}
                    </span>

                    <div
                      className={cn(
                        "flex gap-1 transition-opacity",
                        device.status === "on" ? "opacity-100" : "opacity-0",
                      )}>
                      <button
                        onClick={(e) => updateValue(e, device.id, -1)}
                        className="p-1 rounded-md bg-white/20 hover:bg-white/40 text-white">
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => updateValue(e, device.id, 1)}
                        className="p-1 rounded-md bg-white/20 hover:bg-white/40 text-white">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scenes */}
        <div className="space-y-4">
          <h4 className="text-sm font-black text-zinc-900 dark:text-zinc-100 px-1">
            سناریوها
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: "1", name: "روز روشن", icon: <Sun className="w-4 h-4" /> },
              {
                id: "2",
                name: "خواب راحت",
                icon: <Moon className="w-4 h-4" />,
              },
            ].map((scene) => (
              <motion.button
                key={scene.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSceneChange(scene.id)}
                className={cn(
                  "flex items-center justify-center gap-3 p-4 rounded-2xl border font-bold text-sm transition-all",
                  activeScene === scene.id
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent shadow-xl"
                    : "bg-white dark:bg-zinc-900 text-zinc-500 border-zinc-100 dark:border-zinc-800",
                )}>
                {scene.icon}
                {scene.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
