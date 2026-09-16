import type { Metadata } from "next";
import { findService } from "@/data/content";
import { ServiceCategoryTemplate } from "@/components/services/ServiceCategoryTemplate";

const category = findService("general-dentistry")!;

export const metadata: Metadata = {
  title: category.title,
  description: category.summary,
  alternates: { canonical: "/services/general-dentistry" },
};

export default function GeneralDentistryPage() {
  return <ServiceCategoryTemplate category={category} />;
}
