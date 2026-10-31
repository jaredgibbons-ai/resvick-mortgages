import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>How a reverse mortgage works</h2>
<p>A reverse mortgage is a loan secured by your home that is designed for owners aged 55 and over, and its defining feature is that no regular payments are required. You borrow a lump sum, scheduled advances, or a combination, and the interest is added to the balance as it accrues rather than paid (the example below compounds semi-annually). The loan is repaid when the home is sold, when the last borrower moves out permanently or dies, or when you choose to repay it. Until then, you keep the title, you stay in the home, and the lender's security is the house itself.</p>
<p>The amount available depends on your age, the home's value and location, and the lender's rules. Lenders in Canada typically allow up to about 55 percent of the appraised value, with some products going a little higher, and the share rises with age because a shorter expected term means less interest accumulating. Younger borrowers at 55 are offered a smaller share than borrowers at 75. The money is not taxed as income, and it does not affect Old Age Security or the Guaranteed Income Supplement because it is a loan, not income. The interest rate is higher than on a conventional mortgage, because the lender is lending without payments for an uncertain period.</p>

<h2>The honest cost curve</h2>
<p>The thing to understand before anything else is how the balance grows when nothing is paid. Interest compounds on interest. The illustration below is generic, uses a round rate for the sake of arithmetic, and is not a quote or a prediction. It is here to show the shape of the curve, not a number you will be offered.</p>
<p>Take a $300,000 reverse mortgage on a home worth $900,000, at an illustrative 7 percent compounded semi-annually. After five years the balance is about $423,000. After ten years it is about $597,000. After fifteen years it is about $842,000. If the home's value stayed at $900,000 through all of that, the owner's equity would fall from $600,000 to roughly $58,000 over fifteen years. If the home's value rose, the equity would hold up better; if it fell, worse. Rates and values will both differ from the example, but the shape does not change: the balance doubles in roughly ten years at a 7 percent rate, and the equity shrinks accordingly.</p>
<p>Canadian reverse mortgage lenders generally include a no-negative-equity guarantee, meaning that if the balance ever exceeds the home's value at repayment, the borrower or the estate does not owe the difference, provided the terms of the loan were kept. That protects the estate from a shortfall, but it does not protect the equity. By the time the guarantee matters, the equity is gone.</p>

<h2>Who it suits, and who it does not</h2>
<p>A reverse mortgage can be the right tool for someone who intends to stay in the home for the rest of their life, who has most of their wealth in the house, who cannot or does not want to make payments, and who has considered the effect on their estate and is at peace with it. For that person it converts an illiquid asset into income without a monthly bill, and the no-negative-equity guarantee removes the worst-case risk for their heirs.</p>
<p>It suits poorly anyone who expects to move within a few years, since the costs of setting it up are spread over a short period and prepayment charges can apply. It suits poorly anyone who could make payments on a cheaper loan, because the compounding cost of not paying is high. It suits poorly anyone who intends to leave the home to family, since the balance consumes the inheritance. And it suits poorly anyone being talked into it quickly. The decision has decades of consequences, and there is no reason it needs to be made in a week.</p>

<h2>The alternatives to compare</h2>
<p>Every reverse mortgage conversation should start with the alternatives, because each of them is cheaper in interest if it is available.</p>
<ul>
<li><strong>A home equity line of credit.</strong> A <a href="/heloc-bc/">HELOC</a> charges a lower rate and only on what is drawn, but it requires interest payments each month and you must qualify on income, which is the barrier for many retirees. For someone with pension or investment income who needs occasional access to funds, it is usually the better product.</li>
<li><strong>A conventional refinance or second mortgage.</strong> Also cheaper, also requiring payments and income qualification. A <a href="/second-mortgage-bc/">second mortgage</a> may fit a short-term need. The <a href="/home-equity-estimator/">home equity estimator</a> shows the room under the standard limits.</li>
<li><strong>Downsizing.</strong> Selling and buying something smaller releases equity in full with no interest cost at all, at the price of moving. For many people this is the better financial answer and the harder emotional one. The page on <a href="/downsizing-and-your-mortgage/">downsizing and your mortgage</a> walks through it.</li>
<li><strong>Family arrangements.</strong> Some families lend to a parent against the home, or buy a share of it, keeping the equity in the family rather than paying it to a lender. These need a lawyer and a clear written agreement.</li>
<li><strong>Government and pension income.</strong> Before borrowing, make sure every benefit you are entitled to is being claimed. It costs nothing to check.</li>
</ul>

