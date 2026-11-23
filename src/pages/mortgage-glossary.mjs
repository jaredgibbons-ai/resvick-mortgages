import { cta, callout, SITE } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Each group: [heading, intro, [[term, definition-html], ...]]. Terms are alphabetical inside a group.
const GROUPS = [
  ["The basics", "The words you hear first on any mortgage call.", [
    ["Amortization", "The total number of years it would take to pay the mortgage off in full, for example 25 years. A longer amortization means a lower payment and more interest over time."],
    ["Down payment", "The part of the price you pay from your own money. The rest is the mortgage. See the <a href=\"/down-payment-guide-bc/\">down payment guide</a>."],
    ["Equity", "The part of your home you own. It is the value of the home minus what you owe on it."],
    ["Lender", "The bank, credit union or other company that lends you the money. A broker compares many lenders for you."],
    ["Mortgage", "A loan secured by your home. If you do not pay, the lender can take legal steps to recover the money."],
    ["Mortgage broker", "A licensed professional who arranges mortgages with many lenders. On a mortgage with an A lender, the lender pays the broker. See <a href=\"/how-mortgage-brokers-get-paid/\">how brokers get paid</a>."],
    ["Principal", "The amount you borrowed and still owe, not counting interest."],
    ["Term", "The length of your current contract with the lender, often 1 to 5 years. At the end, you renew or switch. The term is not the same as the amortization."]
  ]],
  ["Rates and types of mortgage", "The choices that decide how your rate and payment behave.", [
    ["Closed mortgage", "A mortgage with limits on early payments and a penalty for ending it early. Most mortgages are closed. See <a href=\"/open-vs-closed-mortgage/\">open vs closed</a>."],
    ["Fixed rate", "A rate that stays the same for the whole term. Your payment does not change. See <a href=\"/fixed-vs-variable-mortgage/\">fixed or variable</a>."],
    ["Open mortgage", "A mortgage you can pay off in full, or in part, at any time without a penalty. The rate is usually higher."],
    ["Prime rate", "The rate lenders use as a base for variable rates and lines of credit. It tends to move after the Bank of Canada changes its policy rate."],
    ["Variable rate", "A rate that moves with the lender's prime rate during the term. Depending on the product, your payment either changes or stays the same while the share of interest changes. See <a href=\"/variable-rate-mortgage/\">the variable rate page</a>."]
  ]],
  ["Approval and income", "The terms that decide whether you qualify and for how much.", [
    ["Credit score", "A number from the credit bureaus that sums up how you have handled debt. Lenders use it along with your full credit report."],
    ["Debt service ratios (GDS and TDS)", "Two ratios lenders use to check your budget. GDS compares your housing costs to your income. TDS adds your other debts. See the <a href=\"/mortgage-stress-test-canada/\">stress test page</a>."],
    ["Notice of Assessment", "The letter the Canada Revenue Agency sends after it processes your tax return. Lenders use it to confirm your income."],
    ["Pre-approval", "A lender's review of your finances before you pick a home, which gives you a rate hold and an estimated amount. It is not a final approval. See <a href=\"/mortgage-pre-approval-bc/\">pre-approval</a>."],
    ["Qualifying rate", "The higher rate a lender uses to test whether you could afford the mortgage. See the <a href=\"/mortgage-stress-test-canada/\">stress test</a>."],
    ["Rate hold", "A lender's promise to offer a set rate for a set time while you shop for a home. See <a href=\"/mortgage-rate-hold/\">rate holds</a>."],
    ["Stress test", "A rule that requires you to qualify at a higher rate than the one you pay. The <a href=\"/mortgage-stress-test-canada/\">stress test page</a> explains it."],
    ["Underwriter", "The person at a lender who reviews your file and decides whether to approve it."]
  ]],
  ["Insurance and loan size", "How the size of your down payment changes your mortgage.", [
    ["Conventional mortgage", "A mortgage where you put down at least 20 percent. It does not need mortgage default insurance."],
    ["High-ratio mortgage", "A mortgage with less than 20 percent down. It must be insured against default."],
    ["Loan-to-value (LTV)", "The mortgage balance divided by the value of the home, shown as a percentage. A lower LTV means more equity."],
    ["Mortgage default insurance", "Insurance that protects the lender, not you, if a high-ratio mortgage goes unpaid. You pay the premium, usually added to the mortgage. CMHC is one provider."],
    ["Title insurance", "A one-time policy that protects against certain problems with the ownership of the property. Many lenders and lawyers offer it at closing."]
  ]],
  ["Costs and taxes", "What you pay on top of the price.", [
    ["Closing costs", "The extra costs of buying, such as legal fees, taxes and adjustments. See <a href=\"/closing-costs-bc/\">closing costs in BC</a>."],
    ["Property transfer tax", "A BC tax paid when a property changes hands. First-time buyers and some new-home buyers may qualify for an exemption. See the <a href=\"/bc-property-transfer-tax-calculator/\">calculator</a>."],
    ["Statement of adjustments", "A list your lawyer or notary prepares that shows who owes what at closing, such as property tax already paid by the seller."],
    ["Strata fees", "Monthly fees paid by owners in a condo or townhouse complex for shared costs. Lenders count part of the fee in your debt ratios."]
  ]],
  ["Renewals, penalties and changes", "The terms you meet when you change or end a mortgage.", [
    ["Blend and extend", "A way to lengthen your term and blend your old rate with a new one, without breaking the mortgage. See <a href=\"/blend-and-extend-mortgage/\">blend and extend</a>."],
    ["Interest rate differential (IRD)", "A common way lenders work out the penalty on a fixed-rate mortgage that ends early. Methods differ by lender. See <a href=\"/interest-rate-differential/\">the IRD page</a>."],
    ["Maturity date", "The day your term ends and the mortgage is due for renewal or payout."],
    ["Mortgage discharge", "The removal of the lender's claim from your title once the mortgage is paid in full."],
    ["Porting", "Moving your mortgage rate and terms to a new home when you sell and buy. See <a href=\"/porting-your-mortgage/\">porting</a>."],
    ["Prepayment privileges", "The extra payments the lender lets you make each year without a penalty. See <a href=\"/prepayment-privileges-and-penalties/\">prepayment privileges</a>."],
    ["Refinance", "Replacing your mortgage with a new one, often with a different amount, rate or lender, usually to borrow more or change the terms. See the <a href=\"/refinance-mortgage-bc/\">refinance guide</a>."],
    ["Renewal", "Signing a new term when your current term ends. You can stay with your lender or move. See the <a href=\"/mortgage-renewal-bc/\">renewal guide</a>."]
  ]],
  ["Other kinds of borrowing", "Mortgages and loans beyond the usual purchase.", [
    ["A lender and B lender", "A lenders are banks and similar lenders with standard rules and lower rates. B lenders have more flexible rules and higher rates. See the <a href=\"/b-lender-mortgage-bc/\">B lender page</a>."],
    ["Bridge financing", "A short loan that covers the gap between buying a new home and selling the old one. See <a href=\"/bridge-financing/\">bridge financing</a>."],
    ["Collateral charge", "A type of mortgage registration that can secure more than the original loan. See <a href=\"/collateral-charge-mortgage/\">collateral charges</a>."],
    ["Co-signer", "A person who signs the mortgage to help you qualify, and who becomes responsible for the debt. See the <a href=\"/mortgage-with-a-cosigner/\">co-signer page</a>."],
    ["Home equity line of credit (HELOC)", "A revolving line of credit secured by your home. You borrow what you need, and you can borrow again as you repay. See <a href=\"/heloc-bc/\">HELOC</a>."],
    ["Private mortgage", "A mortgage from a private lender instead of a bank. It usually costs more and is used for short periods. See <a href=\"/private-mortgage-lending-bc/\">private lending</a>."],
    ["Readvanceable mortgage", "A mortgage combined with a credit line that grows as you pay down the mortgage. See <a href=\"/readvanceable-mortgage/\">readvanceable mortgages</a>."],
    ["Reverse mortgage", "A loan for older homeowners that needs no regular payments, and whose balance grows over time. See <a href=\"/reverse-mortgage-bc/\">reverse mortgages</a>."],
    ["Second mortgage", "A loan secured by your home behind your first mortgage. It usually costs more. See <a href=\"/second-mortgage-bc/\">second mortgages</a>."]
  ]],
  ["When payments go wrong", "Terms you hope not to need, and should understand.", [
    ["Default", "Failing to meet the terms of the mortgage, most often by missing payments."],
    ["Foreclosure", "The legal process a lender uses to take and sell a property after a default. In BC it goes through the court. See <a href=\"/mortgage-default-and-foreclosure-bc/\">default and foreclosure</a>."],
    ["Payment deferral", "An agreement with the lender to pause or reduce payments for a time. See <a href=\"/mortgage-payment-deferral/\">payment deferral</a>."]
  ]]
];

