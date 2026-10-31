import { cta, callout, ratesStrip } from "../lib/site.mjs";

const slug = "/mortgage-rates-vancouver/";

const body = `
${ratesStrip()}

<h2>Why this page prints no rate in its text</h2>
<p>A Vancouver mortgage rate quoted in an article is wrong within days. So this page prints no rate in its text; a 15-minute call gets you today's number for your own file, confirmed with lenders rather than copied from an advertisement. What this page adds is the part the rate sites leave out: why the rate you actually get in Vancouver depends on the property you are buying, how much you are putting down and what you plan to do with the home, and what to compare once the rate is settled. The <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains the general mechanics; this page is the Vancouver version.</p>

<h2>The property type sets the pricing category</h2>
<p>Lenders price mortgages in three categories: insured, where the down payment is under 20 percent and default insurance is required; insurable, where the down payment is 20 percent or more and the file meets the criteria for the lender to insure it itself; and uninsured, where it does not. In Vancouver, the property type pushes a surprising number of mortgages into the uninsured category, and uninsured mortgages are usually priced higher.</p>
<ul>
<li><strong>Price.</strong> Default insurance is not available above the insured price cap, which puts many Vancouver detached houses and a share of townhouses into uninsured territory regardless of the down payment.</li>
<li><strong>Amortization.</strong> A 30-year amortization is available on some insured purchases and on many uninsured ones, but it changes the category and often the price.</li>
<li><strong>Rental use.</strong> A condo bought as a rental is priced differently from the same condo bought to live in.</li>
<li><strong>Leasehold and co-ops.</strong> Fewer lenders finance leasehold and co-operative units, and the rate competition is narrower as a result.</li>
</ul>
<p>The practical consequence is that a buyer with 10 percent down on a condo under the insured cap often sees a lower rate than a buyer with 25 percent down on a house above it. That looks backwards until you remember that the insured mortgage carries insurance the lender does not pay for, and the uninsured one carries the lender's own risk. The <a href="/mortgage-broker-vancouver/">Vancouver mortgage broker page</a> covers the strata, leasehold and multiplex questions in more detail.</p>

<h2>Fixed, variable and the Vancouver move cycle</h2>
<p>Vancouver buyers, especially in condos, move more often than the five-year term assumes: a first condo becomes a bigger condo, then a townhouse, then a house with a suite. The rate type should be chosen with that in mind. A fixed rate gives payment certainty but can carry a large interest rate differential penalty if you leave mid-term; a variable rate carries a smaller, more predictable penalty but a payment that can change. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> walks through the trade-offs, and the <a href="/5-year-fixed-mortgage-rate/">5-year fixed page</a> explains when the classic term fits and when a shorter one beats it.</p>
<p>Portability matters here too. A portable mortgage can move with you to the next home, often with a blended rate on the extra amount, which can save the penalty entirely. Not every lender's portability is equally generous, and the rules on timing between the sale and the purchase differ, so this belongs in the comparison, not as an afterthought.</p>

<h2>What to compare beyond the rate</h2>
<p>For a Vancouver mortgage, the second and third decimal places of the rate usually matter less than these four items:</p>
<ol>
<li><strong>The penalty method.</strong> Lenders calculate the interest rate differential in different ways, and on a fixed mortgage the difference between methods can be thousands of dollars if you sell mid-term.</li>
<li><strong>Prepayment privileges.</strong> Lump sums and payment increases let you pay the mortgage down faster when a bonus or an inheritance arrives, and the allowances differ by lender.</li>
<li><strong>Portability and assumability.</strong> Whether the mortgage can move with you, and on what terms.</li>
<li><strong>Behaviour at renewal.</strong> Some lenders compete for your renewal; some count on you not comparing. The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains what switchers actually get.</li>
</ol>
<p>The <a href="/mortgage-calculators/#compare">four-scenario comparison tool</a> lets you compare up to four options, with the payment, the interest over the term, the balance at the end and the penalty exposure side by side. It is the quickest way to see that a slightly higher rate with a better penalty method can be the cheaper mortgage.</p>

<h2>Rates for first-time buyers in Vancouver</h2>
<p>A first purchase in Vancouver is usually insured, which is often the best-priced category, and the first-time buyer property transfer tax exemption and the FHSA and Home Buyers' Plan reduce the cash needed. The rate is only one piece of that plan. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets the order: pre-approval and rate hold first, programs stacked, then the search. A rate hold, which lenders commonly offer for 90 to 120 days, protects you while you look and does not oblige you to take that lender.</p>

<h2>Renewal rates in Vancouver</h2>
<p>Many Vancouver owners renewing a first term now hold an uninsured mortgage, because the price was above the insured cap or the amortization was extended. Since late 2024, a straight switch to a different lender at maturity, with no increase to the balance or amortization, usually does not require a new stress test. That opened the market for uninsured renewals in a way it had not been for several years, and it is why the renewal letter from your current lender should be compared rather than signed. The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains how renewal pricing is set and what a switch typically involves.</p>

${callout("Why no rate is printed here", `<p>A rate on a page is out of date within days, and a rate that ignores your down payment, credit, property type, amortization and purpose is not your rate. Joshua confirms pricing with lenders on the day you ask. A call gets you the number that applies to you.</p>`)}

${cta({ title: "Want today's Vancouver rate for your actual file?", text: "Book a 15-minute call. Joshua will tell you which pricing category your purchase or renewal falls into and what the real options are." })}
<p>Questions that do not fit a call are welcome through the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage rates in Vancouver: current rates and the local context",
  lede: "The rate you get in Vancouver depends on the property type, the price and your down payment, and the lowest number is rarely the cheapest mortgage for a buyer who will move again.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Vancouver rates", slug]],
  nav: "/mortgage-rates-bc/",
  body,
  faqs: [
    { q: "Why is a condo with 10 percent down priced lower than a house with 25 percent down in Vancouver?", a: "Because the condo mortgage is insured and the house mortgage is usually uninsured. Default insurance, which the buyer pays for, removes most of the lender's risk, so insured mortgages are often the best-priced category. A house above the insured price cap cannot be insured, so the lender carries its own risk and prices accordingly." },
    { q: "Should a Vancouver condo buyer take a five-year fixed rate?", a: "Only if you are reasonably sure you will keep the mortgage for five years. Condo buyers often move within the term, and a fixed mortgage can carry a large interest rate differential penalty. A shorter term, a variable rate or a lender with a fairer penalty method may cost less overall. The comparison tool shows the trade-off." },
    { q: "Do rates differ between Vancouver and the rest of BC?", a: "The lender's rate sheet is the same across the province. What differs is the mix of properties: Vancouver pushes more mortgages above the insured price cap and into leasehold or rental categories, so Vancouver buyers see more uninsured pricing than buyers elsewhere. The local context is in the property, not the postal code." },
    { q: "How long does a rate hold last?", a: "Lenders commonly hold a rate for 90 to 120 days on a pre-approval, and some offer longer holds for new construction. If rates fall during the hold, you usually get the lower rate at funding; if they rise, you keep the held rate. A hold does not oblige you to take that lender, and it is a sensible first step before viewing homes." },
    { q: "Why does this page not list a rate?", a: "Because a rate printed in an article is out of date almost immediately, and a rate that ignores your property type and down payment is not your rate. A short call gets you the number that applies to your file today, confirmed with lenders on the day you ask." }
  ]
};
