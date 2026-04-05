"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock, History, Layers, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { RemoveOfferComparisonEntryDialog } from "@/components/layout/remove-offer-comparison-entry-dialog";
import { RemoveSalaryEntryDialog } from "@/components/layout/remove-salary-entry-dialog";
import {
  salaryPremiumBreakdownHref,
  salaryPremiumOfferComparisonHref,
} from "@/lib/config/salary-premium-paths";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useRecentActivityEntries } from "@/lib/hooks/use-recent-activity-entries";
import { useSalaryHistoryDelete } from "@/lib/hooks/use-salary-history-delete";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useDeleteOfferSessionMutation } from "@/lib/supabase/hooks/use-offer-sessions";
import { useOfferComparisonRestoreStore } from "@/lib/stores/use-offer-comparison-restore-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type {
  HistoryEntry,
  OfferComparisonHistoryEntry,
  SalaryHistoryEntry,
} from "@/lib/types/history.types";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { cn } from "@/lib/utils";
import { RecentHistoryRowsSkeleton } from "@/components/shared/loading-skeletons";
import { appToast } from "@/lib/notify/app-notify";

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
  const { toolHref } = useTieredPremiumLinks();
  const user = useAuthStore((s) => s.user);
  const cloud = shouldPersistSessions(user);
  const { entries, isLoading } = useRecentActivityEntries(cloud);
  const removeOfferComparisonEntry = useHistoryStore(
    (s) => s.removeOfferComparisonEntry
  );
  const deleteOfferSession = useDeleteOfferSessionMutation();
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );
  const queueOfferRestore = useOfferComparisonRestoreStore(
    (s) => s.queueRestore
  );

  const [pendingSalaryDelete, setPendingSalaryDelete] =
    useState<SalaryHistoryEntry | null>(null);
  const [pendingOfferDelete, setPendingOfferDelete] =
    useState<OfferComparisonHistoryEntry | null>(null);

  const { applyRemove } = useSalaryHistoryDelete();

  const handleSelect = useCallback(
    (entry: HistoryEntry) => {
      if (entry.kind === "salary") {
        setActiveSalaryHistoryId(entry.id);
        if (cloud) {
          router.push(salaryPremiumBreakdownHref(entry.id));
          appToast.salarySession.opened();
        } else {
          setInput(coerceSalarySnapshot(entry.snapshot));
          calculateBreakdown();
          router.push(salaryPremiumBreakdownHref());
          appToast.salarySession.opened();
        }
      } else {
        if (entry.hydrateFromServer) {
          router.push(
            salaryPremiumOfferComparisonHref(entry.id)
          );
          appToast.offerComparison.opened();
        } else {
          queueOfferRestore(entry.offersSnapshot);
          router.push(toolHref("offers"));
          appToast.offerComparison.opened();
        }
      }
      onOpenChange(false);
    },
    [
      calculateBreakdown,
      cloud,
      onOpenChange,
      queueOfferRestore,
      router,
      setActiveSalaryHistoryId,
      setInput,
      toolHref,
    ]
  );

  const confirmSheetSalaryDelete = useCallback(async () => {
    if (!pendingSalaryDelete) return;
    await applyRemove(pendingSalaryDelete);
  }, [pendingSalaryDelete, applyRemove]);

  const confirmSheetOfferDelete = useCallback(async () => {
    if (!pendingOfferDelete) return;
    if (pendingOfferDelete.hydrateFromServer) {
      try {
        await deleteOfferSession.mutateAsync(pendingOfferDelete.id);
        appToast.offerComparison.deleted();
      } catch {
        appToast.errors.offerComparisonDeleteFailed();
      }
    } else {
      removeOfferComparisonEntry(pendingOfferDelete.id);
      appToast.persistence.removedFromDevice();
    }
  }, [pendingOfferDelete, removeOfferComparisonEntry, deleteOfferSession]);

  return (
    <>
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
              {cloud
                ? "Your last five salary sessions and offer comparisons from your account."
                : "Your last five salary runs and offer comparisons on this device."}{" "}
              Remove saved salaries here or from the Salary menu—same list—or
              remove offer comparisons with the trash control.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-3 py-3">
            {isLoading ? (
              <RecentHistoryRowsSkeleton rows={5} />
            ) : entries.length === 0 ? (
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
                    onRequestDeleteSalary={
                      entry.kind === "salary"
                        ? () => setPendingSalaryDelete(entry)
                        : undefined
                    }
                    onRequestDeleteOffer={
                      entry.kind === "offer_comparison"
                        ? () => setPendingOfferDelete(entry)
                        : undefined
                    }
                  />
                ))}
              </ul>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <RemoveSalaryEntryDialog
        entry={pendingSalaryDelete}
        open={pendingSalaryDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingSalaryDelete(null);
        }}
        onConfirm={confirmSheetSalaryDelete}
        variant="sheet"
      />

      <RemoveOfferComparisonEntryDialog
        entry={pendingOfferDelete}
        open={pendingOfferDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingOfferDelete(null);
        }}
        onConfirm={confirmSheetOfferDelete}
      />
    </>
  );
}

function HistoryRow({
  entry,
  onSelect,
  onRequestDeleteSalary,
  onRequestDeleteOffer,
}: {
  entry: HistoryEntry;
  onSelect: () => void;
  onRequestDeleteSalary?: () => void;
  onRequestDeleteOffer?: () => void;
}) {
  return (
    <li>
      <div
        className={cn(
          "flex items-stretch gap-1 rounded-xl border border-transparent pr-1 transition-colors",
          "hover:bg-teal-50/60 hover:border-teal-100"
        )}
      >
        <button
          type="button"
          onClick={onSelect}
          className={cn(
            "min-w-0 flex-1 text-left rounded-xl px-3 py-3",
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
        {entry.kind === "salary" && onRequestDeleteSalary ? (
          <button
            type="button"
            aria-label={`Remove saved salary ${entry.title}`}
            className={cn(
              "shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors",
              "hover:bg-danger-50 hover:text-danger-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRequestDeleteSalary();
            }}
          >
            <Trash2 className="size-4" strokeWidth={2} aria-hidden />
          </button>
        ) : null}
        {entry.kind === "offer_comparison" && onRequestDeleteOffer ? (
          <button
            type="button"
            aria-label={`Remove offer comparison ${entry.title}`}
            className={cn(
              "shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors",
              "hover:bg-danger-50 hover:text-danger-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRequestDeleteOffer();
            }}
          >
            <Trash2 className="size-4" strokeWidth={2} aria-hidden />
          </button>
        ) : null}
      </div>
    </li>
  );
}
