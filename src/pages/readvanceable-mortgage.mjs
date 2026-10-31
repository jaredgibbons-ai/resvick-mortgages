import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

const tool = TOOLS.readvanceable ? TOOLS.readvanceable() : "";

const body = `
${short({ answer: "A readvanceable mortgage pairs a regular mortgage with a line of credit under one charge. Every dollar of principal you pay off becomes new room on the line. It suits people with a clear plan for that room, but it costs more to move at renewal.", who: "Investors, Smith Manoeuvre planners, and people who want a growing reserve and will leave it alone.", next: "Run your own numbers in the <a href=\"/mortgage-calculators/#readvanceable\">readvanceable calculator</a>." })}

<h2>The structure: a mortgage and a line under one charge</h2>
<p>A readvanceable mortgage puts two products on one property. One is a regular mortgage you pay down. The other is a home equity line of credit. They're registered together under a single collateral charge.</p>
<p>The name comes from the link between them. Every payment of principal on the mortgage raises the limit on the line by the same amount. It happens automatically, with no new application. Over the life of the mortgage, borrowing room shifts from the mortgage side to the line side.</p>
<p>The lender sets one overall limit for the whole package. For federally regulated lenders, that limit can't go above 80 percent of the home's value. The line portion is capped at 65 percent. OSFI set out these expectations for combined loan plans in Guideline B-20 and a later advisory (2022–2023).</p>
<p>The line's limit only grows until it hits the 65 percent mark. Principal you pay down past that point doesn't become line room. The <a href="/heloc-bc/">HELOC page</a> explains the limits in more detail.</p>

<h2>The reborrowing mechanic</h2>
<p>Say a home is worth $1,000,000, with a $600,000 mortgage and a readvanceable line. The overall limit is $800,000. On day one, the line has $200,000 of room. That's the gap between the mortgage and the overall limit.</p>
<p>Over a few years, the mortgage drops to $550,000. Now the line has $250,000 of room. If the borrower draws $100,000 on the line, the total owing is $650,000. The room left is $150,000.</p>
<p>This example holds the home's value steady. In real life, the lender sets the overall limit at the start. It may or may not revisit it as the value changes.</p>
<p>The <a href="/mortgage-calculators/#readvanceable">readvanceable calculator</a> is below and on the calculators page. It applies these rules year by year to your own figures. It assumes the value stays the same, charges interest only on the line, and uses the federal limits for regulated lenders. Credit unions are provincially regulated and may differ.</p>
${tool}

<h2>Who it is for</h2>
<p>This structure isn't for everyone, and it's sold more widely than it should be. It earns its place in a few situations.</p>
<ul>
<li><strong>The Smith Manoeuvre.</strong> This is the best-known use. You reborrow principal from the line and invest it in things that produce income. The interest on that borrowed money may be tax-deductible, while your non-deductible mortgage shrinks. Over many years, the aim is to turn a mortgage into a deductible investment loan.<br>It depends on three things. The borrowed money has to be used to earn income. You need careful records. And the investments have to beat the after-tax cost of borrowing. The <a href="/smith-manoeuvre/">Smith Manoeuvre page</a> covers it in detail. The tax side is for a tax professional. Don't rely on a deduction until you've confirmed it applies to you.</li>
<li><strong>Investors.</strong> If you plan to buy rental property, the growing line can fund future down payments. You won't need a new refinance each time. The <a href="/investment-property-mortgages-bc/">investment property mortgage hub</a> explains how lenders treat borrowed down payments and rental income.</li>
<li><strong>Planners who want a reserve.</strong> Some people want the security of a big line that grows on its own. They rarely use it and repay it fast. For them, it's a reserve that costs nothing until they draw on it.</li>
</ul>
<p>It's a poor fit if you find it hard to leave an available balance alone. It's also a poor fit if you plan to shop your mortgage hard at every renewal. Here's why.</p>

<h2>The collateral-charge trade-off at renewal</h2>
<p>The mortgage and the line sit under one collateral charge. So you can't move the package to another lender with a simple transfer at renewal. Moving means paying out both products, discharging the charge and registering a new one at the new lender. That brings legal and appraisal costs a straight switch wouldn't have.</p>
<p>The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains why. The page on <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a> covers what a transfer normally costs and saves.</p>
<p>In practice, your current lender has more leverage at renewal, because leaving costs more. You should still shop at renewal. Just compare the savings against the real cost of moving.</p>
<p>Also know this. The Finance Canada and OSFI rules let straight switches skip the stress test. They may not cover a move that involves refinancing or restructuring. Confirm with the new lender before you rely on it.</p>

${cta({ title: "Is a readvanceable mortgage the right structure for you?", text: "Book a 15-minute call. Joshua will ask what you plan to do with the room and show you the renewal trade-off in dollars. He'll tell you if a plain mortgage with a separate line would serve you better." })}

<h2>Risks: spending the room</h2>
<p>This structure makes borrowing easy on purpose. Every principal payment creates new room, and that room is a few clicks away. For disciplined borrowers with a plan, that's a feature.</p>
<p>For everyone else, the mortgage never really shrinks. The mortgage balance falls while the line balance rises, and the total owing stays put. Interest-only minimums on the line mean nothing forces you to repay.</p>
<p>Three habits help. First, set your own limit on the line below the lender's. Then the room you see is the room you plan to use. Second, decide in advance what the line is for. Treat any other draw like a new loan that needs the same thought. Third, review the total owing, not just the mortgage balance, at least once a year. The <a href="/mortgage-aftercare-program/">aftercare program</a> includes that review for Joshua's clients.</p>
<p>Two more points apply to the line itself. The rate is variable, at prime plus a spread. So a drawn balance costs more whenever prime goes up. And under the contract, the lender can lower the limit or freeze draws if your home's value falls or your credit changes.</p>

<h2>Qualifying and cost</h2>
<p>The package is approved like a mortgage and a line together. The lender qualifies you on the full overall limit, as if the line were fully drawn, at the stress-test rate. So a readvanceable setup reduces how much other debt you can carry on future applications. That's true even when the line is empty.</p>
<p>On a package placed with a prime lender, the lender pays the broker and you pay nothing for the arrangement. Broker fees only come up on B-lender and private files, with written disclosure first. Appraisal and registration costs are set by the lender and vary.</p>
<p>If the structure still fits after reading this, the next step is a short talk about what you'll do with the room. That decides how the package should be sized. <a href="/contact/">Contact Joshua</a> or book a call.</p>

${callout("Room is not wealth", "<p>Available credit on a readvanceable line is borrowing room, not money you have. The structure works when every draw has a purpose and a repayment plan. It fails quietly when the room gets spent and the total debt stops falling.</p>")}
`;

