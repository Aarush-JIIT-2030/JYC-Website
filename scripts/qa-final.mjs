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
 ['ecosystem context rail selects across JYC families',main.includes('JYC_HUB_FAMILIES.map(family')&&main.includes('sourceHubMedia(name).photoItems')],
 ['public copy uses maintained 23-community count',!main.includes('names 21 communities')],
 ['JAI event fallback uses local committed artwork',main.includes("poster:'/assets/events/agentic-ai-2026.webp'")],
 ['photo archive source selectors use multiple frames',main.includes('photoItems.slice(0,5)')&&main.includes('photoItems.slice(0,6)')&&main.includes('photoItems.slice(0,10)')&&main.includes('photoItems.slice(0,12)')],
 ['photo story has automatic transition controls',main.includes('setInterval(()=>setActive')&&main.includes('jyc-photo-story-autoplay')&&extraPublicCss.includes('jyc-photo-story-transition')&&extraPublicCss.includes('prefers-reduced-motion')],
 ['Supplied archive years are event-specific when present',pdfHub.split('\n').filter(line=>line.includes("year:'2026'")).every(line=>/Converge|Dron-O-War/.test(line))]
);

const publicAssets=path.join(root,'public','assets');
function walk(dir){if(!fs.existsSync(dir))return [];return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const assetFiles=walk(publicAssets).filter(p=>/\.(webp|png|jpe?g|avif|gif|svg)$/i.test(p));
const assetTextFiles=['src/main.jsx','src/jyc-next-experience.jsx','src/jyc-source-media.js','src/pdf-hub-content.js','src/pdf-hub-extra.js','src/v21-hub-content.js','src/jyc-assistant.jsx'].map(p=>fs.readFileSync(path.join(root,p),'utf8')).join('\n');
const assetRefs=new Set([...assetTextFiles.matchAll(/\/assets\/[^'"\s)]+/g)].map(m=>m[0]));
const assetRel=new Set(assetFiles.map(p=>p.slice(path.join(root,'public').length).replaceAll('\\\\','/')));
const missingReferencedAssets=[...assetRefs].filter(ref=>!assetRel.has(ref));
checks.push(['all explicitly referenced public assets exist',missingReferencedAssets.length===0]);
let failed=0; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}: ${name}`); if(!ok)failed++;}
if(failed)process.exit(1); console.log('Final product QA complete.');
