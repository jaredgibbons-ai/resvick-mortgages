import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-powell-river/#service", url: SITE.origin + "/mortgage-broker-powell-river/", areaServed: [{ "@type": "City", name: "Powell River", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "qathet Regional District" }] };

const body = `
${short({
  answer: "I serve Powell River and the qathet region by phone and video from my Surrey office. Many buyers here are retirees, remote workers and people moving from the Lower Mainland or the Island. Getting here takes a ferry, but getting a mortgage doesn't.",
  who: "Buyers and owners in Powell River, Westview, Cranberry, Lund, Texada Island and the rest of the qathet region.",
  next: "Book a 15-minute call. Say where you live now, how you earn, and when you hope to cross over."
})}
<p>Powell River sits on the upper Sunshine Coast, on the mainland but cut off from it by road. You reach it by ferry from Comox on the Island, or by two ferries and a drive from the Lower Mainland. That keeps the pace slow and the prices lower, and it draws a particular kind of buyer.</p>
<p>I'm Joshua Resvick with Xeva Mortgage. I spent five years underwriting mortgages for a lender before I moved to brokering, so I read a file the way the lender will. I work from Surrey, and my qathet clients deal with me by phone, video and secure upload. There is no office in town. Start with a <a href="/contact/">15-minute call</a>, well before you book the ferry.</p>

${ratesStrip()}

<h2>What homes cost here</h2>
<p>BC Assessment's typical single-family value in Powell River was $580,000 for 2026, up 1%. Across the water in the Comox Valley, Courtenay was $752,000. (BC Assessment, Vancouver Island 2026 Property Assessments, January 2, 2026, read November 2026). Assessed values are not sale prices, and they move each year. They do show why buyers from bigger markets take the ferry over.</p>
<p>Lower prices mean a smaller down payment in dollars. On a $580,000 home, the minimum is $33,000, which is 5% of the first $500,000 plus 10% of the rest. The <a href="/down-payment-guide-bc/">down payment guide</a> shows how that's worked out.</p>

${costToBuy("Powell River", [["Typical house", 580000]], "Vancouver Island")}

<h2>Moving to Powell River</h2>
<p>The region's housing study noted retirees and remote workers moving in. It put the City's population at 13,157 in 2016. It also found a regional rental vacancy rate of 0.5% in 2019 and 1.7% in 2020. (qathet Regional District, Regional Housing Needs Study, April 2021, read November 2026). Renting while you look can be hard, so many newcomers buy first.</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Sort out the pre-approval at home.</strong> Do it before the ferry trip, so you only view homes you can buy. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> shows what to send.</li>
<li><strong>Book your viewings in one trip.</strong> With ferries involved, a focused visit saves time and money. A realtor can also show homes by video.</li>
<li><strong>Allow a longer closing.</strong> It gives you time to sell, pack and book the move.</li>
<li><strong>Plan for the home you leave.</strong> If you own elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> can cover a short gap in some cases.</li>
</ol>

<h2>Remote work and self-employed income</h2>
<p>Remote workers are a big part of the move here. If you work for an employer elsewhere, lenders read your salary the same way they would in Vancouver. A job letter that confirms you can work remotely helps. If your employer wants you in an office some days, say so up front.</p>
<p>Freelancers, consultants and small business owners are different. Lenders usually want two years of tax returns, and they look at net income after expenses. Some lenders will consider gross business income with a larger down payment. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> covers the options, and the <a href="/newly-self-employed-mortgage/">newly self-employed page</a> helps if you just made the switch.</p>

<h2>Retirees and downsizers</h2>
<p>A lot of retirees come with money from selling a bigger place, and no paycheque. Lenders commonly count pensions, CPP, OAS and registered income from statements. A big down payment can offset a smaller income. When your current home sells usually sets the timeline. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> explains how to plan it, and the <a href="/mortgages-for-retirees-and-seniors/">retirees page</a> covers how income is counted.</p>

<h2>The mill and the local economy</h2>
<p>Powell River was built around its paper mill. In August 2023, Paper Excellence announced it was permanently curtailing the mill. (Domtar news release, August 16, 2023, read November 2026). Some families lost their main income, and others changed work. If your income changed in the last two years, talk to me before you apply. Lenders want to see that new income is stable.</p>

<h2>Short-term rentals in Powell River</h2>
<p>The City allows short-term rentals only in the host's principal residence, in listed residential zones, one per lot. Hosts need a City business licence, which the City lists at $180 a year, plus the provincial registration. The licence number has to be in the listing. (City of Powell River, Short-term rentals, read November 2026).</p>
<p>So a vacation rental isn't an investment play here. Renting a room or a suite in the home you live in can be. Lenders are careful with short-term income, and many won't count it at all. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental guide</a> explains what they look for.</p>

<h2>Suites and carriage houses</h2>
<p>The City allows one secondary suite in a single-family home. It must be registered with the City and inspected. Carriage houses have their own rules. (City of Powell River, Secondary suites, read November 2026). A registered suite is exactly what a lender wants to see before counting rent. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two common methods.</p>

<h2>Tla'amin Nation and treaty land</h2>
<p>Tla'amin Nation is just north of the City. Its treaty took effect on April 5, 2016. Tla'amin owns about 8,323 hectares of treaty land and makes its own laws for it. (Government of Canada, Tla'amin Final Agreement news release, 2016, read November 2026). Treaty land is not the same as reserve land, and it isn't the same as a City lot either. If you are a member, or you are looking at a home on Tla'amin land, tell me at the start. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</p>

<h2>Texada, Lund and rural lots</h2>
<p>Outside the City, homes on Texada Island, near Lund or along the highway are often on large lots with a well or septic system. Lenders commonly ask for water and septic tests. A home reached by a second ferry may have very few comparable sales. Appraisers may reach further back in time, and a low value can change your down payment. Budget for this, and see the <a href="/closing-costs-bc/">closing costs guide</a>.</p>

<h2>Working together from across the water</h2>
<p>I begin with how you earn. A salary paid from Vancouver, a pension, a new consulting business and a local job all suit different lenders. Then I look at the property: a registered suite, a Texada well, Tla'amin treaty land or a lot with few nearby sales will each steer the choice.</p>
<p>You'll get your options written out in a <a href="/lender-comparison-report/">Lender Comparison Report</a>, comparing term, penalty method and portability. After you move in, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means a yearly review and a call around six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> walks through it.</p>

${callout("What you pay for the advice", "<p>Usually nothing. With an A lender, the lender pays the broker. A unique rural home or brand-new self-employment can mean a B or private lender, and that may carry a fee. If it does, BCFSA's Form 1A shows it to you in writing before you agree.</p>")}


<p>Before we talk, it can help to read the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, the <a href="/mortgage-calculators/">mortgage calculators</a> and <a href="/mortgage-rates-bc/">how BC mortgage rates are set</a>.</p>
${cityFacts("powell-river")}
${nearbyCallout("powell-river", callout)}

${cta({ title: "Talk to a broker who serves Powell River", text: "Book a 15-minute call. Tell me where you live now, how you earn and what kind of place you have in mind. I'll map out the lenders that fit and the steps before your move." })}
`;

