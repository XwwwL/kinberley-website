import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { breadcrumbTranslations } from "@/data/translations";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ locale, items }: BreadcrumbProps) {
  const bc = breadcrumbTranslations[locale] ?? breadcrumbTranslations["en"];

  return (
    <nav className="flex items-center text-sm text-gray-400" aria-label="Breadcrumb">
      <Link href={`/${locale}`} className="transition-colors hover:text-white">
        {bc.home}
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          <svg className="mx-2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
