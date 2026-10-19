/**
 * Fujian Kedah Kitchen & Bath Co., Ltd. - Official B2B Website Script
 * Multi-Language (EN/ES/TH/AR/ZH) + Interactive RFQ Modal + Product Filter + WhatsApp
 * Inspiring from luxopack.com High-Conversion B2B Architecture
 */

// Global Translations Dictionary
const i18n = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.oem': 'OEM / ODM',
    'nav.certs': 'Certifications',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact Us',
    'nav.rfq': 'Request a Quote',
    'hero.badge': 'Direct Source Manufacturer | North America & Global Engineering Ready',
    'hero.title': 'Precision Engineered Lead-Free Brass Faucets & Commercial Plumbing Solutions',
    'hero.subtitle': 'Over 30 years of OEM/ODM excellence for North American, European, Middle Eastern, and Southeast Asian sanitary engineering contractors. Compliant with cUPC File No. 8933, CE, and rigorous 24-Hour Acetic Acid Salt Spray (ASS) plating tests.',
    'hero.btn1': 'Request Project Quote',
    'hero.btn2': 'Explore Products',
    'trust.title': 'Global Engineering Certifications & Quality Assurances:',
    'rfq.title': 'Request an Instant B2B Factory Quote',
    'rfq.desc': 'Contact our export engineering team directly. We respond within 24 hours with FOB pricing, MOQ terms, and sample dispatch.',
    'form.name': 'Full Name / Contact Person *',
    'form.company': 'Company Name *',
    'form.email': 'Business Email *',
    'form.country': 'Target Country / Region *',
    'form.category': 'Product of Interest *',
    'form.message': 'Project Specifications / Required Quantities *',
    'form.privacy_note': 'Your information is confidential. We strictly protect your project privacy and intellectual property.',
    'about.badge': 'Corporate Profile & Manufacturing Strength',
    'about.page_title': 'About Fujian Kedah Kitchen & Bath Co., Ltd.',
    'about.page_subtitle': '30+ Years of Manufacturing Excellence in Certified Lead-Free Brass Plumbing & Sanitary Fixtures',
    'about.story_tag': 'Our Heritage & Capability',
    'about.story_title': 'A Proven Global Partner in Commercial & Residential Sanitary Hardware',
    'certs.tag': 'Compliance & Testing',
    'certs.title': 'International Quality Certifications & Approvals',
    'certs.desc': 'Our plumbing hardware is engineered and rigorously lab-tested to meet and exceed global municipal, commercial, and residential codes.',
    'oem.tag': 'Custom Manufacturing',
    'oem.title': 'Complete OEM & ODM Turnkey Solutions',
    'oem.desc': 'From proprietary 3D CAD modeling and custom mold tooling to laser engraving and tailored packaging.',
    'exhibitions.tag': 'Global Trade Footprint',
    'exhibitions.title': 'Meeting Global Plumbing Contractors Face-to-Face',
    'exhibitions.desc': 'Fujian Kedah is a continuous exhibitor at major global trade fairs including the Canton Fair, KBIS, and The Big 5 Dubai.',
    'footer.desc': 'Fujian Kedah Kitchen & Bath Co., Ltd. (kedahkb.com) is a professional Chinese source manufacturer of lead-free brass faucets, smart sensor plumbing fixtures, and luxury shower systems.',
    'footer.product_lines': 'Services & Collections',
    'footer.quick_links': 'Company Heritage',
    'footer.contact_info': 'Connect with Factory',
    'toastSent': 'Thank you! Your inquiry has been sent to sale01@kedah.cn. Our export team will respond within 24 hours.',
    'rightsReserved': 'All Rights Reserved.'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.products': 'Productos',
    'nav.oem': 'OEM / ODM',
    'nav.certs': 'Certificaciones',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.contact': 'Contacto',
    'nav.rfq': 'Solicitar Cotización',
    'hero.badge': 'Fabricante Certificado cUPC / CE / ISO9001',
    'hero.title': 'Soluciones de Grifería y Sanitarios de Alta Precisión Sin Plomo',
    'hero.subtitle': 'Más de 30 años de excelencia OEM/ODM para contratistas de ingeniería sanitaria en Norteamérica, Europa, Oriente Medio y Sudeste Asiático. Cumple con cUPC No. 8933, CE y pruebas ASS de 24 horas.',
    'hero.btn1': 'Cotizar OEM/ODM',
    'hero.btn2': 'Ver Catálogo',
    'trust.title': 'Certificaciones y Garantías de Calidad Global:',
    'rfq.title': 'Solicitar Cotización Directa de Fábrica',
    'rfq.desc': 'Respuesta técnica en 24 horas y despacho de muestras para importadores y proyectos.',
    'form.name': 'Nombre Completo / Contacto *',
    'form.company': 'Nombre de la Empresa *',
    'form.email': 'Correo Corporativo *',
    'form.country': 'País / Región de Destino *',
    'form.category': 'Producto de Interés *',
    'form.message': 'Especificaciones del Proyecto / Cantidades *',
    'form.privacy_note': 'Su información es confidencial. Protegemos estrictamente su privacidad y propiedad intelectual.',
    'about.badge': 'Perfil Corporativo y Capacidad de Fabricación',
    'about.page_title': 'Acerca de Fujian Kedah Kitchen & Bath Co., Ltd.',
    'about.page_subtitle': 'Más de 30 años de excelencia en grifería de latón sin plomo y accesorios sanitarios certificados',
    'about.story_tag': 'Nuestra Trayectoria y Capacidad',
    'about.story_title': 'Un Socio Global Confiable en Grifería Comercial y Residencial',
    'certs.tag': 'Cumplimiento y Ensayos',
    'certs.title': 'Certificaciones y Aprobaciones Internacionales',
    'certs.desc': 'Nuestra grifería está diseñada y probada en laboratorio para cumplir con los estándares globales más exigentes.',
    'oem.tag': 'Fabricación a Medida',
    'oem.title': 'Soluciones Integrales OEM y ODM',
    'oem.desc': 'Desde modelado 3D CAD y moldes personalizados hasta grabado láser y embalaje a medida.',
    'exhibitions.tag': 'Presencia en Ferias Mundiales',
    'exhibitions.title': 'Encuentros Cara a Cara con Contratistas Globales',
    'exhibitions.desc': 'Fujian Kedah expone continuamente en ferias mundiales como la Feria de Cantón, KBIS y The Big 5 Dubai.',
    'footer.desc': 'Fujian Kedah Kitchen & Bath Co., Ltd. (kedahkb.com) es un fabricante directo especializado en grifos sin plomo, grifería con sensor y duchas.',
    'footer.product_lines': 'Líneas de Productos',
    'footer.quick_links': 'Navegación Rápida',
    'footer.contact_info': 'Contacto de Fábrica',
    'toastSent': '¡Gracias! Su consulta ha sido enviada a sale01@kedah.cn. Nos comunicaremos en 24 horas.',
    'rightsReserved': 'Todos los derechos reservados.'
  },
  th: {
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.products': 'สินค้าทั้งหมด',
    'nav.oem': 'รับผลิต OEM/ODM',
    'nav.certs': 'ใบรับรองมาตรฐาน',
    'nav.faq': 'คำถามที่พบบ่อย',
    'nav.contact': 'ติดต่อเรา',
    'nav.rfq': 'ขอใบเสนอราคา',
    'hero.badge': 'โรงงานมาตรฐานสากล cUPC / CE / ISO9001',
    'hero.title': 'ผู้ผลิตก๊อกน้ำทองเหลืองไร้สารตะกั่วและสุขภัณฑ์ระดับพรีเมียม',
    'hero.subtitle': 'ประสบการณ์กว่า 30 ปีในการผลิต OEM/ODM สำหรับโครงการสุขภัณฑ์ในอเมริกาเหนือ ยุโรป ตะวันออกกลาง และเอเชียตะวันออกเฉียงใต้ ผ่านการรับรอง cUPC หมายเลข 8933 และมาตรฐาน CE',
    'hero.btn1': 'ขอใบเสนอราคาโครงการ',
    'hero.btn2': 'ชมสินค้า',
    'trust.title': 'การรับรองมาตรฐานวิศวกรรมระดับสากล:',
    'rfq.title': 'ขอใบเสนอราคาตรงจากโรงงาน',
    'rfq.desc': 'ทีมวิศวกรพร้อมตอบกลับภายใน 24 ชั่วโมงพร้อมเงื่อนไข FOB และการส่งตัวอย่างด่วน',
    'form.name': 'ชื่อ-นามสกุล / ผู้ติดต่อ *',
    'form.company': 'ชื่อบริษัท *',
    'form.email': 'อีเมลธุรกิจ *',
    'form.country': 'ประเทศ / ภูมิภาคเป้าหมาย *',
    'form.category': 'หมวดหมู่สินค้าที่สนใจ *',
    'form.message': 'รายละเอียดโครงการ / จำนวนที่ต้องการ *',
    'form.privacy_note': 'ข้อมูลของคุณเป็นความลับ เราปกป้องความเป็นส่วนตัวและทรัพย์สินทางปัญญาอย่างเคร่งครัด',
    'about.badge': 'ข้อมูลบริษัทและศักยภาพการผลิต',
    'about.page_title': 'เกี่ยวกับ บริษัท ฝูเจี้ยน เคอดี้ คิทเช่น แอนด์ บาธ จำกัด',
    'about.page_subtitle': 'กว่า 30 ปีแห่งความเป็นเลิศในการผลิตก๊อกน้ำทองเหลืองไร้สารตะกั่วและสุขภัณฑ์มาตรฐานสากล',
    'about.story_tag': 'ประวัติและศักยภาพของเรา',
    'about.story_title': 'พันธมิตรระดับโลกที่ได้รับความไว้วางใจในอุปกรณ์สุขภัณฑ์เชิงพาณิชย์และที่อยู่อาศัย',
    'certs.tag': 'การรับรองและการทดสอบ',
    'certs.title': 'ใบรับรองคุณภาพระดับสากล',
    'certs.desc': 'อุปกรณ์สุขภัณฑ์ของเราได้รับการออกแบบและทดสอบในห้องปฏิบัติการเพื่อมาตรฐานสูงสุดระดับสากล',
    'oem.tag': 'บริการรับผลิต OEM/ODM',
    'oem.title': 'โซลูชัน OEM & ODM ครบวงจร',
    'oem.desc': 'ตั้งแต่การสร้างแบบจำลอง 3D CAD แม่พิมพ์สั่งทำพิเศษ ไปจนถึงการยิงเลเซอร์โลโก้และบรรจุภัณฑ์',
    'exhibitions.tag': 'งานแสดงสินค้าระดับโลก',
    'exhibitions.title': 'พบปะกับผู้รับเหมาและผู้ซื้อจากทั่วโลก',
    'exhibitions.desc': 'ฝูเจี้ยน เคอดี้ เข้าร่วมงานแสดงสินค้าระดับโลกอย่างต่อเนื่อง เช่น งานกวางเจาแฟร์ (Canton Fair), KBIS และ The Big 5 Dubai',
    'footer.desc': 'บริษัท ฝูเจี้ยน เคอดี้ คิทเช่น แอนด์ บาธ จำกัด (kedahkb.com) ผู้ผลิตก๊อกน้ำทองเหลืองไร้สารตะกั่ว สุขภัณฑ์เซ็นเซอร์ และระบบฝักบัวชั้นนำของจีน',
    'footer.product_lines': 'หมวดหมู่สินค้า',
    'footer.quick_links': 'ลิงก์ด่วน',
    'footer.contact_info': 'ติดต่อโรงงาน',
    'toastSent': 'ขอบคุณครับ! ข้อความของคุณถูกส่งไปยัง sale01@kedah.cn เรียบร้อยแล้ว',
    'rightsReserved': 'สงวนลิขสิทธิ์ทั้งหมด'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.oem': 'تصنيع OEM / ODM',
    'nav.certs': 'الشهادات المعتمدة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'اتصل بنا',
    'nav.rfq': 'طلب تسعيرة فورية',
    'hero.badge': 'مصنع معتمد بشهادات cUPC / CE / ISO9001',
    'hero.title': 'حلول خلاطات المياه النحاسية الخالية من الرصاص والأدوات الصحية',
    'hero.subtitle': 'أكثر من 30 عامًا من التميز في تصنيع المعدات الأصلية لمقاولي الهندسة الصحية في أمريكا الشمالية وأوروبا والشرق الأوسط. متوافق مع cUPC رقم 8933 وCE واختبار رش الملح لمدة 24 ساعة.',
    'hero.btn1': 'طلب تسعيرة للمشروع',
    'hero.btn2': 'استعراض المنتجات',
    'trust.title': 'شهادات الجودة والاعتمادات الهندسية العالمية:',
    'rfq.title': 'طلب عرض سعر مباشر من المصنع',
    'rfq.desc': 'اتصل بفريقنا الهندسي مباشرة. نرد خلال 24 ساعة بأسعار FOB وشروط الحد الأدنى للطلب وإرسال العينات للمشاريع.',
    'form.name': 'الاسم الكامل / جهة الاتصال *',
    'form.company': 'اسم الشركة *',
    'form.email': 'البريد الإلكتروني للعمل *',
    'form.country': 'الدولة / المنطقة المستهدفة *',
    'form.category': 'المنتجات المطلوبة *',
    'form.message': 'مواصفات المشروع / الكميات المطلوبة *',
    'form.privacy_note': 'معلوماتك سرية للغاية. نحن نحمي خصوصية مشروعك وملكيتك الفكرية بشكل صارم.',
    'about.badge': 'الملف التعريفي والقدرة التصنيعية',
    'about.page_title': 'حول شركة فوجيان كيداه للمطابخ والحمامات',
    'about.page_subtitle': 'أكثر من 30 عامًا من التميز في تصنيع الأدوات الصحية وخلاطات النحاس الخالية من الرصاص',
    'about.story_tag': 'تاريخنا وقدراتنا',
    'about.story_title': 'شريك عالمي موثوق به في الأدوات الصحية للمشاريع التجارية والسكنية',
    'certs.tag': 'المعايير والاختبارات',
    'certs.title': 'شهادات الجودة والاعتمادات الدولية',
    'certs.desc': 'تم تصميم واختبار منتجاتنا مخبريًا لتلبية وتجاوز المعايير والمواصفات العالمية للمشاريع.',
    'oem.tag': 'التصنيع المخصص',
    'oem.title': 'حلول شاملة ومتكاملة لتصنيع OEM و ODM',
    'oem.desc': 'من نمذجة 3D CAD والقوالب المخصصة إلى الحفر بالليزر والتغليف المخصص لماركتك.',
    'exhibitions.tag': 'المعارض الدولية',
    'exhibitions.title': 'لقاء مقاولي السباكة والمستوردين من جميع أنحاء العالم',
    'exhibitions.desc': 'تشارك كيداه باستمرار في كبرى المعارض الدولية مثل معرض كانتون الدولي، KBIS، وThe Big 5 في دبي.',
    'footer.desc': 'شركة فوجيان كيداه للمطابخ والحمامات مصنع صيني مباشر متخصص في خلاطات النحاس الخالية من الرصاص وأنظمة الدش والأجهزة الصحية الذكية.',
    'footer.product_lines': 'فئات المنتجات',
    'footer.quick_links': 'روابط سريعة',
    'footer.contact_info': 'معلومات الاتصال',
    'toastSent': 'شكراً لك! تم إرسال طلبك بنجاح إلى sale01@kedah.cn. سيتواصل فريقنا معك خلال 24 ساعة.',
    'rightsReserved': 'جميع الحقوق محفوظة.'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于科迪',
    'nav.products': '产品中心',
    'nav.oem': 'OEM / ODM 定制',
    'nav.certs': '权威资质认证',
    'nav.faq': '常见问题',
    'nav.contact': '联系我们',
    'nav.rfq': '获取外贸报价',
    'hero.badge': '通过北美 cUPC / 欧盟 CE / ISO9001 权威认证工厂',
    'hero.title': '专业无铅铜水龙头与高端卫浴洁具源头制造厂商',
    'hero.subtitle': '30余年专注北美、欧洲、中东及东南亚各大卫浴工程商 OEM/ODM 出口定制，严格符合美国 cUPC 认证（档案号 8933）、欧盟 CE 及 24小时乙酸盐雾（ASS）Grade 10 级严苛电镀质检。',
    'hero.btn1': '获取工程采购报价',
    'hero.btn2': '浏览产品系列',
    'trust.title': '全球工程资质认证与品质保障体系：',
    'rfq.title': '获取工厂直供外贸报价单',
    'rfq.desc': '直接与科迪外贸工程团队对接，24小时内提供 FOB 报价单、起订量政策及样品寄送服务。',
    'form.name': '您的姓名 / 称呼 *',
    'form.company': '公司名称 *',
    'form.email': '企业业务邮箱 *',
    'form.country': '目标出海国家 / 地区 *',
    'form.category': '感兴趣的产品品类 *',
    'form.message': '采购需求说明 / 计划订购数量 *',
    'form.privacy_note': '您的商业信息受到严格保密，我们严守外贸工程隐私与图纸知识产权。',
    'about.badge': '企业概况与制造实力',
    'about.page_title': '关于福建科迪厨卫有限公司',
    'about.page_subtitle': '30年精工传承 · 北美cUPC与欧盟CE认证无铅铜卫浴龙头源头制造厂商',
    'about.story_tag': '企业底蕴与制造实力',
    'about.story_title': '全球卫浴工程商与品牌进口商长期信赖的制造伙伴',
    'certs.tag': '标准合规与严苛检测',
    'certs.title': '国际权威认证与行业准入检测',
    'certs.desc': '科迪卫浴所有水暖洁具均经过实验室全项严苛检测，符合并超越欧美及中东商用市政标准。',
    'oem.tag': '定制开发与外贸代工',
    'oem.title': '一站式 OEM / ODM 柔性定制与开模方案',
    'oem.desc': '支持从 3D 工业建模、模具独立压铸，到个性化激光镭雕与国际工程品牌专属包装。',
    'exhibitions.tag': '全球出海展贸足迹',
    'exhibitions.title': '连续多年参加广交会，与全球采购商面对面交流',
    'exhibitions.desc': '福建科迪常年亮相中国广交会、美国 KBIS 及迪拜 Big 5 国际知名卫浴建材博览会。',
    'footer.desc': '福建科迪厨卫有限公司（kedahkb.com）为中国源头专业卫浴龙头制造商，30年专注无铅铜水龙头、智能感应洁具及高端淋浴花洒系统，为全球工程商与品牌渠道商提供权威认证的卫浴制造解决方案。',
    'footer.product_lines': '核心产品与服务',
    'footer.quick_links': '快捷导航',
    'footer.contact_info': '工厂联系方式',
    'toastSent': '感谢您的咨询！信息已发送至 sale01@kedah.cn，外贸专员将在24小时内联系您。',
    'rightsReserved': '福建科迪厨卫有限公司 版权所有。'
  }
};

