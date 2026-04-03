"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, FileStack, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOfferComparisonRestoreStore } from "@/lib/stores/use-offer-comparison-restore-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { cn } from "@/lib/utils";

const MAX_ROWS = 3;

export function SalaryRecentsPanels() {
  const router = useRouter();
  const entries = useHistoryStore((s) => s.entries);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );
  const queueRestore = useOfferComparisonRestoreStore((s) => s.queueRestore);
  const { toolHref } = useTieredPremiumLinks();

  const salaryRows = entries.filter((e) => e.kind === "salary").slice(0, MAX_ROWS);
  const offerRows = entries
    .filter((e) => e.kind === "offer_comparison")
    .slice(0, MAX_ROWS);

  if (salaryRows.length === 0 && offerRows.length === 0) {
    return (
      <div className="mt-12 rounded-2xl border border-dashed border-navy-200/80 bg-navy-50/30 px-6 py-10 text-center">
        <p className="text-sm font-medium text-navy-700">
          No tracked salaries or offer comparisons yet
        </p>
        <p className="mt-2 text-xs text-navy-500 max-w-md mx-auto leading-relaxed">
          Run a breakdown or compare offers — your last few runs will appear here
          for quick access.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileStack className="size-4 text-teal-600" />
          <h2 className="text-sm font-semibold text-navy-800">
            Last tracked salaries
          </h2>
        </div>
        {salaryRows.length === 0 ? (
          <p className="text-xs text-navy-500 py-4">
            Complete a salary run to see it listed here.
          </p>
        ) : (
          <ul className="space-y-2">
            {salaryRows.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    setInput(
                      coerceSalarySnapshot({
                        ...e.snapshot,
                        resultSource: e.snapshot.resultSource,
                        documentFileName: e.snapshot.documentFileName,
                      })
                    );
                    calculateBreakdown();
                    setActiveSalaryHistoryId(e.id);
                    router.push("/salary/breakdown");
                  }}
                  className={cn(
                    "w-full text-left rounded-xl border border-navy-200/60 bg-white px-4 py-3 shadow-sm",
                    "hover:border-teal-200 hover:bg-teal-50/40 transition-colors"
                  )}
                >
                  <div className="flex justify-between gap-2">
                    <span className="text-sm font-semibold text-navy-800 truncate">
                      {e.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-wide text-navy-400 shrink-0">
                      {formatRelativeTime(e.at)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-navy-500">
                    {formatCurrency(e.monthlyInHand)}/mo · {e.regimeLabel}
                    {e.resultSource === "document_parsed" ? (
                      <span className="ml-1.5 text-teal-700 font-medium">
                        · Document
                      </span>
                    ) : (
                      <span className="ml-1.5 text-navy-400">· Estimated</span>
                    )}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                    Open breakdown
                    <ArrowRight className="size-3" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4 text-teal-600" />
          <h2 className="text-sm font-semibold text-navy-800">
            Last compared offers
          </h2>
        </div>
        {offerRows.length === 0 ? (
          <p className="text-xs text-navy-500 py-4">
            Compare two or three offers to see recent comparisons here.
          </p>
        ) : (
          <ul className="space-y-2">
            {offerRows.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    queueRestore(e.offersSnapshot);
                    router.push(toolHref("offers"));
                  }}
                  className={cn(
                    "w-full text-left rounded-xl border border-navy-200/60 bg-white px-4 py-3 shadow-sm",
                    "hover:border-teal-200 hover:bg-teal-50/40 transition-colors"
                  )}
                >
                  <div className="flex justify-between gap-2">
                    <span className="text-sm font-semibold text-navy-800">
                      {e.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-wide text-navy-400 shrink-0">
                      {formatRelativeTime(e.at)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-navy-500 line-clamp-2">
                    {e.winnerSummary}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                    Resume comparison
                    <ArrowRight className="size-3" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        <Button
          type="button"
          variant="ghost"
          className="mt-4 h-auto p-0 text-xs font-semibold text-teal-600 hover:text-teal-700 hover:bg-transparent"
          onClick={() => router.push(toolHref("offers"))}
        >
          New offer comparison →
        </Button>
      </div>
    </div>
  );
}
