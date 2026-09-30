# AI Course Page — Design & Implementation Spec

> Scope: the 8 pages linked from the **AI** dropdown (`/ai-courses/<slug>`) plus the `/ai-courses` hub.
> Structure follows `design.md` (Required Output Structure). Visual language is the **existing TechCADD theme**
> (`src/app/globals.css`), not the palette extracted into design.md.

## 1. Design intent

Each AI course page must turn a curious visitor into a booked demo class. It should read like the rest of techcadd: confident, local and proof-heavy, with the dark-navy / blue / orange rhythm and scroll motion that never gets in the way of reading.

## 2. Context and goals

| | |
|---|---|
| Audience | Students (after 12th, B.Tech/BCA/MCA), working professionals and business owners in Punjab, Chandigarh Tricity and North India |
| Primary action | **Book a Free Demo Class** (form at `#enrol`) |
| Secondary actions | Get the syllabus on WhatsApp · call a counsellor · compare AI courses |
| Success metrics | Demo-form submissions per visit · WhatsApp syllabus clicks · scroll depth past the curriculum |
| Performance budget | LCP < 2.0 s on 4G (the H1 is the LCP element, with no reveal on it) · CLS < 0.05 · client JS for the page = CourseNav + CurriculumTabs + EnquiryForm only |

Pages (`src/data/site.ts → aiCourses`):
`generative-ai` · `artificial-intelligence` · `prompt-engineering` · `chatgpt-ai-tools` · `agentic-ai` · `ai-powered-marketing` · `rag` · `machine-learning`.

## 3. Design tokens and foundations (design.md → TechCADD theme)

All values below are Tailwind v4 tokens defined in `globals.css @theme`. Components **must** use these names and **must not** use raw hex values.

### Typography
| design.md | TechCADD token | Use |
|---|---|---|
| `font.family.primary = Inter` | `font-sans` → Inter | Body, UI, forms |
| — (not captured) | `font-display` → Plus Jakarta Sans 600/700/800 | h1–h4, stats |
| `font.size.base 16 / lh 24` | `text-base` / `leading-relaxed` for long copy | Body |
| `font.size.xs–4xl (10–20px)` | `text-xs 12` · `sm 14` · `base 16` · `lg 18` · `xl 20` · `2xl 24` · `3xl 30` · `4xl 36` · `5xl 48` · `6xl 60` | See the scale below |

Type scale (must not be changed per page):
- **H1 (hero):** `text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance`
- **H2 (section):** always rendered by `<SectionHeading>`: `text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]`
- **H3 (card):** `text-lg`–`text-xl font-bold`
- **Eyebrow:** the `eyebrow` / `eyebrow-dark` utility (12px, uppercase, 0.14em tracking)
- **Body:** `text-base`/`text-lg` with `leading-relaxed`. Meta text is `text-sm`. Legal and footnote text is `text-xs` (the smallest size allowed).

### Colour
| design.md | TechCADD token | Role |
|---|---|---|
| `color.text.primary #0f172a` | `ink-900` | Headings, strong text on light |
| `color.text.tertiary #64748b` | `ink-500` | Secondary text on light (5.6:1 on white) |
| `color.text.secondary #fff` | `white` | Text on dark |
| `color.text.inverse` | `ink-300` | Secondary text on dark (9:1 on ink-950) |
| `color.surface.base #000` | `ink-950` | Dark sections: Hero, Tools, Certification |
| — | `white` / `brand-50/50` | Light section surfaces (alternate) |
| `color.surface.raised #2563eb` | `brand-600` (hover `brand-700`) | Brand buttons, active accents |
| `color.surface.strong #33366f` | `ink-800` / `ink-900` | Active tab, deep panels |
| — | `accent-500` (hover `accent-600`) | Primary CTA (orange) |
| `color.border.default #e2e8f0` | `ink-900/8` (cards), `ink-900/15` (inputs) | Borders on light |
| `color.border.muted` white/12 | `white/10` | Borders on dark |
| `color.border.strong` white/60 | `white/25` | Ghost-dark button border |
| — | `red-600` border / `red-700` text | Error state |
| — | `emerald-400` (dark) / `emerald-700` (light) | Success and "included" ticks |

