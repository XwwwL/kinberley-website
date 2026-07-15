import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import ManufacturingFlow from "@/components/ManufacturingFlow";
import QualityControlSection from "@/components/QualityControlSection";
import CTASection from "@/components/CTASection";
import { type Locale, isValidLocale } from "@/lib/i18n";
import { homeSEO, BASE_URL, SITE_NAME } from "@/lib/seo";
import { companyFacts } from "@/data/company";
import { productCategories, getProductContent } from "@/data/products";
import {
  heroTranslations,
  homeTranslations,
  homepageHighlights,
  statsTranslations,
  customItemsTranslations,
} from "@/data/translations";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const isEn = l === "en";
  const seo = homeSEO[l] ?? homeSEO["en"];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: isEn ? `${BASE_URL}/en` : `${BASE_URL}/zh`,
      languages: { en: `${BASE_URL}/en`, zh: `${BASE_URL}/zh`, "x-default": `${BASE_URL}/en` },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
      siteName: SITE_NAME,
      url: isEn ? `${BASE_URL}/en` : `${BASE_URL}/zh`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const l = locale as Locale;

  const hero = heroTranslations[l] ?? heroTranslations["en"];
  const home = homeTranslations[l] ?? homeTranslations["en"];
  const highlights = homepageHighlights[l] ?? homepageHighlights["en"];
  const stats = statsTranslations[l] ?? statsTranslations["en"];
  const customItems = customItemsTranslations[l] ?? customItemsTranslations["en"];

  return (
    <>
      <HeroSection locale={l} />

      {/* Key Stats Bar */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#1a3a5c]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.aboutTitle} subtitle={home.aboutSubtitle} />
          <div className="mx-auto max-w-3xl text-center text-gray-600 leading-relaxed">
            {l === "en" ? (
              <>
                <p className="mb-4">
                  {companyFacts.nameEn} ({companyFacts.nameZh}) was established in 2025, located in Qianshi
                  Industrial Zone, Yongjia County, Wenzhou City — a renowned manufacturing hub for
                  hardware and accessories in China.
                </p>
                <p className="mb-4">
                  We specialize in the production of hardware decorative buckles, clothing buttons, shoe
                  buckles, bag hardware, brooches, and various customized metal accessories. Our 200 m²
                  facility houses 3 production lines with die casting and drilling capabilities.
                </p>
                <p>
                  With a dedicated team of 5 staff including R&D and quality control personnel, we are
                  committed to delivering consistent quality and responsive service to clients worldwide.
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">
                  {companyFacts.nameZh}（{companyFacts.nameEn}）成立于2025年，位于浙江省温州市永嘉县千石工业区——中国知名的五金及辅料制造基地。
                </p>
                <p className="mb-4">
                  公司专注于生产五金装饰扣、服装纽扣、鞋扣、箱包五金、胸针、咖啡勺及各类定制金属辅料。200平方米的厂房内设有3条生产线，具备压铸和钻孔加工能力。
                </p>
                <p>
                  公司拥有包括研发和质检人员在内的5名专业团队成员，致力于为全球客户提供稳定的产品质量和高效的服务响应。
                </p>
              </>
            )}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/${l}/about`}
              className="text-sm font-semibold text-[#1a3a5c] hover:text-[#c9a84c] transition-colors"
            >
              {home.aboutLearnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.ourProducts} subtitle={home.ourProductsSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => {
              const randomImage = cat.images.grid[Math.floor(Math.random() * cat.images.grid.length)];
              return (
                <ProductCategoryCard
                  key={cat.slug}
                  locale={l}
                  slug={cat.slug}
                  name={getProductContent(cat, l).name}
                  description={getProductContent(cat, l).description}
                  image={randomImage}
                />
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={`/${l}/products`}
              className="inline-block rounded border-2 border-[#1a3a5c] px-8 py-3 text-base font-semibold text-[#1a3a5c] transition-all hover:bg-[#1a3a5c] hover:text-white"
            >
              {home.viewAllProducts}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.whyChooseUs} subtitle={home.whyChooseUsSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <FeatureCard key={h.title} icon={h.icon} title={h.title} description={h.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.manufacturingTitle} subtitle={home.manufacturingSubtitle} />
          <ManufacturingFlow locale={l} />
          <div className="mt-8 text-center">
            <Link
              href={`/${l}/manufacturing`}
              className="text-sm font-semibold text-[#1a3a5c] hover:text-[#c9a84c] transition-colors"
            >
              {home.manufacturingDetails}
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.qualityTitle} subtitle={home.qualitySubtitle} />
          <QualityControlSection locale={l} />
          <div className="mt-8 text-center">
            <Link
              href={`/${l}/quality-control`}
              className="text-sm font-semibold text-[#1a3a5c] hover:text-[#c9a84c] transition-colors"
            >
              {home.qualityDetails}
            </Link>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 sm:py-20 bg-[#1a3a5c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={home.customTitle} subtitle={home.customSubtitle} light />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">{home.customNote}</p>
        </div>
      </section>

      <CTASection
        locale={l}
        title={home.ctaTitle}
        description={home.ctaDesc}
        buttonText={home.ctaButton}
      />
    </>
  );
}
