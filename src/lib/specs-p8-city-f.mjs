// Phase 8 city pages (Langford, Saanich). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-langford/": {
    title: "Mortgage Broker in Langford, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Langford, Colwood and the Westshore: Joshua Resvick (Xeva Mortgage) helps with new builds, townhouses, suites and renewals.",
    links: [...common, "/mortgage-broker-victoria/", "/mortgage-broker-nanaimo/"]
  },
  "/mortgage-broker-saanich/": {
    title: "Mortgage Broker in Saanich, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Saanich and the Saanich Peninsula: Joshua Resvick (Xeva Mortgage) helps with suites, acreage, downsizers and renewals.",
    links: [...common, "/mortgage-broker-victoria/", "/mortgage-broker-nanaimo/"]
  }
};
