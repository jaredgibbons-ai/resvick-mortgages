// Phase 3 alternative lending & complex income specs (§7.7). `specTitle`/`specMeta` are the prompt originals
// (tools/pull-spec.mjs); `title`/`meta` are the SEO-tightened versions (<=60 / <=155, keyword first, BC where local).
export default {
  "/self-employed-mortgage-bc/": {
    specTitle: "Self-Employed Mortgages in BC | Stated Income, Dividends & 2-Year Rules",
    specMeta: "Self-employed in BC? Your tax return is working against you at the bank. How A, B and stated-income lenders actually read business income — from an ex-underwriter.",
    title: "Self-Employed Mortgage BC | Stated Income & the 2-Year Rule",
    meta: "Self-employed in BC? Your tax return works against you at the bank. How A, B and stated-income lenders really read business income, from an ex-underwriter.",
    links: ["/stated-income-mortgage/", "/newly-self-employed-mortgage/", "/b-lender-mortgage-bc/", "/mortgage-for-contractors/", "/mortgage-calculators/#affordability", "/mortgage-application-checklist/", "/mortgage-rates-bc/", "/how-mortgage-brokers-get-paid/", "/contact/"]
  },
  "/stated-income-mortgage/": {
    specTitle: "Stated Income Mortgages in BC | When Your NOA Undersells You",
    specMeta: "Stated income lets B lenders use a reasonable income figure instead of your tax-minimized NOA. Who qualifies, what it costs, and the proof you still need.",
    title: "Stated Income Mortgage BC | When Your NOA Undersells You",
    meta: "Stated income lets B lenders use a reasonable income figure instead of your tax-minimized NOA. Who qualifies in BC, what it costs and the proof you need.",
    links: ["/self-employed-mortgage-bc/", "/b-lender-mortgage-bc/", "/newly-self-employed-mortgage/", "/private-mortgage-lending-bc/", "/mortgage-calculators/#affordability", "/contact/"]
  },
  "/newly-self-employed-mortgage/": {
    specTitle: "Newly Self-Employed? Getting a Mortgage in Your First 2 Years",
    specMeta: "Less than two years self-employed doesn't mean no mortgage — it means a different lender and a stronger story. Your options in BC, year by year.",
    title: "Newly Self-Employed Mortgage | Your First 2 Years in BC",
    meta: "Less than two years self-employed does not mean no mortgage. It means a different lender and a stronger file. Your options in BC, year by year.",
    links: ["/self-employed-mortgage-bc/", "/stated-income-mortgage/", "/mortgage-with-a-cosigner/", "/b-lender-mortgage-bc/", "/mortgage-pre-approval-bc/", "/contact/"]
  },
  "/b-lender-mortgage-bc/": {
    specTitle: "B Lender Mortgages in BC | The Bridge Between Bank and Private",
    specMeta: "B lenders exist for good files that miss A rules — bruised credit, stated income, tight ratios. Rates, fees and the plan to get you back to A.",
    title: "B Lender Mortgage BC | Between the Bank and Private",
    meta: "B lenders take good files that miss A rules: bruised credit, stated income, tight ratios. How B mortgages are priced in BC, the fees and the way back to A.",
    links: ["/bad-credit-mortgage-bc/", "/mortgage-after-bankruptcy/", "/mortgage-after-consumer-proposal/", "/stated-income-mortgage/", "/how-mortgage-brokers-get-paid/", "/build-credit-for-a-mortgage/", "/private-mortgage-lending-bc/", "/contact/"]
  },
  "/bad-credit-mortgage-bc/": {
    specTitle: "Bad Credit Mortgage in BC | What's Possible at Every Score",
    specMeta: "Bruised credit doesn't end the conversation — it changes the lender, the down payment and the plan. What each credit range can do in BC, honestly.",
    title: "Bad Credit Mortgage BC | What Is Possible at Every Score",
    meta: "Bruised credit does not end the conversation. It changes the lender, the down payment and the plan. What each credit range can do in BC, honestly.",
    links: ["/build-credit-for-a-mortgage/", "/b-lender-mortgage-bc/", "/mortgage-renewal-denied/", "/private-mortgage-lending-bc/", "/mortgage-application-checklist/", "/mortgage-calculators/#affordability", "/contact/"]
  },
  "/mortgage-after-bankruptcy/": {
    specTitle: "Mortgage After Bankruptcy in Canada | The Re-Establishment Rules",
    specMeta: "Discharged and rebuilding? Lenders want time, two clean trades and a story that adds up. How mortgages after bankruptcy work in BC.",
    title: "Mortgage After Bankruptcy in Canada | Re-Establishment Rules",
    meta: "Discharged and rebuilding? Lenders want time since discharge, two clean trades and a story that adds up. How mortgages after bankruptcy work in BC.",
    links: ["/build-credit-for-a-mortgage/", "/b-lender-mortgage-bc/", "/mortgage-after-consumer-proposal/", "/bad-credit-mortgage-bc/", "/mortgage-application-checklist/", "/contact/"]
  },
  "/mortgage-after-consumer-proposal/": {
    specTitle: "Mortgage After a Consumer Proposal | Buying Before It's Off Your Report",
    specMeta: "A consumer proposal doesn't shelve homeownership for six years. How lenders treat proposals — during, just completed, and after — in BC.",
    title: "Mortgage After a Consumer Proposal | Buying in BC",
    meta: "A consumer proposal does not shelve homeownership for six years. How BC lenders treat proposals during, just after completion and once off your report.",
    links: ["/mortgage-after-bankruptcy/", "/build-credit-for-a-mortgage/", "/b-lender-mortgage-bc/", "/bad-credit-mortgage-bc/", "/first-time-home-buyer-bc/", "/contact/"]
  },
  "/build-credit-for-a-mortgage/": {
    specTitle: "How to Build Credit for a Mortgage | The 2/2/2 Rule",
    specMeta: "Two trades, two years, two-thousand-dollar limits — the 2/2/2 rule lenders use to judge rebuilt credit. A practical BC plan to become mortgage-ready.",
    title: "How to Build Credit for a Mortgage | The 2/2/2 Rule",
    meta: "Two trades, two years, $2,000 limits: the 2/2/2 rule lenders use to judge rebuilt credit. A practical plan for BC buyers to become mortgage-ready.",
    links: ["/bad-credit-mortgage-bc/", "/mortgage-after-bankruptcy/", "/mortgage-application-checklist/", "/mortgage-calculators/#affordability", "/first-time-home-buyer-bc/", "/mortgage-calculators/#quiz", "/contact/"]
  },
  "/private-mortgage-lending-bc/": {
    specTitle: "Private Mortgage Lending in BC | Fast, Expensive, Sometimes Right",
    specMeta: "Private mortgages solve time and qualification problems — at a price. When private is the right tool in BC, what it really costs, and the exit plan.",
    title: "Private Mortgage Lenders BC | Fast, Costly, Sometimes Right",
    meta: "Private mortgages solve time and qualification problems, at a price. When a private lender is the right tool in BC, what it really costs and the exit plan.",
    links: ["/b-lender-mortgage-bc/", "/bridge-financing/", "/behind-on-mortgage-payments/", "/second-mortgage-bc/", "/how-mortgage-brokers-get-paid/", "/mortgage-renewal-denied/", "/contact/"]
  }
};
