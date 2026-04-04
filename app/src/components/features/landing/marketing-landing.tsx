"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  PiggyBank,
  Scale,
  TrendingUp,
} from "lucide-react";
import { PremiumBlurOfferTeaser } from "@/components/features/pricing/premium-blur-offer-teaser";
import { SalaryPricingSection } from "@/components/features/pricing/salary-pricing-section";
import { PageShell } from "@/components/layout/page-shell";
import { FeatureCard } from "@/components/shared/feature-card";
import { buttonVariants } from "@/components/ui/button";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";

const PAIN_QA = [
  {
    q: "Got a ₹20L offer—what actually lands monthly?",
    a: "InHand shows your exact take-home in seconds.",
  },
  {
    q: "Two offers on the table. Which one pays more net?",
    a: "Offer comparison puts both on the same assumptions.",
  },
  {
    q: "Can I afford the EMI after all my deductions?",
    a: "EMI stress-test runs against your real in-hand, not CTC.",
  },
  {
    q: "Old regime or new—which one saves me more tax?",
    a: "Both regimes calculated side-by-side, difference shown clearly.",
  },
] as const;

const STEPS = [
  {
    step: "01",
    title: "Enter your CTC",
    desc: "Type in your annual CTC. Add basic, HRA, or let InHand auto-split it.",
  },
  {
    step: "02",
    title: "Pick your regime",
    desc: "Old or new tax regime—InHand calculates TDS for both so you can compare.",
  },
  {
    step: "03",
    title: "See your in-hand",
    desc: "Instant monthly take-home with a full breakup—PF, tax, every line item.",
  },
] as const;

export function MarketingLanding() {
  const { toolHref } = useTieredPremiumLinks();
  const user = useAuthStore((s) => s.user);
  const loggedIn = Boolean(user);
  const pricingPremiumHref = loggedIn ? "/profile" : "/login?from=%2Fpaywall";

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-40 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl"
        aria-hidden
      />

      <PageShell className="relative py-16 md:py-24">

        {/* ── HERO ── */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 mb-6">
            <span className="size-1.5 rounded-full bg-teal-500 animate-pulse" />
            <p className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
              Free · No sign-up · No bank linking
            </p>
          </div>

          <h1 className="text-navy-800 text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
            Your CTC is{" "}
            <span className="text-navy-400 line-through decoration-2">₹18L</span>
            .<br />
            What actually hits your bank?
          </h1>

          <p className="mt-5 md:mt-6 text-base md:text-lg text-navy-500 leading-relaxed max-w-xl mx-auto">
            InHand calculates your exact monthly take-home—after PF, TDS,
            professional tax, and every deduction. No guessing, no HR
            spreadsheet.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["No sign-up needed", "No bank linking", "Old & new regime"].map(
              (t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-sm text-navy-500"
                >
                  <CheckCircle2 className="size-3.5 text-teal-500 shrink-0" />
                  {t}
                </span>
              )
            )}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-8 text-base font-semibold shadow-md hover:shadow-lg bg-teal-600 hover:bg-teal-700"
              )}
            >
              Calculate my take-home
              <ArrowRight className="ml-2 size-4" />
            </Link>
            {PREMIUM_UNLOCKED ? (
              <Link
                href="#pricing"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-navy-200 px-8 text-base"
                )}
              >
                See pricing
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => openPremiumPlansModal()}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-navy-200 px-8 text-base"
                )}
              >
                Compare Free &amp; Premium
              </button>
            )}
          </div>
        </section>

        {/* ── STAT STRIP ── */}
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-teal-50/60 p-6 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
              Example result
            </p>
            <p className="text-3xl font-bold text-navy-800">₹1,42,500</p>
            <p className="mt-1 text-xs text-emerald-600 font-medium">
              monthly in-hand on ₹18L CTC
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-teal-50/60 p-6 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
              Tax regime
            </p>
            <p className="text-3xl font-bold text-navy-800">Old vs New</p>
            <p className="mt-1 text-xs text-navy-500">
              side-by-side, you pick the better one
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-teal-50/60 p-6 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
              Your privacy
            </p>
            <p className="text-3xl font-bold text-navy-800">Zero link</p>
            <p className="mt-1 text-xs text-navy-500">
              no bank, no Aadhaar—just your CTC
            </p>
          </div>
        </section>

        {/* ── PAIN → ANSWER ── */}
        <section className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              Sound familiar?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 leading-snug">
              Every salary decision comes down to one question
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {PAIN_QA.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-navy-700 mb-2">
                  &ldquo;{q}&rdquo;
                </p>
                <p className="text-xs text-teal-700 font-semibold flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-teal-500" />
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              How it works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">
              Your real salary in 3 steps
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {STEPS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm overflow-hidden"
              >
                <p className="pointer-events-none select-none absolute -bottom-3 right-3 text-7xl font-black text-teal-500/35 leading-none">
                  {step}
                </p>
                <p className="mb-2 text-sm font-extrabold tabular-nums tracking-tight text-teal-900">
                  {step}
                </p>
                <h3 className="font-semibold text-navy-800 mb-2">{title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-h2 text-navy-800 mb-3">
              Everything you need to understand your salary
            </h2>
            <p className="text-navy-500 leading-relaxed">
              From take-home to long-term wealth—tools built around your actual
              numbers, not HR&apos;s CTC sheet.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BarChart3}
              title="In-hand & breakup"
              description="Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes."
              cta="Open calculator"
              href="/salary"
            />
            <FeatureCard
              icon={Scale}
              title="Offer comparison"
              description="Two or three offers, same assumptions. See which one actually pays more after deductions."
              cta="Compare offers"
              href={toolHref("offers")}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Wealth outlook"
              description="See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc."
              cta="Open forecast"
              href={toolHref("forecast")}
            />
            <FeatureCard
              icon={PiggyBank}
              title="EMI stress-test"
              description="Loan payments checked against in-hand after all deductions—not headline CTC."
              cta="Stress-test EMI"
              href={toolHref("emi")}
            />
          </div>
        </section>

        {/* ── PREMIUM TEASER ── */}
        {!PREMIUM_UNLOCKED ? (
          <section className="mt-16 md:mt-20 mx-auto max-w-3xl">
            <PremiumBlurOfferTeaser />
          </section>
        ) : null}

        {/* ── PRICING ── */}
        <div className="mt-24 md:mt-28">
          <SalaryPricingSection
            premiumHref={pricingPremiumHref}
            freeHref="/salary"
            id="pricing"
          />
        </div>

        {/* ── FINAL CTA ── */}
        <section className="mt-24 relative overflow-hidden rounded-2xl bg-teal-600 px-8 py-14 text-center text-white shadow-lg">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-500/40 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl"
            aria-hidden
          />
          <p className="text-xs font-bold uppercase tracking-widest text-teal-200 mb-3">
            Start free, no account needed
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Know your real salary before you decide
          </h2>
          <p className="text-teal-100/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Free breakdown instantly. Upgrade to premium when you need offer
            comparison, forecasts, and EMI planning—all tied to your actual
            in-hand, not CTC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "rounded-full px-8 h-12 font-semibold bg-white text-teal-700 hover:bg-teal-50"
              )}
            >
              Calculate free
              <ArrowRight className="ml-2 size-4" />
            </Link>
            {!PREMIUM_UNLOCKED && (
              <button
                type="button"
                onClick={() => openPremiumPlansModal()}
                className="text-sm font-semibold text-teal-100 underline-offset-4 hover:underline"
              >
                View premium plans →
              </button>
            )}
          </div>
        </section>

      </PageShell>
    </div>
  );
}
