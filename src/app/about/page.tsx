import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  AboutApproach, AboutAudience, AboutBelief, AboutCta, AboutDifference, AboutDomains, AboutEcosystem, AboutHero,
  AboutIndustry, AboutJourney, AboutMatters, AboutRecognition, AboutTeach, AboutTimeline,
} from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About TechCADD — IT Training Institute in Jalandhar Since 2007",
  description:
    "TechCADD has been building tech careers across Punjab, Chandigarh and North India since 2007 — practical training in AI, data science, full stack, cyber security, digital marketing and CAD with projects and placement assistance.",
  alternates: { canonical: "/about" },
};

/** "About techcadd" (About Us dropdown). Site theme; content in src/data/about.ts. */
export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `About ${site.name}`,
      url: `${site.url}/about`,
      mainEntity: {
        "@type": "EducationalOrganization",
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        foundingDate: "2007",
        founder: { "@type": "Person", name: "Gourav Gupta" },
        telephone: site.phone,
        email: site.email,
        address: site.address,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "About techcadd", item: `${site.url}/about` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <AboutHero />
      <AboutTeach />
      <AboutEcosystem />
      <AboutMatters />
      <AboutAudience />
      <AboutJourney />
      <AboutDifference />
      <AboutDomains />
      <AboutApproach />
      <AboutIndustry />
      <AboutRecognition />
      <AboutTimeline />
      <AboutBelief />
      <AboutCta />
    </>
  );
}
