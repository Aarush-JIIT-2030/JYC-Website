import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const main=read('src/main.jsx');
const admin=read('src/admin-chunk.jsx');
const html=read('index.html');
const checks=[
 ['featured/event navigation contract is present', /function EventCard\([\s\S]*?events\//.test(main) || /<EventCard key=\{e\.id\} e=\{e\}/.test(main)],
 ['canonical URL is not root-directory asset syntax', !html.includes('<link rel="canonical" href="/" />')],
 ['canonical URL is absolute', /<link rel="canonical" href="https?:\/\//.test(html)],
 ['GalleryItems is not redeclared locally', !/function GalleryItems\(\{items\}\)/.test(main)],
 ['AdminErrorBoundary import does not collide with local class', !(/class AdminErrorBoundary extends/.test(admin) && /import[^;]*\bAdminErrorBoundary\b[^;]*from ['\"]\.\/admin-extra\.jsx['\"]/.test(admin))],
];
let failed=0; for(const [name,ok] of checks){ console.log(`${ok?'PASS':'FAIL'}: ${name}`); if(!ok) failed++; }
if(failed){ console.error(`BUILD PREFLIGHT FAILED: ${failed} check(s)`); process.exit(1); }
console.log('BUILD PREFLIGHT PASS');
