# Competitor analysis tattoogutachten.de

Date: 2026-11-12. Method: crawl of all public pages (sitemap based) with curl, extraction of title, meta description, canonical, JSON-LD types, headings and body text, plus a web search for the core keywords. Competitor texts are only summarized here, never copy them.

## Overview

| | tattoogutachter.de | tattoogutachten.com | tattoo-gutachten.com | tattoo-gutachter.de |
|---|---|---|---|---|
| Expert | Pascal Kurz, Dorsten | Karoline Heydrich, Ludwigsburg | Ralf Reich, Oberhausen / Koeln | Daniel Weber, Wedemark |
| Credential | DIN EN ISO/IEC 17024 certified, BVT member since 2015 | DIN EN ISO/IEC 17024 certified, Sachverstaendigen Fernstudium (EIB) | gepr. Sachverstaendiger BDSH e.V. (2022) | DGuSV certified since 2023, EIB training |
| Experience claim | 13 to 14 years | more than 13 years, nursing background | tattoo/piercing studio since 1999 | more than 25 years |
| CMS | WordPress | Wix | Wix | static one pager |
| Pages | Home, Ueber uns, Service, Kontakt, legal | Home, Qualifikationen, Kontakt, AGB, legal | Start, Gutachten, Vita, Referenzen, Kontakt, legal | one page plus Impressum, Datenschutz |
| Content words (main page) | about 500 | about 300 | about 400 | about 1700 (content duplicated for mobile and desktop) |
| Title | Sachverstaendiger fuer Taetowierungen, name, ISO | Home, Tattoo Gutachten (weak) | name, gepr. Sachverstaendiger, Tattoo Gutachter | Sachverstaendiger fuer Taetowierungen, Tattoo Gutachter, Niedersachsen |
| Meta description | missing | generic | keyword stuffed | good: experience, neutral, bundesweit, kostenlose Erstberatung |
| Canonical | yes | yes | yes | missing |
| JSON-LD | none | Wix default LocalBusiness, WebSite | Wix default LocalBusiness, WebSite | ProfessionalService, Person, GeoCoordinates |
| FAQ section | no | no | no | no |
| Prices | no | no | no | no |
| Process | no | no | yes: Ortstermin 45 to 60 min, report in 2 to 3 weeks | yes: 4 steps, report in 2 to 4 weeks by post |
| Booking | contact form, email | contact form, 48h answer | contact form | email, answer in 1 to 2 working days, checklist what to send |
| Trust signals | ISO certification, BVT, studio photos | detailed CV with hygiene and wound care qualifications, certificate images, AGB | Referenzen page with courts (AG Herne-Wanne, LG Essen, LG Halle, LG Erfurt, LG Saarbruecken) | DGuSV, 25 years, JVEG mentioned for court work |
| Tone | Du, mixed with the tattoo studio business | Du | Sie | Sie |

## Per competitor

### tattoogutachter.de (Pascal Kurz)
- Strengths: exact match domain, ISO 17024 certification, BVT membership.
- Weaknesses: really a tattoo studio site (studio address, opening hours, studio styles), so independence looks weak; no meta descriptions, no schema; thin content; no process, no prices, no FAQ; typos; cookie banner from WordPress plugins; leftover page "Home 2" in the sitemap.

### tattoogutachten.com (Karoline Heydrich)
- Strengths: the most detailed qualification page (dated CV, hygiene officer, Medizinprodukteaufbereitung, wound expert, continuous training), certificates and memberships shown, AGB published, response time promise (48h).
- Weaknesses: gmail address, Du tone, title Home, generic meta, Wix default schema only, no service pages, no process, no FAQ, no prices, very heavy page (about 950 KB HTML plus Wix JS).

### tattoo-gutachten.com (Ralf Reich)
- Strengths: clear service types (Beweissicherungsgutachten, Gerichtsgutachten, Privatgutachten), concrete process facts (Ortstermin duration, delivery time), the only Referenzen page naming courts. This is the strongest trust signal in the market.
- Weaknesses: typos, a leftover AI chatbot phrase visible in the text, keyword stuffed meta descriptions, heavy Wix, no FAQ, no prices, operator is a separate company in another city than the studio.

