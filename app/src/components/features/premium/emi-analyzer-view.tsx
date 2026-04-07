"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  Car,
  CheckCircle2,
  ChevronLeft,
  GraduationCap,
  Home,
  Info,
  Layers,
  Minus,
  PiggyBank,
  Plus,
  Scale,
  Wallet,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { Button, buttonVariants } from "@/components/ui/button";
import { InrMoneyInput } from "@/components/ui/inr-money-input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  SALARY_PREMIUM_BREAKDOWN,
  SALARY_PREMIUM_LIFESTYLE,
} from "@/lib/config/salary-premium-paths";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useResolvedMonthlyInHand } from "@/lib/hooks/use-resolved-monthly-in-hand";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { computeEmiScenario } from "@/lib/premium/emi-scenario";
import { PremiumPlannerSalaryGate } from "@/components/shared/premium-planner-salary-gate";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const LOAN_KINDS: {
  id: string;
  label: string;
  hint: string;
  Icon: LucideIcon;
}[] = [
  { id: "home", label: "Home", hint: "Typical long tenure", Icon: Home },
  { id: "car", label: "Car", hint: "Auto loan", Icon: Car },
  { id: "personal", label: "Personal", hint: "Unsecured", Icon: Wallet },
  {
    id: "education",
    label: "Education",
    hint: "Student / career",
    Icon: GraduationCap,
  },
];

const EMI_ABS_MAX_PRINCIPAL = 500_000_000;
const EMI_MAX_LOANS = 8;

type LoanScenario = {
  id: string;
  kind: string;
  principal: number;
  rate: number;
  tenureYears: number;
};

function newLoan(partial?: Partial<LoanScenario>): LoanScenario {
  return {
    id: crypto.randomUUID(),
    kind: "car",
    principal: 800_000,
    rate: 10.5,
    tenureYears: 5,
    ...partial,
  };
}

