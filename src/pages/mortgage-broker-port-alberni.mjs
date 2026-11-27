import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-port-alberni/#service", url: SITE.origin + "/mortgage-broker-port-alberni/", areaServed: [{ "@type": "City", name: "Port Alberni", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Alberni-Clayoquot Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Port Alberni and the Alberni Valley by phone and video from his Surrey office. Buyers here are often first-time buyers, retirees, and people who work in forestry, marine trades or public services. Homes cost less than most of the Island, so the file often comes down to income and the house itself.",
  who: "Buyers and owners in Port Alberni, Beaver Creek, Cherry Creek, Sproat Lake and the rest of the Alberni Valley.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what kind of home you are after."
})}
<p>Port Alberni sits at the head of the Alberni Inlet, in the middle of Vancouver Island. It is the gateway to Tofino and Ucluelet, and the valley's main service centre. For decades it was a mill town. Today the jobs are more mixed, and homes here are among the least expensive on the Island.</p>
<p>I'm Joshua Resvick, a licensed broker with Xeva Mortgage. I worked as a lender's underwriter for five years before I became a broker, so I know which details make a lender pause. I'm based in Surrey and look after Alberni Valley clients remotely. There's no local office to visit, and no need for one. <a href="/contact/">Book a 15-minute call</a> and we can start.</p>

${ratesStrip()}

<h2>What homes cost here</h2>
<p>BC Assessment's typical single-family value in Port Alberni was $485,000 for 2026, down 3%. Nanaimo was $769,000, and Courtenay was $752,000. (BC Assessment, Vancouver Island 2026 Property Assessments, January 2, 2026, read November 2026). These are assessed values, not sale prices, and they change each year.</p>
<p>A lower price changes the math. On a $485,000 home, the minimum down payment is $24,250, or 5%. That's well within reach for many renters. You'll still need cash for closing costs, an inspection and the CMHC premium, which is added to the loan. The <a href="/down-payment-guide-bc/">down payment guide</a> shows the minimums, and the <a href="/cmhc-insurance-bc/">CMHC insurance page</a> shows the premium on your price.</p>
<p>First-time buyers can also use the FHSA, the Home Buyers' Plan and the BC transfer tax exemption. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> puts them in order.</p>

${costToBuy("Port Alberni", [["Typical house", 485000]], "Vancouver Island")}

<h2>Who buys in the Alberni Valley</h2>
<p>The population is older than average. Statistics Canada put the Port Alberni area at 27,771 people in July 2022, with 26.3% aged 65 or older. Nationally it was 18.8%. The median after-tax income in 2020 was $44,640. (Statistics Canada, A statistical snapshot of Port Alberni, March 2023, read November 2026).</p>
<p>That mix shows up in mortgage files. Retirees often buy with equity from a larger home and live on pensions. Younger buyers may have a modest income and a small down payment. Both can work. Lenders look at your debts, your down payment and your credit, not just the size of your income.</p>
<ul>
<li><strong>Retirees.</strong> Lenders commonly count pensions, CPP, OAS and registered income from statements. The <a href="/mortgages-for-retirees-and-seniors/">retirees page</a> explains how.</li>
<li><strong>Mill, port and trades workers.</strong> Union wages, overtime and shift premiums are read differently by each lender. Many average overtime over two years. The <a href="/mortgages-for-camp-mine-and-shift-workers/">shift workers page</a> covers it.</li>
<li><strong>Self-employed.</strong> Fishing guides, contractors and small business owners normally show two years of tax returns. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> shows the routes.</li>
</ul>

<h2>A changing local economy</h2>
<p>Forestry built Port Alberni, and the industry has been through hard years. New work is coming from the waterfront. Amix Marine Services bought 45 acres of former mill land to build a marine terminal. The old Somass mill site is being planned as a 43-acre mix of homes, shops, light industry and park. (Western Investor, Port Alberni sees fresh investment, about 2025, read November 2026).</p>
<p>The City estimated about 19,685 residents inside its limits, up 1.4% in a year. (Western Investor, same article). Growth is slow but steady, and new housing has been limited. For a buyer, that means a modest supply of homes and a lot of older ones.</p>

<h2>Older homes and inspections</h2>
<p>The City's housing report heard from residents about too many old and poorly maintained homes. (City of Port Alberni, Housing Needs Report at a glance, read November 2026). Older homes can be good value, but they can also hide costs. Lenders and insurers often ask about the roof, wiring, heating and oil tanks.</p>
<p>Book a full inspection. Ask an insurer for a quote while your offer is still conditional. A lender will not fund without proof of insurance. If the house needs work, a <a href="/purchase-plus-improvements/">purchase plus improvements mortgage</a> can add the cost of some upgrades to the loan.</p>

