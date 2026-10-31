import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-chilliwack/#service", name: "Resvick Mortgages, serving Chilliwack", url: SITE.origin + "/mortgage-broker-chilliwack/", areaServed: [{ "@type": "City", name: "Chilliwack", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Fraser Valley Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Chilliwack by phone and video from his Surrey office. Moving up from the Lower Mainland, farmland, flood rules, manufactured homes and Cultus Lake leases each change the file.",
  who: "Chilliwack buyers, Lower Mainland owners moving east, and anyone with an acreage, a suite or a leased cabin.",
  next: "Book a 15-minute call and describe the property you have in mind."
})}
<p>Chilliwack draws a few kinds of buyers. Some are first-time buyers who want a home they can afford. Some are Lower Mainland owners selling at a high price and buying with room to spare. Others want land, animals or a lake cabin. Each of those needs a different mortgage file.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves Chilliwack, Sardis, Vedder and the rest of the Fraser Valley from his Surrey office, by phone and video. He has no Chilliwack branch. He has five years as an underwriter, ten years as a broker, and over 1,000 mortgages funded. He handles your file himself.</p>

${ratesStrip()}

<h2>Moving east with equity from the Lower Mainland</h2>
<p>A common Chilliwack story starts with a sale in Surrey, Burnaby or Vancouver. The proceeds become a bigger down payment here, often in an area such as Promontory, the Eastern Hillsides or Sardis. The mortgage that follows is usually smaller than the one you had, and sometimes there's none at all.</p>
<p>Two things trip people up. The first is timing. If the sale and the purchase don't close on the same day, you may need <a href="/bridge-financing/">bridge financing</a>. The second is the old mortgage. If you're two years into a fixed term, <a href="/porting-your-mortgage/">porting it</a> can avoid a penalty, but only if the dates and the lender's rules line up.</p>
<p>Joshua checks both before you list. If you're leaving a big home for a smaller one, the <a href="/downsizing-and-your-mortgage/">downsizing page</a> shows what you'll net from the sale.</p>
<p>Many buyers keep a job in the Lower Mainland and commute west. Lenders count your income wherever the employer is. What matters is how you're paid and how long you've been paid that way.</p>

<h2>Farmland is most of the city</h2>
<p>The City of Chilliwack says agriculture accounts for 67 percent of its land base (City of Chilliwack, Agricultural Planning, read October 2026). That's why so many Chilliwack properties are acreages, hobby farms or houses on large lots next to working fields.</p>
<p>Lenders treat these differently from a city lot. Many limit how much land value they'll count. Most give farm buildings little or no lending value. Some decline when the property is mainly a business. If the land is in the Agricultural Land Reserve, what you can do with it is also limited. The City's online map shows whether a given lot is in the ALR.</p>
<p>The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> explains how lenders sort these files. Identify the property type with Joshua before your offer is written, so the financing condition is realistic.</p>

<h2>Suites, coach houses and the flood line</h2>
<p>Chilliwack permits rental secondary suites in single detached homes across the city, regardless of the zone. New suites can't go below the flood construction level, and they need a building permit. Coach houses and garden suites go through a development permit first (City of Chilliwack, Secondary Suites, Coach Houses and Garden Suites, read October 2026).</p>
<p>The rules have also grown. After provincial changes, Council updated the zoning bylaw in June 2024. Single detached lots now allow at least one secondary suite. Larger single detached or duplex lots, over 280 square metres and inside the urban growth boundary, can hold up to four units (City of Chilliwack, Small-Scale Multi-Unit Housing, read October 2026).</p>
<p>For a lender, a legal, permitted unit means a share of the rent can count toward qualifying. An unpermitted one usually can't. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains how the share is worked out. Confirm the current rules with the City before you rely on a unit being legal.</p>

<h2>Manufactured homes and Cultus Lake leases</h2>
<p>Chilliwack has manufactured homes in parks and on their own lots. A home on land you own is financed differently from a home in a park you rent a pad in. The <a href="/mobile-home-mortgages-bc/">mobile home mortgage page</a> covers the two routes: a home on land you own, and a home on a rented pad.</p>
<p>Cultus Lake is a different case. The land in Cultus Lake Park is leased, not owned. The park says its residential properties are held on 21-year leases, with about 480 residential leaseholders, and that buying one goes through a lease assignment process. The park lies outside the City's boundaries and is run by its own Park Board (Cultus Lake Park Board, read October 2026).</p>
<p>Lenders vary a great deal on leasehold property. Some won't lend on it. Others care how many years remain on the lease compared with the mortgage's amortization. Ask first, before you fall for a cabin.</p>

