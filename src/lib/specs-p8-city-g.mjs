// Phase 8 city pages (Courtenay, Vernon). Same shape as specs-p4-city-other.mjs.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-courtenay/": {
    title: "Mortgage Broker in Courtenay, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Courtenay, Comox and Cumberland: Joshua Resvick (Xeva Mortgage) helps movers, retirees, base families and second-home buyers.",
    links: [...common, "/mortgage-broker-nanaimo/", "/mortgage-broker-victoria/"]
  },
  "/mortgage-broker-vernon/": {
    title: "Mortgage Broker in Vernon, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Vernon, Coldstream and the North Okanagan: Joshua Resvick (Xeva Mortgage) helps with lake homes, ALR land and renewals.",
    links: [...common, "/mortgage-broker-kelowna/", "/mortgage-broker-kamloops/"]
  }
};
