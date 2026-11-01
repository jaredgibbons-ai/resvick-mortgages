import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-new-westminster/#service", name: "Resvick Mortgages, serving New Westminster", url: SITE.origin + "/mortgage-broker-new-westminster/", areaServed: [{ "@type": "City", name: "New Westminster", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves New Westminster by phone and video, and in person at his Surrey office. This is an older, dense city. Strata towers, character houses and homes with suites each need a different kind of file.",
  who: "New Westminster buyers, renewers and refinancers, especially condo buyers, owners of older homes and anyone with a suite.",
  next: "Book a 15-minute call and say what kind of building you are looking at."
})}
<p>New Westminster is one of the oldest cities in the region, and it shows in the housing. Heritage streets climb the hill above the Fraser River. Condo towers stand along the waterfront and near the SkyTrain stations. Queensborough sits across the river to the southeast. The mortgage questions change from one of these places to the next.</p>
<p>Joshua Resvick is a licensed Xeva Mortgage broker, and he worked five years as an underwriter before he started brokering. Surrey is a short trip down the road, so you can meet him there if you like. Most clients just use the phone, a video call and secure uploads. There is no branch in New Westminster. <a href="/contact/">Book a 15-minute call</a> to get started.</p>

${ratesStrip()}

<h2>Start with the building, not the street</h2>
<p>In a city this old, a lender cares about the building almost as much as it cares about you. The same buyer with the same income can get a clean approval on one property and a list of questions on another. So learn what you are buying before the offer is written.</p>
<h3>Condo and townhouse buyers</h3>
<p>Much of the new supply in New Westminster is strata. That includes the towers around Downtown and the waterfront, the buildings near the SkyTrain stations, and a growing number of townhomes. A strata mortgage depends on the health of the whole corporation, not just your unit.</p>
<p>Lenders and buyers commonly ask for the minutes, the budget, the contingency reserve fund and any depreciation report. They look for special levies, big repairs and legal claims. A building with open problems can slow an approval or change the terms. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists what to request and what the answers mean.</p>
<h3>Owners of older houses</h3>
<p>The streets around Queen's Park and the Brow of the Hill hold many older houses. Age brings its own checks. An appraiser may want to see updated wiring, plumbing and a sound foundation. An insurer may ask about the electrical system before it covers the home. A lender wants proof of insurance before it funds.</p>
<p>Some character homes also carry a heritage designation or a heritage agreement with the City. That can limit what you may change. Ask the City and your lawyer about a specific address before you remove a subject. Joshua cannot give legal advice on a title, but he can tell you how a lender is likely to treat the property.</p>
<h3>Queensborough</h3>
<p>Queensborough is a distinct community across the river, with newer townhomes and detached houses. The City notes that it must study water, sewer and ground conditions there before some of the new provincial housing rules apply in full. Details change, so confirm what a given lot allows. (City of New Westminster, Small Scale Multi Unit Housing page, read October 2026.)</p>

<h2>Incomes in New Westminster</h2>
<p>New Westminster's median household income was $82,000 for 2020. About 12.0 percent of workers were self-employed, a low share for the region. The largest industries were health care, professional services and retail. (Statistics Canada, 2021 Census Profile, read October 2026). With health care at the top, many local files are hospital and clinic wages, often with shift pay or part-time hours. Lenders vary on how they count shift premiums and casual hours, so bring your last two pay stubs and your most recent tax slip.</p>
${censusTable("new-westminster")}

<h2>Suites, laneway homes and infill in New Westminster</h2>
<p>A legal suite can help you qualify, and an unauthorized one can sink a deal. The City's rules are specific, so read them before you count on any rent.</p>
<p>New Westminster generally permits one suite in most single detached houses. A building permit is required, and the suite must meet the Zoning Bylaw and the BC Building Code. A suite cannot be strata-titled, sold on its own or used for short-term rental. It can house family or a long-term tenant. Most single detached lots may also hold a laneway or carriage house if each unit meets the rules. The City says it can take enforcement action against an unauthorized suite, and paying a utility charge does not make a suite legal. (City of New Westminster, Secondary Suites page, read October 2026.)</p>
<p>The City has also set up an infill housing program under new provincial rules. For lots of 280 square metres or less, it allows three units. Larger lots can hold four, and larger lots within 400 metres of frequent bus stops can hold six. (City of New Westminster, Small Scale Multi Unit Housing page, read October 2026.) That opens options for owners and for investors. It also means a lender will want to know which units are permitted and which are only planned.</p>
<p>For qualifying, the test is simple. Is the suite permitted, and is the rent documented? A permitted suite lets many lenders count part of the rent. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods. If you already own the house, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers borrowing to add a unit.</p>

