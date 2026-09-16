import type { Metadata } from "next";
import { findService } from "@/data/content";
import { ServiceCategoryTemplate } from "@/components/services/ServiceCategoryTemplate";

const category = findService("restorative-dentistry")!;

export const metadata: Metadata = {
  title: category.title,
  description: category.summary,
  alternates: { canonical: "/services/restorative-dentistry" },
};

export default function RestorativeDentistryPage() {
  return <ServiceCategoryTemplate category={category} />;
}
