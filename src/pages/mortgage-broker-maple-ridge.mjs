import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-maple-ridge/#service", name: "Resvick Mortgages, serving Maple Ridge", url: SITE.origin + "/mortgage-broker-maple-ridge/", areaServed: [{ "@type": "City", name: "Maple Ridge", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Pitt Meadows", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves Maple Ridge and Pitt Meadows by phone and video from his Surrey office. The city has commuter townhomes, homes with suites and rural acreage. Each one is financed a little differently.",
  who: "Maple Ridge and Pitt Meadows buyers, renewers and refinancers, especially with a suite, an acreage or a Vancouver commute.",
  next: "Book a 15-minute call and tell Joshua which kind of home you have in mind."
})}
<p>Maple Ridge sits between the Fraser River and the Golden Ears mountains. It is one city, but it holds several separate housing markets. Haney, the downtown, has condos and townhouses near the bus exchange. Albion and Silver Valley have newer family homes. Farther east, Whonnock and Ruskin have large lots and country properties.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves Maple Ridge and Pitt Meadows from his Surrey office, by phone and video. There's no Maple Ridge branch. Instead, there's a broker who was an underwriter for five years, has ten years as a broker and has funded over 1,000 mortgages. He handles your file himself.</p>

${ratesStrip()}

<h2>Start with the kind of home</h2>
<p>In Maple Ridge, the type of home often matters more than the neighbourhood. A condo, a house with a suite and a five-acre lot are three different files. Lenders read each one with different rules, so it pays to know which you are buying before you write an offer.</p>
<h3>The commuter</h3>
<p>Many buyers here work somewhere else in Metro Vancouver. The West Coast Express runs weekday commuter trains to downtown Vancouver, with a stop at Port Haney. Check the current timetable before you plan around it.</p>
<p>Lenders don't price a commute. They look at your income, your debts, your credit and your down payment. What matters is how you are paid. Salary, hourly pay with overtime, commission and self-employment are all read differently. If you run a business, the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the routes.</p>
<h3>The new-home buyer</h3>
<p>Albion, Silver Valley and the downtown core all have newer homes. Some are finished. Others are presales that complete a year or more after you sign. A presale needs a different plan for the rate hold and the final approval. The <a href="/presale-mortgages-bc/">presale mortgage guide</a> walks through it. A <a href="/mortgage-pre-approval-bc/">real pre-approval</a> should come before you sign anything.</p>

<h2>Suites in Maple Ridge: what the City says and what lenders ask</h2>
<p>A legal suite can help you qualify. An illegal one can cause problems. So check the rules before you count on the rent.</p>
<p>The City of Maple Ridge allows one secondary suite per lot, inside the same building as a single detached house. The suite can't be larger than 40 percent of the building's floor area. It needs a building permit, and it can't be in the floodplain area. If both an upper floor and a suite are rented, the property also needs a business licence. (City of Maple Ridge, Secondary Suites page, updated February 4, 2026, read October 2026.)</p>
<p>The City has also widened what is allowed on many urban lots. Lots in the Urban Area on city water and sewer can often hold more than one extra unit, including a detached unit such as a coach house. Limits depend on lot size, servicing and natural hazards. Parking and an engineering review apply. (City of Maple Ridge, Small-Scale, Multi-Unit Housing page, updated June 5, 2026, read October 2026.) Always confirm a specific lot with the City before you buy.</p>
<p>For a lender, the question is simple. Is the suite permitted, and is the rent documented? A permitted suite lets many lenders count part of the rent. An unpermitted one usually can't be counted at all. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the two methods. If you already own the home, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers borrowing to build one.</p>

<h2>Acreage and rural lots: Whonnock, Ruskin and the ALR</h2>
<p>Maple Ridge still has working farmland. The Agricultural Land Reserve covers 3,782 hectares, about 15 percent of the city. The City names blueberries, dairy, nurseries and greenhouses among its main farm products. (City of Maple Ridge, Rich Agricultural Land page, read October 2026.)</p>
<p>That matters when you are buying a country property. Land in the reserve has its own rules about what can be built and used. A lender cares about the same things you should. Is the property mainly a home or mainly a business? How much of the value is land? Do the well and septic system work?</p>
<p>Many residential lenders limit how much land value they will count, and some decline farm buildings. Others, including some B lenders, are more flexible. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> explains the property types. If you plan to renovate after you buy, the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> shows how the money can be added to the mortgage.</p>

