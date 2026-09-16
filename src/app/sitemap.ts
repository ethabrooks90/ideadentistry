import type { MetadataRoute } from "next";
import { sitemapPages } from "@/data/content";

const siteUrl = "https://www.ideadentistry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map((page) => ({
    url: `${siteUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
  }));
}
