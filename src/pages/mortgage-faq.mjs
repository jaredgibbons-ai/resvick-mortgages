import { short } from "../lib/short.mjs";
import { cta } from "../lib/site.mjs";

const body = `
${short({
  answer: "Twenty-six plain answers to the questions BC buyers, renewers and refinancers ask most. Each one links to the page that goes deeper.",
  who: "Anyone who wants a straight answer before booking a call, or who is comparing brokers.",
  next: "Find your question below, or <a href=\"/contact/\">book a 15-minute call</a> if yours isn't here."
})}
<h2>How to use this page</h2>
<p>The questions are grouped by what you're doing. Open any one to read the answer, then follow the link if you want the full explanation. Everything here is general information about BC mortgages. Your own file can change the answer, which is what the call is for.</p>
<p>Rules and figures were checked against the sources named on each linked page. Where lenders differ, the answer says so. Where a rule has a date, the linked page shows it.</p>

<h2>Working with a broker</h2>
<p>Start here if you're wondering who Joshua is and what it costs. The short version is that a broker on an A-lender mortgage is paid by the lender, and any borrower fee on other files must be shown to you in writing first. The <a href="/how-mortgage-brokers-get-paid/">page on how brokers get paid</a> has the full picture, and <a href="/mortgage-broker-vs-bank/">broker versus bank</a> compares the two routes side by side.</p>

<h2>Buying a home</h2>
<p>Buyers usually have the same first questions: how much cash, what a pre-approval really is, and which programs stack. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> walks the whole path in order. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs page</a> turn the rules into your own numbers.</p>

<h2>Renewing or switching</h2>
<p>A renewal letter is one lender's offer, and the timing matters more than most people expect. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline, and the <a href="/switch-mortgage-lenders-at-renewal/">switching page</a> explains what a new lender will check.</p>

<h2>Income, credit and co-signers</h2>
<p>If your pay isn't a simple salary, or your credit has a mark on it, the right lender matters more than the rate. See the <a href="/self-employed-mortgage-bc/">self-employed hub</a>, the <a href="/bad-credit-mortgage-bc/">credit page</a> and the <a href="/b-lender-mortgage-bc/">B lender page</a>.</p>

<h2>Refinancing, equity and rentals</h2>
<p>Borrowing against your home has hard limits that depend on the product. The <a href="/refinance-mortgage-bc/">refinance guide</a>, the <a href="/heloc-bc/">HELOC page</a> and the <a href="/investment-property-mortgages-bc/">investment property page</a> cover them.</p>

${cta({ title: "Didn't see your question?", text: "Book a 15-minute call with Joshua. Ask it out loud and you'll get an answer for your own situation, not a general one." })}
`;

