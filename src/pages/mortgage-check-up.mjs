import { SITE, cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

const body = `
<h2>What a check-up is, and why I built one</h2>
<p>Most people know their mortgage payment to the dollar and almost nothing else about it. That's not a knock. The payment is the number that leaves the account every month; everything else lives in a statement that gets filed and forgotten. Then the renewal letter arrives, usually with a few weeks to go, and suddenly there are five questions at once and no time to think about any of them.</p>
<p>A check-up is the ten minutes that fixes that. You type in what you've got today, straight off your latest statement, and you get a plain-language read on where the mortgage stands: how far away your maturity date really is and which window you're in, what the rest of the term will cost you in interest, what you'd still owe when you get there, and roughly what it would cost to leave early if you ever wanted to. If you add what you think the home is worth, it also shows your equity and how much room a lender would see for a refinance or a line of credit.</p>
<p>Then it tells you what to do about it, keyed to how many months you have left. Not a sales pitch, just the next sensible step. Everything happens in your browser. Nothing is looked up, nothing is sent anywhere, and you don't need to give an email address to see the result.</p>

${TOOLS["check-up"]()}

<h2>Where to find the numbers</h2>
<p>Everything the tool asks for is on your most recent mortgage statement, which most lenders send once a year and many post in online banking. Look for the current balance (sometimes called principal outstanding), the interest rate, the payment frequency, the remaining amortization and the maturity date. If you've lost track of the statement, your lender's app or a two-minute phone call to its mortgage line will give you all five.</p>
<p>The maturity date is the one people get wrong most often. It's the end of your current term, not the end of the amortization. A 25-year mortgage with a five-year term has a maturity date five years from the day it funded, and that's the date that matters for renewal. If your letter or statement shows both, use the nearer one.</p>
<p>The home value is your own estimate, and the tool labels it that way. There's no automated valuation here, because no valuation data source exists in this build and I'd rather show you an honest estimate than a confident guess. If you want a sharper number, your realtor can pull recent sales on your street, and a lender will order an appraisal before anything is actually borrowed.</p>

<h2>What each line of the result means</h2>
<p><strong>Months to maturity and the window.</strong> Lenders will typically quote a renewal or a switch up to 120 days before maturity; some go earlier, and a few go to 180 days. Six months out is when I start the comparison work with clients, because that's enough time to get real quotes without rushing. The tool tells you which of those windows you're in, or whether you're still comfortably outside both.</p>
<p><strong>Current payment, recalculated.</strong> The tool rebuilds your payment from the balance, rate and amortization you entered. It should land within a few dollars of your statement. If it's way off, one of the three inputs is probably wrong, most often the remaining amortization, and that's worth knowing on its own.</p>
<p><strong>Interest still to pay before maturity.</strong> This is the cost of simply finishing your term. It's the number to hold next to any early-renewal or blend-and-extend offer, because an offer that "saves you money" has to beat it after the penalty.</p>
<p><strong>Balance you'll carry into renewal.</strong> What you'll owe on maturity day if nothing changes. It's the figure a new lender will be quoting on, and it's usually a bit lower than people expect, because every payment between now and then chips away at principal.</p>
<p><strong>Estimated penalty to leave today.</strong> For a variable mortgage this is three months' interest, which is what most lenders charge. For a fixed mortgage it's the greater of three months' interest and the interest rate differential, and the IRD depends on a comparison rate only your lender knows. If you type in a rate you've been quoted today for your remaining term, the tool uses it to estimate the contract-rate IRD. Either way it's a range, and your lender's figure governs. The <a href="/mortgage-penalty-calculator/">penalty calculator</a> goes deeper, including the posted-rate method that can make the number much larger.</p>
<p><strong>Equity, refinance room and line-of-credit room.</strong> Shown only if you entered a home value. Federally regulated lenders can refinance to 80 percent of the value, and a line of credit can be up to 65 percent of value as a revolving portion within that 80 percent. The tool applies both ceilings to your numbers. A lender still needs an appraisal and an income check before any of it becomes real, and the <a href="/home-equity-estimator/">home equity estimator</a> adds the penalty and costs to show the net figure.</p>

<h2>The "what to do now" list, explained</h2>
<p>The advice changes with the calendar, so the tool gives you a different list depending on how many months you have left.</p>
<ul>
<li><strong>More than a year out.</strong> Nothing to sign. Know your numbers, put the six-month date in your calendar, and if you want to be further ahead at renewal, run the prepayment calculator to see what a lump sum or a payment bump does.</li>
<li><strong>Six to twelve months.</strong> Pull the statement, confirm the maturity date, and start treating the renewal letter as what it is: your lender's opening offer. If you expect to move, sell or borrow in the next term, that changes which product fits, so say so early.</li>
<li><strong>Four to six months.</strong> This is the comparison window. Collect your lender's early offer and at least two outside quotes. Find out whether you have a collateral charge, because it changes what a switch costs.</li>
<li><strong>Under four months.</strong> Ask for the renewal offer in writing now. Get outside quotes for a straight switch; since late 2024 most borrowers moving at maturity skip the stress test, which the <a href="/stress-test-exemption-switching-lenders/">exemption guide</a> explains properly. Decide at least two weeks before maturity.</li>
<li><strong>Past maturity.</strong> If you haven't signed, your mortgage has most likely rolled into an open term at a high rate. That's a contract detail, not a penalty, and it's fixable the day you call. A switch is still a transfer, so there's no penalty for leaving.</li>
</ul>
<p>The full renewal process, including what the letter has to contain and when it has to arrive, is on the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>. If you're wondering whether to move early rather than wait, read <a href="/early-mortgage-renewal/">early mortgage renewal</a> before you take any offer.</p>

<h2>A note on your lender type</h2>
<p>The tool asks who holds your mortgage because it changes the advice a little. Big banks often register collateral charges, which can make a switch slower and a touch pricier, so it's worth checking which charge you have. Credit unions are provincially regulated, so the federal switch rules read differently for them; a quick question before you count on the stress-test exemption saves a surprise later. Broker-channel lenders are usually the easiest to move away from at maturity, and often the ones worth comparing against.</p>

<h2>Want it written up, with a reminder attached?</h2>
<p>You've already got the result. If you'd like it as a short written check-up, and a reminder at six months and at 120 days before your maturity date, the form below does that. It's optional, and the box that sends your numbers along is unticked by default, so nothing travels unless you choose it. The reminder is the same one on the <a href="/mortgage-renewal-reminder/">free renewal reminder page</a>, and it works whether or not your mortgage is with me.</p>
<div class="form-card">
<form data-lead="check-up" novalidate>
<input type="hidden" name="intent" value="renewal">
<input type="hidden" name="tool_inputs" value="">
<div class="row2">
<div class="fld"><label for="cu-name">Your name</label><input id="cu-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="cu-email">Email</label><input id="cu-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="cu-phone">Phone (optional)</label><input id="cu-phone" name="phone" type="tel" autocomplete="tel"></div>
<div class="fld"><label for="cu-lender">Current lender (optional)</label><input id="cu-lender" name="current_lender" type="text"></div>
</div>
<div class="fld"><label for="cu-timeline">Maturity date, if you'd like the reminders</label><input id="cu-timeline" name="timeline" type="text" placeholder="For example, June 2027"></div>
<div class="hp" aria-hidden="true"><label for="cu-web">Leave this field empty</label><input id="cu-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="include_estimate"><span>Include the figures I entered above (balance, rate, maturity date, the result) with my message. Optional.</span></label>
<label class="chk"><input type="checkbox" name="consent_reminders"><span>Send me the two renewal reminders, six months and 120 days before my maturity date. Optional; you can unsubscribe at any time.</span></label>
<p class="small">By sending this you agree that Joshua Resvick may contact you to reply. See the <a href="/privacy/">privacy policy</a>.</p>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. Optional, unsubscribe any time.</span></label>
<div><button class="btn" type="submit">Send my check-up</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
</form>
</div>

${callout("What this tool is not", "<p>It isn't an approval, a valuation or a rate quote. It's arithmetic on the numbers you typed, with the rules that apply to everyone laid over the top. A lender confirms the real figures after an appraisal, a credit check and proof of income, and your lender's penalty calculation is the one that counts.</p>")}

<h2>Where this fits in the rest of the site</h2>
<p>If the check-up says you're inside the window, the <a href="/mortgage-calculators/#renewal">renewal comparison calculator</a> puts stay, switch and refinance side by side over one term. If the penalty line made you wince, the <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties guide</a> explains what you can do without triggering one. And if you're a client already, none of this is news: the <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> program runs this same check every year and calls you six months before maturity. If you'd rather talk it through than type it in, <a href="/contact/">get in touch</a> and I'll run it with you on a 15-minute call.</p>
<p>One last thing on fees, because people wonder: on a mortgage placed with a mainstream lender, the lender pays the broker and you pay nothing for the work. Fees only come up on some B-lender and private files, and BC rules require written disclosure before you commit. The whole picture is on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cta({ title: "Want a second pair of eyes on the result?", text: "Book a 15-minute call. Bring the numbers, and you'll leave knowing whether to sit tight, start comparing, or move now." })}
`;

export default {
  slug: "/mortgage-check-up/",
  h1: "Mortgage Check-Up: where your mortgage stands, in ten minutes",
  lede: "Type in what's on your statement and see your renewal window, what the rest of the term costs, what leaving early would cost, and what to do next. No email needed to see the result.",
  crumb: "Mortgage check-up", nav: "/mortgage-calculators/", calc: true, forms: true, body,
  faqs: [
    { q: "Is this the same as a lender's 'track my mortgage' tool?", a: "It's the opposite order. Those tools usually collect your details first and send a report afterwards. This one shows the full result on the page straight away, from the numbers you typed, and the written version with reminders is an optional extra you choose at the end. Nothing is looked up or sent unless you tick the box." },
    { q: "Why does the payment it shows differ slightly from my statement?", a: "The tool rebuilds your payment from the balance, rate and remaining amortization you entered, using standard Canadian compounding. Statements sometimes reflect a payment set years ago on an older balance, a rounding convention, or an accelerated schedule. A small gap is normal. A big gap usually means the remaining amortization is off, which is worth checking because it changes the interest figures too." },
    { q: "How accurate is the penalty estimate?", a: "It's a range, not a quote. For a variable mortgage, three months' interest is what most lenders charge and the estimate is usually close. For a fixed mortgage the larger figure is often the interest rate differential, which depends on a comparison rate only your lender knows and on whether it uses the posted-rate method. Ask your lender for the figure in writing before you decide anything." },
    { q: "Do I have to be a client to use this or to get the reminders?", a: "No. The tool is free for anyone, and so are the reminders at six months and 120 days before maturity. They work whether your mortgage is with a bank, a credit union or another broker. If you'd like me to look at the numbers with you afterwards, that's a 15-minute call and there's no obligation attached to it." },
    { q: "What happens to the numbers I type in?", a: "They stay in your browser. The calculation runs on your own device and the tool doesn't send anything anywhere on its own. If you use the form at the bottom, only your name, email and anything you type into it are sent, plus your figures if you tick the box that includes them. The privacy policy explains how that information is handled." }
  ]
};
