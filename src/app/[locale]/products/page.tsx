import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { productsOverviewTranslations, pageTranslations } from "@/data/translations";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const isEn = locale === "en";

  return {
    title: pageTranslations[locale as Locale].products,
    description: isEn
      ? "Browse our complete range of metal hardware products: coffee spoons, buttons, shoe buckles, bag hardware, brooches, clothing fasteners and more. Custom OEM/ODM available."
      : "浏览我们的全系列金属五金产品：咖啡勺、纽扣、鞋扣、箱包五金、胸针、服装扣件等。支持 OEM/ODM 定制服务。",
    openGraph: {
      title: `${pageTranslations[locale as Locale].products} — Jinbolli Hardware`,
      description: isEn
        ? "Complete range of metal hardware accessories."
        : "全系列金属五金辅料产品。",
    },
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;

  const t = productsOverviewTranslations[l];
  const pt = pageTranslations[l];

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
