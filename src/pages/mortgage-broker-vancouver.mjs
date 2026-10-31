import { cta, callout } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-vancouver/";

const body = `
<h2>Mortgages in Vancouver are mostly condo and townhouse mortgages</h2>
<p>Vancouver's housing stock shapes the mortgage conversation before anyone talks about rates. For most buyers, the first home in the city is a strata unit: a condo tower downtown or along the Cambie and Broadway corridors, a low-rise in Kitsilano or Mount Pleasant, or a townhouse on the east side. Detached houses exist in every neighbourhood, and since 2023 the city has allowed most former single-family lots to carry a secondary suite, a laneway house, a duplex or a multiplex, which is why so many Vancouver houses come with a rental unit attached. Each of those property types is read differently by a lender, and that is the first thing a Vancouver mortgage broker has to get right.</p>
<p>${servesLine("Vancouver")}</p>

<h2>How lenders read a Vancouver strata purchase</h2>
<p>A condo mortgage is approved against two files: yours and the building's. Your file is income, credit, down payment and debts. The building's file is the strata documents: the depreciation report, the Form B, the bylaws, the contingency reserve fund, the minutes, and any special levies that are proposed or already approved. Lenders care about these because a building with a weak reserve fund, a pending levy or an ongoing legal dispute changes the risk of the mortgage, and a few lenders will not lend in certain buildings at all.</p>
<p>Three Vancouver-specific points come up often:</p>
<ul>
<li><strong>Strata fees count against you.</strong> Lenders add a portion of the monthly strata fee, commonly half, to your housing costs when they calculate your debt service ratios. A high-fee building reduces what you qualify for, which is why two units at the same price can produce different approvals.</li>
<li><strong>Leasehold and co-op units are a smaller market.</strong> Parts of the city, including some land along the waterfront and around the university endowment lands, are leasehold rather than freehold. Fewer lenders finance leasehold, the remaining lease term matters, and co-operative housing is financed differently again. Know what you are buying before you write an offer.</li>
<li><strong>Presale assignments and completions.</strong> Vancouver has a steady presale market. A presale purchase is financed at completion, not at signing, and the approval that matters is the one you get close to the completion date, which can be years after the deposit. The <a href="/presale-mortgages-bc/">presale mortgages guide</a> explains the timing and the deposit rules.</li>
</ul>

<h2>Houses with suites, laneways and multiplexes</h2>
<p>A Vancouver house often comes with a basement suite or a laneway house, and buyers want to know how much of that rent a lender will count. The honest answer is that it depends on the lender. Some add a share of the rent to your income, some subtract it from your housing cost, and the share varies. CMHC's rules for an owner-occupied two-unit home set the ceiling. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through the two methods with an example.</p>
<p>Multiplexes are newer. Since the City of Vancouver's 2023 zoning change, a former single-family lot in most neighbourhoods can be redeveloped into several units. Financing a multiplex purchase or build is not the same as financing a house: a lender wants to know whether the units are stratified, how many there are, whether you will live in one, and whether the rent is documented. Four units or fewer with the owner living in one is residential lending; more than that, or a purely investment holding, moves toward commercial or specialty products. This is worth a conversation before a purchase contract, not after.</p>

<h2>Two Vancouver taxes that affect the plan</h2>
<p>Vancouver homeowners file an Empty Homes Tax declaration every year. For the 2025 reference year the rate is 3 percent of assessed taxable value for a property that is deemed or declared empty, with a declaration deadline of February 3, 2026 (City of Vancouver). A home you live in is not the target, but if you are buying a second unit, keeping a condo while you travel, or holding a property between a purchase and a renovation, the declaration matters. Vancouver is also inside the area covered by the provincial speculation and vacancy tax, which has its own annual declaration (Province of BC, taxable areas list updated December 2025).</p>
<p>Short-term rental plans need the same care. The provincial principal residence requirement limits short-term rentals to a host's own home plus one secondary suite or accessory unit on the same property in communities over 10,000 people, and Vancouver's own bylaws require a short-term rental business licence and treat any rental under 90 days as short-term (City of Vancouver, rules updated 2024 and 2025). If a purchase plan depends on nightly rental income, a lender will usually not count it, and the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a> explains why.</p>

<h2>Who Joshua helps in Vancouver</h2>
<p>The Vancouver files that cross his desk fall into a few groups, and each has its own page on this site:</p>
<ul>
<li><strong>First-time buyers</strong> putting a smaller down payment on a first condo, stacking the FHSA and Home Buyers' Plan, and checking whether the purchase price sits under the first-time buyer property transfer tax threshold. Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>.</li>
<li><strong>Renewing owners</strong> whose first five-year term is ending, who want to compare the renewal letter against a switch. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the timing and the stress-test exemption on straight switches.</li>
<li><strong>Self-employed and tech-income borrowers</strong>, including people paid partly in stock, contractors on a series of agreements and incorporated professionals. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how different lenders read that income.</li>
<li><strong>Move-up buyers</strong> selling a condo to buy a house, who need the sale and the purchase to line up, often with bridge financing or a ported mortgage in between.</li>
</ul>

<h2>Rates, and what to compare beyond them</h2>
<p>Vancouver buyers see more rate advertising than almost anyone in Canada, and the lowest number is rarely the whole story. The rate you qualify for depends on your down payment, the property type and whether the mortgage is insured, insurable or uninsured, which is why a condo with 10 percent down and a detached house with 35 percent down are priced differently at the same lender on the same day. The <a href="/mortgage-rates-vancouver/">Vancouver mortgage rates page</a> adds that local context, and the <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set in the first place. The penalty to leave, the prepayment privileges, and portability matter as much as the rate on a home you may sell within five years, which in Vancouver's condo market is common.</p>

<h2>What working together looks like</h2>
<ol>
<li><strong>A 15-minute call.</strong> Your goals, your numbers and your timeline, with an honest first read on what is realistic in the part of the city you are looking at.</li>
<li><strong>A plan with dates.</strong> For a purchase, Joshua works backwards from your subject-removal and completion dates. For a renewal, from your maturity date.</li>
<li><strong>A written Lender Comparison Report.</strong> Real lender options side by side: rate, term, penalty method, prepayment room and portability, so the choice is yours and informed.</li>
<li><strong>Aftercare.</strong> After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps the mortgage under review, with outreach about six months before your renewal.</li>
</ol>
<p>On a mortgage placed with a mainstream lender, the lender pays the broker and you pay nothing for the service. Fees arise only on some B-lender and private files, and BC rules require written disclosure before you commit. The <a href="/how-mortgage-brokers-get-paid/">page on how brokers are paid</a> explains it fully.</p>

<h2>Run the numbers before you view</h2>
<p>The <a href="/mortgage-calculators/">calculators</a> are built for the questions Vancouver buyers ask first: what a payment looks like with the CMHC premium included, how much a given income can carry once strata fees are added, and what cash you need on completion once property transfer tax is included. Every result shows immediately, with no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-burnaby/">Burnaby</a> and <a href="/mortgage-broker-richmond/">Richmond</a>, and buyers across Metro Vancouver and the rest of BC. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; reviews from Vancouver clients help the next buyer find the same help.</p>`)}

