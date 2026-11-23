import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "A student loan does not stop you from getting a mortgage. Lenders count the payment as a debt. Interest-free federal loans are still debts, and a loan you are not paying yet can still be counted with a calculated payment.",
  who: "Recent graduates, first-time buyers with student debt, and parents or partners who carry one. Worried about credit more broadly? See the <a href='/build-credit-for-a-mortgage/'>credit-building page</a>.",
  next: "Find your current balance and monthly payment, then run the <a href='/mortgage-calculators/#affordability'>affordability calculator</a> with and without it."
})}

<h2>Your situation</h2>
<p>You finished school, you started working, and you want to buy a home. Then you remember the loan. Maybe it is a few thousand dollars. Maybe it is a lot more. Either way, you wonder if it will hold you back.</p>
<p>For most people, it will not stop a mortgage. It will change how much you can borrow, a little or a lot, depending on the payment. It helps to know exactly how a lender sees it. Then you can make a plan instead of guessing. If this is your first purchase, the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> covers the whole path.</p>

<h2>What lenders do with a student loan</h2>
<p>A lender adds up your monthly debt payments and compares them to your income. This is called your debt service ratio. A student loan payment goes into that total, the same as a car loan or a credit card payment. The higher the total, the less room you have for a mortgage payment.</p>
<p>Here is how it often works. If your loan is in repayment, the lender uses your actual payment, shown on a statement. Sometimes the loan is not in repayment yet, such as while you are in school or in a grace period. Many lenders still count a calculated payment based on the balance. The method varies by lender, so it is worth asking before you apply.</p>
<p>Student loans also show up in other ways. A student line of credit from a bank usually appears on your credit report, like any other credit. Government loans may not always show the same way. Joshua pulls your report with your permission and checks how each debt appears.</p>

<h2>Interest-free does not mean payment-free</h2>
<p>Federal student loans changed in recent years. The federal government permanently ended interest on Canada Student Loans and Canada Apprentice Loans starting April 1, 2023. In BC, interest on the provincial part of a BC student loan ended on February 19, 2019. So many borrowers no longer pay interest on the government part of their loan.</p>
<p>That is good news for your total cost. But it does not change the way a lender counts the debt. A loan with no interest still has a balance and a payment. If you owe the money, it counts. Private bank loans and student lines of credit are different. They still charge interest, and they are often more costly.</p>
<p>Check your own loan details with the National Student Loans Service Centre or StudentAid BC. Rules and programs change, and your loans may include older amounts from before the changes.</p>

<h2>Ways to improve your numbers</h2>
<p>You have more options than you may think. Which one fits depends on your balance, your payment and your plans. Joshua can run each option on your file.</p>
<ul>
<li><strong>Pay it down before you apply.</strong> If the balance is small, paying it off removes the payment from your ratio. It may free up more borrowing room than the same money would add as a down payment. Run both.</li>
<li><strong>Ask about a repayment assistance plan.</strong> The federal and provincial programs can lower the monthly payment if your income is modest. A lender may use the lower payment if it appears on an official statement. Not every lender does.</li>
<li><strong>Do not stop paying.</strong> A missed student loan payment can hurt your credit. Even a small late payment on your file can limit your lender choices.</li>
<li><strong>Be careful with consolidation.</strong> Combining a government loan with a high-interest loan can raise your cost. Check what you would give up first, such as interest-free status and assistance programs.</li>
<li><strong>Add a co-borrower.</strong> A spouse or partner with strong income may raise the amount you can borrow. Both people's debts count, so it only helps if the second income is larger than the second debts. See the <a href="/co-buying-a-home/">co-buying page</a>.</li>
</ul>

<h2>Student debt and your down payment</h2>
<p>Many people with student loans wonder if they should save for the down payment or pay the loan. There is no single answer. Some points can help you decide:</p>
<ul>
<li>BC and federal programs give first-time buyers real help. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> covers them, including the registered account that lets you save for a home with tax benefits.</li>
<li>A very small down payment means mortgage insurance, which adds to your cost. The <a href="/buying-with-5-percent-down/">5 percent down page</a> explains it.</li>
<li>A loan with no interest costs less to carry than a mortgage, so some buyers keep it and put the cash toward the home. Others pay it off to improve their ratio. The right choice depends on how close you are to the limit.</li>
</ul>
<p>The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/how-much-mortgage-can-i-afford/">affordability page</a> will help you work through the numbers.</p>

