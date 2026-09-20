# V18.20.0 — JYC Compact Theme + Phoenix Orbit + Map Polish

This release keeps the V15/V17 JYC public product surface and applies a compact final UI pass.

- Desktop navigation now starts with Home and uses Contact instead of Calendar.
- JYC Planner remains available from More.
- Phoenix is centered with restrained orbital rings and orbiting orbs.
- Ecosystem Phoenix alignment is corrected so the bird sits inside its core instead of overflowing downward.
- Dark mode now uses a deeper layered night-sky treatment with deterministic stars, soft galaxy haze and subtle line texture.
- Public page headings, spacing, cards and contact form are tighter and more mobile-first.
- Contact submissions use Supabase when configured and show a clear fallback when the inbox table/service is not configured.
- Campus Map now has a compact JYC overlay, source badge and dark/light themed treatment while retaining OpenStreetMap.
- Service-worker cache bumped to `jyc-cache-v18-20-0-compact`.
- QA expanded to 19 V18.20-specific checks; source/search/security/SEO/build-preflight QA passes in the sandbox.

Browser production build and Playwright visual QA still need to be run in the Windows project environment after `npm install`.

# V18.20.0 — JYC Classic Restored

Restored the compact V17/V15 public club experience, homepage depth, Phoenix orbital identity, JYC Planner and mobile-first hierarchy while retaining V18.18 search/security/SEO hardening.

See `V18.19-JYC-CLASSIC-RESTORED.md`.

# V18.18.0 — JYC Motion

- Human-first animated public experience built on V18.17.
- React Bits-inspired interactions without turning the site into a component demo.
- Interactive clubs, events, moments, archive and JYC Now.
- Search/discoverability and security hardening.
- CodeQL + dependency audit CI.

# JYC V18.17.0 — UI + Functional Refinement

See `V18.17-UI-FUNCTIONAL-RELEASE.md` for the full change list.

# JYC V18.16.0 — Runtime Completeness Repair

## Purpose

V18.16.0 is a focused runtime repair on the V15-compact, mobile-first baseline. It does not introduce another public visual overhaul.

## Fixed

- Restored the missing `InteractivePhoenix` import used by the Home hero.
- Restored missing public route components: Events, FestsPage, GuidePage and Contact.
- Restored the V14 ecosystem and moments sections used by the Home page.
- Kept the working Footer restoration from V18.15.
- Kept the slower, inspectable boot/loading experience.
- Bumped the service-worker cache namespace to invalidate stale V18.14 assets.
- Added runtime completeness QA checkpoints.

## Gate

Static completeness and build-preflight checks pass. Production Vite build still depends on installing the correct platform-specific Rolldown optional dependency on the target machine.
