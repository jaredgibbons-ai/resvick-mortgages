// City-page helpers (Phase 4, §7.12). Josh SERVES each city online from the Surrey office; never a local branch.
import { SITE } from "./site.mjs";

/** Service schema for a city page: the business, its real Surrey address, and the city as areaServed. */
export function cityServiceSchema(slug, city, extraAreas = []) {
  return {
    "@context": "https://schema.org", "@type": ["MortgageBroker", "FinancialService"], "@id": SITE.origin + slug + "#service",
    name: SITE.name, url: SITE.origin + slug, telephone: "+1-778-882-5674", email: SITE.email,
    address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.region, postalCode: SITE.address.postal, addressCountry: "CA" },
    areaServed: [city, ...extraAreas].map((n) => ({ "@type": "City", name: n, containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } })),
    availableChannel: { "@type": "ServiceChannel", serviceUrl: SITE.book, servicePhone: "+1-778-882-5674" },
    founder: { "@type": "Person", name: SITE.person, jobTitle: "Mortgage Broker" },
    parentOrganization: { "@type": "Organization", name: "Xeva Mortgage (Verico Xeva Mortgage Inc.)" }
  };
}

/** One honest line about where the office is and how the city is served. */
export const servesLine = (city) => `Joshua Resvick serves ${city} from his office in Surrey, by phone, video and secure document upload. There is no ${city} branch, and you do not need to visit any office: every step, from the first call to the signed commitment, is done online, and your lawyer or notary handles the signing where you live.`;
