"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ChevronDown, ChevronsDownUp, ChevronsUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import type {
  SalaryComponent,
  SalaryComponentGroup,
} from "@/lib/types/salary.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

/** Stable ids for earnings blocks + one per non-earnings group. */
export function buildBreakdownAccordionSectionIds(
  nonEarningsGroups: readonly { group: SalaryComponentGroup }[]
): string[] {
  return [
    "fixed_core",
    "allowance",
    "variable_pay",
    ...nonEarningsGroups.map((s) => `group:${s.group}`),
  ];
}

/** Sum monthly/annual for section header chips (same math as subtotal rows). */
export function salaryAccordionSectionTotals(
  rows: readonly Pick<SalaryComponent, "monthlyValue" | "annualValue">[]
): { monthly: number; annual: number } {
  return {
    monthly: rows.reduce((s, r) => s + r.monthlyValue, 0),
    annual: rows.reduce((s, r) => s + r.annualValue, 0),
  };
}

/**
 * Pin column widths with the table’s first row + `table-fixed` so hiding
 * accordion body rows does not reflow Monthly/Annual/Type.
 */
export function SalaryBreakdownTableColgroup() {
  return (
    <colgroup>
      <col style={{ width: "40%" }} />
      <col style={{ width: "22%" }} />
      <col style={{ width: "22%" }} />
      <col style={{ width: "16%" }} />
    </colgroup>
  );
}

type AccordionContextValue = {
  sectionIds: readonly string[];
  isOpen: (sectionId: string) => boolean;
  toggle: (sectionId: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
};

const SalaryBreakdownAccordionContext =
  createContext<AccordionContextValue | null>(null);

export function useSalaryBreakdownAccordion(): AccordionContextValue {
  const ctx = useContext(SalaryBreakdownAccordionContext);
  if (!ctx) {
    throw new Error(
      "useSalaryBreakdownAccordion must be used within SalaryBreakdownAccordionProvider"
    );
  }
  return ctx;
}

/**
 * Accordion open state for breakdown category rows. Default: all expanded
 * (matches pre-accordion behavior). Uses tbody[hidden] so row components stay
 * mounted — store-driven inputs and autosave are unaffected.
 */
export function SalaryBreakdownAccordionProvider({
  sectionIds,
  children,
}: Readonly<{
  sectionIds: readonly string[];
  children: ReactNode;
}>) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(sectionIds.map((id) => [id, true]))
  );

  const isOpen = useCallback(
    (sectionId: string) => openMap[sectionId] !== false,
    [openMap]
  );

  const toggle = useCallback((sectionId: string) => {
    setOpenMap((p) => {
      const cur = p[sectionId] !== false;
      return { ...p, [sectionId]: !cur };
    });
  }, []);

  const expandAll = useCallback(() => {
    setOpenMap(Object.fromEntries(sectionIds.map((id) => [id, true])));
  }, [sectionIds]);

  const collapseAll = useCallback(() => {
    setOpenMap(Object.fromEntries(sectionIds.map((id) => [id, false])));
  }, [sectionIds]);

  const value = useMemo(
    () => ({
      sectionIds,
      isOpen,
      toggle,
      expandAll,
      collapseAll,
    }),
    [sectionIds, isOpen, toggle, expandAll, collapseAll]
  );

  return (
    <SalaryBreakdownAccordionContext.Provider value={value}>
      {children}
    </SalaryBreakdownAccordionContext.Provider>
  );
}

