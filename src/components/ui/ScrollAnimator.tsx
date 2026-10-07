"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * ONE global IntersectionObserver for the whole site (mounted in layout.tsx) — keeps client JS tiny.
 *  - [data-reveal]  → adds .is-visible when scrolled into view (CSS lives in globals.css)
 *  - [data-count]   → animated number counter (see ui/Counter.tsx)
 *  - Typewriter     → the highlighted words of every h1/h2 (.text-gradient) are "written" when scrolled into view;
 *                     [data-type-words="a|b|c"] types, deletes and cycles through phrases (home hero)
 *  - Scales the top progress bar (written straight to the bar: a custom property on <html> would restyle the whole page every frame)
 */
export function ScrollAnimator() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const suffix = el.dataset.suffix || "";
      const fmt = (n: number) =>
        n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      if (reduce) return;
      const start = performance.now();
      const dur = 1800;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    /* ── Typewriter ──
       The full text stays in the DOM the whole time (typed part + a transparent remainder), so nothing reflows and
       screen readers / search engines still read the complete heading. Skipped entirely for reduced motion. */
    let alive = true;
    /* data-typed: "wait" = split into spans, waiting to scroll into view · "done" = written · "cycle" = hero phrase loop.
       Every step is restartable, because this effect can run more than once for the same elements (React Strict Mode
       mounts effects twice in development; route changes re-run it too). */
    const prepare = (el: HTMLElement) => {
      const text = el.textContent ?? "";
      const done = document.createElement("span");
      const rest = document.createElement("span");
      rest.style.opacity = "0";
      rest.textContent = text;
      el.replaceChildren(done, rest);
      el.dataset.typed = "wait";
    };
    const typeIn = (el: HTMLElement) => {
      const text = el.textContent ?? "";
      const done = el.firstElementChild as HTMLElement;
      const rest = el.lastElementChild as HTMLElement;
      let i = 0;
      const tick = () => {
        if (!alive || !el.isConnected) return;
        i += 1;
        done.textContent = text.slice(0, i);
        rest.textContent = text.slice(i);
        if (i < text.length) setTimeout(tick, 45);
        else el.dataset.typed = "done";
      };
      done.textContent = "";
      rest.textContent = text;
      setTimeout(tick, 350);
    };
    const cycle = (el: HTMLElement) => {
      const words = (el.dataset.typeWords ?? "").split("|").filter(Boolean);
      if (words.length < 2) return;
      const out = document.createElement("span");
      out.textContent = words[0];
      el.replaceChildren(out);
      el.dataset.typed = "cycle";
      let w = 0;
      let i = words[0].length;
      let deleting = true;
      const tick = () => {
        if (!alive || !el.isConnected) return;
        i += deleting ? -1 : 1;
        out.textContent = words[w].slice(0, i);
        let wait = deleting ? 35 : 75;
        if (!deleting && i === words[w].length) { deleting = true; wait = 2000; }
        else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; wait = 350; }
        setTimeout(tick, wait);
      };
      setTimeout(tick, 2400);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.count !== undefined) countUp(el);
          else if (el.dataset.typed === "wait") typeIn(el);
          else el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible), [data-count]")
      .forEach((el) => io.observe(el));

    if (!reduce) {
      document.querySelectorAll<HTMLElement>("[data-type-words]").forEach(cycle);
      document
        .querySelectorAll<HTMLElement>(':is(h1, h2) .text-gradient:not([data-typed="done"]):not([data-type-words])')
        .forEach((el) => {
          if (el.dataset.typed !== "wait") {
            if (el.children.length > 0 || !el.textContent?.trim()) return; // plain text only
            prepare(el);
          }
          io.observe(el);
        });
    }

    const root = document.documentElement;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      alive = false;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <div
      ref={bar}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent-500"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
