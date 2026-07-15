import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { contactSEO, BASE_URL, SITE_NAME } from "@/lib/seo";
import { companyFacts } from "@/data/company";
import { contactPageTranslations } from "@/data/translations";
import AmapSection from "@/components/AmapSection";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const isEn = l === "en";
  const seo = contactSEO[l] ?? contactSEO["en"];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${BASE_URL}/${l}/contact`,
      languages: { en: `${BASE_URL}/en/contact`, zh: `${BASE_URL}/zh/contact`, "x-default": `${BASE_URL}/en/contact` },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: SITE_NAME,
      url: `${BASE_URL}/${l}/contact`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;

  const t = contactPageTranslations[l] ?? contactPageTranslations["en"];

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
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionTitle title={t.getInTouch} centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a5c]/10 text-lg">👤</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.contactPerson}</h3>
                    <p className="text-gray-600">{companyFacts.contact.person}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a5c]/10 text-lg">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.phone}</h3>
                    <a href={`tel:${companyFacts.contact.phone}`} className="text-gray-600 hover:text-[#1a3a5c]">
                      {companyFacts.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a5c]/10 text-lg">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.email}</h3>
                    <a href={`mailto:${companyFacts.contact.email}`} className="text-gray-600 hover:text-[#1a3a5c]">
                      {companyFacts.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a5c]/10 text-lg">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.address}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{companyFacts.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a5c]/10 text-lg">🏪</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.madeInChina}</h3>
                    <a
                      href={companyFacts.madeInChina}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1a3a5c] underline hover:text-[#c9a84c] break-all"
                    >
                      {t.visitShowroom}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionTitle title={t.sendInquiry} subtitle={t.inquirySubtitle} centered={false} />
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <ContactForm locale={l} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AmapSection locale={l} />
    </>
  );
}
