"use client";

import Image from "next/image";
import Link from "next/link";
import { openLeadPopup } from "./LeadPopup";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight, Box, Brain, ChartColumn, ChevronDown, Cloud, CodeXml, MapPin, Megaphone, Menu, Monitor, Phone, Quote,
  ShieldCheck, Smartphone, Sparkles, X, Zap,
} from "lucide-react";
import { branches, nav, site, type NavItem, type NavLink } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

/** Item has a dropdown of any kind. */
const hasMenu = (i: NavItem) => Boolean(i.children || i.skills || i.columns || i.tiles);
/** Full-header-width panels anchor to the header row (their group must NOT be `relative`). */
const isWide = (i: NavItem) => Boolean(i.featured || i.skills || i.columns || i.tiles);
/** Flat link list used by the mobile drawer. */
const mobileLinks = (i: NavItem): NavLink[] =>
  i.children ?? i.skills?.groups.flatMap((g) => g.links) ?? i.columns?.columns.flatMap((c) => c.links) ?? i.tiles?.tiles ?? [];

const itemBase =
  "flex items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-2 text-[13.5px] font-medium transition-colors 2xl:px-3 2xl:text-[16px]";

/** AI pill mark: one large + one small four-point sparkle in accent yellow, pulsing in opposite phase (.ai-star in globals.css). */
function AiSpark() {
  return (
    <svg viewBox="0 0 24 24" className="size-[1.15rem] fill-accent-400" aria-hidden>
      <path className="ai-star" d="M10 3C10.6 7.6 12.4 9.4 17 10C12.4 10.6 10.6 12.4 10 17C9.4 12.4 7.6 10.6 3 10C7.6 9.4 9.4 7.6 10 3Z" />
      <path className="ai-star ai-star-2" d="M19 14C19.3 16.3 20.2 17.2 22.5 17.5C20.2 17.8 19.3 18.7 19 21C18.7 18.7 17.8 17.8 15.5 17.5C17.8 17.2 18.7 16.3 19 14Z" />
    </svg>
  );
}

/** Top-level menu label (link or dropdown trigger). The `highlight` item renders as the glowing AI pill. */
function TopItem({ item, light, active }: { item: NavItem; light: boolean; active: boolean }) {
  const cls = item.highlight
    ? `${itemBase} ai-glow !px-4 font-semibold text-white`
    : `${itemBase} relative after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 2xl:after:inset-x-3 ${
        light ? "text-ink-700 hover:text-brand-700 group-hover:text-brand-700" : "text-white/85 hover:text-white group-hover:text-white"
      }`;
  return (
    <Link href={item.href} className={cls} aria-haspopup={hasMenu(item) ? "true" : undefined} aria-current={active ? "page" : undefined}>
      {item.label}
      {item.highlight && <AiSpark />}
      {hasMenu(item) && <ChevronDown className="size-3.5 opacity-80 transition-transform duration-200 group-hover:rotate-180" aria-hidden />}
    </Link>
  );
}

/** A top-level item counts as "active" if its own href matches, or (for Resources) the visitor is on a /guidance page. */
function isActiveTop(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  if (item.label === "Resources") return pathname.startsWith("/guidance");
  if (item.label === "Branches") return pathname.startsWith("/branches");
  return !item.href.includes("#") && pathname.startsWith(item.href);
}

