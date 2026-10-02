import Link from "next/link";
import { ArrowRight, Info, MessageCircle } from "lucide-react";
import type { CoursePage } from "@/data/course-pages";
import type { CatalogItem, CatalogSection } from "@/data/course-pages/catalog";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/course/Breadcrumb";

/** Two-letter tile label: initials of the first two words, or the first two letters of a single word. */
const monogram = (name: string) => {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2)).toUpperCase();
};

/** Hero for a "More Courses" catalog page: neumorphic, centred, no pricing. H1 has no entrance animation (LCP). */
export function CatalogHero({ course, count }: { course: CoursePage; count: number }) {
  return (
    <section className="relative isolate overflow-x-clip bg-neu pb-6 pt-10 md:pt-14">
      <div aria-hidden className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: course.navLabel }]} />
          </div>
          <span aria-hidden className="neu-icon mx-auto mt-8 size-20 !rounded-[1.75rem]">
            <Icon name={course.icon} className="size-9" />
          </span>
          <p className="eyebrow mt-6 !border-0 !bg-neu shadow-neu-inset-sm">{count} courses to choose from</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            {course.navLabel} <span className="text-gradient">courses in Jalandhar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">{course.tagline}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="#enrol" className="btn-neu-primary">Book a Free Demo Class <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="#catalog-0" className="btn-neu">See all {count} courses</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** One card per course name. With `href` the whole card opens that course page; otherwise the action is a WhatsApp enquiry. */
function CatalogCard({ item }: { item: CatalogItem }) {
  return (
    <article className="neu neu-hover group relative flex h-full flex-col p-6 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-brand-500">
      <span aria-hidden className="neu-icon size-12 font-display text-sm font-extrabold tracking-wide transition-colors duration-300 group-hover:text-accent-600">
        {monogram(item.name)}
      </span>
      <h3 className="mt-5 text-xl font-bold leading-snug text-ink-900 group-hover:text-brand-700">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{item.text}</p>
      {item.note && (
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-ink-700"><Info className="size-3.5 shrink-0 text-accent-600" aria-hidden /> {item.note}</p>
      )}
      <div className="mt-6 text-sm font-semibold text-brand-700">
        {item.href ? (
          <Link href={item.href} className="flex items-center gap-1 outline-none after:absolute after:inset-0 after:rounded-[1.75rem]">
            View course <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        ) : (
          <a
            href={waLink(`Hi TechCADD, I'd like details of the ${item.name} course (syllabus, duration and next batch).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 outline-none after:absolute after:inset-0 after:rounded-[1.75rem]"
          >
            <MessageCircle className="size-4" aria-hidden /> Enquire on WhatsApp<span className="sr-only"> about {item.name} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function CatalogSections({ sections }: { sections: CatalogSection[] }) {
  return (
    <>
      {sections.map((s, si) => (
        <section key={s.title} id={`catalog-${si}`} aria-labelledby={`catalog-${si}-title`} className="section scroll-mt-16 overflow-x-clip bg-neu !pb-0">
          <div className="container-x">
            <SectionHeading
              id={`catalog-${si}-title`}
              align="left"
              eyebrow={`${String(si + 1).padStart(2, "0")} · ${s.items.length} courses`}
              title={s.title}
              text={s.text}
            />
            <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {s.items.map((item, i) => (
                <li key={item.name} data-reveal="up" style={delay(i % 4, 70)}>
                  <CatalogCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
