import { type Locale } from "@/lib/i18n";
import { companyFacts, localizedContent } from "@/data/company";

interface ManufacturingFlowProps {
  locale: Locale;
}

export default function ManufacturingFlow({ locale }: ManufacturingFlowProps) {
  const isEn = locale === "en";
  const workflow = (localizedContent[locale] ?? localizedContent["en"]).manufacturingWorkflow;
  const facilities = companyFacts.manufacturing.facilities;

  return (
    <section>
      <div className="grid gap-6 lg:grid-cols-4">
        {workflow.map((step, idx) => (
          <div key={step.step} className="relative flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a3a5c] text-xl font-bold text-[#c9a84c] shadow-lg">
              {step.step}
            </div>
            {idx < workflow.length - 1 && (
              <div className="absolute left-[calc(50%+28px)] top-7 hidden h-0.5 w-[calc(100%-56px)] bg-[#c9a84c]/30 lg:block" />
            )}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 text-center text-lg font-semibold text-gray-900">
          {isEn ? "Main Facilities" : "主要设备"}
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {facilities.map((f) => (
            <div key={f.nameEn} className="flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {isEn ? f.nameEn : f.nameZh}
                </div>
                <div className="text-xs text-gray-500">
                  {isEn ? "Quantity: " : "数量："}{f.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
