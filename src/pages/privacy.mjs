import { SITE } from "../lib/site.mjs";
// DRAFT: plain-language policy for Josh/Xeva legal review before launch. Not part of the §16 link map; footer-only.
export default {
  slug: "/privacy/",
  h1: "Privacy policy",
  lede: "What this website collects, what it does with it, and the choices you have. Written in plain language.",
  crumb: "Privacy policy", nav: "",
  body: `
<p><strong>Draft for review.</strong> This policy describes how the site is built to work. It should be reviewed by Joshua and Xeva Mortgage before launch.</p>
<h2>Who is responsible</h2>
<p>This website is operated by Resvick Mortgages, the working name of Joshua Resvick, Mortgage Broker, Xeva Mortgage (Verico Xeva Mortgage Inc.), #106–2626 Croydon Drive, Surrey, BC V3Z 0S8. Questions about your information can go to <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
<h2>What we collect</h2>
<p>If you send a message, we collect the details you type: your name, email address, optional phone number, what your message is about, an optional timeline and your message. We also record which page the message was sent from, any campaign tags in the link you followed, and the consent choices you made on the form.</p>
<p>The calculators on this site run in your browser. The figures you enter into them are not sent to us. The one exception is the home equity estimator page: if you choose to send Joshua a message after seeing your result, there is an unticked box that adds the figures you entered (home value, mortgage balance and the estimate) to that message. If you do not tick it, they stay in your browser.</p>
<p>The site may use Google Analytics to count visits and clicks, such as clicks on the booking button or phone number. We configure it so that it receives the page and the tool or intent involved, and never your name, email, income, balances or property values.</p>
<h2>Why we use it</h2>
<p>We use your message to reply to you and to help with your mortgage question. Your agreement to be contacted about your enquiry is part of sending the form. We send marketing email, such as rate updates and mortgage tips, only if you tick the separate, optional box on the form. You can unsubscribe from marketing at any time, and one unsubscribe stops all marketing messages. Messages about a file you have an active relationship with are separate.</p>
<h2>Where it goes</h2>
<p>Enquiries are passed to the brokerage's customer records system so that they are handled as one record per person rather than scattered emails. Booking is run by Cal.com, a third-party scheduling service, which has its own privacy policy. Your information is not sold, and is not shared outside normal brokerage operations, such as working with lenders on an application you have asked for.</p>
<h2>Documents</h2>
<p>Please do not send financial documents through the website. The contact form does not accept attachments. When documents are needed, Joshua provides a secure upload link.</p>
<h2>Your choices</h2>
<p>You may ask to see the personal information we hold about you, ask for corrections, or ask us to delete it, subject to legal record-keeping duties that apply to mortgage brokerages. BC's Personal Information Protection Act and Canada's anti-spam legislation govern these practices. Contact <a href="mailto:${SITE.email}">${SITE.email}</a> and we will respond.</p>
<p>This policy may be updated as the site changes. The current version is always at this address.</p>`
};
