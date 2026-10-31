import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You work a rotating schedule, your pay stubs never look the same twice, and a good part of your income arrives as overtime, shift premiums, on-call pay or acting pay. You may also have a second stream, such as paid-duty work, a training contract or a side business run through a corporation. When you walked into a bank branch, the software averaged the wrong numbers, ignored the rest, and told you a figure that did not match the life you are actually living. If you are a police officer, firefighter, paramedic, dispatcher or corrections officer in British Columbia, this page is about how a lender really reads your file, what to gather, and how Joshua, who spent five years as a mortgage underwriter before becoming a broker, puts it together so the lender counts what it should.</p>

<h2>How lenders see first-responder income</h2>
<p>Lenders divide pay into two groups. Guaranteed income is the base salary on your collective agreement, and every lender counts it in full. Variable income is everything else: overtime, shift and weekend premiums, statutory holiday pay, on-call pay, acting pay and allowances. Lenders count variable income only when it has a history, and the common practice is a two-year average supported by your T4s and a letter from your employer. Some lenders will use the most recent year if it is the lower of the two, and most will not count variable income that has existed for less than two years, however reliable it feels to you. These are lender norms rather than published rules, and the exact treatment varies from lender to lender, which is one reason it pays to compare.</p>
<p>The most common surprise is that a lender may cap variable income at a percentage of base pay, or ignore a spike year that was driven by an unusual event such as a wildfire season or a large investigation. The second surprise is that unionized base pay with a published grid is viewed as strong income, and that strength is worth using. A lender that understands your employer and your agreement will usually count more of your pay than one that does not, which is why the choice of lender matters more than the posted rate.</p>

<h2>The documents that prove it</h2>
<p>A first-responder file is approved on paper, so the paper has to be complete. The <a href="/mortgage-application-checklist/">mortgage application checklist</a> covers the general list, and these items are specific to you:</p>
<ul>
<li><strong>A letter of employment</strong> on letterhead that states your position, start date, status (permanent, probationary or auxiliary), base salary or hourly rate with guaranteed hours, and ideally a sentence confirming that overtime is regular and expected.</li>
<li><strong>Your two most recent T4s</strong>, plus a current pay stub showing year-to-date figures. The T4s are how a lender establishes the average for variable pay.</li>
<li><strong>Notices of assessment</strong> for the same two years, to confirm nothing is owing to CRA.</li>
<li><strong>Your collective agreement grid or a link to it</strong>, which shows the step you are on and the step you will reach. Some lenders will not use a future raise, but an underwriter who can see the grid reads your base pay as stable.</li>
<li><strong>Any paid-duty or secondary employment records</strong>, with the same two-year history if you want it counted.</li>
</ul>
<p>If you are on probation, say so early. Many lenders will approve a probationary officer or firefighter with a strong hiring letter, and some will not, so the file goes to the right lender the first time.</p>

<h2>Off-duty work, corporations and the second income</h2>
<p>Many first responders earn outside the job: a firefighter who runs a contracting business on days off, a paramedic who teaches first aid through a corporation, an officer who does security consulting. That income is self-employment income, and lenders treat it the way they treat any business owner, with two years of tax returns and a look at what the business actually nets after expenses. If the business is new, most A lenders will not count it yet. If it is established, it can add meaningfully to your qualifying income, provided it is documented. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how that side of the file is built, including the difference between the income you report and the income a lender will use.</p>

<h2>What the numbers look like</h2>
<p>The <a href="/mortgage-calculators/#affordability">affordability calculator</a> runs the standard ratios and the stress test, and it is the right place to try two versions of your income: base pay alone, and base pay plus the two-year average of your variable pay. The gap between those two results is the amount that depends on how your lender treats overtime. An illustrative example: a constable with a base salary of $105,000 and a two-year average of $22,000 in overtime and premiums qualifies for noticeably more at a lender that counts the full average than at one that counts half or none of it. The exact difference depends on your debts, your down payment and the qualifying rate, which is why the calculator is a planning tool and the lender confirms the figure.</p>

