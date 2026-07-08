import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import QualityControlSection from "@/components/QualityControlSection";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { companyFacts, localizedContent } from "@/data/company";
import { qcTranslations } from "@/data/translations";

interface QCPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: QCPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const isEn = locale === "en";
  return {
    title: isEn ? "Quality Control" : "质量控制",
    description: isEn
      ? "Our quality control process: 100% inspection, visual inspection, function inspection, raw material traceability, and warehouse control procedures."
      : "我们的质量控制流程：100% 全检、目视检验、功能检验、原材料可追溯和仓储控制程序。",
  };
}

export default async function QualityControlPage({ params }: QCPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;
  const isEn = l === "en";

  const t = qcTranslations[l];
  const qcData = localizedContent[l].qualityControl;

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
          <SectionTitle title={t.inspectionTitle} subtitle={t.inspectionSubtitle} />
          <QualityControlSection locale={l} />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.systemTitle} subtitle={t.systemSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.rawMaterial}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Traceability identification of raw materials" : "原材料可追溯标识"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Supplier qualification and evaluation" : "供应商资质审核与评估"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? `Qualified supplier base: ${companyFacts.serviceCapability.qualifiedSuppliers} suppliers` : `合格供应商库：${companyFacts.serviceCapability.qualifiedSuppliers} 家`}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.inProcess}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Finished product inspection instructions are followed" : "严格遵守成品检验规程"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Inspection type: 100% inspection, visual inspection, function inspection" : "检验类型：100%全检、目视检验、功能检验"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? `${companyFacts.qualityControl.qcStaff} dedicated QA/QC inspection staff` : `${companyFacts.qualityControl.qcStaff} 名专职QA/QC检验人员`}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.nonConforming}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Non-conforming products are marked and segregated" : "不合格品被标记并隔离"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Products are repaired and re-inspected before acceptance" : "产品经修复后重新检验，合格方可接收"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Documented non-conformance records maintained" : "保留不合格品记录文档"}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.warehouse}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Warehouse control process with written procedure and records" : "具备书面程序和记录的仓储控制流程"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Proper packaging to prevent damage during transit" : "适当包装，防止运输损坏"}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{isEn ? "Final inspection before shipment release" : "出货前最终检验"}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm text-blue-800">
              <strong>{isEn ? "Note:" : "说明："}</strong>{" "}
              {isEn ? companyFacts.qualityControl.notesEn : companyFacts.qualityControl.notesZh}
            </p>
          </div>
        </div>
      </section>

      <CTASection locale={l} />
    </>
  );
}
