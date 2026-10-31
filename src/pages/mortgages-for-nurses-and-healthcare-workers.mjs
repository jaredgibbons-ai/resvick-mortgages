import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You hold a casual line at one health authority, pick up shifts at a second site, and some months you earn more from overtime and premiums than from your scheduled hours. Your pay stubs are long and your T4s come from more than one employer. You might be a nurse, a care aide, a lab technologist, a respiratory therapist, a pharmacist or a physician in the early years of practice. When you asked about a mortgage, the first answer you got was a figure that ignored half of what you actually earn, because the software could not see a pattern in a schedule you know is as dependable as any salary. This page explains how lenders read healthcare income, which documents settle the question, and how Joshua, a former underwriter, builds the file so the right number is counted.</p>

<h2>How lenders see healthcare income</h2>
<p>Lenders sort healthcare workers into three groups, and the group you are in decides how much work the application takes.</p>
<ul>
<li><strong>Permanent full-time or part-time lines.</strong> Base pay on a collective agreement grid, counted in full. Overtime, shift premiums and weekend or night differentials are counted on a two-year average at most lenders, supported by T4s and a letter from the employer.</li>
<li><strong>Casual and relief positions.</strong> This is where files go wrong. There are no guaranteed hours, so many lenders will not count casual income at all until it has a two-year history, and then they use the average. A casual nurse earning a full-time equivalent for three years is usually a clean file; a casual in the first year often is not, at an A lender.</li>
<li><strong>Multiple employers and agency work.</strong> Income from two health authorities or a private clinic is added up, each with its own letter and T4s. Agency nursing paid as a contractor is self-employment income, which means tax returns rather than pay stubs, and a new agency arrangement may not count yet at an A lender. The <a href="/newly-self-employed-mortgage/">newly self-employed page</a> explains the options when the history is short.</li>
</ul>
<p>These are lender norms rather than published rules. Treatment of casual and multi-employer income varies more between lenders than almost any other part of underwriting, which is why the choice of lender can be worth more than a small difference in rate.</p>

<h2>The documents that settle it</h2>
<p>The general list is on the <a href="/mortgage-application-checklist/">mortgage application checklist</a>. For a healthcare file, these are the pieces that an underwriter looks for first:</p>
<ul>
<li><strong>A letter of employment from each employer</strong>, stating position, start date, status (permanent, temporary, casual), base rate and, for permanent lines, guaranteed hours. For a casual position, a letter that confirms regular and ongoing shifts is far stronger than one that only confirms you are on the list.</li>
<li><strong>T4s for the last two years from each employer</strong>, which establish the average that a lender will use for variable and casual pay.</li>
<li><strong>Current pay stubs</strong> with year-to-date totals, to show that this year is tracking the average.</li>
<li><strong>Notices of assessment</strong> for two years, confirming nothing is owing to CRA.</li>
<li><strong>Your collective agreement grid</strong>, so a lender can see where your base rate sits and that increases are scheduled.</li>
<li><strong>Proof of a new permanent line</strong>, if you have recently moved from casual to permanent. Some lenders will use the new guaranteed hours from the start date; others want to see a few pay periods.</li>
</ul>

<h2>Why bank software gets it wrong</h2>
<p>A branch system usually asks for one employer, one salary and one job type. A healthcare worker with two employers, a casual designation and a year-to-date that includes a maternity leave top-up or a one-time retention payment does not fit the fields. The result is either a figure built on base pay alone or, worse, a decline because the status reads as unstable. A broker who understands health authority employment reads the same documents differently: a casual line with a three-year T4 history at a stable employer is reliable income, and a lender that agrees will count it. Joshua spent five years as an underwriter reading files like these, and that is the difference between a pre-approval that holds and one that collapses at the lender's desk.</p>

<h2>A worked example</h2>
<p>Illustrative figures only. A registered nurse holds a 0.6 permanent line paying about $62,000 a year in base pay and has averaged $34,000 a year in casual shifts, overtime and premiums over the last two years. At a lender that counts only the base, the application is built on $62,000. At a lender that averages the variable pay, it is built on $96,000. Run both numbers through the <a href="/mortgage-calculators/#affordability">affordability calculator</a> and the difference in purchase price is the amount that depends purely on lender policy. Nothing about the nurse changed. The lender did.</p>

