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
- No animation library. No images yet (all visuals are CSS gradients/SVG) → fast LCP.
- Commands: `npm run dev` · `npm run build` · `npm run lint` · `npm start`.

## Golden rule: content lives in ONE file
**`src/data/site.ts`** = single source of truth. To change text, phone, courses, branches, stats,
FAQs, testimonials, blogs, footer links → edit this file only. Components just render it.
Exports: `site` (name/phone/email/address/hours/rating/socials/url), `branches`, `regions`, `nav` (type `NavItem`: children = dropdown, `mega` = 2-col panel, `featured` = About photo panel, `skills` = AI panel, `columns` = Courses panel, `tiles` = Internship panel, `highlight` = AI pill),
`heroStats`, `categories`, `courses` (type `Course`), `aiProgram`, `steps`, `whyUs`, `programs`,
`placementStats`, `recruiters`, `techStack` (type `TechItem`), `testimonials`, `faqs`, `blogs`, `footerLinks`,
EXCEPTION: Courses-dropdown pages live in `src/data/course-pages/` (index.ts = groups + `courseCommon` shared blocks,
types.ts = `CoursePage`, one file per group: programming / ai-data / marketing / cyber-cloud). Adding one: add an entry to
the group file + point its `nav` Courses link at `/courses/<slug>` → page, sitemap, hub card are automatic.
EXCEPTION 2: Internship & Training dropdown pages live in `src/data/training/` (index.ts = `trainingCommon` shared blocks:
tracks/heroBadges/heroFacts/whatYouGet/credentials/stats/certificates/loop/why/comparison/modes/faqs; types.ts = `TrainingPage`;
programs-a/b/c.ts = 12 programs). Adding one: add an entry + point its `nav` tile at `/training/<slug>` → page, sitemap, hub card automatic.
EXCEPTION 3: After 12th dropdown pages live in `src/data/after-12th/` — a page = subject × duration. subjects-a/b.ts = 10 `A12Subject`s
(each a 9-month roadmap: month = title/summary/6 topics/tools/skill/project, + statement, contrast, roles, faqs); index.ts = `a12Tiers`
(3/4/6/9 months), `offered` (which subjects per duration), generated `a12Pages` (slug `<months>-month-<subject>`), `a12Common`, `a12Faqs()`.
Adding one: add the subject slug to `offered` + a `nav` link at `/after-12th/<slug>` → page, sitemap, hub card automatic.
`aiCourses` (type `AiCourse`, one per AI-dropdown link → `/ai-courses/<slug>`), `aiMentors`, `aiCourseCommon` (batches, EMI,
includes, certification, placement, shared FAQs), `aiTestimonials`.
- Adding an AI course: add to `aiCourses` + a link in `nav` AI `skills` groups → page, metadata, sitemap, hub card are automatic.
- `icon` fields are string names → must exist in the map in `src/components/ui/Icon.tsx` (add new ones there).
- `courses[].category` must match a `categories[].id`.
- Adding a branch to `branches` auto-creates `/branches/<slug>`, adds it to header dropdown, footer, sitemap, demo form.

