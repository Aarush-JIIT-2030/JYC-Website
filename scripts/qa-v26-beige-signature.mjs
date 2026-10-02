import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const main=read('src/main.jsx');
const css=read('src/v26-beige-signature.css');
const index=read('index.html');
const pkg=JSON.parse(read('package.json'));

let pass=0,fail=0;
const check=(name,ok)=>{
  if(ok){console.log(`PASS: ${name}`);pass++}
  else{console.error(`FAIL: ${name}`);fail++}
};

check('V26 stylesheet is the last public visual import',main.includes("import './jyc-editorial-centered.css';")&&main.includes("import './v26-beige-signature.css';")&&main.indexOf("v26-beige-signature.css")>main.indexOf("jyc-editorial-centered.css"));
check('homepage uses a compact curated layout',main.includes("layout:['intro','events','clubs','moments','team','cta']")&&main.includes("const layout=[...new Set(normalizedLayout.filter(x=>render[x]))]"));
check('Moments is rendered once through the layout',!main.includes('<div className="home-photo-story"><MomentsSection data={data}/></div>')&&main.includes('moments:<MomentsSection data={data}/>'));
check('fest-style event spotlight is data-driven',main.includes('jyc-festival-index')&&main.includes('jyc-feature-event')&&main.includes('featured.poster'));
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
check('reduced motion remains supported',css.includes('@media(prefers-reduced-motion:reduce)'));
check('release version is V26',pkg.version==='26.0.0');

if(fail)process.exit(1);
console.log(`V26 BEIGE SIGNATURE QA: ${pass}/${pass+fail} passed.`);
