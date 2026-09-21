# V18.27.0 — Human JYC Finish

- Reworked light mode around warm beige/paper UI accents; the Phoenix remains red as the identity mark.
- Upgraded light/dark switching to the native View Transition API with a graceful CSS fallback and a clearer left-to-right Phoenix flight.
- Added an interactive Fest theme palette with six skins, per-fest local persistence and a restrained transition sheen.
- Made Fest Mode a reachable Control Center workspace for the appropriate admin roles.
- Added the same six visual theme presets to the Control Center and persisted the admin's local theme choice.
- Extended the admin guide, AI navigator and interactive tour with Fest Mode guidance.
- Kept theme transitions dependency-free to avoid another runtime library and another source of performance regressions.
- Bumped the service-worker cache to `jyc-cache-v18-27-0-restoration`.
- Added a V18.26 regression suite covering themes, Fest Mode, admin themes, reduced motion and runtime contracts.

## QA status

- Source integrity: 70 files — PASS
- V18.26 final QA: 21/21 — PASS
- Search QA: 6/6 — PASS
- Security QA: 12/12 — PASS
- SEO QA: 13/13 — PASS
- Build preflight: PASS
- JavaScript `.mjs` syntax checks: PASS

The final production Vite build and Playwright browser run must still be executed in the user's Windows Git clone because this sandbox could not finish installing the Vite package from the npm registry.

# V18.23.0 — Human JYC Final

This release is a cleanup and consolidation pass over the V18.16 → V18.19 → V18.21 → V18.22 line. The public product remains compact and club-first.

- Re-established a short 62/128-style JYC header with a contained, centred Phoenix mark.
- Reduced homepage hero and public page heading scale so content reads like a student organisation site rather than a marketing landing page.
- Kept one useful ecosystem orbit and tightened it into a compact campus-navigation moment.
- Added a restrained night-sky layer with deterministic stars and three subtle constellation groups; light mode keeps the approved cream/red/gold palette.
- Refined Phoenix/bird motion across public/supporting surfaces with reduced-motion fallbacks.
- Rebuilt the campus map layout as a compact map + venue utility rather than an overlapping dashboard composition. OpenStreetMap remains the map source.
- Fixed the JYC Assistant runtime bug caused by an undefined `results` reference; assistant search now uses the existing relevance scorer and supports clubs, events, pages and Planner.
- Removed the redundant V18.22 visual import; V18.23 is the final visual authority layer.
- Preserved real-content-only publishing and the existing Supabase/admin separation.
- Bumped the service-worker cache to `jyc-cache-v18-23-0-human-final`.
- Added a 25-check V18.23 regression suite.

## QA

- Source integrity: 67 files — PASS
- V18.23 final QA: 25/25 — PASS
- Search QA: 6/6 — PASS
- Security QA: 12/12 — PASS
- SEO QA: 13/13 — PASS
- Build preflight: PASS
- JSX syntax/transpile parse: all 8 JSX files — PASS
- Full static QA was repeated five times with no failures.

A production Vite build still needs to be executed in the Windows development environment because the sandbox cannot fetch the project's Vite plugin package.

# V18.22.0 — Human JYC Polish

- Compact centred ecosystem navigation.
- Header phoenix containment fix.
- JYC Assistant command-palette navigation with keyboard controls and Planner routing.
- Campus Map spacing/overlap repair and responsive layout.
- Smaller public subpage hero treatments.
- Warm light mode and restrained Phoenix/bird motion with reduced-motion support.

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
