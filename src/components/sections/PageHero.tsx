import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-foreground pb-20 pt-40 text-white sm:pb-24 sm:pt-48">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-35" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground" />
        </>
      )}

      <Container className="relative z-10">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary-bright">{eyebrow}</p>
        )}
        <h1 className="balance max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{description}</p>
        )}
      </Container>
    </section>
  );
}
