import { redirect } from "next/navigation";
import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";

/** Server-side guard: mirrors middleware redirect for RSC / direct navigation edge cases. */
export function redirectToSalaryUnlessPremiumEnv(): void {
  if (!getPremiumUnlockedFromEnv()) {
    redirect("/salary");
  }
}
