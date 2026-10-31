// Phase 8 city pages (Maple Ridge, Mission). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-maple-ridge/": {
    title: "Mortgage Broker in Maple Ridge, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Maple Ridge and Pitt Meadows: Joshua Resvick (Xeva Mortgage) helps with suites, acreage, new homes and renewals, online and by phone.",
    links: [...common, "/mortgage-broker-coquitlam/", "/mortgage-broker-langley/"]
  },
  "/mortgage-broker-mission/": {
    title: "Mortgage Broker in Mission, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Mission, BC: Joshua Resvick (Xeva Mortgage) helps buyers moving up the valley, with new homes, acreage and suites, by phone and video.",
    links: [...common, "/mortgage-broker-abbotsford/", "/mortgage-broker-langley/"]
  }
};
