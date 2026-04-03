"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import type { SalaryInput } from "@/lib/types/salary.types";
import { cn } from "@/lib/utils";

const DROPDOWN_LIMIT = 5;
/** Match CTC form floor — below this, treat as no meaningful salary for nav label. */
const MIN_CTC_FOR_LABEL = 100_000;

/**
 * Premium salary history switcher. Mounted with `key={pathname}` so `open` resets on
 * navigation without syncing state in an effect (avoids cascading render lint).
 */
function SalaryNavHistoryDropdown({
  recentSalaries,
  showViewAllFooter,
  ctcLabel,
  salaryHref,
  input,
  isEntryActive,
  onSelectEntry,
  containerRef,
}: Readonly<{
  recentSalaries: SalaryHistoryEntry[];
  showViewAllFooter: boolean;
  ctcLabel: string;
  salaryHref: string;
  input: SalaryInput;
  isEntryActive: (entry: SalaryHistoryEntry) => boolean;
  onSelectEntry: (entry: SalaryHistoryEntry) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, containerRef]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center rounded p-0.5 transition-colors",
          "text-navy-500 hover:text-navy-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Recent salary contexts"
      >
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-150",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-3 w-[min(100vw-2rem,320px)]",
            "rounded-2xl border border-navy-200/60 bg-white py-2 shadow-lg",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
          )}
          role="listbox"
          aria-label="Recent salary entries"
        >
          <div className="border-b border-navy-100 px-3 pb-2 pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-400">
              Current context
            </p>
            <p className="mt-0.5 text-sm font-semibold text-navy-800">
              {ctcLabel || "No CTC yet"}
            </p>
            {ctcLabel ? (
              <p className="text-[11px] text-navy-500">
                {input.taxRegime === "old" ? "Old regime" : "New regime"} ·{" "}
                <Link
                  href={salaryHref}
                  className="font-medium text-teal-700 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  Open workspace
                </Link>
              </p>
            ) : null}
          </div>

          <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-wide text-navy-400">
            Recent salaries
          </p>
          <ul className="max-h-[min(60vh,320px)] overflow-y-auto py-1">
            {recentSalaries.map((entry) => {
              const current = isEntryActive(entry);
              return (
                <li key={entry.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={current}
                    onClick={() => {
                      onSelectEntry(entry);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full px-3 py-2.5 text-left transition-colors",
                      "hover:bg-teal-50/60 focus-visible:outline-none focus-visible:bg-teal-50/80",
                      current && "bg-teal-50/50"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        {current ? (
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-teal-600"
                            aria-hidden
                          />
                        ) : (
                          <span className="w-3.5 shrink-0" aria-hidden />
                        )}
                        <div className="min-w-0">
                          <span
                            className={cn(
                              "block text-sm font-semibold tabular-nums",
                              current ? "text-teal-800" : "text-navy-800"
                            )}
                          >
                            {formatCTCAsLPA(entry.annualCTC)}
                          </span>
                          <span className="text-[11px] text-navy-500">
                            {current ? (
                              <span className="font-medium text-teal-700">
                                Current ·{" "}
                              </span>
                            ) : null}
                            {entry.regimeLabel} · In-hand{" "}
                            {formatCurrency(entry.monthlyInHand)}/mo
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-navy-400 tabular-nums">
                        {formatRelativeTime(entry.at)}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {showViewAllFooter ? (
            <div className="border-t border-navy-100 px-3 pb-1 pt-1">
              <Link
                href="/salary/history"
                className="flex w-full items-center gap-1 py-2 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800"
                onClick={() => setOpen(false)}
              >
                View all salary history
                <ArrowRight className="size-3" aria-hidden />
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

/**
 * Context-aware Salary nav (primary item):
 * - Before a completed run: label `Salary`, link → `/salary`
 * - After breakdown exists: `Salary (25 LPA)` via formatCTCAsLPA, link → `/salary/breakdown`
 * - Premium + 2+ saved salary contexts: chevron opens switcher (max 5 + view all if &gt;5)
 */
export function SalaryNavItem() {
  const pathname = usePathname();
  const router = useRouter();

  const annualCTC = useSalaryStore((s) => s.input.annualCTC);
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );

  const user = useAuthStore((s) => s.user);
  const salaryContexts = useHistoryStore((s) => s.salaryContexts);

  const isActive =
    pathname === "/salary" || pathname.startsWith("/salary/");
  const loggedIn = Boolean(user);
  const premium = loggedIn && PREMIUM_UNLOCKED;

  const hasMeaningfulCtc =
    breakdown != null && annualCTC >= MIN_CTC_FOR_LABEL;
  const ctcLabel = hasMeaningfulCtc ? formatCTCAsLPA(annualCTC) : "";

  const recentSalaries = salaryContexts.slice(0, DROPDOWN_LIMIT);
  const hasDropdown = premium && salaryContexts.length > 1;
  const showViewAllFooter = premium && salaryContexts.length > DROPDOWN_LIMIT;

  const salaryHref = breakdown ? "/salary/breakdown" : "/salary";

  /** Bumps when the Salary link is clicked so the dropdown remounts closed (same-route navigations). */
  const [menuKey, setMenuKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isEntryActive = useCallback(
    (entry: SalaryHistoryEntry) => {
      if (entry.id === activeSalaryHistoryId) return true;
      if (activeSalaryHistoryId == null) {
        return isSalaryInputEquivalent(entry.snapshot, input);
      }
      return false;
    },
    [activeSalaryHistoryId, input]
  );

  const handleSelectEntry = useCallback(
    (entry: SalaryHistoryEntry) => {
      setInput(coerceSalarySnapshot(entry.snapshot));
      calculateBreakdown();
      setActiveSalaryHistoryId(entry.id);
      router.push("/salary/breakdown");
    },
    [setInput, calculateBreakdown, setActiveSalaryHistoryId, router]
  );

  const linkClass = cn(
    "text-sm font-medium transition-colors rounded px-0.5 -mx-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
    isActive
      ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
      : "text-navy-500 hover:text-navy-800"
  );

  const labelText = ctcLabel ? `Salary (${ctcLabel})` : "Salary";

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-0.5">
      <Link
        href={salaryHref}
        className={linkClass}
        onClick={() => setMenuKey((k) => k + 1)}
      >
        {labelText}
      </Link>

      {hasDropdown ? (
        <SalaryNavHistoryDropdown
          key={`${pathname}-${menuKey}`}
          recentSalaries={recentSalaries}
          showViewAllFooter={showViewAllFooter}
          ctcLabel={ctcLabel}
          salaryHref={salaryHref}
          input={input}
          isEntryActive={isEntryActive}
          onSelectEntry={handleSelectEntry}
          containerRef={containerRef}
        />
      ) : null}
    </div>
  );
}
