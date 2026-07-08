import type { Locale } from "@/lib/i18n";

// ============================================================
// Navigation
// ============================================================
export const navTranslations: Record<Locale, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    manufacturing: "Manufacturing",
    qualityControl: "Quality Control",
    contact: "Contact Us",
  },
  zh: {
    home: "网站首页",
    about: "关于我们",
    products: "产品中心",
    manufacturing: "生产能力",
    qualityControl: "质量控制",
    contact: "联系我们",
  },
};

// ============================================================
// Buttons
// ============================================================
export const buttonTranslations: Record<Locale, Record<string, string>> = {
  en: {
    viewProducts: "View Products",
    viewDetails: "View Details",
    contactUs: "Contact Us",
    sendInquiry: "Send Inquiry",
    learnMore: "Learn More",
    submit: "Submit",
    backToProducts: "Back to Products",
    allProducts: "All Products →",
  },
  zh: {
    viewProducts: "查看产品",
    viewDetails: "查看详情",
    contactUs: "联系我们",
    sendInquiry: "发送询盘",
    learnMore: "了解更多",
    submit: "提交",
    backToProducts: "返回产品中心",
    allProducts: "全部产品 →",
  },
};

// ============================================================
// Page titles & section labels
// ============================================================
export const pageTranslations: Record<Locale, Record<string, string>> = {
  en: {
    products: "Products",
    about: "About Us",
    manufacturing: "Manufacturing Capacity",
    qualityControl: "Quality Control",
    contact: "Contact Us",
    applications: "Applications",
    features: "Features",
    customization: "Customization Options",
    productOverview: "Product Overview",
    productGallery: "Product Gallery",
    customizationOptions: "Customization Options",
    inquireAbout: "Inquire About This Product",
    allProducts: "All Products →",
    productCategories: "Product Categories",
    cantFind: "Can't Find What You Need?",
    cantFindDesc: "We also manufacture custom hardware according to your designs. Contact us with your specifications.",
    requestCustom: "Request Custom Quote",
    ourLocation: "Our Location",
  },
  zh: {
    products: "产品中心",
    about: "关于我们",
    manufacturing: "生产能力",
    qualityControl: "质量控制",
    contact: "联系我们",
    applications: "应用场景",
    features: "产品特点",
    customization: "定制选项",
    productOverview: "产品概述",
    productGallery: "产品展示",
    customizationOptions: "定制选项",
    inquireAbout: "询盘咨询",
    allProducts: "全部产品 →",
    productCategories: "产品分类",
    cantFind: "没找到您需要的产品？",
    cantFindDesc: "我们也可根据您的设计要求定制各类五金配件，欢迎联系我们沟通需求。",
    requestCustom: "定制询盘",
    ourLocation: "公司位置",
  },
};

// ============================================================
// Homepage hero
// ============================================================
export const heroTranslations: Record<Locale, { badge: string; title: string; subtitle: string }> = {
  en: {
    badge: "Hardware Decorative Buckle & Clothing Button Manufacturer",
    title: "Custom Hardware Buckles & Clothing Accessories Manufacturer",
    subtitle:
      "Yongjia Jinbolli Hardware Co., Ltd. specializes in hardware decorative buckles, clothing buttons, shoe buckles, bag hardware, brooches and customized metal accessories for fashion, bags, garments and accessories.",
  },
  zh: {
    badge: "五金装饰扣与服装辅料制造商",
    title: "专业五金装饰扣与服装辅料制造商",
    subtitle:
      "永嘉金博利五金有限公司专注于五金装饰扣、服装纽扣、鞋扣、箱包五金、胸针、咖啡勺及各类定制金属辅料的生产与开发。",
  },
};

