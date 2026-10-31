import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "Your renewal letter is your lender's opening offer. It must arrive at least 21 days before your term ends, but the best time to compare is about 120 days out. Check the rate, term, payment, amortization and deadline.", who: "BC homeowners holding a renewal letter, or expecting one soon.", next: "Compare the letter against other lenders with the <a href=\"/mortgage-calculators/#renewal\">renewal calculator</a>, or book a 15-minute call." })}
<h2>What the letter is, and what it is not</h2>
<p>Your mortgage renewal letter is often called a renewal statement. Your lender sends it before your term ends. It states your balance, your maturity date and the rates and terms the lender is offering to renew you into. It is not a contract until you sign it, and it is not the only offer available to you. Think of it as your lender's opening position in a negotiation that many borrowers do not realize they are in.</p>

<h2>The two clocks: 21 days and 120 days</h2>
<p>Two time periods govern a renewal, and they do not match. Lenders are required to send the renewal statement at least 21 days before your maturity date. Many send it earlier, but 21 days is the floor, and some letters arrive close to it. Three weeks is a short window. In that time you'd need to compare lenders and maybe arrange an appraisal. A lawyer or notary also has to prepare a transfer.</p>
<p>Your shopping window is longer. Most lenders will hold a rate for roughly 120 days. So the sensible time to start comparing is about four months before maturity. That's well before the letter appears. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> explains how to use that window, and the <a href="/mortgage-renewal-bc/">mortgage renewal hub</a> sets out the full timeline.</p>

<h2>Anatomy of a typical renewal letter</h2>
<p>Most letters include the following elements, though the order and wording vary.</p>
<ul>
<li><strong>Your current balance and maturity date.</strong> Confirm both. The balance should match your latest statement, and the maturity date is the real deadline.</li>
<li><strong>Your current payment and amortization.</strong> The remaining amortization shows how many years are left to pay the mortgage off. It matters because it drives how a new payment is calculated.</li>
<li><strong>The offered rates and term options.</strong> A letter often lists several choices, such as one-, three- and five-year terms, fixed or variable. The rate printed here is the lender's offer, not the lowest rate available to you.</li>
<li><strong>The resulting payment.</strong> Some letters show the new payment for each option, which helps you see the change.</li>
<li><strong>The deadline for responding and how.</strong> This tells you how to accept, usually by signing and returning the document or confirming online.</li>
<li><strong>The default if you do nothing.</strong> A letter often explains what happens if the maturity date arrives unsigned. This is the clause to read twice.</li>
</ul>
<p>The default is the part that surprises people. A mortgage that reaches maturity without a signed renewal usually rolls into an open term. That rate is usually much higher than a negotiated renewal. The page on <a href="/open-vs-closed-mortgage/">open versus closed mortgages</a> explains what an open term is and why lenders use it as the default.</p>

<h2>The three numbers to verify</h2>
<ol>
<li><strong>The rate, against the market.</strong> Ask what a new lender would offer you for the same term. The difference between the two is the value of comparing, and the <a href="/mortgage-renewal-rates-bc/">renewal rates guide</a> explains why switch pricing often beats a retention offer.</li>
<li><strong>The remaining amortization.</strong> Check that it has not been reset to a longer period. A longer amortization lowers the payment but raises the total interest, and it moves you outside a straight switch if you later move lenders.</li>
<li><strong>The balance.</strong> Make sure it matches your records, and that nothing has been added that you did not agree to.</li>
</ol>
<p>Here is an illustrative case. Suppose your letter offers a five-year fixed rate of 4.99 percent on a $450,000 balance with 22 years of amortization remaining. The monthly payment is $2,798.26. If another lender offered 4.49 percent on the same balance and amortization, the payment would be $2,675.50, which is $122.76 less each month. Over five years the interest would be about $10,667 lower. These figures are illustrative, not quotes, but they show why a single comparison can be worth more than the time it takes.</p>

${cta({ title: "Have your letter? Send it over.", text: "Book a 15-minute call and bring your renewal letter. Joshua will explain every line and show you what the alternatives look like." })}

