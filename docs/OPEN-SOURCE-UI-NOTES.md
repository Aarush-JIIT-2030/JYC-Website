# Open-source UI references

JYC V18.10 uses the strongest patterns from earlier JYC UI passes and selectively adapts open-source interaction ideas. The implementation remains owned by the repository rather than depending on a large animation runtime.

## External references reviewed

- React Bits — animated React components and micro-interactions: https://github.com/DavidHDev/react-bits
- shadcn/ui — accessible, copy-owned component patterns: https://github.com/shadcn-ui/ui
- Motion — animation primitives for React/JavaScript: https://github.com/motiondivision/motion
- Foundation Motion UI — CSS/Sass motion patterns: https://github.com/foundation/motion-ui

## Campus/product references reviewed

- IIT Bombay Students' Gymkhana / InstiApp — organizations, events and people as the core student-activity model.
- IIT Kharagpur Technology Students' Gymkhana — committees/communities, events and current council/people.

JYC does not copy those sites. They inform information architecture and interaction priorities only.

## What JYC adapted

- relevance-first search with exact-title dominance
- keyboard-first search and focus states
- editorial card hierarchy and restrained motion
- Phoenix depth/orbit interaction
- three Phoenix doors: Communities / Experiences / People
- custom cursor on precise pointers
- gallery lightbox with keyboard navigation
- calendar source switching between JYC and academic dates
- mobile-first admin navigation
- reduced-motion fallbacks

## Accessibility rule

Decorative motion is reduced or disabled under `prefers-reduced-motion: reduce`. The custom cursor is disabled on coarse/touch pointers so it never replaces the native touch interaction.
