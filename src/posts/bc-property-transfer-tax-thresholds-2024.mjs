import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Since April 1, 2024, BC's first-time buyer exemption covers homes up to $835,000, fading to zero at $860,000. But it's capped at $8,000. The newly built home exemption now removes the whole tax up to $1,100,000, fading out by $1,150,000.",
  who: "First-time buyers and anyone buying a newly built home or presale in BC.",
  next: "Run your exact price on the <a href=\"/bc-property-transfer-tax-calculator/\">BC property transfer tax calculator</a>."
})}
<h2>What changed on April 1, 2024</h2>
<p>BC's property transfer tax is paid by the buyer when the title is registered. It's 1 percent of the first $200,000 of fair market value. It's 2 percent from $200,000 to $2 million, and 3 percent above $2 million. A further 2 percent applies to the part of a home above $3 million.</p>
<p>Two exemptions take most first-time and new-home buyers out of some or all of it. Both got bigger for registrations on or after April 1, 2024. (Sources: Province of British Columbia, first time home buyers' exemption page updated June 20, 2025; newly built home exemption page updated January 6, 2026.)</p>
<ul>
<li><strong>First time home buyers' exemption.</strong> Before April 1, 2024, the full exemption covered homes up to $500,000. It phased out at $525,000. From April 1, 2024, it's $835,000 for the full exemption, phasing out to zero at $860,000. The exemption itself is the full tax on a home up to $500,000. On a home between $500,000 and $835,000, it's $8,000. (Province of British Columbia, current amount page updated December 3, 2025.)</li>
<li><strong>Newly built home exemption.</strong> Before April 1, 2024, the full exemption covered homes up to $750,000. It phased out at $800,000. From April 1, 2024, it covers homes up to $1,100,000 and phases out at $1,150,000.</li>
</ul>
<p>The current rules, with the math and the conditions, live on the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator page</a>. That page is kept current. This post records the change, and the detail people most often get wrong.</p>

<h2>The detail people get wrong: the first-time exemption is capped at $8,000</h2>
<p>Older guides describe the first-time exemption as "no transfer tax on the first $500,000". Some of them are still online. That was true before April 2024. Back then, the full exemption stopped at a $500,000 price, and the tax on $500,000 was $8,000.</p>
<p>When the province raised the price limit, it kept the $8,000 figure. It didn't exempt the full tax on a pricier home.</p>
<p>So say a first-time buyer pays $750,000 for a home. The tax before the exemption is $13,000. They get $8,000 off and still owe $5,000. The purchase qualifies for the full exemption. The full exemption is just $8,000.</p>
<p>The phase-out between $835,000 and $860,000 is a straight line. The exemption drops by $320 for every $1,000 of value above $835,000. A home at $850,000 gets $3,200. A home at $860,000 gets nothing.</p>
<p>If only some buyers on title qualify, the exemption shrinks to their share of the purchase. The <a href="/co-buying-a-home/">co-buying guide</a> explains this with the province's own 60/40 example.</p>
<p>The <a href="/mortgage-calculators/#closing-costs">closing costs calculator</a> and the transfer tax calculator both apply these rules exactly. This site's own early research also repeated the "first $500,000" wording. We corrected it against the provincial pages before building the calculator.</p>

<h2>Who qualifies for the first-time exemption</h2>
<p>Here are the province's conditions, from the page updated June 20, 2025. The buyer must be a Canadian citizen or permanent resident. They must have lived in BC for at least a year right before registration. Or, they must have filed at least two BC resident tax returns in the last six tax years.</p>
<p>They must never have owned a registered interest in a principal residence anywhere in the world. And they must never have received a first time home buyers' exemption or refund before.</p>
<p>The home must be used only as the buyer's principal residence. It must be 0.5 hectares or smaller, with only residential buildings on it. Larger properties, or ones with other buildings, may get a partial exemption.</p>
<p>Two of those conditions trip up buyers who count as first-time buyers under the federal programs.</p>
<p>The first is the "anywhere in the world, ever" test. It's stricter than the federal four-year look-back used by the Home Buyers' Plan and the GST rebate. Say you owned a condo ten years ago and sold it. Ottawa sees you as a first-time buyer. Victoria doesn't.</p>
<p>The second is the residency rule. A newcomer who arrived less than a year ago may not qualify yet. The <a href="/new-to-canada-mortgage/">newcomer mortgage guide</a> notes this. The <a href="/first-time-buyer-programs-bc/">programs guide</a> keeps all four first-time buyer tests side by side for exactly this reason.</p>

<h2>The newly built home exemption, and why it's often the bigger one</h2>
<p>The newly built home exemption is open to any buyer, first-time or not. The buyer must be a Canadian citizen or permanent resident. They must buy a newly built home or a newly subdivided unit as their principal residence. They must move in within 92 days of registration and live there for the rest of the first year. The land must be 0.5 hectares or smaller for the full exemption.</p>
<p>Unlike the first-time exemption, this one removes the whole tax on a qualifying home, not a capped amount. On a $1 million new home, the tax is $18,000, and the exemption removes all of it. On a $1,100,000 home, it removes $20,000. Between $1,100,000 and $1,150,000 it phases out. Above $1,150,000, there's none.</p>
<p>It has no cap and a higher limit. So for a presale buyer, it's usually worth more than the first-time exemption. A first-time buyer of a new home should claim this one. You can't claim both on the same purchase.</p>
<p>The <a href="/presale-mortgages-bc/">presale mortgage guide</a> covers the cash plan for completion day. There, this exemption sits beside the GST rebate covered in the <a href="/guides/first-time-home-buyer-gst-rebate-2026/">post on the 2026 GST rebate change</a>.</p>

<h2>Worked examples at the limits</h2>
<p>These use the current rules and are examples only. The calculator runs any price.</p>
<ul>
<li><strong>$500,000 resale, first-time buyer:</strong> tax before exemption $8,000. Exemption $8,000. Tax owing $0.</li>
<li><strong>$750,000 resale, first-time buyer:</strong> tax before exemption $13,000. Exemption $8,000. Tax owing $5,000.</li>
<li><strong>$835,000 resale, first-time buyer:</strong> tax before exemption $14,700. Exemption $8,000. Tax owing $6,700.</li>
<li><strong>$850,000 resale, first-time buyer:</strong> tax before exemption $15,000. Exemption $3,200. Tax owing $11,800.</li>
<li><strong>$860,000 resale, first-time buyer:</strong> tax before exemption $15,200. No exemption. Tax owing $15,200.</li>
<li><strong>$1,100,000 newly built, any eligible buyer:</strong> tax before exemption $20,000. Full exemption. Tax owing $0.</li>
<li><strong>$1,125,000 newly built:</strong> tax before exemption $20,500. The exemption is half of that, $10,250, at the middle of the phase-out. Tax owing $10,250.</li>
<li><strong>$1,150,000 newly built:</strong> tax before exemption $21,000. No exemption. Tax owing $21,000.</li>
</ul>
<p>The drop at the top of each range is sharp. Say a first-time buyer is choosing between a home at $858,000 and one at $862,000. The first gets roughly $640 of exemption, and the second gets none. A new-home buyer at $1,149,000 keeps a few hundred dollars of exemption that's gone at $1,150,000.</p>
<p>Those cliffs are a reason to know the fair market value the province will use. That's normally the purchase price. It can be an appraised value if the price is below market.</p>

<h2>What did not change</h2>
<p>The tax rates themselves didn't change in 2024. Neither did the extra property transfer tax on foreign buyers in certain areas. That's separate from everything above. It's noted, without details, in the <a href="/closing-costs-bc/">closing costs guide</a>.</p>
<p>You claim the exemptions on the property transfer tax return at registration. The buyer's lawyer or notary prepares it. A buyer who was eligible but didn't claim can apply for a refund within a set time. The province's pages describe how.</p>
<p>The first-time exemption also has a first-year rule. The buyer must move in within 92 days and keep the home as their principal residence for the rest of the year. If not, they repay a share.</p>

${callout("Sources for this post", "<p>Province of British Columbia, Property transfer tax: first time home buyers' exemption (updated June 20, 2025) and current exemption amount (updated December 3, 2025). Newly built home exemption (updated January 6, 2026). All three pages were read on October 30, 2026. The calculator page carries the current figures and is the page kept current.</p>")}

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
