import { whyUs } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why TechCADD"
          title={<>An international learning experience, <span className="text-gradient">right here in North India</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const featured = i === 0;
            const wide = i === whyUs.length - 1; // spans full row so the bento grid has no gaps
            return (
              <div
                key={w.title}
                data-reveal="up"
                style={delay(i % 3)}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
                  featured
                    ? "bg-linear-to-br from-brand-600 to-ink-900 text-white lg:row-span-2 lg:flex lg:flex-col lg:justify-end"
                    : `card card-hover ${wide ? "lg:col-span-3 lg:flex lg:items-center lg:gap-6 [&>h3]:lg:mt-0 [&>p]:lg:mt-0" : ""}`
                }`}
              >
                {featured && <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />}
                <span
                  className={`relative grid size-14 place-items-center rounded-2xl ${
                    featured ? "bg-white/15 text-white lg:mb-auto" : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                  } transition-colors`}
                >
                  <Icon name={w.icon} className="size-7" />
                </span>
                <h3 className={`relative mt-6 font-bold ${featured ? "text-3xl lg:text-4xl" : "text-xl text-ink-900"}`}>{w.title}</h3>
                <p className={`relative mt-3 leading-relaxed ${featured ? "text-lg text-brand-100" : "text-ink-500"}`}>{w.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
