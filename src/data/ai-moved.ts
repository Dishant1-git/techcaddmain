/** AI courses whose page now lives under /courses (long-form copy in src/data/course-pages). The old /ai-courses/<slug>
 *  URL redirects there (src/app/ai-courses/[slug]/page.tsx); cards, the sitemap and related links use `aiCourseHref()` so
 *  nothing on the site links to (or lists) a redirecting URL. */
export const aiMovedTo: Record<string, string> = {
  "generative-ai": "/courses/generative-ai",
  "chatgpt-ai-tools": "/courses/chatgpt-ai-tools",
  "agentic-ai": "/courses/agentic-ai",
  "ai-powered-marketing": "/courses/ai-powered-marketing",
  rag: "/courses/rag",
  "prompt-engineering": "/courses/prompt-engineering",
};

/** Final URL of an AI course page. */
export const aiCourseHref = (slug: string) => aiMovedTo[slug] ?? `/ai-courses/${slug}`;