### tattoo-gutachter.de (Daniel Weber)
- Strengths: best SEO basics (good title and meta, ProfessionalService plus Person schema, geo), most text, plain step by step process with timing, a checklist of what to send for the first assessment, JVEG mention, explicit offer for studios, same DGuSV credential as Patrick Wolf.
- Weaknesses: single page, so no page per keyword or service; content duplicated for mobile and desktop; no canonical; no FAQ; no prices; no online booking; uppercase headings; regional focus Niedersachsen.

## Market gaps we can own
1. Nobody has an FAQ page or FAQPage schema. We already have about 20 good FAQ answers.
2. Nobody has one page per service. Search intents like Piercing Gutachten, Hygiene Gutachten Tattoostudio, Gerichtsgutachten Tattoo, Privatgutachten Tattoo, Beweissicherung Tattoo are unserved.
3. Nobody has online booking. A real calendar (cal.com) for the free 60 minute Erstberatung is a clear differentiator.
4. Nobody explains costs. Even without fixed prices we can explain the cost logic: free 60 minute first consultation, written cost estimate and contract before any private commission, court expert fees under JVEG are settled through the court, Rechtsschutz question to clarify with the insurer. Price ranges only if Patrick provides them.
5. Nobody has audience specific content (Privatpersonen, Tattoo Studios, Rechtsanwaelte, Gerichte).
6. Nobody has guide content (what to do after a failed tattoo, Mangel versus Geschmackssache, how to photograph a tattoo for an assessment, Privatgutachten versus Gerichtsgutachten). This is the biggest SEO and GEO lever: answer first, factual paragraphs that AI answer engines quote.
7. Nobody has llms.txt, complete OG tags, Service or FAQPage or BreadcrumbList schema.
8. All competitor sites are template sites (WordPress, Wix) with weak typography and slow pages. A fast static Astro site with an editorial design wins on look and Core Web Vitals.

## Our assets
- Court appointment by Landgericht Frankfurt am Main (with the correct legal note that this is not a public appointment).
- DGuSV seal 2026 with confirmation register number DE-8#17024/70-03 (printed on the seal), RW badge.
- More than 22 years in tattoo and piercing, member of Bundesverband Tattoo.
- Six services already described, including hygiene and piercing (competitors barely cover these).
- Five step process, free first consultation up to 60 minutes, strict separation of studio work and expert work (separate website dedicated to expert work).
- Real photos of Patrick Wolf at work.
- Sie tone, GmbH operator with full Impressum.

## Recommendations per ticket
- Landing page (#3): H1 with Tattoo Gutachter / Tattoogutachten plus bundesweit; trust strip with seal, register number, LG Frankfurt, 22+ years, BVT; audience cards; process with what happens and what the client prepares; checklist for the first consultation in our own words; strong booking CTA. Clear statement of independence (separate website dedicated to expert work), because competitors mix studio and expert role.
- Subpages (#4): one page per service with answer first intro, typical questions, what is assessed, what the client receives, related services. FAQ page with all questions grouped, more questions added where the source has facts. Ueber mich with a structured credential list (dated where Patrick provides dates) like a CV.
- Booking and contact (#5): online booking plus a checklist what to prepare and expected response time (only if Patrick confirms a time).
- SEO and GEO (#7): full schema graph (ProfessionalService, Person with hasCredential and memberOf, Service per page, FAQPage, BreadcrumbList), unique titles and metas, llms.txt, OG image, internal links between services, audience pages and guides.
- New ticket: audience pages and Ratgeber (guide) section with 4 to 6 articles for long tail and GEO, facts only from the source or general legal basics, marked for review by Patrick.

## Open questions for Marcello / Patrick
- Price ranges or hourly rate for private reports and short statements (Stellungnahme)? Otherwise we only explain the cost logic.
- Typical duration of an inspection appointment and delivery time of a report?
- More courts or anonymized references that may be named?
- Additional qualifications with dates (hygiene, first aid, Sachkunde) for a CV style credential list?
- May the DGuSV register number be shown as text (it is visible on the seal anyway)?
- The old site says one of only four DGuSV tattoo experts in Germany. Keep this claim? It must be verifiable.
