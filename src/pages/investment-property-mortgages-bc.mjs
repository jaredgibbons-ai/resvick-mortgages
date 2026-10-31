import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

const tool = TOOLS.offset ? TOOLS.offset() : "";

const body = `
<h2>Rental mortgages start from a different set of rules</h2>
<p>A mortgage on a home you live in and a mortgage on a home you rent out look similar on paper. The lender's view of them is not. A rental is underwritten as a small business as much as a property: the lender wants to know what it earns, what it costs, how many of them you already hold, and what happens to your personal finances if a tenant leaves. That changes the down payment, the way your income is calculated, the documents you need and the lenders that will consider the file.</p>
<p>This page is the map for that territory. It covers the basics that apply to every rental purchase in British Columbia, explains how lenders count rent, describes how the number of properties you own changes the lender you need, and then points to the strategy pages that go deeper: the Smith Manoeuvre, debt service coverage lending, the BRRRR cycle, rent-to-own and converting a home you already own. Most people arrive with one question. The sections are arranged so you can find yours and then see what sits around it.</p>

<h2>The basics: down payment, insurance and amortization</h2>
<p>The most important rule is that high-ratio insurance is not available on a non-owner-occupied purchase, so plan on at least 20 percent down. (Small rentals of two to four units can still be insured up to 80 percent loan-to-value, but that does not lower the down payment.) Default insurance is what allows a down payment under 20 percent, so a non-owner-occupied rental generally needs at least 20 percent down from your own resources. Lenders apply that as a floor rather than a target, and some ask for more on certain property types or in smaller markets. Treat 20 percent as the common entry point and confirm the figure for the property you have in mind.</p>
<p>The exception is a home you will live in that also contains a rental unit. An owner-occupied house with a legal basement suite, or a duplex where you occupy one side, can still be an insured purchase with a smaller down payment, because the insurer is covering your home rather than an investment. The rent from the second unit may then help you qualify, which is the subject of the page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a>. Many first purchases in the Fraser Valley are structured exactly this way, and it is often the most practical route into holding a rental.</p>
<p>Uninsured rental mortgages are usually written with amortizations of up to 30 years at many lenders, and the stress test applies: you qualify at the greater of your contract rate plus two percentage points and 5.25 percent. Rates on rentals are commonly a little higher than on owner-occupied homes, and the difference varies by lender, which is one of the things a written comparison of lenders is for.</p>

<h2>How lenders count your rent</h2>
<p>Lenders do not simply add rent to your income. They apply one of two methods, and each uses only a share of the rent.</p>
<ul>
<li><strong>Rental offset.</strong> A share of the rent, typically somewhere between 50 and 80 percent depending on the lender, is subtracted from the property's carrying costs. Only the remainder counts against your ratios.</li>
<li><strong>Rental add-back.</strong> A share of the rent, commonly around 50 percent, is added to your gross income, while the full carrying costs are counted as debts.</li>
</ul>
<p>The method and the share are lender policy, and the two can produce very different results on the same property. CMHC's own guidance for insured owner-occupied two-unit homes allows up to 100 percent of gross rent to be used as an income add-back, which acts as a ceiling rather than a norm; many lenders use less, and some cap at 50 percent. The comparator below runs the same rent through both methods at several shares so you can see the spread. The suite-income page explains the registered-suite rule, which is the reason some rent counts for nothing at all.</p>
${tool}

<h2>Door counts: why the number of properties changes the lender</h2>
<p>Lenders think in doors. A door is a rental unit, and most lenders set a limit on how many you can hold, with that lender or in total, before the file moves out of their ordinary residential programs.</p>
<ul>
<li><strong>Mainstream A lenders.</strong> Residential rental programs commonly cover small portfolios, often up to about four rental doors in addition to your home. Past that point, many A lenders either decline, apply a stricter policy, or route the file to a commercial team with different pricing and documentation.</li>
<li><strong>Alternative and B lenders.</strong> These are more flexible on portfolio size and on how income is proven, at a higher rate, and often with lender fees. Some will also qualify a property mainly on its own cash flow rather than on your personal income, which is the model described on the <a href="/dscr-loans-canada/">debt service coverage ratio loans</a> page.</li>
<li><strong>Commercial and private lenders.</strong> Larger holdings, multi-unit buildings and unusual properties move into commercial underwriting, where the building's net operating income drives the decision.</li>
</ul>
<p>The specific door limits are set by each lender and change over time, so none are printed here as fixed numbers. The practical point is that a growing portfolio needs a plan for which lender takes the fifth and sixth property before the fourth is bought, because the choice of lender on the early purchases can decide what room is left later. Joshua maps that out in a <a href="/lender-comparison-report/">Lender Comparison Report</a> for each purchase.</p>

<h2>The strategy map</h2>
<p>Several named strategies circulate among investors. Each has a page that explains how it works in Canada, because most of the material online is written for the United States and does not survive contact with Canadian lending rules.</p>
<ul>
<li><a href="/smith-manoeuvre/">The Smith Manoeuvre</a>: using a readvanceable mortgage to gradually convert non-deductible mortgage interest into deductible investment interest. General information, with a clear note that it is not tax advice.</li>
<li><a href="/dscr-loans-canada/">DSCR loans</a>: lending based on the property's debt service coverage rather than your paycheque, and how the Canadian version differs from the American product that most articles describe.</li>
<li><a href="/brrrr-strategy-canada/">The BRRRR strategy</a>: buy, renovate, rent, refinance, repeat, and why the refinance step is the one that breaks in Canada if the numbers are not disciplined.</li>
<li><a href="/rent-to-own-homes-bc/">Rent-to-own</a>: for buyers rather than investors, with the cautions that belong to it and a realistic look at the mortgage at the end of the agreement.</li>
<li><a href="/converting-your-home-to-a-rental/">Converting your home to a rental</a>: the checklist for keeping your current home when you move, including what your mortgage, your insurer and the tax rules each require.</li>
<li><a href="/airbnb-and-short-term-rental-mortgages/">Short-term rental mortgages</a>: how Airbnb income is treated by lenders, and the provincial rules that limit where it is allowed at all.</li>
</ul>
<p>Strategies are tools, not plans. A plan starts with your income, your cash, the property and the lender that will approve it, and only then asks which strategy fits.</p>

${cta({ title: "Planning a first rental, or a fifth?", text: "A 15-minute call is enough to work out the down payment, how your rent will count and which lender tier your portfolio belongs in. No documents needed for the first conversation." })}

<h2>Renewals and refinances for landlords</h2>
<p>Rental mortgages do not stay still. Each renewal is a chance to compare lenders, and a rental renewal has its own wrinkles: lenders may want current leases and rent deposits before they will renew or switch, portfolio rules apply again, and a rental often cannot use some of the simplifications available to owner-occupied switches. The page on <a href="/rental-property-mortgage-renewal/">rental property mortgage renewal</a> covers the process and the documents.</p>
<p>Refinancing a rental is the way most investors fund the next purchase. A lenders generally lend up to 80 percent of the appraised value on a rental, and alternative lenders somewhat less, with each lender setting its own limits. The <a href="/refinance-rental-property/">refinance a rental property</a> page walks through the arithmetic, the documents and the tax question of interest deductibility, which depends on how the borrowed money is used. The <a href="/home-equity-estimator/">home equity estimator</a> gives a first look at the room available.</p>

<h2>What a rental file needs</h2>
<p>Expect to document the property as carefully as yourself. A complete rental application typically includes signed leases, bank statements showing the rent arriving, your T776 statement of real estate rentals from your tax return if you already hold rentals, property tax and insurance statements, strata documents for a strata property, and mortgage statements for every property you own. Lenders look at the portfolio, not only the property in front of them, and a missing statement on a third property can stall an approval on a fourth.</p>
<p>Two conditions come up often. A unit that is not legal or registered with the municipality may count for zero rent at a mainstream lender, regardless of what the tenant pays. And a property used for short-term rentals is treated differently from a long-term tenancy, both by lenders and by the Province. If either applies, read the relevant page before you make an offer, because the right lender for that file may not be the one with the lowest rate.</p>

${callout("Multi-unit financing and MLI Select", "<p>CMHC's MLI Select program insures mortgages on buildings of five or more units with incentives tied to affordability, energy efficiency and accessibility. Its tier details are confirmed with CMHC on each file rather than published here, because the program's parameters change and an out-of-date table does more harm than none. If you are looking at a five-plus building, raise it on a call and the current rules will be part of the conversation.</p>")}

<h2>Fees, and who pays the broker</h2>
<p>On a rental mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service, exactly as with an owner-occupied home. Where a file goes to a B lender or a private lender, lender fees are normal and a broker fee may apply; in British Columbia both are disclosed in writing on BCFSA's Form 1A before you commit, so there is never a fee you have not seen. The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> explains the arrangement in full. Rental files do move to alternative lenders more often than owner-occupied ones, which is why the comparison report shows the total cost of each option, fees included, rather than the rate alone.</p>
<p>If you have a specific property in mind, or a portfolio you want to grow, <a href="/contact/">contact Joshua</a> and bring the numbers you have. The first conversation is about whether the plan works, not about selling you a mortgage.</p>
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
