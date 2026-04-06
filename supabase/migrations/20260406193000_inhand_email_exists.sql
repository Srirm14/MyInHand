-- InHand: server-only email existence check (for preflight on signup/login).
-- Security note: this is callable only by the `service_role` via API routes to avoid direct client enumeration.

CREATE OR REPLACE FUNCTION public.inhand_email_exists(p_email text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = auth, public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM auth.users u
    WHERE lower(u.email) = lower(p_email)
  );
$$;

REVOKE ALL ON FUNCTION public.inhand_email_exists(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.inhand_email_exists(text) TO service_role;

