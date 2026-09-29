import Link from "next/link";
import { ArrowUpRight, MapPin, Wifi } from "lucide-react";
import { branches, regions } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export function Branches() {
  return (
    <section id="branches" className="section relative overflow-hidden bg-white">
      <div className="bg-grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="North India Network"
          title={<>Learn at a branch near you — <span className="text-gradient">or live online</span></>}
          text="Seven campuses across Punjab & Chandigarh Tricity, plus live instructor-led batches for students across North India."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b, i) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              data-reveal="zoom"
              style={delay(i % 4, 70)}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                b.hq ? "bg-linear-to-br from-brand-600 to-brand-800 text-white sm:col-span-2 lg:row-span-2" : "card card-hover"
              }`}
            >
              <MapPin className={`size-7 ${b.hq ? "text-accent-400" : "text-brand-600"}`} aria-hidden />
              <h3 className={`mt-4 font-bold ${b.hq ? "text-3xl lg:text-5xl" : "text-xl text-ink-900"}`}>{b.city}</h3>
              <p className={`mt-1 text-sm ${b.hq ? "text-brand-100" : "text-ink-500"}`}>{b.hq ? "Head Office · " : ""}{b.state}</p>
              {b.hq && (
                <p className="mt-6 max-w-sm text-brand-100 lg:mt-24">
                  Our flagship campus with advanced labs, AI studio, and a dedicated placement cell.
                </p>
              )}
              <ArrowUpRight
                className={`absolute right-5 top-5 size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                  b.hq ? "text-white" : "text-ink-300 group-hover:text-brand-600"
                }`}
                aria-hidden
              />
            </Link>
          ))}
          <Link
            href="/#demo"
            data-reveal="zoom"
            className="group flex items-center justify-between gap-4 rounded-3xl bg-linear-to-r from-accent-500 to-accent-600 p-6 text-white transition-transform hover:-translate-y-1 sm:col-span-2"
          >
            <div>
              <Wifi className="size-7" aria-hidden />
              <h3 className="mt-4 text-xl font-bold">Live Online Classes</h3>
              <p className="mt-1 text-sm text-white/85">Join from anywhere in North India</p>
            </div>
            <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div data-reveal="up" className="mt-12 rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-500"><Wifi className="size-5" aria-hidden /></span>
            <h3 className="text-xl font-bold sm:text-2xl">Serving students across North India</h3>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r) => (
              <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold">{r.name}</p>
                <p className="mt-1 text-sm text-ink-300">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
