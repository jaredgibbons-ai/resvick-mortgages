import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-white-rock/#service", name: "Resvick Mortgages, serving White Rock", url: SITE.origin + "/mortgage-broker-white-rock/", areaServed: [{ "@type": "City", name: "White Rock", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Metro Vancouver" }] };

const body = `
${short({
  answer: "Joshua Resvick serves White Rock by phone, video and in person at his Surrey office, a short drive away. Most files here turn on the building, the equity or the retirement income. The work is reading each the way a lender will.",
  who: "White Rock condo and townhouse buyers, downsizers, retirees, and owners renewing or refinancing.",
  next: "Book a 15-minute call, and bring the strata documents if you already have them."
})}
<p>White Rock is a small city on Semiahmoo Bay, surrounded on three sides by Surrey. Buyers here come with different stories. Some are selling a larger house nearby and moving to the water. Some are retiring into a condo. Others are younger buyers who want the beach and a short drive to work.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage, and a former underwriter. His office is in Surrey, a short drive from White Rock, and he works with clients by phone, video and secure uploads. There is no White Rock branch. More than 1,000 mortgages have been funded through him, and you can <a href="/contact/">book a 15-minute call</a> to start.</p>

${ratesStrip()}

<h2>Buying a condo or townhouse: the building is part of the file</h2>
<p>If you are buying a condo or townhouse, the lender is judging two things. One is you. The other is the building. A strong income can still run into trouble if the strata has a problem.</p>
<p>In BC, the strata corporation sets out its finances in a document called the Form B Information Certificate. Lenders also look at the strata minutes, the budget and the contingency reserve fund. Many ask for the depreciation report as well, if one exists.</p>
<p>Here is what tends to slow a file down:</p>
<ul>
<li><strong>A special levy.</strong> A lender will ask how big it is and whether the seller or the buyer pays it.</li>
<li><strong>Building repairs in the minutes.</strong> Envelope work, roof work or a legal dispute can all show up. Lenders vary in how much they mind.</li>
<li><strong>A thin reserve fund.</strong> A low balance next to big upcoming repairs can mean a special levy later.</li>
<li><strong>Rental limits.</strong> If the strata caps rentals, that matters for an investor and for a buyer who might need to rent out the unit one day.</li>
</ul>
<p>Joshua asks for the strata documents early, before your subject-removal date. If a lender is going to be uneasy about the building, you want to know while you can still change your mind. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> covers the full list.</p>

<h2>Presale towers and new construction</h2>
<p>White Rock also has newer towers and presale projects. A presale means you sign now and complete in the future, sometimes years later. The mortgage you line up today isn't the mortgage you close.</p>
<p>Some lenders hold a rate for a set number of days, but most presale completions are further out than any hold. Lenders also re-check your income, credit and the finished building at completion. The <a href="/presale-mortgages-bc/">presale mortgage page</a> explains how to plan for that gap.</p>

<h2>Downsizing: selling a house and buying in White Rock</h2>
<p>Downsizers are one common kind of buyer here. A paid-down house in South Surrey, Langley or further away can turn into a condo by the water with money left over. The mortgage question is then about timing, not qualifying.</p>
<p>Three things come up again and again:</p>
<ol>
<li><strong>Which closes first.</strong> If you buy before you sell, you may need <a href="/bridge-financing/">bridge financing</a> for a short time. If you sell first, you may need somewhere to live in between.</li>
<li><strong>Your current mortgage.</strong> If you still have time left on a low-rate term, <a href="/porting-your-mortgage/">porting</a> may avoid a penalty. It's not automatic, so check before you list.</li>
<li><strong>What the sale really nets.</strong> The sale price isn't the number you take home. Commission, payout and legal costs come off first. The <a href="/downsizing-and-your-mortgage/">downsizing guide</a> walks through the arithmetic, including the mortgage-free route and the small-mortgage route.</li>
</ol>
<p>Some homeowners want to stay in the house and tap the equity instead. For a homeowner who is old enough, a <a href="/reverse-mortgage-bc/">reverse mortgage</a> is one option, though it has real costs, so compare it with the others before you choose.</p>

<h2>Retirement income and a mortgage</h2>
<p>Some buyers here are retired or close to it. Lenders do count pension income, CPP and OAS, and withdrawals from a RRIF. They tend to ask for proof that the income is steady and will continue.</p>
<p>Investment income and savings are handled differently from lender to lender. Some lenders will count a share of assets, and others only count the income they produce. So the same retiree can qualify at one lender and be turned down at another. That's a lender-matching problem, and it's the part Joshua does best.</p>

<h2>Suites in White Rock</h2>
<p>If a house comes with a suite, ask whether it's registered. White Rock has a suite registration process under council policy, last amended March 9, 2020 (City of White Rock, Council Policy 508, Secondary Suites, read October 2026). Provincial housing rules also changed in 2024, so what a lot can have is worth confirming with the City before you count on the rent.</p>
<p>A lender generally counts rent only from a suite that's legal and documented. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains how lenders use the rent, and the share varies.</p>

<h2>What Joshua does for White Rock clients</h2>
<ol>
<li><strong>Reads the building and the borrower together.</strong> Before you fall for a unit, he checks the strata documents and your income against what lenders accept.</li>
<li><strong>Puts lenders side by side.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lays out rate, term, how a penalty is worked out, prepayment room and portability, so a strata purchase is not judged on rate alone.</li>
<li><strong>Handles the paperwork flow.</strong> Documents go through secure links. Your realtor, lawyer or notary and appraiser hear from him directly, so nothing waits on you to relay a message.</li>
<li><strong>Checks back.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> he reviews your mortgage each year and reaches out roughly six months before maturity, while comparing is still easy.</li>
</ol>

${callout("What you pay", "<p>Most White Rock files go to an A lender. There the lender pays Joshua and you pay nothing for his work. If a file needs a B lender or a private lender, any fee to you must be shown on BCFSA's Form 1A before you agree to anything. You would see the cost first.</p>")}

<h2>Buying, renewing and refinancing in White Rock</h2>
<p><strong>First-time buyers</strong> in White Rock often start with a condo. The transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan apply here as they do across BC. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows how they fit together, and the <a href="/mortgage-pre-approval-bc/">pre-approval page</a> explains what a real approval involves.</p>
<p><strong>Renewing owners</strong> have a decision to make well before the letter arrives. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline. Try the <a href="/mortgage-calculators/#renewal">renewal tool</a> inside the <a href="/mortgage-calculators/">mortgage calculators</a>; it compares staying, switching and refinancing with your own numbers.</p>
<p><strong>Business owners</strong> are read through tax returns instead of pay stubs. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> sets out the routes. For how a rate gets set, see the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby</h2>
<p>White Rock sits inside Surrey, so the <a href="/mortgage-broker-surrey/">Surrey page</a> covers the office and the neighbourhoods around it, including South Surrey. Joshua also serves <a href="/mortgage-broker-langley/">Langley</a>, where many downsizers sell before they move to the coast.</p>

${cta({ title: "Talk to a broker who serves White Rock", text: "Book a 15-minute call. Tell Joshua whether you're buying a unit, selling a house or planning a renewal. You'll leave knowing what to gather first." })}

`;

