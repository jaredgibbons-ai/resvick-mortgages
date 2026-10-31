import { short } from "../lib/short.mjs";
import { SITE, cta, callout } from "../lib/site.mjs";
import { cityServiceSchema } from "../lib/city.mjs";

const slug = "/mortgage-broker-surrey/";

const body = `
${short({ answer: "Joshua's office is in Surrey, so this is his home city. He works with suite houses, first townhouses, City Centre presales and South Surrey move-ups. You can meet in person or do it all online.", who: "Surrey and White Rock buyers, homeowners renewing, and self-employed people and trades.", next: "Book a 15-minute call, or see how a suite changes what you qualify for on the <a href=\"/how-much-suite-income-will-a-lender-count/\">suite income page</a>." })}
<h2>Surrey is six housing markets, not one</h2>
<p>Surrey is the one city Joshua Resvick works from. It's big enough to act like several cities.</p>
<ul>
<li><strong>South Surrey and White Rock</strong> have houses and townhouses near the beach and the border. It's a strong market for moving up and for downsizing.</li>
<li><strong>Cloverdale</strong> has family streets, newer subdivisions and the fairgrounds.</li>
<li><strong>Fleetwood and Guildford</strong> mix older houses with suites, townhouse complexes and condos along Fraser Highway.</li>
<li><strong>Newton</strong> is one of the city's biggest suite neighbourhoods.</li>
<li><strong>City Centre</strong>, around King George and Surrey Central, is now a tower district. New presales and completions arrive every year.</li>
</ul>
<p>A mortgage looks different in each one. The property type changes. So does the suite question and the buyer's situation.</p>
<p>The office is at ${SITE.address.street}, Surrey, in the Grandview Heights area of South Surrey. Most Surrey clients still do everything by phone, video and secure upload, because it's faster. If you'd rather sit across a desk, you can do that here.</p>

<h2>Incomes in Surrey</h2>
<p>Surrey's median household income was $98,000 for 2020. About 15.0 percent of Surrey's workers were self-employed, or 46,125 of 308,190 in the labour force. Retail, health care and construction were the three largest industries, and construction alone had about 30,500 workers. (Statistics Canada, 2021 Census Profile, read October 2026). That mix explains why so many Surrey files include trades pay, commissions or a small company. Lenders vary in how they read that income, so Joshua checks it before he picks one.</p>

<h2>The suite question, Surrey version</h2>
<p>Surrey is known for basement suites, and the city's rules matter to your mortgage. Here's what the City of Surrey says (page updated October 2026).</p>
<ul>
<li>You can have one secondary suite in a single-family house, a semi-detached home or a duplex.</li>
<li>The suite's living space can't be more than 40 percent of the main home.</li>
<li>A suite needs a building permit and must meet the BC Building Code.</li>
<li>A suite built without a permit needs a permit application to become legal.</li>
<li>The city charges suite utility and service fees.</li>
<li>Coach houses and garden suites are separate. A suite isn't allowed inside them.</li>
</ul>
<p>Suites are common enough that the City now counts them. A July 2026 City report says its garbage and organics collection serves about 35,000 secondary suites, and each pays a per-suite fee (City of Surrey, Corporate Report R162, July 27, 2026, read October 2026). A suite on that list is not proof that it has a permit, so ask for the permit.</p>
<p>Why does a lender care? The lender decides how much of the suite's rent to count, or whether to count it at all. A legal suite with a lease and bank deposits is far easier to count than an unpermitted one.</p>
<p>Lenders use two methods. Some add part of the rent to your income. Others subtract it from your housing costs. The share varies by lender. On a Newton or Fleetwood house, the gap between a lender that counts half and one that counts more can decide whether you're approved.</p>
<p>The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the math. The <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers the federal program for financing a new suite.</p>

<h2>Buying in Surrey: what comes up first</h2>
<ul>
<li><strong>First homes in townhouses and condos.</strong> Many Surrey first-time buyers start in a townhouse in Cloverdale, Fleetwood or Panorama. Others start with a condo near City Centre or Guildford. The first-time buyer exemption from property transfer tax phases out above a set price. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> walks through what to check before an offer.</li>
<li><strong>Houses where the suite helps pay the mortgage.</strong> Buyers who stretch into a house often plan on the suite to carry part of the payment. That works when the suite is legal, the rent is documented and you pick the right lender.</li>
<li><strong>Presales in City Centre.</strong> A presale is financed when it's finished, which may be years after the deposit. Your approval has to hold on the completion date, not the signing date. That's a planning problem as much as a lending one. The <a href="/presale-mortgages-bc/">presale guide</a> explains the order of steps.</li>
<li><strong>Moving up or downsizing in South Surrey and White Rock.</strong> Selling one home and buying another at the same time often needs a port, a bridge loan or both. Timing is the whole job.</li>
</ul>

<h2>Renewals and the switch question</h2>
<p>Many Surrey mortgages started as five-year fixed terms, so renewal letters arrive all the time. The letter is one lender's opening offer.</p>
<p>Since late 2024, many borrowers can move to a different lender at maturity without a new stress test. The balance and amortization can't grow. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the timing. The <a href="/mortgage-renewal-reminder/">free renewal reminder</a> contacts you six months and 120 days before your term ends, so there's time to compare.</p>

<h2>Self-employed, trades and business income</h2>
<p>Lots of people in Surrey don't get a T4. Think of trades and contractors in the industrial parks at Port Kells and Campbell Heights. Think of trucking and logistics owner-operators. There are small business owners along Scott Road and King George. There are incorporated professionals near Surrey Memorial Hospital.</p>
<p>What you qualify for depends on how a lender reads two years of tax returns. Add-backs, dividends and retained earnings all play a part. Different lenders read the same returns differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers the options, from mainstream lenders to stated-income programs.</p>

<h2>The SkyTrain extension and what it means for buyers</h2>
<p>The Surrey Langley SkyTrain extension is being built along Fraser Highway. It runs 16 kilometres on an elevated track from King George Station to Langley City Centre, with eight stations. The Province expects it to open in late 2029 (Province of BC, May 2026).</p>
<p>For buyers in Fleetwood, Green Timbers and Clayton, it changes the neighbourhoods on both sides of the line. It's part of why townhouse and condo building along Fraser Highway keeps going.</p>
<p>It won't change a mortgage approval. But it's a fair reason to think five years ahead when you choose a term and a prepayment plan. If you might sell at renewal, a shorter term or a lower-penalty lender makes sense.</p>

<h2>Rates with local context</h2>
<p>Surrey buyers tend to compare rates on different files. Think of a townhouse with 10 percent down, a suite house with 20 percent down, and a presale that closes years from now. Every lender prices those three differently. The <a href="/mortgage-rates-surrey/">Surrey mortgage rates page</a> explains that context. The <a href="/mortgage-rates-bc/">BC rates hub</a> covers how a rate gets set. A short call gets you today's number for your own file.</p>

<h2>Every city Joshua serves</h2>
<p>Surrey is the office, but the service covers the whole province, online and by phone. Each city below has its own page with the local details, from suite bylaws to presale patterns.</p>
<p><a href="/mortgage-broker-vancouver/">Vancouver</a>, <a href="/mortgage-broker-langley/">Langley</a>, <a href="/mortgage-broker-burnaby/">Burnaby</a>, <a href="/mortgage-broker-coquitlam/">Coquitlam</a>, <a href="/mortgage-broker-richmond/">Richmond</a>, <a href="/mortgage-broker-abbotsford/">Abbotsford</a>, <a href="/mortgage-broker-victoria/">Victoria</a>, <a href="/mortgage-broker-nanaimo/">Nanaimo</a>, <a href="/mortgage-broker-kelowna/">Kelowna</a>, <a href="/mortgage-broker-kamloops/">Kamloops</a>, <a href="/mortgage-broker-prince-george/">Prince George</a>.</p>
<p>Is your city not on the list? Nothing changes. The process is the same from anywhere in BC.</p>

<h2>How it works, from this office</h2>
<ol>
<li><strong>A 15-minute call.</strong> Where you are, what you want and when. You get a straight answer on what's realistic.</li>
<li><strong>Underwriting first.</strong> Joshua spent five years as a mortgage underwriter, then ten as a broker. He reads your file the way a lender will, before a lender sees it.</li>
<li><strong>A written Lender Comparison Report.</strong> Real options side by side, so the choice is yours.</li>
<li><strong>Resvick Aftercare.</strong> Yearly reviews, rate monitoring and a renewal plan six months out. The <a href="/mortgage-aftercare-program/">aftercare page</a> lists what's included.</li>
</ol>
<p>With a mainstream lender, the lender pays the broker, and you pay nothing for the service. Fees apply only on some B-lender and private files. BC rules require written disclosure first.</p>

<h2>Calculators</h2>
<p>The <a href="/mortgage-calculators/">calculators</a> let you test a few things. You can check a payment with the CMHC premium. You can see how a suite changes what you can afford under both lender methods. You can estimate closing costs, including property transfer tax, and compare renewal options. Results show up right away, with no email needed.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-langley/">Langley</a> and <a href="/mortgage-broker-richmond/">Richmond</a>, plus White Rock, Delta and the rest of the South of Fraser area. The Google Business Profile for Resvick Mortgages lists this Surrey office. If Joshua has helped you, a review there helps the next Surrey family find him.</p>`)}

