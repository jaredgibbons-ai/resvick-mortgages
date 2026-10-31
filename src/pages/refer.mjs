import { short } from "../lib/short.mjs";
import { SITE, cta, callout } from "../lib/site.mjs";

const toggle = (v, l) => `<label><input type="checkbox" name="x_need_${v}" value="on" id="need-${v}"><span>${l}</span></label>`;

const form = `
<div class="form-card" data-nocount>
<form data-lead="refer" data-success="Thank you. Joshua will reach out to them gently." novalidate>
<p class="small"><strong>About you</strong> (so I know who to thank, and who they'll recognise when I say your name)</p>
<div class="row2">
<div class="fld"><label for="r-name">Your name</label><input id="r-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="r-email">Your email</label><input id="r-email" name="email" type="email" autocomplete="email" required></div>
</div>
<p class="small"><strong>The person you're referring</strong></p>
<div class="row2">
<div class="fld"><label for="r-fname">Their name</label><input id="r-fname" name="x_referee_name" type="text" required></div>
<div class="fld"><label for="r-fcontact">Their phone or email</label><input id="r-fcontact" name="x_referee_contact" type="text" required><span class="hint">Whichever they'd prefer I use.</span></div>
</div>
<div class="fld"><span class="choice-q" id="need-q">What do they need help with? Tick any that apply.</span>
<div class="toggles" role="group" aria-labelledby="need-q">
${toggle("buying", "Buying a home")}${toggle("renewing", "Renewing")}${toggle("refinancing", "Refinancing")}${toggle("self_employed", "Self-employed income")}${toggle("investing", "A rental or investment")}${toggle("other", "Something else")}
</div></div>
<div class="fld"><label for="r-msg">Anything that would help me help them? (optional)</label><textarea id="r-msg" name="message" rows="3" placeholder="Their timeline, what they've been told so far, the best time to reach them"></textarea></div>
<input type="hidden" name="intent" value="other">
<div class="hp" aria-hidden="true"><label for="r-web">Leave this field empty</label><input id="r-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="consent_referee" required data-msg="Please confirm the person you are referring has agreed to be contacted."><span>I've told them about Joshua, and they've said they're happy for him to get in touch. (Required. Canada's anti-spam rules mean I can't contact someone who hasn't agreed to hear from me, and I wouldn't want to anyway.)</span></label>
<p class="small">By sending this you agree that Joshua Resvick may contact you to confirm the referral. See the <a href="/privacy/">privacy policy</a>.</p>
<div><button class="btn" type="submit">Send the referral</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
<div class="done" data-done hidden>
<p><strong>Thank you. That means a lot.</strong></p>
<p>I'll reach out to them in the next day or two, mention your name so it isn't a cold call, and take it from there at their pace. If they'd rather make the first move, they can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a> directly.</p>
</div>
</form>
</div>`;

