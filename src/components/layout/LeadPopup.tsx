"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, Quote, Star, X } from "lucide-react";

/** Any component can open the popup with `openLeadPopup()` (e.g. the header "Book Demo" button). */
export const LEAD_POPUP_EVENT = "techcadd:open-lead-popup";
export const openLeadPopup = () => window.dispatchEvent(new Event(LEAD_POPUP_EVENT));

const SEEN_KEY = "techcadd-lead-popup-seen";
const AUTO_OPEN_MS = 5000;

const field =
  "w-full rounded-xl border border-white/25 bg-white/15 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/70 focus:border-white focus:bg-white/20 aria-[invalid=true]:border-accent-400";

type Props = {
  courses: string[];
  contact: { whatsapp: string; email: string; rating: { score: string; reviews: string } };
};

/**
 * Lead popup (native <dialog>: focus trap, Esc and backdrop for free). Opens once per browser session 5s after load,
 * and whenever `openLeadPopup()` is called. No backend yet — submit opens WhatsApp with the details pre-filled.
 * Kept compact (max-w-3xl, left panel hidden on phones) so it never needs its own scrollbar.
 */
export function LeadPopup({ courses, contact }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [sum, setSum] = useState<[number, number]>([8, 8]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;

    const open = () => {
      if (d.open) return;
      setSum([2 + Math.floor(Math.random() * 8), 2 + Math.floor(Math.random() * 8)]);
      setErrors({});
      setSent(false);
      d.showModal();
      document.documentElement.style.overflow = "hidden";
      try { sessionStorage.setItem(SEEN_KEY, "1"); } catch { /* storage blocked: popup may show again */ }
    };
    const onClose = () => { document.documentElement.style.overflow = ""; };

    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === "1"; } catch { /* ignore */ }
    const timer = seen ? undefined : window.setTimeout(open, AUTO_OPEN_MS);

    window.addEventListener(LEAD_POPUP_EVENT, open);
    d.addEventListener("close", onClose);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(LEAD_POPUP_EVENT, open);
      d.removeEventListener("close", onClose);
      onClose();
    };
  }, []);

  const close = () => dialog.current?.close();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const course = String(data.get("course") ?? "");
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const answer = String(data.get("answer") ?? "").trim();

    const next: Record<string, string> = {};
    if (!course) next.course = "Choose a course.";
    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Enter a 10-digit mobile number starting with 6–9.";
    if (Number(answer) !== sum[0] + sum[1]) next.answer = "That answer isn't right — try again.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      (e.currentTarget.elements.namedItem(Object.keys(next)[0]) as HTMLElement | null)?.focus();
      return;
    }

    const msg = `Hi TechCADD, I'd like a counselling call.\nCourse: ${course}\nName: ${name}\nPhone: ${phone}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  };

  const err = (name: string) =>
    errors[name] ? <p id={`lead-${name}-error`} className="mt-1 text-xs font-medium text-accent-400">{errors[name]}</p> : null;
  const a11y = (name: string) => ({ name, id: `lead-${name}`, "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `lead-${name}-error` : undefined });

  return (
    <dialog
      ref={dialog}
      aria-labelledby="lead-popup-title"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="lead-popup on-dark m-auto w-[calc(100%-2rem)] max-h-[calc(100svh-2rem)] max-w-3xl overflow-y-auto rounded-3xl bg-transparent p-0 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop:bg-ink-950/75 backdrop:backdrop-blur-sm"
    >
      <div className="grid md:grid-cols-2">
        {/* Left: pitch (hidden on phones to keep the popup short) */}
        <div className="relative isolate hidden flex-col justify-center gap-5 bg-ink-950 p-8 md:flex">
          <div className="absolute -left-20 -top-24 -z-10 size-72 rounded-full bg-brand-600/50 blur-3xl" aria-hidden />
          <div className="flex items-start gap-3">
            <span className="lead-wave text-3xl" aria-hidden>👋</span>
            <p className="font-display text-2xl font-extrabold leading-tight">Still exploring? Let us help</p>
          </div>
          <p className="text-sm leading-relaxed text-ink-300">
            Talk to a counsellor and we&apos;ll map the shortest route from where you are to the job you want.
          </p>
          <figure className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <Quote className="size-5 text-accent-400" aria-hidden />
            <blockquote className="mt-2 font-display text-base font-bold leading-snug">&ldquo;AI is the new electricity.&rdquo;</blockquote>
            <figcaption className="mt-3 text-xs text-ink-300">
              <span className="block text-sm font-bold text-white">Andrew Ng</span>
              Founder, DeepLearning.AI
            </figcaption>
          </figure>
          <p className="flex items-center justify-between gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink-900">
            {contact.rating.score}/5 · {contact.rating.reviews} Google reviews
            <span className="flex gap-0.5 text-accent-500" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}
            </span>
          </p>
          <p className="text-xs leading-relaxed text-ink-300">
            You can also share your requirements at{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-accent-400 underline underline-offset-2">{contact.email}</a>, and
            our team will get back to you.
          </p>
        </div>

        {/* Right: form */}
        <div className="relative bg-brand-600 p-6 sm:p-8">
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/30 bg-white/10 transition-colors hover:bg-white/25">
            <X className="size-4" aria-hidden />
          </button>
          <h2 id="lead-popup-title" className="max-w-[16rem] pr-8 font-display text-xl font-extrabold leading-tight sm:max-w-xs sm:text-2xl">
            Tell us your goal. We&apos;ll code it into reality.
          </h2>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-white/15 p-6 text-center" role="status">
              <CircleCheck className="mx-auto size-10 text-accent-400" aria-hidden />
              <p className="mt-3 font-display text-lg font-bold">Almost done!</p>
              <p className="mt-1 text-sm text-white/85">Send the WhatsApp message that just opened and a counsellor will call you back.</p>
              <button type="button" onClick={close} className="btn-primary mt-5">Close</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-5 space-y-3">
              <div>
                <label htmlFor="lead-course" className="sr-only">Course of interest</label>
                <select {...a11y("course")} defaultValue="" required className={`${field} [&>option]:text-ink-900`}>
                  <option value="" disabled>Select your course of interest*</option>
                  {courses.map((c) => <option key={c}>{c}</option>)}
                </select>
                {err("course")}
              </div>
              <div>
                <label htmlFor="lead-name" className="sr-only">Full name</label>
                <input {...a11y("name")} type="text" autoComplete="name" required placeholder="Full name*" className={field} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="lead-phone" className="sr-only">Mobile number</label>
                <input {...a11y("phone")} type="tel" inputMode="numeric" maxLength={10} autoComplete="tel-national" required placeholder="Mobile number (10 digits)*" className={field} />
                {err("phone")}
              </div>
              <div>
                <label htmlFor="lead-answer" className="mb-1.5 block text-xs font-bold">Quick check — what is {sum[0]} + {sum[1]}?*</label>
                <input {...a11y("answer")} type="text" inputMode="numeric" autoComplete="off" required placeholder="Your answer" className={field} />
                {err("answer")}
              </div>
              <p className="flex items-center gap-2 rounded-full bg-accent-400 px-4 py-2 text-xs font-bold">
                <CircleCheck className="size-4 shrink-0" aria-hidden /> A counsellor calls you back the same working day.
              </p>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 font-display font-bold text-brand-700 transition-colors hover:bg-brand-50">
                Submit <ArrowRight className="size-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
