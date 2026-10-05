"use client";

import { useState, type FormEvent } from "react";
import { courseOptions } from "@/data/contact";
import { waLink } from "@/lib/whatsapp";

/** Enquiry form. No backend yet: on submit it opens WhatsApp with the details pre-filled (same approach as DemoForm). */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const lines = [
      "Hi techcadd, I'd like a counsellor to call me.",
      `Name: ${get("name")}`,
      `Mobile: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      `Course: ${get("course")}`,
      get("message") && `Goal: ${get("message")}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/45 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
      <p className="text-lg font-bold leading-snug sm:text-xl">Tell us your goal. We&apos;ll build the training around it.</p>
      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm text-ink-300">Full name *</label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm text-ink-300">Mobile number *</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            title="Enter a 10-digit mobile number"
            autoComplete="tel-national"
            placeholder="10-digit mobile number"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm text-ink-300">Email address</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} />
        </div>
        <div>
          <label htmlFor="cf-course" className="mb-1.5 block text-sm text-ink-300">Course of interest *</label>
          <select id="cf-course" name="course" required defaultValue="" className={`${field} [&>optgroup]:text-ink-900 [&>option]:text-ink-900`}>
            <option value="" disabled>Select your course of interest</option>
            {courseOptions.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.items.map((c) => <option key={c} value={c}>{c}</option>)}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-1.5 block text-sm text-ink-300">Your message / career goals</label>
          <textarea id="cf-message" name="message" rows={3} maxLength={2000} placeholder="Where are you now, and where do you want to be?" className={`${field} resize-y`} />
        </div>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" className="btn-primary">Submit</button>
        <p className="text-xs text-ink-300">A counsellor replies during office hours — Mon to Sat, 9am to 7pm.</p>
      </div>
      <p className="mt-4 text-sm text-brand-200" aria-live="polite">
        {sent ? "Thanks! Send the WhatsApp message and a counsellor will call you shortly." : ""}
      </p>
    </form>
  );
}
