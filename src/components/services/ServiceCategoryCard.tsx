import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceCategoryCard({ service, delay = 0 }: { service: ServiceCategory; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-bright/40 hover:shadow-lift"
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </div>
          <p className="line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">{service.summary}</p>
        </div>
      </Link>
    </Reveal>
  );
}
