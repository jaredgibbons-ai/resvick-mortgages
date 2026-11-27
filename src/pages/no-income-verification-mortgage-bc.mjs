// No income verification (equity) mortgages. Added Nov 26, 2026. Market facts are kept to ranges and hedged:
// a few alternative and private lenders offer these at low loan-to-value; no lender is named and no rate is printed.
// Josh places these files and a broker fee applies (Jared, Nov 26, 2026). Disclosed in writing before signing; never quote an amount.
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Yes, a few lenders in BC will lend without proof of income. They lend on your equity and your credit instead. Expect to borrow only about half to two-thirds of the home's value, pay a higher rate plus a lender fee, and take a short term.",
  who: "Business owners, retirees and others with a lot of equity whose income is hard to prove on paper.",
  next: "If your income can be shown at all, read <a href=\"/stated-income-mortgage/\">stated income mortgages</a> first. It usually costs less. Then <a href=\"/contact/\">book a 15-minute call</a>."
})}
<h2>What a no income verification mortgage is</h2>
<p>Most mortgages start with your income. The lender wants pay stubs, tax returns or a Notice of Assessment. Then it checks whether you can carry the payment.</p>
<p>A no income verification mortgage skips that step. The lender doesn't ask for income documents at all. It leans on two other things instead: how much equity is in the property, and how well you've handled credit.</p>
<p>The logic is simple. If you only borrow a modest share of the home's value, the lender is well protected. If your credit shows years of paying on time, it trusts you to keep paying.</p>
<p>You'll also hear it called a no-doc mortgage, an equity mortgage, an equity-based loan or a low-doc mortgage. Lenders use their own program names. The idea is the same.</p>
<p>Banks and credit unions don't offer this. The federal B-20 guideline expects federally regulated lenders to verify income. So these programs come from a small group of alternative lenders and private lenders. They're not common, and they change often.</p>

<h2>How it differs from stated income</h2>
<p>People mix these up, and the difference matters for cost.</p>
<p>A <a href="/stated-income-mortgage/">stated income mortgage</a> still uses income. You declare a reasonable figure, and the lender tests it against your trade and your bank deposits. That's why stated income can lend at up to 80 percent of the home's value. Some insured programs go higher still.</p>
<p>A no income verification mortgage doesn't test income at all. Because the lender knows less, it lends less. It also charges more.</p>
<p>So the order to try things is usually this:</p>
<ol>
<li>A regular bank or credit union mortgage, if your tax returns support the payment.</li>
<li>A <a href="/b-lender-mortgage-bc/">B lender</a> with stated income or a gentler income test.</li>
<li>A no income verification program, if income really can't be shown and the equity is there.</li>
<li>A <a href="/private-mortgage-lending-bc/">private mortgage</a>, for short-term needs that none of the above can meet.</li>
</ol>
<p>Each step down costs more. A good broker starts at the top and only moves down when there's a reason.</p>

<h2>Who it can make sense for</h2>
<ul>
<li><strong>Business owners whose tax returns undersell them.</strong> Some have deductions so large that even stated income looks thin. Others are paid through a holding company in ways a lender finds hard to read.</li>
<li><strong>Owners with large equity and low reported income.</strong> Think of someone who bought years ago and now owns most of their home outright.</li>
<li><strong>Retirees with a paid-off home.</strong> If you're 55 or older, also compare a <a href="/reverse-mortgage-bc/">reverse mortgage</a>. It has no monthly payment, which changes the math.</li>
<li><strong>People between incomes.</strong> A new business, a career change or a gap year can leave nothing to show a lender for a while.</li>
<li><strong>Investors buying with a large down payment</strong> who don't want to rebuild a full income file for each purchase. Many programs add a premium for rentals.</li>
</ul>
<p>It's not a fit if you're stretching to buy with a small down payment. These programs only work with a lot of equity.</p>

<h2>What lenders look for instead</h2>
<p>Every lender sets its own rules, and they change. But the questions are similar.</p>
<ul>
<li><strong>Loan-to-value.</strong> This is the loan divided by the home's value. Most programs stop at about 50 to 65 percent. A few go a little higher with a higher rate. Lower is always cheaper.</li>
<li><strong>Credit score.</strong> Programs that skip income usually want good credit, often in the high 600s or better. Some allow a lower score at a lower loan-to-value. Recent late payments or collections can end the conversation.</li>
<li><strong>The property.</strong> Detached homes in larger centres are the easiest. Many programs limit or price up condos, rentals, rural homes and unusual properties.</li>
<li><strong>Loan size.</strong> Most cap the loan amount. The cap is often lower when the loan-to-value is higher.</li>
<li><strong>Your down payment or equity source.</strong> On a purchase, the lender still wants to see where the down payment came from. Skipping income doesn't mean skipping the anti-money-laundering checks.</li>
<li><strong>A reason that makes sense.</strong> An underwriter will ask why income can't be shown. A plain, believable answer helps.</li>
</ul>
<p>I spent five years as an underwriter before I became a broker. I know how a file like this reads from the other side of the desk, and what makes a lender comfortable.</p>

