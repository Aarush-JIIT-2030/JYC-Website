$ErrorActionPreference = "Stop"
Write-Host "JYC - deploying admin-management Edge Function" -ForegroundColor Cyan
Write-Host "Using the project-local Supabase CLI via npx." -ForegroundColor Gray
npx supabase --version
npx npx supabase functions deploy admin-management
Write-Host "" 
Write-Host "If your Vercel domain is not jyc-website-livid.vercel.app, set SITE_ORIGINS in Supabase Function secrets to your production origin (comma-separated)." -ForegroundColor Yellow
Write-Host "Example: https://your-domain.com,http://localhost:5173" -ForegroundColor Yellow
Write-Host "Admin Management is now ready. Refresh /admin -> Admins." -ForegroundColor Green
