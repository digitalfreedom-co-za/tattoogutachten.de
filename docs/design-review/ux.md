# UX and Conversion Review: tattoogutachten.de

**Overall verdict: 7/10.** A credible editorial foundation with useful service explanations, clear professional boundaries, authentic photography and a reassuring free consultation offer. The main weaknesses are an unfinished booking journey, buried audience navigation and insufficient practical reassurance before contact. The demo calendar is a production launch blocker, although explicitly disclosed on this preview.

Reviewed `main` at `0f00d4a`: all 25 live content pages using curl, all 50 supplied screenshots at 375 and 1280 px, and the relevant source. All pages returned HTTP 200. Fresh browser checks confirmed that both calendars load at both widths. German browser settings produce German labels and 24-hour times. The booking form was inspected without submission; confirmation emails and cancellation were not tested. Capture-related header positions and blank calendar screenshots are not reported as live defects.

Against the four competitors described in `docs/competitor-analysis.md`, this site offers stronger audience content, service coverage and FAQs. It still trails Heydrich in visible qualification evidence, Reich in concrete process expectations and court references, and Weber in response-time clarity. Its separation from the studio business is more explicit than Kurz’s, but the shared studio email and reliance on a separate website as evidence of independence weaken that distinction. These comparisons use the supplied analysis, not a fresh competitor audit.