/** Dropdown panel — CSS only (opens on hover and keyboard focus-within). */
function Dropdown({ item, activePath }: { item: NavItem; activePath: string }) {
  if (item.skills) return <SkillsPanel item={item} />;
  if (item.columns) return <ColumnsPanel item={item} activePath={activePath} />;
  if (item.tiles) return <TilesPanel item={item} />;
  if (!item.children) return null;
  if (item.featured) return <FeaturedPanel item={item} />;
  return (
    <div
      className={`invisible absolute top-full pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
        item.mega ? "left-1/2 w-[36rem] -translate-x-1/2 translate-y-2" : "left-0 w-80 translate-y-2"
      }`}
    >
      <div className={`card grid gap-1 p-2.5 ${item.mega ? "grid-cols-2" : ""}`}>
        {item.children.map((c) => (
          <Link key={c.label} href={c.href} className="group/link rounded-xl px-3.5 py-3 transition-colors hover:bg-brand-50">
            <span className="block text-sm font-semibold text-ink-900 group-hover/link:text-brand-700">{c.label}</span>
            {c.desc && <span className="mt-0.5 block text-xs text-ink-500">{c.desc}</span>}
          </Link>
        ))}
        {item.mega && (
          <Link href="/#courses" className="col-span-2 mt-1 rounded-xl bg-ink-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700">
            Explore all 60+ courses →
          </Link>
        )}
      </div>
    </div>
  );
}

const reveal =
  "invisible opacity-0 translate-y-2 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

