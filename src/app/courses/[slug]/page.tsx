import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { courseCommon, courseGroup, coursePages } from "@/data/course-pages";
import { courseCatalog } from "@/data/course-pages/catalog";
import { CourseNav, type CourseNavItem } from "@/components/course/CourseNav";
import { CatalogHero, CatalogSections } from "@/components/course-page/CpCatalog";
import { CpHero } from "@/components/course-page/CpHero";
import { CpMethod, CpOverview, CpSyllabus } from "@/components/course-page/CpLearn";
import { CpAudience, CpCareers, CpMentor, CpProjects, CpTools } from "@/components/course-page/CpShowcase";
import { CpCertification, CpEnrol, CpFaq, CpRelated, CpReviews, CpTracks, CpWhy } from "@/components/course-page/CpTrust";

/** One statically generated page per entry in `coursePages` (src/data/course-pages). Neumorphic design, no pricing.
 *  Slugs listed in `courseCatalog` ("More Courses") render a page of course CARDS instead of the single-course layout. */
export const dynamicParams = false;

export function generateStaticParams() {
  return coursePages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = coursePages.find((x) => x.slug === slug);
  if (!c) return {};
  const catalog = courseCatalog[c.slug];
  const title = catalog
    ? `${c.navLabel} Courses in Jalandhar — Certification & Placement Support`
    : `${c.title} in Jalandhar — Live Projects & Placement Support`;
  const description = catalog
    ? `${c.tagline} Choose from ${catalog.flatMap((s) => s.items).length} ${c.navLabel} courses at ${site.name} Jalandhar. Classroom & live online batches.`
    : `${c.tagline} ${c.duration} ${c.title.toLowerCase()} at ${site.name} Jalandhar with ${c.projects.length} portfolio projects, certification and placement assistance. Classroom & live online batches.`;
  return {
    title,
    description,
    alternates: { canonical: `/courses/${c.slug}` },
    openGraph: { title, description: c.tagline, url: `/courses/${c.slug}` },
  };
}

/** In-page nav order = section order below. Keep ids in sync with each section's `id`. */
const sections: CourseNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "syllabus", label: "Syllabus" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "careers", label: "Careers" },
  { id: "tracks", label: "Batches" },
  { id: "certification", label: "Certification" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
];

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = coursePages.find((c) => c.slug === slug);
  if (!course) notFound();

  const group = courseGroup(course.group);
  const faqs = [...course.faqs, ...courseCommon.faqs];
  const related = course.related.map((s) => coursePages.find((c) => c.slug === s)).filter((c) => c !== undefined);
  const url = `${site.url}/courses/${course.slug}`;

  // Deliberately no `offers`/price — pricing is never shown on course pages.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.tagline,
      url,
      provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url },
      educationalLevel: course.level,
      teaches: course.gains,
      hasCourseInstance: [
        { "@type": "CourseInstance", courseMode: "Onsite", location: site.address },
        { "@type": "CourseInstance", courseMode: "Online" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${site.url}/courses` },
        { "@type": "ListItem", position: 3, name: course.navLabel, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  const catalog = courseCatalog[course.slug];
  if (catalog) {
    const items = catalog.flatMap((s) => s.items);
    const names = [...new Set(items.map((i) => i.name))];
    const catalogLd = [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${course.navLabel} courses`,
        itemListElement: names.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
      },
      ...jsonLd.slice(1),
    ];
    return (
      <div className="bg-neu">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogLd).replace(/</g, "\\u003c") }} />
        <CatalogHero course={course} count={items.length} />
        <CatalogSections sections={catalog} />
        <CpFaq course={course} faqs={faqs} />
        <CpEnrol course={course} courses={[course.navLabel, ...names]} />
      </div>
    );
  }

  return (
    <div className="bg-neu">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      {/* Reading progress (CSS scroll-driven; hidden where unsupported or motion is reduced). */}
      <div aria-hidden className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[60] hidden h-1 bg-accent-500 supports-[animation-timeline:scroll()]:motion-safe:block" />
      <CpHero course={course} group={group} />
      <CourseNav items={sections} variant="neu" />
      <CpOverview course={course} />
      <CpSyllabus course={course} />
      <CpMethod />
      <CpTools course={course} />
      <CpProjects course={course} />
      <CpAudience course={course} group={group} />
      <CpCareers course={course} />
      <CpMentor group={group} />
      <CpWhy />
      <CpTracks course={course} />
      <CpCertification course={course} />
      <CpReviews />
      <CpFaq course={course} faqs={faqs} />
      <CpRelated courses={related} />
      <CpEnrol course={course} courses={coursePages.map((c) => c.navLabel)} />
    </div>
  );
}
