import { SITE, cta, callout } from "../lib/site.mjs";
import { cityServiceSchema } from "../lib/city.mjs";

const slug = "/mortgage-broker-surrey/";

const body = `
<h2>Surrey is six housing markets, not one</h2>
<p>Surrey is the one city Joshua Resvick works from, and it is large enough to behave like several. South Surrey and neighbouring White Rock are detached homes, townhouses and a strong move-up and downsizing market near the beach and the border. Cloverdale is family streets, newer subdivisions and the fairgrounds. Fleetwood and Guildford are a mix of older houses with suites, townhouse complexes and the condo clusters along the Fraser Highway corridor. Newton is one of the city's biggest suite neighbourhoods. City Centre around King George and Surrey Central has become a tower district, with presales and completions arriving every year. A mortgage in each of those places looks different: the property type, the suite question and the buyer's situation all change.</p>
<p>The office is at ${SITE.address.street}, Surrey, in the Grandview Heights area of South Surrey. Most Surrey clients still do everything by phone, video and secure upload, because it is faster, but if you prefer to sit across a desk, that is available here.</p>

<h2>The suite question, Surrey version</h2>
<p>Surrey's housing stock is known for basement suites, and the city's rules matter to the mortgage. The City of Surrey allows one secondary suite per single-family, semi-detached or duplex dwelling, the suite's habitable floor area cannot exceed 40 percent of the principal dwelling, and a suite needs a building permit and compliance with the BC Building Code; a suite with no prior permit requires a permit application to be legalized, and the city charges secondary suite utility and service fees (City of Surrey, page updated October 2026). Coach houses and garden suites are separate from secondary suites, and a suite is not permitted inside them.</p>
<p>Why does a lender care? Because the lender decides how much of the suite's rent to count, and whether to count it at all, and a legal, permitted suite with a lease and bank deposits is far easier to count than an unpermitted one. Lenders use two methods, adding a share of the rent to your income or subtracting it from your housing cost, and the share varies by lender. The difference between a lender that counts half and one that counts more can be the difference between an approval and a decline on a Newton or Fleetwood house. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the arithmetic, and the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers the federal program for financing a new suite.</p>

<h2>Buying in Surrey: what comes up first</h2>
<ul>
<li><strong>First purchases in townhouses and condos.</strong> Many Surrey first-time buyers start in a townhouse in Cloverdale, Fleetwood or Panorama, or a condo near City Centre or Guildford. The property transfer tax exemption for first-time buyers phases out above a price threshold, and the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> walks through what to check before an offer.</li>
<li><strong>Houses with suites for the mortgage.</strong> Buyers who stretch into a detached home often plan on the suite to carry part of the payment. That works when the suite is legal, the rent is documented and the right lender is chosen.</li>
<li><strong>Presales in City Centre.</strong> A presale is financed at completion, which may be years after the deposit. Your approval has to hold on the completion date, not the signing date, which is a planning problem as much as a lending one. The <a href="/presale-mortgages-bc/">presale guide</a> explains the sequence.</li>
<li><strong>South Surrey and White Rock move-up and downsizing.</strong> Selling one home and buying another in the same window often needs a port, a bridge loan or both. Timing is the whole job.</li>
</ul>

<h2>Renewals and the switch question</h2>
<p>Many Surrey mortgages were set up as five-year fixed terms, so renewal letters arrive constantly. The letter is one lender's opening offer. Since late 2024, many borrowers can move a mortgage to a different lender at maturity without a new stress test, provided the balance and amortization do not grow. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the window, and the <a href="/mortgage-renewal-reminder/">free renewal reminder</a> will contact you six months and 120 days before maturity so there is time to compare.</p>

<h2>Self-employed, trades and business income</h2>
<p>Surrey's economy includes a lot of people who do not get a T4: trades and contractors working the industrial parks at Port Kells and Campbell Heights, truck and logistics owner-operators, small business owners along Scott Road and King George, and incorporated professionals near Surrey Memorial Hospital. How a lender reads two years of tax returns, add-backs, dividends and retained earnings decides what you qualify for, and different lenders read the same returns differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers the options, from mainstream lenders to stated-income programs.</p>

<h2>The SkyTrain extension and what it means for buyers</h2>
<p>The Surrey Langley SkyTrain extension is under construction along Fraser Highway, 16 kilometres on an elevated guideway from King George Station to Langley City Centre with eight stations, and the province expects it to enter operation in late 2029 (Province of BC, May 2026). For buyers in Fleetwood, Green Timbers and Clayton, that changes the neighbourhoods on either side of the line, and it is part of why townhouse and condo development along Fraser Highway continues. It does not change a mortgage approval, but it is a fair reason to think about the five-year horizon when choosing a term and a prepayment plan: a home you may sell at renewal argues for a shorter term or a lower-penalty lender.</p>

<h2>Rates with local context</h2>
<p>Surrey buyers tend to compare rates on a townhouse with 10 percent down, a suite house with 20 percent down and a presale with a long completion date, and those are three different pricing situations at every lender. The <a href="/mortgage-rates-surrey/">Surrey mortgage rates page</a> explains that context, and the <a href="/mortgage-rates-bc/">BC rates hub</a> covers how a rate is set. A short call gets you today's number for your own file.</p>

<h2>Every city Joshua serves</h2>
<p>Surrey is the office; the service is province-wide, online and by phone. Each city below has its own page with the local specifics, from suite bylaws to presale patterns: <a href="/mortgage-broker-vancouver/">Vancouver</a>, <a href="/mortgage-broker-langley/">Langley</a>, <a href="/mortgage-broker-burnaby/">Burnaby</a>, <a href="/mortgage-broker-coquitlam/">Coquitlam</a>, <a href="/mortgage-broker-richmond/">Richmond</a>, <a href="/mortgage-broker-abbotsford/">Abbotsford</a>, <a href="/mortgage-broker-victoria/">Victoria</a>, <a href="/mortgage-broker-nanaimo/">Nanaimo</a>, <a href="/mortgage-broker-kelowna/">Kelowna</a>, <a href="/mortgage-broker-kamloops/">Kamloops</a> and <a href="/mortgage-broker-prince-george/">Prince George</a>. If your city is not on the list, nothing changes: the process is the same from anywhere in BC.</p>

<h2>How it works, from this office</h2>
<ol>
<li><strong>A 15-minute call.</strong> Where you are, what you want and when. You get a straight answer on what is realistic.</li>
<li><strong>Underwriting first.</strong> Joshua spent five years as a mortgage underwriter before ten as a broker. Your file is read the way a lender reads it, before a lender sees it.</li>
<li><strong>A written Lender Comparison Report.</strong> Real options side by side, so the choice is yours.</li>
<li><strong>Resvick Aftercare.</strong> Annual reviews, rate monitoring and a renewal plan six months out. The <a href="/mortgage-aftercare-program/">aftercare page</a> lists what is included.</li>
</ol>
<p>On a mortgage placed with a mainstream lender, the lender pays the broker and you pay nothing for the service. Fees apply only on some B-lender and private files, and BC rules require written disclosure first.</p>

<h2>Calculators</h2>
<p>Use the <a href="/mortgage-calculators/">calculators</a> to test a payment with the CMHC premium, see how a suite changes affordability under both lender methods, estimate closing costs including property transfer tax, and compare renewal scenarios. Results appear immediately with no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-langley/">Langley</a> and <a href="/mortgage-broker-richmond/">Richmond</a>, White Rock, Delta and the rest of the South of Fraser area. The Google Business Profile for Resvick Mortgages lists this Surrey office; if Joshua has helped you, a review there helps the next Surrey family find him.</p>`)}

${cta({ title: "Buying, renewing or refinancing in Surrey?", text: "Book a 15-minute call, by phone or at the Surrey office. You will leave with a clear picture and a next step." })}
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
