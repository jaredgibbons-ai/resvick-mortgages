import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You have a posting message with a report-for-duty date, a house to sell in another province, and a few weeks of house-hunting leave to find the next one in a market you have never shopped in. Or you are releasing after a full career and want to settle in British Columbia on a pension and a new civilian job that has not started yet. Either way, the timeline is set by someone else, and the mortgage has to fit it. Joshua Resvick is a BC mortgage broker and a former underwriter, and this page is about buying on a military schedule: what lenders count, how the relocation program interacts with a mortgage, and how to arrange financing so the dates line up.</p>

<h2>How lenders see military income</h2>
<p>Regular Force pay is among the cleanest income a lender sees: a published pay scale, a federal employer and a long history. Lenders count base pay in full. Allowances are where policy varies. Some lenders count ongoing allowances such as a post living differential or specialist pay when they appear on your pay statement and are expected to continue; others treat them as variable and want a two-year history, and some exclude them. Reserve Force pay is treated more like contract or variable income and usually needs a history. If you have a civilian job as well, it is documented separately.</p>
<p>For veterans, the question is what replaces the salary. A Canadian Armed Forces pension is permanent income and lenders count it in full with the award letter and bank deposits as proof. A new civilian job counts with an offer letter and, at some lenders, a probation condition. Disability benefits paid monthly can be counted by many lenders with proof of the amount and its duration, though policies differ and non-taxable income is sometimes grossed up and sometimes not. These are lender norms rather than published rules, and the right lender is the one whose policy fits your mix.</p>

<h2>The relocation program and your mortgage</h2>
<p>Postings are supported by the Canadian Armed Forces relocation program, administered through a contracted relocation services provider. The program covers certain costs of selling and buying on a posting, within its own rules, and it is not a mortgage product. Two points matter for financing. First, the program's reimbursement of costs such as legal fees or real estate commission does not change what a lender needs from you for the down payment, which must still be documented from your own sources, from the sale of your current home, or from a gift. Second, the posting timeline often forces a purchase before the old home has sold, which is where bridge financing comes in. This page describes the program in general terms only; the current policy and what it covers for your move come from the relocation provider and your orderly room, not from a mortgage broker.</p>

<h2>Buying on a posting schedule</h2>
<ol>
<li><strong>Pre-approval before house-hunting leave.</strong> A real <a href="/mortgage-pre-approval-bc/">pre-approval</a>, with your documents reviewed, means you can write an offer during a short visit with confidence. A rate quote is not the same thing.</li>
<li><strong>A rate hold that matches the timeline.</strong> Lenders commonly hold a rate for 90 to 120 days, and the <a href="/mortgage-rate-hold/">rate hold page</a> explains what a hold does and does not cover. If your report date is further out than the hold, Joshua plans the application timing so the hold covers the closing.</li>
<li><strong>Bridging the gap between two closings.</strong> If the new home closes before the old one sells, <a href="/bridge-financing/">bridge financing</a> covers the down payment for a short period, usually only when the sale is firm. Bridge loans are offered by the lender providing the new mortgage, carry interest and a fee, and are short by design.</li>
<li><strong>Closing from a distance.</strong> Documents can be signed remotely with a BC lawyer or notary in most cases, and Joshua coordinates the lawyer, the lender and the realtor so that a closing date set by a posting message is met.</li>
</ol>

<h2>Documents specific to your file</h2>
<ul>
<li><strong>Your posting message</strong>, which confirms the move, the unit and the report date.</li>
<li><strong>Pay statements and a letter from your unit or a release from the pay system</strong> confirming rank, pay level and any ongoing allowances.</li>
<li><strong>T4s and notices of assessment</strong> for the last two years.</li>
<li><strong>For veterans:</strong> the pension award letter, bank statements showing deposits, the offer letter for any civilian job, and benefit letters for any income you want counted.</li>
<li><strong>For the sale of your current home:</strong> the listing, the accepted offer once you have one, and your current mortgage statement, so the equity available for the next down payment can be confirmed.</li>
</ul>
<p>The general list is on the application checklist, and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> is the place to see how pension income, a new salary and existing debts combine under the stress test.</p>

