import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-kamloops/#service", name: "Resvick Mortgages, serving Kamloops", url: SITE.origin + "/mortgage-broker-kamloops/", areaServed: [{ "@type": "City", name: "Kamloops", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Thompson-Nicola" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Kamloops by phone and video from his Surrey office. Here the hard part is often the income, not the house. The work is matching your pay to the right lender.",
  who: "Kamloops buyers, renewers and refinancers, especially with overtime, contract, rotation or self-employed income.",
  next: "Book a 15-minute call and tell Joshua how you're paid."
})}
<p>Kamloops is a working city. Rail, trades, mining, health care, the university and the ranching country around it produce a mix of incomes. Lenders don't all read those incomes the same way. That's where a broker earns a place in the process.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.). He serves Kamloops and the Thompson region from his Surrey office, by phone and video. There's no Kamloops branch. Instead, there's a broker who was an underwriter for five years and has funded over 1,000 mortgages. He handles your file himself.</p>

${ratesStrip()}

<h2>Income first: how Kamloops paycheques are read</h2>
<p>In many cities, the question is the property. In Kamloops, it's often the income.</p>
<p>The same gross earnings can qualify for very different mortgages. It depends on how the money arrives and how it's documented. So this page starts there.</p>
<h3>Rail and shift income</h3>
<p>Kamloops is a rail hub. Railway income usually comes with overtime, shift premiums and periods of layoff or reduced hours.</p>
<p>Lenders generally take base salary at face value. They treat overtime and premiums as variable income, counted at the lower of last year's total or the two-year average. Some lenders also need the pattern to be consistent.</p>
<p>The documents that matter are two years of T4s and recent pay stubs. You'll also need a letter from your employer with your base rate, position and hire date. A year with unusually high overtime doesn't lift your qualifying income the way a two-year average does.</p>
<h3>Trades: employed and self-employed</h3>
<p>A ticketed tradesperson on a company payroll is a salaried or hourly employee to a lender. The same person running their own company, or paid by invoice as a contractor, is self-employed. Then you're assessed on tax returns instead of pay stubs.</p>
<p>That changes which deductions count against you, how long a track record you need, and which lenders fit. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the routes, including stated income and newly self-employed programs. The <a href="/mortgage-for-contractors/">contractors and trades page</a> covers the details.</p>
<h3>Contract, camp and rotational work</h3>
<p>Mining and resource work in the region often means fixed-term contracts, camp rotations or living-out allowances.</p>
<p>Lenders look for continuity. How long have you worked this way? Have your contracts renewed? Is the income on a T4, or invoiced?</p>
<p>Allowances may or may not count. The answer depends on the lender, and matching your file to the right one is most of the work.</p>
<h3>Health care, education and public service</h3>
<p>These files are usually simple. Royal Inland Hospital, Thompson Rivers University, the school district and government give Kamloops a large base of salaried, pensionable income.</p>
<p>The decisions that matter are about term, penalty and portability, not qualifying. Those are the terms Joshua compares in every Lender Comparison Report.</p>

<h2>Kamloops housing and what lenders notice</h2>
<p>Kamloops housing ranges from established neighbourhoods on both sides of the river to newer subdivisions. There are townhouses and a growing supply of condos too. Detached homes with basement suites are common.</p>
<p>The City recognizes three suite types: secondary suites, garden suites and carriage suites. Each has size limits and parking requirements, and needs a building permit under the BC Building Code. A suite is legal only after final inspection. Suites that aren't owner-occupied need a business licence (City of Kamloops, Residential Suites Guide, read October 2026).</p>
<p>For a lender, a legal, documented suite means a share of the rent can count toward qualifying. An unpermitted suite usually can't. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the offset and add-back methods.</p>
<p>Outside the city, acreages and ranch properties in the Thompson-Nicola are financed differently from a city lot. Many residential lenders limit the land value they'll count. They won't lend where the property is mainly a business.</p>
<p>Properties at Sun Peaks are often second homes or rentals, with their own rules. In both cases, the property type needs to be identified before the offer is written.</p>

