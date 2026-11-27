import { SITE, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Added Nov 25, 2026: regional hub for "mortgage broker vancouver island". Links every Island town page.
// Values: BC Assessment, Vancouver Island 2026 Property Assessments (Jan 2, 2026; valuation date July 1, 2025).
// SVT list: gov.bc.ca taxable areas (updated Dec 8, 2025). Campbell River STR: City zoning FAQ.
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-vancouver-island/#service", url: SITE.origin + "/mortgage-broker-vancouver-island/", areaServed: [{ "@type": "Place", name: "Vancouver Island", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const ROWS = [
  ["Saanich", "/mortgage-broker-saanich/", "$1,164,000", "$597,000"],
  ["Victoria", "/mortgage-broker-victoria/", "$1,128,000", "$551,000"],
  ["Sidney", "/mortgage-broker-saanich/", "$953,000", "$650,000"],
  ["Langford", "/mortgage-broker-langford/", "$951,000", "$556,000"],
  ["Comox", "/mortgage-broker-courtenay/", "$838,000", ""],
  ["Parksville", "", "$774,000", ""],
  ["Nanaimo", "/mortgage-broker-nanaimo/", "$769,000", "$451,000"],
  ["Courtenay", "/mortgage-broker-courtenay/", "$752,000", "$448,000"],
  ["North Cowichan", "/mortgage-broker-duncan/", "$733,000", ""],
  ["Ladysmith", "", "$723,000", ""],
  ["Campbell River", "/mortgage-broker-campbell-river/", "$680,000", "$412,000"],
  ["Duncan", "/mortgage-broker-duncan/", "$592,000", ""],
  ["Port Alberni", "/mortgage-broker-port-alberni/", "$485,000", ""]
];
const table = `<div class="table-wrap"><table>
<thead><tr><th>Place</th><th class="num">Typical single-family value, 2026</th><th class="num">Typical strata value, 2026</th></tr></thead>
<tbody>${ROWS.map(([n, h, sf, st]) => `<tr><td>${h ? `<a href="${h}">${n}</a>` : n}</td><td class="num">${sf}</td><td class="num">${st || "Not published"}</td></tr>`).join("\n")}</tbody></table></div>`;

