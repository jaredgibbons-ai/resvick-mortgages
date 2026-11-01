import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-squamish/#service", name: "Resvick Mortgages, serving Squamish and Whistler", url: SITE.origin + "/mortgage-broker-squamish/", areaServed: [{ "@type": "City", name: "Squamish", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Whistler", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves Squamish, Whistler and the Sea-to-Sky corridor by phone and video from his Surrey office. Remote income, suites, second homes and resort rules are what set these files apart.",
  who: "Squamish and Whistler buyers, renewers and refinancers, including remote workers, owners with a suite and anyone buying a recreational property.",
  next: "Book a 15-minute call and tell Joshua whether the home is a residence, a second home or a rental."
})}
<p>Highway 99 ties Squamish and Whistler to Vancouver, and the same road shapes who buys here. Some people commute south. Others work from a laptop and chose the trails and the water over a city postal code. Many own a business, and some buy a place in the mountains for weekends. Each of those paths leads to a different kind of mortgage file.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He worked as an underwriter for five years, then moved to brokering, and he has funded more than 1,000 mortgages. His office is in Surrey, so Sea-to-Sky clients work with him online and by phone. There is no branch up the highway. <a href="/contact/">Book a 15-minute call</a> to start.</p>

${ratesStrip()}

<h2>How your income is paid matters most</h2>
<p>Lenders don't mark you down for living in the mountains. They look at how you earn and for how long. That is why the same salary can be easy at one lender and awkward at another.</p>
<h3>Remote and contract work</h3>
<p>Plenty of Squamish buyers work remotely for an employer in another city, or invoice clients as a contractor. A remote employee on a permanent salary is usually read like any other employee. A contractor is often read through tax returns, with two years of history preferred. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the routes, and the <a href="/newly-self-employed-mortgage/">newly self-employed page</a> covers shorter track records.</p>
<h3>New jobs and seasonal pay</h3>
<p>A new position, a probation period or seasonal hours can change how a lender counts your income. Tourism, trades and guiding work often involve overtime, tips or a quiet shoulder season. Lenders vary on how much of that they count. The <a href="/guides/mortgage-with-a-new-job-or-probation/">guide on new jobs and probation</a> walks through what lenders ask for.</p>
<h3>The commuter</h3>
<p>If you drive or ride south for work, a lender will not price the trip. Your own budget should include it. What counts for approval is income, debts, credit and the down payment, supported by a proper <a href="/mortgage-pre-approval-bc/">pre-approval</a> before you make an offer.</p>

<h2>Incomes in Squamish</h2>
<p>Squamish's median household income was $111,000 for 2020, one of the higher figures among the cities we cover. About 20.7 percent of workers were self-employed. Professional services, construction and retail were almost level as the three largest industries. (Statistics Canada, 2021 Census Profile, read October 2026). A high self-employed share fits a town of contractors, remote workers and outdoor businesses. Lenders will want two years of tax returns, and some will also want to see your business is stable. Joshua can tell you early if your income reads well.</p>
${censusTable("squamish")}

<h2>Suites, coach houses and short-term rentals in Squamish</h2>
<p>Rent can help you qualify, but only if the unit is legal and the use is allowed. Squamish has clear rules on both points.</p>
<p>The District allows a secondary suite in a single-unit or two-unit dwelling. The suite can be up to 90 square metres or 40 percent of the building's floor area, whichever is less. It allows one accessory dwelling, such as a coach house, on a parcel in zones that permit a single-unit home, with a building permit. Neither needs extra parking. Neither can be strata-titled or sold apart from the main home, and neither may be used for short-term rental. (District of Squamish, Secondary Suites, Accessory Dwelling Units and Multi-Unit Flex-Units page, read October 2026.)</p>
<p>Short-term rental has its own limits. A principal resident may rent their home for fewer than 90 days at a time. This needs a business licence, and each person can hold one. Short-term rental in a suite or coach house is not permitted. A small number of temporary use permits exist for owners who live on the property. (District of Squamish, Short Term Rentals page, read October 2026.) Rules change. Confirm the current version with the District before you rely on rental income.</p>
<p>For a lender, a permitted long-term suite with documented rent can count toward qualifying at many lenders. Income from nightly rental is read much more cautiously, if it is counted at all. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the methods, and the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a> covers lenders who look at it.</p>

<h2>Whistler: resort property has its own rulebook</h2>
<p>Whistler homes fall into groups that lenders treat quite differently, so learn which group your property is in.</p>
<p><strong>Tourist accommodation.</strong> Nightly rental is allowed only on properties whose zoning lists tourist accommodation or temporary accommodation as a use. Residential-zoned homes and employee housing units cannot be rented to tourists for any length of time. Covenants on title, including rental pool covenants, can also limit how a unit is used. Buyers are expected to check the zoning, the covenants and any open permits. (Resort Municipality of Whistler, Tourist Accommodation pages, updated July 8, 2026, read October 2026.)</p>
<p><strong>Employee-restricted homes.</strong> The Whistler Housing Authority oversees price-controlled housing. Some ownership homes are sold on the open market as employee-restricted, to be lived in by a member of Whistler's workforce. (Resort Municipality of Whistler, employee housing page, updated October 24, 2025, read October 2026.) A use or resale limit can change how a lender views the property. Some lenders are more comfortable with it than others.</p>
<p><strong>Ordinary residential homes and condos.</strong> These follow the usual rules. They are the easiest to finance.</p>
<p>The province's principal-residence rule for short-term rentals applies in many BC communities, but Whistler is on the exempt list. (Province of British Columbia, principal residence requirement page, updated September 21, 2026, read October 2026.) That does not change Whistler's own zoning, which still controls nightly rental.</p>

