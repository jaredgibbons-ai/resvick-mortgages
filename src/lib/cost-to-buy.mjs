// "What it takes to buy here" box for city pages (Nov 25, 2026).
// Runs BC Assessment's typical 2026 values through the same engine the calculators use, so the numbers match the tools.
// No interest rates: only the minimum down payment, the CMHC premium, the starting mortgage and the property transfer tax.
import { createRequire } from "node:module";
import { esc } from "./site.mjs";
const RM = createRequire(import.meta.url)("../assets/js/engine.js");

const $ = (n) => "$" + Math.round(n).toLocaleString("en-CA");

// cols: [label, typical value]. src: which BC Assessment release the values come from.
export function costToBuy(town, cols, src) {
  const rows = cols.map(([label, price]) => {
    const down = RM.minDownPayment(price);
    const c = RM.cmhcPremium({ price, down, amortYears: 25 });
    const p = RM.ptt({ fmv: price, firstTimeBuyer: true });
    return { label, price, down, prem: c.premium, loan: c.totalLoan, ptt: p.gross, pttFtb: p.net };
  });
  const head = rows.map((r) => `<th class="num">${esc(r.label)}</th>`).join("");
  const line = (name, f) => `<tr><td>${name}</td>${rows.map((r) => `<td class="num">${f(r)}</td>`).join("")}</tr>`;
  const cheapest = rows.reduce((a, r) => (r.price < a.price ? r : a), rows[0]);
  return `
<h2>What it takes to buy a typical home in ${esc(town)}</h2>
<p>Take BC Assessment's typical 2026 ${rows.length > 1 ? "values" : "value"} for ${esc(town)}, the smallest down payment allowed and a 25-year amortization. (BC Assessment, ${esc(src)} 2026 Property Assessments, January 2, 2026, read November 2026).</p>
<div class="table-wrap"><table>
<thead><tr><th>At the typical value</th>${head}</tr></thead>
<tbody>
${line("Typical assessed value", (r) => $(r.price))}
${line("Minimum down payment", (r) => $(r.down))}
${line("CMHC premium, added to the mortgage", (r) => $(r.prem))}
${line("Starting mortgage", (r) => $(r.loan))}
${line("Property transfer tax", (r) => $(r.ptt))}
${line("Transfer tax for a qualifying first-time buyer", (r) => (r.pttFtb === 0 ? "$0" : $(r.pttFtb)))}
</tbody></table></div>
<p>A first-time buyer at the ${esc(cheapest.label)} figure in ${esc(town)} needs about ${$(cheapest.down + cheapest.pttFtb)} for the down payment and transfer tax, before legal fees and an inspection. Try a real listing price in the <a href="/bc-property-transfer-tax-calculator/">transfer tax calculator</a>.</p>`;
}
