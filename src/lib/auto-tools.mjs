// Auto-placed calculators (Nov 23, 2026): one relevant tool on every city page and on the renewal and refinance guides
// that had none. Placed after the page's first section so readers meet it early. Pages that already carry a tool are skipped.
import { TOOLS } from "./tools.mjs";
import { CITY_NAME } from "./nearby.mjs";

const T_CITY = /^\/mortgage-broker-(?!vs-bank)([a-z-]+)\/$/;

// [tool key, heading, intro]. Copy follows docs/READABILITY-RULES.md: plain, short sentences, no "!", no em dashes.
const COPY = {
  renewal: ["Stay, switch or refinance: run your numbers", "Put in your balance, your lender's renewal offer and any other rate you've been quoted. You'll see the payment and the interest over the term for each option, side by side."],
  penalty: ["Estimate what breaking your mortgage could cost", "Breaking a fixed mortgage early usually costs three months' interest or the interest rate differential, whichever is higher. Put in your balance, your rate and the months left to see a likely range. Your lender's own figure is the one that counts."],
  prepayment: ["See what extra payments could save", "Put in your balance, your rate and what you could add. You'll see how much interest you save and how much sooner the mortgage is paid off. Check your lender's prepayment limits first."],
  "check-up": ["Check where your mortgage stands", "Type in what's on your latest statement. You get a plain read on your renewal timing, what the rest of the term costs and what leaving early would cost."],
  equity: ["How much equity could you use?", "Put in what you think your home is worth and what you owe on it. You'll see roughly how much a lender could let you borrow. For a refinance, most lenders cap the total at 80% of the home's value."],
  "refi-break-even": ["Does refinancing pay for itself?", "Put in your balance, your current rate, the new rate and the cost to switch. The calculator shows how many months it takes for the savings to cover the cost."],
  consolidation: ["Your debts versus one mortgage", "Put in your mortgage and your other debts. You'll see the monthly payment and the total interest both ways. That way a lower payment can't hide a bigger total cost."],
  "sale-proceeds": ["What would you walk away with?", "Put in your expected sale price and what you owe. The calculator takes off commission, your payout and any penalty, so you see the cash you'd have for your next home."],
  readvanceable: ["See how the credit line grows", "Put in your home's value, your mortgage and your rate. You'll see how much room opens up on the credit line each year as you pay down the mortgage."]
};

const PAGES = {
  // Renewal and term guides
  "/early-mortgage-renewal/": "penalty",
  "/mortgage-renewal-denied/": "check-up",
  "/mortgage-renewal-letter-explained/": "renewal",
  "/switch-mortgage-lenders-at-renewal/": "renewal",
  "/stress-test-exemption-switching-lenders/": "renewal",
  "/rental-property-mortgage-renewal/": "renewal",
  "/renewing-mortgage-without-a-job/": "check-up",
  "/blend-and-extend-mortgage/": "penalty",
  "/interest-rate-differential/": "penalty",
  "/open-vs-closed-mortgage/": "penalty",
  "/porting-your-mortgage/": "penalty",
  "/prepayment-privileges-and-penalties/": "prepayment",
  // Refinance guides (not reverse mortgages or spousal buyouts: their borrowing limits differ from the 80% refinance cap)
  "/refinance-mortgage-bc/": "equity",
  "/cash-out-refinance-bc/": "equity",
  "/heloc-bc/": "equity",
  "/second-mortgage-bc/": "equity",
  "/refinance-rental-property/": "equity",
  "/is-it-worth-refinancing/": "refi-break-even",
  "/refinance-to-pay-off-debt/": "consolidation",
  "/bridge-financing/": "sale-proceeds",
  "/downsizing-and-your-mortgage/": "sale-proceeds",
  "/smith-manoeuvre/": "readvanceable"
};

function block(page) {
  const m = T_CITY.exec(page.slug);
  if (m && CITY_NAME[m[1]]) {
    return `<h2>What could you afford in ${CITY_NAME[m[1]]}?</h2>
<p>Put in your household income, your debts and what you've saved. The calculator runs the same stress test lenders use. You get a realistic price range before you start looking. Rates aren't filled in for you, so use one you've actually been quoted.</p>
<div class="tools">${TOOLS.affordability()}</div>`;
  }
  const key = PAGES[page.slug];
  if (!key) return "";
  const [h, intro] = COPY[key];
  // The sale-proceeds tool points at a penalty estimator "above", which only exists on the calculators page.
  const markup = TOOLS[key]().replace("Use the penalty estimator above, or ask your lender", "Ask your lender for this figure");
  return `<h2>${h}</h2>\n<p>${intro}</p>\n<div class="tools">${markup}</div>`;
}

/** Returns the page with a calculator placed before its second h2, or unchanged if it has one already or none applies. */
export function withAutoTool(page) {
  if (page.calc || /data-calc=/.test(page.body || "")) return page;
  const add = block(page);
  if (!add) return page;
  const body = page.body;
  const first = body.indexOf("<h2");
  const second = first >= 0 ? body.indexOf("<h2", first + 3) : -1;
  const at = second >= 0 ? second : body.length;
  return { ...page, calc: true, body: body.slice(0, at) + add + "\n\n" + body.slice(at) };
}

export const AUTO_TOOL_PAGES = Object.keys(PAGES);
