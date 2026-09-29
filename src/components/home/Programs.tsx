import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

const universities = ["IKGPTU", "GNDU", "Panjab University", "LPU", "Chandigarh University", "CT University", "DAV University", "Punjabi University"];

export function Programs() {
  return (
    <section id="programs" className="section bg-brand-50/50">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Programs for Everyone"
            title={<>Industrial training, after-12th &amp; <span className="text-gradient">certification programs</span></>}
            text="Whether you're a school pass-out, a B.Tech student needing university training, or a professional upskilling — there's a path for you."
          />
          <Link data-reveal="up" href="/#demo" className="btn-brand shrink-0">Get program brochure <ArrowRight className="size-4" aria-hidden /></Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {programs.map((p, i) => (
            <div key={p.title} data-reveal={i % 2 ? "right" : "left"} style={delay(Math.floor(i / 2))} className="card card-hover group flex gap-6 p-7 sm:p-8">
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-accent-400 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                <Icon name={p.icon} className="size-8" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">{p.tag}</span>
                <h3 className="mt-1.5 text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{p.text}</p>
                <Link href="/#demo" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal="up" className="mt-12 rounded-3xl border border-ink-900/5 bg-white p-6 sm:p-8">
          <p className="text-center text-sm font-semibold text-ink-500">
            Industrial training accepted by students of leading North India universities
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {universities.map((u) => (
              <span key={u} className="rounded-full bg-ink-900/5 px-4 py-2 text-sm font-semibold text-ink-700">{u}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