// ============================================================
// Homepage sections
// ============================================================
export const homeTranslations: Record<Locale, Record<string, string>> = {
  en: {
    aboutTitle: "About Jinbolli Hardware",
    aboutSubtitle: "A professional hardware decorative buckle and clothing button manufacturer based in Wenzhou, Zhejiang, China.",
    aboutLearnMore: "Learn more about us →",
    ourProducts: "Our Products",
    ourProductsSubtitle: "Browse our complete range of metal hardware accessories for fashion, bags, garments, and footwear.",
    viewAllProducts: "View All Products",
    whyChooseUs: "Why Choose Us",
    whyChooseUsSubtitle: "Six reasons to partner with Jinbolli Hardware for your custom metal accessories.",
    manufacturingTitle: "Manufacturing Capability",
    manufacturingSubtitle: "From raw materials to finished products — our complete production workflow.",
    manufacturingDetails: "View manufacturing details →",
    qualityTitle: "Quality Control",
    qualitySubtitle: "100% inspection with visual and functional checks on every product.",
    qualityDetails: "View quality control details →",
    customTitle: "Customization & R&D",
    customSubtitle: "From concept to finished product — we help bring your designs to life.",
    customNote: "Sample-based customization supported. One-on-one engineering consultation available.",
    ctaTitle: "Looking for Custom Hardware Solutions?",
    ctaDesc: "Contact us today to discuss your requirements. We provide OEM/ODM services with flexible MOQ and multiple trade terms.",
    ctaButton: "Send Inquiry",
  },
  zh: {
    aboutTitle: "关于金博利五金",
    aboutSubtitle: "位于浙江温州的专业五金装饰扣与服装辅料制造商。",
    aboutLearnMore: "了解更多 →",
    ourProducts: "产品中心",
    ourProductsSubtitle: "浏览我们的全系列金属五金辅料产品，适用于服装、箱包、鞋类等领域。",
    viewAllProducts: "查看全部产品",
    whyChooseUs: "为什么选择我们",
    whyChooseUsSubtitle: "选择金博利五金作为您金属辅料供应商的六大理由。",
    manufacturingTitle: "生产能力",
    manufacturingSubtitle: "从原材料到成品——我们的一站式生产流程。",
    manufacturingDetails: "查看生产详情 →",
    qualityTitle: "质量控制",
    qualitySubtitle: "每件产品出厂前均经过目视和功能全面检验。",
    qualityDetails: "查看质控详情 →",
    customTitle: "定制与研发",
    customSubtitle: "从概念到成品——我们帮您实现设计创意。",
    customNote: "支持来样定制，提供一对一工程技术咨询。",
    ctaTitle: "寻求定制五金解决方案？",
    ctaDesc: "立即联系我们讨论您的需求。我们提供 OEM/ODM 服务，灵活的起订量和多种贸易条款。",
    ctaButton: "发送询盘",
  },
};

// ============================================================
// Homepage highlights
// ============================================================
export const homepageHighlights: Record<Locale, { icon: string; title: string; description: string }[]> = {
  en: [
    {
      icon: "🏭",
      title: "Custom Hardware Manufacturer",
      description: "Specialized in metal buckles, buttons, and decorative accessories for fashion, bags, and garments.",
    },
    {
      icon: "⚙️",
      title: "Complete Production Workflow",
      description: "Die casting, drilling, machining, and packaging — all under one roof with 3 production lines.",
    },
    {
      icon: "✅",
      title: "100% Quality Inspection",
      description: "Every product undergoes visual and functional inspection before shipment with traceability records.",
    },
    {
      icon: "🎨",
      title: "OEM / ODM Service",
      description: "Custom design, private mold, and sample-based development supported for your exclusive products.",
    },
    {
      icon: "🚢",
      title: "Flexible Trade Terms",
      description: "Multiple quotation terms: FOB, CIF, CFR, EXW. Payment by L/C or T/T. MOQ from 600 pcs.",
    },
    {
      icon: "📐",
      title: "Professional R&D Support",
      description: "Auto CAD and 3D design services. One-on-one engineering support from concept to finished product.",
    },
  ],
  zh: [
    {
      icon: "🏭",
      title: "专业五金制造商",
      description: "专注于服装、箱包、鞋类等领域使用的金属纽扣、装饰扣及各类辅料配件。",
    },
    {
      icon: "⚙️",
      title: "完整生产流程",
      description: "压铸、钻孔、机加工、包装一体化，拥有3条生产线，200平方米厂房。",
    },
    {
      icon: "✅",
      title: "100%质量检验",
      description: "每件产品出厂前均经过目视和功能检验，具备完整的可追溯记录。",
    },
    {
      icon: "🎨",
      title: "OEM / ODM 服务",
      description: "支持定制设计、私有模具开发和来样定制，为您打造专属产品。",
    },
    {
      icon: "🚢",
      title: "灵活贸易条款",
      description: "报价条款：FOB、CIF、CFR、EXW。支付方式：L/C 或 T/T。起订量 600 件起。",
    },
    {
      icon: "📐",
      title: "专业研发支持",
      description: "提供 Auto CAD 和 3D 设计服务，一对一工程支持，从概念到成品全程服务。",
    },
  ],
};

