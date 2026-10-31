import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-quesnel/#service", name: "Resvick Mortgages, serving Quesnel", url: SITE.origin + "/mortgage-broker-quesnel/", areaServed: [{ "@type": "City", name: "Quesnel", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Cariboo Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Quesnel by phone and video from his Surrey office. He builds each file around the pay you can document today, whether you work at a mill, a mine, a hospital or for yourself.",
  who: "Buyers, newcomers and owners in Quesnel and the North Cariboo, including forestry workers facing shift changes or a layoff.",
  next: "Book a 15-minute call and tell Joshua how you are paid."
})}
<p>Quesnel sits where the Quesnel River meets the Fraser River, on Highway 97. It lies nearly evenly between Prince George and Williams Lake (Wikipedia, Quesnel, read October 2026). The 2021 census counted 9,889 people (North Cariboo Housing Needs Assessment, December 2024, read October 2026).</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter. More than 1,000 mortgages have been funded through him. He works from his Surrey office and serves Quesnel by phone and video. There is no Quesnel branch. You can <a href="/contact/">book a 15-minute call</a> from home, from the truck or on a break.</p>

${ratesStrip()}

<h2>Forestry pay, and a pause at the pulp mill</h2>
<p>Forestry is the base of the local economy. The City Manager told CKPG that about 53% of the City's revenue comes from industrial tax, mostly from forestry (CKPG Today, August 13, 2026, read October 2026). So a change at one mill can touch a household and the town budget at once.</p>
<p>Quesnel River Pulp is owned by Atlas Holdings and run by Millar Western (PaperAge, August 20, 2026, read October 2026). In August 2026 the company said it would pause the mill, with about 90 workers affected. It cited market conditions. CKPG reported that the pause would last until at least November, and that the mill was still paying benefits and letting workers use vacation time (CKPG Today, August 13, 2026, read October 2026).</p>
<p>The company later said it planned to restart on the day shift on November 1. It added that the pause could be extended if markets stay weak (My Cariboo Now, September 4, 2026, read October 2026). Check the latest news before you plan around any date.</p>
<p>Pauses like this are not new here. In late 2021, floods in southern BC cut off rail and road shipping. One Quesnel pulp mill shut for 16 days, and another ran at about one third of capacity for two weeks (My Prince George Now, December 13, 2021, read October 2026). Nearby, West Fraser announced in November 2025 that its 100 Mile House sawmill would close, affecting about 165 workers (Quesnel Observer, November 6, 2025, read October 2026).</p>
<p>None of this is a reason to panic, and a job loss is a hard thing to live through. It does change how a lender reads a file. Here is how it commonly works:</p>
<ul>
<li><strong>You are working now.</strong> A lender wants to confirm your job. An employer letter and recent pay stubs do most of the work. Base wage counts in full once confirmed. Shift premiums and overtime usually need a two-year history.</li>
<li><strong>You are on a temporary layoff.</strong> Many lenders will not fund a new purchase with no current paid work. Some will look at a firm recall letter. Policies vary, so ask before you make an offer.</li>
<li><strong>You received employment insurance or severance.</strong> Many lenders do not count these as income to qualify for a new mortgage. Some count part of them. Do not assume either way.</li>
<li><strong>You already own and a renewal is coming.</strong> Talk to Joshua early. The <a href="/mortgage-renewal-bc/">renewal guide</a> covers the timeline, and the page on <a href="/renewing-mortgage-without-a-job/">renewing without a job</a> covers the harder cases.</li>
</ul>
<p>The common thread is timing. The earlier a file is reviewed, the more options it has.</p>

<h2>Moving to Quesnel: buying a home before or after you arrive</h2>
<p>Many people who search for buying a home in Quesnel do not live here yet. Some are leaving higher-priced cities. Some work remotely. Others are health care workers or tradespeople with a start date and a short window. Moving to Quesnel is a personal choice, and a lender cares about your job and credit, not the town's headlines.</p>
<p>Try these steps in this order:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> It sets your price range and holds a rate for a set time. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what to gather.</li>
<li><strong>Line up your income papers.</strong> A signed offer, pay stubs, T4s and a down payment record cover most files. Remote workers should add a letter that names the employer and the pay.</li>
<li><strong>Pick a closing date that fits your move.</strong> If you can, close after your start date and after any probation ends.</li>
<li><strong>Plan for the home you leave.</strong> If it has not sold, a <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
</ol>
<p>Joshua works by phone and video, so none of this needs a trip north. A realtor in town can show you homes while he handles the lender side.</p>

