import { SITE } from "./site.mjs";
// Tool markup. One engine (src/assets/js/engine.js), many skins. Behaviour lives in calc-ui.js.
const num = (name, label, o = {}) => `<div class="fld"><label for="${o.id || name}">${label}</label><input id="${o.id || name}" name="${name}" type="number" inputmode="decimal" step="${o.step || "any"}" min="${o.min ?? 0}"${o.value != null ? ` value="${o.value}"` : ""}${o.ph ? ` placeholder="${o.ph}"` : ""}${o.req ? " required" : ""}>${o.hint ? `<span class="hint">${o.hint}</span>` : ""}</div>`;
const sel = (name, label, opts, v) => `<div class="fld"><label for="${name}">${label}</label><select id="${name}" name="${name}">${opts.map(([k, t]) => `<option value="${k}"${k === v ? " selected" : ""}>${t}</option>`).join("")}</select></div>`;
const chk = (name, label) => `<label class="chk"><input type="checkbox" name="${name}"><span>${label}</span></label>`;
const chkOn = (name, label) => `<label class="chk"><input type="checkbox" name="${name}" checked><span>${label}</span></label>`;
const row3 = (...a) => `<div class="row3">${a.join("")}</div>`;
const FREQS = [["monthly", "Monthly"], ["semimonthly", "Semi-monthly"], ["biweekly", "Bi-weekly"], ["weekly", "Weekly"], ["accbiweekly", "Accelerated bi-weekly"], ["accweekly", "Accelerated weekly"]];
const AMORT = [["25", "25 years"], ["30", "30 years (first-time buyers and new builds, insured)"], ["20", "20 years"], ["15", "15 years"], ["35", "35 years (uninsured)"]];

function tool(id, calc, title, blurb, fields, honest, btn = "Calculate") {
  // Field ids must be unique on the page (several tools share names like "rate" and "balance"); labels follow.
  fields = fields.replace(/\b(id|for)="([^"]+)"/g, (m, a, v) => `${a}="${id}-${v}"`);
  return `<section class="tool" id="${id}" aria-labelledby="${id}-h"><h3 id="${id}-h">${title}</h3><p class="small">${blurb}</p>
<form data-calc="${calc}" novalidate>${fields}<div><button class="btn" type="submit">${btn}</button></div></form>
<div class="out" role="status" aria-live="polite" hidden></div><p class="honest">${honest}</p></section>`;
}

