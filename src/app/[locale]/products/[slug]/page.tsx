import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import ImageCarousel from "@/components/ImageCarousel";
import { type Locale, isValidLocale, locales } from "@/lib/i18n";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";
import { productDetailTranslations, pageTranslations, productCardTranslations } from "@/data/translations";
import { companyFacts } from "@/data/company";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProductSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const isEn = locale === "en";
  const name = product.content[locale].name;

  return {
    title: name,
    description: product.content[locale].description,
    openGraph: {
      title: isEn
        ? `${name} | ${companyFacts.nameEn}`
        : `${name} | ${companyFacts.nameZh}`,
      description: product.content[locale].description,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const content = product.content[l];
  const pt = pageTranslations[l];
  const dt = productDetailTranslations[l];
  const lt = productCardTranslations[l];

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2847] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            locale={l}
            items={[{ label: pt.products, href: `/${l}/products` }, { label: content.name }]}
          />
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{content.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{content.description}</p>
        </div>
      </section>

      {/* Product details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionTitle title={pt.productOverview || dt.productImage || "Product Overview"} centered={false} />

              {/* Main Product Image Carousel */}
              <ImageCarousel images={product.images.grid} alt={content.name} />

              {/* Applications */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{pt.applications}</h3>
                <div className="flex flex-wrap gap-2">
                  {content.applications.map((app) => (
                    <span key={app} className="rounded-full bg-[#1a3a5c]/10 px-4 py-1.5 text-sm text-[#1a3a5c]">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{pt.features}</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {content.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 shrink-0 text-[#c9a84c]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Gallery */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{pt.productGallery || dt.productImage || "Gallery"}</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {product.images.grid.map((img, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={img}
                        alt={`${content.name} - ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Customization & Inquiry */}
            <div>
              <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{pt.customization}</h3>
                <ul className="space-y-3">
                  {content.customizationOptions.map((opt) => (
                    <li key={opt.label} className="text-sm">
                      <span className="font-semibold text-gray-900">{opt.label}:</span>
                      <br />
                      <span className="text-gray-600">{opt.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#1a3a5c]">{dt.inquireAbout}</h3>
                <ContactForm locale={l} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href={`/${l}/products`}
              className="flex items-center gap-2 text-sm font-medium text-[#1a3a5c] hover:text-[#c9a84c] transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {dt.backToAllProducts}
            </Link>
            <Link
              href={`/${l}/contact`}
              className="rounded bg-[#c9a84c] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#b8993f] transition-colors"
            >
              {pt.contact || "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      <CTASection locale={l} />
    </>
  );
}
