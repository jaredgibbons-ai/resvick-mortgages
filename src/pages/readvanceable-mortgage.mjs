import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

const tool = TOOLS.readvanceable ? TOOLS.readvanceable() : "";

const body = `
<h2>The structure: a mortgage and a line under one charge</h2>
<p>A readvanceable mortgage combines two products on one property: an ordinary amortizing mortgage and a home equity line of credit, registered together under a single collateral charge. The feature that gives it the name is the link between the two. Every payment of principal on the mortgage increases the available limit on the line by the same amount, automatically, without a new application. Over the life of the mortgage, the borrowing room migrates from the amortizing side to the revolving side.</p>
<p>The lender sets a global limit for the whole package, and under the rules that apply to federally regulated lenders, that limit cannot exceed 80 percent of the home's value, with the revolving portion capped at 65 percent. OSFI set out these expectations for combined loan plans in Guideline B-20 and a later advisory (2022–2023). The line's limit grows only until it reaches the 65 percent mark; principal paid down beyond that point does not become revolving room. The limits are described more fully on the <a href="/heloc-bc/">HELOC page</a>.</p>

<h2>The reborrowing mechanic</h2>
<p>Suppose a home is worth $1,000,000 with a $600,000 mortgage and a readvanceable line. The global limit is $800,000. On day one, the line's room is $200,000, which is the gap between the mortgage and the global limit. As the mortgage is paid down to $550,000 over a few years, the line's room becomes $250,000. The home's value is held constant in this example; in reality the lender sets the global limit at origination and may or may not revisit it as the value changes. If the borrower draws $100,000 on the line, the total owing is $650,000 and the available room is $150,000.</p>
<p>The <a href="/mortgage-calculators/#readvanceable">readvanceable calculator</a>, embedded below and also on the calculators page, applies these rules year by year to your own figures. It assumes the value stays constant, charges the line interest only, and uses the federal limits for regulated lenders. Credit unions are provincially regulated and may differ.</p>
${tool}

<h2>Who it is for</h2>
<p>The structure is not for everyone, and it is sold more widely than it should be. It earns its place in a few situations.</p>
<ul>
<li><strong>The Smith Manoeuvre.</strong> The best-known use. The borrower reborrows principal from the line and invests it in income-producing assets, so that the interest on the reborrowed amount may be tax-deductible, while the non-deductible mortgage shrinks. Over many years the aim is to convert a mortgage into a deductible investment loan. It depends on the borrowed money being used to earn income, on careful record-keeping, and on the investment outperforming the after-tax cost of borrowing. The <a href="/smith-manoeuvre/">Smith Manoeuvre page</a> covers it in detail. The tax treatment is a matter for a tax professional, and nobody should rely on a deduction without confirming it applies to their own facts.</li>
<li><strong>Investors.</strong> Owners who intend to buy rental property can use the growing line as the source of future down payments without a new refinance each time. The <a href="/investment-property-mortgages-bc/">investment property mortgage hub</a> explains how lenders treat borrowed down payments and rental income.</li>
<li><strong>Planners who want a reserve.</strong> Some people want the security of a large available line that grows on its own, used rarely and repaid quickly. For them the structure is a reserve that costs nothing until drawn.</li>
</ul>
<p>It is a poor fit for anyone who finds an available balance hard to leave alone, and for anyone who expects to shop their mortgage aggressively at each renewal, for the reason below.</p>

<h2>The collateral-charge trade-off at renewal</h2>
<p>Because the mortgage and the line sit under one collateral charge, the package cannot be moved to another lender by a simple transfer at renewal. Moving means paying out both products, discharging the charge, and registering a new one at the new lender, with legal and appraisal costs that a straight switch would not have. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains why, and the page on <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a> covers what a transfer normally costs and saves.</p>
<p>The practical effect is that the current lender has more leverage at renewal, because leaving is more expensive. Borrowers in readvanceable products should still shop at renewal, but they should compare the alternative's savings against the real cost of moving, and they should know that the Finance Canada and OSFI measures that exempt straight switches from the stress test may not cover a move that involves refinancing or restructuring. Confirm with the new lender before relying on it.</p>

${cta({ title: "Is a readvanceable mortgage the right structure for you?", text: "Book a 15-minute call. Joshua will ask what you intend to do with the room, show you the renewal trade-off in dollars, and tell you whether a plain mortgage with a separate line would serve you better." })}

<h2>Risks: spending the room</h2>
<p>The structure makes borrowing easy by design. Every principal payment creates new room, and the room is a few clicks away. For disciplined borrowers with a plan, that is a feature. For everyone else it means the mortgage never really shrinks: the amortizing balance falls while the line balance rises, and the total owing stays where it was. Interest-only minimums on the line mean nothing forces repayment.</p>
<p>Three guards help. Set your own limit on the line below the lender's, so the room you see is the room you intend to use. Decide in advance what the line is for, and treat any other draw as a decision requiring the same thought as a new loan. And review the total owing, not the mortgage balance alone, at least once a year; the <a href="/mortgage-aftercare-program/">aftercare program</a> includes that review for Joshua's clients.</p>
<p>Two other points apply to the line itself: the rate is variable, at prime plus a spread, so a drawn balance costs more whenever prime rises; and the lender can, under the contract, reduce the limit or freeze draws if the value falls or your credit changes.</p>

<h2>Qualifying and cost</h2>
<p>The package is underwritten like a mortgage and a line together. The lender qualifies you on the full global limit, assuming the line is drawn, at the stress-test rate. That means a readvanceable structure reduces what you can carry in other debt on future applications, even with the line empty. On a package placed with a prime lender, the lender pays the broker and you pay nothing for the arrangement; broker fees arise only on B-lender and private files, with written disclosure first. Appraisal and registration costs belong to the lender and vary.</p>
<p>If after reading this the structure still fits, the next step is a short conversation about what you plan to do with the room, which decides how the package should be sized. <a href="/contact/">Contact Joshua</a> or book a call.</p>

${callout("Room is not wealth", "<p>Available credit on a readvanceable line is borrowing capacity, not money you have. The structure works when every draw has a purpose and a repayment plan. It fails quietly when the room is spent and the total debt stops falling.</p>")}
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
