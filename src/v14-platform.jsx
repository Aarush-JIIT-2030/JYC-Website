import React,{useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';

export function InteractivePhoenix({sceneUrl='',stats={}}){
  const nav=useNavigate();
  const spline=String(sceneUrl||'').startsWith('https://prod.spline.design/');
  const nodes=[
    ['CLUBS','/clubs','node-one'],
    ['EVENTS','/events','node-two'],
    ['TEAM','/team','node-three']
  ];
  return <div className="phoenix-3d-stage phoenix-calm-stage" aria-label="JYC Phoenix navigation">
    {spline&&<iframe className="phoenix-spline" title="Interactive JYC Phoenix" src={sceneUrl} loading="lazy"/>}
    <div className="phoenix-calm-glow" aria-hidden="true"/>
    <div className="phoenix-orbital-system" aria-hidden="true"><span className="phoenix-orbit phoenix-orbit-a"/><span className="phoenix-orbit phoenix-orbit-b"/><span className="phoenix-orbit phoenix-orbit-c"/><i className="phoenix-orb phoenix-orb-a"/><i className="phoenix-orb phoenix-orb-b"/><i className="phoenix-orb phoenix-orb-c"/><i className="phoenix-orb phoenix-orb-d"/></div>
    <div className="phoenix-3d-core phoenix-bird-only">
      <span className="phoenix-halo"/>
      <div className="phoenix-artwork" aria-hidden="true"><img src="/jyc-phoenix-reference-hd.png" alt=""/></div>
    </div>
    <div className="phoenix-door-rail" aria-label="JYC destinations">{nodes.map(([label,path,cls])=><button key={label} type="button" className={`phoenix-node ${cls}`} onClick={()=>nav(path)} aria-label={`Explore ${label.toLowerCase()}`}><span>{label}</span><em>Explore →</em></button>)}</div>
  </div>
}

export function EcosystemSection({data}){
  const nav=useNavigate();
  const [active,setActive]=useState('');
  const clubs=data.clubs.filter(c=>c.published&&c.status!=='archived').length;
  const events=data.events.filter(e=>e.published&&!e.archived).length;
  const people=data.team.filter(m=>m.published===true).length;
  const nodes=[['clubs','CLUBS',Math.max(clubs,25),'/clubs'],['events','EVENTS',events,'/events'],['my-jyc','MY JYC',0,'/my-jyc'],['team','TEAM',people,'/team']];
  return <section className="section ecosystem-section reveal">
    <div className="section-head ecosystem-head"><span className="eyebrow">JYC ECOSYSTEM</span><h2>One campus. Many possibilities.</h2><p>Four useful routes around one JYC centre — explore a community, an experience, your saved space or the people behind it.</p></div>
    <div className={`ecosystem-orbit ecosystem-active-${active||'none'}`}>
      <span className="ecosystem-connector ecosystem-connector-0" aria-hidden="true"/>
      <span className="ecosystem-connector ecosystem-connector-1" aria-hidden="true"/>
      <span className="ecosystem-connector ecosystem-connector-2" aria-hidden="true"/>
      <span className="ecosystem-connector ecosystem-connector-3" aria-hidden="true"/>
      <div className="ecosystem-core-wrap">
        <button className="ecosystem-core ecosystem-core-action" onClick={()=>nav('/about')} aria-label="Open About JYC" onMouseEnter={()=>setActive('core')} onMouseLeave={()=>setActive('')}>
          <div className="ecosystem-brand-lockup ecosystem-bird-only"><img src="/jyc-phoenix-reference-hd.png" alt="JIIT Youth Club phoenix"/></div>
          <span>JYC</span>
        </button>
      </div>
      {nodes.map(([id,label,count,path],i)=><div key={id} className={`ecosystem-orbit-node ecosystem-orbit-node-${i}`}>
        <button className={`ecosystem-node ecosystem-node-${i} ${active===id?'is-active':''}`} onClick={()=>nav(path)} onMouseEnter={()=>setActive(id)} onMouseLeave={()=>setActive('')} onFocus={()=>setActive(id)} onBlur={()=>setActive('')}>
          <small>{count>0?`${count}${count===25?'+':''}`:'—'}</small><strong>{label}</strong><em>Explore →</em>
        </button>
      </div>)}
    </div>
  </section>
}

export function MomentsSection({data}){
  const nav=useNavigate();
  const items=data.gallery.slice(0,5);
  return <section className="section moments-section reveal"><div className="reference-section-head"><div><span className="eyebrow">JYC MOMENTS</span><h2>Real moments. Real campus.</h2><p>The visual archive grows from photos actually published by JYC.</p></div></div>{items.length?<div className="moments-editorial">{items.map((g,i)=><button key={g.id||i} className={`moment-tile moment-${i}`} onClick={()=>nav('/gallery')}><img src={g.url} loading="lazy" alt={g.caption||'JYC moment'}/><span><small>{g.association||'JYC'}</small><strong>{g.caption||'JYC moment'}</strong></span></button>)}</div>:<div className="moments-empty"><span className="eyebrow">VISUAL ARCHIVE</span><h2>Moments will appear here as JYC publishes them.</h2><p>No synthetic imagery is used as a substitute for official campus moments.</p></div>}</section>
}
