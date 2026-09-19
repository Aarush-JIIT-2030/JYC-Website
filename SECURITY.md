# JYC Website Security Notes

## What is safe to publish

The frontend uses only the Supabase **publishable** key. This key is designed to be exposed in browser code. It is not an administrator credential.

Never put any of these in `src/`, `.env.example`, GitHub, or browser code:
- `SUPABASE_SERVICE_ROLE_KEY`
- `sb_secret_*`
- VAPID private key
- GitHub tokens
- OAuth client secrets
- other server credentials

Production server secrets belong in Supabase Edge Function secrets / the hosting provider's environment settings.

## What the security model protects

- Public visitors can read the public JYC content record.
- Database writes require an authenticated active JYC administrator.
- Club administrators are scoped to their assigned club by the database RPC.
- The website creator record is protected server-side in the content RPC.
- Administrator management is restricted to Super Admin.
- Storage write/delete permissions are restricted by role and, for Club Admins, by club path.
- Admin and notification Edge Functions validate the caller's authenticated identity.
- Production headers include CSP, frame protection, MIME sniffing protection, referrer policy, permissions policy and HSTS.

## Important limitation

No website can prevent a visitor from downloading the JavaScript sent to their browser. Frontend code should therefore be treated as public. Security must come from Supabase RLS, authenticated server-side functions, secret management and hosting controls—not from hiding JavaScript.

An attacker who does not have your GitHub, Vercel or Supabase credentials should not be able to edit the deployed project merely by inspecting the frontend.

## Account protection

Before launch:
1. Enable MFA/2FA on GitHub, Vercel and Supabase.
2. Keep the GitHub repository private while the project is being built if you want the source private.
3. Never commit `.env.local`.
4. Protect the `main` branch.
5. Give senior/admin collaborators only the access they need.
6. Rotate any secret immediately if it is ever exposed.
7. Review Supabase Auth and Storage policies before public launch.

## Firewall / WAF

A frontend cannot install a firewall around itself. The included `vercel.json` adds browser security headers. For a stronger network edge, put the production domain behind a WAF/CDN such as Cloudflare and restrict administrative endpoints by authentication and rate limits.

Do not assume a WAF replaces Supabase RLS or Edge Function authorization.