<h2>How Joshua works with New Westminster clients</h2>
<ol>
<li><strong>Looks at the property early.</strong> He asks what the building is, how old it is and whether anything unusual attaches to it, so surprises come before the offer rather than after.</li>
<li><strong>Matches income to lender.</strong> Salaried, commission, shift and self-employed pay are each read differently. He picks the lender whose rules fit yours before anything is submitted.</li>
<li><strong>Puts the choices on paper.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lays out rate, term, penalty method and prepayment room for each option.</li>
<li><strong>Keeps an eye on your renewal.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, you get a yearly review and a nudge well ahead of your maturity date.</li>
</ol>

${callout("What it costs you", "<p>For most New Westminster purchases and renewals, an A lender pays Joshua for the work, and the bill to you is zero. A few files, such as a self-employed buyer with thin tax returns, may call for a B or private lender. If so, BC rules require written disclosure of any fee on BCFSA's Form 1A before you commit to anything.</p>")}

<h2>Buying, renewing and refinancing here</h2>
<p><strong>First-time buyers</strong> in New Westminster often start with a condo near transit. The BC transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the new-home GST rebate can all play a part. Each has its own test. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows how to line them up, and the <a href="/first-time-buyer-programs-bc/">programs page</a> explains each one.</p>
<p><strong>Owners coming up for renewal</strong> have more room to negotiate than many realize. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline. Try the <a href="/mortgage-calculators/#renewal">renewal tool</a> in the <a href="/mortgage-calculators/">mortgage calculators</a> to test staying, switching and refinancing with your own balance.</p>
<p><strong>Self-employed owners</strong> are common in a city with so many small studios and shops. Lenders read business income through tax returns, so the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> is worth a look. For how a rate is set in the first place, see the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Next door</h2>
<p>New Westminster sits between Burnaby and Surrey, and many buyers compare all three. The <a href="/mortgage-broker-burnaby/">Burnaby page</a> covers the strata and SkyTrain side of that search. The <a href="/mortgage-broker-surrey/">Surrey page</a> has the office address and what to bring to an in-person meeting. Joshua works the same way in each place, with the same lenders and the same written comparison.</p>

<p class="more-links"><strong>More for New Westminster buyers.</strong> Pages that may fit your situation: <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgages-for-government-and-city-employees/">government and city employees</a> and <a href="/mortgages-for-first-responders/">first responders</a>. For the basics, see the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, <a href="/down-payment-guide-bc/">down payment guide</a> and <a href="/closing-costs-bc/">closing costs guide</a>. You can also read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> or <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${nearbyCallout("new-westminster", callout)}

${cta({ title: "Talk to a broker who serves New Westminster", text: "Book a 15-minute call. Say what you are buying and how you are paid. You will leave knowing how a lender will read it and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-new-westminster/",
  h1: "Mortgage broker serving New Westminster, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves New Westminster by phone and video, with meetings at his nearby Surrey office. Condos, character homes, suites and infill, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving New Westminster", "/mortgage-broker-new-westminster/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "What will a lender check on a New Westminster condo?", a: "Beyond your own file, a lender looks at the strata corporation. It commonly asks for the minutes, the budget, the contingency reserve fund and any depreciation report, and it looks for special levies or legal claims. A weak building can slow approval or change the terms. Joshua reviews the documents with you before you remove subjects." },
    { q: "Can I count rent from a basement suite in New Westminster?", a: "If the suite is authorized, meaning it was created under a City building permit, many lenders count a share of documented rent. An unauthorized suite usually can't be counted, and the City can take enforcement action. The share and the method vary by lender, so Joshua runs both methods on your numbers." },
    { q: "Does an older or heritage house make a mortgage harder?", a: "Not by itself, but age raises questions. An appraiser or insurer may ask about wiring, plumbing or the foundation, and a heritage designation can limit what you may change. Lenders vary in how they treat these homes. Raise the address with Joshua early, so any condition is known before you commit." },
    { q: "Is there a branch in New Westminster?", a: "No. Joshua works from an office in Surrey, which is close by, and serves New Westminster clients by phone, video and secure document upload. You can meet him in person at the Surrey office if you prefer. BC mortgage rules and lenders are provincial, so his location does not narrow your options." },
    { q: "Can a laneway house help me qualify for a bigger mortgage?", a: "Only in limited ways. A permitted unit that already exists and earns documented rent can count toward qualifying at many lenders. A unit you plan to build usually cannot count until it is finished and rented. Some refinance programs fund a new suite. Joshua explains which route fits your plan." }
  ]
};
