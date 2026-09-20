# JYC V16 — Functional Platform & Beginner-Friendly Pass

## Implemented

- Removed public Certificate Verification, Auditions and Fest Pass experiences.
- Removed those destinations from More, search and footer navigation.
- Recruitment remains as the single public club-opportunity flow.
- Reworked the phoenix visual to use the full bird-only high-resolution asset; the old seal/text composite is no longer used inside the hero artwork.
- Hardened custom cursor listeners with pointer + mouse fallback for desktop browsers.
- Rebuilt Campus Map around the two JIIT campuses with a student-first campus switch inspired by JIIT Pulse.
- Added OpenStreetMap interactive basemap, campus-specific directions, venue search, JIIT Pulse utility link and admin-published JYC venue list.
- Added public Project Submission flow: anyone can submit a project; nothing is public until a JYC admin approves it.
- Added Admin → Project Submissions workspace with club assignment, approve/publish, request changes and reject actions.
- Added V16 Supabase RLS migration for public project submissions and admin-only review/update access.
- Improved search trigger and keyboard affordance.
- Improved Site Guide final step with direct project submission and staff Control Center access.
- Kept Staff/Admin access subtle in the footer rather than adding it to public primary navigation.

## Research patterns used

- JIIT Pulse: campus selection and student utility separation.
- MapLibre/OpenStreetMap ecosystem: interactive map architecture and open map tooling.
- shadcn/ui Command and Sidebar patterns: searchable navigation, grouped workspaces and clear admin structure.

## Database

Run `supabase/V16-CAMPUS-PROJECTS.sql` once in the connected Supabase project.

## Verification

Run `npm install` and `npm run build` in the real Windows Git repository. The sandbox dependency install timed out, so this package is not claimed as sandbox-build-verified.
