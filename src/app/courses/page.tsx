import type { Metadata } from "next";
import * as simpleIcons from "simple-icons";
import { courseGroups, coursePages } from "@/data/course-pages";
import { courseCatalog } from "@/data/course-pages/catalog";
import { CourseSearch, DemoClassButton, type CourseItem, type CourseSection } from "@/components/course-page/CourseSearch";

type SimpleIcon = { path: string; hex: string };
const iconSet = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

const BRAND = "#1d53f0";

/** Tile logo rules, first match wins (tested against "<slug> <name>"). `si…` = simple-icons export, otherwise a monogram. */
const logoRules: [RegExp, string][] = [
  [/python/, "siPython"], [/kotlin/, "siKotlin"], [/c-cpp|c\+\+/, "siCplusplus"], [/web-design|html/, "siHtml5"],
  [/web-development|javascript/, "siJavascript"], [/mern/, "siReact"], [/mean/, "siAngular"], [/php/, "siPhp"], [/\bjava\b/, "siOpenjdk"],
  [/machine-learning/, "siScikitlearn"], [/deep-learning/, "siTensorflow"], [/data-science/, "siJupyter"], [/data-analytics/, "siPandas"],
  [/power-bi/, "BI"], [/tableau/, "Tb"], [/artificial-intelligence/, "AI"],
  [/^ui-ux/, "siFigma"], [/^geo/, "GEO"], [/^aeo/, "AEO"], [/google-ads/, "siGoogleads"], [/meta-ads/, "siMeta"], [/social-media/, "siInstagram"], [/\bseo\b/, "siGooglesearchconsole"],
  [/wordpress/, "siWordpress"], [/shopify/, "siShopify"], [/digital-marketing/, "siGoogleanalytics"],
  [/ethical-hacking/, "siKalilinux"], [/cybersecurity/, "siHackthebox"], [/network-security/, "siCisco"], [/soc-analyst/, "siSplunk"],
  [/\baws\b/, "AWS"], [/azure/, "Az"], [/cloud-computing/, "siGooglecloud"], [/devops/, "siDocker"], [/linux/, "siLinux"],
  [/autocad/, "siAutocad"], [/revit/, "siAutodeskrevit"], [/sketchup/, "siSketchup"], [/3ds max/, "siAutodesk"],
  [/solidworks|catia/, "siDassaultsystemes"], [/coreldraw/, "siCoreldraw"], [/quickbooks/, "siQuickbooks"], [/google workspace/, "siGoogle"],
];

/** Brand logo when a rule names one that exists in simple-icons, else initials (first letters of the first two words). */
function logo(key: string, title: string): Pick<CourseItem, "path" | "mono" | "color"> {
  const hit = logoRules.find(([re]) => re.test(key.toLowerCase()))?.[1];
  const icon = hit ? iconSet[hit] : undefined;
  if (icon) return { path: icon.path, color: `#${icon.hex}` };
  const words = title.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const initials = words.length > 1 ? words[0][0] + words[1][0] : title.slice(0, 2);
  return { mono: hit && !hit.startsWith("si") ? hit : initials.toUpperCase(), color: BRAND };
}

/**
 * One section per course group (normal course pages → one tile each), then one section per "More Courses" catalog page,
 * expanded into a tile per course name (deduped; names that already have their own page are skipped) that links to the
 * part of the catalog page listing it.
 */
const seen = new Set<string>();
const sections: CourseSection[] = [
  ...courseGroups
    .map((g) => ({
      id: g.id,
      title: g.title,
      items: coursePages.filter((c) => c.group === g.id && !courseCatalog[c.slug]).map((c): CourseItem => ({
        id: c.slug, title: c.navLabel, href: `/courses/${c.slug}`, keywords: [c.title, c.tagline, c.level, ...c.tools].join(" "),
        ...logo(`${c.slug} ${c.navLabel}`, c.navLabel),
      })),
    })),
  ...coursePages.filter((c) => courseCatalog[c.slug]).map((c) => ({
    id: c.slug,
    title: c.navLabel,
    items: courseCatalog[c.slug].flatMap((s, si) =>
      s.items.filter((it) => !it.href && !seen.has(it.name) && seen.add(it.name)).map((it): CourseItem => ({
        id: `${c.slug}-${it.name}`, title: it.name, href: `/courses/${c.slug}#catalog-${si}`, keywords: `${s.title} ${it.text}`,
        ...logo(it.name, it.name),
      })),
    ),
  })),
].filter((s) => s.items.length > 0);

const total = sections.reduce((n, s) => n + s.items.length, 0);

export const metadata: Metadata = {
  title: "Best IT, AI & Software Courses in Jalandhar",
  description: `Search ${total} job-ready courses at TechCADD Jalandhar: Python, Java, MERN, Data Science, Power BI, Digital Marketing, SEO, Cybersecurity, Cloud, AutoCAD, Tally and more — with live projects and placement support.`,
  alternates: { canonical: "/courses" },
};

/** All-courses page: target of the header "Courses" item and "Browse all courses". Layout mirrors the reference courses page, in the site theme. */
export default function CoursesPage() {
  return (
    <article className="bg-white">
      <section className="on-dark relative isolate overflow-hidden bg-ink-950 py-16 text-white lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute -left-1/4 -top-1/3 h-[140%] w-[70%] -rotate-12 bg-linear-to-br from-brand-500/25 via-brand-600/10 to-transparent blur-[120px]" />
          <div className="absolute -bottom-1/3 -right-1/4 h-[120%] w-[55%] -rotate-12 bg-linear-to-tl from-accent-500/20 to-transparent blur-[120px]" />
        </div>
        <div className="container-x">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-md">Courses</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] text-balance lg:text-6xl">
            Best IT, AI &amp; Software Courses <span className="text-gradient">in Jalandhar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            From AI and data to full-stack and cloud, each track is built like real industry work: mentor-led labs, live
            projects, interview-focused outcomes and placement support.
          </p>
          <DemoClassButton />
        </div>
      </section>

      <CourseSearch sections={sections} sub="Jalandhar · Live projects" />
    </article>
  );
}
