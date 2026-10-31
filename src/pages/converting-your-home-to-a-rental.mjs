import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "You can keep your current home as a rental when you move. Four parties will treat it differently: your lenders, your insurer and the tax agency. Each has its own rules.",
  who: "Read on if you're buying a new home and keeping the old one. Planning to sell instead? Start with <a href=\"/bridge-financing/\">bridge financing</a>.",
  next: "Tell your current lender first, then <a href=\"/mortgage-calculators/#affordability\">check what you'd qualify for</a> with both mortgages."
})}
<h2>Keeping the old home is a decision with four moving parts</h2>
<p>When you move and keep your current home as a rental, nothing physical changes. The house is the same. The mortgage is the same. The address is the same. But four different parties start treating it differently. They are the lender on your existing mortgage, the lender on your new purchase, your insurer, and the Canada Revenue Agency.</p>
<p>Each has its own rules about a property that stops being your home and starts being an investment. Ignore any one of them, and you create a problem that shows up later, usually at the worst time.</p>
<p>This page is a checklist, in the order the steps tend to come up. It's written for a BC homeowner who is buying a new home and wants to keep the current one. That's the most common version. The tax section is general information and points you to an accountant. The tax treatment of a converted home is where the biggest and least reversible mistakes happen.</p>

<h2>Step one: tell your existing lender, and read your mortgage</h2>
<p>Most residential mortgages are approved on the basis that you live in the property. An insured mortgage has a down payment under 20 percent and a CMHC, Sagen or Canada Guaranty premium. It was specifically underwritten as owner-occupied.</p>
<p>Converting the property to a rental doesn't usually mean you have to pay out the mortgage. Lenders see this situation often. But tell the lender and ask what their policy is. Some require nothing. Some note the change. Some apply a different rate or product at renewal. Doing this quietly and hoping no one notices is a poor plan. The lender will find out at renewal or when you apply for the next mortgage. The insurer may also have conditions of its own.</p>
<p>Read the mortgage for an occupancy clause and for anything about renting the property. Most are silent or permissive once the mortgage has funded. A few are not.</p>
<p>If the mortgage is portable, you could port it to the new home instead of leaving it on the rental. That's a separate option worth comparing. The <a href="/porting-your-mortgage/">porting your mortgage</a> page explains it. Keeping the old mortgage where it is often makes sense. The rate may be lower than what's available now, and it avoids a prepayment penalty. Still, do the comparison in writing.</p>

<h2>Step two: qualifying for the new purchase while carrying the old one</h2>
<p>This step decides whether the plan works at all. You now have two mortgages, and the new lender will count both. The old mortgage's payment, property tax, heating and any strata fees all go into your ratios.</p>
<p>The rent you'll receive counts only partly, using the lender's method. One method is a rental offset. That's typically 50 to 80 percent of the rent against the property's costs. The other is an add-back of roughly 50 percent to your income. The lender sets the share. The page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> explains the methods. The <a href="/mortgage-calculators/#offset">rental income comparator</a> shows the spread. Many homeowners find that the rent covers less of the old payment in the lender's eyes than it does in real life. The gap comes out of their qualifying room for the new purchase.</p>
<p>Lenders will want a signed lease before counting any of the rent. At the least, they'll want an appraiser's estimate of market rent. If the home isn't rented yet when you apply, expect the lender to use a market rent letter and to discount it.</p>
<p>The down payment on the new home follows the usual rules. If the new home is insured, it must be the one you'll live in. You can't hold an insured mortgage on the rental and claim the new home is also owner-occupied if it isn't.</p>
<p>Timing is the other pressure. Say the new purchase completes before the old home is rented. You carry two full payments for a while. Or say you planned to sell but changed your mind. Any bridge financing that assumed a sale has to be rethought. The <a href="/bridge-financing/">bridge financing</a> page explains what bridge loans require. It also explains why a firm sale is usually one of the conditions. Start with a written plan with dates, run against your real ratios. The <a href="/mortgage-calculators/#affordability">affordability calculator</a> gives you a rough view before the conversation.</p>

<h2>Step three: insurance</h2>
<p>A standard homeowner's policy covers a home you live in. It generally doesn't cover a home occupied by tenants. An insurer that finds out about a tenancy after a claim can deny it.</p>
<p>Before the first tenant moves in, switch the policy to a landlord or rental property policy. It covers the building, liability and often loss of rent. Ask the tenant to carry their own contents and liability insurance. Many landlords make tenant insurance a condition of the lease. Tell the insurer the truth about the occupancy and the use. Otherwise you may end up with a policy that doesn't pay.</p>

