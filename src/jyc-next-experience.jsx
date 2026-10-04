import React,{useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {JYC_HUB_CONTENT,JYC_HUB_FAMILIES} from './v21-hub-content.js';
import {sourceHubMedia} from './jyc-source-media.js';

const ROUTES=[
 {id:'build',label:'BUILD',kicker:'TECHNICAL · AI · ROBOTICS',text:'Build things that work. Find coding, robotics, AI, open-source and innovation communities.',families:['Technical'],focus:['AI','Robotics','Open Source','Programming','Innovation','Cybersecurity'],accent:'#8d6b42'},
 {id:'create',label:'CREATE',kicker:'CULTURAL · CREATIVE · LITERARY',text:'Make, perform, design, write and tell stories with people who care about craft.',families:['Cultural','Creative','Literary'],focus:['Music','Dance','Drama','Design','Photography','Film','Writing'],accent:'#9a4f3f'},
 {id:'compete',label:'COMPETE',kicker:'SPORTS · ESPORTS · CHALLENGES',text:'Step into tournaments, contests, hackathons and challenges where participation becomes the experience.',families:['Sports','Technical','Cultural'],focus:['Sports','Gaming','Esports','Coding','Hackathon','Competition'],accent:'#6c6656'},
 {id:'connect',label:'CONNECT',kicker:'COMMUNITY · PEOPLE · COLLABORATION',text:'Meet people, join communities, volunteer, coordinate and build the campus together.',families:['Literary','Cultural','Creative','Technical','Sports'],focus:['Community','Leadership','Collaboration','Events'],accent:'#5c6570'}
];

const normal=v=>String(v||'').toLowerCase();
const routeMatch=(club,route)=>{
 const hay=normal([club?.name,club?.category,club?.type,club?.description,club?.about,(club?.interests||[]).join(' ')].join(' '));
 const family=String(club?.family||'');
 return route.families.includes(family)||route.focus.some(x=>hay.includes(normal(x)));
};

function RouteCard({route,clubs,onOpen}){
 const matches=clubs.filter(c=>routeMatch(c,route)).slice(0,4);
 return <article className="jyc-route-card" style={{'--route-accent':route.accent}}>
  <div className="jyc-route-top"><span className="jyc-route-index">{route.label[0]}</span><span className="eyebrow">{route.kicker}</span></div>
  <h3>{route.label}</h3><p>{route.text}</p>
  <div className="jyc-route-hubs">{matches.map(c=><button type="button" key={c.id||c.name} onClick={()=>onOpen(c)}>{c.name}<b>↗</b></button>)}</div>
  <div className="jyc-route-footer"><span>{matches.length ? 'Suggested communities' : 'Explore the ecosystem'}</span><button type="button" onClick={()=>onOpen()}>{matches.length?'See route →':'Browse all clubs →'}</button></div>
 </article>
}

export function ChooseYourRoute({data}){
 const nav=useNavigate();
 const [active,setActive]=useState('build');
 const clubs=useMemo(()=>Array.isArray(data?.clubs)?data.clubs.filter(c=>c?.published&&c?.status!=='archived'):[],[data?.clubs]);
 const route=ROUTES.find(x=>x.id===active)||ROUTES[0];
 const openClub=c=>c?nav('/clubs/'+encodeURIComponent(c.id||c.name)):nav('/clubs');
 return <section id="routes" className="section jyc-route-section reveal">
  <div className="jyc-route-head"><div><span className="eyebrow">CHOOSE YOUR ROUTE</span><h2>Start with what you want to make.</h2><p>JYC is bigger than a list of clubs. Choose a direction and discover the communities that fit it.</p></div><div className="jyc-route-switcher" role="tablist" aria-label="JYC routes">{ROUTES.map(r=><button key={r.id} type="button" role="tab" aria-selected={active===r.id} className={active===r.id?'active':''} onClick={()=>setActive(r.id)}>{r.label}</button>)}</div></div>
  <div className="jyc-route-grid">{ROUTES.map(r=><div key={r.id} hidden={active!==r.id}><RouteCard route={r} clubs={clubs} onOpen={openClub}/></div>)}</div>
  <div className="jyc-route-note"><span>01</span><p><strong>Not sure yet?</strong> Browse the complete JYC directory and let the community pages lead you from one interest to another.</p><button type="button" onClick={()=>nav('/clubs')}>Open all communities ↗</button></div>
 </section>
}

export function PhotoStory({data}){
 const nav=useNavigate();
 const [active,setActive]=useState(0);
 const items=useMemo(()=>{
  const raw=(Array.isArray(data?.gallery)?data.gallery:[]).filter(g=>g?.url&&g?.published!==false);
  const preferred=[...raw.filter(g=>/Converge|Dron-O-War|Ebullience|JAI|JYC Archive/i.test(String(g.association||''))),...raw];
  const seen=new Set();
  return preferred.filter(g=>{const key=g.id||g.url;if(seen.has(key))return false;seen.add(key);return true}).slice(0,8);
 },[data?.gallery]);
 if(!items.length)return null;
 const current=items[Math.min(active,items.length-1)];
 return <section id="photo-story" className="section jyc-photo-story-section reveal">
  <div className="jyc-photo-story-head"><div><span className="eyebrow">PHOTO STORY · JYC ARCHIVE</span><h2>Let the photographs tell the story.</h2><p>Real JYC media becomes the narrative layer: event, people, place, performance and work.</p></div><button type="button" className="reference-view-all" onClick={()=>nav('/gallery')}>Open visual archive ↗</button></div>
  <div className="jyc-photo-story">
   <div className="jyc-photo-story-stage"><img src={current.url} alt={current.alt||current.caption||'JYC visual archive moment'} loading={active===0?'eager':'lazy'}/><div className="jyc-photo-story-caption"><span>{String(active+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span><div><small>{current.association||'JYC Archive'} · {current.year||'JYC'}</small><strong>{current.caption||'JYC moment'}</strong></div></div></div>
   <div className="jyc-photo-story-rail" aria-label="Photo story moments">{items.map((item,i)=><button type="button" key={item.id||item.url||i} className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={'Open photo '+(i+1)}><span>{String(i+1).padStart(2,'0')}</span><img src={item.url} alt="" loading="lazy"/><b>{(item.caption||item.association||'JYC moment').split(' · ')[1]||item.association||'JYC moment'}</b></button>)}</div>
  </div>
 </section>
}

export function HubSignalRail({data}){
 const nav=useNavigate();
 const hubs=useMemo(()=>Object.entries(JYC_HUB_CONTENT).slice(0,10).map(([name,p])=>({name,...p,media:sourceHubMedia(name)})),[]);
 return <section className="section jyc-hub-signal-section reveal"><div className="jyc-hub-signal-head"><div><span className="eyebrow">JYC ECOSYSTEM</span><h2>Five families. One connected campus.</h2><p>Move from a family into a hub, then from a hub into its people, events and visual record.</p></div><button type="button" className="reference-view-all" onClick={()=>nav('/clubs')}>Explore all {Object.keys(JYC_HUB_CONTENT).length} communities ↗</button></div><div className="jyc-hub-signal-grid">{hubs.map((h,i)=><button type="button" className="jyc-hub-signal-card" key={h.name} onClick={()=>nav('/clubs/'+encodeURIComponent(h.name))}><div>{h.media.photos[0]?<img src={h.media.photos[0]} alt="" loading="lazy"/>:<span>{String(i+1).padStart(2,'0')}</span>}</div><small>{h.family} · {h.focus}</small><strong>{h.name}</strong><em>{h.summary}</em><b>Open hub ↗</b></button>)}</div></section>
}
