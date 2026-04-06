"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MONTHLY_LIST = 199;
const YEARLY_DISCOUNT = 0.2;
const YEARLY_TOTAL = Math.round(MONTHLY_LIST * 12 * (1 - YEARLY_DISCOUNT));
const YEARLY_PER_MONTH = Math.round(YEARLY_TOTAL / 12);
const SAVE_PCT = Math.round(YEARLY_DISCOUNT * 100);

const FREE_FEATURES = [
  "Editable fixed & variable salary inputs",
  "Estimated in-hand (guaranteed vs illustrative)",
  "Monthly & annual deduction / TDS-style view",
  "Regime-aware tax estimate (Old / New)",
  "Simple result cards & package composition",
  "Basic salary view—fast, no sign-in required",
] as const;

const PREMIUM_FEATURES = [
  "Everything in Free",
  "Detailed salary breakdown & component table",
  "Offer comparison (in-hand, tax, first-year value)",
  "Wealth forecast (multi-year scenarios)",
  "EMI analyzer vs your in-hand",
  "Monthly lifestyle planner & surplus view",
  "Deeper insights across planning screens",
] as const;

const COMPARE_ROWS: ReadonlyArray<{
  label: string;
  free: boolean;
  premium: boolean;
}> = [
  { label: "Basic salary calculator", free: true, premium: true },
  { label: "Fixed vs variable in-hand clarity", free: true, premium: true },
  { label: "Regime-aware TDS-style estimates", free: true, premium: true },
  { label: "Component-wise breakdown", free: false, premium: true },
  { label: "Offer comparison", free: false, premium: true },
  { label: "Wealth forecast", free: false, premium: true },
  { label: "EMI affordability analyzer", free: false, premium: true },
  { label: "Monthly planner", free: false, premium: true },
  {
    label: "Dedicated planning workspace (breakdown, lifestyle, tools)",
    free: false,
    premium: true,
  },
];

function Cell({
  ok,
  compact,
}: Readonly<{ ok: boolean; compact?: boolean }>) {
  return (
    <td
      className={cn(
        "text-center align-middle",
        compact ? "px-3 py-2" : "px-4 py-3"
      )}
    >
      {ok ? (
        <Check
          className={cn(
            "mx-auto text-teal-600",
            compact ? "size-4" : "size-5"
          )}
          strokeWidth={compact ? 2 : 2.25}
          aria-label="Included"
        />
      ) : (
        <Minus
          className={cn(
            "mx-auto text-navy-300",
            compact ? "size-4" : "size-5"
          )}
          strokeWidth={2}
          aria-label="Not included"
        />
      )}
    </td>
  );
}

export interface SalaryPricingSectionProps {
  /** Primary paid CTA target (e.g. profile or login). */
  premiumHref: string;
  /** Optional: run real checkout instead of a link. */
  onUpgrade?: (billing: "monthly" | "yearly") => void | Promise<void>;
  upgradeBusy?: boolean;
  /** Free tier entry (usually `/salary`). */
  freeHref: string;
  className?: string;
  /** Anchor id for in-page links. */
  id?: string;
  /** Tighter spacing when shown inside a modal/dialog shell. */
  embedded?: boolean;
}

/**
 * Product-native pricing: Free vs Premium, monthly/yearly toggle, comparison table.
 */
