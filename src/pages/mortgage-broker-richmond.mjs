import { short } from "../lib/short.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { cityFacts } from "../lib/city-facts.mjs";

const slug = "/mortgage-broker-richmond/";

const body = `
${short({ answer: "Joshua serves Richmond buyers and homeowners online from his Surrey office. He works on a lot of newcomer files, move-ups to a detached home, and older houses with suites or renovation plans.", who: "Richmond first-time buyers, newcomers, families moving up and anyone renewing.", next: "Book a 15-minute call. New to Canada? Start with the <a href=\"/new-to-canada-mortgage/\">new to Canada mortgage page</a>." })}
<h2>Richmond's housing, from the Canada Line to the dikes</h2>
<p>Richmond is an island city on the Fraser delta. Its core is towers and townhouses around the Canada Line stations at Brighouse, Lansdowne and Aberdeen. Older detached neighbourhoods sit in Steveston, Broadmoor, Terra Nova and the east. Much of the south and east is farmland in the Agricultural Land Reserve.</p>
<p>The buyers here are a mix. Some are new to Canada and buying a first home near family and transit. Some are families moving up to a detached house. Others own an older house on a big lot. They're deciding whether to renovate, add a suite or sell.</p>
<p>Joshua Resvick serves Richmond from his office in Surrey, by phone, video and secure document upload. There is no Richmond branch, and you never need to visit an office. Every step happens online, from the first call to the signed commitment. Your lawyer or notary handles the signing where you live.</p>

${ratesStrip()}

<h2>Incomes in Richmond</h2>
<p>Richmond's median household income was $79,000 for 2020, and 17.5 percent of workers were self-employed. Retail was the biggest industry, then professional services and health care. (Statistics Canada, 2021 Census Profile, read October 2026). Many Richmond buyers pool money from family members or from the sale of another property to reach their down payment. Lenders ask where each part of the down payment came from, and Joshua helps you gather that proof early.</p>
${censusTable("richmond")}

<h2>Buyers who are new to Canada</h2>
<p>Many newcomers to Canada settle in Richmond first. A big share of first purchases here are newcomer files.</p>
<p>Lenders and mortgage insurers run special programs for these buyers. The rules cover your status and how long you've been in Canada. They cover how lenders treat credit history from another country. They also cover how to prove income from a new Canadian job or from abroad.</p>
<p>The down payment rules differ too. Some programs allow less than you might expect. Others ask for more.</p>
<p>The right lender for a newcomer file often isn't the one with the lowest advertised rate. The <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a> lays out the programs and the documents. Joshua will tell you plainly which lenders fit your situation.</p>

<h2>Moving up to a bigger home</h2>
<p>Lots of Richmond families move from a condo or townhouse into a house in Broadmoor, Terra Nova or Steveston. Most of the time, they're solving a timing problem. The sale and the purchase rarely close on the same day.</p>
<p>There are two common fixes. <strong>Porting</strong> moves your current rate and term to the new home. If you need a bigger mortgage, the extra part is often blended in at today's rate. <strong>Bridge financing</strong> covers your down payment in the gap between the two closing dates. It needs a firm sale with no subjects.</p>
<p>The <a href="/porting-your-mortgage/">porting guide</a> and the <a href="/bridge-financing/">bridge financing page</a> explain both. If porting won't work, find out your penalty for breaking the mortgage before you list.</p>

<h2>Older houses, suites and renovations</h2>
<p>Richmond's zoning now allows one secondary suite inside a single-family house. An existing suite must be inspected and brought up to the BC Building Code and city bylaws (City of Richmond, page updated May 2024).</p>
<p>For a buyer, a permitted suite with a lease and bank deposits is much easier for a lender to count. An unpermitted suite is a harder sell. Lenders either add part of the rent to your income or subtract it from your housing costs. The share varies by lender. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods.</p>
<p>Many Richmond houses are decades old and sit on large lots. Buyers often plan a renovation or a rebuild. There are two programs to know about.</p>
<ul>
<li><strong>Renovating right after you buy?</strong> A purchase plus improvements program lends against what the home will be worth once the work is done.</li>
<li><strong>Adding a suite later?</strong> The federal secondary suite refinance program lets you borrow up to 90 percent of the finished value to build a legal suite.</li>
</ul>
<p>The <a href="/purchase-plus-improvements/">purchase plus improvements page</a> and the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explain the conditions.</p>

<h2>Leasehold, floodplain and other Richmond specifics</h2>
<ul>
<li><strong>Leasehold strata.</strong> Some Richmond buildings are leasehold, not freehold. Fewer lenders finance leasehold. The years left on the lease matter, and the appraisal treats it differently. Confirm the type of ownership before you write an offer.</li>
<li><strong>Floodplain and dikes.</strong> Richmond is low-lying and protected by dikes. That doesn't stop lending. But insurers and appraisers take note. If a house has a basement or sits at ground level, check whether flood insurance is available and what it costs.</li>
<li><strong>Agricultural Land Reserve.</strong> Homes on farmland in the east and south are a different kind of file. Many regular lenders count the house and only a small amount of land. Farm status changes which products you can get. Provincial rules on extra homes on the land also apply.</li>
<li><strong>Speculation and vacancy tax.</strong> Richmond is inside the area covered by BC's speculation and vacancy tax. Every owner must file a yearly declaration (Province of BC, list updated December 2025). A home you live in isn't the target. It matters if you keep a condo after buying a house.</li>
</ul>

<h2>Renewals and switching lenders</h2>
<p>A renewal letter is one lender's opening offer. Since late 2024, a straight switch to another lender at maturity usually doesn't need a new stress test. The balance and amortization have to stay the same. Switch costs are often covered.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the timing and how to compare. The free renewal reminder contacts you six months and 120 days before your term ends.</p>

<h2>Self-employed and business income</h2>
<p>Richmond runs on the airport, the port and logistics. It has a big base of small businesses and importers. It also has professionals around the hospital and city centre.</p>
<p>Business income works fine, but lenders read it differently. The same two years of tax returns can support different amounts at different lenders. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers add-backs, dividends, stated-income programs and when a fee can apply. With a mainstream lender, the lender pays the broker, and you pay nothing for the service.</p>

<h2>Working with Joshua from Richmond</h2>
<p>A 15-minute call sets your goals and dates. Joshua reads your file the way an underwriter does. That was his job for five years before he became a broker. You get a written Lender Comparison Report of real options.</p>
<p>After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps your mortgage under review. It includes a renewal plan six months out.</p>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set. The <a href="/mortgage-calculators/">calculators</a> let you test a few things. You can check a payment with the CMHC premium, or affordability with a suite. You can total your closing costs, including property transfer tax, and run renewal scenarios. Results show up right away, with no email needed.</p>

${cityFacts("richmond")}
${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-vancouver/">Vancouver</a> and <a href="/mortgage-broker-surrey/">Surrey</a>, where his office is. He serves Delta and the rest of Metro Vancouver too. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area. A review from a Richmond client helps the next buyer find him.</p>`)}

