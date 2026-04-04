import { Suspense } from "react";
import { OfferComparisonView } from "@/components/features/premium/offer-comparison-view";
import { OfferComparisonSkeleton } from "@/components/shared/loading-skeletons";

export default function OfferComparisonPage() {
  return (
    <Suspense fallback={<OfferComparisonSkeleton />}>
      <OfferComparisonView />
    </Suspense>
  );
}
