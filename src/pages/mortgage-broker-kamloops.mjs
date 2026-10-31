import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-kamloops/#service", name: "Resvick Mortgages, serving Kamloops", url: SITE.origin + "/mortgage-broker-kamloops/", areaServed: [{ "@type": "City", name: "Kamloops", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Thompson-Nicola" }] };

const body = `
<p>Kamloops is a working city. Rail, trades, mining, health care, the university and the ranching country around it produce a mix of incomes that lenders do not all read the same way, and that is where a broker earns a place in the process. Joshua Resvick, a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.), serves Kamloops and the Thompson region from his Surrey office by phone and video. There is no Kamloops branch. There is a broker who was an underwriter for five years, has funded over 1,000 mortgages, and handles your file himself.</p>

${ratesStrip()}

<h2>Income first: how Kamloops paycheques are read</h2>
<p>In many cities the question is the property. In Kamloops it is often the income. The same gross earnings can qualify for very different mortgages depending on how they arrive and how they are documented, so this page starts there.</p>
<h3>Rail and shift income</h3>
<p>Kamloops is a rail hub, and railway income typically comes with overtime, shift premiums and periods of layoff or reduced hours. Lenders generally take base salary at face value and treat overtime and premiums as variable income, averaged over two years, with some lenders requiring that the pattern be consistent. The documents that matter are two years of T4s, recent pay stubs and a letter from the employer that states the base rate, the position and the hire date. A year with unusually high overtime does not lift your qualifying income the way a two-year average does.</p>
<h3>Trades: employed and self-employed</h3>
<p>A ticketed tradesperson on a company payroll is a salaried or hourly employee to a lender. The same person running their own company, or working as a contractor paid by invoice, is self-employed, and is assessed on tax returns instead of pay stubs. That changes which deductions count against you, how long a track record you need, and which lenders fit. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the routes, including stated income and newly self-employed programs, and the <a href="/mortgage-for-contractors/">contractors and trades page</a> covers the specifics.</p>
<h3>Contract, camp and rotational work</h3>
<p>Mining and resource work in the region often means fixed-term contracts, camp rotations or living-out allowances. Lenders look for continuity: how long you have worked this way, whether contracts have renewed, and whether the income is on a T4 or invoiced. Allowances may or may not count. The answer is lender-specific, and matching the file to the right lender is most of the work.</p>
<h3>Health care, education and public service</h3>
<p>Royal Inland Hospital, Thompson Rivers University, the school district and the various levels of government give Kamloops a large base of salaried, pensionable income. These files are usually straightforward. The decisions that matter are about term, penalty and portability rather than qualifying, and those are the terms Joshua compares in every Lender Comparison Report.</p>

<h2>Kamloops housing and what lenders notice</h2>
<p>Kamloops housing ranges from established neighbourhoods on both sides of the river to newer subdivisions, townhouses and a growing supply of condos. Detached homes with basement suites are common. The City recognizes three suite types, secondary suites, garden suites and carriage suites, each with size limits, parking requirements and a building permit under the BC Building Code; a suite is legal only after final inspection, and non-owner-occupied suites need a business licence (City of Kamloops, Residential Suites Guide, read October 2026). For a lender, a legal, documented suite means a share of the rent can count toward qualifying. An unpermitted suite usually cannot. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the offset and add-back methods.</p>
<p>Outside the city, acreages and ranch properties in the Thompson-Nicola are financed differently from a city lot: many residential lenders limit the land value they will count and will not lend where the property is primarily a business. Properties at Sun Peaks are often second homes or rentals, with their own rules. In both cases the property type needs to be identified before the offer is written.</p>

<h2>What Joshua does for Kamloops clients</h2>
<ol>
<li><strong>Reads the income like an underwriter.</strong> Before anything is submitted, he works out which lender's policy suits your income documents and what the lender will ask for, so the questions are answered in advance.</li>
<li><strong>Compares lenders in writing.</strong> You receive a <a href="/lender-comparison-report/">Lender Comparison Report</a>: rate, term, penalty method, prepayment privileges and portability, side by side. Portability matters if work may move you.</li>
<li><strong>Runs the file to funding.</strong> Secure document links, a Kamloops appraiser, your choice of local lawyer or notary, and updates at every milestone. Your realtor and lawyer hear from him directly.</li>
<li><strong>Stays on it afterwards.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and contact about six months before your maturity date, so a renewal is compared rather than signed by default.</li>
</ol>

${callout("What you pay", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, and in BC they must be disclosed in writing on BCFSA's Form 1A before you commit. Contract and self-employed files sometimes need those lenders; if yours does, you will know the cost before you decide.</p>")}

<h2>Buying, renewing and refinancing in Kamloops</h2>
<p><strong>First-time buyers</strong> in Kamloops have access to the same provincial and federal programs as anywhere in BC: the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains how to stack them, and the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure for any price.</p>
<p><strong>Renewing homeowners</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline and the switching rules that changed in late 2024, and the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a> compares staying, switching and refinancing on your own figures.</p>
<p><strong>Refinancing</strong> to consolidate debt, renovate or add a suite starts with the break-even math. The <a href="/refinance-mortgage-bc/">refinance guide</a> and the <a href="/mortgage-calculators/">calculators</a> show whether the penalty is worth paying before anyone talks about a rate.</p>

<h2>Nearby</h2>
<p>Joshua serves the Interior and the North the same way he serves the coast. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the Okanagan, including recreational and acreage property. The <a href="/mortgage-broker-prince-george/">Prince George page</a> covers northern resource and shift income. Current rates and how your rate is set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Kamloops", text: "Book a 15-minute call. Tell Joshua how you are paid, and you will leave knowing how a lender will read it, what you can qualify for and what to gather first." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving British Columbia from Surrey. If you searched for a mortgage broker in Kamloops and landed here, the <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready for the first call.</p>
`;