No repository files were changed. The required [tester summary was posted to issue #11](https://github.com/digitalfreedom-co-za/tattoogutachten.de/issues/11#issuecomment-6829109224).

## Numbered findings

### 1. Production booking still routes to the developer’s demo

**Severity:** blocker  
**Page/component:** `/`, `/termin/`, all booking CTAs  
**Source:** `src/config/booking.ts:7`, `src/components/booking/BookingEmbed.astro:46`

**What is wrong:** Both live calendars use `marcelrgberger/tattoogutachten-demo`. The event identifies Marcel R. G. Berger, lasts 30 minutes and says not to book. The surrounding site promises a consultation with Patrick lasting up to 60 minutes. The homepage hides event details, making the mismatch less apparent until later.

**Why it matters:** A successful calendar interaction cannot deliver the service being advertised.

**Concrete fix:** Before production launch, configure Patrick’s verified event and reconcile its host, duration, meeting method, availability, required fields and confirmation wording with the website. Verify confirmation, rescheduling and cancellation using an authorized test booking. Until then, make telephone and email the primary real-contact actions and keep the demo clearly separate from the public conversion journey.

### 2. Visitors cannot tell how the consultation will take place

**Severity:** major  
**Page/component:** Both booking sections and preparation content  
**Source:** `src/pages/termin.astro:25`, `src/data/process.ts:127`, `src/scripts/booking.ts:100`

**What is wrong:** The website explains duration and cost but not whether the actual consultation is by telephone, video or in person. Instructions to bring or prepare photographs do not explain how Patrick receives them. The homepage’s compact calendar also hides event details, including the timezone control visible in the full calendar.

**Why it matters:** Nationwide visitors need to know whether travel or software is required, how they will be contacted and which timezone applies.

**Concrete fix:** Obtain Patrick’s actual consultation method and place it immediately above both calendars. Explain who initiates contact, how documents are shared and what the confirmation contains. Keep the selected timezone visible and changeable on the homepage. Use identical operational information in the event and confirmation.

### 3. Calendar failure leaves an excessively tall recovery panel

**Severity:** major  
**Page/component:** Booking fallback, particularly mobile  
**Source:** `src/components/booking/BookingEmbed.astro:85`, `:105`, `:133`

**What is wrong:** Blocking the calendar correctly triggers an error, but the 375 px booking frame remains approximately **1,658 px tall** on `/termin/`. The fallback text is vertically centered, and telephone/email links remain below the entire frame. On the homepage, the fallback button leads to another page using the same provider.

**Why it matters:** A visitor facing a failed booking tool must scroll through a large empty area to find a reliable alternative.

**Concrete fix:** Use a compact, content-height layout for failed and no-JavaScript states. Put clickable telephone and email alternatives inside the fallback alongside the external booking link. Offer the external calendar directly from either page, while retaining a separate link to preparation information.

### 4. The homepage’s first screen prioritizes credentials over the visitor’s outcome

**Severity:** major  
**Page/component:** Homepage hero  
**Source:** `src/pages/index.astro:50`

**What is wrong:** The headline repeats the category through “Tattoo Gutachter” and “Tattoogutachten”. The following paragraph begins with qualifications before explaining what the visitor gains. At 1280 × 850, the main in-content CTA falls below the first viewport; the header CTA remains available.

**Why it matters:** A distressed private client or time-poor professional must work to establish relevance before understanding the next step.

**Concrete fix:** Shorten the headline and lead with the practical outcome: independent assessment, documentation and clarity about whether a report helps. Follow with one compact qualification line. Bring the free, non-binding consultation promise and hero CTA higher without losing the dossier typography or authentic portrait. Do not imply compensation or a favorable finding.

### 5. Audience-specific pages are missing from primary navigation

**Severity:** major  
**Page/component:** Header, mobile menu, homepage audience section  
**Source:** `src/config/site.ts:87`, `src/pages/index.astro:146`

**What is wrong:** The primary navigation contains no audience entry. Homepage audience links appear after the services list and independence section; elsewhere, visitors often need the footer to discover them.

**Why it matters:** Studios, lawyers and courts cannot immediately confirm that the service accommodates their different situations.

**Concrete fix:** Add a clear `Für wen` navigation group on desktop and mobile. Provide early homepage links for private individuals, studios, lawyers and courts. Move the audience chooser directly below a concise opening trust section. Keep these links unnumbered.

### 6. Courts are routed through a consumer consultation funnel

**Severity:** major  
**Page/component:** Legal audience page and court-report service  
**Source:** `src/data/audiences.ts:136`, `src/pages/[audience].astro:79`, `src/pages/leistungen/[slug].astro:150`

**What is wrong:** Lawyers and courts share one page and the same free-consultation CTA. The court-report page inherits “Am Anfang steht eine kostenlose Erstberatung” and private written-commission wording from the generic service template.

**Why it matters:** This weakens professional relevance and conflicts with the site’s own distinction between private commissions and appointments by a court.

**Concrete fix:** Create distinct lawyer and court routes, either as separate pages or clearly separated sections with direct anchors. For lawyers, prioritize scope, questions, documents and an enquiry. For courts, prioritize expertise, availability, anticipated timescale and a confirmed contact route for appointment enquiries. Replace generic private-consultation copy on court-specific content. Request only minimal initial case information through the approved channel.

### 7. The service taxonomy asks visitors to choose between overlapping categories

**Severity:** minor  
**Page/component:** Service overview and homepage service list  
**Source:** `src/pages/leistungen/index.astro:51`, `src/data/services.ts:187`

**What is wrong:** Tattoo, piercing and hygiene are subjects; private and court reports are commissioning routes; disputes are situations. They appear as six equivalent choices. A failed-tattoo visitor could reasonably select three of them.

**Why it matters:** Visitors may browse repeatedly without understanding which service they need.

**Concrete fix:** Move the existing situation finder above the complete list. Group the list into subject and commissioning context, and explain that categories can overlap: a tattoo assessment can be commissioned privately. Preserve the existing pages and avoid implying that visitors must buy several separate services.

### 8. Independence is asserted more strongly than it is explained

**Severity:** major  
**Page/component:** Independence content and contact identity  
**Source:** `src/pages/index.astro:133`, `src/components/ui/TrustStrip.astro:24`, `src/data/faq.ts:240`, `src/config/site.ts:30`

**What is wrong:** A separate website is repeatedly presented as evidence of independence. The published contact address remains `Kurstadttattoo@web.de`, visibly tying enquiries to the studio. There is no practical explanation of how prior involvement or relationships are handled.

**Why it matters:** Private clients may fear industry allegiance; studios may worry about sharing information with another practitioner.

**Concrete fix:** Replace `Eigener Auftritt` as the principal independence proof with Patrick’s confirmed conflict-handling practice. Explain how relevant prior involvement is identified and addressed, without inventing a policy. Establish a dedicated expert-office mailbox before publishing it. Retain the clear statement that findings do not depend on the commissioning party.

### 9. Qualification claims need a clearer verification path

**Severity:** minor  
**Page/component:** About page, seal, court credentials  
**Source:** `src/pages/ueber-mich.astro:34`, `src/components/ui/Seal.astro:15`, `src/components/ui/CourtReference.astro:15`

**What is wrong:** The site repeats the seal and register number but provides no direct route to inspect supporting qualification evidence. “Sachverständiger am Landgericht Frankfurt am Main” is broader at first glance than the precise single-proceeding appointment explanation below it.

**Why it matters:** Professional purchasers need verifiable evidence, and abbreviated court wording can create an impression the detailed caveat then has to correct.

**Concrete fix:** Add a compact evidence section with approved certificate details, issuer, relevant dates and a verified register link where available. Make the seal inspectable at readable size. Use the precise “in einem Gerichtsverfahren … bestellt” wording consistently. Add further references only when documented and approved for publication; preserve the public-appointment distinction.

### 10. Confidentiality reassurance appears after the sensitive decision

**Severity:** major  
**Page/component:** Audience preparation, contact and booking sections  
**Source:** `src/data/faq.ts:207`, `src/pages/kontakt.astro:42`, `src/components/booking/BookingEmbed.astro:105`

**What is wrong:** Confidentiality is addressed mainly in the FAQ, while earlier content encourages preparation or emailing of photographs, correspondence and medical documents. The booking note describes technical data transfer rather than explaining what case information is needed initially.

**Why it matters:** Intimate images, client records and disputed studio work create hesitation that a generic privacy link does not resolve.

**Concrete fix:** Put a short, accurate confidentiality statement beside the first enquiry and preparation actions. Explain what is needed for initial contact and when/how sensitive documents should be provided. Add the confidentiality answer to relevant audience pages. Distinguish booking contact data from case materials; do not claim encryption, privileged confidentiality or a secure upload facility unless actually provided.

### 11. Timing information does not support an urgent decision

**Severity:** minor  
**Page/component:** Process, contact and audience pages  
**Source:** `src/pages/ablauf-kosten.astro:94`, `src/data/faq.ts:154`

**What is wrong:** Report timing is explained only as dependent on circumstances. Telephone/email enquiries have no response expectation, and there is no clear instruction for communicating an existing deadline.

**Why it matters:** Visitors cannot judge suitability when a claim, appointment or planned alteration is time-sensitive. Reich and Weber provide more concrete expectations in the supplied competitor analysis.

**Concrete fix:** Ask Patrick for sustainable response and turnaround expectations. Publish confirmed ranges with their conditions. Until available, explicitly ask visitors to state an existing deadline in their initial enquiry and explain that availability must be confirmed. Do not invent a service-level promise.

### 12. Cost transparency stops short of the practical budgeting questions

**Severity:** minor  
**Page/component:** `/ablauf-kosten/`  
**Source:** `src/data/process.ts:94`, `src/pages/ablauf-kosten.astro:54`

**What is wrong:** The distinction between free consultation and paid work is strong, but readers cannot tell how travel, additional investigation, tax or changes in scope are handled.

**Why it matters:** These uncertainties remain even when a fixed report price would be inappropriate.

**Concrete fix:** Add an operator-approved explanation of what the estimate includes and how additional work is agreed. Clarify applicable travel and tax treatment. Publish a rate or illustrative range only if Patrick supplies and approves it. Retain the existing written-cost-framework reassurance.

### 13. The private-client page delays the immediate first steps

**Severity:** minor  
**Page/component:** `/fuer-privatpersonen/`  
**Source:** `src/data/audiences.ts:53`, `src/content/ratgeber/tattoo-misslungen-was-tun.md:21`

**What is wrong:** The page begins with a long list of recognizable problems, followed by the service explanation. The practical guidance already available in the guide is several clicks or sections away.

**Why it matters:** A worried visitor first needs to know what to prepare and what to do next.

**Concrete fix:** Add a short early section linking to the existing guidance on documenting the current condition, keeping records and preparing for consultation. Include the existing boundary concerning medical complaints. Reuse reviewed content and retain the reassuring statement that missing documents should not prevent initial contact.

### 14. Contextual FAQs omit core objections and sometimes address the wrong subject

**Severity:** minor  
**Page/component:** Audience and service FAQ selections  
**Source:** `src/data/faq.ts:75`, `:154`, `:159`, `:207`

**What is wrong:** The piercing page asks whether a *tattoo* can be assessed from photographs. Cost, timing and confidentiality answers are absent from several audience/service selections because those entries lack matching tags.

**Why it matters:** Visitors reaching a specific page must leave it to resolve basic objections. Tattoo-specific wording makes piercing coverage feel secondary.

**Concrete fix:** Audit the question selection for each audience and service. Include applicable cost, timing, confidentiality and next-step questions. Create accurately worded piercing variants where necessary and adapt preparation advice for studio hygiene cases. Keep shared facts centralized while tailoring the visible questions.

### 15. Guide readers encounter more reading before a relevant next action

**Severity:** minor  
**Page/component:** All guide articles  
**Source:** `src/pages/ratgeber/[slug].astro:109`, `src/content/ratgeber/tattoo-misslungen-was-tun.md:38`

**What is wrong:** After the article, readers encounter up to six service/article cards before the closing CTA. The inline link labelled `kostenlose Erstberatung` in the failed-tattoo guide leads to the process page rather than booking.

**Why it matters:** Readers who have resolved their information need are pushed into another browsing loop.

**Concrete fix:** Add a restrained, context-specific consultation link immediately after each article’s answer or conclusion, before related content. Point booking-labelled links to `/termin/`; label process links as process information. Reduce the prominence of secondary reading without removing useful internal links.

### 16. Contact-oriented copy still makes the calendar the dominant action

**Severity:** minor  
**Page/component:** Contact hero and `/termin/` closing band  
**Source:** `src/pages/kontakt.astro:63`, `src/pages/termin.astro:132`

**What is wrong:** The contact hero offers only a booking button. On `/termin/`, “Lieber erst kurz sprechen?” is paired with the prominent button `Zum Kalender`, while telephone and email receive secondary treatment.

**Why it matters:** Visitors choosing an alternative contact route are sent back toward the action they were trying to avoid.

**Concrete fix:** Put clickable telephone and email actions directly in the contact hero. Change the “Lieber erst kurz sprechen?” band to a telephone or email primary action, keeping the calendar secondary. Confirm whether office visits require an appointment and state the actual arrangement beside the address.

### 17. The dedicated booking page places too much explanation before the calendar

**Severity:** minor  
**Page/component:** `/termin/`  
**Source:** `src/pages/termin.astro:65`

**What is wrong:** Visitors arriving through a service CTA first encounter the hero and a substantial explanation section before reaching the calendar. The `Zum Kalender` shortcut helps, but the default reading path repeats information already provided throughout the site.

**Why it matters:** High-intent visitors have already chosen to book and now need the tool plus essential reassurance.

**Concrete fix:** Place the calendar immediately after a compact summary of cost, duration and confirmed meeting method. Move the detailed consultation explanation below it. Retain preparation and post-booking guidance, with small anchor links for visitors who need them first.

### 18. The mobile privacy contents navigation appears after the document

**Severity:** minor  
**Page/component:** `/datenschutz/`, article layout  
**Source:** `src/pages/datenschutz.astro:224`, `src/layouts/ArticleLayout.astro:65`

**What is wrong:** The desktop contents list occupies the sidebar, but the mobile layout places that sidebar after the complete privacy text.

**Why it matters:** A visitor following the calendar’s privacy link cannot quickly locate booking or document-handling information.

**Concrete fix:** Render the contents navigation before the privacy text on mobile while retaining the desktop sidebar. Link the booking disclosure directly to `/datenschutz/#terminbuchung`. Keep the complete notice available.

### 19. Several introductions describe the website instead of helping the reader

**Severity:** polish  
**Page/component:** Service overview, audience pages, FAQ and guide index  
**Source:** `src/pages/leistungen/index.astro:55`, `src/pages/[audience].astro:153`, `src/pages/haeufige-fragen.astro:41`, `src/pages/ratgeber/index.astro:55`

**What is wrong:** Phrases such as “Jede Leistung hat eine eigene Seite” and “Jede Antwort beginnt mit dem Wesentlichen” explain content organization rather than answering a visitor’s concern.

**Why it matters:** They consume valuable introductory space and make otherwise personal, editorial content feel templated.

**Concrete fix:** Replace them with brief orientation grounded in the visitor’s task, or remove them when the heading already provides sufficient context. Maintain Sie tone, ordinary German punctuation and the dossier presentation. Add no decorative numbering, typographic quotation marks, arrows in copy or invented claims.

## Top 5 quick wins

1. **Make real contact the preview’s primary booking alternative** until Patrick’s production calendar is verified.
2. **Compact the failed-calendar state** and place telephone/email links inside it.
3. **Expose audience routes in the header and mobile menu**, with early homepage links.
4. **Correct misdirected CTAs:** link consultation-labelled guide links to booking and make “Lieber erst kurz sprechen?” lead to direct contact.
5. **Surface existing reassurance where decisions happen:** relevant cost and confidentiality answers, plus precise court-appointment wording.