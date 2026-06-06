import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import WhatsAppFloating from "@/components/shared/WhatsAppFloating";
import CookieConsent from "@/components/shared/CookieConsent";
import ChatWidget from "@/components/shared/ChatWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drshardahomoeopathy.com"),
  title: {
    default: "Sharda Homeopathy Clinic | Dr. Sharda Tawale | Pune",
    template: "%s | Sharda Homeopathy Clinic",
  },
  description:
    "Best homeopathic treatment in Pune by Dr. Sharda Tawale. Natural, safe, and effective cures for skin, respiratory, digestive, joint, and lifestyle conditions. Book your consultation today.",
  keywords: [
    "homeopathy clinic pune",
    "dr sharda tawale",
    "best homeopathy doctor pune",
    "homeopathic treatment",
    "natural healing",
    "psoriasis homeopathy",
    "pcod homeopathy",
    "asthma treatment pune",
  ],
  authors: [{ name: "Dr. Sharda Tawale" }],
  creator: "Sharda Homeopathy Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drshardahomoeopathy.com",
    siteName: "Sharda Homeopathy Clinic",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shardahomeopathy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.drshardahomoeopathy.com/#organization",
      name: "Sharda Homeopathy Clinic",
      url: "https://www.drshardahomoeopathy.com",
      logo: "https://www.drshardahomoeopathy.com/icons/logo.png",
      description:
        "Expert homeopathic treatment in Pune by Dr. Sharda Tawale. Natural healing for 100+ conditions.",
      medicalSpecialty: "Homeopathic Medicine",
      telephone: "+91-9881255055",
      email: "drshardatawale@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411007",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:30",
          closes: "12:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "17:00",
          closes: "19:30",
        },
      ],
      priceRange: "₹₹",
      sameAs: [
        "https://www.facebook.com/doctorsharda/",
        "https://www.instagram.com/drshardahomeopathy/",
        "https://www.youtube.com/channel/UCvu7GhIHzCnlVIx03Vk-RiA"
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.drshardahomoeopathy.com/about#doctor",
      name: "Dr. Sharda Tawale",
      jobTitle: "Homeopathic Physician",
      worksFor: {
        "@id": "https://www.drshardahomoeopathy.com/#organization",
      },
      description:
        "Expert homeopathic doctor with 25+ years of experience in Pune since 2001",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-cream antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <LoadingScreen />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
