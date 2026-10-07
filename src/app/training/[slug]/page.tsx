import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { trainingCommon, trainingPages } from "@/data/training";
import { TrNav, type TrNavItem } from "@/components/training/TrNav";
import { TrHero } from "@/components/training/TrHero";
import { TrEligibility, TrOverview, TrStats, TrSyllabus, TrTools, TrTracks, TrWhyNow } from "@/components/training/TrLearn";
import { TrCertification, TrCompare, TrLoop, TrProjects, TrScope, TrWhy } from "@/components/training/TrProof";
import { longFormFor } from "@/data/long-form";
import { clip, ogImages } from "@/lib/seo";
import { LfRegions, LfWhy } from "@/components/long-form/LongFormSections";
import { TrEnquire, TrFaq, TrModes, TrRelated, TrReviews, TrStart } from "@/components/training/TrConnect";

/**
 * /training/<slug> — one statically generated page per tile in the Internship & Training dropdown
 * (slugs come from src/data/training; unknown slugs 404). Site theme; section list follows the reference
 * course page. No pricing or salary figures anywhere.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return trainingPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/training/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = trainingPages.find((x) => x.slug === slug);
  if (!c) return {};
  const title = `${c.title} in Jalandhar: Projects & Internship`;
  const description = `${c.tagline} Industrial training at ${site.name} Jalandhar with live client projects, an internship letter and placement assistance. 3, 6 and 9-month tracks; classroom & live online.`;
  return {
    title,
    description: clip(description),
    alternates: { canonical: `/training/${c.slug}` },
    openGraph: { title, description: c.tagline, url: `/training/${c.slug}`, images: ogImages },
  };
}

/** In-page nav order = section order below. Keep ids in sync with each section's `id`. */
const sections: TrNavItem[] = [
  { id: "tracks", label: "Tracks" },
  { id: "overview", label: "Overview" },
  { id: "syllabus", label: "Syllabus" },
  { id: "eligibility", label: "Eligibility" },
  { id: "tools", label: "Tools" },
  { id: "certification", label: "Certificate" },
  { id: "scope", label: "Career Scope" },
  { id: "projects", label: "Projects" },
  { id: "why", label: "Why Us" },
  { id: "reviews", label: "Reviews" },
  { id: "modes", label: "Modes" },
  { id: "faq", label: "FAQ" },
  { id: "enquire", label: "Enquire" },
];

export default async function TrainingPage({ params }: PageProps<"/training/[slug]">) {
  const { slug } = await params;
  const course = trainingPages.find((c) => c.slug === slug);
  if (!course) notFound();

  // Client long-form copy for this subject (states, why this program, extra FAQs); undefined for programs without one.
  const longForm = longFormFor(course.slug);
  const faqs = [...course.faqs, ...(longForm?.faqs ?? []), ...trainingCommon.faqs].filter((f, i, all) => all.findIndex((x) => x.q === f.q) === i);
  // Six related cards: this program's `related` list first, then other programs to fill.
  const picked = course.related.map((s) => trainingPages.find((c) => c.slug === s)).filter((c) => c !== undefined);
  const related = [...picked, ...trainingPages.filter((c) => c.slug !== course.slug && !picked.includes(c))].slice(0, 6);
  const url = `${site.url}/training/${course.slug}`;

  // Deliberately no `offers`/price — pricing is never shown on training pages.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.tagline,
      url,
      provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url },
      educationalLevel: course.level,
      teaches: course.concepts,
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
        { "@type": "ListItem", position: 2, name: "Internship & Training", item: `${site.url}/training` },
        { "@type": "ListItem", position: 3, name: course.navLabel, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [...faqs, ...course.outcomes].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <TrHero course={course} />
      <TrNav items={sections} />
      <TrTracks course={course} />
      <TrStats />
      <TrOverview course={course} />
      <TrSyllabus course={course} />
      <TrWhyNow course={course} />
      <TrEligibility course={course} />
      <TrTools course={course} />
      <TrCertification course={course} />
      <TrScope course={course} />
      <TrProjects course={course} />
      <TrLoop />
      <TrWhy />
      <TrCompare />
      {longForm && <LfWhy data={longForm} />}
      {longForm && <LfRegions data={longForm} />}
      <TrReviews />
      <TrModes />
      <TrFaq course={course} faqs={faqs} />
      <TrStart course={course} />
      <TrRelated courses={related} />
      <TrEnquire course={course} courses={trainingPages.map((c) => c.navLabel)} />
    </>
  );
}