<p>If you own a business in Richmond and want to buy its premises, Joshua also arranges <a href="/commercial-mortgages-bc/">commercial mortgages</a> as well.</p>

<p class="more-links"><strong>More for Richmond buyers.</strong> Pages that may fit your situation: <a href="/mortgages-for-lawyers-accountants-and-engineers/">lawyers, accountants and engineers</a>, <a href="/mortgages-for-tech-workers/">tech workers</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. For the basics, see the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, <a href="/down-payment-guide-bc/">down payment guide</a> and <a href="/closing-costs-bc/">closing costs guide</a>. You can also read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> or <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${cta({ title: "A first home near the Canada Line, or a move up in Steveston?", text: "Book a 15-minute call. You'll leave knowing what's realistic and what to do first." })}
<p>First purchase? The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> is the place to start. For anything else, see the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Richmond, BC",
  lede: "Newcomer first purchases near the Canada Line, move-ups in Steveston and Broadmoor, and older houses with suites or a renovation in the plan. Joshua Resvick serves Richmond from his Surrey office.",
  crumbs: [["Home", "/"], ["Richmond", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Richmond", ["Delta"])],
  faqs: [
    { q: "I arrived in Canada recently. Can I buy in Richmond?", a: "Often, yes. Lenders and mortgage insurers run newcomer programs with rules on status, time in Canada, foreign credit and how income is documented, and some allow a smaller down payment than you might expect. The right lender depends on your situation, and the new to Canada page explains the programs and what to gather first." },
    { q: "Is a leasehold condo in Richmond harder to finance?", a: "Usually, yes. Fewer lenders finance leasehold strata, the remaining lease term affects both the approval and the amortization a lender will allow, and the appraisal is handled differently. It can be done, but confirm the tenure and the lease term before you write an offer and plan the lender choice around it." },
    { q: "Can I use rent from a suite in an older Richmond house to qualify?", a: "Usually some of it, if the suite is permitted and the rent is documented. Richmond allows one secondary suite in a single-family detached home, subject to inspection and code upgrades. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender." },
    { q: "Can I finance a renovation when I buy an older Richmond house?", a: "Often, through a purchase plus improvements program, which lends against the value of the home after the work and advances the renovation funds once it is done. The conditions, including quotes, timelines and the insurer's limits, are on the purchase plus improvements page. Adding a suite later can use the federal secondary suite refinance program." },
    { q: "Do I need to come to an office?", a: "No. Joshua's office is in Surrey, and Richmond clients work with him by phone, video and secure document upload, with the signing handled by your lawyer or notary in Richmond. There is no Richmond branch, and the service is the same as for a client who lives next to the office." }
  ]
};
