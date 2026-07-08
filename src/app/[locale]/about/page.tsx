import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { companyFacts, localizedContent, tableInfoTranslations } from "@/data/company";
import { aboutTranslations } from "@/data/translations";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const isEn = locale === "en";
  return {
    title: isEn ? "About Us" : "关于我们",
    description: isEn
      ? `Learn about ${companyFacts.nameEn} — a professional hardware decorative buckle and clothing button manufacturer in Wenzhou, China.`
      : `了解${companyFacts.nameZh}——位于浙江温州的专业五金装饰扣与服装辅料制造商。`,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;
  const isEn = l === "en";

  const t = aboutTranslations[l];
  const content = localizedContent[l];
  const tableLabels = tableInfoTranslations[l];
  const staffLabel = isEn
    ? `GM: ${companyFacts.staff.generalManager}, Sales: ${companyFacts.staff.sales}, Production: ${companyFacts.staff.production}`
    : `总经理: ${companyFacts.staff.generalManager}, 销售: ${companyFacts.staff.sales}, 生产: ${companyFacts.staff.production}`;
  const rdResponsibility = isEn ? companyFacts.rd.responsibilityEn : companyFacts.rd.responsibilityZh;
  const rdCapabilities = isEn ? companyFacts.rd.capabilitiesEn : companyFacts.rd.capabilitiesZh;

  return (
    <>
      <section className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2847] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb locale={l} items={[{ label: t.title }]} />
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            {companyFacts.nameEn} — {companyFacts.nameZh}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle title={t.profileTitle} centered={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {content.aboutIntro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title={t.infoTitle} centered={false} />
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { label: tableLabels.companyName, value: companyFacts.nameEn },
                      { label: tableLabels.chineseName, value: companyFacts.nameZh },
                      { label: tableLabels.established, value: companyFacts.founded },
                      { label: tableLabels.registeredCapital, value: companyFacts.registeredCapital },
                      { label: tableLabels.factoryArea, value: companyFacts.area },
                      { label: tableLabels.address, value: companyFacts.address.full },
                      { label: tableLabels.totalStaff, value: `${companyFacts.staff.total} (${staffLabel})` },
                      { label: tableLabels.productionLines, value: String(companyFacts.manufacturing.productionLines) },
                      { label: tableLabels.nearestPort, value: isEn ? companyFacts.serviceCapability.nearestPortEn : companyFacts.serviceCapability.nearestPortZh },
                      { label: tableLabels.moq, value: companyFacts.serviceCapability.moq },
                      { label: tableLabels.leadTime, value: isEn ? companyFacts.serviceCapability.leadTimeEn : companyFacts.serviceCapability.leadTimeZh },
                    ].map((row) => (
                      <tr key={row.label} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50 w-1/2">{row.label}</td>
                        <td className="px-4 py-3 text-gray-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.rdTitle} subtitle={t.rdSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.engineeringTeam}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">✓</span>
                  <span>{isEn ? `${companyFacts.rd.engineers} dedicated R&D engineer` : `${companyFacts.rd.engineers} 名专职研发工程师`}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 text-[#c9a84c]">✓</span>
                  <span>{rdResponsibility}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.designSoftware}</h3>
              <ul className="space-y-2">
                {companyFacts.rd.software.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 text-[#c9a84c]">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{t.capabilities}</h3>
              <ul className="space-y-2">
                {rdCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 text-[#c9a84c]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={l} />
    </>
  );
}
