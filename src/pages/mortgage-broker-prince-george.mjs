import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-prince-george/#service", name: "Resvick Mortgages, serving Prince George", url: SITE.origin + "/mortgage-broker-prince-george/", areaServed: [{ "@type": "City", name: "Prince George", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Northern British Columbia" }] };

const body = `
<p>Prince George is the service centre of northern British Columbia: a city with a university, a college, a regional hospital, government offices, forestry and manufacturing, a rail and highway hub, and a wide catchment of smaller communities that look to it for services. Mortgage brokering is one service that does not depend on where the broker sits, and Joshua Resvick, a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.), serves Prince George and the North from his Surrey office, by phone, video and secure document exchange. He has no branch in the city. He has a process that was built for distance, over 1,000 mortgages funded with it, and five years as a mortgage underwriter before he became a broker.</p>

${ratesStrip()}

<h2>Why a northern file benefits from an underwriter's eye</h2>
<p>The City's own economic development material lists forestry and pulp and paper, mining, construction, health care, education, transportation and warehousing, and professional services among the region's leading industries, with Northern Health, the University of Northern British Columbia, the College of New Caledonia, the school district and the provincial and federal governments among its top employers (Move Up Prince George, Industries and Employers, read October 2026). That mix produces income that is steady and salaried on one side of the city and variable, seasonal or rotational on the other, often within the same household.</p>
<p>Lenders are comfortable with both, but they document them differently, and a file that mixes a Northern Health salary with a partner's contract forestry income or a camp rotation needs to be assembled with care. Joshua reads the file as an underwriter would before it is submitted: which income counts at face value, which is averaged over two years, which allowances a given lender will accept, and which lender's policy fits the whole picture. That is the difference between an approval with conditions you can meet and one that stalls a week before completion.</p>

<h2>Resource, shift and rotational income</h2>
<ul>
<li><strong>Mill and plant employees</strong> on hourly schedules with shift premiums and overtime: base pay counts at face value, and premiums and overtime are typically averaged over two years, with T4s and an employment letter as the proof.</li>
<li><strong>Camp and rotational workers</strong> in mining, pipeline, forestry or construction: lenders look for continuity and renewal of contracts, and for whether pay is on a T4 or by invoice. Living-out and travel allowances may or may not be counted, depending on the lender.</li>
<li><strong>Seasonal workers</strong>, including those with regular employment insurance periods: some lenders average the full-year income across two years, others exclude EI. The right lender depends on the pattern.</li>
<li><strong>Owner-operators and contractors</strong>, from logging trucks to trades: self-employed income is assessed on tax returns, and the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the add-backs, the two-year rule and the stated-income and B-lender routes when returns do not tell the whole story.</li>
<li><strong>Health care, education and public service</strong>: salaried, pensionable and straightforward to document. For these files the real decisions are about term, penalty and portability.</li>
</ul>

<h2>Prince George housing</h2>
<p>The city's housing stock is largely detached: established neighbourhoods near the bowl and the rivers, post-war and later subdivisions, newer homes on the hills, townhouses and a smaller condo market, plus acreages and rural properties in the surrounding regional district. Basement suites are common. The City of Prince George's zoning bylaw governs where secondary suites are permitted and what they require, and provincial legislation passed in 2023 directed larger BC municipalities to allow more small-scale housing on residential lots; the City's current rules are the ones to confirm before relying on a suite being legal.</p>
<p>For a lender, a legal, documented suite means a share of the rent can be counted toward qualifying. The share and the method, offset against housing costs or added to income, vary by lender, and the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both on the same numbers.</p>
<p>Two northern specifics come up regularly. First, appraisals: in smaller communities around Prince George, an appraiser may need to travel and comparable sales may be few, which can affect timing and value. Build that into your financing condition. Second, rural and acreage properties: many residential lenders cap the land value they will count, want year-round road access and standard services, and will not lend where the property is mainly a business. Lenders that handle rural property well exist, and identifying the property type before the offer is written is the single most useful step.</p>

<h2>Buying, renewing and refinancing from the North</h2>
<p><strong>First-time buyers</strong> have the same programs as anywhere in BC: the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new construction. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains how they stack, and the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure for any price.</p>
<p><strong>Renewing homeowners</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline, and the switching rules that took effect in late 2024 allow many uninsured mortgages to move to a new federally regulated lender at maturity without a new stress test, if the balance and amortization do not increase. Credit unions are provincially regulated and set their own policies.</p>
<p><strong>Refinancing</strong> to consolidate debt, renovate or buy out a former partner starts with the penalty and the break-even, and the <a href="/refinance-mortgage-bc/">refinance guide</a> and the <a href="/mortgage-calculators/">calculators</a> show the math before anyone talks about a rate.</p>

${callout("What a broker costs in Prince George", "<p>The same as anywhere in BC: on a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, and BC rules require them to be disclosed in writing, on BCFSA's Form 1A, before you commit. Some contract-income and rural files need those lenders; if yours does, you will know the cost in advance.</p>")}

<h2>How the process works at a distance</h2>
<ol>
<li><strong>A 15-minute call</strong>, by phone or video, at a time that suits your shift. Joshua asks how you are paid, what you are buying or renewing, and when, and tells you what is realistic.</li>
<li><strong>Documents by secure link</strong>, never by email. Joshua reviews them as an underwriter would and identifies the lenders whose policies fit.</li>
<li><strong>A written Lender Comparison Report</strong>: rate, term, penalty method, prepayment privileges and portability side by side. The <a href="/lender-comparison-report/">report page</a> explains it. Portability matters if work may move you.</li>
<li><strong>Approval, appraisal and signing.</strong> A local appraiser, your choice of Prince George lawyer or notary, and updates at every milestone. Your realtor and lawyer hear from Joshua directly.</li>
<li><strong>Aftercare.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and contact about six months before maturity, so a renewal is compared, not signed by default.</li>
</ol>

<h2>Nearby</h2>
<p>Joshua serves the Interior the same way. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers rail, trades and contract income in the Thompson region, and the <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the Okanagan, including recreational and acreage property. Current rates and how your rate is set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Prince George", text: "Book a 15-minute call. Tell Joshua how you are paid and what you are looking at, and you will leave knowing how a lender will read your file and what to gather first." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving British Columbia from Surrey. If a search for a mortgage broker in Prince George brought you here, the <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
`;

