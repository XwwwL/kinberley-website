import type { Locale } from "./i18n";

export const BASE_URL = "https://www.kinberley.com";
export const SITE_NAME = "Kinberley Hardware";

// ============================================================
// Page-level SEO
// ============================================================
interface PageSEO {
  title: string;
  description: string;
}

// --- Homepage ---
export const homeSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Kinberley Hardware - Custom Metal Buckles & Garment Accessories Manufacturer",
    description:
      "Kinberley Hardware is a China-based manufacturer of custom metal buckles, garment accessories, cufflinks, brooches, shoe buckles, swimsuit connecting buckles and hardware trims for global B2B buyers.",
  },
  zh: {
    title: "Kinberley Hardware - 五金装饰扣与服装辅料定制制造商",
    description:
      "Kinberley Hardware 是一家中国五金金属辅料制造商，专业生产定制金属扣、服装辅料、袖扣、胸针、鞋扣、泳装连接扣、箱包五金等产品，面向全球 B2B 客户。",
  },
};

// --- Products overview ---
export const productsOverviewSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Custom Garment Accessories & Metal Hardware Products - Kinberley Hardware",
    description:
      "Explore Kinberley Hardware's custom metal buckles, cufflinks, brooches, shoe buckles, swimsuit connecting buckles, bag hardware, clothing fasteners and decorative garment accessories.",
  },
  zh: {
    title: "定制服装辅料与金属五金产品 - Kinberley Hardware",
    description:
      "浏览 Kinberley Hardware 的定制金属扣、袖扣、胸针、鞋扣、泳装连接扣、箱包五金、服装扣件及装饰性服装辅料产品。",
  },
};

// --- About ---
export const aboutSEO: Record<Locale, PageSEO> = {
  en: {
    title: "About Kinberley Hardware - China Metal Accessories Manufacturer",
    description:
      "Learn about Kinberley Hardware, a China manufacturer specializing in metal garment accessories, custom buckles, hardware trims and OEM solutions for global buyers.",
  },
  zh: {
    title: "关于 Kinberley Hardware - 中国金属辅料制造商",
    description:
      "了解 Kinberley Hardware，一家专注于金属服装辅料、定制扣件、五金配饰及 OEM 解决方案的中国制造商。",
  },
};

// --- Manufacturing ---
export const manufacturingSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Manufacturing Capabilities - Custom Metal Buckles & Accessories",
    description:
      "Discover Kinberley Hardware's manufacturing capabilities for custom metal buckles, garment accessories, cufflinks, brooches, shoe buckles and hardware trims.",
  },
  zh: {
    title: "生产能力 - 定制金属扣与配件制造",
    description:
      "了解 Kinberley Hardware 在定制金属扣、服装辅料、袖扣、胸针、鞋扣及五金配件方面的制造能力。",
  },
};

// --- Quality Control ---
export const qualityControlSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Quality Control - Metal Garment Accessories Manufacturer",
    description:
      "Kinberley Hardware provides quality control for custom metal buckles, garment accessories, hardware trims, cufflinks, brooches and shoe buckles before shipment.",
  },
  zh: {
    title: "质量控制 - 金属服装辅料制造商",
    description:
      "Kinberley Hardware 在出货前对定制金属扣、服装辅料、五金配饰、袖扣、胸针及鞋扣进行严格的质量控制。",
  },
};

// --- Contact ---
export const contactSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Contact Kinberley Hardware - Request a Custom Hardware Quote",
    description:
      "Contact Kinberley Hardware to request a quote for custom metal buckles, garment accessories, cufflinks, brooches, shoe buckles and hardware trims.",
  },
  zh: {
    title: "联系 Kinberley Hardware - 获取定制五金报价",
    description:
      "联系 Kinberley Hardware，获取定制金属扣、服装辅料、袖扣、胸针、鞋扣及五金配件的报价。",
  },
};