<h2>Other paycheques in the North Cariboo</h2>
<p>The mills are the biggest name, but not the only one. Here are other income types Joshua sees.</p>
<h3>Mine work</h3>
<p>Taseko says its Gibraltar copper mine in the Cariboo employs about 700 people (Taseko, February 11, 2025, read October 2026). Mine pay often runs on shifts. A lender reads base wage first, then looks at premiums and bonuses with a longer history.</p>
<h3>Health care and public service</h3>
<p>GR Baker Memorial Hospital serves the town (Wikipedia, Quesnel, read October 2026). Hospital, school and government jobs are salaried and easy to document. The page for <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and health care workers</a> explains how lenders see them.</p>
<h3>Tourism and seasonal work</h3>
<p>Barkerville Historic Town ran its main 2026 season from May 30 to September 13 (CKPG Today, May 28, 2026, read October 2026). Seasonal pay can be counted, but lenders vary. Some average two years of income. Some leave employment insurance out.</p>
<h3>Loggers, truckers and contractors</h3>
<p>Many people here work for themselves or own a truck. Lenders judge this pay from tax returns, usually over two years. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> and the <a href="/mortgage-for-contractors/">contractor page</a> explain the add-backs and the options.</p>
<p>For scale, an older census figure put the city's median household income at $60,651 in 2015, against $69,995 for BC (Wikipedia, Quesnel, read October 2026). That blends many pay types. It says little about what one household can borrow.</p>

<h2>What Quesnel homes are, and what lenders ask</h2>
<p>The Housing Needs Assessment counts 4,766 dwellings in the city in 2021. About 62 of every 100 households owned their home, with 2,800 owners and 1,705 renters (North Cariboo Housing Needs Assessment, December 2024, read October 2026). It also notes a rental vacancy rate of 2.3% in October 2023, up from 1.3% a year earlier. Renters here still have limited choice.</p>
<p>Prices are lower than in most BC cities. In the first quarter of 2026, the board's Quesnel area logged 61 sales worth $21.1 million (BC Northern Real Estate Board, as reported by Business Examiner, April 17, 2026, read October 2026). That is roughly $346,000 per sale across every property type. The board's region as a whole averaged $433,250. These are one quarter's numbers, so use them for scale only.</p>
<p>A lower price point draws first-time buyers who find the numbers workable. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs page</a> show what to save. It also draws investors. Lenders look at the rent, the costs and your other debts. The <a href="/investment-property-mortgages-bc/">investment property page</a> explains the rules.</p>
<h3>Small-market appraisals</h3>
<p>A smaller town has fewer recent sales. An appraiser may have few close comparisons, and the value can land under the agreed price. Lenders vary on this. Keep some cash in reserve, and put a value check in your conditions.</p>
<h3>Manufactured homes</h3>
<p>If you look at a manufactured home, the land decides most of the file. A home on land you own is far easier to finance than one on a rented pad. Pad homes often face shorter terms and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> covers both cases.</p>
<h3>Acreages, wells and septic</h3>
<p>Rural areas around the city have a very different mix. The same report counts about 86% to 88% of households as owners in the four rural areas it studied. Many of those homes use a well and a septic field. Lenders often ask for water and septic proof. Some cap how many acres they count, and some decline land farmed as a business. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> sets out the property types.</p>
<h3>Wildfire</h3>
<p>In August 2018, the Cariboo Regional District and the City issued an evacuation alert for West Quesnel because of the Narcosli Creek fire. Thousands of people were told to be ready to leave (Global News, August 11, 2018, read October 2026). Ask your insurer about cover for a rural or treed lot before you remove conditions, not after.</p>

