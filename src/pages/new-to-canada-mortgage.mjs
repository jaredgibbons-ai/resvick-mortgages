import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You arrived in British Columbia recently, as a permanent resident or on a work permit. You have a job, savings, and a credit history that was excellent in the country you came from and invisible here. You have heard that a mortgage needs years of Canadian credit and a large down payment, and that newcomers rent for a decade before anyone will lend to them. That is not the rule. Canada's mortgage insurers run programs built for exactly your file, and this page explains who qualifies, what the insurers accept in place of a Canadian credit history, how much down payment is needed and how Joshua, a BC mortgage broker and former underwriter, builds the application so it is submitted right the first time.</p>

<h2>Who qualifies</h2>
<p>The three mortgage insurers in Canada, CMHC, Sagen and Canada Guaranty, each have a newcomer program, and the lenders that use them follow the insurer's rules. The following is drawn from CMHC's and Sagen's published program pages, read October 30, 2026; the details change from time to time and Joshua confirms the current terms on every file.</p>
<ul>
<li><strong>Permanent residents</strong> have access to the insurers' full range of homeowner products, and CMHC states that no minimum period of residency is required.</li>
<li><strong>Work permit holders and other non-permanent residents</strong> who are legally authorized to work in Canada are eligible for homeowner loans, provided the home has one to four units with at least one unit owner-occupied and the purchase is not prohibited under the federal Prohibition on the Purchase of Residential Property by Non-Canadians Act. That Act has exemptions, including for many work permit holders, and your lawyer confirms your position under it.</li>
<li><strong>Minimum credit score:</strong> CMHC requires at least one borrower or guarantor to have a score of 600 or higher, where a Canadian score exists.</li>
<li><strong>Not eligible</strong> under Sagen's program: foreign diplomats and politically appointed foreign individuals who do not pay Canadian income tax.</li>
</ul>

<h2>How much down payment</h2>
<p>The insured minimums are the same as for anyone else buying in Canada. For a one- or two-unit home, the down payment is 5 percent of the first $500,000 of the price and 10 percent of the part above that, which allows financing up to 95 percent of the value. For three or four units, it is 10 percent. Insured purchases are available below the $1,500,000 price cap. The <a href="/down-payment-guide-bc/">down payment guide</a> has the tiers and the maths, and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> shows what a given income and down payment support once the stress test is applied.</p>
<p>The down payment can come from savings, the proceeds of selling a home elsewhere, or a non-repayable gift from a relative. Funds transferred from abroad are acceptable, and the proof is the part newcomers find hardest: lenders want to see where the money was before it arrived in Canada, which usually means statements from the originating account, the transfer record and the Canadian deposit. Start gathering those statements before you have found a home. Some lenders also want the funds in a Canadian account for a period before closing, and CMHC does not allow non-traditional borrowed down payments for non-permanent residents.</p>

<h2>What replaces a Canadian credit history</h2>
<p>This is the heart of the programs. When a Canadian credit report is thin or absent, the insurers accept alternatives, and the lender chooses which it will take:</p>
<ul>
<li><strong>An international credit report</strong> from a recognized bureau in your country of origin.</li>
<li><strong>A reference letter from your bank at home</strong>, confirming your banking history.</li>
<li><strong>Twelve months of payment history</strong> from documents such as rent receipts, utility bills, phone bills, insurance, childcare or regular savings deposits. Sagen's published list treats rent as one example among several, and at 90 percent loan-to-value or less, six months of statements from your primary account may be enough.</li>
</ul>
<p>Two things follow. First, start a Canadian credit file as soon as you arrive, because even a short history helps and some lenders prefer it. The <a href="/build-credit-for-a-mortgage/">credit building page</a> explains how, with a secured card and a small line of credit paid on time. Second, keep paying every bill from a Canadian account from the first month, because those statements may become your credit history.</p>

<h2>Income</h2>
<p>Lenders need Canadian employment income. A permanent job with a letter of employment and pay stubs is the strongest file; probation is accepted by some lenders and not others. A fixed-term contract is counted by many lenders when the employer is established. Self-employment income usually needs a Canadian history, which newcomers rarely have, so a newly arrived business owner is often better served by a B lender or by waiting a year. Income from abroad is generally not counted for a Canadian mortgage, though it can explain the source of savings. The <a href="/mortgage-application-checklist/">application checklist</a> covers the standard documents, and for a newcomer file add your permanent resident card or confirmation, or your work permit, and your SIN.</p>

