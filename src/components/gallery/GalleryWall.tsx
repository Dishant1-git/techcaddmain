"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/data/gallery";

/** Two CSS-marquee rows (opposite directions, pause on hover) + a native <dialog> lightbox with prev/next/Esc/arrow keys. */
export function GalleryWall({ photos }: { photos: GalleryPhoto[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const show = (i: number) => { setOpen(i); dialog.current?.showModal(); };
  const close = () => dialog.current?.close();
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  // Split the wall across two rows (even / odd photos) so neighbouring rows never repeat a photo.
  const rows = [
    { items: photos.filter((_, i) => i % 2 === 0), reverse: false, duration: `${photos.length * 2.4}s` },
    { items: photos.filter((_, i) => i % 2 === 1), reverse: true, duration: `${photos.length * 2.8}s` },
  ];
  const indexOf = (p: GalleryPhoto) => photos.indexOf(p);

  const tile = (p: GalleryPhoto, key: string, hidden: boolean) => (
    <li key={key} className="flex">
      <button
        type="button"
        onClick={() => show(indexOf(p))}
        tabIndex={hidden ? -1 : 0}
        aria-label={`Open ${p.title} in the gallery viewer`}
        className="group relative mr-4 h-[130px] w-[200px] shrink-0 overflow-hidden rounded-xl border border-ink-300/40 bg-brand-50 transition-shadow duration-500 hover:shadow-[0_22px_50px_-24px_rgba(15,23,42,0.45)] sm:h-[160px] sm:w-[250px] lg:mr-5 lg:h-[190px] lg:w-[300px]"
      >
        <Image src={p.src} alt={hidden ? "" : p.title} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 250px, 200px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </button>
    </li>
  );

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="space-y-4 lg:space-y-5">
        {rows.map((r, ri) => (
          <div key={ri} className="marquee mask-fade-x overflow-hidden">
            <ul className="flex w-max animate-marquee" style={{ "--marquee-duration": r.duration, animationDirection: r.reverse ? "reverse" : "normal" } as React.CSSProperties}>
              {r.items.map((p, i) => tile(p, `a${i}`, false))}
              {/* Duplicate set makes the loop seamless; hidden from keyboard and screen readers. */}
              {r.items.map((p, i) => tile(p, `b${i}`, true))}
            </ul>
          </div>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === dialog.current) close(); }}
        aria-label="Gallery viewer"
        className="m-auto w-[min(92vw,1100px)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink-950/90 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink-950">
              <Image src={current.src} alt={current.title} fill sizes="92vw" className="object-contain" priority />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-white">
              <span className="font-semibold">{current.title}</span>
              <span className="text-white/60" aria-live="polite">{(open ?? 0) + 1} / {photos.length}</span>
            </figcaption>
            <button type="button" onClick={close} aria-label="Close viewer" className="absolute -top-3 -right-3 grid size-10 place-items-center rounded-full bg-white text-ink-900 shadow-lg hover:bg-brand-50"><X className="size-5" aria-hidden /></button>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-3 top-[calc(50%-1.5rem)] grid size-11 place-items-center rounded-full bg-white/90 text-ink-900 shadow-lg hover:bg-white"><ChevronLeft className="size-5" aria-hidden /></button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-3 top-[calc(50%-1.5rem)] grid size-11 place-items-center rounded-full bg-white/90 text-ink-900 shadow-lg hover:bg-white"><ChevronRight className="size-5" aria-hidden /></button>
          </figure>
        )}
      </dialog>
    </>
  );
}
