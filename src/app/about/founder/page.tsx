import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  FounderClosing, FounderConnect, FounderGallery, FounderHero, FounderJourneySection, FounderMeet, FounderReelsSection,
  FounderRoles, FounderTestimonialsSection,
} from "@/components/founder/FounderSections";

export const metadata: Metadata = {
  title: "Our Founder, Mr. Gourav Gupta | techcadd Jalandhar",
  description: "Meet Gourav Gupta, founder of techcadd — an entrepreneur, mentor and career coach who went from driving an auto to building a technology training institute.",
  alternates: { canonical: "/about/founder" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    { "@type": "ListItem", position: 3, name: "Our Founder", item: `${site.url}/about/founder` },
  ],
};

/** "Our Founder" (About Us dropdown). 9 sections in the reference page's order; content in src/data/founder.ts. */
export default function FounderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <FounderHero />
      <FounderMeet />
      <FounderGallery />
      <FounderRoles />
      <FounderJourneySection />
      <FounderClosing />
      <FounderTestimonialsSection />
      <FounderReelsSection />
      <FounderConnect />
    </>
  );
}
