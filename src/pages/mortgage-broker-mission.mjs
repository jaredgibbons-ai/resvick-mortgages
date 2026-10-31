import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-mission/#service", name: "Resvick Mortgages, serving Mission", url: SITE.origin + "/mortgage-broker-mission/", areaServed: [{ "@type": "City", name: "Mission", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Fraser Valley" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Mission by phone and video from his Surrey office. Many Mission buyers are moving up the valley with equity from a sale, or buying new homes and rural land. Each path has its own mortgage steps.",
  who: "Mission buyers, renewers and refinancers, especially people relocating from Metro Vancouver, new-home buyers and owners of rural property.",
  next: "Book a 15-minute call and tell Joshua where you're coming from and what you're buying."
})}
<p>Mission is a Fraser Valley city on the north bank of the Fraser River, about 65 km from Vancouver. It has a town centre, newer subdivisions and a lot of rural land. Many buyers here are leaving a more expensive market. They want more space for the money.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage, with ten years in the business and five as an underwriter before that. He works with Mission, Hatzic and Silverdale clients from his Surrey office, by phone and video, and there is no Mission branch. Over 1,000 mortgages have been funded through him. <a href="/contact/">Book a 15-minute call</a> to start.</p>

${ratesStrip()}

<h2>Moving up the valley with equity from a sale</h2>
<p>A common Mission file starts in Burnaby, Surrey or Vancouver. The owner sells a condo or townhouse and buys a bigger home here. The sale proceeds become the down payment, and sometimes a lot more than the minimum.</p>
<p>Timing is the hard part. If you buy before your sale completes, you may need a short-term loan to cover the gap. The <a href="/bridge-financing/">bridge financing page</a> explains how that works and what it costs. If you sell first, a lender will want to see the money in your account before it counts.</p>
<p>If you still have time left on a low-rate mortgage, ask whether it can move with you. Porting avoids a penalty, but you still have to qualify again. The <a href="/porting-your-mortgage/">porting page</a> explains when it beats breaking. Selling a bigger home to buy a smaller one is a different path, covered on the <a href="/downsizing-and-your-mortgage/">downsizing page</a>.</p>

<h2>Silverdale, Cedar Valley and new construction</h2>
<p>Silverdale and Cedar Valley are two of Mission's longtime localities, and new building has reached Silverdale in particular. A large master-planned community at Silverdale broke ground in late 2020, starting with a townhouse phase (Business in Vancouver, December 2020, read October 2026).</p>
<p>New builds come with their own mortgage steps. A presale may complete a year or more after you sign. A new home may carry GST, and the first-time buyer rebate has its own rules. Some builders offer a price that depends on using their lender or lawyer. Compare that against your own options before you agree.</p>
<p>The <a href="/presale-mortgages-bc/">presale mortgage guide</a> covers the rate hold and final approval. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> covers the tax relief. Add the <a href="/closing-costs-bc/">closing costs</a> early, because a new home has some that a resale does not.</p>

<h2>Rural property: water, septic and acreage</h2>
<p>East of town, Hatzic and Dewdney are unincorporated communities closely tied to Mission. Rural homes across the area may have a well, a septic system or both. Services differ by address, so confirm them before you make an offer.</p>
<p>Lenders usually care about two things on a rural file. First, is the home a residence, or is the land really a business? Second, are the water and septic in working order? Many lenders ask for a water test, a septic inspection or both. Some limit how much land value they will count.</p>
<p>The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> explains the property types and which lenders tend to fit. If the home is a manufactured home, the <a href="/mobile-home-mortgages-bc/">mobile home mortgage page</a> covers the extra rules. Identify the property type before the offer is written, so the financing condition is realistic.</p>

<h2>Suites in Mission: certified, registered or neither</h2>
<p>Mission handles suites differently from most cities. The City counts a suite as a self-contained unit inside a single-family home. Suites are not permitted in townhouses or rowhomes, and coach homes and garden cottages are separate detached homes, not suites (City of Mission, Secondary Suites page, read October 2026).</p>
<p>The City also separates suites into two groups. A certified suite went through a building permit and meets the City's bylaws. A registered suite is one the City knows about but has not confirmed meets the bylaws and the Building Code. The registration window has closed, and a new suite needs a building permit (City of Mission, Secondary Suites page, read October 2026).</p>
<p>For a lender, status matters. A certified suite is the easiest to document, and many lenders count a share of the rent. A registered or unregistered suite is a harder case. Ask the seller which status the suite has and ask for the paperwork. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains how lenders count rent.</p>

