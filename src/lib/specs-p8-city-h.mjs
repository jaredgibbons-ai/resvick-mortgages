// Phase 8 city pages: Penticton, West Kelowna. Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-penticton/": {
    title: "Mortgage Broker in Penticton, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Penticton, Summerland and Naramata: Joshua Resvick (Xeva Mortgage) helps with retirement moves, suites and rentals.",
    links: [...common, "/mortgage-broker-kelowna/", "/mortgage-broker-kamloops/"]
  },
  "/mortgage-broker-west-kelowna/": {
    title: "Mortgage Broker in West Kelowna, BC | Resvick Mortgages",
    meta: "Mortgage broker serving West Kelowna and Peachland: Joshua Resvick (Xeva Mortgage) helps with leasehold homes, hillside lots, suites and acreage.",
    links: [...common, "/mortgage-broker-kelowna/", "/mortgage-broker-kamloops/"]
  }
};
