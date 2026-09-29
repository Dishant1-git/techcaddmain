import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { branches, footerLinks, site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

      <div className="container-x relative">
        {/* Newsletter / CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to build your tech career?</h2>
            <p className="mt-2 text-ink-300">Talk to a TechCADD counsellor today — free career guidance, no obligation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#demo" className="btn-primary">Book Free Demo <ArrowRight className="size-4" aria-hidden /></Link>
            <a href={site.phoneHref} className="btn-ghost-dark"><Phone className="size-4" aria-hidden /> Call Now</a>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.tagline}. Empowering students across Punjab, Chandigarh, Haryana, Himachal, J&amp;K and Delhi NCR with
              industry-ready skills since 2007.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />{site.address}</li>
              <li><a href={site.phoneHref} className="flex gap-3 hover:text-white"><Phone className="size-4 shrink-0 text-accent-400" aria-hidden />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="size-4 shrink-0 text-accent-400" aria-hidden />{site.email}</a></li>
              <li className="flex gap-3"><Clock className="size-4 shrink-0 text-accent-400" aria-hidden />{site.hours}</li>
            </ul>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">{heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Branch strip */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-white/10 py-6 text-sm">
          <span className="mr-2 font-semibold text-white">Our Branches:</span>
          {branches.map((b) => (
            <Link key={b.slug} href={`/branches/${b.slug}`} className="rounded-full border border-white/10 px-3 py-1 transition-colors hover:border-brand-400 hover:text-white">
              {b.city}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white">
            <Star className="size-4 fill-accent-400 text-accent-400" aria-hidden />
            {site.rating.score}/5 Google Rating · {site.rating.reviews} reviews
          </div>
          <SocialIcons itemClass="bg-white/5 text-ink-300 hover:bg-brand-600 hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
