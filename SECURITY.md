# Security Policy

## Reporting a vulnerability

Please do not publish credentials, tokens or exploitable details in a public issue. Contact the repository maintainer privately through the repository's configured security/contact channel.

## Project security expectations

- Supabase service-role credentials must remain server-side.
- Browser code may only use the intended publishable Supabase configuration.
- `.env.local` and other local secret files are ignored by Git.
- Public external URLs should be validated before navigation or rendering.
- Admin routes and publishing actions must remain protected.
- CSP, HSTS, frame-ancestors, referrer policy and content-type protections should not be weakened without a documented reason.
