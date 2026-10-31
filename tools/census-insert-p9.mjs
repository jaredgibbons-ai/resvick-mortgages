import fs from "node:fs";
const SRC = "(Statistics Canada, 2021 Census Profile, read October 2026).";
const P = {
  "prince-rupert": ["Incomes in Prince Rupert",
    `<p>Prince Rupert's median household income was $95,000 for 2020. About 11.5 percent of workers were self-employed, or 780 of 6,780 in the labour force. The biggest industry by far was transportation and warehousing, with about 1,550 workers. Retail had about 795 and health care about 655. ${SRC} Transportation and warehousing covers the port, the railway and the trucking and marine firms that serve them. Those jobs often pay overtime, shift premiums or seasonal extras. Lenders usually average that extra pay over about two years, so keep your pay stubs and tax slips together. The census is from 2021, so it does not show later job changes at the port.</p>`],
  "fort-st-john": ["Incomes in Fort St. John",
    `<p>Fort St. John's median household income was $102,000 for 2020. About 9.5 percent of workers were self-employed, or 1,195 of 12,600 in the labour force. Construction was the biggest industry with about 1,580 workers, close to retail at about 1,505. Mining, quarrying, and oil and gas extraction came third at about 1,350. ${SRC} Oil and gas is a big employer here, and the census is from 2021, so it does not show the job losses described below. Most files are wage files, and many include shift work, rotations or contract pay. A lender will want to see how long that pay has lasted and how steady it is. A mine or camp worker on a rotation should read the page on <a href="/mortgages-for-camp-mine-and-shift-workers/">mortgages for camp, mine and shift workers</a>.</p>`],
  "trail-castlegar": ["Incomes in Trail and Castlegar",
    `<p>The census counts the two cities separately, and the numbers differ. In Trail, the median household income was $68,000 for 2020, and 11.3 percent of workers were self-employed (395 of 3,500). Health care was the largest industry with about 560 workers, then retail with about 530 and manufacturing with about 415. In Castlegar, the median was $81,000, and 12.0 percent were self-employed (480 of 4,000). Health care led with about 610 workers, then retail with about 510 and manufacturing with about 485. ${SRC} The gap of $13,000 in the medians is worth knowing if you are comparing prices between the two. Both cities lean on wages from hospitals, stores and plants, so most files are salaried. For those, lenders usually want a recent pay stub, a job letter and your tax slips. Manufacturing pay can include shift premiums or overtime, which a lender may average over two years.</p>`]
};
for (const [key, [h, html]] of Object.entries(P)) {
  const f = `src/pages/mortgage-broker-${key}.mjs`;
  let s = fs.readFileSync(f, "utf8");
  if (s.includes("Statistics Canada, 2021 Census Profile")) { console.log("skip", key); continue; }
  const first = s.indexOf("<h2>"), second = s.indexOf("<h2>", first + 4);
  s = s.slice(0, second) + `<h2>${h}</h2>\n${html}\n\n` + s.slice(second);
  fs.writeFileSync(f, s); console.log("ok", key);
}
