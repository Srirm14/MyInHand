# Auth verification checklist (manual)

Run against a **staging** project with **Resend SMTP** configured in Supabase and **`NEXT_PUBLIC_SITE_URL`** matching the deployment URL.

## Sign up

- [ ] Valid email + strong password → account created; either session established **or** “Check your email” path with resend.
- [ ] Duplicate email → clear error suggesting sign in.
- [ ] Invalid email / weak password → validation before submit.
- [ ] Confirmation email arrives (sender, branding, subject).
- [ ] Confirmation link opens app, session works, redirect lands on `/salary` (or intended `next`).

## Sign in

- [ ] Valid credentials → redirect to `from` or `/salary`.
- [ ] Wrong password → error, no crash.
- [ ] Unconfirmed user → message + resend confirmation (cooldown 60s).

## Forgot / reset password

- [ ] Forgot password request → generic success (no account enumeration).
- [ ] Reset email arrives with branded template.
- [ ] Reset link → `/auth/callback` → `/auth/reset-password` with active session → new password saves → redirect to login.
- [ ] Expired/invalid link → `/auth/reset-password` shows invalid state + link to forgot password.
- [ ] Callback error without code → `/login?error=auth` shows message.

## Session

- [ ] Refresh page while logged in → still logged in.
- [ ] Logout → workspace cookies cleared; protected routes redirect to login.

## Routes

- [ ] `/profile` logged out → `/login?from=/profile`.
- [ ] `/login` while logged in → redirect to `from` or `/salary`.
- [ ] `/paywall` logged out → login with preserved `from` (existing product behavior).

## Mobile / UX

- [ ] Auth pages usable on narrow viewport; no horizontal scroll on forms.
- [ ] Back button from reset → predictable (no blank shell).

## Email volume (Resend free tier)

- [ ] Resend confirmation and forgot-password **cooldown** prevents rapid repeat clicks.
