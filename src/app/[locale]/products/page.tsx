import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { productsOverviewSEO, BASE_URL, SITE_NAME } from "@/lib/seo";
import { productsOverviewTranslations, pageTranslations } from "@/data/translations";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const isEn = l === "en";
  const seo = productsOverviewSEO[l] ?? productsOverviewSEO["en"];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${BASE_URL}/${l}/products`,
      languages: { en: `${BASE_URL}/en/products`, zh: `${BASE_URL}/zh/products`, "x-default": `${BASE_URL}/en/products` },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: SITE_NAME,
      url: `${BASE_URL}/${l}/products`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;

  const t = productsOverviewTranslations[l] ?? productsOverviewTranslations["en"];
  const pt = pageTranslations[l] ?? pageTranslations["en"];

  return (
    <>
      <section className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2847] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb locale={l} items={[{ label: pt.products }]} />
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.sectionTitle} subtitle={t.sectionSubtitle} />
          <ProductGrid locale={l} />
        </div>
      </section>

      <CTASection
        locale={l}
        title={pt.cantFind}
        description={pt.cantFindDesc}
        buttonText={pt.requestCustom}
      />
    </>
  );
}
