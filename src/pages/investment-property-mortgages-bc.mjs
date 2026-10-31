import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { short } from "../lib/short.mjs";

const tool = TOOLS.offset ? TOOLS.offset() : "";

const body = `
${short({
  answer: "A rental you won't live in usually needs at least 20 percent down. Lenders count only part of the rent, using one of two methods. And the number of rentals you own can change which lender you need.",
  who: "Anyone buying a first rental, growing a portfolio, or adding a suite to a home they live in.",
  next: "Run your rent through the comparator below, then book a 15-minute call to map the lender for each purchase."
})}
<h2>Rental mortgages start from a different set of rules</h2>
<p>A mortgage on a home you live in and one on a home you rent out look alike on paper. Lenders see them differently.</p>
<p>A lender looks at a rental almost like a small business. What does it earn? What does it cost? How many do you already own? What happens to your finances if a tenant leaves? Those answers change the down payment, how your income is counted, the documents you need and which lenders will look at the file.</p>
<p>Those cover the Smith Manoeuvre, debt service coverage lending, the BRRRR cycle, rent-to-own and turning your current home into a rental. Most people arrive with one question. Find yours, then see what sits around it.</p>

<h2>The basics: down payment, insurance and amortization</h2>
<p>The most important rule: high-ratio insurance isn't available on a non-owner-occupied purchase. So plan on at least 20 percent down.</p>
<p>Small rentals of two to four units can still be insured up to 80 percent loan-to-value. That doesn't lower the down payment, though. Default insurance is what makes less than 20 percent down possible. So a rental you won't live in generally needs at least 20 percent from your own money.</p>
<p>Lenders treat that as a floor, not a target. Some ask for more on certain property types or in smaller markets. Think of 20 percent as the usual starting point, and confirm it for the property you have in mind.</p>
<p>The exception is a home you'll live in that also has a rental unit. Think of a house with a legal basement suite, or a duplex where you live on one side. That can still be an insured purchase with a smaller down payment. The insurer is covering your home, not an investment.</p>
<p>The rent from the second unit may then help you qualify. The page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> covers that. Many first purchases in the Fraser Valley are set up exactly this way. It's often the most practical way into owning a rental.</p>
<p>Uninsured rental mortgages are usually written with amortizations up to 30 years at many lenders. The stress test applies. You qualify at your contract rate plus two points, or 5.25 percent, whichever is higher.</p>
<p>Rental rates are commonly a little higher than rates on homes you live in. The gap varies by lender, which is one reason a written comparison of lenders helps.</p>

<h2>How lenders count your rent</h2>
<p>Lenders don't just add rent to your income. They use one of two methods, and each one counts only a share of the rent.</p>
<ul>
<li><strong>Rental offset.</strong> A share of the rent is subtracted from the property's carrying costs. That share is typically 50 to 80 percent, depending on the lender. Only what's left counts against your ratios.</li>
<li><strong>Rental add-back.</strong> A share of the rent, commonly about 50 percent, is added to your gross income. The full carrying costs count as debts.</li>
</ul>
<p>The method and the share are lender policy. They can give different results on the same property.</p>
<p>For insured owner-occupied two-unit homes, CMHC's guidance allows up to 100 percent of gross rent as an income add-back. That's a ceiling, not the norm. Many lenders use less, and some cap it at 50 percent.</p>
<p>The comparator below runs the same rent through both methods at several shares, so you can see the spread. The suite-income page explains the registered-suite rule. That rule is why some rent counts for nothing at all.</p>
${tool}

<h2>Door counts: why the number of properties changes the lender</h2>
<p>Lenders think in doors. A door is one rental unit. Most lenders cap how many you can hold, with them or in total, before your file leaves their regular residential programs.</p>
<ul>
<li><strong>Mainstream A lenders.</strong> Their rental programs commonly cover small portfolios, often up to about four rental doors on top of your home. Past that, many A lenders decline, apply a stricter policy or send the file to a commercial team. That team uses different pricing and paperwork.</li>
<li><strong>Alternative and B lenders.</strong> These are more flexible on portfolio size and how you prove income. The rate is higher, and there are often lender fees. Some qualify a property mostly on its own cash flow, not your personal income. That's the model on the <a href="/dscr-loans-canada/">debt service coverage ratio loans</a> page.</li>
<li><strong>Commercial and private lenders.</strong> Bigger portfolios, multi-unit buildings and unusual properties go to commercial underwriting. There, the building's net operating income drives the decision.</li>
</ul>
<p>Each lender sets its own door limits, and they change over time. So none are printed here as fixed numbers.</p>
<p>The practical point is planning ahead. Know which lender takes your fifth and sixth property before you buy the fourth. The lender you pick early can decide how much room you have later. Joshua maps that out in a <a href="/lender-comparison-report/">Lender Comparison Report</a> for each purchase.</p>

<h2>The strategy map</h2>
<p>Investors talk about several named strategies. Each one has a page explaining how it works in Canada. Most of what's online is written for the US, and it often falls apart under Canadian lending rules.</p>
<ul>
<li><a href="/smith-manoeuvre/">The Smith Manoeuvre</a>: using a readvanceable mortgage to slowly turn non-deductible mortgage interest into deductible investment interest. General information only, and clearly not tax advice.</li>
<li><a href="/dscr-loans-canada/">DSCR loans</a>: lending based on the property's debt coverage instead of your paycheque. Plus how the Canadian version differs from the US product most articles describe.</li>
<li><a href="/brrrr-strategy-canada/">The BRRRR strategy</a>: buy, renovate, rent, refinance, repeat. And why the refinance step is the one that breaks in Canada if the numbers aren't tight.</li>
<li><a href="/rent-to-own-homes-bc/">Rent-to-own</a>: for buyers, not investors. It covers the cautions that come with it and a realistic look at the mortgage at the end.</li>
<li><a href="/converting-your-home-to-a-rental/">Converting your home to a rental</a>: a checklist for keeping your current home when you move. It covers what your mortgage, your insurer and the tax rules each require.</li>
<li><a href="/airbnb-and-short-term-rental-mortgages/">Short-term rental mortgages</a>: how lenders treat Airbnb income, and the provincial rules on where it's allowed at all.</li>
</ul>
<p>Strategies are tools, not plans. A plan starts with your income, your cash, the property and the lender that will approve it. Only then do you ask which strategy fits.</p>

${cta({ title: "Planning a first rental, or a fifth?", text: "A 15-minute call is enough to work out the down payment, how your rent will count and which lender tier fits your portfolio. No documents needed for the first talk." })}

<h2>Renewals and refinances for landlords</h2>
<p>Rental mortgages don't stand still. Each renewal is a chance to compare lenders, and rental renewals have their own wrinkles.</p>
<p>Lenders may want current leases and rent deposits before they'll renew or take a switch. Portfolio rules apply again. And a rental often can't use some of the shortcuts open to owner-occupied switches. The page on <a href="/rental-property-mortgage-renewal/">rental property mortgage renewal</a> covers the process and the paperwork.</p>
<p>Refinancing a rental is how most investors fund the next purchase. A lenders generally lend up to 80 percent of the appraised value on a rental. Alternative lenders lend somewhat less, and each lender sets its own limits.</p>
<p>The <a href="/refinance-rental-property/">refinance a rental property</a> page walks through the math and the paperwork. It also covers whether the interest is tax-deductible, which depends on how you use the money. The <a href="/home-equity-estimator/">home equity estimator</a> gives a first look at your room.</p>

<h2>What a rental file needs</h2>
<p>Expect to document the property as carefully as yourself. A complete rental application usually includes:</p>
<ul>
<li>Signed leases, and bank statements showing the rent coming in.</li>
<li>Your T776 statement of real estate rentals from your tax return, if you already own rentals.</li>
<li>Property tax and insurance statements, plus strata documents for a strata property.</li>
<li>Mortgage statements for every property you own.</li>
</ul>
<p>Lenders look at the whole portfolio, not just the property in front of them. A missing statement on your third property can stall an approval on your fourth.</p>
<p>Two issues come up often. A unit that isn't legal or registered with the city may count for zero rent at a mainstream lender, whatever the tenant pays. And a short-term rental is treated differently from a long-term tenancy, by lenders and by the Province.</p>
<p>If either applies, read the page on it before you make an offer. The right lender for that file may not be the one with the lowest rate.</p>

${callout("Multi-unit financing and MLI Select", "<p>CMHC's MLI Select program insures mortgages on buildings of five or more units. It offers incentives tied to affordability, energy efficiency and accessibility. Its tier details are confirmed with CMHC on each file, not published here. The program changes, and an out-of-date table does more harm than none. Looking at a five-plus building? Raise it on a call, and the current rules will be part of the conversation.</p>")}

<h2>Fees, and who pays the broker</h2>
<p>On a rental mortgage with an A lender, the lender pays the broker. You pay nothing for the service, just like with a home you live in.</p>
<p>When a file goes to a B lender or a private lender, lender fees are normal, and a broker fee may apply. In BC, both are disclosed in writing on BCFSA's Form 1A before you commit. So there's never a fee you haven't seen. The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> explains it in full.</p>
<p>Rental files move to alternative lenders more often than owner-occupied ones. That's why the comparison report shows the total cost of each option, fees included, not just the rate.</p>
<p>Have a property in mind, or a portfolio you want to grow? <a href="/contact/">Contact Joshua</a> and bring the numbers you have. The first conversation is about whether the plan works, not about selling you a mortgage.</p>
`;

