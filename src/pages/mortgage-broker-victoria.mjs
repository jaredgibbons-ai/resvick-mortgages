import { short } from "../lib/short.mjs";
import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const city = "Victoria";
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-victoria/#service", name: "Resvick Mortgages, serving Victoria", url: SITE.origin + "/mortgage-broker-victoria/", areaServed: [{ "@type": "City", name: "Victoria", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Greater Victoria" }] };

const body = `
${short({ answer: "You can get a mortgage in Victoria through a broker who isn't in town. Joshua serves the Island from his Surrey office by phone and video. You sign with a local lawyer or notary.", who: "Greater Victoria buyers, public servants and military families, retirees moving to the Island, and anyone renewing.", next: "Book a 15-minute call, or work out your tax with the <a href=\"/bc-property-transfer-tax-calculator/\">BC property transfer tax calculator</a>." })}
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. His office is in Surrey. He serves Victoria and the rest of Vancouver Island by phone, video and secure document upload.</p>
<p>There's no branch in Victoria, and you won't need one. Every step can be done from where you are, from the first chat to the lawyer's appointment. You get the same broker who has funded over 1,000 mortgages, working your file himself.</p>

${ratesStrip()}

<h2>What makes a Victoria mortgage different</h2>
<p>Greater Victoria is a capital city with its own housing mix. The City of Victoria itself is small and dense. It has heritage houses, house conversions and low-rise condos. Downtown has added a lot of new apartments.</p>
<p>Around it sit Saanich, Oak Bay, Esquimalt, Langford, Colwood, Sidney and the rest of the Capital Region. Each has its own zoning and its own feel. The West Shore has newer subdivisions. The Peninsula has rural lots.</p>
<p>Say a buyer is looking at a character home in Fairfield, a townhouse in Langford and a presale condo in Vic West. That's really three different mortgages. Lenders treat each type of home differently.</p>
<p>The job market is unusual too. Victoria is the seat of the provincial government. Lots of buyers are public servants with salaries and pensions, which lenders like.</p>
<p>There are others too. Canadian Armed Forces members are posted to CFB Esquimalt. There are university and hospital staff and tech workers. There are tradespeople, often self-employed, and retirees from across the country.</p>
<p>Each kind of income is documented differently. A clean file starts with knowing which papers your income actually needs.</p>

<h2>Incomes in Victoria</h2>
<p>Victoria's median household income was $67,500 for 2020, one of the lower figures among the cities we cover. About 15.7 percent of workers were self-employed. Health care was the largest industry, then public administration, then professional services. (Statistics Canada, 2021 Census Profile, read October 2026). Government is a major employer in the capital. A permanent public sector job is often easy for a lender to confirm, and a probation period is a common question. Our page on <a href="/mortgages-for-government-and-city-employees/">government and city employee mortgages</a> covers it.</p>
${censusTable("victoria")}

<h2>Property types that need a careful file</h2>
<h3>Character and heritage homes</h3>
<p>Older houses are common in Victoria's core neighbourhoods. Lenders finance them all the time, but the appraisal matters more than usual. Old wiring, old oil tanks, foundations and roofs can all come up. An insurer may ask questions before writing a policy.</p>
<p>None of that is a reason to walk away. It's a reason to have a broker who knows which lenders are comfortable with older homes. You'll know what conditions to expect, so the financing condition in your offer is realistic.</p>
<h3>Suites and garden suites</h3>
<p>The City of Victoria allows secondary suites and detached garden suites as long-term rentals. Its Official Community Plan also allows things like house conversions and houseplexes in residential areas (City of Victoria, Residential Infill and Suites, read October 2026). Under the current Zoning Bylaw, as amended October 2, 2025, a garden suite and a secondary suite can both be on one lot. Older Victoria rules did not allow that, and they still apply to lots that remain under the old bylaw. (City of Victoria, Zoning Bylaw 2018, read October 2026). Check which bylaw covers the lot you are buying.</p>
<p>A legal suite can change what you qualify for, because lenders count part of the rent. How much they count varies by lender. So does the method. Some subtract the rent from your costs. Others add it to your income. That's why the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> exists.</p>
<p>Planning to add a suite to a house you already own? The <a href="/secondary-suite-refinance/">secondary suite refinance</a> program may apply.</p>
<h3>Strata homes</h3>
<p>Condos and townhouses are a big share of what sells in Greater Victoria. For a strata purchase, the lender reviews the building as well as you. It looks at the depreciation report, the reserve fund, any special levies and the building's insurance.</p>
<p>Leasehold and co-op homes exist in the region, and they need specific lenders. Mention leasehold or co-op early, and Joshua will tell you which lenders to plan around.</p>
<h3>Presales</h3>
<p>New construction is a big part of the regional market, both downtown and on the West Shore. A presale is financed differently from a resale. The rate that counts is the one when the building is finished, which may be years away. Your approval has to still hold then.</p>
<p>The <a href="/presale-mortgages-bc/">presale mortgage guide</a> walks through the deposits, the completion date and how to protect yourself.</p>

<h2>Who Joshua works with in Victoria</h2>
<ul>
<li><strong>First-time buyers.</strong> Three programs matter most on the Island: the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan. Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>.</li>
<li><strong>Public servants and military families.</strong> They have salaries and pensions. For CAF members, a posting may mean buying before the move or porting a mortgage later.</li>
<li><strong>Homeowners renewing</strong> after their lender sends a letter. That letter is an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains what to compare and when. Switching lenders at maturity got easier in late 2024.</li>
<li><strong>Self-employed professionals and tradespeople</strong>, from consultants to contractors. Their tax returns need a careful read. See the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a>.</li>
<li><strong>Retirees and downsizers</strong> moving to the Island. They often bring equity from another province and a pension instead of a salary.</li>
<li><strong>Homeowners refinancing</strong> to renovate, pay off debt or build a suite.</li>
</ul>

<h2>How the online process works from Victoria</h2>
<ol>
<li><strong>A 15-minute call.</strong> Phone or video, at a time that suits you. Joshua asks about your goals, numbers and timeline. Then he tells you what's realistic.</li>
<li><strong>Documents by secure link.</strong> Nothing private goes by email. You upload through a secure link. Joshua reviews it all the way an underwriter would, before a lender sees it.</li>
<li><strong>A written Lender Comparison Report.</strong> Real lender options side by side: rate, term, penalty method, prepayment privileges and portability. The <a href="/lender-comparison-report/">report page</a> explains it.</li>
<li><strong>Approval and signing.</strong> The lender issues the commitment. You sign with a Victoria lawyer or notary you choose. Joshua keeps your realtor and lawyer in the loop so dates don't slip.</li>
<li><strong>Aftercare.</strong> After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps your mortgage under review. You get a yearly check, rate watching and a call about six months before your term ends.</li>
</ol>

${callout("What it costs you", "<p>On a mortgage placed with an A lender, the lender pays the broker. You pay nothing for the service. Fees come up only on some B-lender and private files. In BC those fees must be shown in writing, on BCFSA's Form 1A, before you commit. Joshua will tell you which kind of file yours is on the first call.</p>")}

<h2>Calculators for Victoria buyers and renewers</h2>
<p>Every tool on this site shows the full result right away. None of them ask for your email. For a Victoria purchase, most people start with three.</p>
<ul>
<li>The <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a>, which includes the first-time buyer exemption.</li>
<li>The <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a>, for the total cash you'll need on completion.</li>
<li>The <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which applies the stress test.</li>
</ul>
<p>Renewing? Compare staying, switching and refinancing with the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a>. They're all on the <a href="/mortgage-calculators/">calculators page</a>.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Island and the Lower Mainland the same way. Up-Island? The <a href="/mortgage-broker-nanaimo/">Nanaimo page</a> covers ferry-commuter purchases and the mid-Island market. Comparing Victoria with the mainland, or moving between them? See the <a href="/mortgage-broker-vancouver/">Vancouver page</a>. Current rates and how they're set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-government-and-city-employees/">government and city employees</a>, <a href="/mortgages-for-military-and-veterans/">military and veterans</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. To plan a Victoria purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${nearbyCallout("victoria", callout)}

${cta({ title: "Talk to a broker who serves Victoria", text: "Book a 15-minute call. You'll leave with a clear picture of what you qualify for, what it'll cost and what to do next, whether or not you end up working with Joshua." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving BC from Surrey. Found this page by searching for a broker in Victoria? The <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready for the first call.</p>

<h2>Who wrote this</h2>
<p>Joshua spent five years as a mortgage underwriter before he became a broker. Victoria clients tend to value that most. He reads your file the way the lender will, before the lender does.</p>
`;

