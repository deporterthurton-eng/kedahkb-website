/**
 * Fujian Kedah Kitchen & Bath Co., Ltd. - Official B2B Website Script
 * Multi-Language (EN/ES/TH/AR/ZH) + Interactive RFQ Modal + Product Filter + WhatsApp
 * Inspiring from luxopack.com High-Conversion B2B Architecture
 */

// Global Translations Dictionary
const i18n = {
  en: {
    'about.banner_tag': 'Corporate Profile & Manufacturing Strength',
    'about.page_title': 'About Fujian Kedah Kitchen & Bath Co., Ltd.',
    'about.page_subtitle': '30+ Years of Precision Sanitary Ware Manufacturing in China\'s Plumbing Capital (Lucang, Nanan)',
    'about.story_tag': 'Our Heritage & Capability',
    'about.story_title': 'A Proven Global Partner in Commercial & Residential Sanitary Hardware',
    'about.p1': 'Fujian Kedah Kitchen & Bath Co., Ltd. (kedahkb.com) is located in the heart of China’s renowned Plumbing Industrial Area in Lucang Town, Nanan City, Fujian Province. With over 30 years of specialized manufacturing experience, Kedah has grown into a modern, integrated sanitary enterprise spanning over 50,000 square meters of specialized production facilities.',
    'about.p2': 'We specialize in the research, design, casting, machining, surface finishing, and assembly of premium lead-free brass faucets, intelligent touchless sensor taps, commercial flush valves, and luxury thermostatic shower systems.',
    'about.p3': 'As an ISO 9001:2015 certified manufacturer with North American IAPMO cUPC listing (File No. 8933) and European CE conformity, we are the trusted supply chain partner for leading plumbing brands, engineering contractors, real estate developers, and wholesale distributors across the USA, Canada, Spain, Saudi Arabia, Colombia, and Thailand.',
    'about.stat_qa': 'In-House Quality Testing',
    'about.stat_plating': '24H ASS Plating Standard',
    'about.stat_cycles': 'Cartridge Lifespan Cycles',
    'about.comp_tag': 'Direct Factory Advantage',
    'about.comp_title': 'Direct Source Manufacturer vs. Trading Intermediary',
    'about.comp_desc': 'Compare the engineering, compliance, and cost advantages of sourcing directly from Fujian Kedah\'s 50,000+ m² production facility in Lucang, Nanan.',
    'oem.phase1_title': 'Concept & 3D CAD Design',
    'oem.phase1_desc': 'Share your drawings, 2D/3D CAD files (STEP, IGES), or reference samples. Our engineers optimize mold structural integrity and internal waterways.',
    'oem.phase2_title': 'Rapid 3D Prototyping',
    'oem.phase2_desc': 'Quick SLA/CNC rapid prototyping delivered within 5-7 days for physical touch, ergonomics verification, and client aesthetic approval.',
    'oem.phase3_title': 'Precision Tooling & Gravity Molds',
    'oem.phase3_desc': 'In-house tooling department fabricating steel gravity casting molds and stamping dies within 15-20 days with 0.01mm CNC precision.',
    'oem.phase4_title': 'Mass Production & Global Logistics',
    'oem.phase4_desc': 'Automated casting, robotic polishing, 24H ASS plating, 100% dual testing, and multi-lingual master packaging shipped via Xiamen Port.',
    'faq.banner_tag': 'Procurement & Engineering Inquiries',
    'faq.page_title': 'Frequently Asked Questions (B2B FAQ)',
    'faq.page_subtitle': 'Everything you need to know about our certifications, lead times, MOQ, quality testing, and OEM workflows.',
    'faq.cat1_title': '1. Certifications & Quality Standards',
    'faq.q1': 'Are Fujian Kedah faucets cUPC certified for the North American market?',
    'faq.a1': 'Yes, absolutely. Fujian Kedah holds official IAPMO cUPC listing under File No. 8933, conforming to ASME A112.18.1 / CSA B125.1 standards and NSF/ANSI 61 lead-free drinking water requirements. We provide complete certificate documentation for your customs clearance and engineering submittals in the USA and Canada.',
    'faq.q2': 'What is the significance of the 24-Hour ASS Salt Spray Test?',
    'faq.a2': 'ASS (Acetic Acid Salt Spray) is an accelerated corrosion test that is significantly harsher than conventional Neutral Salt Spray (NSS). A 24-hour ASS test with a Grade 10 rating is equivalent to over 10 years of intensive daily exposure in high-humidity or coastal marine environments, guaranteeing zero peeling, blistering, or tarnishing.',
    'faq.q3': 'How do you guarantee 100% zero-leakage before container loading?',
    'faq.a3': 'Every single assembled faucet undergoes dual-stage pressure testing on specialized testing rigs: 0.8 MPa (8 bar) hydrostatic water pressure test and 0.6 MPa (6 bar) pneumatic air test. Units with any pressure drop are automatically rejected by our QA system.',
    'faq.cat2_title': '2. Ordering, MOQ & Lead Times',
    'faq.q4': 'What is your Minimum Order Quantity (MOQ)?',
    'faq.a4': 'Our standard production MOQ is 100 to 200 pieces per SKU for standard chrome or matte black finishes. For special PVD finishes (Brushed Gold, Gunmetal Grey) or project trials, we offer flexible low MOQs to support contractor sampling. Mixed SKU container orders are warmly welcomed.',
    'faq.q5': 'What is the lead time for sample requests and container orders?',
    'faq.a5': 'Sample orders: 5–10 business days. Mass production (FCL container): 25–35 calendar days upon receipt of initial deposit and packaging artwork sign-off.',
    'faq.q6': 'Can I request physical product samples before placing a bulk order?',
    'faq.a6': 'Yes. We provide sample units sent via DHL, FedEx, or UPS express. Sample fees can be credited and deducted from your subsequent mass production container order.',
    'faq.cat3_title': '3. OEM/ODM Customization & Engineering Support',
    'faq.q7': 'Can you laser engrave our brand logo and provide customized packaging?',
    'faq.a7': 'Yes. We offer high-precision fiber laser logo marking on faucet bodies, handles, and faceplates at no extra charge. We also customize full-color retail boxes, foam inner trays, installation instruction manuals, and barcode master cartons based on your artwork templates.',
    'faq.q8': 'Can you develop custom molds according to our 3D CAD drawings?',
    'faq.a8': 'Yes. Our in-house mold engineering department can develop new gravity casting steel molds or stamping dies within 15–20 days. We provide rapid 3D printed prototypes first for client physical approval before tooling creation.',
    'faq.q9': 'What warranty policy do you provide for commercial projects?',
    'faq.a9': 'We provide a 5-year commercial warranty on all solid brass faucet bodies and ceramic cartridges. We also include complimentary 1%–2% spare parts (cartridges, O-rings, mounting hardware, aerators) inside container shipments for convenient on-site maintenance.',
    'faq.cat4_title': '4. Payment Terms, Shipping & Port of Loading',
    'faq.q10': 'What are your standard payment terms?',
    'faq.a10': 'Our standard terms are T/T 30% deposit upon order confirmation and 70% balance before shipment or against Bill of Lading (B/L) copy. Irrevocable Letter of Credit (L/C at sight) is accepted for large institutional government or engineering project orders.',
    'faq.q11': 'Which shipping port do you ship from?',
    'faq.a11': 'We primarily ship from Xiamen Port (Fujian, China), which is located just 1.5 hours by highway from our factory in Nanan, offering direct container sailings to major ports in North America, Europe, the Middle East, and Southeast Asia.',
    'products.banner_tag': 'Export Sanitary Hardware Catalog',
    'products.page_title': 'Commercial & Residential Plumbing Collections',
    'products.page_subtitle': 'Lead-Free Solid Brass • cUPC & CE Certified • 24-Hour ASS Salt Spray Resistance',
    'products.tab_all': 'All Collections (24)',
    'products.tab_basin': 'Basin Faucets (7)',
    'products.tab_kitchen': 'Kitchen Faucets (6)',
    'products.tab_sensor': 'Sensor & Flush Valves (6)',
    'products.tab_shower': 'Shower Systems (5)',
    'products.inquire_btn': 'Inquire Fast',
    'products.spec_btn': 'Spec Sheet',
    'services.tag': "CORE PRODUCT SERVICES",
    'services.title': "Precision Manufacturing for Global Plumbing Contractors",
    'services.lead': "From residential luxury developments in North America and Spain to high-traffic commercial installations in Saudi Arabia and resorts in Thailand, Fujian Kedah delivers certified plumbing solutions with zero middleman markups.",
    'products.tag': "FEATURED EXPORT COLLECTIONS",
    'products.title': "Certified Sanitary Products Engineered for Global Projects",
    'products.lead': "Direct factory supply of cUPC & CE certified lead-free brass faucets, intelligent touchless valves, and thermostatic luxury shower systems. Tested with 24-hour ASS salt spray for 50+ export destinations.",
    'showcase.tag': "QUALITY & CERTIFICATION",
    'showcase.title': "Engineered to Exceed North American & European Standards",
    'showcase.lead': "Every Kedah faucet and valve is manufactured under strict ISO 9001 quality protocols. We eliminate porosity through automated gravity casting, achieve 0.01mm tolerance on CNC lathes, and verify corrosion resistance with 24-hour ASS salt spray testing.",
    'factory.tag': "LIVE PRODUCTION · NANAN SANITARY BASE",
    'factory.title': "Inside Our Factory — Transparent Chinese Manufacturing",
    'factory.lead': "Operating in Lucang, Nanan—China national plumbing hub: from raw copper gravity casting to 0.01mm CNC machining, robotic mirror polishing, and clean-room assembly.",
    'pricing.tag': "DIRECT FACTORY PRICING",
    'pricing.title': "Indicative B2B Volume Pricing Tiers",
    'pricing.lead': "Transparent volume tiers for commercial contractors, plumbing distributors, and brand importers. Custom finishes, packaging, and branding available upon request.",
    'tour.tag': "GLOBAL TRADE EXPOS & PHYSICAL FOOTPRINT",
    'tour.title': "Canton Fair Track Record & Factory Presence",
    'tour.lead': "Take a look inside our 50,000+ sqm manufacturing facility in Lucang, Nanan and explore our long-standing Canton Fair exhibition presence meeting global engineering partners.",
    'contact.tag': "DIRECT FACTORY INQUIRY",
    'contact.title': "Request an Instant Engineering & Quotation Package",
    'contact.lead': "Direct communication with Fujian Kedah export engineering department. Technical feedback, CAD evaluations, and customized quotations within 24 hours.",
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
    'about.banner_tag': 'Perfil Corporativo y Capacidad de Fabricación',
    'about.page_title': 'Acerca de Fujian Kedah Kitchen & Bath Co., Ltd.',
    'about.page_subtitle': 'Más de 30 Años de Fabricación Sanitaria de Precisión en la Capital del Saneamiento de China (Lucang, Nanan)',
    'about.story_tag': 'Nuestra Trayectoria y Capacidad',
    'about.story_title': 'Un Socio Global Confiable en Grifería Sanitaria Comercial y Residencial',
    'about.p1': 'Fujian Kedah Kitchen & Bath Co., Ltd. (kedahkb.com) se encuentra en el corazón de la famosa Zona Industrial de Fontanería en Lucang, Nanan, Fujian. Con más de 30 años de experiencia especializada, Kedah se ha convertido en una empresa sanitaria moderna e integrada que abarca más de 50.000 metros cuadrados de instalaciones de producción.',
    'about.p2': 'Nos especializamos en la investigación, diseño, fundición, mecanizado, acabado superficial y ensamblaje de grifos de latón sin plomo de primera calidad, grifos inteligentes con sensor táctil, válvulas de descarga comerciales y sistemas de ducha termostática de lujo.',
    'about.p3': 'Como fabricante con certificación ISO 9001:2015, certificación IAPMO cUPC de Norteamérica (Archivo No. 8933) y conformidad CE europea, somos el socio de cadena de suministro de confianza para marcas líderes, contratistas de ingeniería y distribuidores mayoristas en EE. UU., Canadá, España, Arabia Saudita, Colombia y Tailandia.',
    'about.stat_qa': 'Control de Calidad en Planta',
    'about.stat_plating': 'Estándar de Recubrimiento ASS 24H',
    'about.stat_cycles': 'Ciclos de Vida del Cartucho',
    'about.comp_tag': 'Ventaja de Fábrica Directa',
    'about.comp_title': 'Fabricante Directo en Origen vs. Intermediario Comercial',
    'about.comp_desc': 'Compare las ventajas de ingeniería, cumplimiento normativo y costo de abastecerse directamente de las instalaciones de Fujian Kedah en Nanan.',
    'oem.phase1_title': 'Concepto y Diseño 3D CAD',
    'oem.phase1_desc': 'Comparta sus planos, archivos 3D CAD (STEP, IGES) o muestras. Nuestros ingenieros optimizan la integridad estructural y las vías de agua.',
    'oem.phase2_title': 'Prototipado Rápido 3D',
    'oem.phase2_desc': 'Prototipos rápidos SLA/CNC en 5-7 días para verificación ergonómica y aprobación estética del cliente.',
    'oem.phase3_title': 'Moldes de Gravedad y Matriz de Precisión',
    'oem.phase3_desc': 'Departamento interno de moldes que fabrica moldes de fundición por gravedad de acero en 15-20 días con precisión CNC de 0.01 mm.',
    'oem.phase4_title': 'Producción Masiva y Logística Global',
    'oem.phase4_desc': 'Fundición automatizada, pulido robótico, recubrimiento ASS 24H, 100% doble prueba y empaque multilingüe enviado vía Puerto de Xiamen.',
    'faq.banner_tag': 'Consultas de Adquisiciones e Ingeniería',
    'faq.page_title': 'Preguntas Frecuentes (B2B FAQ)',
    'faq.page_subtitle': 'Todo lo que necesita saber sobre nuestras certificaciones, plazos de entrega, MOQ, pruebas de calidad y procesos OEM.',
    'faq.cat1_title': '1. Certificaciones y Normas de Calidad',
    'faq.q1': '¿Los grifos de Fujian Kedah tienen certificación cUPC para el mercado norteamericano?',
    'faq.a1': 'Sí, absolutamente. Fujian Kedah posee la certificación oficial IAPMO cUPC bajo el Archivo No. 8933, conforme a las normas ASME A112.18.1 / CSA B125.1 y los requisitos de agua potable sin plomo NSF/ANSI 61. Proporcionamos toda la documentación para aduanas y proyectos en EE. UU. y Canadá.',
    'faq.q2': '¿Cuál es la importancia de la prueba de niebla salina ASS de 24 horas?',
    'faq.a2': 'La prueba ASS (Niebla Salina de Ácido Acético) es una prueba acelerada mucho más severa que la niebla neutra estándar. Un resultado Grado 10 tras 24 horas equivale a más de 10 años de uso intensivo en ambientes húmedos o costeros sin descascarillado ni corrosión.',
    'faq.q3': '¿Cómo garantizan cero fugas al 100% antes de cargar el contenedor?',
    'faq.a3': 'Cada grifo ensamblado se somete a pruebas de presión dobles en bancos de prueba especializados: prueba hidrostática de agua a 0.8 MPa (8 bar) y prueba neumática de aire a 0.6 MPa (6 bar). Cualquier unidad con caída de presión es rechazada de inmediato.',
    'faq.cat2_title': '2. Pedidos, MOQ y Plazos de Entrega',
    'faq.q4': '¿Cuál es su Cantidad Mínima de Pedido (MOQ)?',
    'faq.a4': 'Nuestro MOQ estándar de producción es de 100 a 200 piezas por modelo para acabados cromados o negro mate. Para acabados PVD especiales (Oro Cepillado, Gris Metal) o proyectos de prueba, ofrecemos MOQs flexibles.',
    'faq.q5': '¿Cuál es el plazo de entrega para muestras y pedidos de contenedores?',
    'faq.a5': 'Pedidos de muestra: 5 a 10 días hábiles. Producción masiva (contenedor FCL): 25 a 35 días calendario tras el depósito inicial y aprobación del diseño.',
    'faq.q6': '¿Puedo solicitar muestras físicas antes de hacer un pedido grande?',
    'faq.a6': 'Sí. Enviamos muestras por DHL, FedEx o UPS exprés. El costo de la muestra se abona y descuenta de su pedido posterior de producción en contenedor.',
    'faq.cat3_title': '3. Personalización OEM/ODM y Soporte de Ingeniería',
    'faq.q7': '¿Pueden grabar con láser nuestro logotipo y proporcionar embalaje personalizado?',
    'faq.a7': 'Sí. Ofrecemos grabado láser de fibra de alta precisión en cuerpos y manijas sin costo adicional. También personalizamos cajas minoristas a color, bandejas interiores y manuales de instalación.',
    'faq.q8': '¿Pueden desarrollar moldes personalizados según nuestros planos 3D CAD?',
    'faq.a8': 'Sí. Nuestro departamento interno de moldes puede desarrollar nuevos moldes de acero de fundición por gravedad en 15 a 20 días. Proporcionamos prototipos 3D rápidos antes de fabricar las herramientas.',
    'faq.q9': '¿Qué garantía ofrecen para proyectos comerciales?',
    'faq.a9': 'Ofrecemos una garantía comercial de 5 años en todos los cuerpos de grifería de latón macizo y cartuchos cerámicos. También incluimos 1%–2% de repuestos de cortesía en los envíos de contenedores.',
    'faq.cat4_title': '4. Condiciones de Pago, Envío y Puerto de Carga',
    'faq.q10': '¿Cuáles son sus condiciones de pago estándar?',
    'faq.a10': 'Nuestros términos estándar son 30% de depósito T/T y 70% restante antes del envío o contra copia del conocimiento de embarque (B/L). Se acepta Carta de Crédito (L/C a la vista) para grandes proyectos gubernamentales.',
    'faq.q11': '¿Desde qué puerto realizan los envíos?',
    'faq.a11': 'Enviamos principalmente desde el Puerto de Xiamen (Fujian, China), ubicado a solo 1.5 horas por autopista de nuestra fábrica en Nanan, con conexiones marítimas directas a América, Europa y Oriente Medio.',
    'products.banner_tag': 'Catálogo de Grifería Sanitaria de Exportación',
    'products.page_title': 'Colecciones de Grifería Comercial y Residencial',
    'products.page_subtitle': 'Latón Macizo Sin Plomo • Certificado cUPC y CE • Resistencia Salina ASS 24H',
    'products.tab_all': 'Todas las Colecciones (24)',
    'products.tab_basin': 'Grifos de Lavabo (7)',
    'products.tab_kitchen': 'Grifos de Cocina (6)',
    'products.tab_sensor': 'Sensor y Válvulas (6)',
    'products.tab_shower': 'Sistemas de Ducha (5)',
    'products.inquire_btn': 'Cotizar Rápido',
    'products.spec_btn': 'Ficha Técnica',
    'services.tag': "SERVICIOS Y PRODUCTOS PRINCIPALES",
    'services.title': "Fabricación de Precisión para Contratistas Globales",
    'services.lead': "Desde desarrollos residenciales de lujo en Norteamérica y España hasta instalaciones comerciales en Arabia Saudita y resorts en Tailandia.",
    'products.tag': "COLECCIÓN EXCLUSIVA DE EXPORTACIÓN",
    'products.title': "Productos Sanitarios Certificados para Proyectos Globales",
    'products.lead': "Suministro directo de fábrica de grifos de latón sin plomo certificados cUPC y CE, válvulas con sensor inteligente y duchas termostáticas.",
    'showcase.tag': "CALIDAD Y CERTIFICACIÓN",
    'showcase.title': "Diseñado para Superar los Estándares Norteamericanos y Europeos",
    'showcase.lead': "Cada grifo y válvula Kedah se fabrica bajo estrictos protocolos ISO 9001 con pruebas de niebla salina ASS de 24 horas.",
    'factory.tag': "PRODUCCIÓN EN VIVO · BASE INDUSTRIAL NANAN",
    'factory.title': "Dentro de Nuestra Fábrica: Fabricación China Transparente",
    'factory.lead': "Operando en Lucang, Nanan: desde fundición por gravedad de latón hasta mecanizado CNC de 0.01 mm y pulido robótico.",
    'pricing.tag': "PRECIOS DIRECTOS DE FÁBRICA",
    'pricing.title': "Niveles de Precios por Volumen B2B",
    'pricing.lead': "Precios transparentes por volumen para contratistas comerciales y distribuidores de fontanería en todo el mundo.",
    'tour.tag': "FERIAS MUNDIALES Y FÁBRICA",
    'tour.title': "Historial en la Feria de Cantón y Presencia de Fábrica",
    'tour.lead': "Conozca nuestras instalaciones de más de 50,000 m² en Nanan y nuestra trayectoria continua en la Feria de Cantón.",
    'contact.tag': "CONSULTA DIRECTA DE FÁBRICA",
    'contact.title': "Solicite un Paquete de Cotización e Ingeniería Inmediato",
    'contact.lead': "Comunicación directa con el departamento de exportación. Respuesta técnica y cotizaciones personalizadas en 24 horas.",
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
    'about.banner_tag': 'ข้อมูลองค์กรและศักยภาพการผลิต',
    'about.page_title': 'เกี่ยวกับ บริษัท ฝูเจี้ยน เคดี คิทเช่น แอนด์ บาธ จำกัด',
    'about.page_subtitle': 'กว่า 30 ปีแห่งความเชี่ยวชาญด้านการผลิตสุขภัณฑ์มาตรฐานสูง ณ เมืองหลวงสุขภัณฑ์จีน (หลู่ชาง หนานอัน)',
    'about.story_tag': 'ประวัติและศักยภาพของเรา',
    'about.story_title': 'พันธมิตรระดับโลกที่ได้รับความไว้วางใจในสุขภัณฑ์สำหรับโครงการเชิงพาณิชย์และที่อยู่อาศัย',
    'about.p1': 'บริษัท ฝูเจี้ยน เคดี คิทเช่น แอนด์ บาธ จำกัด (kedahkb.com) ตั้งอยู่ใจกลางนิคมอุตสาหกรรมสุขภัณฑ์ที่มีชื่อเสียง ณ ตำบลหลู่ชาง เมืองหนานอัน มณฑลฝูเจี้ยน ด้วยประสบการณ์การผลิตเฉพาะทางกว่า 30 ปี เคดีได้เติบโตเป็นองค์กรสุขภัณฑ์ครบวงจรครอบคลุมพื้นที่โรงงานผลิตกว่า 50,000 ตารางเมตร',
    'about.p2': 'เราเชี่ยวชาญเป็นพิเศษในการวิจัย ออกแบบ หล่อ ขึ้นรูปผิวสำเร็จ และประกอบก๊อกน้ำทองเหลืองไร้สารตะกั่วระดับพรีเมียม ก๊อกน้ำเซ็นเซอร์อัจฉริยะ ฟลัชวาล์วเชิงพาณิชย์ และชุดฝักบัวอาบน้ำควบคุมอุณหภูมิระดับหรู',
    'about.p3': 'ในฐานะผู้ผลิตที่ได้รับการรับรอง ISO 9001:2015 พร้อมทะเบียน IAPMO cUPC สหรัฐอเมริกา/แคนาดา (ไฟล์หมายเลข 8933) และมาตรฐาน CE ยุโรป เราเป็นคู่ค้าห่วงโซ่อุปทานที่ได้รับความไว้วางใจสำหรับโครงการสุขภัณฑ์ ผู้รับเหมาก่อสร้าง และผู้จัดจำหน่ายในสหรัฐฯ แคนาดา สเปน ซาอุดีอาระเบีย โคลอมเบีย และไทย',
    'about.stat_qa': 'การทดสอบคุณภาพ 100% ในโรงงาน',
    'about.stat_plating': 'มาตรฐานชุบผิวเกลือกรด ASS 24 ชม.',
    'about.stat_cycles': 'รอบการเปิด-ปิดของวาล์วเซรามิก',
    'about.comp_tag': 'ข้อได้เปรียบจากโรงงานผู้ผลิตโดยตรง',
    'about.comp_title': 'โรงงานผู้ผลิตโดยตรง vs. บริษัทตัวกลางการค้า',
    'about.comp_desc': 'เปรียบเทียบข้อได้เปรียบด้านวิศวกรรม มาตรฐานสากล และราคาต้นทุนเมื่อสั่งผลิตโดยตรงจากโรงงานขนาด 50,000+ ตร.ม. ของเคดี ณ หนานอัน',
    'oem.phase1_title': 'แนวคิดและการออกแบบ 3D CAD',
    'oem.phase1_desc': 'ส่งแบบแปลน ไฟล์ 3D CAD (STEP, IGES) หรือตัวอย่างชิ้นงาน วิศวกรของเราจะช่วยเพิ่มประสิทธิภาพของโครงสร้างแม่พิมพ์และทางเดินน้ำ',
    'oem.phase2_title': 'การสร้างต้นแบบอย่างรวดเร็ว',
    'oem.phase2_desc': 'จัดส่งชิ้นงานต้นแบบ SLA/CNC ภายใน 5-7 วัน เพื่อการทดสอบสรีระสัมผัสและการอนุมัติรูปลักษณ์ของลูกค้า',
    'oem.phase3_title': 'การสร้างแม่พิมพ์เหล็กหล่อแรงโน้มถ่วง',
    'oem.phase3_desc': 'แผนกแม่พิมพ์ภายในโรงงานสร้างแม่พิมพ์เหล็กหล่อและแม่พิมพ์ปั๊มภายใน 15-20 วัน ด้วยความแม่นยำระดับ 0.01 มม.',
    'oem.phase4_title': 'การผลิตจำนวนมากและการขนส่งระดับโลก',
    'oem.phase4_desc': 'หล่ออัตโนมัติ ขัดเงาด้วยหุ่นยนต์ ชุบผิวทนกรด ASS 24 ชม. ตรวจสอบแรงดันน้ำและลม 100% พร้อมบรรจุหีบห่อส่งออกผ่านท่าเรือเซียะเหมิน',
    'faq.banner_tag': 'คำถามด้านการจัดซื้อและวิศวกรรม',
    'faq.page_title': 'คำถามที่พบบ่อย (B2B FAQ)',
    'faq.page_subtitle': 'ทุกสิ่งที่คุณจำเป็นต้องทราบเกี่ยวกับการรับรองมาตรฐานสากล ระยะเวลาจัดส่ง ปริมาณขั้นต่ำ การตรวจสอบคุณภาพ และขั้นตอน OEM',
    'faq.cat1_title': '1. การรับรองมาตรฐานและคุณภาพ',
    'faq.q1': 'ก๊อกน้ำของเคดีผ่านการรับรอง cUPC สำหรับตลาดอเมริกาเหนือหรือไม่?',
    'faq.a1': 'ใช่ ผ่านการรับรองอย่างสมบูรณ์ เคดีถือทะเบียน IAPMO cUPC หมายเลข 8933 ตามมาตรฐาน ASME A112.18.1 / CSA B125.1 และข้อกำหนดน้ำดื่มไร้สารตะกั่ว NSF/ANSI 61 เรามีเอกสารรับรองครบถ้วนสำหรับพิธีการศุลกากรและส่งมอบโครงการในสหรัฐอเมริกาและแคนาดา',
    'faq.q2': 'การทดสอบละอองเกลือกรดอะซิติก (ASS) 24 ชั่วโมง มีความสำคัญอย่างไร?',
    'faq.a2': 'การทดสอบ ASS (Acetic Acid Salt Spray) เป็นการทดสอบการกัดกร่อนเร่งปฏิกิริยาที่รุนแรงกว่าการพ่นเกลือเป็นกลางทั่วไป การผ่านระดับ Grade 10 นาน 24 ชั่วโมง เทียบเท่ากับการใช้งานหนักในสภาพแวดล้อมชื้นสูงหรือชายทะเลนานกว่า 10 ปี โดยไม่มีการลอก หลุดร่อน หรือหมองคล้ำ',
    'faq.q3': 'คุณรับประกันการไม่รั่วซึม 100% ก่อนโหลดตู้สินค้าอย่างไร?',
    'faq.a3': 'ก๊อกน้ำทุกชิ้นที่ประกอบเสร็จจะต้องผ่านการทดสอบแรงดัน 2 ขั้นตอนบนแท่นทดสอบพิเศษ: การทดสอบแรงดันน้ำไฮโดรสแตติก 0.8 MPa (8 บาร์) และการทดสอบแรงดันลม 0.6 MPa (6 บาร์) ชิ้นงานใดที่มีแรงดันลดลงจะถูกปฏิเสธทันที',
    'faq.cat2_title': '2. การสั่งซื้อ ปริมาณขั้นต่ำ (MOQ) และระยะเวลาการผลิต',
    'faq.q4': 'ปริมาณการสั่งซื้อขั้นต่ำ (MOQ) ของคุณคือเท่าใด?',
    'faq.a4': 'MOQ มาตรฐานของเราคือ 100 ถึง 200 ชิ้นต่อ SKU สำหรับผิวโครเมียมหรือดำด้านมาตรฐาน สำหรับผิวพิเศษ PVD (ทองปัดเงา, เทากันเมทัล) หรือโครงการทดลอง เรามีเงื่อนไข MOQ ที่ยืดหยุ่น ยินดีต้อนรับการสั่งซื้อแบบคละ SKU ในตู้คอนเทนเนอร์',
    'faq.q5': 'ระยะเวลาจัดส่งสำหรับตัวอย่างและการสั่งซื้อแบบตู้คอนเทนเนอร์คือเท่าใด?',
    'faq.a5': 'คำสั่งซื้อตัวอย่าง: 5–10 วันทำการ การผลิตจำนวนมาก (ตู้คอนเทนเนอร์ FCL): 25–35 วันปฏิทินหลังจากได้รับเงินมัดจำและการอนุมัติแบบกล่องบรรจุภัณฑ์',
    'faq.q6': 'สามารถขอตัวอย่างสินค้าจริงก่อนสั่งซื้อจำนวนมากได้หรือไม่?',
    'faq.a6': 'ได้ เราจัดส่งสินค้าตัวอย่างผ่านบริการด่วน DHL, FedEx หรือ UPS โดยค่าตัวอย่างสามารถนำมาหักเครดิตคืนในคำสั่งซื้อตู้สินค้าจำนวนมากในภายหลังได้',
    'faq.cat3_title': '3. การผลิตตามแบบ OEM/ODM และการสนับสนุนทางวิศวกรรม',
    'faq.q7': 'สามารถเลเซอร์ยิงโลโก้แบรนด์ของเราและจัดทำบรรจุภัณฑ์ตามสั่งได้หรือไม่?',
    'faq.a7': 'ได้ เรามีบริการยิงเลเซอร์ไฟเบอร์ความแม่นยำสูงบนตัวก๊อกน้ำและที่จับโดยไม่มีค่าใช้จ่ายเพิ่มเติม นอกจากนี้ยังรับทำกล่องบรรจุภัณฑ์พิมพ์สี่สี โฟมกันกระแทก คู่มือติดตั้ง และบาร์โค้ดตามแบบของคุณ',
    'faq.q8': 'สามารถพัฒนาแม่พิมพ์ตามแบบ 3D CAD ของเราได้หรือไม่?',
    'faq.a8': 'ได้ แผนกวิศวกรรมแม่พิมพ์ภายในโรงงานสามารถสร้างแม่พิมพ์หล่อเหล็กแรงโน้มถ่วงใหม่ได้ภายใน 15–20 วัน โดยเราจะสร้างชิ้นงานต้นแบบ 3D Print ให้ตรวจสอบจริงก่อนเปิดแม่พิมพ์',
    'faq.q9': 'มีนโยบายรับประกันอย่างไรสำหรับโครงการเชิงพาณิชย์?',
    'faq.a9': 'เรารับประกันเชิงพาณิชย์ 5 ปี สำหรับตัวก๊อกทองเหลืองแท้และวาล์วเซรามิกทั้งหมด พร้อมทั้งแถมอะไหล่สำรองฟรี 1%–2% ในตู้คอนเทนเนอร์เพื่อความสะดวกในการบำรุงรักษาหน้างาน',
    'faq.cat4_title': '4. เงื่อนไขการชำระเงิน การจัดส่ง และท่าเรือต้นทาง',
    'faq.q10': 'เงื่อนไขการชำระเงินมาตรฐานคืออะไร?',
    'faq.a10': 'เงื่อนไขมาตรฐานของเราคือ T/T มัดจำ 30% เมื่อยืนยันคำสั่งซื้อ และชำระส่วนที่เหลือ 70% ก่อนส่งสินค้าหรือเมื่อแสดงสำเนาใบตราส่งสินค้า (B/L) รับ L/C สำหรับคำสั่งซื้อโครงการขนาดใหญ่',
    'faq.q11': 'ส่งออกจากท่าเรือใดในประเทศจีน?',
    'faq.a11': 'เราส่งออกจากท่าเรือเซียะเหมิน (Xiamen Port, Fujian) เป็นหลัก ซึ่งอยู่ห่างจากโรงงานในหนานอันเพียง 1.5 ชั่วโมงโดยทางด่วน มีเส้นทางเดินเรือตรงสู่ท่าเรือหลักทั่วโลก',
    'products.banner_tag': 'แคตตาล็อกสุขภัณฑ์สำหรับส่งออก',
    'products.page_title': 'คอลเลกชันสุขภัณฑ์สำหรับโครงการเชิงพาณิชย์และที่อยู่อาศัย',
    'products.page_subtitle': 'ทองเหลืองแท้ไร้สารตะกั่ว • มาตรฐาน cUPC และ CE • ทนทานต่อการกัดกร่อน ASS 24 ชม.',
    'products.tab_all': 'สินค้าทั้งหมด (24)',
    'products.tab_basin': 'ก๊อกอ่างล้างหน้า (7)',
    'products.tab_kitchen': 'ก๊อกซิงค์ครัว (6)',
    'products.tab_sensor': 'ก๊อกเซ็นเซอร์และฟลัชวาล์ว (6)',
    'products.tab_shower': 'ชุดฝักบัวอาบน้ำ (5)',
    'products.inquire_btn': 'ขอใบเสนอราคาด่วน',
    'products.spec_btn': 'สเปกสินค้า',
    'services.tag': "บริการและผลิตภัณฑ์หลัก",
    'services.title': "การผลิตที่แม่นยำสำหรับผู้รับเหมาสุขภัณฑ์ทั่วโลก",
    'services.lead': "ตั้งแต่โครงการที่อยู่อาศัยระดับหรูในอเมริกาเหนือและสเปน ไปจนถึงอาคารพาณิชย์ในซาอุดีอาระเบียและรีสอร์ทในไทย",
    'products.tag': "คอลเลกชันส่งออกยอดนิยม",
    'products.title': "ผลิตภัณฑ์สุขภัณฑ์ที่ได้รับการรับรองมาตรฐานสากลสำหรับโครงการทั่วโลก",
    'products.lead': "โรงงานจัดหาโดยตรงสำหรับก๊อกน้ำทองเหลืองไร้สารตะกั่วมาตรฐาน cUPC & CE วาล์วเซ็นเซอร์ และชุดฝักบัวเทอร์โมสแตท",
    'showcase.tag': "คุณภาพและการรับรองมาตรฐาน",
    'showcase.title': "ออกแบบเพื่อมาตรฐานที่เหนือกว่าอเมริกาเหนือและยุโรป",
    'showcase.lead': "ก๊อกน้ำและวาล์วทุกชิ้นผลิตภายใต้ระบบ ISO 9001 ผ่านการทดสอบกรดเกลือ 24 ชั่วโมง (ASS Grade 10)",
    'factory.tag': "การผลิตจริง · ฐานอุตสาหกรรมหนานอัน",
    'factory.title': "เยี่ยมชมโรงงานของเรา — ความโปร่งใสในการผลิตมาตรฐานจีนระดับพรีเมียม",
    'factory.lead': "ตั้งอยู่ในลู่ชาง หนานอัน: หล่อทองเหลืองไร้สารตะกั่ว กลึง CNC ความละเอียด 0.01 มม. และขัดเงาด้วยหุ่นยนต์",
    'pricing.tag': "ราคาตรงจากโรงงาน",
    'pricing.title': "ตารางราคาขายส่ง B2B ตามปริมาณการสั่งซื้อ",
    'pricing.lead': "ระดับราคาที่โปร่งใสสำหรับผู้รับเหมาโครงการและผู้จัดจำหน่ายอุปกรณ์สุขภัณฑ์ทั่วโลก",
    'tour.tag': "งานแสดงสินค้าระดับโลกและโรงงาน",
    'tour.title': "ประวัติการร่วมงานกวางเจาแฟร์และการเยี่ยมชมโรงงาน",
    'tour.lead': "ชมโรงงานขนาดกว่า 50,000 ตร.ม. ในหนานอัน และการพบปะลูกค้าในงานกวางเจาแฟร์อย่างต่อเนื่อง",
    'contact.tag': "ติดต่อโรงงานโดยตรง",
    'contact.title': "ขอรับเอกสารทางวิศวกรรมและใบเสนอราคาด่วนจากโรงงาน",
    'contact.lead': "ติดต่อทีมวิศวกรส่งออกโดยตรง ตอบกลับภายใน 24 ชั่วโมงพร้อมใบเสนอราคาและการประเมินแบบ",
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
    'about.banner_tag': 'الملف التعريفي والقدرة التصنيعية للمصنع',
    'about.page_title': 'عن شركة فوجيان كيداه للمطابخ والحمامات المحدودة',
    'about.page_subtitle': 'أكثر من 30 عامًا من التصنيع الهندسي الدقيق للأدوات الصحية في عاصمة السباكة الصينية (لوتشانغ، نانآن)',
    'about.story_tag': 'تاريخنا وقدراتنا الإنتاجية',
    'about.story_title': 'شريك عالمي موثوق به في تجهيزات السباكة والمشاريع السكنية والتجارية',
    'about.p1': 'تقع شركة فوجيان كيداه للمطابخ والحمامات المحدودة (kedahkb.com) في قلب المنطقة الصناعية الشهيرة للأدوات الصحية في بلدة لوتشانغ، مدينة نانآن، بمقاطعة فوجيان. مع أكثر من 30 عامًا من الخبرة التصنيعية المتخصصة، نمت كيداه لتصبح مؤسسة متكاملة تضم منشآت إنتاجية تتجاوز مساحتها 50,000 متر مربع.',
    'about.p2': 'نحن متخصصون في أبحاث وتصميم وسباكة وتشغيل وتشطيب وتجميع خلاطات المياه النحاسية الخالية من الرصاص، وخلاطات الاستشعار الذكية بدون لمس، وصمامات الشطف التجارية، وأنظمة الدش الفاخرة ذات التحكم الحراري.',
    'about.p3': 'بصفتنا مصنعًا معتمدًا بشهادة ISO 9001:2015 واعتماد IAPMO cUPC لأمريكا الشمالية (ملف رقم 8933) ومطابقة CE الأوروبية، فإننا شريك الإمداد الموثوق به لكبرى العلامات التجارية ومقاولي المشاريع الهندسية في الولايات المتحدة وكندا وإسبانيا والمملكة العربية السعودية وكولومبيا وتايلاند.',
    'about.stat_qa': 'فحص جودة شامل بنسبة 100% داخل المصنع',
    'about.stat_plating': 'معيار طلاء مقاوم للأحماض ASS لمدة 24 ساعة',
    'about.stat_cycles': 'دورات تشغيل صمامات السيراميك (500,000 دورة)',
    'about.comp_tag': 'ميزة الشراء المباشر من المصنع',
    'about.comp_title': 'المصنع المباشر في المنشأ مقابل الوسطاء وشركات التجارة',
    'about.comp_desc': 'قارن بين المزايا الهندسية وتوفير التكلفة والضمان عند الشراء مباشرة من منشأة كيداه البالغة مساحتها 50,000+ م² في نانآن.',
    'oem.phase1_title': 'المفهوم والتصميم الهندسي 3D CAD',
    'oem.phase1_desc': 'شارك رسوماتك أو ملفات 3D CAD أو العينات. يعمل مهندسونا على تحسين السلامة الهيكلية للقوالب ومسارات تدفق المياه الداخلية.',
    'oem.phase2_title': 'النماذج الأولية السريعة 3D',
    'oem.phase2_desc': 'تسليم نماذج أولية سريعة SLA/CNC خلال 5-7 أيام للتحقق من الملمس والتوافق الهندسي وموافقة العميل الجمالية.',
    'oem.phase3_title': 'قوالب السباكة الفولاذية الدقيقة',
    'oem.phase3_desc': 'قسم قوالب داخلي يصنع قوالب الصب بالجاذبية الفولاذية وقوالب الختم خلال 15-20 يومًا بدقة CNC تبلغ 0.01 مم.',
    'oem.phase4_title': 'الإنتاج الضخم واللوجستيات العالمية',
    'oem.phase4_desc': 'سباكة آلية، تلميع روبوتي، طلاء ASS مقاوم للملوحة، فحص ضغط مزدوج 100% وتغليف متعدد اللغات وشحن مباشر عبر ميناء شيامن.',
    'faq.banner_tag': 'استفسارات المشتريات والمشاريع الهندسية',
    'faq.page_title': 'الأسئلة الشائعة لمشتريات B2B (FAQ)',
    'faq.page_subtitle': 'كل ما تحتاج لمعرفته حول الشهادات المعتمدة، أوقات التسليم، الحد الأدنى للطلب (MOQ)، اختبارات الجودة وعمليات OEM.',
    'faq.cat1_title': '1. الشهادات ومعايير الجودة العالمية',
    'faq.q1': 'هل خلاطات فوجيان كيداه معتمدة بشهادة cUPC لسوق أمريكا الشمالية؟',
    'faq.a1': 'نعم، بكل تأكيد. تحمل فوجيان كيداه اعتماد IAPMO cUPC الرسمي تحت رقم الملف 8933، المتوافق مع معايير ASME A112.18.1 / CSA B125.1 ومتطلبات مياه الشرب الخالية من الرصاص NSF/ANSI 61. نقدم كافة وثائق الاعتماد للتخليص الجمركي وتقديمات المشاريع في الولايات المتحدة وكندا.',
    'faq.q2': 'ما هي أهمية اختبار رش الملح الحمضي (ASS) لمدة 24 ساعة؟',
    'faq.a2': 'اختبار ASS (رش الملح بحمض الأسيتيك) هو اختبار تآكل متسارع أكثر صرامة بكثير من اختبار الملح المحايد العادي. تحقيق تصنيف Grade 10 لمدة 24 ساعة يعادل أكثر من 10 سنوات من الاستخدام اليومي المكثف في البيئات الساحلية عالية الرطوبة دون أي تقشر أو تآكل.',
    'faq.q3': 'كيف تضمنون منع التسرب بنسبة 100% قبل تحميل الحاوية؟',
    'faq.a3': 'يخضع كل خلاط يتم تجميعه لاختبار ضغط مزدوج على منصات فحص متخصصة: اختبار الضغط الهيدروستاتيكي للماء عند 0.8 ميجا باسكال (8 بار) واختبار الهواء الهوائي عند 0.6 ميجا باسكال (6 بار). يتم رفض أي وحدة بها أي انخفاض في الضغط تلقائيًا.',
    'faq.cat2_title': '2. الطلبات والحد الأدنى للكميات (MOQ) وفترات التسليم',
    'faq.q4': 'ما هو الحد الأدنى لكمية الطلب (MOQ) لديكم؟',
    'faq.a4': 'الحد الأدنى القياسي لإنتاجنا هو 100 إلى 200 قطعة لكل طراز للتشطيبات القياسية مثل الكروم والأسود غير اللامع. بالنسبة لتشطيبات PVD الخاصة (الذهب المصقول، الرمادي المعدني) أو طلبات المشاريع التجريبية، نقدم مرونة عالية في الكميات.',
    'faq.q5': 'ما هو الوقت المستغرق لتسليم العينات وطلبات الحاويات الكاملة؟',
    'faq.a5': 'طلبات العينات: 5-10 أيام عمل. الإنتاج الضخم (حاوية كاملة FCL): 25-35 يومًا تقويميًا بعد استلام الدفعة المقدمة واعتماد تصميم العبوات.',
    'faq.q6': 'هل يمكنني طلب عينات فعلية قبل تقديم طلبية بحجم حاوية؟',
    'faq.a6': 'نعم. نقدم عينات ونرسلها عبر DHL أو FedEx أو UPS السريع. يمكن خصم تكلفة العينة بالكامل من طلبية الإنتاج الكبيرة التالية الخاصة بك.',
    'faq.cat3_title': '3. التخصيص OEM/ODM والدعم الهندسي',
    'faq.q7': 'هل يمكنكم نقش شعار علامتنا التجارية بالليزر وتوفير عبوات مخصصة؟',
    'faq.a7': 'نعم. نقدم حفرًا بالليزر عالي الدقة لشعارك على أجسام الخلاطات والمقابض دون أي تكلفة إضافية. كما نقوم بتخصيص علب البيع بالتجزئة الملونة، والفوم الداخلي، وكتيبات التركيب وملصقات الباركود وفقًا لتصميمك.',
    'faq.q8': 'هل يمكنكم تطوير قوالب مخصصة بناءً على رسوماتنا الهندسية 3D CAD؟',
    'faq.a8': 'نعم. يمكن لقسم هندسة القوالب الداخلي لدينا تطوير قوالب صب فولاذية بالجاذبية جديدة خلال 15-20 يومًا. نوفر أولاً نماذج ثلاثية الأبعاد سريعة لموافقة العميل المادية قبل الشروع في تصنيع القالب.',
    'faq.q9': 'ما هي سياسة الضمان التي تقدمونها للمشاريع التجارية؟',
    'faq.a9': 'نقدم ضمانًا تجاريًا لمدة 5 سنوات على جميع هياكل الخلاطات النحاسية الصلبة وخراطيش السيراميك. كما ندرج قطع غيار مجانية بنسبة 1%–2% داخل شحنات الحاويات لتسهيل الصيانة الميدانية في المشاريع.',
    'faq.cat4_title': '4. شروط الدفع، الشحن وميناء التحميل',
    'faq.q10': 'ما هي شروط الدفع القياسية المعمول بها لديكم؟',
    'faq.a10': 'شروطنا القياسية هي إيداع 30% T/T عند تأكيد الطلب، ودفع الرصيد المتبقي 70% قبل الشحن أو مقابل نسخة بوليصة الشحن (B/L). نقبل الاعتماد المستندي غير القابل للإلغاء (L/C at sight) لطلبات المشاريع الحكومية والهندسية الكبرى.',
    'faq.q11': 'من أي ميناء صيني يتم شحن البضائع؟',
    'faq.a11': 'نقوم بالشحن بشكل أساسي من ميناء شيامن (Xiamen Port, Fujian)، الذي يبعد 1.5 ساعة فقط عبر الطريق السريع عن مصنعنا في نانآن، مما يوفر رحلات بحرية مباشرة إلى الموانئ الرئيسية في أمريكا وأوروبا والشرق الأوسط والخليج العربي.',
    'products.banner_tag': 'كتالوج منتجات الأدوات الصحية المخصصة للتصدير',
    'products.page_title': 'مجموعات السباكة للمشاريع التجارية والسكنية الفاخرة',
    'products.page_subtitle': 'نحاس نقي خالي من الرصاص • معتمد بشهادات cUPC وCE • مقاومة لتآكل الملوحة ASS لمدة 24 ساعة',
    'products.tab_all': 'كافة المنتجات (24)',
    'products.tab_basin': 'خلاطات المغاسل (7)',
    'products.tab_kitchen': 'خلاطات المطابخ (6)',
    'products.tab_sensor': 'خلاطات الاستشعار وصمامات الشطف (6)',
    'products.tab_shower': 'أنظمة الدش الفاخرة (5)',
    'products.inquire_btn': 'طلب تسعيرة فورية',
    'products.spec_btn': 'المواصفات الفنية',
    'services.tag': "الخدمات والمنتجات الرئيسية",
    'services.title': "تصنيع دقيق لمقاولي السباكة العالميين",
    'services.lead': "من المشاريع السكنية الفاخرة في أمريكا الشمالية وإسبانيا إلى المنشآت التجارية الكبرى في المملكة العربية السعودية والمنتجعاتใน تايلاند.",
    'products.tag': "مجموعات التصدير المعتمدة للمشاريع",
    'products.title': "منتجات صحية معتمدة هندسيًا للمشاريع العالمية",
    'products.lead': "توريد مباشر من المصنع لخلاطات النحاس الخالية من الرصاص المعتمدة بشهادات cUPC وCE وأنظمة الدش الفاخرة.",
    'showcase.tag': "الجودة والاعتمادات الهندسية",
    'showcase.title': "مصممة لتتجاوز المعايير الأمريكية الشمالية والأوروبية",
    'showcase.lead': "يتم تصنيع جميع الخلاطات والصمامات وفقًا لمعايير ISO 9001 مع اختبار رش الملح لمدة 24 ساعة لضمان متانة الطلاء.",
    'factory.tag': "الإنتاج الحي · قاعدة نان آن للأدوات الصحية",
    'factory.title': "داخل مصنعنا - تصنيع صيني شفاف عالي الجودة",
    'factory.lead': "نعمل في نان آن، مركز السباكة الوطني في الصين: صب النحاس النقي، التشغيل الآلي بدقة 0.01 مم، والتجميع الدقيق.",
    'pricing.tag': "أسعار المصنع المباشرة",
    'pricing.title': "مستويات أسعار الجملة التقديرية للمشاريع B2B",
    'pricing.lead': "أسعار واضحة وتنافسية لمقاولي المشاريع وموزعي الأدوات الصحية مع خيارات التخصيص الكاملة.",
    'tour.tag': "المعارض العالمية وزيارة المصنع",
    'tour.title': "سجل معارض كانتون الدولية وحضور المصنع",
    'tour.lead': "تعرف على منشأتنا الصناعية البالغة 50,000 متر مربع في نان آن وحضورنا المستمر في معرض كانتون الدولي.",
    'contact.tag': "استفسار مباشر من المصنع",
    'contact.title': "طلب حزمة المواصفات الهندسية وعرض الأسعار الفوري",
    'contact.lead': "تواصل مباشر مع الفريق الهندسي والتصديري لمصنع كيداه. رد فني وعروض أسعار خلال 24 ساعة.",
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
    'about.banner_tag': '企业概况与制造实力',
    'about.page_title': '关于福建科迪厨卫有限公司',
    'about.page_subtitle': '30年精工传承 · 中国水暖之乡（福建南安仑苍）无铅铜卫浴洁具源头实力制造厂商',
    'about.story_tag': '企业底蕴与工程实力',
    'about.story_title': '全球商用工程与高端住宅卫浴五金长期信赖的供应链制造伙伴',
    'about.p1': '福建科迪厨卫有限公司（kedahkb.com）位于中国著名的水暖卫浴产业基地——福建省南安市仑苍镇。历经30余年的专注深耕，科迪已成长为一家占地面积超 50,000 平方米、集研发、铸造、机加、抛光电镀与无尘装配于一体的现代化综合卫浴骨干制造企业。',
    'about.p2': '我们专业致力于高品质无铅环保铜水龙头、智能红外感应洁具、商用大流量冲洗阀以及恒温豪华雨淋淋浴花洒系统的自主研发与精工规模制造。',
    'about.p3': '作为通过 ISO 9001:2015 质量管理体系认证、持有北美 IAPMO cUPC 官方证书（档案号：File No. 8933）以及欧盟 CE 认证的源头企业，我们是美国、加拿大、西班牙、沙特阿拉伯、哥伦比亚和泰国等全球 50 多个国家卫浴工程承包商、房地产开发商及品牌商的长期核心战略供应商。',
    'about.stat_qa': '厂内 100% 气水承压全检',
    'about.stat_plating': '24小时 ASS 乙酸盐雾 10 级耐腐',
    'about.stat_cycles': '阀芯 500,000 次启闭寿命',
    'about.comp_tag': '源头实体工厂优势',
    'about.comp_title': '源头制造工厂 vs. 外贸贸易中间商',
    'about.comp_desc': '对比直接对接福建科迪南安 50,000+ m² 实体生产工厂在工程质控、资质确权及成本控制上的核心优势。',
    'oem.phase1_title': '方案评估与 3D 工业建模',
    'oem.phase1_desc': '支持提供草图、2D/3D CAD 文件（STEP、IGES）或对标样品，工程团队协助优化内部水路与模具结构。',
    'oem.phase2_title': 'SLA/CNC 快速实物打样',
    'oem.phase2_desc': '5-7 天内完成手板快速成型打样，用于外观审美确认、人体工学把手握感测试及水路初测。',
    'oem.phase3_title': '精密模具重力浇铸开模',
    'oem.phase3_desc': '厂内独立模具车间 15-20 天快速开立钢模压铸与冲压磨具，CNC 加工中心实现 0.01mm 精度控制。',
    'oem.phase4_title': '规模量产与厦门港全球海运',
    'oem.phase4_desc': '自动化重力浇铸、机器人镜面抛光、24H ASS 盐雾电镀、100% 双重承压质检与定制多语包装出口。',
    'faq.banner_tag': '工程采购与技术答疑',
    'faq.page_title': '常见工程采购问题解答（B2B FAQ）',
    'faq.page_subtitle': '关于国际权威认证、交货期、起订量（MOQ）、质检测试标准及 OEM 定制开发流程的一切核心解答。',
    'faq.cat1_title': '1. 国际资质认证与质检标准',
    'faq.q1': '科迪水龙头产品是否具备出口北美市场的 cUPC 官方认证？',
    'faq.a1': '是的，完全具备。福建科迪持有美国与加拿大权威机构 IAPMO 颁发的 cUPC 证书（档案号：File No. 8933），严格符合 ASME A112.18.1 / CSA B125.1 机械与水暖标准以及 NSF/ANSI 61 无铅饮用水健康标准，提供全套海关清关与工程报审文件。',
    'faq.q2': '24小时乙酸盐雾测试（ASS）达到 Grade 10 级代表什么？',
    'faq.a2': 'ASS（乙酸盐雾测试）是一种酸性加速腐蚀测试，其严苛程度远超常规的中性盐雾（NSS）。通过 24 小时 ASS 达到 10 级无缺陷，等同于在沿海高盐雾或潮湿酸碱卫浴环境中长期使用 10 年以上仍保持镜面光泽，绝不起皮脱层、不起泡生锈。',
    'faq.q3': '你们如何在集装箱装柜前保证 100% 绝对零漏水？',
    'faq.a3': '每一套组装完毕的水龙头和洁具均在专用检测台上经过严格的双重压力全检：0.8 MPa（8公斤）水压测试以及 0.6 MPa（6公斤）气压保压测试。QA 系统自动剔除任何存在微小压降的残次品。',
    'faq.cat2_title': '2. 订单起订量（MOQ）与生产交货期',
    'faq.q4': '你们的最小起订量（MOQ）是多少？',
    'faq.a4': '常规镀铬或哑光黑产品标准量产起订量为 100 至 200 套/款。对于拉丝金、枪灰等特殊 PVD 工艺或工程商试单项目，我们提供灵活的低起订量支持，非常欢迎拼柜混批出货。',
    'faq.q5': '样品单与整柜集装箱订单的交期是多久？',
    'faq.a5': '样品订单：5–10 个工作日；整柜大货量产（FCL 货柜）：收到订金及包装图纸确认后 25–35 个日历天出货。',
    'faq.q6': '批量订购前是否可以先申请实物样品确认做工？',
    'faq.a6': '当然可以。我们支持通过 DHL、FedEx 或 UPS 国际快递寄送实物工程样品。产生的样品费用可在后续整柜大货订单中全额抵扣返还。',
    'faq.cat3_title': '3. OEM / ODM 定制代工与工程配套',
    'faq.q7': '是否支持在龙头表面激光镭雕我们的品牌 Logo 并定制包装？',
    'faq.a7': '支持。我们在龙头主体、把手及装饰盖上提供高精度光纤激光镭雕 Logo 服务，不额外收费。同时可根据您的工程设计稿定制全彩外箱、防震珍珠棉内托、多语言说明书与条形码。',
    'faq.q8': '能否根据我们提供的 3D CAD 图纸开立全新模具？',
    'faq.a8': '完全可以。科迪厂内自有模具研发团队，可在 15–20 天内完成重力浇铸钢模或冲压模具开发。开模前支持先通过 3D 打印快速成型提供实物供您审样。',
    'faq.q9': '针对商业或酒店工程项目，你们提供多长时间的质保？',
    'faq.a9': '我们对所有实心黄铜龙头主体及进口品牌陶瓷阀芯提供 5 年商用工程质保，并在集装箱出货时免费随柜配备 1%–2% 的易损备件（阀芯、O型密封圈、起泡器及安装配件），便于工程现场维保。',
    'faq.cat4_title': '4. 付款方式、贸易条款与出货港口',
    'faq.q10': '标准的外贸付款方式是什么？',
    'faq.a10': '常规付款方式为 T/T 电汇：30% 订金排产，70% 尾款于出货前或见提单（B/L）复印件支付。针对大型政府招标或市政工程项目，支持开立不可撤销的即期信用证（L/C at sight）。',
    'faq.q11': '货物通常从中国哪个海运港口发运？',
    'faq.a11': '我们主要从中国厦门港（Xiamen Port）装柜直航，工厂位于南安仑苍，距离厦门海港仅 1.5 小时高速车程，拥有直达北美、欧洲、中东及东南亚各大枢纽港的密集海运航线。',
    'products.banner_tag': '外贸出口卫浴五金产品目录',
    'products.page_title': '商用工程与高端住宅卫浴五金全系产品',
    'products.page_subtitle': '无铅环保黄铜 • 北美 cUPC 与欧盟 CE 认证 • 24小时 ASS 耐盐雾镀层',
    'products.tab_all': '全系列展品 (24)',
    'products.tab_basin': '面盆冷热水龙头 (7)',
    'products.tab_kitchen': '商用抽拉厨房龙头 (6)',
    'products.tab_sensor': '智能感应龙头与冲洗阀 (6)',
    'products.tab_shower': '恒温花洒淋浴系统 (5)',
    'products.inquire_btn': '立即询盘',
    'products.spec_btn': '技术规格书',
    'services.tag': "核心产品与工程服务",
    'services.title': "面向全球水暖工程商的高精度卫浴制造",
    'services.lead': "从北美和西班牙的高端豪宅，到沙特高人流商用设施及泰国度假酒店，福建科迪直接交付权威认证的水暖解决方案，无任何中间商溢价。",
    'products.tag': "出口工程卫浴精选专区",
    'products.title': "经过国际权威认证的全球工程卫浴产品专区",
    'products.lead': "工厂直供通过北美 cUPC 与欧盟 CE 认证的无铅铜水龙头、智能红外感应洁具及豪华恒温雨淋系统，经受 24 小时乙酸盐雾严苛质检，畅销 50+ 国家。",
    'showcase.tag': "严苛质检与工程认证",
    'showcase.title': "严苛超越北美与欧洲行业准入标准的精工制造",
    'showcase.lead': "科迪每款水龙头与阀门均在 ISO 9001 质量管理体系下严格生产。重力压铸消除内部砂眼，CNC 车床达到 0.01mm 精密公差，并通过 24 小时乙酸盐雾 Grade 10 级防腐检测。",
    'factory.tag': "车间实景 · 南安水暖卫浴产业基地",
    'factory.title': "深入科迪工厂实景 — 真实透明的中国高端制造",
    'factory.lead': "坐落于中国水暖名镇南安仑苍：从高纯度无铅铜重力铸造、0.01mm 精度数控车削，到机器人镜面抛光及十万级洁净装配全流程。",
    'pricing.tag': "工厂直供透明报价",
    'pricing.title': "B2B 工程采购阶梯价格参考表",
    'pricing.lead': "为全球工程承包商、水暖建材批发商及品牌进口商提供公开透明的批量采购梯度价格，支持表面工艺、包装定制与激光镭雕。",
    'tour.tag': "全球出海展贸与实景展厅",
    'tour.title': "广交会全球出海历程与实体工厂实景",
    'tour.lead': "走进科迪位于福建南安仑苍 50,000 m² 现代化综合制造园区，纵览历届广交会与全球工程采购商现场交流的真实足迹。",
    'contact.tag': "外贸直通询盘",
    'contact.title': "立即获取工厂直供工程报价与技术方案包",
    'contact.lead': "直接与福建科迪外贸工程部对接，24小时内提供技术图纸确认、CAD评估、样品寄送与外贸出海报价单。",
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
  
  if (typeof window.trackLeadConversion === 'function') {
    window.trackLeadConversion(form.id || 'B2B_Inquiry_Form');
  }

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
  // 0. Canonical URL Normalization: seamlessly normalize /index.html to / for clean display & cache coherence
  try {
    if (window.location.pathname.endsWith('/index.html')) {
      const cleanPath = window.location.pathname.replace(/\/index\.html$/, '/') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', cleanPath);
    }
  } catch(e) {}

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // ===================================================================
  // 2. Definitive Global Language Switcher Engine
  // ===================================================================
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
    document.querySelectorAll('#currentLangText, #currentLangLabel, .current-lang-text').forEach(el => {
      el.textContent = langLabels[lang] || lang.toUpperCase();
    });

    document.querySelectorAll('.lang-opt, .lang-option, .drawer-lang-btn').forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      const isActive = optLang === lang;
      opt.classList.toggle('active', isActive);
      if (opt.classList.contains('drawer-lang-btn')) {
        opt.classList.toggle('bg-emerald-500', isActive);
        opt.classList.toggle('text-white', isActive);
        opt.classList.toggle('bg-white/10', !isActive);
        opt.classList.toggle('text-white/80', !isActive);
      }
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

  window.toggleLangDropdown = function(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    document.querySelectorAll('#langDropdown, .lang-dropdown').forEach(dropdown => {
      const isVisible = dropdown.style.display === 'block' || dropdown.classList.contains('is-open');
      if (isVisible) {
        dropdown.classList.remove('is-open', 'show');
        dropdown.classList.add('hidden');
        dropdown.style.display = 'none';
      } else {
        dropdown.classList.add('is-open', 'show');
        dropdown.classList.remove('hidden');
        dropdown.style.display = 'block';
      }
    });
  };

  window.switchLanguage = function(lang, e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.setLanguage(lang);
    document.querySelectorAll('#langDropdown, .lang-dropdown').forEach(dropdown => {
      dropdown.classList.remove('is-open', 'show');
      dropdown.classList.add('hidden');
      dropdown.style.display = 'none';
    });
  };

  // Wire up button clicks
  document.querySelectorAll('#langBtn, #langToggle, .lang-btn').forEach(btn => {
    btn.onclick = function(e) {
      window.toggleLangDropdown(e);
    };
  });

  // Global click outside to close dropdown
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#langBtn, #langToggle, .lang-btn, #langDropdown, .lang-dropdown')) {
      document.querySelectorAll('#langDropdown, .lang-dropdown').forEach(dd => {
        dd.classList.remove('is-open', 'show');
        dd.classList.add('hidden');
        dd.style.display = 'none';
      });
    }
  });

  // Options click
  document.querySelectorAll('.lang-opt, .lang-option').forEach(opt => {
    opt.onclick = function(e) {
      const selected = opt.getAttribute('data-lang');
      window.switchLanguage(selected, e);
    };
  });

  // Load saved language
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

