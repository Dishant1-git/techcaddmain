import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiCourseCommon, aiCourses, aiMentors, site } from "@/data/site";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseNav, type CourseNavItem } from "@/components/course/CourseNav";
import { CourseOverview } from "@/components/course/CourseOverview";
import { CourseOutcomes } from "@/components/course/CourseOutcomes";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { CourseTools } from "@/components/course/CourseTools";
import { CourseAudience } from "@/components/course/CourseAudience";
import { CourseMentor } from "@/components/course/CourseMentor";
import { CourseBatches } from "@/components/course/CourseBatches";
import { CourseCertification } from "@/components/course/CourseCertification";
import { CourseStories } from "@/components/course/CourseStories";
import { CourseFaq } from "@/components/course/CourseFaq";
import { RelatedCourses } from "@/components/course/RelatedCourses";
import { CourseEnrol } from "@/components/course/CourseEnrol";

/** One statically generated page per entry in `aiCourses` (src/data/site.ts). */
export const dynamicParams = false;

export function generateStaticParams() {
  return aiCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ai-courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = aiCourses.find((x) => x.slug === slug);
  if (!c) return {};
  const title = `${c.title} in Jalandhar — ${c.duration}, Placement Support`;
  return {
    title,
    description: `${c.tagline} ${c.duration} ${c.title.toLowerCase()} at ${site.name} Jalandhar with ${c.projects}+ projects, certification and placement assistance. Classroom & live online batches across North India.`,
    alternates: { canonical: `/ai-courses/${c.slug}` },
    openGraph: { title, description: c.tagline, url: `/ai-courses/${c.slug}` },
  };
}

/** In-page nav order = section order below. Keep ids in sync with each section's `id`. */
const sections: CourseNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "outcomes", label: "What you'll learn" },
  { id: "curriculum", label: "Curriculum" },
  { id: "tools", label: "Tools" },
  { id: "audience", label: "Who it's for" },
  { id: "mentor", label: "Mentor" },
  { id: "batches", label: "Batches" },
  { id: "certification", label: "Certification" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
];

export default async function AiCoursePage({ params }: PageProps<"/ai-courses/[slug]">) {
  const { slug } = await params;
  const course = aiCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  const mentor = aiMentors.find((m) => m.id === course.mentor) ?? aiMentors[0];
  const faqs = [...course.faqs, ...aiCourseCommon.faqs];
  const related = course.related.map((s) => aiCourses.find((c) => c.slug === s)).filter((c) => c !== undefined);
  const url = `${site.url}/ai-courses/${course.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.tagline,
      url,
      provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url },
      educationalLevel: course.level,
      hasCourseInstance: [
        { "@type": "CourseInstance", courseMode: "Onsite", location: site.address, courseWorkload: course.hours },
        { "@type": "CourseInstance", courseMode: "Online", courseWorkload: course.hours },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "AI Courses", item: `${site.url}/ai-courses` },
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <CourseHero course={course} />
      <CourseNav items={sections} />
      <CourseOverview course={course} />
      <CourseOutcomes course={course} />
      <CourseCurriculum course={course} />
      <CourseTools course={course} />
      <CourseAudience course={course} />
      <CourseMentor mentor={mentor} />
      <CourseBatches course={course} />
      <CourseCertification course={course} />
      <CourseStories course={course} />
      <CourseFaq course={course} faqs={faqs} />
      <RelatedCourses courses={related} />
      <CourseEnrol course={course} />
    </>
  );
}