export default {
  slug: "/investment-property-mortgages-bc/",
  h1: "Investment property mortgages in BC: rentals, suites and portfolios",
  lede: "The down payment, how rent counts, door limits by lender tier, and the named strategies, explained for how lending actually works in Canada.",
  crumbs: [["Home", "/"], ["Investors", "/investment-property-mortgages-bc/"]],
  nav: "/investment-property-mortgages-bc/", calc: !!tool, body,
  faqs: [
    { q: "How much down payment do I need for a rental property in BC?", a: "High-ratio insurance is not available on a non-owner-occupied purchase, so plan on at least 20 percent down; most lenders require it, and some ask for more on certain properties or markets. An owner-occupied home with a legal suite is different: it can be insured with a smaller down payment because you live there." },
    { q: "How much of the rent will a lender count?", a: "It depends on the method. Under a rental offset, typically 50 to 80 percent of rent reduces the property's carrying costs. Under an add-back, commonly about 50 percent is added to your income. CMHC allows up to 100 percent of gross rent for insured owner-occupied two-unit homes, which is a ceiling many lenders do not use. The share and the method are lender policy." },
    { q: "How many rental properties can I finance?", a: "Mainstream lenders usually cover small portfolios, often up to about four rental doors beyond your home, before their policies tighten or the file moves to a commercial team. Alternative lenders are more flexible at a higher cost. The limits are set by each lender and change, so plan which lender takes the next property before you buy the current one." },
    { q: "Are rental mortgage rates higher?", a: "Commonly a little higher than owner-occupied rates at the same lender, and the gap varies from lender to lender. Rates are never printed in these pages because they change constantly. A written comparison shows the rate, the fees and the terms side by side so the true cost of each option is visible, not just the headline number." },
    { q: "Does a broker charge a fee on a rental mortgage?", a: "On a rental placed with an A lender, the lender pays the broker and you pay nothing. On B-lender and private files, lender fees are normal and a broker fee may apply, and both are disclosed in writing on BCFSA's Form 1A before you commit. Rental files go to alternative lenders more often, so the comparison always shows total cost including fees." }
  ]
};
