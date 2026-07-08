import ProductCategoryCard from "./ProductCategoryCard";
import { productCategories } from "@/data/products";
import { type Locale } from "@/lib/i18n";

interface ProductGridProps {
  locale: Locale;
  title?: string;
}

export default function ProductGrid({ locale, title }: ProductGridProps) {
  return (
    <div>
      {title && (
        <h3 className="mb-6 text-xl font-bold text-gray-900">{title}</h3>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat) => (
          <ProductCategoryCard
            key={cat.slug}
            locale={locale}
            slug={cat.slug}
            name={cat.content[locale].name}
            description={cat.content[locale].description}
            image={cat.images?.main}
          />
        ))}
      </div>
    </div>
  );
}
