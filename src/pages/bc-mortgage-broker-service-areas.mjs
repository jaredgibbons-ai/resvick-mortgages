// Cities hub: the parent page for every /mortgage-broker-<city>/ page. Josh serves each place online from Surrey; never a branch.
import { SITE, cta, callout, esc } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { CITY_NAME } from "../lib/nearby.mjs";
import { SPECS } from "../lib/specs.mjs";

const slug = "/bc-mortgage-broker-service-areas/";

// Regions are for finding your town quickly. Every key must have a built city page.
const REGIONS = [
  ["Surrey and south of the Fraser", "This is home base. Joshua's office is in Surrey, and these are the towns closest to it.", ["surrey", "white-rock", "delta", "langley"]],
  ["Vancouver, Burnaby and the North Shore", "Condos, strata rules and older houses with suites come up a lot here.", ["vancouver", "burnaby", "new-westminster", "richmond", "north-vancouver"]],
  ["Tri-Cities, Pitt Meadows and Maple Ridge", "Townhouses and newer builds are common, and so are presales.", ["coquitlam", "port-coquitlam", "port-moody", "pitt-meadows", "maple-ridge"]],
  ["Fraser Valley", "Farmland, acreages and houses with suites all show up in the same search here.", ["abbotsford", "mission", "chilliwack"]],
  ["Sea to Sky", "Resort rules and rental rules matter as much as the price.", ["squamish", "whistler"]],
  ["Vancouver Island", "From the capital region up to the Comox Valley.", ["victoria", "saanich", "langford", "nanaimo", "courtenay"]],
  ["Okanagan and Similkameen", "Second homes, orchards and small towns sit side by side.", ["kelowna", "west-kelowna", "vernon", "penticton", "osoyoos-oliver", "keremeos", "princeton"]],
  ["Thompson and Kootenays", "Mountain towns and regional centres, each with its own housing mix.", ["kamloops", "revelstoke", "trail-castlegar", "fernie", "invermere"]],
  ["Northern BC", "Resource towns where shift work and industry income are normal.", ["prince-george", "quesnel", "terrace", "kitimat", "prince-rupert", "fort-st-john"]]
];

// Hidden full stop so screen readers and the readability check treat each town as its own item (same as the resources page).
const DOT = `<span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">. </span>`;
const href = (k) => `/mortgage-broker-${k}/`;
const listed = new Set(REGIONS.flatMap(([, , keys]) => keys));
for (const k of listed) if (!CITY_NAME[k] || !SPECS[href(k)]) throw new Error("Cities hub lists a town with no city page: " + k);
for (const k of Object.keys(CITY_NAME)) if (!listed.has(k)) throw new Error("City page missing from the cities hub: " + k);

const regionId = (name) => name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
const jump = `<nav class="res-jump" aria-label="Jump to a region" data-nocount><ul>${REGIONS.map(([n]) => `<li><a href="#${regionId(n)}">${esc(n)}</a>${DOT}</li>`).join("\n")}</ul></nav>`;
const sections = REGIONS.map(([name, blurb, keys]) => `<h3 id="${regionId(name)}">${esc(name)}</h3>
<p>${esc(blurb)}</p>
<ul class="res-list">${keys.map((k) => `<li><a href="${href(k)}">${esc(CITY_NAME[k])}</a>${DOT}</li>`).join("\n")}</ul>`).join("\n");

