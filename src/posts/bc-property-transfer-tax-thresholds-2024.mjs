import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>What changed on April 1, 2024</h2>
<p>British Columbia's property transfer tax is paid by the buyer when a title is registered, at 1 percent of the first $200,000 of fair market value, 2 percent from $200,000 to $2 million, 3 percent above $2 million, and a further 2 percent on the portion of a residential property above $3 million. Two exemptions take most first-time and new-home buyers out of some or all of it, and both were enlarged for registrations on or after April 1, 2024 (Province of British Columbia, first time home buyers' exemption page updated June 20, 2025; newly built home exemption page updated January 6, 2026).</p>
<ul>
<li><strong>First time home buyers' exemption.</strong> Before April 1, 2024, the full exemption applied to homes with a fair market value up to $500,000 and phased out at $525,000. From April 1, 2024, the thresholds are $835,000 for the full exemption, phasing out to zero at $860,000. The exemption itself is the full tax on a home up to $500,000, and $8,000 on a home between $500,000 and $835,000 (Province of British Columbia, current amount page updated December 3, 2025).</li>
<li><strong>Newly built home exemption.</strong> Before April 1, 2024, the full exemption applied up to $750,000 and phased out at $800,000. From April 1, 2024, it applies up to $1,100,000 and phases out at $1,150,000.</li>
</ul>
<p>The current rules, with the calculation and the eligibility conditions, live on the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator page</a>, which is kept current. This post is the record of the change and of the detail people most often get wrong about it.</p>

<h2>The detail people get wrong: the first-time exemption is capped at $8,000</h2>
<p>Older guides, and some that are still online, describe the first-time home buyers' exemption as "no transfer tax on the first $500,000." That was accurate before April 2024, when the full exemption stopped at a $500,000 price and the tax on $500,000 was $8,000. The province kept the $8,000 figure when it raised the price threshold, rather than exempting the full tax on a more expensive home. The result is that a first-time buyer of a $750,000 home, who pays $13,000 of transfer tax before the exemption, receives $8,000 back and still owes $5,000. The purchase qualifies for the full exemption, and the full exemption is $8,000.</p>
<p>The phase-out between $835,000 and $860,000 is a straight line: the exemption falls by $320 for every $1,000 of fair market value above $835,000, so a home at $850,000 receives $3,200 and a home at $860,000 receives nothing. If only some of the buyers on title qualify, the exemption is reduced to their share of the purchase, which the <a href="/co-buying-a-home/">co-buying guide</a> explains with the province's own 60/40 example. The <a href="/mortgage-calculators/#closing-costs">closing costs calculator</a> and the transfer tax calculator both apply these rules exactly, and the earlier wording in this site's own research package, which repeated the "first $500,000" phrasing, was corrected against the provincial pages before the calculator was built.</p>

<h2>Who qualifies for the first-time exemption</h2>
<p>The province's conditions, as of the page updated June 20, 2025, are that the buyer is a Canadian citizen or permanent resident; has either lived in BC for at least a year immediately before registration or filed at least two BC resident income tax returns in the last six taxation years; has never owned a registered interest in a principal residence anywhere in the world; and has never received a first time home buyers' exemption or refund before. The property must be used only as the buyer's principal residence, be 0.5 hectares or smaller, and contain only residential improvements. Larger properties and properties with other buildings may receive a partial exemption.</p>
<p>Two of those conditions trip up buyers who qualify as first-time buyers under the federal programs. The "anywhere in the world, ever" test is stricter than the federal four-year look-back used by the Home Buyers' Plan and the GST rebate, so someone who owned a condo ten years ago and sold it is a first-time buyer in Ottawa's eyes and not in Victoria's. The residency requirement means a newcomer who arrived less than a year ago may not yet qualify, which the <a href="/new-to-canada-mortgage/">newcomer mortgage guide</a> notes. The <a href="/first-time-buyer-programs-bc/">programs guide</a> keeps all four first-time buyer tests side by side for exactly this reason.</p>

<h2>The newly built home exemption, and why it is often the bigger one</h2>
<p>The newly built home exemption is available to any buyer, first-time or not, who is a Canadian citizen or permanent resident, buys a newly built home or a newly subdivided unit as a principal residence, moves in within 92 days of registration and lives there for the rest of the first year. The land must be 0.5 hectares or smaller for the full exemption. Unlike the first-time exemption, it removes the whole transfer tax on a qualifying home, not a capped amount. On a $1 million new home, the tax before exemption is $18,000, and the exemption removes all of it. On a $1,100,000 home it removes $20,000. Between $1,100,000 and $1,150,000 it phases out, and above $1,150,000 there is none.</p>
<p>Because it has no cap and a higher threshold, the newly built home exemption is usually worth more to a presale buyer than the first-time exemption would be, and a first-time buyer of a new home should claim this one. A buyer cannot claim both on the same purchase. The <a href="/presale-mortgages-bc/">presale mortgage guide</a> covers the completion-day cash plan, where the exemption sits beside the GST rebate recorded in the <a href="/guides/first-time-home-buyer-gst-rebate-2026/">post on the 2026 GST rebate change</a>.</p>

