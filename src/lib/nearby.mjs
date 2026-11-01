// Nearby towns that have their own city page. Keys are the page slug without "mortgage-broker-".
const NAME = {
  abbotsford: "Abbotsford", burnaby: "Burnaby", chilliwack: "Chilliwack", coquitlam: "Coquitlam", courtenay: "Courtenay", delta: "Delta", fernie: "Fernie",
  "fort-st-john": "Fort St. John", invermere: "Invermere", kamloops: "Kamloops", kelowna: "Kelowna", keremeos: "Keremeos", kitimat: "Kitimat", langford: "Langford",
  langley: "Langley", "maple-ridge": "Maple Ridge", mission: "Mission", nanaimo: "Nanaimo", "new-westminster": "New Westminster", "north-vancouver": "North Vancouver",
  "osoyoos-oliver": "Osoyoos and Oliver", penticton: "Penticton", "pitt-meadows": "Pitt Meadows", "port-coquitlam": "Port Coquitlam", "port-moody": "Port Moody",
  "prince-george": "Prince George", "prince-rupert": "Prince Rupert", princeton: "Princeton", quesnel: "Quesnel", revelstoke: "Revelstoke", richmond: "Richmond",
  saanich: "Saanich", squamish: "Squamish", surrey: "Surrey", terrace: "Terrace", "trail-castlegar": "Trail and Castlegar", vancouver: "Vancouver", vernon: "Vernon",
  victoria: "Victoria", "west-kelowna": "West Kelowna", whistler: "Whistler", "white-rock": "White Rock",
};
const NEAR = {
  abbotsford: ["langley", "mission", "chilliwack"], burnaby: ["vancouver", "new-westminster", "coquitlam", "richmond"],
  chilliwack: ["abbotsford", "mission"], coquitlam: ["port-coquitlam", "port-moody", "burnaby", "maple-ridge"],
  courtenay: ["nanaimo"], delta: ["surrey", "richmond", "white-rock"], fernie: ["invermere", "trail-castlegar"],
  "fort-st-john": ["prince-george"], invermere: ["fernie", "revelstoke"], kamloops: ["kelowna", "vernon"],
  kelowna: ["west-kelowna", "vernon", "penticton"], keremeos: ["osoyoos-oliver", "penticton", "princeton"], kitimat: ["terrace", "prince-rupert"],
  langford: ["victoria", "saanich"], langley: ["surrey", "abbotsford", "maple-ridge", "white-rock"], "maple-ridge": ["pitt-meadows", "mission", "port-coquitlam", "langley"],
  mission: ["abbotsford", "maple-ridge", "chilliwack"], nanaimo: ["courtenay", "langford", "victoria"], "new-westminster": ["burnaby", "surrey", "coquitlam", "richmond"],
  "north-vancouver": ["vancouver", "burnaby", "squamish"], "osoyoos-oliver": ["penticton", "keremeos"], penticton: ["kelowna", "west-kelowna", "osoyoos-oliver", "keremeos"],
  "pitt-meadows": ["maple-ridge", "port-coquitlam", "coquitlam", "langley"], "port-coquitlam": ["coquitlam", "pitt-meadows", "maple-ridge", "port-moody"],
  "port-moody": ["coquitlam", "port-coquitlam", "burnaby"], "prince-george": ["quesnel", "fort-st-john"], "prince-rupert": ["terrace", "kitimat"],
  princeton: ["keremeos", "penticton", "kelowna"], quesnel: ["prince-george"], revelstoke: ["invermere", "kamloops", "vernon"],
  richmond: ["vancouver", "delta", "burnaby", "new-westminster"], saanich: ["victoria", "langford"], squamish: ["whistler", "north-vancouver", "vancouver"],
  surrey: ["langley", "white-rock", "delta", "new-westminster"], terrace: ["kitimat", "prince-rupert"], "trail-castlegar": ["osoyoos-oliver", "fernie", "revelstoke"],
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
  return callout("Nearby", `<p>Joshua also serves ${list}. Each page covers the local incomes, housing and lender questions for that town. He works from his Surrey office by phone, video and secure upload, wherever you live in BC.</p>`);
};
