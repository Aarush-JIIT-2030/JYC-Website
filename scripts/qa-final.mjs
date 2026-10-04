import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const main=fs.readFileSync(path.join(root,'src/main.jsx'),'utf8');
const css=fs.readFileSync(path.join(root,'src/styles/public-system.css'),'utf8');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const checks=[
 ['release version is current V55+ line',/^5[5-9]\\.\\d+\\.\\d+$/.test(pkg.version)],
 ['visible breadcrumbs component exists',main.includes('function Breadcrumbs')&&main.includes('aria-label="Breadcrumb"')],
 ['public home has closing CTA contract',main.includes("key='cta'")&&main.includes('Ready to soar')],
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

const extraPublicCss=fs.readFileSync(path.join(root,'src/styles/jyc-v56-final-system.css'),'utf8');
const extraFeatures=fs.readFileSync(path.join(root,'src/extra-features.jsx'),'utf8');
const pdfHub=fs.readFileSync(path.join(root,'src/pdf-hub-content.js'),'utf8');
checks.push(
 ['final V56 public system is imported',css.includes("jyc-v56-final-system.css")],
 ['Gallery lightbox has useRef import',/import React,\{[^}]*useRef/.test(extraFeatures)&&extraFeatures.includes('useRef(null)')],
 ['final public system has mobile photo breakpoints',extraPublicCss.includes('@media(max-width:620px)')&&extraPublicCss.includes('.gallery-grid')],
 ['generic supplied archive photos do not carry inferred 2026 years',!pdfHub.split('\n').some(line=>line.includes("association:'JYC Archive'")&&line.includes("year:'2026'"))],
 ['Supplied archive years are event-specific when present',pdfHub.split('\n').filter(line=>line.includes("year:'2026'")).every(line=>/Converge|Dron-O-War/.test(line))]
);
let failed=0; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}: ${name}`); if(!ok)failed++;}
if(failed)process.exit(1); console.log('Final product QA complete.');
