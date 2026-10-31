import { short } from "../lib/short.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";

const slug = "/mortgage-rates-surrey/";

const body = `
${short({ answer: "Surrey rates depend on your file, not your postal code. A townhouse with 10 percent down, a suite house with 20 percent down and a City Centre presale are each priced differently at the same lender on the same day.", who: "Surrey buyers comparing rates, and Surrey homeowners whose renewal letter just arrived.", next: "Put your offers side by side with the <a href=\"/mortgage-calculators/#compare\">four-scenario comparison tool</a>, or book a 15-minute call." })}
${ratesStrip()}

<h2>Three Surrey purchases, three different prices at the same lender</h2>
<p>Rate shopping in Surrey usually starts with one of three files. The same lender prices each one differently on the same day. Knowing why is more useful than any number on a page. The number changes, but the reasons don't.</p>
<p>The <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> covers how a rate gets set in general. This page is the Surrey version. The <a href="/mortgage-broker-surrey/">Surrey mortgage broker page</a> covers the neighbourhoods and home types in detail.</p>
<h3>The townhouse with 10 percent down</h3>
<p>This is the classic first purchase in Cloverdale, Fleetwood or Panorama. With less than 20 percent down, the mortgage is insured. The buyer pays the insurance premium, and the lender carries little risk.</p>
<p>Insured mortgages are often the best-priced category. That's why a first-time buyer can see a lower rate than a wealthier buyer with more down on a pricier home.</p>
<p>The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets out the order of steps. It starts with the pre-approval and rate hold. Then it covers stacking the FHSA, the Home Buyers' Plan and the property transfer tax exemption.</p>
<h3>The suite house with 20 percent down</h3>
<p>A house in Newton, Guildford or Fleetwood with a basement suite is usually bought with 20 percent or more down. If the price is under the insured cap and the file meets the rules, the lender can insure it itself. The mortgage is then priced as insurable. Above the cap, or with a 30-year amortization, it's uninsured. That's usually priced higher.</p>
<p>The suite adds a second question. How much of the rent will the lender count? That doesn't change the rate. But it changes whether you're approved at all. The lender whose rental-income method suits your file isn't always the one with the lowest rate.</p>
<h3>The City Centre presale</h3>
<p>A presale near King George or Surrey Central is financed at completion. That may be years after the deposit. The rate that matters is the one available then, not now. So a presale buyer shouldn't anchor on today's rate. Some lenders offer longer rate holds for new construction. Ask about them as the completion date gets closer.</p>

<h2>Fixed or variable for a Surrey buyer</h2>
<p>Surrey is growing along the Fraser Highway corridor. The Surrey Langley SkyTrain extension is being built and is expected to open in late 2029 (Province of BC, May 2026). So some buyers in Fleetwood, Green Timbers and Clayton may sell or move up within a five-year term.</p>
<p>That's the main reason to think hard before taking the lowest five-year fixed rate. Breaking a fixed mortgage mid-term can carry a big interest rate differential penalty. A variable mortgage has a smaller, more predictable penalty, but your payment can change.</p>
<p>The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> works through the trade-offs. The <a href="/5-year-fixed-mortgage-rate/">5-year fixed page</a> explains when the classic term fits, and when a shorter term is better.</p>

<h2>Renewal rates and the switch question</h2>
<p>Many Surrey mortgages started as five-year fixed terms. The renewal letter is when Surrey homeowners most often lose money by default. That letter is one lender's opening offer.</p>
<p>Renewal pricing for people who switch is often better than the letter. Lenders compete harder for new business than for customers they already have.</p>
<p>Since late 2024, a straight switch to another lender at maturity usually doesn't need a new stress test. The balance and amortization have to stay the same. The new lender often covers the costs of the switch.</p>
<p>The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains how switch pricing works and what a switch involves. Credit unions hold many Surrey mortgages. They're provincially regulated and may apply their own rules.</p>

<h2>Compare the whole mortgage, not the rate</h2>
<p>Once the rate is settled, four things decide what a Surrey mortgage really costs.</p>
<ol>
<li><strong>The penalty method.</strong> Lenders work out the interest rate differential differently. On a fixed mortgage, the gap between methods can be thousands of dollars if you sell or refinance mid-term.</li>
<li><strong>Prepayment room.</strong> Lump-sum and payment-increase limits differ by lender. They matter if you plan to put the suite rent straight onto the principal.</li>
<li><strong>Portability.</strong> Can the mortgage move to your next home, and on what terms? That matters to a family planning a move up to South Surrey or Cloverdale.</li>
<li><strong>How rent is counted.</strong> On a suite house, the lender's method and share decide the approval.</li>
</ol>
<p>The <a href="/mortgage-calculators/#compare">four-scenario comparison tool</a> puts up to four options side by side. It shows the payment, the interest over the term, the balance left at the end and the penalty exposure. A slightly higher rate with a fairer penalty method is often the cheaper mortgage. The tool makes that clear in a minute.</p>

<h2>What moves the rate you are offered</h2>
<ul>
<li><strong>Down payment or equity.</strong> It sets whether you're insured, insurable or uninsured.</li>
<li><strong>Price.</strong> Default insurance isn't available above the insured cap.</li>
<li><strong>Amortization.</strong> On many files, 30 years changes the category.</li>
<li><strong>Property type and use.</strong> A townhouse, a suite house and a rental condo are priced differently.</li>
<li><strong>Credit.</strong> That includes balances against limits and recent history.</li>
<li><strong>Purpose.</strong> A purchase, a straight switch and a cash-out refinance can each be priced differently at the same lender.</li>
</ul>

${callout("Why no rate is printed here", `<p>A rate on a page goes out of date within days. A rate that ignores your down payment, credit, property, amortization and purpose isn't your rate. Joshua confirms pricing with lenders on the day you ask. A call gets you the number that applies to you.</p>`)}