export default {
  slug: "/readvanceable-mortgage/",
  h1: "Readvanceable mortgages: the mortgage and HELOC combination, explained",
  lede: "How a readvanceable mortgage reopens line-of-credit room as you repay principal, who it suits, the collateral-charge trade-off at renewal, and the risk of spending the room.",
  crumbs: [["Home", "/"], ["Refinancing", "/refinance-mortgage-bc/"], ["Readvanceable mortgages", "/readvanceable-mortgage/"]],
  nav: "/refinance-mortgage-bc/", body, calc: !!tool,
  faqs: [
    { q: "What is a readvanceable mortgage?", a: "A mortgage and a home equity line of credit registered together under one collateral charge, where each principal payment on the mortgage increases the line's available limit by the same amount. The combined limit is capped at 80 percent of value at federally regulated lenders, with the revolving line capped at 65 percent." },
    { q: "Is a readvanceable mortgage good for the Smith Manoeuvre?", a: "It is the structure the strategy is built on, because reborrowed principal can be invested with the aim of making the interest deductible. Whether the deduction applies depends on how the funds are used and on your own tax position, so confirm it with a tax professional before relying on it." },
    { q: "Can I switch lenders at renewal with a readvanceable mortgage?", a: "Yes, but not by a simple transfer. The collateral charge covers both products, so moving means paying out, discharging and re-registering, with legal and appraisal costs. Compare the savings at a new lender against that cost before deciding." },
    { q: "Does the line count against me when I apply for other credit?", a: "Yes. Lenders usually treat the full limit as drawn and qualify you on it at the stress-test rate. A large readvanceable line can reduce what you qualify for on a later purchase even with a zero balance." },
    { q: "What are the risks of a readvanceable mortgage?", a: "The main one is spending the room, so the total debt never falls even as the mortgage balance does. The line is also variable-rate, and the lender can reduce or freeze it under the contract. Set your own limit and a purpose for every draw." }
  ]
};