<h2>If the file is short somewhere</h2>
<p>A newcomer file that falls just short on income or credit has a common fix: a family member already established in Canada who co-signs or guarantees the mortgage. The <a href="/mortgage-with-a-cosigner/">co-signer page</a> explains the three roles, what the helper is agreeing to and how they are released later. A larger down payment is the other lever, since a purchase at 80 percent loan-to-value or less does not need insurance and opens up different lenders, including some that take a broader view of international income and credit.</p>

<h2>Programs that reduce your cash to close</h2>
<p>Newcomers who have not owned a home anywhere in the world are first-time buyers under most Canadian programs, and the savings are real. The First Home Savings Account is available to Canadian residents aged 18 and over who are first-time buyers and allows tax-deductible contributions that come out tax-free for a purchase. The Home Buyers' Plan lets you withdraw from an RRSP. In BC, the first-time buyers' property transfer tax exemption applies to permanent residents and Canadian citizens who have lived in BC for a qualifying period, among other conditions, so work permit holders should not assume it applies. The <a href="/first-time-buyer-programs-bc/">programs and stacking guide</a> explains each one and the order to use them in, and the <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> covers the whole process from pre-approval to possession.</p>

<h2>Joshua's process for a newcomer file</h2>
<ol>
<li><strong>A 15-minute call</strong> about your status, your income, your savings and where they are.</li>
<li><strong>A document plan.</strong> Newcomer files are won on paperwork: the foreign bank statements, the transfer records, the international credit report or bank letter, the employment letter. Joshua tells you exactly what to gather and in what form.</li>
<li><strong>Lender selection.</strong> Lenders differ on probation, on which credit alternatives they accept and on foreign funds. The file goes to one whose policy fits, and you see the options in a written Lender Comparison Report.</li>
<li><strong>A clean submission</strong>, with every unusual item explained before the lender asks.</li>
<li><strong>Aftercare.</strong> After funding, the relationship continues, which matters for a newcomer whose income and credit will look very different at renewal.</li>
</ol>

<h2>What the service costs</h2>
<p>On an insured newcomer mortgage placed with a mainstream A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private files, and in BC they are disclosed in writing on BCFSA's Form 1A before you commit. Mortgage insurance itself carries a premium, which is added to the mortgage; the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> shows the amount.</p>

${callout("Languages", "<p>Joshua serves clients across BC in English. If you would prefer to bring a family member or friend to translate during the call, you are welcome to, and the written Lender Comparison Report gives you something to review in your own time.</p>")}

${cta({ title: "New to Canada, ready to buy", text: "Book a 15-minute call. Joshua will confirm which program fits your status, what to gather for the down payment and credit history, and what you can afford once the stress test is applied. Or <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/new-to-canada-mortgage/",
  h1: "New to Canada? Your mortgage guide for PRs and work permit holders in BC",
  lede: "Canada's insured newcomer programs accept international credit and alternative proof, with a down payment from 5 percent. Who qualifies, what to gather and how the file is built.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["New to Canada mortgage", "/new-to-canada-mortgage/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "Can I get a mortgage in BC on a work permit?", a: "Yes. CMHC and Sagen both allow work permit holders who are legally authorized to work in Canada to use their insured homeowner programs, for a one- to four-unit home with at least one unit owner-occupied, as long as the purchase is permitted under the federal non-Canadian purchase prohibition. Your lawyer confirms the prohibition's exemptions for your status." },
    { q: "How much down payment does a newcomer need?", a: "The same as any insured buyer: 5 percent of the first $500,000 and 10 percent of the rest for a one- or two-unit home, below the $1.5 million cap. The money can come from savings, a home sale abroad or a gift from a relative. Funds from overseas are fine, but the paper trail from the original account to Canada must be complete." },
    { q: "I have no Canadian credit history. What do lenders accept instead?", a: "The insurer programs accept an international credit report, a reference letter from your bank in your home country, or twelve months of payment history from documents such as rent, utilities, phone, insurance or regular savings. Lenders choose which they take. Starting a Canadian credit file right away with a secured card also helps." },
    { q: "Do I count as a first-time buyer in BC if I owned a home abroad?", a: "Usually not for the federal programs, which define a first-time buyer as someone who has not owned a home anywhere in the world in the relevant period. The BC transfer tax exemption has its own conditions, including residency and citizenship or permanent residence. Each program's rules apply separately, and Joshua checks each one against your history." },
    { q: "Will my income from my home country count?", a: "Generally no. Canadian lenders need Canadian employment income, documented with a letter of employment and pay stubs. Foreign income can help explain the source of your savings, but it is not used to qualify. A permanent job here, even a recent one, is the foundation of a newcomer file." }
  ]
};
