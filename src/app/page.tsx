import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Categories } from "@/components/home/Categories";
import { AiProgram } from "@/components/home/AiProgram";
import { Courses } from "@/components/home/Courses";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { Difference } from "@/components/home/Difference";
import { Programs } from "@/components/home/Programs";
import { Placements } from "@/components/home/Placements";
import { Branches } from "@/components/home/Branches";
import { Technologies } from "@/components/home/Technologies";
import { Testimonials } from "@/components/home/Testimonials";
import { GuidanceSection } from "@/components/home/GuidanceSection";
import { Faq } from "@/components/home/Faq";
import { Blog } from "@/components/home/Blog";
import { DemoCta } from "@/components/home/DemoCta";
import { branches, faqs, site } from "@/data/site";

/** Home page = ordered list of sections. Reorder/remove sections here. */
export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      description: site.description,
      address: { "@type": "PostalAddress", streetAddress: site.address, addressRegion: "Punjab", addressCountry: "IN" },
      areaServed: ["Punjab", "Chandigarh", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Delhi"],
      aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.score, reviewCount: site.rating.reviews.replace(/\D/g, "") },
      department: branches.map((b) => ({ "@type": "EducationalOrganization", name: `${site.name} ${b.city}`, address: `${b.city}, ${b.state}` })),
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
      <Hero />
      <About />
      <Categories />
      <AiProgram />
      <Courses />
      <HowItWorks />
      <WhyUs />
      <Difference />
      <Programs />
      <Placements />
      <Branches />
      <Technologies />
      <Testimonials />
      <GuidanceSection />
      <Faq />
      <Blog />
      <DemoCta />
    </>
  );
}
