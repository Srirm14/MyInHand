# Supabase Auth + Resend SMTP (dashboard setup)

Auth emails are sent by **Supabase Auth**, not the Next.js app. To deliver them through **Resend**, configure **custom SMTP** in the Supabase project.

## 1. Resend

1. Add and verify your **sending domain** in [Resend](https://resend.com/domains).
2. Create an **API key** with permission to send from that domain.
3. In Resend, use **SMTP** credentials (see Resend docs: typically host `smtp.resend.com`, port `465` or `587`, username `resend`, password = API key).

## 2. Supabase Dashboard

1. **Authentication → SMTP**: enable custom SMTP; enter host, port, user `resend`, password (API key), sender email (e.g. `auth@yourdomain.com`), sender name `InHand`.
2. **Authentication → URL configuration**:
   - **Site URL**: production origin, e.g. `https://app.example.com` (no trailing slash).
   - **Redirect URLs**: include:
     - `http://localhost:3000/**`
     - `https://*.vercel.app/**` (if using Vercel previews)
     - your production origin `/**`
   - Ensure **`/auth/callback`** and **`/auth/reset-password`** paths are allowed (wildcard covers them).
3. **Authentication → Email templates**: paste HTML from [`docs/email/`](./email/README.md) (confirm signup, reset password).
4. **Providers → Email**: confirm **Confirm email** matches your product (if enabled, users must verify before full login).

## 3. App environment

Set **`NEXT_PUBLIC_SITE_URL`** in `.env.local` to the same canonical origin as production Site URL (see [`app/.env.example`](../app/.env.example)). The app uses it for `redirectTo` / `emailRedirectTo` so links in emails match the deployed host.

## 4. Secrets

- **Never** put Resend SMTP credentials in the Next.js repo or `NEXT_PUBLIC_*` vars. They belong only in **Supabase Dashboard → SMTP**.
- The app only needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## 5. Free tier usage

Resend free tier is sufficient for low-volume auth mail. The app throttles **resend confirmation** actions client-side; avoid spamming resend in QA.
