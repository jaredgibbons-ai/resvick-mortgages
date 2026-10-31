import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-kelowna/#service", name: "Resvick Mortgages, serving Kelowna", url: SITE.origin + "/mortgage-broker-kelowna/", areaServed: [{ "@type": "City", name: "Kelowna", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Central Okanagan" }] };

const body = `
<p>Kelowna is the largest city in the Okanagan and one of the places in BC where the words "primary residence" and "second home" show up in the same conversation. Joshua Resvick, a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.), serves Kelowna, West Kelowna, Lake Country, Peachland and the rest of the valley from his office in Surrey, by phone and video. He does not have a Kelowna branch. He has a process that works the same from anywhere in the province, and over 1,000 mortgages funded with it.</p>

${ratesStrip()}

<h2>Four kinds of Kelowna purchase, four different files</h2>
<h3>The family home</h3>
<p>Most Kelowna mortgages are ordinary owner-occupied purchases: a detached house in Glenmore or the Mission, a townhouse in West Kelowna, a condo near downtown or the university. These qualify under the standard rules, with the stress test and the lender's debt ratios, and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> gives a realistic first number. What changes the file is usually the income behind it, which is covered below.</p>
<h3>The home with a carriage house or suite</h3>
<p>Kelowna has long permitted carriage houses on eligible lots, and its current bulletin (Carriage House Requirements, City of Kelowna, updated August 2023) sets out where they are allowed, the size limits and the parking requirement. A single-family lot may have a secondary suite or a carriage house, not both, under that bulletin. The Province's 2024 small-scale multi-unit housing changes allow more units on many lots, so check the current zoning bylaw with the City before you rely on either rule. For a lender, a legal, documented rental unit on the property means a share of the rent can be counted toward qualifying. The share and the method differ by lender, which is why the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> matters here more than in most cities. Municipal rules change, so confirm the current bulletin with the City before you rely on a unit being legal.</p>
<h3>The recreational or second property</h3>
<p>Lake-adjacent homes, cabins and properties in the surrounding communities are often bought as second homes. Lenders finance second homes, but the rules differ from a primary residence: the property has to meet a lender's definition of year-round accessibility and services, the down payment and qualifying may be stricter, and a cabin on leased land, a bare-land strata or a property without a conventional foundation may need a specific lender. Insured second-home programs exist with conditions. Joshua will tell you on the first call whether the property you have in mind fits a mainstream lender or needs another route.</p>
<h3>The acreage, orchard or vineyard</h3>
<p>Agricultural Land Reserve parcels, hobby farms and properties with farm income are financed differently from a city lot. Many residential lenders cap how much land they will value, treat farm buildings as having no lending value, and will not lend where the property is primarily a business. There are lenders who do this well. The key is to identify the property type before the offer is written, not after.</p>

<h2>Income in the Okanagan</h2>
<p>The Kelowna economy mixes salaried work at the hospital, the university, the school district and the airport with a large base of self-employed people: tradespeople, tourism and hospitality operators, agricultural businesses, realtors and consultants. Seasonal and commission income is common. Lenders handle each of these differently, and the difference between a smooth approval and a difficult one is usually in how the income is documented.</p>
<ul>
<li><strong>Salaried employees</strong> need a letter of employment and recent pay stubs, with two years of history where income is variable.</li>
<li><strong>Self-employed borrowers</strong> are typically assessed on two years of tax returns and notices of assessment, with add-backs for some deductions at some lenders. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers stated income, newly self-employed and B-lender routes.</li>
<li><strong>Seasonal and commission income</strong> is usually averaged over two years. A strong single year does not count the way a two-year average does.</li>
<li><strong>Relocating buyers</strong> arriving from Alberta, the Lower Mainland or elsewhere often buy before the job starts. A signed offer of employment and a start date can be enough, depending on the lender.</li>
</ul>
<p>Joshua was a mortgage underwriter for five years before becoming a broker. He reviews your income documents the way the lender will, identifies the lender whose policy suits them, and fixes the gaps before anything is submitted.</p>

<h2>Renewing a Kelowna mortgage</h2>
<p>If your mortgage is coming up for renewal, your lender will send a letter with an offer. It is an opening position, and you are free to compare it with the rest of the market. Since late 2024, many borrowers can move an uninsured mortgage to a new federally regulated lender at maturity without a new stress test, provided the balance and amortization are not increased. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the timeline, and the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a> compares staying, switching and refinancing on your own numbers. Joshua's clients hear from him about six months before maturity as part of <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, so the comparison is done before the letter arrives.</p>

${callout("No fee on A-lender mortgages", "<p>When your mortgage is placed with an A lender, the lender pays the broker. You pay nothing for Joshua's work. Fees arise only on some B-lender and private files, and BC rules require them to be disclosed in writing, on BCFSA's Form 1A, before you commit. Recreational and agricultural files sometimes need those lenders; if yours does, you will know the cost in advance.</p>")}

<h2>Working with Joshua from Kelowna</h2>
<p>The process is built for distance. A 15-minute call starts it. Documents go through a secure upload link rather than email. You receive a written <a href="/lender-comparison-report/">Lender Comparison Report</a> showing real lender options side by side, including the penalty method and portability, which matter if you may sell or move within the term. The appraisal is done by a Kelowna appraiser, and you sign with a local lawyer or notary. Your realtor and lawyer get the dates and documents they need from Joshua directly, so nothing stalls at the end.</p>
<p>First-time buyers should start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, which explains the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan, and the order to use them in. Everyone else can go straight to the <a href="/mortgage-calculators/">calculators</a> and then to a call.</p>

<h2>Nearby</h2>
<p>Joshua serves the Thompson-Okanagan and the Lower Mainland the same way. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers the Thompson region, including trades and rail income. If you are relocating from the coast, the <a href="/mortgage-broker-vancouver/">Vancouver page</a> is the counterpart. Current rates and how your rate is set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Kelowna", text: "Book a 15-minute call. Bring the property type you have in mind, even if it is only an idea, and you will leave knowing whether it fits a mainstream lender and what the next step is." })}

<p>Resvick Mortgages appears on Google as a mortgage broker serving British Columbia from Surrey. If a search for a mortgage broker in Kelowna brought you here, the <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
`;