// ============================================================
// Product detail SEO — keyed by slug
// ============================================================
export const productDetailSEO: Record<string, Record<Locale, PageSEO>> = {
  "coffee-spoons": {
    en: {
      title: "Custom Coffee Spoons Manufacturer - Metal Spoon Supplier",
      description:
        "Kinberley Hardware supplies custom coffee spoons and decorative metal spoons for promotional gifts, tableware brands and wholesale buyers.",
    },
    zh: {
      title: "定制咖啡勺制造商 - 金属咖啡勺供应商",
      description:
        "Kinberley Hardware 供应定制咖啡勺和装饰金属勺，面向促销礼品、餐具品牌及批发客户。",
    },
  },
  button: {
    en: {
      title: "Custom Metal Button Manufacturer - Garment Hardware Supplier",
      description:
        "Kinberley Hardware supplies custom metal buttons and decorative garment hardware for apparel, uniforms, bags and fashion accessories.",
    },
    zh: {
      title: "定制金属纽扣制造商 - 服装五金供应商",
      description:
        "Kinberley Hardware 供应定制金属纽扣和装饰性服装五金，适用于服装、制服、箱包及时尚配饰。",
    },
  },
  "shoe-buckle": {
    en: {
      title: "Shoe Buckle Manufacturer - Custom Metal Shoe Hardware",
      description:
        "Kinberley Hardware supplies custom metal shoe buckles and decorative shoe hardware for footwear brands, wholesalers and global B2B buyers.",
    },
    zh: {
      title: "鞋扣制造商 - 定制金属鞋类五金",
      description:
        "Kinberley Hardware 供应定制金属鞋扣和装饰鞋类五金，面向鞋类品牌、批发商及全球 B2B 客户。",
    },
  },
  "swimsuit-connecting-buckle": {
    en: {
      title: "Swimsuit Connecting Buckle Supplier - Custom Swimwear Hardware",
      description:
        "Custom swimsuit connecting buckles and swimwear metal accessories for fashion brands, swimwear manufacturers and global buyers.",
    },
    zh: {
      title: "泳装连接扣供应商 - 定制泳装五金配件",
      description:
        "定制泳装连接扣和泳装金属配件，面向时尚品牌、泳装制造商及全球采购商。",
    },
  },
  "bag-hardware": {
    en: {
      title: "Bag Hardware Supplier - Custom Metal Bag Accessories",
      description:
        "Kinberley Hardware manufactures custom bag hardware, decorative metal accessories, buckles and trims for handbags, luggage and fashion brands.",
    },
    zh: {
      title: "箱包五金供应商 - 定制金属箱包配件",
      description:
        "Kinberley Hardware 生产定制箱包五金、装饰金属配件、扣件及辅料，面向手袋、行李箱及时尚品牌。",
    },
  },
  "waist-reducing-belt-buckle": {
    en: {
      title: "Waist Belt Buckle Manufacturer - Custom Metal Belt Hardware",
      description:
        "Custom waist belt buckles and metal belt hardware for garments, fashion accessories and OEM buyers.",
    },
    zh: {
      title: "收腰带扣制造商 - 定制金属腰带五金",
      description:
        "定制收腰带扣和金属腰带五金，面向服装、时尚配饰及 OEM 客户。",
    },
  },
  "hardware-brooch": {
    en: {
      title: "Metal Brooch Manufacturer - Custom Hardware Brooches",
      description:
        "Custom metal brooches for garments, suits, dresses and fashion accessories. Kinberley Hardware supports OEM designs and bulk manufacturing for global buyers.",
    },
    zh: {
      title: "五金胸针制造商 - 定制金属胸针",
      description:
        "定制金属胸针，适用于服装、西装、连衣裙及时尚配饰。Kinberley Hardware 支持 OEM 设计和批量生产，面向全球客户。",
    },
  },
  "hardware-clothing-fastener": {
    en: {
      title: "Metal Clothing Fastener Manufacturer - Custom Garment Hardware",
      description:
        "Custom metal clothing fasteners, garment buckles and hardware trims for apparel brands, garment factories and global B2B buyers.",
    },
    zh: {
      title: "金属服装扣件制造商 - 定制服装五金",
      description:
        "定制金属服装扣件、服装搭扣和五金辅料，面向服装品牌、制衣工厂及全球 B2B 采购商。",
    },
  },
  cufflinks: {
    en: {
      title: "Custom Cufflinks Manufacturer - Kinberley Hardware",
      description:
        "Kinberley Hardware manufactures custom metal cufflinks for shirts, suits, uniforms and fashion brands, with OEM designs and bulk production available.",
    },
    zh: {
      title: "定制袖扣制造商 - Kinberley Hardware",
      description:
        "Kinberley Hardware 生产定制金属袖扣，适用于衬衫、西装、制服及时尚品牌，支持 OEM 设计和批量生产。",
    },
  },
  necklace: {
    en: {
      title: "Custom Metal Necklace Accessories - Kinberley Hardware",
      description:
        "Custom metal necklace accessories and decorative hardware components for fashion accessories, apparel brands and OEM buyers.",
    },
    zh: {
      title: "定制金属项圈配件 - Kinberley Hardware",
      description:
        "定制金属项圈配件和装饰性五金组件，面向时尚配饰、服装品牌及 OEM 采购商。",
    },
  },
};

// --- Default product SEO fallback ---
export const defaultProductSEO: Record<Locale, PageSEO> = {
  en: {
    title: "Custom Metal Hardware Products - Kinberley Hardware",
    description:
      "Custom metal hardware products from Kinberley Hardware including buckles, accessories and decorative trims for global B2B buyers.",
  },
  zh: {
    title: "定制金属五金产品 - Kinberley Hardware",
    description:
      "Kinberley Hardware 提供定制金属五金产品，包括扣件、配饰及装饰辅料，面向全球 B2B 客户。",
  },
};

// ============================================================
// Helper: get product SEO by slug
// ============================================================
export function getProductSEO(slug: string, locale: Locale): PageSEO {
  return productDetailSEO[slug]?.[locale] ?? defaultProductSEO[locale];
}

// ============================================================
// Canonical + alternates helpers
// ============================================================
export function getCanonical(path: string): string {
  return `${BASE_URL}${path}`;
}

export function getLanguageAlternates(path: string) {
  return {
    languages: {
      en: `${BASE_URL}/en${path.replace(/^\/(en|zh)/, "").replace(/^\/(en|zh)/, "")}`,
      zh: `${BASE_URL}/zh${path.replace(/^\/(en|zh)/, "").replace(/^\/(en|zh)/, "")}`,
      "x-default": `${BASE_URL}/en${path.replace(/^\/(en|zh)/, "").replace(/^\/(en|zh)/, "")}`,
    },
  };
}
