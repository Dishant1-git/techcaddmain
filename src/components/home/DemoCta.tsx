import { CheckCircle2, Phone } from "lucide-react";
import { site } from "@/data/site";
import { DemoForm } from "./DemoForm";

const perks = ["Free 1:1 career counselling", "Attend a live class before enrolling", "Scholarships & easy EMI available", "Weekday, weekend & online batches"];

export function DemoCta() {
  return (
    <section id="demo" className="section relative overflow-hidden bg-linear-to-br from-brand-700 via-brand-800 to-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent-500/25 blur-[100px]" aria-hidden />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span data-reveal="up" className="eyebrow eyebrow-dark">Limited seats per batch</span>
          <h2 data-reveal="up" className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
            Start your tech career <span className="text-accent-400">this month.</span>
          </h2>
          <p data-reveal="up" className="mt-5 max-w-lg text-lg text-brand-100">
            Join thousands of students from Punjab, Chandigarh and across North India who launched their careers with TechCADD.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li key={p} data-reveal="up" className="flex items-center gap-2.5 text-sm font-medium">
                <CheckCircle2 className="size-5 shrink-0 text-accent-400" aria-hidden /> {p}
              </li>
            ))}
          </ul>
          <a data-reveal="up" href={site.phoneHref} className="mt-10 inline-flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-white/10"><Phone className="size-6" aria-hidden /></span>
            <span>
              <span className="block text-sm text-brand-100">Prefer to talk? Call us</span>
              <span className="font-display text-2xl font-bold">{site.phone}</span>
            </span>
          </a>
        </div>
        <div data-reveal="right">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