### Spacing, radius, elevation, motion
| design.md | TechCADD | Rule |
|---|---|---|
| `space.1–8` (1.5–16px) | Tailwind 4px grid | Section `section` (py-20 / md:py-28) · container `container-x` · card padding `p-6`/`p-7`/`p-8` · grid gap `gap-5`/`gap-6` · heading→content `mt-12`/`mt-14` |
| `radius.xs 12` | `rounded-xl` | Inputs, icon tiles |
| `radius.sm 16` | `rounded-2xl` | Cards, accordions, tabs |
| `radius.md 28` | `rounded-3xl` | Certificate, enquiry card |
| `radius.lg (pill)` | `rounded-full` | Buttons, chips, in-page nav |
| `shadow.4` (blue glow) | `card-hover` → `0 24px 48px -20px rgb(29 83 240/.35)` | Hover lift for cards |
| `shadow.2` | `0 30px 70px -30px rgb(6 10 35/.95)` | Certificate mock |
| — | `shadow-lg shadow-accent-500/30` | Primary button |
| `motion.duration.instant 150` | Tailwind default `transition-colors` | Link and colour changes |
| `motion.duration.slow 300` | `duration-300` | Hover transforms, icon rotations |
| `motion.duration.slower 500` | 350 ms accordion · 450 ms tab fade · 800 ms scroll reveal | Easing is always `cubic-bezier(0.22,1,0.36,1)` |

### 3.5 Soft UI — neumorphism + claymorphism

Two materials, each with one job. Tokens live in `globals.css` `@theme` (`--color-clay*`, `--shadow-neu*`, `--shadow-clay*`).

| Material | Utility | Use for | Rule |
|---|---|---|---|
| Neumorphic raised | `neu`, `neu-sm` (+ `neu-hover`) | Cards, accordions, chips, inactive tabs | Parent **must** be `bg-clay`: the illusion only works when the card and surface share a colour. |
| Neumorphic pressed | `neu-inset`, `input-neu` | Wells: stats, meta rows, form fields, open accordion, active nav chip, "selected" | Pressed = "on / selected / holding a value". It is never used for a button's default state. |
| Neumorphic dark | `neu-dark`, `neu-dark-inset` | Tools, certification | Parent **must** be `bg-clay-dark`. |
| Clay object | `clay-icon`, `clay-icon-accent` | Icon tiles, numbers, avatars | Blue = learning/info and orange = people/career. Put at most one accent-tinted object group in each section. |
| Clay card | `clay-card` (blue), `clay-white` | One hero object per section at most: the next-batch card, FAQ help card, active tab, certificate, enquiry form | Text on `clay-card` **must** be white or brand-100. Add `on-dark` so focus rings turn white. |
| Clay button | `btn-clay-primary`, `btn-clay-brand` | Primary CTAs | Puffy gradient + inner highlight; lifts 2px on hover, scales to .98 on active (from `btn`). |
| Neu button | `btn-neu` (`btn-neu-dark` on dark) | Secondary CTAs on clay surfaces | Hover raises it; active presses it inset. |
| Clay orb | `clay-orb`, `clay-orb-accent` | Decoration only | It **must** be `aria-hidden` and must not carry text. The hero may use orbs, but it **must not** use a card or panel. |

