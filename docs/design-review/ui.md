# UI and Visual Design Review

**Overall verdict: 7/10.** A credible editorial foundation with a good Newsreader/Schibsted Grotesk pairing, restrained oxblood accents, warm paper backgrounds, and authentic photography. The main weakness is composition: repeated section treatments, inconsistent alignment, and oversized supporting content make parts of the site feel assembled from a template. Refine the existing direction rather than redesigning it.

Reviewed on 12 November 2026 against `main` at `0f00d4a`: all 48 supplied screenshots covering 24 pages at 375 and 1280 px, relevant source files, live HTML and headers through curl, targeted browser checks, and the live 404 at both widths. No repository files changed. No Lighthouse or automated test suite run. [Review summary posted to the ticket](https://github.com/digitalfreedom-co-za/tattoogutachten.de/issues/11#issuecomment-6829126718).

The competitor analysis is directionally sound, with an important qualification: competitors have recognizable visual identities despite weaker execution. [Pascal Kurz](https://www.tattoogutachter.de/) uses corporate blue, prominent contact details, and a photographic slider. [Karoline Heydrich](https://www.tattoogutachten.com/) has a memorable monogram and tattoo imagery, but competing textures and translucent panels weaken hierarchy. [Ralf Reich](https://www.tattoo-gutachten.com/) uses restrained navigation and serif typography, although text over photography compromises clarity. [Daniel Weber](https://tattoo-gutachter.de/) uses monochrome tattoo photography, red accents, and a prominent certification seal. Wolf’s opportunity is a more disciplined dossier identity, supported by useful visual evidence and precise typography.

**Evidence exclusions:** displaced sticky headers and visible skip links in supplied captures are not reported as layout defects. Live checks showed the homepage FAQ fully visible after its reveal and the booking calendar successfully loaded. Empty calendar and lower-page captures are therefore insufficient evidence of broken content.

1. **Major — Repetitive section rhythm weakens hierarchy**

   **Location:** `src/styles/global.css:55`, `src/components/ui/Section.astro:32`, `src/components/ui/Section.astro:82`, `src/pages/leistungen/[slug].astro:39`.

   **What is wrong:** Almost every section receives the same generous vertical padding, heading treatment, and heading-to-content gap. Service and audience templates alternate paper tones mechanically. Short supporting explanations become large visual chapters.

   **Why it matters:** Readers cannot distinguish primary information from supporting detail by scanning. Repeated beige bands are the strongest source of the generic template impression.

   **Concrete fix:** Introduce two deliberate section densities. Retain generous spacing for major chapters; use approximately 48–64 px desktop and 40–48 px mobile padding for supporting sections, with 24–32 px heading-to-body gaps. Assign background changes by content purpose instead of section parity. Keep numbered process steps.

2. **Major — The dossier grid lacks a consistent reading axis**

   **Location:** `src/components/ui/Section.astro:38`, `src/components/ui/Section.astro:82`, `src/components/ui/ServiceList.astro:22`, `src/components/ui/ArticleList.astro:25`, `src/pages/leistungen/[slug].astro:63`.

   **What is wrong:** Section titles begin after a three-column margin, but explanatory paragraphs often restart at the container’s left edge. Service and article rows introduce another alignment through their fixed 11rem label column. The reader repeatedly changes horizontal position.

   **Why it matters:** A dossier aesthetic depends on predictable relationships between margin notes, headings, and body text. The current shifts look incidental rather than editorial.

   **Concrete fix:** Establish one shared desktop margin width and gutter. Align narrative text and list titles beneath section titles. Let comparison tables and genuinely comparative layouts span the full grid intentionally. Apply the same alignment to contact, audience, service, and index pages.

3. **Minor — Homepage opening contains too much competing introductory material**

   **Location:** `src/pages/index.astro:48`, `src/pages/index.astro:50`, `src/pages/index.astro:54`, `src/pages/index.astro:58`.

   **What is wrong:** The office masthead, professional-role eyebrow, large headline, and lengthy lead all precede the main action. At 1280×900, the hero’s booking button is below the viewport. At 375 px, the opening section measures approximately 1,351 px tall.

   **Why it matters:** The otherwise strong headline loses impact within an extended introduction. The portrait and supporting credentials arrive late on mobile.

   **Concrete fix:** Keep the distinctive headline but shorten the lead to two factual sentences. Consolidate the office identification and role into one introductory block, and reduce the stacked gaps above and below the headline. Move the detailed experience explanation into the existing qualification content.

4. **Minor — Automatic display-heading hyphenation produces awkward breaks**

   **Location:** `src/styles/global.css:90`, `src/components/ui/PageHeader.astro:36`, `src/pages/ueber-mich.astro:89`.

   **What is wrong:** Global `hyphens: auto` splits prominent words. Supplied desktop captures show breaks within “fotografieren” and the emphasized “Sachverständiger”. These are highly visible typographic compromises.

   **Why it matters:** Broken display words undermine the composed, professional character of the serif typography, especially within italic emphasis.

   **Concrete fix:** Use a separate wrapping policy for display headings. Disable automatic hyphenation where the available measure permits whole words; adjust heading width or scale before forcing a break. Reserve deliberate discretionary hyphenation for compounds that cannot fit on narrow screens. Check each long title at both review widths without inserting unconditional `<br>` elements.

5. **Major — The repeated expert portrait is poorly suited to professional identification**

   **Location:** `src/components/ui/ExpertCard.astro:8`, `src/components/ui/ExpertCard.astro:19`, `src/pages/ueber-mich.astro:239`.

   **What is wrong:** The close-up looks down onto Patrick’s face and crops tightly around his forehead and head. Its angle and blue clothing differ markedly from the principal studio portraits. Repetition across service pages makes this inconsistency prominent.

   **Why it matters:** This image functions as the expert’s identification portrait. It feels more informal and less composed than the surrounding professional material.

   **Concrete fix:** Use a consistent head-and-shoulders crop from the existing front-facing studio portrait, retaining the complete face and adequate headroom. Remove the small offset close-up from the About page, where it adds another portrait without additional information. Keep genuine source photography and natural proportions.

6. **Minor — The expert card visually outweighs the service explanation**

   **Location:** `src/components/ui/ExpertCard.astro:17`, `src/components/ui/ExpertCard.astro:35`, `src/components/ui/ExpertCard.astro:45`.

   **What is wrong:** The full border, portrait, five credential statements, repeated rules, seal, and link form a substantial panel. In the live 1280 px service-page check, it measured approximately 638 px tall, exceeding the adjacent explanatory text.

   **Why it matters:** A supporting attribution block becomes the dominant object. On mobile, it interrupts the service narrative with a long credential recap.

   **Concrete fix:** Provide a compact service-page presentation: portrait, name, concise existing certification and experience facts, and a qualification link. Keep the complete credential presentation on About. Use a top rule instead of a full enclosure for this supporting variant.

7. **Minor — Trust-strip typography prioritizes administrative detail over recognition**

   **Location:** `src/components/ui/TrustStrip.astro:17`, `src/components/ui/TrustStrip.astro:34`.

   **What is wrong:** The register number receives a double-width position, while certification, experience, court appointment, and supporting qualifications compete in small cells. Labels are 11 px and supporting notes use `text-xs`.

   **Why it matters:** The strip resembles dense administrative metadata before it communicates the expert’s principal qualifications. Small explanatory text also weakens the relationship between claims and their qualifications.

   **Concrete fix:** Lead with certification, experience, and court appointment. Place the register number beside the certification as secondary information. Raise explanatory text to at least 14 px and keep “in einem Gerichtsverfahren” visibly attached to the court statement. Retain all existing qualifications and caveats.

8. **Major — The article comparison table is cramped and inconsistent with the site’s comparison system**

   **Location:** `src/content/ratgeber/privatgutachten-oder-gerichtsgutachten.md:25`, `src/layouts/ArticleLayout.astro:63`, `src/styles/global.css:219`, `src/components/ui/CompareTable.astro:19`.

   **What is wrong:** The Markdown table remains three columns inside the narrow article measure. Row labels break into multiple fragments even in the desktop capture; mobile compounds the problem. Equivalent comparisons elsewhere use a more readable stacked mobile layout.

   **Why it matters:** Comparison requires scanning across related values. Fragmented labels and narrow cells undermine that purpose.

   **Concrete fix:** Give this article table the existing comparison component’s responsive treatment while preserving its four rows and wording. Stack labelled values on mobile and allow sufficient desktop width for row labels. Preserve table semantics; do not solve the problem by reducing type size.

9. **Major — Related-content blocks overpower short articles**

   **Location:** `src/pages/ratgeber/[slug].astro:109`, `src/pages/ratgeber/[slug].astro:121`.

   **What is wrong:** Every article ends with three service cards and three article cards containing substantial summaries. At 375 px, these become six successive panels after an already complete short article.

   **Why it matters:** Secondary navigation receives disproportionate visual weight. It also introduces the familiar repeated-card aesthetic that the dossier direction should avoid.

   **Concrete fix:** Present related services as a compact ruled list and further reading as title-led editorial rows. Retain all destinations, but remove repeated full leads from these recommendations. Use smaller headings and tighter spacing than the article body’s principal sections.

10. **Minor — Filled cards lack internal horizontal padding**

    **Location:** `src/components/ui/Card.astro:23`, `src/components/ui/Card.astro:30`.

    **What is wrong:** Cards have a paper background and vertical padding but no horizontal padding. On deeper backgrounds, text sits directly against the visible panel edge. The same component appears frameless on paper and boxed on deeper paper.

    **Why it matters:** The component’s visual meaning changes with its parent background, and the filled version looks unfinished.

    **Concrete fix:** Separate the two presentations explicitly. Use transparent, top-ruled editorial cards without lateral padding for related links. Where a filled panel is intentional, provide consistent 20–24 px internal padding. Keep one presentation within each group.

11. **Minor — The mobile header loses the recognizable brand mark**

    **Location:** `src/components/layout/Logo.astro:32`, `src/components/layout/Logo.astro:34`.

    **What is wrong:** Between 360 and 499 px, both the RW mark and office descriptor disappear. At 375 px, the header identifies the business only through the small generic word “Tattoogutachten”.

    **Why it matters:** The mobile presentation loses the visual identifier seen on desktop, while the booking and menu controls dominate.

    **Concrete fix:** Create a compact, stable mobile lockup using a small RW mark and short wordmark. Adjust the lockup’s internal spacing and type size to fit alongside the existing controls without reducing their target sizes. Check continuity across the current 360 and 500 px thresholds.

12. **Minor — Article metadata precedes the headline on mobile**

    **Location:** `src/components/ui/PageHeader.astro:28`, `src/layouts/ArticleLayout.astro:41`.

    **What is wrong:** The desktop margin column stacks above the headline, carrying category, author, publication date, and reading time. Mobile articles therefore introduce bibliographic detail before their subject.

    **Why it matters:** The headline should establish the article’s relevance first. The desktop marginal-note hierarchy does not translate well when simply stacked.

    **Concrete fix:** Keep a compact category above the mobile headline, then place author, date, and reading time below it in a wrapping metadata row. Preserve the desktop margin layout. Avoid repeating the author’s full attribution immediately after the article unless it adds information.

13. **Major — The mobile booking bar overlaps the homepage’s own action**

    **Location:** `src/components/layout/StickyCta.astro:69`, `src/pages/index.astro:63`.

    **What is wrong:** In the live 375×812 check, the hero booking button began around y=714 while the fixed booking bar began around y=730, covering most of that button. Current suppression observes booking sections and the footer, but not the hero action.

    **Why it matters:** Two competing booking treatments visibly collide. This is a verified viewport issue, separate from the displaced bars in full-page captures.

    **Concrete fix:** Keep the fixed bar hidden throughout the opening hero and show it after the hero action has scrolled above the viewport. Also suppress it while a closing booking CTA is visible. Verify that each viewport presents one unobstructed primary booking action.

14. **Minor — The closing CTA and footer form an oversized, repetitive dark ending**

    **Location:** `src/components/ui/CtaBand.astro:19`, `src/components/ui/CtaBand.astro:28`, `src/components/layout/Footer.astro:15`.

    **What is wrong:** The closing CTA repeats telephone, email, and office address immediately before the footer repeats those details. Both use the same dark background, and their padding combines into a long, weakly differentiated ending.

    **Why it matters:** The closing statement loses prominence within repeated contact information. On mobile, the ending occupies many screens relative to the short content above it.

    **Concrete fix:** Let the CTA contain the invitation, booking button, and one compact alternative contact line. Keep the full address and contact directory in the footer. Add a clear separating rule and reduce the accumulated padding at their junction.

15. **Minor — The photography guide misses a useful opportunity for distinctive visual explanation**

    **Location:** `src/content/ratgeber/tattoo-fotografieren-fuer-die-begutachtung.md:19`, `src/pages/ratgeber/[slug].astro:81`.

    **What is wrong:** The article explains overview photographs, close-ups, lighting, and camera position entirely through prose and bullets. Its visual presentation is indistinguishable from the other guides.

    **Why it matters:** This is naturally visual material. A useful original figure would make the site more distinctive through expertise rather than decoration.

    **Concrete fix:** Add a restrained schematic illustrating an overview frame and a detail frame, with captions drawn from the existing instructions. Use the site’s rules, typography, and oxblood annotations. Clearly identify it as an illustration; do not invent a client case, diagnosis, testimonial, or example defect.

**Top 5 quick wins**

- Replace the repeated close-up portrait with a consistent crop from existing photography.
- Prevent the mobile booking bar from appearing over the opening hero.
- Correct the conspicuous display-heading word breaks.
- Give the article comparison table the established responsive comparison treatment.
- Replace the six article-ending cards with compact, ruled related-content lists.