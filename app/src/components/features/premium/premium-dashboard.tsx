"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  LayoutGrid,
  Scale,
  TrendingUp,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { cn } from "@/lib/utils";

const modules = [
  {
    href: "/premium/offer-comparison",
    title: "Offer comparison",
    description:
      "Enter 2–3 offers and compare monthly in-hand, tax, and first-year value side by side.",
    icon: Scale,
    badge: "Interactive",
  },
  {
    href: "/premium/wealth-forecast",
    title: "Wealth forecast",
    description:
      "Project corpus over 5, 10, or 20 years with savings rate, salary growth, and returns.",
    icon: TrendingUp,
    badge: "Live model",
  },
  {
    href: "/premium/emi-analyzer",
    title: "EMI analyzer",
    description:
      "Compute EMIs and see post-loan disposable income vs your current in-hand estimate.",
    icon: Calculator,
    badge: "Debt fit",
  },
] as const;

export function PremiumDashboard() {
  const breakdown = useSalaryStore((s) => s.breakdown);

  return (
    <PageShell className="py-10 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          title="Premium workspace"
          subtitle="Planning tools that build on your salary breakdown. Adjust inputs and see numbers update instantly."
        />
        <Link
          href="/paywall"
          className="text-sm font-semibold text-teal-600 hover:text-teal-700 shrink-0"
        >
          Upgrade benefits →
        </Link>
      </div>

      {!breakdown && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
          <span className="font-medium">No salary breakdown yet.</span>{" "}
          <Link
            href="/salary"
            className="font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            Run the CTC calculator
          </Link>{" "}
          so forecasts and EMI checks can use your real in-hand baseline.
        </div>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {modules.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className={cn(
              "group rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm transition-all",
              "hover:border-teal-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <m.icon className="size-6" />
              </div>
              <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-600">
                {m.badge}
              </span>
            </div>
            <h2 className="mt-4 text-h3 text-navy-800 group-hover:text-teal-800 transition-colors">
              {m.title}
            </h2>
            <p className="mt-2 text-sm text-navy-500 leading-relaxed">
              {m.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
              Open tool
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 p-8 text-center">
        <LayoutGrid className="mx-auto size-10 text-navy-300 mb-3" />
        <p className="text-sm text-navy-500 max-w-md mx-auto">
          More modules from the product map (affordability planner, detailed
          components, offer score) can plug into this hub the same way.
        </p>
      </div>
    </PageShell>
  );
}