export default {
  slug: "/mortgage-broker-kamloops/",
  h1: "Mortgage broker serving Kamloops, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Kamloops from his Surrey office by phone and video. Rail, trades, contract and shift income read the way an underwriter reads them, for purchases, renewals and refinances.",
  crumbs: [["Home", "/"], ["Serving Kamloops", "/mortgage-broker-kamloops/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Does overtime count toward my mortgage in Kamloops?", a: "Usually, as variable income averaged over two years, provided it is consistent and shown on your T4s. Base salary counts at face value. A single strong year of overtime does not lift your qualifying income the way a two-year average does, and some lenders are stricter than others. Joshua will tell you which lenders suit your pattern." },
    { q: "I work rotations at a mine on contract. Can I get a mortgage?", a: "Yes, with the right lender. Lenders look for continuity: how long you have worked this way, whether contracts have renewed, and whether you are paid on a T4 or by invoice. Allowances may or may not count. The file is matched to a lender whose policy fits, which is most of the work on a contract-income mortgage." },
    { q: "Will a lender count the rent from my basement suite?", a: "If the suite is legal under the City of Kamloops rules, with a building permit and final inspection, most lenders count a share of the documented rent, either against your housing costs or as added income. The share and method vary by lender. An unpermitted suite usually cannot be counted. Joshua runs both methods on your numbers." },
    { q: "Do I need to come to Surrey to work with Joshua?", a: "No. Everything is done by phone, video and secure document exchange. The appraisal is done by a Kamloops appraiser and you sign with a local lawyer or notary. BC brokers are licensed provincially by BCFSA and the lenders lend across the province, so the broker's location has no effect on your mortgage." },
    { q: "Can I finance a ranch or acreage near Kamloops?", a: "Often, but not with every lender. Many residential lenders limit how much land they will value, give farm buildings no lending value, and decline where the property is mainly a business. Lenders that specialize in rural and agricultural property exist. Identify the property type with Joshua before the offer is written so the financing condition is realistic." }
  ]
};
