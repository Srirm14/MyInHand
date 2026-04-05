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
import { motion } from "framer-motion";
import {
  EASE,
  VIEWPORT,
  fadeIn,
  fadeUp,
  staggerContainer,
} from "@/lib/motion/marketing-motion";
import { PremiumBlurOfferTeaser } from "@/components/features/pricing/premium-blur-offer-teaser";
import { SalaryPricingSection } from "@/components/features/pricing/salary-pricing-section";
import { PageShell } from "@/components/layout/page-shell";
import { FeatureCard } from "@/components/shared/feature-card";
import { buttonVariants } from "@/components/ui/button";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { usePremiumProductAccess } from "@/lib/hooks/use-premium-product-access";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";

// ─── Static data ─────────────────────────────────────────────────────────────

const PAIN_QA = [
  {
    q: "Got a ₹20L offer—what actually lands monthly?",
    a: "InHand shows your exact take-home in seconds.",
  },
  {
    q: "Two offers on the table. Which pays more net?",
    a: "Offer comparison normalises both to the same assumptions.",
  },
  {
    q: "Can I afford the EMI after all deductions?",
    a: "EMI stress-test runs against real in-hand, not CTC.",
  },
  {
    q: "Old regime or new—which saves me more tax?",
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

/** Shown above the feature grid when the viewer already has Premium (no pricing on page). */
const PREMIUM_TRUST_CHIPS = [
  "Full toolkit unlocked",
  "No bank linking",
  "Old & new regime",
] as const;

// ─── Abstract hero preview ────────────────────────────────────────────────────

function HeroAbstractPreview() {
  return (
    <div
      className="pointer-events-none select-none relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl"
      aria-hidden
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15,23,42,0.35) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Mock layout */}
      <div className="relative flex gap-4 p-5 md:p-6">

        {/* Left — form-like column */}
        <div className="flex-1 space-y-3">
          {/* CTC input mock */}
          <div className="space-y-1">
            <div className="h-1.5 w-20 rounded-full bg-navy-300/40" />
            <div className="h-9 rounded-xl border border-teal-200/60 bg-teal-50/50 px-3 flex items-center gap-2">
              <div className="h-2 w-6 rounded-full bg-teal-400/40" />
              <div className="h-2 flex-1 rounded-full bg-navy-200/30" />
              <div className="h-4 w-12 rounded-md bg-teal-100/60" />
            </div>
          </div>

          {/* Regime toggle mock */}
          <div className="flex gap-2">
            <div className="flex-1 h-7 rounded-full border-2 border-teal-500/40 bg-teal-50/60" />
            <div className="flex-1 h-7 rounded-full border border-navy-200/40 bg-white/60" />
          </div>

          {/* Breakdown rows — colors match real composition panel */}
          <div className="space-y-2 pt-1">
            {[
              { id: "th1", labelW: "52%", valW: "22%", dot: "#0d9488", valBg: "bg-teal-500/30" },
              { id: "th2", labelW: "42%", valW: "18%", dot: "#0d9488", valBg: "bg-teal-400/25" },
              { id: "ded", labelW: "60%", valW: "20%", dot: "#fb7185", valBg: "bg-rose-400/30" },
              { id: "tax", labelW: "38%", valW: "16%", dot: "#fb7185", valBg: "bg-rose-300/25" },
              { id: "epf", labelW: "48%", valW: "14%", dot: "#a78bfa", valBg: "bg-violet-400/25" },
            ].map(({ id, labelW, valW, dot, valBg }) => (
              <div
                key={id}
                className="flex justify-between items-center border-b border-navy-100/70 pb-1.5"
              >
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: dot, opacity: 0.6 }} />
                  <div className="h-1.5 rounded-full bg-navy-200/55" style={{ width: labelW }} />
                </div>
                <div className={cn("h-1.5 rounded-full", valBg)} style={{ width: valW }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right — composition card matching the real donut panel */}
        <div className="w-32 md:w-36 shrink-0 rounded-xl border border-teal-200/50 bg-gradient-to-b from-teal-50/80 to-white/90 p-3 space-y-2 flex flex-col">
          <div className="h-1.5 w-16 rounded-full bg-navy-300/40" />
          {/* Mini donut ring — size-12 = 48px, inner hole ~24px via m-3 */}
          <div
            className="mx-auto mt-1 size-12 shrink-0 rounded-full"
            style={{ background: "conic-gradient(from -90deg, #0d9488 0% 72%, #fb7185 72% 100%)" }}
          >
            <div className="m-3 size-6 rounded-full bg-white/95" />
          </div>
          {/* Legend dots */}
          <div className="space-y-1.5 flex-1">
            {[
              { id: "lg-take", dot: "#0d9488", w: "55%" },
              { id: "lg-ded",  dot: "#fb7185", w: "38%" },
              { id: "lg-epf",  dot: "#a78bfa", w: "28%" },
            ].map(({ id, dot, w }) => (
              <div key={id} className="flex items-center gap-1">
                <div className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: dot, opacity: 0.7 }} />
                <div className="h-1 rounded-full bg-navy-200/40" style={{ width: w }} />
              </div>
            ))}
          </div>
          {/* Bar split */}
          <div className="h-1.5 w-full overflow-hidden rounded-full flex gap-px">
            <div className="h-full rounded-l-full bg-teal-500/50" style={{ width: "72%" }} />
            <div className="h-full rounded-r-full bg-rose-400/50" style={{ width: "28%" }} />
          </div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 to-transparent" />
    </div>
  );
}

