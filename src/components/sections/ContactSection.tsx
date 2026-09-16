import { Clock, MapPin, Phone } from "lucide-react";
import { business, businessHours } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${business.addressLine1}, ${business.addressLine2}`
)}&output=embed`;

export function ContactSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-background-subtle/50 p-6 sm:p-8">
              <p className="font-display text-xl font-semibold text-foreground">{business.name}</p>
              <div className="mt-5 space-y-4">
                <a
                  href={business.phoneHref}
                  className="flex items-start gap-3 text-[0.95rem] text-foreground/85 hover:text-primary"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {business.phone}
                </a>
                <a
                  href={business.mapsHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-start gap-3 text-[0.95rem] text-foreground/85 hover:text-primary"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </span>
                </a>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  Business Hours
                </p>
                <dl className="mt-3 space-y-2">
                  {businessHours.map((h) => (
                    <div key={h.day} className="flex flex-col text-[0.9rem] sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="font-medium text-foreground/80">{h.day}</dt>
                      <dd className="text-muted-foreground sm:text-right">
                        {h.time}
                        {h.note && <span className="block text-xs sm:inline sm:pl-1">{h.note}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="h-64 w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                src={mapSrc}
                title="Idea Dental location map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
