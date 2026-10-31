import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const soon = (id, title, text) => `<section class="tool soon" id="${id}" aria-labelledby="${id}-h"><h3 id="${id}-h">${title}</h3><p class="small">${text}</p><p class="honest"><strong>In development.</strong> This tool is not live yet. Joshua can run the same numbers with you on a <a href="/contact/">call</a>.</p></section>`;

const body = `
<h2>Calculators built on published rules</h2>
<p>These tools are for the numbers that decide a mortgage decision: what the payment will be, how much you may be able to borrow, what you need in cash, and what leaving a mortgage early would cost. They are free to use, show the whole result at once, and ask for no email address. Nothing you type is sent anywhere or stored. Every figure is calculated in your own browser.</p>
<p>A calculator is only as honest as its assumptions, so each one on this page lists what it includes and what it leaves out. Treat the results as estimates for planning. A lender confirms the real numbers once your income, credit and property have been reviewed, and Joshua will go through your actual figures with you whenever you like.</p>

<h2>Find the right tool by what you are doing</h2>
<div class="tool-grid">
<a href="#payment"><strong>Buying a home</strong>Payment, affordability, minimum down payment, closing costs and the CMHC premium. The BC transfer tax has its own calculator, linked below.</a>
<a href="#renewal"><strong>Renewing a mortgage</strong>Compare staying, switching and refinancing side by side, and estimate a prepayment penalty if you are considering leaving early.</a>
<a href="#consolidation"><strong>Refinancing</strong>Check whether a refinance pays for itself, and what consolidating debt into a mortgage really changes.</a>
<a href="#offset"><strong>Investing</strong>How rental income counts at a lender, whether a suite qualifies for CMHC's program, and what a readvanceable mortgage allows.</a>
</div>
<p>Four of these tools have their own pages with longer explanations: the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a>, the <a href="/mortgage-penalty-calculator/">mortgage penalty calculator</a>, the <a href="/refinance-break-even/">refinance break-even calculator</a> and the <a href="/home-equity-estimator/">home equity estimator</a>. The rest live on this page, so you can move between them without losing your place.</p>

<h2>For buyers</h2>
<div class="tools">
${TOOLS.payment()}
${TOOLS.affordability()}
${TOOLS["down-payment"]()}
${TOOLS["closing-costs"]()}
${TOOLS.cmhc()}
</div>
<p>If this is your first purchase, read the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, which explains the programs and the order of the steps. The calculators answer how much; the guide answers what to do first.</p>

<h2>For renewals and early exits</h2>
<div class="tools">
${TOOLS.renewal()}
${TOOLS.penalty()}
</div>
<p>Renewal is the point at which you are most free to change lenders, and the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains how. The penalty tool is deliberately a range, because your lender chooses how its interest rate differential is calculated, and the two common methods can produce very different results.</p>

<h2>For refinancing, investing and moving</h2>
<p>These tools answer the questions that come after the purchase: how fast you can be mortgage-free, how a refinance changes your total cost, how a suite counts toward qualifying, and what you keep when you sell. The <a href="/refinance-break-even/">refinance break-even calculator</a> and the <a href="/home-equity-estimator/">home equity estimator</a> have their own pages.</p>
<div class="tools">
${TOOLS.prepayment()}
${TOOLS.compare()}
${TOOLS.consolidation()}
${TOOLS.offset()}
${TOOLS["suite-checker"]()}
${TOOLS.readvanceable()}
${TOOLS["sale-proceeds"]()}
${soon("mli", "MLI Select calculator", "Estimate qualifying details for CMHC's multi-unit financing program. Published only once the program's tier details are confirmed.")}
<section class="tool" id="quiz" aria-labelledby="quiz-h"><h3 id="quiz-h">Two-minute mortgage check</h3><p class="small">Not sure which of these tools is yours? Answer a couple of questions and you'll get pointed to the right one, with your own numbers worked through first and no email asked for.</p><p><a class="btn" href="/mortgage-check/">Start the two-minute check</a> <a class="btn btn-ghost" href="/mortgage-check-up/">Already have a mortgage? Run a check-up</a></p><p class="honest">The check routes you to a guide and a tool. The check-up reads your existing mortgage: renewal timing, what the rest of the term costs and what leaving early would cost.</p></section>
</div>
<p>Investors can start from the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>, and those thinking about equity can start with the <a href="/refinance-mortgage-bc/">refinancing hub</a>.</p>

<h2>One engine behind every tool</h2>
<p>All of the calculators use the same amortization core, so a payment shown in one tool matches the payment shown in every other. That consistency is deliberate. If the affordability tool used a slightly different formula from the payment tool, the results would disagree, and you would have no way to know which to trust.</p>
<p>The engine follows Canadian rules. Fixed-rate mortgages compound semi-annually, as federal law requires, which is why a 5.00% fixed mortgage costs slightly less than 5.00% compounded monthly would. Accelerated bi-weekly and accelerated weekly payments are the monthly payment divided by two or by four, which is the way lenders define them. Rounding is to the nearest cent. The results have been checked against an independent calculation of the same formulas in a separate programming language, including the boundary cases where rules change, such as a purchase price of exactly $500,000 or $1,500,000.</p>

<h2>Worked examples you can reproduce</h2>
<p>These examples are illustrative. The rates are chosen for the sake of example and are not quotes or predictions. Type the same figures into the tools above and you will see the same results.</p>
<h3>A purchase with a small down payment</h3>
<p>Suppose you buy a home for $750,000 with 10 percent down, or $75,000. A down payment under 20 percent means the mortgage must be insured, and the premium depends on the loan-to-value ratio. Here the loan is $675,000, which is 90 percent of the price, so the premium is 3.10 percent, or $20,925. The premium is added to the mortgage, which becomes $695,925.</p>
<p>At an illustrative rate of 4.50 percent over 25 years, the monthly payment is $3,851.76. Switching to accelerated bi-weekly payments makes each payment $1,925.88, paid 26 times a year, which adds up to one extra monthly payment annually. The mortgage is paid off in about 21 years and 8 months instead of 25, and total interest falls from about $459,601 to about $389,900. The difference is a result of the extra payment each year, not of any change to the rate.</p>
<h3>The stress test</h3>
<p>Lenders qualify you at a higher rate than the one you will pay. The qualifying rate is the greater of your contract rate plus 2 percentage points and 5.25 percent. At an illustrative contract rate of 4.50 percent, you are tested at 6.50 percent. The affordability calculator applies that test, along with the lender ratios of 39 percent of gross income for housing costs and 44 percent for all debts together.</p>
<h3>How the minimum down payment changes with price</h3>
<p>The minimum down payment is 5 percent of the first $500,000 and 10 percent of the portion above that, up to $1,500,000. On a $750,000 home it is $25,000 plus $25,000, or $50,000. On $1,200,000 it is $25,000 plus $70,000, or $95,000. At $1,500,000 and above, the minimum is 20 percent, which is $300,000, and insurance is not available.</p>
<h3>A renewal comparison</h3>
<p>Take a $500,000 balance with 20 years of amortization remaining and compare two five-year fixed offers: 5.00 percent and 4.50 percent, again illustrative. The payments are $3,285.63 and $3,152.03 a month. Over five years the interest is about $114,029 compared with about $102,302, a difference of roughly $11,727. The balance left at the end of the term is also lower at the lower rate, by about $3,711. Half a point of rate is not a small matter at renewal, and it is the reason to compare rather than accept the first offer.</p>

${callout("What these tools do not do", "<p>They do not approve you for anything, they do not know your credit, and they do not know your lender's policies. They also use the rules in force today; if a rule changes, the tools change with it. For a number you can rely on, book a call and Joshua will run your actual file.</p>")}

${cta({ title: "Have the numbers, but not sure what they mean?", text: "Bring your results to a 15-minute call. Joshua will explain what a lender is likely to see and what you can do to improve it." })}

<p>Calculators are one part of the job. If your mortgage is already in place, the <a href="/mortgage-aftercare-program/">aftercare program</a> keeps the numbers current as your life changes, and you can always <a href="/contact/">contact Joshua</a> directly with a question these tools do not answer.</p>
`;

