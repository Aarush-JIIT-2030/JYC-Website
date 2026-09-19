# JYC ADMIN ROLE MATRIX

## Super Admin

Full control:
- administrators: invite, change role, activate/deactivate, remove access
- clubs: create, edit, publish, hide, archive, permanently delete
- events: create, edit, publish, unpublish, pin, feature, archive, permanently delete
- gallery: full JYC gallery control
- homepage, team, categories, announcements, fest
- activity, notifications, settings
- security/recovery/version controls

Safety:
- cannot remove their own Super Admin access
- cannot remove the last active Super Admin

## JYC Editor

Operational website editor:
- clubs: create/edit/publish/hide/archive
- events: create/edit/publish/unpublish/pin/feature/archive
- JYC gallery: upload/manage
- activity log

Cannot:
- manage administrators
- change security settings
- permanently delete content
- control Super Admin accounts

## Club Admin

Scoped to exactly one assigned club:
- edit club profile
- arrange/hide/edit club sections
- manage club team
- manage recruitment/auditions
- manage club gallery
- create/edit event drafts
- submit events for JYC review

Cannot:
- access another club
- publish official events
- archive or permanently delete club/event content
- manage JYC gallery/homepage/team/categories/fest
- manage administrators

Database RLS and the `jyc_save_site_data` function enforce these boundaries. Hiding a button in React is not considered security.

## V13.0.8 — Academic Calendar workspace
- Super Admin: full Academic Calendar visibility controls.
- JYC Editor: can review calendar visibility settings but should use this only for editorial coordination.
- Clubs Admin: can view/manage calendar visibility as part of club discovery planning.
- Content Admin: can manage calendar visibility alongside homepage/team/fest-facing content.
- Club Admin: no Academic Calendar access.

The public Calendar keeps JYC-created events separate from the official JIIT 2026–27 academic-calendar source. Administrators can turn public academic dates/search visibility on or off without deleting JYC events.
