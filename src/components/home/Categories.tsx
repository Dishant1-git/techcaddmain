import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export function Categories() {
  return (
    <section id="categories" className="section bg-brand-50/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Learning Tracks"
          title={<>Choose your <span className="text-gradient">career track</span></>}
          text="Eight industry-aligned schools, 60+ programs — each designed with hiring managers from North India's leading IT companies."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              href="/#courses"
              data-reveal="up"
              style={delay(i % 4)}
              className="card card-hover group relative overflow-hidden p-7"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500">
                <Icon name={c.icon} className="size-7" />
              </span>
              <h3 className="relative mt-6 text-lg font-bold text-ink-900">{c.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{c.blurb}</p>
              <div className="relative mt-6 flex items-center justify-between border-t border-ink-900/5 pt-4 text-sm">
                <span className="font-semibold text-brand-700">{c.courses} courses</span>
                <ArrowUpRight className="size-5 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
