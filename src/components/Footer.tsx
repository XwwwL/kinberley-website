import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { companyFacts } from "@/data/company";
import { productNavTranslations, navTranslations, footerTranslations } from "@/data/translations";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const isEn = locale === "en";
  const productNav = productNavTranslations[locale];
  const nav = navTranslations[locale];
  const ft = footerTranslations[locale];

  return (
    <footer className="bg-[#0d1f33] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{companyFacts.nameEn}</h3>
            <p className="text-sm text-gray-400">{companyFacts.nameZh}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {companyFacts.address.full}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-[#c9a84c]">📞</span>
              <span>{companyFacts.contact.phone}</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{ft.products}</h3>
            <ul className="space-y-2">
              {productNav.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${locale}/products/${p.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-[#c9a84c]"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{ft.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-gray-400 transition-colors hover:text-[#c9a84c]">
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/manufacturing`} className="text-sm text-gray-400 transition-colors hover:text-[#c9a84c]">
                  {nav.manufacturing}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/quality-control`} className="text-sm text-gray-400 transition-colors hover:text-[#c9a84c]">
                  {nav.qualityControl}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-gray-400 transition-colors hover:text-[#c9a84c]">
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{ft.tradeInfo}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{ft.moq}: {companyFacts.serviceCapability.moq}</li>
              <li>{ft.port}: {isEn ? companyFacts.serviceCapability.nearestPortEn : companyFacts.serviceCapability.nearestPortZh}</li>
              <li>{ft.terms}: {companyFacts.serviceCapability.quotationTerms.join(", ")}</li>
              <li>{ft.payment}: {companyFacts.serviceCapability.paymentTerms.join(", ")}</li>
              <li>{ft.leadTime}: {isEn ? companyFacts.serviceCapability.leadTimeEn : companyFacts.serviceCapability.leadTimeZh}</li>
            </ul>
            <a
              href={companyFacts.madeInChina}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded border border-[#c9a84c] px-4 py-2 text-sm font-medium text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-white"
            >
              {ft.madeInChina}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {companyFacts.nameEn}. {ft.copyright}
        </div>
      </div>
    </footer>
  );
}