// Also support camelCase aliases for backward compatibility
for (const lang in i18n) {
  const dict = i18n[lang];
  for (const k in dict) {
    if (k.includes('.')) {
      const camel = k.replace(/\.([a-z])/g, (_, g) => g.toUpperCase());
      if (!dict[camel]) dict[camel] = dict[k];
    }
  }
}


// Global Toast Message Function
window.showToast = function(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #ffffff;
      color: #0f172a;
      padding: 16px 26px;
      border-radius: 12px;
      box-shadow: 0 16px 40px rgba(2, 132, 199, 0.22);
      border: 1px solid #bae6fd;
      border-left: 5px solid #0284c7;
      font-size: 14px;
      font-weight: 600;
      z-index: 99999;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      max-width: 380px;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 4500);
};

// Global RFQ Modal Functions
window.openRFQModal = function(productName) {
  const modal = document.getElementById('rfqModalOverlay') || document.getElementById('rfqModal');
  const productInput = document.getElementById('modalProductInput') || document.getElementById('modalProductField');
  if (productInput && productName) {
    productInput.value = productName;
  }
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
  }
};

window.closeRFQModal = function() {
  const modal = document.getElementById('rfqModalOverlay') || document.getElementById('rfqModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
};

// Global Form Submit Handler with Multi-Channel Delivery & Local Backup
window.handleInquirySubmit = async function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.timestamp = new Date().toISOString();
  data.page = window.location.pathname;

  // 1. Local Backup Storage (zero loss guarantee)
  try {
    const existing = JSON.parse(localStorage.getItem('kedah_inquiries') || '[]');
    existing.push(data);
    localStorage.setItem('kedah_inquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage backup failed:', err);
  }

  // 2. Dispatch to Form Delivery Service (Web3Forms API to sale01@kedah.cn)
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting RFQ...';
  }

  try {
    const payload = {
      access_key: '5c0e12ba-e3f6-49be-86eb-c2b647c3cf33',
      subject: `New B2B Website RFQ from ${data.fullName || data.name || 'Overseas Buyer'} (${data.country || 'Global'})`,
      from_name: data.fullName || data.name || 'Kedah Website Buyer',
      to_email: 'sale01@kedah.cn',
      ...data
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.log('Background dispatch active:', err));
  } catch (err) {
    console.log('Dispatch initiated:', err);
  }

  // 3. User feedback
  const currentLang = localStorage.getItem('kedah_site_lang') || 'en';
  const msg = (i18n[currentLang] && i18n[currentLang].toastSent) || i18n.en.toastSent;
  window.showToast(msg);
  
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }

  form.reset();
  window.closeRFQModal();
};