<h2>First homes, upgrades and renovations</h2>
<p>First-time buyers here can use the same programs as anyone in BC. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> lists them. The <a href="/down-payment-guide-bc/">down payment guide</a> explains how much you need at each price.</p>
<p>If you're buying a home that needs work, a <a href="/purchase-plus-improvements/">purchase plus improvements mortgage</a> rolls the renovation into the same loan. The lender sets the value on the finished home, and holds back the funds until the work is done.</p>

<h2>What Joshua does for Chilliwack clients</h2>
<ol>
<li><strong>Names the property type early.</strong> House, acreage, manufactured home or leased cabin. He tells you which lenders fit before you write an offer.</li>
<li><strong>Lines up the timing.</strong> If you're selling elsewhere, he maps closing dates, the old mortgage and any bridge you might need.</li>
<li><strong>Compares lenders in writing.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> puts rate, term, penalty method and privileges side by side.</li>
<li><strong>Follows up.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and contact about six months before your maturity date.</li>
</ol>

${callout("What you pay", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees come up only on some B-lender and private files, which acreage and leasehold properties sometimes need. In BC, any fee must be disclosed in writing on BCFSA's Form 1A before you commit. You'll know the cost before you decide.</p>")}

<h2>Buying, renewing and refinancing</h2>
<p><strong>Buyers</strong> should start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, even if this isn't your first home. It lists the steps in order. <strong>Self-employed owners</strong> will find the routes in the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a>, which matters for farm and trades income.</p>
<p><strong>Renewing owners</strong> should treat the lender's letter as an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline. The <a href="/mortgage-calculators/">calculators</a> run your own figures. Current rates, and how your rate is set, are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Fraser Valley the same way. The <a href="/mortgage-broker-abbotsford/">Abbotsford page</a> covers the next city west, including acreage and Agricultural Land Reserve property. The <a href="/mortgage-broker-langley/">Langley page</a> covers the Township and the City of Langley. Communities near Chilliwack, such as Rosedale and Agassiz, may fall under a different local government, so their bylaws can differ. Joshua serves them too.</p>

${cta({ title: "Talk to a broker who serves Chilliwack", text: "Book a 15-minute call. Tell Joshua the property and what you're selling, if anything. You'll leave knowing which lenders fit and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-chilliwack/",
  h1: "Mortgage broker serving Chilliwack, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Chilliwack and the eastern Fraser Valley from his Surrey office by phone and video. Moving-up buyers, acreages, suites, manufactured homes and Cultus Lake leases, handled like an underwriter would.",
  crumbs: [["Home", "/"], ["Serving Chilliwack", "/mortgage-broker-chilliwack/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do lenders treat acreage and farmland differently in Chilliwack?", a: "Often, yes. Many lenders limit how much land value they count, give farm buildings little lending value, and decline properties that are mainly a business. Land in the Agricultural Land Reserve has use limits too. Lenders that specialize in rural property exist. Joshua identifies the property type before your offer is written so the financing condition is realistic." },
    { q: "Can I get a mortgage on a cabin at Cultus Lake?", a: "Possibly, but not with every lender. The park's residential properties are leased, not owned, and lenders vary on leasehold property. Some decline it. Others look at how many years remain on the lease compared with the amortization. Joshua checks the lease and lender fit before you commit to an offer." },
    { q: "Can I add a suite to my Chilliwack house?", a: "In most single detached homes, yes, with a building permit. New suites cannot go below the flood construction level, and coach houses or garden suites need a development permit. Rules changed in 2024, so confirm the current ones with the City. Lenders usually count rent only from a legal, permitted suite." },
    { q: "I'm selling in the Lower Mainland and buying in Chilliwack. How do I handle the timing?", a: "If closing dates differ, bridge financing can cover the gap. If you have time left on a fixed term, porting the mortgage may avoid a penalty, though you must still qualify again. Joshua maps the dates, the old mortgage and the new purchase together before you list, so nothing surprises you." },
    { q: "Does my Vancouver job count if I live in Chilliwack?", a: "Yes. Lenders count income from your employer wherever it is, and where you live does not change that. What matters is how you are paid, how long you have been in the role, and whether it is a probation period. Joshua checks your pay structure against lender rules early." }
  ]
};
