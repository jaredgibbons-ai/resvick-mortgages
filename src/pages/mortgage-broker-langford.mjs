import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-langford/#service", name: "Resvick Mortgages, serving Langford and the Westshore", url: SITE.origin + "/mortgage-broker-langford/", areaServed: [{ "@type": "City", name: "Langford", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Colwood", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Westshore, Capital Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Langford, Colwood and the rest of the Westshore by phone and video. Most Westshore files involve a townhouse, a new build or a home with a suite. Each is read differently by lenders.",
  who: "Westshore buyers, military and government households, and owners thinking about a suite or a renewal.",
  next: "Book a 15-minute call and say which type of home you are weighing."
})}
<p>Langford is a city west of Victoria, on the main road out toward the Malahat. Its neighbours are Colwood, View Royal and Metchosin, with the Highlands to the north. Together they are often called the Westshore. Inside Langford itself you will hear names like Goldstream, Langford Lake, Westhills and Bear Mountain.</p>
<p>Joshua Resvick is a Xeva Mortgage broker with a licence from BCFSA. He worked as an underwriter for five years before brokering, and he has been a broker for ten. Over 1,000 mortgages have been funded through him. His office is in Surrey, so there is no Island branch. Westshore clients work with him by phone, video and secure uploads, and <a href="/contact/">a 15-minute call</a> is the usual first step.</p>

${ratesStrip()}

<h2>What sets Westshore files apart</h2>
<p>Buyers on the Westshore tend to choose between a few clear options. The first is a new or newly built home. The second is a townhouse in a strata. The third is a detached house with, or ready for, a suite. A fourth is a larger lot in one of the quieter neighbouring districts. The mortgage steps are different for each one.</p>
<p>That is why Joshua asks about the home before he asks about the rate. A rate is only useful once the right lender is chosen, and the right lender depends on the property and your pay.</p>

<h3>New builds and presales</h3>
<p>Newer homes are common in the growing parts of the Westshore. Some are finished and ready for possession. Others are presales that complete months or years after you sign.</p>
<p>A presale needs a plan for the long gap. You will want to know how long a rate can be held, what happens if your income changes, and what the lender needs at completion. The <a href="/presale-mortgages-bc/">presale mortgage guide</a> explains each step. A <a href="/mortgage-pre-approval-bc/">real pre-approval</a> should come before you sign a contract.</p>
<p>New homes can also bring a tax question. Federal and provincial rules for first-time buyers of new homes have changed more than once. The <a href="/guides/first-time-home-buyer-gst-rebate-2026/">GST rebate guide</a> shows what applied and when, and the <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> lists the others.</p>

<h3>Townhouses and strata homes</h3>
<p>For a townhouse or condo, the lender looks at the whole building as well as you. It reads the strata minutes, the budget, the reserve fund and any planned levies. A weak building can sink a strong buyer.</p>
<p>Ask your realtor for the strata documents early, and send them to Joshua before the subject-removal date. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists what lenders check and why.</p>

<h2>Incomes in Langford</h2>
<p>Langford's median household income was $93,000 for 2020. About 13.1 percent of workers were self-employed. Public administration was the largest industry, narrowly ahead of health care and retail. (Statistics Canada, 2021 Census Profile, read October 2026). Public administration covers federal, provincial and local government jobs, which tend to bring pay that is steady and easy to document. Lenders vary on how they treat a posting or a new employer, so share your start date and employer details at the beginning of the file.</p>
${censusTable("langford")}

<h2>Suites, garden suites and small-scale housing</h2>
<p>The Province now requires cities to allow more homes on lots that used to hold one house. Under Bill 44, local governments had to update their zoning bylaws by June 30, 2024, unless they received an extension. A second round of changes under Bill 25 carries a deadline of June 30, 2026, again except where a local government applied for an extension. The Province sets a floor of three units on lots of 280 square metres or less, and four on larger lots. Some larger lots near frequent bus service can have up to six. (Province of BC, Small-scale, multi-unit housing, last updated January 20, 2026, read October 2026.)</p>
<p>Langford wrote its own version into its zoning bylaw. It adopted Bylaw No. 2183, Zoning Bylaw Amendment No. 726, on June 17, 2024. (City of Langford, Zoning Bylaw No. 300, List of Amendments, page dated 17 Aug 26, read October 2026.) Lots of 280 square metres or less can hold up to three units. Lots over 281 square metres, up to about one acre (4,047 square metres), can hold up to four. Within 400 metres of a prescribed transit stop, up to six can be allowed. The bylaw names three kinds of suite: secondary, garden and carriage. (City of Langford, Zoning Bylaw No. 300, One and Two Family Residential Zones, consolidated to 29 Jun 26, read October 2026.) The City has amended these rules since 2024. Suite details, including any lot-size limit, sit in a separate section of the bylaw. Confirm them with Langford before you rely on them.</p>
<p>For a lender, the points are practical. Is the suite legal and permitted? Is there a lease or a rental history? A permitted suite often lets a lender count part of the rent. An unpermitted one usually can't be counted. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the two methods. If you own a home and want to build one, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers the borrowing side.</p>

