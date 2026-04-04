"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";

interface PremiumBlurOfferTeaserProps {
  className?: string;
  /** Smaller copy for tight layouts (e.g. calculator aside). */
  compact?: boolean;
}

/** Deterministic “random” demo per URL — stable SSR/client, no hydration flip. */
function scenarioIndexForPath(pathname: string): number {
  let h = 0;
  for (const ch of pathname) {
    const cp = ch.codePointAt(0) ?? 0;
    h = Math.imul(31, h) + cp;
  }
  return Math.abs(h) % OFFER_DEMO_SCENARIOS.length;
}

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

/**
 * Blurred faux offer-comparison metrics + CTA into the shared Premium plans modal.
 */
export function PremiumBlurOfferTeaser({
  className,
  compact = false,
}: Readonly<PremiumBlurOfferTeaserProps>) {
  const pathname = usePathname() ?? "";
  const demo = useMemo(
    () => OFFER_DEMO_SCENARIOS[scenarioIndexForPath(pathname)],
    [pathname]
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-200/50 bg-gradient-to-b from-white to-teal-50/20",
        compact ? "p-4" : "p-5 sm:p-6",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-800">
        Offer comparison preview
      </p>
      <p
        className={cn(
          "mt-1 font-medium text-navy-800",
          compact ? "text-sm" : "text-base"
        )}
      >
        In-hand, tax drag, and first-year value—side by side
      </p>

      <div
        className={cn(
          "relative mt-4 rounded-xl border border-navy-100/80 bg-white/60",
          compact ? "py-2.5" : "py-4"
        )}
      >
        <div
          className={cn(
            "select-none px-2 opacity-[0.52] sm:px-4",
            "blur-[7px] sm:blur-[8px]"
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
              "mt-3 w-full border-collapse text-center tabular-nums text-navy-800",
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
                <td className="py-1.5 font-display font-bold">{demo.a.inHand}</td>
                <td className="py-1.5 font-display font-bold">{demo.b.inHand}</td>
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/25" />

        <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 px-3 pb-3 pt-10 sm:pb-4 sm:pt-12">
          <p className="pointer-events-none text-center text-[11px] font-medium text-navy-600 sm:text-xs">
            Premium unlocks live comparison on your real offers.
          </p>
          <Button
            type="button"
            className="pointer-events-auto h-9 rounded-full bg-teal-700 px-5 text-xs font-semibold text-white hover:bg-teal-800"
            onClick={() => openPremiumPlansModal()}
          >
            View Premium plans
          </Button>
        </div>
      </div>
    </div>
  );
}
