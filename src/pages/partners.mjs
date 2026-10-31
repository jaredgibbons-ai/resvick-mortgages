import { short } from "../lib/short.mjs";
import { SITE, cta, callout } from "../lib/site.mjs";

const card = ({ kind, name, lines, links, wide }) => `<div class="partner${wide ? " wide" : ""}"><span class="p-kind">${kind}</span><h3>${name}</h3>${lines.map((l) => `<p class="p-line">${l}</p>`).join("")}<p class="p-links">${links.join("")}</p></div>`;
const ext = (href, label, evt = "partner_click") => `<a href="${href}" rel="noopener" target="_blank" data-evt="${evt}">${label}</a>`;
const tel = (n) => `<a href="tel:+1${n.replace(/\D/g, "")}" data-evt="partner_click">${n}</a>`;

const realtorCard = card({
  kind: "REALTOR®", name: "Jared Gibbons", wide: true,
  lines: [
    "Royal LePage Little Oak Realty",
    "Serving South Surrey, White Rock, Langley and the Fraser Valley.",
    "Suite 201, 15272 Croydon Drive, Surrey, BC"
  ],
  links: [tel("604-928-1361"), `<a href="mailto:jaredgibbons@royallepage.ca" data-evt="partner_click">jaredgibbons@royallepage.ca</a>`, ext("https://jaredgibbons.ca", "jaredgibbons.ca")]
});

const notaryCards = [
  card({
    kind: "Notary public", name: "Rajesh Ahuja Notary Corporation",
    lines: ["1493 Foster Street, Unit 8, White Rock, BC V4B 0C4", "Notary public in White Rock."],
    links: [tel("604-839-2000"), ext("https://www.whiterocknotaries.ca", "whiterocknotaries.ca")]
  }),
  card({
    kind: "Notary public", name: "Clayton Heights Notary",
    lines: ["6758 188 Street, Unit 105, Surrey, BC V4N 6K2", "Notary public in Surrey."],
    links: [tel("604-575-7494"), ext("https://www.notaryinclayton.com", "notaryinclayton.com")]
  })
].join("");

const lawyerCard = card({
  kind: "Real estate lawyers", name: "Spagnuolo LLP", wide: true,
  lines: [
    "Head office: #300, 906 Roderick Avenue, Coquitlam, BC V3K 1R1",
    "The firm lists more locations on its website."
  ],
  links: [tel("604-527-4242"), `<a href="mailto:realestate@spagslaw.ca" data-evt="partner_click">realestate@spagslaw.ca</a>`, ext("https://bcrealestatelawyers.com", "bcrealestatelawyers.com")]
});

