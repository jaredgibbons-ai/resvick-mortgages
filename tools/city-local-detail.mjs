import fs from "node:fs"; import * as cheerio from "cheerio";
const dirs=fs.readdirSync("dist").filter(d=>/^mortgage-broker-/.test(d)&&!/vs-bank/.test(d));
const h2s={};const rows=[];
for(const d of dirs){const $=cheerio.load(fs.readFileSync(`dist/${d}/index.html`,"utf8"));const t=$("main").text();
 const hs=$("main h2").toArray().map(e=>$(e).text().trim());
 hs.forEach(h=>{const k=h.replace(new RegExp(d.replace("mortgage-broker-","").replace(/-/g," "),"ig"),"X").toLowerCase();h2s[k]=(h2s[k]||0)+1});
 const nums=(t.match(/\$\d[\d,]*|\d{1,3},\d{3}|\d+(\.\d)?%/g)||[]).length;
 const links=$("main a[href^='/']").length;
 const ext=$("main a[href^='http']").length;
 const words=t.split(/\s+/).length;
 rows.push({d:d.replace("mortgage-broker-",""),words,nums,ext,hasCensus:/Incomes in|median/i.test(t),hasBylaw:/bylaw/i.test(t),hasStrata:/strata/i.test(t),h2:hs.length});}
console.log("city pages",rows.length);
console.table(rows.sort((a,b)=>a.nums-b.nums).map(r=>({...r})));
const common=Object.entries(h2s).filter(([k,v])=>v>=10).sort((a,b)=>b[1]-a[1]);console.log("H2s repeated on 10+ city pages:");common.forEach(([k,v])=>console.log(v,k));
