import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-nelson/#service", url: SITE.origin + "/mortgage-broker-nelson/", areaServed: [{ "@type": "City", name: "Nelson", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Central Kootenay" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Nelson and the West Kootenay by phone and video from his Surrey office. Buyers here are often remote workers, hospital and college staff, small business owners and people moving from the coast. Older homes, laneway houses and a strict short-term rental cap all shape the mortgage.",
  who: "Buyers and owners in Nelson, Fairview, Uphill, the North Shore of Kootenay Lake, Balfour and nearby towns.",
  next: "Book a 15-minute call and tell Joshua how you earn your income and what kind of home you want."
})}
<p>Nelson sits on the West Arm of Kootenay Lake, in the Selkirk Mountains. It's compact, but it draws people from far away: a heritage downtown, a ski hill, and a strong arts and outdoors scene. Many buyers move here from bigger cities, and some bring their jobs with them.</p>
<p>I'm Joshua Resvick, a broker with Xeva Mortgage. I spent five years as an underwriter at a lender before I switched sides, so I know how lenders weigh unusual incomes and older homes. I work from Surrey and serve Nelson clients remotely. There's no Nelson office. A <a href="/contact/">15-minute call</a> is the place to start.</p>

${ratesStrip()}

<h2>What homes cost here</h2>
<p>BC Assessment's typical single-family value in Nelson was $699,000 for 2026, up 3%. A typical strata home was $560,000, about the same as the year before. Castlegar was $519,000 for a house. (BC Assessment, Southern Interior 2026 Property Assessments, January 2, 2026, read November 2026). Nelson is the highest-priced city in the West Kootenay, and some buyers compare it with Castlegar and Trail for that reason.</p>
<p>A strata home in Nelson costs much closer to a house than it does in most towns. That narrows the usual step up from a condo. Run both options in the <a href="/mortgage-calculators/">mortgage calculators</a> before you choose.</p>

${costToBuy("Nelson", [["Typical house", 699000], ["Typical strata home", 560000]], "Southern Interior")}

<h2>A small city that keeps growing</h2>
<p>The 2021 Census counted 11,106 people in Nelson, up from 10,572 in 2016. (My Nelson Now, Nelson population tops 11,000, February 9, 2022, read November 2026). The Chamber puts Greater Nelson at about 19,119 people. (Nelson and District Chamber of Commerce, Welcome to Nelson 2025, read November 2026).</p>
<p>The City's October 2024 housing needs report estimates Nelson needs about 3,104 new homes over the next 20 years. (City of Nelson, Housing Needs, read November 2026). For a buyer, that means steady demand and a limited supply of homes for sale.</p>

<h2>Remote workers and self-employed buyers</h2>
<p>A lot of Nelson buyers work for an employer somewhere else. If you're an employee, lenders read your salary the same way they would in a big city. A job letter that confirms remote work helps. If your employer may call you back to an office, tell me early.</p>
<p>Nelson also has its share of small business owners, artists, guides and freelancers. Lenders usually want two years of tax returns, and they look at net income after expenses. Some lenders will consider gross business income with a larger down payment. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> covers the routes, and the <a href="/newly-self-employed-mortgage/">newly self-employed page</a> helps if you just made the switch.</p>

<h2>Hospital, college and public sector jobs</h2>
<p>The Chamber lists Kootenay Lake Hospital, Selkirk College, the City of Nelson and School District 8 among the main employers. It says the public sector makes up 29% of the workforce. (Nelson and District Chamber of Commerce, Welcome to Nelson 2025, read November 2026).</p>
<p>Salaried public sector jobs are usually simple files. Casual, term and part-time roles need more paperwork, often a two-year history of hours. The <a href="/mortgages-for-nurses-and-healthcare-workers/">health care workers page</a> and the <a href="/mortgages-for-teachers-and-school-staff/">teachers page</a> explain how lenders read them.</p>

<h2>Heritage homes and steep lots</h2>
<p>Nelson has more than 400 heritage buildings, many restored. (Nelson and District Chamber of Commerce, Welcome to Nelson 2025, read November 2026). A lot of homes are old, and many sit on steep hillside lots. That charm comes with mortgage questions.</p>
<ul>
<li><strong>Inspections.</strong> Expect questions from lenders and insurers about the roof, wiring, heating, oil tanks and the foundation. Book a full inspection before you remove conditions.</li>
<li><strong>Insurance.</strong> Older wiring or heating can raise the premium or limit coverage. Get a quote early. A lender won't fund without proof of insurance.</li>
<li><strong>Upgrades.</strong> If a home needs work, a <a href="/purchase-plus-improvements/">purchase plus improvements mortgage</a> can add some upgrade costs to the loan.</li>
</ul>

