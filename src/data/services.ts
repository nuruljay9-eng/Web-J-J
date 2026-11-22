import { ServiceDetail } from '../types';
import { SITE_ASSETS } from './assets';

// 7 Core Service Cards displayed on Home (Row 1: 4 cards, Row 2: 3 cards)
export const HOME_SERVICES: ServiceDetail[] = [
  {
    id: 'bim-modeling',
    number: '01',
    slugId: 'jasa-bim-modeling',
    slugEn: 'jasa-bim-modeling',
    iconKey: 'bim',
    cardTitle: {
      id: 'BIM Modeling',
      en: 'BIM Modeling',
    },
    cardDescription: {
      id: 'Pemodelan bangunan 3D menggunakan teknologi Building Information Modeling.',
      en: '3D building modeling powered by Building Information Modeling workflows.',
    },
  },
  {
    id: 'shop-drawing',
    number: '02',
    slugId: 'jasa-shop-drawing-struktur',
    slugEn: 'jasa-shop-drawing-struktur',
    iconKey: 'shopdrawing',
    cardTitle: {
      id: 'Shop Drawing',
      en: 'Shop Drawing',
    },
    cardDescription: {
      id: 'Pembuatan gambar kerja konstruksi yang detail dan terkoordinasi.',
      en: 'Detailed, coordinated construction shop drawings ready for site execution.',
    },
  },
  {
    id: 'rebar-detailing',
    number: '03',
    slugId: 'jasa-rebar-detailing',
    slugEn: 'jasa-rebar-detailing',
    iconKey: 'rebar',
    cardTitle: {
      id: 'Rebar Detailing',
      en: 'Rebar Detailing',
    },
    cardDescription: {
      id: 'Detail pembesian beton bertulang dan Bar Bending Schedule (BBS).',
      en: 'Reinforced concrete rebar detailing and Bar Bending Schedule (BBS).',
    },
  },
  {
    id: 'bim-coordination',
    number: '04',
    slugId: 'jasa-bim-coordination',
    slugEn: 'jasa-bim-coordination',
    iconKey: 'coordination',
    cardTitle: {
      id: 'BIM Coordination & Clash Detection',
      en: 'BIM Coordination & Clash Detection',
    },
    cardDescription: {
      id: 'Koordinasi model struktur dengan disiplin arsitektur dan MEP.',
      en: 'Structural model coordination with architectural and MEP disciplines.',
    },
  },
  {
    id: 'quantity-take-off',
    number: '05',
    slugId: 'jasa-bim-modeling',
    slugEn: 'jasa-bim-modeling',
    iconKey: 'qto',
    cardTitle: {
      id: 'Quantity Take Off (QTO)',
      en: 'Quantity Take Off (QTO)',
    },
    cardDescription: {
      id: 'Perhitungan volume beton, pembesian, baja, dan kebutuhan material.',
      en: 'Accurate volume calculation for concrete, reinforcement, steel, and materials.',
    },
  },
  {
    id: 'rab',
    number: '06',
    slugId: 'jasa-structural-engineering',
    slugEn: 'jasa-structural-engineering',
    iconKey: 'rab',
    cardTitle: {
      id: 'RAB',
      en: 'Cost Estimation (RAB)',
    },
    cardDescription: {
      id: 'Perhitungan rencana anggaran biaya konstruksi.',
      en: 'Comprehensive construction cost budget estimation and bill of quantities.',
    },
  },
  {
    id: 'structural-engineering',
    number: '07',
    slugId: 'jasa-structural-engineering',
    slugEn: 'jasa-structural-engineering',
    iconKey: 'structural',
    cardTitle: {
      id: 'Structural Engineering',
      en: 'Structural Engineering',
    },
    cardDescription: {
      id: 'Analisis dan perencanaan struktur bangunan.',
      en: 'Structural engineering analysis and building structural design.',
    },
  },
];

