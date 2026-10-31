import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Why people ask about co-signers</h2>
<p>A co-signer is someone who stands behind your mortgage so that a lender will approve it. The usual reasons are an income that is a little short of the ratios, a thin or damaged credit history, a recent move to Canada, or a parent who wants to help a grown child buy a first home. It is a generous thing to ask of someone, and it is also a serious thing to agree to. This page explains what the arrangement involves, how it differs from the other two ways a person can support a mortgage, what it can cost the helper, and what to try before you ask.</p>
<p>One caution before the details. The words co-signer, guarantor and co-borrower are used loosely, and different lenders define them differently. The roles below describe how they commonly work in British Columbia, and the exact terms depend on the lender and on any mortgage insurer involved. Your broker confirms the version your lender uses before anyone signs.</p>

<h2>The three roles compared</h2>
<div class="table-wrap"><table>
<thead><tr><th>Role</th><th>On title?</th><th>Liable for the mortgage?</th><th>Income counted?</th><th>How the person gets out</th></tr></thead>
<tbody>
<tr><th scope="row">Co-borrower</th><td>Yes, as an owner</td><td>Yes, fully, together with the other borrowers</td><td>Yes, along with their debts</td><td>Sale, or a refinance or lender-approved transfer where the remaining owner qualifies alone</td></tr>
<tr><th scope="row">Co-signer</th><td>Depends on the lender; many lenders require it when income is used, some do not</td><td>Yes, fully, as a borrower</td><td>Usually yes, along with their debts</td><td>At renewal or refinance, if the borrower qualifies without them and the lender agrees</td></tr>
<tr><th scope="row">Guarantor</th><td>No</td><td>Yes, if the borrower does not pay; the guarantee stands behind the debt</td><td>Varies; many lenders do not count a guarantor's income toward qualifying, some do</td><td>Lender release, usually at renewal or refinance</td></tr>
</tbody></table></div>
<p>The table shows a pattern. A co-borrower is an owner, so the home is partly theirs. A guarantor is a safety net, so the home is not theirs and the lender usually does not rely on their income to approve the loan. A co-signer sits between the two, and it is the role most affected by lender policy. Some lenders treat a co-signer as a borrower with no ownership. Others require them to go on title, which makes them a co-borrower in everything but name.</p>

<h2>When each is used</h2>
<ul>
<li><strong>A co-borrower</strong> is common among couples, siblings or parents and children who intend to share ownership. It is the clearest arrangement because ownership and responsibility match.</li>
<li><strong>A co-signer</strong> is used when one person has the intent to own and live in the home and another person's income or credit is needed to get the loan approved. Parents helping a first-time buyer are the typical example, and a family member already in Canada helping a newcomer with no Canadian credit history is another. The page on <a href="/new-to-canada-mortgage/">mortgages for newcomers</a> covers the newcomer side of that situation.</li>
<li><strong>A guarantor</strong> is used when the borrower qualifies on income but the file needs extra strength, for example a weaker credit profile or a limited track record. CMHC's published rules, for example, set a minimum credit score of 600 for at least one borrower or guarantor on certain insured programs.</li>
</ul>

<h2>What the co-signer is really agreeing to</h2>
<p>People say yes to a family member quickly, and the risks only show up later. These are the points worth reading aloud before anyone signs. This is general information and not legal, tax or financial advice for your family.</p>
<ul>
<li><strong>Full legal liability.</strong> The lender can pursue the co-signer for the entire balance if payments stop. They are not liable for half or for the share they imagined.</li>
<li><strong>Their own credit and ratios.</strong> The mortgage shows on the co-signer's credit report and is counted among their debts. That can reduce what they can borrow for their own purposes, including a car, a line of credit or a purchase of their own, until they are removed. Lenders will count the full payment.</li>
<li><strong>Control and consequences.</strong> If the borrower pays late, the co-signer's credit takes the damage too. The co-signer may have no say over how the home is used or whether it is sold.</li>
<li><strong>Tax and title questions.</strong> If a co-signer is on title for a home they do not live in, the principal residence exemption generally does not apply to their share, so a later sale can have tax consequences for them. Putting a person on title can also trigger transfer costs and has implications for first-time buyer programs, whose conditions apply to each person on title. Some families use a bare trust to separate legal title from ownership, which has its own tax and land-title reporting consequences. Speak with a lawyer and an accountant before choosing any of these structures.</li>
<li><strong>Life changes.</strong> Death, illness, separation or a falling out in the family can make a signed arrangement very difficult to unwind.</li>
</ul>