<h2>Short-term rentals are capped</h2>
<p>This is the rule that catches buyers out. The City licenses short-term rentals and allows no more than three per block in residential zones. As of October 2024, the City said the quota was full and it wasn't taking new applications. A licence doesn't pass to a buyer, who goes on a wait list. (City of Nelson, Short-Term Rental Licence, read November 2026).</p>
<p>So if a listing shows strong vacation rental income, don't assume you can keep it. Ask the City before you make an offer. Many lenders won't count short-term rent at all. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental guide</a> explains what lenders look for.</p>

<h2>Suites and laneway houses</h2>
<p>Long-term rentals are a better bet. The City allows secondary suites and laneway houses in most residential zones, with a building permit. Suites need at least 26 square metres of floor area. A laneway house can be 26 to 89 square metres, with height limits that depend on the design. (City of Nelson, Secondary Suites and Laneway Houses, read November 2026).</p>
<p>A legal suite or laneway house can help you qualify, since many lenders count part of the rent. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two methods. If you plan to build one, the <a href="/construction-and-self-build-mortgages-bc/">construction mortgage page</a> covers draws.</p>

<h2>Moving to Nelson</h2>
<ol>
<li><strong>Get your pre-approval done remotely.</strong> Then your Nelson visits are for homes in your range. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> lists what lenders ask for.</li>
<li><strong>Check the rental rules for any home you like.</strong> Short-term income is capped, and a suite needs to be legal to count.</li>
<li><strong>Allow time for inspections.</strong> Older homes need a careful look.</li>
<li><strong>Plan for the home you leave.</strong> If you own elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> can cover a short gap in some cases.</li>
</ol>

<h2>Working together from a distance</h2>
<p>Income is the first thing I sort out. A remote salary, a small business, a term contract at the college and a pension each suit different lenders. Next comes the home. A century-old house, a steep lot, a laneway house or plans for rental income all change which lender fits.</p>
<p>I put the choices on paper in a <a href="/lender-comparison-report/">Lender Comparison Report</a>, with term, penalty method and portability side by side. After you close, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> brings an annual review and a call about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timing.</p>

${callout("Paying for broker help", "<p>On most files you don't. When an A lender funds the mortgage, it pays the broker. A file that needs a B or private lender, such as one with new self-employment income, may carry a fee. Any fee is set out in writing on BCFSA's Form 1A before you sign.</p>")}

<p class="more-links"><strong>Where to go next.</strong> Comparing towns? The <a href="/mortgage-broker-trail-castlegar/">Trail and Castlegar page</a> covers the next two cities south. First-time buyers can start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Check today's benchmarks on the <a href="/mortgage-rates-bc/">BC rates hub</a>.</p>

${cityFacts("nelson")}
${nearbyCallout("nelson", callout)}

${cta({ title: "Talk to a broker who serves Nelson", text: "Book a 15-minute call. Tell Joshua how you earn, where you are moving from and which part of Nelson you like. He will tell you which lenders fit and what to check on the house." })}
`;

export default {
  slug: "/mortgage-broker-nelson/",
  h1: "Mortgage broker in Nelson, BC: buying a home or moving to Nelson",
  lede: "Buying in Nelson, or moving to the West Kootenay? Joshua Resvick, Xeva Mortgage, serves Nelson by phone and video from his Surrey office. Remote work, heritage homes, laneway houses and the short-term rental cap, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Cities served", "/bc-mortgage-broker-service-areas/"], ["Serving Nelson", "/mortgage-broker-nelson/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Nelson?", a: "No. Joshua works from his Surrey office and serves Nelson and the West Kootenay by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally, so you can start before you move." },
    { q: "How much do I need to buy a home in Nelson?", a: "At BC Assessment's typical 2026 values, a $699,000 house needs at least $44,900 down and a $560,000 strata home needs $31,000. A qualifying first-time buyer pays about $3,980 in transfer tax on the house and $1,200 on the strata home." },
    { q: "Can I buy a Nelson home and keep its Airbnb licence?", a: "No. The City says a short-term rental licence doesn't pass to a buyer. You'd join a wait list, and as of October 2024 the residential quota was full. Don't count on that income to qualify." },
    { q: "Can I get a mortgage in Nelson on remote work income?", a: "Yes. If you're an employee, lenders read your salary the same way wherever you live. A job letter that confirms remote work helps. If you're self-employed, lenders usually want two years of tax returns." },
    { q: "Will a lender count rent from a laneway house in Nelson?", a: "Often, if it's built with permits and the rent is documented. Many lenders count part of the rent toward your income. An unpermitted unit usually counts for nothing. Check the City's rules for your lot first." },
    { q: "Are older Nelson homes harder to finance?", a: "Not usually, but they need a closer look. Lenders and insurers may ask about the roof, wiring, heating and foundation. Get an inspection and an insurance quote before you remove conditions." }
  ]
};
