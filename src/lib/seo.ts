/** Trims a meta description to what search results show (about 155 characters), cutting at a sentence end when one falls
 *  late enough, otherwise at a word boundary with an ellipsis. */
export function clip(text: string, max = 158) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const sentence = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  if (sentence > max * 0.6) return cut.slice(0, sentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]+$/, "")}…`;
}

/** Default social-share image (src/app/opengraph-image.tsx). Add to every `openGraph` a page defines itself. */
export const ogImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TechCADD — IT, AI and CAD training in Jalandhar" }];
