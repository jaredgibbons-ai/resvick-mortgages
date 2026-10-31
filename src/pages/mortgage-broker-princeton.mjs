import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-princeton/#service", name: "Resvick Mortgages, serving Princeton", url: SITE.origin + "/mortgage-broker-princeton/", areaServed: [{ "@type": "City", name: "Princeton", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Okanagan-Similkameen" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Princeton by phone and video from his Surrey office. A new job at Copper Mountain Mine and a town with almost no rentals can force you to buy during probation. That file can work, and the order of the steps matters.",
  who: "Mine and mill hires, shift workers, and buyers of older homes, manufactured homes, acreages and lake cabins in the Princeton area.",
  next: "Book a 15-minute call and tell Joshua your start date and how you are paid."
})}
<p>Princeton sits where Highway 3 meets Highway 5A, at the joining of two rivers. It is a small town with a big employer nearby. Copper Mountain Mine is about 20 km to the south, and it shapes who buys homes here and when.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. More than 1,000 mortgages have been funded through him. He works from his Surrey office and serves Princeton by phone and video. There is no Princeton branch. You can <a href="/contact/">book a 15-minute call</a> from your kitchen table or your truck.</p>

${ratesStrip()}

<h2>The mine, and how a lender reads a 7x7 pay stub</h2>
<p>Copper Mountain Mine is an open-pit copper mine run by Hudbay. The company says it employs about 715 people directly, rising to about 830. (Hudbay, Copper Mountain Mine FAQ, read October 2026).</p>
<p>Many jobs run on a 7x7 schedule. That means seven days on and seven days off, in 12-hour day or night shifts. A current Hudbay posting for a heavy duty mechanic says this in plain words, and adds that it is not a fly-in fly-out job. (Hudbay, Heavy Duty Mechanic job posting, October 2, 2026, read October 2026). So workers live in or near Princeton, and they need a home.</p>
<p>Here is how lenders commonly see the pay:</p>
<ul>
<li><strong>Base wage.</strong> Your hourly rate times your regular hours is clean, full-time income. Lenders read it easily once your employment is confirmed.</li>
<li><strong>Night premiums, overtime and bonuses.</strong> Lenders treat these as variable income. Many want a two-year history, which a new hire does not have yet. Some lenders credit part of it sooner. Policies vary.</li>
<li><strong>Year-one math.</strong> For a new hire, the file often runs on base wage alone. At mine pay scales, that can still be enough for a Princeton home. Joshua runs both versions so you see the gap.</li>
</ul>
<p>The papers that help most are an offer letter, your first pay stubs and a letter from the employer. If you worked at another mine or mill before, bring those T4s. Two years of steady work in the same trade makes a new-hire file much stronger. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what to gather.</p>

<h2>Buying while you are still on probation</h2>
<p>New hires are often on probation for a few months. Many lenders want that period finished before they fund a mortgage. Some will look at a file earlier if the job is in the same field as your last one and the employer letter is strong. Lenders vary, and this is where a broker earns their place.</p>
<p>Renting first would be the easy plan, but Princeton has few rentals. The Town's 2024 Housing Needs Report puts the rental vacancy rate at 1.4% and calls the shortage severe. (Town of Princeton, Housing Needs Report 2024 key findings, read October 2026). With so little to rent, many new workers have to buy.</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you move.</strong> Do it as soon as you have a signed offer. The rate hold gives you time to look.</li>
<li><strong>Pick a long closing.</strong> Ask your realtor for a closing date after probation ends, if the seller can wait.</li>
<li><strong>Keep the down payment and closing costs ready.</strong> The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs page</a> show how much to set aside.</li>
<li><strong>Do not change jobs or take new debt.</strong> A new car loan during probation can undo a good file.</li>
</ol>
<p>If you must close before your old home sells, read about <a href="/bridge-financing/">bridge financing</a>.</p>

