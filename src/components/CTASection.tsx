import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface CTASectionProps {
  locale: Locale;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  compact?: boolean;
}

export default function CTASection({
  locale,
  title,
  description,
  buttonText,
  buttonHref,
  compact = false,
}: CTASectionProps) {
  const defaultTitle = locale === "en" ? "Looking for Custom Hardware Solutions?" : "寻求定制五金解决方案？";
  const defaultDesc = locale === "en"
    ? "Contact us today to discuss your requirements. We provide OEM/ODM services with flexible MOQ and multiple trade terms."
    : "立即联系我们讨论您的需求。我们提供 OEM/ODM 服务，灵活的起订量和多种贸易条款。";
  const defaultBtn = locale === "en" ? "Send Inquiry" : "发送询盘";

  return (
    <section className={`bg-gradient-to-r from-[#1a3a5c] to-[#0d2847] ${compact ? "py-10" : "py-16"}`}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`font-bold tracking-tight text-white ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}>
          {title || defaultTitle}
        </h2>
        {(description || defaultDesc) && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{description || defaultDesc}</p>
        )}
        <Link
          href={buttonHref || `/${locale}/contact`}
          className="mt-8 inline-block rounded bg-[#c9a84c] px-10 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#b8993f] hover:shadow-xl"
        >
          {buttonText || defaultBtn}
        </Link>
      </div>
    </section>
  );
}