export default {
  slug: "/mortgage-broker-powell-river/",
  h1: "Mortgage broker in Powell River, BC: buying a home or moving to Powell River",
  lede: "Buying in Powell River, or moving to the qathet region? I'm Joshua Resvick, with Xeva Mortgage, and I serve the upper Sunshine Coast by phone and video from my Surrey office. Remote work, retirees, suites and ferry-access lots, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Cities served", "/bc-mortgage-broker-service-areas/"], ["Serving Powell River", "/mortgage-broker-powell-river/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Powell River?", a: "No. I work from my Surrey office and serve Powell River and the qathet region by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally, so you can start before you move." },
    { q: "How much do I need to buy a home in Powell River?", a: "At BC Assessment's typical 2026 value of $580,000, the minimum down payment is $33,000. A qualifying first-time buyer pays about $1,600 in property transfer tax. With under 20% down, the CMHC premium is added to the mortgage. Legal fees and an inspection come on top." },
    { q: "Can I get a mortgage on remote work income?", a: "Yes. If you're an employee, lenders read your salary the same way wherever you live. A job letter that confirms remote work helps. If you're self-employed, lenders usually want two years of tax returns and look at net income." },
    { q: "Can I rent my Powell River home on Airbnb?", a: "Only your principal residence, in listed zones, one per lot. You need a City business licence and the provincial registration. Many lenders won't count short-term rent at all, so don't rely on it to qualify." },
    { q: "Is Powell River on Vancouver Island?", a: "No. It's on the mainland's upper Sunshine Coast, but there's no road to the rest of the mainland. Most people reach it by ferry from Comox on the Island, or by two ferries from the Lower Mainland." },
    { q: "Can I buy a home on Texada Island with a regular mortgage?", a: "Often, if it's a year-round home with proper water, septic and access. There may be few comparable sales, so the appraisal can come in low. A seasonal cabin may be treated as a second home. Share the listing with me early." }
  ]
};
