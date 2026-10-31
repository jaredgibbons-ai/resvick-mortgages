import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-penticton/#service", name: "Resvick Mortgages, serving Penticton", url: SITE.origin + "/mortgage-broker-penticton/", areaServed: [{ "@type": "City", name: "Penticton", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Summerland", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Okanagan-Similkameen" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Penticton, Summerland and Naramata by phone and video from his Surrey office. Penticton files are often decided by the property: a suite, a nightly rental, an orchard lot or a home in a park. Each is read by lenders in its own way.",
  who: "Penticton and South Okanagan buyers, retirees and downsizers, second-home buyers, rental owners and anyone renewing.",
  next: "Book a 15-minute call and tell Joshua what kind of property you're looking at."
})}
<p>Penticton sits on a strip of land between Okanagan Lake and Skaha Lake. People move here to retire, to downsize, to raise a family or to own a place near the water. Many buyers arrive with money from a sale somewhere else, which changes how the mortgage is built.</p>
<p>Joshua Resvick is a mortgage broker with Xeva Mortgage. He has ten years in the business and spent five years before that as a lender's underwriter. More than 1,000 mortgages have been funded through him. He works with South Okanagan clients from Surrey, and there is no Penticton branch. You can <a href="/contact/">book a 15-minute call</a> from wherever you are.</p>

${ratesStrip()}

<h2>Moving to Penticton with money from a sale</h2>
<p>A common Penticton file starts with a house sold in the Lower Mainland, Alberta or somewhere else. The buyer has equity, maybe a pension, and a smaller income than before. That mix is easy to explain to a person but awkward for lender software.</p>
<p>Many lenders count pensions, CPP, OAS and registered retirement income when you can show award letters or statements. Investment income is often averaged over two years. Some lenders also look at savings and investments alongside income. Policies vary, so the order in which lenders are asked matters.</p>
<p>The timing is the other half. If you must buy before your old home closes, a bridge loan or a longer closing can cover the gap. The <a href="/bridge-financing/">bridge financing page</a> explains the costs and risks. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers how much of the proceeds to keep in cash. Homeowners who want to stay put and draw on equity can read about the <a href="/reverse-mortgage-bc/">reverse mortgage</a> option too.</p>

<h2>Incomes in Penticton</h2>
<p>Penticton's median household income was $68,000 for 2020. About 17.5 percent of workers were self-employed. Health care was the largest industry, followed by retail and construction. (Statistics Canada, 2021 Census Profile, read October 2026). The lower median fits a city with many retirees. Pension and savings income can qualify, but lenders vary in how they count it. If you are selling a home elsewhere, the sale proceeds also matter for the down payment. Joshua will tell you which documents each lender expects.</p>

<h2>Renting a Penticton home by the night</h2>
<p>Penticton has had many vacation rentals, and the rules have tightened. Check them before an offer, not after.</p>
<p>The City treats a short-term rental as a business. Its licence page describes one as a stay of up to 90 days. It says applicants must be the primary resident of the property, and the form asks for proof of primary residency or a provincial exemption. (City of Penticton, Apply for a Business Licence, no date shown, read October 2026.)</p>
<p>The Province adds its own layer. Where the principal residence requirement applies, a host can rent out only the home where they live day to day. One secondary suite or accessory dwelling unit on the same property is also allowed. Penticton is on the Province's in-scope list, dated June 1, 2026. A city can ask to opt out only after two straight years of a vacancy rate of 3% or more. (Government of British Columbia, Principal residence requirement, last updated September 21, 2026, read October 2026.) Hosts must also register with the Province. (Government of British Columbia, Short-term rentals, last updated April 1, 2026, read October 2026.) Check both pages again before you write an offer.</p>
<p>Lenders add a third test. Many do not count nightly rental income when they decide how much you can borrow, because it moves with the season and can be ended by a bylaw. Others count part of it. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a> sets out the three treatments. If you want the home mainly as an investment, the <a href="/investment-property-mortgages-bc/">investment property page</a> covers down payments and rent.</p>

<h2>Suites and carriage houses in Penticton</h2>
<p>The City says secondary suites and carriage homes have been allowed in most residential zones since 2010, but they need proper permits. (City of Penticton news release, April 12, 2023, read October 2026.)</p>
<p>The carriage house rules were updated in 2025. They allow a carriage house in the City's small-scale multi-unit zones R4-L and R4-S, and in the rural zones FG, A and RC. In urban zones, the footprint is capped at 90 square metres or 15 percent of the lot, whichever is less. No on-site parking is required, as of June 2024. A building permit and plumbing permit come first, and an occupancy inspection must be passed before anyone moves in. A business licence is needed before the unit is rented. Properties in the Agricultural Land Reserve may have extra rules. (City of Penticton, Carriage House Bulletin, revised July 2025, read October 2026.)</p>
<p>For a lender, the key questions are whether the unit is permitted and whether the rent is documented. A legal suite lets many lenders count part of the rent toward qualifying. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods. If you own the home and want to build a suite, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program.</p>

