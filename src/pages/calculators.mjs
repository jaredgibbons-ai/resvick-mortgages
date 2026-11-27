import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const soon = (id, title, text) => `<section class="tool soon" id="${id}" aria-labelledby="${id}-h"><h3 id="${id}-h">${title}</h3><p class="small">${text}</p><p class="honest"><strong>In development.</strong> This tool is not live yet. Joshua can run the same numbers with you on a <a href="/contact/">call</a>.</p></section>`;

const body = `
${short({ answer: "These free calculators work out your payment, what you can borrow, your cash needs and what leaving a mortgage early would cost. Results show right away, and nothing you type leaves your browser.", who: "You're buying, renewing or refinancing in BC. Not sure which tool you need? Try the <a href='/mortgage-check/'>two-minute check</a>.", next: "Pick your situation in the list below and open the tool that fits." })}
<h2>Calculators built on published rules</h2>
<p>These tools cover the numbers behind a mortgage decision. They show what the payment will be and how much you may be able to borrow. They also show what you need in cash and what leaving a mortgage early would cost.</p>
<p>They are free to use and show the whole result at once. They ask for no email address. Nothing you type is sent anywhere or stored. Your own browser does all the math.</p>
<p>A calculator is only as honest as its assumptions. So each one on this page lists what it includes and what it leaves out. Treat the results as estimates for planning. A lender confirms the real numbers after it reviews your income, credit and property. Joshua will go through your real figures with you whenever you like.</p>

<h2>Find the right tool by what you are doing</h2>
<div class="tool-grid">
<a href="#payment"><strong>Buying a home</strong>Payment, affordability, minimum down payment, closing costs and the CMHC premium. The BC transfer tax has its own calculator, linked below.</a>
<a href="#renewal"><strong>Renewing a mortgage</strong>Compare staying, switching and refinancing side by side, and estimate a prepayment penalty if you are considering leaving early.</a>
<a href="#consolidation"><strong>Refinancing</strong>Check whether a refinance pays for itself, and what consolidating debt into a mortgage really changes.</a>
<a href="#offset"><strong>Investing</strong>How rental income counts at a lender, whether a suite qualifies for CMHC's program, and what a readvanceable mortgage allows.</a>
</div>
<p>Four of these tools have their own pages with longer explanations. They are the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a>, the <a href="/mortgage-penalty-calculator/">mortgage penalty calculator</a>, the <a href="/refinance-break-even/">refinance break-even calculator</a> and the <a href="/home-equity-estimator/">home equity estimator</a>. The rest live on this page, so you can move between them without losing your place.</p>

<h2>For buyers</h2>
<div class="tools">
${TOOLS.payment()}
${TOOLS.affordability()}
${TOOLS["down-payment"]()}
${TOOLS["closing-costs"]()}
${TOOLS.cmhc()}
</div>
<p>If this is your first purchase, read the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, which explains the programs and the order of the steps. The calculators answer how much. The guide answers what to do first.</p>

<h2>For renewals and early exits</h2>
<div class="tools">
${TOOLS.renewal()}
${TOOLS.penalty()}
</div>
<p>Renewal is when you are most free to change lenders, and the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains how. The penalty tool gives a range on purpose. Your lender chooses how it calculates its interest rate differential, and the two common methods can give different results.</p>

<h2>For refinancing, investing and moving</h2>
<p>These tools answer the questions that come after the purchase. How fast can you be mortgage-free? How does a refinance change your total cost? How does a suite count toward qualifying? What do you keep when you sell? The <a href="/refinance-break-even/">refinance break-even calculator</a> and the <a href="/home-equity-estimator/">home equity estimator</a> have their own pages.</p>
<div class="tools">
${TOOLS.prepayment()}
${TOOLS.compare()}
${TOOLS.consolidation()}
${TOOLS.offset()}
${TOOLS["suite-checker"]().replace("(applications on or after January 15, 2025), CMHC's refinance fact sheet", "(applications on or after January 15, 2025). Also CMHC's refinance fact sheet")}
${TOOLS.readvanceable()}
${TOOLS["sale-proceeds"]()}
${soon("mli", "MLI Select calculator", "Estimate qualifying details for CMHC's multi-unit financing program. Published only once the program's tier details are confirmed.")}
<section class="tool" id="quiz" aria-labelledby="quiz-h"><h3 id="quiz-h">Two-minute mortgage check</h3><p class="small">Not sure which of these tools is yours? Answer a couple of questions and you'll be pointed to the right one. Your own numbers are worked through first, and no email is asked for.</p><p><a class="btn" href="/mortgage-check/">Start the two-minute check</a> <a class="btn btn-ghost" href="/mortgage-check-up/">Already have a mortgage? Run a check-up</a></p><p class="honest">The check routes you to a guide and a tool. The check-up reads your existing mortgage: renewal timing, what the rest of the term costs and what leaving early would cost.</p></section>
</div>
<p>Investors can start from the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>, and those thinking about equity can start with the <a href="/refinance-mortgage-bc/">refinancing hub</a>.</p>

<h2>Six mistakes that make a calculator answer wrong</h2>
<p>A calculator is only as good as what you type into it. These are the slips I see most often when someone brings me a number from a website, this one included.</p>
<ol>
<li><strong>Using today's posted rate for the stress test.</strong> Lenders qualify you at the higher of your contract rate plus 2 points or a 5.25% floor. Type the rate you expect to pay, and the tool adds the buffer for you. Do not add it twice.</li>
<li><strong>Leaving out debts that feel small.</strong> A $90 phone plan usually does not count, but a $90 line of credit payment does. So do student loans, support payments and any lease. Even a card you pay off each month can count, because lenders work out a payment for each card on your report by their own method.</li>
<li><strong>Typing gross income for one person and household costs for two.</strong> If two people will be on the mortgage, enter both incomes and both sets of debts. If only one will be, enter only that person's.</li>
<li><strong>Forgetting strata fees and heat.</strong> On a condo or townhouse, lenders count half the strata fee as a housing cost, plus a heating figure. Skip them and the result can run tens of thousands too high.</li>
<li><strong>Treating the result as a pre-approval.</strong> The tools show what the published rules allow. A lender still checks your credit, your documents and the property. Two lenders can read the same file differently, so the real number comes from a full application.</li>
<li><strong>Picking a 30-year amortization by default.</strong> A longer amortization lowers the payment. But on an insured mortgage, only first-time buyers and buyers of newly built homes can ask for one. You also pay more interest over the life of the loan. Run 25 and 30 years side by side, then decide whether the lower payment is worth the extra cost.</li>
</ol>
<p>If your number looks too good, it probably missed one of these. Send it to me and I will check it against the way a lender would read your file.</p>

<h2>What to do with your result</h2>
<p>Treat a calculator answer as a starting point for a conversation, not a finish line. Here is how I would use one.</p>
<ul>
<li><strong>Write down what you typed.</strong> The answer only makes sense next to the inputs behind it. A screenshot of the whole tool is easiest, or use the email button so the inputs travel with the result.</li>
<li><strong>Run it twice.</strong> Once with the numbers you hope for, once with a cushion: a slightly lower price, a slightly higher rate, one more debt. The gap between the two tells you how much room you really have.</li>
<li><strong>Check the cash, not only the payment.</strong> A payment that fits can still fail on closing day if the transfer tax, legal fees and moving costs were not planned. Pair the affordability tool with the closing cost tool.</li>
<li><strong>Bring it to a 15-minute call.</strong> I will tell you which line a lender is most likely to question, and what paperwork would answer it.</li>
</ul>
<p>Not sure which rate to type? Use the rate on your renewal letter or a written pre-approval if you have one. If you have neither, run the same numbers at a few rates, one point apart, and watch how far the answer moves. That spread tells you more than any single guess. And if you would rather not type numbers at all, the two-minute check above asks plain questions instead.</p>

<h2>One engine behind every tool</h2>
<p>All of the calculators use the same math core, so a payment in one tool matches the payment in every other. That is on purpose. If one tool used a slightly different formula, the results would disagree. You would not know which to trust.</p>
<p>The engine follows Canadian rules. Fixed-rate mortgages compound semi-annually, as federal law requires. That is why a 5.00% fixed mortgage costs slightly less than 5.00% compounded monthly would. Accelerated bi-weekly and accelerated weekly payments are the monthly payment divided by two or by four, which is how lenders define them. Rounding is to the nearest cent.</p>
<p>We checked the results against a second, separate calculation of the same formulas. That includes the edge cases where rules change, such as a price of exactly $500,000 or $1,500,000.</p>

<h2>Worked examples you can reproduce</h2>
<p>These examples are illustrative. The rates are chosen for the example and are not quotes or predictions. Type the same figures into the tools above and you will see the same results.</p>
<h3>A purchase with a small down payment</h3>
<p>Suppose you buy a home for $750,000 with 10 percent down, or $75,000. A down payment under 20 percent means the mortgage must be insured. The premium depends on the loan-to-value ratio. Here the loan is $675,000, which is 90 percent of the price, so the premium is 3.10 percent, or $20,925. The premium is added to the mortgage, which becomes $695,925.</p>
<p>At an illustrative rate of 4.50 percent over 25 years, the monthly payment is $3,851.76. Switching to accelerated bi-weekly payments makes each payment $1,925.88, paid 26 times a year. That adds up to one extra monthly payment a year. The mortgage is paid off in about 21 years and 8 months instead of 25. Total interest falls from about $459,601 to about $389,900. The difference comes from the extra payment each year, not from any change to the rate.</p>
<h3>The stress test</h3>
<p>Lenders qualify you at a higher rate than the one you will pay. The qualifying rate is the greater of your contract rate plus 2 percentage points and 5.25 percent. At an illustrative contract rate of 4.50 percent, you are tested at 6.50 percent. The affordability calculator applies that test. It also applies the lender ratios: 39 percent of gross income for housing costs, and 44 percent for all debts together.</p>
<h3>How the minimum down payment changes with price</h3>
<p>The minimum down payment is 5 percent of the first $500,000. It is 10 percent of the portion above that, up to $1,500,000. On a $750,000 home it is $25,000 plus $25,000, or $50,000. On $1,200,000 it is $25,000 plus $70,000, or $95,000. At $1,500,000 and above, the minimum is 20 percent, which is $300,000, and insurance is not available.</p>
<h3>A renewal comparison</h3>
<p>Take a $500,000 balance with 20 years of amortization remaining. Compare two five-year fixed offers: 5.00 percent and 4.50 percent, again illustrative. The payments are $3,285.63 and $3,152.03 a month. Over five years the interest is about $114,029 compared with about $102,302, a difference of roughly $11,727. The balance left at the end of the term is also lower at the lower rate, by about $3,711. Half a point of rate is not small at renewal. It is the reason to compare rather than accept the first offer.</p>

${callout("What these tools do not do", "<p>They do not approve you for anything. They do not know your credit or your lender's policies. They also use the rules in force today. If a rule changes, the tools change with it. For a number you can rely on, book a call and Joshua will run your actual file.</p>")}

<p>Two more tools live on their own pages: the <a href="/reverse-mortgage-calculator-bc/">reverse mortgage calculator</a> for owners 55 and older, and the <a href="/cmhc-insurance-bc/">CMHC insurance guide</a> with the premium calculator and table.</p>
${cta({ title: "Have the numbers, but not sure what they mean?", text: "Bring your results to a 15-minute call. Joshua will explain what a lender is likely to see and what you can do to improve it." })}

<p>Calculators are one part of the job. If your mortgage is already in place, the <a href="/mortgage-aftercare-program/">aftercare program</a> keeps the numbers current as your life changes. You can also <a href="/contact/">contact Joshua</a> directly with a question these tools do not answer.</p>
`;

