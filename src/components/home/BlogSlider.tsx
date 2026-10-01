"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode, type TransitionEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CLONES = 3; // = max cards visible, so the loop never shows a gap
const INTERVAL = 3500;

/** Infinite carousel: 1 / 2 / 3 cards visible (mobile / md / lg). Every few seconds the track moves one card left —
 *  the first card exits left and the next slides in from the right. Pauses on hover/focus; no autoplay with reduced motion. */
export function BlogSlider({ slides, label }: { slides: ReactNode[]; label: string }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => (i >= count ? i : i + 1)); // wait for the snap-back before moving past the clones
  }, [count]);

  const prev = () => {
    if (index === 0) {
      // Jump (invisibly) to the cloned copy at the end, then animate back one step.
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() => requestAnimationFrame(() => { setAnimate(true); setIndex(count - 1); }));
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  };

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = window.setInterval(next, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, next]);

  // After sliding onto the clones, snap back to the real first card without animation.
  const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return; // ignore card hover transitions bubbling up
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
    }
  };

  const active = index % count;
  const all = [...slides, ...slides.slice(0, CLONES)];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="-mx-3 overflow-hidden py-4">
        <div
          className={`flex [--per:1] md:[--per:2] lg:[--per:3] ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
          style={{ transform: `translateX(calc(${index} * -100% / var(--per)))` } as CSSProperties}
          onTransitionEnd={onTransitionEnd}
        >
          {all.map((slide, i) => {
            const clone = i >= count;
            return (
              <div
                key={i}
                className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                aria-hidden={clone || undefined}
                inert={clone || undefined}
                role={clone ? undefined : "group"}
                aria-roledescription={clone ? undefined : "slide"}
                aria-label={clone ? undefined : `${i + 1} of ${count}`}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to article ${i + 1}`}
              aria-current={i === active || undefined}
              onClick={() => { setAnimate(true); setIndex(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-brand-600" : "w-2 bg-ink-300 hover:bg-ink-500"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={prev} aria-label="Previous article" className="grid size-11 place-items-center rounded-full border border-ink-900/10 text-ink-700 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white">
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button type="button" onClick={next} aria-label="Next article" className="grid size-11 place-items-center rounded-full border border-ink-900/10 text-ink-700 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white">
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