export function EmiAnalyzerView() {
  const { toolHref } = useTieredPremiumLinks();
  const { monthlyInHand, isRestoringSalaryContext } = useResolvedMonthlyInHand();
  const calculateSurplus = useLifestyleStore((s) => s.calculateSurplus);

  const lifestyleLivingExpenses =
    monthlyInHand <= 0
      ? 0
      : calculateSurplus(monthlyInHand).livingExpenses;

  const lifestyleSurplus =
    monthlyInHand <= 0 ? 0 : calculateSurplus(monthlyInHand).surplus;

  const [loans, setLoans] = useState<LoanScenario[]>([
    newLoan({
      kind: "home",
      principal: 4_500_000,
      rate: 8.7,
      tenureYears: 20,
    }),
  ]);

  const { loans: computedLoans, totalEmi, totalInterestLifetime, totalRepaymentLifetime } =
    useMemo(() => computeEmiScenario(loans), [loans]);

  const loansWithComputed = useMemo(() => {
    return computedLoans.map((loan) => {
      const kind = LOAN_KINDS.find((k) => k.id === loan.kind) ?? LOAN_KINDS[0];
      return { ...loan, kind };
    });
  }, [computedLoans]);

  const dti =
    monthlyInHand > 0
      ? Number(((totalEmi / monthlyInHand) * 100).toFixed(1))
      : 0;

  const postEmi = monthlyInHand - totalEmi;
  const postEmiAfterLife = lifestyleSurplus - totalEmi;

  const verdict =
    monthlyInHand <= 0
      ? "neutral"
      : totalEmi > monthlyInHand
        ? "critical"
        : dti > 45
          ? "warn"
          : postEmiAfterLife < 0
            ? "tight"
            : "ok";

  const advisory = useMemo(
    () =>
      getAdvisoryCopy(verdict, dti, postEmiAfterLife, {
        forecastHref: toolHref("forecast"),
        loanCount: loansWithComputed.length,
      }),
    [verdict, dti, postEmiAfterLife, toolHref, loansWithComputed.length]
  );

  return (
    <PageShell className="py-8 md:py-10">
      <Link
        href={SALARY_PREMIUM_BREAKDOWN}
        scroll={false}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group -ml-1.5 mb-1 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
        )}
        aria-label="Back to salary breakdown"
      >
        <ChevronLeft
          className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={2}
          aria-hidden
        />
        Back to breakdown
      </Link>

      <SectionHeader
        className="mt-1"
        title="EMI & debt planner"
        subtitle="Model multiple fixed-rate loans against your estimated in-hand pay and Monthly plan. Numbers update as you move sliders—use it to stress-test tenure, rate, and combined obligations before you commit."
      />

      <PremiumPlannerSalaryGate
        showSkeleton={isRestoringSalaryContext}
        layout="emi"
      >
      {monthlyInHand <= 0 && (
        <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
          <Info className="size-5 shrink-0 text-amber-700 mt-0.5" aria-hidden />
          <p>
            <Link
              href="/salary"
              className="font-semibold text-teal-700 underline-offset-2 hover:underline"
            >
              Add a salary breakdown
            </Link>{" "}
            so affordability, DTI, and post-EMI buffer use your real in-hand
            figure.
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12">
        {/* Scenario builder */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy-400">
              Loan scenario
            </p>
            <p className="mt-1 text-sm text-navy-500 leading-relaxed max-w-xl">
              Add your biggest loan first, then stack additional loans to see
              combined monthly outflow—not separate calculators.
            </p>
          </div>

          {loansWithComputed.map((loan, idx) => (
            <LoanScenarioCard
              key={loan.id}
              stepLabel={idx === 0 ? "Primary" : `Loan ${idx + 1}`}
              title={idx === 0 ? "Main loan" : "Additional loan"}
              description={`${loan.kind.label} — ${loan.kind.hint}`}
              loanKind={loan.kind.id}
              onLoanKindChange={(id) =>
                setLoans((prev) =>
                  prev.map((l) => (l.id === loan.id ? { ...l, kind: id } : l))
                )
              }
              headerAction={
                idx === 0 ? null : (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 rounded-full text-xs font-semibold text-navy-500 hover:text-danger-600 hover:bg-danger-50/60 gap-1"
                    onClick={() =>
                      setLoans((prev) => prev.filter((l) => l.id !== loan.id))
                    }
                  >
                    <Minus className="size-3.5" aria-hidden />
                    Remove
                  </Button>
                )
              }
              footer={
                <LoanEmiPreview
                  emi={loan.emi}
                  interest={loan.interest}
                  months={loan.months}
                  repaymentTotal={loan.repayment}
                />
              }
            >
              <LoanFields
                principal={loan.principal}
                setPrincipal={(n) =>
                  setLoans((prev) =>
                    prev.map((l) =>
                      l.id === loan.id
                        ? {
                            ...l,
                            principal: Math.min(
                              EMI_ABS_MAX_PRINCIPAL,
                              Math.max(0, n)
                            ),
                          }
                        : l
                    )
                  )
                }
                rate={loan.rate}
                setRate={(n) =>
                  setLoans((prev) =>
                    prev.map((l) => (l.id === loan.id ? { ...l, rate: n } : l))
                  )
                }
                tenureYears={loan.tenureYears}
                setTenureYears={(n) =>
                  setLoans((prev) =>
                    prev.map((l) =>
                      l.id === loan.id ? { ...l, tenureYears: n } : l
                    )
                  )
                }
                amountLabel="Principal"
              />
            </LoanScenarioCard>
          ))}

          <button
            type="button"
            onClick={() =>
              setLoans((prev) =>
                prev.length >= EMI_MAX_LOANS ? prev : [...prev, newLoan()]
              )
            }
            disabled={loansWithComputed.length >= EMI_MAX_LOANS}
            className={cn(
              "group w-full cursor-pointer rounded-2xl border-2 border-dashed border-navy-200/80 bg-gradient-to-b from-navy-50/40 to-white px-6 py-8 text-left transition-colors",
              "hover:border-teal-300/80 hover:bg-teal-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200",
              loansWithComputed.length >= EMI_MAX_LOANS &&
                "cursor-not-allowed opacity-60 hover:border-navy-200/80 hover:bg-white"
            )}
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-start gap-3 text-center sm:text-left">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-100/80">
                  <Plus className="size-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">
                    Add another loan to the scenario
                  </p>
                  <p className="mt-1 text-xs text-navy-500 leading-relaxed max-w-md">
                    Stack car, personal, or education loans alongside your main
                    loan. Combined EMI and buffer update instantly.
                  </p>
                  {loansWithComputed.length >= EMI_MAX_LOANS ? (
                    <p className="mt-2 text-[11px] font-semibold text-navy-500">
                      Limit reached ({EMI_MAX_LOANS} loans)
                    </p>
                  ) : null}
                </div>
              </div>
              <span
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-teal-200 text-teal-800 pointer-events-none shrink-0"
                )}
              >
                Add loan
              </span>
            </div>
          </button>
        </div>

        {/* Decision column */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm ring-1 ring-navy-900/[0.03]">
            <div className="flex items-center gap-2 text-navy-400 mb-4">
              <Layers className="size-4 shrink-0" strokeWidth={2} aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                Combined obligation
              </p>
            </div>
            <p className="text-label text-navy-400 mb-1">Total EMI / month</p>
            <CurrencyDisplay
              amount={totalEmi}
              className="text-3xl font-bold tabular-nums text-navy-900"
            />
            <div className="mt-4 space-y-2 rounded-xl bg-navy-50/60 px-3 py-3 text-sm">
              {loansWithComputed.map((l) => (
                <div
                  key={l.id}
                  className="flex justify-between gap-2 tabular-nums"
                >
                  <span className="text-navy-500">{l.kind.label}</span>
                  <span className="font-semibold text-navy-800">
                    {formatCurrency(l.emi)}/mo
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 border-t border-navy-100 pt-5 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-navy-500">Lifetime interest (est.)</span>
                <span className="font-semibold tabular-nums text-navy-800">
                  {formatCurrency(totalInterestLifetime)}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-navy-500">Total repaid (principal + interest)</span>
                <span className="font-semibold tabular-nums text-navy-800">
                  {formatCurrency(totalRepaymentLifetime)}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-navy-400 mb-4">
              <Scale className="size-4 shrink-0" strokeWidth={2} aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                Affordability
              </p>
            </div>
            <div className="space-y-4">
              <DashboardRow
                icon={PiggyBank}
                label="Est. in-hand / month"
                value={formatCurrency(monthlyInHand)}
                muted={monthlyInHand <= 0}
              />
              <DashboardRow
                icon={Minus}
                label="After all EMIs"
                value={formatCurrency(postEmi)}
                valueClass={
                  postEmi < 0 ? "text-danger-600" : "text-teal-800"
                }
              />
              <DashboardRow
                icon={Scale}
                label="Debt-to-income (EMI ÷ in-hand)"
                value={monthlyInHand > 0 ? `${dti}%` : "—"}
                sub={
                  monthlyInHand > 0
                    ? dti <= 35
                      ? "Often used as a comfortable band"
                      : dti <= 45
                        ? "Elevated — watch other obligations"
                        : "High — easy to feel pinched"
                    : undefined
                }
              />
            </div>

            {monthlyInHand > 0 ? (
              <div className="mt-5 border-t border-navy-100 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-navy-400 mb-1">
                  After EMIs & monthly plan
                </p>
                <p className="text-xs text-navy-500 mb-2">
                  Living spend from{" "}
                  <Link
                    href={SALARY_PREMIUM_LIFESTYLE}
                    className="font-medium text-teal-700 underline-offset-2 hover:underline"
                  >
                    Monthly plan
                  </Link>
                  : {formatCurrency(lifestyleLivingExpenses)}/mo
                </p>
                <CurrencyDisplay
                  amount={postEmiAfterLife}
                  className={cn(
                    "text-xl font-bold tabular-nums",
                    postEmiAfterLife < 0
                      ? "text-danger-600"
                      : "text-emerald-700"
                  )}
                />
                <p className="text-xs text-navy-500 mt-1">
                  What’s left each month once EMIs and your plan are paid for.
                </p>
                <Link
                  href={SALARY_PREMIUM_LIFESTYLE}
                  className="mt-3 inline-flex text-sm font-semibold text-teal-700 hover:underline"
                >
                  Adjust Monthly plan →
                </Link>
              </div>
            ) : null}
          </div>

          <AdvisoryPanel advisory={advisory} verdict={verdict} />
        </aside>
      </div>
      </PremiumPlannerSalaryGate>
    </PageShell>
  );
}

function getAdvisoryCopy(
  verdict: "neutral" | "critical" | "warn" | "tight" | "ok",
  dti: number,
  postEmiAfterLife: number,
  opts: { forecastHref: string; loanCount: number }
): {
  title: string;
  body: string;
  actions: { label: string; href?: string }[];
} {
  switch (verdict) {
    case "neutral":
      return {
        title: "Waiting on your salary model",
        body: "Once in-hand pay is set, we can show DTI, cash after EMIs, and buffer after your Monthly plan.",
        actions: [{ label: "Go to salary input", href: "/salary" }],
      };
    case "critical":
      return {
        title: "EMIs exceed in-hand pay",
        body: "On these numbers, monthly instalments are larger than estimated take-home. That isn’t sustainable without changing the loan, income, or structure.",
        actions: [
          {
            label:
              "Lower principal or lengthen tenure in the scenario until EMI fits in-hand.",
          },
          ...(opts.loanCount > 1
            ? [
                {
                  label:
                    "Remove additional loans from the scenario to see the main loan on its own.",
                },
              ]
            : []),
        ],
      };
    case "warn":
      return {
        title: "Debt load is high",
        body: `At ${dti}% of in-hand going to EMIs, there’s limited room for surprises. Consider a smaller ticket, better rate, or longer tenure before you lock in.`,
        actions: [
          { label: "Refine Monthly plan assumptions", href: SALARY_PREMIUM_LIFESTYLE },
          { label: "Review salary breakdown", href: SALARY_PREMIUM_BREAKDOWN },
        ],
      };
    case "tight":
      return {
        title: "EMIs fit salary, not your plan",
        body:
          postEmiAfterLife < 0
            ? "After EMIs and the living costs in your Monthly plan, the maths goes negative. Trim discretionary spend, reduce a loan amount, or revisit tenure."
            : "You’re close to the edge after your Monthly plan.",
        actions: [
          { label: "Open Monthly plan", href: SALARY_PREMIUM_LIFESTYLE },
          ...(opts.loanCount > 1
            ? [
                {
                  label:
                    "Compare with only the main loan — remove additional loans from the scenario.",
                },
              ]
            : []),
        ],
      };
    default:
      return {
        title: "Within a reasonable band",
        body: "EMIs use a sustainable share of in-hand pay, and something remains after your current Monthly plan. Still validate with your own bank quotes and fees.",
        actions: [{ label: "View wealth forecast", href: opts.forecastHref }],
      };
  }
}

const VERDICT_PANEL_STYLES: Record<string, string> = {
  neutral: "border-navy-200 bg-navy-50/80 text-navy-800",
  critical: "border-danger-200 bg-danger-50/90 text-danger-950",
  warn: "border-amber-200 bg-amber-50/90 text-amber-950",
  tight: "border-amber-200 bg-amber-50/85 text-amber-950",
  ok: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
};

function AdvisoryPanel({
  advisory,
  verdict,
}: Readonly<{
  advisory: ReturnType<typeof getAdvisoryCopy>;
  verdict: string;
}>) {
  const panelClass =
    VERDICT_PANEL_STYLES[verdict] ?? VERDICT_PANEL_STYLES.neutral;

  const Icon =
    verdict === "ok"
      ? CheckCircle2
      : verdict === "neutral"
        ? Info
        : AlertTriangle;

  return (
    <div
      className={cn(
        "rounded-2xl border px-5 py-5 shadow-sm",
        panelClass
      )}
    >
      <div className="flex gap-3">
        <Icon
          className={cn(
            "size-5 shrink-0 mt-0.5",
            verdict === "ok" && "text-emerald-600",
            verdict === "critical" && "text-danger-600",
            (verdict === "warn" || verdict === "tight") && "text-amber-600",
            verdict === "neutral" && "text-navy-500"
          )}
          strokeWidth={2}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug">{advisory.title}</p>
          <p className="mt-2 text-sm leading-relaxed opacity-90">
            {advisory.body}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {advisory.actions.map((a) => (
              <li key={a.label}>
                {a.href ? (
                  <Link
                    href={a.href}
                    scroll={a.href === SALARY_PREMIUM_BREAKDOWN ? false : undefined}
                    className={cn(
                      "inline-flex text-sm font-semibold underline-offset-2 hover:underline",
                      verdict === "ok"
                        ? "text-emerald-800"
                        : verdict === "critical"
                          ? "text-danger-800"
                          : "text-teal-800"
                    )}
                  >
                    {a.label} →
                  </Link>
                ) : (
                  <span className="text-xs font-medium leading-relaxed text-navy-600">
                    · {a.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LoanScenarioCard({
  stepLabel,
  title,
  description,
  loanKind,
  onLoanKindChange,
  headerAction,
  children,
  footer,
}: Readonly<{
  stepLabel: string;
  title: string;
  description: string;
  loanKind: string;
  onLoanKindChange: (id: string) => void;
  headerAction?: ReactNode;
  children: ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm ring-1 ring-navy-900/[0.02]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">
            {stepLabel}
          </p>
          <h2 className="text-h3 text-navy-800 mt-0.5">{title}</h2>
          <p className="text-xs text-navy-500 mt-1">{description}</p>
        </div>
        {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {LOAN_KINDS.map((k) => {
          const active = loanKind === k.id;
          return (
            <button
              key={k.id}
              type="button"
              onClick={() => onLoanKindChange(k.id)}
              className={cn(
                "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                active
                  ? "border-teal-600 bg-teal-100 text-teal-900 shadow-sm"
                  : "border-navy-200/80 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50/50"
              )}
            >
              <k.Icon className="size-3.5 opacity-80" aria-hidden />
              {k.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-6">{children}</div>

      <div className="mt-6">{footer}</div>
    </div>
  );
}

function LoanEmiPreview({
  emi,
  interest,
  months,
  repaymentTotal,
}: Readonly<{
  emi: number;
  interest: number;
  months: number;
  repaymentTotal: number;
}>) {
  return (
    <div className="rounded-xl border border-teal-100/80 bg-gradient-to-br from-teal-50/50 to-white px-4 py-4">
      <p className="text-label text-teal-800/80 mb-1">This loan — monthly EMI</p>
      <CurrencyDisplay
        amount={emi}
        className="text-2xl font-bold tabular-nums text-navy-900"
      />
      <div className="mt-3 grid gap-1.5 text-xs text-navy-600 sm:grid-cols-2">
        <p>
          <span className="text-navy-400">Interest over term · </span>
          <span className="font-medium tabular-nums text-navy-700">
            {formatCurrency(interest)}
          </span>
        </p>
        <p>
          <span className="text-navy-400">Total repaid · </span>
          <span className="font-medium tabular-nums text-navy-700">
            {formatCurrency(repaymentTotal)}
          </span>
        </p>
        <p className="sm:col-span-2 text-navy-500">
          {months} months · reducing balance, fixed rate (model only)
        </p>
      </div>
    </div>
  );
}

function LoanFields({
  principal,
  setPrincipal,
  rate,
  setRate,
  tenureYears,
  setTenureYears,
  amountLabel,
}: Readonly<{
  principal: number;
  setPrincipal: (n: number) => void;
  rate: number;
  setRate: (n: number) => void;
  tenureYears: number;
  setTenureYears: (n: number) => void;
  amountLabel: string;
}>) {
  return (
    <>
      <div className="space-y-2">
        <Label className="text-navy-700">{amountLabel}</Label>
        <InrMoneyInput
          value={principal}
          onCommit={setPrincipal}
          aria-label={`${amountLabel} in rupees`}
          className="max-w-full [&_input]:rounded-xl [&_input]:py-2.5 [&_input]:text-base"
          debounceMs={80}
        />
      </div>
      <div>
        <div className="mb-2 flex items-end justify-between gap-2">
          <Label className="text-navy-700">Interest rate (p.a.)</Label>
          <span className="text-sm font-bold tabular-nums text-teal-700">
            {rate.toFixed(1)}%
          </span>
        </div>
        <Slider
          min={6}
          max={16}
          step={0.1}
          value={[rate]}
          onValueChange={(v) => {
            const n = Array.isArray(v) ? v[0] : (v as number);
            setRate(Math.round(n * 10) / 10);
          }}
          className="py-1"
        />
        <p className="mt-1 text-[11px] text-navy-400">6% – 16% illustrative band</p>
      </div>
      <div>
        <div className="mb-2 flex items-end justify-between gap-2">
          <Label className="text-navy-700">Tenure</Label>
          <span className="text-sm font-bold tabular-nums text-teal-700">
            {tenureYears} years
          </span>
        </div>
        <Slider
          min={1}
          max={30}
          step={1}
          value={[tenureYears]}
          onValueChange={(v) => {
            const n = Array.isArray(v) ? v[0] : (v as number);
            setTenureYears(Math.round(n));
          }}
          className="py-1"
        />
        <p className="mt-1 text-[11px] text-navy-400">1 – 30 years</p>
      </div>
    </>
  );
}

function DashboardRow({
  icon: Icon,
  label,
  value,
  sub,
  muted,
  valueClass,
}: Readonly<{
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  muted?: boolean;
  valueClass?: string;
}>) {
  return (
    <div className="flex gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
        <Icon className="size-4" strokeWidth={2} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-label text-navy-400">{label}</p>
        <p
          className={cn(
            "text-lg font-bold tabular-nums text-navy-800",
            muted && "text-navy-400",
            valueClass
          )}
        >
          {value}
        </p>
        {sub ? (
          <p className="text-[11px] text-navy-500 mt-0.5 leading-snug">{sub}</p>
        ) : null}
      </div>
    </div>
  );
}
