"use client";

interface AmapSectionProps {
  locale: string;
}

export default function AmapSection({ locale }: AmapSectionProps) {
  // 永嘉金博利五金有限公司 — 温州市永嘉县黄田街道千石工业区金石路1号
  // 精确坐标: 28.062990, 120.690340
  const lat = 28.06299;
  const lng = 120.69034;
  const name = "永嘉金博利五金有限公司";
  const addressZh = "浙江省温州市永嘉县黄田街道千石工业区金石路1号";
  const addressEn =
    "No.1 Jinshi Road, Qianshi Industrial Zone, Huangtian Street, Yongjia County, Wenzhou, Zhejiang, China";

  const mapsEmbedUrl = `https://maps.google.com/maps?q=loc:${lat},${lng}&z=16&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/maps?q=${lat},${lng}`;

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
          {locale === "zh" ? "公司位置" : "Our Location"}
        </h2>

        {/* Google Maps iframe */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="relative h-[400px] w-full bg-gray-200 sm:h-[500px]">
            <iframe
              title="Company Location"
              width="100%"
              height="100%"
              frameBorder="0"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Address and link */}
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600">
            {locale === "zh" ? addressZh : addressEn}
          </p>
          <a
            href={mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-[#1a3a5c] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0d2847]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {locale === "zh" ? "在 Google 地图中打开" : "Open in Google Maps"}
          </a>
        </div>
      </div>
    </section>
  );
}
