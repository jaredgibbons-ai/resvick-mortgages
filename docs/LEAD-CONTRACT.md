# Lead webhook contract (build prompt §12)

The site posts one JSON record per enquiry to `/api/lead` (Cloudflare Pages Function, `functions/api/lead.js`), which forwards it unchanged to `CRM_WEBHOOK_URL`. The CRM is not chosen yet (Open Item 10), so this is the adapter point.

```json
{
  "name": "string", "email": "string", "phone": "string, optional",
  "intent": "buyer | renewal | refinance | investor | self-employed | distress | other",
  "timeline": "target closing date or mortgage maturity (month + year), optional",
  "message": "string",
  "source_page": "/contact/", "utm": { "utm_source": "..." },
  "form": "contact",
  "consent_enquiry": true,
  "consent_marketing": false,
  "consent_recorded_at": "ISO timestamp (server)",
  "tool_inputs": null
}
```

Rules the CRM side must implement: one record per person (match on email + phone, merge never duplicate); intent drives the task (buyer → pre-approval call; renewal → call + 6-month and 120-day reminders in America/Vancouver keyed to maturity; distress → same-day urgent); marketing consent is stored separately with form and time; unsubscribe stops all marketing.

Failure handling: if the CRM call fails, the function posts `{alert, error, lead}` to `ALERT_WEBHOOK_URL` (set it to something that emails Josh) and returns 502; the page then tells the visitor to phone or email. A silent lost lead is launch-blocking, so do not go live without both variables set and a test submission from staging.

Environment variables: `CRM_WEBHOOK_URL`, `ALERT_WEBHOOK_URL`.
