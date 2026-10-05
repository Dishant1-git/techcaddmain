"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { courseOptions } from "@/data/contact";
import { submitLead } from "@/lib/lead";

/** Enquiry form. Submit saves the details to MySQL (POST /api/lead → `leads` table); on success a thank-you message replaces the form. */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setStatus("loading");
    try {
      await submitLead({ form: "contact", name: get("name"), phone: get("phone"), email: get("email"), course: get("course"), message: get("message") });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/45 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30";

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:p-8">
        <CircleCheck className="mx-auto size-12 text-accent-400" aria-hidden />
        <p className="mt-4 text-2xl font-bold">Thank you!</p>
        <p className="mt-2 text-sm text-ink-300">We have received your details. A counsellor will call you during office hours — Mon to Sat, 9am to 7pm.</p>
      </div>
    );
  }

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
        <button type="submit" aria-disabled={status === "loading" || undefined} className="btn-primary">{status === "loading" ? "Sending…" : "Submit"}</button>
        <p className="text-xs text-ink-300">A counsellor replies during office hours — Mon to Sat, 9am to 7pm.</p>
      </div>
      <p className="mt-4 text-sm text-brand-200" aria-live="polite">
        {status === "error" ? "We couldn't save your details. Please try again in a moment." : ""}
      </p>
    </form>
  );
}