const body = `
${short({
  answer: "I arrange mortgages across Vancouver Island by phone and video from my Surrey office. Prices fall a long way as you head north and west from Victoria, and local rules on rentals and the empty-home tax change from town to town. This page compares them and links to each town's own page.",
  who: "You're buying, moving or refinancing anywhere from Victoria to Campbell River, or you're weighing one Island town against another.",
  next: "Find your town in the table, then open its page. Or book a 15-minute call and talk it through."
})}

<h2>One broker for the whole Island</h2>
<p>I'm Joshua Resvick, a BC mortgage broker with Xeva Mortgage. My office is in Surrey, and I serve Island clients by phone, video and secure upload. There is no Island branch, and you don't need one. The lender, the appraiser and your lawyer or notary all do their parts where the home is.</p>
<p>Before I started brokering, I spent five years as a lender's underwriter. That's the desk that says yes or no. On the Island, the questions that desk asks change a lot from one town to the next. A condo in Langford, a heritage house in Victoria, and an older home near the water in Port Alberni are three different files.</p>

<h2>What homes are worth across the Island</h2>
<p>BC Assessment publishes a typical value for each town every January. These are the 2026 figures, based on values as of July 1, 2025. (BC Assessment, Vancouver Island 2026 Property Assessments, January 2, 2026, read November 2026).</p>
${table}
<p>Assessed values aren't sale prices. They lag the market by six months and more, and every home is different. But the pattern is clear. A typical house in Port Alberni is assessed at well under half the value of one in Saanich. Many buyers trade a longer drive for a lower price, and that trade is worth testing before you commit.</p>
<p>Where the strata column says "Not published", BC Assessment's release didn't list a strata value for that town. Ask a local realtor for recent condo and townhouse sales.</p>

<h2>Find your town</h2>
<p>Each page covers local incomes, housing, suites, rental rules and what lenders ask for there.</p>
<ul>
<li><a href="/mortgage-broker-victoria/">Victoria</a>: the capital, with heritage homes, condos and the most government jobs.</li>
<li><a href="/mortgage-broker-saanich/">Saanich</a>: a large suburban district, plus the Saanich Peninsula and Sidney.</li>
<li><a href="/mortgage-broker-langford/">Langford</a>: the West Shore, with newer homes, townhouses and presales.</li>
<li><a href="/mortgage-broker-duncan/">Duncan and the Cowichan Valley</a>: a lower-priced valley with a new hospital on the way.</li>
<li><a href="/mortgage-broker-nanaimo/">Nanaimo</a>: the mid-Island hub, with the ferry to the mainland.</li>
<li><a href="/mortgage-broker-port-alberni/">Port Alberni</a>: the Alberni Valley, with the lowest assessed values in this table.</li>
<li><a href="/mortgage-broker-courtenay/">Courtenay and Comox</a>: the Comox Valley, home to CFB Comox and many retirees.</li>
<li><a href="/mortgage-broker-campbell-river/">Campbell River</a>: the North Island's service centre, with industry jobs and tight rentals.</li>
<li><a href="/mortgage-broker-powell-river/">Powell River</a>: across the strait on the mainland, reached by ferry from Comox.</li>
</ul>
<p>Not on the list? I still help. Parksville, Qualicum Beach, Ladysmith, Sooke, Tofino and the rest are all fine. <a href="/contact/">Get in touch</a> and tell me where you're looking.</p>

<h2>The empty-home tax covers much of the Island</h2>
<p>The Province's Speculation and Vacancy Tax applies in many Island towns. The list includes the capital region municipalities, Nanaimo, Lantzville, Ladysmith, Duncan, North Cowichan, Lake Cowichan, Parksville, Qualicum Beach, Courtenay, Comox and Cumberland. (Government of BC, Speculation and Vacancy Tax taxable areas, page updated December 8, 2025, read November 2026).</p>
<p>Owners file a declaration every year. If you live in the home as your main residence, you're generally exempt. It matters most if you're buying a second home or a cabin, or leaving a place empty while you move. Port Alberni, Campbell River and Powell River aren't on the list.</p>

<h2>Short-term rental rules vary a lot</h2>
<p>The Province's principal-residence rule applies in most Island cities. In those places, you can generally rent short-term only in your own home, plus one suite or extra unit. Some towns add their own layer on top.</p>
<p>Campbell River goes furthest. The City's zoning FAQ says short-term rentals aren't a permitted use and won't be licensed. (City of Campbell River, Zoning FAQs, read November 2026). Each town page lists the local rule. Either way, many lenders won't count short-term rent to help you qualify. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental guide</a> explains what they do count.</p>

<h2>Suites help almost everywhere</h2>
<p>The Province's small-scale housing rules made most Island cities update their zoning in 2024. On most residential lots, a suite or more is now allowed. A legal suite can lift what you qualify for, because many lenders count part of the rent. An unpermitted suite usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two methods lenders use.</p>

<h2>Things that change Island mortgage files</h2>
<ul>
<li><strong>Coastal and low-lying homes.</strong> Parts of Duncan are floodplain, and Port Alberni was hit by a tsunami in 1964. Ask about flood levels and get an insurance quote before you remove conditions.</li>
<li><strong>Ferry-access islands.</strong> Homes on the Gulf Islands, Quadra or Denman have fewer comparable sales. The appraisal can come in low, and a cabin may be treated as a second home. See the <a href="/second-home-and-vacation-property-mortgages-bc/">second home page</a>.</li>
<li><strong>Reserve and treaty land.</strong> Many First Nations have land in and beside Island towns. These homes are owned differently from a town lot, and fewer lenders work on them. I work with a lender that has a program for them. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</li>
<li><strong>Wells and septic.</strong> Rural lots often rely on them, and lenders commonly ask for tests.</li>
</ul>

<h2>Moving to the Island</h2>
<p>Many Island buyers are coming from the Lower Mainland, Alberta or further. You can do most of the work before you get on the ferry.</p>
<ol>
<li><strong>Get pre-approved first.</strong> It sets your price range and holds a rate. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> lists the papers.</li>
<li><strong>Pick two or three towns to compare.</strong> The table above is a starting point. Drive the commute you'd actually make.</li>
<li><strong>Plan the timing.</strong> If you own a home now, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> can cover a short gap in some cases.</li>
<li><strong>Retiring here?</strong> Lenders commonly count pensions and registered income. The <a href="/mortgages-for-retirees-and-seniors/">retirees page</a> and the <a href="/downsizing-and-your-mortgage/">downsizing page</a> explain how.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays me and you pay nothing for my work. Some files, such as new self-employment or recent credit trouble, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p class="more-links"><strong>Where to go next.</strong> First-time buyers can start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, and self-employed buyers with the <a href="/self-employed-mortgage-bc/">self-employed hub</a>. Owners coming up for renewal can read the <a href="/mortgage-renewal-bc/">renewal guide</a>. Check today's benchmarks on the <a href="/mortgage-rates-bc/">BC rates hub</a>, test your numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and learn about <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>. The full list of towns is on the <a href="/bc-mortgage-broker-service-areas/">cities served page</a>.</p>

${cta({ title: "Talk to a broker who serves the whole Island", text: "Book a 15-minute call. Tell me which towns you're weighing and how you're paid. You'll leave knowing what you can afford in each and which lenders fit." })}
`;

export default {
  slug: "/mortgage-broker-vancouver-island/",
  h1: "Mortgage broker on Vancouver Island: comparing towns from Victoria to Campbell River",
  lede: "I'm Joshua Resvick, with Xeva Mortgage, and I serve the whole Island by phone and video from my Surrey office. Assessed values, the empty-home tax, rental rules and suites, town by town, with a page for each.",
  crumbs: [["Home", "/"], ["Cities served", "/bc-mortgage-broker-service-areas/"], ["Vancouver Island", "/mortgage-broker-vancouver-island/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office on Vancouver Island?", a: "No. I work from my Surrey office and serve the whole Island by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally, so you never need to cross on the ferry to meet." },
    { q: "Where are homes cheapest on Vancouver Island?", a: "Among the towns in BC Assessment's 2026 Island release, Port Alberni had the lowest typical single-family value at $485,000, then Duncan at $592,000. Saanich was highest at $1,164,000. These are assessed values, not sale prices." },
    { q: "Does the empty-home tax apply on Vancouver Island?", a: "In many towns, yes, including the capital region, Nanaimo, Duncan, Parksville and the Comox Valley. Owners file a yearly declaration, and those who live in the home are generally exempt. Port Alberni and Campbell River aren't in the taxable area." },
    { q: "Can I run a short-term rental on Vancouver Island?", a: "It depends on the town. In most cities the Province limits short-term rentals to your own home plus one suite. Campbell River doesn't allow them at all. Many lenders won't count short-term rent to help you qualify." },
    { q: "Can I get pre-approved before moving to the Island?", a: "Yes. A pre-approval can be done by phone and video from wherever you live now. It sets your price range and holds a rate for a set time. Bring income papers and your down payment details." }
  ]
};
