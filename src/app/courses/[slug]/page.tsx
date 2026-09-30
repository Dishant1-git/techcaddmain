import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { courseCommon, courseGroup, coursePages } from "@/data/course-pages";
import { CourseNav, type CourseNavItem } from "@/components/course/CourseNav";
import { CpHero } from "@/components/course-page/CpHero";
import { CpMethod, CpOverview, CpSyllabus } from "@/components/course-page/CpLearn";
import { CpAudience, CpCareers, CpMentor, CpProjects, CpTools } from "@/components/course-page/CpShowcase";
import { CpCertification, CpEnrol, CpFaq, CpRelated, CpReviews, CpTracks, CpWhy } from "@/components/course-page/CpTrust";

/** One statically generated page per entry in `coursePages` (src/data/course-pages). Neumorphic design, no pricing. */
export const dynamicParams = false;

export function generateStaticParams() {
  return coursePages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = coursePages.find((x) => x.slug === slug);
  if (!c) return {};
  const title = `${c.title} in Jalandhar — Live Projects & Placement Support`;
  const description = `${c.tagline} ${c.duration} ${c.title.toLowerCase()} at ${site.name} Jalandhar with ${c.projects.length} portfolio projects, certification and placement assistance. Classroom & live online batches.`;
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

  return (
    <div className="bg-neu">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      {/* Reading progress (CSS scroll-driven; hidden where unsupported or motion is reduced). */}
      <div aria-hidden className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[60] hidden h-1 bg-linear-to-r from-brand-500 via-brand-400 to-accent-500 supports-[animation-timeline:scroll()]:motion-safe:block" />
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
