"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock, History, Layers } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { premiumToolHref } from "@/lib/config/access-mode";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useOfferComparisonRestoreStore } from "@/lib/stores/use-offer-comparison-restore-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { HistoryEntry } from "@/lib/types/history.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { cn } from "@/lib/utils";

export function RecentHistoryNavButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 text-navy-400 hover:text-navy-600 transition-colors rounded-lg hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
        aria-label="Recent activity"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <History className="size-5" strokeWidth={1.75} />
      </button>
      <RecentHistorySheet open={open} onOpenChange={setOpen} />
    </>
  );
}

function RecentHistorySheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const entries = useHistoryStore((s) => s.entries);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const queueOfferRestore = useOfferComparisonRestoreStore(
    (s) => s.queueRestore
  );

  const handleSelect = useCallback(
    (entry: HistoryEntry) => {
      if (entry.kind === "salary") {
        setInput(entry.snapshot);
        calculateBreakdown();
        router.push("/salary/breakdown");
      } else {
        queueOfferRestore(entry.offersSnapshot);
        router.push(premiumToolHref("offers"));
      }
      onOpenChange(false);
    },
    [
      calculateBreakdown,
      onOpenChange,
      queueOfferRestore,
      router,
      setInput,
    ]
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[420px] gap-0 border-l border-navy-200 p-0 flex flex-col bg-white"
        showCloseButton
      >
        <SheetHeader className="border-b border-navy-100 px-5 py-4 text-left space-y-1">
          <SheetTitle className="text-h3 text-navy-800 font-semibold">
            Recent activity
          </SheetTitle>
          <SheetDescription className="text-xs text-navy-500">
            Quick return to recent salary runs and offer comparisons. Stays on
            this session only.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {entries.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-4 py-16">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-300 mb-4">
                <Clock className="size-6" />
              </div>
              <p className="text-sm font-semibold text-navy-800">
                No recent activity yet
              </p>
              <p className="mt-2 text-xs text-navy-500 max-w-[240px] leading-relaxed">
                Run a salary breakdown or compare offers — your last five
                actions will show up here.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {entries.map((entry) => (
                <HistoryRow
                  key={entry.id}
                  entry={entry}
                  onSelect={() => handleSelect(entry)}
                />
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function HistoryRow({
  entry,
  onSelect,
}: {
  entry: HistoryEntry;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "w-full text-left rounded-xl border border-transparent px-3 py-3 transition-colors",
          "hover:bg-teal-50/60 hover:border-teal-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"
        )}
      >
        {entry.kind === "salary" ? (
          <>
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-navy-800 line-clamp-1">
                {entry.title}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-navy-400 shrink-0 tabular-nums">
                {formatRelativeTime(entry.at)}
              </span>
            </div>
            <p className="mt-1 text-xs text-navy-500">
              CTC {formatCurrency(entry.annualCTC)} · In-hand{" "}
              {formatCurrency(entry.monthlyInHand)}/mo · {entry.regimeLabel}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
              Open breakdown
              <ArrowRight className="size-3" />
            </span>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-navy-800 flex items-center gap-1.5">
                <Layers className="size-3.5 text-teal-600 shrink-0" />
                {entry.title}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-navy-400 shrink-0">
                {formatRelativeTime(entry.at)}
              </span>
            </div>
            <p className="mt-1 text-xs text-navy-500">
              {entry.offerCount} offers · {entry.winnerSummary}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
              Resume comparison
              <ArrowRight className="size-3" />
            </span>
          </>
        )}
      </button>
    </li>
  );
}
