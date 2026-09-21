# V18.27.0 — JYC Restoration Pass

A focused visual restoration after V18.26: the public JYC experience keeps the V15/V17 identity while correcting the light theme, ecosystem composition, mobile page header and theme transition.

## Changes
- Light mode is paper/beige-first; red is reserved for the Phoenix artwork rather than UI chrome.
- Ecosystem cards are upright, balanced and readable instead of continuously rotating around the Phoenix.
- Mobile page breadcrumbs/compact page heads are rebuilt to avoid the clipped/oversized club header composition.
- Theme switching uses the native View Transition API with a slower editorial cross-fade.
- Added a local inline SVG Phoenix/bird with independently animated wings and a curved left-to-right flight path.
- Reduced-motion users receive an instant theme change without flight animation.
- Service-worker cache namespace bumped to `jyc-cache-v18-27-0-restoration`.
