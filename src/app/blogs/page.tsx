import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Blog — Course Guides, Hiring Trends & Career Advice",
  description: "Course guides, hiring trends and career advice from the trainers and placement team at techcadd.",
  alternates: { canonical: "/blogs" },
};

type Post = { slug: string; title: string; category: string; date: string; read: string; excerpt: string };

/** Published articles. Empty until real posts exist — the page shows an honest empty state instead of placeholder posts. */
const posts: Post[] = [];

export default function BlogsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Blog</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Blog</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Notes from the classroom and <span className="text-gradient">the codebase.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Course guides, hiring trends and career advice, written by the trainers and placement team who see what employers actually ask for.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Latest posts</p>
          {posts.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-ink-300/60 bg-brand-50/40 px-6 py-16 text-center lg:mt-10">
              <p className="font-display text-xl font-bold text-ink-900">No articles published yet.</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-500">
                Our trainers are writing the first ones now. In the meantime, the course pages carry the same detail on syllabus, tools and placement support.
              </p>
              <Link href="/courses" className="btn-brand mt-7 inline-flex">Browse courses <ArrowRight className="size-4" aria-hidden /></Link>
            </div>
          ) : (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blogs/${p.slug}`} className="card card-hover group flex h-full flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</span>
                    <h2 className="mt-3 font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-ink-500">{p.excerpt}</p>
                    <p className="mt-4 text-xs text-ink-500">{p.date} · {p.read} read</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
