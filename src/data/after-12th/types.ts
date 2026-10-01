/** One month of a subject's 9-month roadmap. A 3-month program uses months 1–3, a 6-month program 1–6, etc. */
export type A12Month = {
  /** Short module name, e.g. "Dart & Flutter foundations". */
  title: string;
  /** One sentence: what this month is about. */
  summary: string;
  /** Exactly 6 short topics. */
  topics: string[];
  /** 3–4 tool names used this month. */
  tools: string[];
  /** The headline capability gained this month ("What you'll learn" cards). */
  skill: { title: string; text: string };
  /** The project shipped this month ("Portfolio projects"). */
  project: { title: string; text: string };
};

/** Subject content shared by every duration of that subject. Pricing and salary figures are NEVER part of this type. */
export type A12Subject = {
  /** Subject part of the page slug, e.g. "flutter-app-development" → /after-12th/6-month-flutter-app-development. */
  slug: string;
  /** e.g. "Flutter App Development". */
  name: string;
  /** Short name used in running copy, e.g. "Flutter". */
  short: string;
  /** Name from the map in src/components/ui/Icon.tsx. */
  icon: string;
  /** One plain-language sentence a 12th-pass student understands: what you actually do in this field. */
  pitch: string;
  /** One paragraph (3–4 sentences) about how the subject is taught. */
  overview: string;
  /** Exactly 9 months, ordered beginner → advanced. */
  months: A12Month[];
  /** "Why now" headline statement, one sentence. */
  statement: string;
  /** Exactly 4 pairs: what a beginner stops at vs what the program takes you to. */
  contrast: { basic: string; pro: string }[];
  /** Exactly 4 job roles (no salary figures). */
  roles: { title: string; text: string }[];
  /** Exactly 3 subject-specific FAQs. */
  faqs: { q: string; a: string }[];
};

export type A12Tier = {
  months: number;
  /** "Program" | "Certificate Program" | "Diploma Program" */
  suffix: string;
  badge: string;
  /** Credential named in hero + certification. */
  credential: string;
  /** One sentence describing the tier. */
  text: string;
  /** Hero "Includes" fact. */
  includes: string;
  /** Tier-specific paragraph appended to the subject overview. `{name}` is replaced with the subject name. */
  overview: string;
};

/** One page at /after-12th/<slug> — one per link in the "After 12th" nav dropdown. */
export type A12Page = {
  slug: string;
  /** e.g. "After 12th 6-Month Flutter App Development Certificate Program". */
  title: string;
  /** Short label for cards, breadcrumb and form, e.g. "Flutter App Development Certificate Program". */
  label: string;
  tier: A12Tier;
  subject: A12Subject;
  /** subject.months cut to the tier's duration. */
  months: A12Month[];
};
