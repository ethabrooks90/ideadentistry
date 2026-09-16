import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { MapPin, Phone, Star } from "lucide-react";
import { business, footerLinks } from "@/data/content";
import { Container } from "@/components/ui/Container";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.45-4 4.1V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-8">
        <div>
          <Image src="/images/logo.png" alt="Idea Dental" width={190} height={70} className="h-11 w-auto" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
            Dentist in Houston, TX — general, cosmetic, preventative, and emergency dental care for the whole
            family. Hablamos Español.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={business.facebookHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Idea Dental on Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="size-4" aria-hidden="true" />
            </a>
            <a
              href={business.yelpHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Idea Dental on Yelp"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Star className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.9rem] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
            <span className="font-medium text-foreground">
              © {new Date().getFullYear()} {business.name}
            </span>
            <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="size-3.5" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 hover:text-primary"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              {business.addressLine1}, {business.addressLine2}
            </a>
          </div>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