<h2>Common mistakes</h2>
<ol>
<li><strong>Not knowing the payment.</strong> Many people only know the balance. The lender needs the monthly figure on a statement.</li>
<li><strong>Paying off the loan with the down payment money</strong> without checking whether the lender needed more cash for closing costs. See <a href="/closing-costs-bc/">closing costs</a>.</li>
<li><strong>Opening new credit before you apply.</strong> A new car loan or card changes your ratio and credit score. The <a href="/car-loan-affecting-mortgage/">car loan page</a> shows how.</li>
<li><strong>Assuming a parent's loan is not yours.</strong> If you co-signed a student loan for someone, the lender may count it.</li>
<li><strong>Waiting until you find a home.</strong> The best time to fix a debt problem is months before you make an offer.</li>
</ol>

<h2>How Joshua helps</h2>
<ol>
<li><strong>A 15-minute call</strong> about your income, your loan and your timeline.</li>
<li><strong>Your numbers with and without the loan.</strong> You see how much the payment costs you in borrowing power.</li>
<li><strong>A lender match.</strong> Lenders count student loans in different ways, and some are more flexible than others.</li>
<li><strong>A plan for the next six to twelve months</strong>, if you are not ready yet. That might be paying a balance, building credit or saving more.</li>
</ol>
<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on some B-lender and private files. They are disclosed in writing on BCFSA's Form 1A before you commit.</p>

${callout("Know the payment, not only the balance", "<p>Lenders use a monthly payment figure. Before your call, log in to your loan account and write down the balance and the monthly payment. If the loan is not in repayment yet, note that too. It takes five minutes and makes the first answer faster.</p>")}

${cta({ title: "Have student debt and want to buy?", text: "Book a 15-minute call. You will leave with your borrowing power with and without the loan, and a plan for the next step. Or <a href=\"/contact/\">contact Joshua</a> by email." })}
`;

export default {
  slug: "/student-loans-and-your-mortgage/",
  h1: "Student loans and your mortgage in BC: how lenders count the debt and what to do about it",
  lede: "A student loan does not rule out a mortgage. How lenders count the payment, what interest-free loans change, and ways to improve your numbers before you apply.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Student loans and your mortgage", "/student-loans-and-your-mortgage/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "Can I get a mortgage in BC with student loans?", a: "Yes. Lenders count the monthly payment as a debt, and it lowers how much you can borrow. It does not rule you out. A loan in good standing with on-time payments can even help your credit. A broker can show you how much it costs in borrowing power." },
    { q: "Do interest-free student loans count against me?", a: "Yes. Federal Canada Student Loans have had no interest since April 1, 2023, and the provincial part of BC loans since February 19, 2019. A loan with no interest still has a balance and a monthly payment, and lenders count it. Private student loans and lines of credit still charge interest." },
    { q: "What if my student loan is not in repayment yet?", a: "Many lenders still count a calculated payment based on the balance, even while you are in school or in a grace period. The method varies by lender. Ask before you apply, so the number does not surprise you." },
    { q: "Should I pay off my student loan before buying a home?", a: "It depends. Paying a small balance can free up more borrowing room than the same cash would add to a down payment. A large loan with no interest may be better to keep. Run both on your own numbers, since the answer depends on how close you are to the lender's limit." },
    { q: "Does a repayment assistance plan help me qualify?", a: "It may. A lower monthly payment means a lower debt ratio, and some lenders will use the lower figure when it appears on an official statement. Others use their own method. Joshua can tell you which lenders accept it." },
    { q: "Does a student loan hurt my credit score?", a: "Not by itself. Paying on time can help. Missed payments hurt, and a collections account is a serious problem for a mortgage. If your student debt is in arrears, fix it before you apply." }
  ]
};