const body = `
${short({ answer: "Buying a home takes a team. A mortgage broker, a realtor and a lawyer or notary each do a different job. Below are the realtor, notaries and real estate lawyers I know and am happy to point you to. You can use any licensed professional you like.", who: "Home buyers in BC who have, or are about to have, a mortgage approval and need the next people on the team.", next: `Read who does what below, then contact whoever fits. If you still need the mortgage piece, <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a>.` })}

<h2>Who does what when you buy a home</h2>
<p>A home purchase in BC has more moving parts than most people expect. Each person on the team has a clear job. Knowing the jobs makes the process feel calmer. If you are earlier in the journey, start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>.</p>
<ul>
<li><strong>The mortgage broker (me).</strong> I compare lenders, build your approval, and make sure the mortgage is ready before your offer deadlines. When the deal is firm, I send the lender's approval to your lawyer or notary.</li>
<li><strong>The realtor.</strong> Your realtor helps you find a home, writes the offer, and negotiates the price and conditions. A good one also keeps the dates straight.</li>
<li><strong>The lawyer or notary.</strong> This person handles the legal side of closing. They check the title, prepare the documents, collect the money and register the sale.</li>
</ul>
<p>Other people join along the way. A home inspector is one. A strata manager, for condos, is another. But these three are the core. If they talk to each other early, closing day tends to go smoothly.</p>

${callout("Good to know", "<p>The people below are independent businesses. They are not part of Xeva Mortgage or Resvick Mortgages. You are free to use someone else, and I will work with whoever you choose.</p>")}

<h2>Realtor</h2>
<p>A realtor works for you through the whole search. They know the neighbourhoods and the market. They also know how to write an offer that protects you, with the right conditions and dates.</p>
<p>Jared Gibbons is a REALTOR® with Royal LePage Little Oak Realty. He works with buyers and sellers in South Surrey, White Rock, Langley and the Fraser Valley. We have worked together on a number of purchases, and his clients often need a mortgage plan early. That is the part I help with.</p>
<div class="partner-grid">${realtorCard}</div>
<p>If you already have a realtor you like, keep them. A good fit matters more than a name. If you want a second opinion on an offer or a neighbourhood, Jared is easy to reach.</p>

<h2>Notaries public</h2>
<p>In BC, a notary public can handle the legal work for a home purchase, a sale, or a mortgage. That includes checking the title, preparing the documents and registering them at the Land Title Office. Notaries are regulated in BC, and many people use one for a straightforward purchase.</p>
<p>These two notaries serve the Surrey and White Rock area. Contact them directly to confirm their services, fees and availability.</p>
<div class="partner-grid">${notaryCards}</div>
<p>Notaries are a good choice for many ordinary purchases. If your file has an unusual twist, ask about it up front. Some lenders have their own rules about who may act on a mortgage. Lenders vary, so I will tell you early if your lender has a preference.</p>

<h2>Real estate lawyers</h2>
<p>A real estate lawyer can do everything a notary does for a purchase. A lawyer can also advise on more complex problems. Examples include a title issue, a tricky contract, a purchase through a company, or a dispute with the seller. A lawyer is also the right call when a lender or private lender asks for one.</p>
<p>Spagnuolo LLP is a law firm with a real estate practice. Its head office is in Coquitlam. Call or email the real estate team to confirm services, fees and availability.</p>
<div class="partner-grid">${lawyerCard}</div>

<h2>Lawyer or notary: how to choose</h2>
<p>Both are licensed, and both can close a normal home purchase. So the choice is less about right and wrong. It is about fit. Here is how I would think it through.</p>
<ul>
<li><strong>Keep it simple if the file is simple.</strong> A standard purchase with a standard mortgage is well within a notary's work.</li>
<li><strong>Lean to a lawyer when the file is not simple.</strong> That could mean a title problem, a purchase with several owners, a company, or a private lender.</li>
<li><strong>Check your lender's rules.</strong> Some lenders have their own requirements. Tell me who you plan to use, and I will check before you commit.</li>
<li><strong>Think about timing.</strong> Closings bunch up at the end of the month. Ask how quickly they can meet you to sign.</li>
<li><strong>Compare in writing.</strong> Fees differ. Ask for a written quote that includes disbursements and taxes.</li>
</ul>

<h2>Questions to ask before you hire</h2>
<p>You do not need to be an expert to pick well. A few plain questions will tell you most of what you need.</p>
<ol>
<li>What is your total fee, and what extra costs should I expect?</li>
<li>Do you arrange title insurance, and what does it cover?</li>
<li>How soon can you meet me to sign once the mortgage is approved?</li>
<li>Will you sign in person, or can some of it be done remotely?</li>
<li>Who is my main contact, and how fast do you usually reply?</li>
<li>Have you worked with my lender before?</li>
</ol>
<p>The answers also show you what working with them feels like. If the answers are clear and friendly, that is a good sign.</p>

<h2>What happens between approval and keys</h2>
<p>Here is the usual path. The details change with each deal, so treat this as a map and not a promise.</p>
<ol>
<li><strong>Offer accepted, conditions set.</strong> Your realtor and I work toward the financing deadline. I also gather the documents the lender needs.</li>
<li><strong>Mortgage approved.</strong> I confirm the lender's final approval and the terms. This is also when I ask who your lawyer or notary will be.</li>
<li><strong>Conditions removed.</strong> The deal is firm. Your lawyer or notary receives the contract from your realtor, and the lender's instructions from the lender.</li>
<li><strong>Signing.</strong> You meet your lawyer or notary, review the documents and sign. You also send the money for the down payment and closing costs, as they direct.</li>
<li><strong>Completion.</strong> The lender sends the mortgage funds. Your lawyer or notary registers the transfer and the mortgage, and pays the seller. Then you get the keys.</li>
</ol>
<p>You will be asked for ID, and for proof of where the down payment came from. Have those ready. The <a href="/closing-costs-bc/">closing costs guide</a> lists what else to budget for, and the <a href="/accepted-offer/">accepted offer checklist</a> shows what to do in the first days.</p>

<h2>What I do not do</h2>
<p>I am a mortgage broker. I do not give legal advice, and I do not act as your realtor. I can explain how a mortgage works and point you to professionals who do those jobs. For legal questions about your contract or your title, ask your lawyer or notary.</p>
<p>I also do not ask for anything in return when I point you to someone on this page. No referral fees are paid to me, and I do not pay them. If that ever changed, I would say so here. You can read more about how I am paid on the <a href="/how-mortgage-brokers-get-paid/">broker pay page</a>.</p>

<h2>If you are a professional who wants to work together</h2>
<p>I am glad to hear from realtors, notaries and lawyers who put clients first. If you have a client who needs a mortgage plan, the <a href="/refer/">referral page</a> explains how I handle that. I go at the client's pace. I keep you in the loop when the client wants that. And I will not contact anyone who has not agreed to hear from me.</p>
<p>If you would like your practice listed here, send me a note through the <a href="/contact/">contact page</a>. I add people I have worked with, or whom a client I trust has used and recommends.</p>

${cta({ title: "Need the mortgage piece first?", text: "A 15-minute call is enough to map your goals, your numbers and your next step. Then the rest of the team is easier to line up." })}
`;

