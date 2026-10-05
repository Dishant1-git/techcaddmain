"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BookOpen, Compass, Lightbulb, Megaphone, RotateCcw, Star, Users, type LucideIcon } from "lucide-react";
import type { JourneyBlock, JourneyChapter } from "@/data/founder";

const icons: Record<string, LucideIcon> = { BookOpen, Megaphone, Users, Lightbulb, Compass, Star };

const para = "text-[15.5px] leading-[1.75] text-white/72";

function Block({ block }: { block: JourneyBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className={para}>
          {block.text}
          {block.em && <> <em className="font-semibold italic text-white">{block.em}</em></>}
        </p>
      );
    case "lead":
      return <p className="border-l-[3px] border-accent-400 pl-4 text-base font-semibold italic leading-[1.65] text-white">{block.text}</p>;
    case "bullets":
      return (
        <ul className="grid gap-2.5">
          {block.items.map((b) => (
            <li key={b} className="relative pl-7 text-[15px] leading-[1.6] text-white/72">
              <span aria-hidden className="absolute left-1 top-[0.55em] size-2 rounded-full bg-accent-400 shadow-[0_0_0_3px_rgb(255_217_90/0.22)]" />
              {b}
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="grid gap-3">
          {block.items.map((n, i) => (
            <li key={n.title} className="relative rounded-2xl border border-white/10 bg-white/[0.04] py-3.5 pl-14 pr-4">
              <span aria-hidden className="absolute left-4 top-3.5 grid size-7 place-items-center rounded-full bg-accent-400 text-[12.5px] font-bold text-ink-950">{i + 1}</span>
              <strong className="block text-[15px] font-semibold italic text-white">{n.title}</strong>
              <span className="mt-1 block text-[14.5px] leading-[1.6] text-white/65">{n.text}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="rounded-2xl border border-accent-400/30 bg-linear-to-br from-accent-400/16 to-accent-400/[0.03] px-5 py-4 text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold leading-[1.45] text-white">
          “{block.text}”
        </blockquote>
      );
  }
}

/**
 * Founder journey: a sticky photo stage (cross-fading photo per chapter, chapter tabs, a typed one-liner with replay,
 * caption pill) with the chapter cards scrolling past it. The chapter under the probe line becomes active; clicking a
 * tab scrolls to its card. Below lg the stage sticks under the header and the cards scroll beneath it.
 */
export function FounderJourney({ chapters }: { chapters: JourneyChapter[] }) {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState("");
  const [replay, setReplay] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  // Which chapter is on screen: the last card whose top has passed the probe line.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = list.current?.querySelectorAll<HTMLElement>("[data-chapter]");
      if (!cards) return;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const probe = desktop ? window.innerHeight * 0.5 : (stage.current?.getBoundingClientRect().bottom ?? 0) + window.innerHeight * 0.18;
      let next = 0;
      cards.forEach((c, i) => { if (c.getBoundingClientRect().top <= probe) next = i; });
      setActive(next);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Type the active chapter's line (instantly for reduced motion).
  const line = chapters[active].line;
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setTyped(line), 0);
      return () => window.clearTimeout(t);
    }
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(line.slice(0, i));
      if (i >= line.length) window.clearInterval(timer);
    }, 28);
    return () => window.clearInterval(timer);
  }, [line, replay]);

  const go = (id: string) => document.getElementById(`journey-panel-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const ChapterIcon = icons[chapters[active].icon] ?? BookOpen;

  return (
    <div className="relative">
      {/* Sticky stage */}
      <div ref={stage} className="sticky top-24 z-10 h-[46svh] min-h-[340px] overflow-hidden lg:top-0 lg:z-0 lg:h-svh">
        {chapters.map((c, i) => (
          <div key={c.id} className="fnd-journey-photo" data-active={i === active || undefined}>
            <Image src={c.image} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" style={c.position ? { objectPosition: c.position } : undefined} />
          </div>
        ))}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-950/65 via-brand-900/20 to-ink-950/75" />

        <div className="container-x relative h-full lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <div className="flex h-full flex-col justify-between gap-6 py-4 lg:pb-8 lg:pt-30">
            <div className="w-full max-w-[470px] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 shadow-[0_24px_60px_-20px_rgb(5_11_31/0.7)] backdrop-blur-xl">
              <div role="tablist" aria-label="Journey chapters" className="relative flex gap-1 overflow-x-auto border-b border-white/10 p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {chapters.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-controls={`journey-panel-${c.id}`}
                    onClick={() => go(c.id)}
                    className={`relative shrink-0 cursor-pointer rounded-lg px-3.5 py-2 text-sm transition-colors duration-300 ${
                      i === active ? "bg-accent-400 font-semibold text-ink-950 shadow-[0_6px_18px_-6px_rgb(255_217_90/0.8)]" : "font-medium text-white/70 hover:text-white"
                    }`}
                  >
                    {c.tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 px-5 py-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                  <ChapterIcon className="size-5" aria-hidden />
                </span>
                <p className="min-h-[4.5em] flex-1 text-[15.5px] leading-normal text-white" aria-live="polite">
                  <span className="sr-only">{line}</span>
                  <span aria-hidden>
                    {typed}
                    <span className="ml-0.5 inline-block h-[1.05em] w-0.5 translate-y-[3px] bg-accent-400" />
                  </span>
                </p>
                <button
                  type="button"
                  aria-label="Replay this line"
                  onClick={() => setReplay((n) => n + 1)}
                  className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-accent-400 text-ink-950 shadow-[0_8px_22px_-6px_rgb(255_217_90/0.9)] transition-transform hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="size-4" aria-hidden />
                </button>
              </div>
            </div>
            <p key={active} className="fnd-journey-caption hidden w-fit items-center gap-2 rounded-full border border-white/15 bg-ink-950/60 px-3.5 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur sm:inline-flex">
              <span className="size-1.5 rounded-full bg-accent-400" />
              {chapters[active].caption}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter cards */}
      <div className="container-x pointer-events-none relative lg:-mt-[100svh] lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
        <div className="hidden lg:block" />
        <ol ref={list} className="pointer-events-auto py-5 lg:pb-[calc(45svh-6rem)] lg:pt-30">
          {chapters.map((c, i) => {
            const Icon = icons[c.icon] ?? BookOpen;
            const on = i === active;
            return (
              <li key={c.id} className="list-none">
                {i > 0 && (
                  <div aria-hidden className="relative mx-auto h-12 w-0.5 overflow-hidden bg-linear-to-b from-accent-400/80 to-accent-400/20">
                    <span className="fnd-journey-dot absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent-400" style={{ animationDelay: `${i * 0.2}s` }} />
                  </div>
                )}
                <article
                  id={`journey-panel-${c.id}`}
                  data-chapter={c.id}
                  className={`fnd-blue relative min-h-[60svh] scroll-mt-[calc(7rem+max(46svh,340px))] overflow-hidden rounded-3xl border p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 sm:p-8 lg:scroll-mt-30 lg:p-10 ${
                    on ? "border-accent-400/45 shadow-[0_0_0_1px_rgb(255_217_90/0.2),0_30px_80px_-30px_rgb(5_11_31/0.8)]" : "border-white/12 shadow-[0_30px_80px_-30px_rgb(5_11_31/0.8)]"
                  }`}
                >
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[22px_22px] opacity-60" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-semibold transition-colors duration-500 ${on ? "bg-accent-400 text-ink-950" : "bg-white/15 text-white"}`}>
                        <Icon className="size-3.5" aria-hidden />
                        {c.label}
                      </span>
                      <span className="text-[12.5px] font-medium text-white/45">Gourav Gupta</span>
                    </div>
                    <h3 className="mt-5 text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-[1.2] text-white">
                      {i > 0 && <span className="sr-only">{c.tab}: </span>}
                      {c.title}
                    </h3>
                    <span aria-hidden className="mb-6 mt-4 block h-[3px] w-20 rounded-full bg-accent-400" />
                    <div className="space-y-4">
                      {c.blocks.map((b, j) => <Block key={j} block={b} />)}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

