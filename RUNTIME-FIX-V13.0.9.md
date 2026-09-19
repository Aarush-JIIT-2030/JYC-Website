# JYC V13.0.9 — Runtime Fix

## Why the browser showed the error

The browser error `Element type is invalid. Received a promise that resolves to: undefined` is from an older/stale client bundle. The current source has no `React.lazy()` component imports. V13.0.9 moves the mobile dock and search sheet outside the filtered/sticky navbar and adds a localhost service-worker/cache preflight so old development bundles cannot be served back by an old service worker.

The separate Supabase `404` for `jyc_read_site_data` is a database deployment issue: the function exists in this repository but was not present in the connected project when the screenshot was taken.

## Fastest Supabase repair

1. Open the Supabase SQL Editor for the JYC project.
2. Run `supabase/REPAIR-MISSING-RPCS.sql` if the base JYC tables already exist.
3. For a complete/reproducible setup, run `supabase/PRODUCTION-BOOTSTRAP-ALL.sql` once instead.
4. Refresh the local website with a hard reload.

## Development refresh

Stop old Vite processes, then from the project folder:

```powershell
npm install
npm run build
npm run dev
```

Open `http://localhost:5173/`, then hard-refresh the page. The HTML now clears localhost service workers/caches before the React module loads.

## Role-management repair

V13.0.9 also updates the save RPC permissions so the editor workspaces that were visible but not writable are aligned:
- JYC Editor: clubs, events, gallery, categories and academic-calendar visibility
- Clubs Admin: clubs and categories
- Content Admin: homepage, team, fest and academic-calendar visibility

The public academic calendar remains separate from JYC-created events and respects the stored visibility flags.
