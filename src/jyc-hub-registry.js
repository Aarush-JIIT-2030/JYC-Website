export const JYC_HUB_SOURCE_REGISTRY = [
  {name:'Aakriti',family:'Creative',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Abhivyakti',family:'Creative',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Aura',family:'Creative',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'BDS',family:'Cultural',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'CICR',family:'Technical',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Cinekala',family:'Creative',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Eloquence',family:'Literary',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Fortissimo',family:'Cultural',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Innovation Club',family:'Technical',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'JIIT OPTICA',family:'Technical',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'JODC',family:'Technical',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'JSA',family:'Sports',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Panache',family:'Cultural',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Prismatic',family:'Creative',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Qriosity',family:'Literary',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'RPH',family:'Technical',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'VamUnique',family:'Cultural',status:'brochure-verified',source:'JIIT Admission Brochure 2026'},
  {name:'Arcadia',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'},
  {name:'CypherX',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'},
  {name:'Dronotics',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'},
  {name:'GDG',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'},
  {name:'Neural Nexus',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'},
  {name:'Zencoders',family:'Technical',status:'orientation-verified',source:'Supplied JYC 2026–27 Orientation / All Hubs material'}
];

export const JYC_HUB_SOURCE_STATUS = Object.fromEntries(JYC_HUB_SOURCE_REGISTRY.map(x=>[x.name,x]));
export const JYC_HUB_VERIFIED_CURRENT = JYC_HUB_SOURCE_REGISTRY.filter(x=>x.status==='brochure-verified');
export const JYC_HUB_SOURCE_ONLY = JYC_HUB_SOURCE_REGISTRY.filter(x=>x.status!=='brochure-verified');
