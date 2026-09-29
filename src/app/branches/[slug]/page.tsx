import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { branches, site } from "@/data/site";
import { Categories } from "@/components/home/Categories";
import { Courses } from "@/components/home/Courses";
import { WhyUs } from "@/components/home/WhyUs";
import { Placements } from "@/components/home/Placements";
import { DemoCta } from "@/components/home/DemoCta";

/** One statically generated page per branch in src/data/site.ts (local SEO). */
export const dynamicParams = false;

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/branches/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `Best IT & AI Training Institute in ${b.city}`,
    description: `TechCADD ${b.city} offers AI, Full-Stack, Data Science, Cybersecurity, Digital Marketing & CAD courses with 6 weeks/6 months industrial training and placement assistance in ${b.city}, ${b.state}.`,
    alternates: { canonical: `/branches/${b.slug}` },
  };
}

export default async function BranchPage({ params }: PageProps<"/branches/[slug]">) {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#branches" className="hover:text-white">Branches</Link> / <span className="text-white">{b.city}</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8"><MapPin className="size-3.5" aria-hidden /> {b.state}{b.hq ? " · Head Office" : ""}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            TechCADD <span className="text-gradient">{b.city}</span> — IT, AI &amp; CAD Training Institute
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Industry-led courses, 6 weeks / 6 months industrial training and 100% placement assistance for students in {b.city} and nearby areas.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#demo" className="btn-primary">Book Free Demo in {b.city} <ArrowRight className="size-4" aria-hidden /></Link>
            <a href={site.phoneHref} className="btn-ghost-dark"><Phone className="size-4" aria-hidden /> {site.phone}</a>
          </div>
        </div>
      </section>
      <Categories />
      <Courses />
      <WhyUs />
      <Placements />
      <DemoCta />
    </>
  );
}