// ============================================================
// Homepage stats bar
// ============================================================
export const statsTranslations: Record<Locale, { label: string; value: string }[]> = {
  en: [
    { label: "Production Lines", value: "3" },
    { label: "MOQ", value: "600 pcs" },
    { label: "QC Staff", value: "2" },
    { label: "Lead Time", value: "1 Month" },
  ],
  zh: [
    { label: "生产线", value: "3" },
    { label: "起订量", value: "600 件" },
    { label: "质检人员", value: "2" },
    { label: "交货周期", value: "1 个月" },
  ],
};

// ============================================================
// Homepage customization section
// ============================================================
export const customItemsTranslations: Record<Locale, { icon: string; title: string; desc: string }[]> = {
  en: [
    { icon: "🔧", title: "Private Mold", desc: "Custom mold development for exclusive products" },
    { icon: "📐", title: "3D Design", desc: "Auto CAD and 3D software design services" },
    { icon: "🎨", title: "ODM Service", desc: "Original design manufacturing for your brand" },
    { icon: "🏷️", title: "OEM Service", desc: "OEM for popular brands with your specifications" },
  ],
  zh: [
    { icon: "🔧", title: "私有模具", desc: "为您开发专属产品模具" },
    { icon: "📐", title: "3D 设计", desc: "Auto CAD 和 3D 软件设计服务" },
    { icon: "🎨", title: "ODM 服务", desc: "为您的品牌提供原创设计制造" },
    { icon: "🏷️", title: "OEM 服务", desc: "按照您的规格为知名品牌代工" },
  ],
};

// ============================================================
// Contact form
// ============================================================
export const contactFormTranslations: Record<Locale, Record<string, string>> = {
  en: {
    name: "Name",
    email: "Email",
    phone: "WhatsApp / Phone",
    company: "Company",
    productCategory: "Product Category",
    message: "Message",
    submit: "Send Inquiry",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+86 123 4567 8901",
    companyPlaceholder: "Your company name",
    selectCategory: "Select a category",
    otherCategory: "Other / Custom",
    messagePlaceholder: "Tell us about your requirements, quantity, specifications...",
    success: "Thank You for Your Inquiry",
    successMessage: "We will contact you soon.",
    sendAnother: "Send another inquiry",
    nameRequired: "Your full name",
    emailRequired: "your@email.com",
    messageRequired: "Tell us about your requirements...",
  },
  zh: {
    name: "姓名",
    email: "邮箱",
    phone: "WhatsApp / 电话",
    company: "公司名称",
    productCategory: "产品分类",
    message: "留言内容",
    submit: "提交询盘",
    namePlaceholder: "请输入您的姓名",
    emailPlaceholder: "请输入您的邮箱",
    phonePlaceholder: "请输入您的电话",
    companyPlaceholder: "请输入您的公司名称",
    selectCategory: "请选择产品分类",
    otherCategory: "其他 / 定制",
    messagePlaceholder: "请描述您的需求、数量、规格等...",
    success: "感谢您的询盘",
    successMessage: "我们会尽快与您联系。",
    sendAnother: "发送新的询盘",
    nameRequired: "请输入您的姓名",
    emailRequired: "请输入您的邮箱",
    messageRequired: "请描述您的需求...",
  },
};

