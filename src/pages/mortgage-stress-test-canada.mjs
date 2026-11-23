import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "The stress test checks that you could still pay your mortgage if rates were higher. At a federally regulated lender, you qualify at the greater of your contract rate plus 2 percentage points and 5.25 percent. It limits how much you can borrow. It does not change the rate you pay.",
  who: "You're in BC and planning to buy, refinance or switch lenders, or you were surprised by a lower approval than you expected.",
  next: "Run your numbers in the <a href='/mortgage-calculators/#affordability'>affordability calculator</a>, then book a 15-minute call to see which lenders fit."
})}

<h2>What the stress test is</h2>
<p>The stress test is a rule about qualifying, not about paying. When you apply for a mortgage, the lender does not only ask if you can afford the rate you will pay. It also asks if you could afford a higher one. If the answer is no, the lender can lower the loan amount or decline the file.</p>
<p>Canada's banking regulator, OSFI, sets the rule for federally regulated lenders such as the big banks. It calls it the minimum qualifying rate. For an uninsured mortgage, that rate is the greater of two numbers:</p>
<ul>
<li>your contract rate plus 2 percentage points, or</li>
<li>5.25 percent.</li>
</ul>
<p>CMHC uses the same qualifying rate for insured mortgages. OSFI says it reviews the floor and the buffer at least once a year. So the numbers can change. Check them again before you rely on this page.</p>

<h2>A worked example</h2>
<p>The rates in this example are made up to show how it works. They are not a forecast or an offer.</p>
<p>Say a lender offers you a mortgage at 4.50 percent. Two points more is 6.50 percent, and that is higher than 5.25, so you are tested at 6.50 percent. Now look at what that does on a $500,000 mortgage over 25 years:</p>
<ul>
<li>At 4.50 percent, the payment is about $2,767 a month.</li>
<li>At the 6.50 percent test rate, the payment is about $3,349 a month.</li>
</ul>
<p>You would pay the first number. But the lender checks that you could carry the second one. That is $582 a month more than you will actually pay.</p>
<p>Here is the same idea from the other side. If your budget for the mortgage payment is $3,000 a month, then at 4.50 percent you could borrow about $542,000 over 25 years. At the 6.50 percent test rate, the same payment supports about $448,000. That gap of roughly $94,000 is the stress test at work. The real result depends on your other debts, taxes and heating, so treat the figures as a picture, not a quote.</p>

<h2>Who the test applies to</h2>
<ul>
<li><strong>Federally regulated lenders.</strong> The big banks and similar lenders must follow OSFI's rule for new uninsured mortgages.</li>
<li><strong>Insured mortgages.</strong> If you put down less than 20 percent, your mortgage is insured. The insurer's rules use the same qualifying rate, plus limits on your debt ratios. CMHC lists 39 percent of income for housing costs and 44 percent for total debts.</li>
<li><strong>Credit unions and other lenders.</strong> Many are regulated by the province, not by OSFI. Some follow similar rules and some use their own. Lenders vary, so ask each one.</li>
<li><strong>B lenders and private lenders.</strong> They qualify borrowers differently and often charge more. See the <a href="/b-lender-mortgage-bc/">B lender page</a> and the <a href="/private-mortgage-lending-bc/">private lending page</a>.</li>
</ul>

<h2>The debt ratios behind it</h2>
<p>The test uses two ratios. Lenders call them GDS and TDS.</p>
<ul>
<li><strong>Gross debt service (GDS)</strong> is your housing costs divided by your gross income. Housing costs include the mortgage payment, property tax, heat and half of any strata fee.</li>
<li><strong>Total debt service (TDS)</strong> adds all your other debt payments, such as car loans, credit cards, lines of credit and student loans.</li>
</ul>
<p>The lender works out both using the higher test rate, not the real rate. That is why a car loan or a student loan can cut your approval so much. Read about the effect on the <a href="/car-loan-affecting-mortgage/">car loan page</a> and the <a href="/student-loans-and-your-mortgage/">student loan page</a>.</p>

<h2>Variable and fixed rates are tested the same way</h2>
<p>People sometimes think a variable rate gets a lower test. It does not. Both fixed and variable mortgages are tested at the greater of the contract rate plus 2 points and 5.25 percent. Choose between them on cost and risk, not on the test. The <a href="/fixed-vs-variable-mortgage/">fixed or variable page</a> compares them.</p>

<h2>When the stress test does not apply</h2>
<p>There are a few cases where you may not have to take it again.</p>
<ul>
<li><strong>Renewing with your current lender.</strong> This is normally not a new application, so there is no new test.</li>
<li><strong>Switching lenders at renewal.</strong> On an uninsured mortgage, if you move to a new federally regulated lender without raising the balance or changing the amortization, the test may not apply. The <a href="/stress-test-exemption-switching-lenders/">stress test exemption page</a> explains the rule and its limits.</li>
<li><strong>A lender outside OSFI's rule.</strong> Some credit unions and private lenders use their own method. That is not always easier. It may carry other costs.</li>
</ul>
<p>The test does apply when you refinance, increase your balance or buy a new home. For the full picture of renewals, see the <a href="/mortgage-renewal-bc/">renewal guide</a>.</p>

