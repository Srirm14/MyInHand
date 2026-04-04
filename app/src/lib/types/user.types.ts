export type PlanTier = "free" | "premium";

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  company: string;
  /** Optional — designation / title */
  role?: string;
  planTier: PlanTier;
  /** ISO timestamp from profiles.updated_at */
  profileUpdatedAt?: string;
}