// ============================================================
// Product navigation names
// ============================================================
export const productNavTranslations: Record<Locale, { name: string; slug: string }[]> = {
  en: [
    { name: "Button", slug: "button" },
    { name: "Shoe Buckle", slug: "shoe-buckle" },
    { name: "Swimsuit Connecting Buckle", slug: "swimsuit-connecting-buckle" },
    { name: "Bag Hardware", slug: "bag-hardware" },
    { name: "Waist-Reducing Belt Buckle", slug: "waist-reducing-belt-buckle" },
    { name: "Hardware Brooch", slug: "hardware-brooch" },
    { name: "Hardware Clothing Fastener", slug: "hardware-clothing-fastener" },
    { name: "Cufflinks", slug: "cufflinks" },
    { name: "Choker & Necklace", slug: "necklace" },
    { name: "Coffee Spoons", slug: "coffee-spoons" },
  ],
  zh: [
    { name: "纽扣", slug: "button" },
    { name: "鞋扣", slug: "shoe-buckle" },
    { name: "泳装连接扣", slug: "swimsuit-connecting-buckle" },
    { name: "箱包五金", slug: "bag-hardware" },
    { name: "收腰带扣", slug: "waist-reducing-belt-buckle" },
    { name: "五金胸针", slug: "hardware-brooch" },
    { name: "服装五金扣件", slug: "hardware-clothing-fastener" },
    { name: "袖扣", slug: "cufflinks" },
    { name: "项圈配件", slug: "necklace" },
    { name: "咖啡勺", slug: "coffee-spoons" },
  ],
};

// ============================================================
// Footer
// ============================================================
export const footerTranslations: Record<Locale, Record<string, string>> = {
  en: {
    products: "Products",
    quickLinks: "Quick Links",
    tradeInfo: "Trade Information",
    moq: "MOQ",
    port: "Port",
    terms: "Terms",
    payment: "Payment",
    leadTime: "Lead Time",
    madeInChina: "Made-in-China Showroom",
    copyright: "All rights reserved.",
  },
  zh: {
    products: "产品分类",
    quickLinks: "快速链接",
    tradeInfo: "贸易信息",
    moq: "起订量",
    port: "最近港口",
    terms: "报价条款",
    payment: "支付方式",
    leadTime: "交货周期",
    madeInChina: "Made-in-China 展厅",
    copyright: "保留所有权利。",
  },
};

// ============================================================
// Quality control page
// ============================================================
export const qcTranslations: Record<Locale, Record<string, string>> = {
  en: {
    title: "Quality Control",
    subtitle: "Every product is inspected before it leaves our factory. We are committed to consistent quality and reliable delivery.",
    inspectionTitle: "Inspection Process",
    inspectionSubtitle: "Three levels of inspection ensure every product meets our quality standards.",
    systemTitle: "Quality Assurance System",
    systemSubtitle: "Our quality management covers the entire production cycle — from incoming materials to final shipment.",
    rawMaterial: "Raw Material Control",
    inProcess: "In-Process Control",
    nonConforming: "Non-Conforming Product Handling",
    warehouse: "Warehouse & Shipping Control",
  },
  zh: {
    title: "质量控制",
    subtitle: "每件产品在出厂前都经过严格检验。我们致力于稳定的产品质量和可靠的交货服务。",
    inspectionTitle: "检验流程",
    inspectionSubtitle: "三级检验体系确保每件产品都达到我们的质量标准。",
    systemTitle: "质量保证体系",
    systemSubtitle: "质量管理覆盖整个生产周期——从来料检验到最终出货。",
    rawMaterial: "原材料控制",
    inProcess: "过程控制",
    nonConforming: "不合格品处理",
    warehouse: "仓储与出货控制",
  },
};

// ============================================================
// Manufacturing page
// ============================================================
export const mfgTranslations: Record<Locale, Record<string, string>> = {
  en: {
    title: "Manufacturing Capability",
    subtitle: "Complete production workflow from raw materials to finished products under one roof.",
    workflowTitle: "Production Workflow",
    workflowSubtitle: "Our 4-step manufacturing process ensures consistent quality at every stage.",
    serviceTitle: "Service Capability",
    serviceSubtitle: "Flexible trade terms and production options to meet your business needs.",
    productionCapacity: "Production Capacity",
    orderTrade: "Order & Trade",
    customServices: "Custom Services",
    leadTimeTitle: "Lead Time",
  },
  zh: {
    title: "生产能力",
    subtitle: "从原材料到成品的一站式生产流程。",
    workflowTitle: "生产流程",
    workflowSubtitle: "四步制造工艺确保每个环节的品质稳定。",
    serviceTitle: "服务能力",
    serviceSubtitle: "灵活的贸易条款和生产选项，满足您的业务需求。",
    productionCapacity: "生产能力",
    orderTrade: "订单与贸易",
    customServices: "定制服务",
    leadTimeTitle: "交货周期",
  },
};

