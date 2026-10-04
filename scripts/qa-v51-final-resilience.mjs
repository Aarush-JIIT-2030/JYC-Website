import fs from 'node:fs';

const failures=[];
const read=p=>fs.readFileSync(p,'utf8');
const check=(name,ok)=>{console.log((ok?'PASS':'FAIL')+': '+name);if(!ok)failures.push(name)};

const pkg=JSON.parse(read('package.json'));
const lock=JSON.parse(read('package-lock.json'));
const bot=read('src/jyc-bot.jsx');
const sw=read('public/sw.js');
const qa=read('scripts/qa-production.mjs');
const publicCss=read('src/styles/public-system.css');
const main=read('src/main.jsx');

check('release metadata is V51',pkg.version==='51.0.0'&&lock.version==='51.0.0'&&lock.packages?.['']?.version==='51.0.0');
check('service worker cache is V51',sw.includes("jyc-cache-v51-0-0")&&!sw.includes("jyc-cache-v49-0-0"));
check('3D model viewer is interaction-loaded',bot.includes('loadModelViewer')&&bot.includes('onPointerEnter={loadModelViewer}')&&bot.includes('onFocus={loadModelViewer}')&&!/useEffect\(\(\)=>\{[^}]*document\.createElement\('script'\)/s.test(bot));
check('3D model remains fixed and non-rotating',bot.includes('camera-orbit="0deg 75deg auto"')&&bot.includes('disable-zoom'));
check('assistant still opens immediately on bot click',bot.includes('setAssistantOpen(true)')&&bot.includes('onClick={openAssistant}');
check('production QA accepts a generated sitemap',qa.includes('Generated sitemap uses the configured production origin')&&qa.includes('Sitemap will be generated during the production build'));
check('JYC palette remains the public design contract',publicCss.includes('--jyc-bg: #f8f1e4')&&publicCss.includes('--jyc-accent: #a47b43'));
check('JYC Now remains public and mounted',main.includes("from './jyc-now.jsx'")&&main.includes('<JYCNowStrip data={data}/>'));
check('rejected cursor/orbit systems stay disabled',main.includes('JYCNowStrip')&&publicCss.includes('prefers-reduced-motion'));

if(failures.length){console.error('V51 FINAL RESILIENCE QA FAIL');failures.forEach(x=>console.error('FAIL:',x));process.exit(1)}
console.log('V51 FINAL RESILIENCE QA PASS');
