"use client";

import { Toaster as Sonner } from "sonner";

/**
 * App-wide toast host (Sonner). Top-right, below the navbar, aligned with InHand
 * navy/teal surfaces (cards, borders, Plus Jakarta titles).
 */
export function Toaster() {
  return (
    <Sonner
      position="top-right"
      offset={{ top: "4.25rem", right: "1rem" }}
      mobileOffset={{ top: "4.25rem", right: "0.75rem" }}
      visibleToasts={4}
      expand={false}
      gap={10}
      richColors={false}
      closeButton={false}
      toastOptions={{
        duration: 3200,
        classNames: {
          toast:
            "group/toast flex w-[min(100vw-1.5rem,20rem)] rounded-2xl border border-navy-200/90 " +
            "bg-white p-3.5 shadow-lg shadow-navy-900/[0.07] !gap-3 !items-start " +
            "font-sans backdrop-blur-[2px]",
          content: "!gap-2",
          title:
            "font-heading !font-semibold !text-[0.8125rem] !leading-snug !text-navy-800 !tracking-tight",
          description:
            "!text-xs !leading-snug !text-navy-500 !font-normal !mt-0.5",
          icon: "!size-[1.125rem] !shrink-0",
          default:
            "!border-navy-200/95 !bg-white [&_[data-icon]]:!text-teal-600",
          success:
            "!border-teal-200/95 !bg-gradient-to-b !from-teal-50/98 !to-white " +
            "!shadow-md !shadow-teal-900/[0.06] [&_[data-icon]]:!text-teal-600",
          error:
            "!border-danger-200/95 !bg-gradient-to-b !from-danger-50/90 !to-white " +
            "[&_[data-icon]]:!text-danger-600",
          info:
            "!border-teal-200/70 !bg-gradient-to-b !from-teal-50/40 !to-white " +
            "[&_[data-icon]]:!text-teal-600",
          warning:
            "!border-amber-200/90 !bg-gradient-to-b !from-amber-50/80 !to-white " +
            "[&_[data-icon]]:!text-amber-600",
        },
      }}
    />
  );
}
