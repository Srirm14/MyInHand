"use client";

import { useRouter } from "next/navigation";
import { Crown, Lock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { requestPremiumPurchase } from "@/lib/premium/request-premium-purchase";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { cn } from "@/lib/utils";

interface SalaryCalculatorPremiumTeaserProps {
  locked: boolean;
  onRequestUnlock: () => void;
  className?: string;
}

/** Payslip-shaped abstract layer + grid — suggests component rows without readable text. */
function AbstractBreakdownPreviewLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(175deg,rgb(240_253_250/0.88)_0%,rgb(241_245_249/0.92)_38%,rgb(248_250_252/0.96)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      <div className="absolute left-[5%] top-[6%] h-[70%] w-[56%] rotate-[-1.5deg] rounded-lg border border-navy-200/50 bg-gradient-to-b from-white/95 to-navy-50/60 shadow-sm">
        <div className="absolute left-[8%] right-[8%] top-[6%] h-2 w-[35%] rounded-full bg-teal-400/35" />
        <div className="absolute left-[8%] right-[8%] top-[14%] space-y-1">
          <div className="h-1 w-[28%] rounded-full bg-navy-300/40" />
          <div className="h-1 w-[55%] rounded-full bg-navy-200/35" />
        </div>
        <div className="absolute left-[8%] right-[8%] top-[26%] space-y-1.5">
          {(
            [
              { op: 0.85, w: 40, id: "e1" },
              { op: 0.72, w: 46, id: "e2" },
              { op: 0.9, w: 52, id: "e3" },
              { op: 0.68, w: 58, id: "e4" },
              { op: 0.8, w: 64, id: "e5" },
            ] as const
          ).map(({ op, w, id }) => (
            <div
              key={id}
              className="flex justify-between gap-2 border-b border-navy-100/60 pb-1"
            >
              <div
                className="h-1.5 rounded-full bg-navy-200/50"
                style={{ width: `${w}%`, opacity: op }}
              />
              <div
                className="h-1.5 w-[22%] rounded-full bg-teal-300/40"
                style={{ opacity: op }}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-[12%] left-[8%] right-[8%] top-[58%] rounded-md bg-teal-50/50">
          <div className="absolute left-3 top-2 h-1 w-20 rounded-full bg-navy-300/35" />
          <div className="absolute left-3 top-5 space-y-1">
            {(["d1", "d2", "d3"] as const).map((id) => (
              <div key={id} className="flex justify-between gap-2">
                <div className="h-1 w-[45%] rounded-full bg-navy-200/40" />
                <div className="h-1 w-[18%] rounded-full bg-navy-200/35" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[6%] top-[10%] h-[48%] w-[30%] rotate-[1deg] rounded-lg border border-teal-200/45 bg-gradient-to-b from-teal-50/90 to-white/50 shadow-sm">
        <div className="absolute left-[10%] right-[10%] top-[8%] space-y-2">
          {(
            [
              { h: 72, id: "c1" },
              { h: 48, id: "c2" },
              { h: 88, id: "c3" },
              { h: 56, id: "c4" },
            ] as const
          ).map(({ h, id }) => (
            <div
              key={id}
              className="mx-auto rounded-md bg-gradient-to-t from-teal-100 to-teal-200/70"
              style={{ height: `${h * 0.22}px`, width: "48%", opacity: h / 100 }}
            />
          ))}
        </div>
        <div className="absolute bottom-[10%] left-[10%] right-[10%] space-y-1">
          <div className="h-1 w-full rounded-full bg-navy-200/30" />
          <div className="h-1 w-[70%] rounded-full bg-navy-200/25" />
        </div>
      </div>

      <div className="absolute bottom-[18%] left-[22%] h-6 w-28 rounded-lg bg-navy-300/18 blur-[3px]" />
      <div className="absolute right-[18%] top-[10%] h-4 w-20 rounded-full bg-teal-400/20 blur-[4px]" />
    </div>
  );
}

function BlurredBreakdownForeground() {
  const bars = [
    { h: 72, id: "b1" },
    { h: 45, id: "b2" },
    { h: 88, id: "b3" },
    { h: 52, id: "b4" },
    { h: 68, id: "b5" },
    { h: 40, id: "b6" },
  ] as const;
  const rows = [
    { id: "f1", labelW: 32 },
    { id: "f2", labelW: 40 },
    { id: "f3", labelW: 48 },
    { id: "f4", labelW: 38 },
  ] as const;
  return (
    <div
      className={cn(
        "relative z-[1] select-none px-2.5 py-2 sm:px-3 sm:py-2.5",
        "opacity-[0.55] blur-[5px] sm:blur-[6px]"
      )}
      aria-hidden
    >
      <div className="h-1.5 w-[62%] max-w-[180px] rounded-full bg-navy-300/60" />
      <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
        {bars.map(({ h, id }) => (
          <div
            key={id}
            className="h-10 rounded-md bg-gradient-to-t from-teal-100 to-teal-200/80 sm:h-11"
            style={{ opacity: h / 100 }}
          />
        ))}
      </div>
      <div className="mt-2 space-y-1.5 border-t border-navy-100/80 pt-1.5">
        {rows.map(({ id, labelW }) => (
          <div
            key={id}
            className="flex justify-between gap-2 border-b border-navy-100/70 pb-1"
          >
            <div
              className="h-2 rounded bg-navy-200/70"
              style={{ width: `${labelW}%` }}
            />
            <div className="h-2 w-14 rounded bg-navy-200/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Premium upsell for detailed breakdown — full-width card below salary form (free tier).
 */
export function SalaryCalculatorPremiumTeaser({
  locked,
  onRequestUnlock,
  className,
}: Readonly<SalaryCalculatorPremiumTeaserProps>) {
  const router = useRouter();
  const loggedIn = Boolean(useAuthStore((s) => s.user));

  if (!locked) return null;

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-200/50 bg-white shadow-sm ring-1 ring-teal-100/40",
        "p-5 sm:p-6",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-200/80 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-600 shadow-sm">
          <Lock className="size-3 text-navy-500" strokeWidth={2} aria-hidden />
          Premium
        </span>
        <Crown
          className="size-[18px] shrink-0 text-teal-600/80 sm:size-5"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>

      <h2 className="mt-3 font-display text-base font-bold tracking-tight text-navy-900 sm:text-lg">
        Unlock detailed salary breakdown
      </h2>
      <p className="mt-1.5 text-[13px] text-navy-600 leading-snug sm:text-sm sm:leading-relaxed">
        Get a more precise read on your compensation with component-level
        breakup and deeper payroll insights—when you are ready to go further.
      </p>

      <div className="relative mt-4 h-[132px] overflow-hidden rounded-xl border border-navy-200/60 shadow-inner sm:mt-5 sm:h-[142px]">
        <AbstractBreakdownPreviewLayer />
        <BlurredBreakdownForeground />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-white via-white/65 to-transparent" />
      </div>

      <ul className="mt-4 space-y-2 text-[13px] text-navy-600 leading-snug sm:text-sm">
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
          <span>View component-level breakup and allowances in context</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500" />
          <span>Understand deductions and cash path with richer detail</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500" />
          <span>Connect this salary to premium planning when you upgrade</span>
        </li>
      </ul>

      <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          className="h-10 w-full rounded-full bg-teal-700 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 sm:min-w-[200px] sm:flex-1"
          onClick={onRequestUnlock}
        >
          Unlock Premium
        </Button>
        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-10 w-full rounded-full border-navy-200 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:min-w-[200px] sm:flex-1"
          )}
          onClick={() =>
            requestPremiumPurchase(router, { loggedIn })
          }
        >
          Compare Free &amp; Premium plans
        </button>
      </div>
    </section>
  );
}
