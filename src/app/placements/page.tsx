import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bandFor, fmt, regions, roles } from "@/data/salary-estimator";
import type { FaqItem, FeatureItem } from "@/data/guidance";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Placements & Career Outcomes — What Graduates Earn",
  description: "Published fresher and 2-year salary bands by role and location, how placement support works, and where techcadd graduates get hired. No guaranteed-job claims.",
  alternates: { canonical: "/placements" },
};

// Sample stats shown on the reference page — confirm real figures before launch.
const heroStats = [
  { value: "25,000+", label: "Students trained since 2007" },
  { value: "10,000+", label: "Students placed" },
  { value: `${site.rating.score}★`, label: `${site.rating.reviews} Google reviews` },
];

const support: FeatureItem[] = [
  { icon: "FileText", title: "CV reviews", text: "Line-by-line feedback until your resume reads like a hire, not a student." },
  { icon: "MessageSquare", title: "Mock interviews", text: "Technical and HR rounds with trainers who have sat on the hiring side." },
  { icon: "Building2", title: "Employer drives", text: "Repeated hiring drives with local and remote-first companies, not a one-time event." },
  { icon: "Handshake", title: "Support that outlasts your batch", text: "Placement help continues for as long as it takes, not just until the course ends." },
];

const beyond: FeatureItem[] = [
  { icon: "Briefcase", title: "Freelancing", text: "The 9-month Digital Marketing and MERN tracks close with a client-commercials module: proposals, pricing and contracts." },
  { icon: "ShoppingBag", title: "Your own store", text: "E-commerce modules end with a real, working store rather than a slide deck." },
  { icon: "Rocket", title: "Start-up ready", text: "Ship a complete product and learn the basics of running one." },
];

const faqs: FaqItem[] = [
  { q: "How much does a course at techcadd actually cost?", a: "It depends on the subject and the duration you pick, and the fee is shown on each course page next to that duration. A counsellor can confirm the exact fee and EMI options for the specific course and batch you want." },
  { q: "Is placement guaranteed after a course?", a: "No training provider can honestly guarantee a job, and we don't either. What is guaranteed is placement support — CV reviews, mock interviews, and repeated employer drives — for as long as it takes, not just until your batch ends." },
  { q: "Which city pays the most for the same course?", a: "Remote and freelance work generally pays the most, since it is priced by the hiring company's market rather than the city you sit in — see the Remote / Freelance column above. Among fixed locations, Delhi NCR runs ahead of Jalandhar, Mohali and Chandigarh, which move together as one Punjab / Tricity band." },
  { q: "Can I freelance or start my own business instead of taking a job?", a: "Yes — see “Beyond a job title” above. The 9-month Digital Marketing and MERN tracks both close with a client-commercials module built specifically for freelancing, and the e-commerce modules end with a real store rather than a slide." },
];

export default function PlacementsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Placements &amp; Career Outcomes</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Placements</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            What our graduates actually <span className="text-gradient">earn, and where they work</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            No training provider can honestly guarantee a job, and we don&apos;t claim to. What follows is the published salary data behind every course page, the real projects students ship, and the placement support — CV reviews, mock interviews, employer drives — that runs for as long as it takes.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold leading-none">{s.value}</p>
                <p className="mt-1 text-xs text-ink-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading align="left" eyebrow="Published salary bands" title={<>Fresher and 2-year pay, <span className="text-gradient">by role and location</span></>}
            text="The same figures used by the Salary Estimator, in lakhs per annum, so a number never quietly changes between pages." />
          <div data-reveal="up" className="mt-10 overflow-x-auto rounded-2xl border border-ink-300/40">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-300/40 bg-brand-50/60 text-left">
                  <th scope="col" className="px-5 py-4 font-semibold text-ink-900">Role</th>
                  {regions.map((r) => (
                    <th key={r.id} scope="col" className="px-5 py-4 font-semibold text-ink-900">
                      {r.label}
                      <span className="mt-1 block text-[11px] font-normal text-ink-500">{r.note}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="border-b border-ink-300/30 last:border-0 even:bg-brand-50/30">
                    <th scope="row" className="px-5 py-4 text-left">
                      <Link href={role.courseHref} className="inline-flex items-center gap-2.5 font-semibold text-ink-900 transition-colors hover:text-brand-600">
                        <Icon name={role.icon} className="size-4 shrink-0 text-brand-600" /> {role.title}
                      </Link>
                    </th>
                    {regions.map((r) => {
                      const b = bandFor(role, r.id);
                      return (
                        <td key={r.id} className="px-5 py-4 text-ink-700">
                          {fmt(b.fresher)} <span className="text-xs text-ink-500">fresher</span>
                          <span className="block text-xs text-ink-500">{fmt(b.twoYear)} at 2 years</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-500">Indicative ranges compiled from public job-market listings. Actual offers vary by employer, skillset and interview performance.</p>
          <Link href="/salary-estimator" className="btn-brand mt-6 inline-flex">Try the Salary Estimator <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Placement Support" title={<>Support that doesn&apos;t stop when <span className="text-gradient">your batch does</span></>} />
          <div className="mt-14"><FeatureGrid items={support} columns={4} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Beyond a job title" title={<>Freelance, build a store or <span className="text-gradient">start your own thing</span></>} />
          <div className="mt-14"><FeatureGrid items={beyond} columns={3} /></div>
          <div className="mt-10 text-center" data-reveal="up" style={delay(1)}>
            <Link href="/my-career" className="btn-ghost">Find my career track</Link>
          </div>
        </div>
      </section>

      <GuidanceFaq topic="placements" faqs={faqs} />

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
