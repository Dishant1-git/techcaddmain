"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * ONE global IntersectionObserver for the whole site (mounted in layout.tsx) — keeps client JS tiny.
 *  - [data-reveal]  → adds .is-visible when scrolled into view (CSS lives in globals.css)
 *  - [data-count]   → animated number counter (see ui/Counter.tsx)
 *  - Sets --scroll-progress on <html> for the top progress bar
 */
export function ScrollAnimator() {
  const pathname = usePathname();

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

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.count !== undefined) countUp(el);
          else el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible), [data-count]")
      .forEach((el) => io.observe(el));

    const root = document.documentElement;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", String(max > 0 ? window.scrollY / max : 0));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent-500"
      style={{ transform: "scaleX(var(--scroll-progress, 0))" }}
    />
  );
}
