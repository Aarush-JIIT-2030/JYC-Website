## 13.0.9 — Reference UI + runtime hardening
- Reworked public mobile navigation as a true viewport-fixed bottom dock; desktop never renders it.
- Mounted mobile navigation and search outside the sticky navbar to prevent fixed-position containing-block bugs.
- Added a translucent JYC glass search surface and refined phone light/dark surfaces.
- Refined the homepage hero to match the supplied JYC reference composition: strong copy, orbital mark, compact stats and event-first hierarchy.
- Added a localhost service-worker/cache preflight to prevent stale Vite bundles from resurrecting old lazy-module errors.
- Added a dedicated missing-RPC repair SQL file and aligned role-aware save permissions for categories/calendar.

# JYC Website V11 — Production Pass

## Included
- Fixed a JSX build-blocking duplicate declaration in the public club card.
- Added a real `ErrorBoundary` recovery screen.
- Public content now loads through the `jyc_read_site_data()` RPC so anonymous clients receive only published public content instead of the complete CMS JSON snapshot.
- Added passwordless student sign-in at `/login` using Supabase Auth.
- Added account-linked event registrations and a My JYC registration view.
- Hardened event registration RLS and added registration status management for administrators.
- Added optional event map URL support.
- Added event time validation in the admin creator.
- Improved keyboard behavior for clickable cards and gallery lightbox Escape handling.
- Added lazy-loading for gallery images.
- Improved external-link security with `noopener noreferrer` on updated flows.
- Improved review queue count in the admin navigation.
- Improved service-worker navigation/offline caching.
- Added PWA manifest metadata and route exclusions in robots.txt.
- Kept the homepage content-first and intentionally did not add the excluded “This Week at JYC” section.

## Supabase migration
Run `supabase/platform-v5-production.sql` after the existing migrations listed in `supabase/README.md`.

## Verification status
The final ZIP is structurally verified, but a production Vite build still needs to be run in an environment where npm dependencies can be installed. The previous build attempt was blocked by the package-install environment timing out.


## V12 Functional Pass
- Recruitment and audition actions are explicitly external registration links; no fake internal application flow is presented.
- Removed the unreliable client-only “Remind me” control; event detail retains Share, Copy link and Add to Calendar.
- Added event capacity and optional waitlist fields, with server-side initial status assignment in the production migration.
- Hardened self-registration updates so students can only cancel their own registration; event/admin-controlled fields remain protected.
- Preserved published status when an authorized editor saves edits to an already-published event.
- Added public gallery album filters and album selection when uploading media.
- Added registration totals to the admin overview.
- Reworded admin system health/analytics labels so they describe configuration/fallbacks rather than pretending to be live health checks.
- Kept “This Week at JYC” excluded.


## V13 — UX + Reliability Pass
- Replaced remaining destructive browser confirmation dialogs with mobile-friendly accessible confirmation modals.
- Added restore-backup confirmation modal and clearer status messaging.
- Removed outdated first-visit copy referring to event reminders; the site now describes share/calendar tools accurately.
- Kept recruitment as an external registration-link flow.
- Preserved mobile-first, content-first visual direction and the exclusion of “This Week at JYC”.
- No fake operational metrics or placeholder content were introduced.

### Verification note
The project structure and source-level checks were performed in this environment. A full production build still requires a successful npm dependency install; network/package installation previously timed out in the execution environment.

## V13.0.1 Build Fix

- Reworked the Admin component JSX into an explicit, parser-safe structure.
- Preserved role-based navigation, review count, command palette, mobile admin navigation, and all existing admin workspaces.
- This patch specifically addresses the Vite `Adjacent JSX elements must be wrapped in an enclosing tag` error reported during local production build.


## 13.0.3 — Admin lazy-load hardening
- Switched Admin to a direct React.lazy default import.
- Added a default export alongside the named export to prevent undefined lazy-module resolution.

