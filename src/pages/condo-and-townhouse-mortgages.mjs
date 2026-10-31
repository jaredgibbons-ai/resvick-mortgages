import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "A condo or townhouse mortgage depends on three things: you, the unit and the strata building. A weak strata can shrink your approval or lead to a decline.",
  who: "Read on if you're buying a strata-titled condo or townhouse in BC. Buying before the building exists? See <a href=\"/presale-mortgages-bc/\">presale mortgages</a>.",
  next: "Ask for the strata documents early, then <a href=\"/contact/\">send them to Joshua</a> before you remove conditions."
})}
<h2>A strata purchase is two files, not one</h2>
<p>When you buy a detached house, the lender looks at you and the house. When you buy a condo or a townhouse in British Columbia, the lender looks at three things. They are you, the unit, and the strata corporation that owns the building around it. That third file is the one most buyers have never seen before. It's also the one that most often changes an approval late in the process.</p>
<p>Some stratas have a thin contingency reserve, a looming special levy, a lawsuit over the building envelope, or a depreciation report full of deferred work. Any of these can turn a clean personal application into a decline. Or you may get an approval with a smaller mortgage than you planned.</p>
<p>This page explains what lenders read in the strata documents. It shows how strata fees are counted against your income. It explains why building insurance and depreciation reports matter to an underwriter, and it lists what to do, in the order that protects you. It's written for a BC buyer of a strata-titled condo or townhouse, whether a resale unit or a completed presale. If you're buying before the building exists, the <a href="/presale-mortgages-bc/">presale mortgages</a> page covers the deposit and completion risks that come first.</p>

<h2>The strata documents a lender expects to see</h2>
<p>Under the BC Strata Property Act, a strata corporation must provide a set of documents on request. A buyer's offer is usually made subject to reviewing them. Lenders ask for the same set, either directly or through the appraiser. An underwriter reads them for different reasons than you do.</p>
<ul>
<li><strong>The Form B Information Certificate.</strong> This is the strata's official snapshot of one lot. It shows the monthly strata fee for the unit and any amount the owner owes the strata. It shows the balance of the contingency reserve fund and whether the strata is in litigation or arbitration. It also covers how parking stalls and storage lockers are allocated, and whether the owner has an alteration agreement with the strata. The current rules, the current budget and the most recent depreciation report, if one exists, are attached to it (BCFSA practice resource, March 2023). A Form B goes out of date, for example after a new budget passes at an annual general meeting. So a lender may want a recent one, even if you reviewed an older copy.</li>
<li><strong>Strata council and general meeting minutes.</strong> Typically the last two years. Underwriters scan for words like envelope, leak, remediation, levy, legal and insurance deductible. Minutes are where a problem shows up months before it reaches a budget.</li>
<li><strong>The depreciation report.</strong> This is a professional assessment of the building's common property and components. It shows what they cost to maintain and replace, and when. Lenders use it to judge whether the contingency reserve fund matches the building's real needs.</li>
<li><strong>The strata's insurance summary.</strong> This shows the building policy, its coverage and, increasingly, its deductibles. Lenders require that the building be insured. A large water-damage deductible is a risk the unit owner carries.</li>
<li><strong>Bylaws and rules.</strong> Rental and age restrictions affect who can buy the unit from you later. Some lenders treat age-restricted or restricted-rental buildings differently.</li>
<li><strong>The budget and financial statements.</strong> These show the operating budget, the reserve contributions, and whether the strata is running a deficit.</li>
</ul>
<p>Review these with your realtor before you remove conditions. For anything unusual, add a lawyer. The <a href="/mortgage-application-checklist/">mortgage application checklist</a> covers the personal side of the file. The strata documents are the property side. They take time to get, so ask for them early.</p>

