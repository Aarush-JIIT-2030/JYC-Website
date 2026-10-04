export const JYC_HUB_SOURCE_REGISTRY = [
  {name:'Aakriti',family:'Creative',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Abhivyakti',family:'Creative',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Aura',family:'Creative',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'BDS',family:'Cultural',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'CICR',family:'Technical',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Cinekala',family:'Creative',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Eloquence',family:'Literary',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Fortissimo',family:'Cultural',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Innovation Club',family:'Technical',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'JIIT OPTICA',family:'Technical',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'JODC',family:'Technical',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'JSA',family:'Sports',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Panache',family:'Cultural',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Prismatic',family:'Creative',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Qriosity',family:'Literary',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'RPH',family:'Technical',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'VamUnique',family:'Cultural',status:'verified-current',source:'JIIT Admission Brochure 2026'},
  {name:'Arcadia',family:'Technical',status:'source-material',source:'Supplied JYC hub presentation / media archive'},
  {name:'CypherX',family:'Technical',status:'source-material',source:'Supplied JYC hub presentation / media archive'},
  {name:'Dronotics',family:'Technical',status:'source-material',source:'Supplied hub media archive'},
  {name:'GDG',family:'Technical',status:'source-material',source:'Supplied JYC hub presentation'},
  {name:'Neural Nexus',family:'Technical',status:'source-material',source:'Supplied JYC hub presentation / media archive'},
  {name:'Zencoders',family:'Technical',status:'source-material',source:'Supplied JYC hub presentation / media archive'}
];

export const JYC_HUB_SOURCE_STATUS = Object.fromEntries(JYC_HUB_SOURCE_REGISTRY.map(x=>[x.name,x]));
export const JYC_HUB_VERIFIED_CURRENT = JYC_HUB_SOURCE_REGISTRY.filter(x=>x.status==='verified-current');
export const JYC_HUB_SOURCE_ONLY = JYC_HUB_SOURCE_REGISTRY.filter(x=>x.status!=='verified-current');
