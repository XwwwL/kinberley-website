"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Locale, getLocalizedPath } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const targetLocale: Locale = locale === "en" ? "zh" : "en";

  const targetPath = getLocalizedPath(pathname, targetLocale);

  return (
    <Link
      href={targetPath}
      className="ml-1 rounded px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#1a3a5c]"
      title={locale === "en" ? "Switch to Chinese" : "切换到英文"}
    >
      {locale === "en" ? "中文" : "EN"}
    </Link>
  );
}
