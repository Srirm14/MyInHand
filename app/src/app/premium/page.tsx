import { redirect } from "next/navigation";

/** `/premium` is not a standalone hub; send users to the primary premium tool. */
export default function PremiumPage() {
  redirect("/premium/offer-comparison");
}
