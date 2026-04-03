"use client";

import { useEffect } from "react";
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
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { FeatureCard } from "@/components/shared/feature-card";
import { SegmentedSelector } from "@/components/shared/segmented-selector";
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
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { TaxRegime } from "@/lib/types/salary.types";
import { formatIndianNumber } from "@/lib/utils/format-currency";
import { premiumHubHref } from "@/lib/config/access-mode";
import { cn } from "@/lib/utils";

const tierOptions = CITY_TIERS.map((t) => ({
  value: t.value,
  label: t.label,
  sublabel: t.sublabel,
}));

export function CtcInputForm() {
  const router = useRouter();
  const input = useSalaryStore((s) => s.input);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);

  const form = useForm<CTCInputFormData>({
    resolver: zodResolver(ctcInputSchema),
    defaultValues: {
      fullName: input.fullName ?? "",
      email: input.email ?? "",
      annualCTC: input.annualCTC || 1_200_000,
      cityTier: input.cityTier,
      taxRegime: input.taxRegime,
    },
  });

  useEffect(() => {
    form.reset({
      fullName: input.fullName ?? "",
      email: input.email ?? "",
      annualCTC: input.annualCTC || 1_200_000,
      cityTier: input.cityTier,
      taxRegime: input.taxRegime,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync store → form when returning to this screen
  }, [input.fullName, input.email, input.annualCTC, input.cityTier, input.taxRegime]);

  const onSubmit = (data: CTCInputFormData) => {
    setInput({
      fullName: data.fullName,
      email: data.email,
      annualCTC: data.annualCTC,
      cityTier: data.cityTier,
      taxRegime: data.taxRegime,
    });
    calculateBreakdown();
    const { input: nextInput, breakdown } = useSalaryStore.getState();
    if (breakdown) {
      useHistoryStore
        .getState()
        .pushSalaryCalculation(nextInput, breakdown.monthlyInHand);
    }
    router.push("/salary/breakdown");
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
        <div className="text-center mb-10">
          <h1 className="text-display text-navy-800 text-3xl md:text-5xl">
            Architect Your Wealth
          </h1>
          <p className="mt-4 text-base md:text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Input your CTC details to visualize your net take-home salary and tax
            liabilities with precision.
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm"
        >
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

          <div className="mt-8 space-y-2">
            <Label htmlFor="annualCTC" className="text-navy-800">
              Annual CTC
            </Label>
            <div className="flex items-stretch gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-teal-200 focus-within:border-teal-400">
              <span className="flex items-center text-xl font-semibold text-navy-600">
                ₹
              </span>
              <Controller
                name="annualCTC"
                control={form.control}
                render={({ field }) => (
                  <input
                    id="annualCTC"
                    type="text"
                    inputMode="numeric"
                    className="min-w-0 flex-1 border-0 bg-transparent text-2xl font-bold text-navy-800 outline-none md:text-3xl"
                    value={
                      field.value
                        ? formatIndianNumber(field.value)
                        : ""
                    }
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^\d]/g, "");
                      field.onChange(raw ? Number(raw) : 0);
                    }}
                  />
                )}
              />
              <span className="flex items-center rounded-full bg-teal-50 px-3 text-xs font-semibold text-teal-700">
                INR / Year
              </span>
            </div>
            {form.formState.errors.annualCTC && (
              <p className="text-xs text-danger-500">
                {form.formState.errors.annualCTC.message}
              </p>
            )}
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
            Show Breakdown
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>

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

      <Link
        href={premiumHubHref()}
        className={cn(
          buttonVariants({ size: "icon" }),
          "fixed bottom-8 right-6 z-40 size-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 md:size-14"
        )}
        aria-label="Open Premium hub"
      >
        <LineChart className="size-5 md:size-6" />
      </Link>
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
