import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const main=read('src/main.jsx');
const css=read('src/v26-beige-signature.css');
const index=read('index.html');
const pkg=JSON.parse(read('package.json'));
const extra=read('src/extra-features.jsx');
const sw=read('public/sw.js');

let pass=0,fail=0;
const check=(name,ok)=>{
  if(ok){console.log(`PASS: ${name}`);pass++}
  else{console.error(`FAIL: ${name}`);fail++}
};

check('V26 stylesheet is the last public visual import',main.includes("import './jyc-editorial-centered.css';")&&main.includes("import './v26-beige-signature.css';")&&main.indexOf("v26-beige-signature.css")>main.indexOf("jyc-editorial-centered.css"));
check('homepage uses a compact curated layout',main.includes("layout:['intro','agentic','events','clubs','moments','team','cta']")&&main.includes('const baseLayout=[...new Set(normalizedLayout.filter(x=>render[x]))]'));
check('Moments is rendered once through the layout',!main.includes('<div className="home-photo-story"><MomentsSection data={data}/></div>')&&main.includes('moments:<MomentsSection data={data}/>'));
check('fest-style event spotlight is data-driven',main.includes('jyc-festival-index')&&main.includes('jyc-feature-event')&&main.includes('featured.poster'));
check('homepage event discovery has interactive families',main.includes("eventFilter")&&main.includes("filteredEvents")&&main.includes("setEventFilter"));
check('homepage club discovery has interactive categories',main.includes("clubFilter")&&main.includes("filteredClubs")&&main.includes("setClubFilter"));
check('homepage exposes live/next event state',main.includes('jyc-now-strip')&&main.includes("eventState(e)==='live'")&&main.includes("'NEXT UP'"));
check('legacy ecosystem bird identity is replaced by JYC logo',main.includes('ecosystem-logo-only')||main.includes('jyc-logo-circle.png'));
check('gallery visibility controls Moments',main.includes("(x==='moments'&&h.showGallery===false)"));
check('gallery maps to the single moments section',main.includes("x==='gallery'?'moments'")&&main.includes("moments:<MomentsSection data={data}/>"));
check('hero contains the JYC logo, not a 3D bird',main.includes('hero-logo-stage')&&main.includes('<img src={logo}')&&!main.includes('Falcon3DLayer')&&!main.includes('v23.7-falcon-3d.jsx'));
check('team identity uses the JYC logo',main.includes('team-hero-identity')&&main.includes('team-closeout-mark')&&!main.includes('team-hero-bird'));
check('assistant does not auto-open on page load',!main.includes("window.setTimeout(()=>window.dispatchEvent(new CustomEvent('jyc-open-agentic'))"));
check('legacy atmospheric decoration is hidden',css.includes('.public-app .site-atmosphere')&&css.includes('.public-app .constellation-field'));
check('no Phoenix artwork is used for social previews',index.includes('og:image" content="/jyc-logo-circle.png"')&&index.includes('twitter:image" content="/jyc-logo-circle.png"'));
check('V26 palette is beige + neutral black/white',css.includes('--jyc-beige:#a47b43')&&css.includes('--jyc-black:#090909')&&css.includes('--jyc-white:#fffdf8'));
check('homepage hero is compact and responsive',css.includes('min-height:calc(100svh - 72px)')&&css.includes('@media(max-width:700px)'));
check('moment gallery prevents empty image space',css.includes('grid-auto-rows:145px')&&css.includes('object-fit:cover'));
check('legacy public bird/orbit layers are disabled',css.includes('.public-app .team-hero-bird')&&css.includes('.public-app .phoenix-model-viewer{display:none!important}'));
check('live assistant does not depend on deleted 3D assets',!main.includes('model-viewer')&&!main.includes('1780401615106-dmagefsj.glb')&&!main.includes('useModelViewerLoader'));
check('production data does not inject demo content when Supabase is configured',main.includes('allowContentFallback:false')&&main.includes('return mergePublicFallback(stripLegacySeed(data||empty),{allowContentFallback:false})'));
check('runtime metadata uses JYC logo rather than Phoenix artwork',extra.includes('jyc-logo-circle.png')&&!extra.includes('jyc-phoenix-reference-hd.png'));
check('service worker cache is versioned for V26.3 and logo-led',sw.includes('jyc-cache-v26-3-0')&&sw.includes('/jyc-logo-circle.png')&&!sw.includes('/jyc-phoenix-reference-hd.png'));
check('reduced motion remains supported',css.includes('@media(prefers-reduced-motion:reduce)'));
check('Agentic AI 2026 content is complete',main.includes('Cybersecurity')&&main.includes('Healthcare')&&main.includes('Natural Language Processing')&&main.includes('Open Innovation')&&main.includes('discord.gg/K6vrFAhMA')&&main.includes('unstop.com/o/XAfa40i'));
check('About section exposes the five-family ecosystem',main.includes('home-about-ecosystem')&&main.includes('FIVE FAMILIES · 21 COMMUNITIES'));
check('assistant is theme-safe in dark mode',css.includes('.assistant-panel-modern')&&css.includes('html[data-theme="dark"] .assistant-panel-modern')&&css.includes('.assistant-search'));
check('loading screen keeps the JYC logo and responsive boot state',main.includes('loading-mark')&&main.includes('loading-tagline')&&css.includes('.loading-mark img'));
check('release version is V26.3',pkg.version==='26.3.0');

if(fail)process.exit(1);
console.log(`V26 BEIGE SIGNATURE QA: ${pass}/${pass+fail} passed.`);