const body = `
${short({ answer: "If someone you know needs mortgage help, send them my way here. I'll mention your name, go at their pace and never charge them on an A-lender file. I don't pay for referrals. Just make sure they've agreed to hear from me first.", who: "Past clients, friends and colleagues who know someone buying, renewing or refinancing.", next: "Ask the person first, then fill in the short form below. Or send them the <a href=\"/contact/\">contact page</a>." })}

<h2>How referrals work with me</h2>
<p>Most of my clients come from other clients, and I'd like to keep it that way. Maybe someone you know is buying, renewing or refinancing. Or maybe a lender just confused them. You can send them my way here. I'll get in touch and mention your name, so it's not a stranger calling. Then I'll go at their pace. If they only want one question answered, that's a fine outcome. No pressure on them, and nothing expected of you.</p>
<p>Two things I want to be clear about up front. First, I don't pay for referrals, and I don't run contests or gift cards. A referral should be a recommendation, not a transaction. BC's rules for mortgage brokers are also strict about anything that looks like an inducement. Second, the person you refer never pays for the service on a mainstream (A) lender file. The lender pays me, and they pay nothing. Fees only arise on some B-lender and private files, with written disclosure first. The page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> explains the whole arrangement. Feel free to send it to them before they decide.</p>

${form}

<h2>Why I ask whether they've agreed</h2>
<p>That required box isn't a formality. Canada's anti-spam law means I shouldn't email or text someone who hasn't agreed to hear from me, and a referral doesn't change that. More to the point, nobody enjoys a surprise call about their mortgage. So here's what works best. You tell them about me. They say sure, have him reach out. Then you fill in the form. If you'd rather not be the go-between, send them the <a href="/contact/">contact page</a> instead. They can book a call themselves. Either route ends in the same conversation.</p>

<h2>Who tends to benefit most</h2>
<p>You don't need to diagnose their situation. But if you're wondering whether to mention me, these are the moments when a second opinion most often helps.</p>
<ul>
<li><strong>A renewal letter just arrived.</strong> The letter is one lender's opening offer. Since late 2024, many borrowers can switch lenders at maturity without redoing the stress test. The <a href="/mortgage-renewal-bc/">renewal hub</a> explains the options. The sooner they look, the more room there is.</li>
<li><strong>They're saving for a first home and not sure what's realistic.</strong> The FHSA, the Home Buyers' Plan, the GST rebate and the BC property transfer tax exemption add up to more help than most people know. And the order matters. Start them at the <a href="/first-time-home-buyer-bc/">first-time buyer hub</a>.</li>
<li><strong>They're self-employed and a bank said no.</strong> That's usually about how the income was read, not whether it's enough. The <a href="/self-employed-mortgage-bc/">self-employed guide</a> covers the routes.</li>
<li><strong>They want to use their equity</strong> for a renovation, a suite, a debt clean-up or an investment. They're not sure if breaking their mortgage makes sense. The <a href="/refinance-mortgage-bc/">refinance hub</a> starts with the break-even math, not a pitch.</li>
<li><strong>They're worried about payments.</strong> Early is everything. I'll explain the options plainly, with no pressure, and often the answer is simpler than they fear.</li>
</ul>

<p>Know someone who needs a realtor, notary or lawyer instead? The <a href="/partners/">partners page</a> lists the people I know in each role.</p>

<h2>What they'll get</h2>
<p>The same thing every client gets. A short first call to understand the goal and the numbers. An honest read on what's realistic, including hearing early if something in the plan won't work. A written side-by-side of real lender options before they decide anything. After funding comes the <a href="/mortgage-aftercare-program/">aftercare program</a>. That means an annual review, rate monitoring and a call about six months before renewal. So the next decision gets made with time to spare. I've been a broker for ten years, after five years as a mortgage underwriter. Over 1,000 mortgages in, the part I still like best is explaining things properly.</p>

${callout("If you're referring a family member", "<p>Say so in the notes. Family referrals often come with a second question. Maybe it's whether a gift toward a down payment works. Or how co-signing affects the person helping. I'm happy to talk to you both, together or separately. I'll keep each person's details private.</p>")}

<h2>A note on privacy</h2>
<p>The details you send go to me and into my client system, nowhere else. I use your name only to introduce myself to the person you referred. I use their contact details only to make that first contact. If they'd rather I didn't follow up, one message stops it. The <a href="/privacy/">privacy policy</a> has the full picture. You can ask me to delete a referral at any time.</p>
<p>If you've been a client, thank you for thinking of me. If you haven't been a client yet and you're referring someone anyway, that's a special kind of trust. I'll treat it that way.</p>

${cta({ title: "Rather talk it through first?", text: "If you're not sure whether their situation is something I can help with, book a call and ask. Fifteen minutes, no obligation, and you can tell them what I said." })}
`;

export default {
  slug: "/refer/",
  h1: "Refer a friend",
  lede: "Know someone who could use straight answers about a mortgage? Send them my way. No fees, no incentives, and I only reach out once they've said yes.",
  crumb: "Refer a friend", nav: "/about-joshua-resvick/", forms: true, body,
  faqs: [
    { q: "Do you pay a referral fee or offer a gift?", a: "No. I don't pay for referrals, and I don't run contests or gift cards. A referral should be a recommendation, not a transaction, and BC's rules for mortgage brokers are strict about anything that looks like an inducement. The thank-you you get is a genuine one, and the person you referred gets the same service as every client." },
    { q: "Will the person I refer be charged anything?", a: "On a mortgage placed with a mainstream (A) lender, the lender pays the broker and the borrower pays nothing for the service. Fees only arise on some B-lender and private files, and BC rules require written disclosure before anyone commits. There is never a charge for the first call or the written comparison." },
    { q: "Why do I have to confirm they've agreed to be contacted?", a: "Because Canada's anti-spam law means I shouldn't reach out to someone who hasn't agreed to hear from me, and because nobody likes a surprise call about their finances. Tell them about me first. If you'd rather not be in the middle, send them the contact page link and let them book a call themselves." },
    { q: "What if they're outside the Lower Mainland?", a: "That's fine. I work with clients across British Columbia, and everything can be done online and by phone. My office is in Surrey, but there's no geographic limit on who I can help, from the Island to the Okanagan to the North. The process and the service are the same from anywhere." },
    { q: "Can I refer myself, or a family member I'm buying with?", a: "You don't need this form for yourself; just book a call from the contact page. For a family member you're buying with, or helping with a down payment, use the form and say so in the notes. I'm glad to talk with both of you, together or separately, and I keep each person's details to themselves." }
  ]
};
