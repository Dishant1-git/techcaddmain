@AGENTS.md

# PROJECT BRAIN — TechCADD North India website

> Read this first. It maps the whole app so you don't need to re-scan the codebase.
> **Keep it updated** whenever you add/rename sections, components, routes or data fields.

## What this is
Marketing website for **TechCADD** — IT / AI / CAD training institute (HQ Jalandhar, Punjab).
Header/footer structure mirrors techcaddjalandhar.com; content is **North-India focused**
(Punjab, Chandigarh Tricity, Haryana, HP, J&K, Delhi NCR). Goal: "international IT institute" look,
modern sections, scroll animations, top performance.

## Stack
- **Next.js 16.3 (App Router, Turbopack)**, React 19.2, TypeScript — read `node_modules/next/dist/docs/` before using new APIs (see AGENTS.md). `params` are Promises (`await params`), use `PageProps<"/route">` / `LayoutProps<"/">` global helpers.
- **Tailwind CSS v4** — config lives in CSS (`src/app/globals.css` `@theme`), no tailwind.config file. Custom classes are declared with `@utility` (NOT `@layer components`) so they can be `@apply`-ed. Gradients: `bg-linear-to-r` (v4 name).
- **lucide-react** icons (no brand icons in lucide → social SVGs are inline in `ui/SocialIcons.tsx`).
- **simple-icons** brand logos for the Technologies orbit — resolved server-side in `Technologies.tsx` (only used paths reach the client). Brands missing from simple-icons (AWS, Azure, Power BI, Tableau, SolidWorks, Revit, Photoshop, Oracle, CATIA, MATLAB) use `mono` + `color` monogram in `techStack`.
- No animation library. Few images (logo PNGs in /public/logo, nav photos, home courses bento photos — all below the fold except the logo); other visuals are CSS gradients/SVG → fast LCP.
- Commands: `npm run dev` · `npm run build` · `npm run lint` · `npm start`.

