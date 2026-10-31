import { short } from "../lib/short.mjs";
import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-prince-george/#service", name: "Resvick Mortgages, serving Prince George", url: SITE.origin + "/mortgage-broker-prince-george/", areaServed: [{ "@type": "City", name: "Prince George", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Northern British Columbia" }] };

const body = `
${short({ answer: "You don't need a local office to get a mortgage in Prince George. Joshua serves the North from his Surrey office by phone and video, and he's used to shift, camp and seasonal income.", who: "Prince George buyers, renewers and anyone with resource, rotation or contract pay.", next: "Book a 15-minute call, or start with the <a href=\"/self-employed-mortgage-bc/\">self-employed mortgage hub</a> if you work for yourself." })}
<p>Prince George is the service centre of northern BC. It has a university, a college and a regional hospital. It has government offices, forestry and manufacturing, and a rail and highway hub. Plenty of smaller towns look to it for services.</p>
<p>Mortgage brokering doesn't depend on where the broker sits. Joshua Resvick is a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.). He serves Prince George and the North from his Surrey office. He works by phone, video and secure document upload.</p>
<p>He has no branch in the city. What he does have is a process built for distance. He has funded over 1,000 mortgages with it. Before that, he spent five years as a mortgage underwriter.</p>

${ratesStrip()}

<h2>Why a northern file needs an underwriter's eye</h2>
<p>The City's economic development office lists the region's leading industries. They include forestry, pulp and paper, mining, construction and health care. Education, transportation, warehousing and professional services are on the list too (Move Up Prince George, Industries and Employers, read October 2026).</p>
<p>Top employers include Northern Health and the University of Northern British Columbia. The College of New Caledonia, the school district and both levels of government are also on the list.</p>
<p>That mix means very different paycheques. On one side are steady salaries. On the other is pay that's variable, seasonal or on a rotation. Often both sit in the same household.</p>
<p>Lenders are fine with both. But they document each one differently. Picture a Northern Health salary next to a partner's contract forestry income. Or a camp rotation. That file needs to be put together with care.</p>
<p>Joshua reads your file the way an underwriter would, before it goes to a lender. He checks which income counts at face value and which gets averaged over two years. He checks which allowances each lender will accept. Then he finds the lender whose rules fit the whole picture.</p>
<p>That's the difference between two kinds of approval. One has conditions you can meet. The other stalls a week before completion.</p>

<h2>Resource, shift and rotation income</h2>
<ul>
<li><strong>Mill and plant workers</strong> paid hourly, with shift premiums and overtime. Base pay counts at face value. Premiums and overtime usually need a two-year history, and lenders often count the lower of last year's total or the two-year average. Your proof is your T4s and an employment letter.</li>
<li><strong>Camp and rotation workers</strong> in mining, pipeline, forestry or construction. Lenders look for steady work and renewed contracts. They also check whether you're paid on a T4 or by invoice. Living-out and travel allowances may or may not count, depending on the lender.</li>
<li><strong>Seasonal workers</strong>, including people with regular EI periods. Some lenders average your full-year income over two years. Others leave EI out. The right lender depends on your pattern.</li>
<li><strong>Owner-operators and contractors</strong>, from logging trucks to the trades. Lenders assess self-employed income from your tax returns. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the add-backs and the two-year rule. It also covers stated-income and B-lender options for when your returns don't tell the whole story.</li>
<li><strong>Health care, education and public service.</strong> These jobs are salaried, pensioned and easy to document. For these files, the real choices are about term, penalty and portability.</li>
</ul>

<h2>Prince George housing</h2>
<p>Most homes in the city are detached. There are settled neighbourhoods near the bowl and the rivers. There are post-war and newer subdivisions, and newer homes on the hills. Townhouses and a smaller condo market round it out. Acreages and rural properties sit in the surrounding regional district.</p>
<p>Basement suites are common. The City's zoning bylaw says where suites are allowed and what they need. In 2023, the Province passed a law telling larger BC cities to allow more small-scale housing on residential lots. Check the City's current rules before you count on a suite being legal.</p>
<p>A legal suite with proof of rent can help you qualify. Lenders count part of that rent. Some subtract it from your housing costs. Others add a share to your income. The share and the method vary by lender. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both methods on the same numbers.</p>
<p>Two northern issues come up a lot.</p>
<p><strong>Appraisals.</strong> In smaller towns around Prince George, the appraiser may have to travel. There may also be few recent sales to compare against. Both can affect timing and value. Build that into your financing condition.</p>
<p><strong>Rural and acreage homes.</strong> Many residential lenders cap how much land value they'll count. They want year-round road access and standard services. They won't lend when the property is mainly a business. Some lenders handle rural homes well. The most useful step is knowing the property type before the offer is written.</p>

<h2>Buying, renewing and refinancing from the North</h2>
<p><strong>First-time buyers</strong> get the same programs as anywhere in BC. That means the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains how they stack. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact tax at any price.</p>
<p><strong>Homeowners renewing</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline. Since late 2024, many uninsured mortgages can move to a new federally regulated lender at maturity without a new stress test. The balance and amortization can't go up. Credit unions are provincially regulated and set their own rules.</p>
<p><strong>Refinancing</strong> to pay off debt, renovate or buy out a former partner starts with two numbers. One is the penalty. The other is how long it takes to break even. The <a href="/refinance-mortgage-bc/">refinance guide</a> and the <a href="/mortgage-calculators/">calculators</a> show the math before anyone talks about a rate.</p>

${callout("What a broker costs in Prince George", "<p>The same as anywhere in BC. On a mortgage placed with an A lender, the lender pays the broker, and you pay nothing for the service. Fees come up only on some B-lender and private files. BC rules require those fees in writing, on BCFSA's Form 1A, before you commit. Some contract-income and rural files need those lenders. If yours does, you'll know the cost up front.</p>")}

<h2>How the process works at a distance</h2>
<ol>
<li><strong>A 15-minute call</strong> by phone or video, at a time that suits your shift. Joshua asks how you're paid, what you're buying or renewing, and when. Then he tells you what's realistic.</li>
<li><strong>Documents by secure link</strong>, never by email. Joshua reviews them the way an underwriter would. He finds the lenders whose rules fit.</li>
<li><strong>A written Lender Comparison Report.</strong> It sets rate, term, penalty method, prepayment privileges and portability side by side. The <a href="/lender-comparison-report/">report page</a> explains it. Portability matters if work might move you.</li>
<li><strong>Approval, appraisal and signing.</strong> A local appraiser does the appraisal. You sign with a Prince George lawyer or notary of your choice. You get updates at every step. Your realtor and lawyer hear from Joshua directly.</li>
<li><strong>Aftercare.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means a yearly review and a call about six months before your term ends. That way your renewal gets compared, not signed by default.</li>
</ol>

<h2>Nearby</h2>
<p>Joshua serves the Interior the same way. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers rail, trades and contract income in the Thompson region. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the Okanagan, including recreational and acreage property. Current rates and how your rate gets set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Prince George", text: "Book a 15-minute call. Tell Joshua how you're paid and what you're looking at. You'll leave knowing how a lender will read your file and what to gather first." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving BC from Surrey. Did a search for a broker in Prince George bring you here? The <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
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
