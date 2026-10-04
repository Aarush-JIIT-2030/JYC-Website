import fs from 'node:fs';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const main=read('src/main.jsx');
const next=read('src/jyc-next-experience.jsx');
const bot=read('src/jyc-bot.jsx');
const assistant=read('src/jyc-assistant.jsx');
const css=read('src/styles/jyc-next-experience.css');
const checks=[
 ['next experience module exists',next.includes('export function ChooseYourRoute')&&next.includes('export function PhotoStory')&&next.includes('export function HubSignalRail')],
 ['homepage imports next experience',main.includes("from './jyc-next-experience.jsx'")],
 ['route discovery is mounted',main.includes('routes:<ChooseYourRoute data={data}/>')],
 ['photo story is mounted',main.includes('photoStory:<PhotoStory data={data}/>')],
 ['hub signal rail is mounted',main.includes('hubSignal:<HubSignalRail data={data}/>')],
 ['homepage ordering is route-first',main.includes("const ordered=['intro','ecosystem','routes','hubSignal','updates','live','photoStory','agentic'")],
 ['bot context labels exist',bot.includes('Explore hubs')&&bot.includes('Find an event')&&bot.includes('Explore archive')],
 ['bot stays above mobile dock',bot.includes('bottom:calc(78px + env(safe-area-inset-bottom))')],
 ['assistant quick routes are contextual',assistant.includes("context==='clubs'")&&assistant.includes("context==='events'")&&assistant.includes("context==='gallery'")],
 ['photo story uses published media',next.includes("g?.published!==false")],
 ['route discovery uses five-family ecosystem',next.includes("JYC_HUB_CONTENT")&&next.includes("Technical")&&next.includes("Cultural")],
 ['new CSS is loaded',read('src/styles/public-system.css').includes("@import './jyc-next-experience.css';")],
 ['new layer avoids neon/glass/orbit language',!/neon|orbit-ring|glassmorphism/i.test(css)]
];
let failed=0;
for(const [name,ok] of checks){console.log((ok?'PASS':'FAIL')+': '+name);if(!ok)failed++}
if(failed){console.error('JYC V54 NEXT EXPERIENCE QA FAILED: '+failed);process.exit(1)}
console.log('JYC V54 NEXT EXPERIENCE QA PASS');
