# JYC V36 Deep Research & Correction Pass — 03 October 2026

## Scope
This pass re-audited the V36 senior-V1 branch against the approved senior V1 product contract, current JIIT public material, publicly attributable club/fest identities, and current accessibility, performance, and event-SEO guidance.

## Verified external findings

### JIIT / JYC scope
JIIT's 2026 admission brochure describes JIIT Youth Club 128 as the central coordinating body for major college events, fests and inter-society activities. It also lists named societies/hubs including Aakriti, AI-Tronics, Panache, DICE, Abhivyakti, Ecoquence, Aura, Cinekala, Cyber Security Hub, Eloquence, Qriosity, Prismatic, Vamunique, Fortissimo, BDS, CICR, JODC, RPH, Innovation Club, JSA and OPTICA.

The repository's older 21-community orientation dataset is useful supplied/historical material, but must not be presented as an exhaustive current 2026 directory. Current published club records should be managed through the JYC Control Center and distinguished from archive material.

### Campus
JIIT's current contact information confirms separate Sector 62 and Sector 128 addresses. Public JYC copy remains explicitly scoped to Sector 128, while the campus map intentionally retains both campuses for cross-campus utility.

### Social identities
Publicly attributable identities currently wired into the project include JIIT Youth Club, CICR, ZENCODERS, Dronotics, Vamunique, RPH, JODC, CypherX, GDG JIIT-128, Innovation JIIT and Abhivyakti. No unverified handles were added where attribution was insufficient.

### Accessibility
WCAG 2.2 requires visible keyboard focus and minimum pointer target sizing. The codebase already contains a global focus-visible contract and reduced-motion rules; future controls must inherit those rules.

### Performance
Current web performance guidance supports lazy loading below-the-fold imagery, while important above-the-fold/LCP imagery should remain eager and can use appropriate fetch priority. The archive already lazy-loads most gallery/hub imagery; future work should move toward responsive image variants rather than shipping desktop-sized images to mobile.

### Event SEO
Google's Event structured-data guidance supports event discovery when event records include accurate event details and valid structured data. V36 now includes date-range handling and registration offer metadata in its Event JSON-LD.

## Corrections implemented in this pass
1. Find Your Community chips now map to semantic interest aliases instead of requiring exact phrases.
2. Event Category filtering now uses event category/event type data when available instead of only organiser family.
3. Leadership and Gallery now have explicit page titles/descriptions.
4. V1 public routes are included in sitemap generation.
5. The contact form no longer reports success when Supabase is not configured.
6. Gallery provenance always has a readable fallback label.
7. JAI's organiser link now points to the official JIIT Youth Club domain instead of the older Vercel URL.
8. Event JSON-LD now supports multi-day date ranges and registration offer metadata.
9. Senior-V1 QA now checks the new discovery, category, metadata and contact-form behavior.

## Production gates

### P0 — before merge/deployment
- Wait for GitHub CI on the latest V36 commit and resolve any build, audit, QA or Playwright failures.
- Run the deployed preview through desktop and mobile browser QA.
- Verify all external social, registration and organiser links.
- Verify Supabase production variables and the contact-submission RLS policy.
- Verify Vercel production origin so sitemap/canonical URLs use the real hostname.

### P1 — next implementation cycle
- Replace the static 21-community orientation directory with an admin-managed current 2026–27 club registry while retaining archive material separately.
- Add club source metadata: official website, Instagram, LinkedIn, last verified date and verification state.
- Add event source metadata and an official-source link where available.
- Add responsive image variants using srcset/sizes or picture.
- Add automated external-link health checks.
- Add automated accessibility checks for keyboard navigation, dialog focus trapping, target sizes and mobile bottom-dock obstruction.
- Add privacy/retention copy for public contact submissions and analytics.
- Add rate limiting or abuse protection for anonymous public form submissions.

### P2 — product improvements
- Interest-based club discovery without ranking clubs.
- Event reminders and calendar subscription.
- Last-verified badges for official club/fest identities.
- Archive provenance: year, event, organiser, source and usage rights.
- Admin content-health rules for stale social links, missing alt text and expired recruitment links.
- Current-year leadership verification before publishing team records.

## Research sources
Current JIIT public pages, the JIIT 2026 admission brochure, W3C WCAG 2.2 guidance, Google Search Central Event structured-data guidance, and current web.dev responsive-image guidance.
