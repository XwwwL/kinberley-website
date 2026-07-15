"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Locale, locales, getLocalizedPath } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

const langLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ru: "РУС",
  pt: "PT",
  es: "ES",
  ar: "عربي",
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative ml-1">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="rounded px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#1a3a5c] flex items-center gap-1"
        title="Switch language"
      >
        {langLabels[locale]}
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-28 rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-50">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={getLocalizedPath(pathname, loc)}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-xs transition-colors ${
                loc === locale
                  ? "bg-[#1a3a5c]/10 text-[#1a3a5c] font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3a5c]"
              }`}
            >
              {langLabels[loc]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