<h2>What Joshua does for Mission clients</h2>
<ol>
<li><strong>Plans the money before the offer.</strong> He works out your down payment, any sale timing and the amount you qualify for. A <a href="/mortgage-pre-approval-bc/">real pre-approval</a> follows from that.</li>
<li><strong>Checks the property type.</strong> New build, rural lot, suite or plain resale each change the file. He flags what a lender will ask for early.</li>
<li><strong>Lines lenders up in writing.</strong> A <a href="/lender-comparison-report/">Lender Comparison Report</a> shows rate, term, penalty method and prepayment privileges next to each other.</li>
<li><strong>Follows through later.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> brings a yearly review and a check-in around six months before maturity, so the renewal gets compared.</li>
</ol>

${callout("What you pay", "<p>Most Mission files go to an A lender. The lender pays Joshua and you pay nothing for his work. Some rural or self-employed deals need a B or private lender instead, and then BCFSA's Form 1A shows any fee to you in writing before you commit.</p>")}

<h2>Buying, renewing and refinancing in Mission</h2>
<p><strong>First-time buyers</strong> in Mission can use the BC programs: the transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> shows how to combine them.</p>
<p><strong>Renewing owners</strong> should treat the letter as a first offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline, and the <a href="/mortgage-calculators/#renewal">renewal tool</a> in the <a href="/mortgage-calculators/">mortgage calculators</a> compares your options using your own numbers.</p>
<p><strong>Refinancing</strong> to renovate or pay off debt starts with break-even math. The <a href="/refinance-mortgage-bc/">refinance guide</a> explains it, and the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> covers buying a home that needs work. If your income is from a business, the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains the routes. How your rate is set is on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Commuting from Mission, and nearby cities</h2>
<p>The West Coast Express runs weekday commuter trains between Mission City station and downtown Vancouver. The trip takes roughly an hour and a quarter each way, so check the current timetable first. Lenders don't price a commute, but your own budget should.</p>
<p>The <a href="/mortgage-broker-abbotsford/">Abbotsford page</a> covers the other side of the river, including acreage and farm land. The <a href="/mortgage-broker-langley/">Langley page</a> covers the next market west. To start, use the <a href="/contact/">contact page</a> for the phone number, the email and what to have ready.</p>

${cta({ title: "Talk to a broker who serves Mission", text: "Book a 15-minute call. Tell Joshua where you're moving from and what you're buying. You'll leave knowing the steps and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-mission/",
  h1: "Mortgage broker serving Mission, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Mission from his Surrey office by phone and video. Buyers moving up the valley, new construction, rural land and suites, handled the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Mission", "/mortgage-broker-mission/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "I'm selling in Metro Vancouver to buy in Mission. How does the down payment work?", a: "The equity from your sale becomes your down payment once the sale completes. A lender wants to see the money in your account. If you must buy first, a short bridge loan can cover the gap. Joshua plans the timing before you write an offer." },
    { q: "Will a lender count the rent from a suite in a Mission home?", a: "Often, if the suite is certified through a building permit. Many lenders count a share of documented rent. A registered suite, or one with no paperwork, is harder to count, and the share varies by lender. Ask the seller for the suite's status before you offer." },
    { q: "Can I get a mortgage on a rural property near Hatzic or Dewdney?", a: "Often, but not with every lender. Many ask for a water test and a septic inspection, and some limit how much land value they count. They may decline where the land is mainly a business. Identify the property type with Joshua before the offer is written." },
    { q: "Do builders in Mission require me to use their lender?", a: "Usually not. Builders may offer a price or incentive that depends on using their lender or lawyer, so compare it with your other options first. A presale also needs a rate hold and final approval at completion. Joshua compares both paths in writing." },
    { q: "Do I have to travel to Surrey to work with Joshua?", a: "No. Most files are done by phone, video and secure document exchange, and your appraiser and lawyer are local to you. If you'd rather meet in person, ask on the first call. His office is in Surrey, and there's no Mission branch." }
  ]
};
