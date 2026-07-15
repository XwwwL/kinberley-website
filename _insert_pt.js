const fs = require('fs');
let c = fs.readFileSync('src/data/translations.ts', 'utf8');

const inserts = [
  // 6. homepageHighlights
  {
    marker: '  zh: [\n    {\n      icon: "🏭",\n      title: "专业五金制造商",',
    pt: `  pt: [
    {
      icon: "🏭",
      title: "Fabricante Personalizado",
      description: "Especializado em fivelas, botões e acessórios metálicos.",
    },
    {
      icon: "⚙️",
      title: "Produção Completa",
      description: "Fundição, perfuração, usinagem e embalagem.",
    },
    {
      icon: "✅",
      title: "Inspeção 100%",
      description: "Verificação visual e funcional de cada peça.",
    },
    {
      icon: "🎨",
      title: "Serviço OEM/ODM",
      description: "Design personalizado, moldes privados.",
    },
    {
      icon: "🚢",
      title: "Termos Flexíveis",
      description: "FOB, CIF, CFR, EXW. L/C ou T/T. MOQ 600 pcs.",
    },
    {
      icon: "📐",
      title: "Suporte P&D",
      description: "Auto CAD e design 3D.",
    },
  ],`
  },
  // 7. statsTranslations
  {
    marker: '  zh: [\n    { label: "生产线", value: "5" },',
    pt: `  pt: [
    { label: "Linhas de Produção", value: "5" },
    { label: "MOQ", value: "600 pcs" },
    { label: "Equipe CQ", value: "5" },
    { label: "Prazo", value: "1 mês" },
  ],`
  },
  // 8. customItemsTranslations
  {
    marker: '  zh: [\n    { icon: "🔧", title: "私有模具", desc: "为您开发专属产品模具" },',
    pt: `  pt: [
    { icon: "🔧", title: "Molde Privado", desc: "Desenvolvimento de moldes exclusivos" },
    { icon: "📐", title: "Design 3D", desc: "Auto CAD e software 3D" },
    { icon: "🎨", title: "Serviço ODM", desc: "Fabricação com seu design" },
    { icon: "🏷️", title: "Serviço OEM", desc: "OEM para marcas" },
  ],`
  },
  // 9. contactFormTranslations
  {
    marker: '  zh: {\n    name: "姓名",\n    email: "邮箱",',
    pt: `  pt: {
    name: "Nome",
    email: "Email",
    phone: "WhatsApp / Telefone",
    company: "Empresa",
    productCategory: "Categoria",
    message: "Mensagem",
    submit: "Enviar",
    namePlaceholder: "Seu nome completo",
    emailPlaceholder: "seu@email.com",
    phonePlaceholder: "+55 11 91234-5678",
    companyPlaceholder: "Nome da empresa",
    selectCategory: "Selecione a categoria",
    otherCategory: "Outro / Personalizado",
    messagePlaceholder: "Descreva suas necessidades...",
    success: "Obrigado pela consulta",
    successMessage: "Entraremos em contato em breve.",
    sendAnother: "Enviar outra consulta",
    nameRequired: "Digite seu nome",
    emailRequired: "Digite seu email",
    messageRequired: "Descreva suas necessidades...",
  },`
  },
  // 10. productNavTranslations
  {
    marker: '  zh: [\n    { name: "纽扣", slug: "button" },',
    pt: `  pt: [
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
  ],`
  },
  // 11. footerTranslations
  {
    marker: '  zh: {\n    products: "产品分类",\n    quickLinks: "快速链接",',
    pt: `  pt: {
    products: "Produtos",
    quickLinks: "Links Rápidos",
    tradeInfo: "Informações Comerciais",
    moq: "MOQ",
    port: "Porto",
    terms: "Termos",
    payment: "Pagamento",
    leadTime: "Prazo",
    madeInChina: "Showroom Made-in-China",
    copyright: "Todos os direitos reservados.",
  },`
  },
  // 12. qcTranslations
  {
    marker: '  zh: {\n    title: "质量控制",\n    subtitle: "每件产品在出厂前都经过严格检验。我们致力于稳定的产品质量和可靠的交货服务。",',
    pt: `  pt: {
    title: "Controle de Qualidade",
    subtitle: "Cada produto é inspecionado antes do envio.",
    inspectionTitle: "Processo de Inspeção",
    inspectionSubtitle: "Três níveis de inspeção.",
    systemTitle: "Sistema de Qualidade",
    systemSubtitle: "Gestão em todo o ciclo de produção.",
    rawMaterial: "Controle de Matéria-Prima",
    inProcess: "Controle em Processo",
    nonConforming: "Tratamento de Não Conformidades",
    warehouse: "Armazém e Expedição",
  },`
  },
  // 13. mfgTranslations
  {
    marker: '  zh: {\n    title: "生产能力",\n    subtitle: "从原材料到成品的一站式生产流程。",',
    pt: `  pt: {
    title: "Capacidade de Fabricação",
    subtitle: "Fluxo completo de produção.",
    workflowTitle: "Fluxo de Produção",
    workflowSubtitle: "Processo em 4 etapas.",
    serviceTitle: "Capacidade de Serviço",
    serviceSubtitle: "Termos flexíveis.",
    productionCapacity: "Capacidade Produtiva",
    orderTrade: "Pedidos e Comércio",
    customServices: "Serviços Personalizados",
    leadTimeTitle: "Prazo de Entrega",
  },`
  },
  // 14. aboutTranslations
  {
    marker: '  zh: {\n    title: "关于我们",\n    profileTitle: "公司简介",',
    pt: `  pt: {
    title: "Sobre Nós",
    profileTitle: "Perfil da Empresa",
    infoTitle: "Informações",
    rdTitle: "P&D e Personalização",
    rdSubtitle: "Suporte de engenharia do conceito ao produto.",
    engineeringTeam: "Equipe de Engenharia",
    designSoftware: "Software de Design",
    capabilities: "Capacidades",
  },`
  },
  // 15. contactPageTranslations
  {
    marker: '  zh: {\n    title: "联系我们",\n    subtitle: "如需产品咨询、定制订单或合作洽谈，欢迎与我们联系。",',
    pt: `  pt: {
    title: "Contato",
    subtitle: "Entre em contato para consultas sobre produtos.",
    getInTouch: "Fale Conosco",
    contactPerson: "Pessoa de Contato",
    phone: "Telefone",
    email: "Email",
    address: "Endereço",
    madeInChina: "Showroom Made-in-China",
    visitShowroom: "Visitar showroom →",
    sendInquiry: "Enviar Consulta",
    inquirySubtitle: "Preencha o formulário e responderemos.",
    ourLocation: "Nossa Localização",
  },`
  },
  // 16. productDetailTranslations
  {
    marker: '  zh: {\n    productImage: "产品图片",',
    pt: `  pt: {
    productImage: "Imagem do Produto",
    replaceHint: "Substituir por foto real",
    photo: "Foto",
    inquireAbout: "Consultar Este Produto",
    backToAllProducts: "Voltar aos Produtos",
  },`
  },
  // 17. productsOverviewTranslations
  {
    marker: '  zh: {\n    title: "产品中心",\n    subtitle: "浏览我们的全系列金属五金辅料产品。每个分类均可根据您的规格进行定制——从表面处理和尺寸到 logo 和包装。",',
    pt: `  pt: {
    title: "Nossos Produtos",
    subtitle: "Linha completa de ferragens metálicas.",
    sectionTitle: "Categorias",
    sectionSubtitle: "Clique para detalhes e consulta.",
  },`
  },
  // 18. breadcrumbTranslations
  {
    marker: '  zh: {\n    home: "网站首页",\n    products: "产品中心",\n    about: "关于我们",\n    manufacturing: "生产能力",\n    qualityControl: "质量控制",\n    contact: "联系我们",',
    pt: `  pt: {
    home: "Início",
    products: "Produtos",
    about: "Sobre Nós",
    manufacturing: "Fabricação",
    qualityControl: "Controle de Qualidade",
    contact: "Contato",
  },`
  },
  // 19. productCardTranslations
  {
    marker: '  zh: {\n    learnMore: "了解更多",',
    pt: `  pt: {\n    learnMore: "Saiba mais",\n  },`
  },
];

for (const ins of inserts) {
  if (c.includes(ins.pt.slice(0, 25))) {
    console.log('SKIP (already has pt):', ins.marker.slice(0, 50));
    continue;
  }
  if (!c.includes(ins.marker)) {
    console.log('NOT FOUND:', ins.marker.slice(0, 60));
    continue;
  }
  c = c.replace(ins.marker, ins.pt + '\n' + ins.marker);
  console.log('INSERTED:', ins.marker.slice(0, 50));
}

fs.writeFileSync('src/data/translations.ts', c, 'utf8');
const count = (c.match(/  pt: \{/g) || []).length;
const countArr = (c.match(/  pt: \[/g) || []).length;
console.log('\nDone. pt: {} blocks:', count, 'pt: [] blocks:', countArr);
