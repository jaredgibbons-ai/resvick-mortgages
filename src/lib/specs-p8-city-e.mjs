// Phase 8 city pages (New Westminster, Squamish). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-new-westminster/": {
    title: "Mortgage Broker in New Westminster, BC | Resvick Mortgages",
    meta: "Mortgage broker serving New Westminster: Joshua Resvick (Xeva Mortgage) helps with condos, older homes, suites and renewals by phone and video.",
    links: [...common, "/mortgage-broker-burnaby/", "/mortgage-broker-surrey/"]
  },
  "/mortgage-broker-squamish/": {
    title: "Mortgage Broker in Squamish, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Squamish and Whistler: Joshua Resvick (Xeva Mortgage) helps with remote income, suites and second homes by phone and video.",
    links: [...common, "/mortgage-broker-north-vancouver/", "/mortgage-broker-vancouver/"]
  }
};