export default {
  slug: "/mortgage-broker-kelowna/",
  h1: "Mortgage broker serving Kelowna and the Okanagan",
  lede: "Joshua Resvick, Xeva Mortgage, serves Kelowna from his Surrey office by phone and video: family homes, carriage-house properties, recreational and acreage purchases, relocations and renewals.",
  crumbs: [["Home", "/"], ["Serving Kelowna", "/mortgage-broker-kelowna/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a Kelowna cabin or lake property?", a: "Usually, if the property is accessible year-round, has services a lender accepts and sits on a conventional foundation. Second-home rules are stricter than for a primary residence, and properties on leased land, bare-land stratas or without road access may need a specific lender. Describe the property on the first call and Joshua will tell you which lenders fit." },
    { q: "Does a carriage house help me qualify?", a: "It can. If the unit is legal under the City of Kelowna's rules and the rent can be documented, most lenders count a share of it, either against your housing costs or as added income. The share varies by lender and the method changes the result, so the same rent can produce different approvals at different lenders. Joshua runs both methods on your figures." },
    { q: "I am moving to Kelowna for a job. Can I buy before I start?", a: "Often, yes. Many lenders will accept a signed offer of employment with a start date, especially for salaried roles, and some want the probation period addressed. Self-employed buyers moving a business are assessed on their existing tax history. Tell Joshua your start date and he will plan the application around it." },
    { q: "Do I need to meet Joshua in person?", a: "No. Joshua serves Kelowna from his Surrey office by phone, video and secure document exchange. The appraisal is done locally, and you sign with a Kelowna lawyer or notary. Brokers in BC are licensed provincially by BCFSA, and the lenders lend across the province, so the broker's location does not affect your mortgage." },
    { q: "How is an acreage or ALR property financed?", a: "Differently from a city lot. Many residential lenders limit how much land they will value, assign little or no value to farm buildings, and will not lend where the property is primarily a farm business. Lenders that specialize in rural and agricultural property do exist. The property type should be identified before the offer is written, and Joshua will do that with you." }
  ]
};
