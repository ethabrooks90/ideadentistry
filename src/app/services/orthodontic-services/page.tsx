import type { Metadata } from "next";
import { findService } from "@/data/content";
import { ServiceCategoryTemplate } from "@/components/services/ServiceCategoryTemplate";

const category = findService("orthodontic-services")!;

export const metadata: Metadata = {
  title: category.title,
  description: category.summary,
  alternates: { canonical: "/services/orthodontic-services" },
};

export default function OrthodonticServicesPage() {
  return <ServiceCategoryTemplate category={category} />;
}
