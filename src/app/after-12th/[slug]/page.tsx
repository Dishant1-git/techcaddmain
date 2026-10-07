import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { a12Faqs, a12Pages } from "@/data/after-12th";
import { longFormFor } from "@/data/long-form";
import { clip, ogImages } from "@/lib/seo";
import { LfRegions, LfWhy } from "@/components/long-form/LongFormSections";
import { TrNav, type TrNavItem } from "@/components/training/TrNav";
import { A12Hero } from "@/components/after-12th/A12Hero";
import { A12Advisor, A12Curriculum, A12Eligibility, A12Modules, A12Overview, A12Skills, A12Tools, A12WhyNow } from "@/components/after-12th/A12Learn";
import { A12Certification, A12Loop, A12Projects, A12Scope, A12Why } from "@/components/after-12th/A12Proof";
import { A12Enquire, A12Faq, A12Related, A12Start } from "@/components/after-12th/A12Connect";

/**
 * /after-12th/<slug> — one statically generated page per link in the After 12th dropdown (slug = "<months>-month-<subject>",
 * built in src/data/after-12th; unknown slugs 404). Neumorphism (bg-neu) + Soft UI (bg-soft) sections; the section list
 * follows the reference program page. No pricing or salary figures anywhere.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return a12Pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/after-12th/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = a12Pages.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.title} in Jalandhar`;
  const description = `${p.subject.pitch} A ${p.tier.months}-month practical program at ${site.name} Jalandhar for 12th-pass students of any stream: one project every month, ${p.tier.includes.toLowerCase()}.`;
  return {
    title,
    description: clip(description),
    alternates: { canonical: `/after-12th/${p.slug}` },
    openGraph: { title, description: p.subject.pitch, url: `/after-12th/${p.slug}`, images: ogImages },
  };
}

/** In-page nav order = section order below. Keep ids in sync with each section's `id`. */
const sections: TrNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "learn", label: "What You Learn" },
  { id: "curriculum", label: "Curriculum" },
  { id: "modules", label: "Modules" },
  { id: "tools", label: "Tools" },
  { id: "eligibility", label: "Eligibility" },
  { id: "certification", label: "Certificate" },
  { id: "scope", label: "Scope" },
  { id: "projects", label: "Projects" },
  { id: "why", label: "Why Us" },
  { id: "faq", label: "FAQ" },
  { id: "enquire", label: "Contact" },
];

export default async function After12thPage({ params }: PageProps<"/after-12th/[slug]">) {
  const { slug } = await params;
  const page = a12Pages.find((p) => p.slug === slug);
  if (!page) notFound();

  // Client long-form copy for this subject (states, why this program, extra FAQs); undefined for subjects without one.
  const longForm = longFormFor(page.subject.slug);
  const faqs = [...a12Faqs(page), ...(longForm?.faqs ?? [])].filter((f, i, all) => all.findIndex((x) => x.q === f.q) === i);
  // Six related cards: other durations of this subject first, then other subjects at the same duration.
  const others = a12Pages.filter((p) => p.slug !== page.slug);
  const related = [
    ...others.filter((p) => p.subject.slug === page.subject.slug),
    ...others.filter((p) => p.subject.slug !== page.subject.slug && p.tier.months === page.tier.months),
  ].slice(0, 6);
  const url = `${site.url}/after-12th/${page.slug}`;

  // Deliberately no `offers`/price — pricing is never shown on After 12th pages.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: page.title,
      description: page.subject.pitch,
      url,
      provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url },
      educationalLevel: "Beginner",
      timeRequired: `P${page.tier.months}M`,
      teaches: page.months.map((m) => m.title),
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
        { "@type": "ListItem", position: 2, name: "After 12th", item: `${site.url}/after-12th` },
        { "@type": "ListItem", position: 3, name: page.label, item: url },
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
      <A12Hero page={page} />
      <TrNav items={sections} label="Program sections" />
      <A12Overview page={page} />
      <A12Skills page={page} />
      <A12Curriculum page={page} />
      <A12Modules page={page} />
      <A12Tools page={page} />
      <A12Eligibility page={page} />
      <A12WhyNow page={page} />
      <A12Advisor page={page} />
      <A12Certification page={page} />
      <A12Scope page={page} />
      <A12Projects page={page} />
      <A12Loop />
      <A12Why />
      {longForm && <LfWhy data={longForm} tone="soft" />}
      {longForm && <LfRegions data={longForm} tone="soft" />}
      <A12Related pages={related} />
      <A12Faq page={page} faqs={faqs} />
      <A12Enquire page={page} courses={a12Pages.map((p) => p.label)} />
      <A12Start page={page} />
    </>
  );
}