const body = `
${short({
  answer: "Joshua Resvick arranges mortgages for people all over BC from one office in Surrey. He works by phone, video and email, so where you live doesn't change the service.",
  who: "You want a broker who knows the housing rules in your town, not just the big cities.",
  next: "Find your town in the list below. Not there? <a href=\"/contact/\">Get in touch</a> anyway. He can still help."
})}
<h2>One office, all of BC</h2>
<p>Joshua Resvick is a licensed mortgage broker with ${esc(SITE.brokerage)}. His office is in Surrey. That's the only office, and he doesn't pretend otherwise.</p>
<p>He doesn't have a branch in Kelowna, Victoria or Prince George. What he has is a way of working that doesn't need one. You talk by phone or video. You send your documents online. The lender, the appraiser and your lawyer or notary do their parts where you live.</p>
<p>Most people never need to visit a broker's office at all. A mortgage is paperwork, numbers and good advice. None of that depends on a waiting room.</p>
<p>The licence matters more than the address. Mortgage brokers in BC are licensed by the BC Financial Services Authority, and that licence covers the whole province. So a broker in Surrey can arrange a mortgage in Fernie or Fort St. John the same way.</p>

<h2>Find your town</h2>
<p>Each town below has its own page. The towns are grouped by region so you can find yours fast.</p>
${jump}
${sections}

<h2>Why local detail matters for a mortgage</h2>
<p>The mortgage rules are mostly the same across Canada. The stress test doesn't change when you cross a bridge. So why have a page for each town?</p>
<p>Because the property changes. And lenders care a great deal about the property.</p>
<p>Here are some of the things that differ from one town to the next:</p>
<ul>
<li><b>Suites and extra units.</b> Each city has its own rules on secondary suites, laneway homes and small multi-unit housing. Lenders usually want a suite to be legal before they count its rent. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> explains how that works.</li>
<li><b>Short-term rentals.</b> Some towns allow them in your main home only. Some limit them to certain zones. If rental income is part of your plan, read the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental guide</a> first.</li>
<li><b>The kind of land.</b> Some homes sit on leased land or on reserve land. Fewer lenders finance those, and the terms differ. See <a href="/leasehold-mortgages-bc/">leasehold mortgages</a> and <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</li>
<li><b>Farms and acreages.</b> Land in the Agricultural Land Reserve comes with its own limits. Lenders vary on how much land they will count. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR guide</a> covers it.</li>
<li><b>Manufactured homes.</b> In some towns, a large share of homes are in mobile home parks. Those need a different kind of loan, covered in the <a href="/mobile-home-mortgages-bc/">mobile home guide</a>.</li>
<li><b>Condos and townhouses.</b> In the cities, most first homes are strata. The building's finances can matter as much as yours. Start with <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgages</a>.</li>
<li><b>How people earn a living.</b> In resource towns, many buyers work rotations or get paid in ways a bank branch finds confusing. The <a href="/mortgages-for-camp-mine-and-shift-workers/">shift worker guide</a> explains how lenders read that income.</li>
</ul>
<p>None of this is exotic. It's just the kind of thing you want to know before you write an offer, not after.</p>

<h2>What you'll find on each town's page</h2>
<p>Every town page is built the same way, so you always know where to look.</p>
<ul>
<li><b>Housing numbers from the census.</b> How many homes are owned or rented, and what kinds of homes there are.</li>
<li><b>Local housing rules.</b> Suites, short-term rentals and zoning changes, with links to the town's own documents.</li>
<li><b>Major employers.</b> Who people work for locally, because income type shapes a mortgage file.</li>
<li><b>Neighbourhoods.</b> A plain description of the main areas and the homes you'll find in each.</li>
<li><b>Land notes.</b> Reserve land, leased land, floodplain or farmland, where it applies.</li>
<li><b>Nearby towns.</b> Links to the next towns over, in case your search is wider than one place.</li>
</ul>
<p>Local facts link to their sources. Those are mostly the town's own website, the Province or Statistics Canada. Rules change, so treat each page as a starting point and confirm the details with the town before you rely on them.</p>
<p>You won't find mortgage rates on these pages. Rates move too often to print, and the right one depends on your file. The <a href="/mortgage-rates-bc/">rates page</a> explains how rates are set and what moves them.</p>

<h2>How a mortgage works when your broker is in another town</h2>
<p>The steps are the same whether you live ten minutes from the office or ten hours.</p>
<ol>
<li><b>A 15-minute call.</b> You tell Joshua what you're trying to do. He tells you what's realistic and what to gather. The call is free.</li>
<li><b>Your documents.</b> You send income and down payment documents online. The <a href="/mortgage-application-checklist/">application checklist</a> shows what most people need.</li>
<li><b>A pre-approval or a plan.</b> Joshua reads your file the way an underwriter would. He spent five years as one before he became a broker. Then he matches you with lenders that fit.</li>
<li><b>The property.</b> Once you have an accepted offer, the lender reviews the home. Many lenders order an appraisal, and a local appraiser does that visit.</li>
<li><b>Closing.</b> You sign with a lawyer or notary near you. They handle the title and the money on closing day.</li>
</ol>
<p>Want the longer version? <a href="/what-happens-after-you-apply/">What happens after you apply</a> walks through each stage.</p>
<p>And it doesn't end at closing. The <a href="/mortgage-aftercare-program/">aftercare program</a> means a yearly review and a heads-up before your renewal. That works the same from anywhere in BC too.</p>

<h2>Small towns and remote places</h2>
<p>Small towns get less attention from the mortgage industry. The people buying there have just as much at stake.</p>
<p>A few things are worth knowing if you're buying outside the big centres.</p>
<p>Some lenders are careful in very small or remote markets. They may ask for a larger down payment, or they may not lend there at all. Lenders vary a lot on this. A broker's job is to know which ones say yes in your town before you apply.</p>
<p>Appraisals can take longer when few appraisers cover the area. If your closing date is tight, say so early.</p>
<p>Homes on wells, septic systems or large lots can bring extra questions from a lender. So can homes with a wood stove as the main heat. Lenders vary on all of these. They rarely stop a mortgage. They just need the right lender and a little lead time.</p>
<p>Moving to a new town for work? A new job, a probation period or a transfer each change how a lender reads your income. Bring it up on the first call.</p>

${callout("Don't see your town?", "<p>The list covers the places with their own pages so far. It isn't the edge of the map. Joshua arranges mortgages anywhere in BC, and new town pages are added over time. If yours is missing, the process is exactly the same. <a href=\"/contact/\">Send a note</a> or book a call.</p>")}

<h2>Where to go next</h2>
<p>If you're buying your first home, start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. If your term is ending, the <a href="/mortgage-renewal-bc/">renewal guide</a> is the place to begin. Thinking about using your equity? Read the <a href="/refinance-mortgage-bc/">refinancing guide</a>.</p>
<p>Want to know who you'd be working with? The <a href="/about-joshua-resvick/">about page</a> covers Joshua's background, and <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a> explains the money side in plain terms.</p>

${cta({ title: "Wherever you are in BC, start with a call", text: "Fifteen minutes by phone or video is enough to see where you stand. No obligation, and no drive to Surrey." })}
`;