/** Single control toggles between expanding and collapsing every section. */
export function SalaryBreakdownAccordionToolbar({
  className,
}: Readonly<{ className?: string }>) {
  const { expandAll, collapseAll, sectionIds, isOpen } =
    useSalaryBreakdownAccordion();
  if (sectionIds.length === 0) return null;

  const allExpanded = sectionIds.every((id) => isOpen(id));

  return (
    <div className={cn("flex w-full justify-end", className)}>
      <button
        type="button"
        onClick={allExpanded ? collapseAll : expandAll}
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "inline-flex flex-row items-center gap-2 border-navy-200/70 bg-white/95 pl-3 pr-2.5 text-xs font-medium text-navy-700 shadow-sm shadow-navy-900/[0.04]",
          "hover:border-teal-200/70 hover:bg-teal-50/50 hover:text-navy-900"
        )}
        aria-expanded={allExpanded}
        aria-label={allExpanded ? "Collapse all sections" : "Expand all sections"}
      >
        <span>{allExpanded ? "Collapse all" : "Expand all"}</span>
        {allExpanded ? (
          <ChevronsUp
            className="size-3.5 shrink-0 text-navy-500"
            strokeWidth={2}
            aria-hidden
          />
        ) : (
          <ChevronsDownUp
            className="size-3.5 shrink-0 text-navy-500"
            strokeWidth={2}
            aria-hidden
          />
        )}
      </button>
    </div>
  );
}

/**
 * One category: header tbody (always visible) + content tbody (hidden when collapsed).
 * Must be a direct child of &lt;table&gt; (sibling to other tbody / thead).
 */
export function SalaryBreakdownAccordionSection({
  sectionId,
  title,
  subtitle,
  actions,
  sectionTotals,
  children,
}: Readonly<{
  sectionId: string;
  title: string;
  subtitle?: ReactNode;
  actions?: ReactNode;
  /**
   * Section cash totals in the header row. When the section is collapsed, these
   * give a quick scan of monthly/annual sums. When expanded, the same numbers
   * appear on each line under the table’s Monthly/Annual columns, so the header
   * totals are hidden to avoid redundant noise.
   */
  sectionTotals?: { monthly: number; annual: number };
  children: ReactNode;
}>) {
  const { isOpen, toggle } = useSalaryBreakdownAccordion();
  const open = isOpen(sectionId);
  const panelId = `breakdown-acc-${sectionId}`;
  const triggerId = `${panelId}-trigger`;
  const totals = sectionTotals;
  const showHeaderTotals = totals != null && !open;

  return (
    <>
      <TableBody>
        <TableRow className="border-b border-navy-100/70 bg-gradient-to-r from-navy-50/85 via-navy-50/35 to-white hover:from-navy-50/85">
          <TableCell className="min-w-0 border-l-[3px] border-l-teal-500/25 py-2.5 pl-5 align-top sm:py-3">
            <button
              type="button"
              id={triggerId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(sectionId)}
              className={cn(
                "flex min-w-0 w-full items-start gap-2 rounded-lg text-left outline-none transition-colors",
                "hover:bg-white/50 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-1"
              )}
            >
              <ChevronDown
                className={cn(
                  "mt-0.5 size-4 shrink-0 text-teal-600/90 transition-transform duration-200",
                  open && "rotate-180"
                )}
                aria-hidden
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.07em] text-navy-500">
                  {title}
                </span>
                {subtitle ? (
                  <span className="mt-0.5 block max-w-3xl text-[10px] leading-snug text-navy-400 sm:text-[11px] sm:leading-relaxed">
                    {subtitle}
                  </span>
                ) : null}
              </span>
            </button>
          </TableCell>
          <TableCell
            className="bg-white/40 px-2 py-3 align-middle text-right tabular-nums transition-colors"
            aria-label={
              showHeaderTotals ? `${title} section monthly total` : undefined
            }
          >
            {showHeaderTotals ? (
              <span className="text-[11px] font-semibold text-navy-800 sm:text-xs">
                {formatCurrency(totals.monthly)}
              </span>
            ) : null}
          </TableCell>
          <TableCell
            className="bg-white/30 px-2 py-3 align-middle text-right tabular-nums transition-colors"
            aria-label={
              showHeaderTotals ? `${title} section annual total` : undefined
            }
          >
            {showHeaderTotals ? (
              <span className="text-[10px] font-medium text-navy-600 sm:text-[11px]">
                {formatCurrency(totals.annual)}
              </span>
            ) : null}
          </TableCell>
          <TableCell className="pr-5 py-3 align-middle">
            {actions ? (
              <div className="flex flex-wrap items-center justify-end gap-2">
                {actions}
              </div>
            ) : null}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableBody
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
        className="[&_tr]:border-navy-100/70 [&_tr:last-child]:border-b-0"
      >
        {children}
      </TableBody>
    </>
  );
}
