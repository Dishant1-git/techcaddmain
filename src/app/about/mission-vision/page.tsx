import type { Metadata } from "next";
import { site } from "@/data/site";
import { AboutCta } from "@/components/about/AboutSections";
import { MvFuture, MvHero, MvMission, MvVision } from "@/components/about/MissionSections";

export const metadata: Metadata = {
  title: "Mission and Vision — TechCADD",
  description:
    "TechCADD's mission is to bridge education with industry through accessible, practical technology training. Our vision: building India's future-ready technology workforce.",
  alternates: { canonical: "/about/mission-vision" },
};

/** "Mission and Vision" (About Us dropdown). Site theme; content in src/data/about.ts (`missionVision`). */
export default function MissionVisionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About techcadd", item: `${site.url}/about` },
      { "@type": "ListItem", position: 3, name: "Mission and Vision", item: `${site.url}/about/mission-vision` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <MvHero />
      <MvMission />
      <MvVision />
      <MvFuture />
      <AboutCta />
    </>
  );
}
