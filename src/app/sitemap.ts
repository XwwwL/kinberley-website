import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllProductSlugs } from "@/data/products";

const BASE_URL = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/manufacturing",
    "/quality-control",
    "/contact",
  ];

  const productSlugs = getAllProductSlugs();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Static routes
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/products" ? 0.9 : 0.7,
      });
    }

    // Product detail pages
    for (const slug of productSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
