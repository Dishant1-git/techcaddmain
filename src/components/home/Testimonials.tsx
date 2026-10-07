import type { CSSProperties } from "react";
import { BadgeCheck, Quote } from "lucide-react";
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

const Stars = ({ className = "text-base" }: { className?: string }) => (
  <span className={`${className} leading-none tracking-[0.12em] text-accent-500`} aria-hidden>★★★★★</span>
);

type Story = (typeof testimonials)[number];

function StoryCard({ t }: { t: Story }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-3xl border border-ink-950/10 bg-white p-6 sm:w-[26rem] sm:p-7">
      <div className="flex items-center justify-between">
        <Stars />
        <Quote className="size-8 text-brand-100" aria-hidden />
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink-700">&ldquo;{t.text}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-950/10 pt-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
          {t.name.split(" ").map((n) => n[0]).join("")}
        </span>
        <div>
          <p className="font-bold text-ink-900">{t.name}</p>
          <p className="text-sm text-ink-500">{t.role} · {t.city}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/** One endless row. The list is rendered twice and slid by -50% (`animate-marquee`), so the loop is seamless.
 *  Deliberately NOT the ui/Marquee component: that one pauses on hover and fades its edges. */
function Row({ items, reverse = false }: { items: Story[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-marquee" style={{ "--marquee-duration": SPEED, animationDirection: reverse ? "reverse" : "normal" } as CSSProperties}>
        {[false, true].map((copy) => (
          <div key={String(copy)} className="flex shrink-0 gap-5 pr-5" aria-hidden={copy || undefined}>
            {items.map((t) => <StoryCard key={t.name} t={t} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Same duration for both rows = same speed (they hold the same cards, so the same width). */
const SPEED = "60s";
const half = Math.ceil(testimonials.length / 2);
/** Second row starts from the middle of the list so the two rows never show the same card stacked. */
const rowB = [...testimonials.slice(half), ...testimonials.slice(0, half)];

/** Student stories: centred heading + Google rating pill, then two full-width rows sliding in opposite directions. */
export function Testimonials() {
  return (
    <section id="testimonials" className="section defer-render bg-slate-50">
      <div className="container-x text-center">
        <p data-reveal="up" className="flex items-center justify-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          <span className="h-px w-8 bg-brand-600" aria-hidden /> Student stories
        </p>
        <h2 data-reveal="up" style={delay(1)} className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
          Loved by students <span className="text-gradient">across North India</span>
        </h2>

        <div data-reveal="up" style={delay(2)} className="mt-8 flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-ink-950/10 bg-white px-5 py-3 shadow-[0_16px_32px_-20px_rgba(15,23,42,0.35)]"
          >
            <GoogleG className="size-6" />
            <span className="flex items-center gap-1.5 font-bold text-ink-900">
              Google Reviews <BadgeCheck className="size-5 fill-[#4285F4] text-white" aria-hidden />
            </span>
            <span className="hidden h-5 w-px bg-ink-950/10 sm:block" aria-hidden />
            <span className="flex items-center gap-2">
              <span className="font-display text-lg font-extrabold text-ink-900">{site.rating.score}</span>
              <Stars />
            </span>
            <span className="text-sm text-ink-500">{site.rating.reviews} reviews<span className="sr-only"> (opens in a new tab)</span></span>
          </a>
        </div>
      </div>

      <div className="mt-12 space-y-5">
        <Row items={testimonials} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
