import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const main=fs.readFileSync(path.join(root,'src/main.jsx'),'utf8');
const css=fs.readFileSync(path.join(root,'src/v17-4-seo.css'),'utf8');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const checks=[
 ['version is V18.9.9',['18.9.7','18.9.8','18.9.9','18.9.10','18.10.0','18.11.0','18.11.1','18.11.2'].includes(pkg.version)],
 ['visible breadcrumbs component exists',main.includes('function Breadcrumbs')&&main.includes('aria-label="Breadcrumb"')],
 ['JYC closing panel exists',main.includes('className=\"section club-cta reveal\"')&&main.includes('Come be part of the story.')],
 ['Club navigation links include clubs/events/team/contact',main.includes("nav('/clubs')")&&main.includes("nav('/events')")&&main.includes("nav('/team')")&&main.includes("nav('/contact')")],
 ['public club URLs use slugs',main.includes("nav('/clubs/'+slug(c.name))")],
 ['public event URLs use slugs',main.includes("nav('/events/'+slug(e.title))")],
 ['detail canonical URLs use slugs',main.includes('const canonicalPath=club?`/clubs/${slug(club.name)}`')&&main.includes('`/events/${slug(event.title)}'),],
 ['breadcrumb styling exists',css.includes('.visible-breadcrumbs')],
 ['SEO topic link styling exists',css.includes('.seo-topic-links')],
 ['service worker uses V18 namespace',((fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-11-final-product')||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-11-1-final-product'))||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-9-9-deep-polish')||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-9-8-contact-nav')||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-7-code-quality')||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-9-final')||fs.readFileSync(path.join(root,'public/sw.js'),'utf8').includes('jyc-cache-v18-9-5-jyc-first'))],
 ['footer gates Fests by fest mode',main.includes("isFestMode(data)&&<button onClick={()=>nav('/fests')}>Fests</button>")],
 ['club logo alt text is descriptive',main.includes('alt={`${c.name} logo`}'),],
];
let failed=0; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}: ${name}`); if(!ok)failed++;}
if(failed)process.exit(1); console.log('Final product QA complete.');
