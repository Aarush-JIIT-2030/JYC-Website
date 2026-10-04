# JYC V56.2 Deep Research & Interconnection Pass — 2026-10-04

## Source basis

- Supplied JYC Website development specification.
- Supplied 2026–27 All Hubs / orientation presentation exports.
- Official JIIT Admission Brochure 2026.
- Official JIIT public event/news material.
- Official JIIT Innovation site.
- Official CICR site.
- Official Dronotics / DRONO-O-WAR site.
- Existing JYC source-media archive and five-volume photo inventory.

## Design research translated into implementation

1. JYC remains editorial rather than dashboard-like: strong hierarchy, restrained motion, centered composition, compact navigation and a warm paper/ink/gold visual language.
2. Photography is treated as evidence and storytelling: chapter-based grouping, varied image crops, captions, source labels, lightbox navigation and club/event associations.
3. Club pages use the pattern seen in strong student-society sites: clear purpose, activities, signature experiences, people, event history, gallery and external connections.
4. Event pages use the pattern demonstrated by current JIIT Innovation/CICR/Dronotics sites: canonical event identity, status, date/location, programme/highlights, organiser and related visual archive.
5. SEO is entity-first rather than keyword stuffing: JYC organisation identity, five family vocabulary, maintained community URLs, flagship event URLs, structured data, sitemap and llms.txt.

## Source-backed content depth

The official JIIT Admission Brochure describes JIIT Youth Club 128 as the central coordinating body for major college events, fests and inter-society activities and provides identity descriptions for the brochure-listed societies. The supplied orientation material adds detailed activity/experience information for the wider source index. Current operational claims remain publication-gated.

Current official web research used for contextual enrichment includes Innovation JIIT's RIDE Hack/CodeAI/Innovate/Climate Data archive, CICR's robotics capabilities and event structure, and Dronotics' DRONO-O-WAR competition structure.

## Backend interconnection

- Supabase `jyc_site_data` now contains the reproducible 17-club public CMS seed, two canonical event records and the 16 supplied leadership records.
- JAI remains review-gated under the canonical application id; the public client keeps the official source-backed fallback visible until an authenticated verifier approves that application id.
- The public read RPC now bridges only `jyc_gallery_items` with `status='published'` into the public JSON gallery. Pending/review media remains protected.
- 92 normalized source photographs remain review-stage and are not silently promoted.

## Performance

- GLB navigator is lazy-loaded as a separate bundle.
- model-viewer is still loaded only when the navigator needs it.
- model-native animations are selected by interaction intent rather than continuously looping.
- below-fold photo chapters use content-visibility and intrinsic sizing.
- source images remain lazy-loaded outside the primary photo-story frame.

## QA contract

- Source imports and hub registry checks are automated.
- 23 maintained hub identities are checked.
- 17 brochure-verified + 6 orientation-verified registry state is checked.
- 23 browser checks cover responsive overflow, readability, routes, reduced motion and photo-led rendering.
- Security, SEO, runtime, SQL, architecture and senior-V1 checks remain part of CI.