<h2>What it costs</h2>
<p>Expect to pay more than you would at a bank, in a few ways.</p>
<ul>
<li><strong>A higher rate.</strong> Rates sit above bank and B-lender pricing. Rates move with the market, so this site doesn't print them. You'll see the real number for your file before you decide anything.</li>
<li><strong>A lender fee.</strong> Most of these lenders charge a fee, usually a percentage of the loan. It's often taken from the mortgage funds.</li>
<li><strong>A broker fee.</strong> On this kind of file a broker fee applies. It's disclosed to you in writing before you sign anything. On a regular bank mortgage, by contrast, the lender pays the broker and you pay nothing. The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> explains why.</li>
<li><strong>Legal and appraisal costs.</strong> These apply to most mortgages, and this one is no different.</li>
</ul>
<p>Terms are usually short, often one or two years. Many are open, or become open after a set time, so you can pay them off without a big penalty. That suits the way these loans are meant to be used.</p>

<h2>Have an exit plan before you sign</h2>
<p>A no income verification mortgage works best as a bridge, not a home for the next 25 years.</p>
<p>Before you sign, you should know how you'll move to a cheaper mortgage. Common exits look like this:</p>
<ul>
<li>Your business files two more years of returns that show the real income, and you move to a stated income or bank mortgage.</li>
<li>You sell another property, receive an inheritance or collect a payout, and pay the balance down.</li>
<li>You sell the home on your own timeline, instead of being forced to sell fast.</li>
<li>Your credit or income improves, and a B lender or bank takes the mortgage at renewal.</li>
</ul>
<p>If there's no exit, the cost adds up year after year. A short, open term only helps if you're ready to use it.</p>

${callout("Two warnings worth reading", "<p>First, don't overstate anything to any lender, on any program. Mortgage fraud is a crime, and it can cost you the home. Second, read the renewal terms. Some lenders charge a renewal fee, and the rate at renewal isn't guaranteed. Ask for both in writing up front.</p>")}

<h2>How I handle these files</h2>
<ol>
<li><strong>A short call first.</strong> I ask about your property, your equity, your credit and why income is hard to show. Often a cheaper option turns up right there.</li>
<li><strong>A check against cheaper options.</strong> If a stated income or B-lender mortgage would work, I'll say so. You only go to a no income program if it's the right tool.</li>
<li><strong>A written cost comparison.</strong> You see the rate, the lender fee, the broker fee, legal costs and the term side by side. The <a href="/lender-comparison-report/">Lender Comparison Report</a> lays it out in writing.</li>
<li><strong>A plan for the exit.</strong> Before you commit, you'll agree on how and when you'll move to a cheaper mortgage. Then the <a href="/mortgage-aftercare-program/">aftercare program</a> keeps an eye on that date for you.</li>
</ol>

<h2>Related reading</h2>
<p>If you're self-employed, the <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a> covers every route, from bank programs to stated income. If you need cash from a home you already own, compare the options in the <a href="/home-equity-loan-bc/">home equity loan comparison</a>. And if credit is the real issue, start with <a href="/bad-credit-mortgage-bc/">bad credit mortgages in BC</a>.</p>

${cta({ title: "Lots of equity, hard-to-prove income?", text: "A 15-minute call is enough to see whether a lender would look at your file without income documents. You'll also hear whether a cheaper option would work first." })}
`;

export default {
  slug: "/no-income-verification-mortgage-bc/",
  h1: "No income verification mortgages in BC: how they work and what they cost",
  lede: "A few lenders will lend on your equity and credit without proof of income. Here's who it suits, how much you can borrow, what it costs and how to get out of it later.",
  crumbs: [["Home", "/"], ["Self-employed", "/self-employed-mortgage-bc/"], ["No income verification", "/no-income-verification-mortgage-bc/"]],
  nav: "/self-employed-mortgage-bc/",
  body,
  faqs: [
    { q: "Can I get a mortgage in BC without proving my income?", a: "Yes, but only from a small group of alternative and private lenders, and only with a lot of equity. Most programs lend about 50 to 65 percent of the home's value and want good credit. Banks and credit unions don't offer this, because federal rules expect them to verify income." },
    { q: "How much down payment do I need for a no income verification mortgage?", a: "Usually 35 to 50 percent of the price, because most programs stop at 50 to 65 percent of the home's value. Lenders vary, and some charge more for condos or rentals. On a refinance, the same limits apply to the total you can borrow against the home." },
    { q: "Is a no income verification mortgage the same as stated income?", a: "No. Stated income still uses a declared income that the lender tests against your trade and bank deposits, and it can lend up to 80 percent of value. A no income verification program doesn't use income at all, so it lends less and costs more. Try stated income first if your income can be shown at all." },
    { q: "Will I pay a broker fee?", a: "Yes, a broker fee applies on this kind of file, along with a lender fee. Both are disclosed to you in writing before you sign anything. On a regular bank mortgage, by contrast, the lender pays the broker and you pay nothing for the service." },
    { q: "How long should I keep a no income verification mortgage?", a: "As short a time as you can. These loans are meant as a bridge, often for a one- or two-year term. Before you sign, agree on a plan to move to a cheaper mortgage, such as filing two more years of tax returns or paying the balance down." }
  ]
};