export default {
  slug: "/mortgage-calculators/",
  h1: "Mortgage calculators for BC buyers and renewers",
  lede: "Payments, affordability, down payment, BC transfer tax, CMHC premiums, renewal scenarios and penalties. Each shows its full result immediately and explains its assumptions.",
  crumb: "Mortgage calculators", nav: "/mortgage-calculators/", calc: true, body,
  faqs: [
    { q: "Are these calculators accurate?", a: "They apply published rules and were tested against an independent calculation. They are still estimates: a lender verifies your income, credit and property before confirming any number, and rates in the tools are the ones you type in, not live market rates." },
    { q: "Do I need to give my email to see the results?", a: "No. Every result appears immediately, with no email address or sign-up needed, and nothing you enter is sent anywhere because the calculations run in your own browser. Booking a call afterwards, if you want to talk through the numbers with Joshua, is entirely optional." },
    { q: "Why does the affordability result differ from my bank's pre-approval?", a: "Lenders differ in how they count income, debts and property costs, and some use different qualifying rules. This tool uses the standard ratios and the stress-test rate. A pre-approval from a broker, checked against real lender policies, is the more reliable figure." },
    { q: "Which rate should I type in?", a: "Use a rate you have actually been quoted. If you do not have one yet, try a few values and see how sensitive the payment is. Joshua can give you a current rate that fits your file on a short call." }
  ]
};
