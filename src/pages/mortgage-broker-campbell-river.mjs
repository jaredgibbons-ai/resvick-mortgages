import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-campbell-river/#service", url: SITE.origin + "/mortgage-broker-campbell-river/", areaServed: [{ "@type": "City", name: "Campbell River", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Strathcona Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Campbell River by phone and video from his Surrey office. Buyers here often work in aquaculture, forestry, mining or the trades, or they are retirees and newcomers from the mainland. Rentals are tight, so many people buy sooner than they planned.",
  who: "Buyers and owners in Campbell River, Willow Point, Quadra Island and the rest of the Strathcona region.",
  next: "Book a 15-minute call and tell Joshua how you are paid and when you plan to move."
})}
<p>Campbell River sits on Discovery Passage, north of the Comox Valley on the Island Highway. It is a service centre for the North Island and for the islands across the passage. Fishing, forestry and mining built it. Aquaculture, tourism and remote work have joined them.</p>
<p>I'm Joshua Resvick, and I broker mortgages with Xeva Mortgage. For five years before that, I was the underwriter deciding which files a lender approved. I work out of Surrey and serve Campbell River entirely by phone and video. There's no branch up the Island. You can <a href="/contact/">book a 15-minute call</a> from home, from the boat or from camp.</p>

${ratesStrip()}

<h2>What homes cost here</h2>
<p>BC Assessment's typical single-family value in Campbell River was $680,000 for 2026, about the same as the year before. A typical strata home was $412,000, down 2%. Courtenay was $752,000 for a house, and Nanaimo $769,000. (BC Assessment, Vancouver Island 2026 Property Assessments, January 2, 2026, read November 2026). Assessed values are not sale prices, but they show where Campbell River sits.</p>
<p>A strata home can be the first step for a lot of buyers. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse page</a> explains what lenders check on a strata, from the depreciation report to the fees.</p>

${costToBuy("Campbell River", [["Typical house", 680000], ["Typical strata home", 412000]], "Vancouver Island")}

<h2>Moving to Campbell River</h2>
<p>A lot of buyers don't live here yet. Some are coming for a job. Others are leaving the Lower Mainland or Alberta for a smaller city. Renting first is hard. A 2025 provincial profile says the rental vacancy rate has been below 2% since 2015. (UBCM, Campbell River housing profile, December 2025, read November 2026).</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Line up a pre-approval before the first showing.</strong> You'll know your ceiling, and a rate is held for you while you search. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> has the document list.</li>
<li><strong>Have your job settled.</strong> Most lenders want a signed offer or employer letter. A probation period is often fine with some lenders, but not all.</li>
<li><strong>Pick a closing date that fits your move.</strong> A longer closing gives you time to sell, end a lease or finish a rotation.</li>
<li><strong>Plan for the home you leave.</strong> If you own elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> can cover a gap in some cases.</li>
</ol>

<h2>Aquaculture, forestry, mining and the trades</h2>
<p>The City lists aquaculture, forestry, mining and technology among its key sectors. It calls itself a hub for aquaculture and names two mines in the area. (City of Campbell River, Key sectors, read November 2026). These jobs pay well, but the pay is often uneven.</p>
<ul>
<li><strong>Rotation and camp work.</strong> Lenders read base pay easily. Overtime, camp allowances and bonuses are often averaged over two years. The <a href="/mortgages-for-camp-mine-and-shift-workers/">camp and shift workers page</a> explains how.</li>
<li><strong>Seasonal and contract work.</strong> Fishing, guiding and contract crews usually need two years of history. Some lenders count only the months you are paid.</li>
<li><strong>Owner-operators and contractors.</strong> If you own the truck, boat or business, lenders want tax returns and look at net income. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> covers the routes, and the <a href="/mortgages-for-truckers-and-owner-operators/">owner-operators page</a> covers trucking.</li>
</ul>
<p>Industry towns can see layoffs and closures. Lenders know this, and a steady two-year history helps. If your income changed recently, talk to me before you apply, not after.</p>

<h2>Short-term rentals are not allowed</h2>
<p>This one surprises people. The City's zoning FAQ says short-term rentals are not a permitted use in Campbell River, and the City won't issue business licences for them. Bed and breakfasts are a separate use that can be licensed where zoning allows. (City of Campbell River, Zoning FAQs, read November 2026).</p>
<p>So don't count on vacation rental income to carry a mortgage here. A lender will only count long-term rent from a legal suite or unit. If you were planning to rent by the night, read the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental guide</a> and check with the City first.</p>

<h2>Suites and the 2024 zoning change</h2>
<p>A long-term suite is a different story. A June 2024 zoning update lets owners build 3 to 4 units on most R-I residential lots. The minimum lot is 350 square metres, and the height limit is 10 metres or 3 storeys. A suite needs a building permit. (City of Campbell River, Zoning FAQs, read November 2026).</p>
<p>With vacancy this low, a legal suite rarely sits empty. Many lenders count part of the rent toward your income, which can lift what you qualify for. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two methods.</p>

