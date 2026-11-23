# Making the forms deliver (Cloudflare Pages)

Every form on the site posts to `/api/lead` (`functions/api/lead.js`). Nothing is delivered until at least one delivery channel is set. Set them under Cloudflare Pages > the project > Settings > Variables and Secrets (Production, and Preview if you want to test there). Redeploy after changing a variable.

## Delivery channels (set at least one; both is better)

| Channel | Variables | Notes |
|---|---|---|
| Email to Josh | `RESEND_API_KEY` (secret), `LEAD_EMAIL_TO` (for example joshua@resvickmortgages.com; commas for several), optional `LEAD_EMAIL_FROM` | Create a Resend account, add and verify resvickmortgages.com (DNS records), create an API key. Default sender is `Resvick Mortgages <leads@resvickmortgages.com>`. Reply-To is the visitor, so Josh can answer from his inbox. |
| CRM or automation | `CRM_WEBHOOK_URL` | Any URL that accepts a JSON POST (Zapier catch hook, Make, a CRM's inbound webhook). The record includes `subject` and `summary` so an automation can email it as is. See LEAD-CONTRACT.md. |

If one channel fails and the other works, the visitor sees success and Josh gets an alert. If none works, the visitor sees the phone and email fallback and Josh gets an alert.

## Safety nets (optional, recommended)

- **Backup copy of every lead.** Pages > Settings > Bindings > add a KV namespace, variable name `LEADS`. The function stores every lead for 60 days, marked `delivered` or `FAILED`. Look under Workers & Pages > KV > the namespace to recover anything marked FAILED. Add a line to the privacy policy about the 60-day backup before launch.
- **Alerts.** `ALERT_WEBHOOK_URL` (any URL that emails or messages Josh). Without it, and with Resend set, the alert goes to `LEAD_EMAIL_TO` by email.
- **Spam check.** Cloudflare dashboard > Turnstile > add a widget for resvickmortgages.com. Put the secret in `TURNSTILE_SECRET` (runtime) and the public site key in `TURNSTILE_SITE_KEY` (a build variable, so the pages load the check). The widget is invisible unless Cloudflare needs more proof, and loads only when a visitor touches a form. Without these, the honeypot, same-origin check and a per-address limit (needs the KV binding) still apply. The privacy page adds a Turnstile sentence automatically when the site key is set.

## Before launch, test every form

1. Submit the contact form, a call-back box, the apply form, a quiz and the renewal reminder from a phone. Check that each arrives, with the right form name in the subject.
2. Temporarily break `CRM_WEBHOOK_URL` and confirm the alert arrives and the page shows the phone and email message.
3. Check that the thank-you page counts each lead once.

Automated checks: `node --test tests/lead.test.mjs` covers the function (channels, backup, honeypot, origin, Turnstile, limit, blocked fields).
