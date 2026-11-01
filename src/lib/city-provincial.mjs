// Province-wide status for each city page, from gov.bc.ca (read October 31, 2026):
//  - Short-term rental principal-residence requirement list (page updated September 21, 2026; list as of June 1, 2026)
//  - Speculation and Vacancy Tax taxable areas (page updated December 8, 2025)
// strP: true = the Province's principal-residence rule applies; false = the town is on the exempt list.
// svt: true = the town is a taxable area.
// Entries with two places carry a per-place list: [name, strP, svt].
export const PROV_STR_URL = "https://www2.gov.bc.ca/gov/content/housing-tenancy/short-term-rentals/principal-residence-requirement";
export const PROV_SVT_URL = "https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax/how-tax-works/taxable-areas";
const P = (strP, svt) => ({ strP, svt });
export const PROV = {
  abbotsford: P(true, true),
  burnaby: P(true, true),
  chilliwack: P(true, true),
  coquitlam: P(true, true),
  courtenay: { places: [["Courtenay", true, true], ["Comox", true, true]] },
  delta: P(true, true),
  fernie: P(false, false),
  "fort-st-john": P(false, false),
  invermere: P(false, false),
  kamloops: P(true, true),
  kelowna: P(false, true),
  keremeos: P(false, false),
  kitimat: P(false, false),
  langford: P(true, true),
  langley: { places: [["the City of Langley", true, true], ["the Township of Langley", true, true]] },
  "maple-ridge": P(true, true),
  mission: P(true, true),
  nanaimo: P(true, true),
  "new-westminster": P(true, true),
  "north-vancouver": { places: [["the City of North Vancouver", true, true], ["the District of North Vancouver", true, true]] },
  "osoyoos-oliver": { places: [["Osoyoos", true, false], ["Oliver", false, false]] },
  penticton: P(true, true),
  "pitt-meadows": P(true, true),
  "port-coquitlam": P(true, true),
  "port-moody": P(true, true),
  "prince-george": P(true, false),
  "prince-rupert": P(true, false),
  princeton: P(false, false),
  quesnel: P(false, false),
  revelstoke: P(false, false),
  richmond: P(true, true),
  saanich: P(true, true),
  squamish: P(true, true),
  surrey: P(true, true),
  terrace: P(true, false),
  "trail-castlegar": { places: [["Trail", false, false], ["Castlegar", false, false]] },
  vancouver: P(true, true),
  vernon: P(true, true),
  victoria: P(true, true),
  "west-kelowna": P(false, true),
  whistler: P(false, false),
  "white-rock": P(true, true),
};
