"use client";

import Link from "next/link";
import { ArrowRight, Crown, Lock } from "lucide-react";
import type { PremiumPlanningToolMeta } from "@/lib/config/premium-planning-tools";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PremiumFeatureCardProps {
  meta: PremiumPlanningToolMeta;
  locked: boolean;
  hrefWhenUnlocked: string;
  onRequestUpgrade: () => void;
  className?: string;
}

function PreviewSparklines() {
  return (
    <div className="mt-4 flex h-14 items-end justify-center gap-1.5 opacity-80">
      {[40, 65, 48, 78, 55, 90, 62].map((h, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full bg-gradient-to-t from-teal-200 to-teal-500"
          style={{ height: `${h}%` }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function PremiumFeatureCard({
  meta,
  locked,
  hrefWhenUnlocked,
  onRequestUpgrade,
  className,
}: PremiumFeatureCardProps) {
  const Icon = meta.icon;

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
          <Icon className="size-5" strokeWidth={2} aria-hidden />
        </div>
        {locked ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-navy-200 bg-navy-50/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            <Lock className="size-3" aria-hidden />
            Premium
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-700">
            <Crown className="size-3" aria-hidden />
            Included
          </span>
        )}
      </div>
      <h3 className="mt-4 text-base font-semibold text-navy-800">{meta.title}</h3>
      <p className="mt-2 text-sm text-navy-500 leading-relaxed">
        {meta.valueStatement}
      </p>
      <PreviewSparklines />
    </>
  );

  if (!locked) {
    return (
      <Link
        href={hrefWhenUnlocked}
        className={cn(
          "group flex flex-col rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm transition-all",
          "hover:border-teal-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
          className
        )}
      >
        {body}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
          Open tool
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-dashed border-navy-200/70 bg-navy-50/30 p-5",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent"
        aria-hidden
      />
      <div className="relative">{body}</div>
      <Button
        type="button"
        variant="outline"
        className="relative mt-4 h-10 w-full rounded-full border-teal-200 bg-white text-teal-800 hover:bg-teal-50"
        onClick={onRequestUpgrade}
      >
        Go Premium
        <ArrowRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}
