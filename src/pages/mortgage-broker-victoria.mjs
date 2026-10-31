import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const city = "Victoria";
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-victoria/#service", name: "Resvick Mortgages, serving Victoria", url: SITE.origin + "/mortgage-broker-victoria/", areaServed: [{ "@type": "City", name: "Victoria", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Greater Victoria" }] };

const body = `
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.). His office is in Surrey, and he serves Victoria and the rest of Vancouver Island by phone, video and secure document exchange. There is no branch in Victoria, and you will not need one: every step of a mortgage, from the first conversation to the lawyer's appointment, can be done from where you are. What you get is the same broker who has funded over 1,000 mortgages, working your file personally.</p>

${ratesStrip()}

<h2>What makes a Victoria mortgage different</h2>
<p>Greater Victoria is a capital city with a distinct housing mix. The City of Victoria proper is small and dense: heritage character houses, house conversions, low-rise condos and a downtown that has added a great deal of new apartment stock. Around it sit Saanich, Oak Bay, Esquimalt, Langford, Colwood, Sidney and the rest of the Capital Region, each with its own zoning and its own feel, from the West Shore's newer subdivisions to the Peninsula's rural lots. A buyer looking at a character home in Fairfield, a strata townhouse in Langford and a presale condo in Vic West is really looking at three different mortgages, because lenders treat each property type differently.</p>
<p>The employment base is unusual too. Victoria is the seat of the provincial government, so a large share of buyers are public servants with salaried, pensionable income, which lenders like. Alongside them are Canadian Armed Forces members posted to CFB Esquimalt, university and hospital staff, tech workers, tradespeople who are often self-employed, and retirees who arrive from across the country. Each of those income types is documented differently, and a file that reads cleanly to an underwriter starts with knowing which documents your income actually needs. Joshua spent five years as a mortgage underwriter before he became a broker, which is the part of his background Victoria clients tend to appreciate most: he reads your file the way the lender will, before the lender does.</p>

<h2>Property types that need a careful file</h2>
<h3>Character and heritage homes</h3>
<p>Older houses are common in Victoria's core neighbourhoods. Lenders finance them routinely, but the appraisal matters more than usual. Knob-and-tube wiring, older oil tanks, foundations and roofs can all come up, and an insurer may ask questions before a policy is issued. None of that is a reason to walk away. It is a reason to have a broker who knows which lenders are comfortable with older stock and what conditions to expect, so the financing condition in your offer is realistic.</p>
<h3>Suites and garden suites</h3>
<p>The City of Victoria permits secondary suites and detached garden suites as long-term rental housing, and its Official Community Plan enables ground-oriented infill such as house conversions and houseplexes in residential areas (City of Victoria, Residential Infill and Suites, read October 2026). A legal suite can change what you qualify for, because lenders count a share of the rent. How much they count, and whether they offset it against your costs or add it to your income, varies by lender, which is why the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> exists. If you are planning to add a suite to a house you already own, the <a href="/secondary-suite-refinance/">secondary suite refinance</a> program may apply.</p>
<h3>Strata properties</h3>
<p>Condos and townhouses are a large part of what sells in Greater Victoria. For a strata purchase, the lender reviews the strata documents as well as you: the depreciation report, the contingency fund, any special levies and the building's insurance. Leasehold and co-op properties exist in the region and need specific lenders. Say the word leasehold or co-op early and Joshua will tell you which lenders to plan around.</p>
<h3>Presales</h3>
<p>New construction has been a large part of the regional market, in downtown Victoria and on the West Shore. A presale is a different financing exercise from a resale: the rate you need is the one in force at completion, which may be years away, and your approval must still hold then. The <a href="/presale-mortgages-bc/">presale mortgage guide</a> walks through the deposits, the completion date and how to protect yourself.</p>

<h2>Who Joshua works with in Victoria</h2>
<ul>
<li><strong>First-time buyers</strong>, including the provincial programs that matter most on the Island: the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan. Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>.</li>
<li><strong>Public servants and military families</strong> with salaried income, pensions and, for CAF members, postings that may mean buying before the move or porting a mortgage later.</li>
<li><strong>Renewing homeowners</strong> whose lender has sent a letter. The letter is an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains what to compare and when, and switching lenders at maturity has become easier since late 2024.</li>
<li><strong>Self-employed professionals and tradespeople</strong>, from consultants to contractors, whose tax returns need to be read with care. See the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a>.</li>
<li><strong>Retirees and downsizers</strong> relocating to the Island, often with equity from another province and a pension rather than a salary.</li>
<li><strong>Homeowners refinancing</strong> to renovate, consolidate or build a suite.</li>
</ul>

<h2>How the online process works from Victoria</h2>
<ol>
<li><strong>A 15-minute call.</strong> Phone or video, at a time that suits you. Joshua asks about your goals, your numbers and your timeline, and tells you what is realistic.</li>
<li><strong>Documents by secure link.</strong> Nothing sensitive goes by email. You upload your documents through a secure link, and Joshua reviews them the way an underwriter would before anything reaches a lender.</li>
<li><strong>A written Lender Comparison Report.</strong> Real lender options side by side: rate, term, penalty method, prepayment privileges and portability. The <a href="/lender-comparison-report/">report page</a> explains it.</li>
<li><strong>Approval and signing.</strong> The lender issues the commitment. You sign with a Victoria lawyer or notary of your choosing. Joshua keeps your realtor and your lawyer informed so dates do not slip.</li>
<li><strong>Aftercare.</strong> After funding, the <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> program keeps the mortgage under review: an annual check, rate monitoring and contact about six months before maturity.</li>
</ol>

${callout("What it costs you", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, and in BC they must be disclosed in writing, on BCFSA's Form 1A, before you commit. Joshua will tell you which kind of file yours is on the first call.</p>")}

<h2>Calculators for Victoria buyers and renewers</h2>
<p>Every tool on this site shows the full result immediately and asks for no email address. For a Victoria purchase, the ones most people start with are the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a>, which includes the first-time buyer exemption, the <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> for the total cash you need on completion, and the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which applies the stress test. Renewers can compare staying, switching and refinancing with the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a>. All of them are on the <a href="/mortgage-calculators/">calculators page</a>.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Island and the Lower Mainland the same way. If you are up-Island, the <a href="/mortgage-broker-nanaimo/">Nanaimo page</a> covers ferry-commuter purchases and the mid-Island market. If you are comparing Victoria with the mainland, or moving between the two, the <a href="/mortgage-broker-vancouver/">Vancouver page</a> is the counterpart. Current rates and how they are set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Victoria", text: "Book a 15-minute call. You will leave with a clear picture of what you qualify for, what it will cost and what to do next, whether or not you end up working with Joshua." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving British Columbia from Surrey. If you found this page by searching for a mortgage broker in Victoria, the <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready for the first call.</p>
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
