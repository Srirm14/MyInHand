"use client";

import { RegimeTaxSlabReferenceCard } from "@/components/features/salary/regime-tax-slab-reference-card";
import type { TaxRegime } from "@/lib/types/salary.types";

/** Free calculator: slab reference for the selected Old / New regime (same shell, rows from constants). */
export function SimpleRegimeTaxReferenceCard({
  regime,
  className,
}: Readonly<{ regime: TaxRegime; className?: string }>) {
  return (
    <RegimeTaxSlabReferenceCard
      regime={regime}
      engineNotes="simple"
      className={className}
    />
  );
}
