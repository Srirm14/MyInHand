-- Billing: Razorpay subscriptions (individual Pro/Premium).
-- Security note: end-users must not be able to self-upgrade by updating `profiles.plan_tier`.

CREATE TABLE IF NOT EXISTS public.billing_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider text NOT NULL DEFAULT 'razorpay',
  plan_code text NOT NULL CHECK (plan_code IN ('pro_monthly', 'pro_yearly')),
  razorpay_subscription_id text NOT NULL UNIQUE,
  status text NOT NULL,
  latest_payment_id text,
  current_start_at timestamptz,
  current_end_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS billing_subscriptions_user_idx
  ON public.billing_subscriptions (user_id, updated_at DESC);

ALTER TABLE public.billing_subscriptions ENABLE ROW LEVEL SECURITY;

-- Users may only view their own billing rows.
CREATE POLICY "billing_subscriptions_select_own"
  ON public.billing_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- No INSERT/UPDATE/DELETE policy: only service role should write.

CREATE TRIGGER billing_subscriptions_set_updated_at
  BEFORE UPDATE ON public.billing_subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Block self-upgrade: prevent authenticated users from changing plan fields directly.
CREATE OR REPLACE FUNCTION public.block_profile_plan_mutation()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF (NEW.plan_tier IS DISTINCT FROM OLD.plan_tier)
     OR (NEW.plan_updated_at IS DISTINCT FROM OLD.plan_updated_at) THEN
    -- Only allow service_role (server-side admin client) to mutate plan fields.
    IF auth.role() IS DISTINCT FROM 'service_role' THEN
      RAISE EXCEPTION 'plan fields are server-managed';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_block_plan_mutation ON public.profiles;
CREATE TRIGGER profiles_block_plan_mutation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.block_profile_plan_mutation();