<h2>How strata fees are counted against your income</h2>
<p>Strata fees are a housing cost. Lenders include them in the gross debt service and total debt service ratios that decide how much you can borrow. The common lender convention is to count half of the monthly strata fee in those ratios. The reasoning is that part of the fee pays for things like heat or water, which a house owner would pay separately. The ratios already cover those through the heating allowance.</p>
<p>That 50 percent treatment is a convention, not a rule. Some lenders count the full fee, and some count half. Insured mortgages follow the insurer's guideline. Ask which applies to your file.</p>
<p>The effect is larger than most buyers expect. A $600 monthly strata fee counted at 50 percent adds $300 a month to your housing costs for qualifying purposes. At today's qualifying rates, that reduces the mortgage you can carry by a meaningful amount. Run the figure through the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which has a field for strata fees. Compare two buildings with different fees before you choose between them. A lower price with a higher strata fee can qualify for less than a higher price with a lean, well-run strata.</p>
<p>One trap: strata fees change. A unit advertised with a modest fee can carry a much higher one after the next annual general meeting. A special levy approved before completion is normally the seller's to pay. One approved after is yours. The Form B states the fee as of its date. Check that date, and check the minutes for any fee increase or levy under discussion.</p>

<h2>Depreciation reports: what changed, and why lenders care</h2>
<p>Since July 1, 2024, BC stratas with five or more lots must get a depreciation report every five years. The old option of waiving the requirement by a three-quarter vote of owners has been removed. Stratas without a current report must get one by July 1, 2026 in Metro Vancouver, the Fraser Valley and the Capital Regional District. Elsewhere in the province, the deadline is July 1, 2027.</p>
<p>From July 1, 2025, the report must be prepared by one of six designated professions. For stratas created from July 1, 2027 onward, the developer will partly fund the first report. Sources: Lawson Lundell summary of the Strata Property Regulation changes, and the regional deadlines in the Order in Council of April 2024. Stratas with four or fewer lots are outside the requirement.</p>
<p>For a buyer, the report is the clearest picture of what the building will cost over the next thirty years. For a lender, it answers a narrower question. Is the contingency reserve fund roughly in line with the report's funding model? Or is the strata heading toward a special levy that owners will struggle to pay?</p>
<p>Picture a building with an old roof, original plumbing and a reserve fund that wouldn't cover either. A lender may limit the loan-to-value, ask for a larger down payment, or decline. A missing report in a building that should have one is a flag in itself. After the deadlines above, it will be a compliance failure the lender can see in the Form B.</p>

${cta({ title: "Buying a strata unit and want the documents read like a lender would?", text: "Send Joshua the Form B, the minutes and the depreciation report before you remove subjects. He will tell you what an underwriter is likely to see, and whether anything in them changes the mortgage you can expect." })}

<h2>Building insurance and the deductible problem</h2>
<p>Every lender requires the strata corporation to carry insurance on the building. The strata's policy, not your own, covers the structure and common property. Your own condo policy covers your contents and your improvements. Critically, it also covers your share of a strata deductible if a claim starts in your unit.</p>
<p>Strata insurance deductibles in BC rose sharply in recent years. Water-damage deductibles in the tens of thousands of dollars are no longer unusual in older buildings. A lender reviewing the insurance summary asks three things. Is the building insurable at all? Is the policy current? Are the deductibles so high that an ordinary leak becomes an owner's financial crisis?</p>
<p>Two practical points follow. Make sure your own policy's deductible coverage is at least as large as the strata's largest deductible. And read the minutes for any mention of claims, because a building with repeated claims pays more for insurance and sometimes can't renew on the same terms. The <a href="/closing-costs-bc/">closing costs</a> page lists the insurance and other costs due on completion.</p>

<h2>Townhouses: the same rules, with two differences</h2>
<p>A townhouse in a bare-land or building strata is still a strata purchase, and the documents above still apply. Two differences matter to lenders.</p>
<p>First, in many townhouse stratas the owner is responsible for more of the structure under the bylaws, such as the roof or the exterior. That changes who pays for a repair the depreciation report identifies. Second, townhouse strata fees are often lower. So the 50 percent convention has a smaller effect on your ratios. Confirm which parts are common property and which are yours. Don't assume a fee is low just because the building is well run.</p>
<p>Townhouses are also where the line between a strata unit and a freehold row house blurs. A freehold rowhouse with no strata has no strata fees and no strata documents, and lenders treat it as a house. A fee-simple unit inside a strata still has fees and a Form B. The title search tells you which you're buying, and it's worth a question to your lawyer.</p>