<h2>What Joshua does for Maple Ridge clients</h2>
<ol>
<li><strong>Sorts out the property type first.</strong> Before the offer, he checks whether the home is a plain residence, has a suite or sits on land that changes the lending rules.</li>
<li><strong>Compares lenders in writing.</strong> You get a <a href="/lender-comparison-report/">Lender Comparison Report</a> with rate, term, penalty method, prepayment privileges and portability side by side.</li>
<li><strong>Runs the file to funding.</strong> You get secure document links and updates at each step. Your realtor, appraiser and lawyer hear from him directly.</li>
<li><strong>Keeps watching afterwards.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and contact about six months before your maturity date. A renewal gets compared instead of signed by default.</li>
</ol>

${callout("What you pay", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, such as some acreage or self-employed deals. In BC, they must be disclosed in writing on BCFSA's Form 1A before you commit. If your file needs one, you'll know the cost before you decide.</p>")}

<h2>Buying, renewing and refinancing in Maple Ridge</h2>
<p><strong>First-time buyers</strong> here can use the same programs as anywhere in BC. That includes the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> shows how to combine them.</p>
<p><strong>Renewing homeowners</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> covers the timeline, and the <a href="/mortgage-calculators/#renewal">renewal tool</a> in the <a href="/mortgage-calculators/">mortgage calculators</a> compares staying, switching and refinancing on your own numbers.</p>
<p><strong>Refinancing</strong> for a renovation, a suite or debt starts with break-even math. The <a href="/refinance-mortgage-bc/">refinance guide</a> explains how. If you only need a smaller amount and don't want to touch your first mortgage, the <a href="/second-mortgage-bc/">second mortgage page</a> covers that route and what it costs. How your rate is set is on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Pitt Meadows and nearby</h2>
<p>Pitt Meadows is next door. The two communities are linked by Highway 7 and Dewdney Trunk Road, and many buyers look at both. Joshua serves Pitt Meadows the same way, with the same lenders and the same written comparison.</p>
<p>The <a href="/mortgage-broker-coquitlam/">Coquitlam page</a> covers the Tri-Cities side of the commute. The <a href="/mortgage-broker-langley/">Langley page</a> covers the other side of the Golden Ears Bridge, including acreage. To start, use the <a href="/contact/">contact page</a>, which has the phone number, the email and what to have ready.</p>

${cta({ title: "Talk to a broker who serves Maple Ridge", text: "Book a 15-minute call. Tell Joshua what you're buying and how you're paid. You'll leave knowing how a lender will read it and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-maple-ridge/",
  h1: "Mortgage broker serving Maple Ridge and Pitt Meadows, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Maple Ridge and Pitt Meadows from his Surrey office by phone and video. Suites, acreage, new homes and commuter files, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Maple Ridge", "/mortgage-broker-maple-ridge/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a Maple Ridge home with a basement suite?", a: "Yes. If the suite is permitted under City of Maple Ridge rules, with a building permit and a location outside the floodplain, many lenders count a share of documented rent. An unpermitted suite usually can't be counted. The share and the method vary by lender, so Joshua runs both methods on your numbers." },
    { q: "Does a long commute to Vancouver affect my mortgage approval?", a: "Not directly. Lenders assess your income, debts, credit and down payment, not your drive time. Your own budget should include commuting costs, though. What can matter is how you are paid, since salary, overtime, commission and self-employed income are each read differently. Joshua matches the lender to your pay type." },
    { q: "Can I finance an acreage in Whonnock or Ruskin?", a: "Often, but not with every lender. Many residential lenders limit the land value they count, give farm buildings little or no value and want proof the well and septic work. Land in the Agricultural Land Reserve adds rules. Identify the property type with Joshua before the offer is written." },
    { q: "Do you serve Pitt Meadows as well as Maple Ridge?", a: "Yes. Joshua serves Pitt Meadows exactly as he serves Maple Ridge, by phone, video and secure document exchange. The two communities are close, and many buyers shop in both. BC lenders and rules are provincial, so the broker's location doesn't change your options." },
    { q: "Do I have to travel to Surrey to work with Joshua?", a: "No. Most files are done by phone, video and secure document exchange, and your appraiser and lawyer are local to you. If you'd rather meet in person, ask on the first call. His office is in Surrey, and there's no Maple Ridge branch." }
  ]
};