const strip = (h) => h.replace(/<[^>]+>/g, "");
const termId = (t) => "t-" + t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const count = GROUPS.reduce((n, g) => n + g[2].length, 0);

const groupsHtml = GROUPS.map(([h, intro, terms]) => `<h2>${h}</h2>
<p>${intro}</p>
<dl class="gloss">\n${terms.map(([t, d]) => `<dt id="${termId(t)}">${t}</dt>\n<dd>${d}</dd>`).join("\n")}\n</dl>`).join("\n\n");

const body = `
${short({
  answer: "This is a plain-language list of the mortgage terms you meet in BC, grouped by the stage you are at. Each entry is short and links to a fuller page where there is one.",
  who: "You're starting out, or you've heard a word on a call and nodded along. No one expects you to know them all.",
  next: "Find the word you need, then <a href='/contact/'>ask Joshua</a> about anything that is still unclear."
})}

<h2>How to use this glossary</h2>
<p>Mortgage language can feel like a second language. Lenders use terms with fixed meanings, and the details matter. A word that sounds simple, such as term or rate, can mean something narrower than you expect. A few minutes with this page can make your first call much easier.</p>
<p>The words are grouped by the stage you are likely at, from the basics to what happens at renewal, and then to problems you hope never to meet. Each entry is short. Where there is a fuller page on the site, the entry links to it. Lenders use their own versions of some terms, and the details can differ, so treat these as plain definitions and not as contract language.</p>

${groupsHtml}

<h2>Terms that are easy to mix up</h2>
<ul>
<li><strong>Term and amortization.</strong> The term is the length of your contract, often 1 to 5 years. The amortization is the total time to pay off the debt, often 25 years. You will renew several times before the amortization ends.</li>
<li><strong>Pre-qualification and pre-approval.</strong> A pre-qualification is a rough estimate based on what you tell a lender. A pre-approval reviews your documents and credit. Neither one is a final approval, which only comes after the lender reviews the property.</li>
<li><strong>Renewal and refinance.</strong> A renewal happens at the end of your term, usually with the same balance. A refinance replaces the mortgage in the middle of a term or changes the amount, and it normally needs a full application.</li>
<li><strong>Prime rate and policy rate.</strong> The policy rate is set by the Bank of Canada. Prime is set by each lender, and it usually moves after the policy rate does. Variable mortgages follow prime.</li>
<li><strong>Insured and insurance.</strong> Mortgage default insurance protects the lender. Life insurance and title insurance protect you or the title. They are different products.</li>
</ul>

<h2>Where to go next</h2>
<p>If a word on this page raised a bigger question, start with the guide that fits your stage. First-time buyers can read the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Homeowners coming up on a renewal can read the <a href="/mortgage-renewal-bc/">renewal guide</a>. If you want to see how the numbers work, the <a href="/mortgage-calculators/">calculators</a> are free, and they do not ask for an email. The <a href="/mortgage-faq/">mortgage FAQ</a> answers many common questions in plain words.</p>

${callout("Ask when a word is unclear", "<p>No one should have to sign a mortgage document they do not understand. Joshua will explain any term in plain words, and he will show you where it appears in your own file.</p>")}

${cta({ title: "Still have a question about a term?", text: "Book a 15-minute call, or <a href=\"/contact/\">contact Joshua</a> by email. Joshua will explain what each word means for your own mortgage." })}
`;