<h2>What a declined strata looks like, and what you can do</h2>
<p>Lenders rarely say a building is unacceptable in those words. More often the appraiser's report notes a concern, and the underwriter asks for more documents. Then the approval comes back with a lower loan-to-value, or a condition that can't be met.</p>
<p>The common triggers are:</p>
<ul>
<li>An unresolved building-envelope problem.</li>
<li>An active lawsuit against the strata.</li>
<li>An insurance policy that has lapsed or carries an exclusion.</li>
<li>A reserve fund that is clearly too small against the depreciation report.</li>
<li>A large special levy with no funding plan.</li>
</ul>
<p>Buildings with a high share of short-term or non-owner occupancy draw extra questions at some lenders. So do buildings with commercial space on the ground floor.</p>
<p>If a strata concern comes up, you have four options. You can put down a larger down payment. You can use a different lender whose appetite for that building differs. You can renegotiate the price to reflect a coming levy. Or you can walk away while your conditions still allow it. A broker who reads the documents early can usually tell which one applies before you're committed.</p>
<p>The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the timing of conditions and deposits for a first purchase. The city pages for <a href="/mortgage-broker-vancouver/">Vancouver</a> and <a href="/mortgage-broker-surrey/">Surrey</a> cover the local strata stock. That ranges from older wood-frame low-rises to new concrete towers, each with its own typical issues.</p>

${callout("Fees, and who pays the broker", "<p>Arranging a condo or townhouse mortgage is ordinary A-lender work. The lender pays the broker, and you pay nothing for the service. Fees arise only on B-lender and private files. You get written disclosure on BCFSA's Form 1A before you commit. A strata concern alone does not push a file into that category. <a href=\"/contact/\">Contact Joshua</a> with the address and the documents, and he will tell you how a lender is likely to read them.</p>")}
`;

export default {
  slug: "/condo-and-townhouse-mortgages/",
  h1: "Condo and townhouse mortgages in BC: the strata rules lenders care about",
  lede: "Form B, minutes, depreciation reports and insurance: what an underwriter reads in the strata documents, how strata fees are counted against your income, and the problems that turn an approval into a decline.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Condo and townhouse mortgages", "/condo-and-townhouse-mortgages/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Do lenders count strata fees when deciding how much I can borrow?", a: "Yes. Strata fees are a housing cost in the debt service ratios. The common convention is to count 50 percent of the monthly fee, on the basis that part of it covers utilities the ratios already allow for, but some lenders count the full amount and insured files follow the insurer's guideline. A $600 fee counted at half adds $300 a month to your qualifying housing costs." },
    { q: "What strata documents will the lender want?", a: "The Form B Information Certificate with its attachments (rules, budget and the most recent depreciation report), two years of strata council and general meeting minutes, the insurance summary, the bylaws and the financial statements. The appraiser often collects them, but having them ready shortens the approval. Your offer should be subject to reviewing the same set." },
    { q: "Does every BC strata need a depreciation report now?", a: "Stratas with five or more lots do. Since July 1, 2024 the report is required at least every five years and can no longer be waived by owner vote. Buildings without a current report must obtain one by July 1, 2026 in Metro Vancouver, the Fraser Valley and the Capital Regional District, and by July 1, 2027 elsewhere in BC. Stratas with four or fewer lots are exempt." },
    { q: "Can a lender decline a mortgage because of the building?", a: "Yes, or limit the loan-to-value. The usual triggers are an unresolved envelope or water problem, litigation against the strata, lapsed or restricted insurance, a reserve fund far below what the depreciation report calls for, or a large unfunded special levy. A different lender, a larger down payment or a renegotiated price are the common responses, and the earlier the documents are read the more options you keep." },
    { q: "Is a townhouse treated the same as a condo?", a: "If it is strata-titled, largely yes: the same documents, the same fee treatment and the same reserve-fund questions. Townhouse bylaws often make the owner responsible for more of the structure, and fees tend to be lower, so the effect on your ratios is smaller. A freehold rowhouse with no strata is underwritten as a house, with no strata fees or Form B." }
  ]
};
