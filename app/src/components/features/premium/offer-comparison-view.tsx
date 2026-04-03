"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { SegmentedSelector } from "@/components/shared/segmented-selector";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CITY_TIERS, type CityTier } from "@/lib/constants/city-tiers";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useOfferComparisonRestoreStore } from "@/lib/stores/use-offer-comparison-restore-store";
import type { OfferDraft } from "@/lib/types/offer.types";
import { calculateSalaryBreakdown } from "@/lib/utils/calculate-salary";
import {
  formatCurrency,
  formatIndianNumber,
} from "@/lib/utils/format-currency";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tierOptions = CITY_TIERS.map((t) => ({
  value: t.value,
  label: t.label,
  sublabel: t.sublabel,
}));

function emptyOffer(id: string): OfferDraft {
  return {
    id,
    companyName: "",
    annualCTC: 1_800_000,
    cityTier: "tier1",
    taxRegime: "old",
    joiningBonus: 0,
    esopValue: 0,
  };
}

export function OfferComparisonView() {
  const [offers, setOffers] = useState<OfferDraft[]>(() => {
    const pending =
      useOfferComparisonRestoreStore.getState().takeRestore();
    if (pending?.length) {
      if (pending.length >= 2) return pending;
      return [pending[0], emptyOffer(crypto.randomUUID())];
    }
    return [emptyOffer("a"), emptyOffer("b")];
  });

  const comparisons = useMemo(() => {
    return offers.map((o) => {
      if (!o.companyName.trim() || o.annualCTC < 100_000) return null;
      const bd = calculateSalaryBreakdown(
        o.annualCTC,
        o.cityTier,
        o.taxRegime
      );
      const liquidBonus = o.joiningBonus;
      const esopLiquid = o.esopValue * 0.25;
      const firstYearValue = bd.monthlyInHand * 12 + liquidBonus + esopLiquid;
      return {
        id: o.id,
        companyName: o.companyName.trim(),
        monthlyInHand: bd.monthlyInHand,
        annualTax: bd.annualIncomeTax,
        firstYearValue,
        breakdown: bd,
      };
    });
  }, [offers]);

  const valid = comparisons.filter(Boolean) as NonNullable<
    (typeof comparisons)[number]
  >[];
  const bestInHand =
    valid.length > 0
      ? Math.max(...valid.map((v) => v.monthlyInHand))
      : null;
  const bestValue =
    valid.length > 0 ? Math.max(...valid.map((v) => v.firstYearValue)) : null;

  const offersFingerprint = useMemo(
    () => JSON.stringify(offers),
    [offers]
  );

  const validSummaryKey = useMemo(
    () =>
      valid
        .map(
          (v) =>
            `${v.companyName}:${v.monthlyInHand}:${v.firstYearValue}`
        )
        .join("|"),
    [valid]
  );

  useEffect(() => {
    if (valid.length < 2) return;
    const offersSnap = offers;
    const validSnap = valid;
    const timer = window.setTimeout(() => {
      useHistoryStore.getState().pushOfferComparison(
        offersSnap,
        validSnap.map((v) => ({
          companyName: v.companyName,
          monthlyInHand: v.monthlyInHand,
          firstYearValue: v.firstYearValue,
        }))
      );
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [offersFingerprint, valid.length, validSummaryKey, offers, valid]);

  const update = (id: string, patch: Partial<OfferDraft>) => {
    setOffers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, ...patch } : o))
    );
  };

  const addOffer = () => {
    if (offers.length >= 3) return;
    setOffers((prev) => [...prev, emptyOffer(crypto.randomUUID())]);
  };

  const removeOffer = (id: string) => {
    if (offers.length <= 2) return;
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <PageShell className="py-8 md:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <SectionHeader
          title="Offer comparison"
          subtitle="Enter up to three offers with the same tax engine as your free breakdown. Compare in-hand and a simple first-year value score."
        />
        <div className="flex gap-2 shrink-0">
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-navy-200"
            disabled={offers.length >= 3}
            onClick={addOffer}
          >
            <Plus className="size-4 mr-1" />
            Add offer
          </Button>
          <Link
            href="/premium"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "rounded-full text-teal-700"
            )}
          >
            Hub
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "mt-10 grid gap-6",
          offers.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        )}
      >
        {offers.map((o) => (
          <div
            key={o.id}
            className="rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-label text-navy-400">Offer</span>
              {offers.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOffer(o.id)}
                  className="text-navy-400 hover:text-danger-600 p-1"
                  aria-label="Remove offer"
                >
                  <Trash2 className="size-4" />
                </button>
              )}
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                placeholder="e.g. Acme Tech"
                value={o.companyName}
                onChange={(e) => update(o.id, { companyName: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Annual CTC (₹)</Label>
              <Input
                inputMode="numeric"
                value={o.annualCTC ? formatIndianNumber(o.annualCTC) : ""}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  update(o.id, {
                    annualCTC: raw ? Number(raw) : 0,
                  });
                }}
                className="rounded-xl tabular-nums"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-800 mb-2">City tier</p>
              <SegmentedSelector
                options={tierOptions}
                value={o.cityTier}
                onChange={(v) => update(o.id, { cityTier: v as CityTier })}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-800 mb-2">
                Tax regime
              </p>
              <div className="inline-flex rounded-xl border border-navy-200 bg-navy-100/40 p-1">
                {(["old", "new"] as const).map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => update(o.id, { taxRegime: reg })}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-semibold min-w-[100px]",
                      o.taxRegime === reg
                        ? "bg-teal-600 text-white shadow-sm"
                        : "text-navy-600"
                    )}
                  >
                    {reg === "old" ? "Old" : "New"}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Joining bonus (₹)</Label>
                <Input
                  inputMode="numeric"
                  className="rounded-xl text-sm"
                  value={o.joiningBonus || ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d]/g, "");
                    update(o.id, {
                      joiningBonus: raw ? Number(raw) : 0,
                    });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">ESOP value (₹)</Label>
                <Input
                  inputMode="numeric"
                  className="rounded-xl text-sm"
                  value={o.esopValue || ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d]/g, "");
                    update(o.id, { esopValue: raw ? Number(raw) : 0 });
                  }}
                />
              </div>
            </div>
            <p className="text-[11px] text-navy-400 leading-snug">
              ESOP counted at 25% liquid equivalent for first-year score only.
            </p>
          </div>
        ))}
      </div>

      {valid.length === 0 && (
        <p className="mt-8 text-center text-sm text-navy-500">
          Name each company and ensure CTC is at least ₹1,00,000 to see the
          comparison table.
        </p>
      )}

      {valid.length > 0 && (
        <div className="mt-12 overflow-x-auto rounded-2xl border border-navy-200/50 bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-navy-100 text-left text-label text-navy-400">
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Monthly in-hand</th>
                <th className="px-4 py-3 font-semibold">Annual tax</th>
                <th className="px-4 py-3 font-semibold">1st year value*</th>
                <th className="px-4 py-3 font-semibold">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {valid.map((v) => {
                const topHand = v.monthlyInHand === bestInHand;
                const topVal = v.firstYearValue === bestValue;
                return (
                  <tr
                    key={v.id}
                    className={cn(
                      "border-b border-navy-50",
                      topHand && "bg-teal-50/40"
                    )}
                  >
                    <td className="px-4 py-3 font-semibold text-navy-800">
                      {v.companyName}
                    </td>
                    <td className="px-4 py-3">
                      <CurrencyDisplay
                        amount={v.monthlyInHand}
                        className={cn(
                          "font-bold tabular-nums",
                          topHand && "text-teal-700"
                        )}
                      />
                    </td>
                    <td className="px-4 py-3 tabular-nums text-navy-600">
                      {formatCurrency(v.annualTax)}
                    </td>
                    <td className="px-4 py-3">
                      <CurrencyDisplay
                        amount={v.firstYearValue}
                        className={cn(
                          "font-semibold tabular-nums",
                          topVal && "text-emerald-700"
                        )}
                      />
                    </td>
                    <td className="px-4 py-3 text-navy-600">
                      {topHand && topVal && "Best on both"}
                      {topHand && !topVal && "Highest in-hand"}
                      {!topHand && topVal && "Highest 1Y value"}
                      {!topHand && !topVal && "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="px-4 py-2 text-xs text-navy-400 border-t border-navy-100">
            * In-hand × 12 + joining bonus + 25% of stated ESOP value.
          </p>
        </div>
      )}

      <p className="mt-8 text-center text-xs text-navy-400">
        Same CTC structure assumptions as your{" "}
        <Link href="/salary/breakdown" className="text-teal-600 hover:underline">
          salary breakdown
        </Link>
        .
      </p>
    </PageShell>
  );
}
