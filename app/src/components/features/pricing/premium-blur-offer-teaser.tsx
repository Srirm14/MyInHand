"use client";

import { usePathname, useRouter } from "next/navigation";
import { useId, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { requestPremiumPurchase } from "@/lib/premium/request-premium-purchase";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { cn } from "@/lib/utils";

interface PremiumBlurOfferTeaserProps {
  className?: string;
  /** Smaller copy for tight layouts (e.g. calculator aside). */
  compact?: boolean;
}

const COPY = {
  eyebrow: "Offer comparison",
  title: "Got two offers? See which one actually pays more.",
  bodyFull:
    "Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.",
  bodyCompact:
    "Stop guessing. Paste both CTCs—see in-hand, tax, and first-year value side by side before the call.",
  unlock: "Premium unlocks live offer comparison.",
  cta: "Compare My Offers",
} as const;

const OFFER_DEMO_SCENARIOS = [
  {
    a: { short: "Series B", ctc: "₹24 LPA", inHand: "₹1,42,500", taxMo: "₹38.1K", y1: "₹19.2L" },
    b: { short: "Enterprise", ctc: "₹26 LPA", inHand: "₹1,38,200", taxMo: "₹41.4K", y1: "₹18.9L" },
    verdict: "Higher in-hand · A",
    deltaY1: "+₹4.3L",
  },
  {
    a: { short: "Fintech", ctc: "₹32 LPA", inHand: "₹1,88,400", taxMo: "₹52.2K", y1: "₹25.1L" },
    b: { short: "Retail HQ", ctc: "₹30 LPA", inHand: "₹1,79,800", taxMo: "₹48.9K", y1: "₹23.7L" },
    verdict: "Best 1Y value · A",
    deltaY1: "+₹1.4L",
  },
  {
    a: { short: "Growth SaaS", ctc: "₹45 LPA", inHand: "₹2,54,200", taxMo: "₹71.5K", y1: "₹33.8L" },
    b: { short: "Consulting", ctc: "₹42 LPA", inHand: "₹2,61,100", taxMo: "₹68.2K", y1: "₹34.6L" },
    verdict: "Tie-break on regime",
    deltaY1: "₹8.2K/mo",
  },
  {
    a: { short: "Unicorn", ctc: "₹38 LPA", inHand: "₹2,12,800", taxMo: "₹61.0K", y1: "₹28.4L" },
    b: { short: "MNC India", ctc: "₹36 LPA", inHand: "₹2,05,400", taxMo: "₹57.3K", y1: "₹27.1L" },
    verdict: "ESOP notional incl.",
    deltaY1: "+₹1.3L",
  },
] as const;

/** Deterministic “random” demo per URL — stable SSR/client, no hydration flip. */
function scenarioIndexForPath(pathname: string): number {
  let h = 0;
  for (const ch of pathname) {
    const cp = ch.codePointAt(0) ?? 0;
    h = Math.imul(31, h) + cp;
  }
  return Math.abs(h) % OFFER_DEMO_SCENARIOS.length;
}

/** Non-readable structure: “two letters + metrics” without legible text. */
function AbstractOfferPreviewLayer({
  compact,
}: Readonly<{ compact: boolean }>) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgb(240_253_250/0.85)_0%,rgb(241_245_249/0.9)_42%,rgb(248_250_252/0.95)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`,
          backgroundSize: compact ? "10px 10px" : "14px 14px",
        }}
      />

      {/* Offer-letter slabs */}
      <div
        className={cn(
          "absolute rounded-lg border border-navy-200/45 bg-gradient-to-b from-white/90 to-navy-100/50 shadow-sm",
          "left-[6%] top-[10%] w-[34%] rotate-[-2.5deg]",
          compact ? "h-[68%]" : "h-[52%]"
        )}
      >
        <div className="absolute left-[12%] right-[12%] top-[14%] space-y-1.5">
          <div className="h-1.5 w-[55%] rounded-full bg-navy-300/45" />
          <div className="h-1 w-[88%] rounded-full bg-navy-200/40" />
          <div className="h-1 w-[72%] rounded-full bg-navy-200/35" />
          <div className="h-1 w-[80%] rounded-full bg-navy-200/30" />
        </div>
        <div className="absolute bottom-[18%] left-[12%] right-[12%] flex gap-1">
          <div className="h-5 flex-1 rounded-md bg-teal-200/35" />
          <div className="h-5 w-5 rounded-md bg-navy-200/30" />
        </div>
      </div>
      <div
        className={cn(
          "absolute rounded-lg border border-teal-200/50 bg-gradient-to-b from-teal-50/95 to-white/55 shadow-sm",
          "right-[7%] top-[16%] w-[32%] rotate-[2deg]",
          compact ? "h-[60%]" : "h-[46%]"
        )}
      >
        <div className="absolute left-[11%] right-[11%] top-[12%] space-y-1.5">
          <div className="h-1.5 w-[48%] rounded-full bg-teal-400/30" />
          <div className="h-1 w-[90%] rounded-full bg-navy-200/38" />
          <div className="h-1 w-[68%] rounded-full bg-navy-200/32" />
          <div className="h-1 w-[76%] rounded-full bg-navy-200/28" />
          <div className="h-1 w-[84%] rounded-full bg-navy-200/25" />
        </div>
      </div>

      {/* Abstract KPI blobs (suggest numbers, not readable) */}
      <div className="absolute left-[28%] top-[8%] h-7 w-20 rounded-lg bg-teal-300/25 blur-[3px]" />
      <div className="absolute right-[22%] bottom-[38%] h-6 w-16 rounded-md bg-navy-300/20 blur-[2px]" />
      <div className="absolute left-1/2 top-[6%] h-4 w-24 -translate-x-1/2 rounded-full bg-navy-400/15 blur-[4px]" />

      {/* Soft column separators hinting at a table */}
      <div className="absolute bottom-[12%] left-[20%] top-[28%] w-px bg-gradient-to-b from-transparent via-navy-300/25 to-transparent" />
      <div className="absolute bottom-[12%] right-[24%] top-[28%] w-px bg-gradient-to-b from-transparent via-teal-400/20 to-transparent" />
    </div>
  );
}

/** Peripheral “dashboard” lines — heavily blurred; suggest depth around the main table. */
function BlurredSideRail({
  side,
  compact,
  seed,
}: Readonly<{
  side: "left" | "right";
  compact: boolean;
  seed: number;
}>) {
  const nudge = (i: number) => ((seed + i * 7) % 5) * 1.2;
  const leftRows: ReadonlyArray<{ label: string; value: string }> = [
    { label: "HRA / mo", value: `₹${(18 + nudge(0)).toFixed(1)}K` },
    { label: "PF (employee)", value: `${(11.2 + nudge(1) * 0.1).toFixed(1)}%` },
    { label: "Gratuity (yr)", value: `₹${(3.8 + nudge(2) * 0.2).toFixed(1)}L` },
    { label: "Variable weight", value: `${(12 + nudge(3))}%` },
    { label: "Special allowance", value: `₹${(42 + nudge(4)).toFixed(0)}K` },
    { label: "LTA (annual)", value: `₹${(96 + nudge(5)).toFixed(0)}K` },
  ];
  const rightRows: ReadonlyArray<{ label: string; value: string }> = [
    { label: "Joining bonus", value: `₹${(1.5 + nudge(0) * 0.1).toFixed(1)}L` },
    { label: "ESOP (1Y notional)", value: `₹${(2.4 + nudge(1) * 0.15).toFixed(1)}L` },
    { label: "TDS effective", value: `${(21 + nudge(2) * 0.3).toFixed(1)}%` },
    { label: "Tax regime", value: nudge(3) % 2 === 0 ? "New" : "Old" },
    { label: "City tier", value: `T${1 + (nudge(4) % 3)}` },
    { label: "Employer PF", value: `₹${(28 + nudge(5)).toFixed(0)}K/mo` },
  ];
  const rows = side === "left" ? leftRows : rightRows;
  const shown = compact ? rows.slice(0, 4) : rows;

  return (
    <div
      className={cn(
        "pointer-events-none flex shrink-0 flex-col justify-center gap-y-2 rounded-lg border border-navy-200/50 bg-navy-100/40 px-1.5 py-2 sm:px-2",
        "select-none opacity-[0.62]",
        "blur-[4px] sm:blur-[5px]",
        compact ? "w-[2.65rem] sm:w-[3.25rem]" : "w-[3.1rem] sm:w-[4.75rem]",
        side === "right" && "items-end text-right"
      )}
      aria-hidden
    >
      {shown.map((row) => (
        <div
          key={`${side}-${row.label}`}
          className={cn(side === "right" ? "text-right" : "text-left")}
        >
          <p
            className={cn(
              "font-semibold uppercase tracking-wide text-navy-400",
              compact ? "text-[6px] leading-tight" : "text-[7px] sm:text-[8px]"
            )}
          >
            {row.label}
          </p>
          <p
            className={cn(
              "tabular-nums font-semibold text-navy-700",
              compact ? "text-[8px] leading-tight" : "text-[9px] sm:text-[11px]"
            )}
          >
            {row.value}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Blurred faux offer-comparison metrics + CTA into the shared Premium plans modal.
 */
export function PremiumBlurOfferTeaser({
  className,
  compact = false,
}: Readonly<PremiumBlurOfferTeaserProps>) {
  const router = useRouter();
  const loggedIn = Boolean(useAuthStore((s) => s.user));
  const pathname = usePathname() ?? "";
  const scenarioIdx = useMemo(
    () => scenarioIndexForPath(pathname),
    [pathname]
  );
  const demo = OFFER_DEMO_SCENARIOS[scenarioIdx];
  const titleId = useId();

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-200/50 bg-white shadow-sm",
        "ring-1 ring-teal-100/40",
        compact ? "p-4" : "p-6 sm:p-7",
        className
      )}
      aria-labelledby={titleId}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-800">
        {COPY.eyebrow}
      </p>
      <h2
        id={titleId}
        className={cn(
          "mt-2 font-display font-bold tracking-tight text-navy-900",
          compact ? "text-base leading-snug sm:text-lg" : "text-lg leading-snug sm:text-xl md:text-2xl"
        )}
      >
        {COPY.title}
      </h2>
      <p
        className={cn(
          "mt-3 text-navy-600 leading-relaxed",
          compact ? "text-xs sm:text-[13px]" : "text-sm sm:text-base"
        )}
      >
        {compact ? COPY.bodyCompact : COPY.bodyFull}
      </p>

      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-navy-200/60 shadow-inner",
          compact
            ? "mt-4 min-h-[15.25rem] py-2 pl-1 pr-1 sm:min-h-[16.5rem] sm:py-2.5 sm:pl-1.5 sm:pr-1.5"
            : "mt-5 p-2 sm:mt-6 sm:p-3"
        )}
      >
        <AbstractOfferPreviewLayer compact={compact} />

        {/* Edge “leaks”: extra metric shapes peeking past the rails (still illegible). */}
        <div
          className="pointer-events-none absolute -left-6 top-1/2 z-[2] h-24 w-16 -translate-y-1/2 rounded-full bg-teal-300/30 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-5 top-1/3 z-[2] h-20 w-14 rounded-full bg-navy-300/25 blur-2xl"
          aria-hidden
        />

        <div
          className={cn(
            "relative z-[1] flex items-stretch gap-1 sm:gap-2",
            compact
              ? "min-h-[11.75rem] sm:min-h-[13.25rem]"
              : "min-h-[9.5rem] sm:min-h-[11rem]"
          )}
        >
          <BlurredSideRail side="left" compact={compact} seed={scenarioIdx} />
          <div
            className={cn(
              "relative min-w-0 flex-1 overflow-hidden rounded-lg",
              compact ? "py-2" : "py-3"
            )}
          >
            <div
              className={cn(
                "select-none px-1.5 opacity-[0.68] sm:px-3",
                "blur-[5px] sm:blur-[6px]"
              )}
              aria-hidden
            >
              <div
                className={cn(
                  "grid grid-cols-[1fr_1fr] gap-x-2 gap-y-1 text-center",
                  compact ? "text-[9px]" : "text-[10px] sm:text-xs"
                )}
              >
                <p className="col-span-2 pb-1 text-[9px] font-semibold uppercase tracking-wide text-navy-400">
                  Sample comparison · not your data
                </p>
                <div className="rounded-lg bg-navy-50/80 py-2">
                  <p className="font-semibold text-navy-500">Offer A</p>
                  <p className="mt-0.5 text-navy-600">{demo.a.short}</p>
                  <p className="tabular-nums text-navy-500">{demo.a.ctc}</p>
                </div>
                <div className="rounded-lg bg-navy-50/80 py-2">
                  <p className="font-semibold text-navy-500">Offer B</p>
                  <p className="mt-0.5 text-navy-600">{demo.b.short}</p>
                  <p className="tabular-nums text-navy-500">{demo.b.ctc}</p>
                </div>
              </div>

              <table
                className={cn(
                  "mt-2 w-full border-collapse text-center tabular-nums text-navy-800 sm:mt-3",
                  compact ? "text-[10px]" : "text-xs sm:text-sm"
                )}
              >
                <tbody className="divide-y divide-navy-100/80">
                  <tr>
                    <th
                      scope="row"
                      className="py-1.5 pr-2 text-left font-medium text-navy-500"
                    >
                      In-hand / mo
                    </th>
                    <td className="py-1.5 font-display font-bold">
                      {demo.a.inHand}
                    </td>
                    <td className="py-1.5 font-display font-bold">
                      {demo.b.inHand}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-1.5 pr-2 text-left font-medium text-navy-500"
                    >
                      Est. tax / mo
                    </th>
                    <td className="py-1.5">{demo.a.taxMo}</td>
                    <td className="py-1.5">{demo.b.taxMo}</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-1.5 pr-2 text-left font-medium text-navy-500"
                    >
                      1st year value
                    </th>
                    <td className="py-1.5 font-semibold">{demo.a.y1}</td>
                    <td className="py-1.5 font-semibold">{demo.b.y1}</td>
                  </tr>
                  <tr className="text-teal-800">
                    <th
                      scope="row"
                      className="py-1.5 pr-2 text-left font-medium text-navy-500"
                    >
                      Lens
                    </th>
                    <td className="py-1.5 font-semibold" colSpan={2}>
                      {demo.verdict} · {demo.deltaY1}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <BlurredSideRail side="right" compact={compact} seed={scenarioIdx} />
        </div>

        {/* Bottom fade for CTA — compact: shorter fade so taller preview stays visible. */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-white via-white/75 to-transparent",
            compact ? "h-[38%] sm:h-[36%]" : "h-[46%] sm:h-[42%]"
          )}
        />

        <div
          className={cn(
            "absolute inset-0 z-[3] flex flex-col items-center justify-end px-3 pb-3",
            compact
              ? "gap-2 pt-14 pb-3.5 sm:gap-2.5 sm:pt-16 sm:pb-4"
              : "gap-2.5 pt-10 pb-3 sm:gap-3 sm:pb-4 sm:pt-12"
          )}
        >
          <p className="pointer-events-none text-center text-[11px] font-medium text-navy-600 sm:text-sm">
            {COPY.unlock}
          </p>
          <Button
            type="button"
            className="pointer-events-auto h-10 gap-1.5 rounded-full bg-teal-700 px-6 text-xs font-semibold text-white shadow-sm hover:bg-teal-800 sm:h-11 sm:text-sm"
            onClick={() =>
              requestPremiumPurchase(router, { loggedIn })
            }
          >
            {COPY.cta}
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
