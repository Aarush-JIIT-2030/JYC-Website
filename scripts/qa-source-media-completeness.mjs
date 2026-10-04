import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const files=['src/jyc-source-media.js','src/pdf-hub-content.js','src/pdf-hub-extra.js','src/main.jsx','src/extra-features.jsx'];
const source=files.map(read).join('\n');
const urls=[...source.matchAll(/['"](\/assets\/[^'"]+)['"]/g)].map(m=>m[1]);
const unique=[...new Set(urls)];
let fail=0;
const missing=[];
for(const url of unique){
  const disk=path.join(root,'public',url.replace(/^\//,''));
  if(!fs.existsSync(disk))missing.push(url);
}
const assetFiles=[];
for(const dir of ['public/assets/hub-photos','public/assets/hub-photos-extra','public/assets/hub-stories']){
  const abs=path.join(root,dir);
  if(!fs.existsSync(abs))continue;
  for(const name of fs.readdirSync(abs,{withFileTypes:true})){
    if(name.isFile())assetFiles.push(path.join(dir,name.name));
  }
}
const duplicates=[];
const byBase=new Map();
for(const file of assetFiles){
  const base=path.basename(file).toLowerCase();
  const list=byBase.get(base)||[];
  list.push(file); byBase.set(base,list);
}
for(const [base,list] of byBase)if(list.length>1)duplicates.push([base,...list]);

if(missing.length){console.error('FAIL: referenced source media missing');missing.forEach(x=>console.error('  '+x));fail++}
if(duplicates.length){console.error('FAIL: duplicate source media basenames');duplicates.forEach(x=>console.error('  '+x.join(' | ')));fail++}
console.log('PASS: '+unique.length+' referenced source-media paths resolved.');
console.log('PASS: '+assetFiles.length+' committed hub media files scanned.');
if(fail)process.exit(1);
