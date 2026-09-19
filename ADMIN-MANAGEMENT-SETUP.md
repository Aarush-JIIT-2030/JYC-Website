# JYC Admin Management — one-time deployment

The Admin Management UI is included in the project. It requires the Supabase Edge Function `admin-management` because browser code must never hold the Supabase service-role key.

## Windows

From the project root in PowerShell:

```powershell
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase functions deploy admin-management
```

Or run:

```powershell
.\deploy-admin-management.ps1
```

## Function origin security

The function accepts the production Vercel domain used by this project plus localhost by default. If your deployment uses a different domain, configure:

```powershell
npx supabase secrets set SITE_ORIGINS="https://your-domain.com,http://localhost:5173"
```

Then redeploy the function.

## Required server secrets

Supabase supplies the project URL and keys to Edge Functions in the normal Supabase runtime. The function requires the service-role secret server-side; it is never included in the frontend bundle.

## What Admin Management supports

- list current JYC administrators
- invite an administrator by email
- assign JYC Editor / Club Admin / functional admin roles
- assign Club Admin to a specific club
- deactivate and restore access
- protect the last active Super Admin
- prevent a Super Admin from removing their own Super Admin access

The public website and the rest of the Control Center do not depend on this function.

> CORS note: the Edge Function uses bearer-token authentication and therefore does not depend on a fixed Vercel hostname. This keeps preview deployments working too.