// ============================================================
// About page
// ============================================================
export const aboutTranslations: Record<Locale, Record<string, string>> = {
  en: {
    title: "About Us",
    profileTitle: "Company Profile",
    infoTitle: "Company Information",
    rdTitle: "R&D & Customization",
    rdSubtitle: "Professional engineering support from concept to finished product.",
    engineeringTeam: "Engineering Team",
    designSoftware: "Design Software",
    capabilities: "Capabilities",
  },
  zh: {
    title: "关于我们",
    profileTitle: "公司简介",
    infoTitle: "公司信息",
    rdTitle: "研发与定制",
    rdSubtitle: "从概念到成品的专业工程技术支持。",
    engineeringTeam: "工程团队",
    designSoftware: "设计软件",
    capabilities: "定制能力",
  },
};

// ============================================================
// Contact page
// ============================================================
export const contactPageTranslations: Record<Locale, Record<string, string>> = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with us for product inquiries, custom orders, or partnership opportunities.",
    getInTouch: "Get in Touch",
    contactPerson: "Contact Person",
    phone: "Phone",
    email: "Email",
    address: "Address",
    madeInChina: "Made-in-China Showroom",
    visitShowroom: "Visit our showroom →",
    sendInquiry: "Send an Inquiry",
    inquirySubtitle: "Fill out the form below and we will respond as soon as possible.",
    ourLocation: "Our Location",
  },
  zh: {
    title: "联系我们",
    subtitle: "如需产品咨询、定制订单或合作洽谈，欢迎与我们联系。",
    getInTouch: "联系方式",
    contactPerson: "联系人",
    phone: "电话",
    email: "邮箱",
    address: "地址",
    madeInChina: "Made-in-China 展厅",
    visitShowroom: "访问我们的展厅 →",
    sendInquiry: "发送询盘",
    inquirySubtitle: "填写以下表单，我们会尽快回复您。",
    ourLocation: "公司位置",
  },
};

// ============================================================
// Product detail page
// ============================================================
export const productDetailTranslations: Record<Locale, Record<string, string>> = {
  en: {
    productImage: "Product Image",
    replaceHint: "Replace with actual product photo",
    photo: "Photo",
    inquireAbout: "Inquire About This Product",
    backToAllProducts: "Back to All Products",
  },
  zh: {
    productImage: "产品图片",
    replaceHint: "可替换为实际产品照片",
    photo: "图片",
    inquireAbout: "询盘咨询",
    backToAllProducts: "返回产品中心",
  },
};

// ============================================================
// Product overview page
// ============================================================
export const productsOverviewTranslations: Record<Locale, Record<string, string>> = {
  en: {
    title: "Our Products",
    subtitle: "Explore our complete range of metal hardware accessories. Each category can be customized to your specifications — from finish and size to logo and packaging.",
    sectionTitle: "Product Categories",
    sectionSubtitle: "Click on any category to learn more about specifications, customization options, and to send an inquiry.",
  },
  zh: {
    title: "产品中心",
    subtitle: "浏览我们的全系列金属五金辅料产品。每个分类均可根据您的规格进行定制——从表面处理和尺寸到 logo 和包装。",
    sectionTitle: "产品分类",
    sectionSubtitle: "点击任意分类可查看详细规格、定制选项并发送询盘。",
  },
};

// ============================================================
// Breadcrumb
// ============================================================
export const breadcrumbTranslations: Record<Locale, Record<string, string>> = {
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    manufacturing: "Manufacturing",
    qualityControl: "Quality Control",
    contact: "Contact",
  },
  zh: {
    home: "网站首页",
    products: "产品中心",
    about: "关于我们",
    manufacturing: "生产能力",
    qualityControl: "质量控制",
    contact: "联系我们",
  },
};

// ============================================================
// Product category card
// ============================================================
export const productCardTranslations: Record<Locale, Record<string, string>> = {
  en: {
    learnMore: "Learn more",
  },
  zh: {
    learnMore: "了解更多",
  },
};

// ============================================================
// Helper: get translation function
// ============================================================
export function t(locale: Locale, key: string, dictionary: Record<Locale, Record<string, string>>): string {
  return dictionary[locale]?.[key] ?? dictionary["en"]?.[key] ?? key;
}
