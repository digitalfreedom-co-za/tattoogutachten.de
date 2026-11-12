# Mobile, Responsive and Interaction Design Review

**Overall verdict: 7/10.** The editorial dossier design adapts well overall. Typography, image crops, stacked service comparisons, and large primary buttons provide a strong foundation. The main weaknesses are a reproducible mobile-menu navigation bug, undersized secondary controls, and excessive space around booking states.

Reviewed `main` at `0f00d4a`, all 50 supplied screenshots, source components, and live HTML using curl. Live Chromium checks covered 25 pages at **320, 360, 390, 768, 1024, 1280, and 1440 px**, plus targeted 404 and interaction checks.

No document-level horizontal overflow occurred in the 175 breakpoint checks. No-JavaScript navigation and content remained available. Reduced-motion handling disables the principal reveal and parallax effects. German browser locale correctly produces German calendar labels and 24-hour times. Fixed-header placement in full-page captures was treated as a capture artifact.

No files changed or bookings submitted. Physical-device testing and hardware performance profiling remain outstanding. [Ticket summary posted](https://github.com/digitalfreedom-co-za/tattoogutachten.de/issues/11#issuecomment-6829145690).

1. **Major — Header booking action leaves the mobile menu open**

   **Location:** `src/components/layout/Header.astro:42`, `:192`, `:237`.

   **Problem:** On the home page, open the mobile menu and tap the header’s “Termin buchen” button. The URL changes to `#termin`, but the menu remains open, document scrolling remains locked, and `main` remains inert. The closing handler only covers links inside the menu panel.

   **Why it matters:** A prominent booking action appears unresponsive and leaves the visitor separated from its destination.

   **Concrete fix:** Close the menu and restore page interaction before activating any header link, including the logo and booking button. Handle same-document navigation explicitly. Verify this sequence on both `/` and `/termin/`, including focus placement after an anchor jump.

2. **Major — Secondary navigation and contact targets miss the 44 px minimum**

   **Location:** `src/components/layout/Logo.astro:18`; `Header.astro:80`; `Footer.astro:29`, `:45`, `:87`; `src/components/ui/Breadcrumbs.astro:26`; `CtaBand.astro:31`; `src/pages/kontakt.astro:106`; `src/pages/ratgeber/[slug].astro:90`.

   **Problem:** Measurements at 375 px include an **18 px-high logo link**, **20 px-high contact links**, **18 px-high menu contact links**, and roughly **18–25 px-high footer links**. Breadcrumbs and standalone article-sidebar links similarly lack padded targets.

   **Why it matters:** These are frequent navigation and recovery actions. Small text-only hit areas require precision and are particularly awkward near the bottom of a phone.

   **Concrete fix:** Give standalone links at least **44 × 44 px** hit areas using block or inline-flex layouts and padding. Include icons within contact links’ clickable areas. Preserve the restrained typography; enlarge the interactive box rather than the lettering. Do not indiscriminately apply block sizing to links embedded in prose.

3. **Major — Calendar controls and booking fields are too small**

   **Location:** `src/scripts/booking.ts:92`; `src/components/booking/BookingEmbed.astro:54`. Controls themselves are rendered inside the external Cal.com iframe.

   **Problem:** At 320 px, calendar dates measured approximately **31 × 31 px**, month-navigation buttons **36 × 36 px**, and time-slot buttons **36 px high**. At 360 px, name and email fields measured **32 px high**, with **14 px text**.

   **Why it matters:** The central conversion flow fails the requested 44 px touch-target standard. Small field text also warrants an iOS focus-zoom check.

   **Concrete fix:** Make date selection, month navigation, time slots, and form controls at least 44 px high and wide where applicable, with input text of at least 16 px. A seven-column grid cannot fit seven 44 px targets into the current 280 px content width at 320 px; use a mobile date-list or step-based presentation at that size. Implement through supported provider customization or a replacement mobile booking surface. Parent-page CSS cannot style cross-origin iframe controls.

4. **Major — Booking height reservation persists in fallback and form states**

   **Location:** `src/components/booking/BookingEmbed.astro:86`, `:133`, `:137`; `src/scripts/booking.ts:81`.

   **Problem:** At 320 px, both no-JavaScript and blocked-script states retained a frame approximately **1,624 px high**, with fallback instructions vertically centered. At 360 px, selecting a time produced a substantially shorter booking form, but the outer frame remained approximately **1,649 px high**.

   **Why it matters:** Visitors encounter long empty stretches, fallback actions appear late, and contact alternatives remain unnecessarily far below the booking interface.

   **Concrete fix:** Reserve calendar height only while loading. In `idle` and `failed` states, place the fallback in normal document flow and remove the calendar minimum height. Once ready, let the wrapper follow the iframe’s actual height, including subsequent form steps. Keep a sensible initial reservation without permanently enforcing the month-view dimensions.

5. **Minor — Home-page metadata runs behind the portrait at tablet width**

   **Location:** `src/pages/index.astro:50`.

   **Problem:** At 768 px, the two non-wrapping metadata labels require approximately 521 px including their gap, but their text column is approximately 402 px wide. “Bad Nauheim, bundesweit tätig” extends beyond the rule and is obscured by the portrait.

   **Why it matters:** The page technically avoids horizontal scrolling while still losing visible content. This weakens the otherwise deliberate dossier header.

   **Concrete fix:** Stack or wrap the metadata at intermediate widths, or show the second label only when the actual text column has enough room. Use available container width rather than the current 420 px viewport threshold.

6. **Minor — Reveal staggering delays content that enters separately**

   **Location:** `src/scripts/motion.ts:15`; `src/styles/global.css:246`; `src/components/ui/Faq.astro:24`.

   **Problem:** Every item receives a delay based on its position in the entire group. The final item in the FAQ cost group has a measured **900 ms delay followed by a 900 ms transition**, even when it enters the viewport independently.

   **Why it matters:** On phones, rows usually enter one at a time. Visitors can reach an answer’s position before the answer becomes visible, making scrolling feel slower than necessary.

   **Concrete fix:** Remove sequential delays for stacked mobile content. On wider layouts, stagger only items entering together and cap the delay around 150–200 ms. Shorten routine text reveals to roughly 250–400 ms. Keep essential headings and primary actions immediately available, and reveal focused content without waiting.

7. **Minor — Sticky CTA becomes disproportionately tall at 320 px**

   **Location:** `src/components/layout/StickyCta.astro:16`, `:22`, `:62`.

   **Problem:** At 320 px, the fixed-width button leaves little room for the supporting sentence, which wraps into four lines. The bottom bar measured **101 px high**. Together with the **69 px header**, fixed interface elements occupy about 30% of a 568 px-high viewport. The reserved bottom padding is only 72 px before safe-area adjustment.

   **Why it matters:** Reading space becomes cramped on the smallest supported phones, and the reserved space does not reflect the component’s actual height.

   **Concrete fix:** Use a compact layout below 360 px: retain one prominent booking button and shorten or omit the supporting sentence. Match bottom clearance to the rendered bar height, including safe-area padding. Verify at 320 × 568 as well as taller phones.

8. **Minor — Sticky CTA disappears before the calendar is reachable**

   **Location:** `src/components/layout/StickyCta.astro:69`, `:82`; `src/components/ui/Section.astro:33`.

   **Problem:** Any intersection with the entire booking section hides the bar. At 390 × 844, it disappeared when the section began around **814 px**, while the actual calendar frame was still around **1,458 px** from the viewport top.

   **Why it matters:** The thumb-reachable booking shortcut disappears while the visitor still has substantial introductory content to scroll through.

   **Concrete fix:** Observe the calendar frame or a dedicated sentinel immediately before the interactive booking area. Hide the bar when that area approaches the usable viewport, accounting for the sticky header and bottom bar. Preserve the existing footer suppression.

9. **Minor — Privacy-page contents navigation comes after the document on mobile**

   **Location:** `src/pages/datenschutz.astro:224`; `src/layouts/ArticleLayout.astro:62`.

   **Problem:** The “Auf dieser Seite” navigation occupies the desktop sidebar but follows the entire privacy text below 1024 px.

   **Why it matters:** On a long phone page, navigation intended to help readers find a section is only encountered after they have passed every section.

   **Concrete fix:** Position the privacy contents navigation between the introduction and document body on mobile and tablet. Preserve its sidebar placement on desktop. Use a page-specific layout option so author and related-service sidebars do not all move above their articles. Give contents links 44 px-high targets.

10. **Polish — Reveal CSS overrides intended hover transitions**

    **Location:** `src/styles/global.css:246`; `src/components/ui/ServiceList.astro:21`; `ArticleList.astro:24`; `Card.astro:23`.

    **Problem:** The global reveal rule replaces these components’ transition properties with `opacity, transform`. This was confirmed on a revealed service row. Their declared background-color transitions therefore no longer run as intended.

    **Why it matters:** Rows and cards change background abruptly while their icons animate, producing inconsistent interaction feedback.

    **Concrete fix:** Compose reveal and hover transitions explicitly, or apply them to separate elements. Preserve a short background-color transition without inheriting the reveal delay. Provide equivalent focus-visible feedback and limit hover-specific movement to devices that support hover.

**Top 5 quick wins**

- Close the mobile menu before every header-link navigation.
- Remove calendar height reservations from no-JavaScript and failed-load states.
- Expand standalone contact, footer, logo, and breadcrumb hit areas to 44 px.
- Wrap or conditionally hide the tablet hero’s second metadata label.
- Remove group-index reveal delays from vertically stacked mobile content.