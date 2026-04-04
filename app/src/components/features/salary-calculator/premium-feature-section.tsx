"use client";

import { motion } from "framer-motion";
import {
  PREMIUM_PLANNING_TOOLS,
  type PlanningToolId,
  type PremiumPlanningToolMeta,
} from "@/lib/config/premium-planning-tools";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/lib/motion/marketing-motion";
import { PremiumFeatureCard } from "./premium-feature-card";

const HREF_BY_ID: Record<PlanningToolId, string> = {
  wealth_forecast: "/premium/wealth-forecast",
  emi_analyzer: "/premium/emi-analyzer",
  monthly_planner: "/lifestyle",
};

interface PremiumFeatureSectionProps {
  locked: boolean;
  onRequestUpgrade: (tool: PremiumPlanningToolMeta | null) => void;
}

export function PremiumFeatureSection({
  locked,
  onRequestUpgrade,
}: Readonly<PremiumFeatureSectionProps>) {
  return (
    <section className="mt-14 md:mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        variants={staggerContainer(0.09)}
      >
        <motion.div variants={fadeUp} className="mb-6 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
            Premium planning
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-navy-800 md:text-2xl">
            What you can do with this salary
          </h2>
          <p className="mt-2 text-sm text-navy-500 leading-relaxed">
            Forecasts, debt fit, and monthly allocation build on your in-hand
            estimate—available on Premium when you are ready.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          className="grid gap-5 md:grid-cols-3"
        >
          {PREMIUM_PLANNING_TOOLS.map((meta) => (
            <motion.div key={meta.id} variants={fadeUp}>
              <PremiumFeatureCard
                meta={meta}
                locked={locked}
                hrefWhenUnlocked={HREF_BY_ID[meta.id]}
                onRequestUpgrade={() => onRequestUpgrade(meta)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
