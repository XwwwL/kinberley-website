import type { Locale } from "@/lib/i18n";

// ============================================================
// Static company facts (language-agnostic)
// ============================================================
export const companyFacts = {
  nameEn: "Yongjia Jinbolli Hardware Co., Ltd.",
  nameZh: "永嘉金博利五金有限公司",
  founded: "2025-04-07",
  registeredCapital: "500,000 CNY",
  area: "200 square meters",
  address: {
    full: "Floor 2, Building B, No. 1, Jinshi Road, Qianshi Industrial Zone, Huangtian Street, Yongjia County, Wenzhou City, Zhejiang Province, China",
    street: "Floor 2, Building B, No. 1, Jinshi Road, Qianshi Industrial Zone",
    district: "Huangtian Street, Yongjia County",
    city: "Wenzhou City",
    province: "Zhejiang Province",
    country: "China",
  },
  registeredAddress: {
    full: "Within Zhejiang Hongcaomao Shoestrade Co., Ltd., Qianshi Industrial Zone, Huangtian Street, Yongjia County, Wenzhou City, Zhejiang Province, China",
  },
  contact: {
    person: "Mr. Jinghao Jin",
    phone: "15705876871",
    email: "info@jinbolli.com",
  },
  madeInChina: "https://jinbolihardware.en.made-in-china.com/?pv_id=1jrn4ni6k860&faw_id=1jrn4o4684b9&bv_id=1jrn4o46b03b&pbv_id=1jrn4nh88db8x",
  staff: {
    total: 5,
    generalManager: 1,
    sales: 1,
    production: 3,
  },
  manufacturing: {
    productionLines: 3,
    facilities: [
      { nameEn: "Die Casting Facility", nameZh: "压铸设备", quantity: 1 },
      { nameEn: "Drilling Facility", nameZh: "钻孔设备", quantity: 4 },
    ],
  },
  serviceCapability: {
    moq: "600 pcs",
    nearestPortEn: "Yiwu Port",
    nearestPortZh: "义乌港",
    quotationTerms: ["FOB", "CIF", "CFR", "EXW"],
    paymentTerms: ["L/C", "T/T"],
    leadTimeEn: "one month",
    leadTimeZh: "一个月",
    qualifiedSuppliers: 5,
  },
  qualityControl: {
    qcStaff: 2,
    notesEn: "Audited company information available upon request. Verified supplier information available from Made-in-China audit materials.",
    notesZh: "经核验的公司信息可应要求提供。可从 Made-in-China 审核资料获取已验证的供应商信息。",
  },
  rd: {
    engineers: 1,
    responsibilityEn: "Provide solutions according to client's demand",
    responsibilityZh: "根据客户需求提供解决方案",
    software: ["Auto CAD", "3D Software Design"],
    capabilitiesEn: [
      "Private mold available",
      "Professional technique supplier",
      "3D software design services available",
      "Customization from samples",
      "ODM service available",
      "OEM for popular brands available",
    ],
    capabilitiesZh: [
      "可提供私有模具",
      "专业技术供应商",
      "提供3D软件设计服务",
      "支持来样定制",
      "提供ODM服务",
      "提供知名品牌OEM服务",
    ],
  },
};

