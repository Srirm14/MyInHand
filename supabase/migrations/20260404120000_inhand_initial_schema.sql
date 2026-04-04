-- InHand initial schema (matches docs/inhand-database-design.md).
-- Applied to hosted Supabase via migration tooling; keep in repo for reproducibility.

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text NOT NULL,
  company text NOT NULL DEFAULT '',
  role text,
  plan_tier text NOT NULL DEFAULT 'free' CHECK (plan_tier IN ('free', 'premium')),
  plan_updated_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX profiles_plan_tier_idx ON public.profiles (plan_tier);

CREATE TRIGGER profiles_set_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, plan_tier)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'display_name', split_part(COALESCE(new.email, 'user'), '@', 1)),
    'free'
  );
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.salary_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  annual_ctc bigint NOT NULL,
  monthly_in_hand bigint NOT NULL,
  regime_label text NOT NULL,
  result_source text,
  input_json jsonb NOT NULL,
  breakdown_json jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  last_opened_at timestamptz
);

CREATE INDEX salary_sessions_user_updated_idx ON public.salary_sessions (user_id, updated_at DESC);

ALTER TABLE public.salary_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "salary_sessions_all_own"
  ON public.salary_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER salary_sessions_set_updated_at
  BEFORE UPDATE ON public.salary_sessions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.salary_session_planning (
  salary_session_id uuid PRIMARY KEY REFERENCES public.salary_sessions(id) ON DELETE CASCADE,
  lifestyle_json jsonb,
  emi_json jsonb,
  wealth_json jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.salary_session_planning ENABLE ROW LEVEL SECURITY;

CREATE POLICY "salary_session_planning_all"
  ON public.salary_session_planning FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.salary_sessions s
      WHERE s.id = salary_session_id AND s.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.salary_sessions s
      WHERE s.id = salary_session_id AND s.user_id = auth.uid()
    )
  );

CREATE TRIGGER salary_session_planning_set_updated_at
  BEFORE UPDATE ON public.salary_session_planning
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.offer_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  offer_count int NOT NULL,
  winner_summary text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX offer_sessions_user_updated_idx ON public.offer_sessions (user_id, updated_at DESC);

ALTER TABLE public.offer_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "offer_sessions_all_own"
  ON public.offer_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER offer_sessions_set_updated_at
  BEFORE UPDATE ON public.offer_sessions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.offer_session_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  offer_session_id uuid NOT NULL REFERENCES public.offer_sessions(id) ON DELETE CASCADE,
  sort_order smallint NOT NULL,
  draft_json jsonb NOT NULL,
  breakdown_override_json jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX offer_session_offers_session_sort_idx ON public.offer_session_offers (offer_session_id, sort_order);

ALTER TABLE public.offer_session_offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "offer_session_offers_all"
  ON public.offer_session_offers FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.offer_sessions o
      WHERE o.id = offer_session_id AND o.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.offer_sessions o
      WHERE o.id = offer_session_id AND o.user_id = auth.uid()
    )
  );

CREATE TRIGGER offer_session_offers_set_updated_at
  BEFORE UPDATE ON public.offer_session_offers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