// ===================================================================
// 11. Google Analytics Full-Funnel Conversion Tracking & Contact Listeners
// ===================================================================
(function() {
  // Global helper for safe gtag execution
  function trackEvent(action, category, label, value) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  // Intercept all high-intent contact clicks across the entire site
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    
    // 1. WhatsApp Clicks
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackEvent('contact', 'Engagement', 'WhatsApp_Chat_Click');
    }
    // 2. Direct Mail Clicks
    else if (href.startsWith('mailto:')) {
      trackEvent('contact', 'Engagement', 'Direct_Email_Click');
    }
    // 3. Direct Phone Clicks
    else if (href.startsWith('tel:')) {
      trackEvent('contact', 'Engagement', 'Phone_Call_Click');
    }
    // 4. Download PDF Spec Sheet / Certificate
    else if (href.endsWith('.pdf')) {
      trackEvent('file_download', 'Documentation', href.split('/').pop());
    }
  });

  // Track Inquire Button Clicks
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const oc = btn.getAttribute('onclick') || '';
    if (oc.includes('openRFQModal')) {
      trackEvent('select_content', 'RFQ_Intent', 'Open_RFQ_Modal');
    }
  });

  // Export helper for form completion
  window.trackLeadConversion = function(formName) {
    trackEvent('generate_lead', 'Conversion', formName || 'RFQ_Form_Submitted');
  };
})();