<h2>Worked examples at the thresholds</h2>
<p>These use the current rules and are illustrative; the calculator runs any price.</p>
<ul>
<li><strong>$500,000 resale, first-time buyer:</strong> tax before exemption $8,000; exemption $8,000; tax payable $0.</li>
<li><strong>$750,000 resale, first-time buyer:</strong> tax before exemption $13,000; exemption $8,000; tax payable $5,000.</li>
<li><strong>$835,000 resale, first-time buyer:</strong> tax before exemption $14,700; exemption $8,000; tax payable $6,700.</li>
<li><strong>$850,000 resale, first-time buyer:</strong> tax before exemption $15,000; exemption $3,200; tax payable $11,800.</li>
<li><strong>$860,000 resale, first-time buyer:</strong> tax before exemption $15,200; no exemption; tax payable $15,200.</li>
<li><strong>$1,100,000 newly built, any eligible buyer:</strong> tax before exemption $20,000; full exemption; tax payable $0.</li>
<li><strong>$1,125,000 newly built:</strong> tax before exemption $20,500; exemption half of that, $10,250, at the midpoint of the phase-out; tax payable $10,250.</li>
<li><strong>$1,150,000 newly built:</strong> tax before exemption $21,000; no exemption; tax payable $21,000.</li>
</ul>
<p>The jump at the top of each range is sharp. A first-time buyer choosing between a home at $858,000 and one at $862,000 pays roughly $640 of exemption on the first and none on the second; a new-home buyer at $1.149 million keeps a few hundred dollars of exemption that disappears at $1,150,000. Those cliffs are a reason to know the fair market value the province will use, which is normally the purchase price but can be an appraised value where the price is below market.</p>

<h2>What did not change</h2>
<p>The tax rates themselves did not change in 2024, and neither did the additional property transfer tax on foreign buyers in specified areas, which is separate from everything above and is noted, without parameters, on the <a href="/closing-costs-bc/">closing costs guide</a>. The exemptions are claimed on the property transfer tax return at registration, which the buyer's lawyer or notary prepares, and a buyer who was eligible but did not claim can apply for a refund within a set period, which the province's pages describe. The first-time exemption also carries a first-year occupancy condition: the buyer must move in within 92 days and keep the home as a principal residence for the rest of the year, or repay a proportionate share.</p>

${callout("Sources for this post", "<p>Province of British Columbia, Property transfer tax: first time home buyers' exemption (updated June 20, 2025) and current exemption amount (updated December 3, 2025); newly built home exemption (updated January 6, 2026). All three pages were read on October 30, 2026. The calculator page carries the current figures and is the page kept current.</p>")}

${cta({ title: "Want the number for your purchase?", text: "Run it on the calculator, then bring it to a 15-minute call. Joshua will confirm which exemption applies to you and how it fits the rest of your cash to close." })}
`;

export default {
  slug: "/guides/bc-property-transfer-tax-thresholds-2024/",
  date: "2026-10-30",
  series: "rules",
  title: "BC Property Transfer Tax Thresholds | The 2024 Change",
  meta: "BC raised the first-time buyer transfer tax exemption to $835,000 and the newly built one to $1,100,000 on April 1, 2024. What changed, and what did not.",
  h1: "BC property transfer tax: the April 2024 threshold change, the $8,000 cap most guides get wrong, and the newly built home exemption",
  crumb: "Transfer tax thresholds, 2024",
  lede: "The first-time buyer exemption now reaches $835,000 and the newly built exemption $1,100,000. The exemption amount, though, is still capped at $8,000 for first-time buyers, which is the detail this post is for.",
  body,
  links: ["/bc-property-transfer-tax-calculator/", "/co-buying-a-home/", "/mortgage-calculators/#closing-costs", "/new-to-canada-mortgage/", "/first-time-buyer-programs-bc/", "/presale-mortgages-bc/", "/guides/first-time-home-buyer-gst-rebate-2026/", "/closing-costs-bc/"],
  faqs: [
    { q: "Is the first $500,000 of a home tax-free for a first-time buyer?", a: "Not any more, in the way that phrase suggests. Since April 1, 2024 the exemption is $8,000 on a home between $500,000 and $835,000, which equals the tax on $500,000 but does not remove the tax on the portion above it. A $750,000 home still owes $5,000. Below $500,000 the whole tax is exempt, and between $835,000 and $860,000 the $8,000 phases out." },
    { q: "Can I use both the first-time and the newly built home exemptions?", a: "No, one exemption per purchase. A first-time buyer of a newly built home should normally claim the newly built home exemption, because it removes the whole tax up to $1,100,000 rather than a capped $8,000, and it does not require that you have never owned before." },
    { q: "I owned a home in another country years ago. Am I a first-time buyer in BC?", a: "Not for the property transfer tax exemption. BC's test asks whether you have ever owned a registered interest in a principal residence anywhere in the world. You may still qualify for the federal programs, which use a four-year look-back, so check each program separately." },
    { q: "What if my purchase price is above the threshold by a small amount?", a: "The phase-outs are straight lines with hard ends. For the first-time exemption, the $8,000 falls by $320 per $1,000 above $835,000 and is gone at $860,000. For the newly built exemption, the full exemption phases out between $1,100,000 and $1,150,000. A few thousand dollars of price can change the tax by thousands, so run the exact figure." },
    { q: "Do these exemptions apply to a presale?", a: "Yes, on registration at completion. A presale is a newly built home, so the newly built home exemption applies if the fair market value at registration is within the thresholds and the buyer meets the occupancy conditions. The GST rebate for first-time buyers is a separate federal measure that sits beside it." }
  ]
};
