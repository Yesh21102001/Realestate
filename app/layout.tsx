import type { Metadata, Viewport } from "next";
import { Buenard, Cormorant_Garamond, Lexend } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import FloatingCallButton from "./components/FloatingCallButton";
import SchemaMarkup from "./components/SchemaMarkup";
import { ventures } from "./data/ventures";
import { businessSchema, keywordClusters, siteConfig, websiteSchema } from "./lib/seo";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const buenard = Buenard({
  variable: "--font-buenard",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111B33",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vizag Yards | Plots for Sale in Vizag & Visakhapatnam",
    template: "%s | Vizag Yards",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...keywordClusters.primary.slice(0, 6), ...keywordClusters.highIntent.slice(0, 3)],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Real Estate",
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, alt: "Entrance of a Vizag Yards gated community" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${lexend.variable} ${buenard.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-0">
        <SchemaMarkup schema={businessSchema(ventures)} />
        <SchemaMarkup schema={websiteSchema} />
        {children}
        <BottomNav />
        <FloatingCallButton />
      </body>
    </html>
  );
}
