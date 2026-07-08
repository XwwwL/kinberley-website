import { type Locale } from "@/lib/i18n";
import { localizedContent } from "@/data/company";

interface QualityControlSectionProps {
  locale: Locale;
}

export default function QualityControlSection({ locale }: QualityControlSectionProps) {
  const qcData = localizedContent[locale].qualityControl;

  return (
    <section>
      <div className="grid gap-6 lg:grid-cols-3">
        {qcData.inspectionTypes.map((type) => (
          <div key={type.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">✅</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{type.name}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{type.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          {locale === "en" ? "Quality Management Process" : "质量管理流程"}
        </h3>
        <ul className="space-y-3 text-sm text-gray-600">
          {qcData.qcItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-green-600">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        <em>
          {locale === "en"
            ? "Audited company information available upon request. Verified supplier information available from Made-in-China audit materials."
            : "经核验的公司信息可应要求提供。可从 Made-in-China 审核资料获取已验证的供应商信息。"}
        </em>
      </p>
    </section>
  );
}