export default {
  slug: "/mortgage-faq/",
  h1: "Mortgage questions answered: a BC broker's FAQ",
  lede: "The questions BC buyers, renewers and refinancers ask most, answered in plain language by a licensed broker who used to work as an underwriter.",
  crumbs: [["Home", "/"], ["Mortgage FAQ", "/mortgage-faq/"]],
  nav: "/resources/",
  body,
  faqs: [
    { q: "How much does a mortgage broker cost in BC?", a: "Nothing on a mortgage placed with an A lender, because the lender pays the broker. Fees can apply on some B-lender and private files. If one does, BC rules require you to see the amount in writing, on BCFSA's Form 1A, before you commit. See <a href=\"/how-mortgage-brokers-get-paid/\">how brokers get paid</a>." },
    { q: "Can a broker get a better rate than my bank?", a: "No broker can promise that. What a broker can do is price your file with several lenders and put the results next to your bank's offer, including the penalty method and prepayment terms. Then you choose with the facts in front of you. The <a href=\"/mortgage-broker-vs-bank/\">broker versus bank page</a> compares the two." },
    { q: "How do I check that Joshua is licensed?", a: "Use the BCFSA public lookup for mortgage brokers. Joshua's broker licence is MB503619, and Xeva Mortgage's brokerage licence is X300203. It takes a minute, and it's worth doing for any broker you meet. More on the <a href=\"/about-joshua-resvick/\">about page</a>." },
    { q: "Do I have to visit the Surrey office?", a: "No. Most clients work with Joshua by phone, email, video and secure document links from anywhere in BC. If you'd like to meet in person, that can be arranged by appointment at the Surrey office. The <a href=\"/contact/\">contact page</a> has the details." },
    { q: "What happens on the first call?", a: "It runs 15 minutes. Joshua asks about your goals and your numbers, explains your options and tells you what to gather next. There is no obligation. A credit check happens later, and only with your written permission. <a href=\"/contact/\">Book a time here</a>." },
    { q: "What is the minimum down payment in BC?", a: "For a home priced under $1,500,000, it is 5 percent of the first $500,000 plus 10 percent of the rest. On $750,000 that comes to $50,000. At $1,500,000 or more, the minimum is 20 percent. The <a href=\"/down-payment-guide-bc/\">down payment guide</a> works out any price." },
    { q: "What is the difference between pre-qualification and pre-approval?", a: "A pre-qualification is an estimate from numbers you supply, and nothing is checked. A pre-approval means a lender has reviewed your income documents, credit and down payment. Only the second is something to lean on when you write an offer. See <a href=\"/mortgage-pre-approval-bc/\">pre-approval in BC</a>." },
    { q: "Does a pre-approval guarantee I'll get the mortgage?", a: "No. It depends on the property passing the lender's review and on your finances staying the same until closing. An appraisal, strata documents, a job change or a new debt can all change the result, so the lender looks at the file again before it funds." },
    { q: "Can I use the FHSA and the Home Buyers' Plan together?", a: "Yes, for the same qualifying home, if you meet each program's conditions when you withdraw. The FHSA allows $40,000 over its lifetime and the Home Buyers' Plan allows $60,000 per person. Each has its own timing and repayment rules. See the <a href=\"/guides/fhsa-and-home-buyers-plan-together/\">guide on using both</a>." },
    { q: "Do I need cash for closing costs on top of my down payment?", a: "Yes. Closing costs are separate from the down payment and normally go through your lawyer or notary on completion day. The default insurance premium is the main exception, because it can be added to your mortgage. The <a href=\"/closing-costs-bc/\">closing costs page</a> has a calculator." },
    { q: "Can my parents gift me part of my down payment?", a: "Yes. Parents are the most commonly accepted source of a gift. Expect to provide a signed gift letter saying no repayment is expected, plus statements that show the money moving to your account. Lender rules vary, so confirm yours first. See the <a href=\"/gifted-down-payment/\">gifted down payment page</a>." },
    { q: "When should I start shopping for my renewal?", a: "About 120 days before your term ends. Many lenders will hold a rate for roughly that long, while the renewal letter itself may arrive only about 21 days before maturity. Starting early leaves time to compare, negotiate and switch if needed. See <a href=\"/guides/when-to-start-your-renewal/\">the renewal timeline</a>." },
    { q: "Do I have to renew with my current lender?", a: "No. At maturity you can sign the offer, negotiate, move to a different lender or refinance. Moving at maturity carries no prepayment penalty, and the new lender often pays for the legal and appraisal work. The <a href=\"/switch-mortgage-lenders-at-renewal/\">switching page</a> explains the checks." },
    { q: "Will I have to pass the stress test to switch lenders?", a: "Often not on a straight switch between federally regulated lenders, where the balance and amortization stay the same. The new lender still reviews your credit, income and the property. Credit unions and collateral charges can change the answer. Details are on the <a href=\"/stress-test-exemption-switching-lenders/\">stress test exemption page</a>." },
    { q: "What does it cost to break my mortgage early?", a: "On a variable rate, the penalty is usually three months of interest. On a fixed rate, it is usually the greater of three months of interest and the interest rate differential, which lenders calculate in different ways. At maturity there is no penalty. Try the <a href=\"/mortgage-penalty-calculator/\">penalty calculator</a>." },
    { q: "Can I take my mortgage with me when I move?", a: "Often, yes. Porting moves your rate and remaining term to the new home with no prepayment penalty. It is not automatic, because the lender re-qualifies you on the new property. Not every mortgage is portable. See <a href=\"/porting-your-mortgage/\">porting your mortgage</a>." },
    { q: "How long do I need to be self-employed to get a mortgage?", a: "Most A lenders want two years of tax history and average your income across them. Some B lenders will look at a younger business, especially if you stayed in the same field. The <a href=\"/newly-self-employed-mortgage/\">newly self-employed page</a> covers each year." },
    { q: "Can I get a mortgage with collections on my credit report?", a: "Often, yes, but most lenders want collections paid before or at funding. A paid collection can still show on the report, though it stops blocking approval at most lenders. Unpaid ones usually push a file to the B or private tier. See <a href=\"/bad-credit-mortgage-bc/\">bad credit mortgages</a>." },
    { q: "What is the difference between an A lender and a B lender?", a: "A lenders follow the standard rules on income, credit and ratios and charge mainstream rates. B lenders are more flexible, which can mean stated income or a lower credit score, at a higher rate plus a lender fee, usually for one or two years. See the <a href=\"/b-lender-mortgage-bc/\">B lender page</a>." },
    { q: "Can a co-signer be taken off the mortgage later?", a: "Yes, but only with the lender's agreement. The usual routes are a renewal or refinance where the remaining borrower qualifies alone, or a sale. Decide the exit at the start, because the co-signer is liable for the full balance until then. See <a href=\"/mortgage-with-a-cosigner/\">co-signing explained</a>." },
    { q: "How much can I borrow if I refinance?", a: "Federally regulated lenders generally cap a refinance at 80 percent of your home's appraised value, less what you still owe. Alternative lenders may use a different limit, and policy varies by property type. The <a href=\"/refinance-mortgage-bc/\">refinance guide</a> shows how to work out your room." },
    { q: "How much can I borrow on a HELOC?", a: "At a federally regulated lender, a standalone line is capped at 65 percent of your home's value. A line plus a mortgage together cannot go above 80 percent. An approved line also counts as debt on later applications, even at a zero balance. See the <a href=\"/heloc-bc/\">HELOC page</a>." },
    { q: "Is a HELOC or a refinance better for a big expense?", a: "It depends on the purpose. A line suits money you need in stages, with no penalty on your first mortgage. A single large amount you will carry for years is usually cheaper and more disciplined as an amortized refinance. Compare both on the <a href=\"/is-it-worth-refinancing/\">is it worth refinancing</a> page." },
    { q: "How much down do I need for a rental property?", a: "Plan on at least 20 percent. High-ratio insurance is not available on a purchase you won't live in, and some lenders ask for more. A home you live in that has a legal suite can be insured with less down. See <a href=\"/investment-property-mortgages-bc/\">investment property mortgages</a>." },
    { q: "Does the short application form affect my credit score?", a: "No. Nothing on the form touches your credit report and nothing goes to a lender. The credit check comes later, only with your written authorization, after you and Joshua have talked and agreed on a plan. The <a href=\"/apply/\">application page</a> explains what the form asks." },
    { q: "What should I have ready before I apply?", a: "Recent pay stubs or tax returns, ID, statements showing where your down payment came from, and a list of debts. Having them ready speeds the pre-approval. The <a href=\"/mortgage-application-checklist/\">application checklist</a> lists everything by situation." }
  ]
};
