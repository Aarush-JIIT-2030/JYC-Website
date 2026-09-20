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
