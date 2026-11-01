import { FACTS } from "../src/lib/city-facts.mjs";
const MAXW=Number(process.argv[2]||20); let n=0;
for (const [k,d] of Object.entries(FACTS)) {
  const parts = {str:d.str,suites:d.suites,land:d.land,feature:d.feature,lenders:d.lenders};
  for (const [f,t] of Object.entries(parts)) { if(!t) continue;
    for (const sen of t.split(/(?<=[.])\s+(?=[A-Z])/)) { const w=sen.split(/\s+/).length; if (w>MAXW) { n++; console.log(k,f,w,"::",sen.slice(0,170)); } } }
}
console.log(n);
