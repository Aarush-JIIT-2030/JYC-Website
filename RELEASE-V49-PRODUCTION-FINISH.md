# V49 — Production Finish

V49 is the final production-readiness pass after the V48 JYC Now editorial layer.

## Included

- Final interaction/motion layer with restrained hover, focus and navigation micro-interactions.
- Mobile safe-area handling and long-page rendering optimisations.
- Reduced-motion support retained.
- No custom cursor or orbital UI reintroduced.
- JYC Now sync now fails closed when no JYC_SYNC_SECRET is configured.
- LinkedIn connector default aligned to the documented September 2026 API release (202609).
- Release QA checks the canonical 21-community registry, public route/indexing contracts, security headers, connector safeguards and release metadata.
- Service-worker cache namespace bumped to V49.
- Package and lockfile versions aligned to 49.0.0.

## Production rule

Social profiles are only promoted to the live registry when they have source-backed verification. Missing handles remain intentionally empty; the website must never invent a hub's social identity.

## Research benchmark

The information architecture continues to take cues from JIIT Innovation and CICR: clear programme discovery, event/archive separation, community identity, team visibility, gallery storytelling and an explicit latest-updates layer. Major-fest references are treated as inspiration for event storytelling rather than as a template for the main JYC organisation site.

## Release gate

Run npm ci, npm run qa and npm run build. Then verify desktop and mobile routes including home, about, history, clubs, events, fests, team, gallery, contact, calendar, recruitment, updates, one club detail and one event detail.
