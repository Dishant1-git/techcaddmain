"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import type { FounderTestimonial } from "@/data/founder";

const AUTO_MS = 6000;

/**
 * One-card-at-a-time testimonial stack. Advances every 6s (paused while hovered/focused and for reduced motion),
 * swipe left/right on touch, ← / → when focused. All cards share one grid cell so the stack keeps the tallest height.
 */
export function FounderTestimonials({ items }: { items: FounderTestimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const n = items.length;

  const step = (by: number) => setIndex((i) => (i + by + n) % n);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % n), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, n]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
  };

  const current = items[index];

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative min-w-0 rounded-[28px]"
    >
      <ul
        className="fnd-tst-stage"
        onPointerDown={(e) => { startX.current = e.clientX; }}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
      >
        {items.map((t, i) => (
          <li
            key={t.name}
            data-active={i === index || undefined}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}: ${t.name}`}
            className="fnd-tst-card on-light flex flex-col rounded-[22px] border border-white/95 bg-white p-[clamp(1.6rem,3.5vw,2.5rem)] shadow-[0_40px_90px_-40px_rgb(29_83_240/0.5)] sm:rounded-[28px]"
          >
            <span aria-hidden className="h-[2.4rem] flex-none font-serif text-[5rem] leading-[0.7] text-accent-500">“</span>
            <blockquote className="mt-2.5 flex-1 text-[clamp(0.98rem,1.4vw,1.1rem)] leading-[1.7] text-ink-900">{t.text}</blockquote>
            <footer className="mt-6 flex items-center gap-3.5 border-t border-ink-900/10 pt-5">
              <span aria-hidden className="relative grid size-14 flex-none place-items-center overflow-hidden rounded-full bg-linear-to-br from-brand-500 to-brand-700 font-display text-[1.05rem] font-extrabold tracking-wide text-white">
                {t.photo ? (
                  <Image src={t.photo} alt="" fill sizes="56px" className="object-cover object-[50%_25%]" />
                ) : (
                  t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")
                )}
              </span>
              <span>
                <strong className="block font-display text-base font-extrabold text-ink-900">{t.name}</strong>
                <small className="mt-0.5 block text-sm text-ink-500">{t.role}</small>
              </span>
            </footer>
          </li>
        ))}
      </ul>
      <p className="sr-only" aria-live="polite">Testimonial {index + 1} of {n}: {current.name}, {current.role}</p>
    </div>
  );
}
