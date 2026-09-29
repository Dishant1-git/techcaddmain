import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Best IT, AI & CAD Training Institute in North India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "IT institute in Jalandhar", "best computer institute in Punjab", "AI course Chandigarh", "full stack course Mohali",
    "data science course Ludhiana", "6 months industrial training Punjab", "digital marketing course Amritsar",
    "AutoCAD course Jalandhar", "cybersecurity course North India",
  ],
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, title: `${site.name} — ${site.tagline}`, description: site.description, url: site.url },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.tagline}`, description: site.description },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050b1f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <ScrollAnimator />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