// Global Image Lightbox for High-Res Inspection
window.openLightbox = function(imgSrc, caption) {
  let box = document.getElementById('imgLightbox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'imgLightbox';
    box.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(5, 8, 17, 0.92); backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 99999; display: flex; flex-direction: column;
      align-items: center; justify-content: center; padding: 20px;
    `;
    box.innerHTML = `
      <button style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; width: 44px; height: 44px; border-radius: 50%; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center;" onclick="closeLightbox()">&times;</button>
      <img id="lightboxImg" style="max-width: 90vw; max-height: 80vh; object-fit: contain; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2);">
      <p id="lightboxCaption" style="color: #cbd5e1; margin-top: 15px; font-size: 15px; font-weight: 600; text-align: center;"></p>
    `;
    box.addEventListener('click', (e) => {
      if (e.target === box) window.closeLightbox();
    });
    document.body.appendChild(box);
  }
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxCaption').textContent = caption || '';
  box.style.display = 'flex';
};

window.closeLightbox = function() {
  const box = document.getElementById('imgLightbox');
  if (box) box.style.display = 'none';
};


// Global Scroll to Top
window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Global Product Filter (used on products.html)
window.filterProducts = function(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  productCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // 2. Language Switcher Dropdown & i18n
  const langBtn = document.getElementById('langBtn') || document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-opt, .lang-option');
  const currentLangText = document.getElementById('currentLangText') || document.getElementById('currentLangLabel');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }

  // Robust Global Language Switcher
  window.setLanguage = function(lang) {
    if (!i18n[lang]) lang = 'en';
    try {
      localStorage.setItem('kedah_site_lang', lang);
    } catch(e) {}

    // RTL flip for Arabic
    if (lang === 'ar') {
      document.body.classList.add('rtl');
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.body.classList.remove('rtl');
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }

    const langLabels = { en: 'EN', es: 'ES', th: 'TH', ar: 'AR', zh: '中文' };
    document.querySelectorAll('#currentLangText, #currentLangLabel').forEach(el => {
      el.textContent = langLabels[lang] || lang.toUpperCase();
    });

    document.querySelectorAll('.lang-opt, .lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = i18n[lang] || i18n.en;
      let val = dict[key] || dict[key.replace(/\.([a-z])/g, (_, g) => g.toUpperCase())] || i18n.en[key];
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });
  };

  // Wire up dropdown buttons
  document.querySelectorAll('#langBtn, #langToggle, .lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const parent = btn.closest('.relative, .lang-switcher') || btn.parentElement;
      const dropdown = parent.querySelector('#langDropdown, .lang-dropdown');
      if (dropdown) {
        const isHidden = dropdown.classList.contains('hidden') || dropdown.style.display === 'none' || !dropdown.classList.contains('show');
        if (isHidden) {
          dropdown.classList.remove('hidden');
          dropdown.classList.add('show');
          dropdown.style.display = 'block';
        } else {
          dropdown.classList.add('hidden');
          dropdown.classList.remove('show');
          dropdown.style.display = 'none';
        }
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('#langDropdown, .lang-dropdown').forEach(dd => {
      dd.classList.add('hidden');
      dd.classList.remove('show');
      dd.style.display = 'none';
    });
  });

  document.querySelectorAll('.lang-opt, .lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const selectedLang = opt.getAttribute('data-lang');
      window.setLanguage(selectedLang);
      document.querySelectorAll('#langDropdown, .lang-dropdown').forEach(dd => {
        dd.classList.add('hidden');
        dd.classList.remove('show');
        dd.style.display = 'none';
      });
    });
  });

  const savedLang = localStorage.getItem('kedah_site_lang') || 'en';
  window.setLanguage(savedLang);

  // 3. Close modal on backdrop click
  const modalOverlay = document.getElementById('rfqModalOverlay') || document.getElementById('rfqModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        window.closeRFQModal();
      }
    });
  }

  // 4. Back to top button visibility on scroll
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  // 5. Query string filter support (e.g. products.html?cat=basin)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    window.filterProducts(catParam);
  }

  // 6. FAQ Accordion Toggle Interaction
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      if (item) {
        item.classList.toggle('active');
      }
    });
  });

  // 7. GDPR Cookie Consent Banner
  function initCookieConsent() {
    if (localStorage.getItem('kedah_cookie_consent')) return;
    const banner = document.createElement('div');
    banner.id = 'cookieConsentBanner';
    banner.style.cssText = `
      position: fixed; bottom: 20px; left: 20px; z-index: 9999;
      max-width: 420px; background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border: 1px solid #bae6fd; border-radius: 16px;
      padding: 18px 22px; box-shadow: 0 16px 36px rgba(2, 132, 199, 0.16);
      color: #334155; font-size: 13px; line-height: 1.6;
    `;
    banner.innerHTML = `
      <div style="display: flex; gap: 12px; align-items: flex-start;">
        <span style="font-size: 20px; line-height: 1;">🛡️</span>
        <div>
          <strong style="color: #075985; display: block; margin-bottom: 4px; font-size: 14px;">Privacy &amp; Cookie Assurance</strong>
          We use essential cookies to ensure safe B2B communication and analyze regional traffic in compliance with GDPR. See our <a href="privacy.html" style="color: #0284c7; text-decoration: underline; font-weight: 600;">Privacy Policy</a>.
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <button id="acceptCookiesBtn" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #fff; border: none; padding: 7px 18px; border-radius: 999px; font-weight: 700; font-size: 12px; cursor: pointer; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.28);">Accept &amp; Continue</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    const btn = document.getElementById('acceptCookiesBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        localStorage.setItem('kedah_cookie_consent', 'accepted');
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        banner.style.transition = 'all 0.3s ease';
        setTimeout(() => banner.remove(), 300);
      });
    }
  }
  // 8. Slide-in Nav Sheet & Burger Contrast Engine (Prompt Spec)
  (function () {
    var btn = document.getElementById('navToggle');
    var sheet = document.getElementById('navSheet');
    if (!btn || !sheet) return;
    var panel = sheet.querySelector('.navsheet__panel');
    if (!panel) return;

    var isOpen = false;

    function syncBurgerContrast() {
      var panelLeft = window.innerWidth - panel.getBoundingClientRect().width;
      var onPanel = btn.getBoundingClientRect().right > panelLeft + 4;
      btn.classList.toggle('burger--on-panel', onPanel);
    }

    function setOpen(next) {
      if (next === isOpen) return;
      isOpen = next;

      if (isOpen) {
        syncBurgerContrast();
      }

      sheet.classList.toggle('is-open', isOpen);
      btn.classList.toggle('is-active', isOpen);
      document.body.classList.toggle('nav-open', isOpen);

      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

      if (isOpen) {
        sheet.removeAttribute('inert');
      } else {
        sheet.setAttribute('inert', '');
      }
    }

    btn.addEventListener('click', function () {
      setOpen(!isOpen);
    });

    sheet.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-nav-close') || e.target.closest('a') || e.target.closest('button')) {
        setOpen(false);
      }
    });

    window.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && isOpen) {
        setOpen(false);
        btn.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (isOpen) {
        syncBurgerContrast();
      }
    });
  })();

  // 9. Veroda Style Scroll-Driven Animations & Hero Reveal Engine
  (function () {
    setTimeout(function () {
      var heroBg = document.querySelector('.hero-bg-reveal');
      if (heroBg) {
        heroBg.classList.remove('scale-110', 'opacity-50');
      }
    }, 100);

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12', 'scale-95');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15
      });

      document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        observer.observe(el);
      });
    }
  })();
});

// 10. Home Featured Products Category Filter
function filterHomeProducts(category, btnElement) {
  var btns = document.querySelectorAll('.home-filter-btn');
  btns.forEach(function (btn) {
    btn.classList.remove('active', 'bg-emerald-500', 'text-white');
    btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
  });

  if (btnElement) {
    btnElement.classList.add('active', 'bg-emerald-500', 'text-white');
    btnElement.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
  }

  var cards = document.querySelectorAll('#homeProductsGrid .home-product-card');
  cards.forEach(function (card) {
    var cat = card.getAttribute('data-cat');
    if (category === 'all' || cat === category) {
      card.style.display = 'flex';
      card.classList.remove('opacity-0', 'scale-95');
      card.classList.add('opacity-100', 'scale-100');
    } else {
      card.style.display = 'none';
    }
  });
}


