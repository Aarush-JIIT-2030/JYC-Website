import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const checks=[];
const pass=(label)=>{checks.push([true,label]);console.log(`PASS: ${label}`)};
const fail=(label)=>{checks.push([false,label]);console.error(`FAIL: ${label}`)};

const vercel=read('vercel.json');
if(/https:\/\/[^*\s]+\.supabase\.co/.test(vercel)) fail('Vercel CSP does not hard-code a single Supabase project'); else pass('Vercel CSP is deployable across Supabase projects');
if(vercel.includes('X-Content-Type-Options')&&vercel.includes('X-Frame-Options')&&vercel.includes('Referrer-Policy')) pass('Baseline security headers present'); else fail('Baseline security headers incomplete');
if(vercel.includes('Strict-Transport-Security')) pass('HSTS header present'); else fail('HSTS header missing');
const robots=read('public/robots.txt');
if(!/^Sitemap:/mi.test(robots)) pass('Robots file intentionally waits for production domain'); else fail('Robots file contains a stale sitemap URL');
const sitemap=path.join(root,'public','sitemap.xml');
if(fs.existsSync(sitemap)) fail('Sitemap is not committed with a placeholder production origin'); else pass('No fake production sitemap committed');
const env=read('.env.example');
if(env.includes('VITE_SITE_URL=')) pass('Production canonical origin is explicitly configurable'); else fail('VITE_SITE_URL missing');
if(read('src/main.jsx').includes('unknownRoute')&&read('src/main.jsx').includes('noindex:privateRoute||unknownRoute')) pass('Unknown SPA routes are marked noindex'); else fail('Unknown SPA routes can be indexed');
if(read('src/extra-features.jsx').includes("if(item.date&&item.end)eventGraph.endDate")) pass('Event schema does not invent an end time'); else fail('Event schema end time fallback remains');
const failed=checks.filter(x=>!x[0]);
if(failed.length){process.exitCode=1;console.error(`Production preflight failed: ${failed.length} check(s)`)}else console.log(`Production preflight complete: ${checks.length} checks passed`);
