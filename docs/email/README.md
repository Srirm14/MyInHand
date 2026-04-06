# Auth email templates (Supabase)

Supabase Auth sends these emails using your project SMTP (e.g. Resend). **Copy the HTML below into the Supabase Dashboard** → Authentication → Email templates.

Variables follow [Supabase Auth email templates](https://supabase.com/docs/guides/auth/auth-email-templates).

## Templates in this folder

| File | Supabase template name |
|------|-------------------------|
| [`confirm-signup.html`](./confirm-signup.html) | Confirm signup |
| [`reset-password.html`](./reset-password.html) | Reset password |

**Magic link / invite:** Not used by the app today; add later if you enable those providers.

## After pasting

1. Send a test from the Supabase Dashboard (where available) or run a real sign-up / reset in staging.
2. Confirm links point to your **`NEXT_PUBLIC_SITE_URL`** origin and `/auth/callback` resolves (see [`SUPABASE_AUTH_SMTP.md`](../SUPABASE_AUTH_SMTP.md)).

## Plain text

Email clients that strip HTML will still show readable text if you configure the **Plain text** body in the dashboard (optional duplicate of the same content without HTML).
