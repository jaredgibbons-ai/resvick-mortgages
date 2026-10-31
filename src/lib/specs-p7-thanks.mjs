// Thank-you page: noindex, never in the sitemap (build.mjs skips noindex pages), also disallowed in robots.txt.
export default {
  "/thank-you/": { exempt: true, noindex: true, title: "Thank You | Resvick Mortgages", meta: "Thank you for contacting Resvick Mortgages. Here is what happens next.", links: [] }
};
