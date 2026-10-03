import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const main=read('src/main.jsx');
const css=read('src/v33-final-public-experience.css');
const v26=read('src/v26-beige-signature.css');
const v28=read('src/v28-editorial-system.css');
const v29=read('src/v29-interaction-polish.css');
const index=read('index.html');
const pkg=JSON.parse(read('package.json'));
const sw=read('public/sw.js');

let pass=0,fail=0;
const check=(name,ok)=>{if(ok){console.log('PASS: '+name);pass++}else{console.error('FAIL: '+name);fail++}};

check('final V33 stylesheet is loaded exactly once',main.match(/import '\.\/v33-final-public-experience\.css';/g)?.length===1);
check('V33 layer is loaded after V32',main.indexOf('v33-final-public-experience.css')>main.indexOf('v32-public-production-overhaul.css'));
check('JYC logo beige is the final public brand anchor',css.includes('--jyc33-brand:#f5d894')&&css.includes('--jyc33-light-bg:#f7f0e4')&&css.includes('--jyc33-dark-bg:#090908'));
check('V33 light/dark theme variables are complete',css.includes('html[data-theme="light"]')&&css.includes('html[data-theme="dark"]')&&css.includes('--jyc33-light-ink:#171411')&&css.includes('--jyc33-dark-ink:#fff9ed'));
check('public cards keep readable secondary text',css.includes('.public-app p,.public-app li,.public-app small')&&css.includes('color:var(--jyc33-muted)!important'));
check('homepage hierarchy is centered',css.includes('.home .hero{')&&css.includes('text-align:center!important')&&css.includes('.home .hero-copy')&&css.includes('justify-items:center!important'));
check('page headers are centered and bounded',css.includes('.compact-page-head')&&css.includes('margin:24px auto 0!important')&&css.includes('text-align:center!important'));
check('mobile layout has compact widths',css.includes('@media(max-width:560px)')&&css.includes('width:calc(100% - 16px)!important'));
check('image treatment uses responsive crop instead of distortion',css.includes('object-fit:cover!important')&&css.includes('object-position:center!important'));
check('reduced-motion remains supported',css.includes('@media(prefers-reduced-motion:reduce)'));
check('public navigation exposes Contact',main.includes("['Contact','/contact']"));
check('official JYC hub content is wired',main.includes('JYC_HUB_CONTENT')&&main.includes('JYC_HUB_FAMILIES'));
check('verified leadership fallback includes faculty and core heads',main.includes('Dr. Vinay Anand Tikkiwal')&&main.includes('Dr. Pankaj Kumar Srivastava')&&main.includes("name:'Harisha'")&&main.includes("name:'Dhruv Choudhary'"));
check('production path does not fabricate demo content',main.includes('allowContentFallback:false')&&main.includes('return norm(empty)'));
check('JYC logo remains the public hero identity',main.includes('hero-logo-stage')&&main.includes('<img src={logo}'));
check('SEO/social preview remains logo-led',index.includes('og:image" content="/jyc-logo-circle.png"')&&index.includes('twitter:image" content="/jyc-logo-circle.png"'));
check('service worker cache is current',sw.includes('jyc-cache-v33-0-0'));
check('release metadata is synchronized',pkg.version==='33.0.0');

if(fail)process.exit(1);
console.log(`V33 public visual QA: ${pass}/${pass+fail} passed.`);
