// Phase 4 city pages, Lower Mainland (§7.12) plus the two standalone city rates pages. specTitle/specMeta are the
// prompt's exact table text; title/meta are the SEO versions (title <= 60, meta <= 155, keyword first, BC) per Jared's
// Oct 30 instruction. /mortgage-broker-surrey/ targets the service-area angle so it does not compete with Home.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
const city = (ratesContext, a, b) => [...common, ratesContext, a, b].filter((v, i, arr) => arr.indexOf(v) === i);
const ratesLinks = (broker) => ["/mortgage-rates-bc/", broker, "/fixed-vs-variable-mortgage/", "/5-year-fixed-mortgage-rate/", "/mortgage-calculators/#compare", "/first-time-home-buyer-bc/", "/mortgage-renewal-rates-bc/", "/contact/"];

export default {
  "/mortgage-broker-vancouver/": {
    title: "Mortgage Broker in Vancouver, BC | Resvick Mortgages",
    meta: "Vancouver mortgage broker Joshua Resvick (Xeva Mortgage) serves condo, townhouse and suite-house buyers and renewers across the city, all online.",
    specTitle: "Mortgage Broker in Vancouver | Resvick Mortgages",
    specMeta: "Vancouver mortgage broker Joshua Resvick (Xeva Mortgage) serves buyers and renewers across the city — first homes, condos, renewals and switches, all online.",
    links: city("/mortgage-rates-vancouver/", "/mortgage-broker-burnaby/", "/mortgage-broker-richmond/")
  },
  "/mortgage-broker-surrey/": {
    title: "Surrey Mortgage Broker | South Surrey, White Rock & More",
    meta: "Surrey mortgage broker Joshua Resvick (Xeva Mortgage): suite homes, first-time buyers, City Centre presales and renewals across every Surrey neighbourhood.",
    specTitle: "Mortgage Broker in Surrey | Resvick Mortgages",
    specMeta: "Surrey mortgage broker Joshua Resvick of Resvick Mortgages (Xeva Mortgage) — first-time buyers, renewals, suite homes and refinances across Surrey, BC.",
    links: city("/mortgage-rates-surrey/", "/mortgage-broker-langley/", "/mortgage-broker-richmond/")
  },
  "/mortgage-broker-langley/": {
    title: "Mortgage Broker in Langley, BC | Resvick Mortgages",
    meta: "Langley mortgage broker service from Joshua Resvick (Xeva Mortgage): Willoughby presales, suite homes, acreages and renewals across the City and Township.",
    specTitle: "Mortgage Broker in Langley | Resvick Mortgages",
    specMeta: "Langley mortgage broker service from Joshua Resvick (Xeva Mortgage): first-time buyers, renewals, refinances and suite homes across Langley City and Township.",
    links: city("/mortgage-rates-bc/", "/mortgage-broker-surrey/", "/mortgage-broker-abbotsford/")
  },
  "/mortgage-broker-burnaby/": {
    title: "Mortgage Broker in Burnaby, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Burnaby, BC: Joshua Resvick (Xeva Mortgage) for condo and townhouse purchases, newcomer files, renewals and switches, all online.",
    specTitle: "Mortgage Broker in Burnaby | Resvick Mortgages",
    specMeta: "Mortgage broker serving Burnaby, BC: Joshua Resvick (Xeva Mortgage) — condo and townhouse purchases, newcomer files, renewals and switches, all online.",
    links: city("/mortgage-rates-bc/", "/mortgage-broker-vancouver/", "/mortgage-broker-coquitlam/")
  },
  "/mortgage-broker-coquitlam/": {
    title: "Mortgage Broker in Coquitlam, BC | Resvick Mortgages",
    meta: "Coquitlam mortgage broker service from Joshua Resvick (Xeva Mortgage): Tri-Cities family purchases, presales, renewals and refinances, handled online.",
    specTitle: "Mortgage Broker in Coquitlam | Resvick Mortgages",
    specMeta: "Coquitlam mortgage broker service from Joshua Resvick (Xeva Mortgage): Tri-Cities family purchases, presales, renewals and refinances, handled online.",
    links: city("/mortgage-rates-bc/", "/mortgage-broker-burnaby/", "/mortgage-broker-surrey/")
  },
  "/mortgage-broker-richmond/": {
    title: "Mortgage Broker in Richmond, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Richmond, BC: Joshua Resvick (Xeva Mortgage) helps newcomer and move-up buyers with purchases, renewals and refinances, online.",
    specTitle: "Mortgage Broker in Richmond | Resvick Mortgages",
    specMeta: "Mortgage broker serving Richmond, BC — Joshua Resvick (Xeva Mortgage) helps newcomer and move-up buyers with purchases, renewals and refinances, online.",
    links: city("/mortgage-rates-bc/", "/mortgage-broker-vancouver/", "/mortgage-broker-surrey/")
  },
  "/mortgage-broker-abbotsford/": {
    title: "Mortgage Broker in Abbotsford, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Abbotsford, BC: Joshua Resvick (Xeva Mortgage) for farm and acreage files, suite homes, first-time buyers and Valley renewals.",
    specTitle: "Mortgage Broker in Abbotsford | Resvick Mortgages",
    specMeta: "Mortgage broker serving Abbotsford, BC: Joshua Resvick (Xeva Mortgage) — farm and acreage files, suite homes, first-time buyers and renewals in the Valley.",
    links: city("/mortgage-rates-bc/", "/mortgage-broker-langley/", "/mortgage-broker-surrey/")
  },
  "/mortgage-rates-vancouver/": {
    title: "Mortgage Rates Vancouver | Current Rates & Local Context",
    meta: "Current Vancouver mortgage rates with local context: how property type and down payment change the rate you actually get, and what to compare beyond it.",
    specTitle: "Mortgage Rates in Vancouver | Current Rates + Local Context",
    specMeta: "Current Vancouver mortgage rates with local context: how your property type and down payment change the rate you actually get — and what to compare beyond it.",
    links: ratesLinks("/mortgage-broker-vancouver/")
  },
  "/mortgage-rates-surrey/": {
    title: "Mortgage Rates Surrey | Current Rates & Local Context",
    meta: "Current Surrey mortgage rates with local context: suite homes, first purchases and renewals, how the rate you qualify for is set, and what else to compare.",
    specTitle: "Mortgage Rates in Surrey | Current Rates + Local Context",
    specMeta: "Current Surrey mortgage rates with local context: suite homes, first purchases and renewals — how the rate you qualify for is set, and what else to compare.",
    links: ratesLinks("/mortgage-broker-surrey/")
  }
};
