import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Moving your mortgage to a new lender at maturity is a transfer, not a fresh start. There's no penalty, the new lender often covers some or all of the costs, and since late 2024 you may not need to re-pass the stress test. Borrowing more turns it into a refinance.",
  who: "Homeowners whose term ends in the next few months and who want a better rate or better terms than their renewal letter.",
  next: "Start about 120 days before maturity. Compare offers in the <a href=\"/mortgage-calculators/#renewal\">renewal calculator</a>, then <a href=\"/contact/\">book a 15-minute call</a>."
})}
<h2>A switch is a transfer, not a new purchase</h2>
<p>When people hear "switching lenders," they often picture starting over. A full application, a new stress test, penalties and legal fees. At renewal, none of that is quite right.</p>
<p>A switch at maturity moves your existing mortgage to a new lender. The balance and the property carry across. So does the time left on your amortization, if you want. What changes is who holds the mortgage, and the rate and terms you get from them.</p>

<h2>The key difference: straight switch or refinance</h2>
<p>Every move at renewal falls into one of two groups. The rules differ a lot between them.</p>
<ul>
<li><strong>A straight switch</strong> moves the same balance to a new lender at your maturity date. The amortization stays the same or gets shorter. In some insured cases, you can add a small amount for costs, as the next section explains.</li>
<li><strong>A refinance</strong> changes the loan. The balance goes up, the amortization gets longer, or equity comes out. It's treated as a new lending decision with full qualifying. It can also carry costs a straight switch doesn't. The <a href="/refinance-mortgage-bc/">refinance hub</a> covers that route.</li>
</ul>
<p>Keep the two apart. The perks people hear about belong to the straight switch: no penalty, low or no costs, and no stress test. The moment the balance or amortization goes up, things change.</p>

<h2>The stress test: you may not need to re-pass it</h2>
<p>For years, switching meant qualifying again at a higher rate. Since late 2024, two federal measures change that for straight switches.</p>
<p>The first is from the Office of the Superintendent of Financial Institutions, or OSFI. Effective November 21, 2024, it no longer expects lenders to apply the minimum qualifying rate to uninsured straight switches. That's for moves between federally regulated lenders, with no increase to the loan amount or the amortization.</p>
<p>The second is a separate measure from Finance Canada, effective December 16, 2024. It covers low-ratio mortgages, at 80 percent loan-to-value or less, switched under portfolio insurance. It lets the balance rise by up to $3,000 for the costs of the switch, with no equity take-out.</p>
<p>This doesn't mean there's no review. The new lender still checks your credit, income, debts and the property. The two measures remove the higher qualifying rate, not the approval. For the exact conditions, who's left out and several worked examples, read the full guide to the <a href="/stress-test-exemption-switching-lenders/">stress-test exemption for switching lenders</a>.</p>

<h2>The steps and the timeline</h2>
<ol>
<li><strong>Start about 120 days before maturity.</strong> Most lenders will hold a rate for about that long. That gives you time to compare without pressure. Your own lender's renewal statement may come much later, so the useful window opens before the letter does.</li>
<li><strong>Compare real offers.</strong> A written side-by-side shows rate, term, prepayment options, how the penalty is worked out, and whether you can take the mortgage with you if you move. That tells you more than a headline rate. It's what the <a href="/lender-comparison-report/">Lender Comparison Report</a> is for.</li>
<li><strong>Apply and get approved.</strong> The new lender reviews your credit, income and property. You may or may not need an appraisal, depending on the lender and the file.</li>
<li><strong>Finish the legal work.</strong> A lawyer, a notary or a title insurance process discharges the old mortgage and registers the new one. The new lender often arranges this and may pay for it. Ask before you book your own.</li>
<li><strong>Your maturity date arrives, and the new mortgage starts.</strong> You're leaving at maturity, so there's no prepayment penalty.</li>
</ol>

<h2>What a switch costs, and who pays</h2>
<p>The total cost of a straight switch varies by lender and by file. The research behind this site found sourced figures from about $833 at the low end to about $3,465 at the high end. They cover the main items. That means discharging the old mortgage, moving and registering the new one, the legal work, and an appraisal if one is needed.</p>
<p>In many cases, the new lender covers some or all of these costs as part of its offer. It isn't automatic, so get it in writing before you commit.</p>
<p>To decide if a switch is worth it, compare the savings to the cost. Here's an example. You owe $450,000 with 22 years of amortization left. The term is five years. You can stay at 4.99 percent or switch to 4.49 percent.</p>
<p>The monthly payment drops from $2,798.26 to $2,675.50. Over five years, interest falls from about $103,650 to about $92,984. That's about $10,667 less. The balance at the end of the term is also about $3,301 lower.</p>
<p>Even if you paid the full high-end switching cost of $3,465, you'd still be roughly $7,202 ahead on interest. These numbers are examples, not quotes. Check your own in the <a href="/mortgage-calculators/#renewal">renewal calculator</a>. See the <a href="/mortgage-renewal-rates-bc/">renewal rates guide</a> for how switch pricing works.</p>

