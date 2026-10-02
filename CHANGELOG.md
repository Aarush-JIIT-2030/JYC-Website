## V30.0.0 — Production Finalization

- Removed the duplicate V29 interaction stylesheet import from the active application entry.
- Removed the stale /src/v27-editorial-polish.css production HTML reference; the stylesheet stack is now owned by the Vite application bundle.
- Rotated the service-worker cache namespace to jyc-cache-v30-0-0.
- Synchronized package.json and package-lock.json release metadata and Node engine requirements.
- Updated SEO and visual QA contracts so the release checks validate the actual V30 runtime stack rather than superseded V27/V29 assumptions.
- Kept the beige/black/white visual system, centered layout, V20 split hero, logo-led loading experience, reduced-motion support and responsive navigation intact.

# Changelog

## 29.0.0 — Interaction & Accessibility Polish

- Added a final interaction layer after V28 instead of introducing another competing design system.
- Removed remaining loading-screen orbital/ring decoration.
- Reworked the day/night control into a clearer, theme-aware control.
- Added stronger keyboard focus treatment and consistent reduced-motion handling.
- Harmonised navigation, mobile dock, assistant launcher, buttons, cards, gallery crops and footer surfaces.
- Kept the assistant clear of the mobile navigation dock.
- Rotated the service-worker cache and extended visual QA.

## 28.0.0 — Centered Editorial System

- Rebuilt the public visual system around one coordinated warm-neutral JYC palette for light and dark modes.
- Removed the artificial full-screen hero minimum that created excessive empty space.
- Centered major public hierarchy, cards, controls and page headers for a consistent reading experience.
- Rebuilt About JYC as a connected journey: purpose, principles, five-family ecosystem, organisational flow, major programme rhythm, vision/mission and next-step navigation.
- Added direct pathways between About, Clubs, Events, Team and Gallery so pages behave as one ecosystem rather than isolated routes.
- Added source-grounded programme storytelling using the supplied JYC material without inventing current dates or registrations.
- Tightened responsive density and dark-mode surface contrast.
- Added V28 visual QA coverage and rotated the service-worker cache.

## 27.2.0 — Community Identity System

- Connected every fallback club profile to the supplied hub image archive, including extra presentation images where available.
- Strengthened individual club identity cards with distinct motifs, signatures, muted accent systems and source photography.
- Added distinct event identities for Dron-O-War, Converge, Ebullience, Induction, Ethnic Day, Farewell and Hackathons.
- Added a source-grounded JYC programme index to the Events page using the supplied hub presentation material.
- Connected event detail galleries to matching supplied presentation photography where the association is supported by the source data.
- Added responsive identity styling for club and event detail pages.
- Bumped release to V27.2 and rotated the service-worker cache.

## 27.1.0 — Editorial Pulse

- Added a compact JYC Pulse rail for live/upcoming activity, club count and recruitment signals.
- Activated the JYC Journal as the homepage editorial storytelling layer.
- Added a responsive 12-column editorial story layout with lead/supporting story hierarchy.
- Removed the legacy duplicate hub-story grid from the homepage path while retaining the underlying content for archive use.
- Rotated the service-worker cache and expanded release QA for V27.1.

## 23.0.0 — Final Agentic Bridge Release

- Auto-opens the Agentic AI bridge on fresh JYC home/Events route loads for both new and returning users.
- Replaced the JYC-themed Agentic popup with a separate futuristic Agentic AI visual identity.
- Removed duplicate Phoenix/flight/orbit treatments from the source-level experience.
- Removed the rejected homepage Next JYC Moment plaque.
- Tightened responsive centering, page widths, typography safety and mobile spacing.


## V18.11.2
- Fixed duplicate `AdminErrorBoundary` declaration in the admin bundle.
- Hardened the Vite HTML entry against public-directory asset resolution during production builds.
- Strengthened build preflight to catch the admin boundary collision before `vite build`.


## V18.11.1

- Fixed the V18.11.0 production-build syntax error in the featured Events card click handler.
- Fixed Vite `EISDIR: illegal operation on a directory` during HTML asset processing by replacing the root-relative canonical URL with the live site URL.
- Kept all V18.11 public-site, Phoenix, Events, Club Detail, Calendar and admin improvements intact.
- Bumped the service-worker cache namespace so browsers do not retain the broken V18.11.0 shell.

## V18.11.0

- Fixed the `GalleryItems` duplicate declaration that blocked Vite dependency scanning.
- Added the final public-site visual pass across Clubs, Events, Team, Gallery, Calendar and Contact.
- Added Phoenix pointer depth, orbit, particle and hover-response interactions while keeping the effect lightweight.
- Added an editorial featured-event surface plus club/date/search filters.
- Tightened admin workspace ergonomics, sticky editor controls and mobile-safe interaction states.
- Added Playwright as an explicit browser-QA dependency and refreshed the browser journey coverage.


## V18.10.0

### Repaired
- Restored the Team route/component to module scope.
- Restored Club Detail, Gallery lightbox, Share and JYC Assistant runtime contracts.
- Restored missing Admin workspaces: Homepage, Team, Gallery, Categories, Calendar, Platform, Admins, Notifications and Fest controls.
- Fixed cross-module AdminErrorBoundary usage.
- Added explicit Gallery/GalleryItems exports.

### Preserved and improved
- Phoenix hero and three Phoenix doors.
- Custom red/gold cursor on precise pointers, including the private admin shell.
- JYC + official academic calendar.
- Exact-title-first search ranking.
- Fest Mode gating and homepage-only Recruitment.
- My JYC, event reminders, Google Calendar, ICS and QR tools.
- Contact channels and creator details.

### GitHub
- Consolidated issue/PR templates.
- Added CODEOWNERS and Dependabot configuration.
- Expanded browser QA coverage.
- Added release quality gates and a release changelog.

## V23.6 Reference Integration Pass

Applied the strongest reusable patterns found during the V65 and supplied club-site audit to V23.6 without replacing V23.6 with V65. Added a compact ecosystem context rail, compact event list view, stricter theme unification, domain-specific hub motifs, and final overflow/motion/focus safeguards. Static and source QA remain green.
