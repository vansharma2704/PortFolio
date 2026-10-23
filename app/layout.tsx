import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vanshsharma.dev"),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s — ${profile.name}` },
  description: profile.intro,
  keywords: ["Vansh Sharma", "software engineer", "full-stack developer", "React developer", "Next.js developer", "Node.js developer"],
  openGraph: { title: profile.name, description: profile.intro, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: profile.name, description: profile.intro },
  robots: { index: true, follow: true },
  other: { "darkreader-lock": "true" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111412" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" content="true" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 bg-signal px-4 py-3 text-sm font-semibold text-ink focus:translate-y-0">Skip to content</a>
        <Header />
        <Providers>{children}<Footer /></Providers>
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