// ============================================================
// Localized content
// ============================================================
export const localizedContent: Record<string, {
  aboutIntro: string[];
  manufacturingWorkflow: { step: number; name: string; description: string }[];
  qualityControl: {
    description: string;
    inspectionTypes: { name: string; description: string }[];
    nonConformingProcess: string;
    qcItems: string[];
  };
}> = {
  en: {
    aboutIntro: [
      "Yongjia Jinbolli Hardware Co., Ltd. (永嘉金博利五金有限公司) was established in 2025, located in the Qianshi Industrial Zone, Huangtian Street, Yongjia County, Wenzhou City, Zhejiang Province — a renowned manufacturing hub for hardware and metal accessories in China.",
      "Our company specializes in the production of hardware decorative buckles, clothing buttons, shoe buckles, bag hardware accessories, brooches, coffee spoons, and customized metal parts. We serve clients in the fashion, garment, bag, and footwear industries.",
      `With a ${companyFacts.area} facility, ${companyFacts.manufacturing.productionLines} production lines, and a professional team of ${companyFacts.staff.total} staff, we are committed to delivering consistent quality, on-time delivery, and responsive customer service.`,
    ],
    manufacturingWorkflow: [
      { step: 1, name: "Raw Materials", description: "Sourcing and inspection of quality metal materials" },
      { step: 2, name: "Die Casting", description: "Precision die casting with 1 dedicated facility" },
      { step: 3, name: "Machining", description: "Drilling, trimming, and surface preparation with 4 drilling facilities" },
      { step: 4, name: "Inspection & Packaging", description: "100% inspection before careful packaging for export" },
    ],
    qualityControl: {
      description: "Quality assurance available with traceability identification of raw materials, finished product inspection instructions, and warehouse control process with written procedures and records.",
      inspectionTypes: [
        { name: "100% Inspection", description: "Every product is inspected before shipment" },
        { name: "Visual Inspection", description: "Thorough visual examination of surface quality, finish consistency, and appearance" },
        { name: "Function Inspection", description: "Functional testing of moving parts, clasps, and attachment points" },
      ],
      nonConformingProcess: "Non-conforming products are marked, segregated, repaired and re-inspected",
      qcItems: [
        "Quality assurance available with traceability identification of raw materials",
        "Finished product inspection instructions are strictly followed",
        "Non-conforming products are marked, segregated, repaired and re-inspected",
        "Warehouse control process with written procedure and records",
        `QA/QC inspection staff: ${companyFacts.qualityControl.qcStaff} dedicated personnel`,
      ],
    },
  },
  zh: {
    aboutIntro: [
      "永嘉金博利五金有限公司成立于2025年，位于浙江省温州市永嘉县黄田街道千石工业区——中国知名的五金金属配件制造基地。",
      "公司专注于生产五金装饰扣、服装纽扣、鞋扣、箱包五金配件、胸针、咖啡勺及各类定制金属零件，服务服装、鞋类、箱包及时尚配饰行业客户。",
      `公司拥有${companyFacts.area}的厂房、${companyFacts.manufacturing.productionLines}条生产线和${companyFacts.staff.total}名专业团队成员，致力于提供稳定的产品品质、准时的交期和周到的客户服务。`,
    ],
    manufacturingWorkflow: [
      { step: 1, name: "原材料", description: "优质金属材料的采购与检验" },
      { step: 2, name: "压铸", description: "1台专用压铸设备，精密压铸工艺" },
      { step: 3, name: "机加工", description: "4台钻孔设备进行钻孔、修边和表面处理" },
      { step: 4, name: "检验与包装", description: "100%全面检验后，精心包装出口" },
    ],
    qualityControl: {
      description: "提供质量保证服务，包括原材料可追溯标识、成品检验规程、以及具备书面程序和记录的仓储控制流程。",
      inspectionTypes: [
        { name: "100% 全检", description: "每件产品在出货前均经过检验" },
        { name: "目视检验", description: "对表面质量、表面一致性及外观进行全面目视检查" },
        { name: "功能检验", description: "对活动部件、搭扣及连接部位进行功能测试" },
      ],
      nonConformingProcess: "不合格品被标记、隔离，经修复后重新检验",
      qcItems: [
        "提供质量保证，原材料具有可追溯标识",
        "严格遵循成品检验规程",
        "不合格品被标记、隔离，经修复后重新检验",
        "仓储控制流程具备书面程序和记录",
        `QA/QC 检验人员：${companyFacts.qualityControl.qcStaff} 名专职人员`,
      ],
    },
  },
};

// Table info
export const tableInfoTranslations: Record<string, Record<string, string>> = {
  en: {
    companyName: "Company Name",
    chineseName: "Chinese Name",
    established: "Established",
    registeredCapital: "Registered Capital",
    factoryArea: "Factory Area",
    address: "Address",
    totalStaff: "Total Staff",
    productionLines: "Production Lines",
    nearestPort: "Nearest Port",
    moq: "MOQ",
    leadTime: "Lead Time",
  },
  zh: {
    companyName: "公司名称",
    chineseName: "中文名称",
    established: "成立时间",
    registeredCapital: "注册资本",
    factoryArea: "厂房面积",
    address: "公司地址",
    totalStaff: "员工总数",
    productionLines: "生产线",
    nearestPort: "最近港口",
    moq: "起订量",
    leadTime: "交货周期",
  },
};
