"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PremiumSuccessAbstractProps {
  className?: string;
}

/**
 * Calm “unlock” motif: soft expanding rings + check. No Lottie — always paints.
 */
export function PremiumSuccessAbstract({
  className,
}: Readonly<PremiumSuccessAbstractProps>) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn("relative flex size-16 items-center justify-center", className)}
      role="img"
      aria-label="Premium unlocked"
    >
      {reduceMotion ? null : (
        <>
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-teal-500/40"
            initial={{ scale: 0.45, opacity: 0 }}
            animate={{ scale: [0.45, 1.2, 1.35], opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.15, times: [0, 0.45, 1], ease: "easeOut" }}
          />
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full border border-teal-400/30"
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: [0.55, 1.05, 1.25], opacity: [0, 0.4, 0] }}
            transition={{
              duration: 1.15,
              delay: 0.1,
              times: [0, 0.5, 1],
              ease: "easeOut",
            }}
          />
        </>
      )}

      <motion.div
        className="relative flex size-11 items-center justify-center rounded-xl bg-teal-600/[0.12] ring-1 ring-teal-600/25"
        initial={reduceMotion ? undefined : { scale: 0.82, opacity: 0 }}
        animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={
          reduceMotion
            ? undefined
            : { type: "spring", stiffness: 420, damping: 24, mass: 0.65 }
        }
      >
        <Check className="size-[1.35rem] text-teal-700" strokeWidth={2.75} aria-hidden />
      </motion.div>
    </div>
  );
}
