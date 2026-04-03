"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button, buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { cn } from "@/lib/utils";

export default function SalaryHistoryPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const salaryContexts = useHistoryStore((s) => s.salaryContexts);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );
  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);

  const allowed = Boolean(user) && PREMIUM_UNLOCKED;

  useEffect(() => {
    if (!allowed) {
      router.replace("/salary");
    }
  }, [allowed, router]);

  if (!allowed) {
    return (
      <PageShell className="py-20">
        <p className="text-center text-sm text-navy-500">Redirecting…</p>
      </PageShell>
    );
  }

  return (
    <PageShell className="py-8 md:py-10">
      <Link
        href="/salary"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group -ml-1.5 mb-6 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
        )}
      >
        <ChevronLeft
          className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={2}
          aria-hidden
        />
        Back to salary
      </Link>

      <header className="max-w-2xl">
        <h1 className="text-h1 text-navy-800">Salary history</h1>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">
          Saved salary runs on this device. Select one to make it the active
          context for breakdown, tax, and planning tools.
        </p>
      </header>

      {salaryContexts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-navy-200/80 bg-navy-50/30 px-6 py-12 text-center">
          <p className="text-sm font-medium text-navy-700">
            No saved salaries yet
          </p>
          <p className="mt-2 text-xs text-navy-500">
            Run a breakdown from the salary page — each run is stored here for
            quick switching.
          </p>
          <Link
            href="/salary"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "mt-6 inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold"
            )}
          >
            Go to salary
          </Link>
        </div>
      ) : (
        <ul className="mt-8 max-w-xl space-y-2">
          {salaryContexts.map((entry) => {
            const active = entry.id === activeId;
            return (
              <li key={entry.id}>
                <div
                  className={cn(
                    "flex flex-col gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between",
                    active
                      ? "border-teal-300/80 ring-1 ring-teal-100"
                      : "border-navy-200/60"
                  )}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-800">
                      {formatCTCAsLPA(entry.annualCTC)}
                      {active ? (
                        <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                          Active
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-0.5 text-xs text-navy-500">
                      {entry.regimeLabel} · In-hand{" "}
                      {formatCurrency(entry.monthlyInHand)}/mo ·{" "}
                      {formatRelativeTime(entry.at)}
                    </p>
                    {entry.title ? (
                      <p className="mt-1 truncate text-[11px] text-navy-400">
                        {entry.title}
                      </p>
                    ) : null}
                  </div>
                  <Button
                    type="button"
                    variant={active ? "secondary" : "default"}
                    className="h-9 shrink-0 rounded-full px-4 text-xs font-semibold"
                    disabled={active}
                    onClick={() => {
                      setInput(coerceSalarySnapshot(entry.snapshot));
                      calculateBreakdown();
                      setActiveSalaryHistoryId(entry.id);
                      router.push("/salary/breakdown");
                    }}
                  >
                    {active ? "Current" : "Use this salary"}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </PageShell>
  );
}