export default {
  slug: "/mortgage-broker-prince-george/",
  h1: "Mortgage broker serving Prince George and northern BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Prince George from his Surrey office by phone and video. Resource, shift and rotational income read the way an underwriter reads it, for purchases, renewals and refinances.",
  crumbs: [["Home", "/"], ["Serving Prince George", "/mortgage-broker-prince-george/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on camp rotation income?", a: "Yes, with a lender whose policy fits. Lenders look for continuity, renewed contracts and whether you are paid on a T4 or by invoice. Living-out and travel allowances count at some lenders and not others. Joshua matches the file to the lender before it is submitted, which is most of the work on a rotational-income mortgage." },
    { q: "Does seasonal work with EI periods disqualify me?", a: "No. Some lenders average the full-year income, including the seasonal pattern, over two years, while others exclude employment insurance from qualifying income. The answer depends on the lender and on how consistent the pattern has been. Two years of T4s and a letter from the employer confirming recurring seasonal work are the documents that matter." },
    { q: "Is it harder to get an appraisal in a smaller northern community?", a: "It can take longer, and comparable sales may be few, which affects both timing and value. Build extra time into your financing condition and talk to Joshua before writing the offer. Lenders use local appraisers and the appraisal is ordered through the lender, so the process is the same as in the south, only slower." },
    { q: "Do I need to travel to Surrey to work with Joshua?", a: "No. The process was built for distance: phone or video calls, secure document links, a Prince George appraiser and your choice of local lawyer or notary. Brokers in BC are licensed provincially by BCFSA, and the lenders lend across the province, so the broker's location has no effect on your mortgage." },
    { q: "Can I finance an acreage outside Prince George?", a: "Often, but not with every lender. Many residential lenders cap the land value they will count, want year-round road access and standard services, and decline where the property is primarily a business. Lenders that handle rural property well exist. Identify the property type with Joshua before the offer is written so the financing condition is realistic." }
  ]
};
