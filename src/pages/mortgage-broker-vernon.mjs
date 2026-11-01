import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";

const place = (name) => ({ "@type": "City", name, containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } });
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-vernon/#service", name: "Resvick Mortgages, serving Vernon and the North Okanagan", url: SITE.origin + "/mortgage-broker-vernon/", areaServed: [place("Vernon"), place("Coldstream"), { "@type": "AdministrativeArea", name: "Regional District of North Okanagan" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Vernon, Coldstream and the North Okanagan by phone and video from his Surrey office. In this part of BC, the address decides which bylaws apply, and the land decides which lenders will say yes.",
  who: "Buyers, renewers and refinancers around Vernon, especially with lake or ski-hill property, hobby farms, orchard land or a suite.",
  next: "Book a 15-minute call and give Joshua the property address you are looking at."
})}
<p>Start with a question that sounds simple. Which Vernon do you mean? The City of Vernon is only one of the local governments in the North Okanagan. Its neighbour, the District of Coldstream, is a separate municipality. Beyond both lie rural electoral areas, including Swan Lake and Commonage (Area B) and BX and SilverStar (Area C). (Regional District of North Okanagan, member and electoral area list, read October 2026).</p>
<p>That matters for a mortgage, because each government has its own zoning, its own suite rules and its own services. Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. A decade of brokering and five years of underwriting before that taught him to check the property first. He works from Surrey by phone, video and secure uploads, with no North Okanagan branch.</p>

${ratesStrip()}

<h2>Lake, mountain and getaway property</h2>
<p>Kalamalka Lake, Okanagan Lake and Swan Lake draw people who want a place for summers. SilverStar draws the winter crowd. Some of these buyers plan to live here full time within a few years. Others plan to visit.</p>
<p>The difference changes the mortgage. A home you will live in can be insured with a smaller down payment. A getaway you won't occupy generally can't, so plan on at least 20 percent down, and some lenders want more. The <a href="/investment-property-mortgages-bc/">investment property page</a> explains how rent income is counted if you plan to share the place.</p>
<h3>If you plan to rent it by the night</h3>
<p>Vernon's rules are strict. The City allows short-term rental in a home, suite, accessory dwelling unit or apartment only for stays under 90 consecutive days. Operators must generally live in the home. A suite or accessory building must be run by a principal resident who lives on the same lot. A City business licence and provincial requirements also apply (City of Vernon, Short-Term Rental Regulations, read October 2026).</p>
<p>So a second home bought mainly to be an Airbnb may not be allowed to work that way. Check zoning and the guidebook before you write an offer. Then read the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a>, because lenders view that income cautiously.</p>

<h2>Incomes in Vernon</h2>
<p>Vernon's median household income was $73,500 for 2020, and 15.8 percent of workers were self-employed. Retail led the industries, then health care and construction. (Statistics Canada, 2021 Census Profile, read October 2026). Retail and service jobs often pay hourly, with changing hours. A lender typically looks at your average over a longer period. If you have a second job, bring the pay records for it too, since some lenders will count it after a track record.</p>
${censusTable("vernon")}

<h2>Farmland and the ALR around Vernon</h2>
<p>Orchards, hay fields and hobby farms surround the city. Much of that land sits inside the Agricultural Land Reserve, and the Province sets housing rules there. They apply on top of any municipal bylaw.</p>
<p>The Agricultural Land Commission says a parcel generally gets one principal residence. No application is needed if the home is 500 square metres or less in floor area. Fill must also stay at or below 1,000 square metres. A secondary suite is allowed only inside the principal residence, not in a separate building. A detached additional residence is allowed without an application only in limited cases. On parcels of 40 hectares or less, it is capped at 90 square metres. Local governments can restrict these uses further. (Agricultural Land Commission, Housing in the ALR, published April 15, 2026, read October 2026).</p>
<p>A lender reads that same land in its own way. It asks how much of the value is land, whether the buildings add value and whether the property is mainly a home. Many residential lenders limit what they count. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> sets out the property types and which lenders tend to fit each one.</p>

<h2>Suites and carriage houses in Vernon</h2>
<p>Vernon now uses Zoning Bylaw 6000, which Council adopted on June 24, 2024. It replaced Zoning Bylaw 5000 (City of Vernon, Zoning Bylaw 6000 web page, read October 2026). The City counts secondary suites and accessory dwelling units, such as garden suites or carriage houses, as small-scale multi-unit housing (City of Vernon, Housing Legislation Changes, read October 2026).</p>
<p>In the bylaw's housing zone for former single-home lots, the number of units depends on servicing and lot size. A lot without a community sewer connection may have one home and one secondary suite. A lot on community sewer may add one accessory dwelling unit. Larger serviced lots can hold more units (City of Vernon, Zoning Bylaw 6000, Section 9.1, read October 2026). Zone, servicing and slope all matter, so confirm the rules for any lot.</p>
<p>For a suite that already exists but was never approved, the City offers an assessment. The inspection guides the owner on Building Code and zoning issues. The City's form lists a $150 application fee, but it is undated, so confirm the fee first (City of Vernon, Secondary Suite Assessment Form, read October 2026).</p>
<p>Lenders want a permitted suite and documented rent before they count any of it. Ask the seller for permit proof before you remove subjects. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows what the income can add to your approval.</p>

