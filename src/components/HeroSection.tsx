import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { heroTranslations, buttonTranslations } from "@/data/translations";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const hero = heroTranslations[locale] ?? heroTranslations["en"];
  const btns = buttonTranslations[locale] ?? buttonTranslations["en"];

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-gradient-to-br from-[#0d1f33] via-[#1a3a5c] to-[#0d2847] sm:min-h-[650px]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #c9a84c 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-4 py-1.5 text-sm font-medium text-[#c9a84c]">
            {hero.badge}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/products`}
              className="rounded bg-[#c9a84c] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#b8993f] hover:shadow-xl"
            >
              {btns.viewProducts}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              {btns.contactUs}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