<h2>Other Princeton paycheques</h2>
<p>The mine is the biggest name, but not the only one. The lumber mill on Old Hedley Road was sold by Weyerhaeuser and now runs as Similkameen Forest Products, part of the Gorman Group. (Miller Wood Trade Publications, Gorman Group focuses on value recovery, read October 2026). Mill work is shift work too, and it is read much like mine work.</p>
<p>Ranching and farm income is common in the valley. It is often seasonal, and part of it may be self-employed. Lenders usually want two years of tax returns before they count it in full. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes. The Town also has a large share of retirees. Their pension and registered income is generally counted from award letters and statements.</p>
<p>Statistics Canada's 2021 Census put the town's median household income near $64,500. (Statistics Canada 2021 Census, Princeton profile, as republished by Point2Homes, read October 2026). That figure blends pensions, service wages and industrial pay. A mine worker's income can sit well above it, so the town median says little about what an industrial household can borrow.</p>

<h2>What Princeton homes are, and what lenders ask</h2>
<p>Princeton is a town of detached houses. About one home in six is a manufactured or mobile home, and there are almost no condos. (Statistics Canada 2021 Census, Princeton profile, as republished by Point2Homes, read October 2026). Each kind of home brings its own questions.</p>
<h3>Older homes</h3>
<p>Many in-town homes are decades old, especially around Allison Flats. Lenders and insurers look at the roof, wiring, heating and the age of the building. A home inspection helps you and the lender. Ask your insurer about the home before you remove conditions.</p>
<h3>Manufactured homes</h3>
<p>Princeton has several manufactured home parks. The big split is the land. A home on land you own is a far easier file than a home on a rented pad. A pad home is often financed through fewer lenders, with shorter terms and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> explains both cases.</p>
<h3>Acreages, wells and septic</h3>
<p>Outside town, lots are larger. Many residential lenders count only a set number of acres, and some will not lend where the land is farmed as a business. Land in the Agricultural Land Reserve adds rules. Expect to document a well and a septic system. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> sets out the property types.</p>
<h3>Rivers and floods</h3>
<p>Princeton has a flood history, including November 2021. Homes near the Tulameen and Similkameen rivers may be priced differently by insurers, and a few lenders ask extra questions. Check the lot's flood and dike status before you make an offer, not at funding.</p>

<h2>Suites and carriage houses in Princeton</h2>
<p>A legal suite can help carry a mortgage. In the Town, the rules come from Zoning Bylaw 880, 2013, as changed by Amendment Bylaw 1022, 2022. A secondary suite must sit inside a single detached or half duplex home. The suite must be at least 32 square metres. It can be up to 125 square metres or 40% of the main home's floor area, whichever is less. One extra parking space is required. (Town of Princeton, Zoning Amendment Bylaw No. 1022, 2022, read October 2026).</p>
<p>You may have one suite or one carriage house on a parcel, but not both. (Town of Princeton, Zoning Amendment Bylaw No. 1022, 2022, read October 2026). Because the Town is working on a new zoning bylaw under provincial housing law, call the Town's planning office before you plan a build.</p>
<p>Homes outside the Town fall under the Regional District of Okanagan-Similkameen. Its Electoral Area H bylaw sets different rules for large rural parcels. The first question on any acreage is which government's rules apply.</p>
<p>For a lender, the unit must be legal, and the rent must be documented. Many lenders then count part of the rent. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods.</p>

<h2>Where buyers look: the names people search</h2>
<p><strong>In town:</strong> the Benches (1st, 2nd and 3rd Bench), Allison Flats, East Princeton, Westridge, Deerview, Downtown and Pine Park.</p>
<p><strong>Lake and rural country:</strong> Tulameen, Otter Lake and Coalmont to the west, Osprey Lake, Link Lake and Allison Lake to the north and east. Missezula Lake is about 45 km north of town. Its cabins carry Princeton addresses. (Regional District of Okanagan-Similkameen, Missezula Lake Water System request for proposals, January 28, 2025, read October 2026). Erris is a named community in Electoral Area H, off the Princeton-Summerland Road. Its listings usually read Princeton Rural. (Regional District of Okanagan-Similkameen, Electoral Area H planning report, March 5, 2026, read October 2026).</p>
<p>Hedley is a separate community further along Highway 3. Joshua serves it too, but buyers there compare it with Princeton instead of treating it as a Princeton area.</p>
<p>Cabins and lake lots can mean seasonal roads, shared water systems and holding-tank septic. Lenders ask about all three. The mortgage may also differ if the place is a second home.</p>

