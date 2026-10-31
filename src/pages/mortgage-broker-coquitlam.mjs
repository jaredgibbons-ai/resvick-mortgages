import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-coquitlam/";

const body = `
<h2>The Tri-Cities family purchase</h2>
<p>Coquitlam sits at the centre of the Tri-Cities with Port Moody and Port Coquitlam, and its housing has two clear halves. Along the SkyTrain line that opened in December 2016, running through Port Moody to Coquitlam Central and Lafarge Lake-Douglas (Transport Canada), Burquitlam, Lougheed and the city centre have become tower neighbourhoods with a constant presale pipeline. Up the hill, Westwood Plateau, Burke Mountain, Ranch Park and Maillardville are family streets of detached homes and townhouses, with Burke Mountain still adding new subdivisions. Most Coquitlam buyers Joshua works with are families: a first townhouse near a school, a move up to a house with a yard, or a parent helping an adult child into a first condo near the line.</p>
<p>${servesLine("Coquitlam")}</p>

${ratesStrip()}

<h2>Presales along the line</h2>
<p>Burquitlam and the city centre carry a large share of the region's presale activity, and presales have a mortgage logic of their own. You sign today and pay deposits from your own funds over a schedule, but the mortgage is arranged at completion, which can be two to four years later. The approval that matters is the one you can get then, under the rates and rules of that year, against an appraised value that may differ from your contract price. Joshua plans a presale file for the completion date from the beginning and reviews it as the date approaches, so that a change in income, rates or family size does not arrive as a surprise. The <a href="/presale-mortgages-bc/">presale mortgages guide</a> covers deposits, assignments and what happens if the appraisal comes in low.</p>

<h2>Townhouses and the first family home</h2>
<p>For many Tri-Cities families the first purchase is a townhouse. Two things shape that approval. Strata fees count: lenders add a share of the monthly fee to your housing costs, so two townhouses at the same price can produce different approvals. And the first-time buyer property transfer tax exemption phases out above a price threshold, which in Coquitlam's townhouse market matters, so the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> is worth running before you write an offer. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets out the order of operations, from the pre-approval to the stacking of the FHSA and Home Buyers' Plan.</p>

<h2>Moving up the hill</h2>
<p>Selling a townhouse to buy a house on Burke Mountain or Westwood Plateau is a timing problem before it is a rate problem. The sale and the purchase rarely complete on the same day, and the gap is covered by porting the existing mortgage, bridge financing or both. Porting carries your current rate and term to the new home, often with a blended increase for the extra amount; bridge financing covers the down payment between the two completion dates and requires a firm, subject-free sale. The <a href="/porting-your-mortgage/">porting guide</a> and the <a href="/bridge-financing/">bridge financing page</a> explain both. The penalty to break the existing mortgage, if porting does not work, is the number to know before listing, and the <a href="/mortgage-penalty-calculator/">penalty calculator</a> gives a range.</p>

<h2>Suites on the plateau and in the older neighbourhoods</h2>
<p>Houses on Westwood Plateau, in Ranch Park and in Maillardville often come with a basement suite, and the rent is part of many buyers' plans. Lenders either add a share of the rent to your income or subtract it from your housing cost, and the share varies by lender; a permitted suite with a lease and bank deposits is far easier to count. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods with figures.</p>

<h2>Renewals in the Tri-Cities</h2>
<p>A renewal letter is one lender's opening offer. Since late 2024, a straight switch to a different lender at maturity, with the balance and amortization unchanged, usually does not require a new stress test, and the costs of a switch are often covered. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the window, the comparison and the restructuring options, and the free renewal reminder contacts you six months and 120 days before maturity so there is time to compare.</p>

<h2>Income that needs explaining</h2>
<p>Many Tri-Cities households run on a mix: a salary and a side business, a commission income, a contractor's invoices, or an incorporated professional's dividends. Lenders read these differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, two-year averaging, stated-income programs and when a fee can apply. On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing for the service; fees arise only on some B-lender and private files, with written disclosure first.</p>

<h2>How it works from Coquitlam</h2>
<ol>
<li><strong>A 15-minute call</strong> on your goals, your numbers and your dates.</li>
<li><strong>An underwriter's read</strong> of your file before any lender sees it. Joshua underwrote mortgages for five years before his ten as a broker.</li>
<li><strong>A written Lender Comparison Report</strong>: rate, term, penalty method, prepayment room and portability, side by side.</li>
<li><strong><a href="/mortgage-aftercare-program/">Resvick Aftercare</a></strong> after funding, with annual reviews and renewal outreach six months out.</li>
</ol>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, and why the lowest advertised rate is rarely the cheapest mortgage for a family likely to move again. The <a href="/mortgage-calculators/">calculators</a> cover payment, affordability with a suite, closing costs, renewal scenarios and sale proceeds, with every result shown immediately and no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-burnaby/">Burnaby</a> and <a href="/mortgage-broker-surrey/">Surrey</a>, Port Moody, Port Coquitlam, Anmore and Belcarra. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; a review from a Coquitlam client helps the next family find him.</p>`)}

${cta({ title: "Buying a townhouse near the line, or moving up to Burke Mountain?", text: "Book a 15-minute call. You will leave knowing what is realistic and what to do first." })}
<p>Anything else, the <a href="/contact/">contact page</a> has the details.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Coquitlam and the Tri-Cities",
  lede: "Presales along the SkyTrain line, first townhouses, and the move up to Burke Mountain or Westwood Plateau. Joshua Resvick serves Coquitlam, Port Moody and Port Coquitlam from his Surrey office.",
  crumbs: [["Home", "/"], ["Coquitlam", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Coquitlam", ["Port Moody", "Port Coquitlam"])],
  faqs: [
    { q: "How is a Burquitlam presale financed?", a: "At completion, not at signing. Deposits are paid from your own funds on the developer's schedule, and the mortgage is approved near the completion date under that year's rates and rules, against an appraisal that may differ from your contract price. Joshua plans for the completion date from the start and reviews the file as it approaches." },
    { q: "Can I buy a house on Burke Mountain before my townhouse sells?", a: "Sometimes, with bridge financing, which covers the down payment between the two completion dates and requires a firm, subject-free sale of the townhouse. Porting your existing mortgage to the new home is often part of the plan. The penalty to break the old mortgage is the number to know before you list." },
    { q: "Does Joshua serve Port Moody and Port Coquitlam too?", a: "Yes, the whole of the Tri-Cities, Anmore and Belcarra, and the rest of BC. He works from an office in Surrey and serves Coquitlam by phone, video and secure document upload, with your lawyer or notary handling the signing locally. There is no Coquitlam branch and no need to visit any office." },
    { q: "Will a lender count the suite rent on a Westwood Plateau house?", a: "Usually some of it, if the suite is permitted and the rent is documented with a lease or bank deposits. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender, so choosing the lender whose method suits the file can change the approval." },
    { q: "Our income is a salary plus a small business. Is that a problem?", a: "No, but it has to be documented the way the lender wants. Salary is straightforward; business income is usually averaged over two years of tax returns, with some lenders adding back certain expenses. If the business is new or the returns are low, stated-income programs exist, and the self-employed hub explains when a fee can apply." }
  ]
};