## V13.0.4 — Search & Connection Hardening
- Fixed the red focus outline around the global search input.
- Reduced search modal height and internal scrolling on desktop/mobile.
- Prevented the search surface from creating a page-level scrollbar.
- Added a clearer development/production state when the `jyc_read_site_data` RPC is missing.
- Bumped package version to 13.0.4.

## V13.0.5 — Stable Admin + Search
- Admin is statically imported to eliminate lazy-module runtime ambiguity.
- Search input focus outline is explicitly neutralized after legacy global focus rules.
- Production build remains the gate before deployment.
- Supabase V5 RPC deployment remains a required backend step.

## V13.0.5 — Stable Admin + Fresh Supabase Bootstrap
- Admin is statically imported to eliminate lazy-module runtime ambiguity.
- Search input focus outline is explicitly neutralized after legacy global focus rules.
- Added `supabase/00-bootstrap-admins.sql` so the migration chain works on a fresh Supabase project instead of assuming `jyc_admins` already exists.
- Updated Supabase migration instructions to run the bootstrap before the existing migrations.
- Production build gate remains required before deployment.

- Added `supabase/PRODUCTION-BOOTSTRAP-ALL.sql` as a one-shot ordered database setup for a fresh JYC Supabase project.

## V13.0.5 mobile navigation/search hotfix
- Reworked the mobile bottom dock to use the same glass, gold-line, red-accent language as the Clubs discovery UI.
- Reworked global search into a translucent glass command sheet with softer focus treatment.
- Local development now unregisters old service workers and clears old caches to prevent stale Vite bundles from resurrecting removed React.lazy code.
- Production service-worker cache bumped to v13.


## V13.0.6 — Guided UX + role-aware admin
- Rebuilt mobile bottom navigation as a persistent five-item JYC/Clubs-themed dock.
- Upgraded search to a translucent glass command sheet with calmer focus treatment and better mobile sizing.
- Expanded first-visit guide with actionable routes into Clubs, Events, Gallery, Team and Calendar; can be reopened from More → Site guide.
- Added role-specific admin guide cards.
- Restored missing admin management components from the previous complete admin implementation so runtime tab references resolve.
- Strengthened mobile day/night surfaces and reduced-motion behavior.

## V13.0.7 — role-scoped editor polish
- Added explicit role classes and visual identity to each Control Center workspace.
- Club Admin event editor now disables club reassignment and shows a review-submission action instead of Publish.
- Added the guided Site Guide entry to the mobile More sheet.

## V13.0.8
- Fixed desktop/mobile navigation collision: mobile bottom dock is now strictly mobile-only and admin mobile dock is strictly mobile-only.
- Hardened admin sidebar label layout so full workspace names remain visible instead of collapsing to single characters.
- Refined JYC search into a lighter command surface with clearer result hierarchy and mobile behavior.
- Expanded first-visit guide progress/context and strengthened the admin role guide with explicit access summaries.
- Integrated the supplied JIIT Noida Academic Calendar 2026–27 as a separate public calendar source, including academic milestones, examinations, vacations and holidays represented in the supplied PDF.
- Added admin Academic Calendar workspace with public visibility, All-view inclusion and search visibility controls.
- Improved phone light/dark glass surfaces and Fest Mode logo treatment while keeping animations restrained and reduced-motion aware.

## V13.3.1 — Reference navigation pass

- Reworked phone navigation to match the supplied JYC reference: Home / Clubs / Events / Team / More in a bottom pill dock.
- Kept desktop public navigation at the top; mobile dock is explicitly hidden above the phone breakpoint.
- Removed the mobile desktop-nav ghost-label overlap by hiding desktop nav links until the mobile menu is opened.
- Refined mobile header, theme control, search trigger and safe-area spacing.
- Refined the search overlay into a translucent JYC glass sheet with touch-friendly exploration chips.
- Added a reference phoenix asset for the hero focal point while retaining the official circular JYC mark for the header and identity surfaces.
- Added Vercel public-access guidance; account-level Deployment Protection must be disabled in the Vercel dashboard for a public production URL.
