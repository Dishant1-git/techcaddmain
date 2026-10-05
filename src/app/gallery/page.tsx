import type { Metadata } from "next";
import Link from "next/link";
import { galleryPhotos } from "@/data/gallery";
import { GalleryWall } from "@/components/gallery/GalleryWall";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Gallery — Life at techcadd",
  description: "Photos from techcadd classrooms, labs, workshops and campus sessions across Punjab.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Gallery</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Gallery</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Inside the <span className="text-gradient">classrooms, labs</span> and live projects.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            The wall drifts on its own — hover to pause it, then open any photo to see it full size.
          </p>
        </div>
      </section>

      <section className="section overflow-hidden bg-white">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Life at techcadd</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] text-ink-900 sm:text-4xl lg:text-5xl">Our Gallery</h2>
        </div>
        <div className="mt-10 lg:mt-14"><GalleryWall photos={galleryPhotos} /></div>
      </section>

      <GuidanceCta
        title="Come see it in person."
        text="Book a free demo class and walk through the lab before you decide."
        button="Book a Free Demo"
      />
    </>
  );
}