${cta({ title: "Want today's Surrey rate for your actual file?", text: "Book a 15-minute call, by phone or at the Surrey office. Joshua will tell you which pricing category you're in and what your real options are." })}
<p>For anything else, the <a href="/contact/">contact page</a> has the details.</p>
`;

export default {
  slug,
  h1: "Mortgage rates in Surrey: current rates and the local context",
  lede: "A townhouse with 10 percent down, a suite house with 20 percent down and a City Centre presale are three different prices at the same lender. Here is why, and what to compare beyond the rate.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Surrey rates", slug]],
  nav: "/mortgage-rates-bc/",
  body,
  faqs: [
    { q: "Why does my friend with a smaller down payment have a lower rate than me?", a: "Because their mortgage is insured and yours probably is not. Default insurance, paid by the buyer, removes most of the lender's risk, so insured mortgages are often the best-priced category. A larger down payment on a home above the insured price cap leaves the lender carrying its own risk, and it prices for that." },
    { q: "Does the suite on a Surrey house change the rate?", a: "Not usually the rate, but it changes the approval. Lenders decide how much of the rent to count and by which method, and the share varies. The lender whose method suits your file may not have the lowest rate, and an approval at a slightly higher rate beats a decline at the lowest one." },
    { q: "What rate will I get on a Surrey presale?", a: "The rate available near your completion date, not today's. Presales are financed at completion, which may be years after signing, so the panel on this page is context, not a prediction. As the date approaches, some lenders offer longer holds for new construction, and that is worth asking about." },
    { q: "Are renewal rates better if I switch lenders?", a: "Often, because lenders compete harder for new business than for existing customers. Since late 2024, a straight switch at maturity, with no increase to the balance or amortization, usually skips the stress test, and switch costs are often covered. Compare the letter against a switch before signing; the renewal rates page explains how." },
    { q: "Why does this page not list a rate?", a: "Because a rate in an article is out of date almost immediately, and a rate that ignores your down payment, property and purpose is not your rate. A short call gets you the number that applies to your file today, confirmed with lenders on the day you ask." }
  ]
};
