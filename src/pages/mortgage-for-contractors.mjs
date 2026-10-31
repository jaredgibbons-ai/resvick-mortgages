import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You are an electrician who invoices three general contractors, a framer whose work stops when the rain starts, a heavy-equipment operator on a six-month contract, or a plumber who incorporated two years ago on your accountant's advice. Your bank account looks healthy, your trucks are paid for, and you have more work than you can take. But the bank asked for a T4 you do not have, or looked at a tax return that shows a fraction of what you earn because your accountant did a good job, and the answer came back smaller than your apprentice would get on a salary. This page explains how lenders read contractor and tradesperson income in British Columbia, what proof settles the question, and how Joshua, a former underwriter, builds the file so that the income you actually earn is the income that gets counted.</p>

<h2>First question: how are you paid?</h2>
<p>Lenders care less about your trade than about the form of your income. There are four common shapes, and each is underwritten differently.</p>
<ul>
<li><strong>Hourly employee with a T4.</strong> If you are on a company's payroll, even with seasonal layoffs, you are an employee. Lenders count base pay in full and look for a two-year average when hours vary. Seasonal gaps are normal in the trades, and a lender that knows the industry reads a two-year T4 history as stable work even with a winter layoff in each year.</li>
<li><strong>Sole proprietor or subcontractor paid by invoice.</strong> You are self-employed. Lenders want two years of T1 returns with the business statement, notices of assessment and often the business bank statements. The figure they use is the net income after expenses, which is usually lower than your gross billings.</li>
<li><strong>Your own corporation.</strong> Lenders look at the corporate financial statements and at what you pay yourself in salary and dividends. Some lenders add back certain non-cash expenses or consider a share of retained earnings; policies vary, which is why the choice of lender matters.</li>
<li><strong>Fixed-term contracts.</strong> A contract with a named employer and a renewal history is counted by many lenders as employment income, especially when it has renewed at least once. A first contract with no history is treated more cautiously.</li>
</ul>
<p>The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers the self-employed shapes in depth, including how dividends, salary and the two-year rule interact.</p>

<h2>The gap between what you earn and what you declare</h2>
<p>Tradespeople are often very good at expenses. Vehicle, tools, fuel, home office, capital cost allowance on equipment: every legitimate deduction lowers the net income on your return, and the net income is what an A lender uses. A contractor who grosses $180,000 and nets $70,000 on paper is, to an A lender, a $70,000 borrower. That is not a mistake by the lender; it is the trade-off of the tax strategy. There are three ways to handle it.</p>
<ol>
<li><strong>Use an A lender that adds back.</strong> Some A lenders add back capital cost allowance and certain other non-cash items, and some apply a gross-up to self-employed income. The adjustments differ by lender and change the qualifying figure meaningfully.</li>
<li><strong>Use a stated-income program.</strong> Certain lenders, mostly B lenders and some insured programs, will consider income that is reasonable for your trade and supported by bank deposits and invoices rather than by the tax return alone. The <a href="/stated-income-mortgage/">stated income page</a> explains how these programs work, what reasonable means to a lender and what they cost.</li>
<li><strong>Plan the tax year before you buy.</strong> If a purchase is a year or two away, declaring more income now, in consultation with your accountant, raises what every lender will count later. It also raises your tax bill, so it is a decision to make deliberately.</li>
</ol>

<h2>New in business</h2>
<p>If you went out on your own less than two years ago, most A lenders will not count the business income yet, regardless of how well it is going. There are routes: a lender that accepts one year with a strong prior history in the same trade, a B lender, a co-signer, or a larger down payment. The <a href="/newly-self-employed-mortgage/">newly self-employed page</a> walks through them. A journeyperson who was employed for eight years and incorporated last year is a stronger file than the two-year rule suggests, and the file should say so.</p>

<h2>The documents</h2>
<p>The general list is on the <a href="/mortgage-application-checklist/">mortgage application checklist</a>. For a trades file, expect to provide:</p>
<ul>
<li>Two years of T1 returns with the statement of business activities, or two years of corporate financial statements, plus notices of assessment.</li>
<li>Six to twelve months of business bank statements, which show the deposits behind the invoices.</li>
<li>Proof of your trade qualification where it supports stability, such as a Red Seal or a provincial certificate of qualification.</li>
<li>Your business licence, GST number and, for a corporation, the articles of incorporation.</li>
<li>Current contracts or a list of regular clients, when the work is contract-based.</li>
<li>Confirmation that CRA balances are paid. Unpaid tax is one of the most common reasons a trades file stalls, because lenders will not fund while CRA has a claim.</li>
</ul>

