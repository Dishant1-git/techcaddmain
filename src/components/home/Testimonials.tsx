import { BadgeCheck, Quote, Star } from "lucide-react";
import { site, testimonials } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";

const googleReviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(`${site.legalName} Jalandhar reviews`)}`;

/** Official four-colour Google "G" mark. */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const Stars = ({ className = "size-4" }: { className?: string }) => (
  <span className="flex gap-0.5 text-accent-500" aria-hidden>
    {Array.from({ length: 5 }, (_, k) => <Star key={k} className={`${className} fill-current`} />)}
  </span>
);

/** Student stories: sticky intro + Google rating card (left), masonry of quotes with a navy feature card (right). */
export function Testimonials() {
  return (
    <section id="testimonials" className="section relative isolate bg-slate-50">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p data-reveal="up" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> Student stories
            </p>
            <h2 data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              Loved by students <span className="text-gradient">across North India</span>
            </h2>
            <p data-reveal="up" style={delay(2)} className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Real outcomes from learners who started where you are now — in their own words.
            </p>

            {/* Google rating card */}
            <div data-reveal="up" style={delay(3)} className="mt-8">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-ink-950/10 bg-white p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl border border-ink-950/10 bg-white"><GoogleG className="size-6" /></span>
                  <div>
                    <p className="flex items-center gap-1.5 font-bold text-ink-900">
                      Google Reviews <BadgeCheck className="size-5 fill-[#4285F4] text-white" aria-hidden />
                    </p>
                    <p className="text-sm text-ink-500">{site.name}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <p className="font-display text-5xl font-extrabold leading-none text-ink-900">{site.rating.score}</p>
                  <div className="pb-0.5">
                    <Stars className="size-5" />
                    <p className="mt-1 text-sm text-ink-500">Based on {site.rating.reviews} reviews</p>
                  </div>
                </div>
                <p className="mt-5 border-t border-ink-950/10 pt-4 text-sm font-semibold text-brand-700">
                  Read our reviews on Google<span className="sr-only"> (opens in a new tab)</span> →
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:col-span-8 [&>*]:mb-5">
          {testimonials.map((t, i) => {
            const dark = i === 0;
            return (
              <figure key={t.name} data-reveal="up" style={delay(i % 2)} className="break-inside-avoid">
                <div
                  className={`relative isolate overflow-hidden rounded-3xl border p-7 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 ${
                    dark
                      ? "border-transparent bg-ink-950 text-white hover:shadow-[0_30px_60px_-25px_rgba(5,11,31,0.7)]"
                      : "border-ink-950/10 bg-white hover:border-brand-200 hover:shadow-[0_24px_48px_-22px_rgba(29,83,240,0.35)]"
                  }`}
                >
                  {dark && <span className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />}
                  {dark && <span className="absolute -right-16 -top-20 -z-10 size-56 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />}
                  <div className="flex items-center justify-between">
                    <Stars />
                    <Quote className={`size-8 ${dark ? "text-white/15" : "text-brand-100"}`} aria-hidden />
                  </div>
                  <blockquote className={`mt-4 leading-relaxed ${dark ? "text-lg text-white" : "text-ink-700"}`}>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption className={`mt-6 flex items-center gap-3 border-t pt-5 ${dark ? "border-white/15" : "border-ink-950/10"}`}>
                    <span className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold ${dark ? "bg-accent-500" : "bg-brand-50 text-brand-700"}`}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className={`font-bold ${dark ? "" : "text-ink-900"}`}>{t.name}</p>
                      <p className={`text-sm ${dark ? "text-ink-300" : "text-ink-500"}`}>{t.role} · {t.city}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
