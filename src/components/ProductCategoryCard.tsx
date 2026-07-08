import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { productCardTranslations } from "@/data/translations";

interface ProductCategoryCardProps {
  locale: Locale;
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export default function ProductCategoryCard({
  locale,
  slug,
  name,
  description,
  image,
}: ProductCategoryCardProps) {
  const lt = productCardTranslations[locale];

  return (
    <Link
      href={`/${locale}/products/${slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#c9a84c]/40"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center text-gray-400">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="mt-1 block text-xs">{name}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#1a3a5c]">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center text-sm font-medium text-[#c9a84c]">
          {lt.learnMore}
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
