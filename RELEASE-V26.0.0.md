# JYC Website V26.0.0 — Beige Signature Release

## What changed

V26 is a visual consolidation pass on top of the V24 logo-led direction.

### Public UI
- JYC beige is the only brand accent in the public layer; black, white and neutral grays carry the rest of the hierarchy.
- Homepage hero is centered, compact and logo-led.
- Removed the hero's 3D/Falcon bird dependency from the active React entry.
- Replaced the Team page's decorative Phoenix artwork with the official JYC logo lockup.
- Homepage layout no longer force-appends historical modules. It now respects the configured order and maps the legacy Gallery slot to the single Moments experience.
- Reduced section padding and card density so content does not create unexplained dead zones.
- Reworked the homepage Moments grid into a fixed editorial image rhythm with cover cropping and responsive collapse.
- Tightened navigation, buttons, cards, page headers, empty states and form controls into one visual contract.
- Added stronger keyboard focus states and retained reduced-motion support.

### Content hierarchy

The intended homepage rhythm is:

**Hero → published pulse/content → About → Events → Clubs → Moments → Team → CTA**

If the editor configures a different order, only configured sections are rendered; historical modules are no longer silently appended.

### SEO / sharing
- Social preview images now use the official JYC logo instead of the legacy Phoenix artwork.

### QA
- Added `scripts/qa-v26-beige-signature.mjs`.
- Release QA now includes the V26 visual checks and no longer runs the stale V25 theme-coherence check.

## Design research used

The information architecture was cross-checked against current student-activity patterns from:
- JIIT Innovation: clear separation of activities, projects, team and event/archive content.
- IIT Bombay InstiApp: a unified discovery surface for organizations, events and people.
- IIT Delhi Student Affairs / Campus Life: student bodies, clubs, boards and fests are exposed as distinct but connected routes.
- IIT Madras student-life pages: club/society discovery is grouped around interests and participation.
- Open-source references included React student portals and club repositories such as CSE-TechClub/Club and ARC BPHC's club website.

These references informed hierarchy and discoverability only; JYC branding remains its own.

## Verification

Run:

    npm install
    npm run build
    npm run qa

For browser verification:

    npx playwright install chromium
    npm run dev
    npm run qa:browser

## V26.1 — Rendezvous-inspired interaction pass

The latest pass also studies the live **Rendezvous'26, IIT Delhi** information architecture: a strong editorial home, a compact event/genre index, a featured experience, dedicated day/pronite storytelling, and participation-oriented subpages. JYC borrows the interaction principles — hierarchy, event discovery, category scanning and image-led storytelling — without copying Rendezvous branding or its visual palette.

The official Rendezvous'26 site currently separates the experience into home, registration, pronites, pre-RDV, accommodation, CreatorVerse and other focused routes. Its homepage also exposes experience genres and a prominent featured-event rhythm. The JYC implementation adapts that approach into the JYC beige/black/white system and keeps content driven by published JYC data.
