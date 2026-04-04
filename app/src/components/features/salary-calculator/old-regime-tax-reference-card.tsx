"use client";

import { RegimeTaxSlabReferenceCard } from "@/components/features/salary/regime-tax-slab-reference-card";

/** Free calculator: old regime only, beside summary. */
export function OldRegimeTaxReferenceCard({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <RegimeTaxSlabReferenceCard
      regime="old"
      engineNotes="simple"
      className={className}
    />
  );
}