<h2>How removal works later</h2>
<p>A co-signer cannot simply decide to leave. The lender has to agree, because the lender approved the loan partly on the strength of that person. In practice there are three routes.</p>
<ol>
<li><strong>Re-qualify at renewal.</strong> When the term ends, the remaining borrower applies for the new term on their own income and credit. If they qualify, the lender releases the co-signer. This is the most common exit, so many families plan a date for it from the beginning.</li>
<li><strong>Refinance.</strong> A refinance at any time can remove a person, under the same condition that the remaining borrower qualifies alone. A refinance carries a prepayment penalty if you break a fixed-term mortgage early, which you can estimate with the <a href="/mortgage-calculators/#penalty">penalty calculator</a>.</li>
<li><strong>Sale.</strong> Selling the home pays off the mortgage and ends everyone's obligation.</li>
</ol>
<p>If the person is also on title, a lawyer prepares the transfer that takes them off, and costs can apply. The process resembles the title change in a separation, which is explained on the page about <a href="/spousal-buyout-mortgage/">spousal buyout mortgages</a>. A useful habit is to ask for a written plan: when the borrower expects to qualify alone, what has to be true for that to happen, and what the family will do if it does not.</p>

<h2>Alternatives to try first</h2>
<p>Asking someone to co-sign is often not the first or best tool. Before you do, consider these.</p>
<ul>
<li><strong>A gifted down payment.</strong> A relative gives money without signing the mortgage or being responsible for it. The gift needs a letter and a paper trail, and the guide to a <a href="/gifted-down-payment/">gifted down payment</a> explains the steps. The relative's risk is limited to the money given, which is a very different commitment from a liability that lasts for years.</li>
<li><strong>Suite income.</strong> If the home has a legal suite, the rent can raise what you qualify for. See <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a>.</li>
<li><strong>A different lender.</strong> Lenders read income and credit differently. A broker may find an A lender that fits, or a <a href="/b-lender-mortgage-bc/">B lender</a> for a file that is stronger than it looks to a bank. B lenders generally charge higher rates and may charge fees, with written disclosure first.</li>
<li><strong>A smaller purchase or a longer wait.</strong> A lower price, a larger down payment saved over a few more months, or paying down a debt can bring the numbers in range without involving anyone. Test the numbers with the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a>.</li>
</ul>

<h2>Questions families should ask each other</h2>
<ul>
<li>What happens if the borrower loses their job, or the co-signer needs the money for something else?</li>
<li>What is the plan, and the date, for taking the co-signer off, and what happens if that date passes?</li>
<li>Does the co-signer need to borrow for themselves in the next few years? If so, how will this mortgage affect that?</li>
<li>Who pays the property tax, the insurance and the repairs, and who decides when to sell?</li>
<li>What is written down, and has each person had advice that is independent of the others?</li>
</ul>
<p>The <a href="/mortgage-application-checklist/">application checklist</a> lists what both people will need to provide. Co-signers go through the same document requirements as the borrower. If you are buying your first home with help, the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> places the choice among the other programs and supports.</p>

${callout("Bring the co-signer to the call", "<p>The best conversations include everyone who will sign. Joshua can explain each role in plain terms (<a href=\"/contact/\">contact him</a> to arrange a time), show the effect on the co-signer's own ratios, and help the family decide whether a co-signer, a gift or a different lender is the better fit before anyone commits.</p>")}

${cta({ title: "Thinking about a co-signer?", text: "Book a 15-minute call and invite the person who would sign. They will hear the risks as clearly as the borrower hears the benefits, and everyone leaves with the same information." })}
`;

export default {
  slug: "/mortgage-with-a-cosigner/",
  h1: "Mortgage with a co-signer in BC: co-signer, guarantor and co-borrower",
  lede: "A co-signer can rescue a tight file, at a real cost to the person signing. Here are the three ways someone can stand behind a mortgage in BC, and what each one commits them to.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Mortgage with a co-signer", "/mortgage-with-a-cosigner/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "What is the difference between a co-signer, a guarantor and a co-borrower?", a: "A co-borrower owns the home with you and is fully liable. A guarantor is not on title and promises to pay if you do not. A co-signer signs the mortgage as a borrower, and some lenders also require them to be on title. Lenders use the words differently, so confirm the lender's version." },
    { q: "Can a co-signer be removed from a mortgage later?", a: "Yes, but only with the lender's agreement. The usual routes are renewal or refinance, where the remaining borrower must qualify on their own income and credit, or a sale. Plan the removal date at the start, and expect legal costs if the person is also on title." },
    { q: "Does co-signing affect the co-signer's own borrowing?", a: "Yes. The mortgage appears on their credit report and its payment is counted in their debt ratios, which can lower what they qualify for on their own purchases, loans or credit lines until they are removed. They are also liable for the whole balance if payments stop." },
    { q: "Is a gifted down payment better than a co-signer?", a: "Often it is the lower-risk option for the helper, because they give a fixed amount and are not liable for the mortgage afterwards. It does not add income to your application, though, so it solves a down payment problem, not an income problem. The right choice depends on which is short." },
    { q: "Are there tax issues if a parent goes on title?", a: "There can be. A person on title for a home they do not live in generally cannot use the principal residence exemption on their share, and some structures such as bare trusts carry reporting requirements. This is general information only, so speak with a lawyer and an accountant before choosing a structure." }
  ]
};