export default {
  slug: "/partners/",
  h1: "Realtor, notary and lawyer partners for BC home buyers",
  lede: "A home purchase takes a team. Here are the realtor, notaries and real estate lawyers I know, plus a plain guide to who does what.",
  crumb: "Partners", nav: "/about-joshua-resvick/", body,
  faqs: [
    { q: "Do I need a lawyer or a notary to buy a home in BC?", a: "You need one or the other. In BC, both lawyers and notaries public can handle a home purchase, including the title work and the mortgage registration. A notary is often fine for a standard purchase. A lawyer is the better fit for more complex files. Some lenders have their own rules, so tell your broker early who you plan to use." },
    { q: "Do I have to use the people listed here?", a: "No. This list is a starting point, not a requirement. You are free to use any licensed realtor, notary or lawyer, and I will work with whoever you choose. If you already have someone you trust, keep them." },
    { q: "Does Joshua get paid for sending clients to these professionals?", a: "No. I do not accept referral fees from the people on this page, and I do not pay any. They are independent businesses, separate from Xeva Mortgage and Resvick Mortgages. I list them because I know them and think they are worth a call." },
    { q: "When should I contact a lawyer or notary?", a: "A good time is as soon as your offer is accepted, or even before you make one. Many offices will give you a quote and book a signing date early. Closings bunch up at the end of the month, so earlier is easier. Your mortgage approval needs to be in place before you sign." },
    { q: "What do a lawyer or notary charge for a purchase?", a: "Fees vary by office and by how complex the file is. Ask for a written quote that lists the fee, the disbursements and the taxes. Disbursements are costs the office pays for you, like title searches and registration fees. The <a href=\"/closing-costs-bc/\">closing costs guide</a> shows what else to plan for." },
    { q: "Can a lawyer or notary help with a renewal or refinance?", a: "Often, yes. A refinance registers a new mortgage on your title, so it needs a lawyer or notary. A straight renewal with the same lender may not. A switch to a new lender at renewal often needs the paperwork done too. Some lenders cover part of the cost, and lenders vary, so ask me before you book." }
  ]
};
