# JYC Website V17.0.0 — Reliability & Experience

## What changed

### Interaction reliability
- Added a global accessible confirmation dialog for destructive actions.
- Replaced browser-native confirmation/alert UX in the touched public/admin workflows with JYC-native UI feedback.
- Club deletion, event deletion, gallery deletion, administrator access removal and student registration cancellation now require deliberate confirmation.
- Added a shared toast event bridge for feature modules.

### Admin safety
- Release QA now fails if native `alert()` / `confirm()` calls remain in source.
- Critical RLS declarations are checked by release QA.
- Existing role-aware Supabase/RPC boundaries remain the security authority; UI hiding is not treated as authorization.

### Platform hygiene
- Version: `17.0.0`.
- Service-worker cache namespace bumped to `jyc-cache-v17-platform` so the V16.3 shell cannot remain pinned in returning browsers.
- Added `qa:release` and optional `qa:browser` commands.
- Added a full browser QA matrix covering public, student and admin workflows.

## Verification completed in this environment

`npm run qa` passes:
- functional utility smoke tests
- route checks
- CSS/import integrity
- asset references
- private-key marker scan
- service-worker cache validation
- release interaction checks
- critical RLS declaration checks

`npm run build` could not be executed here because the available environment does not contain a complete Vite dependency installation. Run `npm install && npm run build` locally/CI before deployment.

## Scope discipline

V17 intentionally does not add social feeds, chat, gamification, an AI chatbot, new primary navigation or unnecessary 3D/animation systems. The goal is to make the existing JYC platform safer, clearer and more dependable.
