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
- No animation library. No images yet (all visuals are CSS gradients/SVG) → fast LCP.
- Commands: `npm run dev` · `npm run build` · `npm run lint` · `npm start`.

## Golden rule: content lives in ONE file
**`src/data/site.ts`** = single source of truth. To change text, phone, courses, branches, stats,
FAQs, testimonials, blogs, footer links → edit this file only. Components just render it.
Exports: `site` (name/phone/email/address/hours/rating/socials/url), `branches`, `regions`, `nav` (type `NavItem`: children = dropdown, `mega` = 2-col panel, `featured` = About photo panel, `skills` = AI panel, `columns` = Courses panel, `tiles` = Internship panel, `highlight` = AI pill),
`heroStats`, `categories`, `courses` (type `Course`), `aiProgram`, `steps`, `whyUs`, `programs`,
`placementStats`, `recruiters`, `technologies`, `testimonials`, `faqs`, `blogs`, `footerLinks`.
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
           Technologies · Testimonials · Faq (<details>, no JS) · Blog · DemoCta(+DemoForm "use client")
```
Home section order & anchor ids: Hero → TrustStrip → `#about` → `#categories` → `#ai-program` → `#courses`
→ `#how-it-works` → `#why-us` → `#programs` → `#placements` → `#branches` → `#technologies`
→ `#testimonials` → `#faq` → `#blog` → `#demo` → footer `#contact`. Nav links use `/#id`.

## Design system
- Colors: `brand-50…900` (blue, primary), `accent-400…600` (orange, CTAs), `ink-300…950` (navy text/dark bgs).
- Utilities: `container-x`, `section` (vertical padding), `eyebrow` / `eyebrow-dark`, `btn-primary` (orange),
  `btn-brand` (blue), `btn-ghost`, `btn-ghost-dark`, `card`, `card-hover`, `text-gradient`, `bg-grid` (dark bg), `bg-grid-light`, `mask-fade-x`.
- Pattern: sections alternate white / `bg-brand-50/50` / dark `bg-ink-950` (Hero, AiProgram, Placements) for rhythm.
- Section header: always `<SectionHeading eyebrow title text dark? align?>`; highlight words with `<span className="text-gradient">`.

## Animations (performance-critical — follow this)
- Scroll reveal: add `data-reveal="up|down|left|right|zoom|fade"` to any element; stagger with `style={delay(i)}`.
  CSS in globals.css; ScrollAnimator adds `.is-visible`. Hidden state only applies with JS on + no reduced-motion.
- Number counters: `<Counter value={500} suffix="+" />` (server-rendered final value, animated by ScrollAnimator).
- **Don't** put `data-reveal` on elements rendered after client state changes (e.g. filtered lists) — they'd stay
  hidden. Use the CSS keyframe `animate-[fadeUp_...]` instead (see CourseExplorer).
- **Don't** put `data-reveal` on the Hero H1 (LCP).
- Keep components as Server Components; only Header, ScrollAnimator, CourseExplorer, DemoForm are client.

## Known placeholders / TODO (verify with client)
- Stats (50,000+ alumni, 500+ partners, 92% placement, 18 LPA, etc.), testimonials, blog posts, recruiter names,
  university list are **sample content** — confirm real figures before launch.
- Social URLs in `site.socials` are generic; email `info@techcaddjalandhar.com` is assumed.
- Logo is an SVG placeholder (`ui/Logo.tsx`) → replace with official logo in `/public`.
- DemoForm has no backend: opens WhatsApp with pre-filled text. For CRM, add `src/app/api/lead/route.ts` and fetch it.
- Blog cards/"Download Curriculum" link to anchors; no blog/course detail pages yet.
- Unused scaffold files in `/public` (next.svg, vercel.svg, etc.) can be deleted.

## Changelog
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
