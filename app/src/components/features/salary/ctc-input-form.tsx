"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Info,
  LineChart,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Upload,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { FeatureCard } from "@/components/shared/feature-card";
import { SegmentedSelector } from "@/components/shared/segmented-selector";
import { SalaryRecentsPanels } from "@/components/features/salary/salary-recents-panels";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CITY_TIERS } from "@/lib/constants/city-tiers";
import { ctcInputSchema, type CTCInputFormData } from "@/lib/schemas/ctc-input.schema";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { TaxRegime } from "@/lib/types/salary.types";
import { cn } from "@/lib/utils";
import { CompensationCtcSectionForm } from "@/components/features/salary/compensation-ctc-section";

const tierOptions = CITY_TIERS.map((t) => ({
  value: t.value,
  label: t.label,
  sublabel: t.sublabel,
}));

type EntryMode = "manual" | "document";

export function CtcInputForm() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const { premium, hubHref } = useTieredPremiumLinks();
  const input = useSalaryStore((s) => s.input);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const applyParsedSalaryDocument = useSalaryStore(
    (s) => s.applyParsedSalaryDocument
  );

  const [entryMode, setEntryMode] = useState<EntryMode>("manual");
  const [docParsing, setDocParsing] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);

  const form = useForm<CTCInputFormData>({
    resolver: zodResolver(ctcInputSchema),
    defaultValues: {
      fullName: input.fullName ?? "",
      email: input.email ?? "",
      annualCTC: input.annualCTC || 1_200_000,
      compensationMode: input.compensationMode ?? "total_only",
      fixedAnnual: input.fixedAnnual ?? 0,
      variableAnnual: input.variableAnnual ?? 0,
      cityTier: input.cityTier,
      taxRegime: input.taxRegime,
    },
  });

  useEffect(() => {
    form.reset({
      fullName: input.fullName ?? "",
      email: input.email ?? "",
      annualCTC: input.annualCTC || 1_200_000,
      compensationMode: input.compensationMode ?? "total_only",
      fixedAnnual: input.fixedAnnual ?? 0,
      variableAnnual: input.variableAnnual ?? 0,
      cityTier: input.cityTier,
      taxRegime: input.taxRegime,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync store → form when returning to this screen
  }, [
    input.fullName,
    input.email,
    input.annualCTC,
    input.compensationMode,
    input.fixedAnnual,
    input.variableAnnual,
    input.cityTier,
    input.taxRegime,
  ]);

  const pushSalaryHistory = () => {
    const { input: nextInput, breakdown } = useSalaryStore.getState();
    if (breakdown) {
      useHistoryStore
        .getState()
        .pushSalaryCalculation(nextInput, breakdown.monthlyInHand);
    }
  };

  const onSubmit = (data: CTCInputFormData) => {
    setInput({
      fullName: data.fullName,
      email: data.email,
      annualCTC: data.annualCTC,
      compensationMode: data.compensationMode,
      fixedAnnual:
        data.compensationMode === "fixed_variable" ? data.fixedAnnual : 0,
      variableAnnual:
        data.compensationMode === "fixed_variable" ? data.variableAnnual : 0,
      cityTier: data.cityTier,
      taxRegime: data.taxRegime,
      resultSource: "manual_estimated",
      documentFileName: undefined,
    });
    calculateBreakdown();
    pushSalaryHistory();
    router.push("/salary/breakdown");
  };

  const onDocumentSelected = async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    setDocError(null);
    setDocParsing(true);
    try {
      await applyParsedSalaryDocument(file);
      pushSalaryHistory();
      router.push("/salary/breakdown");
    } catch {
      setDocError(
        "We couldn’t parse that file. Try a clear PDF or image, or use manual entry."
      );
    } finally {
      setDocParsing(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden
      />

      <PageShell narrow className="relative py-10 md:py-14">
        <div className="text-center mb-8">
          <h1 className="text-display text-navy-800 text-3xl md:text-5xl">
            Your CTC, two ways
          </h1>
          <p className="mt-4 text-base md:text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Enter your CTC for an{" "}
            <strong className="font-semibold text-navy-700">estimated</strong> in-hand and
            breakup, or upload an offer or salary structure for a{" "}
            <strong className="font-semibold text-navy-700">document-assisted</strong> draft.
            Extracted fields are a starting point—review and adjust on the next screen.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-navy-200 bg-navy-50/40 p-1">
            {(
              [
                { id: "manual" as const, label: "Manual CTC" },
                { id: "document" as const, label: "Upload document" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setEntryMode(tab.id);
                  setDocError(null);
                }}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-semibold transition-all min-w-[140px]",
                  entryMode === tab.id
                    ? "bg-white text-navy-800 shadow-sm"
                    : "text-navy-500 hover:text-navy-700"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {entryMode === "document" ? (
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 rounded-xl bg-teal-50/80 border border-teal-100 px-4 py-3">
              <Upload className="size-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="text-sm text-navy-700 leading-relaxed">
                <p className="font-semibold text-navy-800">PDF or image</p>
                <p className="mt-1 text-xs text-navy-600">
                  Offer letter, compensation summary, or salary structure. We extract a CTC hint
                  from the filename and run the same tax engine; replace with real OCR/API when
                  your backend is ready.
                </p>
              </div>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,image/*,application/pdf"
              className="hidden"
              onChange={(e) => onDocumentSelected(e.target.files)}
            />
            <Button
              type="button"
              disabled={docParsing}
              onClick={() => fileRef.current?.click()}
              className="w-full h-12 rounded-full text-base font-semibold"
            >
              {docParsing ? "Reading document…" : "Choose file"}
            </Button>
            {docError && (
              <p className="text-sm text-danger-600 text-center">{docError}</p>
            )}
            <p className="text-center text-xs text-navy-400">
              Tip: include CTC in the filename (e.g. <code className="text-navy-600">24L_offer.pdf</code>
              ) for better mock extraction.
            </p>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-6">
              Estimated from your inputs
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-navy-800">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="e.g. Alex Rivera"
                  className="h-11 rounded-xl border-navy-200 bg-white"
                  {...form.register("fullName")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-navy-800">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="alex@example.com"
                  className="h-11 rounded-xl border-navy-200 bg-white"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-xs text-danger-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <CompensationCtcSectionForm
                control={form.control}
                setValue={form.setValue}
                errors={form.formState.errors}
              />
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-navy-800 mb-3">
                City Tier (HRA Calculation)
              </p>
              <Controller
                name="cityTier"
                control={form.control}
                render={({ field }) => (
                  <SegmentedSelector
                    options={tierOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-sm font-semibold text-navy-800">Tax Regime</p>
                <Tooltip>
                  <TooltipTrigger
                    type="button"
                    className="text-navy-400 hover:text-navy-600"
                    aria-label="Tax regime info"
                  >
                    <Info className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-left">
                    Old regime allows deductions like 80C and HRA exemption where
                    applicable. New regime uses lower slabs with fewer deductions.
                  </TooltipContent>
                </Tooltip>
              </div>
              <Controller
                name="taxRegime"
                control={form.control}
                render={({ field }) => (
                  <TaxRegimeToggle
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            <Button
              type="submit"
              className="mt-10 h-12 w-full rounded-full text-base font-semibold shadow-md hover:shadow-lg"
            >
              Show estimated breakdown
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        )}

        <SalaryRecentsPanels />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={TrendingUp}
            title="Growth Analysis"
            description="See how your salary compares to industry standards."
          />
          <FeatureCard
            icon={PiggyBank}
            title="Max Deductions"
            description="Calculate 80C, 80D and HRA to minimize taxes."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Secure Entry"
            description="Your financial data stays local and encrypted."
          />
        </div>
      </PageShell>

      {premium && (
        <Link
          href={hubHref()}
          className={cn(
            buttonVariants({ size: "icon" }),
            "fixed bottom-8 right-6 z-40 size-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 md:size-14"
          )}
          aria-label="Open Premium hub"
        >
          <LineChart className="size-5 md:size-6" />
        </Link>
      )}
    </div>
  );
}

function TaxRegimeToggle({
  value,
  onChange,
}: {
  value: TaxRegime;
  onChange: (v: TaxRegime) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-navy-200 bg-navy-100/40 p-1">
      {(
        [
          { id: "old" as const, label: "Old Regime" },
          { id: "new" as const, label: "New Regime" },
        ] as const
      ).map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "rounded-lg px-8 py-2.5 text-sm font-semibold transition-all min-w-[120px]",
              active
                ? "bg-teal-600 text-white shadow-sm"
                : "text-navy-600 hover:text-navy-800"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
