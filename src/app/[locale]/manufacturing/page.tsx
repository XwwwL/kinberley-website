import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import ManufacturingFlow from "@/components/ManufacturingFlow";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { manufacturingSEO, BASE_URL, SITE_NAME } from "@/lib/seo";
import { companyFacts } from "@/data/company";
import { mfgTranslations } from "@/data/translations";

interface MfgPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MfgPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const isEn = l === "en";
  const seo = manufacturingSEO[l] ?? manufacturingSEO["en"];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${BASE_URL}/${l}/manufacturing`,
      languages: { en: `${BASE_URL}/en/manufacturing`, zh: `${BASE_URL}/zh/manufacturing`, "x-default": `${BASE_URL}/en/manufacturing` },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: SITE_NAME,
      url: `${BASE_URL}/${l}/manufacturing`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function ManufacturingPage({ params }: MfgPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;
  const isEn = l === "en";

  const t = mfgTranslations[l] ?? mfgTranslations["en"];

  return (
    <>
      <section className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2847] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb locale={l} items={[{ label: t.title }]} />
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.workflowTitle} subtitle={t.workflowSubtitle} />
          <ManufacturingFlow locale={l} />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.serviceTitle} subtitle={t.serviceSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.productionCapacity}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `Production Lines: ${companyFacts.manufacturing.productionLines}` : `生产线：${companyFacts.manufacturing.productionLines} 条`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `Factory Area: ${companyFacts.area}` : `厂房面积：${companyFacts.area}`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `Staff: ${companyFacts.staff.total} (Production: ${companyFacts.staff.production})` : `员工：${companyFacts.staff.total} 人（生产：${companyFacts.staff.production} 人）`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `Qualified Suppliers: ${companyFacts.serviceCapability.qualifiedSuppliers}` : `合格供应商：${companyFacts.serviceCapability.qualifiedSuppliers} 家`}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.orderTrade}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `MOQ: ${companyFacts.serviceCapability.moq}` : `起订量：${companyFacts.serviceCapability.moq}`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? `Nearest Port: ${companyFacts.serviceCapability.nearestPortEn}` : `最近港口：${companyFacts.serviceCapability.nearestPortZh}`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? "Quotation: " : "报价条款："}{companyFacts.serviceCapability.quotationTerms.join(", ")}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">•</span>
                  <span>{isEn ? "Payment: " : "支付方式："}{companyFacts.serviceCapability.paymentTerms.join(", ")}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.customServices}</h3>
              <ul className="space-y-2">
                {(isEn ? companyFacts.rd.capabilitiesEn : companyFacts.rd.capabilitiesZh).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 text-[#c9a84c]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{t.leadTimeTitle}</h3>
            <p className="text-gray-600">
              {isEn
                ? `Average lead time: ${companyFacts.serviceCapability.leadTimeEn}. Actual delivery time depends on order quantity and customization requirements. Contact us for a specific timeline based on your order.`
                : `平均交货周期：${companyFacts.serviceCapability.leadTimeZh}。实际交期取决于订单数量和定制需求，请联系我们获取具体时间表。`}
            </p>
          </div>
        </div>
      </section>

      <CTASection locale={l} />
    </>
  );
}