<h2>Orchards, vineyards and homes in parks</h2>
<p>The hills and benches around the lakes hold orchards, vineyards and country lots. Naramata, on the east side of Okanagan Lake, is part of Electoral Area E of the Regional District of Okanagan-Similkameen. (RDOS, Area E Naramata page, read October 2026.) Summerland is a separate municipality, the District of Summerland. Each government has its own permit office, so a rule that applies in one place may not apply in the next.</p>
<p>Lenders care about the same few things on a rural lot. Is it mostly a home or mostly a business? How much of the value is land? Do the well, septic and road access all work? Many residential lenders cap the land value they will count and give farm buildings little value. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> explains the property types.</p>
<p>A smaller group of buyers looks at homes in manufactured home parks, which suit some retirees. A home on a rented pad is financed more like a vehicle than a house, with fewer lenders and shorter terms. The pad rent and park rules affect the file. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> walks through both cases.</p>

<h2>How Joshua works with South Okanagan clients</h2>
<ol>
<li><strong>Names the property type first.</strong> Before you offer, he asks whether the place is a plain house, has a suite, sits on farmland or is rented by the night. That one answer narrows the lender list.</li>
<li><strong>Puts the options in writing.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up the rate, term, penalty method and portability for each lender, so a retirement move or a second home is not judged on rate alone.</li>
<li><strong>Handles the paper trail.</strong> You upload documents through a secure link. A Penticton appraiser and lawyer or notary do the local work, and Joshua keeps them and your realtor on the same dates.</li>
<li><strong>Looks in again later.</strong> With <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and contacts you about six months before it matures.</li>
</ol>

${callout("What a mortgage broker costs", "<p>For most Penticton purchases and renewals, an A lender pays Joshua and your cost is zero. Rural, rental-income and retirement-income files can sometimes need a B or private lender. Any fee that applies to you has to be shown in writing, on BCFSA's Form 1A, before you agree to it.</p>")}

<h2>Buying, renewing and refinancing in the South Okanagan</h2>
<p><strong>First-time buyers</strong> can use the same BC and federal programs as anyone else. These include the property transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows the order to use them in.</p>
<p><strong>Renewals</strong> reward early planning. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline, and the <a href="/mortgage-calculators/#renewal">renewal tool</a> inside the <a href="/mortgage-calculators/">mortgage calculators</a> tests staying, switching and refinancing with your figures.</p>
<p><strong>Self-employed buyers</strong> are common in a region built on tourism, farms and trades. Their income is read from tax returns. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes. For how a rate is set, see the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Close to Penticton</h2>
<p>Many South Okanagan buyers compare Penticton with the north end of the lake. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the larger city, and the <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers the Thompson region. Joshua serves all three the same way, with the same lender comparison.</p>

<p>Some Penticton homes sit on leased land. Skaha Hills, on Penticton Indian Band land, says it offers a registered, deeded title to a 99-year prepaid Crown lease (Skaha Hills, Current phases, read October 2026). That is the developer's own description, and each lender decides for itself whether to lend. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. Our pages on <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a> explain the questions to ask.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/self-employed-mortgage-bc/">self-employed mortgages</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Penticton file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

<p>South of Penticton, the <a href="/mortgage-broker-osoyoos-oliver/">Osoyoos and Oliver page</a> covers wine country, band leasehold homes and local short-term rental rules.</p>

${cta({ title: "Talk to a broker who serves Penticton", text: "Book a 15-minute call. Describe the property and where the money comes from. You'll leave knowing which kind of lender fits and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-penticton/",
  h1: "Mortgage broker serving Penticton and the South Okanagan, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Penticton, Summerland and Naramata from his Surrey office by phone and video. Retirement moves, suites, vacation rentals and orchard lots, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Penticton", "/mortgage-broker-penticton/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a Penticton home to rent out by the night?", a: "You need to clear three tests. The City licenses short-term rentals and asks applicants to be the primary resident. The Province lists Penticton as a community where nightly rentals are limited to a principal residence, plus one suite or accessory unit. And many lenders do not count nightly income. Rules change, so check the City and Province pages before you write an offer." },
    { q: "Will a lender count my pension and RRIF income?", a: "Often, yes. Many lenders count pensions, CPP and OAS from award letters, and registered income from statements. Investment income is commonly averaged over two years. Some lenders also weigh savings alongside income. Policies differ, so Joshua matches your mix of income to a lender that handles it well." },
    { q: "Does a suite or carriage house help me qualify in Penticton?", a: "It can, if the unit is permitted and the rent is documented. Many lenders then count a share of the rent against your housing costs or add it to income. The method and share vary by lender. An unpermitted unit usually cannot be counted. Joshua runs the numbers both ways." },
    { q: "How is a Naramata orchard or vineyard property financed?", a: "Differently from a city lot. Many residential lenders limit how much land value they will count, give farm buildings little value and decline where the property is mainly a business. Land in the Agricultural Land Reserve adds rules. Joshua identifies the property type before the offer is written." },
    { q: "Do I need to travel to Surrey to work with Joshua?", a: "No. Everything is done by phone, video and secure document upload, and your appraiser and lawyer or notary are local to you. BC lenders and rules are provincial, so the broker's location does not change your options. If you prefer to meet in person, ask on the first call." }
  ]
};