${cta({ title: "Buying, renewing or refinancing in Surrey?", text: "Book a 15-minute call, by phone or at the Surrey office. You'll leave with a clear picture and a next step." })}
<p>For anything else, the <a href="/contact/">contact page</a> has the phone number, email and what to have ready.</p>
`;

export default {
  slug,
  h1: "Mortgage broker in Surrey: South Surrey, White Rock, Cloverdale, Fleetwood, Newton and Guildford",
  lede: "Suite houses, townhouses, City Centre presales and South Surrey move-ups. Joshua Resvick works from his Surrey office and handles files across every neighbourhood, online or in person.",
  crumbs: [["Home", "/"], ["Surrey", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Surrey", ["White Rock", "Delta"])],
  faqs: [
    { q: "Where is the Resvick Mortgages office in Surrey?", a: `The office is at ${SITE.address.street}, Surrey, BC ${SITE.address.postal}, in Grandview Heights in South Surrey. Most clients work with Joshua by phone, video and secure upload because it is faster, but in-person meetings are available by appointment. He serves all of Surrey, White Rock, Delta and the rest of BC the same way.` },
    { q: "Will a lender count the rent from my Surrey basement suite?", a: "Often, if the suite is legal and the rent is documented with a lease or bank deposits. Surrey allows one permitted secondary suite per single-family, semi-detached or duplex home, and a permitted suite is far easier for a lender to count. How much is counted depends on the lender's method and share, which is why lender choice matters on a suite house." },
    { q: "Does the SkyTrain extension change what I can borrow in Fleetwood or Clayton?", a: "No, approvals depend on your income, debts, credit and down payment, not on transit. It can change your plan, though. If you expect to sell or move up around the time the line opens, which the province expects in late 2029, a shorter term or a lender with a gentler penalty may suit you better than the lowest five-year rate." },
    { q: "I am self-employed in Surrey. Can I still get a mainstream mortgage?", a: "Often yes, with two years of returns and the right lender. Lenders differ on add-backs, dividends and retained earnings, so the same tax returns can produce different approvals. When mainstream income rules do not fit, stated-income programs exist, and they are explained plainly on the self-employed hub, including when a fee can apply." },
    { q: "Can I buy a Surrey presale and keep my current home?", a: "It depends on whether you qualify to carry both at completion and on the lender's rules for the down payment and deposits. Because a presale closes long after you sign, Joshua plans the approval for the completion date, including what your income and the property's value need to look like then, and reviews it as the date approaches." }
  ]
};
