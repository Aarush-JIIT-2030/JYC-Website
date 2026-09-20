# JYC V17 — Reliability & Experience Pass

## Purpose
V17 is intentionally not a feature explosion. It hardens the platform and improves the highest-value user interactions identified from the V16.3 review.

## Implemented
- Global accessible confirmation dialog with Escape/Enter support and outside-click dismissal.
- Global toast event bridge so deep feature modules no longer need browser-native alerts.
- Club deletion uses a destructive confirmation dialog.
- My JYC registration cancellation uses a destructive confirmation dialog.
- Campus map, notification subscription, Fest Mode and QR copy feedback use JYC toasts.
- Release QA checks for remaining native `alert()` / `confirm()` calls.
- Release QA checks for critical RLS declarations.
- Version bumped to 17.0.0.

## Release gate
Run:

```bash
npm install
npm run qa
npm run build
```

For browser QA, use the matrix in `V17-BROWSER-QA-MATRIX.md` and test public, authenticated student and each admin role against a connected Supabase project.

## Deliberately not added
- No social feed, chat, likes, gamification, AI chatbot or unnecessary 3D.
- No additional primary navigation items.
- No new animation system. Existing Phoenix/loading motion remains the visual signature.