<h2>Suites in Quesnel</h2>
<p>A legal suite can help carry a mortgage. The City says secondary suites are allowed in most residential zones. They can sit in a single-detached home, a row house or a duplex. A suite needs a building permit and cannot be strata titled. The City's guide sets no floor-area limit. The wall and ceiling between units need a fire rating, and both units need linked smoke alarms (City of Quesnel, Creating or Legalizing a Secondary Suite, March 2026, read October 2026).</p>
<p>If a suite already exists, call the City first. The guide says the building department can inspect it, and the owner can then apply to legalize it. Rules change, so confirm with the City before you plan a build.</p>
<p>For a lender, the unit must be legal, and the rent must be documented. Many lenders then count part of the rent. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods.</p>

<h2>How Joshua works with Quesnel clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> A mill shift, a mine rotation, a hospital salary and a truck all read differently.</li>
<li><strong>Checks the property early.</strong> He asks if the home sits on a pad, on a well, on acreage or in a treed area. These facts steer the lender choice before you fall for a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you do not choose on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. That way a change in your work does not catch you off guard.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Quesnel files, such as pad homes or very new income, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<h2>Test your numbers, and plan the next step</h2>
<p>The <a href="/mortgage-calculators/">mortgage calculators</a> let you try your own numbers. The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, without quoting one that goes stale.</p>

<h2>Close to Quesnel</h2>
<p>Many Quesnel buyers also compare Prince George, which has a bigger market and more condos and townhouses. The <a href="/mortgage-broker-prince-george/">Prince George page</a> covers the northern service centre.</p>

${cta({ title: "Talk to a broker who serves Quesnel", text: "Book a 15-minute call. Share how you are paid, where you are moving from and the kind of home you want. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-quesnel/",
  h1: "Mortgage broker in Quesnel, BC: buying a home or moving to Quesnel",
  lede: "Buying a home in Quesnel, or moving to Quesnel for work? Joshua Resvick, Xeva Mortgage, serves Quesnel from his Surrey office by phone and video. Mill, mine and hospital pay, self-employed income, acreages and suites, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Quesnel", "/mortgage-broker-quesnel/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Quesnel before I move there?", a: "Yes, often. Many people get pre-approved by phone or video, then make an offer through a realtor or on a visit. Lenders look at your job, pay and credit, not where you live today. Ask for a closing date that fits your start date, and plan for the home you are leaving." },
    { q: "I am moving to Quesnel. When should I get pre-approved?", a: "As soon as you have a signed job offer, or a clear picture of your income if you work remotely. A pre-approval shows your price range and holds a rate for a set time. Bring pay stubs, T4s and down payment details. If probation applies, tell Joshua early." },
    { q: "My mill hours were cut or paused. Can I still get a mortgage?", a: "It depends on the lender and on your status. If you are working, your employer letter and pay stubs matter most. If you are laid off, many lenders wait until pay resumes, and some look at a firm recall letter. Talk to Joshua before you apply or make an offer." },
    { q: "Will a lender count employment insurance or severance?", a: "Many lenders do not count either as income to qualify for a new mortgage, and some count only part. Lenders vary. Keep your records, and ask before you rely on them. If you already own, raise any renewal early so there is time to compare options." },
    { q: "Can I add or legalize a suite in Quesnel?", a: "The City allows secondary suites in most residential zones, with a building permit and fire separation between units. Existing suites can be inspected and legalized. Check your zone with the City first. A legal, documented suite can help you qualify, while an unpermitted one usually does not." },
    { q: "Can I get a mortgage on an acreage with a well and septic?", a: "Often, but not with every lender. Many cap the acres they count, want year-round road access and ask for water and septic proof. Some decline land farmed as a business. Joshua identifies the property type before you write an offer, so your conditions are realistic." },
    { q: "Why might a Quesnel home appraise low?", a: "A smaller market has fewer recent sales, so an appraiser may have few close comparisons. The value can land under the price you agreed on. Keep extra cash on hand, and add a financing condition with enough time. Lenders vary in how they treat small markets." }
  ]
};
