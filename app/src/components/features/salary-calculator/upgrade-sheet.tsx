"use client";

import Link from "next/link";
import { Crown, Lock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { PremiumPlanningToolMeta } from "@/lib/config/premium-planning-tools";
import { cn } from "@/lib/utils";

interface UpgradeSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tool: PremiumPlanningToolMeta | null;
  paywallHref: string;
}

export function UpgradeSheet({
  open,
  onOpenChange,
  tool,
  paywallHref,
}: UpgradeSheetProps) {
  const Icon = tool?.icon ?? Lock;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="border-b border-navy-100 pb-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Icon className="size-6" strokeWidth={2} aria-hidden />
          </div>
          <SheetTitle className="text-h3 text-navy-800 pr-8">
            {tool ? `Unlock ${tool.title}` : "Unlock Premium"}
          </SheetTitle>
          <SheetDescription className="text-sm text-navy-600 leading-relaxed">
            {tool
              ? tool.sheetDescription
              : "Premium adds planning tools that build on your in-hand estimate—forecasts, EMI fit, and monthly allocation."}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-4 px-4 py-4 text-sm text-navy-600">
          <div className="rounded-xl border border-dashed border-teal-200/80 bg-teal-50/40 p-4">
            <div className="flex items-center gap-2 text-teal-800">
              <Crown className="size-4 shrink-0" aria-hidden />
              <span className="font-semibold text-sm">What you get</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-navy-600">
              <li>Wealth forecast with growth and savings sliders</li>
              <li>EMI analyzer tied to your in-hand baseline</li>
              <li>Monthly planner for spend vs surplus</li>
            </ul>
          </div>
          <p className="text-xs text-navy-500 leading-relaxed">
            Your free calculator stays fully usable—upgrade only when you want
            deeper planning on top of these numbers.
          </p>
        </div>

        <SheetFooter className="border-t border-navy-100 gap-2 sm:flex-col sm:space-x-0">
          <Link
            href={paywallHref}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 w-full justify-center rounded-full bg-teal-600 hover:bg-teal-700"
            )}
            onClick={() => onOpenChange(false)}
          >
            View upgrade options
          </Link>
          <Button
            type="button"
            variant="ghost"
            className="w-full text-navy-600"
            onClick={() => onOpenChange(false)}
          >
            Continue with free calculator
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