export default {
  slug: "/mortgage-glossary/",
  h1: "Mortgage glossary for BC buyers: " + count + " terms in plain language",
  lede: "The mortgage words you will hear in BC, explained in plain language and grouped by stage, with links to the fuller guide where there is one.",
  crumbs: [["Home", "/"], ["Resources", "/resources/"], ["Mortgage glossary", "/mortgage-glossary/"]],
  nav: "/resources/",
  schema: [{
    "@context": "https://schema.org", "@type": "DefinedTermSet", "@id": SITE.origin + "/mortgage-glossary/#terms", name: "Mortgage glossary for BC buyers", url: SITE.origin + "/mortgage-glossary/", inLanguage: "en-CA",
    hasDefinedTerm: GROUPS.flatMap((g) => g[2]).map(([t, d]) => ({ "@type": "DefinedTerm", name: t, description: strip(d), url: SITE.origin + "/mortgage-glossary/#" + termId(t), inDefinedTermSet: SITE.origin + "/mortgage-glossary/#terms" }))
  }],
  body,
  faqs: [
    { q: "What is the difference between a mortgage term and amortization?", a: "The term is the length of your current contract with the lender, often 1 to 5 years. The amortization is the total time it would take to pay the mortgage off, often 25 years. You renew many times within one amortization." },
    { q: "What is the difference between pre-qualification and pre-approval?", a: "A pre-qualification is a rough estimate based on what you tell a lender. A pre-approval reviews your income, credit and documents, and often includes a rate hold. Neither is a final approval, which comes after the lender reviews the property." },
    { q: "What does LTV mean?", a: "LTV stands for loan-to-value. It is the mortgage balance divided by the value of the home, shown as a percentage. If you borrow 80 percent of the value, your LTV is 80 percent and your equity is 20 percent." },
    { q: "What is a prepayment penalty?", a: "It is the charge for ending a closed mortgage early or paying more than your prepayment privileges allow. How it is worked out depends on the lender and the type of rate. The penalty and IRD pages explain the common methods." },
    { q: "Who do I ask when a mortgage word is unclear?", a: "Ask your broker or lender before you sign, and ask your lawyer or notary about legal terms. A good broker will explain each term in plain words and show you where it appears in your documents." }
  ]
};
