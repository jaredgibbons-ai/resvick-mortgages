// Phase 8 city pages (White Rock, Delta). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-white-rock/": {
    title: "Mortgage Broker in White Rock, BC | Resvick Mortgages",
    meta: "White Rock mortgage broker service from Joshua Resvick (Xeva Mortgage): condo and strata purchases, downsizing, retirement income, renewals and refinances.",
    links: [...common, "/mortgage-broker-surrey/", "/mortgage-broker-langley/"]
  },
  "/mortgage-broker-delta/": {
    title: "Mortgage Broker in Delta, BC | Resvick Mortgages",
    meta: "Delta mortgage broker service from Joshua Resvick (Xeva Mortgage): North Delta suites, Ladner farmland, Tsawwassen leasehold, renewals and refinances.",
    links: [...common, "/mortgage-broker-surrey/", "/mortgage-broker-richmond/"]
  }
};