<h2>Who buys in the North Okanagan</h2>
<p>Move-up families, retirees and seasonal workers each bring a different file. Retirement income is counted, but lenders vary in how they average it. Seasonal and tourism pay needs a track record. Manufactured homes have their own rules, covered on the <a href="/mobile-home-mortgages-bc/">manufactured home mortgage page</a>.</p>
<p>Selling a home elsewhere in BC to move here? The <a href="/downsizing-and-your-mortgage/">downsizing page</a> shows how sale proceeds can shape the mortgage you need. It also covers whether you need one at all.</p>

<h2>Three checks before you make an offer</h2>
<ol>
<li><strong>The government.</strong> City, Coldstream or regional district? Joshua confirms which bylaws and services apply.</li>
<li><strong>The land.</strong> Is any of it in the ALR? What can be built or rented on it? He flags lender limits early.</li>
<li><strong>The income.</strong> He matches how you are paid to a lender whose rules fit, then puts the options in a <a href="/lender-comparison-report/">Lender Comparison Report</a>.</li>
</ol>
<p>Afterwards, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> adds a yearly review and a nudge ahead of maturity, so your renewal gets compared.</p>

${callout("What you pay", "<p>On most North Okanagan files the lender pays Joshua, and you pay him nothing. Land-heavy or unusual-income files can end up with a B or private lender instead. When that happens, any fee to you is written out on BCFSA's Form 1A before you agree.</p>")}

<h2>Buying, renewing and borrowing against equity</h2>
<p>First-time buyers in Vernon use the same programs as the rest of BC. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> lays out the order, and the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains how a rate is set.</p>
<p>Renewal work should begin about four months before maturity. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the schedule, and the <a href="/mortgage-calculators/">mortgage calculators</a> compare staying, switching and refinancing on your own figures. Orchard, hobby-farm and business owners can start with the <a href="/self-employed-mortgage-bc/">self-employed hub</a>.</p>

<h2>Nearby</h2>
<p>The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the central Okanagan to the south. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers rail, trades and shift income to the north and west. Ready to talk? The <a href="/contact/">contact page</a> shows how to reach Joshua.</p>

<p>If a home you like sits on First Nation land or leased land, it is a different kind of file. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<p class="more-links"><strong>More for Vernon buyers.</strong> Pages that may fit your situation: <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/mortgages-for-teachers-and-school-staff/">teachers and school staff</a>. For the basics, see the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, <a href="/down-payment-guide-bc/">down payment guide</a> and <a href="/closing-costs-bc/">closing costs guide</a>. You can also read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> or <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${cityFacts("vernon")}
${nearbyCallout("vernon", callout)}

${cta({ title: "Talk to a broker who serves the North Okanagan", text: "Book a 15-minute call. Share the address, the land and how you are paid. Joshua will tell you what a lender is likely to say." })}
`;

export default {
  slug: "/mortgage-broker-vernon/",
  h1: "Mortgage broker serving Vernon, Coldstream and the North Okanagan",
  lede: "Joshua Resvick, Xeva Mortgage, serves the North Okanagan from his Surrey office by phone and video. Lake homes, ALR land, suites and renewals, with the property checked before the offer is written.",
  crumbs: [["Home", "/"], ["Serving Vernon", "/mortgage-broker-vernon/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Does it matter whether a home is in Vernon, Coldstream or a rural area?", a: "Yes. Each local government sets its own zoning, suite rules and services, and the rural electoral areas differ again. A lender will ask about the property type and its status. Joshua confirms which bylaws apply before you make an offer, so the mortgage condition matches the real property." },
    { q: "Can I rent my Vernon second home on a short-term basis?", a: "Possibly, but the City generally limits short-term rental to homes where the operator lives, for stays under 90 consecutive days, with a business licence and provincial requirements. A home bought only as a vacation rental may not qualify. Lenders also want at least 20 percent down on homes you won't occupy." },
    { q: "Can I add a suite or second home on ALR land near Vernon?", a: "Only within provincial and local limits. The Agricultural Land Commission allows a secondary suite inside the principal residence, and a detached additional residence only in limited cases, with size caps. Local governments can restrict further. Confirm with the City or district and the Commission before you rely on the rent." },
    { q: "Will a lender finance a hobby farm or orchard property?", a: "Often, but not with every lender. Many residential lenders limit the land value they count, give farm buildings little value and decline working farms. Others, including some B lenders, are more flexible. Joshua identifies the property type first so the financing condition matches what lenders will do." },
    { q: "Do I need to travel to Surrey to work with Joshua?", a: "No. The file runs by phone, video and secure document exchange, and the appraiser and lawyer are local to Vernon. A meeting in person can be arranged by appointment in Surrey. There is no North Okanagan branch, and lenders in BC work the same way for every address." }
  ]
};
