"use client";

import { useEffect, useRef } from "react";

/**
 * Mouse follower (mounted once in layout.tsx): a small yellow dot that sticks to the pointer and a ring that trails
 * behind it and grows over links and buttons. Decorative only — the real cursor stays visible.
 * Runs only on devices with a mouse (hover + fine pointer) and when reduced motion is not requested. The animation
 * frame loop stops as soon as the ring has caught up, so it costs nothing while the pointer is still.
 */
export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0, y = 0; // pointer
    let rx = 0, ry = 0; // ring (eased)
    let scale = 1, target = 1;
    let frame = 0;
    let shown = false;

    const draw = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      scale += (target - scale) * 0.2;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      const settled = Math.abs(x - rx) < 0.1 && Math.abs(y - ry) < 0.1 && Math.abs(target - scale) < 0.01;
      frame = settled ? 0 : requestAnimationFrame(draw);
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (!shown) {
        shown = true;
        rx = x;
        ry = y;
        d.style.opacity = "1";
        r.style.opacity = "1";
      }
      const el = e.target instanceof Element ? e.target.closest("a, button, summary, label, input, select, textarea, [role='button'], [role='tab']") : null;
      target = el ? 1.9 : 1;
      kick();
    };
    const hide = () => {
      shown = false;
      d.style.opacity = "0";
      r.style.opacity = "0";
    };
    const onDown = () => { target = 0.75; kick(); };
    const onUp = () => { target = 1; kick(); };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  const base = "pointer-events-none fixed left-0 top-0 z-[70] rounded-full opacity-0 transition-opacity duration-300 will-change-transform";
  return (
    <>
      {/* White + difference blending keeps the ring visible on white, blue and navy sections alike */}
      <div ref={ring} aria-hidden className={`${base} size-9 border-2 border-white mix-blend-difference`} />
      <div ref={dot} aria-hidden className={`${base} size-2 bg-accent-500 shadow-[0_0_10px_2px_rgba(250,204,21,0.55)]`} />
    </>
  );
}
