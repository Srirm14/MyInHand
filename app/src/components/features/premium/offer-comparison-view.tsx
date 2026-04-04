"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Loader2, Plus, Trash2, Upload } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SegmentedSelector } from "@/components/shared/segmented-selector";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CITY_TIERS, type CityTier } from "@/lib/constants/city-tiers";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useOfferComparisonRestoreStore } from "@/lib/stores/use-offer-comparison-restore-store";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryBreakdown, SalaryComponent } from "@/lib/types/salary.types";
import { mockParseOfferDocument } from "@/lib/mocks/parse-offer-document.mock";
import { CompensationCtcSectionControlled } from "@/components/features/salary/compensation-ctc-section";
import {
  calculateSalaryBreakdown,
  recalculateBreakdownFromComponents,
} from "@/lib/utils/calculate-salary";
import { buildOfferBreakdownRecalcContext } from "@/lib/utils/offer-breakdown-recalc-context";
import { isSplitBalanced } from "@/lib/utils/compensation-split";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";
import { SalaryBreakdownEditablePanel } from "@/components/shared/salary-breakdown-editable-panel";
import { PremiumBlurOfferTeaser } from "@/components/features/pricing/premium-blur-offer-teaser";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { createSaveFlightSequence } from "@/lib/persistence/save-flight-sequence";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import {
  useOfferSessionDetailQuery,
  useUpsertOfferSessionMutation,
} from "@/lib/supabase/hooks/use-offer-sessions";
import {
  hydrateOfferComparisonFromDetail,
  type OfferSavePayload,
  type OfferSessionDetail,
} from "@/lib/supabase/queries/offer-sessions";
import {
  EASE,
  fadeUp,
  staggerContainer,
} from "@/lib/motion/marketing-motion";
import { OfferComparisonSkeleton } from "@/components/shared/loading-skeletons";

const tierOptions = CITY_TIERS.map((t) => ({
  value: t.value,
  label: t.label,
  sublabel: t.sublabel,
}));

function emptyOffer(id: string): OfferDraft {
  return {
    id,
    companyName: "",
    annualCTC: 0,
    compensationMode: "total_only",
    fixedAnnual: 0,
    variableAnnual: 0,
    cityTier: "tier1",
    taxRegime: "old",
    joiningBonus: 0,
    esopValue: 0,
  };
}

function normalizeOfferDraft(raw: OfferDraft): OfferDraft {
  const base = emptyOffer(raw.id);
  return {
    ...base,
    ...raw,
    compensationMode: raw.compensationMode ?? base.compensationMode,
    fixedAnnual: raw.fixedAnnual ?? base.fixedAnnual,
    variableAnnual: raw.variableAnnual ?? base.variableAnnual,
  };
}

type OfferEntryMode = "manual" | "upload";

/** Subtle teal / emerald tints so expanded accordions are orienting, not loud. */
const OFFER_PANEL_TINTS = [
  "from-teal-50/[0.42] via-white to-teal-50/15",
  "from-emerald-50/[0.38] via-white to-teal-50/22",
  "from-teal-100/[0.18] via-white to-emerald-50/[0.28]",
] as const;

function makeOfferInputKey(o: OfferDraft): string {
  return [
    o.annualCTC,
    o.cityTier,
    o.taxRegime,
    o.compensationMode,
    o.fixedAnnual ?? 0,
    o.variableAnnual ?? 0,
    o.documentFileName ?? "",
  ].join("|");
}

function sumEmployerContributionsAnnual(bd: SalaryBreakdown): number {
  return bd.components
    .filter((c) => c.group === "employer_contributions")
    .reduce((s, c) => s + c.annualValue, 0);
}

function offerAutosaveFingerprint(
  offers: OfferDraft[],
  edits: Record<string, { breakdown: SalaryBreakdown; inputKey: string }>,
  validSummaryKey: string
): string {
  return JSON.stringify({ o: offers, e: edits, v: validSummaryKey });
}