<h2>Ways to qualify for more</h2>
<p>If the test limits you, there are real steps to consider. None of them are tricks. They change the numbers the lender sees.</p>
<ol>
<li><strong>Lower your debts.</strong> Paying off a loan or a card removes the payment from your ratio. The effect is often larger than the same amount added to the down payment.</li>
<li><strong>Add a co-borrower</strong> with income. Their debts count too, so it helps only if the income is larger. See the <a href="/co-buying-a-home/">co-buying page</a>.</li>
<li><strong>Put down more.</strong> A bigger down payment means a smaller loan, so it takes less income to pass.</li>
<li><strong>Use a longer amortization</strong>, where it is allowed. A longer amortization lowers the payment, and that helps the ratios. It also costs more interest over time. Some insured programs allow 30 years. The guide on <a href="/guides/thirty-year-amortization-and-the-1-5-million-cap/">30-year amortization</a> explains who can use it.</li>
<li><strong>Look at a different type of lender</strong>, with care. Some lenders test differently. Ask what the trade-offs are before you accept one.</li>
<li><strong>Buy a lower-priced home.</strong> It is not the answer anyone wants. But it is a real option, and it is better than a decline.</li>
</ol>

<h2>Common questions people ask about the test</h2>
<p><strong>Does the test mean I will pay the higher rate?</strong> No. You pay your contract rate. The higher rate is only used to check that you qualify.</p>
<p><strong>Can I be approved at the limit and still be comfortable?</strong> That is a separate question. The test is a minimum standard, not a budget. Joshua will often show a lower payment that suits your life better. The <a href="/how-much-mortgage-can-i-afford/">affordability page</a> covers it.</p>
<p><strong>Will the rule change?</strong> It has changed before, and OSFI reviews it at least yearly. The <a href="/guides/">guides section</a> posts changes when they happen.</p>

<h2>How Joshua helps</h2>
<ol>
<li><strong>A 15-minute call</strong> about your income, debts and goals.</li>
<li><strong>Your real limit.</strong> Joshua works out what each type of lender would approve, since the answer differs.</li>
<li><strong>A plan to improve it</strong>, if the number is lower than you hoped. That may mean paying a debt, waiting for a bonus to show on a tax return, or choosing a different lender.</li>
<li><strong>A written comparison.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> sets out the options side by side.</li>
</ol>
<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on some B-lender and private files. They are disclosed in writing on BCFSA's Form 1A before you commit.</p>

${callout("The test is about qualifying, not paying", "<p>You will pay your contract rate. The higher rate is used once, at approval. Knowing that takes some of the fear out of the process. It also shows why small changes to your debts can make a large difference.</p>")}

${cta({ title: "Want to know where you stand?", text: "Book a 15-minute call. You will leave knowing how the test affects you, which lenders fit and what to change first. Or <a href=\"/contact/\">contact Joshua</a> by email." })}
`;

export default {
  slug: "/mortgage-stress-test-canada/",
  h1: "The mortgage stress test in Canada: how it works, who it applies to and how to qualify for more",
  lede: "The stress test checks that you could pay a higher rate. A plain explanation with a worked example, who is covered, when it does not apply and what you can change.",
  crumbs: [["Home", "/"], ["Rates and how mortgages work", "/mortgage-rates-bc/"], ["The mortgage stress test", "/mortgage-stress-test-canada/"]],
  nav: "/resources/",
  body,
  faqs: [
    { q: "What is the mortgage stress test in Canada?", a: "It is a qualifying rule. At a federally regulated lender, you must qualify at the greater of your contract rate plus 2 percentage points and 5.25 percent. It limits how much you can borrow. You still pay your own contract rate. OSFI reviews the rule at least once a year, so check the current figures." },
    { q: "Does the stress test change the rate I pay?", a: "No. The higher rate is used only to decide how much you can borrow. Once approved, you pay the rate in your contract. The test just checks that you could still make the payments if rates rose." },
    { q: "Does the stress test apply to variable-rate mortgages?", a: "Yes, in the same way. Fixed and variable mortgages are both tested at the greater of the contract rate plus 2 percentage points and 5.25 percent. Choose between them on cost and risk, since neither gets an easier test." },
    { q: "Do I need to pass the stress test to renew?", a: "Not with your current lender, since a renewal there is not a new application. If you switch lenders on an uninsured mortgage without raising the balance, you may also be exempt. If you increase the loan or refinance, the test normally applies." },
    { q: "Do credit unions have to follow the stress test?", a: "OSFI's rule covers federally regulated lenders. Many credit unions are provincially regulated, and some follow similar rules while others use their own. Lenders vary, so ask each one how it qualifies you." },
    { q: "How can I qualify for a bigger mortgage?", a: "Pay down debts, add a co-borrower with income, put down more, use a longer amortization where allowed, or look at a lender that tests differently. Each has trade-offs. Joshua can show you what each one does to your numbers before you choose." }
  ]
};