export default {
  slug: "/mortgage-calculators/",
  h1: "Mortgage calculator BC: payment, affordability and more",
  lede: "Payments, affordability, down payment, BC transfer tax, CMHC premiums, renewal scenarios and penalties. Each shows its full result immediately and explains its assumptions.",
  crumb: "Mortgage calculators", nav: "/mortgage-calculators/", calc: true, body,
  faqs: [
    { q: "How do I calculate my mortgage payment in BC?", a: "Use the payment calculator at the top of this page. Enter the price, down payment, a rate you've been quoted and the amortization. It shows the payment, any CMHC premium and the income lenders would look for. Fixed rates use semi-annual compounding, as Canadian law requires." },
    { q: "Are these calculators accurate?", a: "They apply published rules and were tested against an independent calculation. They are still estimates: a lender verifies your income, credit and property before confirming any number, and rates in the tools are the ones you type in, not live market rates." },
    { q: "Do I need to give my email to see the results?", a: "No. Every result appears immediately, with no email address or sign-up needed, and nothing you enter is sent anywhere because the calculations run in your own browser. Booking a call afterwards, if you want to talk through the numbers with Joshua, is entirely optional." },
    { q: "Why does the affordability result differ from my bank's pre-approval?", a: "Lenders differ in how they count income, debts and property costs, and some use different qualifying rules. This tool uses the standard ratios and the stress-test rate. A pre-approval from a broker, checked against real lender policies, is the more reliable figure." },
    { q: "Which rate should I type in?", a: "Use a rate you have actually been quoted. If you do not have one yet, try a few values and see how sensitive the payment is. Joshua can give you a current rate that fits your file on a short call." }
  ]
};
