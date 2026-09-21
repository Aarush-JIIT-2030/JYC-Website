# JYC V20.0.0 — Complete Final

JYC is a public-first campus culture platform with a separate Control Center CMS.

## Product surfaces
- Public JYC home, About, Clubs, Club detail, Events, Event detail, Fests, Gallery/Moments, Team, Contact, Archive, Planner, Campus Map, My JYC and 404.
- Global search with keyboard shortcuts.
- Optional saved clubs/events and registration flows.
- Admin Control Center with roles, reviews, registrations, content workspaces, Fest Mode, gallery, versions, activity, system and settings.
- AI Studio/editorial fallback without browser-side OpenAI secrets.

## Visual system
- Dark: JYC night / red Phoenix / warm cream.
- Light: deep cream / paper / brass / antique-gold Phoenix.
- Fest: six structural visual skins rather than a simple color switch.
- Phoenix Flight: full-viewport articulated SVG Phoenix + native View Transition API.

## QA
Static/source QA passes:
- 74 relative imports
- V20 product QA 26/26
- Search QA 6/6
- Security QA 12/12
- SEO QA 13/13
- Build preflight PASS

Final Windows verification is still required because this environment could not install the npm dependency tree: `npm ci`, `npm run build`, and `npm run qa:browser`.
