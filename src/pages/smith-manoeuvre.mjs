import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "The Smith Manoeuvre uses a readvanceable mortgage to slowly turn home mortgage debt into investment debt, whose interest is generally tax deductible. Your total debt doesn't shrink, the investments can fall, and the paperwork has to be perfect for years.",
  who: "Stable, higher earners with a long horizon and an accountant. Not for tight budgets or anyone who wants to be debt-free soon.",
  next: "Talk to an accountant and an investment advisor first. Joshua can explain the <a href=\"/readvanceable-mortgage/\">readvanceable mortgage</a> side."
})}
${callout("General information only", "<p>This page explains a financial strategy so you know what people mean when they recommend it. It isn't tax advice, investment advice or a recommendation. Whether interest is deductible depends on your own facts and on the Canada Revenue Agency's rules. Investing borrowed money carries real risk. Talk to an accountant or tax professional, and a licensed investment advisor, before you act.</p>")}

<h2>What the Smith Manoeuvre is</h2>
<p>In Canada, the interest on a mortgage for your own home isn't tax deductible. Interest on money borrowed to invest generally is, if the money is used to earn income. The Smith Manoeuvre is a way to slowly shift from the first kind of debt to the second.</p>
<p>It's named after Fraser Smith, a BC financial planner. He wrote about it in a book in the early 2000s. It's been written about ever since, often with more excitement than detail.</p>
<p>It depends on one product: a readvanceable mortgage. That's a regular mortgage paired with a home equity line of credit, all under one registered charge. As you pay down the mortgage, the room on the line grows by the same amount.</p>
<p>The strategy borrows that new room and invests it. Usually the money goes into income-paying investments outside registered accounts. The tax refund and investment income then go back onto the mortgage. That creates more room, which gets borrowed again.</p>
<p>Over many years, the mortgage shrinks and the investment loan grows. The total debt on the home stays about the same.</p>

<h2>How it works, step by step</h2>
<ol>
<li><strong>Set up a readvanceable mortgage.</strong> This is a mortgage and a HELOC registered together, usually as a collateral charge. The lender sets a combined limit. The <a href="/readvanceable-mortgage/">readvanceable mortgage</a> page explains the setup. It also has a calculator that shows how the line's room reopens as you pay principal.</li>
<li><strong>Make your normal mortgage payment.</strong> The principal part of each payment becomes new room on the HELOC side.</li>
<li><strong>Borrow the new room and invest it.</strong> The money goes into a non-registered investment account. The borrowing is meant to earn investment income. That's what can make the interest deductible.</li>
<li><strong>Claim the interest.</strong> You claim the interest on the investment part of the line as a carrying charge on your tax return. The rules apply, and that's where the accountant comes in.</li>
<li><strong>Put the refund and income on the mortgage.</strong> The tax refund and any investment payouts go on the mortgage as prepayments. That speeds up the shift.</li>
</ol>
<p>Each step is simple on its own. The hard part is doing all of them right, every year, for ten years or more. You also need records that would hold up if the tax agency asked.</p>

<h2>Why the records decide whether it works</h2>
<p>The Canada Revenue Agency allows a deduction for interest on money borrowed to earn income from a business or property. That includes most income-paying investments. The test is how the borrowed money is used, traced dollar for dollar. That has a few practical effects.</p>
<ul>
<li><strong>Keep investment borrowing separate.</strong> If you also use the line for a trip or a car, the interest has to be split. The paperwork gets messy fast. Most people who do this keep a separate sub-account or line just for investing.</li>
<li><strong>Trace the money.</strong> Money should go straight from the line to the investment account. Keep the statements that show that path for as long as the loan exists. You claim the deduction every year the loan is there.</li>
<li><strong>Know what happens when you sell.</strong> Say you sell investments bought with borrowed money. If you don't use the money to repay the loan or buy other investments, some interest may stop being deductible. This is where do-it-yourself versions often go wrong.</li>
<li><strong>Know the exceptions.</strong> Not every investment qualifies the same way. Some products that don't pay income can raise questions. A professional who has filed returns for this strategy is worth more than a video about it.</li>
</ul>
<p>None of this is fancy. It's bookkeeping, done every year, with a reason for every dollar. If you don't like keeping records like that, take it as a sign about whether this suits you.</p>

