# JYC V24.0.0 — Editorial Centered

## What changed

- Removed the Falcon 3D/WebGL hero layer from the public homepage.
- Removed the obsolete Falcon hero implementation.
- Added a centered, responsive hero grid with the official JYC logo as the primary visual anchor.
- Added restrained logo breathing, orbital rings, soft pulse and pointer-responsive depth.
- Added a final CSS layer for desktop, tablet and mobile alignment.
- Preserved reduced-motion behavior.
- Added README visuals describing the hero and information architecture.
- Updated release metadata to V24.0.0.

## Visual direction

The redesign follows the established beige/black/white identity and takes structural inspiration from institutional JIIT sites: clear hierarchy, event-first content, strong photography and restrained motion. React Bits was used only as an interaction reference; no new animation runtime was added.

## QA checklist

- [x] Public hero no longer mounts the Falcon 3D component.
- [x] Obsolete Falcon source removed.
- [x] Hero content uses a centered max-width grid.
- [x] Logo is visible behind/alongside the hero copy.
- [x] Mobile layout collapses cleanly to one column.
- [x] Reduced-motion behavior is included.
- [x] README includes visual documentation.
- [ ] Run npm install, npm run build and npm run qa in CI/local environment before deployment.
