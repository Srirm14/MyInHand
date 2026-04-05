"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Trash2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button, buttonVariants } from "@/components/ui/button";
import { RemoveSalaryEntryDialog } from "@/components/layout/remove-salary-entry-dialog";
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
import { SalaryHistoryRowsSkeleton } from "@/components/shared/loading-skeletons";
import { Skeleton } from "@/components/ui/skeleton";

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
  const { applyRemove } = useSalaryHistoryDelete();

  const [pendingDelete, setPendingDelete] = useState<SalaryHistoryEntry | null>(
    null
  );

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

  const confirmRemoveEntry = useCallback(async () => {
    if (!pendingDelete) return;
    await applyRemove(pendingDelete);
  }, [pendingDelete, applyRemove]);

  if (!allowed) {
    return (
      <PageShell className="py-20">
        <div
          className="mx-auto max-w-[220px] space-y-2"
          aria-busy
          aria-label="Loading"
        >
          <Skeleton className="h-3 w-full rounded-md" />
          <Skeleton className="h-3 w-[85%] rounded-md" />
        </div>
      </PageShell>
    );
  }

  const listLoading = persist && cloudListPending;

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
        <h1 className="text-h1 text-navy-800">Saved salaries</h1>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">
          {persist
            ? `Up to ${SALARY_HISTORY_MAX_ENTRIES} saved sessions in your account—switch, tidy the list, or start a clean in-hand check.`
            : `Up to ${SALARY_HISTORY_MAX_ENTRIES} calculations on this device—switch, tidy the list, or start a clean in-hand check.`}{" "}
          Nothing here changes your bank or payroll data.
        </p>
      </header>

      {historyFull ? (
        <div
          className="mt-6 max-w-xl rounded-xl border border-amber-200/90 bg-amber-50/85 px-4 py-3.5 text-sm text-amber-950 shadow-sm shadow-amber-900/[0.03]"
          aria-live="polite"
        >
          <p className="font-semibold">History limit reached</p>
          <p className="mt-1 text-xs text-amber-900/90 leading-relaxed">
            Remove a saved salary below before you can run a new check from the
            salary page. This keeps your list manageable.
          </p>
        </div>
      ) : null}

      <div className="mt-8 max-w-xl">
        <Button
          type="button"
          variant="outline"
          className="h-10 w-full rounded-full border-teal-200 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:w-auto sm:px-6"
          onClick={handleStartNew}
        >
          New in-hand check
        </Button>
      </div>

      {listLoading ? (
        <SalaryHistoryRowsSkeleton rows={5} />
      ) : salaryContexts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-navy-200/80 bg-navy-50/30 px-6 py-12 text-center">
          <p className="text-sm font-medium text-navy-700">No saved entries yet</p>
          <p className="mt-2 text-xs text-navy-500 leading-relaxed max-w-sm mx-auto">
            Each breakdown you run from the salary page can be saved here (up to{" "}
            {SALARY_HISTORY_MAX_ENTRIES}) so you can switch back anytime.
          </p>
          <Button
            type="button"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "mt-6 h-10 rounded-full px-6 text-sm font-semibold"
            )}
            onClick={handleStartNew}
          >
            New in-hand check
          </Button>
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
                  <div className="min-w-0 flex-1">
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
                  <div className="flex shrink-0 items-center gap-2">
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
                      className="h-9 rounded-full px-4 text-xs font-semibold"
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
              </li>
            );
          })}
        </ul>
      )}

      <RemoveSalaryEntryDialog
        entry={pendingDelete}
        open={pendingDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingDelete(null);
        }}
        onConfirm={confirmRemoveEntry}
        variant="sheet"
      />
    </PageShell>
  );
}
