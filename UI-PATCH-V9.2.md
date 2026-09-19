# JYC UI Patch V9.2

Applied to the supplied JYC V9 source.

## Public website
- Events page is now event-focused and compact: smaller editorial header, concise description, compact counts, immediate event search, club filter, Cards/Calendar switch, and Upcoming/Live/Past/All tabs.
- Clubs page now puts search/filter controls immediately under the heading instead of burying the search below a large intro/stat block.
- Club and event cards are denser on mobile with smaller typography, spacing, and metadata.
- Mobile remains app-like with the five-item bottom navigation and compact More sheet.
- Desktop retains the wider editorial layout while mobile uses a separate compact layout through responsive CSS.

## Admin
- Replaced the broken/raw command palette with a styled Quick Find interface.
- Added working command search/filtering.
- Removed raw `Overviewoverview↗`-style output by giving command entries explicit layout, icons, descriptions, and arrows.
- Kept the keyboard shortcut as `Ctrl/Cmd + K`, but the visible control is now `Quick Find`.
- Admin sidebar remains independently scrollable on desktop.

## Not changed
- Supabase schema/migrations.
- Existing JYC data.
- RBAC logic.
- Fest Mode behavior.
- Official contact details/logo/theme tokens.