// ─── Section heading helper ───────────────────────────────────────────────────

function SectionEyebrow({ children }: { readonly children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">
      {children}
    </p>
  );
}

function MembershipLandingPanel({ loggedIn }: { readonly loggedIn: boolean }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={fadeUp}
      className="mt-24 md:mt-28 mx-auto max-w-2xl rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/50 p-8 text-center shadow-sm"
      aria-labelledby="member-landing-heading"
    >
      <SectionEyebrow>Membership</SectionEyebrow>
      <h2
        id="member-landing-heading"
        className="text-xl sm:text-2xl font-bold text-navy-800 leading-snug"
      >
        You&apos;re on Premium
      </h2>
      <p className="mt-3 text-sm text-navy-600 leading-relaxed">
        Manage billing, receipts, and account details in one place. Your calculators stay
        the same—this is only for your subscription.
      </p>
      {loggedIn ? (
        <Link
          href="/profile"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-6 inline-flex h-11 rounded-full border-teal-300 bg-white px-6 text-sm font-semibold text-teal-800 hover:bg-teal-50"
          )}
        >
          Account &amp; billing
          <ArrowRight className="ml-2 size-4" />
        </Link>
      ) : (
        <p className="mt-4 text-xs text-navy-500">
          Sign in to manage your subscription and saved workspaces.
        </p>
      )}
    </motion.section>
  );
}

