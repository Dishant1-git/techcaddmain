import Image from "next/image";
import Link from "next/link";
import { footerLegal, footerLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-slate-50 text-ink-700">
      {/* Giant wordmark watermark */}
      <Image
        src="/logo/techcadd-wordmark.png"
        alt=""
        width={900}
        height={192}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 -bottom-[1.5vw] -z-10 h-auto w-full select-none px-[1vw] opacity-[0.06]"
        aria-hidden
      />

      <div className="container-x">
        <div className="grid gap-12 pb-20 pt-16 sm:grid-cols-3 lg:grid-cols-[4fr_1fr_2fr_2fr_2fr] lg:pb-28">
          <div className="sm:col-span-3 lg:col-span-2 lg:pr-[20%]">
            <Link href="/" aria-label="TechCADD home" className="inline-block">
              <Image src="/logo/tece_new_logo.png" alt="techcadd — Your Skill & Technology Partner" width={900} height={231} sizes="208px" className="h-auto w-52" />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed">
              An IT company and technology institute — AI, cloud, cybersecurity and full-stack engineering, plus the
              training that builds the teams behind it.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-7 inline-flex items-center rounded-full bg-brand-900 px-8 py-4 font-semibold text-white shadow-xl shadow-brand-900/25 transition-colors hover:bg-brand-800"
            >
              {site.email}
            </a>
            <p className="mt-7">
              <a href={site.phoneHref} className="text-ink-500 transition-colors hover:text-brand-700">{site.phone}</a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xl font-semibold text-ink-950">{heading}</h3>
              <ul className="mt-8 space-y-6">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-brand-700">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-950/10 pb-10 pt-8 text-sm text-ink-500">
          <p>
            © {year} {site.legalName}. Built in{" "}
            <Link href="/branches/jalandhar" className="font-medium text-brand-600 hover:text-brand-700">Jalandhar</Link>.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
            {footerLegal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-brand-700">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
