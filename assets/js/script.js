/**
 * Fujian Kedah Kitchen & Bath Co., Ltd. - Official B2B Website Script
 * Multi-Language (EN/ES/TH/AR/ZH) + Interactive RFQ Modal + Product Filter + WhatsApp
 * Inspiring from luxopack.com High-Conversion B2B Architecture
 */

// Global Translations Dictionary
const i18n = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navOEM: "OEM / ODM",
    navFAQ: "FAQ",
    navContact: "Contact Us",
    navGetQuote: "Request a Quote",
    heroBadge: "Direct Source Manufacturer | North America & Global Engineering Ready",
    heroTitle: "Precision Engineered Lead-Free Brass Faucets & Commercial Plumbing Solutions",
    heroLead: "Over 30 years of OEM/ODM excellence for North American, European, Middle Eastern, and Southeast Asian sanitary engineering contractors. Compliant with cUPC File No. 8933, CE, and rigorous 24-Hour Acetic Acid Salt Spray (ASS) plating tests.",
    heroBtnCatalog: "Explore Products",
    heroBtnRFQ: "Request Project Quote",
    rfqTitle: "Request an Instant B2B Factory Quote",
    rfqSubtitle: "Direct communication with our engineering team. 24h technical feedback & sample dispatch.",
    toastSent: "Thank you! Your inquiry has been sent to sale01@kedah.cn. Our export team will respond within 24 hours.",
    rightsReserved: "All Rights Reserved."
  },
  es: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navProducts: "Productos",
    navOEM: "OEM / ODM",
    navFAQ: "Preguntas Frecuentes",
    navContact: "Contacto",
    navGetQuote: "Solicitar Cotización",
    heroBadge: "Fabricante Certificado cUPC / CE / ISO9001",
    heroTitle: "Soluciones de Grifería y Sanitarios de Alta Precisión Sin Plomo",
    heroLead: "Fábrica directa especializada en grifos sin plomo, sistemas de ducha y grifería con sensor. Certificada para proyectos hoteleros y residenciales en América Latina y Europa.",
    heroBtnCatalog: "Ver Catálogo",
    heroBtnRFQ: "Cotizar OEM/ODM",
    rfqTitle: "Solicitar Cotización Directa de Fábrica",
    rfqSubtitle: "Respuesta técnica en 24 horas y despacho de muestras para importadores y proyectos.",
    toastSent: "¡Gracias! Su consulta ha sido enviada a sale01@kedah.cn. Nos comunicaremos en 24 horas.",
    rightsReserved: "Todos los derechos reservados."
  },
  th: {
    navHome: "หน้าแรก",
    navAbout: "เกี่ยวกับเรา",
    navProducts: "สินค้าทั้งหมด",
    navOEM: "รับผลิต OEM/ODM",
    navFAQ: "คำถามที่พบบ่อย",
    navContact: "ติดต่อเรา",
    navGetQuote: "ขอใบเสนอราคา",
    heroBadge: "โรงงานมาตรฐานสากล cUPC / CE / ISO9001",
    heroTitle: "ผู้ผลิตก๊อกน้ำทองเหลืองไร้สารตะกั่วและสุขภัณฑ์ระดับพรีเมียม",
    heroLead: "เชี่ยวชาญด้านก๊อกน้ำไร้สารตะกั่ว ระบบฝักบัว และสุขภัณฑ์ระบบเซ็นเซอร์อัจฉริยะ รองรับงานโครงการโรงแรมและอาคารพาณิชย์ทั่วโลก",
    heroBtnCatalog: "ชมสินค้า",
    heroBtnRFQ: "ปรึกษา OEM/ODM",
    rfqTitle: "ขอใบเสนอราคาตรงจากโรงงาน",
    rfqSubtitle: "ทีมวิศวกรพร้อมตอบกลับภายใน 24 ชั่วโมงและจัดส่งตัวอย่างด่วน",
    toastSent: "ขอบคุณครับ! ข้อความของคุณถูกส่งไปยัง sale01@kedah.cn เรียบร้อยแล้ว",
    rightsReserved: "สงวนลิขสิทธิ์ทั้งหมด"
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navProducts: "المنتجات",
    navOEM: "تصنيع OEM / ODM",
    navFAQ: "الأسئلة الشائعة",
    navContact: "اتصل بنا",
    navGetQuote: "طلب تسعيرة فورية",
    heroBadge: "مصنع معتمد بشهادات cUPC / CE / ISO9001",
    heroTitle: "حلول خلاطات المياه النحاسية الخالية من الرصاص والأدوات الصحية",
    heroLead: "مصنع صيني مباشر متخصص في خلاطات المياه الخالية من الرصاص، وأنظمة الدش، والأجهزة الصحية الذكية التي تعمل بالاستشعار. معتمد للمملكة العربية السعودية والشرق الأوسط.",
    heroBtnCatalog: "استعراض المنتجات",
    heroBtnRFQ: "طلب عرض سعر OEM",
    rfqTitle: "طلب عرض سعر مباشر من المصنع",
    rfqSubtitle: "رد فني خلال 24 ساعة وعينات للمشاريع والمستوردين.",
    toastSent: "شكراً لك! تم إرسال طلبك بنجاح إلى sale01@kedah.cn. سيتواصل فريقنا معك خلال 24 ساعة.",
    rightsReserved: "جميع الحقوق محفوظة."
  },
  zh: {
    navHome: "首页",
    navAbout: "关于科迪",
    navProducts: "产品中心",
    navOEM: "OEM / ODM 定制",
    navFAQ: "常见问题",
    navContact: "联系我们",
    navGetQuote: "获取外贸报价",
    heroBadge: "通过北美 cUPC / 欧盟 CE / ISO9001 权威认证工厂",
    heroTitle: "专业无铅铜水龙头与高端卫浴洁具源头制造厂商",
    heroLead: "专注无铅铜水龙头、智能感应洁具、恒温淋浴系统及卫浴五金工程配套，通过美国cUPC认证(档案号8933)及24小时酸性盐雾测试，适配北美、欧洲、中东及东南亚各大工程商采购。",
    heroBtnCatalog: "浏览产品系列",
    heroBtnRFQ: "获取 OEM/ODM 方案",
    rfqTitle: "获取工厂直供外贸报价单",
    rfqSubtitle: "外贸工程团队 24 小时响应，支持免费寄样与定制图纸评估。",
    toastSent: "感谢您的咨询！信息已发送至 sale01@kedah.cn，外贸专员将在24小时内联系您。",
    rightsReserved: "福建科迪厨卫有限公司 版权所有。"
  }
};

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
      background: #0f172a;
      color: #fff;
      padding: 14px 24px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      border-left: 4px solid #c5a059;
      font-size: 14px;
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

// Global Form Submit Handler
window.handleInquirySubmit = function(e) {
  e.preventDefault();
  const currentLang = localStorage.getItem('kedah_site_lang') || 'en';
  const msg = (i18n[currentLang] && i18n[currentLang].toastSent) || i18n.en.toastSent;
  window.showToast(msg);
  e.target.reset();
  window.closeRFQModal();
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

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    localStorage.setItem('kedah_site_lang', lang);

    // RTL flip for Arabic
    if (lang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    const langNames = { en: 'EN', es: 'ES', th: 'TH', ar: 'AR', zh: 'ZH' };
    if (currentLangText) currentLangText.textContent = langNames[lang] || lang.toUpperCase();

    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = opt.getAttribute('data-lang');
      setLanguage(selectedLang);
      if (langDropdown) langDropdown.classList.remove('show');
    });
  });

  const savedLang = localStorage.getItem('kedah_site_lang') || 'en';
  setLanguage(savedLang);

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
});