<h2>Joshua's process for a first-responder file</h2>
<ol>
<li><strong>A 15-minute call</strong> about your pay structure, your schedule and your timeline. Shift workers often need the call outside office hours, which is fine.</li>
<li><strong>An underwriter's read of your income.</strong> Joshua works out what a lender will count before any application is submitted, and tells you honestly if the number is lower than you hoped and what would raise it.</li>
<li><strong>Lender selection.</strong> Lenders differ on probation, on how much variable pay they count and on secondary employment. The file goes to the lender whose policy fits it, and you see the options in a written <a href="/lender-comparison-report/">Lender Comparison Report</a>.</li>
<li><strong>A clean submission.</strong> Documents organized and explained up front so the lender's underwriter has no reason to pause.</li>
<li><strong>Aftercare.</strong> After funding, the <a href="/mortgage-aftercare-program/">aftercare program</a> keeps track of your renewal, your rate and any changes, such as a promotion, a move to a new detachment or a decision to rent out a suite.</li>
</ol>

<h2>The traps</h2>
<ul>
<li><strong>Counting on a spike year.</strong> A single year of unusually high overtime will usually be averaged down, and a lender may ask why it happened.</li>
<li><strong>Assuming overtime counts everywhere.</strong> It does not. Ask what the lender's policy is before you rely on it.</li>
<li><strong>Leaving a job change until after the approval.</strong> A transfer between departments or a move from auxiliary to full-time changes your paperwork. Tell your broker first.</li>
<li><strong>Treating a bank quote as the ceiling.</strong> Bank software often reads shift income conservatively. A lower figure from one lender is not the market's answer.</li>
<li><strong>A first-responder "program" that is really a sales pitch.</strong> There is no special government mortgage for first responders in Canada. Any genuine advantage comes from a lender reading your income correctly and from choosing the right one, not from a badge discount.</li>
</ul>

<h2>Rates and what you pay for the service</h2>
<p>The rate you qualify for depends on your down payment, credit, property and lender, and current figures are discussed on the <a href="/mortgage-rates-bc/">mortgage rates page</a> and on a call. On a mortgage placed with a mainstream A lender, the lender pays the broker and you pay nothing for the service. Fees apply only on certain B-lender and private files, and in British Columbia they are disclosed in writing on BCFSA's Form 1A before you commit. A first-responder file with stable base pay is almost always an A-lender file. If you are buying for the first time, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> walks through the programs and the order of steps.</p>

${callout("Why an underwriting background matters here", "<p>An underwriter reads a shift-work file by asking how much of the income will still be there in two years. Joshua builds your application to answer that question before it is asked: the base pay on the grid, the variable pay with its two-year history, and the explanation for anything that looks unusual.</p>")}

${cta({ title: "Shift work should not shrink your approval", text: "Book a 15-minute call, at a time that fits your rotation. Joshua will tell you what a lender will count and which lender counts the most of it. You can also <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/mortgages-for-first-responders/",
  h1: "Mortgages for first responders in BC: police, fire and paramedics",
  lede: "Shift work, overtime and on-call pay change how your income counts. Here is how lenders read a first-responder file, and how to make sure yours is read correctly.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Mortgages for first responders", "/mortgages-for-first-responders/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "Do lenders count overtime for police officers and firefighters?", a: "Most lenders count overtime and shift premiums when there is a two-year history on your T4s and your employer confirms it is regular. Some cap it, some use the lower of the two years, and a few count none of it. The treatment varies by lender, so the right lender choice can change your approval amount." },
    { q: "Is there a special mortgage program for first responders in Canada?", a: "No government or insurer program exists specifically for first responders. Some lenders or brokers advertise first-responder offers, which are ordinary mortgages with marketing attached. The real advantage is a lender that reads shift income correctly and counts your variable pay, which is a matter of lender policy, not a program." },
    { q: "Can I get a mortgage while on probation with my department?", a: "Often, yes. Many lenders accept a probationary officer, firefighter or paramedic with a strong offer letter from a municipal or provincial employer, because the base pay is on a published grid. Others require probation to be complete. Tell your broker your status so the file goes to a lender that accepts it." },
    { q: "Does paid-duty or off-duty business income count?", a: "It can, if it has a history. Paid-duty income with two years on your T4s is treated like other variable pay. Income from a side business run through a corporation is self-employment income and needs two years of tax returns, and lenders use the net figure after expenses rather than the gross." },
    { q: "What does a broker cost a first responder?", a: "On a mortgage placed with an A lender, which is where most first-responder files land, the lender pays the broker and you pay nothing for the service. Fees arise only on some B-lender and private files, and BC rules require written disclosure on Form 1A before you commit to anything." }
  ]
};
