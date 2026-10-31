// Phase 8 city pages (North Vancouver, Chilliwack). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-north-vancouver/": {
    title: "Mortgage Broker in North Vancouver, BC | Resvick Mortgages",
    meta: "North Vancouver mortgage broker service from Joshua Resvick (Xeva Mortgage): condos, suites, homes over $1.5M and equity moves on the North Shore, online.",
    links: [...common, "/mortgage-broker-vancouver/", "/mortgage-broker-burnaby/"]
  },
  "/mortgage-broker-chilliwack/": {
    title: "Mortgage Broker in Chilliwack, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Chilliwack, BC: Joshua Resvick (Xeva Mortgage) helps with acreages, suites, Cultus Lake leases and moves from the Lower Mainland.",
    links: [...common, "/mortgage-broker-abbotsford/", "/mortgage-broker-langley/"]
  }
};