${cta({ title: "Bring the family to the call", text: "A reverse mortgage is a family decision as much as a financial one. Book a 15-minute call, and bring an adult child or anyone else who will be affected. Joshua will explain the cost curve, the alternatives, and what the estate would look like, with no pressure to proceed." })}

<h2>The family conversation</h2>
<p>A reverse mortgage changes what the estate will be. Adult children who expect to inherit the home, or who expect to help with its upkeep, should know what is being considered before it is signed, not after. The conversations that go well are the ones where the whole family sees the numbers together: what the balance will be in ten and fifteen years, what the home might be worth, and what would be left. Sometimes the family finds a cheaper arrangement among themselves. Sometimes they agree the reverse mortgage is the right call and the parent proceeds with everyone informed. Either outcome is better than a surprise at the estate.</p>
<p>Independent legal advice is required by reverse mortgage lenders in Canada before the loan is signed, and it is worth taking seriously rather than treating as a formality. The lawyer's job is to make sure you understand what you are signing and that nobody is pressuring you.</p>

<h2>Who offers them</h2>
<p>Reverse mortgages in Canada are offered by a small number of specialist lenders, including a federally regulated bank that has offered the product for decades, a second bank that entered the market more recently, and newer entrants. Each sets its own age rules, maximum share of value, rate, fees and prepayment terms, and the terms differ enough that comparing them matters. This page does not name products or quote rates, because the terms change and a rate on a page is out of date the day after it is written. Joshua compares the current offerings for each client and explains the differences in writing.</p>
<p>On a reverse mortgage arranged through a broker, the lender pays the broker and you pay nothing for the service. Any fee that ever applied on a file would be disclosed to you in writing on a Form 1A before you commit. The lender's own fees, for the appraisal, set-up and legal work, are separate and are disclosed by the lender.</p>

<h2>After it is in place</h2>
<p>A reverse mortgage is not a transaction to set up and forget. The balance should be reviewed yearly against the home's value, and the borrower's circumstances can change in ways that make repayment or a move sensible. Joshua's <a href="/mortgage-aftercare-program/">aftercare program</a> includes that annual review for his clients. If you or a parent are considering a reverse mortgage, or already have one and want a second opinion, <a href="/contact/">contact Joshua</a>. The conversation is confidential and there is no obligation.</p>

${callout("Take the time", "<p>Nobody needs to decide on a reverse mortgage quickly. If someone is pressing you to sign, that is a reason to slow down, get independent advice, and involve your family. The loan will still be available next month.</p>")}
`;

export default {
  slug: "/reverse-mortgage-bc/",
  h1: "Reverse mortgages in BC: the honest pros, cons and costs",
  lede: "How a reverse mortgage works for homeowners 55 and over, what the balance does over five, ten and fifteen years when nothing is paid, who it suits, and the alternatives to compare first.",
  crumbs: [["Home", "/"], ["Refinancing", "/refinance-mortgage-bc/"], ["Reverse mortgages", "/reverse-mortgage-bc/"]],
  nav: "/refinance-mortgage-bc/", body,
  faqs: [
    { q: "How does a reverse mortgage work in Canada?", a: "Homeowners aged 55 and over borrow against their home with no regular payments required. Interest is added to the balance monthly, and the loan is repaid when the home is sold, the last borrower moves out permanently or dies, or the borrower chooses to repay. Title stays with the owner." },
    { q: "How much can I get from a reverse mortgage?", a: "Typically up to about 55 percent of the appraised value, with some products slightly higher, and the share rises with age. The exact amount depends on your age, the home's value and location, and the lender's rules. The funds are not taxed as income." },
    { q: "What does a reverse mortgage cost over time?", a: "Because nothing is paid, interest compounds on interest and the balance roughly doubles in about ten years at a 7 percent rate, in a generic illustration. Equity shrinks accordingly unless the home's value rises enough to offset it. Rates are higher than on conventional mortgages." },
    { q: "Can I owe more than my home is worth?", a: "Canadian reverse mortgage lenders generally include a no-negative-equity guarantee: if the balance exceeds the home's value at repayment, the borrower or estate does not owe the difference, provided the loan terms were kept. The guarantee protects the estate from a shortfall, not the equity itself." },
    { q: "What are the alternatives to a reverse mortgage?", a: "A HELOC or conventional refinance if you can qualify on income and make payments, a second mortgage for a short-term need, downsizing to release equity without interest, family lending arrangements with a lawyer involved, and making sure all pension and government benefits are claimed." }
  ]
};