<h2>Commutes and move-up patterns</h2>
<p>Princeton is the affordable end of the Highway 3 corridor. Buyers priced out of the Okanagan and the Lower Mainland sometimes find a detached home here at a small-town price. Others come for the mine. In February 2026, the Province issued permits for the New Ingerbelle expansion, which would let the mine run beyond 2040. The release says the mine supports about 800 jobs, with most workers living locally. (Government of British Columbia, Province approves Copper Mountain Mine expansion, February 23, 2026, read October 2026). Hudbay held a groundbreaking for the project in June 2026. (International Mining, Hudbay breaks ground on New Ingerbelle expansion, June 18, 2026, read October 2026).</p>
<p>A mine permit does not change how a lender reads your file. A lender looks at your job, not the mine's life. But it helps your own planning, because a long-lived employer makes a longer stay in town more likely. Buyers who stay often move up from a starter home to an acreage, so choose a lender whose terms let you port or switch later.</p>

<h2>How Joshua works with Princeton clients</h2>
<ol>
<li><strong>Asks about your start date first.</strong> Probation, your last job and your pay type decide which lenders to approach.</li>
<li><strong>Checks the property early.</strong> He asks if it is on a pad, on well and septic, or near the river. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Princeton files, such as pad homes or very new income, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<h2>Buying, renewing and refinancing in the Similkameen</h2>
<p><strong>First-time buyers</strong> can use the same BC and federal programs as buyers anywhere. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows the order in which to use them.</p>
<p><strong>Renewals</strong> reward early planning. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline. The <a href="/mortgage-calculators/">mortgage calculators</a> let you test your own numbers, and the <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set.</p>

<h2>Close to Princeton</h2>
<p>Many Princeton buyers also price homes in the Okanagan. The <a href="/mortgage-broker-penticton/">Penticton page</a> covers the South Okanagan. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers the Thompson region, where rail and mining pay are read in a similar way.</p>

${cta({ title: "Talk to a broker who serves Princeton", text: "Book a 15-minute call. Share your start date, how you are paid and the kind of home you want. You will leave knowing which lenders fit and what to line up before you move." })}
`;

export default {
  slug: "/mortgage-broker-princeton/",
  h1: "Mortgage broker serving Princeton, BC and the Similkameen",
  lede: "Joshua Resvick, Xeva Mortgage, serves Princeton from his Surrey office by phone and video. New mine jobs, shift pay, older homes, acreages and suites, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Princeton", "/mortgage-broker-princeton/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "I just got hired at Copper Mountain Mine. Can I buy before my probation ends?", a: "Often you can start the process, and sometimes you can finish it. Many lenders want probation completed before they fund. Some will consider a file sooner if your last job was in the same trade and your employer letter is strong. Joshua can line up a pre-approval and a closing date that falls after probation." },
    { q: "How will a lender count my 7x7 pay, overtime and night premiums?", a: "Base wage is usually counted in full once employment is confirmed. Overtime, night premiums and bonuses are variable. Many lenders average them over two years, so a new hire often qualifies on base pay first. Some lenders credit part of the extra pay sooner. Joshua shows you both versions." },
    { q: "There is nowhere to rent in Princeton. Do I have to buy right away?", a: "Not always, but rentals are scarce. The Town's 2024 report put rental vacancy at 1.4%. If you cannot find a rental, a pre-approval before your start date lets you shop with a clear budget. Keep your down payment, closing costs and employer letter ready so you can move when a home comes up." },
    { q: "Can I get a mortgage on a manufactured home in a Princeton park?", a: "Yes, in some cases, but the land decides. A manufactured home on land you own is a far easier file. A home on a rented pad has fewer lenders, shorter terms and age limits. Pad rent and park rules also affect the file. Joshua checks this before you make an offer." },
    { q: "Can I add a suite or a carriage house to a Princeton home?", a: "Inside the Town, one accessory unit is allowed: a suite or a carriage house, not both. A suite has size limits and needs a parking space. The Town is rewriting its zoning bylaw, so confirm with the Town first. Outside town limits, regional district rules apply. A legal unit can help you qualify." }
  ]
};
