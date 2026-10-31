import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "A bank can only offer its own mortgages. A broker can compare many lenders, and on most mortgages the broker costs you nothing. Sometimes the bank is still the best choice, and a comparison is how you find out.", who: "Anyone deciding between their bank and a mortgage broker, especially first-time buyers.", next: "Get your bank's offer in writing, then <a href=\"/contact/\">ask Joshua</a> for a written comparison." })}
<h2>The structural difference: one shelf or many</h2>
<p>A bank sells its own mortgages. At the branch, you might talk to a mortgage specialist or a relationship manager. Either way, they can only offer the products on that bank's shelf. The bank sets the prices and the rules. They may be excellent people with excellent products. They still cannot show you what the bank across the street would do.</p>
<p>A mortgage broker works differently. A broker is licensed to arrange mortgages and can place one with any of the lenders the brokerage works with. Joshua Resvick is a broker with Xeva Mortgage, a member of the VERICO network, so he is not tied to a single lender. He doesn't fit you to one product. He looks for the lender whose rules and terms fit your situation. Then he puts the options side by side so you can see them.</p>
<p>That structural difference is the heart of the choice. Everything else on this page follows from it.</p>

<h2>Rate access</h2>
<p>Rates are what most people ask about first. The honest answer is that the best lender for you changes. It depends on the day and your down payment. It depends on whether the mortgage is insured. It also depends on how hungry the lender is for business that week. A bank may be competitive in some situations and not in others. A broker's advantage is not a guarantee of a lower rate. It is that you can see several lenders' offers and judge for yourself. The page on <a href="/mortgage-rates-bc/">mortgage rates in BC</a> explains how rates are set and what moves them.</p>
<p>One more point is easy to overlook. A bank's rate offer for a customer who walks in is often an opening position. If you ask for a lower one, you may get it. If you do not know what else is available, you do not know how much to ask for. A comparison gives you that information, wherever you decide to borrow.</p>

<h2>Penalties and fine print</h2>
<p>The mortgage that costs the least on day one is not always the one that costs the least over five years. The terms that decide it sit in the fine print:</p>
<ul>
<li><strong>How the penalty is calculated.</strong> Lenders use different methods for an interest rate differential, and the difference between them can be large.</li>
<li><strong>Prepayment privileges.</strong> How much extra you can pay each year without penalty.</li>
<li><strong>Portability.</strong> Whether you can take the mortgage with you when you move.</li>
<li><strong>The type of charge.</strong> Whether the mortgage is registered as a conventional charge or a collateral charge affects what happens when you want to switch lenders. Read the explanation of <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> before you accept one.</li>
</ul>
<p>When a broker compares lenders, these items should appear in the comparison, not only the rate. In Joshua's practice they appear in the written <a href="/lender-comparison-report/">Lender Comparison Report</a>, which every client receives before choosing.</p>

<h2>Speed and the advice model</h2>
<p>A bank can sometimes move quickly on a straightforward file, particularly for an existing customer with a simple profile. A broker's speed depends on the file and the lender. But a broker who prepares the file like an underwriter, as Joshua does, can often avoid delays. Missing documents and late questions are what slow things down.</p>
<p>The advice model differs too. A bank employee advises within the bank's products. A broker advises across lenders and is paid when the mortgage funds. Both have incentives, and neither is neutral. The right question is whether the incentives are disclosed and whether you can verify the advice. Brokers in BC must disclose how they are paid in writing, and a written comparison lets you check the recommendation.</p>

<h2>Cost</h2>
<p>On a mortgage placed with an A lender, the lender pays the broker, and you pay nothing for the broker's service. Fees to the borrower arise only on some B-lender and private files, and they are disclosed in writing before you commit. The details, including what BC rules prohibit, are on the page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>. Cost is therefore usually not a reason to choose the bank over a broker.</p>

${cta({ title: "See what the market would offer you", text: "A 15-minute call is enough to tell whether a broker's comparison could change your decision, whatever you decide afterwards." })}

<h2>When a bank is a perfectly good answer</h2>
<p>Sometimes the bank really is the right place to borrow.</p>
<ul>
<li><strong>You have a long-standing relationship</strong> and the bank offers something of real value, such as a package of accounts and products you actually use.</li>
<li><strong>Your situation is simple</strong> and the bank's offer is competitive when you compare it. The only way to know is to compare, and even then the answer may be the bank.</li>
<li><strong>A particular product fits you</strong> that only a given bank offers.</li>
</ul>
<p>A good broker will tell you so. Joshua's job is to put the options in front of you and say what he sees. If the offer you already have is the best one, you can take it with more confidence.</p>

<h2>The first-time buyer angle</h2>
<p>For a first-time buyer, the differences matter more. You've never done this before, and you don't know which questions to ask. The choices you make now will follow you for years. That includes the amortization, the type of charge, the prepayment terms and the lender. A broker's role is to explain the process, set up the programs correctly, and put a real comparison in front of you before you commit to a purchase. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the whole sequence. The page on <a href="/mortgage-pre-approval-bc/">mortgage pre-approval</a> explains what a proper one involves. It also explains why to get one before you start looking at homes.</p>
<p>Buyers who start with a pre-approval from a bank are not locked in. A pre-approval is a starting point, and comparing it with what a broker can arrange costs nothing. If you are weighing the two, <a href="/contact/">contact Joshua</a> and he will walk through what a comparison would show.</p>

${callout("A fair way to decide", "<p>Get the bank's offer in writing. Ask a broker for a written comparison. Look at rate, penalty method, prepayment, portability and charge type side by side. Choose the one that fits your plans, not the one that was first or the one that was friendliest.</p>")}
`;

export default {
  slug: "/mortgage-broker-vs-bank/",
  h1: "Mortgage broker vs bank in BC: an honest comparison",
  lede: "A bank sells its own mortgages. A broker can compare many lenders and costs you nothing on most deals. Here is how the two really differ for BC buyers.",
  crumb: "Broker vs bank", nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Should a first-time buyer use a broker or a bank?", a: "Either can work, but a first-time buyer benefits from seeing several options and having the process explained. A broker can compare lenders and set up the programs for you. A bank offer is still worth collecting, so that you can compare it in writing." },
    { q: "Is a mortgage broker really free?", a: "On mortgages placed with an A lender, yes: the lender pays the broker and you pay nothing. Fees to the borrower arise only on some B-lender and private files, and must be disclosed in writing before you commit. See the page on how brokers get paid." },
    { q: "Do brokers always get a better rate than banks?", a: "No. A broker cannot promise a lower rate. What a broker can do is show you what several lenders would offer for your situation, so that you can compare them with your bank's offer and choose with the facts in front of you." },
    { q: "Can I get a mortgage from my own bank after talking to a broker?", a: "Yes. A comparison does not commit you to anything. If your bank's offer turns out to be the best, you can take it. A good broker will tell you so, and the comparison gives you a basis for asking the bank for more." }
  ]
};