<h2>Releasing and settling in BC</h2>
<p>Veterans often ask whether to buy before or after the civilian job starts. Lenders prefer income that has started, and a pension that already pays is stronger than an offer letter alone. Where the pension carries the file on its own, buying before the new job starts is straightforward. Where the civilian salary is needed, most lenders want the offer letter and a start date, and some want a first pay stub. The right order depends on the numbers, and it is a question for the first call. For a first purchase, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the programs available in BC, including the transfer tax exemption and the First Home Savings Account, which apply to veterans as to anyone else who qualifies.</p>

<h2>The traps</h2>
<ul>
<li><strong>Writing an offer on a quote.</strong> A posting leaves no time to recover from a pre-approval that was never really checked.</li>
<li><strong>Letting the rate hold expire before closing.</strong> Long timelines need a hold that matches, or a plan to re-apply.</li>
<li><strong>Assuming the relocation program replaces the down payment.</strong> It reimburses certain costs; it is not equity.</li>
<li><strong>Bridging on an unsold home.</strong> Most lenders bridge only against a firm sale. If the old home is not sold, the plan has to be different, and Joshua will say so.</li>
<li><strong>Leaving allowances off the application.</strong> If an allowance is ongoing and documented, a lender that counts it may be the difference. Ask rather than assume.</li>
</ul>

<h2>Rates and the cost of the service</h2>
<p>The rate you qualify for depends on your down payment, credit, property and lender. On a mortgage placed with a mainstream A lender, which is where military and pension income almost always lands, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, disclosed in writing on BCFSA's Form 1A before you commit. There is no government-backed military mortgage program in Canada, nothing like the US VA loan; a few lenders offer affinity packages for the defence community, so it is worth asking. The real advantage is in a lender reading your income correctly and in timing the file to the posting.</p>

${callout("Serving clients anywhere in BC", "<p>Postings land people in Esquimalt, Comox, Chilliwack and everywhere in between. Joshua works online and by phone from his Surrey office, so the process is the same whether you are buying on Vancouver Island, in the Fraser Valley or in the Interior, and whether you are calling from your current base or from a hotel on house-hunting leave.</p>")}

${cta({ title: "Buying on a posting timeline?", text: "Book a 15-minute call before your house-hunting trip. Joshua will confirm what you qualify for, line up a rate hold that covers the closing and plan the bridge if you need one. Or <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/mortgages-for-military-and-veterans/",
  h1: "Mortgages for military members and veterans in BC: postings and relocations",
  lede: "Posted to BC, or leaving the Forces and settling here? How lenders read military and pension income, how the relocation timeline fits a mortgage, and how to make the dates line up.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Mortgages for military and veterans", "/mortgages-for-military-and-veterans/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "Is there a special mortgage program for Canadian military members or veterans?", a: "Not a government-backed one. Canada has no equivalent of the US VA loan, though a few lenders offer affinity packages for the defence community, so it is worth asking. Otherwise military members and veterans use the same mortgages as everyone else. The relocation program reimburses certain moving and transaction costs on a posting within its own rules, but it is not a mortgage and does not replace a down payment. Lenders do treat Regular Force pay and CAF pensions as strong income." },
    { q: "Can I get a mortgage on my CAF pension alone?", a: "Often, yes. A Canadian Armed Forces pension is permanent income, and lenders count it in full with the award letter and bank deposits as proof. Whether it carries the mortgage on its own depends on the amount, your debts and the stress test. The affordability calculator shows the figure, and a lender confirms it." },
    { q: "How do I buy in BC before my current home sells?", a: "With bridge financing, which covers the down payment for a short period between the two closings. Most lenders bridge only when the sale of your current home is firm, charge interest plus a fee, and provide the bridge alongside the new mortgage. If the old home has not sold, the plan needs to be different, and that is worth knowing early." },
    { q: "Do lenders count military allowances?", a: "It depends on the lender and the allowance. Ongoing allowances shown on your pay statement are counted by some lenders, treated as variable income needing a history by others, and excluded by a few. Base pay is counted in full everywhere. Tell your broker which allowances you receive so the file goes to a lender that counts them." },
    { q: "How long will a lender hold a rate while I wait for my posting date?", a: "Rate holds commonly run 90 to 120 days, and some lenders offer longer holds for specific situations. If your closing is further out than the hold, your broker times the application so that the hold covers the closing, or plans a second application. A hold protects you against rate increases and, at many lenders, still lets you take a lower rate if rates fall before closing; confirm the float-down terms." }
  ]
};
