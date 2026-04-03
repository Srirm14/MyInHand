"use client";

import { cn } from "@/lib/utils";
import { CurrencyDisplay } from "./currency-display";
import type { LucideIcon } from "lucide-react";

interface SliderCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function SliderCard({
  icon: Icon,
  label,
  value,
  min,
  max,
  step = 500,
  onChange,
  className,
}: SliderCardProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm border border-navy-200/40",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Icon className="size-5" />
          </div>
          <span className="text-sm font-semibold text-navy-700">{label}</span>
        </div>
        <CurrencyDisplay
          amount={value}
          className="text-stat-sm text-navy-800 font-bold"
        />
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-navy-100 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:size-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-[3px]
            [&::-webkit-slider-thumb]:border-teal-600
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110"
          style={{
            background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${percentage}%, #E2E8F0 ${percentage}%, #E2E8F0 100%)`,
          }}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between mt-2 text-xs text-navy-400">
        <span>₹{min.toLocaleString("en-IN")}</span>
        <span>₹{max >= 100000 ? `${max / 100000}L` : `${max / 1000}K`}</span>
      </div>
    </div>
  );
}