// 7 Dedicated SEO Landing Pages (exact URL slugs required by brief)
export const SEO_SERVICE_PAGES: ServiceDetail[] = [
  {
    id: 'seo-bim-modeling',
    number: '01',
    slugId: 'jasa-bim-modeling',
    slugEn: 'jasa-bim-modeling',
    iconKey: 'bim',
    cardTitle: { id: 'Jasa BIM Modeling Indonesia', en: 'BIM Modeling Services Indonesia' },
    cardDescription: {
      id: 'Pemodelan 3D Building Information Modeling (LOD 300–400) untuk proyek konstruksi.',
      en: '3D Building Information Modeling (LOD 300–400) for construction & engineering projects.',
    },
    seoLanding: {
      slug: 'jasa-bim-modeling',
      primaryKeyword: {
        id: 'Jasa BIM Modeling Indonesia',
        en: 'BIM Modeling Services Indonesia',
      },
      supportingKeywords: {
        id: ['Konsultan BIM Indonesia', 'Jasa BIM Structure', 'Jasa Quantity Take Off', 'Pemodelan BIM 3D'],
        en: ['BIM Consultant Indonesia', 'Structural BIM Modeling', 'Quantity Take Off Services', '3D BIM LOD 350'],
      },
      seoTitle: {
        id: 'Jasa BIM Modeling Indonesia & Konsultan BIM | J&J Engineering',
        en: 'BIM Modeling Services Indonesia & BIM Consultant | J&J Engineering',
      },
      metaDescription: {
        id: 'Layanan jasa BIM Modeling Indonesia profesional untuk struktur, arsitektur, Quantity Take Off, dan as-built model proyek konstruksi. Konsultasi gratis via WhatsApp.',
        en: 'Professional BIM Modeling services in Indonesia for structural, architectural, Quantity Take Off, and as-built construction models. Request a free consultation.',
      },
      h1: {
        id: 'Jasa BIM Modeling Indonesia untuk Proyek Konstruksi & Infrastruktur',
        en: 'Professional BIM Modeling Services for Construction & Infrastructure',
      },
      intro: {
        id: 'Transformasi gambar 2D menjadi model informasi bangunan 3D yang akurat, terstruktur, dan siap mendukung pelaksanaan konstruksi serta perhitungan volume material.',
        en: 'Transform 2D design drawings into accurate, data-rich 3D Building Information Models built to support constructability, coordination, and quantity take off.',
      },
      serviceDescription: {
        id: [
          'J&J BIM & Structure Engineering menyediakan jasa BIM Modeling Indonesia bagi kontraktor utama, pengembang properti, konsultan engineering, dan biro arsitek yang membutuhkan model 3D presisi sesuai Level of Development (LOD 300 hingga LOD 400).',
          'Setiap elemen bangunan—mulai dari pondasi, kolom, balok, pelat lantai, dinding geser, struktur baja, hingga komponen arsitektural—dimodelkan dengan parameter teknis lengkap sehingga dapat langsung diekstrak menjadi gambar kerja, clash report, serta Quantity Take Off (QTO).',
        ],
        en: [
          'J&J BIM & Structure Engineering delivers specialized BIM Modeling services for general contractors, property developers, engineering consultants, and architecture firms requiring precision 3D models from LOD 300 through LOD 400.',
          'Every structural and architectural element—foundations, columns, beams, slabs, shear walls, steel trusses, and building envelopes—is modeled with structured technical parameters ready for shop drawings, clash detection, and Quantity Take Off (QTO).',
        ],
      },
      benefits: {
        id: [
          'Meminimalkan kesalahpahaman gambar antara tim perencana dan pelaksana lapangan.',
          'Ekstraksi volume beton, besi tulangan, bekisting, dan material secara cepat dan terukur.',
          'Mempercepat proses validasi desain serta persiapan dokumen tender konstruksi.',
          'Model terintegrasi mendukung koordinasi lintas disiplin Struktur, Arsitektur, dan MEP.',
        ],
        en: [
          'Reduces drawing misinterpretation between design consultants and site execution teams.',
          'Enables fast, traceable volume extraction for concrete, reinforcement, formwork, and steel.',
          'Accelerates design validation, tender preparation, and engineering submittals.',
          'Provides an integrated foundation for Structural, Architectural, and MEP coordination.',
        ],
      },
      deliverables: {
        id: [
          'Native 3D BIM Model (.RVT / .IFC sesuai standar proyek)',
          'Federated Model siap koordinasi lintas disiplin',
          'Ekstraksi Quantity Take Off (QTO) terstruktur dalam format Excel',
          'Lembar gambar potongan, denah, dan elevasi 2D terhubung langsung dengan model 3D',
        ],
        en: [
          'Native 3D BIM Models (.RVT / .IFC aligned with project BEP standards)',
          'Federated coordination-ready model packages',
          'Structured Quantity Take Off (QTO) schedules exported to Excel',
          'Model-linked 2D plans, sections, and elevation sheets',
        ],
      },
      softwareStack: ['Autodesk Revit', 'Navisworks Manage', 'Autodesk AutoCAD', 'IFC OpenBIM'],
      image: SITE_ASSETS.bimWireframe,
      imageAlt: {
        id: 'Visualisasi model 3D BIM bangunan bertingkat oleh J&J BIM & Structure Engineering',
        en: '3D BIM building visualization by J&J BIM & Structure Engineering',
      },
      faqs: {
        id: [
          {
            question: 'Standar Level of Development (LOD) apa yang dapat dikerjakan oleh J&J?',
            answer:
              'Kami mengerjakan pemodelan BIM mulai dari LOD 200 (konsep), LOD 300 (desain detail), LOD 350 (koordinasi konstruksi), hingga LOD 400 (detail fabrikasi dan shop drawing) sesuai kebutuhan proyek.',
          },
          {
            question: 'Dokumen apa yang perlu disiapkan klien untuk memulai jasa BIM Modeling?',
            answer:
              'Klien cukup mengirimkan gambar DED atau For Construction (format PDF atau DWG), spesifikasi teknis struktur/arsitektur, serta jadwal target proyek.',
          },
          {
            question: 'Apakah hasil model BIM mendukung format OpenBIM IFC?',
            answer:
              'Ya, selain file native seperti .RVT, kami dapat mengekspor model ke format OpenBIM (.IFC) untuk interoperabilitas antar perangkat lunak konstruksi.',
          },
        ],
        en: [
          {
            question: 'Which Level of Development (LOD) standards does J&J support?',
            answer:
              'We deliver BIM modeling from LOD 200 (conceptual) and LOD 300 (design development) through LOD 350 (construction coordination) and LOD 400 (fabrication and shop drawing detailing).',
          },
          {
            question: 'What input files are required to start a BIM Modeling engagement?',
            answer:
              'Clients typically share For-Construction or DED drawings (PDF or DWG), structural/architectural specifications, and target submission milestones.',
          },
          {
            question: 'Do you support OpenBIM IFC deliverables?',
            answer:
              'Yes. Alongside native authoring files (.RVT), we provide clean OpenBIM (.IFC) exports for seamless cross-platform engineering collaboration.',
          },
        ],
      },
      relatedSlugs: ['jasa-revit-modeling', 'jasa-bim-coordination', 'jasa-shop-drawing-struktur'],
    },
  },
  {
    id: 'seo-revit-modeling',
    number: '02',
    slugId: 'jasa-revit-modeling',
    slugEn: 'jasa-revit-modeling',
    iconKey: 'revit',
    cardTitle: { id: 'Jasa Revit Modeling', en: 'Revit Modeling Services' },
    cardDescription: {
      id: 'Pemodelan struktur dan arsitektur berbasis Autodesk Revit dengan parameter presisi.',
      en: 'Parametric structural and architectural modeling built in Autodesk Revit.',
    },
    seoLanding: {
      slug: 'jasa-revit-modeling',
      primaryKeyword: {
        id: 'Jasa Revit Modeling',
        en: 'Revit Modeling Services',
      },
      supportingKeywords: {
        id: ['Revit Structural Modeling', 'Jasa BIM Structure', 'Pemodelan Revit Arsitektur', 'Scan to BIM Revit'],
        en: ['Revit Structural Modeling', 'Architectural Revit Services', 'BIM Family Creation', 'CAD to Revit'],
      },
      seoTitle: {
        id: 'Jasa Revit Modeling Struktur & Arsitektur | J&J BIM Engineering',
        en: 'Revit Structural & Architectural Modeling Services | J&J Engineering',
      },
      metaDescription: {
        id: 'Jasa Revit Modeling profesional untuk struktur beton bertulang, baja, dan arsitektur. Pembuatan model RVT parametrik, family kustom, serta dokumentasi gambar kerja.',
        en: 'Professional Autodesk Revit modeling services for reinforced concrete, steel structures, and architecture. Parametric RVT models, custom families, and documentation.',
      },
      h1: {
        id: 'Jasa Revit Modeling Profesional untuk Struktur dan Arsitektur',
        en: 'Professional Autodesk Revit Modeling for Structure & Architecture',
      },
      intro: {
        id: 'Layanan pemodelan berbasis Autodesk Revit dengan ketelitian family parametrik, penomoran elemen sistematis, serta dokumentasi sheet siap cetak.',
        en: 'Dedicated Autodesk Revit modeling delivering clean parametric families, systematic element tagging, and coordinated sheet documentation.',
      },
      serviceDescription: {
        id: [
          'Autodesk Revit menjadi standar utama dalam pelaksanaan BIM di proyek gedung komersial, apartemen, rumah sakit, fasilitas industri, dan proyek infrastruktur modern. Tim engineering J&J menyediakan jasa Revit Modeling untuk konversi CAD 2D ke BIM 3D maupun pemodelan dari tahap desain konseptual.',
          'Kami memastikan struktur file Revit tersusun rapi sesuai Worksharing, Grid & Level, Shared Coordinates, serta template standar perusahaan atau BIM Execution Plan (BEP) proyek Anda.',
        ],
        en: [
          'Autodesk Revit is the industry backbone for commercial towers, residential developments, hospitals, and industrial facilities. J&J provides specialized Revit Modeling services covering CAD-to-BIM conversion as well as direct modeling from design specifications.',
          'Every Revit model is structured cleanly around project Worksharing, accurate Grids & Levels, Shared Coordinates, and strict adherence to your project BIM Execution Plan (BEP).',
        ],
      },
      benefits: {
        id: [
          'Struktur model Revit bersih dengan penamaan family dan parameter yang konsisten.',
          'Jadwal material (Revit Schedules) otomatis terhubung dengan perubahan geometri model.',
          'Mendukung kolaborasi langsung di lingkungan kerja cloud maupun server lokal tim Anda.',
          'Memudahkan transisi ke tahap analisis struktur maupun pembuatan shop drawing.',
        ],
        en: [
          'Clean Revit model hierarchy with consistent family naming and shared parameters.',
          'Automated Revit Schedules dynamically linked to geometric updates.',
          'Seamless collaboration compatibility with cloud CDE and local team servers.',
          'Smooth transition from 3D BIM model to structural documentation and shop drawings.',
        ],
      },
      deliverables: {
        id: [
          'File Proyek Autodesk Revit (.RVT) terstruktur sesuai versi yang disepakati',
          'Custom Revit Families (.RFA) untuk elemen struktural atau arsitektural khusus',
          'Paket Schedule Volume Beton, Pembesian, dan Komponen Bangunan',
          'Set Gambar Kerja PDF & DWG yang diekspor langsung dari Revit Sheets',
        ],
        en: [
          'Structured Autodesk Revit (.RVT) project files in your required Revit release',
          'Custom Revit Families (.RFA) tailored to non-standard structural or architectural elements',
          'Automated Concrete, Rebar, and Component Schedules',
          'Coordinated PDF & DWG drawing packages exported directly from Revit Sheets',
        ],
      },
      softwareStack: ['Autodesk Revit Structure', 'Autodesk Revit Architecture', 'Dynamo BIM', 'AutoCAD'],
      image: SITE_ASSETS.structuralBlueprint,
      imageAlt: {
        id: 'Lingkungan kerja pemodelan Revit Structure dan gambar teknik J&J',
        en: 'Revit Structural modeling and engineering drawing workspace at J&J',
      },
      faqs: {
        id: [
          {
            question: 'Versi Autodesk Revit apa saja yang didukung oleh J&J?',
            answer:
              'Kami mendukung berbagai versi Autodesk Revit mulai dari Revit 2021 hingga versi terbaru sesuai standar yang ditetapkan dalam BIM Execution Plan proyek Anda.',
          },
          {
            question: 'Apakah J&J melayani konversi gambar AutoCAD 2D ke model Revit 3D?',
            answer:
              'Ya. Kami secara rutin mengonversi paket gambar 2D DWG/PDF menjadi model Revit 3D terkoordinasi lengkap dengan deteksi ketidaksesuaian antar gambar.',
          },
        ],
        en: [
          {
            question: 'Which Autodesk Revit versions do you support?',
            answer:
              'We deliver models across Autodesk Revit releases from 2021 through the latest versions, matching your project BIM Execution Plan requirements.',
          },
          {
            question: 'Can you convert 2D AutoCAD drawings into a coordinated 3D Revit model?',
            answer:
              'Yes. We routinely convert 2D DWG/PDF drawing packages into coordinated 3D Revit models while flagging discrepancies found across plans and sections.',
          },
        ],
      },
      relatedSlugs: ['jasa-bim-modeling', 'jasa-bim-coordination', 'jasa-rebar-detailing'],
    },
  },
  {
    id: 'seo-tekla-structures',
    number: '03',
    slugId: 'jasa-tekla-structures',
    slugEn: 'jasa-tekla-structures',
    iconKey: 'tekla',
    cardTitle: { id: 'Jasa Tekla Structures Indonesia', en: 'Tekla Structures Services Indonesia' },
    cardDescription: {
      id: 'Detailing struktur baja, sambungan baut/las, precast, dan beton bertulang di Tekla.',
      en: 'Constructible steel detailing, connection design, precast, and rebar modeling in Tekla.',
    },
    seoLanding: {
      slug: 'jasa-tekla-structures',
      primaryKeyword: {
        id: 'Jasa Tekla Structures Indonesia',
        en: 'Tekla Structures Detailing Services',
      },
      supportingKeywords: {
        id: ['Steel Detailing Tekla', 'Shop Drawing Struktur Baja', 'Tekla Rebar Modeling', 'Fabrikasi Baja'],
        en: ['Structural Steel Detailing', 'Tekla Connection Detailing', 'Assembly Drawings', 'NC DSTV Files'],
      },
      seoTitle: {
        id: 'Jasa Tekla Structures Indonesia & Steel Detailing | J&J Engineering',
        en: 'Tekla Structures Detailing & Steel Shop Drawings | J&J Engineering',
      },
      metaDescription: {
        id: 'Jasa Tekla Structures Indonesia untuk steel detailing, sambungan baja, assembly drawing, single part drawing, NC files, dan detailing beton pracetak/tulangan.',
        en: 'Constructible Tekla Structures services for steel detailing, connection modeling, assembly & single-part drawings, NC files, and concrete detailing.',
      },
      h1: {
        id: 'Jasa Tekla Structures Indonesia untuk Detailing Struktur Baja & Beton',
        en: 'Tekla Structures Detailing Services for Steel & Concrete Construction',
      },
      intro: {
        id: 'Pemodelan struktur baja dan beton berpresisi fabrikasi (LOD 400) untuk memastikan setiap sambungan, pelat buhul, baut, dan profil siap diproduksi di workshop maupun dipasang di lapangan.',
        en: 'Fabrication-grade LOD 400 modeling in Tekla Structures ensuring every steel member, gusset plate, bolt group, and weld detail is workshop-ready.',
      },
      serviceDescription: {
        id: [
          'Untuk proyek pabrik industri, gudang bentang lebar, jembatan rangka baja, gedung komersial struktur baja komposit, maupun beton bertulang kompleks, akurasi detailing menentukan kelancaran fabrikasi dan ereksi di lapangan.',
          'J&J BIM & Structure Engineering menghadirkan jasa Tekla Structures Indonesia yang menghasilkan model konstruksi siap fabrikasi lengkap dengan numbering otomatis, Single Part Drawing, Assembly Drawing, General Arrangement (GA) Drawing, hingga file NC/DSTV untuk mesin CNC workshop.',
        ],
        en: [
          'For industrial plants, long-span warehouses, steel bridges, and composite high-rise structures, fabrication detailing precision directly dictates workshop efficiency and site erection speed.',
          'J&J delivers Tekla Structures detailing packages complete with automated part/assembly numbering, Single-Part Drawings, Assembly Drawings, General Arrangement (GA) erection plans, and NC/DSTV files for CNC fabrication.',
        ],
      },
      benefits: {
        id: [
          'Akurasi tinggi pada geometri sambungan baut, pelat pengaku, dan lubang angkur.',
          'Meminimalisir kesalahan potong dan perakitan di workshop fabrikasi baja.',
          'Penghitungan daftar material (BOM / Bolt List / Cutting List) secara otomatis.',
          'Kemudahan integrasi model Tekla dengan disiplin lain melalui format IFC.',
        ],
        en: [
          'High dimensional precision across bolted connections, stiffeners, and anchor bolt layouts.',
          'Minimizes workshop cutting errors and on-site steel erection rework.',
          'Generates automated Bill of Materials (BOM), Bolt Lists, and Steel Cutting Lists.',
          'Seamless model federation via IFC with architectural and MEP models.',
        ],
      },
      deliverables: {
        id: [
          'Model 3D Tekla Structures (.db1 / IFC) siap fabrikasi LOD 400',
          'General Arrangement (GA) & Erection Drawings untuk pemasangan lapangan',
          'Assembly Drawings & Single Part Drawings untuk produksi workshop',
          'Material List, Bolt List, dan file CNC (NC / DSTV) sesuai kebutuhan fabrikator',
        ],
        en: [
          'Fabrication-grade 3D Tekla Structures model (LOD 400) & IFC export',
          'General Arrangement (GA) & Steel Erection Drawings',
          'Workshop Assembly Drawings & Single-Part Drawings',
          'Bill of Materials, Bolt Lists, and NC/DSTV files for CNC cutting lines',
        ],
      },
      softwareStack: ['Tekla Structures', 'Trimble Connect', 'Autodesk AutoCAD', 'IDEA StatiCa / Connection Check'],
      image: SITE_ASSETS.steelStructure,
      imageAlt: {
        id: 'Konstruksi rangka baja bentang lebar hasil detailing Tekla Structures',
        en: 'Long-span structural steel truss engineered for Tekla Structures detailing',
      },
      faqs: {
        id: [
          {
            question: 'Apakah J&J menyediakan gambar Assembly dan Single Part untuk pabrikasi baja?',
            answer:
              'Ya, paket Tekla Structures kami mencakup General Arrangement Drawing, Assembly Drawing, Single Part Drawing, serta daftar baut dan berat profil baja.',
          },
          {
            question: 'Apakah file NC/DSTV bisa disediakan untuk mesin potong CNC?',
            answer:
              'Tentu, kami dapat mengekspor file NC/DSTV langsung dari model Tekla Structures yang telah melalui pemeriksaan bentrokan dan penomoran.',
          },
        ],
        en: [
          {
            question: 'Do you provide both Assembly and Single-Part drawings for steel fabrication?',
            answer:
              'Yes. Our Tekla Structures deliverables include General Arrangement (erection) drawings, Assembly drawings, Single-Part drawings, and complete bolt and material summaries.',
          },
          {
            question: 'Can you export NC/DSTV files for CNC steel fabrication machinery?',
            answer:
              'Yes, we export verified NC/DSTV fabrication data directly from the numbered and clash-checked Tekla Structures model.',
          },
        ],
      },
      relatedSlugs: ['jasa-shop-drawing-struktur', 'jasa-structural-engineering', 'jasa-bim-coordination'],
    },
  },
  {
    id: 'seo-shop-drawing-struktur',
    number: '04',
    slugId: 'jasa-shop-drawing-struktur',
    slugEn: 'jasa-shop-drawing-struktur',
    iconKey: 'shopdrawing',
    cardTitle: { id: 'Jasa Shop Drawing Struktur', en: 'Structural Shop Drawing Services' },
    cardDescription: {
      id: 'Gambar kerja konstruksi struktur beton dan baja yang siap disetujui konsultan MK.',
      en: 'Detailed concrete and steel construction shop drawings ready for consultant approval.',
    },
    seoLanding: {
      slug: 'jasa-shop-drawing-struktur',
      primaryKeyword: {
        id: 'Jasa Shop Drawing Struktur',
        en: 'Structural Shop Drawing Services',
      },
      supportingKeywords: {
        id: ['Gambar Kerja Konstruksi', 'As-Built Drawing Struktur', 'Shop Drawing Beton & Baja', 'Construction Engineering Services'],
        en: ['Construction Shop Drawings', 'As-Built Structural Drawings', 'Concrete Formwork Drawings', 'Steel Erection Drawings'],
      },
      seoTitle: {
        id: 'Jasa Shop Drawing Struktur Beton & Baja | J&J Engineering',
        en: 'Structural Shop Drawing Services for Concrete & Steel | J&J Engineering',
      },
      metaDescription: {
        id: 'Layanan jasa shop drawing struktur detail dan terkoordinasi untuk kontraktor proyek gedung, gudang, dan infrastruktur. Format DWG & PDF standar konstruksi.',
        en: 'Coordinated structural shop drawing services for general contractors across concrete, steel, and foundation works. Clean DWG and PDF submittals.',
      },
      h1: {
        id: 'Jasa Shop Drawing Struktur Terkoordinasi & Siap Pelaksanaan Lapangan',
        en: 'Coordinated Structural Shop Drawing Services for Site Execution',
      },
      intro: {
        id: 'Penyusunan gambar kerja struktur yang jelas, terbaca baik oleh tim lapangan, dan selaras dengan gambar arsitektur maupun MEP guna memperlancar persetujuan pengawas.',
        en: 'Clear, unambiguous structural shop drawings coordinated with architectural and MEP layouts to accelerate site approval and field execution.',
      },
      serviceDescription: {
        id: [
          'Shop drawing merupakan panduan langsung bagi mandor, pelaksana, dan subkontraktor di lapangan. Gambar kerja yang kurang detail atau bertabrakan dengan jalur pipa/ducting MEP dapat menghambat pengecoran maupun pengajuan approval Manajemen Konstruksi (MK).',
          'Tim J&J menyusun jasa shop drawing struktur meliputi gambar galian & pondasi, pilecap, tie beam, kolom, balok, pelat lantai, tangga, dinding penahan tanah, struktur atap baja, hingga gambar As-Built Drawing pasca-konstruksi.',
        ],
        en: [
          'Shop drawings serve as the primary execution instruction for site engineers and construction crews. Incomplete detailing or uncoordinated openings often delay concrete pours and consultant approvals.',
          'J&J produces comprehensive structural shop drawings covering piling and foundations, pile caps, tie beams, columns, beams, slabs, core walls, staircases, structural steel framing, and final As-Built documentation.',
        ],
      },
      benefits: {
        id: [
          'Mempercepat proses persetujuan (approval) dokumen oleh Konsultan Pengawas / MK.',
          'Koordinasi bukaan (opening) struktur terhadap jalur MEP dan lift sudah tervalidasi.',
          'Standar anotasi, notasi dimensi, dan kop gambar disesuaikan dengan identitas proyek kontraktor.',
          'Mengurangi risiko pembongkaran beton akibat kesalahan elevasi atau dimensi.',
        ],
        en: [
          'Streamlines drawing review and approval cycles with supervision consultants.',
          'Pre-validates structural slab and beam openings against MEP shaft and ducting routes.',
          'Follows your company title blocks, layer standards, and annotation conventions.',
          'Prevents costly concrete chipping and dimensional rework on site.',
        ],
      },
      deliverables: {
        id: [
          'Gambar Shop Drawing Struktur format AutoCAD (.DWG) & PDF siap cetak',
          'Denah bekisting, elevasi, potongan melintang, dan detail sambungan struktur',
          'Koordinasi posisi sparing/opening pipa MEP pada pelat dan balok',
          'Revisi gambar mengikuti catatan review MK hingga status For Execution',
        ],
        en: [
          'Structural Shop Drawing sets in AutoCAD (.DWG) & print-ready PDF',
          'Formwork plans, elevations, cross-sections, and structural joint details',
          'Coordinated MEP sleeve and structural opening schedules',
          'Revision updates responding to consultant markups through final approval',
        ],
      },
      softwareStack: ['Autodesk AutoCAD', 'Autodesk Revit', 'Tekla Structures', 'Bluebeam / PDF Markup'],
      image: SITE_ASSETS.structuralBlueprint,
      imageAlt: {
        id: 'Gambar shop drawing struktur bangunan pada meja teknik J&J Engineering',
        en: 'Structural shop drawing documentation prepared by J&J Engineering',
      },
      faqs: {
        id: [
          {
            question: 'Apakah J&J mengikuti standar kop gambar dan layer milik kontraktor?',
            answer:
              'Ya. Sebelum pekerjaan dimulai, kami menyesuaikan template kop gambar, standar teks, skala, dan sistem penomoran lembar sesuai pedoman proyek klien.',
          },
          {
            question: 'Apakah layanan mencakup revisi dari catatan Konsultan MK?',
            answer:
              'Ya, koordinasi revisi berdasarkan komentar teknis dari tim Pengawas/MK termasuk dalam alur kerja penyusunan shop drawing kami.',
          },
        ],
        en: [
          {
            question: 'Can you follow our company CAD title block and layer standards?',
            answer:
              'Yes. Prior to drafting, we align our templates, layer conventions, dimension styles, and sheet numbering directly with your project guidelines.',
          },
          {
            question: 'Are consultant markup revisions included in the workflow?',
            answer:
              'Yes, incorporating engineering review comments from the supervision consultant into updated drawing revisions is built into our shop drawing process.',
          },
        ],
      },
      relatedSlugs: ['jasa-rebar-detailing', 'jasa-bim-modeling', 'jasa-tekla-structures'],
    },
  },
  {
    id: 'seo-rebar-detailing',
    number: '05',
    slugId: 'jasa-rebar-detailing',
    slugEn: 'jasa-rebar-detailing',
    iconKey: 'rebar',
    cardTitle: { id: 'Jasa Rebar Detailing', en: 'Rebar Detailing & BBS Services' },
    cardDescription: {
      id: 'Detail penulangan beton bertulang 3D/2D dan Bar Bending Schedule (BBS) yang presisi.',
      en: '3D/2D reinforced concrete rebar detailing and Bar Bending Schedule (BBS).',
    },
    seoLanding: {
      slug: 'jasa-rebar-detailing',
      primaryKeyword: {
        id: 'Jasa Rebar Detailing',
        en: 'Rebar Detailing & BBS Services',
      },
      supportingKeywords: {
        id: ['Bar Bending Schedule (BBS)', 'Detail Pembesian Beton Bertulang', 'Optimasi Potong Besi', 'Jasa Shop Drawing Struktur'],
        en: ['Bar Bending Schedule', 'Concrete Reinforcement Detailing', 'Rebar Optimization', '3D Rebar Modeling'],
      },
      seoTitle: {
        id: 'Jasa Rebar Detailing & Bar Bending Schedule (BBS) | J&J Engineering',
        en: 'Rebar Detailing & Bar Bending Schedule (BBS) Services | J&J',
      },
      metaDescription: {
        id: 'Jasa Rebar Detailing beton bertulang dan penyusunan Bar Bending Schedule (BBS) presisi untuk meminimalkan waste besi proyek konstruksi.',
        en: 'Precision reinforced concrete Rebar Detailing and Bar Bending Schedule (BBS) services to optimize steel cutting lengths and reduce site waste.',
      },
      h1: {
        id: 'Jasa Rebar Detailing & Bar Bending Schedule (BBS) Presisi',
        en: 'Precision Rebar Detailing & Bar Bending Schedule (BBS) Services',
      },
      intro: {
        id: 'Pemodelan dan penggambaran detail tulangan beton bertulang lengkap dengan panjang penyaluran, kait standar, serta rekapitulasi Bar Bending Schedule (BBS).',
        en: 'Comprehensive concrete reinforcement modeling and detailing complete with lap splices, hook geometries, and workshop-ready Bar Bending Schedules (BBS).',
      },
      serviceDescription: {
        id: [
          'Besi tulangan merupakan salah satu komponen biaya material terbesar dalam konstruksi struktur beton bertulang. Kesalahan perhitungan panjang potong, overlap (sambungan lewatan), atau kepadatan tulangan di area joint balok-kolom dapat memicu pemborosan material maupun kesulitan pemasangan di lapangan.',
          'J&J menyediakan jasa Rebar Detailing mencakup pemodelan penulangan 3D di area kritis serta penyusunan Bar Bending Schedule (BBS) yang terstruktur berdasarkan zona pengecoran, lantai, dan tipe elemen struktur.',
        ],
        en: [
          'Reinforcing steel represents a major cost center in concrete construction. Inaccurate cutting lengths, uncoordinated lap splices, or congested beam-column joints quickly create material waste and installation delays.',
          'J&J delivers Rebar Detailing services spanning 3D congestion checks at critical joints and structured Bar Bending Schedules (BBS) organized by pour zone, floor level, and structural element.',
        ],
      },
      benefits: {
        id: [
          'Mengurangi sisa potongan besi (rebar waste) melalui perencanaan panjang potong yang terukur.',
          'Memastikan tidak terjadi bentrokan tulangan di area joint kolom-balok atau dinding geser.',
          'Memudahkan fabrikasi besi baik secara manual di lokasi proyek maupun di pabrik cut & bend.',
          'Menyajikan data kebutuhan berat besi per diameter dan per zona pengecoran.',
        ],
        en: [
          'Reduces rebar off-cut waste through systematic bar length planning.',
          'Prevents reinforcement congestion clashes at critical beam-column and shear wall joints.',
          'Supports both on-site bar bending yards and off-site cut-and-bend fabrication.',
          'Provides clear steel tonnage breakdowns by bar diameter and concrete pour sequence.',
        ],
      },
      deliverables: {
        id: [
          'Gambar Detail Pembesian Struktur (Pondasi, Kolom, Balok, Pelat, Core Wall, Tangga)',
          'Dokumen Bar Bending Schedule (BBS) format Excel & PDF lengkap dengan sketsa tekukan',
          'Rekapitulasi Tonase Besi per diameter dan per lantai/zona kerja',
          'Model 3D Rebar (Revit / Tekla) untuk verifikasi area dengan kepadatan tulangan tinggi',
        ],
        en: [
          'Reinforcement Detailing Drawings (Foundations, Columns, Beams, Slabs, Core Walls, Stairs)',
          'Bar Bending Schedule (BBS) in Excel & PDF with standard bending shape diagrams',
          'Steel Weight & Tonnage Summary by bar size and construction pour zone',
          '3D Rebar Models (Revit / Tekla) for high-congestion structural joint verification',
        ],
      },
      softwareStack: ['Autodesk Revit Rebar', 'Tekla Structures', 'AutoCAD Structural Detailing', 'Excel BBS'],
      image: SITE_ASSETS.bimWireframe,
      imageAlt: {
        id: 'Detail struktur beton bertulang dan sistem pembesian bangunan',
        en: 'Reinforced concrete structural framework for rebar detailing',
      },
      faqs: {
        id: [
          {
            question: 'Apakah BBS yang dibuat mengikuti standar SNI atau standar internasional?',
            answer:
              'Ya, perhitungan panjang penyaluran (development length), kait (hook), dan tekukan mengacu pada SNI 2847 atau standar ACI / BS / Eurocode sesuai spesifikasi proyek.',
          },
          {
            question: 'Apakah BBS bisa dipisah berdasarkan tahapan zona pengecoran lapangan?',
            answer:
              'Bisa. Kami mengelompokkan lembar BBS sesuai sequence pengecoran kontraktor agar tim logistik dan mandor besi mudah melakukan pemesanan.',
          },
        ],
        en: [
          {
            question: 'Which reinforcement codes do your Bar Bending Schedules follow?',
            answer:
              'Lap lengths, hooks, and bending allowances are detailed according to SNI 2847, ACI 318, BS 8666, or Eurocode 2 as specified by your project engineer.',
          },
          {
            question: 'Can the BBS be segmented by construction pour sequence?',
            answer:
              'Yes. We organize BBS packages by pour zone, level, and structural grid to support phased procurement and site bar-bending schedules.',
          },
        ],
      },
      relatedSlugs: ['jasa-shop-drawing-struktur', 'jasa-revit-modeling', 'jasa-bim-modeling'],
    },
  },
  {
    id: 'seo-bim-coordination',
    number: '06',
    slugId: 'jasa-bim-coordination',
    slugEn: 'jasa-bim-coordination',
    iconKey: 'coordination',
    cardTitle: { id: 'Jasa BIM Coordination', en: 'BIM Coordination & Clash Detection' },
    cardDescription: {
      id: 'Federasi model Struktur-Arsitektur-MEP dan laporan Clash Detection di Navisworks.',
      en: 'Multi-discipline Structural-Architectural-MEP federation and Navisworks clash detection.',
    },
    seoLanding: {
      slug: 'jasa-bim-coordination',
      primaryKeyword: {
        id: 'Jasa BIM Coordination',
        en: 'BIM Coordination & Clash Detection Services',
      },
      supportingKeywords: {
        id: ['Clash Detection Navisworks', 'Koordinasi BIM MEP Struktur', 'BIM Execution Plan', 'Jasa BIM Modeling Indonesia'],
        en: ['Navisworks Clash Detection', 'Multi-Discipline BIM Coordination', 'Federated BIM Model', 'Constructability Review'],
      },
      seoTitle: {
        id: 'Jasa BIM Coordination & Clash Detection | J&J Engineering',
        en: 'BIM Coordination & Clash Detection Services | J&J Engineering',
      },
      metaDescription: {
        id: 'Jasa BIM Coordination & Clash Detection antara model Struktur, Arsitektur, dan MEP menggunakan Navisworks. Identifikasi konflik desain sebelum konstruksi.',
        en: 'Multi-discipline BIM Coordination and Clash Detection services aligning Structural, Architectural, and MEP models before construction begins.',
      },
      h1: {
        id: 'Jasa BIM Coordination & Clash Detection Antar Disiplin Proyek',
        en: 'Multi-Discipline BIM Coordination & Clash Detection Services',
      },
      intro: {
        id: 'Menyatukan model Struktur, Arsitektur, dan MEP ke dalam satu federated model untuk mendeteksi dan menyelesaikan potensi bentrokan desain sebelum pekerjaan fisik dimulai.',
        en: 'Federating Structural, Architectural, and MEP models into a unified review environment to resolve physical interferences prior to site construction.',
      },
      serviceDescription: {
        id: [
          'Konflik antara elevasi balok struktur dengan jalur ducting HVAC, pipa plumbing, atau tray kabel elektrikal merupakan penyebab umum pembongkaran dan keterlambatan proyek di lapangan.',
          'Melalui layanan jasa BIM Coordination, tim J&J menggabungkan model dari seluruh disiplin, menjalankan Clash Matrix terstruktur di Navisworks, mendokumentasikan setiap temuan bentrokan dalam Clash Report, serta memberikan rekomendasi teknis penyesuaian jalur atau bukaan struktur.',
        ],
        en: [
          'Physical clashes between structural beams and HVAC ductwork, plumbing lines, or electrical cable trays frequently cause costly site delays and redesigns.',
          'Through dedicated BIM Coordination services, J&J federates models across disciplines, executes rule-based Clash Detection matrices in Navisworks, issues prioritized Clash Reports, and coordinates practical resolution options.',
        ],
      },
      benefits: {
        id: [
          'Mendeteksi tabrakan fisik (hard clash) dan ruang kerja/clearance sebelum konstruksi.',
          'Menyelaraskan posisi sleeve dan penetrasi MEP pada elemen struktur.',
          'Mengurangi Change Order (pekerjaan tambah kurang) akibat ketidaksesuaian antar gambar.',
          'Menyediakan bahan rapat koordinasi proyek yang visual dan objektif.',
        ],
        en: [
          'Identifies hard clashes and maintenance clearance issues prior to site mobilization.',
          'Aligns MEP penetrations and structural sleeves cleanly across floors.',
          'Minimizes change orders and RFIs caused by uncoordinated discipline drawings.',
          'Delivers visual, issue-tracked review materials for project coordination meetings.',
        ],
      },
      deliverables: {
        id: [
          'Federated 3D Model (.NWD / .NWF / .IFC)',
          'Clash Detection Report (HTML / PDF / Excel) lengkap dengan screenshot dan ID elemen',
          'Matriks prioritas penyelesaian bentrokan (Struktur vs MEP, Arsitektur vs Struktur)',
          'Log pelacakan status isu hingga model mencapai status Clash-Free',
        ],
        en: [
          'Federated 3D Review Models (.NWD / .NWF / .IFC)',
          'Detailed Clash Detection Reports (HTML / PDF / Excel) with element IDs and viewpoints',
          'Prioritized clash matrix across Structural, Architectural, and MEP trades',
          'Issue resolution tracking log through coordinated sign-off',
        ],
      },
      softwareStack: ['Autodesk Navisworks Manage', 'Autodesk Revit', 'Trimble Connect', 'BIMcollab / BCF'],
      image: SITE_ASSETS.towerCrane,
      imageAlt: {
        id: 'Proyek konstruksi gedung terkoordinasi dengan manajemen BIM J&J',
        en: 'Multi-discipline coordinated building construction project',
      },
      faqs: {
        id: [
          {
            question: 'Format file apa saja yang dapat digabungkan dalam BIM Coordination?',
            answer:
              'Kami dapat menggabungkan file dari Autodesk Revit (.RVT), Tekla Structures, AutoCAD 3D (.DWG), serta OpenBIM (.IFC) ke dalam Navisworks.',
          },
          {
            question: 'Apakah J&J ikut membantu memberikan solusi saat ditemukan clash dengan struktur?',
            answer:
              'Ya, karena latar belakang kami mencakup structural engineering, kami memberikan opsi teknis seperti penyesuaian sleeve/opening atau perkuatan lokal untuk didiskusikan dengan konsultan perencana.',
          },
        ],
        en: [
          {
            question: 'Which model formats can be federated for BIM Coordination?',
            answer:
              'We federate models across Autodesk Revit (.RVT), Tekla Structures, 3D AutoCAD (.DWG), and OpenBIM (.IFC) inside Navisworks Manage.',
          },
          {
            question: 'Do you assist with engineering resolution options when structural clashes occur?',
            answer:
              'Yes. Backed by structural engineering expertise, we propose practical opening/sleeve adjustments or routing alternatives for design-team sign-off.',
          },
        ],
      },
      relatedSlugs: ['jasa-bim-modeling', 'jasa-revit-modeling', 'jasa-structural-engineering'],
    },
  },
  {
    id: 'seo-structural-engineering',
    number: '07',
    slugId: 'jasa-structural-engineering',
    slugEn: 'jasa-structural-engineering',
    iconKey: 'structural',
    cardTitle: { id: 'Jasa Structural Engineering', en: 'Structural Engineering Services' },
    cardDescription: {
      id: 'Analisis struktur bangunan tahan gempa, perencanaan beton & baja, serta estimasi RAB.',
      en: 'Seismic structural analysis, concrete & steel design, and construction cost budgeting.',
    },
    seoLanding: {
      slug: 'jasa-structural-engineering',
      primaryKeyword: {
        id: 'Jasa Structural Engineering',
        en: 'Structural Engineering Services',
      },
      supportingKeywords: {
        id: ['Jasa Analisis Struktur Bangunan', 'Perencanaan Struktur Gedung', 'Perhitungan RAB Konstruksi', 'Engineering Consultant Indonesia'],
        en: ['Building Structural Analysis', 'Seismic Structural Design', 'Steel & Concrete Engineering', 'Construction Engineering Services'],
      },
      seoTitle: {
        id: 'Jasa Structural Engineering & Analisis Struktur Bangunan | J&J',
        en: 'Structural Engineering & Building Analysis Services | J&J',
      },
      metaDescription: {
        id: 'Jasa Structural Engineering dan analisis struktur bangunan profesional (beton bertulang, baja, pondasi) beserta laporan perhitungan lengkap dan RAB.',
        en: 'Professional Structural Engineering and building structural analysis services for reinforced concrete, steel structures, foundations, and engineering reports.',
      },
      h1: {
        id: 'Jasa Structural Engineering & Analisis Struktur Bangunan',
        en: 'Professional Structural Engineering & Building Analysis Services',
      },
      intro: {
        id: 'Layanan analisis dan perencanaan struktur bangunan berbasis metode elemen hingga yang mengutamakan keamanan struktural, efisiensi material, dan kepatuhan kode teknik.',
        en: 'Finite-element structural analysis and design focused on structural safety, material efficiency, and strict compliance with building design codes.',
      },
      serviceDescription: {
        id: [
          'Keandalan sebuah bangunan bertumpu pada sistem struktur yang dirancang secara cermat terhadap beban gravitasi, angin, dan beban gempa. J&J BIM & Structure Engineering melayani analisis struktur untuk bangunan baru, evaluasi struktur eksisting, desain perkuatan, hingga perencanaan struktur baja industri.',
          'Proses analisis diintegrasikan dengan pemodelan BIM serta perhitungan Quantity Take Off dan Rencana Anggaran Biaya (RAB) sehingga pemilik proyek dan kontraktor memperoleh gambaran teknis sekaligus estimasi biaya struktur yang realistis.',
        ],
        en: [
          'Building resilience relies on structural systems carefully engineered for gravity, wind, and seismic loads. J&J provides structural analysis and design for new developments, existing structure evaluations, retrofitting concepts, and industrial steel framing.',
          'Our analytical models integrate smoothly with BIM documentation, Quantity Take Off, and Construction Cost Estimation (RAB) so developers and contractors gain clear technical and commercial visibility.',
        ],
      },
      benefits: {
        id: [
          'Desain struktur yang aman dan memenuhi ketentuan standar gempa serta pembebanan bangunan.',
          'Optimasi dimensi penampang beton dan profil baja untuk efisiensi biaya konstruksi.',
          'Laporan perhitungan terstruktur dan mudah ditinjau oleh tim penilai atau dinas terkait.',
          'Terintegrasi langsung dengan layanan BIM Modeling dan Shop Drawing.',
        ],
        en: [
          'Code-compliant structural designs engineered for regional seismic and wind criteria.',
          'Optimized concrete member sizing and steel section selection for material efficiency.',
          'Well-organized calculation reports structured for peer review and permitting.',
          'Direct integration with downstream BIM Modeling and Shop Drawing deliverables.',
        ],
      },
      deliverables: {
        id: [
          'Model Analisis Struktur 3D (ETABS / SAP2000)',
          'Laporan Perhitungan Struktur Lengkap (Beban, Gaya Dalam, Drift, Pondasi, Penulangan)',
          'Gambar Desain Struktur (DED Struktur: Denah Balok, Kolom, Pelat, Pondasi)',
          'Rekapitulasi Volume Struktur & Rencana Anggaran Biaya (RAB) sesuai lingkup',
        ],
        en: [
          '3D Structural Analysis Models (ETABS / SAP2000)',
          'Comprehensive Structural Calculation Reports (Loads, Drift, Foundations, Member Design)',
          'Structural Engineering Design Drawings (Columns, Beams, Slabs, Foundations)',
          'Structural Quantity Summary & Construction Cost Estimate (RAB) where requested',
        ],
      },
      softwareStack: ['CSI ETABS', 'CSI SAP2000', 'CSI SAFE', 'Autodesk Revit / Tekla'],
      image: SITE_ASSETS.heroBuilding,
      imageAlt: {
        id: 'Gedung komersial modern dengan sistem rekayasa struktur J&J Engineering',
        en: 'Modern commercial high-rise engineered with structural precision',
      },
      faqs: {
        id: [
          {
            question: 'Peraturan struktur apa yang digunakan dalam analisis bangunan di Indonesia?',
            answer:
              'Analisis kami mengacu pada SNI 1726 (ketahanan gempa), SNI 1727 (beban minimum), SNI 2847 (beton struktural), dan SNI 1729 (struktur baja) maupun standar internasional seperti ACI/AISC/Eurocode.',
          },
          {
            question: 'Apakah J&J juga melayani penyusunan RAB berdasarkan hasil desain struktur?',
            answer:
              'Ya, kami menyediakan layanan terpadu dari analisis struktur, pemodelan BIM, ekstraksi QTO, hingga penyusunan Rencana Anggaran Biaya (RAB) pekerjaan struktur.',
          },
        ],
        en: [
          {
            question: 'Which structural design codes do you apply?',
            answer:
              'We engineer in accordance with Indonesian Standards (SNI 1726 Seismic, SNI 1727 Loads, SNI 2847 Concrete, SNI 1729 Steel) as well as ACI, AISC, ASCE, and Eurocode criteria for international clients.',
          },
          {
            question: 'Can structural analysis be paired with Quantity Take Off and Cost Estimation (RAB)?',
            answer:
              'Yes. We offer an end-to-end engineering package connecting structural analysis with 3D BIM modeling, QTO extraction, and itemized cost budgeting.',
          },
        ],
      },
      relatedSlugs: ['jasa-bim-modeling', 'jasa-tekla-structures', 'jasa-rebar-detailing'],
    },
  },
];
