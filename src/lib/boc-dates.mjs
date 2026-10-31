import { callout } from "./site.mjs";

// Bank of Canada policy rate announcement dates. Source: Bank of Canada, "Bank of Canada publishes 2027 schedule
// of policy interest rate announcements and other major publications" (July 2026). Dates only, no rates.
// Dates already past at build time are dropped, so the box never shows a stale date.
const DATES = [
  ["2026-12-09", "Wednesday, December 9, 2026", false],
  ["2027-01-27", "Wednesday, January 27, 2027", true],
  ["2027-03-03", "Wednesday, March 3, 2027", false],
  ["2027-04-28", "Wednesday, April 28, 2027", true],
  ["2027-06-02", "Wednesday, June 2, 2027", false],
  ["2027-07-21", "Wednesday, July 21, 2027", true],
  ["2027-09-08", "Wednesday, September 8, 2027", false],
  ["2027-10-27", "Wednesday, October 27, 2027", true],
  ["2027-12-08", "Wednesday, December 8, 2027", false],
];

export function bocDates() {
  const today = new Date().toISOString().slice(0, 10);
  const next = DATES.filter(([d]) => d >= today);
  if (!next.length) return "";
  const items = next.map(([, label, mpr]) => `<li>${label}${mpr ? ' <span class="small">(with a Monetary Policy Report)</span>' : ""}</li>`).join("");
  return callout("Upcoming Bank of Canada rate announcement dates", `<p>The Bank announces its policy rate at 9:45 a.m. Eastern on these days. Variable-rate payments and lender prime rates can change right after.</p><ul>${items}</ul><p class="small">Source: Bank of Canada, 2027 schedule of policy interest rate announcements, July 2026. Dates can change, so confirm on the Bank's site.</p>`);
}
