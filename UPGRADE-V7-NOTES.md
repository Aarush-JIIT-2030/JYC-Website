# JYC Website V7 — UX & Reliability Upgrade

Built from the V6.5 stable project while preserving Supabase, RBAC, Fest Mode, What's Next, Club Admin scoping, START EMPTY content, and the existing migration/Edge Function architecture.

## UX changes
- JYC-specific dotted/technical background texture in dark and light themes.
- Controlled corner language: pills for controls/tags, structured corners for major surfaces, softer corners for cards.
- Distinctive Syne display typography with DM Sans UI/body typography.
- Mobile navigation rebuilt as a contained fixed drawer with backdrop, Escape/outside close, and body-scroll lock.
- Mobile bottom navigation removed to avoid duplicate navigation and viewport clipping.
- Search remains portal-based and gets stronger mobile sheet behavior and touch-safe dismissal.
- Homepage adds JYC Pulse and database-driven animated impact counters.
- Admin gets a keyboard-driven Command palette (Ctrl/Cmd+K) for accessible section navigation.
- Light mode contrast/background hierarchy refined.

## Reliability fixes
- Event club filter now correctly uses `All` as the default value.
- Native event registration correctly respects deadline even without an external URL.
- Search overlay supports touch backdrop dismissal.
- Admin command palette hook follows React hook ordering rules.
- Supabase missing-env message now references `.env`.
- Mobile overflow protection added across content surfaces.

## Content policy for this build
- No demo clubs/events/gallery/team records are seeded.
- Legacy Abhivyakti cleanup remains a database migration task; the existing frontend legacy filter is preserved.
- No Club Comparison feature is added.
