import type { Locale } from "@/lib/i18n";

export interface ProductLocalizedContent {
  name: string;
  title: string;
  description: string;
  applications: string[];
  features: string[];
  customizationOptions: {
    label: string;
    detail: string;
  }[];
}

export interface ProductCategory {
  slug: string;
  images: {
    main: string;
    grid: string[];
  };
  content: Record<Locale, ProductLocalizedContent>;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "button",
    images: {
      main: "/images/button/1.jpg",
      grid: Array.from({ length: 2 }, (_, i) => `/images/button/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Button",
        title: "Metal & Decorative Buttons for Garments & Fashion",
        description:
          "Metal and decorative buttons for garments, fashion accessories, and customized apparel applications. Our buttons are produced with high-quality die-casting technology, ensuring consistent shape, smooth edges, and durable finishes for all types of clothing.",
        applications: [
          "Men's and women's fashion garments",
          "Uniforms and workwear",
          "Coats, jackets, and outerwear",
          "Custom apparel collections",
        ],
        features: [
          "Precision die-cast metal for uniform quality",
          "Wide range of finishes: matte, glossy, antique, electroplated",
          "Available in various sizes from 10mm to 40mm",
          "Strong attachment points for secure sewing",
          "Corrosion-resistant surface treatments",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, brass, black, custom colors" },
          { label: "Size", detail: "10mm – 40mm diameter, custom sizes available" },
          { label: "Surface Process", detail: "Polishing, plating, coating, embossing" },
          { label: "Logo", detail: "Custom logo, pattern, or text embossing" },
          { label: "Sample", detail: "Sample production based on your design or reference" },
        ],
      },
      zh: {
        name: "纽扣",
        title: "金属装饰纽扣与服装纽扣",
        description:
          "金属纽扣和装饰纽扣适用于服装、时尚配饰和定制服饰，可根据样品或设计图进行开发。采用高品质压铸技术生产，确保形状一致、边缘光滑、表面处理耐久。",
        applications: ["男女时尚服装", "制服和工作服", "大衣、夹克和外套", "定制服装系列"],
        features: [
          "精密压铸金属，品质统一",
          "多种表面处理：哑光、亮光、古铜色、电镀",
          "尺寸范围 10mm 至 40mm",
          "牢固的连接点，确保缝制稳固",
          "耐腐蚀表面处理",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、铜色、黑色、定制颜色" },
          { label: "尺寸", detail: "直径 10mm – 40mm，支持定制尺寸" },
          { label: "表面工艺", detail: "抛光、电镀、涂层、压花" },
          { label: "Logo", detail: "定制 logo、图案或文字压印" },
          { label: "样品", detail: "根据您的设计或参考样品生产" },
        ],
      },
    },
  },
  {
    slug: "shoe-buckle",
    images: {
      main: "/images/shoe-buckle/1.jpg",
      grid: Array.from({ length: 13 }, (_, i) => `/images/shoe-buckle/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Shoe Buckle",
        title: "Durable Metal Shoe Buckles for Footwear & Fashion",
        description:
          "Durable metal shoe buckles for footwear, sandals, boots, and fashion shoe accessories. Built with a robust metal structure, our shoe buckles offer reliable performance, various finishes, and support for sample-based customization to match your footwear designs.",
        applications: [
          "Casual and fashion shoes",
          "Sandals and slippers",
          "Boots and outdoor footwear",
          "Children's shoes",
          "Luxury shoe collections",
        ],
        features: [
          "Durable metal structure for long-lasting use",
          "Various finishes: polished, brushed, antique, plated",
          "Suitable for shoes, sandals, boots, and fashion footwear",
          "Secure fastening mechanism",
          "Corrosion and wear-resistant surface treatment",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, bronze, black nickel, custom plating" },
          { label: "Size", detail: "Custom buckle dimensions based on strap width" },
          { label: "Surface Process", detail: "Polishing, brushing, plating, antique finishing" },
          { label: "Logo", detail: "Engraved or embossed logo on buckle surface" },
          { label: "Sample", detail: "Sample customization supported with your design files" },
        ],
      },
      zh: {
        name: "鞋扣",
        title: "耐用金属鞋扣",
        description:
          "金属鞋扣适用于凉鞋、靴子、皮鞋和时尚鞋类配件，结构稳定，可支持多种表面处理工艺。提供可靠的性能和丰富的表面选择，支持来样定制。",
        applications: ["休闲鞋和时尚鞋", "凉鞋和拖鞋", "靴子和户外鞋", "童鞋", "高端鞋类系列"],
        features: [
          "坚固的金属结构，经久耐用",
          "多种表面处理：抛光、拉丝、古铜色、电镀",
          "适用于鞋类、凉鞋、靴子和时尚鞋",
          "可靠的紧固机制",
          "耐腐蚀和耐磨表面处理",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、青铜色、黑镍、定制电镀" },
          { label: "尺寸", detail: "根据带子宽度定制扣件尺寸" },
          { label: "表面工艺", detail: "抛光、拉丝、电镀、古铜色处理" },
          { label: "Logo", detail: "扣面雕刻或压印 logo" },
          { label: "样品", detail: "支持根据设计文件定制样品" },
        ],
      },
    },
  },
  {
    slug: "swimsuit-connecting-buckle",
    images: {
      main: "/images/swimsuit-connecting-buckle/1.jpg",
      grid: Array.from({ length: 52 }, (_, i) => `/images/swimsuit-connecting-buckle/${i + 1}.jpg` ),
    },
    content: {
      en: {
        name: "Swimsuit Connecting Buckle",
        title: "Swimsuit Connecting Buckles & Hardware Accessories",
        description:
          "Metal connecting buckles designed for swimsuits, beachwear, and activewear applications. These hardware accessories combine functionality with decorative appeal, manufactured with corrosion-resistant materials suitable for water exposure and frequent use.",
        applications: ["Swimwear and bikinis", "Beachwear and resort wear", "Activewear and sports apparel", "Lingerie and intimate wear"],
        features: [
          "Corrosion-resistant metal construction for wet environments",
          "Smooth edges for comfort against skin",
          "Secure snap or clasp connection",
          "Lightweight design that does not weigh down fabrics",
          "Available in various decorative styles",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, black, custom plating" },
          { label: "Size", detail: "Multiple sizes for different strap widths" },
          { label: "Surface Process", detail: "Polishing, plating, anti-corrosion coating" },
          { label: "Logo", detail: "Custom logo or branding on buckle surface" },
          { label: "Sample", detail: "Sample production available for new designs" },
        ],
      },
      zh: {
        name: "泳装连接扣",
        title: "泳装连接扣与五金配件",
        description:
          "泳装连接扣适用于泳衣、沙滩装、弹力带和服装连接部位，可根据客户需求定制尺寸和颜色。采用耐腐蚀材料制造，兼具功能性和装饰性。",
        applications: ["泳装和比基尼", "沙滩装和度假装", "运动服和健身服", "内衣和贴身衣物"],
        features: [
          "防腐蚀金属结构，适用于潮湿环境",
          "边缘光滑，舒适亲肤",
          "可靠的搭扣或卡扣连接",
          "轻量设计，不拉扯面料",
          "多种装饰风格可选",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、黑色、定制电镀" },
          { label: "尺寸", detail: "多种尺寸适配不同带子宽度" },
          { label: "表面工艺", detail: "抛光、电镀、防腐蚀涂层" },
          { label: "Logo", detail: "扣面定制 logo 或品牌标识" },
          { label: "样品", detail: "支持新设计样品生产" },
        ],
      },
    },
  },
  {
    slug: "bag-hardware",
    images: {
      main: "/images/bag-hardware/1.jpg",
      grid: Array.from({ length: 12 }, (_, i) => `/images/bag-hardware/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Bag Hardware",
        title: "Bag Hardware Accessories for Handbags & Luggage",
        description:
          "Decorative and functional hardware accessories for handbags, luggage, straps, and fashion bags. Our bag hardware collection includes buckles, clasps, rings, D-rings, sliders, and other metal fittings that add both style and durability to bag designs.",
        applications: ["Handbags and shoulder bags", "Luggage and travel bags", "Straps and belts for bags", "Fashion bags and accessories"],
        features: [
          "Used for handbags, luggage, straps, and fashion bags",
          "Decorative and functional hardware accessories",
          "High-strength metal for load-bearing parts",
          "Smooth surface finishing for fabric protection",
          "Consistent color matching across batches",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, gunmetal, custom finishes" },
          { label: "Size", detail: "Custom dimensions per bag design requirements" },
          { label: "Surface Process", detail: "Electroplating, PVD coating, polishing, brushing" },
          { label: "Logo", detail: "Custom embossed, engraved, or printed logo" },
          { label: "Sample", detail: "Pre-production samples provided for approval" },
        ],
      },
      zh: {
        name: "箱包五金",
        title: "箱包五金配件",
        description:
          "箱包五金适用于手袋、箱包、肩带、装饰扣和功能性连接件，兼具装饰性和实用性。产品系列包括扣件、搭扣、圆环、D 形环、拉片及其他金属配件。",
        applications: ["手袋和肩背包", "行李箱和旅行包", "包袋肩带和提带", "时尚包袋和配饰"],
        features: [
          "适用于手袋、箱包、肩带和时尚包",
          "兼具装饰性和功能性的五金配件",
          "承重部件采用高强度金属",
          "表面光滑，保护面料不受损",
          "批次之间颜色一致",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、枪黑色、定制表面" },
          { label: "尺寸", detail: "根据包袋设计要求定制尺寸" },
          { label: "表面工艺", detail: "电镀、PVD 涂层、抛光、拉丝" },
          { label: "Logo", detail: "定制压印、雕刻或印刷 logo" },
          { label: "样品", detail: "产前样品供客户确认" },
        ],
      },
    },
  },
  {
    slug: "waist-reducing-belt-buckle",
    images: {
      main: "/images/waist-reducing-belt-buckle/1.jpg",
      grid: Array.from({ length: 22 }, (_, i) => `/images/waist-reducing-belt-buckle/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Waist-Reducing Belt Buckle",
        title: "Waist-Reducing Belt Buckles & Adjustable Hardware",
        description:
          "Metal buckles designed for waist-reducing belts, adjustable straps, and fashion belt accessories. These buckles are manufactured with precision engineering to ensure reliable adjustability and a comfortable, secure fit for everyday wear.",
        applications: ["Waist-reducing belts", "Adjustable fashion belts", "Functional strap systems", "Body-shaping accessories"],
        features: [
          "Reliable locking mechanism for secure adjustment",
          "Durable metal construction withstands daily use",
          "Smooth operation for easy size adjustment",
          "Ergonomic design for comfort",
          "Available in decorative and minimalist styles",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, black, antique finishes" },
          { label: "Size", detail: "Custom sizes for different belt widths" },
          { label: "Surface Process", detail: "Electroplating, polishing, matte finishing" },
          { label: "Logo", detail: "Custom logo engraving or embossing" },
          { label: "Sample", detail: "Sample development based on your specifications" },
        ],
      },
      zh: {
        name: "收腰带扣",
        title: "收腰带扣与可调节五金",
        description:
          "收腰带扣适用于收腰带、塑身带、服装腰部配件和功能性服饰辅料，可根据样品定制。采用精密工程设计，确保调节可靠、佩戴舒适、固定安全。",
        applications: ["收腰带", "可调节时尚腰带", "功能性带子系统", "塑身配件"],
        features: [
          "可靠的锁定机制",
          "耐用的金属结构",
          "调节顺畅、操作简单",
          "人体工程学设计",
          "提供装饰性和简约风格选择",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、黑色、古铜色" },
          { label: "尺寸", detail: "根据腰带宽度定制尺寸" },
          { label: "表面工艺", detail: "电镀、抛光、哑光处理" },
          { label: "Logo", detail: "定制 logo 雕刻或压印" },
          { label: "样品", detail: "根据您的规格开发样品" },
        ],
      },
    },
  },
  {
    slug: "hardware-brooch",
    images: {
      main: "/images/hardware-brooch/1.jpg",
      grid: Array.from({ length: 32 }, (_, i) => `/images/hardware-brooch/${i + 1}.jpg` ),
    },
    content: {
      en: {
        name: "Hardware Brooch",
        title: "Hardware Brooches & Decorative Metal Pins",
        description:
          "Decorative metal brooches and pins crafted with fine hardware manufacturing techniques. Suitable for fashion garments, accessories, and promotional use, our brooches combine artistic design with durable metal construction for a premium look and feel.",
        applications: ["Fashion garments and accessories", "Branded promotional items", "Wedding and event accessories", "Corporate gifts and awards"],
        features: [
          "Intricate die-cast detailing for premium appearance",
          "Secure pin backing for reliable attachment",
          "Multiple plating options for different styles",
          "Lightweight for comfortable wearing",
          "Custom shapes and designs available",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, antique, dual-tone" },
          { label: "Size", detail: "Custom dimensions from small pins to large brooches" },
          { label: "Surface Process", detail: "Polishing, plating, enamel filling, stone setting" },
          { label: "Logo", detail: "Full custom design, logo reproduction, and branding" },
          { label: "Sample", detail: "Sample-making based on artwork, sketch, or reference" },
        ],
      },
      zh: {
        name: "五金胸针",
        title: "五金胸针与装饰别针",
        description:
          "五金胸针适用于服装装饰、时尚配饰、礼品和促销产品，支持不同造型和表面工艺。采用精密五金制造技术，将艺术设计与耐用金属结构相结合。",
        applications: ["时尚服装和配饰", "品牌促销礼品", "婚礼和活动配饰", "企业礼品和奖章"],
        features: [
          "精密压铸细节，质感高级",
          "可靠的别针背扣",
          "多种电镀选择",
          "轻便佩戴舒适",
          "支持定制造型和设计",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、古铜色、双色" },
          { label: "尺寸", detail: "从小型别针到大型胸针均可定制" },
          { label: "表面工艺", detail: "抛光、电镀、珐琅填充、镶石" },
          { label: "Logo", detail: "全面定制设计、logo 复制和品牌化" },
          { label: "样品", detail: "根据画稿、草图或参考样品制作" },
        ],
      },
    },
  },
  {
    slug: "hardware-clothing-fastener",
    images: {
      main: "/images/hardware-clothing-fastener/1.jpg",
      grid: Array.from({ length: 66 }, (_, i) => `/images/hardware-clothing-fastener/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Hardware Clothing Fastener",
        title: "Hardware Clothing Fasteners & Garment Closures",
        description:
          "Hardware fasteners used for garment closure, decoration, and functional fastening on coats, dresses, uniforms, and fashion garments. Our fasteners combine reliable holding power with decorative appeal, manufactured to consistent quality standards.",
        applications: ["Coats and jackets", "Dresses and formal wear", "Uniforms and workwear", "Fashion garments and accessories"],
        features: [
          "Used for garment closure, decoration, and functional fastening",
          "Suitable for coats, dresses, uniforms, and fashion garments",
          "Consistent spring tension for reliable closure",
          "Smooth surface finishing prevents fabric snagging",
          "Available in multiple styles: hook, clasp, snap, toggle",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, brass, black, custom electroplating" },
          { label: "Size", detail: "Multiple sizes for light to heavy fabrics" },
          { label: "Surface Process", detail: "Polishing, plating, anti-tarnish coating" },
          { label: "Logo", detail: "Custom branding, pattern, or logo embossing" },
          { label: "Sample", detail: "Custom sample production from your design or sketch" },
        ],
      },
      zh: {
        name: "服装五金扣件",
        title: "服装五金扣件与闭合件",
        description:
          "服装五金扣件适用于大衣、连衣裙、制服、时装和其他服装闭合或装饰部位，可提供样品定制服务。兼具可靠的固定力和装饰外观，按一致的质量标准生产。",
        applications: ["大衣和夹克", "连衣裙和正装", "制服和工作服", "时尚服装和配饰"],
        features: [
          "用于服装闭合、装饰和功能性固定",
          "适用于大衣、连衣裙、制服和时尚服装",
          "稳定的弹簧张力，确保闭合可靠",
          "表面光滑不挂面料",
          "多种款式可选：挂钩、搭扣、按扣、套索扣",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、铜色、黑色、定制电镀" },
          { label: "尺寸", detail: "多种尺寸适配轻薄至厚重面料" },
          { label: "表面工艺", detail: "抛光、电镀、防变色涂层" },
          { label: "Logo", detail: "定制品牌、图案或 logo 压印" },
          { label: "样品", detail: "根据您的设计或草图定制样品" },
        ],
      },
    },
  },
  {
    slug: "cufflinks",
    images: {
      main: "/images/cufflinks/1.jpg",
      grid: Array.from({ length: 11 }, (_, i) => `/images/cufflinks/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Cufflinks",
        title: "Metal Cufflinks & Decorative Sleeve Buttons",
        description:
          "Elegant metal cufflinks and decorative sleeve buttons for men's formal wear, business attire, and promotional gifts. Our cufflinks are crafted with precision die-casting and available in a variety of finishes.",
        applications: [
          "Men's formal shirts",
          "Business attire and suits",
          "Wedding accessories",
          "Corporate gifts and promotional items",
        ],
        features: [
          "Precision die-cast metal for refined appearance",
          "Various finishes: gold, silver, rose gold, antique",
          "Secure fastening mechanism",
          "Lightweight and comfortable to wear",
          "Custom designs and engravings available",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, antique, custom plating" },
          { label: "Size", detail: "Custom dimensions available" },
          { label: "Surface Process", detail: "Polishing, plating, engraving, enamel filling" },
          { label: "Logo", detail: "Custom logo, monogram, or pattern engraving" },
          { label: "Sample", detail: "Sample customization based on your design" },
        ],
      },
      zh: {
        name: "袖扣",
        title: "金属袖扣与装饰袖钉",
        description:
          "金属袖扣和装饰袖钉适用于男士正装、商务服装及促销礼品，采用精密压铸工艺制造，提供金色、银色、玫瑰金等多种表面处理选择，支持图案和 logo 定制。",
        applications: ["男士正装衬衫", "商务服装和西服", "婚礼配饰", "企业礼品和促销品"],
        features: [
          "精密压铸金属，外观精致",
          "多种表面处理：金色、银色、玫瑰金、古铜色",
          "牢固的紧固机制",
          "轻便舒适佩戴",
          "支持定制设计和雕刻",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、古铜色、定制电镀" },
          { label: "尺寸", detail: "支持定制尺寸" },
          { label: "表面工艺", detail: "抛光、电镀、雕刻、珐琅填充" },
          { label: "Logo", detail: "定制 logo、字母组合或图案雕刻" },
          { label: "样品", detail: "根据您的设计定制样品" },
        ],
      },
    },
  },
  {
    slug: "necklace",
    images: {
      main: "/images/necklace/1.jpg",
      grid: Array.from({ length: 10 }, (_, i) => `/images/necklace/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Choker & Necklace Hardware",
        title: "Metal Choker & Necklace Hardware Accessories",
        description:
          "Decorative metal choker and necklace hardware components for fashion jewelry, accessories, and apparel. Our metal fittings combine fashion-forward design with durable construction for neckwear applications.",
        applications: [
          "Fashion necklaces and chokers",
          "Jewelry components and findings",
          "Apparel decoration",
          "Accessories and trims",
        ],
        features: [
          "Decorative and functional metal hardware",
          "Various surface finishes available",
          "Durable yet lightweight construction",
          "Suitable for fashion and accessory applications",
          "Custom designs supported",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, antique, custom finishes" },
          { label: "Size", detail: "Custom dimensions and sizes available" },
          { label: "Surface Process", detail: "Polishing, plating, brushing, antique finishing" },
          { label: "Logo", detail: "Custom design, engraving, or branding" },
          { label: "Sample", detail: "Sample development from your sketch or reference" },
        ],
      },
      zh: {
        name: "项圈配件",
        title: "金属项圈与项链五金配件",
        description:
          "金属项圈和项链五金配件适用于时尚饰品、服装配饰等领域，兼具装饰性和功能性，支持多种表面处理工艺和定制设计。",
        applications: ["时尚项圈和项链", "首饰配件和零件", "服装装饰", "配饰辅料"],
        features: [
          "兼具装饰性和功能性的金属配件",
          "多种表面处理可选",
          "耐用且轻便的结构",
          "适用于时尚和配饰领域",
          "支持定制设计",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、古铜色、定制表面" },
          { label: "尺寸", detail: "支持定制尺寸和规格" },
          { label: "表面工艺", detail: "抛光、电镀、拉丝、古铜色处理" },
          { label: "Logo", detail: "定制设计、雕刻或品牌标识" },
          { label: "样品", detail: "根据您的草图或参考样品开发" },
        ],
      },
    },
  },
  {
    slug: "coffee-spoons",
    images: {
      main: "/images/coffee-spoons/1.jpg",
      grid: Array.from({ length: 17 }, (_, i) => `/images/coffee-spoons/${i + 1}.jpg`),
    },
    content: {
      en: {
        name: "Coffee Spoons",
        title: "Metal Coffee Spoons & Decorative Spoon Hardware",
        description:
          "Metal coffee spoons with decorative handles and customizable finishes, suitable for gifts, tableware sets, and promotional products. Our coffee spoons are manufactured with precision die casting and available in various metal finishes including gold, silver, rose gold, and antique brass.",
        applications: [
          "Gift sets and premium packaging",
          "Tableware and dining accessories",
          "Promotional merchandise",
          "Hospitality industry supplies",
        ],
        features: [
          "Die-cast metal construction for durability",
          "Multiple finish options: gold, silver, rose gold, antique brass",
          "Customizable handle designs and engravings",
          "Available in different sizes and weights",
          "Food-safe material and finishes",
        ],
        customizationOptions: [
          { label: "Color / Finish", detail: "Gold, silver, rose gold, antique, matte, glossy" },
          { label: "Size", detail: "Custom lengths and handle dimensions available" },
          { label: "Surface Process", detail: "Polishing, plating, coating, laser engraving" },
          { label: "Logo", detail: "Custom logo engraving or embossing on handle" },
          { label: "Sample", detail: "Sample customization and pre-production samples supported" },
        ],
      },
      zh: {
        name: "咖啡勺",
        title: "定制金属咖啡勺",
        description:
          "金属咖啡勺可用于礼品套装、餐具套装、咖啡用品及促销礼品，支持手柄造型、尺寸、颜色和表面工艺定制。采用精密压铸工艺制造，提供金色、银色、玫瑰金、古铜色等多种表面处理选择。",
        applications: ["礼品套装", "餐具套装", "咖啡用品", "促销礼品"],
        features: [
          "压铸金属结构，坚固耐用",
          "多种表面处理：金色、银色、玫瑰金、古铜色",
          "可定制手柄造型和雕刻图案",
          "多种尺寸和重量可选",
          "食品级材料和表面处理",
        ],
        customizationOptions: [
          { label: "颜色 / 表面", detail: "金色、银色、玫瑰金、古铜色、哑光、亮光" },
          { label: "尺寸", detail: "可定制勺柄长度和整体尺寸" },
          { label: "表面工艺", detail: "抛光、电镀、涂层、激光雕刻" },
          { label: "Logo", detail: "手柄定制 logo 雕刻或压印" },
          { label: "样品", detail: "支持样品定制和产前样品确认" },
        ],
      },
    },
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productCategories.map((p) => p.slug);
}
