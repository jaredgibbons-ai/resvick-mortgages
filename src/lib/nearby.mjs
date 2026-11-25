// Nearby towns that have their own city page. Keys are the page slug without "mortgage-broker-".
const NAME = {
  abbotsford: "Abbotsford", burnaby: "Burnaby", "campbell-river": "Campbell River", chilliwack: "Chilliwack", coquitlam: "Coquitlam", courtenay: "Courtenay", cranbrook: "Cranbrook", delta: "Delta", duncan: "Duncan", fernie: "Fernie",
  "fort-st-john": "Fort St. John", invermere: "Invermere", kamloops: "Kamloops", kelowna: "Kelowna", keremeos: "Keremeos", kitimat: "Kitimat", langford: "Langford",
  langley: "Langley", "maple-ridge": "Maple Ridge", mission: "Mission", nanaimo: "Nanaimo", nelson: "Nelson", "new-westminster": "New Westminster", "north-vancouver": "North Vancouver",
  "osoyoos-oliver": "Osoyoos and Oliver", penticton: "Penticton", "pitt-meadows": "Pitt Meadows", "port-alberni": "Port Alberni", "port-coquitlam": "Port Coquitlam", "port-moody": "Port Moody", "powell-river": "Powell River",
  "prince-george": "Prince George", "prince-rupert": "Prince Rupert", princeton: "Princeton", quesnel: "Quesnel", revelstoke: "Revelstoke", richmond: "Richmond",
  saanich: "Saanich", squamish: "Squamish", surrey: "Surrey", terrace: "Terrace", "trail-castlegar": "Trail and Castlegar", vancouver: "Vancouver", vernon: "Vernon",
  victoria: "Victoria", "west-kelowna": "West Kelowna", whistler: "Whistler", "white-rock": "White Rock",
};
export const CITY_NAME = NAME;
const NEAR = {
  abbotsford: ["langley", "mission", "chilliwack"], burnaby: ["vancouver", "new-westminster", "coquitlam", "richmond"],
  chilliwack: ["abbotsford", "mission"], coquitlam: ["port-coquitlam", "port-moody", "burnaby", "maple-ridge"],
  courtenay: ["campbell-river", "nanaimo", "port-alberni", "powell-river"], "campbell-river": ["courtenay", "nanaimo"], cranbrook: ["fernie", "invermere"], duncan: ["langford", "nanaimo", "victoria"], delta: ["surrey", "richmond", "white-rock"], fernie: ["cranbrook", "invermere", "trail-castlegar"],
  "fort-st-john": ["prince-george"], invermere: ["cranbrook", "fernie", "revelstoke"], kamloops: ["kelowna", "vernon"],
  kelowna: ["west-kelowna", "vernon", "penticton"], keremeos: ["osoyoos-oliver", "penticton", "princeton"], kitimat: ["terrace", "prince-rupert"],
  langford: ["victoria", "saanich", "duncan"], langley: ["surrey", "abbotsford", "maple-ridge", "white-rock"], "maple-ridge": ["pitt-meadows", "mission", "port-coquitlam", "langley"],
  mission: ["abbotsford", "maple-ridge", "chilliwack"], nanaimo: ["duncan", "port-alberni", "courtenay", "langford"], nelson: ["trail-castlegar", "fernie", "cranbrook"], "new-westminster": ["burnaby", "surrey", "coquitlam", "richmond"],
  "north-vancouver": ["vancouver", "burnaby", "squamish"], "osoyoos-oliver": ["penticton", "keremeos"], penticton: ["kelowna", "west-kelowna", "osoyoos-oliver", "keremeos"],
  "pitt-meadows": ["maple-ridge", "port-coquitlam", "coquitlam", "langley"], "port-coquitlam": ["coquitlam", "pitt-meadows", "maple-ridge", "port-moody"],
  "port-alberni": ["nanaimo", "courtenay"], "port-moody": ["coquitlam", "port-coquitlam", "burnaby"], "powell-river": ["courtenay", "campbell-river"], "prince-george": ["quesnel", "fort-st-john"], "prince-rupert": ["terrace", "kitimat"],
  princeton: ["keremeos", "penticton", "kelowna"], quesnel: ["prince-george"], revelstoke: ["invermere", "kamloops", "vernon"],
  richmond: ["vancouver", "delta", "burnaby", "new-westminster"], saanich: ["victoria", "langford"], squamish: ["whistler", "north-vancouver", "vancouver"],
  surrey: ["langley", "white-rock", "delta", "new-westminster"], terrace: ["kitimat", "prince-rupert"], "trail-castlegar": ["nelson", "osoyoos-oliver", "fernie", "revelstoke"],
  vancouver: ["burnaby", "north-vancouver", "richmond", "new-westminster"], vernon: ["kelowna", "west-kelowna", "kamloops"], victoria: ["saanich", "langford"],
  "west-kelowna": ["kelowna", "penticton", "vernon"], whistler: ["squamish", "vancouver"], "white-rock": ["surrey", "delta", "langley"],
};
const link = (k) => `<a href="/mortgage-broker-${k}/">${NAME[k]}</a>`;
export const nearbyKeys = Object.keys(NEAR);
export const nearbyCallout = (k, callout) => {
  const near = NEAR[k];
  if (!near) return "";
  const names = near.map(link);
  const list = names.length === 1 ? names[0] : names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  return callout("Nearby", `<p>I also work with clients in ${list}. Pick your town. Each page covers local incomes, housing and what lenders ask there. I work from my Surrey office by phone, video and secure upload, so it doesn't matter where in BC you live. The full list is on the <a href="/bc-mortgage-broker-service-areas/">cities and towns I serve</a> page.</p>`);
};
