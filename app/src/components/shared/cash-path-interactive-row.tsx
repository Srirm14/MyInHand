"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pairs label + amount in Cash path blocks with a clear hover band so each
 * line reads as one unit (label ↔ value).
 */
export function CashPathInteractiveRow({
  children,
  highlight,
  className,
}: {
  children: ReactNode;
  /** Primary in-hand row — keeps existing card look, adds hover lift */
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between",
        "rounded-lg px-2 py-1.5 -mx-1 sm:-mx-2",
        "border-l-2 border-transparent pl-2 sm:pl-2.5",
        "transition-[background-color,border-color,box-shadow] duration-150 ease-out",
        "hover:border-l-teal-500/35 hover:bg-teal-50/70 hover:shadow-[inset_0_0_0_1px_rgba(13,148,136,0.1)]",
        highlight &&
          "mx-0 bg-white/70 px-3 py-2 ring-1 ring-teal-100/60 hover:bg-teal-50/55 hover:ring-teal-200/55 hover:border-l-teal-600/40",
        className
      )}
    >
      {children}
    </div>
  );
}