<h2>Second homes and recreational property</h2>
<p>Many Sea-to-Sky purchases are not a main residence. The lending rules change when you will not live in the home full time.</p>
<p>High-ratio default insurance is not available on a property you do not occupy. Plan on at least 20 percent down. Some lenders ask for more. A lender will also want to know how you intend to use the place. A weekend cabin, a long-term rental and a nightly-rental investment are each underwritten differently. The <a href="/investment-property-mortgages-bc/">investment property page</a> sets out how lenders count rent and what they ask for. If you already own a home, you may be able to use its equity. See the <a href="/refinance-mortgage-bc/">refinance guide</a> for the limits.</p>
<p>Three rules differ between Squamish and Whistler, so do not assume they match.</p>
<ul>
<li><strong>Speculation and vacancy tax.</strong> Squamish is on the Province's list of taxable areas. Whistler is not. (Province of British Columbia, Taxable areas for the speculation and vacancy tax, updated December 8, 2025, read October 2026).</li>
<li><strong>Federal ban on non-Canadian buyers.</strong> It applies inside census areas, and Squamish is in one. (Prohibition on the Purchase of Residential Property by Non-Canadians Regulations, SOR/2022-250, read October 2026). The ban is set to end on January 1, 2027, unless Ottawa extends it.</li>
<li><strong>BC additional property transfer tax.</strong> The 20% tax applies only in named regions, and Squamish is not one. (Property Transfer Tax Regulation, B.C. Reg. 74/88, read October 2026).</li>
</ul>
<p>Our <a href="/foreign-buyers-bc/">foreign buyers page</a> has more. A lawyer should confirm the rules for your own purchase.</p>

<h2>What Joshua does for Sea-to-Sky clients</h2>
<ol>
<li><strong>Names the property category.</strong> Residence, second home, rental or restricted unit: he sorts it out before you write an offer, so the financing condition is realistic.</li>
<li><strong>Finds the lender for your pay.</strong> Remote, seasonal, contract and commission income each suit certain lenders. He lines the file up with one before it is submitted.</li>
<li><strong>Compares in writing.</strong> You receive a <a href="/lender-comparison-report/">Lender Comparison Report</a> that sets rate, term, penalty method and flexibility side by side.</li>
<li><strong>Follows up later.</strong> With <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and checks in ahead of maturity.</li>
</ol>

${callout("What you pay", "<p>On most Squamish and Whistler files, an A lender pays Joshua, and the cost to you is zero. Contract-income files and some resort properties can end up with a B or private lender. In that case, BC rules require any fee to you to be shown in writing on BCFSA's Form 1A before you agree.</p>")}

<h2>Buying, renewing and refinancing up the highway</h2>
<p><strong>First-time buyers</strong> here can claim the same help as buyers anywhere in BC, including the First Home Savings Account and the Home Buyers' Plan. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> explains how the pieces fit, and the <a href="/guides/fhsa-and-home-buyers-plan-together/">guide on using both accounts</a> covers the withdrawal rules.</p>
<p><strong>Renewals</strong> are worth planning early, especially when you own a second property. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the timeline. Test your options with the <a href="/mortgage-calculators/">mortgage calculators</a> and the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a>.</p>
<p>For how a rate gets set in the first place, read the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Close to the coast</h2>
<p>Squamish is the gateway to the corridor. If you also look at homes on the North Shore, the <a href="/mortgage-broker-north-vancouver/">North Vancouver page</a> covers that market. The <a href="/mortgage-broker-vancouver/">Vancouver page</a> covers the city at the other end of the highway. The process is the same in each place.</p>

<p class="more-links"><strong>More for Squamish buyers.</strong> Pages that may fit your situation: <a href="/mortgages-for-tech-workers/">tech workers</a>, <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>. For the basics, see the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, <a href="/down-payment-guide-bc/">down payment guide</a> and <a href="/closing-costs-bc/">closing costs guide</a>. You can also read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> or <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${nearbyCallout("squamish", callout)}

${cta({ title: "Talk to a broker who serves Squamish and Whistler", text: "Book a 15-minute call. Tell Joshua how you are paid and how you plan to use the property. You will leave knowing how a lender will read it and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-squamish/",
  h1: "Mortgage broker serving Squamish, Whistler and Sea-to-Sky, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Squamish, Whistler and the Sea-to-Sky corridor from his Surrey office by phone and video. Remote income, suites, second homes and resort property, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Squamish and Whistler", "/mortgage-broker-squamish/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage if I work remotely from Squamish?", a: "Yes. A permanent employee who works remotely is usually assessed like any other employee. A contractor is often assessed through tax returns, and many lenders prefer two years of history. The right lender depends on how you are paid, which Joshua checks before anything is submitted." },
    { q: "Will a lender count rent from a Squamish suite or coach house?", a: "If the unit is permitted and rented long term with documented rent, many lenders count a share of it. Squamish does not allow short-term rental in suites or coach houses, apart from limited permits. Lenders are cautious about nightly-rental income, so Joshua runs the numbers on long-term rent." },
    { q: "How does a lender treat a Whistler property with nightly rental?", a: "With care. Whether nightly rental is allowed depends on the zoning and on covenants such as a rental pool. Some lenders restrict or decline these units, and others lend with conditions. Joshua identifies the property type first and then looks for a lender that fits." },
    { q: "How much down payment do I need for a second home in the mountains?", a: "Plan on at least 20 percent. High-ratio insurance is not available when you will not live in the property, and some lenders ask for more on recreational or rental properties. The exact amount depends on the lender, the property and how you plan to use it." },
    { q: "Do I need to meet Joshua in person?", a: "No. Sea-to-Sky clients work with Joshua by phone, video and secure document upload. There is no branch in Squamish or Whistler, and his office is in Surrey. BC lenders and rules are provincial, so working remotely does not narrow your options." }
  ]
};
