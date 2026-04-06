"use client";

import { useEffect, useMemo } from "react";
import Lottie from "lottie-react";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import animationData from "@/lib/lottie/premium-unlock.json";

function usePrefersReducedMotion(): boolean {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);
}

export interface PremiumWelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrimary: () => void;
  onSecondary?: () => void;
}

export function PremiumWelcomeDialog({
  open,
  onOpenChange,
  onPrimary,
  onSecondary,
}: Readonly<PremiumWelcomeDialogProps>) {
  const reduceMotion = usePrefersReducedMotion();

  // Ensure animation restarts when reopening.
  useEffect(() => {
    // no-op placeholder: Dialog mount/unmount handles reset via key below
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="relative">
          <div
            className={cn(
              "px-6 pt-6 pb-5",
              "bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(13,148,136,0.14),transparent_60%)]"
            )}
          >
            <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-navy-200/60 shadow-sm">
              {reduceMotion ? (
                <CheckCircle2 className="size-9 text-teal-700" aria-hidden />
              ) : (
                <Lottie
                  key={open ? "open" : "closed"}
                  animationData={animationData}
                  loop={false}
                  autoplay
                  className="size-16"
                  aria-hidden
                />
              )}
            </div>
          </div>

          <div className="px-6 pb-6">
            <DialogHeader>
              <DialogTitle className="font-display text-lg font-bold tracking-tight text-navy-900">
                Welcome to InHand Premium
              </DialogTitle>
            </DialogHeader>

            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Your Premium access is now active. Advanced salary insights and better
              metrics are unlocked across breakdowns, offer comparison, and planners.
            </p>
          </div>
        </div>

        <DialogFooter className="px-6 pb-6 pt-0 bg-transparent border-0 -mx-0 -mb-0">
          {onSecondary ? (
            <Button
              variant="outline"
              className="rounded-full border-navy-200"
              onClick={() => onSecondary()}
            >
              Manage plan
            </Button>
          ) : null}
          <Button
            className="rounded-full bg-teal-700 hover:bg-teal-800"
            onClick={() => onPrimary()}
          >
            Open premium tools
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

