"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Trash2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  RemoveSalaryBulkDialog,
  RemoveSalaryEntryDialog,
} from "@/components/layout/remove-salary-entry-dialog";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import {
  useHistoryStore,
  SALARY_HISTORY_MAX_ENTRIES,
} from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useSalarySessionsListQuery } from "@/lib/supabase/hooks/use-salary-sessions";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { useSalaryHistoryDelete } from "@/lib/hooks/use-salary-history-delete";
import { appToast } from "@/lib/notify/app-notify";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import { salaryPremiumBreakdownHref } from "@/lib/config/salary-premium-paths";
import { cn } from "@/lib/utils";
import {
  SalaryHistoryRowsSkeleton,
  ShimmerBlock,
} from "@/components/shared/loading-skeletons";

export default function SalaryHistoryPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const persist = shouldPersistSessions(user);
  const {
    data: cloudList = [],
    isPending: cloudListPending,
  } = useSalarySessionsListQuery(persist);
  const localContexts = useHistoryStore((s) => s.salaryContexts);
  const salaryContexts = persist ? cloudList : localContexts;
  const historyFull =
    salaryContexts.length >= SALARY_HISTORY_MAX_ENTRIES;
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );
  const resetSalary = useSalaryStore((s) => s.reset);
  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const { applyRemove, applyRemoveMany } = useSalaryHistoryDelete();

  const [pendingDelete, setPendingDelete] = useState<SalaryHistoryEntry | null>(
    null
  );
  const [pendingBulkDelete, setPendingBulkDelete] = useState<
    SalaryHistoryEntry[] | null
  >(null);
  const [selectedIds, setSelectedIds] = useState(() => new Set<string>());

  const allowed = Boolean(user) && hasPremiumProductAccess(user?.planTier);

  useEffect(() => {
    if (!allowed) {
      router.replace("/salary");
    }
  }, [allowed, router]);

  const handleStartNew = useCallback(() => {
    resetSalary();
    clearSalaryBreakdownScrollSave();
    router.push("/salary");
  }, [resetSalary, router]);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const confirmRemoveEntry = useCallback(async () => {
    if (!pendingDelete) return;
    const id = pendingDelete.id;
    await applyRemove(pendingDelete);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, [pendingDelete, applyRemove]);

  const confirmBulkRemove = useCallback(async () => {
    if (!pendingBulkDelete?.length) return;
    await applyRemoveMany(pendingBulkDelete);
    clearSelection();
  }, [pendingBulkDelete, applyRemoveMany, clearSelection]);

  const selectAll = useCallback(() => {
    setSelectedIds(new Set(salaryContexts.map((e) => e.id)));
  }, [salaryContexts]);

  const toggleSelected = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectedEntries = useMemo(
    () => salaryContexts.filter((e) => selectedIds.has(e.id)),
    [salaryContexts, selectedIds]
  );
  const selectedCount = selectedEntries.length;

  const toggleSelectAllOrClear = useCallback(() => {
    if (selectedCount > 0) {
      clearSelection();
    } else {
      selectAll();
    }
  }, [selectedCount, clearSelection, selectAll]);

  if (!allowed) {
    return (
      <PageShell className="py-20">
        <div
          className="mx-auto max-w-[220px] space-y-2"
          aria-busy
          aria-label="Loading"
        >
          <ShimmerBlock className="h-3 w-full rounded-md" />
          <ShimmerBlock className="h-3 w-[85%] rounded-md" />
        </div>
      </PageShell>
    );
  }

  const listLoading = persist && cloudListPending;

  const slotsUsed = salaryContexts.length;
  const metaLine = (e: (typeof salaryContexts)[number]) =>
    `${e.regimeLabel} · In-hand ${formatCurrency(e.monthlyInHand)}/mo · ${formatRelativeTime(e.at)}`;

  return (
    <PageShell className="py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/salary"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group -ml-1.5 mb-8 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
          )}
        >
          <ChevronLeft
            className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={2}
            aria-hidden
          />
          Back to salary
        </Link>

        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-10 xl:items-start">
          <div className="min-w-0">
            <header className="flex flex-col gap-6 border-b border-navy-100/90 pb-8 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="min-w-0 max-w-3xl">
                <h1 className="text-h1 text-navy-800">Saved salaries</h1>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {persist
                    ? `Up to ${SALARY_HISTORY_MAX_ENTRIES} sessions in your account. Switch between them, clean up in bulk, or start fresh—nothing here touches your bank or payroll.`
                    : `Up to ${SALARY_HISTORY_MAX_ENTRIES} calculations on this device. Same idea: switch, tidy, or start over—stored locally only.`}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-11 shrink-0 rounded-full border-teal-300/80 bg-white px-6 text-sm font-semibold text-teal-800 shadow-sm hover:bg-teal-50 md:mb-0.5"
                onClick={handleStartNew}
              >
                New in-hand check
              </Button>
            </header>

            {historyFull ? (
              <div
                className="mt-6 rounded-xl border border-amber-200/90 bg-gradient-to-r from-amber-50/90 to-amber-50/40 px-4 py-3.5 text-sm text-amber-950 shadow-sm"
                aria-live="polite"
              >
                <p className="font-semibold">History limit reached</p>
                <p className="mt-1 text-xs text-amber-900/90 leading-relaxed">
                  Remove one or more saved salaries below before you can run a new
                  check from the salary page.
                </p>
              </div>
            ) : null}

            {!listLoading && salaryContexts.length > 0 ? (
              <div
                className="mt-6 flex flex-col gap-3 rounded-xl border border-navy-200/70 bg-navy-50/35 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                role="toolbar"
                aria-label="Saved salary selection"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="h-9 rounded-lg border border-navy-200/80 bg-white px-3 text-xs font-semibold text-navy-800 shadow-sm"
                    onClick={toggleSelectAllOrClear}
                    aria-pressed={selectedCount > 0}
                  >
                    {selectedCount > 0 ? "Clear selection" : "Select all"}
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  {selectedCount > 0 ? (
                    <>
                      <span className="text-xs font-semibold tabular-nums text-navy-600">
                        {selectedCount} selected
                      </span>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="h-9 rounded-lg px-4 text-xs font-semibold"
                        onClick={() => setPendingBulkDelete(selectedEntries)}
                      >
                        Delete selected
                      </Button>
                    </>
                  ) : (
                    <span className="text-xs text-navy-500">
                      Select rows to remove several at once
                    </span>
                  )}
                </div>
              </div>
            ) : null}

            {listLoading ? (
              <SalaryHistoryRowsSkeleton rows={5} />
            ) : salaryContexts.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-navy-200/70 bg-gradient-to-br from-navy-50/50 via-white to-teal-50/20 px-8 py-14 text-center shadow-sm">
                <p className="text-base font-semibold text-navy-800">
                  No saved entries yet
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-navy-500">
                  Run a breakdown from the salary page and it can appear here (up
                  to {SALARY_HISTORY_MAX_ENTRIES}) so you can jump back anytime.
                </p>
                <Button
                  type="button"
                  className={cn(
                    buttonVariants({ variant: "default", size: "default" }),
                    "mt-8 h-11 rounded-full px-8 text-sm font-semibold shadow-md"
                  )}
                  onClick={handleStartNew}
                >
                  New in-hand check
                </Button>
              </div>
            ) : (
              <div className="mt-6 w-full overflow-hidden rounded-2xl border border-navy-200/70 bg-white shadow-md shadow-navy-900/[0.04]">
                <div className="hidden border-b border-navy-100 bg-gradient-to-r from-navy-50/80 to-teal-50/20 px-4 py-2.5 md:grid md:grid-cols-[2.75rem_minmax(0,1fr)_minmax(0,1fr)_11.5rem] md:items-center md:gap-5">
                  <span className="sr-only">Bulk select</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy-500">
                    CTC &amp; label
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy-500">
                    Regime &amp; in-hand
                  </span>
                  <span className="text-right text-[10px] font-bold uppercase tracking-[0.12em] text-navy-500">
                    Actions
                  </span>
                </div>
                <ul className="divide-y divide-navy-100">
                  {salaryContexts.map((entry) => {
                    const active = entry.id === activeId;
                    return (
                      <li key={entry.id}>
                        <div
                          className={cn(
                            "transition-colors hover:bg-navy-50/50",
                            active &&
                              "bg-gradient-to-r from-teal-50/70 via-teal-50/25 to-transparent hover:from-teal-50/80"
                          )}
                        >
                          <div className="flex flex-col gap-2.5 px-4 py-3.5 md:flex-row md:items-center md:gap-5 md:py-2.5">
                            <div className="flex items-start gap-3 md:w-[2.75rem] md:shrink-0 md:justify-center md:pt-0.5">
                              <input
                                type="checkbox"
                                className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-navy-300 text-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0"
                                checked={selectedIds.has(entry.id)}
                                onChange={() => toggleSelected(entry.id)}
                                aria-label={`Select ${formatCTCAsLPA(entry.annualCTC)} for bulk delete`}
                              />
                              <div className="min-w-0 flex-1 md:hidden">
                                <p className="text-sm font-semibold tabular-nums text-navy-800">
                                  {formatCTCAsLPA(entry.annualCTC)}
                                  {active ? (
                                    <span className="ml-2 inline-flex items-center rounded-md bg-teal-600/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-800">
                                      Active
                                    </span>
                                  ) : null}
                                </p>
                                <p className="mt-1 text-xs text-navy-500">
                                  {metaLine(entry)}
                                </p>
                                {entry.title ? (
                                  <p className="mt-1 truncate text-[11px] text-navy-400">
                                    {entry.title}
                                  </p>
                                ) : null}
                              </div>
                            </div>

                            <div className="hidden min-w-0 md:block md:flex-1">
                              <p className="text-sm font-semibold tabular-nums text-navy-800">
                                {formatCTCAsLPA(entry.annualCTC)}
                                {active ? (
                                  <span className="ml-2 inline-flex items-center rounded-md bg-teal-600/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-800">
                                    Active
                                  </span>
                                ) : null}
                              </p>
                              {entry.title ? (
                                <p className="mt-0.5 truncate text-[11px] text-navy-400">
                                  {entry.title}
                                </p>
                              ) : null}
                            </div>

                            <p className="hidden min-w-0 flex-1 text-xs leading-snug text-navy-600 md:block md:border-l md:border-navy-100 md:pl-5">
                              {metaLine(entry)}
                            </p>

                            <div className="flex items-center justify-end gap-1.5 border-t border-navy-100/80 pt-2.5 pl-10 md:w-[11.5rem] md:shrink-0 md:border-t-0 md:pt-0 md:pl-0">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="size-9 rounded-lg text-navy-400 hover:bg-danger-50 hover:text-danger-600"
                                aria-label={`Remove saved salary ${formatCTCAsLPA(entry.annualCTC)}`}
                                onClick={() => setPendingDelete(entry)}
                              >
                                <Trash2 className="size-4" strokeWidth={2} />
                              </Button>
                              <Button
                                type="button"
                                variant={active ? "secondary" : "default"}
                                className="h-9 min-w-[7.25rem] rounded-full px-3 text-xs font-semibold"
                                disabled={active}
                                onClick={() => {
                                  setActiveSalaryHistoryId(entry.id);
                                  if (persist) {
                                    router.push(salaryPremiumBreakdownHref(entry.id));
                                    appToast.salarySession.opened();
                                    return;
                                  }
                                  setInput(coerceSalarySnapshot(entry.snapshot));
                                  calculateBreakdown();
                                  router.push(salaryPremiumBreakdownHref());
                                  appToast.salarySession.opened();
                                }}
                              >
                                {active ? "Current" : "Use this salary"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <aside
            className="mt-10 hidden min-w-0 xl:block"
            aria-label="Saved salaries tips"
          >
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-teal-200/60 bg-gradient-to-b from-teal-50/90 to-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal-800">
                  Workspace
                </p>
                <p className="mt-3 text-sm font-semibold tabular-nums text-navy-800">
                  {slotsUsed} / {SALARY_HISTORY_MAX_ENTRIES}{" "}
                  <span className="font-normal text-navy-500">slots used</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-navy-600">
                  Your active salary opens in the breakdown view. Use{" "}
                  <span className="font-medium text-navy-700">Use this salary</span>{" "}
                  to switch
                  sessions without losing the rest of the list.
                </p>
              </div>
              <div className="rounded-xl border border-navy-200/60 bg-white/90 p-4 text-xs leading-relaxed text-navy-500 shadow-sm">
                <p className="font-semibold text-navy-700">Bulk delete</p>
                <p className="mt-1.5">
                  Select multiple rows, then{" "}
                  <span className="font-medium text-navy-600">Delete selected</span>{" "}
                  to clear several saved salaries in one step—synced to your account
                  when you&apos;re signed in with cloud save.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <RemoveSalaryEntryDialog
        entry={pendingDelete}
        open={pendingDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingDelete(null);
        }}
        onConfirm={confirmRemoveEntry}
        variant="sheet"
      />

      <RemoveSalaryBulkDialog
        entries={pendingBulkDelete ?? []}
        open={Boolean(pendingBulkDelete?.length)}
        onOpenChange={(next) => {
          if (!next) setPendingBulkDelete(null);
        }}
        onConfirm={confirmBulkRemove}
      />
    </PageShell>
  );
}
