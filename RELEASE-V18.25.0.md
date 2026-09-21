# V18.25.0 — Human JYC Final

This release is a repair-and-finish pass over the V18.24 public experience.

## Fixed

- Restored the missing public `Events` and `FestsPage` route components.
- Reworked the homepage ecosystem so Clubs, Events, My JYC and Team orbit the Phoenix and remain individually clickable.
- Enlarged the Phoenix in the ecosystem centre while keeping the overall homepage compact.
- Tightened the desktop/mobile navbar and removed dead horizontal space.
- Reworked the theme transition so the Phoenix visibly flies from left to right before the palette changes.
- Rebuilt light mode around the JYC paper/ink/red/gold palette instead of a washed dark clone.
- Removed the remote Google Fonts dependency to reduce network work, remove font MIME/CSP noise and improve cold-load reliability.
- Moved the localhost service-worker cleanup from inline HTML into a same-origin script so the strict CSP stays clean.
- Improved the global search empty state with direct Clubs, Events, My JYC and Planner actions.
- Kept Admin as an operational Control Center rather than expanding the public site into a dashboard.
- Preserved reduced-motion behaviour and mobile containment.
- Bumped the service-worker cache namespace to invalidate the previous public shell.

## QA

Static source, search, security, SEO and build-preflight checks pass in this source package. The release is intended to be installed with `npm ci`, followed by `npm run build` and `npm run qa:browser` in the GitHub/Vercel environment.

## Product direction

JYC remains the priority: compact editorial navigation, real published content only, recognisable Phoenix identity, practical Clubs/Events flows and a separate Control Center.
