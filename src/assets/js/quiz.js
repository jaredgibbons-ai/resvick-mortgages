/* Resvick Mortgages readiness checks. Data-driven quizzes over window.RM (engine.js, loaded first).
 * Results are shown in full before any contact details are asked for. Nothing is pre-checked. No rates, no market
 * figures in copy; program rules carry their dates. UMD so tests can load the definitions in Node. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.RMQuiz = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // ---- helpers ---------------------------------------------------------------
  function money0(x) { return "$" + Math.round(x).toLocaleString("en-CA"); }
  function pct1(x) { return (Math.round(x * 10) / 10) + "%"; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var CREDIT = { id: "credit", q: "How would you describe your credit?", why: "Lenders price and approve on credit history. Most A lenders look for a clean recent record; a few late payments are workable with explanation, and a bruised file usually means a B lender for a term while it recovers.",
    options: [{ label: "Clean, no missed payments", score: 10 }, { label: "Mostly clean, one or two slips", score: 7 }, { label: "Some trouble in the last two years", score: 4 }, { label: "Bruised, or I do not know", score: 1 }] };

  // ---- quiz definitions -------------------------------------------------------
  var DEFS = {
    check: {
      title: "Where are you at?", intent: "other", router: true,
      steps: [
        { type: "choice", id: "own", q: "Do you own a home today?", options: [
          { label: "Yes, I own property", sub: "A home, a condo or a rental", score: 0, next: "owner" },
          { label: "No, not yet", sub: "Looking to buy", score: 0, next: "buyer" }] },
        { type: "choice", id: "buyer", branch: true, q: "What are you looking at?", options: [
          { label: "Buying my first home", sub: "Never owned before", goto: "/purchase-readiness-check/" },
          { label: "Buying my next home", sub: "Moving, upsizing or downsizing", goto: "/purchase-readiness-check/" },
          { label: "Buying a rental property", sub: "First or next investment", goto: "/investor-check/" },
          { label: "I am self-employed", sub: "Business owner, contractor or commission", goto: "/self-employed-check/" },
          { label: "Just exploring for now", sub: "No rush", goto: "/first-time-home-buyer-bc/" }] },
        { type: "choice", id: "owner", branch: true, q: "What brings you here?", options: [
          { label: "My mortgage is renewing", sub: "Maturity in the next couple of years", goto: "/renewal-check/" },
          { label: "I want to use my equity", sub: "Refinance, consolidate debt, renovate", goto: "/equity-check/" },
          { label: "I want to buy a rental", sub: "Using what I have to buy the next one", goto: "/investor-check/" },
          { label: "I am self-employed", sub: "Income that takes explaining", goto: "/self-employed-check/" },
          { label: "Something else", sub: "Separation, porting, a move", goto: "/equity-check/" }] }
      ]
    },

    purchase: {
      title: "Purchase readiness check", intent: "buyer", hub: "/first-time-home-buyer-bc/",
      bands: [[80, "Ready now", "Your income, down payment and documents line up. The sensible next move is a real pre-approval, so you know your number before you fall for a house."], [60, "Close, with a few things to sort", "The most common result. Usually one or two fixable items: a down payment that needs a longer paper trail, a debt worth paying down first, or a credit report nobody has checked in a while."], [40, "Worth a conversation first", "Something structural needs attention before a lender will say yes. The list below shows what, and a short call turns it into a plan with dates."], [0, "Start with the basics", "No shame in it. Everyone starts somewhere. The first-time buyer guide and one short conversation will map the path and the timeline."]],
      steps: [
        { type: "number", id: "income", q: "Roughly, what is your household's gross annual income?", hint: "Before tax, everyone who will be on the mortgage.", placeholder: "e.g. 120000", min: 1 },
        { type: "number", id: "down", q: "How much have you set aside for a down payment?", hint: "Savings, FHSA, RRSP you plan to use, confirmed gifts.", placeholder: "e.g. 50000", min: 0 },
        { type: "number", id: "debts", q: "What do you pay each month on debts, not counting a future mortgage?", hint: "Car loans, student loans, card minimums, lines of credit.", placeholder: "e.g. 500", min: 0 },
        CREDIT,
        { id: "job", q: "How do you earn your income?", why: "Salaried income with two years in the field is the easiest for a lender to count. Hourly, commission, contract and self-employed income all count too, but usually on a two-year average and with more paperwork.",
          options: [{ label: "Salaried, same employer two years or more", score: 10 }, { label: "Salaried, new job or still on probation", score: 6 }, { label: "Hourly, overtime, commission or bonus", score: 6 }, { label: "Self-employed or contract", score: 4 }] },
        { id: "source", q: "Where is the down payment coming from?", why: "Lenders want to see where the money came from, usually about three months of history. Savings and registered accounts are simplest; a gift needs a signed letter; a borrowed down payment limits which lenders will look at the file.",
          options: [{ label: "My own savings, FHSA or RRSP", score: 10 }, { label: "Mostly a gift from family", score: 8 }, { label: "A mix, some of it recent", score: 6 }, { label: "I would need to borrow it", score: 2 }] },
        { id: "fthb", q: "Have you owned a home before?", why: "First-time buyers may qualify for the Home Buyers' Plan, the FHSA, the GST rebate on new homes and BC's property transfer tax exemption. Each program has its own test, so passing one says nothing about the others.",
          options: [{ label: "Never, anywhere", score: 10 }, { label: "Not in the last four years", score: 8 }, { label: "Yes, I own or recently owned", score: 6 }] },
        { id: "timeline", q: "When do you want to be moved in?", why: "A pre-approval and a rate hold usually run 90 to 120 days. Buying inside that window is simple; further out, the plan is about saving and credit rather than rates.",
          options: [{ label: "Within three months", score: 9 }, { label: "Three to six months", score: 10 }, { label: "Six to twelve months", score: 7 }, { label: "More than a year", score: 5 }] },
        { id: "preapp", q: "Do you have a pre-approval?", why: "A real pre-approval means income, credit and down payment were checked, not just a rate quote. It is the difference between knowing your number and hoping.",
          options: [{ label: "Yes, a full one with documents reviewed", score: 10 }, { label: "A rate quote or an online estimate only", score: 5 }, { label: "Not yet", score: 3 }] },
        { id: "reserves", q: "After the down payment and closing costs, what would be left?", why: "Lenders like to see a cushion, and so should you. Closing costs in BC commonly run one to three percent of the price on top of the down payment, and something always comes up in the first year.",
          options: [{ label: "Three months of expenses or more", score: 10 }, { label: "About one month", score: 6 }, { label: "Very little", score: 3 }, { label: "I have not worked it out", score: 2 }] },
      ]
    },

    renewal: {
      title: "Renewal check", intent: "renewal", hub: "/mortgage-renewal-bc/",
      bands: [[80, "Well placed to shop", "You have time and a clean file, the strongest position there is at renewal. Compare early and let the lender earn the renewal."], [60, "Shop, but sort these first", "Your options are open. A couple of details, usually timing or paperwork, decide whether switching is easy or merely possible."], [40, "Talk before you sign anything", "Some things need attention before maturity. Do not sign the renewal letter on autopilot; a short call will show which options are still realistic."], [0, "Plan the renewal now", "A renewal is still a chance to improve things, but this one needs planning. Starting early is what keeps choices on the table."]],
      steps: [
        { type: "number", id: "balance", q: "Roughly, what is your current mortgage balance?", placeholder: "e.g. 450000", min: 1 },
        { type: "number", id: "rate", q: "What is your current interest rate?", hint: "The rate on your statement, as a percentage.", placeholder: "e.g. 2.89", min: 0, max: 25, step: 0.01, unit: "%" },
        { type: "number", id: "months", q: "How many months until your term ends?", placeholder: "e.g. 9", min: 0, max: 120, step: 1, unit: "months" },
        { type: "number", id: "payment", q: "What is your current monthly payment?", hint: "Optional. If you pay bi-weekly, double it.", placeholder: "e.g. 2100", min: 0, optional: true },
        { id: "late", q: "Any late or missed mortgage payments in the last twelve months?", why: "A clean payment history is the first thing a new lender checks. Your current lender will usually renew you anyway; switching is where it matters.",
          options: [{ label: "None", score: 10 }, { label: "One, and it was sorted quickly", score: 6 }, { label: "More than one", score: 2 }] },
        { id: "income", q: "How stable is your income right now?", why: "Staying with your lender usually needs no income re-check. Moving to a new one does, so a job change or a gap changes which option is simplest.",
          options: [{ label: "Steady, same work for two years or more", score: 10 }, { label: "Steady, but changed jobs recently", score: 7 }, { label: "Variable or self-employed", score: 6 }, { label: "Reduced or between jobs", score: 2 }] },
        { id: "stresstest", q: "True or false: if you switch lenders at renewal, you have to pass the stress test again.", why: "Usually false. Since late 2024, two federal measures let most borrowers move an existing mortgage to a new lender at renewal without re-qualifying at the higher rate, as long as the balance and amortization do not increase. OSFI's measure (November 21, 2024) covers uninsured mortgages at federally regulated lenders; Finance Canada's (December 16, 2024) covers insured ones. Credit unions and collateral charges can complicate it, so check the details for your file.",
          options: [{ label: "False, most switches skip it now", score: 10 }, { label: "True, that is why I never switch", score: 4 }, { label: "I did not know either way", score: 6 }] },
        { id: "dti", q: "Roughly how much of your take-home pay goes to all debt payments, mortgage included?", why: "Lenders look at your total debt load against gross income. A high ratio limits switching and may point to restructuring at renewal rather than a plain rate shop.",
          options: [{ label: "Under a third", score: 10 }, { label: "About a third to a half", score: 6 }, { label: "More than half", score: 2 }, { label: "Not sure", score: 4 }] },
        { id: "reserves", q: "How many months of expenses could you cover from savings?", why: "Reserves are not a lender rule at renewal, but they decide how much flexibility you have to pick the term you want rather than the payment you need.",
          options: [{ label: "Six or more", score: 10 }, { label: "Three to six", score: 7 }, { label: "One or two", score: 4 }, { label: "Less than one", score: 2 }] },
        { id: "lender", q: "Who holds your mortgage now?", why: "It matters for the switch rules. Federally regulated banks and monolines fall under the OSFI measure; credit unions are provincially regulated and set their own policies; a collateral charge can add legal costs to a move.",
          options: [{ label: "A big bank", score: 8 }, { label: "A monoline lender (through a broker)", score: 10 }, { label: "A credit union", score: 6 }, { label: "Not sure", score: 5 }] },
      ]
    },

    equity: {
      title: "Equity check", intent: "refinance", hub: "/refinance-mortgage-bc/",
      bands: [[80, "Clear case", "The equity is there, the purpose is sound and the costs are likely worth it. The next step is a written break-even with the real penalty in it."], [60, "Possible, check the math", "The equity exists, but a penalty, a timeline or the purpose makes it a closer call. The list below shows which one."], [40, "Think twice", "The numbers point the other way, at least for now. A line of credit, waiting for maturity or doing nothing may be the better answer."], [0, "Not yet", "The equity or the set-up is not there today. That can change with time, paydown or value, and a plan is how you know when."]],
      steps: [
        { type: "number", id: "value", q: "What do you think your home is worth?", hint: "Your estimate. Nothing is looked up.", placeholder: "e.g. 850000", min: 1 },
        { type: "number", id: "balance", q: "What is left on the mortgage?", hint: "Include any other loans secured on the home.", placeholder: "e.g. 420000", min: 0, live: "ltv" },
        { type: "number", id: "debts", q: "Monthly payments on debts other than the mortgage", placeholder: "e.g. 900", min: 0, optional: true },
        { id: "ratetype", q: "Is your current mortgage fixed or variable?", why: "The penalty to break a fixed mortgage can be an interest rate differential, which is sometimes large. A variable mortgage is usually three months' interest. That one fact often decides whether to refinance now or at maturity.",
          options: [{ label: "Variable", score: 9 }, { label: "Fixed, less than a year left", score: 10 }, { label: "Fixed, more than a year left", score: 5 }, { label: "Not sure", score: 4 }] },
        { id: "lender", q: "Who holds the mortgage?", why: "Big banks commonly use the posted-rate method for penalties; monolines usually use the contract rate. Same mortgage, very different number.",
          options: [{ label: "A big bank", score: 6 }, { label: "A monoline lender", score: 10 }, { label: "A credit union", score: 7 }, { label: "A private or alternative lender", score: 5 }] },
        { id: "penalty", q: "Do you know what it would cost to break your mortgage?", why: "Your lender will give you the figure on request. Guessing is how people end up surprised; the penalty estimator on this site gives a range so you know which questions to ask.",
          options: [{ label: "Yes, I have a figure", score: 10 }, { label: "Roughly", score: 6 }, { label: "No", score: 3 }] },
        { id: "heloc", q: "Do you have a home equity line of credit already?", why: "A readvanceable mortgage or HELOC may let you access equity without refinancing at all. It changes the whole comparison.",
          options: [{ label: "Yes, with room on it", score: 10 }, { label: "Yes, mostly used", score: 5 }, { label: "No", score: 7 }, { label: "Not sure", score: 4 }] },
        { id: "purpose", q: "What is the main job for the money?", why: "Lenders ask, and the answer shapes the product. Consolidating debt, renovating, buying a rental and funding a buyout each have their own best structure.",
          options: [{ label: "Consolidate higher-interest debt", score: 8 }, { label: "Renovations or a suite", score: 10 }, { label: "Buy an investment property", score: 8 }, { label: "A separation or buyout", score: 7 }, { label: "Lower my payment", score: 7 }, { label: "Just exploring", score: 6 }] },
        { id: "timeline", q: "When do you need it?", why: "A refinance takes a few weeks including an appraisal. If the need is immediate, a line of credit or a short bridge may be the realistic tool.",
          options: [{ label: "No rush, planning ahead", score: 10 }, { label: "In the next couple of months", score: 8 }, { label: "As soon as possible", score: 5 }] },
      ]
    },

    investor: {
      title: "Investor readiness check", intent: "investor", hub: "/investment-property-mortgages-bc/",
      bands: [[80, "Investment ready", "Down payment, reserves and a plan. The next step is matching the property to a lender that counts rent the way you need."], [60, "Nearly there", "The money side is close; experience, reserves or the exit plan is where to spend the next few weeks."], [40, "Build the base first", "Reserves, credit or the primary residence need attention before a rental makes sense. That is a plan, not a verdict."], [0, "Learn before you leap", "A rental mortgage differs from a home mortgage in a dozen ways. Start with the investor guide and a conversation, not a listing."]],
      steps: [
        { id: "owned", q: "How many properties do you own today?", why: "Lenders have door limits and portfolio rules. The first rental is a different file from the fifth.",
          options: [{ label: "None yet", score: 6 }, { label: "My home only", score: 8 }, { label: "My home plus one or more rentals", score: 10 }, { label: "Rentals only, I rent where I live", score: 8 }] },
        { id: "primary", q: "If you own your home, how much equity is in it?", why: "Equity in a primary residence is the most common source of a rental down payment, through a refinance or a line of credit.",
          options: [{ label: "More than half the value", score: 10 }, { label: "Some, maybe a quarter", score: 7 }, { label: "Very little", score: 3 }, { label: "I do not own my home", score: 5 }] },
        { id: "down", q: "How much do you have for the down payment?", why: "High-ratio insurance is not available on a property you will not live in, so plan on at least 20 percent plus closing costs.",
          options: [{ label: "Twenty percent or more of my target price, in cash or equity", score: 10 }, { label: "Close to it", score: 7 }, { label: "Well short", score: 3 }, { label: "I have not set a target", score: 4 }] },
        { id: "reserves", q: "Beyond the down payment, what are your reserves?", why: "Vacancies, repairs and rate changes happen. Lenders may look for reserves, and your sleep certainly will.",
          options: [{ label: "Six months of the property's costs or more", score: 10 }, { label: "A few months", score: 7 }, { label: "Almost nothing after closing", score: 2 }] },
        CREDIT,
        { id: "plan", q: "What is the plan for this property?", why: "Buy and hold, renovate and refinance, or a short-term rental each face different lender appetite and different rules, including BC's principal-residence requirement for short-term rentals in most communities.",
          options: [{ label: "Long-term rental, hold for years", score: 10 }, { label: "Renovate, then rent or refinance", score: 7 }, { label: "Short-term or vacation rental", score: 4 }, { label: "Actually, this is a home I will live in", score: 6, goto: "/purchase-readiness-check/", note: "A home you will live in is a purchase file, with different rules and better programs. The purchase check is the right one." }] },
        { id: "timeline", q: "When do you want to buy?", why: "A pre-approval for a rental includes how the lender will treat the rent, which is worth knowing before you write an offer.",
          options: [{ label: "Within three months", score: 9 }, { label: "This year", score: 10 }, { label: "Next year or later", score: 7 }] },
        { id: "market", q: "How well do you know the area you want to buy in?", why: "Rents, vacancy, suite bylaws and short-term rental rules all vary by city. Lenders underwrite the property, and you should too.",
          options: [{ label: "Well, I have watched it for a while", score: 10 }, { label: "Somewhat", score: 6 }, { label: "Not really yet", score: 3 }] },
        { id: "exit", q: "Do you have an exit or refinance plan?", why: "How and when you would sell or refinance shapes the term, the prepayment privileges you need and the lender you choose.",
          options: [{ label: "Yes, with rough dates", score: 10 }, { label: "A general idea", score: 6 }, { label: "No", score: 3 }] },
        { id: "manage", q: "Who will manage the property?", why: "Self-managing saves fees and costs time; a manager costs fees and changes the cash flow a lender sees. Either works if it is planned.",
          options: [{ label: "Me, and I have done it before", score: 10 }, { label: "Me, first time", score: 7 }, { label: "A property manager", score: 8 }, { label: "Have not thought about it", score: 3 }] }
      ]
    },

    selfemployed: {
      title: "Self-employed check", intent: "self-employed", hub: "/self-employed-mortgage-bc/",
      bands: [[80, "Traditional route open", "Your declared income, time in business and filings line up well enough that a mainstream lender is realistic. Expect the usual paperwork and the best pricing."], [60, "Stated income likely", "The business is sound but the tax return does not show all of it. A lender who looks at revenue and bank statements is the sensible path."], [40, "Alternative first, then plan the move", "Something, often time in business, credit or the filing history, points to a B lender today, with a route back to a mainstream lender later."], [0, "Start with a conversation", "Self-employed files are where an underwriter\'s eye matters most. Twenty minutes on how your income is structured will save months."]],
      steps: [
        CREDIT,
        { id: "filetype", q: "What is the mortgage for?", why: "A purchase, a refinance and a renewal are underwritten differently, and a renewal with your current lender may need no income re-check at all.",
          options: [{ label: "Buying", score: 8 }, { label: "Refinancing", score: 7 }, { label: "Renewing", score: 10 }] },
        { id: "goal", q: "What matters most?", why: "The lowest rate usually means the most paperwork. Speed or flexibility may mean a different lender at a slightly higher rate, with a plan to move later.",
          options: [{ label: "The best rate, I can do the paperwork", score: 10 }, { label: "Speed and simplicity", score: 6 }, { label: "The biggest mortgage I can qualify for", score: 7 }] },
        { id: "years", q: "How long have you been self-employed?", why: "A lenders generally want two years of filed returns. Under two years, your previous employment in the same field may bridge the gap at some lenders.",
          options: [{ label: "Two years or more", score: 10 }, { label: "One to two years", score: 6, link: ["/newly-self-employed-mortgage/", "Under two years self-employed? Read the newly self-employed guide"] }, { label: "Under a year", score: 3, link: ["/newly-self-employed-mortgage/", "Under two years self-employed? Read the newly self-employed guide"] }] },
        { id: "structure", q: "How is the business set up?", why: "Sole proprietors show income on a T1; corporations may leave income inside the company, which some lenders can consider and others cannot.",
          options: [{ label: "Sole proprietor", score: 8 }, { label: "Incorporated, I pay myself salary or dividends", score: 10 }, { label: "Incorporated, most income stays in the company", score: 5 }, { label: "Contract or commission, paid by one or two clients", score: 7 }] },
        { id: "filing", q: "Which returns do you file?", why: "Lenders read the T1 General and Notices of Assessment first; corporate T2s and financial statements come next. Having them ready is half the job.",
          options: [{ label: "T1 only", score: 8 }, { label: "T1 and T2 with financial statements", score: 10 }, { label: "Not up to date", score: 2 }] },
        { type: "number", id: "revenue", q: "Gross business revenue, last full year", hint: "Before expenses.", placeholder: "e.g. 180000", min: 0 },
        { type: "number", id: "declared", q: "Your declared income, averaged over the last two years", hint: "Line 15000 on your Notice of Assessment, averaged.", placeholder: "e.g. 70000", min: 0 },
        { type: "number", id: "debts", q: "Monthly debt payments", hint: "Optional. Leave blank if none.", placeholder: "e.g. 600", min: 0, optional: true },
        { type: "number", id: "down", q: "Down payment, or equity available", placeholder: "e.g. 150000", min: 0, optional: true }
      ]
    },

    lendermatch: {
      title: "Lender match", intent: "other", match: true,
      sliders: [
        { id: "penalty", q: "Avoiding a big penalty if I break the mortgage early", info: "Fixed-rate penalties at some lenders are calculated on posted rates and can run to tens of thousands. Monolines commonly use the contract rate; variable mortgages are usually three months' interest." },
        { id: "prepay", q: "Generous prepayment privileges", info: "Lump sums and payment increases, commonly 10 to 20 percent a year, shorten the mortgage without a penalty. Some lenders are more generous than others." },
        { id: "rate", q: "The lowest possible rate", info: "The lowest rate is real money, but it is rarely the whole story. Ask what it costs in flexibility." },
        { id: "port", q: "Being able to move the mortgage to a new home", info: "Porting lets you take the rate with you. Windows and rules differ by lender." },
        { id: "equity", q: "Accessing equity later without refinancing", info: "A readvanceable mortgage or HELOC reopens room as you pay down. Only some lenders offer them." },
        { id: "brand", q: "A familiar bank name", info: "Some people want the branch and the brand. That is a fair preference, and it has a price in flexibility at some banks." },
        { id: "digital", q: "Strong online banking and app", info: "Monolines are broker-only and mostly online; banks and credit unions bundle accounts and apps." }
      ]
    }
  };

  var CANON_INTENT = { purchase: "buyer", renewal: "renewal", equity: "refinance", investor: "investor", selfemployed: "self-employed", check: "other", lendermatch: "other" };

  // ---- scoring ---------------------------------------------------------------
  function scoredSteps(def) { return (def.steps || []).filter(function (s) { return !s.type || s.type === "choice"; }).filter(function (s) { return s.options.some(function (o) { return typeof o.score === "number"; }) && !def.router; }); }

  function score(def, answers) {
    var steps = scoredSteps(def), got = 0, max = 0, detail = [];
    steps.forEach(function (s) {
      var w = s.weight || 1, o = s.options[answers[s.id]];
      if (!o) return;
      got += o.score * w; max += 10 * w;
      detail.push({ id: s.id, q: s.q, label: o.label, score: o.score });
    });
    var pct = max ? Math.round((got / max) * 100) : 0;
    var sorted = detail.slice().sort(function (a, b) { return b.score - a.score; });
    return { score: pct, band: band(def, pct), strengths: sorted.slice(0, 3), work: sorted.slice(-3).reverse().filter(function (d) { return d.score < 8; }), answered: detail.length, total: steps.length };
  }
  function band(def, pct) { for (var i = 0; i < def.bands.length; i++) if (pct >= def.bands[i][0]) return { name: def.bands[i][1], text: def.bands[i][2] }; return { name: def.bands[def.bands.length - 1][1], text: def.bands[def.bands.length - 1][2] }; }

  function lenderMatch(v) { // v: {penalty, prepay, rate, port, equity, brand, digital} 0-100
    var g = function (k) { return Number(v[k]) || 0; };
    var mono = g("penalty") * 1.2 + g("prepay") + g("rate") * 1.1 + g("port") * 0.6;
    var bank = g("brand") * 1.5 + g("digital") * 1.1 + g("equity") * 0.9;
    var cu = g("brand") * 0.8 + g("equity") * 0.8 + g("port") * 0.8 + g("penalty") * 0.6;
    var types = [["A monoline lender", mono, "Monolines are broker-only lenders that compete on rate, penalties calculated on the contract rate and generous prepayment. No branches, no accounts."], ["A big bank", bank, "A familiar name, a branch, an app and readvanceable products. Fixed-rate penalties at some banks are calculated on posted rates, which is the trade-off to ask about."], ["A credit union", cu, "Member-owned, provincially regulated, often flexible on property and income, with branches and lines of credit. Switch rules differ from federally regulated lenders."]];
    types.sort(function (a, b) { return b[1] - a[1]; });
    var rateType = g("penalty") >= 60 || g("rate") >= 70 && g("penalty") >= 40 ? "variable" : "fixed";
    var why = rateType === "variable" ? "You put weight on avoiding a large penalty, and a variable mortgage usually carries three months' interest rather than an interest rate differential. That flexibility comes with a payment that can move." : "You lean toward certainty, and a fixed rate gives you a known payment for the term. Pick the term length to match how long you expect to keep the mortgage, so the penalty never comes up.";
    return { lender: types[0][0], lenderWhy: types[0][2], runnerUp: types[1][0], rateType: rateType, rateWhy: why };
  }

  // ---- results numbers (engine) ------------------------------------------------
  var ILLUSTRATIVE_RATE = 5.00; // used only for the qualifying-rate estimate; labelled as a planning assumption on screen
  function numbersFor(id, a, RM) {
    if (!RM) return "";
    var h = "";
    if (id === "purchase" && a.income > 0) {
      var r = RM.affordability({ annualIncome: a.income, ratePct: ILLUSTRATIVE_RATE, amortYears: 25, down: a.down || 0, debtsMonthly: a.debts || 0, propertyTaxMonthly: 300, heatMonthly: 125 });
      if (!r.error) {
        h += '<div class="qz-num"><span class="big">' + money0(r.maxPrice) + "</span>estimated maximum purchase price";
        h += rows([["Maximum mortgage", money0(r.maxLoan)], ["Qualifying rate used", pct1(r.qualifyingRate) + " (a planning assumption, not a quote)"], ["Minimum down payment at that price", money0(RM.minDownPayment(r.maxPrice))]]);
        if (a.price > 0) h += "<p>" + (a.price <= r.maxPrice ? "Your target of " + money0(a.price) + " fits inside that estimate." : "Your target of " + money0(a.price) + " is above the estimate. A bigger down payment, lower debts or a co-borrower would move it.") + "</p>";
        h += '<p class="small">An estimate, not an approval. A lender still verifies your income, credit and the property. Property tax and heat are assumed at $300 and $125 a month.</p></div>';
      }
    }
    if (id === "renewal" && a.balance > 0) {
      var m = a.months, when = m <= 4 ? "Your lender's renewal offer is likely in hand or imminent. Most lenders let you switch right up to maturity, but a switch needs a few weeks, so start now." : m <= 6 ? "You are inside the window where lenders will hold a rate for a switch. This is the ideal time to compare." : "You have time. Rate holds commonly run 90 to 120 days, so the comparison starts in earnest about four months out; the homework starts now.";
      h += '<div class="qz-num"><span class="big">' + (m != null && !isNaN(m) ? m + " months" : "Soon") + "</span>until your term ends<p>" + when + "</p>";
      if (a.payment > 0) h += '<p class="small">Your current payment of ' + money0(a.payment) + " a month is the number to compare every offer against, along with the balance left at the end of the next term.</p>";
      h += "</div>";
    }
    if (id === "equity" && a.value > 0) {
      var e = RM.homeEquity ? RM.homeEquity({ homeValue: a.value, balance: a.balance || 0 }) : null;
      if (e && !e.error) {
        h += '<div class="qz-num"><span class="big">' + money0(e.refiRoom) + "</span>equity reachable by refinancing to 80 percent" + rows([["Your home value (your estimate)", money0(a.value)], ["Mortgage balance", money0(a.balance || 0)], ["Loan-to-value", pct1(e.ltv * 100)], ["Total equity", money0(e.equity)], ["Room on a line of credit (65 percent cap)", money0(e.lineRoom)]]);
        h += e.overLimit ? "<p>At this loan-to-value a refinance is not available with a federally regulated lender; the path is paying down, waiting for value, or a different structure.</p>" : "";
        h += '<p class="small">Before penalty and costs. The value is your estimate; a lender orders an appraisal.</p></div>';
      }
    }
    if (id === "selfemployed" && a.declared >= 0 && (a.declared > 0 || a.revenue > 0)) {
      var trad = RM.affordability({ annualIncome: a.declared || 1, ratePct: ILLUSTRATIVE_RATE, amortYears: 25, down: a.down || 0, debtsMonthly: a.debts || 0, propertyTaxMonthly: 300, heatMonthly: 125 });
      var grossed = Math.max(a.declared || 0, Math.min((a.revenue || 0) * 0.6, (a.declared || 0) * 1.15 + (a.revenue || 0) * 0.1));
      var stated = RM.affordability({ annualIncome: grossed || 1, ratePct: ILLUSTRATIVE_RATE + 0.5, amortYears: 25, down: a.down || 0, debtsMonthly: a.debts || 0, propertyTaxMonthly: 300, heatMonthly: 125 });
      var alt = RM.affordability({ annualIncome: Math.max(grossed, (a.revenue || 0) * 0.5) || 1, ratePct: ILLUSTRATIVE_RATE + 2.0, amortYears: 25, down: a.down || 0, debtsMonthly: a.debts || 0, propertyTaxMonthly: 300, heatMonthly: 125 });
      h += '<div class="qz-tiers"><div><h4>Traditional (A lender)</h4><p class="qz-tier-n">' + money0(trad.maxPrice || 0) + '</p><p>Uses your declared two-year average. Lowest rate, most paperwork.</p></div>';
      h += '<div><h4>Stated income</h4><p class="qz-tier-n">' + money0(stated.maxPrice || 0) + '</p><p>Uses a reasonable income for your revenue, with a modest rate premium. Lenders vary; this is a planning assumption.</p></div>';
      h += '<div><h4>Alternative</h4><p class="qz-tier-n">' + money0(alt.maxPrice || 0) + '</p><p>Business bank statements, lower loan-to-value, higher rate and usually a lender fee. Illustrative.</p></div></div>';
      h += '<p class="small">Three planning estimates, not approvals. The qualifying assumptions are illustrative; your file decides. Property tax and heat assumed at $300 and $125 a month.</p>';
    }
    return h;
  }
  function rows(list) { return "<dl>" + list.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("") + "</dl>"; }

  // ---- DOM --------------------------------------------------------------------
  function mount(sec) {
    var id = sec.getAttribute("data-quiz"), def = DEFS[id]; if (!def) return;
    var RM = typeof window !== "undefined" ? window.RM : null;
    var book = sec.getAttribute("data-book") || "/contact/";
    var state = { i: 0, answers: {}, nums: {}, history: [], done: false, pending: null };
    var steps = def.steps || [];
    var total = def.router ? 2 : def.match ? def.sliders.length : steps.length;

    function visibleIndex() { // step number shown to the visitor (1-based), counting only steps actually on this path
      var n = 0; for (var k = 0; k <= state.i && k < steps.length; k++) if (!steps[k].branch || state.history.indexOf(k) >= 0 || k === state.i) n++; return n;
    }
    function progress(cur, tot) { return '<p class="qz-progress" aria-live="polite">Step ' + cur + " of " + tot + '</p><div class="qz-bar" aria-hidden="true"><span style="width:' + Math.round((cur / tot) * 100) + '%"></span></div>'; }
    function nav(showBack) { return '<div class="qz-nav">' + (showBack ? '<button type="button" class="btn btn-ghost btn-sm" data-act="back">Back</button>' : "") + '<button type="button" class="qz-link" data-act="restart">Start over</button></div>'; }

    function render() {
      if (state.pending) return renderBranchNote();
      if (state.done) return renderResults();
      if (def.match) return renderSlider();
      var s = steps[state.i];
      var cur = visibleIndex();
      var h = '<div class="qz-head"><p class="qz-kicker">' + esc(def.title) + "</p>" + progress(cur, def.router ? 2 : total) + "</div>";
      if (s.type === "number") {
        var v = state.nums[s.id];
        h += '<form class="qz-screen" data-step="' + esc(s.id) + '"><label class="qz-q" for="qz-' + id + "-" + s.id + '">' + esc(s.q) + "</label>" + (s.hint ? '<p class="qz-hint">' + esc(s.hint) + "</p>" : "");
        h += '<div class="qz-input"><span class="qz-unit">' + (s.unit ? "" : "$") + '</span><input id="qz-' + id + "-" + s.id + '" name="v" type="number" inputmode="decimal" min="' + (s.min || 0) + '"' + (s.max != null ? ' max="' + s.max + '"' : "") + ' step="' + (s.step || 1) + '" placeholder="' + esc(s.placeholder || "") + '"' + (v != null ? ' value="' + v + '"' : "") + (s.optional ? "" : " required") + ">" + (s.unit ? '<span class="qz-unit qz-unit-r">' + esc(s.unit) + "</span>" : "") + "</div>";
        if (s.live === "ltv") h += '<p class="qz-live" data-live="ltv" aria-live="polite"></p>';
        h += '<p class="qz-err" role="alert"></p><div class="qz-actions"><button type="submit" class="btn btn-sm">Continue</button>' + (s.optional ? '<button type="button" class="qz-link" data-act="skip">Skip</button>' : "") + "</div></form>";
      } else {
        h += '<div class="qz-screen" role="group" aria-labelledby="qz-' + id + "-" + s.id + '-q"><p class="qz-q" id="qz-' + id + "-" + s.id + '-q">' + esc(s.q) + '</p><div class="qz-opts">';
        s.options.forEach(function (o, k) { h += '<button type="button" class="qz-opt' + (state.answers[s.id] === k ? " is-on" : "") + '" data-opt="' + k + '"' + (state.answers[s.id] === k ? ' aria-pressed="true"' : "") + "><strong>" + esc(o.label) + "</strong>" + (o.sub ? "<span>" + esc(o.sub) + "</span>" : "") + "</button>"; });
        h += "</div>" + (s.why ? '<details class="qz-why"><summary>Why this matters</summary><p>' + esc(s.why) + "</p></details>" : "") + "</div>";
      }
      h += nav(state.history.length > 0);
      sec.innerHTML = h;
      var inp = sec.querySelector("input"); if (inp) { inp.focus(); if (s.live === "ltv") { var upd = function () { var b = Number(inp.value), V = state.nums.value; var el = sec.querySelector("[data-live=ltv]"); if (el) el.textContent = b >= 0 && V > 0 && inp.value !== "" ? "Loan-to-value: " + pct1((b / V) * 100) + (b / V > 0.8 ? " (above the 80 percent refinance limit)" : "") : ""; }; inp.addEventListener("input", upd); upd(); } }
      else { var first = sec.querySelector(".qz-opt"); if (first && state.history.length) first.focus(); }
    }

    function renderBranchNote() {
      var p = state.pending;
      sec.innerHTML = '<div class="qz-screen"><p class="qz-kicker">' + esc(def.title) + '</p><p class="qz-q">One moment</p><p>' + esc(p.note) + '</p><div class="qz-actions"><a class="btn btn-sm" href="' + esc(p.goto) + '">Continue there</a><button type="button" class="qz-link" data-act="unbranch">Stay here instead</button></div></div>';
      sec.querySelector("a.btn").focus();
    }

    function renderSlider() {
      var s = def.sliders[state.i], v = state.nums[s.id] != null ? state.nums[s.id] : 50;
      var h = '<div class="qz-head"><p class="qz-kicker">' + esc(def.title) + "</p>" + progress(state.i + 1, total) + "</div>";
      h += '<form class="qz-screen"><label class="qz-q" for="qz-sl-' + s.id + '">How much does this matter: ' + esc(s.q) + '?</label><div class="qz-slider"><input id="qz-sl-' + s.id + '" type="range" min="0" max="100" step="5" value="' + v + '" name="v"><div class="qz-scale" aria-hidden="true"><span>Not important</span><span>Neutral</span><span>Very important</span></div><output for="qz-sl-' + s.id + '">' + sliderLabel(v) + "</output></div>";
      h += '<details class="qz-why"><summary>More on this</summary><p>' + esc(s.info) + '</p></details><div class="qz-actions"><button type="submit" class="btn btn-sm">' + (state.i === total - 1 ? "Get my match" : "Next") + "</button></div></form>" + nav(state.i > 0);
      sec.innerHTML = h;
      var r = sec.querySelector("input[type=range]"); r.addEventListener("input", function () { sec.querySelector("output").textContent = sliderLabel(Number(r.value)); }); r.focus();
    }
    function sliderLabel(v) { return v <= 20 ? "Not important" : v < 45 ? "A little" : v <= 55 ? "Neutral" : v < 80 ? "Important" : "Very important"; }

    function renderResults() {
      var h = '<div class="qz-results" aria-live="polite">';
      if (def.match) {
        var m = lenderMatch(state.nums);
        h += '<p class="qz-kicker">Your lender match</p><h3 class="qz-band">' + esc(m.lender) + ", on a " + m.rateType + " rate</h3><p>" + esc(m.lenderWhy) + "</p><p>" + esc(m.rateWhy) + '</p><p class="small">Runner-up: ' + esc(m.runnerUp) + ". Every match is a starting point for a written comparison, never a recommendation on its own. The right lender for your file depends on income, property and timing.</p>";
        h += '<div class="qz-actions qz-wrap"><a class="btn btn-sm" href="/contact/">Talk it through with Joshua</a><a class="btn btn-ghost btn-sm" href="/fixed-vs-variable-mortgage/">Fixed vs variable</a><a class="btn btn-ghost btn-sm" href="/collateral-charge-mortgage/">Collateral charges</a><a class="btn btn-ghost btn-sm" href="/mortgage-broker-vs-bank/">Compare lender types</a><button type="button" class="qz-link" data-act="restart">Take it again</button></div></div>';
        sec.innerHTML = h; track("quiz_complete", { quiz: id }); return;
      }
      var r = score(def, state.answers);
      h += '<p class="qz-kicker">' + esc(def.title) + ': your result</p><div class="qz-score"><span class="qz-score-n">' + r.score + '</span><span class="qz-score-d">out of 100</span></div><h3 class="qz-band">' + esc(r.band.name) + "</h3><p>" + esc(r.band.text) + "</p>";
      h += numbersFor(id, state.nums, RM);
      if (r.strengths.length) h += '<h4>Working for you</h4><ul class="qz-list">' + r.strengths.map(function (d) { return "<li>" + esc(d.label) + "</li>"; }).join("") + "</ul>";
      if (r.work.length) h += '<h4>Worth working on</h4><ul class="qz-list qz-list-work">' + r.work.map(function (d) { return "<li>" + esc(d.label) + "</li>"; }).join("") + "</ul>";
      var links = []; (def.steps || []).forEach(function (st) { var o = st.options && st.options[state.answers[st.id]]; if (o && o.link && links.indexOf(o.link[0]) < 0) { links.push(o.link[0]); h += '<p class="qz-handoff"><a href="' + esc(o.link[0]) + '">' + esc(o.link[1]) + '</a></p>'; } });
      h += '<p class="small">Scores are a way to organise a conversation, not a lender decision. Nothing you typed has been sent anywhere.</p>';
      h += '<div class="qz-unlock"><button type="button" class="btn" data-act="unlock">Get the written version, free</button><a class="btn btn-ghost" href="' + esc(book) + '" data-evt="book_call_click">Book a 15-minute call</a><button type="button" class="qz-link" data-act="restart">Start over</button></div>';
      h += '<form class="qz-form" hidden novalidate><p class="qz-q">Where should the written version go?</p><p class="small">Joshua writes it up by hand, usually within a business day, with the numbers above and what to do next. No obligation.</p>';
      h += '<div class="fld"><label for="qz-name">Your name</label><input id="qz-name" name="name" type="text" autocomplete="name" required></div><div class="fld"><label for="qz-email">Email</label><input id="qz-email" name="email" type="email" autocomplete="email" required></div><div class="fld"><label for="qz-phone">Phone (optional)</label><input id="qz-phone" name="phone" type="tel" autocomplete="tel"></div>';
      h += '<label class="qz-check"><input type="checkbox" name="call"> I would like Joshua to call me about this</label><label class="qz-check"><input type="checkbox" name="consent_marketing"> Send me Joshua\'s occasional notes on rate decisions and rule changes (unsubscribe any time)</label><label class="qz-check"><input type="checkbox" name="consent_enquiry" required> I agree that Joshua Resvick may contact me about this enquiry. <a href="/privacy/">Privacy policy</a></label>';
      h += '<p class="qz-err" role="alert"></p><div class="qz-actions"><button type="submit" class="btn btn-sm">Send it</button><button type="button" class="qz-link" data-act="unlock-close">Cancel</button></div></form></div>';
      sec.innerHTML = h; track("quiz_complete", { quiz: id, page: typeof location !== "undefined" ? location.pathname : "" });
      sec.querySelector(".qz-band").setAttribute("tabindex", "-1"); sec.querySelector(".qz-band").focus();
    }

    function track(ev, p) { try { if (typeof window !== "undefined" && window.RMTrack) window.RMTrack(ev, p); } catch (e) {} }

    function goNext(fromStep) {
      state.history.push(state.i);
      var s = steps[state.i];
      var nextId = fromStep && fromStep.next;
      if (nextId) { state.i = steps.findIndex(function (x) { return x.id === nextId; }); }
      else { var j = state.i + 1; while (j < steps.length && steps[j].branch) j++; state.i = j; }
      if (state.i >= steps.length || state.i < 0) { state.done = true; }
      render();
    }

    sec.addEventListener("click", function (e) {
      var b = e.target.closest("button, a"); if (!b) return;
      var act = b.getAttribute("data-act");
      if (b.hasAttribute("data-opt")) {
        var s = steps[state.i], k = Number(b.getAttribute("data-opt")), o = s.options[k];
        state.answers[s.id] = k;
        if (o.goto && (o.note || def.router)) { if (def.router) { if (typeof location !== "undefined") location.href = o.goto; return; } state.pending = { goto: o.goto, note: o.note }; render(); return; }
        goNext(o);
      } else if (act === "back") { if (state.done) { state.done = false; state.i = state.history.pop(); if (def.match) state.i = total - 1; } else if (state.history.length) state.i = state.history.pop(); render(); }
      else if (act === "restart") { state = { i: 0, answers: {}, nums: {}, history: [], done: false, pending: null }; render(); }
      else if (act === "skip") { var st = steps[state.i]; delete state.nums[st.id]; goNext(); }
      else if (act === "unbranch") { state.pending = null; goNext(); }
      else if (act === "unlock") { var f = sec.querySelector(".qz-form"); f.hidden = false; b.hidden = true; f.querySelector("input").focus(); }
      else if (act === "unlock-close") { var f2 = sec.querySelector(".qz-form"); f2.hidden = true; var u = sec.querySelector("[data-act=unlock]"); if (u) { u.hidden = false; u.focus(); } }
    });

    sec.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      if (f.classList.contains("qz-form")) return submitLead(f);
      if (def.match) { state.nums[def.sliders[state.i].id] = Number(f.elements.v.value); state.history.push(state.i); if (state.i >= total - 1) state.done = true; else state.i++; render(); return; }
      var s = steps[state.i], inp = f.elements.v, v = inp.value === "" ? NaN : Number(inp.value), err = f.querySelector(".qz-err");
      if (isNaN(v)) { if (s.optional) { delete state.nums[s.id]; return goNext(); } err.textContent = "Enter a number to continue, or use Back."; inp.focus(); return; }
      if (v < (s.min || 0) || (s.max != null && v > s.max)) { err.textContent = "That number looks out of range. Check it and try again."; inp.focus(); return; }
      state.nums[s.id] = v; goNext();
    });

    function submitLead(f) {
      var err = f.querySelector(".qz-err"), name = f.elements.name.value.trim(), email = f.elements.email.value.trim();
      if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = "A name and a working email address are needed to send it."; return; }
      if (!f.elements.consent_enquiry.checked) { err.textContent = "Please tick the consent box so Joshua is allowed to reply."; return; }
      var r = score(def, state.answers), ti = { quiz: id, score: r.score };
      Object.keys(state.nums).forEach(function (k) { if (Object.keys(ti).length < 20) ti[k] = state.nums[k]; });
      Object.keys(state.answers).forEach(function (k) { if (Object.keys(ti).length < 20) ti["a_" + k] = state.answers[k]; });
      var body = { form: "quiz", intent: CANON_INTENT[id] || "other", name: name, email: email, phone: f.elements.phone.value.trim(), consent_enquiry: true, consent_marketing: !!f.elements.consent_marketing.checked,
        message: def.title + " score " + r.score + ", band " + r.band.name + "; wants call: " + (f.elements.call.checked ? "yes" : "no"), tool_inputs: ti, source_page: typeof location !== "undefined" ? location.pathname : "" };
      var btn = f.querySelector("button[type=submit]"); btn.disabled = true; btn.textContent = "Sending";
      fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(function (res) {
        if (!res.ok) throw new Error("bad");
        track("form_submit", { form: "quiz", quiz: id });
        f.innerHTML = '<p class="qz-q">Sent. Thank you.</p><p>Joshua will write it up and send it to ' + esc(email) + '. If you would rather talk sooner, <a href="' + esc(book) + '" data-evt="book_call_click">book a 15-minute call</a>.</p>';
      }).catch(function () { btn.disabled = false; btn.textContent = "Send it"; err.innerHTML = 'That did not go through. Email <a href="mailto:joshua@resvickmortgages.com">joshua@resvickmortgages.com</a> or call 778.882.5674 and mention your score.'; });
    }

    render();
  }

  if (typeof document !== "undefined") {
    var boot = function () { Array.prototype.forEach.call(document.querySelectorAll("[data-quiz]"), mount); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  }

  return { DEFS: DEFS, score: score, band: band, lenderMatch: lenderMatch, scoredSteps: scoredSteps, numbersFor: numbersFor, mount: mount, CANON_INTENT: CANON_INTENT };
});
