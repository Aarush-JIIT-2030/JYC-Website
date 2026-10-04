// Supabase API-key compatibility helper for Edge Functions.
// Prefer the current named publishable/secret key maps; retain legacy fallback
// during Supabase's 2026 key transition so existing deployments keep working.
function readNamedKey(envName, fallbackEnv){
  const raw=Deno.env.get(envName);
  if(raw){
    try{
      const parsed=JSON.parse(raw);
      if(parsed?.default) return parsed.default;
    }catch{}
  }
  return Deno.env.get(fallbackEnv)||'';
}
export const getPublishableKey=()=>readNamedKey('SUPABASE_PUBLISHABLE_KEYS','SUPABASE_ANON_KEY');
export const getSecretKey=()=>readNamedKey('SUPABASE_SECRET_KEYS','SUPABASE_SERVICE_ROLE_KEY');
