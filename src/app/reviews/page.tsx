import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { reviews, reviewsInitial, reviewStats } from "@/data/reviews";
import { site } from "@/data/site";
import { ReviewGrid } from "@/components/reviews/ReviewGrid";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Student Reviews — 4.9★ Rated IT Training Centre | techcadd",
  description: "Read what techcadd students say about our digital marketing, data analytics, AI, cyber security and full stack courses in Jalandhar.",
  alternates: { canonical: "/reviews" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/reviews` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "techcadd",
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.text,
    })),
  },
];

export default function ReviewsPage() {
  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Reviews</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Reviews</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            In their words, <span className="text-gradient">not ours.</span>
          </h1>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{reviewStats.rating}</span>
                <span className="flex gap-0.5 text-amber-400" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" aria-hidden />)}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-300">{reviewStats.count} reviews on Google</p>
            </div>
            <span aria-hidden className="hidden h-10 w-px bg-white/20 sm:block" />
            <div>
              <span className="text-2xl font-bold">{reviewStats.students}</span>
              <p className="mt-1 text-xs text-ink-300">Students trained</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <ReviewGrid reviews={reviews} initial={reviewsInitial} />
          <p className="mt-12 text-center text-xs text-ink-500">Reviews are shown as written by students on our Google Business Profile.</p>
        </div>
      </section>

      <GuidanceCta title="Ready to get started?" text="Talk to a counsellor and find the track that fits your degree, schedule and goal." button="Book a free demo" />
    </>
  );
}
