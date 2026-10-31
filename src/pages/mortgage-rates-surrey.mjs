import { cta, callout, ratesStrip } from "../lib/site.mjs";

const slug = "/mortgage-rates-surrey/";

const body = `
${ratesStrip()}

<h2>Three Surrey purchases, three different prices at the same lender</h2>
<p>Rate shopping in Surrey usually starts with one of three files, and each is priced differently on the same day at the same lender. Understanding why is more useful than any number printed on a page, because the number changes and the reasons do not. The <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> covers the general mechanics of how a rate is set; this page is the Surrey version, and the <a href="/mortgage-broker-surrey/">Surrey mortgage broker page</a> covers the neighbourhoods and property types in detail.</p>
<h3>The townhouse with 10 percent down</h3>
<p>This is the classic first purchase in Cloverdale, Fleetwood or Panorama. With under 20 percent down, the mortgage is insured, the buyer pays the insurance premium, and the lender carries little risk. Insured mortgages are often the best-priced category, which is why a first-time buyer can see a lower rate than a wealthier buyer with a larger down payment on a more expensive home. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets the order of operations, from the pre-approval and rate hold to stacking the FHSA, the Home Buyers' Plan and the property transfer tax exemption.</p>
<h3>The suite house with 20 percent down</h3>
<p>A detached home in Newton, Guildford or Fleetwood with a basement suite is usually bought with 20 percent or more down. If the price is under the insured cap and the file meets the criteria, the lender can insure it itself and the mortgage is priced as insurable; above the cap, or with a 30-year amortization, it is uninsured and usually priced higher. The suite adds a second question: how much of the rent the lender will count. That does not change the rate, but it changes whether the file is approved at all, and the lender whose rental-income method suits your file is not always the one with the lowest rate.</p>
<h3>The City Centre presale</h3>
<p>A presale near King George or Surrey Central is financed at completion, which may be years after the deposit. The rate that matters is the one available then, not now, which is why a presale buyer should not anchor on today's panel. Some lenders offer longer rate holds for new construction, and that is worth asking about as the completion date approaches.</p>

<h2>Fixed or variable for a Surrey buyer</h2>
<p>Surrey's growth along the Fraser Highway corridor, with the Surrey Langley SkyTrain extension under construction and expected to open in late 2029 (Province of BC, May 2026), means a share of buyers in Fleetwood, Green Timbers and Clayton may sell or move up within a five-year term. That is the main argument for thinking carefully before taking the lowest five-year fixed rate: a fixed mortgage broken mid-term can carry a large interest rate differential penalty, while a variable mortgage carries a smaller, more predictable one and a payment that can change. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> works through the trade-offs, and the <a href="/5-year-fixed-mortgage-rate/">5-year fixed page</a> explains when the classic term fits and when a shorter term is the better choice.</p>

<h2>Renewal rates and the switch question</h2>
<p>Many Surrey mortgages were set up as five-year fixed terms, and the renewal letter is the moment Surrey homeowners most often lose money by default. The letter is one lender's opening offer. Renewal pricing for borrowers who switch is often better than the letter, because lenders compete for new business in a way they do not always compete for existing customers. Since late 2024, a straight switch to another lender at maturity, with the balance and amortization unchanged, usually does not require a new stress test, and the costs of a switch are often covered by the new lender. The <a href="/mortgage-renewal-rates-bc/">renewal rates page</a> explains how switch pricing works and what a switch typically involves. Credit unions, which hold many Surrey mortgages, are provincially regulated and may apply their own rules.</p>

<h2>Compare the whole mortgage, not the rate</h2>
<p>Once the rate is settled, four things decide what a Surrey mortgage actually costs:</p>
<ol>
<li><strong>The penalty method.</strong> Lenders calculate the interest rate differential differently. On a fixed mortgage, the difference between methods can be thousands of dollars if you sell or refinance mid-term.</li>
<li><strong>Prepayment room.</strong> Lump-sum and payment-increase allowances differ by lender, and they matter to a household planning to pay the suite rent straight onto the principal.</li>
<li><strong>Portability.</strong> Whether the mortgage can move to the next home, and on what terms, which matters to a family planning a move up to South Surrey or Cloverdale.</li>
<li><strong>Rental-income treatment.</strong> On a suite house, the lender's method and share decide the approval.</li>
</ol>
<p>The <a href="/mortgage-calculators/#compare">four-scenario comparison tool</a> puts up to four options side by side, with the payment, the interest over the term, the balance left at the end and the penalty exposure. A slightly higher rate with a fairer penalty method is often the cheaper mortgage, and the tool makes that visible in a minute.</p>

<h2>What moves the rate you are offered</h2>
<ul>
<li><strong>Down payment or equity</strong>, which sets the insured, insurable or uninsured category.</li>
<li><strong>Price</strong>, since default insurance is unavailable above the insured cap.</li>
<li><strong>Amortization</strong>, with 30 years changing the category on many files.</li>
<li><strong>Property type and use</strong>: a townhouse, a suite house and a rental condo are priced differently.</li>
<li><strong>Credit</strong>, including balances against limits and recent history.</li>
<li><strong>Purpose</strong>: a purchase, a straight switch and a cash-out refinance can each carry different pricing at the same lender.</li>
</ul>

${callout("Why no rate is printed here", `<p>A rate on a page is out of date within days, and a rate that ignores your down payment, credit, property, amortization and purpose is not your rate. Joshua confirms pricing with lenders on the day you ask. A call gets you the number that applies to you.</p>`)}

${cta({ title: "Want today's Surrey rate for your actual file?", text: "Book a 15-minute call, by phone or at the Surrey office. Joshua will tell you which pricing category you fall into and what the real options are." })}
<p>Anything else, the <a href="/contact/">contact page</a> has the details.</p>
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
