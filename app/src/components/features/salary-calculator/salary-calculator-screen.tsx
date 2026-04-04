"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { FixedVariableInHandPanel } from "./fixed-variable-in-hand-panel";
import { SalaryCalculatorPremiumTeaser } from "./salary-calculator-premium-teaser";
import { PremiumFeatureSection } from "./premium-feature-section";
import { SalaryCalculatorForm } from "./salary-calculator-form";
import { SalaryCompositionPanel } from "./salary-composition-panel";
import { UpgradeSheet } from "./upgrade-sheet";
import { calculateSimpleSalarySummary } from "@/lib/simple-salary-calculator/calculate-simple-salary";
import {
  defaultSimpleSalaryInput,
  type SimpleSalaryInput,
} from "@/lib/simple-salary-calculator/types";
import { PremiumBlurOfferTeaser } from "@/components/features/pricing/premium-blur-offer-teaser";
import { usePremiumProductAccess } from "@/lib/hooks/use-premium-product-access";
import type {
  PlanningToolId,
  PremiumPlanningToolMeta,
} from "@/lib/config/premium-planning-tools";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/motion/marketing-motion";

function paywallHrefForTool(id: PlanningToolId | null): string {
  if (id === "wealth_forecast") return "/paywall?tool=forecast";
  if (id === "emi_analyzer") return "/paywall?tool=emi";
  if (id === "monthly_planner") return "/paywall?from=premium";
  return "/paywall";
}

export function SalaryCalculatorScreen() {
  const hasPremium = usePremiumProductAccess();
  const [input, setInput] = useState<SimpleSalaryInput>(defaultSimpleSalaryInput);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [upgradeTool, setUpgradeTool] = useState<PremiumPlanningToolMeta | null>(
    null
  );

  const setStoreInput = useSalaryStore((s) => s.setInput);

  const summary = useMemo(
    () => calculateSimpleSalarySummary(input),
    [input]
  );

  const totalCtc =
    input.annualFixedPay + input.annualVariablePay;

  useEffect(() => {
    setStoreInput({
      annualCTC: totalCtc,
      taxRegime: input.taxRegime,
      compensationMode: "fixed_variable",
      fixedAnnual: input.annualFixedPay,
      variableAnnual: input.annualVariablePay,
    });
  }, [
    totalCtc,
    input.taxRegime,
    input.annualFixedPay,
    input.annualVariablePay,
    setStoreInput,
  ]);

  const premiumLocked = !hasPremium;

  const openUpgrade = (tool: PremiumPlanningToolMeta | null) => {
    setUpgradeTool(tool);
    setUpgradeOpen(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)]">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-emerald-100/35 blur-3xl"
        aria-hidden
      />

      <PageShell className="relative py-8 md:py-12">
        <motion.header
          className="mb-8 max-w-3xl md:mb-10"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.06)}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700"
          >
            Calculator
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl"
          >
            <span className="text-teal-700">Salary</span> calculator
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-3 text-sm text-navy-500 leading-relaxed md:text-base"
          >
            Enter <strong className="font-semibold text-navy-700">guaranteed</strong>{" "}
            fixed pay and optional{" "}
            <strong className="font-semibold text-navy-700">variable</strong> pay.
            The summary shows what is dependable every month versus an
            illustrative view if variable is included, plus{" "}
            <strong className="font-semibold text-navy-700">
              regime-aware TDS
            </strong>{" "}
            tied to your Old / New regime selection.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] xl:items-start xl:gap-10 2xl:gap-12">
          <motion.div
            className="flex min-w-0 flex-col gap-8"
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1)}
          >
            <motion.div variants={fadeUp}>
              <SalaryCalculatorForm value={input} onChange={setInput} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SalaryCalculatorPremiumTeaser
                locked={premiumLocked}
                onRequestUnlock={() => openUpgrade(null)}
              />
            </motion.div>
          </motion.div>

          <motion.aside
            className="flex min-w-0 w-full max-w-full flex-col gap-4 xl:max-w-[420px] xl:justify-self-end"
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.12)}
          >
            <motion.div variants={fadeUp}>
              <FixedVariableInHandPanel
                taxRegime={input.taxRegime}
                monthlyInHandFixedOnly={summary.monthlyInHandFixedOnly}
                monthlyInHandIncludingVariable={
                  summary.monthlyInHandIncludingVariable
                }
                annualInHandFixedOnly={summary.annualInHandFixedOnly}
                annualInHandIncludingVariable={
                  summary.annualInHandIncludingVariable
                }
                monthlyIncomeTaxFixedBasis={summary.monthlyIncomeTaxFixedBasis}
                monthlyIncomeTaxIncludingVariable={
                  summary.monthlyIncomeTaxIncludingVariable
                }
                annualIncomeTaxFixedBasis={summary.annualIncomeTaxFixedBasis}
                annualIncomeTaxIncludingVariable={
                  summary.annualIncomeTaxIncludingVariable
                }
                effectiveTaxRateFixedBasis={summary.effectiveTaxRateFixedBasis}
                effectiveTaxRateIncludingVariable={
                  summary.effectiveTaxRateIncludingVariable
                }
                annualVariablePay={input.annualVariablePay}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SalaryCompositionPanel
                takeHomeShare={summary.compositionTakeHome}
                employeeDeductionsShare={summary.compositionEmployeeDeductions}
                employerPfShare={summary.compositionEmployerPf}
              />
            </motion.div>
            {premiumLocked ? (
              <motion.div variants={fadeUp}>
                <PremiumBlurOfferTeaser compact className="shadow-sm" />
              </motion.div>
            ) : null}
          </motion.aside>
        </div>

        <PremiumFeatureSection
          locked={premiumLocked}
          onRequestUpgrade={openUpgrade}
        />
      </PageShell>

      <UpgradeSheet
        open={upgradeOpen}
        onOpenChange={setUpgradeOpen}
        tool={upgradeTool}
        paywallHref={paywallHrefForTool(upgradeTool?.id ?? null)}
      />
    </div>
  );
}
