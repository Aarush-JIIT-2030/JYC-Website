import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const scanRoots=['index.html','public','src','scripts'];
const extensions=new Set(['.html','.css','.js','.jsx','.mjs','.json']);
const localPrefixes=['/assets/','/models/','/jyc-','/offline.html','/manifest.json','/robots.txt','/sitemap.xml','/llms.txt'];

const files=[];
const walk=(p)=>{
  const full=path.join(root,p);
  if(!fs.existsSync(full)) return;
  const stat=fs.statSync(full);
  if(stat.isDirectory()){
    for(const entry of fs.readdirSync(full)) walk(path.join(p,entry));
    return;
  }
  if(extensions.has(path.extname(full).toLowerCase())) files.push(full);
};
scanRoots.forEach(walk);

const refs=new Map();
const pattern=/(["'\`])((?:\/assets\/|\/models\/|\/jyc-[^"'\`?\s<>]+|\/offline\.html|\/manifest\.json|\/robots\.txt|\/sitemap\.xml|\/llms\.txt)(?:\?[^"'\`\s<>]*)?)(?:\1)/g;

for(const file of files){
  const text=fs.readFileSync(file,'utf8');
  let match;
  while((match=pattern.exec(text))){
    const raw=match[2].split('?')[0];
    if(!refs.has(raw)) refs.set(raw,[]);
    refs.get(raw).push(path.relative(root,file));
  }
}

const missing=[];
for(const [asset,owners] of refs){
  const target=path.join(root,'public',asset.replace(/^\//,''));
  if(!fs.existsSync(target)) missing.push({asset,owners});
}

for(const [asset,owners] of refs) console.log(`CHECK: ${asset} ← ${owners.slice(0,3).join(', ')}`);
if(missing.length){
  for(const item of missing) console.error(`FAIL: missing local runtime asset ${item.asset} ← ${item.owners.join(', ')}`);
  process.exit(1);
}
console.log(`PASS: local runtime asset references resolve (${refs.size} unique assets checked)`);
