import { BlogArticle } from '../types';
import { SITE_ASSETS } from './assets';

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'understanding-building-information-modeling',
    topicTag: { id: 'BIM Fundamentals', en: 'BIM Fundamentals' },
    seoTitle: {
      id: 'Memahami Building Information Modeling (BIM) dalam Konstruksi Modern | J&J',
      en: 'Understanding Building Information Modeling (BIM) in Modern Construction | J&J',
    },
    metaDescription: {
      id: 'Panduan lengkap memahami Building Information Modeling (BIM), dimensi 3D-5D, standar LOD, serta manfaatnya bagi kontraktor dan konsultan engineering.',
      en: 'A practical engineering guide to Building Information Modeling (BIM), LOD standards, and how digital coordination supports contractors and consultants.',
    },
    h1: {
      id: 'Memahami Building Information Modeling (BIM) dalam Industri Konstruksi',
      en: 'Understanding Building Information Modeling (BIM) in Modern Construction',
    },
    excerpt: {
      id: 'Pelajari bagaimana metodologi BIM menyatukan data geometri 3D, spesifikasi material, dan koordinasi antar disiplin untuk proyek konstruksi.',
      en: 'Explore how BIM methodology unifies 3D geometry, material specifications, and multi-discipline coordination across the building lifecycle.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-10-14',
    readTime: '6 min',
    featuredImage: SITE_ASSETS.bimWireframe,
    imageAlt: {
      id: 'Ilustrasi konsep Building Information Modeling 3D pada gedung bertingkat',
      en: '3D Building Information Modeling structural wireframe visualization',
    },
    sections: {
      id: [
        {
          h2: 'Apa Itu Building Information Modeling (BIM)?',
          paragraphs: [
            'Building Information Modeling (BIM) adalah proses kolaboratif berbasis model digital 3D yang menyimpan informasi teknis terstruktur mengenai karakteristik fisik dan fungsional suatu bangunan atau infrastruktur.',
            'Berbeda dengan gambar CAD 2D konvensional yang hanya merepresentasikan garis dan teks terpisah, setiap objek di dalam model BIM—seperti kolom beton, balok baja, atau jalur pipa—memiliki identitas parameter, dimensi, mutu material, dan keterkaitan langsung dengan denah serta potongan.',
          ],
          subheadings: [
            {
              h3: 'Perbedaan Utama CAD 2D dan BIM 3D',
              text: 'Pada alur kerja CAD 2D, perubahan pada satu denah menuntut pembaruan manual pada puluhan lembar potongan. Pada alur kerja BIM, perubahan pada model 3D secara otomatis memperbarui seluruh view dan jadwal volume yang terhubung.',
            },
          ],
        },
        {
          h2: 'Memahami Level of Development (LOD) dalam BIM',
          paragraphs: [
            'LOD mendefinisikan tingkat ketelitian geometri dan informasi yang harus dimuat pada setiap tahapan proyek: LOD 200 untuk konsep awal, LOD 300 untuk desain rinci, LOD 350 untuk koordinasi antar disiplin, hingga LOD 400 untuk detail fabrikasi dan shop drawing.',
          ],
        },
      ],
      en: [
        {
          h2: 'What Is Building Information Modeling (BIM)?',
          paragraphs: [
            'Building Information Modeling (BIM) is a model-driven collaborative process that captures structured digital data describing the physical geometry and engineering properties of a facility.',
            'Unlike disconnected 2D CAD lines, every component inside a BIM model—concrete columns, steel girders, slabs, or MEP ducts—carries parametric dimensions, material grades, and bi-directional links to plans, sections, and schedules.',
          ],
          subheadings: [
            {
              h3: 'Key Shift from 2D CAD to 3D BIM',
              text: 'In 2D drafting, a single beam revision requires manual updates across multiple sheets. In BIM, modifying the 3D element automatically propagates through associated plans, elevations, and quantity tables.',
            },
          ],
        },
        {
          h2: 'Level of Development (LOD) Standards',
          paragraphs: [
            'LOD defines geometric and data maturity across project phases: LOD 200 for schematic concepts, LOD 300 for design development, LOD 350 for trade coordination, and LOD 400 for fabrication and shop drawing execution.',
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Siapa saja pihak yang paling membutuhkan implementasi BIM?',
          answer:
            'Kontraktor umum, konsultan perencana struktur/arsitektur/MEP, developer properti, dan fabrikator baja membutuhkan BIM untuk menjaga konsistensi gambar, volume, dan koordinasi lapangan.',
        },
      ],
      en: [
        {
          question: 'Which project stakeholders benefit most from BIM?',
          answer:
            'General contractors, structural/architectural/MEP consultants, developers, and steel fabricators rely on BIM to keep drawings, quantities, and site coordination aligned.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-bim-modeling', 'jasa-bim-coordination'],
    relatedArticleSlugs: ['bim-modeling-for-construction-projects', 'bim-coordination'],
  },
  {
    slug: 'bim-modeling-for-construction-projects',
    topicTag: { id: 'Construction BIM', en: 'Construction BIM' },
    seoTitle: {
      id: 'Penerapan BIM Modeling untuk Proyek Konstruksi & Kontraktor | J&J',
      en: 'BIM Modeling for Construction Projects & Contractors | J&J Engineering',
    },
    metaDescription: {
      id: 'Bagaimana BIM Modeling membantu kontraktor memvalidasi desain DED, mengurangi pekerjaan ulang, dan mempercepat persetujuan gambar kerja.',
      en: 'How BIM Modeling supports contractors in validating construction drawings, minimizing site rework, and accelerating submittal approvals.',
    },
    h1: {
      id: 'BIM Modeling untuk Proyek Konstruksi: Dari Tahap Tender hingga Pelaksanaan',
      en: 'BIM Modeling for Construction Projects: From Tender to Site Execution',
    },
    excerpt: {
      id: 'Bagaimana model BIM 3D membantu kontraktor memvalidasi kelayakan konstruksi (constructability) sejak tahap persiapan proyek.',
      en: 'How constructible 3D BIM models help general contractors verify design intent and streamline field execution.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-10-18',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.towerCrane,
    imageAlt: {
      id: 'Konstruksi bangunan bertingkat dengan tower crane dan implementasi BIM',
      en: 'Multi-story construction site executing BIM-coordinated structural plans',
    },
    sections: {
      id: [
        {
          h2: 'Validasi Gambar For-Construction Sebelum Mobilisasi',
          paragraphs: [
            'Banyak kendala di lokasi konstruksi berawal dari perbedaan informasi antara gambar denah, potongan arsitektur, dan gambar struktur. Dengan membangun model BIM sebelum pengecoran dimulai, ketidaksesuaian elevasi maupun dimensi dapat ditemukan di layar komputer, bukan saat bekisting sudah terpasang.',
          ],
          subheadings: [
            {
              h3: 'Integrasi ke Jadwal Pekerjaan dan Pengadaan',
              text: 'Model konstruksi yang dikelompokkan berdasarkan zona lantai memudahkan tim procurement menghitung kebutuhan material per tahapan pengecoran.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Validating For-Construction Drawings Before Mobilization',
          paragraphs: [
            'Field delays frequently originate from discrepancies between structural plans, architectural sections, and MEP layouts. Building a pre-construction BIM model exposes elevation mismatches before formwork is erected.',
          ],
          subheadings: [
            {
              h3: 'Connecting Models to Phased Procurement',
              text: 'Segmenting the BIM model by floor and pour zone gives procurement teams clear material visibility ahead of each casting sequence.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Kapan waktu terbaik kontraktor menggunakan jasa BIM Modeling?',
          answer:
            'Idealnya sejak tahap persiapan tender atau segera setelah gambar For Construction diterima sebelum pekerjaan struktur bawah dimulai.',
        },
      ],
      en: [
        {
          question: 'When should a contractor engage BIM Modeling support?',
          answer:
            'Ideally during tender verification or immediately upon receiving For-Construction drawings before substructure work begins.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-bim-modeling', 'jasa-shop-drawing-struktur'],
    relatedArticleSlugs: ['understanding-building-information-modeling', 'quantity-take-off'],
  },
  {
    slug: 'revit-structural-modeling',
    topicTag: { id: 'Autodesk Revit', en: 'Autodesk Revit' },
    seoTitle: {
      id: 'Panduan Revit Structural Modeling untuk Struktur Beton & Baja | J&J',
      en: 'Revit Structural Modeling Guide for Concrete & Steel | J&J Engineering',
    },
    metaDescription: {
      id: 'Mengenal praktik terbaik Revit Structural Modeling: penataan Grid & Level, Shared Coordinates, Family Parametrik, hingga ekstraksi schedule struktur.',
      en: 'Best practices in Autodesk Revit Structural Modeling: Grids & Levels, Shared Coordinates, parametric families, and automated schedules.',
    },
    h1: {
      id: 'Revit Structural Modeling: Standar Pemodelan Struktur yang Rapi dan Terukur',
      en: 'Revit Structural Modeling: Building Clean, Coordinate-Accurate Models',
    },
    excerpt: {
      id: 'Praktik terbaik penyusunan model Autodesk Revit Structure agar siap dipakai untuk dokumentasi gambar kerja dan koordinasi lintas disiplin.',
      en: 'Engineering standards for structuring Autodesk Revit models to support coordination, documentation, and material takeoffs.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-10-22',
    readTime: '6 min',
    featuredImage: SITE_ASSETS.structuralBlueprint,
    imageAlt: {
      id: 'Model 3D Revit Structure pada layar monitor studio teknik',
      en: 'Autodesk Revit structural model displayed alongside engineering drawings',
    },
    sections: {
      id: [
        {
          h2: 'Fondasi Model Revit yang Andal',
          paragraphs: [
            'Kualitas sebuah model Revit tidak hanya dinilai dari tampilan 3D, tetapi dari kedisiplinan struktur datanya. Penetapan Shared Coordinates, Grid & Level yang seragam dengan model arsitektur, serta pemilihan Family struktural yang tepat memastikan model tidak bermasalah saat difederasi.',
          ],
          subheadings: [
            {
              h3: 'Parameterisasi dan Naming Convention',
              text: 'Setiap tipe balok (B1, B2), kolom (K1, K2), dan pelat diberi parameter Mark dan Type Name yang konsisten sehingga tabel schedule dapat disaring dengan cepat.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Foundations of a Reliable Revit Structural Model',
          paragraphs: [
            'Model quality in Autodesk Revit depends on disciplined data structure as much as 3D geometry. Aligning Shared Coordinates, Grids, and Levels with architectural links ensures trouble-free federation.',
          ],
          subheadings: [
            {
              h3: 'Standardized Naming and Shared Parameters',
              text: 'Assigning consistent Type Names and Marks to beams, columns, and slabs allows instant filtering across Revit Schedules and Navisworks search sets.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah model Revit Structure bisa dihubungkan dengan software analisis struktur?',
          answer:
            'Ya, melalui Analytical Model atau konversi IFC/CSIxRevit, geometri struktur dapat diselaraskan antara software analisis dan software BIM.',
        },
      ],
      en: [
        {
          question: 'Can Revit Structural models link with structural analysis software?',
          answer:
            'Yes. Analytical models and interoperability plugins enable geometry exchange between structural analysis tools and Revit.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-revit-modeling', 'jasa-bim-modeling'],
    relatedArticleSlugs: ['tekla-structures-in-construction', 'reinforcement-detailing'],
  },
  {
    slug: 'tekla-structures-in-construction',
    topicTag: { id: 'Tekla Structures', en: 'Tekla Structures' },
    seoTitle: {
      id: 'Peran Tekla Structures dalam Konstruksi Baja & Beton Pracetak | J&J',
      en: 'Tekla Structures in Construction: Fabrication-Grade Detailing | J&J',
    },
    metaDescription: {
      id: 'Pelajari keunggulan Tekla Structures untuk pemodelan LOD 400 struktur baja, sambungan baut/las, Assembly Drawing, dan ekspor file CNC NC/DSTV.',
      en: 'Learn how Tekla Structures supports LOD 400 steel connection detailing, Assembly & Single-Part drawings, and NC/DSTV fabrication data.',
    },
    h1: {
      id: 'Tekla Structures dalam Konstruksi: Jembatan dari Desain ke Fabrikasi',
      en: 'Tekla Structures in Construction: Bridging Structural Design and Fabrication',
    },
    excerpt: {
      id: 'Mengapa kontraktor struktur baja dan precast mengandalkan Tekla Structures untuk ketepatan sambungan, numbering, dan dokumen workshop.',
      en: 'Why steel fabricators and contractors rely on Tekla Structures for precision connections, part numbering, and CNC workshop outputs.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-10-25',
    readTime: '6 min',
    featuredImage: SITE_ASSETS.steelStructure,
    imageAlt: {
      id: 'Konstruksi rangka baja bentang lebar yang dimodelkan dengan Tekla Structures',
      en: 'Structural steel truss roof construction detailed with Tekla Structures',
    },
    sections: {
      id: [
        {
          h2: 'Detailing Presisi Level Fabrikasi (LOD 400)',
          paragraphs: [
            'Dalam proyek struktur baja seperti pabrik industri, gudang logistik, atau kanopi bentang lebar, kesalahan posisi lubang baut sebesar beberapa milimeter saja dapat menghentikan proses ereksi di lapangan. Tekla Structures memungkinkan setiap pelat buhul, baut, las, dan camber dimodelkan dalam skala 1:1.',
          ],
          subheadings: [
            {
              h3: 'Otomatisasi Single-Part, Assembly Drawing & File NC',
              text: 'Setelah model sambungan selesai diperiksa, Tekla menghasilkan gambar potongan profil per bagian (Single Part), gambar rakitan (Assembly), serta file NC untuk mesin potong otomatis di workshop.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Fabrication-Grade LOD 400 Precision',
          paragraphs: [
            'In industrial plants, long-span warehouses, and steel roof structures, even minor bolt-hole misalignments can stall field erection. Tekla Structures models every gusset plate, stiffener, bolt group, and weld detail at 1:1 scale.',
          ],
          subheadings: [
            {
              h3: 'Automated Single-Part, Assembly Drawings & NC Files',
              text: 'Once connection checks pass, Tekla generates Single-Part sheets, welded Assembly drawings, and NC/DSTV data for automated workshop cutting and drilling.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apa perbedaan utama penggunaan Revit dan Tekla Structures?',
          answer:
            'Revit sangat kuat untuk koordinasi bangunan multi-disiplin dan dokumentasi konstruksi umum, sedangkan Tekla Structures unggul khusus pada detailing fabrikasi baja LOD 400, sambungan baut/las, dan precast.',
        },
      ],
      en: [
        {
          question: 'When should a project choose Tekla Structures over Revit?',
          answer:
            'Revit excels at multi-discipline building coordination and documentation, whereas Tekla Structures is purpose-built for LOD 400 steel fabrication, bolt/weld detailing, and precast concrete.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-tekla-structures', 'jasa-shop-drawing-struktur'],
    relatedArticleSlugs: ['revit-structural-modeling', 'structural-shop-drawing'],
  },
  {
    slug: 'structural-shop-drawing',
    topicTag: { id: 'Shop Drawing', en: 'Shop Drawing' },
    seoTitle: {
      id: 'Standar Structural Shop Drawing untuk Proyek Konstruksi | J&J Engineering',
      en: 'Structural Shop Drawing Standards for Construction Execution | J&J',
    },
    metaDescription: {
      id: 'Pahami fungsi structural shop drawing, perbedaan dengan gambar DED, serta checklist penting agar gambar kerja cepat disetujui konsultan MK.',
      en: 'Understand the role of structural shop drawings, how they differ from design drawings, and key quality checks for faster consultant approval.',
    },
    h1: {
      id: 'Structural Shop Drawing: Panduan Gambar Kerja Siap Lapangan',
      en: 'Structural Shop Drawing: Producing Clear, Site-Ready Construction Packages',
    },
    excerpt: {
      id: 'Mengapa kualitas shop drawing menentukan kelancaran pengecoran, pemasangan bekisting, dan persetujuan pengawas konstruksi.',
      en: 'Why shop drawing clarity directly impacts formwork accuracy, concrete pours, and supervision consultant approvals.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-10-29',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.structuralBlueprint,
    imageAlt: {
      id: 'Cetak biru gambar kerja shop drawing struktur bangunan',
      en: 'Structural shop drawing plans and engineering details',
    },
    sections: {
      id: [
        {
          h2: 'Perbedaan Gambar DED dan Shop Drawing Struktur',
          paragraphs: [
            'Gambar Detail Engineering Design (DED) dibuat oleh konsultan perencana untuk menunjukkan konsep desain dan dimensi tipikal. Sebaliknya, Shop Drawing disusun lebih rinci oleh pihak pelaksana/spesialis detailing agar tukang dan fabrikator memiliki dimensi pasti di setiap as, elevasi lantai, dan detail bukaan.',
          ],
          subheadings: [
            {
              h3: 'Koordinasi Sparing dan Sleeve Sebelum Pengecoran',
              text: 'Shop drawing yang baik selalu menandai posisi bukaan pipa plumbing, shaft M/E, dan stek tulangan agar tidak terjadi pembobokan beton setelah cor.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Design Drawings vs. Construction Shop Drawings',
          paragraphs: [
            'Design drawings communicate engineering intent and typical member sizes. Shop drawings translate that intent into exact grid coordinates, pour elevations, opening dimensions, and constructible field details.',
          ],
          subheadings: [
            {
              h3: 'Pre-Pour Opening and Sleeve Coordination',
              text: 'Well-coordinated structural shop drawings explicitly locate MEP penetrations and starter bars before concrete placement, preventing destructive post-pour core drilling.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah shop drawing dapat dihasilkan dari model BIM 3D?',
          answer:
            'Ya. Menghasilkan shop drawing dari model BIM memastikan kesesuaian antara denah, potongan, dan elevasi sehingga mengurangi revisi berulang.',
        },
      ],
      en: [
        {
          question: 'Should structural shop drawings be extracted from a 3D BIM model?',
          answer:
            'Yes. Generating shop drawings directly from a coordinated 3D BIM model keeps plans, sections, and elevations synchronized across revisions.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-shop-drawing-struktur', 'jasa-rebar-detailing'],
    relatedArticleSlugs: ['reinforcement-detailing', 'bar-bending-schedule'],
  },
  {
    slug: 'reinforcement-detailing',
    topicTag: { id: 'Rebar Detailing', en: 'Rebar Detailing' },
    seoTitle: {
      id: 'Reinforcement Detailing Beton Bertulang Sesuai Standar SNI & ACI | J&J',
      en: 'Concrete Reinforcement Detailing Guide (SNI & ACI) | J&J Engineering',
    },
    metaDescription: {
      id: 'Prinsip reinforcement detailing beton bertulang: selimut beton, panjang penyaluran, zona sendi plastis, dan pencegahan kongesti tulangan.',
      en: 'Key principles of concrete reinforcement detailing: concrete cover, development lengths, seismic confinement zones, and congestion checks.',
    },
    h1: {
      id: 'Reinforcement Detailing: Ketelitian Pembesian pada Struktur Beton Bertulang',
      en: 'Reinforcement Detailing: Engineering Precision in Reinforced Concrete',
    },
    excerpt: {
      id: 'Mengulas aspek teknis detail penulangan beton bertulang agar kekuatan struktur sesuai perencanaan dan mudah dirakit di lapangan.',
      en: 'Technical considerations for detailing reinforced concrete joints, lap splices, and seismic confinement for constructible site installation.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-02',
    readTime: '6 min',
    featuredImage: SITE_ASSETS.towerCrane,
    imageAlt: {
      id: 'Struktur beton bertulang gedung bertingkat dalam proses konstruksi',
      en: 'Reinforced concrete multi-story building frame under construction',
    },
    sections: {
      id: [
        {
          h2: 'Menghindari Kongesti Tulangan di Joint Balok-Kolom',
          paragraphs: [
            'Pada bangunan tahan gempa, pertemuan antara tulangan kolom, balok induk dari dua arah, dan sengkang pengekang sering kali sangat padat. Pemodelan 3D rebar detailing membantu memverifikasi apakah vibrator beton masih dapat masuk dan tulangan tidak saling bertabrakan.',
          ],
          subheadings: [
            {
              h3: 'Zona Penyaluran dan Sambungan Lewatan (Lap Splice)',
              text: 'Penempatan sambungan lewatan harus mengikuti zona momen rendah yang disyaratkan oleh peraturan struktur seperti SNI 2847 atau ACI 318.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Preventing Reinforcement Congestion at Beam-Column Joints',
          paragraphs: [
            'In seismic frames, intersections of column longitudinal bars, orthogonal beams, and confinement hoops are densely reinforced. 3D rebar detailing verifies bar clearances and concrete vibrator access before site assembly.',
          ],
          subheadings: [
            {
              h3: 'Lap Splice Zoning and Hook Geometry',
              text: 'Splice locations and standard 90°/135° seismic hooks must follow low-moment zones and tolerances defined in SNI 2847 or ACI 318.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Mengapa 3D rebar detailing penting untuk proyek gedung bertingkat?',
          answer:
            'Karena pada area core wall, pilecap tebal, dan joint kolom-balok, gambar 2D saja sering tidak memperlihatkan tabrakan antar batang besi berdiameter besar.',
        },
      ],
      en: [
        {
          question: 'Why use 3D rebar detailing for multi-story concrete buildings?',
          answer:
            'In thick pile caps, core wall boundary elements, and seismic joints, 2D sections alone often miss physical collisions between large-diameter bars.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-rebar-detailing', 'jasa-shop-drawing-struktur'],
    relatedArticleSlugs: ['bar-bending-schedule', 'structural-shop-drawing'],
  },
  {
    slug: 'bar-bending-schedule',
    topicTag: { id: 'BBS Engineering', en: 'BBS Engineering' },
    seoTitle: {
      id: 'Bar Bending Schedule (BBS): Cara Optimasi Potong Besi Konstruksi | J&J',
      en: 'Bar Bending Schedule (BBS): Optimizing Steel Rebar Fabrication | J&J',
    },
    metaDescription: {
      id: 'Pelajari struktur dokumen Bar Bending Schedule (BBS), perhitungan panjang tekukan, dan cara mengendalikan waste besi tulangan di proyek konstruksi.',
      en: 'Understand Bar Bending Schedule (BBS) structure, bend deduction calculations, and how structured BBS minimizes rebar off-cut waste.',
    },
    h1: {
      id: 'Bar Bending Schedule (BBS): Mengendalikan Biaya dan Akurasi Pembesian',
      en: 'Bar Bending Schedule (BBS): Controlling Accuracy and Steel Waste on Site',
    },
    excerpt: {
      id: 'Panduan penyusunan Bar Bending Schedule untuk mendukung tim fabrikasi besi, logistik material, dan pengendalian biaya proyek.',
      en: 'A practical breakdown of Bar Bending Schedules for rebar fabrication yards, site logistics, and tonnage control.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-05',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.structuralBlueprint,
    imageAlt: {
      id: 'Dokumen perencanaan pembesian dan Bar Bending Schedule proyek',
      en: 'Reinforcement detailing sheet and Bar Bending Schedule documentation',
    },
    sections: {
      id: [
        {
          h2: 'Komponen Wajib dalam Dokumen BBS Profesional',
          paragraphs: [
            'Dokumen Bar Bending Schedule yang baik mencantumkan Bar Mark, diameter besi, jumlah batang, kode bentuk tekukan (shape code), dimensi segmen A-B-C, panjang potong total (cutting length), serta total berat dalam kilogram atau ton.',
          ],
          subheadings: [
            {
              h3: 'Optimasi Panjang Batang Standar 12 Meter',
              text: 'Dengan mengetahui kombinasi panjang potong per zona pengecoran, pelaksana dapat merencanakan pola pemotongan dari batang standar pabrik sepanjang 12 meter sehingga sisa potongan dapat dimanfaatkan kembali untuk stek atau sengkang.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Essential Fields in a Professional BBS Package',
          paragraphs: [
            'A complete Bar Bending Schedule records Bar Marks, bar diameters, quantities, shape codes, segment dimensions, total cutting lengths (incorporating bend deductions), and itemized steel tonnage.',
          ],
          subheadings: [
            {
              h3: 'Planning Against Standard 12-Meter Stock Bars',
              text: 'Grouping cutting lengths by pour zone enables fabrication teams to nest cuts from standard 12-meter stock bars and repurpose off-cuts for stirrups or dowels.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah BBS mempermudah pemesanan besi ke pabrik Cut & Bend?',
          answer:
            'Ya, format tabel BBS dan rekapitulasi diameter yang terstandarisasi dapat langsung digunakan sebagai lampiran order ke fasilitas fabrikasi Cut & Bend.',
        },
      ],
      en: [
        {
          question: 'Can your BBS outputs be sent directly to off-site Cut & Bend facilities?',
          answer:
            'Yes. Our standardized BBS spreadsheets and shape-code schedules are structured for immediate submission to Cut & Bend steel fabricators.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-rebar-detailing', 'jasa-bim-modeling'],
    relatedArticleSlugs: ['reinforcement-detailing', 'quantity-take-off'],
  },
  {
    slug: 'bim-coordination',
    topicTag: { id: 'BIM Coordination', en: 'BIM Coordination' },
    seoTitle: {
      id: 'BIM Coordination: Menyatukan Disiplin Struktur, Arsitektur & MEP | J&J',
      en: 'BIM Coordination: Aligning Structural, Architectural & MEP Models | J&J',
    },
    metaDescription: {
      id: 'Bagaimana proses BIM Coordination mengelola federasi model, Common Data Environment (CDE), dan rapat koordinasi desain sebelum konstruksi.',
      en: 'Learn how BIM Coordination federates Structural, Architectural, and MEP models within a structured review workflow before construction.',
    },
    h1: {
      id: 'BIM Coordination: Alur Kerja Kolaboratif Lintas Disiplin Konstruksi',
      en: 'BIM Coordination: Collaborative Workflows Across Building Disciplines',
    },
    excerpt: {
      id: 'Mengenal peran BIM Coordination dalam menyelaraskan model struktur, arsitektur, dan MEP dalam satu lingkungan proyek yang terpadu.',
      en: 'How structured BIM Coordination aligns structural frames, architectural finishes, and MEP systems inside a single coordinated model.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-08',
    readTime: '6 min',
    featuredImage: SITE_ASSETS.bimWireframe,
    imageAlt: {
      id: 'Model BIM terkoordinasi untuk bangunan komersial modern',
      en: 'Coordinated multi-discipline BIM building wireframe visualization',
    },
    sections: {
      id: [
        {
          h2: 'Mengapa Koordinasi Antar Disiplin Tidak Cukup dengan Overlay 2D?',
          paragraphs: [
            'Pada gambar 2D, tumpang tindih antara tinggi balok struktur, kemiringan pipa air kotor, dan plafon arsitektur sering kali luput karena tidak terlihat secara spasial 3D. BIM Coordination menggabungkan model setiap disiplin dalam ruang 3D yang sama untuk evaluasi menyeluruh.',
          ],
          subheadings: [
            {
              h3: 'Siklus Federasi dan Pelacakan Isu (BCF)',
              text: 'Setiap isu koordinasi didokumentasikan dengan viewpoint 3D dan penanggung jawab disiplin terkait agar penyelesaian terdokumentasi hingga tuntas.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Why 2D Overlays Miss Spatial Building Conflicts',
          paragraphs: [
            'In 2D light-table overlays, vertical conflicts between deep structural transfer beams, sloped drainage pipes, and ceiling plenums frequently go unnoticed. 3D BIM Coordination places every discipline in shared spatial coordinates.',
          ],
          subheadings: [
            {
              h3: 'Model Federation and Issue Tracking (BCF)',
              text: 'Every coordination finding is logged with saved 3D viewpoints and assigned discipline owners for accountable resolution tracking.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Seberapa sering BIM Coordination sebaiknya dilakukan?',
          answer:
            'Umumnya dilakukan secara berkala (mingguan atau per milestone desain/zona lantai) sebelum gambar shop drawing diajukan untuk pelaksanaan.',
        },
      ],
      en: [
        {
          question: 'How frequently should BIM Coordination reviews run?',
          answer:
            'Typically on weekly coordination cycles or ahead of major zone shop-drawing submittals to ensure clash-free construction documentation.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-bim-coordination', 'jasa-bim-modeling'],
    relatedArticleSlugs: ['clash-detection', 'understanding-building-information-modeling'],
  },
  {
    slug: 'clash-detection',
    topicTag: { id: 'Clash Detection', en: 'Clash Detection' },
    seoTitle: {
      id: 'Clash Detection dengan Navisworks: Jenis Clash & Cara Penyelesaian | J&J',
      en: 'Navisworks Clash Detection: Hard, Soft & Workflow Clashes | J&J',
    },
    metaDescription: {
      id: 'Penjelasan teknis Clash Detection menggunakan Autodesk Navisworks: Hard Clash, Soft Clearance Clash, Clash Matrix, dan penyusunan Clash Report.',
      en: 'Technical breakdown of Navisworks Clash Detection: Hard clashes, clearance checks, prioritized Clash Matrices, and actionable reporting.',
    },
    h1: {
      id: 'Clash Detection: Mendeteksi Bentrokan Desain Sebelum Terjadi di Lapangan',
      en: 'Clash Detection: Resolving Constructability Conflicts Before Mobilization',
    },
    excerpt: {
      id: 'Panduan memahami Hard Clash, Clearance Clash, serta cara menyusun Clash Detection Matrix yang efektif pada proyek gedung.',
      en: 'Understanding Hard Clashes, Soft Clearances, and prioritized Clash Test Matrices in commercial and high-rise projects.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-10',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.heroBuilding,
    imageAlt: {
      id: 'Gedung modern hasil koordinasi BIM bebas bentrokan struktur dan fasad',
      en: 'Modern commercial building delivered through clash-checked BIM workflows',
    },
    sections: {
      id: [
        {
          h2: 'Tiga Kategori Clash dalam Pemeriksaan Model BIM',
          paragraphs: [
            'Dalam Autodesk Navisworks, pemeriksaan interferensi dikelompokkan menjadi Hard Clash (tabrakan fisik dua objek seperti pipa menembus balok tanpa sleeve), Soft Clash (pelanggaran jarak ruang perawatan/akses), dan Workflow Clash (konflik urutan pemasangan).',
          ],
          subheadings: [
            {
              h3: 'Menyusun Clash Matrix yang Fokus pada Prioritas',
              text: 'Tidak semua temuan clash memiliki bobot yang sama. Pengelompokan tes seperti Struktur vs Ducting HVAC atau Struktur vs Fire Protection memfokuskan tim pada isu kritis terlebih dahulu.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Three Core Clash Categories in BIM Verification',
          paragraphs: [
            'Navisworks interference checks distinguish between Hard Clashes (physical intersections such as ductwork passing through a concrete beam), Soft Clashes (maintenance clearance violations), and Workflow Clashes (sequencing conflicts).',
          ],
          subheadings: [
            {
              h3: 'Prioritizing Tests via a Clash Matrix',
              text: 'Pairing targeted search sets—such as Structure vs. Gravity Plumbing or Structure vs. Main HVAC Trunks—ensures coordination teams resolve critical structural conflicts first.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah toleransi clash dapat diatur dalam Navisworks?',
          answer:
            'Ya, nilai toleransi (misalnya 5 mm hingga 25 mm) dapat disesuaikan per jenis pengujian agar tidak menghasilkan laporan positif palsu.',
        },
      ],
      en: [
        {
          question: 'Can clash tolerances be tuned for different trades?',
          answer:
            'Yes. Tolerance thresholds (e.g., 5 mm to 25 mm) are calibrated per test pair to filter out minor modeling artifacts and focus on genuine field conflicts.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-bim-coordination', 'jasa-revit-modeling'],
    relatedArticleSlugs: ['bim-coordination', 'bim-modeling-for-construction-projects'],
  },
  {
    slug: 'structural-engineering-analysis',
    topicTag: { id: 'Structural Engineering', en: 'Structural Engineering' },
    seoTitle: {
      id: 'Analisis Rekayasa Struktur Bangunan: Beban Gempa, Beton & Baja | J&J',
      en: 'Structural Engineering Analysis: Seismic, Concrete & Steel Systems | J&J',
    },
    metaDescription: {
      id: 'Mengulas tahapan analisis struktur bangunan menggunakan metode elemen hingga: pemodelan beban gravitasi, spektrum gempa, kontrol drift, dan desain pondasi.',
      en: 'Overview of finite-element structural engineering analysis: gravity & seismic loading, story drift verification, and foundation design.',
    },
    h1: {
      id: 'Analisis Struktur Bangunan: Menyeimbangkan Keamanan dan Efisiensi Desain',
      en: 'Structural Engineering Analysis: Balancing Seismic Resilience and Efficiency',
    },
    excerpt: {
      id: 'Tahapan teknis analisis struktur bangunan bertingkat dan struktur baja industri untuk menghasilkan desain yang aman serta ekonomis.',
      en: 'Core engineering stages for multi-story concrete and industrial steel structural analysis under seismic and gravity load combinations.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-13',
    readTime: '7 min',
    featuredImage: SITE_ASSETS.towerCrane,
    imageAlt: {
      id: 'Struktur utama bangunan bertingkat yang dirancang melalui analisis struktur',
      en: 'Multi-story concrete core and frame designed through structural analysis',
    },
    sections: {
      id: [
        {
          h2: 'Tahapan Analisis Elemen Hingga pada Struktur Gedung',
          paragraphs: [
            'Perencanaan struktur dimulai dari penentuan sistem penahan gaya lateral—seperti rangka pemikul momen khusus atau sistem ganda dengan dinding geser—yang dilanjutkan dengan pemodelan 3D pada perangkat lunak analisis seperti ETABS atau SAP2000.',
          ],
          subheadings: [
            {
              h3: 'Kontrol Simpangan Antar Lantai dan Kapasitas Penampang',
              text: 'Selain memeriksa rasio kapasitas lentur dan geser pada balok serta kolom, insinyur struktur wajib memastikan simpangan antar tingkat (story drift) berada di bawah batas aman peraturan gempa.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Finite-Element Structural Modeling Stages',
          paragraphs: [
            'Structural engineering begins by selecting an appropriate lateral-force resisting system—such as special moment frames or dual shear-wall systems—modeled in 3D analysis platforms like ETABS or SAP2000.',
          ],
          subheadings: [
            {
              h3: 'Story Drift and Capacity Verification',
              text: 'Beyond flexural, shear, and axial member ratios, structural engineers verify inter-story drift limits and P-Delta stability against governing seismic standards.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah analisis struktur mencakup evaluasi bangunan eksisting yang akan direnovasi?',
          answer:
            'Ya, kami melayani analisis evaluasi kapasitas struktur eksisting maupun desain perkuatan untuk penambahan beban atau perubahan fungsi bangunan.',
        },
      ],
      en: [
        {
          question: 'Can structural analysis evaluate existing buildings for renovation or extra loads?',
          answer:
            'Yes. We perform structural capacity assessments and strengthening concepts for adaptive reuse, equipment additions, or building extensions.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-structural-engineering', 'jasa-tekla-structures'],
    relatedArticleSlugs: ['reinforcement-detailing', 'tekla-structures-in-construction'],
  },
  {
    slug: 'quantity-take-off',
    topicTag: { id: 'Quantity Take Off', en: 'Quantity Take Off' },
    seoTitle: {
      id: 'Quantity Take Off (QTO) Berbasis BIM untuk Akurasi Volume Proyek | J&J',
      en: 'BIM-Based Quantity Take Off (QTO) for Construction Accuracy | J&J',
    },
    metaDescription: {
      id: 'Bagaimana ekstraksi Quantity Take Off (QTO) dari model BIM 3D meningkatkan akurasi perhitungan volume beton, baja, bekisting, dan besi tulangan.',
      en: 'How extracting Quantity Take Off (QTO) directly from 3D BIM models improves accuracy across concrete, steel, formwork, and rebar volumes.',
    },
    h1: {
      id: 'Quantity Take Off (QTO) Berbasis BIM: Menghitung Volume Material Secara Transparan',
      en: 'BIM-Driven Quantity Take Off (QTO): Transparent Material Quantification',
    },
    excerpt: {
      id: 'Membandingkan metode perhitungan volume manual 2D dengan ekstraksi QTO terstruktur dari model Building Information Modeling.',
      en: 'Comparing manual 2D takeoff workflows with traceable Quantity Take Off extraction from structured 3D BIM models.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-16',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.steelStructure,
    imageAlt: {
      id: 'Struktur baja dan beton untuk perhitungan Quantity Take Off',
      en: 'Steel truss and concrete structure quantified via BIM Quantity Take Off',
    },
    sections: {
      id: [
        {
          h2: 'Keunggulan Model-Based Quantity Take Off',
          paragraphs: [
            'Perhitungan volume secara manual dari gambar cetak rentan terhadap double-counting pada pertemuan balok-kolom atau terlewatnya item saat terjadi revisi desain. Pada alur kerja BIM QTO, setiap elemen memiliki aturan prioritas join dan satuan ukur yang konsisten.',
          ],
          subheadings: [
            {
              h3: 'Audit Jejak Volume dari Angka ke Elemen 3D',
              text: 'Setiap angka volume beton atau baja di tabel BoQ dapat ditelusuri kembali langsung ke elemen 3D pada model, sehingga memudahkan proses verifikasi antara kontraktor dan quantity surveyor.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Advantages of Model-Based Quantity Take Off',
          paragraphs: [
            'Manual 2D scaling is prone to double-counting at beam-column intersections and omissions after design addenda. Model-based QTO applies consistent join geometry rules across the entire building.',
          ],
          subheadings: [
            {
              h3: 'Traceable Quantities Linked to 3D Elements',
              text: 'Every concrete or steel line item in the exported schedule traces directly back to specific 3D model elements, supporting transparent review between contractors and quantity surveyors.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah hasil QTO dari BIM dapat diekspor ke format Excel untuk BoQ?',
          answer:
            'Ya, seluruh data volume dari model BIM kami rapikan dalam format Microsoft Excel sesuai struktur Work Breakdown Structure (WBS) proyek Anda.',
        },
      ],
      en: [
        {
          question: 'Are BIM QTO outputs delivered in Excel BoQ formats?',
          answer:
            'Yes. Extracted quantities are formatted into structured Excel schedules aligned with your project Work Breakdown Structure (WBS).',
        },
      ],
    },
    internalServiceSlugs: ['jasa-bim-modeling', 'jasa-structural-engineering'],
    relatedArticleSlugs: ['construction-cost-estimation', 'bar-bending-schedule'],
  },
  {
    slug: 'construction-cost-estimation',
    topicTag: { id: 'Cost Estimation (RAB)', en: 'Cost Estimation (RAB)' },
    seoTitle: {
      id: 'Construction Cost Estimation (RAB): Menyusun Anggaran Proyek Terukur | J&J',
      en: 'Construction Cost Estimation (RAB): Structured Project Budgeting | J&J',
    },
    metaDescription: {
      id: 'Panduan penyusunan Rencana Anggaran Biaya (RAB) konstruksi yang akurat berbasis Bill of Quantities, analisa harga satuan, dan integrasi data BIM.',
      en: 'How accurate Bill of Quantities, unit-rate analysis, and BIM takeoff data support reliable Construction Cost Estimation (RAB).',
    },
    h1: {
      id: 'Construction Cost Estimation (RAB): Mengubah Data Teknis Menjadi Rencana Biaya',
      en: 'Construction Cost Estimation (RAB): Translating Engineering Data into Budgets',
    },
    excerpt: {
      id: 'Bagaimana integrasi Quantity Take Off dan analisa harga satuan menghasilkan dokumen RAB konstruksi yang siap dipakai untuk tender maupun kontrol proyek.',
      en: 'Connecting verified Quantity Take Off schedules with unit-rate analysis to produce reliable construction cost budgets.',
    },
    author: 'J&J Engineering Editorial Team',
    publishedDate: '2026-11-19',
    readTime: '5 min',
    featuredImage: SITE_ASSETS.heroBuilding,
    imageAlt: {
      id: 'Gedung perkantoran modern dengan perencanaan anggaran biaya konstruksi',
      en: 'Modern commercial building planned with BIM-backed construction cost estimation',
    },
    sections: {
      id: [
        {
          h2: 'Fondasi Penyusunan RAB Konstruksi yang Andal',
          paragraphs: [
            'Rencana Anggaran Biaya (RAB) yang kredibel bertumpu pada dua hal: ketepatan daftar volume pekerjaan (BoQ) dan kewajaran Analisa Harga Satuan Pekerjaan (AHSP) sesuai kondisi pasar dan lokasi proyek.',
          ],
          subheadings: [
            {
              h3: 'Sinergi Desain Struktur dan Pengendalian Biaya',
              text: 'Dengan menghubungkan alternatif desain struktur langsung ke QTO dan RAB sejak dini, pemilik proyek dan kontraktor dapat mengambil keputusan desain yang lebih efisien sebelum tahap konstruksi.',
            },
          ],
        },
      ],
      en: [
        {
          h2: 'Pillars of Reliable Construction Cost Estimation',
          paragraphs: [
            'A dependable construction cost estimate (RAB) rests on two pillars: a verified Bill of Quantities (BoQ) and transparent unit-rate analysis reflecting current material, labor, and equipment pricing.',
          ],
          subheadings: [
            {
              h3: 'Linking Structural Choices to Cost Visibility',
              text: 'Connecting structural design options directly to QTO and cost spreadsheets helps developers and contractors evaluate value-engineering alternatives early.',
            },
          ],
        },
      ],
    },
    faqs: {
      id: [
        {
          question: 'Apakah J&J dapat menyusun RAB struktur sekaligus dengan QTO dari model 3D?',
          answer:
            'Ya, kami menyediakan layanan terintegrasi mulai dari pemodelan BIM 3D, ekstraksi Quantity Take Off, hingga penyusunan dokumen RAB pekerjaan struktur dan konstruksi.',
        },
      ],
      en: [
        {
          question: 'Can J&J prepare both 3D BIM QTO and itemized RAB cost budgets?',
          answer:
            'Yes. We provide integrated deliverables combining 3D BIM quantity extraction with structured construction cost estimation sheets.',
        },
      ],
    },
    internalServiceSlugs: ['jasa-structural-engineering', 'jasa-bim-modeling'],
    relatedArticleSlugs: ['quantity-take-off', 'bim-modeling-for-construction-projects'],
  },
];