<h2>Low-lying homes and the 1964 tsunami</h2>
<p>The long, narrow inlet makes Port Alberni sensitive to tsunamis. In March 1964, waves from the Alaska earthquake washed away 55 homes and damaged 375. No one died. (Physical Geography of British Columbia, 1964 Port Alberni Tsunami case study, read November 2026).</p>
<p>The City has tsunami evacuation zones today. If a home sits near the water or in a low-lying area, ask the insurer what it covers and what it costs. Lenders want the home insured before they fund. A higher premium also counts in your monthly costs.</p>

<h2>Suites and the 2024 zoning update</h2>
<p>In 2024 the City rewrote its zoning to meet the Province's small-scale housing rules. Zoning Bylaw No. 5105 allows 3 to 4 units on most lots in the new residential zones. Lots without City water or sewer, or larger than about one acre, are limited to a house and a suite. (City of Port Alberni, Council agenda, June 10, 2024, read November 2026).</p>
<p>A legal suite can help you qualify, since many lenders count part of the rent. An unpermitted one usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two common methods.</p>

<h2>Sproat Lake, Beaver Creek and rural lots</h2>
<p>Outside the City, many homes sit on larger lots in the regional district. These often have a well or septic system, and some are lakefront cabins. Lenders commonly ask for water and septic tests. A seasonal cabin may not qualify as a regular home, and the <a href="/second-home-and-vacation-property-mortgages-bc/">second home page</a> explains when it might. Budget for the extra inspections, and see the <a href="/closing-costs-bc/">closing costs guide</a>.</p>

<h2>First Nations in the valley</h2>
<p>The City says the traditional territories of the Hupacasath and Tseshaht First Nations include the City. It also serves as a service centre for many Nuu-chah-nulth offices. (City of Port Alberni, First Nations, read November 2026). If you are looking at a home on reserve land or leased land, tell me at the start. There are lenders with programs for these homes, and I work with them. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</p>

<h2>How a Port Alberni file comes together</h2>
<p>I start with your income, because it decides which lenders even look at the file. A pension is read one way, a union wage with overtime another, and a fishing or contracting business another again. Then I look at the house. Its age, its distance from the water, a suite, a well or reserve land can each change the lender.</p>
<p>When the choices are clear, I put them side by side in a <a href="/lender-comparison-report/">Lender Comparison Report</a>, with term, penalty method and portability for each. After closing, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> includes a check-in each year and a call about six months before your term ends. The <a href="/mortgage-renewal-bc/">renewal guide</a> covers what happens then.</p>

${callout("Do you pay Joshua?", "<p>Not on an ordinary file. When an A lender takes the mortgage, the lender pays the broker. A few Alberni Valley files, such as a home needing major work or recent credit problems, go to a B or private lender, and those can carry a fee. You see any fee in writing on BCFSA's Form 1A first.</p>")}


<p>Before we talk, it can help to read the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/mortgage-calculators/">mortgage calculators</a>, <a href="/mortgage-rates-bc/">how BC mortgage rates are set</a> and the <a href="/mortgage-broker-vancouver-island/">Vancouver Island overview</a>.</p>
${cityFacts("port-alberni")}
${nearbyCallout("port-alberni", callout)}

${cta({ title: "Talk to a broker who serves the Alberni Valley", text: "Book a 15-minute call. Bring your income, your savings and the listing you like. Joshua will tell you whether the numbers work, which lenders fit and what the house might need." })}
`;

export default {
  slug: "/mortgage-broker-port-alberni/",
  h1: "Mortgage broker in Port Alberni, BC: buying a home in the Alberni Valley",
  lede: "Buying in Port Alberni or the Alberni Valley? Joshua Resvick, Xeva Mortgage, serves the valley by phone and video from his Surrey office. Prices, older homes, suites and low-lying lots, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Vancouver Island", "/mortgage-broker-vancouver-island/"], ["Serving Port Alberni", "/mortgage-broker-port-alberni/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Port Alberni?", a: "No. Joshua works from his Surrey office and serves Port Alberni and the Alberni Valley by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally, so you never need to travel." },
    { q: "How much down payment do I need for a home in Port Alberni?", a: "At least 5% on a price up to $500,000. On a $485,000 home that's $24,250. With under 20% down, the mortgage is insured and the CMHC premium is added to the loan. You also need cash for closing costs." },
    { q: "Can a retiree get a mortgage in Port Alberni?", a: "Often, yes. Lenders commonly count pensions, CPP, OAS and registered income from statements. A larger down payment from the sale of a past home helps. Joshua checks which lenders fit your income before you make an offer." },
    { q: "Will insurance be harder on a home near the water?", a: "It can be. Port Alberni has tsunami evacuation zones, and some insurers price low-lying homes higher. Get a quote before you remove conditions, because a lender won't fund without proof of insurance." },
    { q: "Can I add a suite to a Port Alberni home?", a: "Often. The City's 2024 zoning allows 3 to 4 units on most residential lots, with limits on lots without City water or sewer. Get permits, since lenders usually count rent only from a legal suite." }
  ]
};