export default {
  slug: "/mortgage-broker-victoria/",
  h1: "Mortgage broker serving Victoria, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Victoria and the Capital Region online and by phone from his Surrey office: first homes, government and military income, renewals and refinances.",
  crumbs: [["Home", "/"], ["Serving " + city, "/mortgage-broker-victoria/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Does Joshua have an office in Victoria?", a: "No. His office is in Surrey, and he serves Victoria and the rest of Vancouver Island by phone, video and secure document exchange. You never need to visit an office; the lender, the lawyer and the land title work are all handled where you are. Many clients never meet their broker in person and the service is identical." },
    { q: "Can a Surrey-based broker arrange a mortgage on a Victoria property?", a: "Yes. Mortgage brokers in BC are licensed provincially by BCFSA, not by city, and the lenders Joshua works with lend across the province. The appraisal is done by a local appraiser, and you sign with a Victoria lawyer or notary of your choosing. Where the broker sits makes no difference to the lender." },
    { q: "Do lenders count the rent from a Victoria garden suite or basement suite?", a: "Usually a share of it, provided the suite is legal and the rent can be documented, and the share and method vary by lender. Some offset the rent against your housing costs and some add a portion to your income, which produce different results. Joshua will show you both on your own numbers before you make an offer." },
    { q: "I am a CAF member posted to Esquimalt. Can I buy before I arrive?", a: "Often, yes, with a posting message and employment documents in hand. Lenders are used to military relocations. If you may be posted again, ask about portability before you choose a lender, because moving a mortgage to a new property is far cheaper than breaking it. Joshua compares portability terms in every Lender Comparison Report." },
    { q: "Is the BC first-time buyer property transfer tax exemption available in Victoria?", a: "Yes. It is a provincial program and applies anywhere in BC, subject to the price thresholds in force. The exemption is a flat amount on homes up to a threshold and phases out above it, so on higher-priced Victoria homes it may be reduced or unavailable. The BC property transfer tax calculator on this site shows the exact figure for any price." }
  ]
};
