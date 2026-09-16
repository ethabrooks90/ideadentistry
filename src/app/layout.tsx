import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { business, businessHours } from "@/data/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const siteUrl = "https://www.ideadentistry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Idea Dental | Dentist in Houston, TX",
    template: "%s | Idea Dental",
  },
  description:
    "Idea Dental is a leading provider of general, cosmetic, restorative, and orthodontic services in Houston, TX. Hablamos Español. Request an appointment today.",
  openGraph: {
    type: "website",
    siteName: "Idea Dental",
    title: "Idea Dental | Dentist in Houston, TX",
    description:
      "General, cosmetic, restorative, and orthodontic dental care in Houston, TX. Hablamos Español.",
    url: siteUrl,
    images: [{ url: "/images/office-hero.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea Dental | Dentist in Houston, TX",
    description:
      "General, cosmetic, restorative, and orthodontic dental care in Houston, TX. Hablamos Español.",
  },
  alternates: {
    canonical: "/",
  },
};

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

const openingHours = businessHours
  .filter((h) => !/closed/i.test(h.time) && !/by appointment/i.test(h.time))
  .map((h) => {
    const [open, close] = h.time.split("–").map((t) => t.trim());
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens: to24Hour(open),
      closes: to24Hour(close),
    };
  });

function to24Hour(time: string) {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return time;
  const [, hourStr, minute, period] = match;
  let hour = parseInt(hourStr, 10);
  if (/pm/i.test(period) && hour !== 12) hour += 12;
  if (/am/i.test(period) && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  url: siteUrl,
  telephone: business.phone,
  image: `${siteUrl}/images/office-hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine1,
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77076",
    addressCountry: "US",
  },
  sameAs: [business.facebookHref, business.yelpHref],
  openingHoursSpecification: openingHours,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
