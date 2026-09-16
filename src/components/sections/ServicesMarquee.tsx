import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Smile, Sparkles, Stethoscope, ShieldCheck } from "lucide-react";
import { services } from "@/data/content";

const categoryIcons: Record<string, typeof Stethoscope> = {
  "general-dentistry": Stethoscope,
  "restorative-dentistry": ShieldCheck,
  "cosmetic-dentistry": Sparkles,
  "orthodontic-services": Smile,
};

const offerItems = services.flatMap((category) =>
  category.details.map((detail) => ({
    key: `${category.slug}-${detail.slug}`,
    title: detail.title,
    summary: detail.summary,
    image: detail.image,
    href: `/services/${category.slug}#${detail.slug}`,
    Icon: categoryIcons[category.slug] ?? CalendarCheck,
  }))
);

export function ServicesMarquee() {
  return (
    <div
      className="relative mt-14 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee-slow gap-6 py-1">
        {[...offerItems, ...offerItems].map((item, i) => (
          <Link
            key={`${item.key}-${i}`}
            href={item.href}
            className="group flex w-80 shrink-0 flex-col gap-3 sm:w-96"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-soft">
              <item.Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <span className="h-7 w-px shrink-0 bg-border" aria-hidden="true" />
              <p className="font-display text-lg font-semibold leading-snug text-foreground">
                {item.title}
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-background-subtle">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="384px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-foreground opacity-0 shadow-lift transition-all duration-300 ease-out [transform:rotate(-12deg)_scale(0.85)] group-hover:opacity-100 group-hover:[transform:rotate(0deg)_scale(1)]">
                  <span className="size-1.5 rounded-full bg-primary-bright" aria-hidden="true" />
                  Learn More
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-transparent p-5 opacity-0 transition-all duration-300 group-hover:border-border group-hover:bg-white group-hover:opacity-100 group-hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Overview</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
