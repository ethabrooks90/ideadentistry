import type { Metadata } from "next";
import { findService } from "@/data/content";
import { ServiceCategoryTemplate } from "@/components/services/ServiceCategoryTemplate";

const category = findService("cosmetic-dentistry")!;

export const metadata: Metadata = {
  title: category.title,
  description: category.summary,
  alternates: { canonical: "/services/cosmetic-dentistry" },
};

export default function CosmeticDentistryPage() {
  return <ServiceCategoryTemplate category={category} />;
}
