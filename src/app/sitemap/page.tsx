import type { Metadata } from "next";
import Link from "next/link";
import { sitemapPages } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A full list of pages on the Idea Dental website.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Sitemap" breadcrumb={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto max-w-xl">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sitemapPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="block rounded-xl border border-border px-4 py-3 text-[0.95rem] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
