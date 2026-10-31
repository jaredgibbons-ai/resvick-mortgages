import { short } from "../lib/short.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";

const slug = "/mortgage-rates-vancouver/";

const body = `
${short({ answer: "In Vancouver, your rate depends heavily on the type of home. Price, amortization, rental use and leasehold can push a mortgage into a higher-priced category, even with a big down payment.", who: "Vancouver buyers comparing rates, and owners renewing a first term.", next: "Compare up to four offers with the <a href=\"/mortgage-calculators/#compare\">four-scenario comparison tool</a>, or book a 15-minute call for your own number." })}
${ratesStrip()}

<h2>Why this page prints no rate in its text</h2>
<p>A Vancouver mortgage rate quoted in an article is wrong within days. So this page prints no rate in its text. A 15-minute call gets you today's number for your own file, confirmed with lenders instead of copied from an ad.</p>
<p>What this page adds is the part rate sites leave out. In Vancouver, your rate depends on the home you're buying, how much you put down and what you plan to do with it. This page also covers what to compare once the rate is settled.</p>
<p>The <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains how rates work in general. This page is the Vancouver version.</p>

<h2>The property type sets the pricing category</h2>
<p>Lenders price mortgages in three categories.</p>
<ul>
<li><strong>Insured.</strong> Less than 20 percent down, so default insurance is required.</li>
<li><strong>Insurable.</strong> 20 percent or more down, and the file meets the rules for the lender to insure it itself.</li>
<li><strong>Uninsured.</strong> The file doesn't meet those rules.</li>
</ul>
<p>In Vancouver, the type of home pushes a surprising number of mortgages into the uninsured category. Uninsured mortgages usually cost more. Here's what does it.</p>
<ul>
<li><strong>Price.</strong> Default insurance isn't available above the insured price cap. That puts many Vancouver houses, and some townhouses, into uninsured territory no matter how much you put down.</li>
<li><strong>Amortization.</strong> A 30-year amortization is available on some insured purchases and many uninsured ones. But it changes the category, and often the price.</li>
<li><strong>Rental use.</strong> A condo bought as a rental is priced differently from the same condo bought to live in.</li>
<li><strong>Leasehold and co-ops.</strong> Fewer lenders finance leasehold and co-op units. So there's less competition on rate.</li>
</ul>
<p>Here's the result. A buyer with 10 percent down on a condo under the insured cap often gets a lower rate than a buyer with 25 percent down on a house above it.</p>
<p>That looks backwards. But the insured mortgage has insurance the lender doesn't pay for. The uninsured one carries the lender's own risk.</p>
<p>The <a href="/mortgage-broker-vancouver/">Vancouver mortgage broker page</a> covers the strata, leasehold and multiplex questions in more detail.</p>

<h2>Fixed, variable and the Vancouver move cycle</h2>
<p>Vancouver buyers, especially condo owners, move more often than a five-year term assumes. A first condo becomes a bigger condo. Then a townhouse, then a house with a suite. Choose your rate type with that in mind.</p>
<p>A fixed rate gives you a steady payment. But it can carry a big interest rate differential penalty if you leave mid-term. A variable rate has a smaller, more predictable penalty, but the payment can change.</p>
<p>The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> walks through the trade-offs. The <a href="/5-year-fixed-mortgage-rate/">5-year fixed page</a> explains when the classic term fits, and when a shorter one beats it.</p>
<p>Portability matters here too. A portable mortgage can move with you to your next home. The extra amount often gets a blended rate. That can avoid the penalty entirely.</p>
<p>Not every lender's portability is equally generous. The rules on timing between the sale and the purchase differ too. So put portability in the comparison from the start.</p>

<h2>What to compare beyond the rate</h2>
<p>For a Vancouver mortgage, tiny rate differences usually matter less than these four items.</p>
<ol>
<li><strong>The penalty method.</strong> Lenders work out the interest rate differential in different ways. On a fixed mortgage, the gap between methods can be thousands of dollars if you sell mid-term.</li>
<li><strong>Prepayment privileges.</strong> Lump sums and payment increases let you pay down faster when a bonus or an inheritance arrives. The limits differ by lender.</li>
<li><strong>Portability and assumability.</strong> Can the mortgage move with you, and on what terms?</li>
<li><strong>Behaviour at renewal.</strong> Some lenders compete for your renewal. Some count on you not comparing. The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains what switchers actually get.</li>
</ol>
<p>The <a href="/mortgage-calculators/#compare">four-scenario comparison tool</a> lets you compare up to four options. It shows the payment, interest over the term, balance at the end and penalty exposure side by side. It's the quickest way to see that a slightly higher rate with a better penalty method can be the cheaper mortgage.</p>

<h2>Rates for first-time buyers in Vancouver</h2>
<p>A first purchase in Vancouver is usually insured, which is often the best-priced category. The first-time buyer property transfer tax exemption helps cut the cash you need. So do the FHSA and the Home Buyers' Plan.</p>
<p>The rate is only one piece of that plan. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets the order. Get your pre-approval and rate hold first, stack the programs, then start the search.</p>
<p>Lenders commonly offer rate holds for 90 to 120 days. A hold protects you while you look. It doesn't lock you into that lender.</p>

<h2>Renewal rates in Vancouver</h2>
<p>Many Vancouver owners renewing a first term now hold an uninsured mortgage. The price was above the insured cap, or the amortization was extended.</p>
<p>Since late 2024, a straight switch to a new lender at maturity usually doesn't need a new stress test. The balance and amortization can't go up. That opened up the market for uninsured renewals in a way it hadn't been for years. So compare your current lender's renewal letter before you sign it.</p>
<p>The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains how renewal pricing is set and what a switch usually involves.</p>

${callout("Why no rate is printed here", `<p>A rate on a page goes out of date within days. A rate that ignores your down payment, credit, home type, amortization and purpose isn't your rate. Joshua confirms pricing with lenders on the day you ask. A call gets you the number that applies to you.</p>`)}

${cta({ title: "Want today's Vancouver rate for your actual file?", text: "Book a 15-minute call. Joshua will tell you which pricing category your purchase or renewal falls into, and what your real options are." })}
<p>Questions that don't fit a call are welcome through the <a href="/contact/">contact page</a>.</p>
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
