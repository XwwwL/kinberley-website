"use client";

import { useState } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { companyFacts } from "@/data/company";
import { navTranslations, productNavTranslations } from "@/data/translations";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const nav = navTranslations[locale] ?? navTranslations["en"];
  const productNav = productNavTranslations[locale] ?? productNavTranslations["en"];

  const linkClass =
    "rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1a3a5c]";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#1a3a5c] text-xs font-bold text-[#c9a84c]">
              JBL
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight text-gray-900">
                {companyFacts.nameEn}
              </div>
              <div className="text-xs text-gray-500">{companyFacts.nameZh}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link href={`/${locale}`} className={linkClass}>
              {nav.home}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <Link
                href={`/${locale}/products`}
                className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1a3a5c]"
              >
                {nav.products}
                <svg
                  className={`h-4 w-4 transition-transform ${productMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {productMenuOpen && (
                <div className="absolute left-0 top-full w-72 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <Link
                    href={`/${locale}/products`}
                    className="block border-b border-gray-100 px-4 py-2 text-sm font-semibold text-[#1a3a5c] hover:bg-gray-50"
                  >
                    {locale === "en" ? "All Products →" : "全部产品 →"}
                  </Link>
                  {productNav.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${locale}/products/${p.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a3a5c]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/about`} className={linkClass}>
              {nav.about}
            </Link>
            <Link href={`/${locale}/manufacturing`} className={linkClass}>
              {nav.manufacturing}
            </Link>
            <Link href={`/${locale}/quality-control`} className={linkClass}>
              {nav.qualityControl}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded bg-[#c9a84c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#b8993f]"
            >
              {nav.contact}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile hamburger + lang switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link href={`/${locale}`} onClick={() => setMobileOpen(false)} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              {nav.home}
            </Link>
            <Link href={`/${locale}/products`} onClick={() => setMobileOpen(false)} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              {nav.products}
            </Link>
            <div className="ml-4 border-l-2 border-gray-200 pl-4">
              {productNav.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/products/${p.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              {nav.about}
            </Link>
            <Link href={`/${locale}/manufacturing`} onClick={() => setMobileOpen(false)} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              {nav.manufacturing}
            </Link>
            <Link href={`/${locale}/quality-control`} onClick={() => setMobileOpen(false)} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              {nav.qualityControl}
            </Link>
            <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="block rounded bg-[#c9a84c] px-3 py-2 text-sm font-semibold text-white">
              {nav.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
