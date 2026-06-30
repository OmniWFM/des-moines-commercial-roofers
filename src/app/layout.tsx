import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Des Moines Commercial Roofing | Installation, Repair & Service",
    template: "%s | Des Moines Commercial Roofing"
  },
  description:
    "Des Moines commercial roofing contractor. TPO, EPDM, metal roof installation, repair and 24/7 service for businesses across Des Moines, Iowa.",
  keywords: [
    "commercial roofing Des Moines",
    "Des Moines roofing contractor",
    "flat roof repair Des Moines",
    "TPO roofing Iowa",
    "commercial roof replacement"
  ],
  openGraph: {
    title: "Des Moines Commercial Roofing",
    description:
      "Commercial roofing installation, repair and 24/7 service across Des Moines, Iowa.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: site.hero, width: 1200, height: 630 }]
  },
  alternates: { canonical: site.url }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: site.name,
    url: site.url,
    telephone: site.phoneDisplay,
    areaServed: "Des Moines, Iowa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Des Moines",
      addressRegion: "IA",
      addressCountry: "US"
    },
    description:
      "Commercial roofing installation, repair and 24/7 service across Des Moines, Iowa."
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
