import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleInit from "@/components/LocaleInit";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { SITE_NAME, BASE_URL } from "@/lib/seo";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const defaultMeta: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Kinberley Hardware - Custom Metal Buckles & Garment Accessories Manufacturer",
    description:
      "Kinberley Hardware is a China-based manufacturer of custom metal buckles, garment accessories, cufflinks, brooches, shoe buckles, swimsuit connecting buckles and hardware trims for global B2B buyers.",
    ogLocale: "en_US",
  },
  zh: {
    title: "Kinberley Hardware - 五金装饰扣与服装辅料定制制造商",
    description:
      "Kinberley Hardware 是一家中国五金金属辅料制造商，专业生产定制金属扣、服装辅料、袖扣、胸针、鞋扣、泳装连接扣、箱包五金、咖啡勺等产品，面向全球 B2B 客户。",
    ogLocale: "zh_CN",
  },
  ru: {
    title: "Kinberley Hardware - Производитель металлических пряжек и фурнитуры для одежды",
    description:
      "Kinberley Hardware — китайский производитель металлических пряжек, фурнитуры для одежды, запонок, брошей, обувных пряжек, фурнитуры для купальников и аксессуаров для B2B покупателей.",
    ogLocale: "ru_RU",
  },
  pt: {
    title: "Kinberley Hardware - Fabricante de Fivelas Metálicas e Acessórios para Vestuário",
    description:
      "A Kinberley Hardware é uma fabricante chinesa de fivelas metálicas, acessórios para vestuário, abotoaduras, broches, fivelas para calçados, acessórios para moda praia e ferragens para compradores B2B globais.",
    ogLocale: "pt_BR",
  },
  es: {
    title: "Kinberley Hardware - Fabricante de Hebillas Metálicas y Accesorios para Ropa",
    description:
      "Kinberley Hardware es un fabricante chino de hebillas metálicas, accesorios para prendas, gemelos, broches, hebillas para calzado, herrajes para trajes de baño y accesorios metálicos para compradores B2B globales.",
    ogLocale: "es_LA",
  },
  ar: {
    title: "Kinberley Hardware - مصنع أبازيم معدنية وإكسسوارات ملابس مخصصة",
    description:
      "Kinberley Hardware هي شركة تصنيع صينية متخصصة في الأبازيم المعدنية، إكسسوارات الملابس، أزرار الأكمام، الدبابيس، أبازيم الأحذية، إكسسوارات ملابس السباحة والقطع المعدنية للمشترين التجاريين حول العالم.",
    ogLocale: "ar_SA",
  },
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const dm = defaultMeta[l];

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: dm.title, template: `%s | ${SITE_NAME}` },
    description: dm.description,
    openGraph: {
      title: dm.title,
      description: dm.description,
      type: "website",
      locale: dm.ogLocale,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: dm.title,
      description: dm.description,
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${BASE_URL}/${loc}`])
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;

  return (
    <>
      <LocaleInit locale={l} />
      <Header locale={l} />
      <main className="flex-1">{children}</main>
      <Footer locale={l} />
    </>
  );
}
