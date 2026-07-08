import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { companyFacts } from "@/data/company";

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
    title: {
      default: isEn
        ? `${companyFacts.nameEn} — Custom Hardware Buckles & Clothing Accessories`
        : `${companyFacts.nameZh} — 五金装饰扣与服装辅料制造商`,
      template: isEn ? `%s — Jinbolli Hardware` : `%s — ${companyFacts.nameZh}`,
    },
    description: isEn
      ? "Yongjia Jinbolli Hardware Co., Ltd. specializes in hardware decorative buckles, clothing buttons, shoe buckles, bag hardware, brooches and customized metal accessories. OEM/ODM service available, MOQ from 600 pcs."
      : "永嘉金博利五金有限公司主要生产五金装饰扣、服装纽扣、鞋扣、箱包五金、胸针、咖啡勺及各类定制金属辅料，支持 OEM、ODM 和来样定制服务。",
    keywords: isEn
      ? ["hardware buckles", "clothing buttons", "metal accessories", "OEM hardware", "China hardware manufacturer"]
      : ["五金装饰扣", "服装纽扣", "金属辅料", "鞋扣", "箱包五金", "OEM五金", "中国五金制造商"],
    openGraph: {
      title: isEn
        ? `${companyFacts.nameEn} — Custom Hardware Manufacturer`
        : `${companyFacts.nameZh} — 五金装饰扣制造商`,
      description: isEn
        ? "Specialized in hardware decorative buckles, clothing buttons, and customized metal accessories."
        : "专注于五金装饰扣、服装纽扣及各类定制金属辅料的生产与开发。",
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: isEn ? "Jinbolli Hardware" : companyFacts.nameZh,
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