## Golden rule: content lives in ONE file (plus one satellite for Guidance)
**`src/data/site.ts`** = single source of truth. To change text, phone, courses, branches, stats,
FAQs, testimonials, blogs, footer links → edit this file only. Components just render it.
Exports: `about` (home #about copy/stats/pillars/photos), `site` (name/phone/email/address/hours/rating/socials/url), `branches`, `regions`, `nav` (type `NavItem`: children = dropdown, `mega` = 2-col panel, `featured` = About photo panel, `skills` = AI panel, `columns` = Courses panel, `tiles` = Internship panel, `highlight` = AI pill),
`heroStats`, `categories`, `courses` (type `Course`), `aiProgram`, `steps`, `whyUs` (+ `points` tags) & `whyUsIntro`, `difference` (home #difference switch stage: rows + `cv` labels), `programs`,
`courseBento` (home #courses bento text/links/photos), `placementStats`, `recruiters`, `techStack` (type `TechItem`), `testimonials`, `faqs`, `blogs`, `footerLinks`, `footerLegal`,
EXCEPTION: Courses-dropdown pages live in `src/data/course-pages/` (index.ts = groups + `courseCommon` shared blocks,
types.ts = `CoursePage`, one file per group: programming / ai-data / marketing (+ marketing-b) / cyber-cloud (+ cyber-cloud-b) / more = "More Courses" group). Adding one: add an entry to
the group file + point its `nav` Courses link at `/courses/<slug>` → page, sitemap, hub card are automatic.
EXCEPTION 2: Internship & Training dropdown pages live in `src/data/training/` (index.ts = `trainingCommon` shared blocks:
tracks/heroBadges/heroFacts/whatYouGet/credentials/stats/certificates/loop/why/comparison/modes/faqs; types.ts = `TrainingPage`;
programs-a/b/c.ts = 12 programs). Adding one: add an entry + point its `nav` tile at `/training/<slug>` → page, sitemap, hub card automatic.
EXCEPTION 3: After 12th dropdown pages live in `src/data/after-12th/` — a page = subject × duration. subjects-a/b.ts = 10 `A12Subject`s
(each a 9-month roadmap: month = title/summary/6 topics/tools/skill/project, + statement, contrast, roles, faqs); index.ts = `a12Tiers`
(3/4/6/9 months), `offered` (which subjects per duration), generated `a12Pages` (slug `<months>-month-<subject>`), `a12Common`, `a12Faqs()`.
Adding one: add the subject slug to `offered` + a `nav` link at `/after-12th/<slug>` → page, sitemap, hub card automatic.
EXCEPTION 4: the About pages' content lives in `src/data/about.ts` (`about`: images, hero, teach, ecosystem, matters, audience, journey,
difference, domains, approach, industry, recognition, timeline, belief, cta; `missionVision`: hero, mission, vision, future). Hero stats reuse `heroStats`.
`aiCourses` (type `AiCourse`, one per AI-dropdown link → `/ai-courses/<slug>`), `aiMentors`, `aiCourseCommon` (batches, EMI,
includes, certification, placement, shared FAQs), `aiTestimonials`.
- Adding an AI course: add to `aiCourses` + a link in `nav` AI `skills` groups → page, metadata, sitemap, hub card are automatic.
EXCEPTION: the Resources▾Guidance feature's content (4 full landing pages) lives in `src/data/guidance.ts`, not `site.ts` —
same rule (components only render it). Exports `guidanceSummaries` (home preview + hub cards) + one content object per
topic: `careerCounselling`, `mentorship`, `aiMarketing`, `freelancing`. Adding a 5th topic: add a summary + content object
there, add `src/app/guidance/<slug>/page.tsx`, and point its 4 links in `site.ts`'s Resources▾Guidance column at it by hand
(unlike branches/courses, this wiring isn't generated from the array).
- `icon` fields are string names → must exist in the map in `src/components/ui/Icon.tsx` (add new ones there).
- `courses[].category` must match a `categories[].id`.
- Adding a branch to `branches` auto-creates `/branches/<slug>`, adds it to header dropdown, footer, sitemap, demo form.

**`src/data/guidance.ts`** is a deliberate second content file — same rule (components only render it),
split out purely because the Guidance feature's copy (4 full landing pages) is too large for `site.ts` to
stay readable. Exports `guidanceSummaries` (drives the home preview cards + hub's big cards) and one full
content object per topic: `careerCounselling`, `mentorship`, `aiMarketing`, `freelancing`. Adding a 5th
guidance topic means: add a summary to `guidanceSummaries`, add its content object, add a page at
`src/app/guidance/<slug>/page.tsx`, and add its nav links in `site.ts`'s Resources▾Guidance column — none
of this is generated from the array (unlike branches), it's wired by hand.

## File map
```
src/app/
  layout.tsx            Root: fonts (Inter body, Outfit headings since 2026-10-07; CSS vars --font-inter / --font-outfit), SEO metadata, Header+Footer, ScrollAnimator, FloatingActions
  page.tsx              HOME = ordered list of sections + JSON-LD (EducationalOrganization + FAQPage). Reorder sections here.
  globals.css           Design tokens (@theme colors brand/accent/ink, fonts, animations), @utility classes, scroll-reveal CSS
  branches/[slug]/page.tsx  SSG page per branch (generateStaticParams, dynamicParams=false) reusing home sections
  about/page.tsx            "About techcadd" (About Us dropdown → /about): SITE THEME, 14 sections from components/about/
                            AboutSections.tsx in page order — AboutHero (dark, team photo, heroStats bar) · AboutTeach (chips) · AboutEcosystem ·
                            AboutMatters (.tr-fill statement) · AboutAudience (6 numbered cards) · AboutJourney (.tr-rail 4 steps) ·
                            AboutDifference (dark bento) · AboutDomains · AboutApproach · AboutIndustry · AboutRecognition (dark) ·
                            AboutTimeline (zig-zag .timeline, year cards) · AboutBelief · AboutCta (#get-started, reuses home/DemoForm). JSON-LD AboutPage + BreadcrumbList.
  about/mission-vision/page.tsx  "Mission and Vision" (About Us dropdown): SITE THEME, 5 sections from components/about/MissionSections.tsx —
                            MvHero (dark, jump links) · MvMission (#mission, 5 numbered pillars) · MvVision (#vision, "Future-ready by 2030"
                            panel + goals) · MvFuture (#future, dark .tr-fill statement + fields) · about/AboutCta. Content: `missionVision` in data/about.ts.
  about/founder/page.tsx    "Our Founder" (About Us dropdown → /about/founder): mirrors techcaddjalandhar.com/about/founder in the SITE THEME, 9 sections from
                            components/founder/FounderSections.tsx in page order — FounderHero (dark, portrait, drifting rings) · FounderMeet (#meet, ghost "ABOUT",
                            stat band) · FounderGallery (2-row on-stage photo marquee, hover zoom) · FounderRoles (4 overlapping ribbons) ·
                            FounderJourneySection → FounderJourney ("use client": sticky cross-fading photo stage, chapter tabs, typed line + replay, 6 chapter
                            cards; NO overflow-hidden on the section) · FounderClosing · FounderTestimonialsSection → FounderTestimonials ("use client"
                            stacked-card carousel, auto 6s, swipe, ←/→) · FounderReelsSection (#reels) → FounderReels ("use client" Instagram embed cover-flow: live drag with momentum, auto-advance 5s, pauses on hover/playing, `shape: "landscape"` per reel in `founderReels.items`) ·
                            FounderConnect (Instagram + LinkedIn). Content + photo imports: src/data/founder.ts; photos: src/assets/founder/; CSS: `.fnd-*` block in globals.css.
  ai-courses/page.tsx       AI hub (all AI course cards) — target of the AI pill + "Explore AI"
  courses/page.tsx          ALL-COURSES page (layout mirrors techcaddjalandhar.com/courses, site theme): dark hero ("Courses" pill, h1, lead, "Book a free demo
                            class" → lead popup) + course-page/CourseSearch ("use client": search box with "/" shortcut, then one section of compact tiles per
                            group — brand logo or monogram, name, "Jalandhar · Live projects", arrow; empty groups hide while searching; empty state).
                            Sections built server-side: one per courseGroup (a tile per course page) + one per More Courses catalog page (a tile per
                            course name). Tile logos: `logoRules` in the page (simple-icons, resolved server-side; monogram fallback).
  courses/[slug]/page.tsx   SSG page per Courses-dropdown link (27): NEUMORPHIC, light hero (no side card), NO pricing,
                            17 sections + JSON-LD (Course w/o offers, BreadcrumbList, FAQPage)
  training/page.tsx + [slug]/page.tsx  Internship & Training hub + 12 SSG slug pages (dynamicParams=false) in the SITE THEME
                            (reference page supplied only the section list), NO pricing/salary, 21 sections + JSON-LD
  after-12th/page.tsx + [slug]/page.tsx  After 12th hub (grouped by duration) + 29 SSG slug pages (dynamicParams=false):
                            NEUMORPHISM (bg-neu) + SOFT UI (bg-soft) alternating, NO pricing/salary, 19 sections + JSON-LD
  ai-courses/[slug]/page.tsx SSG AI course page: 13 sections + JSON-LD (Course, BreadcrumbList, FAQPage). Spec: docs/ai-course-page.md
  guidance/page.tsx         Hub page: <GuidanceSection headingLevel="h1"/> (own h1) + "Find the Guidance You Need"
                             big-card grid (GuidanceCard × 4, from guidanceSummaries) + Testimonials + GuidanceCta.
  guidance/career-counselling/page.tsx   Hero + Why + What You Get + Who Can Benefit + How It Works + Career
                                          Paths (#career-paths anchor) + Why Choose Us (stats+trust) + FAQ + CTA.
  guidance/mentorship/page.tsx           Hero + Why + What Your Mentor Helps With + Process + Categories +
                                          Mentor profile grid (MentorGrid) + Testimonials + FAQ + CTA.
  guidance/ai-marketing/page.tsx         Hero + What Is AI Marketing (#what-is anchor) + Capabilities + Tools
                                          (LogoGrid, no-affiliation disclaimer) + Workflow (WorkflowStrip) +
                                          Benefits + Use Cases + FAQ + CTA.
  guidance/freelancing/page.tsx          Hero + Why + Skills (#skills anchor) + How It Works + Platforms
                                          (LogoGrid, no-affiliation disclaimer) + Build Your Profile + First
                                          Client roadmap + Mistakes to Avoid + FAQ + CTA.
  faq/page.tsx              /faq: hero + FaqTabs (components/faq, "use client": category tabs + cross-category search) + CTA, FAQPage JSON-LD.
                            Content in src/data/faq-page.ts (`faqCategories`, EXACTLY 5 Q&As per category). Linked from footer + home #faq "See all questions".
  reviews/page.tsx          /reviews: dark hero (rating stats) + components/reviews/ReviewGrid ("use client": first 6 shown, "See more" reveals the rest) + CTA,
                            Review JSON-LD. Content in src/data/reviews.ts (`reviews`, `reviewsInitial`, `reviewStats`). Linked from Resources▾ Help & Community + footer.
  college-partnerships/page.tsx  /college-partnerships (Resources▾ Help & Community): dark hero + stats, hex initials grid of partner institutions
                            (NO real logos — add images later), 6 partnership formats, 4-step process, CTA. Content in src/data/college-partners.ts (SAMPLE).
  sitemap.ts / robots.ts / not-found.tsx
src/components/
  guidance/  Shared building blocks for every /guidance/* page (data-driven from src/data/guidance.ts):
             GuidanceHero (dark hero shell: breadcrumb, eyebrow, gradient-highlight h1, 2 CTAs, optional stat
             row) · ServiceCard (compact "Explore More →" card, home preview) · GuidanceCard (large numbered
             card w/ arrow, hub page) · FeatureGrid (flexible icon+title(+text) grid; `compact` = icon+title
             chip, no body text — reused for "What You Get", "Career Paths", "Benefits", "Mistakes", etc.) ·
             StepsTimeline (numbered circular-icon steps, same visual as home HowItWorks) · WorkflowStrip
             (horizontal Research→Strategy→…→Optimization flow with arrows) · LogoGrid (initials-badge tiles
             for AI tools / freelance platforms + a REQUIRED disclaimer prop — no real logos, no affiliation
             claims) · MentorGrid (avatar-initials + rating + "View Profile") · GuidanceFaq (topic-scoped
             accordion, same pattern as home Faq) · GuidanceCta (final banner, same gradient as home DemoCta).
  layout/  Header ("use client"): DARK navy sticky bar (bg-ink-950 + faint grid) matching the official techcadd header —
           white "techcadd™" wordmark, menu from `nav` in site.ts (Home, About Us▾, Founder (plain link → /about/founder, added 2026-10-07), AI✦▾ blue pill with orbiting light border (`.ai-glow`) + twinkling star (`.ai-star`), Courses▾ (mega 2-col),
           Internship & Training▾, After 12th▾, Resources▾, Branches▾ (simple `children` dropdown generated from `branches`, added 2026-10-07), Contact Us), blue glowing "Book Demo". Dropdowns are CSS-only
           (hover/focus-within). About Us uses `featured` → FeaturedPanel: full-header-width panel with ABOUT link list +
           "Talk to a counsellor" (left) and FEATURED 3 photo cards w/ badge + meta (right). Photos: src/assets/nav/*.jpg (static
           imports in site.ts, next/image blur) — cropped from a screenshot, replace with originals. Nav groups are h-full so
           hover isn't lost moving into panels; wide groups (`featured`/`skills`) are non-relative so panel anchors to header row.
           AI uses `skills` (type NavSkillsPanel) → SkillsPanel: gradient top line, "Learn AI Skills." intro + 2 link groups
           (Sparkles/Zap icon circles, HOT badges) · featured course card (CSS "AI" art) · blue CTA card "Explore AI".
           Courses uses `columns` (type NavColumnsPanel) → ColumnsPanel: 4 numbered columns (01 Programming, 02 AI & Data,
           03 Digital Marketing, 04 Cyber & Cloud) + footer strip with quote and "Browse all courses →".
           After 12th also uses `columns` with `variant: "glass"` → frosted panel, 3 cols (3/6/9-Month programs), lighter
           titles, denser lists, "Browse After 12th courses →". Column count is dynamic (gridTemplateColumns).
           Resources also uses solid `columns`: 01 Career Tools (NEW badges via NavLink.badge) · 02 Guidance · 03 Explore ·
           04 Help & Community, footer link "Ask us a question →". Every dropdown now uses a custom panel.
           Internship & Training uses `tiles` (type NavTilesPanel) → TilesPanel: frosted-glass (bg-white/85 + backdrop-blur-2xl)
           4×3 tile grid (icon square, label, optional badge e.g. "New") + shared QuoteFooter "See all training formats →".
           IMPORTANT: the scrolled pill's white bg + blur is a separate -z-10 layer inside the row (row has `isolate`), NOT a
           backdrop-filter on the row itself — nested backdrop-filters can't blur the page, which would break glass panels.
           Regular top items get an animated underline while hovered/open (after: pseudo) — `isActiveTop()` also
           keeps that underline (and dropdown-link highlight, via `activePath` threaded into ColumnsPanel) ON
           for the current route via `usePathname()`, e.g. Resources stays highlighted on any `/guidance/*` page.
           Helpers in Header: hasMenu(), isWide(), mobileLinks() (drawer flattens skills groups). SCROLLED (>12px): outer bar turns transparent + pointer-events-none and the inner row becomes a
           floating frosted-white rounded-full pill (bg-white/90, blur, shadow), navy logo (`Logo dark={!scrolled}`), ink-700 links;
           AI pill + Book Demo stay blue. Outer height fixed at h-24 in both states → no layout jump. Full nav at xl+ (≥1280px); below that a dark drawer with <details> accordions + branch chips.
           TopBar.tsx (dark contact strip) exists but is NOT mounted (removed to match reference) — re-add in layout.tsx if wanted.
           Footer (LIGHT bg-slate-50, giant watermark = /logo/techcadd-wordmark.png at 6% opacity; /logo/tece_new_logo.png + blurb + email pill + phone, 3 columns from
           `footerLinks`, copyright + `footerLegal` links; id="contact"; no CTA strip/branch chips/socials) · LeadPopup ("use client", native <dialog> mounted in layout.tsx: auto-opens once per session 5s after load + `openLeadPopup()` event used by the header Book Demo buttons; course select, name, phone, maths check → WhatsApp; `.lead-popup`/`.lead-wave` CSS) · FloatingActions (ScrollTop "use client" yellow back-to-top + WhatsApp + call)
  ui/      ScrollAnimator ("use client", the ONLY global observer) · Counter · SectionHeading (+ `delay(i)` helper)
           Marquee (pure CSS) · Icon · Logo (official PNGs from /public/logo, navy + white stacked and cross-faded; `dark` prop shows white) · SocialIcons (+ whatsappPath)
  home/    Hero (dark "career motherboard": SVG PCB traces with travelling light pulses `.hero-trace` from a rotating-border core chip to 6 floating track nodes built from `categories`; self-typing terminal strip `.hero-type`; `.hero-scan` beam; fadeUp entrances on all copy EXCEPT the H1; stack Marquee; stats bar removed 2026-10-02; `heroStats` still used by about/AboutSections) · TrustStrip (alumni/recruiter marquee — NOT mounted on home, removed 2026-10-01) · About (corporate layout from `about` in site.ts: editorial copy + Established/Leadership facts, navy statement card + 2 real campus photos, hairline stat band with Counters, 4 numbered pillars) · Categories ("console" hairline grid: numbered cells, mono ~/tracks/<id> paths, `stack` tags, cell inverts to navy on hover; links via `categories[].href`; scroll-driven `.deck`/`.deck-card` entrance: cells start as one tilted 3D deck and are dealt to their grid cells, per-card offsets set inline by `deck(i)`, data-reveal fallback) · AiProgram (#ai-program flagship = AGENTIC AI, from `aiProgram`: centred heading, full-width "work in → work done" conveyor — each Row draws the same `animate-marquee` belt twice in sync, raw chips clipped to the left half and finished chips to the right half, with the Agent gate covering the seam — then 4-month rail from `stages`, facts/tools/CTA bar → /ai-courses/agentic-ai; facts must match the `agentic-ai` aiCourses entry; chips are fixed-width so both belts line up) · Courses (BENTO grid from `courseBento`: 3 cols × 4 rows at lg, `Tile` = data-reveal wrapper + hover-lift inner (overflow-clip), `Cover` photo with `.bento-pan` scroll drift, stat Counters; photos = Unsplash stock in src/assets/courses; CourseExplorer filter tabs file kept but NOT mounted)
           HowItWorks (zig-zag `.timeline`: data-reveal left/right cards, scroll-filled centre line, `.timeline-dot` nodes, `.hiw-bar` progress bars, ghost numbers; no overflow-hidden on the section) · WhyUs (sticky intro + navy rating card left, numbered hairline reason rows right; hover slides row + fills icon) · Difference (#difference: heading + DifferenceStage "use client" — a switch flips one rounded stage between "Most institutes" (flat grey, empty CV) and TechCADD (lit navy, CV paper fills line by line, meter fills, stamp lands); auto-flips once when scrolled into view; hovering a check highlights its CV line; all motion = `.dx-*` CSS keyed on `data-mode`; content from `difference`, icons rendered server-side and passed as props) · Programs (DARK sticky stack: one full-width h-svh photo panel per `programs` entry, `sticky top-0`, next panel slides over with rounded top; `.prog-zoom` photo; counter + program index; universities strip; NO overflow-hidden on section/wrapper) · Placements · Branches (+BranchExplorer "use client": navy detail card on the left follows the branch hovered/focused/clicked in the numbered directory on the right — city, text, areas, address/phone with fallbacks; Live Online row; "Serving students across North India" regions block removed)
           Technologies (+TechOrbit "use client": category tabs, 2 rotating logo rings, CSS tooltips; first 5 items = inner ring; rotation via `.orbit-spin` in globals.css, never pauses) · Testimonials (centred heading + Google Reviews pill; two full-width endless rows of quote cards sliding in opposite directions at the same speed via `animate-marquee`, no hover pause/effects; individual quotes are SAMPLE so they are NOT marked as Google reviews) · Faq (<details>, no JS) · Blog(+BlogSlider "use client": infinite 1/2/3-up carousel, auto-advances one card every 3.5s, pauses on hover/focus, prev/next + dots) · DemoCta(+DemoForm "use client")
  course/  AI course page sections, in order: CourseHero (single column, NO right-side card, breadcrumb, CSS-scroll parallax) · CourseNav ("use client",
           sticky top-24 anchor nav + scroll-spy) · CourseOverview · CourseOutcomes · CourseCurriculum(+CurriculumTabs
           "use client": ARIA tabs + <details class="accordion"> modules) · CourseTools · CourseAudience · CourseMentor ·
           CourseBatches · CourseCertification · CourseStories · CourseFaq · RelatedCourses(+AiCourseCard stretched-link card)
           · CourseEnrol(+EnquiryForm "use client": visible labels, inline validation, loading/error/success states).
           CourseSection = wrapper (id, aria-labelledby="{id}-title", scroll-mt-16). Breadcrumb. helpers monogram/initials.
  course-page/ Courses-dropdown page sections: CpHero · CpLearn (CpOverview, CpSyllabus = scroll-filled timeline, CpMethod =
           self-drawing SVG loop) · CpShowcase (CpTools, CpProjects, CpAudience, CpCareers, CpMentor) · CpTrust (CpWhy +
           comparison table, CpTracks = tracks table + batches, CpCertification, CpReviews, CpFaq, CpRelated/CpCourseCard,
           CpEnrol) · SnapCarousel ("use client", scroll-snap + prev/next) · CpEnquiryForm ("use client", 5 fields).
           Reuses course/CourseSection, course/CourseNav (variant="neu"), course/Breadcrumb (tone="light").
  training/ Internship & Training sections in page order: TrHero (light bg-mesh, "program snapshot" bento; id tr-hero) ·
           TrNav ("use client" sticky scroll-spy + progress line) · TrLearn (TrTracks → TrackPicker "use client" 3/6/9 ARIA
           tabs + SVG ring, TrStats dark counter band, TrOverview + "What you get", TrSyllabus → PhaseTabs "use client"
           vertical ARIA tabs + prev/next, TrWhyNow .tr-fill statement + 2 marquees, TrEligibility dark, TrTools) · TrProof
           (TrCertification fanned mock-ups, TrScope #scope accordion on .tr-rail, TrProjects sticky stacked .tr-sink cards,
           TrLoop, TrWhy bento, TrCompare table) · TrConnect (TrReviews + TrCarousel, TrModes, TrFaq → FaqSearch "use client"
           filter/expand-all/empty state, TrStart banner, TrRelated/TrCard, TrEnquire + TrEnquiryForm "use client").
  after-12th/ After 12th sections in page order: A12Hero (neu "duration dial" SVG ring; id a12-hero) · training/TrNav (label prop) ·
           A12Learn (A12Overview month ladder, A12Skills #learn, A12Curriculum zig-zag .timeline, A12Modules → MonthExplorer
           "use client" ARIA tabs, A12Tools dark, A12Eligibility, A12WhyNow .tr-fill + contrast rows, A12Advisor .a12-wipe slab) ·
           A12Proof (A12Certification mock-up, A12Scope dark staircase, A12Projects carousel, A12Loop .tr-rail, A12Why bento) ·
           A12Connect (A12Related/A12Card, A12Faq → training/FaqSearch, A12Enquire → training/TrEnquiryForm (context/placeholder
           props), A12Start).
  guidance/  Shared building blocks for every /guidance/* page (data-driven from src/data/guidance.ts), using the
             ORIGINAL card/card-hover design system (not the glass/neu/soft-UI system above — Guidance matches the
             home page, not the course pages): GuidanceHero (dark hero shell: breadcrumb, eyebrow, gradient-highlight
             h1, 2 CTAs, optional stat row) · ServiceCard (compact "Explore More →" card, home preview) · GuidanceCard
             (large numbered card w/ arrow, hub page) · FeatureGrid (flexible icon+title(+text) grid; `compact` =
             icon+title chip, no body text) · StepsTimeline (numbered circular-icon steps, same visual as home
             HowItWorks) · WorkflowStrip (horizontal Research→Strategy→…→Optimization flow with arrows) · LogoGrid
             (initials-badge tiles for AI tools / freelance platforms + a REQUIRED disclaimer prop — no real logos,
             no affiliation claims) · MentorGrid (avatar-initials + rating + "View Profile") · GuidanceFaq
             (topic-scoped accordion, same pattern as home Faq) · GuidanceCta (final banner, same gradient as DemoCta).
src/lib/whatsapp.ts  waLink(text) → wa.me URL with pre-filled message
src/lib/lead.ts      submitLead({form, phone, …}) — client helper every form calls → POST /api/lead
src/lib/db.ts        mysql2 pool (server only), reads DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME from .env
src/app/api/lead/route.ts  POST: validates + inserts into the single MySQL table `leads`
database/schema.sql  CREATE DATABASE techcaddmain + `leads` table (run once in MySQL Workbench)
docs/ai-course-page.md  Design spec for AI course pages (tokens, states, a11y acceptance criteria, QA checklist)
```
Home section order & anchor ids: Hero → `#about` → `#categories` → `#ai-program` → `#courses`
→ `#how-it-works` → `#why-us` → `#difference` → `#programs` → `#placements` → `#branches` → `#technologies`
→ `#testimonials` → `#guidance` → `#faq` → `#blog` → `#demo` → footer `#contact`. Nav links use `/#id`.
`/guidance` and its 4 sub-pages are real routes (not anchors) — see the guidance/ rows above. `#guidance` hosts
`<GuidanceSection/>` (`headingLevel` prop defaults to h2 here since Hero already owns the page's h1).

## Design system
- Colors: `brand-50…900` (blue, primary), `accent-400…600` (YELLOW since 2026-10-02: 400/500 = fills & text on dark, always with ink text on top; 600 = dark amber for accent TEXT on light), `ink-300…950` (navy text/dark bgs).
- Utilities: `container-x`, `section` (vertical padding), `eyebrow` / `eyebrow-dark`, `btn-primary` (yellow, ink text),
  `btn-brand` (blue), `btn-ghost`, `btn-ghost-dark`, `card`, `card-hover`, `text-gradient`, `bg-grid` (dark bg), `bg-grid-light`, `mask-fade-x`,
  `link` / `link-dark` (inline text links), `defer-render` (content-visibility: auto for below-fold sections).
- `btn` includes active (scale .98) + disabled/aria-disabled states. Global `:focus-visible` fallback ring (brand-500) in
  `@layer base`; add class `on-dark` to dark/brand sections for white rings, `on-light` to white cards inside them.
- `<details class="accordion">` animates height (::details-content + interpolate-size, instant where unsupported).
- `.parallax` + `style={{"--parallax":"30%"}}` = CSS scroll-driven parallax (no JS, off for reduced motion).
- AI course pages use GLASS + SOFT UI: light sections `bg-soft` + `<SoftBlobs/>` (CourseSection.tsx) behind `glass` cards
  (`glass-hover`, `glass-sm` chips), `soft-inset` wells, `soft-icon`/`soft-icon-accent` tiles, `soft-active` selected state,
  `btn-glass`; dark sections `glass-dark`. Shadows: `shadow-soft-sm/soft/soft-lg/soft-inset/glow/glass-dark` (@theme).
- Courses-dropdown pages use NEUMORPHISM on `bg-neu` only: `neu` (raised; depth = --neu-k), `neu-sm`, `neu-inset`,
  `neu-hover`, `neu-icon`, `neu-icon-brand`, `btn-neu`, `btn-neu-primary`; shadows `shadow-neu-sm/lg/inset/inset-sm/brand`.
  Utilities that set radius/bg need `!` to override (e.g. `neu !rounded-full`).
- Internship & Training pages use the SITE THEME (white / `bg-brand-50/50` / `bg-ink-950` rhythm, `card`, SectionHeading) +
  `tr-cta` (orange, ink text = AA), `tr-chip(-dark)`, `tr-icon(-soft)`, `tr-ring` (gradient hairline), `tr-dark-card`, `bg-mesh`.
  Scroll-driven CSS: `.tr-rise/.tr-left/.tr-right/.tr-unfold`, `.tr-fill`, `.tr-rail` + `.tr-rail-x|y`, `.tr-stack` + `.tr-sink`
  (--s/--e per card); keyframe classes `.tr-pop`, `.tr-float`, `.tr-shine`, `.tr-ring-draw`.
- After 12th pages mix `neu*` (on `bg-neu` sections) and `su-*` Soft UI (on `bg-soft`/white) — never a neu surface on bg-soft or
  vice versa. On bg-neu use `text-brand-700` for highlighted words (not `text-gradient`). Scroll-driven CSS: `.a12-tilt-l/-r`,
  `.a12-wipe`, `.a12-zoom`, `.a12-drift`; on-load `.a12-dial` (--a12-c). Also reuses `.extrude`, `.timeline*`, `.tr-*`.
- CSS scroll-driven animations (globals.css, @supports + no-reduced-motion): `.extrude` (surface rises from the page as it
  enters), `.timeline`/`.timeline-fill`/`.timeline-dot`, `.draw-path` (SVG pathLength=1), `.snap-focus` (carousel centre
  card), `.hero-sink`, `.scroll-progress`. Extra data-reveal variants: `blur`, `flip`.
- Hover transforms go on an inner element when the wrapper has `data-reveal` (else hover inherits the 800ms reveal transition).
- Pattern: sections alternate white / `bg-brand-50/50` / dark `bg-ink-950` (Hero, AiProgram, Placements) for rhythm.
- Soft UI (AI course pages only): `neu`/`neu-sm`/`neu-inset` (must sit on `bg-clay`), `neu-dark*` (on `bg-clay-dark`), `clay-icon(-accent)`, `clay-card`, `clay-white`, `clay-orb` (decor), `btn-clay-primary`/`btn-clay-brand`, `btn-neu`. `SoftBlobs` decor in CourseSection.
- Section header: always `<SectionHeading eyebrow title text dark? align?>`; highlight words with `<span className="text-gradient">` (name is historical: now SOLID brand blue on light, accent yellow inside `.text-white`/`.bg-ink-950`/`.on-dark`).

## Animations (performance-critical — follow this)
- Scroll reveal: add `data-reveal="up|down|left|right|zoom|fade"` to any element; stagger with `style={delay(i)}`.
  CSS in globals.css; ScrollAnimator adds `.is-visible`. Hidden state only applies with JS on + no reduced-motion.
- Typewriter (ScrollAnimator, no extra component): every `.text-gradient` inside an h1/h2 with plain-text content is typed out when it scrolls into view (full text stays in the DOM: typed span + transparent remainder; no cursor/caret — removed at the client's request). `data-type-words="a|b|c"` on an element = type/delete/cycle (home hero H1, first word server-rendered). Off for reduced motion.
- Number counters: `<Counter value={500} suffix="+" />` (server-rendered final value, animated by ScrollAnimator).
- **Don't** put `data-reveal` on elements rendered after client state changes (e.g. filtered lists) — they'd stay
  hidden. Use the CSS keyframe `animate-[fadeUp_...]` instead (see CourseExplorer).
- **Don't** put `data-reveal` on the Hero H1 (LCP).
- Keep components as Server Components; only Header, ScrollAnimator, CursorFollower, CourseExplorer, DemoForm, DifferenceStage, TechOrbit, BlogSlider, CourseNav, CurriculumTabs, EnquiryForm are client.

## Known placeholders / TODO (verify with client)
- Stats (50,000+ alumni, 500+ partners, 92% placement, 18 LPA, etc.), testimonials, blog posts, recruiter names,
  university list are **sample content** — confirm real figures before launch.
- Social URLs in `site.socials` are generic; email `info@techcaddjalandhar.com` is assumed.
- Logo is an SVG placeholder (`ui/Logo.tsx`) → replace with official logo in `/public`.
- ALL forms (LeadPopup, DemoForm, ContactForm, course/EnquiryForm, CpEnquiryForm, TrEnquiryForm) save to MySQL table `leads`
  via `submitLead()` and show a thank-you message in place of the form; they no longer open WhatsApp. `form` column =
  popup | demo | contact | course | ai-course | training | after-12th. LeadPopup preselects the course on course pages
  (`pageCourses` path → name map built in layout.tsx). Hosting needs a reachable MySQL + the DB_* env vars.
- Blog cards/"Download Curriculum" link to anchors; no blog/course detail pages yet.
- Unused scaffold files in `/public` (next.svg, vercel.svg, etc.) can be deleted.
- AI course pages show NO pricing (no fee/EMI/₹, no JSON-LD Offer) — fees go via counsellor. AI mentors (names/bios), AI student stories, batch timings are **sample content**. Tools use monogram
  placeholders (no logo files yet).
- Contrast: white text on `btn-primary` orange ≈2.6:1 (fails AA) and `text-gradient`'s orange tail on white — needs a
  brand decision (see docs/ai-course-page.md §7 "Open accessibility issues").

- About page: journey timeline milestones (2007–2025) and recognition items (incl. "ISO 9001 Certified") are **sample content**.
- Founder page copy/photos come from the reference site: it says "2016 founded / 5,000+ students trained" and uses 2016–2026 chapter years, which CONFLICTS with
  the 2007 / 50,000+ figures used elsewhere on this site — confirm with the client.

## Changelog
- 2026-10-07: Mouse follower added: `ui/CursorFollower.tsx` ("use client", mounted in layout.tsx) — yellow dot on the pointer + trailing white ring (mix-blend-difference) that grows over links/buttons; mouse devices only, off for reduced motion, rAF loop stops when idle.
- 2026-10-07: "Founder" added as a top-level nav item after About Us. Heading font Plus Jakarta Sans → Outfit; root font-size 93.75% → 90.625% from 768px up.
- 2026-10-07: SEO / link audit fixes. Legal pages built (/privacy-policy, /terms, /cookie-policy, /refund-policy → src/data/legal.ts + components/legal/LegalView.tsx; DRAFT text, needs legal review; refund terms deliberately not invented). `src/data/ai-moved.ts` (`aiMovedTo`, `aiCourseHref`) is now the one list of AI courses that moved to /courses — used by the redirect page, AiCourseCard and the sitemap (no redirecting URL is linked or listed). `src/lib/seo.ts`: `clip()` trims meta descriptions (courses, training, after-12th, ai-courses, root) and `ogImages` = default share image from new src/app/opengraph-image.tsx — add `images: ogImages` to any `openGraph` a page defines (a page-level openGraph replaces the root one). Root openGraph no longer sets a site-wide `url`. Footer gained a "Branches" column (`footerLinks.Branches`, generated from `branches`) so branch pages are linked from every page. Course pages show an "Also see" row (training / After 12th programs + up to 5 compare pages) via `CpRelated more`; long-form sections link back to the full course page. Compare/training titles shortened. Audit scripts live outside the repo; rerun = crawl .next/server/app/*.html.
- 2026-10-07: Site-wide audit + second performance pass. All 410 prerendered pages scanned (no editor notes / placeholders / empty headings / duplicate titles). `defer-render` added to: home #about/#ai-program/#why-us/#difference/#demo; course pages (regions, careers, mentor, why-program, why, tracks, certification, reviews, faq, related); training (certification, why, compare, reviews, modes, faq, related); after-12th (certification, why, related, faq); long-form + AI hub sections; GuidanceFaq. Header mobile drawer is now mounted only after the menu button is first touched/focused (`drawer` state) and the scrolled-pill `backdrop-blur` applies only while scrolled; testimonial stars are one text node; hero floating chips / terminal lost their backdrop-blur. Lighthouse mobile (local, simulated slow 4G): home 42 → ~60-67 headless, 86 with GPU raster; course page 56 → ~60-67, 85 with GPU. Remaining cost = page size (home HTML ~950 KB raw), one 250 KB global stylesheet, Header hydration.
- 2026-10-07: After 12th + Internship & Training pages brought in line with the client course documents. (1) New shared sections `components/long-form/LongFormSections.tsx` (`LfWhy`, `LfRegions`; tone "site" for /training, "soft" for /after-12th) fed by `longFormFor(slug)` in src/data/long-form.ts, which READS the matching /courses page's `copy` (map `fromCourse`) or src/data/long-form-extra.ts (Flutter, Full Stack — no /courses page) and drops every point/FAQ that mentions salary or fees; the course FAQs are appended to each page's FAQ list. No long-form for basic-skill-programs / civil-mechanical. (2) Text of the 10 After 12th subjects (subjects-a/b.ts) and 10 training programs (programs-a/b/c.ts) rewritten to follow the documents' modules, tools and roles (adapted copy, not verbatim) — review before launch.
- 2026-10-07: Client "courses" Google Doc applied from Shopify onward: shopify, web-designing, kotlin, web-development, php-full-stack, mern-stack and mean-stack moved out of marketing.ts / programming.ts into their own src/data/course-pages/<slug>.ts with long-form `copy` (overview, who can join, states, why this program, why Techcadd, modules, careers, FAQs, CTA where the doc has them). Kotlin got Stage 1 only (its later stages in the doc are a copy of the Web Designing text); MEAN Stack has no CTA in the doc. Sample reviews NOT published. Flutter Development and Full Stack Development are in the doc but have no /courses page yet — not created.
- 2026-10-07: Client Google Doc (AI courses) applied. New long-form course pages /courses/agentic-ai, /courses/rag, /courses/prompt-engineering (second doc; group ai-data) and /courses/ai-powered-marketing (group marketing) in src/data/course-pages/<slug>.ts; /ai-courses/<slug> for those four now redirects (`movedTo`), AI dropdown links + `aiProgram.href` point to /courses/…. /ai-courses hub gained the long-form "All AI Courses in Jalandhar" copy: src/data/ai-hub.ts (`aiHub`) rendered by components/course/AiHubSections.tsx (overview + course picker, audience, states, why, why techcadd, per-course learn cards, careers) + GuidanceFaq (FAQPage JSON-LD) + GuidanceCta. NOT applied: the doc's "AI Course" section (an Artificial Intelligence page with other client copy already exists at /courses/artificial-intelligence) and all sample reviews. Durations/levels on the three pages are the old AI-page values.
- 2026-10-07: /courses/wordpress moved to its own file (src/data/course-pages/wordpress.ts) with client long-form copy (overview, who can join, states, why this program, 18 FAQs, CTA) via `copy`; title now "WordPress Course". Supplied draft reviews NOT published (marked sample); syllabus/tools/projects/careers/duration are the previous values.
- 2026-10-07: Home #ai-program flagship redesigned around Agentic AI (work-in → work-done conveyor through an agent gate, 4-month rail); `aiProgram` reshaped (lead/highlight/href/facts/jobs/caption/stages, no more modules/duration). Jobs + stage copy are SAMPLE.
- 2026-10-07: Performance pass: `defer-render` (content-visibility) on home #placements/#branches/#technologies/#testimonials/#guidance/#faq/#blog + Footer (NOT on sections with sticky stacks or scroll timelines: Categories, Courses, HowItWorks, Programs); ScrollAnimator writes the progress bar transform directly instead of a root custom property; image cache TTL 31 days.
- 2026-10-07: Home #categories cards get a scroll-driven 3D "deal the deck" entrance (deck-* CSS). Courses/After 12th dropdowns and the Technologies orbit compacted.
- 2026-10-07: Home #difference section added after #why-us: interactive "flip the switch" stage comparing the same student's CV after most institutes vs TechCADD (6 checks, DifferenceStage client component, dx-* CSS); comparison claims are SAMPLE. Root font-size 93.75% from 768px up (global scale-down); home #demo CTA text/form sizes reduced.
- 2026-10-06: /courses/java now uses the client's long-form copy (src/data/course-pages/java.ts; programming.ts imports it). Title "Java Programming Course" → "Java Course"; navigation untouched. No CTA text was supplied (no Stage 4), so the final banner keeps the default wording. The 12 supplied reviews are NOT published (sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-06: /courses/python now uses the client's long-form copy (src/data/course-pages/python.ts; programming.ts imports it — first Programming-group page on client copy). Title "Python Programming Course" → "Python Course"; navigation untouched. The 10 supplied reviews are NOT published (sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-06: /courses/microsoft-azure now uses the client's long-form copy (src/data/course-pages/microsoft-azure.ts). Navigation untouched. With this, EVERY Cyber & Cloud course page uses client copy from its own file (cyber-cloud.ts and cyber-cloud-b.ts only assemble them). The 10 supplied reviews are NOT published (sample drafts); `duration` is a placeholder; the old AZ-900/AZ-104 exam-prep claims are gone; other open points are at the top of that file.
- 2026-10-06: /courses/cybersecurity is a CYBERSECURITY page again, with the client's long-form Cybersecurity copy (src/data/course-pages/cybersecurity.ts); the Courses ▾ link label is back to "Cybersecurity". This SUPERSEDES the earlier entry below: the Cyber Forensics copy moved to its own NEW page /courses/cyber-forensics (same cyber-forensics.ts, slug changed) with no Courses ▾ link → 48 course pages. Three client pages now have no dropdown link (cyber-forensics, penetration-testing, docker-kubernetes) — ask the client. The 10 supplied Cybersecurity reviews are NOT published (sample drafts); `duration` is a placeholder.
- 2026-10-06: /courses/devops now uses the client's long-form copy (src/data/course-pages/devops.ts; cyber-cloud-b.ts imports it — only Microsoft Azure is still inline sample content there). Navigation untouched (title, `navLabel`, nav link unchanged). `level` Intermediate → Beginner. The 12 supplied reviews are NOT published (signed "Sample Review"); `duration` is a placeholder; other open points are at the top of that file. This also settles that the Docker & Kubernetes copy was meant as its own page (still without a Courses ▾ link — ask the client).
- 2026-10-06: /courses/ethical-hacking now uses the client's long-form copy (src/data/course-pages/ethical-hacking.ts; cyber-cloud.ts is now only an assembly file). Navigation untouched (title, `navLabel`, nav link unchanged). `level` Intermediate → Beginner. The 10 supplied reviews are NOT published ("[Student Name]" templates); `duration` is a placeholder; other open points are at the top of that file. This also settles that the Penetration Testing copy was meant as its own page (still without a Courses ▾ link — ask the client).
- 2026-10-06: NEW course page /courses/docker-kubernetes (src/data/course-pages/docker-kubernetes.ts, client's long-form copy, group cyber-cloud) → 47 course pages. NO Courses ▾ link was added (client said "do not change any navigation", but no Docker & Kubernetes page/link existed) — reachable from the /courses hub, sitemap and related cards only. OPEN QUESTION for the client: add a dropdown link, or was the copy meant to replace the DevOps page? The 10 supplied reviews are NOT published (sample drafts); `duration` is a placeholder.
- 2026-10-06: NEW course page /courses/penetration-testing (src/data/course-pages/penetration-testing.ts, client's long-form copy, group cyber-cloud) → 46 course pages. NO Courses ▾ link was added (client said "do not change any navigation", but no Penetration Testing page/link existed) — it is reachable from the /courses hub, sitemap and related cards only. OPEN QUESTION for the client: add a dropdown link, or was the copy meant to replace the Ethical Hacking page? The 10 supplied reviews are NOT published (sample drafts); `duration` is a placeholder.
- 2026-10-06: /courses/soc-analyst now uses the client's long-form copy (src/data/course-pages/soc-analyst.ts; cyber-cloud-b.ts imports it). Navigation untouched at the client's request (title, `navLabel`, nav link unchanged). Tools section lists technology AREAS only — the client's text says not to name software until confirmed. `level` Intermediate → Beginner. The 10 supplied reviews are NOT published (sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-06: /courses/linux now uses the client's long-form copy (src/data/course-pages/linux.ts; cyber-cloud.ts imports it and now only holds Ethical Hacking inline). Title "Linux Administration Course" → "Linux Course"; browser title is the client's suggested SEO title. The 10 supplied testimonials are NOT published (unnamed sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-06: /courses/cybersecurity is now the CYBER FORENSICS page — the client supplied Cyber Forensics long-form copy for it (src/data/course-pages/cyber-forensics.ts; cyber-cloud.ts imports it). Slug unchanged; title "Cybersecurity Course" → "Cyber Forensics Course"; `navLabel` and the Courses ▾ Cyber & Cloud link are now "Cyber Forensics". There is NO general Cybersecurity course page any more — confirm with the client; FAQs on the Ethical Hacking, Linux and SOC Analyst pages and the salary estimator still mention/link a "Cybersecurity course". The 12 supplied reviews are NOT published (sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-06: /courses/network-security now uses the client's long-form copy (src/data/course-pages/network-security.ts; cyber-cloud-b.ts imports it). Title "Network Security Course" → "Network Security & CCNA Course"; `navLabel` and the Courses ▾ Cyber & Cloud link are now "Network Security & CCNA" (slug unchanged). The careers jobs grid is hidden when `copy.careers.jobs` is empty (this copy has no state-wise jobs). The 10 supplied reviews are NOT published (the supplied text calls them sample drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-05: /courses/cloud-computing now uses the client's long-form copy (src/data/course-pages/cloud-computing.ts; cyber-cloud.ts imports it; title changed from "Cloud Computing Course (AWS & Azure)" to "Cloud Computing Course"). The 10 supplied reviews are NOT published (the supplied text calls them illustrative drafts); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-05: /courses/aws now uses the client's long-form copy (src/data/course-pages/aws.ts; cyber-cloud-b.ts imports it). `CourseCopy.careers` gained optional `notes` (titled paragraphs between the role chips and the jobs grid). The 10 supplied reviews are NOT published (the supplied text itself calls them sample/template reviews); `duration` is a placeholder; other open points are at the top of that file.
- 2026-10-05: NEW /courses/chatgpt-ai-tools (src/data/course-pages/chatgpt-ai-tools.ts, client's long-form copy, group ai-data) → 45 course pages. Like generative-ai it REPLACES the old AI-dropdown page: /ai-courses/chatgpt-ai-tools redirects to it (`movedTo`), AI ▾ and Courses ▾ AI & Data links both point to it, sitemap skips the old URL.
- 2026-10-05: NEW /courses/generative-ai (src/data/course-pages/generative-ai.ts, client's long-form copy, group ai-data) → 44 course pages. It REPLACES the old AI-dropdown page: /ai-courses/generative-ai now redirects to it (`movedTo` map in src/app/ai-courses/[slug]/page.tsx; the `aiCourses` entry stays so the AI hub card and related cards still exist and land on the new page; sitemap skips the old URL). Links: AI ▾ "Generative AI" and new Courses ▾ AI & Data "Generative AI" (New) both → /courses/generative-ai.
- 2026-10-05: /courses/tableau now uses the client's long-form copy (src/data/course-pages/tableau.ts). All 7 AI & Data course pages now live in their own files (ai-data.ts only assembles them). Claims the supplied text marked "include only if provable" (certificate, placement support, trainers) are listed at the top of tableau.ts.
- 2026-10-05: /courses/power-bi now uses the client's long-form copy (src/data/course-pages/power-bi.ts). The supplied text marked several claims to confirm (trainers, batch size, certificate, placement support, tool list) — listed at the top of that file.
- 2026-10-05: /courses/data-analytics now uses the client's long-form copy (src/data/course-pages/data-analytics.ts). Open points for the client are at the top of that file (same ten reviewers now on SIX course pages: google-ads, artificial-intelligence, machine-learning, deep-learning, data-science, data-analytics; "North India's first" claim; government-approval FAQ left out).
- 2026-10-05: /courses/data-science now uses the client's long-form copy (src/data/course-pages/data-science.ts). Open points for the client are at the top of that file (same ten reviewers as the Google Ads, AI, ML and Deep Learning pages; "North India's first" claim; government-recognition FAQ left out).
- 2026-10-05: /courses/deep-learning now uses the client's long-form copy (src/data/course-pages/deep-learning.ts). Open points for the client are at the top of that file (same ten reviewers as the Google Ads, AI and ML pages; "North India's first" claim; government-recognition FAQ left out).
- 2026-10-05: /courses/machine-learning now uses the client's long-form copy (src/data/course-pages/machine-learning.ts; title changed from "Machine Learning Certificate Program" to "Machine Learning Course"). Open points for the client are at the top of that file (same ten reviewers as the Google Ads and AI pages; "North India's first" claim).
- 2026-10-05: /courses/artificial-intelligence now uses the client's long-form copy (src/data/course-pages/artificial-intelligence.ts; title changed from "Artificial Intelligence Certificate Program" to "Artificial Intelligence Course"). `CourseCopy.overview.gainsTitle` keeps the side card of `gains` (used here for "Learning outcomes"). Open points for the client are listed at the top of that file (reviews identical to the Google Ads page reviewers, "North India's first" claim, FAQ inconsistencies).
- 2026-10-05: NEW course page /courses/ui-ux-design (src/data/course-pages/ui-ux-design.ts, client's long-form copy) + "UI/UX Design" link in Courses ▾ Digital Marketing → 43 course pages. The supplied reviews had "[Name]" placeholders so they are NOT published (shared testimonials shown). `duration` is a placeholder — confirm. `CourseCopy.whyUs` gained optional `outro`.
- 2026-10-05: NEW course page /courses/graphic-designing (src/data/course-pages/graphic-designing.ts, client's long-form copy) + "Graphic Designing" link in Courses ▾ Digital Marketing → 42 course pages; the "Graphic Design" card on /courses/graphics-video now opens it. `duration` is a placeholder — confirm. `CourseCopy.careers` gained optional `rolesNote`.
- 2026-10-05: NEW course page /courses/aeo (src/data/course-pages/aeo.ts, client's long-form copy) → 41 course pages. Courses ▾ Digital Marketing links for the two new pages are the short labels "GEO" and "AEO" (New) because the full names overflow the dropdown column; their `navLabel` (tiles, breadcrumb, enquiry form) keeps the full name. `duration` is a placeholder — confirm.
- 2026-10-05: NEW course page /courses/geo (src/data/course-pages/geo.ts, client's long-form copy) + "GEO (Generative Engine Optimization)" link (New) in Courses ▾ Digital Marketing → 40 course pages. `duration` is a placeholder — confirm. Review `rating` is now optional (GEO reviews came without stars); reason cards may have empty `text`.
- 2026-10-05: NEW course page /courses/dropshipping-ecommerce (src/data/course-pages/dropshipping-ecommerce.ts, client's long-form copy) + "Dropshipping & E-Commerce" link in Courses ▾ Digital Marketing → 39 course pages. Its `duration` is a placeholder ("Duration on enquiry") — confirm. `CourseCopy.audience` gained optional `fit` ("Is this course right for you?" card); pages with `copy` use tagline-only meta descriptions.
- 2026-10-05: /courses/google-ads now uses the client's long-form copy (src/data/course-pages/google-ads.ts). Module 2/5 titles and the Tag Manager / Merchant Center / Looker Studio tools were marked "confirm" in the supplied text — see the note at the top of that file. Review cards gained an optional bold `headline`.
- 2026-10-05: /courses/social-media-marketing now uses the client's long-form copy (src/data/course-pages/social-media-marketing.ts, incl. 10 supplied reviews — confirm they are real before launch). Syllabus modules may now have an empty `summary`.
- 2026-10-05: /courses/seo now uses the client's long-form copy (src/data/course-pages/seo.ts). `CourseCopy` gained optional `cta` (final banner heading + text), `tools.columns`, `whyProgram.outro`, and `list`/`after` on reason cards. The supplied SEO reviews were DRAFT TEMPLATES ("[Student Name]"), so they are NOT published — the page keeps the shared testimonials until real reviews arrive.
- 2026-10-05: /courses/digital-marketing now uses the client's long-form copy (src/data/course-pages/digital-marketing.ts). New optional `CoursePage.copy` (type `CourseCopy` in types.ts) lets one course override section copy: heading (H1 + browser title), overview, syllabus (+ per-module `outcome`), audience, regions (CpRegions), whyProgram (CpWhyProgram), whyUs, tools table, careers + jobs by state, reviews, faqTitle; with `copy` set the shared FAQs are not appended and an empty `projects` list hides the Projects section. Other course pages are unchanged.
- 2026-10-05: /courses rebuilt to mirror the reference courses page (dark hero, search bar, grouped course tiles with brand logos); category chips and the long cards are gone.
- 2026-10-05: /about/founder rebuilt to mirror the reference founder page (hero, meet + stats, stage photo marquee, role ribbons, sticky scroll journey, closing card, testimonial carousel, Instagram reels cover-flow, connect CTA) in this site's theme; real photos added in src/assets/founder.
- 2026-10-05: All forms now save to one MySQL table (`leads`, database/schema.sql) through POST /api/lead and show a thank-you message in place of the form; lead popup auto-selects the course on course pages.
- 2026-10-02: Home #testimonials redesigned with a Google Reviews rating card.
- 2026-10-02: Lead popup form (waving hand, 2-column dialog) — opens 5s after load (once per session) and from header Book Demo.
- 2026-10-02: Typewriter text animation: heading highlight words are written on scroll site-wide; hero H1 cycles through 5 phrases.
- 2026-10-02: Favicons now from /public/favicons (metadata.icons in layout.tsx, src/app/favicon.ico replaced with the same .ico, new src/app/manifest.ts for Android icons).
- 2026-10-02: Accent colour orange → YELLOW (tokens in globals.css; `.bg-accent-400/500` force ink text); `text-gradient` and all blue→orange line gradients made solid; scroll-to-top button; navbar AI pill sparkle replaced (AiSpark SVG, yellow); regions block restored in #branches as a light panel (yellow = on campus, blue = live online).
- 2026-10-02: Real branch addresses + phones added to `branches` (from each branch own techcadd website); `site.address` now the Crystal Plaza, Opposite PIMS Hospital address; branch card gained a Google Maps Get directions link.
- 2026-10-02: #branches card is now interactive (BranchExplorer); `branches` typed `Branch` with `text`, `areas`, optional `address`/`phone` — only Jalandhar has an address; other branches need real addresses/phones from the client.
- 2026-10-02: Home #branches redesigned (HQ card + branch directory); regions block removed (`regions` export in site.ts now unused).
- 2026-10-02: Placements section: recruiter-name marquee rows removed (home + branch pages); stats, support cards and footnote kept.
- 2026-10-02: Header "Courses" now links to /courses; /courses rebuilt as a searchable all-courses page (CourseSearch client component, redesigned cards, category filters).
- 2026-10-02: The 5 "More Courses" slugs now render a CATALOG page (cards per course name from `src/data/course-pages/catalog.ts` → course-page/CpCatalog: CatalogHero + CatalogSections, then CpFaq + CpEnrol). Card with `href` opens an existing course page, otherwise a WhatsApp enquiry. more.ts still supplies title/tagline/FAQs/metadata; its syllabus/projects etc. are no longer rendered.
- 2026-10-02: Courses dropdown → 5 columns with Hot/Trending/New badges; 11 new course pages (meta-ads; network-security, soc-analyst, aws, microsoft-azure, devops; new `more` group: civil-architecture-cad, mechanical-cad-cam, basic-computer, accounting-tally, graphics-video) → 38 course pages. New content + "More Courses" mentor are SAMPLE.
- 2026-10-02: GuidanceSection (home #guidance + /guidance hub top) redesigned: sticky intro left, 2×2 numbered cards right (first = navy FREE feature card); no longer uses guidance/ServiceCard. Footer link columns now one row for any number of `footerLinks` groups (--cols).
- 2026-10-02: Home #programs → dark sticky stacked full-width photo panels; `programs` gained points/href/cta/image/alt; stock photos in src/assets/programs.
- 2026-10-02: #why-us content expanded: intro paragraph, longer copy + 3 tags per reason, 8 reasons (added Recognised Certification, Counselling Before Enrolment). New claims are SAMPLE — confirm with client.
- 2026-10-02: Home #why-us redesigned: sticky left intro with rating/CTA card, 6 numbered reason rows (replaces bento cards). Hero stats bar removed.
- 2026-10-02: Hero redesigned as an animated "career motherboard" (replaces the IDE window mock-up + floating placed/package chips); hero-* keyframes in globals.css.
- 2026-10-02: Home #about redesigned corporate-style (editorial intro, statement card, campus photos, stat band, numbered pillars); content moved to `about` in site.ts.
- 2026-10-02: Home #how-it-works → animated zig-zag journey timeline (scroll-filled line, nodes light up, progress bars grow, cards slide in), CTA to #demo.
- 2026-10-02: Home #categories (Learning Tracks) redesigned IT-style: left heading + mono stat strip, joined hairline grid, hover-invert cells; `categories` gained `href` + `stack`.
- 2026-10-02: Home #courses → bento grid (10 tiles: 3 course-track photo cards, AI brand card, stats, tools, rating, batches, placement support) with staggered reveals + `.bento-pan` scroll-driven photo drift; replaces the CourseExplorer filter list. Stock photos added in src/assets/courses.
- 2026-09-30: Guidance feature built out in full: home "02 Guidance" preview section, a `/guidance` hub page
  ("Find the Guidance You Need" big-card grid) and 4 complete landing pages (career-counselling, mentorship,
  ai-marketing, freelancing), each with hero/why/feature-grids/steps/FAQ/final-CTA. New `src/data/guidance.ts`
  content file + `src/components/guidance/*` shared component set (original card/card-hover system, not the
  glass/neu styling introduced for the course pages). Resources▾Guidance nav links and footerLinks now point
  at these real pages instead of home anchors; footer's
  link grid moved off manual 12-col math onto a self-sizing grid to fit the new 5th "Guidance" column. Added
  ~20 lucide icons to Icon.tsx (reusing overlapping ones already added for the course pages, e.g. Coffee/Cpu/
  Globe/Palette/Search/Share2/Terminal/Workflow, rather than duplicating).
- 2026-10-01: Mission and Vision page at /about/mission-vision (5 sections, site theme, reference section list); nav link + featured card + sitemap updated.
- 2026-10-01: About page photos (7 event photos in src/assets/about/, mapped in `about.images`): hero right column, ecosystem 4-photo strip, why-it-matters banner, industry engagement.
- 2026-10-01: About page at /about (14 sections, site theme, reference section list); "About techcadd" nav link + featured card point to it; sitemap updated.
- 2026-10-01: Home #demo CTA redesigned LIGHT + centred: amber eyebrow, huge "Start building your career today." (amber "career"), separate white input pill + navy "Book Demo" pill, blue gradient "Call now" pill; perks list removed.
- 2026-10-01: Footer redesigned: light, giant "techcadd." watermark, email pill, 3 link columns (Courses/Company/Support), legal links row (`footerLegal` — /privacy-policy, /terms, /cookie-policy, /refund-policy routes NOT built yet → 404).
- 2026-10-01: Removed "Limited seats per batch" badges (home, course & AI course CTAs). Home #demo CTA rebuilt like techcaddjalandhar.com ("Ready to get started?", mobile-number + Book Demo → WhatsApp, Call now, 3 perks). Navbar AI pill: `.ai-glow` orbiting conic border + pulse, `.ai-star` twinkle (globals.css).
- 2026-10-01: Blog section → auto-sliding carousel (3 cards on desktop; one slides out left, next enters from right).
- 2026-10-01: Removed TrustStrip ("Our alumni work at…" recruiter marquee) from the home page; component file kept.
- 2026-10-01: After 12th dropdown → 29 SSG pages at /after-12th/[slug] (subject × 3/4/6/9 months) + /after-12th hub, neumorphism + Soft UI, 19 sections (reference section list, no pricing), month explorer, a12-* scroll animations; sitemap updated. Roadmap content is SAMPLE — confirm with client.
- 2026-09-30: Internship & Training dropdown → 12 SSG pages at /training/[slug] + /training hub, site theme, 21 sections (reference section list), track picker, phase tabs, searchable FAQ, stacked project cards, tr-* scroll animations; nav tiles + sitemap updated.
- 2026-09-30: Technologies section → "Technologies We Master" orbit: 7 category tabs, real brand logos (simple-icons), hover/focus tooltips.
- 2026-09-29: Hero redesigned as IT-company style: "New" announcement pill, "Engineering the next generation of tech talent" H1, mono tech-stack chips, IDE window mockup (tabs, highlighted code, CI/CD "career-pipeline"), icon stats bar. Same colors.
- 2026-09-29: Header compacted (smaller logo/nav/Book Demo, pill h-16) so it fits 1280px+ without overflow; `html, body { overflow-x: clip }` stops horizontal page scroll (clip, not hidden, keeps sticky header working).
- 2026-09-30: Courses dropdown → 27 neumorphic SSG pages at /courses/[slug] + /courses hub (no pricing, no hero side card), scroll-driven animations, nav links + sitemap updated.
- 2026-09-30: AI course pages + hub restyled with glassmorphism + Soft UI Evolution (content unchanged); removed orphaned neu/clay classes.
- 2026-09-30: AI course pages restyled in soft UI (neumorphism + claymorphism): bg-clay sections, neu cards, clay icons/buttons, clay-dark tools/certification, decorative clay orbs in hero. Utilities in globals.css, rules in docs §3.5.
- 2026-09-30: AI course pages — hero is single column (side card removed); all pricing removed (fee field, EMI, Offer schema); Batches section now "Next batch" card.
- 2026-09-29: AI course pages (/ai-courses hub + 8 SSG course pages), AI dropdown links point to them; btn states, link utilities, focus fallback, accordion/parallax CSS; spec in docs/ai-course-page.md.
- 2026-09-29: Columns dropdowns (Courses/After 12th/Resources) compacted; panel capped at viewport height (scrolls if needed). QuoteFooter smaller.
- 2026-09-29: Resources dropdown in Courses style (4 grouped columns, NEW badges).
- 2026-09-29: After 12th glass 3-column dropdown (3/6/9-month programs).
- 2026-09-29: Internship & Training glass tile dropdown; pill blur moved to sibling layer.
- 2026-09-29: Courses mega dropdown (4 numbered columns + quote footer), nav hover underline.
- 2026-09-29: AI mega dropdown (skills groups, featured course, CTA).
- 2026-09-29: About Us mega dropdown with featured photo cards; founding year set to 2007 (founder: Gourav Gupta).
- 2026-09-29: Scrolled header = floating frosted-white pill.
- 2026-09-29: Header redesigned to match official dark techcadd header (dropdown menus, AI pill); TopBar unmounted.
- 2026-09-29: Initial build — full home page (16 sections), header/footer, branch SSG pages, SEO (metadata, JSON-LD, sitemap, robots).