export const TOOLS = {
  payment: () => tool("payment", "payment", "Mortgage payment calculator",
    "Payment, CMHC premium and the income lenders would look for, on one page.",
    `<div class="row2">${num("price", "Purchase price ($)", { value: 750000, req: 1 })}${num("downPct", "Down payment (%)", { value: 10, hint: "5% on the first $500,000 and 10% above, up to $1,500,000" })}</div>
<div class="row2">${num("rate", "Interest rate (%)", { value: "", ph: "your quoted rate", req: 1, hint: "Use a rate you have actually been quoted" })}${sel("amort", "Amortization", AMORT, "25")}</div>
<div class="row2">${sel("freq", "Payment frequency", FREQS, "monthly")}${num("tax", "Property tax ($/month)", { value: "", ph: "optional" })}</div>
<div class="row2">${num("heat", "Heating ($/month)", { value: "", ph: "optional" })}${num("condo", "Condo/strata fees ($/month)", { value: "", ph: "optional" })}</div>
${chk("elig30", "I am a first-time buyer or buying a newly built home (needed for a 30-year insured amortization)")}`,
    "An estimate, not an approval. A lender still verifies your income, credit and the property. Fixed rates are calculated with semi-annual compounding, as Canadian law requires."),

  affordability: () => tool("affordability", "affordability", "How much mortgage can I afford?",
    "Runs your income and debts through the 39% and 44% ratios at the stress-test rate.",
    `<div class="row2">${num("income", "Gross household income ($/year)", { req: 1, ph: "before tax" })}${num("down", "Down payment saved ($)", { value: "" })}</div>
<div class="row2">${num("debts", "Other debt payments ($/month)", { ph: "cards, car, loans, support", hint: "Count the payment on every loan, line and lease" })}${num("rate", "Rate you expect to get (%)", { req: 1, value: "" })}</div>
<div class="row2">${num("tax", "Property tax ($/month)", { value: "", ph: "estimate" })}${num("heat", "Heating ($/month)", { value: "", ph: "estimate" })}</div>
<div class="row2">${num("condo", "Condo/strata fees ($/month)", { value: "" })}${sel("amort", "Amortization", AMORT.slice(0, 2), "25")}</div>`,
    "An estimate, not an approval. A lender still verifies your income, credit and the property. The qualifying rate is the greater of your contract rate plus 2% or 5.25%. Home values you enter are your own estimate."),

  "down-payment": () => tool("down-payment", "downpayment", "Minimum down payment calculator",
    "The 5% / 10% tiers, the 20% rule at $1,500,000 and the premium that comes with a smaller down payment.",
    `<div class="row2">${num("price", "Purchase price ($)", { value: 800000, req: 1 })}${sel("amort", "Amortization", AMORT.slice(0, 2), "25")}</div>${chk("elig30", "First-time buyer or newly built home (30-year insured amortization)")}`,
    "Minimum down payment rules apply to insured purchases; a lender may ask for more. Insured mortgages are available only for purchase prices below $1,500,000."),

  "closing-costs": () => tool("closing-costs", "closing", "BC closing costs: total cash to close",
    "Down payment plus BC property transfer tax plus the costs you enter from your quotes.",
    `<div class="row2">${num("price", "Purchase price ($)", { value: 750000, req: 1 })}${num("down", "Down payment ($)", { value: 75000 })}</div>
<div class="row2">${chk("ftb", "I qualify for the BC first-time buyers' exemption")}${chk("newBuilt", "Newly built home exemption applies")}</div>
<div class="row2">${num("legal", "Legal / notary ($)", { value: "", ph: "your quote" })}${num("appraisal", "Appraisal ($)", { value: "", ph: "your quote" })}</div>
<div class="row2">${num("inspection", "Home inspection ($)", { value: "", ph: "your quote" })}${num("title", "Title insurance ($)", { value: "", ph: "your quote" })}</div>${num("other", "Other (moving, hook-ups, adjustments) ($)", { value: "" })}`,
    "Only the transfer tax is calculated by rule; every other line is the figure you enter. GST on newly built homes, strata move-in fees and property tax adjustments are not included.",
    "Total my cash"),

  cmhc: () => tool("cmhc", "cmhc", "CMHC premium calculator",
    "The premium for your loan-to-value band, and what it does to your mortgage balance.",
    `<div class="row2">${num("price", "Purchase price ($)", { value: 600000, req: 1 })}${num("down", "Down payment ($)", { value: 35000 })}</div>
<div class="row2">${sel("amort", "Amortization", AMORT.slice(0, 2), "25")}${chk("nonTrad", "Down payment is borrowed or from a non-traditional source")}</div>${chk("elig30", "First-time buyer or newly built home")}`,
    "Premium rates follow CMHC's published homeowner schedule: 0.60% to 4.00%, 4.50% for a non-traditional down payment at 90.01%–95% loan-to-value, plus 0.20% when amortization is over 25 years. The premium is added to your mortgage."),

  renewal: () => tool("renewal", "renewal", "Renewal comparison: stay, switch or refinance",
    "Three scenarios side by side over one term. Switching at maturity carries no prepayment penalty.",
    `<div class="row2">${num("balance", "Balance at renewal ($)", { req: 1 })}${num("remaining", "Years left on amortization", { value: 20 })}</div>
<div class="row2">${num("current", "Your current rate (%)", { ph: "to show payment change" })}${num("term", "Term to compare (years)", { value: 5 })}</div>
<div class="row2">${num("rateA", "A. Stay: your lender's offer (%)", { req: 1 })}${num("costA", "A. Costs ($)", { value: 0 })}</div>
<div class="row2">${num("rateB", "B. Switch: new lender's rate (%)", { req: 1 })}${num("costB", "B. Switching costs you pay ($)", { value: 0, hint: "Often covered by the new lender" })}</div>
<div class="row2">${num("rateC", "C. Refinance: rate (%)", { ph: "optional" })}${num("costC", "C. Refinance costs ($)", { value: 0, hint: "Legal, appraisal and any fees" })}</div>`,
    "Compares payments, interest over the term and the balance you carry out of it. It does not model a change of balance or amortization. A switch that keeps the same balance is the straight switch that skips the stress test; adding money makes it a refinance."),

  "check-up": () => tool("check-up", "checkup", "Mortgage Check-Up",
    "Type in what you have today. You get a plain read on where your mortgage stands. That covers renewal timing, what the rest of the term costs, what leaving early would cost and what to do next.",
    `<div class="row2">${num("balance", "Current mortgage balance ($)", { req: 1, ph: "from your latest statement" })}${num("rate", "Your current interest rate (%)", { req: 1, ph: "e.g. 4.79" })}</div>
<div class="row2">${sel("type", "Rate type", [["fixed", "Fixed"], ["variable", "Variable"]], "fixed")}${sel("freq", "Payment frequency", FREQS, "monthly")}</div>
<div class="row2">${num("amort", "Years left on your amortization", { req: 1, value: 20, hint: "Your statement shows the remaining amortization" })}<div class="fld"><label for="maturity">Maturity date (end of your current term)</label><input id="maturity" name="maturity" type="date" required><span class="hint">On your renewal letter or your last annual statement</span></div></div>
<div class="row2">${sel("lender", "Who holds your mortgage", [["bank", "A big bank"], ["cu", "A credit union"], ["mono", "A monoline or broker-channel lender"], ["other", "Other or not sure"]], "bank")}${num("value", "What you think the home is worth ($, optional)", { value: "", ph: "your estimate", hint: "Adds equity and refinance room to the result" })}</div>
${num("comparison", "A rate you have been quoted today for your remaining term (%, optional)", { value: "", ph: "sharpens the penalty estimate" })}`,
    "An estimate from the figures you type, nothing is looked up or sent. Your lender's penalty calculation governs and can differ from this range. Renewal windows differ by lender; 120 days is common.",
    "Check my mortgage"),

  penalty: () => tool("penalty", "penalty", "Mortgage penalty estimator",
    "Three months' interest versus the interest rate differential, shown as a range.",
    `<div class="row2">${sel("type", "Rate type", [["fixed", "Fixed"], ["variable", "Variable"]], "fixed")}${num("balance", "Balance ($)", { req: 1 })}</div>
<div class="row2">${num("contract", "Your contract rate (%)", { req: 1 })}${num("months", "Months left in term", { req: 1 })}</div>
<div class="row2">${num("comparison", "Comparison rate (%)", { ph: "for contract-rate IRD", hint: "The rate your lender would charge today for your remaining term" })}${num("origPosted", "Original posted rate (%)", { ph: "posted-rate IRD" })}</div>${num("currPosted", "Current posted rate for remaining term (%)", { ph: "posted-rate IRD" })}`,
    "A range, not a quote: the calculation method (posted-rate or contract-rate IRD) is your lender's, and their figure governs. Ask for it in writing before you decide anything."),

  ptt: () => tool("ptt", "ptt", "BC property transfer tax calculator",
    "General tax, the further 2% over $3,000,000, and the first-time buyers' and newly built exemptions.",
    `<div class="row2">${num("fmv", "Fair market value ($)", { value: 750000, req: 1 })}${num("res", "Residential portion of value ($)", { ph: "only if mixed-use, over $3M" })}</div>
<div class="row2">${chk("ftb", "I qualify for the first-time buyers' exemption")}${chk("newBuilt", "Newly built home exemption applies")}</div>
${sel("share", "Share of the transfer that qualifies", [["1", "100% (all buyers qualify)"], ["0.5", "50% (one of two buyers qualifies)"], ["0.25", "25%"], ["0.75", "75%"]], "1")}`,
    "Calculated from the Province of BC's published rules for property registered on or after April 1, 2024. The exemption has residency and ownership tests, and the Province's assessment governs. Properties over 0.5 hectares have an adjusted calculation not modelled here.",
    "Calculate tax")
,
  prepayment: () => tool("prepayment", "prepayment", "Prepayment calculator: mortgage-free sooner",
    "What extra payments, a yearly lump sum or a one-time lump sum do to your interest cost and payoff date.",
    `<div class="row2">${num("balance", "Mortgage balance ($)", { req: 1 })}${num("rate", "Interest rate (%)", { req: 1 })}</div>
<div class="row2">${num("years", "Years left on amortization", { value: 25, req: 1 })}${sel("freq", "Payment frequency", FREQS, "monthly")}</div>
<div class="row2">${num("extra", "Extra on every payment ($)", { value: "", ph: "optional" })}${num("annual", "Lump sum each year ($)", { value: "", ph: "optional", hint: "Paid at each anniversary of your payments" })}</div>
${num("lump", "One-time lump sum now ($)", { value: "", ph: "optional" })}`,
    "Holds your rate for the whole amortization, which a real mortgage will not do, since it renews at new rates. Check your lender's prepayment limits (commonly a percentage of the original balance per year) before you plan a lump sum; going over can trigger a penalty. The final payment is adjusted to clear the balance.",
    "Show my savings"),

  compare: () => tool("compare", "compare", "Four-scenario mortgage comparison",
    "Up to four options side by side: payment, interest over the term, the balance you carry out of it and what a fixed rate costs to leave.",
    `<div class="row3">${num("balance", "Mortgage amount ($)", { req: 1 })}${num("amort", "Amortization (years)", { value: 25 })}${sel("freq", "Payment frequency", FREQS, "monthly")}</div>
<p class="small"><strong>Option A</strong></p>${row3(num("rateA", "Rate (%)", { req: 1 }), num("termA", "Term (years)", { value: 5 }), sel("typeA", "Type", [["fixed", "Fixed"], ["variable", "Variable"]], "fixed"))}${num("costA", "Costs you pay ($)", { value: 0 })}
<p class="small"><strong>Option B</strong></p>${row3(num("rateB", "Rate (%)", { req: 1 }), num("termB", "Term (years)", { value: 5 }), sel("typeB", "Type", [["fixed", "Fixed"], ["variable", "Variable"]], "fixed"))}${num("costB", "Costs you pay ($)", { value: 0 })}
<p class="small"><strong>Option C</strong> (optional)</p>${row3(num("rateC", "Rate (%)", { ph: "leave blank to skip" }), num("termC", "Term (years)", { value: 3 }), sel("typeC", "Type", [["fixed", "Fixed"], ["variable", "Variable"]], "fixed"))}${num("costC", "Costs you pay ($)", { value: 0 })}
<p class="small"><strong>Option D</strong> (optional)</p>${row3(num("rateD", "Rate (%)", { ph: "leave blank to skip" }), num("termD", "Term (years)", { value: 5 }), sel("typeD", "Type", [["fixed", "Fixed"], ["variable", "Variable"]], "variable"))}${num("costD", "Costs you pay ($)", { value: 0 })}`,
    "Compares what you enter. Variable rates are treated as fixed for the term, so a variable option shows what happens if the rate does not move. Three months' interest is shown as a minimum exit cost; a fixed-rate penalty can be much larger (see the penalty estimator). Lenders differ on prepayment privileges, portability and conditions, which a payment figure cannot show.",
    "Compare options"),

  consolidation: () => tool("consolidation", "consolidation", "Debt consolidation calculator",
    "Your mortgage and your debts today, against one larger mortgage. Total interest is shown, not only the monthly payment.",
    `<p class="small"><strong>Your mortgage today</strong></p>${row3(num("balance", "Balance ($)", { req: 1 }), num("rate", "Rate (%)", { req: 1 }), num("years", "Years left on amortization", { value: 20 }))}
<p class="small"><strong>Your debts</strong> (leave unused rows blank)</p>
${row3(num("d1b", "Credit card balance ($)"), num("d1r", "Rate (%)", { ph: "from statement" }), num("d1p", "Monthly payment ($)"))}
${row3(num("d2b", "Car or personal loan balance ($)"), num("d2r", "Rate (%)"), num("d2p", "Monthly payment ($)"))}
${row3(num("d3b", "Line of credit balance ($)"), num("d3r", "Rate (%)"), num("d3p", "Monthly payment ($)"))}
<p class="small"><strong>The new mortgage</strong></p>${row3(num("nrate", "New rate (%)", { req: 1 }), num("nyears", "Amortization (years)", { value: 20 }), num("pen", "Penalty to break ($)", { value: 0 }))}
${num("costs", "Legal, appraisal and other costs ($)", { value: 0 })}`,
    "The penalty and costs are added to the new mortgage. Debts compound monthly, and the mortgage rates are assumed to hold for the whole amortization, so treat the interest totals as a comparison, not a forecast. Stretching short debts over a long amortization lowers the payment and can raise the total cost, which is why both are shown. Lenders limit refinances to 80% of the home's value and need your income to qualify.",
    "Compare"),

  offset: () => tool("offset", "offset", "Rental income: offset versus add-back",
    "The same suite income run through both methods lenders use, at 50%, 80% and 100% of the rent.",
    `<div class="row2">${num("income", "Your gross income ($/year)", { req: 1 })}${num("rent", "Rent from the suite ($/month)", { req: 1 })}</div>
<div class="row2">${num("rate", "Contract rate (%)", { req: 1 })}${sel("amort", "Amortization", AMORT.slice(0, 2), "25")}</div>
<div class="row2">${num("tax", "Property tax ($/month)", { value: "" })}${num("heat", "Heating ($/month)", { value: "" })}</div>
${num("debts", "Other debt payments ($/month)", { value: "" })}
${chkOn("legal", "The suite is legal and self-contained, with registered rent history lenders can verify")}`,
    "Estimates the largest mortgage the ratios allow (39% GDS, 44% TDS at the greater of your rate plus 2% or 5.25%); condo fees are not modelled. Add-back adds a share of rent to your income; offset deducts a share from your housing costs. Which method and what share a lender uses is lender policy, and some lenders cap the share, so these rows show the range rather than a promise. An unregistered suite generally counts as $0 at mainstream lenders."),

  "suite-checker": () => tool("suite-checker", "suitechecker", "Secondary suite refinance eligibility checker",
    "Checks a planned suite against the published conditions of the default-insured refinance for secondary suites.",
    `<div class="row2">${num("value", "Expected home value after the suite is built ($)", { req: 1 })}${num("debt", "Mortgage and other debts on the home today ($)", { value: 0 })}</div>
<div class="row2">${num("cost", "Expected cost of building the suite ($)", { req: 1 })}${num("add", "New money you want to borrow ($)", { ph: "defaults to the project cost" })}</div>
<div class="row2">${num("units", "Total units after the build", { value: 2, min: 1 })}${sel("amort", "Amortization", [["25", "25 years"], ["30", "30 years"]], "25")}</div>
<div class="row2">${sel("occupant", "Who lives in an existing unit?", [["owner", "I do"], ["relative", "A close relative"], ["no", "Neither of us"]], "owner")}${sel("credit", "Credit score of the strongest borrower", [["600plus", "600 or higher"], ["below", "Below 600"], ["unsure", "I am not sure"]], "unsure")}</div>
${chk("short", "The new unit would be rented for periods under 90 days")}
${chkOn("self", "The suite will be legal, self-contained and permitted by the municipality")}
${chk("started", "Construction has already started")}`,
    "Based on conditions read on October 30, 2026 from the Department of Finance Canada's release on mortgage insurance rule changes for secondary suites (applications on or after January 15, 2025), CMHC's refinance fact sheet (2025) and Sagen's lender update (December 2024). Programs change and lenders add their own rules, so this is a screening tool, not an approval. The $80,000 Canada Secondary Suite Loan Program is not part of this: it never opened.",
    "Check eligibility"),

  readvanceable: () => tool("readvanceable", "readvanceable", "Readvanceable mortgage calculator",
    "How the credit line grows as you repay principal, year by year.",
    `<div class="row2">${num("value", "Home value ($)", { req: 1 })}${num("balance", "Mortgage balance ($)", { req: 1 })}</div>
<div class="row2">${num("rate", "Mortgage rate (%)", { req: 1 })}${num("years", "Years left on amortization", { value: 25 })}</div>
<div class="row2">${num("lineRate", "Credit line rate (%)", { ph: "optional" })}${num("drawn", "Amount borrowed on the line ($)", { value: 0 })}</div>
${sel("span", "Years to show", [["5", "5 years"], ["10", "10 years"], ["15", "15 years"], ["20", "20 years"]], "10")}`,
    "Applies the federal limits for regulated lenders: the whole package up to 80% of the home's value and the revolving line up to 65%. Value is held constant, so any rise or fall would change the room. The line is charged interest only. A lender approves and sets your actual limit, and a line is usually secured by a collateral charge, which affects switching."),

  "sale-proceeds": () => tool("sale-proceeds", "saleproceeds", "Sale proceeds calculator",
    "What you keep after commission, your mortgage payout, any penalty and the costs of selling.",
    `<div class="row2">${num("price", "Expected sale price ($)", { req: 1 })}${num("payout", "Mortgage payout ($)", { value: "", hint: "Balance plus any interest owing at completion" })}</div>
<div class="row2">${num("c1", "Commission on first $100,000 (%)", { value: "", ph: "from your listing agreement" })}${num("c2", "Commission on the rest (%)", { value: "", ph: "from your listing agreement" })}</div>
<div class="row2">${num("penalty", "Prepayment penalty ($)", { value: "", hint: "Use the penalty estimator above, or ask your lender" })}${num("liens", "Other debts secured on the home ($)", { value: "" })}</div>
<div class="row2">${num("legal", "Legal / notary ($)", { value: "" })}${num("other", "Other selling costs ($)", { value: "", hint: "Repairs, staging, moving, discharge fees" })}</div>`,
    "No commission rates are assumed: enter the ones in your listing agreement. GST of 5% is added to the commission. Property tax and utility adjustments, strata fees and any tax on a sale that is not your principal residence are not included. Your lawyer or notary's statement of adjustments gives the final figure."),

  quiz: () => `<section class="tool" id="quiz" aria-labelledby="quiz-h"><h3 id="quiz-h">Mortgage readiness quiz</h3><p class="small">Two questions. You see your result first, and booking a call afterwards is entirely your choice.</p>
<form data-calc="quiz" data-book="${SITE.book}" novalidate>
${sel("situation", "Which sentence fits you best?", [["first-home", "I am planning to buy my first home"], ["renewing", "My mortgage is coming up for renewal"], ["moving", "I am selling and buying another home"], ["equity", "I want to use my home equity or refinance"], ["investing", "I am buying or own a rental property"], ["self-employed", "I am self-employed or own a business"], ["struggling", "I am behind, or worried I soon will be"], ["unsure", "I am not sure where to start"]], "first-home")}
${sel("timeline", "When does it matter?", [["now", "Within the next month"], ["soon", "In one to three months"], ["later", "In three to twelve months"], ["exploring", "I am just exploring"]], "soon")}
<div><button class="btn" type="submit">Show my route</button></div></form>
<div class="out" role="status" aria-live="polite" hidden></div><p class="honest">Nothing you choose is stored or sent. This is a routing aid, not advice: it points you to the guide and tool that match your situation.</p></section>`,

  "refi-break-even": () => tool("refi-break-even", "refibe", "Refinance break-even calculator",
    "Penalty and costs against the new rate's savings, tracked month by month.",
    `<div class="row2">${num("balance", "Current mortgage balance ($)", { req: 1 })}${num("years", "Years left on amortization", { value: 20 })}</div>
<div class="row2">${num("rate", "Your current rate (%)", { req: 1 })}${num("curpay", "Your current payment ($/month)", { ph: "optional; otherwise calculated" })}</div>
<div class="row2">${num("nrate", "New rate (%)", { req: 1 })}${num("nyears", "New amortization (years)", { ph: "defaults to years left" })}</div>
<div class="row2">${num("pen", "Prepayment penalty ($)", { value: 0, hint: "Get this from your lender in writing" })}${num("costs", "Legal, appraisal and other costs ($)", { value: 0 })}</div>
<div class="row2">${sel("roll", "How the penalty and costs are paid", [["roll", "Added to the new mortgage"], ["cash", "Paid in cash"]], "roll")}${sel("horizon", "Months to compare", [["24", "24 months"], ["36", "36 months"], ["60", "60 months"], ["120", "120 months"]], "60")}</div>`,
    "Compares your position at each month: payments made, plus cash costs, plus the balance still owing. It assumes both rates hold for the period shown, which is the main uncertainty in any refinance decision. It does not model a change in the amount you borrow, the value of a different lender's prepayment terms, or taxes. A break-even later than the time you expect to keep the mortgage means the refinance does not pay.",
    "Find my break-even"),

  equity: () => tool("equity", "equity", "Home equity estimator",
    "How much equity you have and how much a lender could allow you to borrow against it.",
    `<div class="row2">${num("value", "Your estimate of the home's value ($)", { req: 1, hint: "Use a recent comparable sale or an appraisal if you have one" })}${num("balance", "Mortgage balance ($)", { req: 1 })}</div>
<div class="row2">${num("liens", "Other debts secured on the home ($)", { value: "", hint: "A second mortgage or a line of credit balance" })}${num("pen", "Penalty if you break your mortgage ($)", { value: "", hint: "Leave blank if you would renew first" })}</div>
<div class="row2">${num("costs", "Legal and appraisal costs ($)", { value: "" })}${num("wanted", "Amount you would like to borrow ($)", { value: "", ph: "optional" })}</div>
<div class="row2">${num("rate", "Rate on the new money (%)", { ph: "optional" })}${num("amort", "Amortization (years)", { value: 25 })}</div>`,
    "Uses only the figures you type: it does not look up your property, check your credit or send anything anywhere. A real application does involve a credit check, an appraisal and proof of income, and a lender can approve less than the ceiling shown. Eighty percent is the federal limit on a refinance for regulated lenders; some other lenders follow different rules.",
    "Estimate my equity")

};