## File map
```
src/app/
  layout.tsx            Root: fonts (Inter body, Plus Jakarta Sans headings), SEO metadata, Header+Footer, ScrollAnimator, FloatingActions
  page.tsx              HOME = ordered list of sections + JSON-LD (EducationalOrganization + FAQPage). Reorder sections here.
  globals.css           Design tokens (@theme colors brand/accent/ink, fonts, animations), @utility classes, scroll-reveal CSS
  branches/[slug]/page.tsx  SSG page per branch (generateStaticParams, dynamicParams=false) reusing home sections
  ai-courses/page.tsx       AI hub (all AI course cards) — target of the AI pill + "Explore AI"
  courses/page.tsx          Courses hub (grouped neumorphic cards) — target of "Browse all courses"
  courses/[slug]/page.tsx   SSG page per Courses-dropdown link (27): NEUMORPHIC, light hero (no side card), NO pricing,
                            17 sections + JSON-LD (Course w/o offers, BreadcrumbList, FAQPage)
  training/page.tsx + [slug]/page.tsx  Internship & Training hub + 12 SSG slug pages (dynamicParams=false) in the SITE THEME
                            (reference page supplied only the section list), NO pricing/salary, 21 sections + JSON-LD
  after-12th/page.tsx + [slug]/page.tsx  After 12th hub (grouped by duration) + 29 SSG slug pages (dynamicParams=false):
                            NEUMORPHISM (bg-neu) + SOFT UI (bg-soft) alternating, NO pricing/salary, 19 sections + JSON-LD
  ai-courses/[slug]/page.tsx SSG AI course page: 13 sections + JSON-LD (Course, BreadcrumbList, FAQPage). Spec: docs/ai-course-page.md
  sitemap.ts / robots.ts / not-found.tsx
src/components/
  layout/  Header ("use client"): DARK navy sticky bar (bg-ink-950 + faint grid) matching the official techcadd header —
           white "techcadd™" wordmark, menu from `nav` in site.ts (Home, About Us▾, AI✦▾ glowing blue pill, Courses▾ (mega 2-col),
           Internship & Training▾, After 12th▾, Resources▾, Contact Us), blue glowing "Book Demo". Dropdowns are CSS-only
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
           Regular top items get an animated underline while hovered/open (after: pseudo).
           Helpers in Header: hasMenu(), isWide(), mobileLinks() (drawer flattens skills groups). SCROLLED (>12px): outer bar turns transparent + pointer-events-none and the inner row becomes a
           floating frosted-white rounded-full pill (bg-white/90, blur, shadow), navy logo (`Logo dark={!scrolled}`), ink-700 links;
           AI pill + Book Demo stay blue. Outer height fixed at h-24 in both states → no layout jump. Full nav at xl+ (≥1280px); below that a dark drawer with <details> accordions + branch chips.
           TopBar.tsx (dark contact strip) exists but is NOT mounted (removed to match reference) — re-add in layout.tsx if wanted.
           Footer (CTA strip, 5 columns from footerLinks, branch chips, rating, socials; id="contact") · FloatingActions (WhatsApp + call)
  ui/      ScrollAnimator ("use client", the ONLY global observer) · Counter · SectionHeading (+ `delay(i)` helper)
           Marquee (pure CSS) · Icon · Logo (text wordmark "techcadd™" + tagline; `dark` prop for white) · SocialIcons (+ whatsappPath)
  home/    Hero · TrustStrip · About · Categories · AiProgram · Courses(+CourseExplorer "use client" filter tabs)
           HowItWorks · WhyUs (bento) · Programs (industrial training/after 12th) · Placements · Branches
           Technologies (+TechOrbit "use client": category tabs, 2 rotating logo rings, CSS tooltips; first 5 items = inner ring; rotation via `.orbit-spin` in globals.css, pauses on hover) · Testimonials · Faq (<details>, no JS) · Blog · DemoCta(+DemoForm "use client")
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
src/lib/whatsapp.ts  waLink(text) → wa.me URL with pre-filled message
docs/ai-course-page.md  Design spec for AI course pages (tokens, states, a11y acceptance criteria, QA checklist)
```
Home section order & anchor ids: Hero → TrustStrip → `#about` → `#categories` → `#ai-program` → `#courses`
→ `#how-it-works` → `#why-us` → `#programs` → `#placements` → `#branches` → `#technologies`
→ `#testimonials` → `#faq` → `#blog` → `#demo` → footer `#contact`. Nav links use `/#id`.

## Design system
- Colors: `brand-50…900` (blue, primary), `accent-400…600` (orange, CTAs), `ink-300…950` (navy text/dark bgs).
- Utilities: `container-x`, `section` (vertical padding), `eyebrow` / `eyebrow-dark`, `btn-primary` (orange),
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
- Section header: always `<SectionHeading eyebrow title text dark? align?>`; highlight words with `<span className="text-gradient">`.

## Animations (performance-critical — follow this)
- Scroll reveal: add `data-reveal="up|down|left|right|zoom|fade"` to any element; stagger with `style={delay(i)}`.
  CSS in globals.css; ScrollAnimator adds `.is-visible`. Hidden state only applies with JS on + no reduced-motion.
- Number counters: `<Counter value={500} suffix="+" />` (server-rendered final value, animated by ScrollAnimator).
- **Don't** put `data-reveal` on elements rendered after client state changes (e.g. filtered lists) — they'd stay
  hidden. Use the CSS keyframe `animate-[fadeUp_...]` instead (see CourseExplorer).
- **Don't** put `data-reveal` on the Hero H1 (LCP).
- Keep components as Server Components; only Header, ScrollAnimator, CourseExplorer, DemoForm, TechOrbit, CourseNav, CurriculumTabs, EnquiryForm are client.

## Known placeholders / TODO (verify with client)
- Stats (50,000+ alumni, 500+ partners, 92% placement, 18 LPA, etc.), testimonials, blog posts, recruiter names,
  university list are **sample content** — confirm real figures before launch.
- Social URLs in `site.socials` are generic; email `info@techcaddjalandhar.com` is assumed.
- Logo is an SVG placeholder (`ui/Logo.tsx`) → replace with official logo in `/public`.
- DemoForm has no backend: opens WhatsApp with pre-filled text. For CRM, add `src/app/api/lead/route.ts` and fetch it.
- Blog cards/"Download Curriculum" link to anchors; no blog/course detail pages yet.
- Unused scaffold files in `/public` (next.svg, vercel.svg, etc.) can be deleted.
- AI course pages show NO pricing (no fee/EMI/₹, no JSON-LD Offer) — fees go via counsellor. AI mentors (names/bios), AI student stories, batch timings are **sample content**. Tools use monogram
  placeholders (no logo files yet).
- Contrast: white text on `btn-primary` orange ≈2.6:1 (fails AA) and `text-gradient`'s orange tail on white — needs a
  brand decision (see docs/ai-course-page.md §7 "Open accessibility issues").

## Changelog
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