export default {
  slug: "/mortgage-broker-white-rock/",
  h1: "Mortgage broker serving White Rock, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves White Rock from his Surrey office. Strata documents, downsizing and retirement income read the way a lender reads them, for purchases, renewals and refinances.",
  crumbs: [["Home", "/"], ["Serving White Rock", "/mortgage-broker-white-rock/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Does a lender look at the building when I buy a White Rock condo?", a: "Yes. Lenders read the strata documents, including the Form B Information Certificate, the minutes and the contingency reserve fund. A large special levy, major repairs or a legal dispute can slow or stop an approval. Lenders vary in what they accept, so Joshua reviews the documents early, before your subject-removal date." },
    { q: "Can I qualify for a mortgage on pension and RRIF income?", a: "Often, yes. Lenders count pensions, CPP, OAS and RRIF withdrawals, and they usually want proof the income is steady. Some lenders also count a share of investments or savings, while others only count the income they produce. Joshua matches your income to a lender whose policy fits." },
    { q: "I am selling my house and buying a condo. Which should come first?", a: "It depends on your timing and your current mortgage. Buying first may need bridge financing, and selling first may mean a gap in housing. If you have time left on your term, porting your mortgage could avoid a penalty. A 15-minute call before you list lets Joshua map the safest order." },
    { q: "Does Joshua have a White Rock office, and can I meet in person?", a: "No, his office is in Surrey, a short drive away. Most clients work with him by phone, video and secure document upload, and your lawyer or notary handles the signing. If you would like to meet in person, you can book a time at the Surrey office." },
    { q: "Will a lender count the rent from a suite in White Rock?", a: "Usually only if the suite is legal and documented, and the share counted varies by lender. White Rock has a suite registration process, and provincial rules changed in 2024. Confirm what the lot allows with the City, then Joshua will run the rent through each method on your numbers." }
  ]
};