export function OfferComparisonView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useAuthStore((s) => s.user);
  const persistOffers = shouldPersistSessions(user);
  const urlOfferSession = searchParams.get("session");

  const fileRef = useRef<HTMLInputElement>(null);
  const [expandedOfferId, setExpandedOfferId] = useState<string | null>(null);
  const [offerBreakdownEdits, setOfferBreakdownEdits] = useState<
    Record<string, { breakdown: SalaryBreakdown; inputKey: string }>
  >({});
  const [entryMode, setEntryMode] = useState<OfferEntryMode>("manual");
  const [uploadBusy, setUploadBusy] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [comparisonRevealed, setComparisonRevealed] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [offers, setOffers] = useState<OfferDraft[]>(() => {
    const pending =
      useOfferComparisonRestoreStore.getState().takeRestore();
    if (pending?.length) {
      const norm = pending.map(normalizeOfferDraft);
      if (norm.length >= 2) return norm;
      return [norm[0], emptyOffer(crypto.randomUUID())];
    }
    return [emptyOffer("a"), emptyOffer("b")];
  });

  const upsertOfferSession = useUpsertOfferSessionMutation();
  const [activeOfferSessionId, setActiveOfferSessionId] = useState<string | null>(
    urlOfferSession
  );
  const [hydrateEpoch, setHydrateEpoch] = useState(0);
  const lastSavedOfferFingerprint = useRef<string | null>(null);
  const offerSaveFlightRef = useRef<ReturnType<
    typeof createSaveFlightSequence
  > | null>(null);
  offerSaveFlightRef.current ??= createSaveFlightSequence();
  const offerSaveFlight = offerSaveFlightRef.current;

  const offerDetailQ = useOfferSessionDetailQuery(
    activeOfferSessionId,
    Boolean(persistOffers && activeOfferSessionId)
  );
  const offerSessionDetail = offerDetailQ.data;
  const offerSessionHydrating =
    persistOffers &&
    Boolean(activeOfferSessionId) &&
    offerDetailQ.isPending &&
    !offerDetailQ.data;

  const offerHydratedSig = useRef<string | null>(null);

  useEffect(() => {
    if (urlOfferSession) setActiveOfferSessionId(urlOfferSession);
  }, [urlOfferSession]);

  useEffect(() => {
    offerSaveFlight.reset();
  }, [activeOfferSessionId, offerSaveFlight]);

  useEffect(() => {
    if (!persistOffers || !offerSessionDetail) return;
    const sig = `${offerSessionDetail.session.id}:${offerSessionDetail.session.updated_at}`;
    if (offerHydratedSig.current === sig) return;
    offerHydratedSig.current = sig;
    const { offers: ho, breakdownEdits } =
      hydrateOfferComparisonFromDetail(offerSessionDetail);
    if (ho.length >= 2) {
      setOffers(ho);
      setOfferBreakdownEdits(breakdownEdits);
      setHydrateEpoch((e) => e + 1);
    }
  }, [offerSessionDetail, persistOffers]);

  const comparisons = useMemo(() => {
    return offers.map((o) => {
      if (!o.companyName.trim() || o.annualCTC < 100_000) return null;
      if (
        o.compensationMode === "fixed_variable" &&
        !isSplitBalanced(
          o.compensationMode,
          o.annualCTC,
          o.fixedAnnual,
          o.variableAnnual
        )
      ) {
        return null;
      }
      const variableAnnual =
        o.compensationMode === "fixed_variable" ? o.variableAnnual : 0;
      const inputKey = makeOfferInputKey(o);
      const edited = offerBreakdownEdits[o.id];
      const meta = o.documentFileName
        ? {
            resultSource: "document_parsed" as const,
            documentFileName: o.documentFileName,
          }
        : undefined;
      const bd =
        edited?.inputKey === inputKey
          ? edited.breakdown
          : calculateSalaryBreakdown(
              o.annualCTC,
              o.cityTier,
              o.taxRegime,
              meta,
              { variableAnnual }
            );
      const liquidBonus = o.joiningBonus;
      const esopLiquid = o.esopValue * 0.25;
      const firstYearValue = bd.monthlyInHand * 12 + liquidBonus + esopLiquid;
      return {
        id: o.id,
        companyName: o.companyName.trim(),
        taxRegime: o.taxRegime,
        monthlyInHand: bd.monthlyInHand,
        annualTax: bd.annualIncomeTax,
        firstYearValue,
        breakdown: bd,
      };
    });
  }, [offers, offerBreakdownEdits]);

  const readyCount = useMemo(
    () => comparisons.filter(Boolean).length,
    [comparisons]
  );
  const canCompare = readyCount >= 2;

  const valid = comparisons.filter(Boolean) as NonNullable<
    (typeof comparisons)[number]
  >[];
  const bestInHand =
    valid.length > 0
      ? Math.max(...valid.map((v) => v.monthlyInHand))
      : null;
  const bestValue =
    valid.length > 0 ? Math.max(...valid.map((v) => v.firstYearValue)) : null;

  const leaderInHand =
    valid.length > 0
      ? valid.reduce((a, b) =>
          b.monthlyInHand > a.monthlyInHand ? b : a
        )
      : null;

  useLayoutEffect(() => {
    if (comparisons.filter(Boolean).length >= 2) {
      setComparisonRevealed(true);
    }
    // Intentionally once on mount: honour restored / prefilled offers without requiring an extra click.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- initial paint only
  }, []);

  const runComparison = useCallback(() => {
    if (!canCompare) return;
    setComparisonRevealed(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    });
  }, [canCompare]);

  const peerMaxVariableCashAnnual = useMemo(() => {
    const list = comparisons.filter(Boolean) as NonNullable<
      (typeof comparisons)[number]
    >[];
    if (list.length === 0) return 0;
    return Math.max(...list.map((v) => v.breakdown.annualVariableCashTotal));
  }, [comparisons]);

  const peerMaxEmployerAnnual = useMemo(() => {
    const list = comparisons.filter(Boolean) as NonNullable<
      (typeof comparisons)[number]
    >[];
    if (list.length === 0) return 0;
    return Math.max(
      ...list.map((v) => sumEmployerContributionsAnnual(v.breakdown))
    );
  }, [comparisons]);

  useEffect(() => {
    if (!expandedOfferId) return;
    if (!valid.some((v) => v.id === expandedOfferId)) {
      setExpandedOfferId(null);
    }
  }, [valid, expandedOfferId]);

  useEffect(() => {
    const ids = new Set(offers.map((o) => o.id));
    setOfferBreakdownEdits((prev) => {
      let changed = false;
      const next = { ...prev };
      for (const k of Object.keys(next)) {
        if (!ids.has(k)) {
          delete next[k];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [offers]);

  const offersFingerprint = useMemo(
    () => JSON.stringify(offers),
    [offers]
  );

  const breakdownEditsFingerprint = useMemo(
    () => JSON.stringify(offerBreakdownEdits),
    [offerBreakdownEdits]
  );

  const offersForAutosaveRef = useRef(offers);
  const editsForAutosaveRef = useRef(offerBreakdownEdits);
  const validForAutosaveRef = useRef(valid);
  const activeOfferSessionRef = useRef(activeOfferSessionId);
  offersForAutosaveRef.current = offers;
  editsForAutosaveRef.current = offerBreakdownEdits;
  validForAutosaveRef.current = valid;
  activeOfferSessionRef.current = activeOfferSessionId;

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
    if (hydrateEpoch === 0 || !persistOffers) return;
    if (valid.length < 2) return;
    lastSavedOfferFingerprint.current = offerAutosaveFingerprint(
      offers,
      offerBreakdownEdits,
      validSummaryKey
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps -- baseline only after server hydrate
  }, [hydrateEpoch]);

  useEffect(() => {
    if (valid.length < 2) return;
    const timer = globalThis.setTimeout(() => {
      const offersSnap = offersForAutosaveRef.current;
      const validSnap = validForAutosaveRef.current;
      const editsSnap = editsForAutosaveRef.current;
      const sessionIdSnap = activeOfferSessionRef.current;
      const first = validSnap[0]!;
      const bestHand = validSnap.reduce(
        (a, b) => (b.monthlyInHand > a.monthlyInHand ? b : a),
        first
      );
      const bestVal = validSnap.reduce(
        (a, b) => (b.firstYearValue > a.firstYearValue ? b : a),
        first
      );
      let winnerSummary: string;
      if (bestHand.companyName === bestVal.companyName) {
        winnerSummary = `${bestHand.companyName} leads on in-hand & 1Y value`;
      } else {
        winnerSummary = `${bestHand.companyName} best in-hand · ${bestVal.companyName} best 1Y value`;
      }

      const validKeyAtSave = validSnap
        .map(
          (v) =>
            `${v.companyName}:${v.monthlyInHand}:${v.firstYearValue}`
        )
        .join("|");
      const fp = offerAutosaveFingerprint(
        offersSnap,
        editsSnap,
        validKeyAtSave
      );
      if (lastSavedOfferFingerprint.current === fp) {
        return;
      }

      if (persistOffers) {
        const payload: OfferSavePayload = {
          offers: offersSnap,
          breakdownEdits: editsSnap,
          summary: {
            title: `Compare ${validSnap.length} offers`,
            offerCount: validSnap.length,
            winnerSummary,
          },
        };
        const flightId = offerSaveFlight.next();
        void upsertOfferSession
          .mutateAsync({
            sessionId: sessionIdSnap,
            payload,
          })
          .then((detail: OfferSessionDetail) => {
            if (!offerSaveFlight.isLatest(flightId)) return;
            lastSavedOfferFingerprint.current = fp;
            const id = detail.session.id;
            setActiveOfferSessionId((prev) => {
              if (prev !== id) {
                router.replace(
                  `/premium/offer-comparison?session=${encodeURIComponent(id)}`,
                  { scroll: false }
                );
              }
              return id;
            });
          });
      } else {
        useHistoryStore.getState().pushOfferComparison(
          offersSnap,
          validSnap.map((v) => ({
            companyName: v.companyName,
            monthlyInHand: v.monthlyInHand,
            firstYearValue: v.firstYearValue,
          }))
        );
      }
    }, 1000);
    return () => globalThis.clearTimeout(timer);
  }, [
    offersFingerprint,
    breakdownEditsFingerprint,
    valid.length,
    validSummaryKey,
    persistOffers,
    activeOfferSessionId,
    upsertOfferSession,
    router,
    offerSaveFlight,
  ]);

  const update = (id: string, patch: Partial<OfferDraft>) => {
    setOffers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, ...patch } : o))
    );
  };

  const applyOfferBreakdownEdit = (
    offerId: string,
    mutate: (base: SalaryBreakdown) => SalaryComponent[]
  ) => {
    const o = offers.find((x) => x.id === offerId);
    if (!o) return;
    const inputKey = makeOfferInputKey(o);
    setOfferBreakdownEdits((prev) => {
      const variableAnnual =
        o.compensationMode === "fixed_variable" ? o.variableAnnual : 0;
      const meta = o.documentFileName
        ? {
            resultSource: "document_parsed" as const,
            documentFileName: o.documentFileName,
          }
        : undefined;
      const fresh = () =>
        calculateSalaryBreakdown(
          o.annualCTC,
          o.cityTier,
          o.taxRegime,
          meta,
          { variableAnnual }
        );
      const base =
        prev[offerId]?.inputKey === inputKey
          ? prev[offerId]!.breakdown
          : fresh();
      const nextComponents = mutate(base);
      const ctx = buildOfferBreakdownRecalcContext(o);
      const nextBd = recalculateBreakdownFromComponents(nextComponents, ctx);
      return { ...prev, [offerId]: { breakdown: nextBd, inputKey } };
    });
  };

  const patchOfferComponent = (
    offerId: string,
    componentId: string,
    patch: {
      monthlyValue?: number;
      annualValue?: number;
      name?: string;
    }
  ) => {
    applyOfferBreakdownEdit(offerId, (base) =>
      base.components.map((c) => {
        if (c.id !== componentId) return c;
        let monthly = c.monthlyValue;
        let annual = c.annualValue;
        if (patch.monthlyValue !== undefined) {
          monthly = Math.max(0, Math.round(patch.monthlyValue));
          annual = monthly * 12;
        } else if (patch.annualValue !== undefined) {
          annual = Math.max(0, Math.round(patch.annualValue));
          monthly = Math.round(annual / 12);
        }
        const name =
          patch.name === undefined ? c.name : patch.name.trim() || c.name;
        return {
          ...c,
          name,
          monthlyValue: monthly,
          annualValue: annual,
          lineSource: "user_edited" as const,
        };
      })
    );
  };

  const addOfferAllowance = (offerId: string) => {
    applyOfferBreakdownEdit(offerId, (base) => {
      const id = `allow_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
      const row: SalaryComponent = {
        id,
        name: "Custom allowance",
        description: "Rename to match your payslip (e.g. vehicle, washing)",
        monthlyValue: 0,
        annualValue: 0,
        type: "earning",
        group: "earnings",
        section: "allowance",
        lineSource: "user_edited",
        isCustom: true,
        removable: true,
        tags: ["recurring", "tax_sensitive"],
      };
      return [...base.components, row];
    });
  };

  const addOfferVariableRow = (offerId: string) => {
    applyOfferBreakdownEdit(offerId, (base) => {
      const id = `var_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
      const row: SalaryComponent = {
        id,
        name: "Variable / bonus line",
        description: "Joining bonus, retention, profit share, etc.",
        monthlyValue: 0,
        annualValue: 0,
        type: "earning",
        group: "earnings",
        section: "variable_pay",
        lineSource: "user_edited",
        isCustom: true,
        removable: true,
        tags: ["conditional", "one_time"],
      };
      return [...base.components, row];
    });
  };

  const removeOfferBreakdownRow = (offerId: string, componentId: string) => {
    applyOfferBreakdownEdit(offerId, (base) => {
      const row = base.components.find((c) => c.id === componentId);
      if (!row?.removable) return base.components;
      return base.components.filter((c) => c.id !== componentId);
    });
  };

  const addOffer = () => {
    if (offers.length >= 3) return;
    setOffers((prev) => [...prev, emptyOffer(crypto.randomUUID())]);
  };

  const removeOffer = (id: string) => {
    if (offers.length <= 2) return;
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  const anyFromDocument = useMemo(
    () => offers.some((o) => Boolean(o.documentFileName)),
    [offers]
  );

  useEffect(() => {
    if (canCompare && anyFromDocument) {
      setComparisonRevealed(true);
    }
  }, [canCompare, anyFromDocument]);

  const onOfferFiles = async (list: FileList | null) => {
    const files = Array.from(list ?? []).slice(0, 3);
    if (fileRef.current) fileRef.current.value = "";
    if (files.length < 2) {
      setUploadError("Select 2–3 offer letters or PDFs to compare.");
      return;
    }
    setUploadError(null);
    setUploadBusy(true);
    try {
      const d = {
        cityTier: offers[0]?.cityTier ?? ("tier1" as const),
        taxRegime: offers[0]?.taxRegime ?? ("new" as const),
      };
      const parsed = await Promise.all(
        files.map((f) => mockParseOfferDocument(f, d))
      );
      setOffers(parsed);
      setEntryMode("manual");
    } finally {
      setUploadBusy(false);
    }
  };

  if (offerSessionHydrating) {
    return <OfferComparisonSkeleton />;
  }

  return (
    <PageShell className="py-6 pb-28 md:py-10 md:pb-10">
      {persistOffers && upsertOfferSession.isPending ? (
        <div
          className="mb-3 flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-wide text-navy-400"
          aria-live="polite"
        >
          <Loader2 className="size-3.5 shrink-0 animate-spin text-teal-600" aria-hidden />
          Syncing comparison…
        </div>
      ) : null}
      <motion.section
        className="overflow-hidden rounded-3xl border border-navy-200/60 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(15,23,42,0.1)]"
      >
        <div className="min-w-0">
            <div className="sticky top-16 z-20 border-b border-navy-100/90 bg-white/95 px-4 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-white/88 md:px-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="min-w-0 flex-1 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
                    Premium · Offer comparison
                  </p>
                  <h1 className="font-display text-lg font-bold tracking-tight text-navy-800 md:text-xl">
                    Compare offers fairly
                  </h1>
                  <div className="space-y-1" aria-live="polite">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-navy-400">
                      Status
                    </p>
                    <p className="text-sm font-semibold tabular-nums text-navy-800">
                      {readyCount} of {offers.length} offers ready
                      {!canCompare ? (
                        <span className="block pt-0.5 text-xs font-normal text-navy-500 sm:inline sm:pl-1">
                          Complete two cards (company + CTC) to compare.
                        </span>
                      ) : !comparisonRevealed ? (
                        <span className="block pt-0.5 text-xs font-normal text-teal-800/90 sm:inline sm:pl-1">
                          Tap Compare offers for the summary table.
                        </span>
                      ) : null}
                    </p>
                    {leaderInHand && valid.length >= 2 ? (
                      <p className="text-xs leading-snug text-navy-600">
                        Top in-hand:{" "}
                        <span className="font-semibold text-teal-800">
                          {leaderInHand.companyName}
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold tabular-nums text-navy-800">
                          {formatCurrency(leaderInHand.monthlyInHand)}
                        </span>
                        /mo
                      </p>
                    ) : null}
                  </div>
                  <p className="hidden text-xs leading-relaxed text-navy-500 sm:block sm:max-w-2xl">
                    Same Salary Breakdown engine for every offer — summary stays
                    in this panel with your inputs.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 md:pt-1">
                  <Button
                    type="button"
                    size="lg"
                    disabled={!canCompare}
                    onClick={runComparison}
                    title={
                      !canCompare
                        ? "Enter company name and CTC (min ₹1L) for at least two offers"
                        : undefined
                    }
                    className={cn(
                      "h-11 min-w-[10rem] rounded-full px-5 text-sm font-semibold shadow-sm",
                      "bg-teal-600 text-white hover:bg-teal-700",
                      !canCompare && "pointer-events-none opacity-45",
                      "hidden sm:inline-flex"
                    )}
                  >
                    {comparisonRevealed ? "View comparison" : "Compare offers"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-4 md:p-6">
              <div
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
                role="toolbar"
                aria-label="Offer entry and navigation"
              >
                <div className="inline-flex h-9 w-full rounded-xl border border-navy-200/90 bg-navy-50/50 p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setEntryMode("manual");
                      setUploadError(null);
                    }}
                    className={cn(
                      "inline-flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-3 text-xs font-semibold transition-colors sm:min-w-[6.25rem] sm:flex-none",
                      entryMode === "manual"
                        ? "border border-teal-600/25 bg-teal-100 text-teal-900 shadow-sm"
                        : "text-navy-500 hover:bg-white/60 hover:text-navy-700"
                    )}
                  >
                    Manual
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEntryMode("upload");
                      setUploadError(null);
                    }}
                    className={cn(
                      "inline-flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-3 text-xs font-semibold transition-colors sm:min-w-[6.25rem] sm:flex-none",
                      entryMode === "upload"
                        ? "border border-teal-600/25 bg-teal-100 text-teal-900 shadow-sm"
                        : "text-navy-500 hover:bg-white/60 hover:text-navy-700"
                    )}
                  >
                    Upload offers
                  </button>
                </div>
                <div className="flex w-full gap-2 sm:w-auto sm:items-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-9 flex-1 rounded-full border-navy-200 px-4 text-sm font-semibold text-navy-800 hover:bg-navy-50 sm:flex-initial"
                    disabled={offers.length >= 3}
                    onClick={addOffer}
                  >
                    <Plus className="size-4 shrink-0" data-icon="inline-start" />
                    Add offer
                  </Button>
                </div>
              </div>

      {entryMode === "upload" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="rounded-2xl border border-teal-200/60 bg-teal-50/40 p-6"
        >
          <div className="flex items-start gap-3">
            <Upload className="size-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-3">
              <p className="text-sm font-semibold text-navy-800">
                Advanced: compare from documents
              </p>
              <p className="text-xs text-navy-600 leading-relaxed">
                Select two or three files (PDF or image). Mock parser infers company name
                from the filename and CTC from patterns like <code className="text-navy-800">24L</code> or a 6–9 digit amount — then runs the same in-hand engine. Replace with real OCR when your API is live.
              </p>
              <input
                ref={fileRef}
                type="file"
                multiple
                accept=".pdf,.png,.jpg,.jpeg,image/*,application/pdf"
                className="hidden"
                onChange={(e) => onOfferFiles(e.target.files)}
              />
              <Button
                type="button"
                disabled={uploadBusy}
                onClick={() => fileRef.current?.click()}
                className="rounded-full"
              >
                {uploadBusy ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                    Parsing…
                  </>
                ) : (
                  "Choose 2–3 files"
                )}
              </Button>
              {uploadError && (
                <p className="text-xs text-danger-600">{uploadError}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {anyFromDocument ? (
        <p className="text-xs text-teal-800 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">
          This comparison includes document-parsed offers — double-check CTC, regime, and city tier in each card.
        </p>
      ) : null}

      <motion.div
        className={cn(
          "grid gap-5 md:gap-6",
          offers.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        )}
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.07)}
      >
        {offers.map((o, offerIndex) => {
          const preview = comparisons[offerIndex];
          return (
          <motion.div
            key={o.id}
            variants={fadeUp}
            className={cn(
              "rounded-2xl border bg-white p-5 shadow-sm space-y-4 transition-[border-color,box-shadow] duration-300",
              preview
                ? "border-teal-200/70 shadow-[0_0_0_1px_rgba(13,148,136,0.06)]"
                : "border-navy-200/50"
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-label text-navy-400">
                {o.documentFileName ? "Document offer" : "Offer"}
              </span>
              {offers.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOffer(o.id)}
                  className="cursor-pointer p-1 text-navy-400 hover:text-danger-600"
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
            <CompensationCtcSectionControlled
              offer={o}
              onPatch={(patch) => update(o.id, patch)}
              compact
            />
            {o.compensationMode === "fixed_variable" &&
              !isSplitBalanced(
                o.compensationMode,
                o.annualCTC,
                o.fixedAnnual,
                o.variableAnnual
              ) && (
                <p className="text-xs text-danger-600 leading-snug">
                  Fixed + variable should match total CTC. Adjust total or one
                  component — values sync as you type.
                </p>
              )}
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
                      "cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold min-w-[100px] transition-colors",
                      o.taxRegime === reg
                        ? "border border-teal-600 bg-teal-100 text-teal-900 shadow-sm"
                        : "text-navy-600 hover:bg-white/60 hover:text-navy-800"
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
                  autoComplete="off"
                  placeholder="00,00,000"
                  className="rounded-xl text-sm placeholder:text-navy-300"
                  value={o.joiningBonus > 0 ? String(o.joiningBonus) : ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "");
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
                  autoComplete="off"
                  placeholder="00,00,000"
                  className="rounded-xl text-sm placeholder:text-navy-300"
                  value={o.esopValue > 0 ? String(o.esopValue) : ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "");
                    update(o.id, { esopValue: raw ? Number(raw) : 0 });
                  }}
                />
              </div>
            </div>
            {o.documentFileName && (
              <p className="text-[11px] text-teal-700 font-medium leading-snug">
                From file: {o.documentFileName}
              </p>
            )}
            <p className="text-[11px] text-navy-400 leading-snug">
              ESOP counted at 25% liquid equivalent for first-year score only.
            </p>

            <div className="border-t border-navy-100/80 pt-3">
              {preview ? (
                <p className="text-[11px] leading-snug text-navy-600">
                  <span className="font-medium text-navy-500">Live preview</span>
                  {" · "}
                  Est. in-hand{" "}
                  <span className="font-semibold tabular-nums text-teal-800">
                    {formatCurrency(preview.monthlyInHand)}
                  </span>
                  /mo · tax{" "}
                  <span className="tabular-nums text-navy-700">
                    {formatCurrency(preview.annualTax)}
                  </span>
                  /yr
                </p>
              ) : (
                <p className="text-[11px] leading-snug text-navy-400">
                  Add company name and CTC (min ₹1L) — preview appears here when
                  this card is complete.
                </p>
              )}
            </div>
          </motion.div>
        );
        })}
      </motion.div>

      <div className="border-t border-navy-100/80 pt-6">
        <AnimatePresence mode="wait">
          {!comparisonRevealed ? (
            <motion.div
              key="await-compare"
              role="region"
              aria-label="Comparison results placeholder"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="rounded-2xl border border-dashed border-navy-200/80 bg-gradient-to-b from-navy-50/40 to-white px-5 py-10 text-center md:px-8"
            >
              <p className="text-sm font-semibold text-navy-800">
                Comparison summary
              </p>
              <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-navy-500">
                {canCompare
                  ? "Both offers are ready. Tap Compare offers to open the side-by-side table — it appears right here, still inside this module."
                  : `Complete at least two offer cards (${readyCount} of ${offers.length} ready). Each card shows a live in-hand preview when its fields are valid.`}
              </p>
            </motion.div>
          ) : valid.length === 0 ? (
            <motion.p
              key="no-valid"
              role="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="rounded-2xl border border-navy-200/60 bg-navy-50/30 px-4 py-6 text-center text-sm text-navy-600"
            >
              Name each company and set CTC to at least ₹1,00,000 (with balanced
              fixed + variable if used) to populate the comparison table.
            </motion.p>
          ) : (
            <motion.div
              key="results"
              ref={resultsRef}
              id="offer-comparison-results"
              role="region"
              aria-label="Offer comparison results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="space-y-3"
            >
          <div>
            <h2 className="text-h3 text-navy-800">Decision summary</h2>
            <p className="mt-1 text-xs text-navy-500 max-w-2xl leading-relaxed">
              Scan columns for a fast read. Use the right control to open the
              full breakdown — edit line items there; the summary row and verdict
              refresh from the same Salary Breakdown engine.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-navy-200/50 bg-white shadow-sm">
            <table className="w-full min-w-[780px] text-sm">
              <thead>
                <tr className="border-b border-navy-100 text-left text-label text-navy-400">
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Company
                  </th>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Monthly in-hand
                  </th>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Annual tax
                  </th>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    1st year value*
                  </th>
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Verdict
                  </th>
                  <th
                    className="min-w-[5.75rem] px-2 py-3 text-right text-[10px] font-bold uppercase tracking-wide text-navy-400"
                    scope="col"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {valid.map((v, offerIndex) => {
                  const topHand = v.monthlyInHand === bestInHand;
                  const topVal = v.firstYearValue === bestValue;
                  const open = expandedOfferId === v.id;
                  const panelTint =
                    OFFER_PANEL_TINTS[offerIndex % OFFER_PANEL_TINTS.length];
                  return (
                    <Fragment key={v.id}>
                      <tr
                        tabIndex={0}
                        className={cn(
                          "border-b border-navy-50 transition-colors outline-none",
                          "cursor-pointer focus-visible:bg-navy-50/40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-200/80",
                          open && "bg-navy-50/30",
                          topHand && "bg-teal-50/40",
                          open && topHand && "bg-teal-50/35",
                          open && "shadow-[inset_3px_0_0_0_rgba(13,148,136,0.35)]"
                        )}
                        onClick={() =>
                          setExpandedOfferId((id) =>
                            id === v.id ? null : v.id
                          )
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setExpandedOfferId((id) =>
                              id === v.id ? null : v.id
                            );
                          }
                        }}
                      >
                        <td className="px-4 py-3 font-semibold text-navy-800 select-none">
                          {v.companyName}
                        </td>
                        <td className="px-4 py-3 select-none">
                          <CurrencyDisplay
                            amount={v.monthlyInHand}
                            className={cn(
                              "font-bold tabular-nums",
                              topHand && "text-teal-700"
                            )}
                          />
                        </td>
                        <td className="px-4 py-3 tabular-nums text-navy-600 select-none">
                          {formatCurrency(v.annualTax)}
                        </td>
                        <td className="px-4 py-3 select-none">
                          <CurrencyDisplay
                            amount={v.firstYearValue}
                            className={cn(
                              "font-semibold tabular-nums",
                              topVal && "text-emerald-700"
                            )}
                          />
                        </td>
                        <td className="px-4 py-3 text-navy-600 select-none text-[13px] leading-snug">
                          {topHand && topVal && (
                            <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
                              Best on both
                            </span>
                          )}
                          {topHand && !topVal && (
                            <span className="inline-flex items-center rounded-full bg-teal-50/80 px-2.5 py-0.5 text-xs font-semibold text-teal-800 ring-1 ring-teal-100/80">
                              Highest in-hand
                            </span>
                          )}
                          {!topHand && topVal && (
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                              Highest 1Y value
                            </span>
                          )}
                          {!topHand && !topVal && (
                            <span className="text-navy-400">—</span>
                          )}
                        </td>
                        <td className="px-2 py-2 align-middle text-right">
                          <button
                            type="button"
                            className={cn(
                              "ml-auto inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5",
                              "border-navy-200/90 bg-white text-navy-800 shadow-sm",
                              "text-[11px] font-semibold tracking-tight",
                              "transition-[color,background-color,border-color,box-shadow] duration-200",
                              "hover:border-navy-300 hover:bg-navy-50/90",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/90 focus-visible:ring-offset-1",
                              open &&
                                "border-teal-200/90 bg-teal-50/60 text-teal-900 shadow-[0_1px_2px_rgba(13,148,136,0.08)]"
                            )}
                            aria-expanded={open}
                            aria-controls={`offer-detail-${v.id}`}
                            id={`offer-expand-${v.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedOfferId((id) =>
                                id === v.id ? null : v.id
                              );
                            }}
                          >
                            <span aria-hidden className="select-none">
                              {open ? "Hide" : "Open"}
                            </span>
                            <ChevronDown
                              className={cn(
                                "size-3.5 shrink-0 text-navy-500 transition-transform duration-200",
                                open && "rotate-180 text-teal-800"
                              )}
                              strokeWidth={2.25}
                              aria-hidden
                            />
                            <span className="sr-only">
                              {open
                                ? `Collapse ${v.companyName} pay breakdown and line edits`
                                : `Expand ${v.companyName} pay breakdown and line edits`}
                            </span>
                          </button>
                        </td>
                      </tr>
                      {open && (
                        <tr
                          className={cn(
                            "border-b border-navy-100 transition-colors duration-200",
                            "bg-gradient-to-r from-white via-white to-teal-50/25"
                          )}
                        >
                          <td colSpan={6} className="p-0 align-top">
                            <section
                              id={`offer-detail-${v.id}`}
                              aria-labelledby={`offer-expand-${v.id}`}
                              className="border-t border-teal-100/70 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1 motion-safe:duration-200"
                            >
                              <div className="px-3 py-4 md:px-5 md:py-5">
                                <SalaryBreakdownEditablePanel
                                  breakdown={v.breakdown}
                                  taxRegime={v.taxRegime}
                                  companyLabel={v.companyName}
                                  comparisonInsights={{
                                    leadMonthlyInHand:
                                      topHand && bestInHand !== null,
                                    leadFirstYearValue:
                                      topVal && bestValue !== null,
                                    deltaMonthlyVsBest:
                                      bestInHand !== null
                                        ? v.monthlyInHand - bestInHand
                                        : undefined,
                                    deltaFirstYearVsBest:
                                      bestValue !== null
                                        ? v.firstYearValue - bestValue
                                        : undefined,
                                    annualVariableCashTotal:
                                      v.breakdown.annualVariableCashTotal,
                                    peerMaxVariableCashAnnual,
                                    employerContributionsAnnual:
                                      sumEmployerContributionsAnnual(
                                        v.breakdown
                                      ),
                                    peerMaxEmployerAnnual,
                                  }}
                                  panelClassName={panelTint}
                                  onPatchComponent={(cid, patch) =>
                                    patchOfferComponent(v.id, cid, patch)
                                  }
                                  onAddAllowance={() =>
                                    addOfferAllowance(v.id)
                                  }
                                  onAddVariable={() =>
                                    addOfferVariableRow(v.id)
                                  }
                                  onRemoveComponent={(cid) =>
                                    removeOfferBreakdownRow(v.id, cid)
                                  }
                                />
                              </div>
                            </section>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
            <div className="space-y-1.5 px-4 py-3 text-xs text-navy-400 border-t border-navy-100 leading-relaxed">
              <p>
                <span className="font-medium text-navy-600">*</span> First-year
                value = monthly in-hand × 12 + joining bonus + 25% of stated
                ESOP (same engine as Salary Breakdown; variable pay excluded from
                monthly in-hand). Editing rows below updates in-hand and this
                score for that offer only.
              </p>
              <p>
                <span className="font-medium text-navy-600">Verdict</span>{" "}
                compares valid offers only.{" "}
                <span className="text-navy-500">
                  “Highest in-hand” uses fixed-path monthly in-hand; “Highest 1Y
                  value” uses the footnoted first-year score. “Best on both” means
                  this offer is top on both metrics (ties can share the lead).
                </span>
              </p>
            </div>
          </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

            </div>
          </div>
      </motion.section>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-navy-200/80 bg-white/95 px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 lg:hidden",
          "pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-navy-500">
            <span className="tabular-nums font-semibold text-navy-700">
              {readyCount}/{offers.length}
            </span>{" "}
            offers ready
            {leaderInHand && comparisonRevealed ? (
              <span className="hidden text-navy-400 sm:inline">
                {" "}
                · Lead: {leaderInHand.companyName}
              </span>
            ) : null}
          </span>
          <Button
            type="button"
            size="lg"
            disabled={!canCompare}
            onClick={runComparison}
            className={cn(
              "h-11 shrink-0 rounded-full px-5 text-sm font-semibold shadow-md",
              "bg-teal-600 text-white hover:bg-teal-700",
              !canCompare && "pointer-events-none opacity-45"
            )}
          >
            {comparisonRevealed ? "View comparison" : "Compare offers"}
          </Button>
        </div>
      </div>

      {!hasPremiumProductAccess(user?.planTier) &&
      valid.length >= 2 &&
      entryMode === "manual" ? (
        <div className="mt-10 max-w-3xl">
          <PremiumBlurOfferTeaser compact />
        </div>
      ) : null}

      <p className="mt-8 text-center text-xs text-navy-400">
        Same CTC structure assumptions as your{" "}
        <Link
          href="/salary/breakdown"
          scroll={false}
          className="text-teal-600 hover:underline"
        >
          salary breakdown
        </Link>
        .
      </p>
    </PageShell>
  );
}
