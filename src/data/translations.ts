import type { Locale } from "@/lib/i18n";

// Fallback to English for untranslated locales
function fb<T>(dict: Record<string, T>, locale: string): T {
  return dict[locale] ?? dict["en"];
}

// ============================================================
// Navigation
// ============================================================
export const navTranslations: Record<string, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    manufacturing: "Manufacturing",
    qualityControl: "Quality Control",
    contact: "Contact Us",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    products: "Продукция",
    manufacturing: "Производство",
    qualityControl: "Контроль качества",
    contact: "Контакты",
  },
  pt: {
    home: "Início",
    about: "Sobre Nós",
    products: "Produtos",
    manufacturing: "Fabricação",
    qualityControl: "Controle de Qualidade",
    contact: "Contato",
  },
  es: {
    home: "Inicio",
    about: "Nosotros",
    products: "Productos",
    manufacturing: "Fabricación",
    qualityControl: "Control de Calidad",
    contact: "Contacto",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    products: "المنتجات",
    manufacturing: "التصنيع",
    qualityControl: "مراقبة الجودة",
    contact: "اتصل بنا",
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
export const buttonTranslations: Record<string, Record<string, string>> = {
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
  ru: {
    viewProducts: "Продукция",
    viewDetails: "Подробнее",
    contactUs: "Связаться",
    sendInquiry: "Запрос",
    learnMore: "Узнать больше",
    submit: "Отправить",
    backToProducts: "Назад к продукции",
    allProducts: "Вся продукция →",
  },
  pt: {
    viewProducts: "Ver Produtos",
    viewDetails: "Ver Detalhes",
    contactUs: "Fale Conosco",
    sendInquiry: "Enviar Consulta",
    learnMore: "Saiba Mais",
    submit: "Enviar",
    backToProducts: "Voltar aos Produtos",
    allProducts: "Todos os Produtos →",
  },
  es: {
    viewProducts: "Productos",
    viewDetails: "Detalles",
    contactUs: "Contacto",
    sendInquiry: "Consultar",
    learnMore: "Más Información",
    submit: "Enviar",
    backToProducts: "Volver a Productos",
    allProducts: "Todos los Productos →",
  },
  ar: {
    viewProducts: "المنتجات",
    viewDetails: "تفاصيل",
    contactUs: "اتصل بنا",
    sendInquiry: "استفسار",
    learnMore: "المزيد",
    submit: "إرسال",
    backToProducts: "رجوع",
    allProducts: "الكل ←",
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
export const pageTranslations: Record<string, Record<string, string>> = {
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
  ru: {
    products: "Продукция",
    about: "О нас",
    manufacturing: "Производство",
    qualityControl: "Контроль качества",
    contact: "Контакты",
    applications: "Применение",
    features: "Особенности",
    customization: "Индивидуализация",
    productOverview: "Обзор продукта",
    productGallery: "Галерея",
    customizationOptions: "Опции индивидуализации",
    inquireAbout: "Запрос о продукте",
    allProducts: "Вся продукция →",
    productCategories: "Категории",
    cantFind: "Не нашли что искали?",
    cantFindDesc: "Мы также изготавливаем фурнитуру по вашим дизайнам.",
    requestCustom: "Запросить расчёт",
    ourLocation: "Наше местоположение",
  },
  pt: {
    products: "Produtos",
    about: "Sobre Nós",
    manufacturing: "Fabricação",
    qualityControl: "Controle de Qualidade",
    contact: "Contato",
    applications: "Aplicações",
    features: "Características",
    customization: "Personalização",
    productOverview: "Visão Geral",
    productGallery: "Galeria",
    customizationOptions: "Opções de Personalização",
    inquireAbout: "Consultar Produto",
    allProducts: "Todos os Produtos →",
    productCategories: "Categorias",
    cantFind: "Não encontrou?",
    cantFindDesc: "Fabricamos ferragens conforme seu design.",
    requestCustom: "Solicitar Orçamento",
    ourLocation: "Nossa Localização",
  },
  es: {
    products: "Productos",
    about: "Nosotros",
    manufacturing: "Fabricación",
    qualityControl: "Control de Calidad",
    contact: "Contacto",
    applications: "Aplicaciones",
    features: "Características",
    customization: "Personalización",
    productOverview: "Resumen",
    productGallery: "Galería",
    customizationOptions: "Opciones de Personalización",
    inquireAbout: "Consultar Producto",
    allProducts: "Todos los Productos →",
    productCategories: "Categorías",
    cantFind: "¿No encontró lo que busca?",
    cantFindDesc: "Fabricamos herrajes según su diseño.",
    requestCustom: "Solicitar Cotización",
    ourLocation: "Nuestra Ubicación",
  },
  ar: {
    products: "المنتجات",
    about: "من نحن",
    manufacturing: "التصنيع",
    qualityControl: "مراقبة الجودة",
    contact: "اتصل بنا",
    applications: "التطبيقات",
    features: "المميزات",
    customization: "التخصيص",
    productOverview: "نظرة عامة",
    productGallery: "معرض الصور",
    customizationOptions: "خيارات التخصيص",
    inquireAbout: "استفسار عن المنتج",
    allProducts: "الكل ←",
    productCategories: "الفئات",
    cantFind: "لم تجد ما تبحث عنه؟",
    cantFindDesc: "نصنع قطعًا معدنية حسب تصميمك.",
    requestCustom: "طلب عرض سعر",
    ourLocation: "موقعنا",
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
export const heroTranslations: Record<string, { badge: string; title: string; subtitle: string }> = {
  en: {
    badge: "Hardware Decorative Buckle & Clothing Button Manufacturer",
    title: "Custom Hardware Buckles & Clothing Accessories Manufacturer",
    subtitle:
      "Yongjia Jinbolli Hardware Co., Ltd. specializes in hardware decorative buckles, clothing buttons, shoe buckles, bag hardware, brooches and customized metal accessories for fashion, bags, garments and accessories.",
  },
  ru: {
    badge: "Производитель металлических пряжек и фурнитуры",
    title: "Производитель металлических пряжек и фурнитуры для одежды на заказ",
    subtitle: "Yongjia Jinbolli Hardware Co., Ltd. специализируется на металлических декоративных пряжках, пуговицах, обувных пряжках, фурнитуре для сумок, брошах и аксессуарах для моды, сумок и одежды.",
  },
  pt: {
    badge: "Fabricante de Fivelas Metálicas e Acessórios",
    title: "Fabricante de Fivelas Metálicas e Acessórios para Vestuário",
    subtitle: "A Yongjia Jinbolli Hardware Co., Ltd. é especializada em fivelas metálicas decorativas, botões, fivelas para calçados, ferragens para bolsas, broches e acessórios metálicos personalizados.",
  },
  es: {
    badge: "Fabricante de Hebillas Metálicas y Accesorios",
    title: "Fabricante de Hebillas Metálicas y Accesorios para Ropa",
    subtitle: "Yongjia Jinbolli Hardware Co., Ltd. se especializa en hebillas metálicas decorativas, botones, hebillas para calzado, herrajes para bolsos, broches y accesorios metálicos personalizados.",
  },
  ar: {
    badge: "مصنع أبازيم معدنية وإكسسوارات",
    title: "مصنع أبازيم معدنية وإكسسوارات ملابس مخصصة",
    subtitle: "شركة Yongjia Jinbolli Hardware Co., Ltd. متخصصة في الأبازيم المعدنية المزخرفة، الأزرار، أبازيم الأحذية، إكسسوارات الحقائب، الدبابيس والإكسسوارات المعدنية المخصصة.",
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
export const homeTranslations: Record<string, Record<string, string>> = {
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
  ru: {
    aboutTitle: "О Jinbolli Hardware",
    aboutSubtitle: "Профессиональный производитель фурнитуры в Вэньчжоу, Чжэцзян, Китай.",
    aboutLearnMore: "Узнать больше →",
    ourProducts: "Наша продукция",
    ourProductsSubtitle: "Полный ассортимент металлической фурнитуры для моды, сумок и обуви.",
    viewAllProducts: "Вся продукция",
    whyChooseUs: "Почему выбирают нас",
    whyChooseUsSubtitle: "Шесть причин выбрать Jinbolli Hardware.",
    manufacturingTitle: "Производственные возможности",
    manufacturingSubtitle: "От сырья до готовой продукции — полный цикл.",
    manufacturingDetails: "Подробнее →",
    qualityTitle: "Контроль качества",
    qualitySubtitle: "100% проверка каждой единицы продукции.",
    qualityDetails: "Подробнее →",
    customTitle: "Индивидуализация и разработка",
    customSubtitle: "От концепции до продукта — мы воплощаем ваши идеи.",
    customNote: "Индивидуальное изготовление по образцам. Инженерные консультации.",
    ctaTitle: "Нужны решения по фурнитуре?",
    ctaDesc: "Свяжитесь с нами для обсуждения требований. OEM/ODM, гибкий MOQ.",
    ctaButton: "Отправить запрос",
  },
  pt: {
    aboutTitle: "Sobre a Jinbolli Hardware",
    aboutSubtitle: "Fabricante profissional de ferragens em Wenzhou, Zhejiang, China.",
    aboutLearnMore: "Saiba mais →",
    ourProducts: "Nossos Produtos",
    ourProductsSubtitle: "Linha completa de acessórios metálicos para moda, bolsas e calçados.",
    viewAllProducts: "Ver Todos",
    whyChooseUs: "Por Que Nos Escolher",
    whyChooseUsSubtitle: "Seis razões para escolher a Jinbolli Hardware.",
    manufacturingTitle: "Capacidade de Fabricação",
    manufacturingSubtitle: "Da matéria-prima ao produto acabado.",
    manufacturingDetails: "Detalhes →",
    qualityTitle: "Controle de Qualidade",
    qualitySubtitle: "Inspeção 100% visual e funcional.",
    qualityDetails: "Detalhes →",
    customTitle: "Personalização e P&D",
    customSubtitle: "Do conceito ao produto — realizamos suas ideias.",
    customNote: "Personalização por amostra. Consultoria de engenharia.",
    ctaTitle: "Precisa de soluções em ferragens?",
    ctaDesc: "Entre em contato para discutir suas necessidades. OEM/ODM, MOQ flexível.",
    ctaButton: "Enviar Consulta",
  },
  es: {
    aboutTitle: "Sobre Jinbolli Hardware",
    aboutSubtitle: "Fabricante profesional de herrajes en Wenzhou, Zhejiang, China.",
    aboutLearnMore: "Más información →",
    ourProducts: "Nuestros Productos",
    ourProductsSubtitle: "Gama completa de accesorios metálicos para moda, bolsos y calzado.",
    viewAllProducts: "Ver Todos",
    whyChooseUs: "Por Qué Elegirnos",
    whyChooseUsSubtitle: "Seis razones para elegir Jinbolli Hardware.",
    manufacturingTitle: "Capacidad de Fabricación",
    manufacturingSubtitle: "De materia prima a producto terminado.",
    manufacturingDetails: "Detalles →",
    qualityTitle: "Control de Calidad",
    qualitySubtitle: "Inspección 100% visual y funcional.",
    qualityDetails: "Detalles →",
    customTitle: "Personalización e I+D",
    customSubtitle: "Del concepto al producto — hacemos realidad sus ideas.",
    customNote: "Personalización por muestras. Consultoría de ingeniería.",
    ctaTitle: "¿Necesita soluciones en herrajes?",
    ctaDesc: "Contáctenos para discutir sus requisitos. OEM/ODM, MOQ flexible.",
    ctaButton: "Enviar Consulta",
  },
  ar: {
    aboutTitle: "عن Jinbolli Hardware",
    aboutSubtitle: "مصنع محترف للإكسسوارات المعدنية في ونتشو، تشجيانغ، الصين.",
    aboutLearnMore: "معرفة المزيد ←",
    ourProducts: "منتجاتنا",
    ourProductsSubtitle: "مجموعة كاملة من الإكسسوارات المعدنية للأزياء والحقائب والأحذية.",
    viewAllProducts: "عرض الكل",
    whyChooseUs: "لماذا تختارنا",
    whyChooseUsSubtitle: "ستة أسباب لاختيار Jinbolli Hardware.",
    manufacturingTitle: "قدرة التصنيع",
    manufacturingSubtitle: "من المواد الخام إلى المنتج النهائي.",
    manufacturingDetails: "التفاصيل ←",
    qualityTitle: "مراقبة الجودة",
    qualitySubtitle: "فحص بصري ووظيفي 100%.",
    qualityDetails: "التفاصيل ←",
    customTitle: "التخصيص والبحث والتطوير",
    customSubtitle: "من الفكرة إلى المنتج — نحقق تصاميمك.",
    customNote: "تخصيص حسب العينات. استشارات هندسية.",
    ctaTitle: "هل تبحث عن حلول معدنية مخصصة؟",
    ctaDesc: "اتصل بنا لمناقشة متطلباتك. OEM/ODM، حد أدنى مرن للطلب.",
    ctaButton: "إرسال استفسار",
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
export const homepageHighlights: Record<string, { icon: string; title: string; description: string }[]> = {
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
  ru: [
    { icon: "🏭", title: "Производитель на заказ", description: "Специализируемся на металлических пряжках, пуговицах и аксессуарах." },
    { icon: "⚙️", title: "Полный цикл производства", description: "Литьё, сверление, обработка и упаковка." },
    { icon: "✅", title: "100% контроль качества", description: "Визуальная и функциональная проверка каждого изделия." },
    { icon: "🎨", title: "OEM / ODM сервис", description: "Индивидуальный дизайн, пресс-формы и образцы." },
    { icon: "🚢", title: "Гибкие условия торговли", description: "FOB, CIF, CFR, EXW. L/C или T/T. MOQ от 600 шт." },
    { icon: "📐", title: "Поддержка R&D", description: "Auto CAD и 3D проектирование." },
  ],
  pt: [
    { icon: "🏭", title: "Fabricante Personalizado", description: "Especializado em fivelas, botões e acessórios metálicos." },
    { icon: "⚙️", title: "Produção Completa", description: "Fundição, perfuração, usinagem e embalagem." },
    { icon: "✅", title: "Inspeção 100%", description: "Verificação visual e funcional de cada peça." },
    { icon: "🎨", title: "Serviço OEM/ODM", description: "Design personalizado, moldes privados." },
    { icon: "🚢", title: "Termos Flexíveis", description: "FOB, CIF, CFR, EXW. L/C ou T/T. MOQ 600 pcs." },
    { icon: "📐", title: "Suporte P&D", description: "Auto CAD e design 3D." },
  ],
  es: [
    { icon: "🏭", title: "Fabricante Personalizado", description: "Especializado en hebillas, botones y accesorios metálicos." },
    { icon: "⚙️", title: "Producción Completa", description: "Fundición, taladrado, mecanizado y embalaje." },
    { icon: "✅", title: "Inspección 100%", description: "Verificación visual y funcional de cada pieza." },
    { icon: "🎨", title: "Servicio OEM/ODM", description: "Diseño personalizado, moldes privados." },
    { icon: "🚢", title: "Términos Flexibles", description: "FOB, CIF, CFR, EXW. L/C o T/T. MOQ 600 pcs." },
    { icon: "📐", title: "Soporte I+D", description: "Auto CAD y diseño 3D." },
  ],
  ar: [
    { icon: "🏭", title: "مصنع مخصص", description: "متخصصون في الأبازيم والأزرار والإكسسوارات المعدنية." },
    { icon: "⚙️", title: "إنتاج متكامل", description: "الصب، الحفر، التشغيل والتغليف." },
    { icon: "✅", title: "فحص 100%", description: "فحص بصري ووظيفي لكل قطعة." },
    { icon: "🎨", title: "خدمة OEM/ODM", description: "تصميم مخصص وقوالب خاصة." },
    { icon: "🚢", title: "شروط تجارية مرنة", description: "FOB, CIF, CFR, EXW. L/C أو T/T. 600 قطعة كحد أدنى." },
    { icon: "📐", title: "دعم البحث والتطوير", description: "Auto CAD وتصميم ثلاثي الأبعاد." },
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
      description: "压铸、钻孔、机加工、包装一体化，拥有5条生产线，200平方米厂房。",
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
export const statsTranslations: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: "Production Lines", value: "5" },
    { label: "MOQ", value: "600 pcs" },
    { label: "QC Staff", value: "5" },
    { label: "Lead Time", value: "1 Month" },
  ],
  ru: [
    { label: "Производственные линии", value: "5" },
    { label: "MOQ", value: "600 шт" },
    { label: "Контроль качества", value: "5" },
    { label: "Срок поставки", value: "1 месяц" },
  ],
  pt: [
    { label: "Linhas de Produção", value: "5" },
    { label: "MOQ", value: "600 pcs" },
    { label: "Equipe CQ", value: "5" },
    { label: "Prazo", value: "1 mês" },
  ],
  es: [
    { label: "Líneas de Producción", value: "5" },
    { label: "MOQ", value: "600 pcs" },
    { label: "Personal CC", value: "5" },
    { label: "Plazo", value: "1 mes" },
  ],
  ar: [
    { label: "خطوط الإنتاج", value: "5" },
    { label: "الحد الأدنى للطلب", value: "600 قطعة" },
    { label: "فريق الجودة", value: "5" },
    { label: "مدة التسليم", value: "شهر واحد" },
  ],
  zh: [
    { label: "生产线", value: "5" },
    { label: "起订量", value: "600 件" },
    { label: "质检人员", value: "5" },
    { label: "交货周期", value: "1 个月" },
  ],
};

// ============================================================
// Homepage customization section
// ============================================================
export const customItemsTranslations: Record<string, { icon: string; title: string; desc: string }[]> = {
  en: [
    { icon: "🔧", title: "Private Mold", desc: "Custom mold development for exclusive products" },
    { icon: "📐", title: "3D Design", desc: "Auto CAD and 3D software design services" },
    { icon: "🎨", title: "ODM Service", desc: "Original design manufacturing for your brand" },
    { icon: "🏷️", title: "OEM Service", desc: "OEM for popular brands with your specifications" },
  ],
  ru: [
    { icon: "🔧", title: "Пресс-форма", desc: "Разработка индивидуальных пресс-форм" },
    { icon: "📐", title: "3D дизайн", desc: "Auto CAD и 3D проектирование" },
    { icon: "🎨", title: "ODM сервис", desc: "Производство по вашему дизайну" },
    { icon: "🏷️", title: "OEM сервис", desc: "OEM для популярных брендов" },
  ],
  pt: [
    { icon: "🔧", title: "Molde Privado", desc: "Desenvolvimento de moldes exclusivos" },
    { icon: "📐", title: "Design 3D", desc: "Auto CAD e software 3D" },
    { icon: "🎨", title: "Serviço ODM", desc: "Fabricação com seu design" },
    { icon: "🏷️", title: "Serviço OEM", desc: "OEM para marcas" },
  ],
  es: [
    { icon: "🔧", title: "Molde Privado", desc: "Desarrollo de moldes exclusivos" },
    { icon: "📐", title: "Diseño 3D", desc: "Auto CAD y software 3D" },
    { icon: "🎨", title: "Servicio ODM", desc: "Fabricación con su diseño" },
    { icon: "🏷️", title: "Servicio OEM", desc: "OEM para marcas" },
  ],
  ar: [
    { icon: "🔧", title: "قوالب خاصة", desc: "تطوير قوالب حصرية" },
    { icon: "📐", title: "تصميم 3D", desc: "Auto CAD وبرامج 3D" },
    { icon: "🎨", title: "خدمة ODM", desc: "تصنيع بتصميمك" },
    { icon: "🏷️", title: "خدمة OEM", desc: "OEM للعلامات التجارية" },
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
export const contactFormTranslations: Record<string, Record<string, string>> = {
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
  ru: {
    name: "Имя",
    email: "Email",
    phone: "WhatsApp / Телефон",
    company: "Компания",
    productCategory: "Категория продукции",
    message: "Сообщение",
    submit: "Отправить запрос",
    namePlaceholder: "Ваше полное имя",
    emailPlaceholder: "ваш@email.com",
    phonePlaceholder: "+86 123 4567 8901",
    companyPlaceholder: "Название компании",
    selectCategory: "Выберите категорию",
    otherCategory: "Другое / На заказ",
    messagePlaceholder: "Опишите ваши требования, количество, спецификации...",
    success: "Спасибо за запрос",
    successMessage: "Мы свяжемся с вами в ближайшее время.",
    sendAnother: "Отправить ещё запрос",
    nameRequired: "Введите ваше имя",
    emailRequired: "Введите ваш email",
    messageRequired: "Опишите требования...",
  },
  pt: {
    name: "Nome",
    email: "Email",
    phone: "WhatsApp / Telefone",
    company: "Empresa",
    productCategory: "Categoria do Produto",
    message: "Mensagem",
    submit: "Enviar Consulta",
    namePlaceholder: "Seu nome completo",
    emailPlaceholder: "seu@email.com",
    phonePlaceholder: "+55 11 91234-5678",
    companyPlaceholder: "Nome da empresa",
    selectCategory: "Selecione a categoria",
    otherCategory: "Outro / Personalizado",
    messagePlaceholder: "Descreva suas necessidades, quantidade, especificações...",
    success: "Obrigado pela consulta",
    successMessage: "Entraremos em contato em breve.",
    sendAnother: "Enviar outra consulta",
    nameRequired: "Digite seu nome",
    emailRequired: "Digite seu email",
    messageRequired: "Descreva suas necessidades...",
  },
  es: {
    name: "Nombre",
    email: "Correo electrónico",
    phone: "WhatsApp / Teléfono",
    company: "Empresa",
    productCategory: "Categoría del Producto",
    message: "Mensaje",
    submit: "Enviar Consulta",
    namePlaceholder: "Su nombre completo",
    emailPlaceholder: "su@email.com",
    phonePlaceholder: "+52 55 1234-5678",
    companyPlaceholder: "Nombre de la empresa",
    selectCategory: "Seleccionar categoría",
    otherCategory: "Otro / Personalizado",
    messagePlaceholder: "Describa sus necesidades, cantidad, especificaciones...",
    success: "Gracias por su consulta",
    successMessage: "Lo contactaremos pronto.",
    sendAnother: "Enviar otra consulta",
    nameRequired: "Ingrese su nombre",
    emailRequired: "Ingrese su email",
    messageRequired: "Describa sus necesidades...",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "واتساب / هاتف",
    company: "الشركة",
    productCategory: "فئة المنتج",
    message: "الرسالة",
    submit: "إرسال الاستفسار",
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "بريدك@example.com",
    phonePlaceholder: "+966 5X XXX XXXX",
    companyPlaceholder: "اسم الشركة",
    selectCategory: "اختر الفئة",
    otherCategory: "أخرى / مخصص",
    messagePlaceholder: "صف متطلباتك، الكمية، المواصفات...",
    success: "شكراً على استفسارك",
    successMessage: "سنتواصل معك قريباً.",
    sendAnother: "إرسال استفسار آخر",
    nameRequired: "أدخل الاسم",
    emailRequired: "أدخل البريد الإلكتروني",
    messageRequired: "صف متطلباتك...",
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
export const productNavTranslations: Record<string, { name: string; slug: string }[]> = {
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
  ru: [
    { name: "Пуговицы", slug: "button" },
    { name: "Обувные пряжки", slug: "shoe-buckle" },
    { name: "Застежки для купальников", slug: "swimsuit-connecting-buckle" },
    { name: "Фурнитура для сумок", slug: "bag-hardware" },
    { name: "Пряжки для ремней", slug: "waist-reducing-belt-buckle" },
    { name: "Металлические броши", slug: "hardware-brooch" },
    { name: "Застежки для одежды", slug: "hardware-clothing-fastener" },
    { name: "Запонки", slug: "cufflinks" },
    { name: "Фурнитура для колье", slug: "necklace" },
    { name: "Кофейные ложки", slug: "coffee-spoons" },
  ],
  pt: [
    { name: "Botões", slug: "button" },
    { name: "Fivelas para Calçados", slug: "shoe-buckle" },
    { name: "Fechos para Moda Praia", slug: "swimsuit-connecting-buckle" },
    { name: "Ferragens para Bolsas", slug: "bag-hardware" },
    { name: "Fivelas para Cintos", slug: "waist-reducing-belt-buckle" },
    { name: "Broches Metálicos", slug: "hardware-brooch" },
    { name: "Fechos para Roupas", slug: "hardware-clothing-fastener" },
    { name: "Abotoaduras", slug: "cufflinks" },
    { name: "Acessórios para Colares", slug: "necklace" },
    { name: "Colheres de Café", slug: "coffee-spoons" },
  ],
  es: [
    { name: "Botones", slug: "button" },
    { name: "Hebillas para Calzado", slug: "shoe-buckle" },
    { name: "Cierres para Trajes de Baño", slug: "swimsuit-connecting-buckle" },
    { name: "Herrajes para Bolsos", slug: "bag-hardware" },
    { name: "Hebillas para Cinturones", slug: "waist-reducing-belt-buckle" },
    { name: "Broches Metálicos", slug: "hardware-brooch" },
    { name: "Cierres para Ropa", slug: "hardware-clothing-fastener" },
    { name: "Gemelos", slug: "cufflinks" },
    { name: "Accesorios para Collares", slug: "necklace" },
    { name: "Cucharas de Café", slug: "coffee-spoons" },
  ],
  ar: [
    { name: "أزرار", slug: "button" },
    { name: "أبازيم أحذية", slug: "shoe-buckle" },
    { name: "مشابك ملابس سباحة", slug: "swimsuit-connecting-buckle" },
    { name: "إكسسوارات حقائب", slug: "bag-hardware" },
    { name: "أبازيم أحزمة", slug: "waist-reducing-belt-buckle" },
    { name: "دبابيس معدنية", slug: "hardware-brooch" },
    { name: "مشابك ملابس", slug: "hardware-clothing-fastener" },
    { name: "أزرار أكمام", slug: "cufflinks" },
    { name: "إكسسوارات قلائد", slug: "necklace" },
    { name: "ملاعق قهوة", slug: "coffee-spoons" },
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
export const footerTranslations: Record<string, Record<string, string>> = {
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
  ru: { products: "Продукция", quickLinks: "Быстрые ссылки", tradeInfo: "Торговая информация", moq: "MOQ", port: "Порт", terms: "Условия", payment: "Оплата", leadTime: "Срок поставки", madeInChina: "Шоурум Made-in-China", copyright: "Все права защищены." },
  pt: { products: "Produtos", quickLinks: "Links Rápidos", tradeInfo: "Informações Comerciais", moq: "MOQ", port: "Porto", terms: "Termos", payment: "Pagamento", leadTime: "Prazo", madeInChina: "Showroom Made-in-China", copyright: "Todos os direitos reservados." },
  es: { products: "Productos", quickLinks: "Enlaces Rápidos", tradeInfo: "Información Comercial", moq: "MOQ", port: "Puerto", terms: "Términos", payment: "Pago", leadTime: "Plazo", madeInChina: "Showroom Made-in-China", copyright: "Todos los derechos reservados." },
  ar: { products: "المنتجات", quickLinks: "روابط سريعة", tradeInfo: "معلومات تجارية", moq: "الحد الأدنى", port: "الميناء", terms: "الشروط", payment: "الدفع", leadTime: "مدة التسليم", madeInChina: "معرض Made-in-China", copyright: "جميع الحقوق محفوظة." },
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
export const qcTranslations: Record<string, Record<string, string>> = {
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
  ru: { title: "Контроль качества", subtitle: "Каждое изделие проверяется перед отправкой.", inspectionTitle: "Процесс проверки", inspectionSubtitle: "Три уровня проверки.", systemTitle: "Система качества", systemSubtitle: "Управление качеством на всех этапах.", rawMaterial: "Контроль сырья", inProcess: "Контроль процесса", nonConforming: "Обработка брака", warehouse: "Склад и отгрузка" },
  pt: { title: "Controle de Qualidade", subtitle: "Cada produto é inspecionado antes do envio.", inspectionTitle: "Processo de Inspeção", inspectionSubtitle: "Três níveis de inspeção.", systemTitle: "Sistema de Qualidade", systemSubtitle: "Gestão em todo o ciclo de produção.", rawMaterial: "Controle de Matéria-Prima", inProcess: "Controle em Processo", nonConforming: "Tratamento de Não Conformidades", warehouse: "Armazém e Expedição" },
  es: { title: "Control de Calidad", subtitle: "Cada producto se inspecciona antes del envío.", inspectionTitle: "Proceso de Inspección", inspectionSubtitle: "Tres niveles de inspección.", systemTitle: "Sistema de Calidad", systemSubtitle: "Gestión en todo el ciclo de producción.", rawMaterial: "Control de Materia Prima", inProcess: "Control en Proceso", nonConforming: "Manejo de No Conformidades", warehouse: "Almacén y Despacho" },
  ar: { title: "مراقبة الجودة", subtitle: "يتم فحص كل منتج قبل الشحن.", inspectionTitle: "عملية الفحص", inspectionSubtitle: "ثلاثة مستويات من الفحص.", systemTitle: "نظام الجودة", systemSubtitle: "إدارة الجودة طوال دورة الإنتاج.", rawMaterial: "مراقبة المواد الخام", inProcess: "المراقبة أثناء العملية", nonConforming: "معالجة عدم المطابقة", warehouse: "المستودع والشحن" },
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
export const mfgTranslations: Record<string, Record<string, string>> = {
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
  ru: { title: "Производственные возможности", subtitle: "Полный цикл производства.", workflowTitle: "Процесс производства", workflowSubtitle: "4-этапный процесс.", serviceTitle: "Возможности сервиса", serviceSubtitle: "Гибкие условия.", productionCapacity: "Производственные мощности", orderTrade: "Заказы и торговля", customServices: "Индивидуальные услуги", leadTimeTitle: "Срок поставки" },
  pt: { title: "Capacidade de Fabricação", subtitle: "Fluxo completo de produção.", workflowTitle: "Fluxo de Produção", workflowSubtitle: "Processo em 4 etapas.", serviceTitle: "Capacidade de Serviço", serviceSubtitle: "Termos flexíveis.", productionCapacity: "Capacidade Produtiva", orderTrade: "Pedidos e Comércio", customServices: "Serviços Personalizados", leadTimeTitle: "Prazo de Entrega" },
  es: { title: "Capacidad de Fabricación", subtitle: "Flujo completo de producción.", workflowTitle: "Flujo de Producción", workflowSubtitle: "Proceso de 4 etapas.", serviceTitle: "Capacidad de Servicio", serviceSubtitle: "Términos flexibles.", productionCapacity: "Capacidad Productiva", orderTrade: "Pedidos y Comercio", customServices: "Servicios Personalizados", leadTimeTitle: "Plazo de Entrega" },
  ar: { title: "قدرة التصنيع", subtitle: "تدفق إنتاجي كامل.", workflowTitle: "تدفق الإنتاج", workflowSubtitle: "عملية من 4 مراحل.", serviceTitle: "قدرة الخدمة", serviceSubtitle: "شروط مرنة.", productionCapacity: "الطاقة الإنتاجية", orderTrade: "الطلبات والتجارة", customServices: "خدمات مخصصة", leadTimeTitle: "مدة التسليم" },
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
export const aboutTranslations: Record<string, Record<string, string>> = {
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
  ru: { title: "О нас", profileTitle: "Профиль компании", infoTitle: "Информация", rdTitle: "Разработка и индивидуализация", rdSubtitle: "Инженерная поддержка от концепции до продукта.", engineeringTeam: "Инженерная команда", designSoftware: "ПО для проектирования", capabilities: "Возможности" },
  pt: { title: "Sobre Nós", profileTitle: "Perfil da Empresa", infoTitle: "Informações", rdTitle: "P&D e Personalização", rdSubtitle: "Suporte de engenharia do conceito ao produto.", engineeringTeam: "Equipe de Engenharia", designSoftware: "Software de Design", capabilities: "Capacidades" },
  es: { title: "Sobre Nosotros", profileTitle: "Perfil de la Empresa", infoTitle: "Información", rdTitle: "I+D y Personalización", rdSubtitle: "Soporte de ingeniería del concepto al producto.", engineeringTeam: "Equipo de Ingeniería", designSoftware: "Software de Diseño", capabilities: "Capacidades" },
  ar: { title: "من نحن", profileTitle: "ملف الشركة", infoTitle: "معلومات", rdTitle: "البحث والتخصيص", rdSubtitle: "دعم هندسي من الفكرة إلى المنتج.", engineeringTeam: "الفريق الهندسي", designSoftware: "برامج التصميم", capabilities: "القدرات" },
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
export const contactPageTranslations: Record<string, Record<string, string>> = {
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
  ru: { title: "Контакты", subtitle: "Свяжитесь с нами по вопросам продукции.", getInTouch: "Связаться с нами", contactPerson: "Контактное лицо", phone: "Телефон", email: "Email", address: "Адрес", madeInChina: "Шоурум Made-in-China", visitShowroom: "Посетить шоурум →", sendInquiry: "Отправить запрос", inquirySubtitle: "Заполните форму, и мы ответим.", ourLocation: "Наше местоположение" },
  pt: { title: "Contato", subtitle: "Entre em contato para consultas sobre produtos.", getInTouch: "Fale Conosco", contactPerson: "Pessoa de Contato", phone: "Telefone", email: "Email", address: "Endereço", madeInChina: "Showroom Made-in-China", visitShowroom: "Visitar showroom →", sendInquiry: "Enviar Consulta", inquirySubtitle: "Preencha o formulário e responderemos.", ourLocation: "Nossa Localização" },
  es: { title: "Contacto", subtitle: "Contáctenos para consultas sobre productos.", getInTouch: "Contáctenos", contactPerson: "Persona de Contacto", phone: "Teléfono", email: "Correo", address: "Dirección", madeInChina: "Showroom Made-in-China", visitShowroom: "Visitar showroom →", sendInquiry: "Enviar Consulta", inquirySubtitle: "Complete el formulario y le responderemos.", ourLocation: "Nuestra Ubicación" },
  ar: { title: "اتصل بنا", subtitle: "تواصل معنا للاستفسارات عن المنتجات.", getInTouch: "تواصل معنا", contactPerson: "الشخص المسؤول", phone: "هاتف", email: "بريد إلكتروني", address: "العنوان", madeInChina: "معرض Made-in-China", visitShowroom: "زيارة المعرض ←", sendInquiry: "إرسال استفسار", inquirySubtitle: "املأ النموذج وسنرد عليك.", ourLocation: "موقعنا" },
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
export const productDetailTranslations: Record<string, Record<string, string>> = {
  en: {
    productImage: "Product Image",
    replaceHint: "Replace with actual product photo",
    photo: "Photo",
    inquireAbout: "Inquire About This Product",
    backToAllProducts: "Back to All Products",
  },
  ru: { productImage: "Фото продукта", replaceHint: "Заменить на реальное фото", photo: "Фото", inquireAbout: "Запрос об этом продукте", backToAllProducts: "Назад ко всей продукции" },
  pt: { productImage: "Imagem do Produto", replaceHint: "Substituir por foto real", photo: "Foto", inquireAbout: "Consultar Este Produto", backToAllProducts: "Voltar aos Produtos" },
  es: { productImage: "Imagen del Producto", replaceHint: "Reemplazar con foto real", photo: "Foto", inquireAbout: "Consultar Este Producto", backToAllProducts: "Volver a Productos" },
  ar: { productImage: "صورة المنتج", replaceHint: "استبدل بصورة حقيقية", photo: "صورة", inquireAbout: "استفسر عن المنتج", backToAllProducts: "العودة للمنتجات" },
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
export const productsOverviewTranslations: Record<string, Record<string, string>> = {
  en: {
    title: "Our Products",
    subtitle: "Explore our complete range of metal hardware accessories. Each category can be customized to your specifications — from finish and size to logo and packaging.",
    sectionTitle: "Product Categories",
    sectionSubtitle: "Click on any category to learn more about specifications, customization options, and to send an inquiry.",
  },
  ru: { title: "Наша продукция", subtitle: "Полный ассортимент металлической фурнитуры.", sectionTitle: "Категории продуктов", sectionSubtitle: "Нажмите для просмотра деталей." },
  pt: { title: "Nossos Produtos", subtitle: "Linha completa de ferragens metálicas.", sectionTitle: "Categorias", sectionSubtitle: "Clique para detalhes e consulta." },
  es: { title: "Nuestros Productos", subtitle: "Gama completa de herrajes metálicos.", sectionTitle: "Categorías", sectionSubtitle: "Haga clic para detalles y consulta." },
  ar: { title: "منتجاتنا", subtitle: "مجموعة كاملة من القطع المعدنية.", sectionTitle: "الفئات", sectionSubtitle: "انقر للتفاصيل والاستفسار." },
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
export const breadcrumbTranslations: Record<string, Record<string, string>> = {
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    manufacturing: "Manufacturing",
    qualityControl: "Quality Control",
    contact: "Contact",
  },
  ru: { home: "Главная", products: "Продукция", about: "О нас", manufacturing: "Производство", qualityControl: "Контроль качества", contact: "Контакты" },
  pt: { home: "Início", products: "Produtos", about: "Sobre Nós", manufacturing: "Fabricação", qualityControl: "Controle de Qualidade", contact: "Contato" },
  es: { home: "Inicio", products: "Productos", about: "Nosotros", manufacturing: "Fabricación", qualityControl: "Control de Calidad", contact: "Contacto" },
  ar: { home: "الرئيسية", products: "المنتجات", about: "من نحن", manufacturing: "التصنيع", qualityControl: "مراقبة الجودة", contact: "اتصل بنا" },
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
export const productCardTranslations: Record<string, Record<string, string>> = {
  en: {
    learnMore: "Learn more",
  },
  ru: { learnMore: "Узнать больше" },
  pt: { learnMore: "Saiba mais" },
  es: { learnMore: "Más información" },
  ar: { learnMore: "معرفة المزيد" },
  zh: {
    learnMore: "了解更多",
  },
};

// ============================================================
// Helper: get translation function
// ============================================================
export function t(locale: Locale, key: string, dictionary: Record<string, Record<string, string>>): string {
  return dictionary[locale]?.[key] ?? dictionary["en"]?.[key] ?? key;
}
