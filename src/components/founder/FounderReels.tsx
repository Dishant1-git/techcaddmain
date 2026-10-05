"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import type { FounderReel } from "@/data/founder";

const AUTO_MS = 5000;

type Drag = { x: number; id: number; moved: boolean; step: number; lastX: number; lastT: number; v: number; pos: number };

/**
 * Instagram reels cover-flow, same behaviour as the reference founder page (CSS: .fnd-reels*, .fnd-reel* in globals.css).
 * - The centre reel is the live embed; side reels carry a transparent cover button that brings them to the centre.
 * - Drag / swipe follows the pointer (positions are written straight to the DOM while dragging) and settles with momentum.
 * - Advances every 5s; paused while hovered/focused, dragging, the tab is hidden, a reel is playing, or for reduced motion.
 * - Clicking into an embed moves focus into its iframe (window "blur") — that marks it as playing; leaving that reel
 *   remounts its iframe (key bump) so the video stops.
 */
export function FounderReels({ reels }: { reels: FounderReel[] }) {
  const n = reels.length;
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [reloads, setReloads] = useState<number[]>(() => reels.map(() => 0));

  const stage = useRef<HTMLDivElement>(null);
  const playingIndex = useRef<number | null>(null);
  const drag = useRef<Drag | null>(null);
  const frame = useRef(0);
  const justDragged = useRef(false);

  // An embed took focus → it is being played.
  useEffect(() => {
    const onBlur = () => {
      window.setTimeout(() => {
        const el = document.activeElement;
        if (el instanceof HTMLIFrameElement && stage.current?.contains(el)) {
          playingIndex.current = Number(el.dataset.index);
          setPlaying(true);
        }
      });
    };
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  const goTo = useCallback((index: number) => {
    const next = ((index % n) + n) % n;
    const was = playingIndex.current;
    if (was !== null && was !== next) {
      setReloads((r) => r.map((k, i) => (i === was ? k + 1 : k)));
      playingIndex.current = null;
    }
    setPlaying(false);
    setActive(next);
  }, [n]);

  useEffect(() => {
    if (hovered || playing || dragging || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => { if (!document.hidden) setActive((i) => (i + 1) % n); }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [hovered, playing, dragging, n, active]);

  /** Signed distance of reel `i` from position `pos`, wrapped so reels fan out on both sides. */
  const distance = useCallback((i: number, pos: number) => {
    let d = (i - pos) % n;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }, [n]);

  /** Write positions straight to the DOM (used while dragging, where `pos` is fractional). */
  const place = useCallback((pos: number) => {
    stage.current?.querySelectorAll<HTMLElement>(".fnd-reel").forEach((el, i) => {
      const d = distance(i, pos);
      const ad = Math.abs(d);
      el.style.setProperty("--d", d.toFixed(4));
      el.style.setProperty("--ad", ad.toFixed(4));
      el.style.zIndex = String(100 - Math.round(ad * 10));
      el.dataset.ad = String(Math.round(ad));
    });
  }, [distance]);

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    const centre = stage.current?.querySelector<HTMLElement>(".fnd-reel[data-active]");
    drag.current = { x: e.clientX, id: e.pointerId, moved: false, step: (centre?.offsetWidth ?? 300) * 1.04, lastX: e.clientX, lastT: e.timeStamp, v: 0, pos: active };
  };

  const onPointerMove = (e: PointerEvent) => {
    const g = drag.current;
    if (!g || g.id !== e.pointerId) return;
    const dx = e.clientX - g.x;
    if (!g.moved && Math.abs(dx) < 6) return;
    if (!g.moved) {
      g.moved = true;
      stage.current?.setPointerCapture(e.pointerId);
      stage.current?.setAttribute("data-dragging", "");
      setDragging(true);
    }
    const dt = e.timeStamp - g.lastT;
    if (dt > 0) g.v = g.v * 0.6 + ((e.clientX - g.lastX) / dt) * 0.4;
    g.lastX = e.clientX;
    g.lastT = e.timeStamp;
    g.pos = active - dx / g.step;
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        if (drag.current) place(drag.current.pos);
      });
    }
  };

  const onPointerEnd = (e: PointerEvent) => {
    const g = drag.current;
    if (!g || g.id !== e.pointerId) return;
    drag.current = null;
    if (!g.moved) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = 0;
    const dx = e.clientX - g.x;
    // Settle on the nearest reel, carried on by the release velocity; a short flick still moves one reel.
    let target = Math.round(active - dx / g.step - (g.v * 220) / g.step);
    if (target === active && Math.abs(dx) > 50) target = active + (dx < 0 ? 1 : -1);
    justDragged.current = true;
    window.setTimeout(() => { justDragged.current = false; });
    stage.current?.removeAttribute("data-dragging");
    place(target);
    setDragging(false);
    goTo(target);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(active + 1);
    if (e.key === "ArrowLeft") goTo(active - 1);
  };

  if (n === 0) return null;

  return (
    <>
      <div
        ref={stage}
        role="group"
        aria-roledescription="carousel"
        aria-label="Instagram reels from techcadd"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={() => setHovered(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onKeyDown={onKeyDown}
        data-reveal="up"
        className="fnd-reels-stage"
      >
        {reels.map((reel, i) => {
          const d = distance(i, active);
          const ad = Math.abs(d);
          const centre = d === 0;
          return (
            <div
              key={reel.code}
              className="fnd-reel"
              style={{ "--d": d.toFixed(4), "--ad": ad.toFixed(4), zIndex: 100 - ad * 10 } as CSSProperties}
              data-active={centre || undefined}
              data-ad={ad}
              data-shape={reel.shape}
              aria-roledescription="slide"
              aria-label={`Reel ${i + 1} of ${n}`}
              aria-hidden={ad > 2 || undefined}
            >
              <div className="fnd-reel-clip">
                <iframe
                  key={reloads[i]}
                  data-index={i}
                  src={`https://www.instagram.com/reel/${reel.code}/embed`}
                  title={`techcadd on Instagram — reel ${i + 1}`}
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  tabIndex={centre ? 0 : -1}
                />
              </div>
              {centre ? (
                <span className="fnd-reel-grip" aria-hidden />
              ) : (
                <button
                  type="button"
                  className="fnd-reel-cover"
                  onClick={() => { if (!justDragged.current) goTo(i); }}
                  tabIndex={ad === 1 ? 0 : -1}
                  aria-label={`Show reel ${i + 1}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">Reel {active + 1} of {n}</p>
    </>
  );
}
