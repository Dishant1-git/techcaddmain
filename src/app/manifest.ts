import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Web app manifest (Android home-screen icon + theme colour). Icons live in /public/favicons. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050b1f",
    icons: [
      { src: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