export function SalaryPricingSection({
  premiumHref,
  onUpgrade,
  upgradeBusy = false,
  freeHref,
  className,
  id = "pricing",
  embedded = false,
}: Readonly<SalaryPricingSectionProps>) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const compact = embedded;

  return (
    <section
      id={id}
      className={cn(embedded ? "scroll-mt-4" : "scroll-mt-24", className)}
      aria-labelledby="pricing-heading"
    >
      <div
        className={cn(
          "text-center mx-auto",
          compact ? "max-w-lg" : "max-w-2xl"
        )}
      >
        <h2
          id="pricing-heading"
          className={cn(
            "font-display font-bold tracking-tight text-navy-900",
            compact
              ? "text-base sm:text-lg leading-snug"
              : "text-2xl sm:text-3xl md:text-4xl"
          )}
        >
          Plans built around how you actually use salary
        </h2>
        <p
          className={cn(
            "text-navy-600",
            compact
              ? "mt-2 text-xs leading-relaxed sm:text-[13px]"
              : "mt-3 text-sm leading-relaxed sm:text-base md:mt-4"
          )}
        >
          Start free with credible in-hand estimates. Upgrade when you want
          breakdowns, comparisons, and planning tools that stay tied to your
          numbers—not generic advice.
        </p>
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center",
          compact ? "mt-5 gap-2 sm:mt-6" : "mt-8 gap-3 sm:mt-10"
        )}
      >
        <div
          className={cn(
            "inline-flex rounded-full border border-navy-200/80 bg-navy-50/50 shadow-inner",
            compact ? "p-0.5" : "p-1"
          )}
        >
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full font-semibold transition-colors",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
              billing === "monthly"
                ? "bg-white text-navy-900 shadow-sm"
                : "text-navy-500 hover:text-navy-700"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full font-semibold transition-colors",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm gap-2",
              billing === "yearly"
                ? "bg-white text-navy-900 shadow-sm"
                : "text-navy-500 hover:text-navy-700"
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              <span>Yearly</span>
              <span
                className={cn(
                  "rounded-full bg-emerald-100 font-bold uppercase tracking-wide text-emerald-800",
                  compact
                    ? "px-1.5 py-px text-[9px]"
                    : "px-2 py-0.5 text-[10px]"
                )}
              >
                Save {SAVE_PCT}%
              </span>
            </span>
          </button>
        </div>
        <p
          className={cn(
            "text-navy-500",
            compact ? "text-[11px] leading-snug" : "text-xs"
          )}
        >
          {billing === "yearly"
            ? `Yearly is ${SAVE_PCT}% less than twelve monthly payments.`
            : "Switch to yearly anytime—same features."}
        </p>
      </div>

      <div
        className={cn(
          "grid lg:grid-cols-2 lg:items-stretch max-w-5xl mx-auto",
          compact ? "mt-6 gap-4 lg:gap-5" : "mt-10 gap-6 lg:gap-8"
        )}
      >
        {/* Free */}
        <div
          className={cn(
            "flex flex-col rounded-2xl border border-navy-200/70 bg-white shadow-sm",
            compact ? "rounded-xl p-4 sm:p-5" : "p-6 sm:p-8"
          )}
        >
          <p
            className={cn(
              "font-semibold uppercase tracking-[0.12em] text-navy-400",
              compact ? "text-[9px]" : "text-[10px]"
            )}
          >
            Essentials
          </p>
          <h3
            className={cn(
              "mt-0.5 font-display font-bold text-navy-900",
              compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
            )}
          >
            Free
          </h3>
          <p
            className={cn(
              "flex items-baseline gap-1",
              compact ? "mt-2" : "mt-3"
            )}
          >
            <span
              className={cn(
                "font-display font-bold tabular-nums text-navy-900",
                compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
              )}
            >
              ₹0
            </span>
            <span
              className={cn(
                "font-medium text-navy-500",
                compact ? "text-xs" : "text-sm"
              )}
            >
              / month
            </span>
          </p>
          <p
            className={cn(
              "text-navy-500",
              compact ? "mt-0.5 text-[11px]" : "mt-1 text-xs"
            )}
          >
            Full calculator—no card required.
          </p>
          <ul
            className={cn(
              "flex flex-1 flex-col text-navy-700",
              compact ? "mt-4 gap-2 text-xs sm:text-[13px]" : "mt-6 gap-3 text-sm"
            )}
          >
            {FREE_FEATURES.map((line) => (
              <li key={line} className="flex gap-2">
                <Check
                  className={cn(
                    "mt-0.5 shrink-0 text-teal-600",
                    compact ? "size-3.5" : "size-4"
                  )}
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span className="leading-snug">{line}</span>
              </li>
            ))}
          </ul>
          <Link
            href={freeHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full rounded-full border-navy-200 font-semibold text-navy-800 hover:bg-navy-50",
              compact ? "mt-5 h-9 text-xs sm:text-sm" : "mt-8 h-11"
            )}
          >
            Continue free
          </Link>
        </div>

        {/* Premium */}
        <div
          className={cn(
            "relative flex flex-col rounded-2xl border-2 border-teal-500/35 bg-gradient-to-b from-white via-teal-50/20 to-white shadow-md ring-1 ring-teal-200/50",
            compact ? "rounded-xl p-4 sm:p-5" : "p-6 sm:p-8"
          )}
        >
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2 rounded-full bg-teal-700 font-bold uppercase tracking-wide text-white shadow-sm",
              compact
                ? "-top-2.5 px-2.5 py-0.5 text-[9px]"
                : "-top-3 px-3 py-1 text-[10px]"
            )}
          >
            Recommended
          </span>
          <p
            className={cn(
              "font-semibold uppercase tracking-[0.12em] text-teal-800",
              compact ? "text-[9px]" : "text-[10px]"
            )}
          >
            Full planning
          </p>
          <h3
            className={cn(
              "mt-0.5 font-display font-bold text-teal-900",
              compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
            )}
          >
            Premium
          </h3>
          {billing === "yearly" ? (
            <>
              <p
                className={cn(
                  "flex items-baseline gap-1",
                  compact ? "mt-2" : "mt-3"
                )}
              >
                <span
                  className={cn(
                    "font-display font-bold tabular-nums text-navy-900",
                    compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
                  )}
                >
                  ₹{YEARLY_PER_MONTH.toLocaleString("en-IN")}
                </span>
                <span
                  className={cn(
                    "font-medium text-navy-500",
                    compact ? "text-xs" : "text-sm"
                  )}
                >
                  / month
                </span>
              </p>
              <p
                className={cn(
                  "text-navy-600",
                  compact ? "mt-0.5 text-[11px] sm:text-xs leading-snug" : "mt-1 text-sm"
                )}
              >
                Billed{" "}
                <span className="font-semibold tabular-nums text-navy-800">
                  ₹{YEARLY_TOTAL.toLocaleString("en-IN")}
                </span>{" "}
                per year · save {SAVE_PCT}% vs monthly
              </p>
            </>
          ) : (
            <>
              <p
                className={cn(
                  "flex items-baseline gap-1",
                  compact ? "mt-2" : "mt-3"
                )}
              >
                <span
                  className={cn(
                    "font-display font-bold tabular-nums text-navy-900",
                    compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
                  )}
                >
                  ₹{MONTHLY_LIST.toLocaleString("en-IN")}
                </span>
                <span
                  className={cn(
                    "font-medium text-navy-500",
                    compact ? "text-xs" : "text-sm"
                  )}
                >
                  / month
                </span>
              </p>
              <p
                className={cn(
                  "text-navy-600",
                  compact ? "mt-0.5 text-[11px] sm:text-xs leading-snug" : "mt-1 text-sm"
                )}
              >
                ₹{(MONTHLY_LIST * 12).toLocaleString("en-IN")} if paid monthly
                for a year—
                <span className="font-medium text-teal-800">
                  {" "}
                  yearly saves {SAVE_PCT}%
                </span>
              </p>
            </>
          )}
          <ul
            className={cn(
              "flex flex-1 flex-col text-navy-800",
              compact ? "mt-4 gap-2 text-xs sm:text-[13px]" : "mt-6 gap-3 text-sm"
            )}
          >
            {PREMIUM_FEATURES.map((line) => (
              <li key={line} className="flex gap-2">
                <Check
                  className={cn(
                    "mt-0.5 shrink-0 text-teal-600",
                    compact ? "size-3.5" : "size-4"
                  )}
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span
                  className={cn(
                    "leading-snug",
                    !compact && "font-medium"
                  )}
                >
                  {line}
                </span>
              </li>
            ))}
          </ul>
          {onUpgrade ? (
            <button
              type="button"
              disabled={upgradeBusy}
              onClick={() => onUpgrade(billing)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full rounded-full border-0 bg-teal-700 font-semibold text-white shadow-sm hover:bg-teal-800 disabled:opacity-60",
                compact ? "mt-5 h-9 text-xs sm:text-sm" : "mt-8 h-11"
              )}
            >
              {upgradeBusy ? "Preparing checkout…" : "Upgrade to Premium"}
            </button>
          ) : (
            <Link
              href={premiumHref}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full rounded-full border-0 bg-teal-700 font-semibold text-white shadow-sm hover:bg-teal-800",
                compact ? "mt-5 h-9 text-xs sm:text-sm" : "mt-8 h-11"
              )}
            >
              Upgrade to Premium
            </Link>
          )}
        </div>
      </div>

      <div
        className={cn("max-w-5xl mx-auto", compact ? "mt-8" : "mt-14")}
      >
        <h3
          className={cn(
            "text-center font-display font-bold text-navy-900",
            compact ? "text-sm sm:text-base" : "text-lg sm:text-xl"
          )}
        >
          Compare at a glance
        </h3>
        <div
          className={cn(
            "overflow-x-auto rounded-2xl border border-navy-200/60 bg-white shadow-sm",
            compact ? "mt-3 rounded-xl" : "mt-4"
          )}
        >
          <table
            className={cn(
              "w-full min-w-[280px]",
              compact ? "text-xs" : "text-sm"
            )}
          >
            <thead>
              <tr className="border-b border-navy-100 bg-navy-50/50">
                <th
                  scope="col"
                  className={cn(
                    "text-left font-semibold uppercase tracking-wide text-navy-500",
                    compact
                      ? "px-3 py-2 text-[10px]"
                      : "px-4 py-3 text-xs"
                  )}
                >
                  Capability
                </th>
                <th
                  scope="col"
                  className={cn(
                    "text-center font-semibold uppercase tracking-wide text-navy-500",
                    compact
                      ? "px-3 py-2 text-[10px]"
                      : "px-4 py-3 text-xs"
                  )}
                >
                  Free
                </th>
                <th
                  scope="col"
                  className={cn(
                    "text-center font-semibold uppercase tracking-wide text-teal-800",
                    compact
                      ? "px-3 py-2 text-[10px]"
                      : "px-4 py-3 text-xs"
                  )}
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label} className="hover:bg-navy-50/30">
                  <th
                    scope="row"
                    className={cn(
                      "text-left text-navy-800",
                      compact
                        ? "px-3 py-2 text-[11px] font-medium leading-snug sm:text-xs"
                        : "px-4 py-3 font-medium"
                    )}
                  >
                    {row.label}
                  </th>
                  <Cell ok={row.free} compact={compact} />
                  <Cell ok={row.premium} compact={compact} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={cn(
          "rounded-2xl border border-navy-200/60 bg-navy-50/40 max-w-5xl mx-auto",
          compact
            ? "mt-8 rounded-xl px-4 py-4 sm:px-5"
            : "mt-12 px-5 py-6 sm:px-8 sm:py-7"
        )}
      >
        <h3
          className={cn(
            "font-display font-bold text-navy-900",
            compact ? "text-sm" : "text-base sm:text-lg"
          )}
        >
          Straightforward &amp; transparent
        </h3>
        <p
          className={cn(
            "text-navy-600 max-w-3xl",
            compact
              ? "mt-1.5 text-xs leading-relaxed"
              : "mt-2 text-sm leading-relaxed"
          )}
        >
          You control what you enter. Estimates are for planning, not tax filing.
          Premium tools read from the same salary context you already trust in
          the free calculator—so upgrades feel like a natural next step, not a
          reset.
        </p>
        <ul
          className={cn(
            "flex flex-wrap font-semibold uppercase tracking-wide text-navy-500",
            compact
              ? "mt-3 gap-x-4 gap-y-1 text-[10px]"
              : "mt-4 gap-x-6 gap-y-2 text-xs"
          )}
        >
          <li>No ads in product flows</li>
          <li>No bank linking required</li>
          <li>Built for Indian payroll context</li>
        </ul>
      </div>
    </section>
  );
}
