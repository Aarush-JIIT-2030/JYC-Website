# V18.26.0 — Human JYC Finish

## Focus

This release is a finishing pass over V18.25. The goal is a more human JYC experience rather than adding another visual framework or turning the public site into a dashboard.

## Theme system

- Light mode now uses a warm beige/paper interface accent instead of JYC red for controls.
- The Phoenix artwork remains recognisably red, so the identity does not disappear in light mode.
- Public light/dark switching uses the native View Transition API when available, with a graceful CSS fallback.
- The signature Phoenix flies from left to right during theme changes.
- Reduced-motion mode disables continuous flight and view-transition effects.

## Fest Mode

- Fest themes are now visitor-interactive through a compact theme palette.
- Theme choice is persisted per fest on the current device.
- Fest theme changes use a lightweight transition sheen and View Transition API when supported.
- Existing JYC, Cyberpunk, Diwali, Neon Night, Aurora and Heritage skins remain available.
- Theme controls are responsive and keyboard accessible.

## Control Center

- Fest Mode is now an actual reachable admin workspace for Super Admin, JYC Editor and Events Admin roles.
- Admin has the same six visual theme presets as Fest Mode.
- Admin theme choice is persisted locally and does not mutate public content.
- Admin guide, AI navigator and interactive tour now understand Fest Mode.

## Cleanup / reliability

- Service-worker cache bumped to `jyc-cache-v18-26-0-human-finish`.
- Release QA updated to V18.26.
- Browser QA points at the V18.26 journey specification.
- No new runtime dependency was added for theme transitions; the implementation uses the platform View Transition API with fallback.