<h2>What Joshua does for Kamloops clients</h2>
<ol>
<li><strong>Reads the income like an underwriter.</strong> Before anything is sent, he works out which lender's policy suits your income documents. He also works out what that lender will ask for, so the questions are answered in advance.</li>
<li><strong>Compares lenders in writing.</strong> You get a <a href="/lender-comparison-report/">Lender Comparison Report</a>: rate, term, penalty method, prepayment privileges and portability, side by side. Portability matters if work may move you.</li>
<li><strong>Runs the file to funding.</strong> You get secure document links, a Kamloops appraiser, your choice of local lawyer or notary, and updates at every step. Your realtor and lawyer hear from him directly.</li>
<li><strong>Stays on it afterwards.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and contact about six months before your maturity date. So a renewal is compared, not signed by default.</li>
</ol>

${callout("What you pay", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files. In BC, they must be disclosed in writing on BCFSA's Form 1A before you commit. Contract and self-employed files sometimes need those lenders. If yours does, you'll know the cost before you decide.</p>")}

<h2>Buying, renewing and refinancing in Kamloops</h2>
<p><strong>First-time buyers</strong> in Kamloops can use the same provincial and federal programs as anywhere in BC. That means the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes.</p>
<p>The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains how to stack them. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure for any price.</p>
<p><strong>Renewing homeowners</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline and the switching rules that changed in late 2024. The <a href="/mortgage-calculators/#renewal">renewal scenario tool</a> compares staying, switching and refinancing on your own figures.</p>
<p><strong>Refinancing</strong> to pay off debt, renovate or add a suite starts with the break-even math. The <a href="/refinance-mortgage-bc/">refinance guide</a> and the <a href="/mortgage-calculators/">calculators</a> show whether the penalty is worth paying. Do that before anyone talks about a rate.</p>

<h2>Nearby</h2>
<p>Joshua serves the Interior and the North the same way he serves the coast. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the Okanagan, including recreational and acreage property. The <a href="/mortgage-broker-prince-george/">Prince George page</a> covers northern resource and shift income. Current rates, and how your rate is set, are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Kamloops", text: "Book a 15-minute call. Tell Joshua how you're paid. You'll leave knowing how a lender will read it and what to gather first." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving British Columbia from Surrey. Did you search for a mortgage broker in Kamloops and land here? The <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready for the first call.</p>
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
    { q: "Does overtime count toward my mortgage in Kamloops?", a: "Usually, as variable income counted at the lower of last year's total or the two-year average, provided it is consistent and shown on your T4s. Base salary counts at face value. A single strong year of overtime does not lift your qualifying income the way a two-year average does, and some lenders are stricter than others. Joshua will tell you which lenders suit your pattern." },
    { q: "I work rotations at a mine on contract. Can I get a mortgage?", a: "Yes, with the right lender. Lenders look for continuity: how long you have worked this way, whether contracts have renewed, and whether you are paid on a T4 or by invoice. Allowances may or may not count. The file is matched to a lender whose policy fits, which is most of the work on a contract-income mortgage." },
    { q: "Will a lender count the rent from my basement suite?", a: "If the suite is legal under the City of Kamloops rules, with a building permit and final inspection, most lenders count a share of the documented rent, either against your housing costs or as added income. The share and method vary by lender. An unpermitted suite usually cannot be counted. Joshua runs both methods on your numbers." },
    { q: "Do I need to come to Surrey to work with Joshua?", a: "No. Everything is done by phone, video and secure document exchange. The appraisal is done by a Kamloops appraiser and you sign with a local lawyer or notary. BC brokers are licensed provincially by BCFSA and the lenders lend across the province, so the broker's location has no effect on your mortgage." },
    { q: "Can I finance a ranch or acreage near Kamloops?", a: "Often, but not with every lender. Many residential lenders limit how much land they will value, give farm buildings no lending value, and decline where the property is mainly a business. Lenders that specialize in rural and agricultural property exist. Identify the property type with Joshua before the offer is written so the financing condition is realistic." }
  ]
};