<h2>Seasonal income and the stress test</h2>
<p>Seasonal work is not a problem in itself. A lender averages it across the year and across two years, and a roofer with a consistent April-to-November pattern is a predictable borrower. What lenders dislike is a year with no explanation for a gap, or income that is trending down. The <a href="/mortgage-calculators/#affordability">affordability calculator</a> applies the qualifying rate and the standard ratios to whatever income figure you enter, so it is worth running it twice: once with the net figure from your return and once with the figure a stated-income or add-back lender might use. The difference is the amount that depends on lender choice and on how the file is presented.</p>

<h2>Joshua's process for a contractor file</h2>
<ol>
<li><strong>A 15-minute call</strong> about how you are paid, how long you have been at it and what the returns show.</li>
<li><strong>An underwriter's read of the income.</strong> Joshua works out the figure each lender type would use before anything is submitted, and tells you plainly where the file is strong and where it is thin.</li>
<li><strong>Lender selection.</strong> A lenders with add-backs, insured programs for the self-employed, B lenders with stated-income options: the file goes to the one that fits, and you see the options side by side in a written Lender Comparison Report.</li>
<li><strong>Fee honesty.</strong> On an A-lender mortgage the lender pays the broker and you pay nothing. On a B-lender or private file, lender fees are normal and a broker fee can apply, and both are disclosed in writing on BCFSA's Form 1A before you commit. You will know the cost of each route before you choose it.</li>
<li><strong>A clean submission.</strong> Returns, statements and explanations organized so the lender's underwriter has no reason to pause.</li>
</ol>

<h2>The traps</h2>
<ul>
<li><strong>Buying a new truck before you apply.</strong> A vehicle loan can cut an approval by tens of thousands of dollars, and the trades buy a lot of trucks.</li>
<li><strong>Unfiled or unpaid taxes.</strong> No notice of assessment, no mortgage at most lenders. Arrears must usually be cleared before funding.</li>
<li><strong>Cash work.</strong> Income that is not declared cannot be counted, and bank deposits with no invoices behind them raise questions rather than answer them.</li>
<li><strong>Changing structure mid-application.</strong> Incorporating, or moving from employee to contractor, resets the clock at many lenders. Do it after closing, or plan for it.</li>
<li><strong>Treating one bank's figure as the answer.</strong> The spread between lenders on self-employed income is the widest in the business.</li>
</ul>

${callout("Why the underwriting years matter for the trades", "<p>An underwriter looks at a contractor's file and asks whether the income is real, whether it will continue and whether it has been declared. Joshua answers those questions in the application itself, with the bank statements, the contracts and the trade qualification lined up beside the tax return, so the lender reads the business the way you do.</p>")}

${cta({ title: "Your returns do not tell the whole story", text: "Book a 15-minute call. Joshua will tell you what each lender type would count, what it would cost, and whether to apply now or plan the next tax year first. Or <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/mortgage-for-contractors/",
  h1: "Mortgages for contractors and tradespeople in BC",
  lede: "Contract income, seasonal work and your own corporation. How lenders read a trades file, how to prove the income you actually earn, and which lender type fits which situation.",
  crumbs: [["Home", "/"], ["Self-employed", "/self-employed-mortgage-bc/"], ["Mortgages for contractors and tradespeople", "/mortgage-for-contractors/"]],
  nav: "/self-employed-mortgage-bc/",
  body,
  faqs: [
    { q: "Can a contractor get a mortgage with one year of self-employment?", a: "At most A lenders, no; they want two years of returns. Some accept one year when you worked in the same trade as an employee before, and B lenders are more flexible. A larger down payment or a co-signer can also bridge the gap. The newly self-employed page explains each route and what it costs." },
    { q: "Do lenders use my gross billings or my net income?", a: "A lenders use the net income on your tax return after expenses, which is often much lower than your billings. Some add back items such as capital cost allowance or apply a gross-up. Stated-income programs at some lenders consider a figure that is reasonable for your trade and supported by bank deposits, usually at a higher rate or with fees." },
    { q: "Does seasonal layoff hurt a tradesperson's mortgage application?", a: "Not by itself. Lenders average seasonal income over the year and over two years, and a consistent pattern reads as stable work. What hurts is an unexplained gap or income that is trending down. Two years of T4s or returns with the same seasonal rhythm is a normal trades file." },
    { q: "I pay myself dividends from my corporation. How is that counted?", a: "Lenders look at your corporate financial statements and at the salary and dividends you take, usually averaged over two years. Some consider a portion of retained earnings as well, and policies differ widely. A broker can tell you which lenders read a corporate file most favourably before you apply." },
    { q: "What does it cost to use a broker as a contractor?", a: "On a mortgage placed with an A lender, the lender pays the broker and you pay nothing. On a B-lender or private file, which some contractor files need, lender fees are normal and a broker fee can apply; both are disclosed in writing on BCFSA's Form 1A before you commit. You see the cost of each route before you choose." }
  ]
};