<h2>Joshua's process</h2>
<ol>
<li><strong>A 15-minute call</strong>, scheduled around your shifts, about your positions, your pay history and what you want to buy.</li>
<li><strong>Income read first.</strong> Joshua works out what each lender type will count, and tells you honestly where the figure lands and what would move it, before you look at homes.</li>
<li><strong>A real pre-approval.</strong> A <a href="/mortgage-pre-approval-bc/">pre-approval</a> that has actually been through your documents, not a rate quote. For a healthcare file, that distinction is the whole game.</li>
<li><strong>The right lender</strong>, chosen for its policy on casual and multi-employer income, with options shown in a written Lender Comparison Report.</li>
<li><strong>A clean submission and aftercare.</strong> Documents explained up front, and a relationship that continues after funding, so a move to a new line or a new region is handled before it becomes a problem.</li>
</ol>

<h2>The traps</h2>
<ul>
<li><strong>Going casual right before you apply.</strong> Dropping a permanent line for a casual position with higher hourly pay can lower what a lender counts, even if your take-home rises.</li>
<li><strong>A leave during the application.</strong> Maternity, parental or medical leave changes what lenders use. Most will qualify you on your return-to-work income with a letter confirming the date and position, but tell your broker early.</li>
<li><strong>Counting an unrepeatable year.</strong> A year inflated by pandemic-era overtime or a retention bonus is usually averaged down, and a lender may ask about it.</li>
<li><strong>Student loans that were forgotten.</strong> Provincial and federal student loan payments count in your debt ratios whether or not they are in repayment. Interest-free does not mean payment-free in a lender's eyes.</li>
<li><strong>Relying on one lender's answer.</strong> The spread between lenders on healthcare income is wide. One decline or one low number is not the market's verdict.</li>
</ul>

<h2>What the service costs</h2>
<p>On a mortgage placed with a mainstream A lender, which is where a healthcare file with documented income almost always lands, the lender pays the broker and you pay nothing. Fees arise only on certain B-lender and private files, disclosed in writing on BCFSA's Form 1A before you commit. If this is your first purchase, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the programs that can reduce your cash to close, including the first-time buyers' transfer tax exemption and the First Home Savings Account.</p>

${callout("One request before the call", "<p>Pull your last two T4s from each employer and your most recent pay stub. With those documents, Joshua can tell you in one conversation what a lender will count, which is the number everything else depends on.</p>")}

${cta({ title: "Casual line, real approval", text: "Book a 15-minute call around your schedule. Joshua will read your income the way a lender does and tell you which lender reads it best. Or <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/mortgages-for-nurses-and-healthcare-workers/",
  h1: "Mortgages for nurses and healthcare workers in BC",
  lede: "Casual lines, multiple employers and overtime confuse bank software. Here is how lenders actually read healthcare income, and how to get a file approved cleanly.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Mortgages for nurses and healthcare workers", "/mortgages-for-nurses-and-healthcare-workers/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "Can a casual nurse get a mortgage?", a: "Yes, with a history. Most A lenders count casual income once it has two years on your T4s and your employer confirms regular, ongoing shifts; they then use the average. A casual position in its first year is harder at an A lender, and a B lender or a co-signer may bridge the gap until the history exists." },
    { q: "Do lenders count overtime and shift premiums for healthcare workers?", a: "Usually, on a two-year average supported by T4s and an employer letter. Some lenders cap variable pay or use the lower of the two years, and a few count none. Because the treatment varies, the lender choice can change your approval amount more than a small rate difference would." },
    { q: "How does income from two employers work on a mortgage application?", a: "Each employer provides its own letter and T4s, and the lender adds the income together, applying its usual rules to each. Two permanent part-time lines are generally treated as stable. Two casual positions need history at each. Agency work paid as a contractor is self-employment income and needs tax returns." },
    { q: "I am on maternity leave. Can I still buy?", a: "Often, yes. Many lenders qualify you on your return-to-work income with a letter from your employer confirming your position, pay and return date, and some want the return date within a set window. Tell your broker at the first call so the file goes to a lender whose policy fits your timing." },
    { q: "Do my student loans affect how much I can borrow?", a: "Yes. The payment on provincial and federal student loans is counted in your debt ratios, and lenders generally use a payment figure even if the loan is interest-free or not yet in repayment. Paying a loan down before applying can raise the approval amount, and your broker can show you by how much." }
  ]
};
