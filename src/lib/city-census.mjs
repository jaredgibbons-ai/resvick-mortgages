// 2021 Census figures (median household income for 2020, self-employed share of workers, three largest industries).
// Source on every page: Statistics Canada, 2021 Census Profile, read October 2026. Figures match the prose on each city page.
const R = (area, median, self, ind) => ({ area, median, self, ind });
const CENSUS = {
  abbotsford: [R("Abbotsford", "$90,000", "17.0%", "Retail, health care, construction")],
  burnaby: [R("Burnaby", "$83,000", "14.8%", "Professional, scientific and technical services; retail; health care")],
  chilliwack: [R("Chilliwack", "$85,000", "17.8%", "Construction, retail, health care")],
  coquitlam: [R("Coquitlam", "$92,000", "16.4%", "Retail, professional services, health care")],
  courtenay: [R("Courtenay", "$72,000", "16.5%", "Retail; health care; accommodation and food services"), R("Comox", "$83,000", "17.5%", "Health care, retail, public administration")],
  delta: [R("Delta", "$108,000", "15.8%", "Retail; health care; transportation and warehousing")],
  fernie: [R("Fernie", "$107,000", "15.7%", "Mining, quarrying, and oil and gas extraction; accommodation and food services; retail")],
  "fort-st-john": [R("Fort St. John", "$102,000", "9.5%", "Construction; retail; mining, quarrying, and oil and gas extraction")],
  invermere: [R("Invermere", "$84,000", "21.0%", "Accommodation and food services; retail; construction")],
  kamloops: [R("Kamloops", "$88,000", "12.0%", "Health care, retail, construction")],
  kelowna: [R("Kelowna", "$82,000", "18.7%", "Health care, retail, construction")],
  keremeos: [R("Keremeos", "$53,200", "16.8%", "Health care, retail, construction")],
  kitimat: [R("Kitimat", "$103,000", "8.0%", "Manufacturing, construction, health care")],
  langford: [R("Langford", "$93,000", "13.1%", "Public administration, health care, retail")],
  langley: [R("City of Langley", "$77,000", "12.7%", "Construction, retail, health care"), R("Township of Langley", "$108,000", "17.8%", "Construction, retail, health care")],
  "maple-ridge": [R("Maple Ridge", "$105,000", "15.5%", "Construction, retail, health care")],
  mission: [R("Mission", "$98,000", "16.5%", "Construction, retail, health care")],
  nanaimo: [R("Nanaimo", "$75,500", "16.3%", "Health care, retail, construction")],
  "new-westminster": [R("New Westminster", "$82,000", "12.0%", "Health care, professional services, retail")],
  "north-vancouver": [R("District of North Vancouver", "$123,000", "22.2%", "Professional services, health care, retail"), R("City of North Vancouver", "$86,000", "17.4%", "Professional services, health care, retail")],
  "osoyoos-oliver": [R("Osoyoos", "$66,000", "17.3%", "Retail; accommodation and food services; health care"), R("Oliver", "$68,500", "11.8%", "Health care; retail; accommodation and food services")],
  penticton: [R("Penticton", "$68,000", "17.5%", "Health care, retail, construction")],
  "pitt-meadows": [R("Pitt Meadows", "$104,000", "14.5%", "Health care, construction, retail")],
  "port-coquitlam": [R("Port Coquitlam", "$102,000", "13.5%", "Health care, retail, construction")],
  "port-moody": [R("Port Moody", "$115,000", "16.2%", "Professional services, health care, retail")],
  "prince-george": [R("Prince George", "$88,000", "9.8%", "Health care, retail, construction")],
  "prince-rupert": [R("Prince Rupert", "$95,000", "11.5%", "Transportation and warehousing, retail, health care")],
  princeton: [R("Princeton", "$64,500", "9.4%", "Mining, manufacturing, retail")],
  quesnel: [R("Quesnel", "$67,000", "10.9%", "Manufacturing, health care, retail")],
  revelstoke: [R("Revelstoke", "$96,000", "14.9%", "Accommodation and food services; retail; health care")],
  richmond: [R("Richmond", "$79,000", "17.5%", "Retail, professional services, health care")],
  saanich: [R("Saanich", "$93,000", "17.1%", "Health care, public administration, retail")],
  squamish: [R("Squamish", "$111,000", "20.7%", "Professional services, construction, retail")],
  surrey: [R("Surrey", "$98,000", "15.0%", "Retail, health care, construction")],
  terrace: [R("Terrace", "$90,000", "12.1%", "Health care, retail, construction")],
  "trail-castlegar": [R("Trail", "$68,000", "11.3%", "Health care, retail, manufacturing"), R("Castlegar", "$81,000", "12.0%", "Health care, retail, manufacturing")],
  vancouver: [R("Vancouver", "$82,000", "17.7%", "Professional, scientific and technical services; health care; retail")],
  vernon: [R("Vernon", "$73,500", "15.8%", "Retail, health care, construction")],
  victoria: [R("Victoria", "$67,500", "15.7%", "Health care, public administration, professional services")],
  "west-kelowna": [R("West Kelowna", "$99,000", "19.4%", "Health care, retail, construction")],
  whistler: [R("Whistler", "$99,000", "21.5%", "Accommodation and food services, construction, retail")],
  "white-rock": [R("White Rock", "$73,000", "24.4%", "Health care, retail, professional services")],
};
export const hasCensus = (k) => !!CENSUS[k];
export const censusTable = (k) => {
  const rows = CENSUS[k];
  if (!rows) return "";
  const body = rows.map((r) => `<tr><th scope="row">${r.area}</th><td>${r.median}</td><td>${r.self}</td><td>${r.ind}</td></tr>`).join("");
  return `<div class="table-wrap"><table><caption>2021 Census, Statistics Canada</caption><thead><tr><th scope="col">Area</th><th scope="col">Median income (2020)</th><th scope="col">Self-employed</th><th scope="col">Top industries</th></tr></thead><tbody>${body}</tbody></table></div>`;
};