<h2>Step four: the tax side, in general terms</h2>
<p>Read this section with an accountant beside you. In general, a home that has been your principal residence may become a rental. When it does, the Income Tax Act treats the change in use as if you sold the property at its fair market value on that date and bought it back. The gain up to that point is usually sheltered by the principal residence exemption. Growth after the change in use is potentially taxable when you eventually sell.</p>
<p>There is an election that can defer the deemed sale for a period, under certain conditions. An accountant will assess that. Getting an appraisal at the date of the change in use is commonly recommended. It sets the value from which any future gain is measured.</p>
<p>From that date, the rent is income, and the expenses of earning it are generally deductible. The mortgage interest on the rental is generally deductible as a carrying cost, while the money borrowed is used to earn rental income. Later you might refinance the rental to fund something personal. The deductibility of that portion changes, which the <a href="/refinance-rental-property/">refinance a rental property</a> page notes. Typical deductions include property tax, insurance, strata fees, repairs and a share of other costs. The T776 statement of real estate rentals is where you report them.</p>
<p>British Columbia adds its own layers. The Speculation and Vacancy Tax requires an annual declaration in the areas where it applies. A rented home generally qualifies for an exemption, but you must still make the declaration. Municipal empty homes taxes, such as Vancouver's, have their own declarations. None of these is a reason not to convert. All of them are reasons to put dates in a calendar.</p>

${cta({ title: "Buying a new home and keeping the old one?", text: "A 15-minute call will show whether your income and the rent carry both mortgages in a lender's eyes, and what to do if they do not. Bring the current mortgage statement and an idea of the rent." })}

<h2>Step five: become a landlord properly</h2>
<p>Residential tenancies in BC are governed by the Residential Tenancy Act. It sets rules for deposits, rent increases, notices and ending a tenancy. The basics are a written lease on the standard provincial form, a condition inspection report at move-in, and a separate account for the damage deposit. Screen tenants carefully. The lender that counts your rent is counting rent that actually arrives. And the lease you sign is the document the next lender will read.</p>
<p>At the old home's next renewal, you'll be renewing a rental. That's handled a little differently from an owner-occupied renewal. Lenders may want current lease and rent evidence before renewing or switching. Some simplifications available to owner-occupied switches may not apply. The <a href="/rental-property-mortgage-renewal/">rental property mortgage renewal</a> page covers it. The wider rules for holding rental property in BC, including door limits and lender tiers, are on the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>.</p>

${callout("Fees, and who pays the broker", "<p>Arranging the new purchase and reviewing the old mortgage is ordinary broker work. On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on B-lender and private files. You get written disclosure on BCFSA's Form 1A before you commit. Tax and legal advice belong with your accountant and lawyer. Joshua will say so rather than guess. <a href=\"/contact/\">Contact him</a> with the two properties and the dates.</p>")}
`;

export default {
  slug: "/converting-your-home-to-a-rental/",
  h1: "Converting your home to a rental: the mortgage, insurance and tax steps",
  lede: "Keeping your current home when you move means four parties start treating it differently. The BC checklist, in the order the steps arise.",
  crumbs: [["Home", "/"], ["Investors", "/investment-property-mortgages-bc/"], ["Convert to rental", "/converting-your-home-to-a-rental/"]],
  nav: "/investment-property-mortgages-bc/", body,
  faqs: [
    { q: "Do I have to tell my lender if I rent out my home?", a: "You should. Most mortgages, and all insured ones, were approved on the basis that you live in the property. Lenders see conversions often and rarely require a payout, but policies vary, and the lender will learn of the change at renewal or your next application anyway. Read the mortgage for occupancy clauses and ask the lender directly." },
    { q: "Will the rent cover the old mortgage when I qualify for the new one?", a: "In a lender's eyes, usually not fully. Lenders count only a share of rent, typically 50 to 80 percent under an offset or about 50 percent under an add-back, while counting the full payment, taxes and heating of the old home. The difference comes out of your qualifying room for the new purchase, so run the numbers before you offer." },
    { q: "Does my home insurance still work once tenants move in?", a: "Generally not. A homeowner's policy covers a home you occupy, and an insurer that discovers a tenancy after a claim can deny it. Switch to a landlord or rental property policy before the first tenant arrives, and consider requiring tenants to carry their own contents and liability insurance." },
    { q: "What happens with tax when my home becomes a rental?", a: "In general, the change in use is treated as if you sold the home at market value that day and bought it back. The gain to that point is usually sheltered by the principal residence exemption; growth afterward may be taxable on a later sale. An election can defer this under certain conditions. Get an appraisal at the change date and speak with an accountant." },
    { q: "Should I port my mortgage to the new home instead?", a: "It depends on the rate and the penalty. Leaving the old mortgage on the rental often makes sense if its rate is below current rates and avoids a prepayment penalty, but porting can suit other situations. Compare both in writing, including how each affects qualifying for the new purchase, before deciding." }
  ]
};
