import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/data/content";
import { services } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export function ServiceCategoryTemplate({ category }: { category: ServiceCategory }) {
  const related = services.filter((s) => s.slug !== category.slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={category.title}
        description={category.summary}
        image={category.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.title },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="flex flex-col gap-20">
          {category.details.map((detail, i) => (
            <div
              key={detail.slug}
              id={detail.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src={detail.image}
                    alt={detail.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08} className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {detail.title}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">{detail.body}</p>
                {detail.requestCta && (
                  <Button as={Link} href="/appointments" variant="outline" withArrow className="mt-6">
                    Request an Appointment
                  </Button>
                )}
              </Reveal>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-background-subtle py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((service) => (
              <Reveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group/rel flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-bright/40 hover:shadow-soft"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">{service.title}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{service.summary}</p>
                  </div>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover/rel:translate-x-0.5 group-hover/rel:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
