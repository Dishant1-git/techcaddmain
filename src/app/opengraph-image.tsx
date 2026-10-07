import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/** Default social-share image for every page (1200×630), generated at build time. A route can override it with its own
 *  opengraph-image file. Plain shapes and system fonts only, so it needs no font or image downloads. */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "72px 80px", background: "linear-gradient(135deg, #050b1f 0%, #0b1a4a 60%, #1d53f0 130%)", color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#facc15" }}>
          IT · AI · CAD Training
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>techcadd</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "#c7d2fe", maxWidth: 940, lineHeight: 1.25 }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#e2e8f0" }}>
          <span>Jalandhar, Punjab · Classroom + Live Online</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
