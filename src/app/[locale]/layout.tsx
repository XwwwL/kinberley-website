import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { SITE_NAME, BASE_URL } from "@/lib/seo";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const isEn = locale === "en";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isEn
        ? "Kinberley Hardware - Custom Metal Buckles & Garment Accessories Manufacturer"
        : "Kinberley Hardware - 五金装饰扣与服装辅料定制制造商",
      template: `%s | ${SITE_NAME}`,
    },
    description: isEn
      ? "Kinberley Hardware is a China-based manufacturer of custom metal buckles, garment accessories, cufflinks, brooches, shoe buckles, swimsuit connecting buckles and hardware trims for global B2B buyers."
      : "Kinberley Hardware 是一家中国五金金属辅料制造商，专业生产定制金属扣、服装辅料、袖扣、胸针、鞋扣、泳装连接扣、箱包五金、咖啡勺等产品，面向全球 B2B 客户。",
    keywords: isEn
      ? [
          "metal buckles",
          "garment accessories",
          "cufflinks manufacturer",
          "brooches",
          "shoe buckles",
          "bag hardware",
          "clothing fasteners",
          "custom hardware",
          "OEM metal accessories",
          "China hardware manufacturer",
        ]
      : [
          "五金装饰扣",
          "服装辅料",
          "金属纽扣",
          "袖扣定制",
          "鞋扣",
          "箱包五金",
          "五金胸针",
          "OEM五金",
          "中国五金制造商",
        ],
    openGraph: {
      title: isEn
        ? "Kinberley Hardware - Custom Metal Buckles & Garment Accessories"
        : "Kinberley Hardware - 五金装饰扣与服装辅料制造商",
      description: isEn
        ? "China-based manufacturer of custom metal buckles, garment accessories, cufflinks, brooches and hardware trims for global B2B buyers."
        : "中国金属辅料制造商，专业生产定制五金扣、服装辅料、袖扣、胸针、鞋扣等。",
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "Kinberley Hardware - Custom Metal Buckles & Garment Accessories"
        : "Kinberley Hardware - 五金装饰扣与服装辅料制造商",
      description: isEn
        ? "China-based manufacturer of custom metal buckles, garment accessories and hardware trims for global buyers."
        : "中国金属辅料制造商，面向全球 B2B 客户。",
    },
    alternates: {
      languages: {
        en: `${BASE_URL}/en`,
        zh: `${BASE_URL}/zh`,
        "x-default": `${BASE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