${cta({ title: "Find out if your switch qualifies", text: "Book a 15-minute call. Joshua will review your maturity date, balance and mortgage type. He'll tell you whether a straight switch is available and what it could save." })}

<h2>A warning about collateral charges and credit unions</h2>
<p>Two things can complicate an otherwise simple switch. The first is how your current mortgage is registered.</p>
<p>A standard charge can usually be moved to a new lender, with the lawyer handling the paperwork. Some lenders use a collateral charge for new mortgages instead. It's registered against the home as security for a broader loan. It usually can't just be moved. It has to be discharged and registered again. That changes the cost, and sometimes the timing. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains how to tell which you have.</p>
<p>The second is a move between a bank and a credit union. Credit unions in BC are regulated by the province. The federal measures apply to federally regulated lenders. So a switch from a credit union to a bank, or the other way, can mean qualifying all over again. If either lender is a credit union, say so at the start.</p>

<h2>When switching is the wrong move</h2>
<p>Switching isn't always the best answer. It's the wrong tool in these cases.</p>
<ul>
<li>You want to <strong>borrow more</strong>, stretch the amortization or take equity out. That's a refinance, with a different process and different costs.</li>
<li>You want to <strong>roll debt</strong> into the mortgage. The new balance changes the approval, and the stress-test relief doesn't apply the same way.</li>
<li>Your <strong>current lender's offer is already competitive</strong>, and the savings elsewhere don't cover the costs.</li>
<li>Your <strong>credit or income has changed</strong> since you last qualified. The new lender will see those changes. Moving lenders is harder if your file has weakened.</li>
</ul>
<p>Sometimes the best result is a negotiated renewal with your current lender, backed by a competing offer. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers all the options.</p>
<p>Whichever route you pick, your <a href="/contact/">first conversation</a> with Joshua costs nothing. On mainstream (A) lender mortgages, the lender pays the broker. Fees only come up on some B-lender and private files, with written disclosure first.</p>

${callout("Example figures", "<p>The balances, rates and savings above are sample figures worked out for this page. They aren't quotes. Real offers depend on your file, the lender and the day.</p>")}
`;

export default {
  slug: "/switch-mortgage-lenders-at-renewal/",
  h1: "Switching mortgage lenders at renewal: costs, steps and savings",
  lede: "A switch at maturity is a transfer, not a new purchase. No penalty, costs often covered by the new lender, and since 2024 you may not need to re-pass the stress test.",
  crumb: "Switch lenders at renewal", nav: "/mortgage-renewal-bc/", body,
  faqs: [
    { q: "Is there a penalty for switching lenders at renewal?", a: "Not at maturity. A mortgage that has reached the end of its term can be moved to a new lender without a prepayment penalty. Leaving before maturity is different: breaking a term early usually triggers a penalty, which is why timing a switch to your maturity date matters." },
    { q: "Who pays for the legal and appraisal costs of a switch?", a: "It depends on the new lender. Many cover some or all of the legal and appraisal costs as part of the offer, and others do not. The research behind this site sourced all-in costs from about $833 to about $3,465. Ask for the arrangement in writing before you proceed." },
    { q: "Do I need to pass the stress test to switch?", a: "You may not need to re-pass it on a straight switch between federally regulated lenders, with no increase in balance or amortization. The new lender still reviews your credit, income and the property. Credit unions and collateral charges can change the answer." },
    { q: "Can I switch and borrow more at the same time?", a: "That becomes a refinance, which has its own process, costs and qualification. The only increase allowed in a straight switch is up to $3,000 for transaction costs on certain insured low-ratio mortgages, with no equity take-out. Anything beyond that follows refinance rules." },
    { q: "How early should I start a switch?", a: "About 120 days before maturity. Most lenders hold a rate for around that long, so you can compare offers without being pushed by the date. Starting only when the renewal letter arrives may leave you three weeks or less, which is rarely enough to shop properly." }
  ]
};