export default {
  slug,
  h1: "Mortgage broker serving cities and towns across BC",
  lede: "One office in Surrey, serving towns from Victoria to Fort St. John. Find your town below.",
  crumb: "Cities", nav: "/resources/", body,
  faqs: [
    { q: "Do I need a mortgage broker in my own town?", a: "No. A BC mortgage broker's licence covers the whole province, and almost every step can be done by phone, video and email. What matters is that your broker understands the rules and the property types where you're buying. The closing itself happens with a lawyer or notary near you." },
    { q: "Does Joshua have an office in my city?", a: "He has one office, in Surrey. He serves every other town in BC from there by phone and video. The town pages on this site cover local details, but they are not branch offices and he doesn't claim they are." },
    { q: "Will it cost more because I live far from Surrey?", a: "No. Where you live doesn't change how a broker is paid. On most mortgages with mainstream lenders, the lender pays the broker and you pay nothing. A fee can apply on some alternative or private files, and it is disclosed in writing before you sign anything." },
    { q: "My town isn't on the list. Can you still help?", a: "Yes. The list shows the towns that have their own page so far. Joshua arranges mortgages anywhere in BC, and the steps are the same. Some lenders are more careful in very small or remote markets, so it helps to talk early about where you plan to buy." },
    { q: "How do I sign documents if we never meet?", a: "Your mortgage paperwork with the lender is handled online or by email in most cases, and lenders vary on the exact method. The legal documents are signed with a lawyer or notary in your area close to your closing date. Joshua tells you what to expect at each step." }
  ]
};
