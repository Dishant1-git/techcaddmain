"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { branches } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

type Field = "name" | "phone" | "course" | "location" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "loading" | "success" | "error";

const validate = (d: Record<string, string>): Errors => {
  const e: Errors = {};
  if ((d.name ?? "").trim().length < 2) e.name = "Enter your full name (at least 2 letters).";
  if (!/^(\+?91)?[6-9]\d{9}$/.test((d.phone ?? "").replace(/[\s-]/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number, e.g. 98881 22254.";
  if (!d.course) e.course = "Choose the course you are interested in.";
  if (!d.location) e.location = "Choose a branch or Live Online.";
  if ((d.message ?? "").length > 500) e.message = "Keep your message under 500 characters.";
  return e;
};

/**
 * Neumorphic 5-field enquiry form (name, phone, course, location, message) with visible labels and inline validation
 * (on blur after first touch, and on submit). No backend yet: submit opens WhatsApp pre-filled — swap `send` for
 * `await fetch("/api/lead", …)` when a CRM exists; loading / error / success states are already wired.
 */
export function CpEnquiryForm({ course, courses }: { course: string; courses: string[] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const read = () => Object.fromEntries(new FormData(formRef.current!)) as Record<string, string>;

  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const name = (e.target as EventTarget as HTMLInputElement).name as Field;
    if (!name) return;
    const all = validate(read());
    setErrors((prev) => ({ ...prev, [name]: all[name] }));
  };

  const send = async (d: Record<string, string>) => {
    const url = waLink(
      `Hi TechCADD, I'd like to enquire about the ${d.course} course.\nName: ${d.name}\nPhone: ${d.phone}\nLocation: ${d.location}${d.message ? `\nMessage: ${d.message}` : ""}`,
    );
    // window.open must run synchronously inside the submit handler or pop-up blockers will stop it.
    const win = window.open(url, "_blank");
    if (!win) {
      setFallback(url);
      throw new Error("popup-blocked");
    }
    win.opener = null;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const d = read();
    const found = validate(d);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      await send(d);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const control = (f: Field) =>
    `w-full rounded-2xl border-0 bg-neu px-4 py-3.5 text-ink-900 shadow-neu-inset-sm outline-none ring-offset-2 ring-offset-neu transition-shadow duration-300 placeholder:text-ink-500 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
      errors[f] ? "ring-2 ring-red-600 focus:ring-red-600" : "focus:ring-brand-500"
    }`;

  const a11y = (f: Field) => ({
    id: `cpq-${f}`,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `cpq-${f}-error` : undefined,
    disabled: status === "loading",
  });

  const error = (f: Field) =>
    errors[f] && (
      <p id={`cpq-${f}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {errors[f]}
      </p>
    );

  const label = "mb-2 block text-sm font-semibold text-ink-900";

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} onBlur={onBlur} aria-labelledby="cpq-title" className="neu space-y-5 p-6 text-left sm:p-8">
      <div>
        <h3 id="cpq-title" className="text-2xl font-bold text-ink-900">Book your free demo class</h3>
        <p className="mt-1 text-sm text-ink-700">A counsellor will call you within 24 hours.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cpq-name" className={label}>Full name</label>
          <input {...a11y("name")} autoComplete="name" placeholder="e.g. Harpreet Kaur" className={control("name")} />
          {error("name")}
        </div>
        <div>
          <label htmlFor="cpq-phone" className={label}>Mobile number</label>
          <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98881 22254" className={control("phone")} />
          {error("phone")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cpq-course" className={label}>Course</label>
          <select {...a11y("course")} defaultValue={course} className={control("course")}>
            {courses.map((c) => <option key={c}>{c}</option>)}
          </select>
          {error("course")}
        </div>
        <div>
          <label htmlFor="cpq-location" className={label}>Where do you want to learn?</label>
          <select {...a11y("location")} defaultValue="" className={control("location")}>
            <option value="" disabled>Choose a branch or online</option>
            {branches.map((b) => <option key={b.slug}>{b.city}</option>)}
            <option>Live Online</option>
          </select>
          {error("location")}
        </div>
      </div>

      <div>
        <label htmlFor="cpq-message" className={label}>
          Your message <span className="font-normal text-ink-500">(optional)</span>
        </label>
        <textarea {...a11y("message")} rows={3} maxLength={500} placeholder="e.g. I'm in 2nd year B.Tech — is the weekend batch right for me?" className={`${control("message")} resize-y`} />
        {error("message")}
      </div>

      <button type="submit" aria-disabled={status === "loading" || undefined} aria-busy={status === "loading" || undefined} className="btn-neu-primary w-full !py-4 text-base">
        {status === "loading" ? (
          <><LoaderCircle className="size-5 animate-spin motion-reduce:animate-none" aria-hidden /> Sending your enquiry…</>
        ) : (
          <>Book My Free Demo <Send className="size-4" aria-hidden /></>
        )}
      </button>

      <div aria-live="polite" className="min-h-5 text-center text-sm">
        {status === "success" && (
          <p className="flex items-center justify-center gap-2 font-medium text-emerald-800">
            <CheckCircle2 className="size-4" aria-hidden /> Almost done — send the message in WhatsApp to confirm your slot.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-700">
            WhatsApp didn&apos;t open (your browser may have blocked the pop-up).{" "}
            <a href={fallback} target="_blank" rel="noopener noreferrer" className="link !text-red-800">Open WhatsApp to send your enquiry</a>
          </p>
        )}
        {status === "idle" && <p className="text-ink-700">100% free · No spam · Your details stay private</p>}
      </div>
    </form>
  );
}
