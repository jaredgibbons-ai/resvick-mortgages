import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema } from "../lib/city.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";

const slug = "/mortgage-broker-coquitlam/";

const body = `
${short({
  answer: "Joshua Resvick serves Coquitlam online and by phone from his Surrey office. Most files here are family moves: a first townhouse, a move up the hill, or a presale near the SkyTrain line.",
  who: "Tri-Cities families buying, moving up, buying a presale or coming up for renewal.",
  next: "Moving up? Check your current penalty with the <a href=\"/mortgage-penalty-calculator/\">penalty calculator</a> before you list, then book a 15-minute call."
})}
<h2>The Tri-Cities family purchase</h2>
<p>Coquitlam sits at the centre of the Tri-Cities, with Port Moody and Port Coquitlam. Its housing has two clear halves.</p>
<p>The first half follows the SkyTrain line that opened in December 2016. It runs through Port Moody to Coquitlam Central and Lafarge Lake-Douglas (Transport Canada). Along it, Burquitlam, Lougheed and the city centre have become tower neighbourhoods with a steady flow of presales.</p>
<p>The second half is up the hill. Westwood Plateau, Burke Mountain, Ranch Park and Maillardville are family streets of houses and townhouses. Burke Mountain is still adding new subdivisions.</p>
<p>Many Coquitlam buyers are families. It might be a first townhouse near a school, or a move up to a house with a yard. Or it might be a parent helping an adult child into a first condo near the line.</p>
<p>Joshua Resvick serves Coquitlam from his office in Surrey, by phone, video and secure document upload. There's no Coquitlam branch, and you never need to visit an office. Every step is done online, and your lawyer or notary handles the signing near you.</p>

${ratesStrip()}

<h2>Incomes in Coquitlam</h2>
<p>Coquitlam's median household income was $92,000 for 2020. About 16.4 percent of workers were self-employed. Retail had about 9,385 workers, professional services 9,155 and health care 8,740, which made them the three largest industries. Of 81,265 workers in the labour force, 13,350 were self-employed. (Statistics Canada, 2021 Census Profile, read October 2026). Those numbers describe a city of both salaried workers and small business owners. If part of your pay is a bonus or commission, many lenders average it over two years. The exact method depends on the lender.</p>
${censusTable("coquitlam")}

<h2>Presales along the line</h2>
<p>Burquitlam and the city centre carry a big share of the region's presales. Presales follow their own mortgage logic.</p>
<p>You sign today and pay deposits from your own money on a schedule. But the mortgage is set up at completion, which can be two to four years later.</p>
<p>So the approval that counts is the one you can get then. It uses that year's rates and rules, and an appraised value that may differ from your contract price.</p>
<p>That's why a presale file should be planned around the completion date from day one, and reviewed as the date gets closer. Then a change in income, rates or family size doesn't show up as a surprise. The <a href="/presale-mortgages-bc/">presale mortgages guide</a> covers deposits, assignments and what happens if the appraisal comes in low.</p>

<h2>Townhouses and the first family home</h2>
<p>For many Tri-Cities families, the first purchase is a townhouse. Two things shape that approval.</p>
<p>First, strata fees count. Lenders add a share of the monthly fee to your housing costs. So two townhouses at the same price can get different approvals.</p>
<p>Second, the first-time buyer transfer tax exemption phases out above a price threshold. In Coquitlam's townhouse market, that matters. Run the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> before you write an offer.</p>
<p>The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets out the order of steps. It runs from the pre-approval to stacking the FHSA and Home Buyers' Plan.</p>

<h2>Moving up the hill</h2>
<p>Selling a townhouse to buy a house on Burke Mountain or Westwood Plateau is a timing problem before it's a rate problem. The sale and the purchase rarely close on the same day. Porting your mortgage, bridge financing or both can cover the gap.</p>
<p>Porting takes your current rate and term to the new home. The extra amount is often blended in at a new rate.</p>
<p>Bridge financing covers the down payment between the two closing dates. It needs a firm, subject-free sale. The <a href="/porting-your-mortgage/">porting guide</a> and the <a href="/bridge-financing/">bridge financing page</a> explain both.</p>
<p>If porting doesn't work, you'll need to know the penalty to break your mortgage. Find out before you list. The <a href="/mortgage-penalty-calculator/">penalty calculator</a> gives you a range.</p>

<h2>Suites on the plateau and in the older neighbourhoods</h2>
<p>Houses on Westwood Plateau, in Ranch Park and in Maillardville often come with a basement suite. The rent is part of many buyers' plans.</p>
<p>Lenders either add a share of the rent to your income, or subtract it from your housing costs. The share varies by lender. A permitted suite with a lease and bank deposits is much easier to count. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods with real figures.</p>

<h2>Renewals in the Tri-Cities</h2>
<p>A renewal letter is one lender's opening offer. Since late 2024, a straight switch to another lender at maturity usually needs no new stress test. That's as long as the balance and amortization stay the same. Switch costs are often covered too.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the timing, the comparison and your restructuring options. The free renewal reminder contacts you six months and 120 days before maturity, so there's time to compare.</p>

<h2>Income that needs explaining</h2>
<p>Many Tri-Cities households run on a mix of income. It might be a salary plus a side business, commission, contractor invoices or an incorporated professional's dividends. Lenders read each of these differently.</p>
<p>The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, two-year averaging and stated-income programs. It also covers when a fee can apply.</p>
<p>On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing for the service. Fees only come up on some B-lender and private files, with written disclosure first.</p>

<h2>How it works from Coquitlam</h2>
<ol>
<li><strong>A 15-minute call</strong> on your goals, your numbers and your dates.</li>
<li><strong>An underwriter's read</strong> of your file before any lender sees it. Joshua underwrote mortgages for five years before his ten as a broker.</li>
<li><strong>A written Lender Comparison Report</strong>: rate, term, penalty method, prepayment room and portability, side by side.</li>
<li><strong><a href="/mortgage-aftercare-program/">Resvick Aftercare</a></strong> after funding, with annual reviews and renewal outreach six months out.</li>
</ol>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set. It also shows why the lowest advertised rate is rarely the cheapest mortgage for a family likely to move again.</p>
<p>The <a href="/mortgage-calculators/">calculators</a> cover payment, affordability with a suite, closing costs, renewal options and sale proceeds. Every result shows right away, with no email needed.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-burnaby/">Burnaby</a>, <a href="/mortgage-broker-surrey/">Surrey</a>, Port Moody, Port Coquitlam, Anmore and Belcarra. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area. A review from a Coquitlam client helps the next family find him.</p>`)}

<p class="more-links"><strong>Related for Tri-Cities buyers.</strong> Health care, retail and professional services lead the local job market, so you may find your situation on the pages for <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgages-for-tech-workers/">tech workers</a> or <a href="/mortgages-for-teachers-and-school-staff/">teachers and school staff</a>. For the steps before an offer, read the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> and the <a href="/down-payment-guide-bc/">down payment guide</a>. The <a href="/closing-costs-bc/">closing costs guide</a> covers what you pay at the end. A dentist, tradesperson or shop owner who wants to buy the building they work in can read about <a href="/commercial-mortgages-bc/">commercial mortgages</a>, and you can <a href="/about-joshua-resvick/">learn about Joshua</a>.</p>

${cta({ title: "Buying a townhouse near the line, or moving up to Burke Mountain?", text: "Book a 15-minute call. You'll leave knowing what's realistic and what to do first." })}
<p>For anything else, the <a href="/contact/">contact page</a> has the details.</p>
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