<h2>Quadra Island, Cortes and rural lots</h2>
<p>Some buyers look across the water at Quadra or Cortes Island, or at rural lots outside the city. These files need more care. A home reached only by ferry may have fewer comparable sales, so the appraisal can come in lower than you hoped. Wells, septic systems and road access all matter. A cabin used part of the year may be a second home, not a principal one. The <a href="/second-home-and-vacation-property-mortgages-bc/">second home page</a> explains how lenders treat those.</p>

<h2>First Nations land in the city</h2>
<p>The City sits in the territory of the We Wai Kai and Wei Wai Kum First Nations. (City of Campbell River, Key sectors, read November 2026). Reserve land lies inside and beside the city. A home on reserve land is owned differently from a fee simple lot, and fewer lenders work on them. I work with a lender that has a program for these homes. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</p>

<h2>Retirees and downsizers</h2>
<p>Campbell River draws retirees who want the water and a lower price. Many come with cash from selling a home on the mainland. Lenders commonly count pensions, CPP, OAS and registered income, and a large down payment can offset a smaller income. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers timing, and the <a href="/mortgages-for-retirees-and-seniors/">retirees page</a> covers how income is counted.</p>

<h2>Working with me from up the Island</h2>
<p>Pay comes first. Rotation work, base pay plus overtime, a pension and an owner-operator business each fit different lenders, and a lender that suits one can turn down another. Then I check the home. A strata, a suite, a Quadra Island well or reserve land all change who will lend.</p>
<p>I lay out the choices in a written <a href="/lender-comparison-report/">Lender Comparison Report</a> with each term, penalty method and portability option. Once you're in, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> gives you a review every year and a heads-up call about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the full timeline.</p>

${callout("The cost of using a broker", "<p>For most Campbell River buyers, nothing. An A lender pays the broker when the mortgage funds. Some files, such as brand-new self-employment or past credit trouble, need a B or private lender and may carry a fee. Any fee is disclosed in writing on BCFSA's Form 1A before you commit.</p>")}

<p class="more-links"><strong>Where to go next.</strong> Compare the other Island towns on the <a href="/mortgage-broker-vancouver-island/">Vancouver Island overview</a>. First-time buyers can start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Check today's benchmarks on the <a href="/mortgage-rates-bc/">BC rates hub</a>, and test your numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>.</p>

${cityFacts("campbell-river")}
${nearbyCallout("campbell-river", callout)}

${cta({ title: "Talk to a broker who serves Campbell River", text: "Book a 15-minute call. Tell Joshua about your rotation or pay, your move date and what you want to buy. He will show you which lenders fit and what papers to line up." })}
`;

export default {
  slug: "/mortgage-broker-campbell-river/",
  h1: "Mortgage broker in Campbell River, BC: buying a home or moving to Campbell River",
  lede: "Buying in Campbell River, or moving here for work? Joshua Resvick, Xeva Mortgage, serves the city by phone and video from his Surrey office. Industry pay, suites, the short-term rental ban and island lots, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Vancouver Island", "/mortgage-broker-vancouver-island/"], ["Serving Campbell River", "/mortgage-broker-campbell-river/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Campbell River?", a: "No. Joshua works from his Surrey office and serves Campbell River by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally, so you can start before you move." },
    { q: "How much do I need to buy a home in Campbell River?", a: "At BC Assessment's typical 2026 values, a $680,000 house needs at least $43,000 down and a $412,000 strata home needs $20,600. A qualifying first-time buyer pays about $3,600 in transfer tax on the house and none on the strata home." },
    { q: "Can I run an Airbnb in Campbell River?", a: "The City's zoning FAQ says short-term rentals are not a permitted use and won't be licensed. Bed and breakfasts are a separate use where zoning allows. Don't count on nightly rental income to qualify. A lender will only count long-term rent." },
    { q: "How do lenders count camp or rotation pay?", a: "Base pay is usually easy. Overtime, camp allowances and bonuses are often averaged over two years, and lenders vary in what they accept. Bring two years of T4s and recent pay stubs. Joshua checks lender rules before you apply." },
    { q: "Can I buy in Campbell River before I move there?", a: "Often, yes. You can get pre-approved by phone or video and make an offer through a realtor. Most lenders want a signed job offer or employer letter. Ask for a closing date that fits your move." },
    { q: "Will a lender count rent from a suite in Campbell River?", a: "Often, if the suite is legal and the rent is documented. The City's 2024 zoning allows 3 to 4 units on most R-I lots, with a building permit. An unpermitted suite usually counts for nothing." }
  ]
};