/** Full-width panel: link list on the left + "FEATURED" photo cards (About Us). Anchored to the header row, not the item. */
function FeaturedPanel({ item }: { item: NavItem }) {
  return (
    <div className={`absolute inset-x-2 top-full pt-3 sm:inset-x-4 lg:inset-x-6 ${reveal}`}>
      <div className="grid grid-cols-[15rem_1fr] overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-[0_30px_80px_-20px_rgba(5,11,31,0.45)] 2xl:grid-cols-[20rem_1fr]">
        <div className="border-r border-ink-900/8 p-6 2xl:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">{item.label.replace(/ us$/i, "")}</p>
          <ul className="mt-5 space-y-1">
            {item.children!.map((c) => (
              <li key={c.label}>
                <Link href={c.href} className="block rounded-xl px-3.5 py-2 text-base text-ink-700 2xl:text-lg transition-colors hover:bg-brand-50 hover:text-brand-700">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#demo" className="group/cta mt-8 inline-flex items-center gap-2 whitespace-nowrap px-3.5 text-base font-medium 2xl:text-lg text-brand-600 hover:text-brand-700">
            Talk to a counsellor <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="bg-linear-to-br from-white via-white to-brand-50/70 p-6 2xl:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Featured</p>
          <div className="mt-5 grid grid-cols-3 gap-5 2xl:gap-8">
            {item.featured!.map((f) => (
              <Link key={f.title} href={f.href} className="group/card block">
                <div className="overflow-hidden rounded-2xl border border-ink-900/10 shadow-sm">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    placeholder="blur"
                    sizes="(min-width: 1536px) 420px, 300px"
                    className="aspect-[1.6] w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900 transition-colors group-hover/card:text-brand-700 2xl:text-2xl">{f.title}</h3>
                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded-lg bg-brand-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">{f.badge}</span>
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-ink-500">{f.meta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Quote strip + right-aligned "browse" link shared by the Courses and Internship panels. */
function QuoteFooter({ quote, browse, className = "" }: { quote: { text: string; author: string }; browse: { label: string; href: string }; className?: string }) {
  return (
    <div className={`flex items-center justify-between gap-6 border-t border-ink-900/5 px-6 py-2.5 ${className}`}>
      <p className="flex items-center gap-3 text-[13px] text-ink-700">
        <Quote className="size-4 shrink-0 rotate-180 fill-brand-200 text-brand-200" aria-hidden />
        <span>
          <em>{quote.text}</em> <span className="font-medium not-italic text-ink-900">— {quote.author}</span>
        </span>
      </p>
      <Link href={browse.href} className="group/br inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700">
        {browse.label} <ArrowRight className="size-4 transition-transform group-hover/br:translate-x-1" aria-hidden />
      </Link>
    </div>
  );
}

const tileIcons = { Cloud, Smartphone, CodeXml, Brain, Megaphone, ChartColumn, ShieldCheck, Monitor, Box };

/** Frosted-glass tile grid (Internship & Training). Works because the scrolled pill's blur lives on a sibling layer. */
function TilesPanel({ item }: { item: NavItem }) {
  const p = item.tiles!;
  return (
    <div className={`absolute inset-x-2 top-full pt-3 sm:inset-x-4 lg:inset-x-6 ${reveal}`}>
      <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-[0_30px_80px_-20px_rgba(5,11,31,0.5)] backdrop-blur-2xl">
        <div className="grid grid-cols-4 gap-3 p-7 2xl:gap-4 2xl:p-10">
          {p.tiles.map((t) => {
            const TIcon = tileIcons[t.icon];
            return (
              <Link
                key={t.label}
                href={t.href}
                className="group/tile flex items-center gap-3 rounded-2xl border border-white bg-white/70 p-3.5 2xl:gap-4 shadow-[0_1px_2px_rgba(10,19,48,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(29,83,240,0.35)] 2xl:p-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-100/80 2xl:size-12 text-brand-600 transition-colors group-hover/tile:bg-brand-600 group-hover/tile:text-white">
                  <TIcon className="size-5" aria-hidden />
                </span>
                <span className="flex-1 text-[15px] font-medium text-ink-700 group-hover/tile:text-ink-900 2xl:text-lg">{t.label}</span>
                {t.badge && <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700">{t.badge}</span>}
              </Link>
            );
          })}
        </div>
        <QuoteFooter quote={p.quote} browse={p.browse} className="bg-white/80" />
      </div>
    </div>
  );
}

/** Full-width numbered-columns panel + quote footer. Solid (Courses, 4 cols) or `variant: "glass"` (After 12th, 3 cols). */
function ColumnsPanel({ item, activePath }: { item: NavItem; activePath: string }) {
  const p = item.columns!;
  const glass = p.variant === "glass";
  return (
    <div className={`absolute inset-x-2 top-full pt-3 sm:inset-x-4 lg:inset-x-6 ${reveal}`}>
      <div
        className={`max-h-[calc(100dvh-6.5rem)] overflow-y-auto overflow-x-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(5,11,31,0.45)] ${
          glass ? "border border-white/60 bg-white/85 backdrop-blur-2xl" : "border border-ink-900/5 bg-white"
        }`}
      >
        <div
          className="grid gap-x-5 px-6 pb-4 pt-5"
          style={{ gridTemplateColumns: `repeat(${p.columns.length}, minmax(0, 1fr))` }}
        >
          {p.columns.map((col, i) => (
            <div key={col.title}>
              <p className="text-xs tabular-nums text-ink-500">{String(i + 1).padStart(2, "0")}</p>
              {glass ? (
                <>
                  <p className="mt-0.5 text-lg text-ink-900">{col.title}</p>
                  <p className="mt-1 border-b border-ink-900/10 pb-2.5 text-[13px] leading-snug text-ink-500">{col.text}</p>
                </>
              ) : (
                <>
                  <p className="mt-0.5 font-display text-lg font-bold text-ink-900">{col.title}</p>
                  <p className="mt-1 min-h-9 border-b border-ink-900/10 pb-2.5 text-[13px] leading-snug text-ink-500">{col.text}</p>
                </>
              )}
              <ul className="mt-2">
                {col.links.map((l) => {
                  const active = l.href === activePath;
                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-2 rounded-lg px-2 transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                          active ? "bg-brand-50 font-semibold text-brand-700" : "text-ink-700"
                        } ${glass ? "py-[3px] text-sm" : "whitespace-nowrap py-[3px] text-sm"}`}
                      >
                        {l.label}
                        {l.badge && (
                          <span className="shrink-0 rounded-full bg-brand-100 px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-brand-700">{l.badge}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <QuoteFooter quote={p.quote} browse={p.browse} className={glass ? "bg-white/80" : "bg-brand-50/60"} />
      </div>
    </div>
  );
}

const groupIcons = { Sparkles, Zap };

/** Full-width AI panel: intro + 2 link groups (HOT badges) · featured course card · blue CTA card. */
function SkillsPanel({ item }: { item: NavItem }) {
  const p = item.skills!;
  return (
    <div className={`absolute inset-x-2 top-full pt-3 sm:inset-x-4 lg:inset-x-6 ${reveal}`}>
      <div className="relative overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-[0_30px_80px_-20px_rgba(5,11,31,0.45)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-700 via-brand-400 to-violet-500" aria-hidden />
        <div className="grid grid-cols-[2.2fr_1fr_1fr] gap-6 p-8 2xl:gap-9 2xl:p-10">
          {/* Intro + groups */}
          <div>
            <p className="font-display text-2xl font-bold text-ink-900 2xl:text-3xl">{p.title}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500 2xl:text-lg">{p.text}</p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {p.groups.map((g) => {
                const GIcon = groupIcons[g.icon];
                return (
                  <div key={g.title}>
                    <div className="flex items-center gap-4 border-b border-ink-900/10 pb-5">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/40 2xl:size-12">
                        <GIcon className="size-5 fill-white" aria-hidden />
                      </span>
                      <span className="font-display text-xl font-bold text-ink-900 2xl:text-2xl">{g.title}</span>
                    </div>
                    <ul className="mt-4 space-y-1">
                      {g.links.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href} className="flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 text-base text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 2xl:text-lg">
                            {l.label}
                            {l.hot && (
                              <span className="rounded-md bg-brand-600 px-2 py-0.5 text-xs font-bold tracking-wider text-white">HOT</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured course card */}
          <Link href={p.featuredCourse.href} className="group/fc flex flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative grid h-48 place-items-center overflow-hidden bg-linear-to-br from-brand-800 via-brand-700 to-brand-500 2xl:h-52">
              <div className="bg-grid absolute inset-0 opacity-80" aria-hidden />
              <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" aria-hidden />
              <div className="absolute right-1/4 top-0 h-full w-px bg-white/10" aria-hidden />
              <div className="absolute inset-x-0 top-1/3 h-px bg-white/10" aria-hidden />
              <div className="absolute inset-x-0 bottom-1/4 h-px bg-white/10" aria-hidden />
              <span className="relative grid size-24 place-items-center rounded-2xl border border-white/25 bg-brand-900/90 font-display text-4xl font-extrabold text-white shadow-2xl transition-transform duration-500 group-hover/fc:scale-110">
                {p.featuredCourse.art}
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block rounded-md bg-brand-600 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                {p.featuredCourse.tag}
              </span>
              <p className="mt-4 font-display text-xl font-bold leading-snug text-ink-900 transition-colors group-hover/fc:text-brand-700 2xl:text-2xl">
                {p.featuredCourse.title}
              </p>
            </div>
          </Link>

          {/* CTA card */}
          <div className="flex flex-col justify-between rounded-3xl bg-linear-to-br from-brand-600 to-brand-400 p-7 text-white shadow-[0_24px_48px_-16px_rgba(29,83,240,0.7)]">
            <p className="font-display text-xl font-bold leading-snug 2xl:text-2xl">{p.cta.text}</p>
            <Link
              href={p.cta.href}
              className="group/cta mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-lg font-semibold backdrop-blur transition-colors hover:bg-white hover:text-brand-700"
            >
              {p.cta.button} <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // The drawer (130+ links) is not rendered until the menu button is first touched/focused: keeps it out of every page's HTML and DOM.
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Top of page: full-width dark bar. After scroll: floating frosted-white pill (outer bar turns transparent).
          Outer height stays h-24 in both states so content never jumps. */}
      <header
        className={`sticky top-0 z-50 h-24 transition-colors duration-500 ${
          scrolled ? "pointer-events-none bg-transparent px-3 sm:px-6 lg:px-8" : "bg-ink-950"
        }`}
      >
        {/* Faint grid texture like the reference header (top state only) */}
        <div className={`bg-grid pointer-events-none absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-70"}`} aria-hidden />

        <div
          className={`pointer-events-auto relative isolate mx-auto flex items-center justify-between gap-4 transition-all duration-500 ease-out ${
            scrolled
              ? "top-3 h-16 max-w-[1760px] rounded-full border border-white/70 pl-5 pr-2 shadow-[0_16px_48px_-16px_rgba(5,11,31,0.55)] sm:pl-8"
              : "top-0 h-24 max-w-[1800px] px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* Pill background as its own layer: a backdrop-filter on the row itself would stop dropdown panels from blurring the page */}
          <div
            aria-hidden
            className={`absolute inset-0 -z-10 rounded-full bg-white/90 transition-opacity duration-500 ${scrolled ? "opacity-100 backdrop-blur-xl" : "opacity-0"}`}
          />
          <Logo dark={!scrolled} />

          <nav aria-label="Primary" className="hidden min-w-0 items-center gap-0 self-stretch xl:flex 2xl:gap-1.5">
            {nav.map((item) => (
              <div key={item.label} className={`group flex h-full items-center ${isWide(item) ? "" : "relative"}`}>
                <TopItem item={item} light={scrolled} active={isActiveTop(item, pathname)} />
                <Dropdown item={item} activePath={pathname} />
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openLeadPopup}
              aria-haspopup="dialog"
              className="btn hidden whitespace-nowrap border border-brand-400/60 bg-brand-600 !px-5 !py-2.5 text-sm text-white shadow-[0_0_28px_-6px_rgba(51,114,251,0.9)] hover:-translate-y-0.5 hover:bg-brand-500 sm:inline-flex 2xl:!px-6 2xl:text-[15px]"
            >
              Book Demo
            </button>
            <button
              type="button"
              onPointerEnter={() => setDrawer(true)}
              onTouchStart={() => setDrawer(true)}
              onFocus={() => setDrawer(true)}
              onClick={() => { setDrawer(true); setOpen(true); }}
              aria-label="Open menu"
              className={`grid size-11 place-items-center rounded-full border xl:hidden ${scrolled ? "border-ink-900/15 text-ink-900" : "border-white/20 text-white"}`}
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — kept outside <header> because backdrop-filter would trap position:fixed */}
      {drawer && (
      <div className={`fixed inset-0 z-50 xl:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div onClick={close} className={`absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-ink-950 p-6 text-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo dark />
            <button type="button" onClick={close} aria-label="Close menu" className="grid size-10 place-items-center rounded-full bg-white/10">
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex flex-col">
            {nav.map((item) =>
              hasMenu(item) ? (
                <details key={item.label} className="group border-b border-white/10">
                  <summary className="flex cursor-pointer items-center justify-between py-3.5 text-lg font-semibold">
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.highlight && <Sparkles className="size-4 fill-brand-400 text-brand-400" aria-hidden />}
                    </span>
                    <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="flex flex-col pb-3 pl-3">
                    {mobileLinks(item).map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={close}
                        aria-current={c.href === pathname ? "page" : undefined}
                        className={`py-2 text-[15px] hover:text-white ${c.href === pathname ? "font-semibold text-white" : "text-white/75"}`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  aria-current={isActiveTop(item, pathname) ? "page" : undefined}
                  className={`border-b border-white/10 py-3.5 text-lg font-semibold ${isActiveTop(item, pathname) ? "text-brand-400" : ""}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/50">Branches</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {branches.map((b) => (
              <Link key={b.slug} href={`/branches/${b.slug}`} onClick={close} className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium">
                <MapPin className="size-3.5 text-accent-400" aria-hidden /> {b.city}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-3 pt-8">
            <button type="button" onClick={() => { close(); openLeadPopup(); }} aria-haspopup="dialog" className="btn-brand w-full">Book Demo</button>
            <a href={site.phoneHref} className="btn-ghost-dark w-full"><Phone className="size-4" aria-hidden /> {site.phone}</a>
          </div>
        </aside>
      </div>
      )}
    </>
  );
}
