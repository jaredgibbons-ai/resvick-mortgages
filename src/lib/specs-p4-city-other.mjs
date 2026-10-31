// Phase 4 city pages outside the Lower Mainland (§7.12 table). specTitle/specMeta are the prompt's exact text;
// title/meta are the SEO versions (title <= 60, meta <= 155, keyword first, ", BC") per Jared's Oct 30 instruction.
const common = ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/self-employed-mortgage-bc/", "/mortgage-calculators/", "/mortgage-aftercare-program/", "/contact/"];
export default {
  "/mortgage-broker-victoria/": {
    title: "Mortgage Broker in Victoria, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Victoria, BC: Joshua Resvick (Xeva Mortgage) helps Island buyers, government employees and renewers by phone and video, BC-wide.",
    specTitle: "Mortgage Broker in Victoria | Resvick Mortgages",
    specMeta: "Mortgage broker serving Victoria, BC: Joshua Resvick (Xeva Mortgage) helps island buyers, government employees and renewers — by phone and video, BC-wide.",
    links: [...common, "/mortgage-broker-nanaimo/", "/mortgage-broker-vancouver/"]
  },
  "/mortgage-broker-kelowna/": {
    title: "Mortgage Broker in Kelowna, BC | Resvick Mortgages",
    meta: "Kelowna mortgage broker service from Joshua Resvick (Xeva Mortgage): purchases, relocations, recreational property financing and renewals, Okanagan-wide.",
    specTitle: "Mortgage Broker in Kelowna | Resvick Mortgages",
    specMeta: "Kelowna mortgage broker service from Joshua Resvick (Xeva Mortgage): purchases, relocations, recreational-property financing and renewals across the Okanagan.",
    links: [...common, "/mortgage-broker-kamloops/", "/mortgage-broker-vancouver/"]
  },
  "/mortgage-broker-kamloops/": {
    title: "Mortgage Broker in Kamloops, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Kamloops, BC: Joshua Resvick (Xeva Mortgage) works with trades, rail and contract income for purchases, renewals and refinances.",
    specTitle: "Mortgage Broker in Kamloops | Resvick Mortgages",
    specMeta: "Mortgage broker serving Kamloops, BC — Joshua Resvick (Xeva Mortgage) works with trades, rail and contract income for purchases, renewals and refinances.",
    links: [...common, "/mortgage-broker-kelowna/", "/mortgage-broker-prince-george/"]
  },
  "/mortgage-broker-nanaimo/": {
    title: "Mortgage Broker in Nanaimo, BC | Resvick Mortgages",
    meta: "Nanaimo mortgage broker service from Joshua Resvick (Xeva Mortgage): first homes, ferry-commuter purchases, renewals and refinances across the Island.",
    specTitle: "Mortgage Broker in Nanaimo | Resvick Mortgages",
    specMeta: "Nanaimo mortgage broker service from Joshua Resvick (Xeva Mortgage): first homes, ferry-commuter purchases, renewals and refinances across the Island.",
    links: [...common, "/mortgage-broker-victoria/", "/mortgage-broker-vancouver/"]
  },
  "/mortgage-broker-prince-george/": {
    title: "Mortgage Broker in Prince George, BC | Resvick Mortgages",
    meta: "Mortgage broker serving Prince George, BC: Joshua Resvick (Xeva Mortgage) helps northern buyers and renewers with resource and shift income, all online.",
    specTitle: "Mortgage Broker in Prince George | Resvick Mortgages",
    specMeta: "Mortgage broker serving Prince George, BC — Joshua Resvick (Xeva Mortgage) helps northern buyers and renewers with resource and shift income, all online.",
    links: [...common, "/mortgage-broker-kamloops/", "/mortgage-broker-kelowna/"]
  }
};