- A shadow **must not** be the only signal of a state. Focus uses a solid 2px `brand-500` outline (white on `on-dark`), and errors use a red border and a message.
- Every `neu*` surface has a `border-white/60` hairline, so shapes survive forced-colors and Windows High Contrast.
- `prefers-reduced-motion` turns off hover/press `translate` on `btn-clay`, `btn-neu`, `neu*`, as well as the floating orbs. The shadow state changes remain.
- Contrast on `bg-clay` (#edf1f8): ink-900 is 16:1, ink-700 is 9.4:1 and ink-500 is 5.0:1, so all pass AA. Neither brand-100 on the `clay-card` gradient nor ink-300 on clay-dark goes below 4.5:1.

## 4. Page anatomy (section order)

| # | Section | id | Surface | Component |
|---|---|---|---|---|
| 1 | Hero (single column, clay orbs = decoration only) | – | ink-950 + parallax | `CourseHero` |
| – | In-page nav (sticky) | – | clay/90 blur, active chip inset | `CourseNav` (client) |
| 2 | Overview | `overview` | clay | `CourseOverview` |
| 3 | What you'll learn | `outcomes` | clay | `CourseOutcomes` |
| 4 | Curriculum | `curriculum` | clay | `CourseCurriculum` + `CurriculumTabs` (client) |
| 5 | Tools & technologies | `tools` | clay-dark | `CourseTools` |
| 6 | Who is this for | `audience` | clay | `CourseAudience` |
| 7 | Mentor | `mentor` | clay | `CourseMentor` |
| 8 | Duration, mode, batches (no fees) | `batches` | clay | `CourseBatches` |
| 9 | Certification & placement | `certification` | clay-dark | `CourseCertification` |
| 10 | Testimonials | `reviews` | clay | `CourseStories` |
| 11 | FAQ | `faq` | clay | `CourseFaq` |
| 12 | Related AI courses | `related` | clay | `RelatedCourses` |
| 13 | Final CTA | `enrol` | brand-700→ink-950 gradient | `CourseEnrol` + `EnquiryForm` (client) |

Light sections alternate rhythm through `<SoftBlobs flip?>` glows rather than colour changes; dark sections (5, 9) break up the page.

Every section **must** use `CourseSection` (or match its contract): a `<section id aria-labelledby="{id}-title">` with `scroll-mt-16`, and an H2 with the id `{id}-title`.

## 5. Component rules

State legend: **D** default · **H** hover · **F** focus-visible · **A** active/pressed · **X** disabled · **L** loading · **E** error.

### 5.1 Link (≈136 per page)
| Variant | Class | Where |
|---|---|---|
| Inline | `link` | Body copy on light |
| Inline dark | `link-dark` | Body copy on dark |
| Nav chip | CourseNav anchor | In-page nav |
| Breadcrumb | `Breadcrumb` | Hero |
| Card (stretched) | `AiCourseCard` title link | Related and hub cards |

- **D:** `brand-700` with a 2px `brand-300` underline (offset 4). Links in body copy must always be underlined.
- **H:** text goes to `brand-800` and the underline to `brand-600`. **A:** `brand-900`. **Visited:** `brand-800`.
- **F:** a 2px `brand-500` outline with 3px offset (white on `.on-dark` surfaces). The global fallback in `@layer base` guarantees this for every `a`.
- **X / L / E:** links have no disabled state. If a destination is unavailable, the link must not be rendered; show plain text instead.
- External links (WhatsApp) must use `target="_blank" rel="noopener noreferrer"` and must include the sr-only text "(opens in a new tab)".
- Link text must say where the link goes ("Compare all AI courses"). The texts "Click here" and "Read more" alone are prohibited.

### 5.2 Button (≈39)
| Variant | Class | Use |
|---|---|---|
| Primary | `btn-primary` (orange) | One per viewport: Book demo / Reserve seat / submit |
| Brand | `btn-brand` (blue) | Secondary on light and dark cards |
| Ghost | `btn-ghost` | Tertiary on light |
| Ghost dark | `btn-ghost-dark` | Tertiary on dark |
| Icon button | `btn` + `size-11 !p-0` + `aria-label` | Only when there is no room for text; the target must be ≥ 44×44 |

| State | Rule (all built into the `btn` utility) |
|---|---|
| D | pill, `px-6 py-3 text-sm font-semibold`, min height 44px |
| H | `-translate-y-0.5` and a darker bg (`accent-600` / `brand-700`); ghost buttons get a `brand-600` border and text |
| F | 2px `brand-500` outline, offset 2 (white on `.on-dark`) |
| A | `translate-y-0 scale-[0.98]` |
| X | `disabled` or `aria-disabled="true"` → `opacity-55`, `pointer-events-none` |
| L | `aria-busy="true"` + `aria-disabled="true"`, a spinner (`LoaderCircle animate-spin`) and a progress label ("Sending your enquiry…"). The width must not change. |
| E | Buttons never turn red. The error message is shown next to the button in the live region. |

Keyboard: Enter/Space activate the button. Pointer and touch: the hover lift is decorative only, and no action may depend on hover.

### 5.3 Cards (≈11)
| Card | Anatomy | Interactive? |
|---|---|---|
| Feature / outcome | Icon tile → h3 → text | No (the hover lift is decorative) |
| Audience | Accent icon circle → h3 → text | No |
| Tool | Monogram tile → name → use | No |
| Batch | Clock tile → label → time → mode chip | No |
| Mentor | Photo or initials → name → role → bio → expertise chips → stat row | No |
| Testimonial | Stars → quote → avatar + name/role/city | No |
| Course (`AiCourseCard`) | Tag + duration → h3 link → tagline (clamped to 3 lines) → level + "View course" | **Yes**: a stretched link, a single tab stop, and a focus ring on the card via `has-[:focus-visible]` |

- The `data-reveal` attribute must go on the `<li>` wrapper and `card-hover` on the inner card. This stops hover transitions from inheriting reveal delays.
- **Long content:** titles wrap (never truncate), taglines are clamped to 3 lines, and `min-w-0` goes on flex and grid children. Tool names use `break-words`.
- **Empty:** `RelatedCourses` and `CourseStories` return `null` when their list is empty. The curriculum and FAQ show a counsellor fallback message.

### 5.4 Lists (≈9)
- **Checklist:** a `<ul>` with `CheckCircle2` icons that are `aria-hidden`. The meaning must be carried by the text.
- **Curriculum:** an `<ol>` of modules. Each module is a `<details class="accordion">` whose summary shows the module number, title, meta and a +/× icon, and whose body lists topics and a project callout. The first module of each phase is open by default.
- **FAQ:** `<details class="accordion">` items. The first one is open. `FAQPage` JSON-LD must contain exactly the questions that are rendered.
- Accordion states: **D** a white card. **H** the summary gets a `brand-50/60` bg. **F** a focus ring on the `summary`. **A/open** a `brand-200` border, `shadow-lg`, and the icon rotated 45° on a `brand-600` bg. **X/L/E** do not apply.
- Height animates with `::details-content` + `interpolate-size`. Browsers without support open instantly, with no JS fallback needed. Find-in-page must still open a collapsed item (native `<details>` does this).

### 5.5 Navigation (4)
1. **Sticky header:** the existing `Header`. The AI dropdown links now point to `/ai-courses/<slug>`.
2. **Breadcrumb:** `nav[aria-label=Breadcrumb] > ol`. The current page is marked `aria-current="page"` and is not a link. It is mirrored in `BreadcrumbList` JSON-LD.
3. **In-page anchor nav (`CourseNav`):**
   - Sticky at `top-24`, directly under the header, at `z-40`. On narrow screens it scrolls horizontally.
   - Links are plain `#anchors`, so it works without JS. Scroll-spy sets `aria-current="location"`, which gives the chip a `brand-50` bg and `brand-700` text.
   - The active chip auto-centres itself in the horizontal list.
   - The focus ring is drawn inset (`-outline-offset-2`) so the overflow container cannot clip it.
   - Keyboard: Tab moves through the chips. Enter jumps to the section, and the browser moves the focus start point there.
   - Smooth scrolling comes from `html { scroll-behavior: smooth }` and turns off automatically under reduced motion.
4. **Footer nav:** the existing `Footer`, unchanged.

### 5.6 Tabs (curriculum phases)
- The ARIA tabs pattern, with automatic activation:
  - `role=tablist/tab/tabpanel`, `aria-selected`, `aria-controls` and `aria-labelledby`.
  - Roving `tabIndex`: only the active tab has `tabIndex=0`.
  - Keys: ←/→ wrap around, Home/End jump to the first/last tab, and Tab moves into the panel.
- Tab states:
  - **D:** white with an `ink-900/10` border.
  - **H:** lifts 2px, gets a `brand-200` border and `shadow-md`.
  - **F:** 2px `brand-500` outline.
  - **A (pressed):** `scale-[0.98]`.
  - **Selected:** `ink-900` bg, white text and `shadow-lg`.
- Panels: all panels are server-rendered, and inactive ones get the `hidden` attribute. The incoming panel fades and slides in with the `tabIn` keyframe (450 ms), or has no animation under reduced motion.
- Responsive: below `sm` the tabs are a horizontal snap-scroll row of 240px cards. At `sm` and up they form an equal-width grid (`repeat(n, 1fr)`).

### 5.7 Form field (1 form, 4 fields)
- **Anatomy:** a visible `<label for>` (`text-sm font-semibold`), then the control, then an error line. Placeholder text is only an example and never replaces the label.

| State | Rule |
|---|---|
| D | `rounded-xl` with an `ink-900/15` border and `px-4 py-3.5` |
| H | The border goes to `ink-900/25` |
| F | A `brand-500` border plus a 4px `brand-500/15` ring |
| X | Fields are `disabled` while the form is sending, with an `ink-900/5` bg and `cursor-not-allowed` |
| L | The submit button shows its loading state. Fields are disabled. |
| E | A `red-600` border and ring, `aria-invalid="true"`, and an error line `#enq-{field}-error` (`text-red-700`, icon + text) linked by `aria-describedby`. On submit, focus moves to the first invalid field. Fields are re-validated on blur. |
| Success | The live region announces the next step ("send the message in WhatsApp to confirm your slot"). |
| Submit error | If the pop-up is blocked, the live region explains why and gives a direct link to open WhatsApp. |

- Validation rules:
  - Name: at least 2 characters.
  - Phone: an Indian mobile number matching `^(\+?91)?[6-9]\d{9}$` after spaces and hyphens are stripped.
  - Location and batch: required.
- Backend: `send()` in `EnquiryForm.tsx` is the only function to swap for `fetch("/api/lead")`. The loading and error states already handle async work.

### 5.8 Section-specific rules
- **Hero:**
  - Must not put `data-reveal` on the H1 or the intro text, because they are the LCP content.
  - The hero must be a single column (content capped at `max-w-4xl`). It must not have a card or panel on the right side.
  - Parallax applies only to the decorative glow and grid layers, using CSS scroll-driven animation (`.parallax`, `--parallax` depth).
  - Stat chips wrap onto new lines on mobile.
- **Overview:** at `lg` the layout is text (1.2fr) beside the at-a-glance panel (0.8fr). Below `lg` the panel stacks under the text.
- **Outcomes:** 1 column → 2 at `sm` → 3 at `lg`. The count comes from the data, and 3 to 9 items is supported.
- **Tools:** 2 columns → 3 at `md` → 4 at `lg`. The monograms are placeholders until real logo files exist; logos should be SVG/PNG in `src/assets/tools`, loaded with `next/image`.
- **Mentor:** a photo is optional (`AiMentor.image`) and falls back to initials. Photos must use `next/image` (lazy by default) with `placeholder="blur"`.
- **Batches:** the "Next batch" card (at-a-glance facts, inclusions, CTAs) sits beside the batch grid at `lg`. Branch chips link to `/branches/<slug>`. The timing disclaimer is always shown.
- **Certification:** counters render their final value on the server, and ScrollAnimator animates them. The certificate mock is `role="img"` with a descriptive label.
- **Testimonials / FAQ / Related:** these sections use `defer-render` (`content-visibility: auto`) to skip rendering work until they are near the viewport.

## 6. Motion system

| Effect | Implementation | Reduced motion |
|---|---|---|
| Scroll reveal and stagger | `data-reveal` + `delay(i)` (the global ScrollAnimator IntersectionObserver) | Content is shown immediately |
| Number counters | `<Counter>` | The final value is shown |
| Hero parallax | `.parallax` with `animation-timeline: scroll(root)` in `@supports` | Off |
| Accordion height | `details.accordion::details-content` + `interpolate-size` | Instant |
| Tab crossfade | `animate-[tabIn…]` | `motion-reduce:animate-none` |
| Hover lift + glow | `card-hover`, `btn` | Kept (no motion sickness risk at 2–4px); remove if the client asks |
| Smooth anchor scroll | `html { scroll-behavior: smooth }` | `auto` |

GSAP is **not** used. Everything above is CSS or the existing IntersectionObserver, which adds 0 KB of JS.

## 7. Accessibility acceptance criteria (WCAG 2.2 AA)

Each item is a pass/fail test.

| # | Criterion | Test |
|---|---|---|
| A1 | Exactly one `h1`. Every section has an `h2` whose id matches the section's `aria-labelledby`. | axe: `page-has-heading-one`, `landmark-unique`; inspect in DevTools |
| A2 | Every interactive element shows a visible focus indicator with ≥ 3:1 contrast against its background. | Tab through the whole page on light, dark and gradient sections; no focus may be invisible or clipped |
| A3 | Focus order follows visual order. There are no keyboard traps. | Tab and Shift+Tab end to end |
| A4 | Curriculum tabs: ←/→/Home/End move selection and focus. Only one tab is in the tab order. | Keyboard test + screen reader announces "tab, 1 of 3, selected" |
| A5 | Accordions open and close with Enter/Space and announce their expanded/collapsed state. | NVDA/VoiceOver on a `summary` |
| A6 | Form: every control has a visible label. Errors are announced and linked with `aria-describedby`. Focus moves to the first invalid field. | Submit an empty form with a screen reader running |
| A7 | Status messages (success or pop-up blocked) are announced without moving focus. | `aria-live="polite"` region is read out |
| A8 | Text contrast is ≥ 4.5:1 for body text and ≥ 3:1 for text ≥ 24px, or ≥ 18.66px bold. | Contrast checker on every text/background pair (see Open issues) |
| A9 | Target size is ≥ 24×24 CSS px (2.5.8). Primary touch targets should be ≥ 44px. | Measure chips, tabs, summaries and buttons |
| A10 | Content is fully visible and usable with `prefers-reduced-motion: reduce`. No parallax or tab animation runs. | Emulate in DevTools Rendering panel |
| A11 | Content is visible with JS disabled (no reveal-hidden content). Anchor nav, FAQ and curriculum accordions work. | Disable JS and reload |
| A12 | At 320px width and 200% zoom there is no horizontal page scroll. Only the tab row and nav chips scroll internally. | Responsive mode at 320px; browser zoom at 200% |
| A13 | Sticky header + course nav never cover a focused element or anchor target (2.4.11). | Tab to elements near the top; click each nav chip |
| A14 | New-tab links announce "(opens in a new tab)". | Screen reader link list |
| A15 | Decorative icons are `aria-hidden`. Star ratings have a text alternative. | axe: `svg-img-alt`; inspect |
| A16 | JSON-LD (`Course`, `BreadcrumbList`, `FAQPage`) validates and matches the visible content. | Rich Results Test |

### Open accessibility issues (site-wide, need a brand decision)
1. **White text on the orange `btn-primary`** (`accent-500 #ff7a14`) is about **2.6:1**, and the hover colour `accent-600` is about 3.3:1. This fails 1.4.3 for 14px button text. Options:
   - (a) Darken the CTA bg to about `#c2410c` (5.2:1).
   - (b) Use `ink-950` text on the orange (about 7.4:1).
   - (c) Keep the orange but make button text ≥ 18.66px bold and use `accent-600`. This only reaches 3:1, which is borderline.
   - The recommendation is **(b)**, because it keeps the brand orange.
2. **The `text-gradient` utility on light backgrounds** ends in `accent-400`, which is about 2.1:1 on white. It passes only where the orange tail is short. It should use `brand-500 → brand-700` on light surfaces and keep the orange tail for dark ones.
3. **The home `DemoForm`** uses `placeholder:text-ink-300` (1.9:1) and sr-only labels. It should adopt the `EnquiryForm` field pattern.

## 8. Content and tone standards

The voice is confident, practical and local. It uses second person ("you will build…"), short sentences and concrete proof: numbers, project names and city names. British/Indian spelling is used ("counselling", "enrol", "programme" only in proper names). The site vocabulary is **course, batch, demo class, counsellor, placement assistance, certification, industrial training, live projects**.

| Section | Pattern | Example |
|---|---|---|
| Hero H1 | `{Course} in Jalandhar` | "Agentic AI Course **in Jalandhar**" |
| Hero tagline | Outcome + scope, ≤ 25 words | "Design and deploy AI agents that plan, use tools and complete multi-step tasks on their own." |
| Primary CTA | Verb + object | "Book a Free Demo Class", "Reserve Your Seat" |
| Secondary CTA | What happens + channel | "Get the Syllabus on WhatsApp" |
| Overview | The problem, then how this course solves it, in 2 paragraphs of ≤ 60 words each | — |
| Outcome | 2–4 word title + one sentence starting with a verb | "**Tool calling & MCP** — Connect agents to APIs, databases and apps…" |
| Module | Noun phrase title, 4 topics, 1 named project | "Project: Lead-qualification agent for a Jalandhar business" |
| Audience | Persona title + the benefit to them | "**Final-year students** — Build a standout capstone for campus placements." |
| FAQ question | Includes the course name for SEO where natural | "What should I know before joining Agentic AI?" |
| Error message | What is wrong + how to fix it | "Enter a valid 10-digit Indian mobile number, e.g. 98881 22254." |
| Empty state | Why there is nothing + a next step | "The detailed syllabus is being updated. Ask a counsellor for the latest syllabus." |

Don't: "Click here", "Submit", "Learn more" on its own, unverifiable superlatives ("#1 in India"), fear-of-missing-out countdowns, or jargon in the hero without an explanation.

## 9. Anti-patterns (prohibited)

- Raw hex values, one-off font sizes or spacing values in course components. Tokens and utilities must be used.
- `data-reveal` on the hero H1/intro, on anything inside a `hidden` tab panel, or on content rendered after a client state change.
- Hover transforms and `data-reveal` on the same element (hover inherits the 800 ms reveal transition and delay).
- Removing `outline` without a replacement (`outline-none` is only allowed where a parent draws the ring, as on `AiCourseCard`).
- Scroll-jacking, JS scroll listeners for parallax, or GSAP and other animation libraries.
- Placeholder-only form labels, disabled submit buttons that give no reason, and colour as the only error signal.
- Unmounting inactive tab panels (this loses SEO content and resets accordion state).
- A second `h1`, headings that skip levels, or generic link text.
- Hard-coding course content in components. All copy must come from `site.ts`.
- Showing pricing anywhere on AI course pages: fees, EMI amounts, ₹ figures, discounts, or a schema.org `Offer` with a price. Fee questions must route to a counsellor (form, call, WhatsApp).
- A card, panel or form on the right side of the hero.
- `neu` cards on a white or brand-50 surface (the shadow looks muddy there; use `bg-clay`), `neu-inset` as a button's default state, stacking two clay cards side by side, or shadow-only focus/error states.

## 10. Edge cases and migration notes

- **Long titles:** "RAG (Retrieval-Augmented Generation) Course" wraps using `text-balance`. The breadcrumb's current item truncates on one line.
- **Short courses:** a phase with 1 module shows "1 module". Tabs stretch to fill the row at `sm` and up.
- **Missing data:**
  - An unknown mentor id falls back to the first mentor.
  - An unknown related slug is dropped.
  - An empty curriculum or FAQ list shows the counsellor fallback.
- **Adding a course:** add an entry to `aiCourses`, and add a matching link in the `nav` AI `skills` groups. The page, metadata, sitemap and hub card are created automatically.
- **Real photos and logos:** add a static import to `AiMentor.image` for mentors. Tools currently use monograms.
- **Backend:** replace the body of `send()` in `EnquiryForm`, and add `src/app/api/lead/route.ts`.

## 11. QA checklist

- [ ] `npm run lint` and `npm run build` pass, and all 8 `/ai-courses/*` routes plus `/ai-courses` are prerendered.
- [ ] Each AI dropdown link opens its course page. "Explore AI" and the AI pill open `/ai-courses`.
- [ ] All 13 sections are in the order above. The in-page nav highlights the section in view, and every chip scrolls to the right place without hiding the heading under the sticky bars.
- [ ] Curriculum: switching tabs by mouse, touch and keyboard (←/→/Home/End) works, the panel fades in, and accordions animate in Chrome/Edge and open instantly elsewhere.
- [ ] FAQ: the first item is open, and Enter/Space toggles items.
- [ ] Form: submitting empty shows 4 errors and focuses Name. An invalid phone shows the phone error. A valid submit opens WhatsApp with course, name, phone, location and batch. With pop-ups blocked, the fallback link appears.
- [ ] Reduced motion: no parallax, reveal, tab fade or smooth scroll.
- [ ] JS disabled: all content is visible, anchors work, and the first phase shows (other phases need JS).
- [ ] 320px, 768px, 1280px, 1536px: no horizontal page scroll, and cards and grids reflow as specified.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95 (once the Open issues are resolved: 100), SEO 100.
- [ ] Rich Results Test passes for Course, BreadcrumbList and FAQPage.
- [ ] Every `neu`/`neu-inset` element sits on `bg-clay` (or `neu-dark` on `bg-clay-dark`); keyboard focus is visible on every clay/neu control.
- [ ] No ₹ amount, "fee" figure or `Offer` price appears in the rendered HTML or JSON-LD.
- [ ] Sample content (mentors, stories, stats) confirmed with the client before launch.
