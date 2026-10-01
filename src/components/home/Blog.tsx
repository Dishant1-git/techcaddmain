import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { blogs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogSlider } from "./BlogSlider";

const gradients = [
  "from-brand-500 to-ink-900",
  "from-accent-500 to-brand-700",
  "from-ink-800 to-brand-600",
  "from-brand-700 to-accent-500",
  "from-brand-600 to-brand-900",
  "from-ink-900 to-accent-600",
];

export function Blog() {
  return (
    <section id="blog" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Resources & Blog"
            title={<>Career insights for <span className="text-gradient">North India&apos;s tech talent</span></>}
          />
          <Link data-reveal="up" href="/#blog" className="btn-ghost shrink-0">View all articles <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
        <div className="mt-10" data-reveal="up">
          <BlogSlider
            label="Latest articles"
            slides={blogs.map((b, i) => (
              <article key={b.title} className="card card-hover group h-full overflow-hidden">
                <div className={`relative aspect-[16/9] overflow-hidden bg-linear-to-br ${gradients[i % gradients.length]}`}>
                  <div className="bg-grid absolute inset-0 transition-transform duration-700 group-hover:scale-110" aria-hidden />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900">{b.category}</span>
                  <ArrowUpRight className="absolute bottom-5 right-5 size-8 text-white/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-500">
                    <time>{b.date}</time>
                    <span className="size-1 rounded-full bg-ink-300" />
                    <span className="flex items-center gap-1"><Clock className="size-3.5" aria-hidden />{b.read} read</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">{b.title}</h3>
                </div>
              </article>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
