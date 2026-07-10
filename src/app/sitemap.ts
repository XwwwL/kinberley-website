import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllProductSlugs } from "@/data/products";

const BASE_URL = "https://www.kinberley.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/manufacturing", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/quality-control", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const productSlugs = getAllProductSlugs();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    for (const slug of productSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
