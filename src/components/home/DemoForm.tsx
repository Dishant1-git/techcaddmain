"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { branches, categories, site } from "@/data/site";

/**
 * Lead form. No backend yet: on submit it opens WhatsApp with the enquiry pre-filled.
 * To use a real backend/CRM, replace the body of onSubmit with a fetch() to your API route.
 */
export function DemoForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = `Hi TechCADD, I'd like to book a free demo.\nName: ${d.name}\nPhone: ${d.phone}\nCourse: ${d.course}\nBranch: ${d.branch}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3.5 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
      <div>
        <h3 className="text-2xl font-bold text-ink-900">Book your free demo class</h3>
        <p className="mt-1 text-sm text-ink-500">A counsellor will call you within 24 hours.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required placeholder="Full name" autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Phone number</span>
          <input name="phone" required type="tel" pattern="[0-9+\s-]{10,15}" placeholder="Phone number" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Course of interest</span>
        <select name="course" required defaultValue="" className={field}>
          <option value="" disabled>Course of interest</option>
          {categories.map((c) => <option key={c.id}>{c.title}</option>)}
          <option>Industrial Training (6 Weeks / 6 Months)</option>
          <option>After 12th Program</option>
        </select>
      </label>
      <label className="block">
        <span className="sr-only">Preferred branch</span>
        <select name="branch" required defaultValue="" className={field}>
          <option value="" disabled>Preferred branch</option>
          {branches.map((b) => <option key={b.slug}>{b.city}</option>)}
          <option>Live Online</option>
        </select>
      </label>
      <button type="submit" className="btn-primary w-full !py-4 text-base">
        Book Free Demo <Send className="size-4" aria-hidden />
      </button>
      <p className="text-center text-xs text-ink-500" aria-live="polite">
        {sent ? "Thanks! Complete the message in WhatsApp to confirm your slot." : "100% free · No spam · Your details stay private"}
      </p>
    </form>
  );
}
