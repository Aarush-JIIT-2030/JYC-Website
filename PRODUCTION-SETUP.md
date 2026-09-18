# JYC Production Setup

## Database

Run these files in Supabase SQL Editor, in order:

1. `supabase/00-core-migration.sql`
2. `supabase/relational-v2.sql`
3. `supabase/platform-v3.sql`
4. `supabase/platform-v4-fix.sql`
5. `supabase/final-role-hardening.sql`

For an existing development project that still shows the accidental starter club **Abhivyakti**, run:

```text
supabase/maintenance/00-remove-legacy-demo-data.sql
```

Do this before adding real club content.

## Edge Functions

Deploy:

```bash
supabase functions deploy admin-management
supabase functions deploy send-notification
supabase functions deploy backup-site-data
```

Privileged secrets belong only in Supabase Edge Function secrets.

## Web Push

Set the browser-side public VAPID key:

```text
VITE_VAPID_PUBLIC_KEY=...
```

Set private VAPID values as Supabase secrets:

```bash
supabase secrets set VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... VAPID_SUBJECT=mailto:jyc.website@gmail.com
```

## Local verification

```bash
npm.cmd install
npm.cmd run build
npm.cmd run dev
```

Verify:

- `/`
- `/about`
- `/clubs`
- `/events`
- `/gallery`
- `/team`
- `/contact`
- `/admin`

Also test one complete Club Admin flow and one Super Admin flow before deployment.

## Vercel

Add:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_VAPID_PUBLIC_KEY (when push is enabled)
```

Do not add service-role or secret keys to Vercel frontend variables.

## Final launch checklist

- [ ] No legacy/demo club is visible.
- [ ] Super Admin can log in.
- [ ] Admin permissions match `ADMIN-ROLE-MATRIX.md`.
- [ ] Homepage copy and layout can be edited.
- [ ] Club pages render correctly.
- [ ] Event publish flow works.
- [ ] Gallery uploads work.
- [ ] Fest Mode preview works before activation.
- [ ] Mobile layout works.
- [ ] `npm run build` passes.
- [ ] GitHub Actions passes.
- [ ] Vercel deployment works.
