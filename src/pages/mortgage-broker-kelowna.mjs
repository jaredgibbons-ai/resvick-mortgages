import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-kelowna/#service", name: "Resvick Mortgages, serving Kelowna", url: SITE.origin + "/mortgage-broker-kelowna/", areaServed: [{ "@type": "City", name: "Kelowna", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Central Okanagan" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Kelowna and the Okanagan by phone and video from his Surrey office. Family homes, homes with a suite or carriage house, cabins, acreages and renewals each need a different file.",
  who: "Okanagan buyers, people relocating to Kelowna, and owners coming up for renewal.",
  next: "Book a 15-minute call and describe the property you have in mind."
})}
<p>Kelowna is the largest city in the Okanagan. It's also one of the places in BC where the words primary residence and second home show up in the same conversation.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves Kelowna, West Kelowna, Lake Country, Peachland and the rest of the valley from his office in Surrey, by phone and video.</p>
<p>He doesn't have a Kelowna branch. He has a process that works the same from anywhere in the province, and over 1,000 mortgages funded with it.</p>

${ratesStrip()}

<h2>Four kinds of Kelowna purchase, four different files</h2>
<h3>The family home</h3>
<p>Most Kelowna mortgages are ordinary purchases of a home you'll live in. It might be a detached house in Glenmore or the Mission. It might be a townhouse in West Kelowna, or a condo near downtown or the university.</p>
<p>These qualify under the standard rules, with the stress test and the lender's debt ratios. The <a href="/mortgage-calculators/#affordability">affordability calculator</a> gives a realistic first number. What changes the file is usually the income behind it, which is covered below.</p>
<h3>The home with a carriage house or suite</h3>
<p>Kelowna has long allowed carriage houses on eligible lots. Its Carriage House Requirements bulletin (City of Kelowna, updated August 2023) sets out where they're allowed, the size limits and the parking requirement.</p>
<p>The rules on how many units a lot can hold have since changed. Kelowna adopted small-scale multi-unit zoning on March 18, 2024. It allows up to 4 units on most suburban lots, and 5 or 6 in core areas (City of Kelowna, 2024 Planning Legislation Changes). The limit depends on where the lot is, so confirm with the City for your lot.</p>
<p>For a lender, a legal, documented rental unit means a share of the rent can count toward qualifying. The share and the method differ by lender. That's why the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> matters here more than in most cities.</p>
<p>Municipal rules change. Confirm the current rules with the City before you rely on a unit being legal.</p>
<h3>The recreational or second property</h3>
<p>Lake-adjacent homes, cabins and properties in the nearby communities are often bought as second homes. Lenders do finance second homes, but the rules differ from a primary residence.</p>
<p>The property has to meet a lender's definition of year-round access and services. The down payment and qualifying may be stricter.</p>
<p>A cabin on leased land, a bare-land strata, or a property without a conventional foundation may need a specific lender. Insured second-home programs exist, with conditions. Joshua will tell you on the first call whether your property fits a mainstream lender or needs another route.</p>
<h3>The acreage, orchard or vineyard</h3>
<p>Agricultural Land Reserve parcels, hobby farms and properties with farm income are financed differently from a city lot.</p>
<p>Many residential lenders cap how much land they'll value. They treat farm buildings as having no lending value. And they won't lend where the property is mainly a business.</p>
<p>Some lenders do this well. The key is to identify the property type before the offer is written, not after.</p>

<h2>Income in the Okanagan</h2>
<p>Kelowna's economy has a lot of salaried work, at the hospital, the university, the school district and the airport. It also has a large base of self-employed people. Think tradespeople, tourism and hospitality operators, farm businesses, realtors and consultants.</p>
<p>Seasonal and commission income is common. Lenders handle each kind differently. The gap between a smooth approval and a hard one is usually in how the income is documented.</p>
<ul>
<li><strong>Salaried employees</strong> need a letter of employment and recent pay stubs. Where income varies, you'll need two years of history.</li>
<li><strong>Self-employed borrowers</strong> are usually assessed on two years of tax returns and notices of assessment. Some lenders add back some deductions. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers stated income, newly self-employed and B-lender routes.</li>
<li><strong>Seasonal and commission income</strong> is usually averaged over two years. A strong single year doesn't count the way a two-year average does.</li>
<li><strong>Relocating buyers</strong> from Alberta, the Lower Mainland or elsewhere often buy before the job starts. A signed offer of employment and a start date can be enough, depending on the lender.</li>
</ul>
<p>Joshua was a mortgage underwriter for five years before becoming a broker. He reviews your income documents the way the lender will. He finds the lender whose policy suits them, and fixes the gaps before anything is sent.</p>

<h2>Renewing a Kelowna mortgage</h2>
<p>When your mortgage comes up for renewal, your lender will send a letter with an offer. It's an opening position, and you're free to compare it with the rest of the market.</p>
<p>Since late 2024, many borrowers can move an uninsured mortgage to a new federally regulated lender at maturity without a new stress test. That's as long as the balance and amortization don't go up.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the timeline. The <a href="/mortgage-calculators/#renewal">renewal scenario tool</a> compares staying, switching and refinancing on your own numbers. Joshua's clients hear from him about six months before maturity as part of <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>. So the comparison is done before the letter arrives.</p>

${callout("No fee on A-lender mortgages", "<p>When your mortgage is placed with an A lender, the lender pays the broker. You pay nothing for Joshua's work. Fees arise only on some B-lender and private files. BC rules require them to be disclosed in writing, on BCFSA's Form 1A, before you commit. Recreational and farm files sometimes need those lenders. If yours does, you'll know the cost in advance.</p>")}

<h2>Working with Joshua from Kelowna</h2>
<p>The process is built for distance. A 15-minute call starts it. Documents go through a secure upload link, not email.</p>
<p>You get a written <a href="/lender-comparison-report/">Lender Comparison Report</a> showing real lender options side by side. It includes the penalty method and portability, which matter if you may sell or move during the term.</p>
<p>The appraisal is done by a Kelowna appraiser, and you sign with a local lawyer or notary. Your realtor and lawyer get the dates and documents they need from Joshua directly. So nothing stalls at the end.</p>
<p>First-time buyers should start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>. It explains the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan, and the order to use them in. Everyone else can go straight to the <a href="/mortgage-calculators/">calculators</a> and then to a call.</p>

<h2>Nearby</h2>
<p>Joshua serves the Thompson-Okanagan and the Lower Mainland the same way. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers the Thompson region, including trades and rail income. Relocating from the coast? The <a href="/mortgage-broker-vancouver/">Vancouver page</a> is the counterpart. Current rates, and how your rate is set, are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Kelowna", text: "Book a 15-minute call. Bring the property type you have in mind, even if it's only an idea. You'll leave knowing whether it fits a mainstream lender." })}

<p>Resvick Mortgages appears on Google as a mortgage broker serving British Columbia from Surrey. Did a search for a mortgage broker in Kelowna bring you here? The <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
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