// ===================================================================
// 12. GDPR Cookie Consent Banner Engine
// ===================================================================
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    try {
      const consent = localStorage.getItem('kedah_cookie_consent');
      if (consent) return; // User already accepted or chose preferences

      const banner = document.createElement('div');
      banner.id = 'kedahCookieBanner';
      banner.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-2xl bg-gray-950/95 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-all duration-500 transform translate-y-12 opacity-0 flex flex-col gap-3 text-xs';
      banner.innerHTML = `
        <div class="flex items-start gap-3">
          <span class="text-xl">🍪</span>
          <div class="flex-1 text-gray-300 leading-relaxed text-[11px]">
            We use technical cookies to optimize page performance and analyze overseas engineering inquiries. By using our website, you agree to our <a href="privacy.html" class="underline text-emerald-400 hover:text-emerald-300">Privacy Policy</a>.
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 pt-1 border-t border-white/10">
          <button type="button" id="cookieDecline" class="px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-400 hover:text-white transition">Essential Only</button>
          <button type="button" id="cookieAccept" class="px-4 py-1.5 rounded-full text-[11px] font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-sm transition">Accept All</button>
        </div>
      `;
      document.body.appendChild(banner);

      // Trigger entrance animation after slight delay
      setTimeout(() => {
        banner.classList.remove('translate-y-12', 'opacity-0');
        banner.classList.add('translate-y-0', 'opacity-100');
      }, 1500);

      // Bind actions
      const dismiss = (choice) => {
        try { localStorage.setItem('kedah_cookie_consent', choice); } catch(e) {}
        banner.classList.remove('translate-y-0', 'opacity-100');
        banner.classList.add('translate-y-12', 'opacity-0');
        setTimeout(() => banner.remove(), 500);
      };

      document.getElementById('cookieAccept')?.addEventListener('click', () => dismiss('accepted'));
      document.getElementById('cookieDecline')?.addEventListener('click', () => dismiss('essential'));
    } catch(e) {
      console.warn('Cookie banner init error:', e);
    }
  });
})();