function FreeUserPricingBlock({
  pricingPremiumHref,
}: {
  readonly pricingPremiumHref: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={fadeUp}
      className="mt-24 md:mt-28"
    >
      <SalaryPricingSection
        premiumHref={pricingPremiumHref}
        freeHref="/salary"
        id="pricing"
      />
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function MarketingLanding() {
  const { toolHref } = useTieredPremiumLinks();
  const hasPremium = usePremiumProductAccess();
  const user = useAuthStore((s) => s.user);
  const loggedIn = Boolean(user);
  const pricingPremiumHref = loggedIn ? "/profile" : "/login?from=%2Fpaywall";
  const trustChips = hasPremium
    ? PREMIUM_TRUST_CHIPS
    : (["No sign-up needed", "No bank linking", "Old & new regime"] as const);

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-teal-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-48 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[60%] h-80 w-80 -translate-x-1/2 rounded-full bg-teal-100/20 blur-3xl"
        aria-hidden
      />

      <PageShell className="relative py-16 md:py-24">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 mb-6"
          >
            <span className="size-1.5 rounded-full bg-teal-500 animate-pulse" />
            <p className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
              {hasPremium
                ? "Premium · Full toolkit unlocked"
                : "Free · No sign-up · No bank linking"}
            </p>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="text-navy-800 text-3xl sm:text-4xl md:text-5xl leading-tight font-bold"
          >
            Your CTC is{" "}
            <span className="text-navy-400 line-through decoration-2">₹18L</span>
            .<br />
            What actually hits{" "}
            <span className="relative inline-block">
              your bank
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 6 C50 2, 150 2, 198 6"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>?
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-5 md:mt-6 text-base md:text-lg text-navy-500 leading-relaxed max-w-xl mx-auto"
          >
            {hasPremium
              ? "Your take-home, breakup, and Premium planners—offers, wealth outlook, and EMI checks—all use the same numbers, so comparisons stay honest."
              : "InHand calculates your exact monthly take-home—after PF, TDS, professional tax, and every deduction. No guessing, no HR spreadsheet."}
          </motion.p>

          {/* Trust chips */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.08)}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {trustChips.map((t) => (
              <motion.span
                key={t}
                variants={fadeIn}
                className="flex items-center gap-1.5 text-sm text-navy-500"
              >
                <CheckCircle2 className="size-3.5 text-teal-500 shrink-0" />
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1)}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/salary"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-8 text-base font-semibold shadow-md hover:shadow-lg bg-teal-600 hover:bg-teal-700 transition-shadow"
                )}
              >
                Calculate my take-home
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              {hasPremium ? (
                <Link
                  href={toolHref("offers")}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-navy-200 px-8 text-base gap-2 inline-flex items-center"
                  )}
                >
                  <Scale className="size-4 shrink-0" aria-hidden />
                  Compare offers
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
            </motion.div>
          </motion.div>

          {/* Abstract product preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-12"
          >
            <HeroAbstractPreview />
          </motion.div>
        </section>

        {/* ── STAT STRIP ───────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={staggerContainer(0.1)}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              label: "Example result",
              stat: "₹1,42,500",
              sub: "monthly in-hand on ₹18L CTC",
              subColor: "text-emerald-600",
            },
            {
              label: "Tax regime",
              stat: "Old vs New",
              sub: "side-by-side, you pick the better one",
              subColor: "text-navy-500",
            },
            {
              label: "Your privacy",
              stat: "Zero link",
              sub: "no bank, no Aadhaar—just your CTC",
              subColor: "text-navy-500",
            },
          ].map(({ label, stat, sub, subColor }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-teal-50/60 p-6 text-center shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
                {label}
              </p>
              <p className="text-3xl font-bold text-navy-800">{stat}</p>
              <p className={cn("mt-1 text-xs font-medium", subColor)}>{sub}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ── PAIN → ANSWER ────────────────────────────────────────── */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <SectionEyebrow>Sound familiar?</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 leading-snug">
              Every salary decision comes down to one question
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={staggerContainer(0.09)}
            className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto"
          >
            {PAIN_QA.map(({ q, a }) => (
              <motion.div
                key={q}
                variants={fadeUp}
                className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-navy-700 mb-2">
                  &ldquo;{q}&rdquo;
                </p>
                <p className="text-xs text-teal-700 font-semibold flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-teal-500" />
                  {a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">
              Your real salary in 3 steps
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={staggerContainer(0.12)}
            className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
          >
            {STEPS.map(({ step, title, desc }) => (
              <motion.div
                key={step}
                variants={fadeUp}
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
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────── */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <h2 className="text-h2 text-navy-800 mb-3">
              {hasPremium
                ? "Your tools — all included"
                : "Everything you need to understand your salary"}
            </h2>
            <p className="text-navy-500 leading-relaxed">
              {hasPremium
                ? "Breakdown, offer comparison, wealth outlook, and EMI planning—each screen stays tied to your real in-hand, not headline CTC."
                : "From take-home to long-term wealth—tools built around your actual numbers, not HR&apos;s CTC sheet."}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={staggerContainer(0.1)}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: BarChart3,
                title: "In-hand & breakup",
                description:
                  "Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes.",
                cta: "Open calculator",
                href: "/salary",
              },
              {
                icon: Scale,
                title: "Offer comparison",
                description:
                  "Two or three offers, same assumptions. See which one actually pays more after deductions.",
                cta: "Compare offers",
                href: toolHref("offers"),
              },
              {
                icon: TrendingUp,
                title: "Wealth outlook",
                description:
                  "See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc.",
                cta: "Open forecast",
                href: toolHref("forecast"),
              },
              {
                icon: PiggyBank,
                title: "EMI stress-test",
                description:
                  "Loan payments checked against in-hand after all deductions—not headline CTC.",
                cta: "Stress-test EMI",
                href: toolHref("emi"),
              },
            ].map(({ icon, title, description, cta, href }) => (
              <motion.div key={title} variants={fadeUp}>
                <FeatureCard
                  icon={icon}
                  title={title}
                  description={description}
                  cta={cta}
                  href={href}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── PREMIUM TEASER (free / anonymous only) ────────────────── */}
        {hasPremium ? null : (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-16 md:mt-20 mx-auto max-w-3xl"
          >
            <PremiumBlurOfferTeaser />
          </motion.section>
        )}

        {/* ── PRICING vs MEMBERSHIP ─────────────────────────────────── */}
        {hasPremium ? (
          <MembershipLandingPanel loggedIn={loggedIn} />
        ) : (
          <FreeUserPricingBlock pricingPremiumHref={pricingPremiumHref} />
        )}

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={{
            hidden: { opacity: 0, scale: 0.97 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
          }}
          className="mt-24 relative overflow-hidden rounded-2xl bg-teal-600 px-8 py-14 text-center text-white shadow-lg"
        >
          {/* Decorative inner blobs */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-500/50 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-emerald-400/25 blur-2xl"
            aria-hidden
          />
          {/* Dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden
          />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200 mb-3">
              {hasPremium ? "Premium member" : "Start free, no account needed"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {hasPremium
                ? "Your full toolkit is ready"
                : "Know your real salary before you decide"}
            </h2>
            <p className="text-teal-100/90 max-w-xl mx-auto mb-8 leading-relaxed">
              {hasPremium
                ? "Run the salary calculator anytime, or compare offers side by side—forecasts and EMI tools stay tied to your real in-hand pay."
                : "Free breakdown instantly. Upgrade when you want offer comparison, forecasts, and EMI planning—all tied to your actual in-hand, not CTC."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/salary"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "rounded-full px-8 h-12 font-semibold bg-white text-teal-700 hover:bg-teal-50 shadow-md"
                )}
              >
                {hasPremium ? "Salary calculator" : "Calculate free"}
                <ArrowRight className="ml-2 size-4" />
              </Link>
              {hasPremium ? (
                <Link
                  href={toolHref("offers")}
                  className="text-sm font-semibold text-teal-100 underline-offset-4 hover:underline"
                >
                  Compare offers →
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => openPremiumPlansModal()}
                  className="text-sm font-semibold text-teal-100 underline-offset-4 hover:underline"
                >
                  View premium plans →
                </button>
              )}
            </div>
          </div>
        </motion.section>

      </PageShell>
    </div>
  );
}
