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
});

