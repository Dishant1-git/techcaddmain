import { Quote, Star } from "lucide-react";
import { site, testimonials } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Student Stories"
          title={<>Loved by <span className="text-gradient">{site.rating.reviews} students</span> across North India</>}
          text={`Rated ${site.rating.score}/5 on Google — here's what our alumni say.`}
        />
        <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <figure key={t.name} data-reveal="up" style={delay(i % 3)} className="card card-hover break-inside-avoid p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-accent-400 text-accent-400" aria-hidden />
                  ))}
                </div>
                <Quote className="size-8 text-brand-100" aria-hidden />
              </div>
              <blockquote className="mt-4 leading-relaxed text-ink-700">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
                <span className="grid size-11 place-items-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="font-bold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.role} · {t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