<h2>Red flags to look for</h2>
<ul>
<li><strong>Rates quoted from the posted rate.</strong> If the letter refers to a discount off a posted or advertised rate, ask for the actual rate you would pay. The posted rate can also affect how an early-exit penalty is calculated later.</li>
<li><strong>Collateral charge terms.</strong> Some renewals ask you to sign new security documents. Watch for any plan to re-register your mortgage as a collateral charge. That can make a later move to another lender harder. The charge usually has to be discharged and registered again. Read the section on <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a> to see how this affects your options.</li>
<li><strong>Shrinking prepayment privileges.</strong> Compare the prepayment terms to your current mortgage. If the lump-sum or payment-increase limits are lower, that may not be obvious from the rate.</li>
<li><strong>A short deadline.</strong> A response date close to the maturity date leaves less time to compare. If you need more time, ask for it in writing.</li>
<li><strong>Pressure to sign immediately.</strong> A renewal rarely needs a same-day decision. A letter that implies otherwise is worth a second look.</li>
</ul>
<p>None of these means a letter is a bad offer. They mean it should be read as a negotiating document, not a form to be signed.</p>

<h2>What to do at the 120, 60 and 30 day marks</h2>
<p>At <strong>120 days</strong>, start. Note your maturity date, ask for a rate hold, and request a comparison from a broker. If your lender's letter has already arrived, set it aside until you have comparison numbers.</p>
<p>At <strong>60 days</strong>, decide which route you are taking: negotiate with your current lender, switch, or refinance. If you are switching, the application should be in, with documents gathered and approval underway.</p>
<p>At <strong>30 days</strong>, the paperwork should be moving: legal work in progress for a switch, or signed renewal terms for a stay. At <strong>21 days</strong> at the latest, the lender must have sent the statement, so if you have not received one, contact the lender and ask.</p>
<p>If this timeline feels hard to keep, a free reminder can do the remembering for you. The <a href="/mortgage-renewal-reminder/">renewal reminder</a> sends two emails, at six months and at 120 days before your maturity date. And whenever you want a second pair of eyes on a letter, <a href="/contact/">contact Joshua</a>. On mainstream (A) lender mortgages the lender pays the broker, and you pay nothing for the service.</p>

${callout("Illustrative figures", "<p>The rates, balances and payments in this page are sample figures used for illustration, calculated for this page. They are not quotes and do not describe any specific lender's letter.</p>")}
`;

export default {
  slug: "/mortgage-renewal-letter-explained/",
  h1: "Your mortgage renewal letter, explained",
  lede: "The renewal statement arrives at least 21 days before maturity, and it is an opening offer. What each line means and what to check before you sign.",
  crumb: "Mortgage renewal letter explained", nav: "/mortgage-renewal-bc/", body,
  faqs: [
    { q: "How long before maturity must my lender send a renewal letter?", a: "At least 21 days before your maturity date. Many lenders send it earlier, but that is the minimum. Because rate holds run about 120 days, your real shopping window starts well before the letter arrives, which is why waiting for it can leave you short on time." },
    { q: "Is the rate in my renewal letter negotiable?", a: "Often, yes. The rate in the letter is your lender's opening offer, and lenders frequently have room to move, especially when you show a competing written offer. A broker can obtain comparison offers from other lenders to support the conversation." },
    { q: "What happens if I never sign the renewal letter?", a: "If the maturity date passes unsigned, the mortgage typically rolls into an open term at a rate that is usually much higher than a negotiated renewal. It is a feature of the contract, not a penalty, and it can be avoided by responding before the deadline." },
    { q: "Can I ignore the letter and switch lenders instead?", a: "Yes. At maturity you can move your mortgage to a new lender without a prepayment penalty, and a straight switch often does not need a new stress test. The new lender still checks your credit, income and the property, so start early." },
    { q: "Should I send my letter to a broker?", a: "It helps. A broker can read the rate, term, amortization and prepayment terms against other lenders' offers and tell you what is competitive. Joshua will explain every line on a call, and on A-lender mortgages you pay nothing for that." }
  ]
};
