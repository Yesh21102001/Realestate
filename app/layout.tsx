import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import FloatingCallButton from "./components/FloatingCallButton";
import { siteConfig, organizationSchema } from "./lib/seo";
import SchemaMarkup from "./components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vizag Yards - Premium Real Estate & Properties in Visakhapatnam",
  description: "Discover premium residential properties and plots in Visakhapatnam by Prakruthi Avenues. Find your dream home with modern amenities and excellent connectivity.",
  keywords: [
    "real estate Vizag",
    "properties Visakhapatnam",
    "Prakruthi Avenues",
    "residential plots Vizag",
    "buy property Visakhapatnam",
    "Radian Silicon Park",
    "Nexus Valley",
    "premium properties Vizag",
    "land in Bhogapuram",
    "real estate broker Visakhapatnam"
  ],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Vizag Yards - Premium Real Estate in Visakhapatnam",
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vizag Yards Logo",
      },
    ],
    siteName: "Vizag Yards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizag Yards - Real Estate in Visakhapatnam",
    description: siteConfig.description,
    images: ["/logo.png"],
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
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#001a0d" />
        <link rel="canonical" href={siteConfig.url} />
        <SchemaMarkup schema={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col pb-24 lg:pb-0">
        {children}
        <BottomNav />
        <FloatingCallButton />
      </body>
    </html>
  );
}