${cta({ title: "Buying or renewing in Vancouver?", text: "Book a 15-minute call. You will leave knowing what is realistic for the property type you want and what to do first." })}
<p>Questions that do not fit a form are welcome on the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Vancouver, BC",
  lede: "Condos, townhouses, houses with suites and the city's newer multiplexes, each read differently by lenders. Joshua Resvick serves Vancouver buyers and renewers online from his Surrey office.",
  crumbs: [["Home", "/"], ["Vancouver", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Vancouver")],
  faqs: [
    { q: "Do I need to meet a Vancouver mortgage broker in person?", a: "No. Joshua works with Vancouver clients by phone, video and secure document upload, and the signing happens with your own lawyer or notary in the city. His office is in Surrey, and he serves every part of BC the same way, so there is no trade-off in service for living across the bridge." },
    { q: "Will a lender count my basement suite or laneway rent in Vancouver?", a: "Usually some of it, and the share depends on the lender. Some add a portion of the rent to your income, others subtract it from your housing costs, and the suite needs documentation such as a lease or bank deposits. Short-term rental income is generally not counted. The suite income page explains both methods with worked figures." },
    { q: "Why does my Vancouver condo approval differ from my friend's at the same price?", a: "Strata fees are the usual reason. Lenders add a share of the monthly fee to your housing costs, so a building with high fees reduces what you qualify for. The building's own documents also matter: a weak contingency reserve or a pending special levy can change which lenders will approve the unit at all." },
    { q: "Does the Empty Homes Tax affect my mortgage?", a: "Not the approval itself, but it affects the plan. Every Vancouver homeowner declares annually, and a property deemed empty is taxed at 3 percent of assessed value for the 2025 reference year. If you are keeping a condo after buying a house, or holding a unit during a renovation, build the declaration and any tax into the budget." },
    { q: "How early should I talk to a broker before buying in Vancouver?", a: "Before you view homes. Knowing your real purchasing power and your cash-to-close changes which buildings and which neighbourhoods make sense, and a proper pre-approval with a rate hold gives you a firm basis for an offer. In a market where subject-free offers are common, that preparation is what makes a careful offer possible." }
  ]
};