<h2>Military and government households</h2>
<p>Some Westshore households are tied to CFB Esquimalt, the provincial government or the health authority. These are steady, documented incomes, which lenders usually like. The difference is in the details. A posting can mean a move on short notice. A contract role is not a permanent one.</p>
<p>If you are in the Forces, the <a href="/mortgages-for-military-and-veterans/">military and veterans page</a> explains how lenders read service pay and allowances. If a posting could move you in a few years, ask about <a href="/porting-your-mortgage/">porting</a> before you choose a term. Porting lets you take your rate to the next home, though you still have to qualify again.</p>

<h2>Larger lots in the neighbouring districts</h2>
<p>Not every Westshore property sits on a city lot. Metchosin and the Highlands tend to have larger, more rural parcels. Those can come with wells, septic systems and rules about what can be built. Lenders may ask for water tests and septic reports, and some limit the land value they will count.</p>
<p>If you are looking at a larger lot, read the <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a>. Name the property type to Joshua before you write an offer, so the financing condition you ask for is realistic.</p>

<h2>How Joshua helps Westshore clients</h2>
<ol>
<li><strong>Starts with the home.</strong> New build, strata, suite or acreage each point to different lenders, so he sorts that out before any application goes in.</li>
<li><strong>Puts the options on paper.</strong> You receive a <a href="/lender-comparison-report/">Lender Comparison Report</a> with rate, term, penalty method, prepayment room and portability for each lender.</li>
<li><strong>Works alongside your realtor and lawyer.</strong> Documents travel by secure link. Dates and conditions are shared with the people who need them.</li>
<li><strong>Keeps going after the keys.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> he reviews the mortgage every year and reaches out before the term ends.</li>
</ol>

${callout("What a broker costs here", "<p>Most Westshore purchases and renewals are placed with an A lender. In that case the lender pays Joshua, and your cost for his service is zero. A few files, such as unusual income or a rural property, may need a B lender or a private lender. When that happens, BCFSA's Form 1A puts any fee in writing before you commit.</p>")}

<h2>Buying, renewing and refinancing on the Westshore</h2>
<p><strong>First-time buyers</strong> can combine the provincial transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan, if each applies. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows the order.</p>
<p><strong>Renewals</strong> are worth a look four months before maturity. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline, and the <a href="/mortgage-calculators/">mortgage calculators</a> let you test staying, switching and refinancing with your own numbers.</p>
<p><strong>Self-employed and contract workers</strong> are read through tax returns and contracts, not just pay stubs. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes. To see how a rate is set, visit the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby</h2>
<p>Joshua also serves <a href="/mortgage-broker-victoria/">Victoria</a>, where heritage homes and condos dominate, and <a href="/mortgage-broker-nanaimo/">Nanaimo</a>, a drive up the Island. Many Westshore buyers compare all three before they decide.</p>

<p class="more-links"><strong>More for Langford buyers.</strong> Pages that may fit your situation: <a href="/mortgages-for-military-and-veterans/">military and veterans</a>, <a href="/mortgages-for-government-and-city-employees/">government and city employees</a> and <a href="/mortgages-for-first-responders/">first responders</a>. For the basics, see the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, <a href="/down-payment-guide-bc/">down payment guide</a> and <a href="/closing-costs-bc/">closing costs guide</a>. You can also read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> or <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${cityFacts("langford")}
${nearbyCallout("langford", callout)}

${cta({ title: "Talk to a broker who serves the Westshore", text: "Book a 15-minute call. Tell Joshua which home you are looking at and how you are paid. You will leave with a plan and a list of what to gather." })}
`;

export default {
  slug: "/mortgage-broker-langford/",
  h1: "Mortgage broker serving Langford and the Westshore, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Langford, Colwood and the Westshore by phone and video. New builds, townhouses, suites and military or government incomes, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Langford", "/mortgage-broker-langford/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage for a Langford townhouse?", a: "Yes. For a strata townhouse, the lender reviews the building as well as you. It reads the minutes, the budget, the reserve fund and any planned levies. Send the strata documents to Joshua before your subject-removal date so a weak building does not surprise you late in the process." },
    { q: "Will new-home tax rebates help me buy in Langford?", a: "They can, but the rules have conditions and have changed more than once. Federal and provincial relief for first-time buyers of new homes depends on price, use and timing. Joshua explains which programs apply to your purchase, and the first-time buyer pages list each program with its test." },
    { q: "Can I count rent from a garden or carriage suite?", a: "Often, if the suite is permitted and the rent is documented. Langford's zoning bylaw names secondary, garden and carriage suites, and the number of units a lot can hold depends on its size (City of Langford, Zoning Bylaw No. 300, One and Two Family Residential Zones, consolidated to 29 Jun 26, read October 2026). Check the rules for your lot with the City. Lenders count a share of the rent, and the share and method vary. An unpermitted suite usually cannot be counted at all." },
    { q: "I am posted to CFB Esquimalt. Can I buy before I move?", a: "Often, yes, with a plan. Lenders look at your service pay, allowances and the stability of your income. Ask about portability and the penalty terms before you choose a mortgage, because a future posting could mean selling. The military page explains how lenders read this kind of file." },
    { q: "Do I need to be in Victoria to work with Joshua?", a: "No. Joshua works from his Surrey office and serves the Westshore by phone, video and secure document upload. Your appraiser and lawyer or notary are local to you. BC lenders and rules apply across the province, so the broker's location does not change your options." }
  ]
};