<h2>The risks, plainly</h2>
<p>The strategy is sometimes sold as free money. The mortgage gets paid anyway, and the tax refund seems to fund the rest. It isn't free. It's borrowing to invest, with your home as security.</p>
<ul>
<li><strong>Leverage cuts both ways.</strong> Investments can fall in value. The loan doesn't. In a long downturn, you owe the same amount against an account worth less. And interest keeps adding up at a variable rate.</li>
<li><strong>The line's rate floats.</strong> HELOC rates move with prime. A plan that worked at one rate can look very different two years later. The lender can also cut or freeze the line. The <a href="/heloc-bc/">HELOC in BC</a> page explains how.</li>
<li><strong>Your total debt doesn't shrink.</strong> The point is to keep the debt level while changing its type. If your goal is to be debt-free, that's a different plan. Don't mix the two up.</li>
<li><strong>It affects your renewal.</strong> Readvanceable mortgages are registered as collateral charges. That can make switching lenders at renewal slower and costlier. The <a href="/collateral-charge-mortgage/">collateral charge mortgage</a> page explains why. The lender you pick is a long-term choice.</li>
<li><strong>Tax rules can change.</strong> Deductibility depends on today's law and how the tax agency reads it. A ten-year plan that depends on it carries the risk that the rule tightens partway through.</li>
</ul>

<h2>Who it tends to suit, and who it doesn't</h2>
<p>People who do this well share a few traits. They have a steady, higher income, so the deduction is worth something at their tax rate. They have a long time horizon. They can watch an investment account drop without selling. They keep good records, or have an accountant who does.</p>
<p>They also have their other borrowing under control. Adding a growing investment loan to a stretched household is how a strategy turns into a problem.</p>
<p>It tends not to suit people in the early years of a tight mortgage. It doesn't suit people with uneven income. It doesn't suit anyone who'd be uneasy owing against their home in a falling market.</p>
<p>It may also not suit anyone who hasn't filled their registered accounts yet. An RRSP or a First Home Savings Account may get a similar tax result more simply, without the borrowing. A good advisor will raise those options before this strategy, not after.</p>

${cta({ title: "Thinking about a readvanceable mortgage?", text: "Joshua can explain which lenders offer readvanceable setups and how the collateral charge works at renewal. He'll also show what the mortgage side costs. The tax and investment side belongs with your accountant and advisor." })}

<h2>Where the mortgage broker fits</h2>
<p>A broker's role here is narrow. It's to set up the readvanceable mortgage and explain the lender's rules for the line. It's also to be honest about the product's costs and how it affects your future choices.</p>
<p>That includes a plain comparison with other options. A simple <a href="/cash-out-refinance-bc/">cash-out refinance</a> for a one-time investment is a different, often simpler deal. A standalone HELOC that isn't tied to the mortgage paydown is another.</p>
<p>A broker doesn't recommend investments or give tax advice. Be careful with anyone in the mortgage business who does. Joshua works with your accountant and advisor, not instead of them.</p>
<p>For the bigger picture on rental and investment borrowing in BC, start with the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>. You can <a href="/contact/">contact Joshua</a> with questions about the mortgage setup itself.</p>
<p>On fees, it's the same as any other file. A readvanceable mortgage with an A lender costs you nothing for the broker's service, because the lender pays the broker. Fees only come up on B-lender and private files. In BC, they're disclosed in writing before you commit.</p>
`;

export default {
  slug: "/smith-manoeuvre/",
  h1: "The Smith Manoeuvre in Canada: how it works, and who it is for",
  lede: "A readvanceable mortgage, borrowing to invest, and the record-keeping that decides whether the interest is deductible. General information, not advice.",
  crumbs: [["Home", "/"], ["Investors", "/investment-property-mortgages-bc/"], ["Smith Manoeuvre", "/smith-manoeuvre/"]],
  nav: "/investment-property-mortgages-bc/", body,
  faqs: [
    { q: "Is the Smith Manoeuvre legal in Canada?", a: "Yes. It uses an ordinary rule: interest on money borrowed to earn income from investments is generally deductible, while interest on a mortgage for your own home is not. The strategy arranges borrowing so that more of your debt falls on the deductible side. Whether it works for you depends on your facts, so take professional tax advice." },
    { q: "What kind of mortgage do I need for the Smith Manoeuvre?", a: "A readvanceable mortgage, which combines an amortizing mortgage with a home equity line of credit under one registered charge. As you pay principal, the line's available room grows. Not every lender offers one, and the structure is usually a collateral charge, which affects how easily you can switch lenders at renewal." },
    { q: "Does the Smith Manoeuvre reduce my debt?", a: "No. It changes the character of the debt rather than its size. The non-deductible mortgage shrinks and the deductible investment loan grows, while the total borrowed against your home stays roughly level. If your goal is to be debt-free, this is a different plan, and the two should not be confused." },
    { q: "What are the main risks?", a: "Leverage: the investments can fall while the loan stays the same. A floating line-of-credit rate that can rise. Lender rights to reduce or freeze the line. Record-keeping errors that put the deduction at risk. And the possibility that tax rules change over a strategy designed to run for a decade or more." },
    { q: "Can a mortgage broker set this up for me?", a: "A broker arranges the readvanceable mortgage and explains its costs and its effect on your flexibility. A broker does not recommend investments or give tax advice. Joshua works alongside your accountant and investment advisor on the mortgage portion, and on an A-lender file the lender pays the broker, so the service costs you nothing." }
  ]
};
