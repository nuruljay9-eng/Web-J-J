import { PortfolioCategory, PortfolioItem } from '../types';
import { PORTFOLIO_ASSETS, SITE_ASSETS } from './assets';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'BIM Structural Modeling',
  'Architectural BIM Modeling',
  'Revit Modeling',
  'Tekla Structures',
  'Shop Drawing',
  'Rebar Detailing',
  'BIM Coordination',
  'Structural Analysis',
  'Quantity Take Off',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'bim-structural-ramp-tower',
    name: {
      id: 'BIM Structural Modeling — Struktur Ramp & Menara Lift',
      en: 'BIM Structural Modeling — Ramp Frame & Vertical Lift Core',
    },
    category: 'BIM Structural Modeling',
    description: {
      id: 'Pemodelan struktur 3D Autodesk Revit meliputi pondasi telapak, kolom bertingkat, pelat miring (ramp), dan rangka menara lift sesuai elevasi level proyek.',
      en: '3D Autodesk Revit structural modeling covering isolated pad footings, multi-story columns, sloped ramp slabs, and vertical lift shaft framing.',
    },
    softwareUsed: ['Autodesk Revit Structure', 'OpenBIM IFC'],
    image: PORTFOLIO_ASSETS.bimRampTower,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.bimRampTower,
        caption: {
          id: 'Model 3D Struktur Ramp & Menara Lift (Autodesk Revit)',
          en: '3D Structural Model of Ramp & Lift Tower (Autodesk Revit)',
        },
      },
      {
        src: PORTFOLIO_ASSETS.bimMultiStoryFrame,
        caption: {
          id: 'Model 3D Rangka Beton Bertulang Multi-Level',
          en: '3D Multi-Level Reinforced Concrete Frame Model',
        },
      },
    ],
    imageAlt: {
      id: 'Model 3D BIM Struktur ramp dan menara lift di Autodesk Revit oleh J&J',
      en: '3D BIM structural model of sloped ramp and lift tower in Autodesk Revit',
    },
    lodLevel: 'LOD 350',
    scopeOfWork: {
      id: [
        'Pemodelan pondasi telapak, pedestal kolom, dan sloof',
        'Pemodelan struktur pelat miring (ramp) dan balok pengikat antar level',
        'Pemodelan rangka baja/beton menara lift vertikal sesuai grid elevasi',
        'Penyelarasan elevasi level dan parameter elemen struktur untuk dokumentasi',
      ],
      en: [
        'Isolated pad footing, column pedestal, and tie-beam modeling',
        'Sloped ramp slab and inter-level framing beam modeling',
        'Vertical lift shaft structural framing aligned to project datum levels',
        'Consistent level alignment and structural parameterization',
      ],
    },
  },
  {
    id: 'revit-modeling-concrete-frame',
    name: {
      id: 'Revit Modeling — Rangka Struktur Beton Bangunan Bertingkat',
      en: 'Revit Modeling — Multi-Level Concrete Building Frame',
    },
    category: 'Revit Modeling',
    description: {
      id: 'Pemodelan struktur beton bertulang lengkap di Autodesk Revit mencakup kolom, balok induk, balok anak, pelat lantai bertingkat, serta sistem grid koordinat.',
      en: 'Complete reinforced concrete structural framing modeled in Autodesk Revit spanning columns, primary/secondary beams, stepped floor slabs, and datum grids.',
    },
    softwareUsed: ['Autodesk Revit', 'Autodesk AutoCAD'],
    image: PORTFOLIO_ASSETS.bimMultiStoryFrame,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.bimMultiStoryFrame,
        caption: {
          id: 'Isometri 3D Rangka Kolom, Balok & Pelat Lantai di Revit',
          en: '3D Isometric Concrete Column, Beam & Slab Model in Revit',
        },
      },
      {
        src: PORTFOLIO_ASSETS.bimRampTower,
        caption: {
          id: 'Model 3D Struktur Ramp & Tower Core',
          en: '3D Structural Ramp & Core Tower Model',
        },
      },
    ],
    imageAlt: {
      id: 'Model 3D Autodesk Revit rangka struktur kolom balok dan pelat lantai',
      en: 'Autodesk Revit 3D model of multi-story concrete columns, beams, and slabs',
    },
    lodLevel: 'LOD 350',
    scopeOfWork: {
      id: [
        'Konversi gambar desain struktur ke dalam model parametrik Autodesk Revit',
        'Pemodelan balok, kolom, dan pelat dengan tipe penampang terstandarisasi',
        'Pengaturan garis as (grid) dan elevasi lantai untuk ekstraksi gambar kerja',
        'Audit konsistensi pertemuan elemen balok-kolom sebelum koordinasi',
      ],
      en: [
        'Conversion of structural design drawings into a parametric Autodesk Revit model',
        'Standardized beam, column, and slab family classification',
        'Project grid and floor elevation setup for coordinated sheet extraction',
        'Beam-column joint geometric consistency check prior to coordination',
      ],
    },
  },
  {
    id: 'structural-analysis-rumah-3lt',
    name: {
      id: 'Analisis Struktur — Gedung & Rumah Tinggal 3 Lantai (ETABS)',
      en: 'Structural Analysis — 3-Story Reinforced Concrete Building (ETABS)',
    },
    category: 'Structural Analysis',
    description: {
      id: 'Pemodelan dan analisis struktur 3D pada ETABS Ultimate 22.7.0 untuk evaluasi rasio tegangan kolom/balok, penampang struktur, dan kestabilan bangunan 3 lantai.',
      en: '3D finite-element structural analysis in ETABS Ultimate 22.7.0 evaluating column/beam demand-capacity ratios, slab behavior, and 3-story lateral stability.',
    },
    softwareUsed: ['CSI ETABS Ultimate 22.7.0', 'CSI SAFE'],
    image: PORTFOLIO_ASSETS.analisisRumah3Lt,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.analisisRumah3Lt,
        caption: {
          id: 'ETABS — Denah Lantai 3 & Model 3D Struktur Rumah 3 Lantai',
          en: 'ETABS — Plan View & 3D Frame Analysis of 3-Story Building',
        },
      },
      {
        src: PORTFOLIO_ASSETS.analisisWireframeMesh,
        caption: {
          id: 'Model Analitis Wireframe & Nodal Beban Struktur Bertingkat',
          en: '3D Structural Analytical Wireframe & Slab Load Mesh',
        },
      },
    ],
    imageAlt: {
      id: 'Analisis struktur ETABS bangunan 3 lantai tampilan denah dan 3D view',
      en: 'ETABS Ultimate 3D structural analysis model and plan view for 3-story building',
    },
    lodLevel: 'Finite-Element Analysis',
    scopeOfWork: {
      id: [
        'Pemodelan geometri struktur kolom, balok (B1, B2), dan pelat lantai',
        'Input kombinasi pembebanan gravitasi dan gempa sesuai SNI 1726 & 2847',
        'Pemeriksaan rasio desain kapasitas elemen kolom dan balok (color-coded stress check)',
        'Penentuan dimensi penampang ekonomis serta kebutuhan tulangan',
      ],
      en: [
        '3D structural framing geometry for columns, beams (B1, B2), and slabs',
        'Gravity and seismic load combination input per SNI 1726 & 2847 / ACI',
        'Color-coded demand-capacity ratio verification across beams and columns',
        'Member sizing optimization and longitudinal/shear reinforcement output',
      ],
    },
  },
  {
    id: 'structural-analysis-steel-truss',
    name: {
      id: 'Analisis Struktur — Bangunan Komposit Baja-Beton & Rangka Atap Truss',
      en: 'Structural Analysis — Composite Steel Roof Truss & Concrete Frame',
    },
    category: 'Structural Analysis',
    description: {
      id: 'Analisis elemen hingga struktur kombinasi beton bertulang dan rangka atap baja bentang lebar serta pemodelan rangka atap baja pos jaga di ETABS.',
      en: 'Finite-element analysis combining multi-story reinforced concrete framing with long-span steel roof trusses and guard-post steel truss framing in ETABS.',
    },
    softwareUsed: ['CSI ETABS Ultimate 22.7.0', 'CSI SAP2000'],
    image: PORTFOLIO_ASSETS.analisisGedungBajaBeton,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.analisisGedungBajaBeton,
        caption: {
          id: 'ETABS — Model 3D Struktur Beton & Rangka Atap Baja Bentang Lebar',
          en: 'ETABS — 3D Concrete Frame & Long-Span Steel Roof Truss Analysis',
        },
      },
      {
        src: PORTFOLIO_ASSETS.analisisAtapPosJaga,
        caption: {
          id: 'ETABS — Analisis Rangka Atap Baja Pos Jaga (Elevation & 3D)',
          en: 'ETABS — Guardhouse Steel Roof Truss Elevation & 3D Analysis',
        },
      },
    ],
    imageAlt: {
      id: 'Analisis struktur ETABS kombinasi rangka beton bertulang dan atap baja truss',
      en: 'ETABS 3D structural analysis combining reinforced concrete and steel roof truss',
    },
    lodLevel: 'Structural Engineering',
    scopeOfWork: {
      id: [
        'Pemodelan rangka baja atap truss, gording, dan sistem tumpuan ke balok beton',
        'Analisis beban angin, beban atap, dan beban gempa pada struktur baja-beton',
        'Pemeriksaan lendutan rangka atap dan rasio profil batang tekan/tarik',
        'Rekomendasi profil baja dan pelat tumpuan sambungan',
      ],
      en: [
        '3D modeling of steel roof trusses, purlins, and concrete support bearings',
        'Wind, roof gravity, and seismic lateral analysis for hybrid steel-concrete systems',
        'Deflection checks and axial/flexural member utilization verification',
        'Steel profile sizing and bearing connection design input',
      ],
    },
  },
  {
    id: 'shop-drawing-substructure-pilecap',
    name: {
      id: 'Shop Drawing Struktur — Denah Pile Cap, Tie Beam & Detail PC1–PC3',
      en: 'Structural Shop Drawing — Pile Cap & Tie Beam Layout + PC1–PC3 Details',
    },
    category: 'Shop Drawing',
    description: {
      id: 'Gambar kerja struktur bawah skala pelaksanaan meliputi denah koordinat Pile Cap (P1–P4) & Tie Beam (TB1, TBP) SFL -0.600 serta detail potongan PC1, PC2, dan PC3 skala 1:20.',
      en: 'Construction-ready substructure shop drawings covering Pile Cap (P1–P4) & Tie Beam (TB1, TBP) layout at SFL -0.600 plus PC1–PC3 cross-section details at 1:20 scale.',
    },
    softwareUsed: ['Autodesk AutoCAD', 'Autodesk Revit'],
    image: PORTFOLIO_ASSETS.shopDrawingPileCapPlan,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.shopDrawingPileCapPlan,
        caption: {
          id: 'Denah Pile Cap & Tie Beam SFL -0.600 (Grid 1–16, Skala 1:225)',
          en: 'Pile Cap & Tie Beam Plan SFL -0.600 (Grids 1–16, Scale 1:225)',
        },
      },
      {
        src: PORTFOLIO_ASSETS.shopDrawingPileCapDetail,
        caption: {
          id: 'Detail & Potongan Pile Cap PC1, PC2, PC3 (Skala 1:20)',
          en: 'Pile Cap Details & Sections PC1, PC2, PC3 (Scale 1:20)',
        },
      },
    ],
    imageAlt: {
      id: 'Shop drawing denah pile cap dan tie beam SFL -0.600 beserta detail potongan',
      en: 'Structural shop drawing of pile cap and tie beam plan with cross-section details',
    },
    lodLevel: 'Shop Drawing',
    scopeOfWork: {
      id: [
        'Penggambaran denah titik tiang pancang/bore pile, pile cap P1–P4, dan tie beam',
        'Detail dimensi pile cap tipe PC1, PC2, dan PC3 skala 1:20 lengkap dengan dimensi as',
        'Potongan melintang A, B, dan C menampilkan pembesian D10/D13/D16, lantai kerja 50mm, dan pasir urug 100mm',
        'Penyesuaian elevasi SFL -0.600 dan penomoran lembar kerja konstruksi',
      ],
      en: [
        'Pile location, pile cap (P1–P4), and tie-beam plan layout across grids 1–16',
        '1:20 scale plan details for rectangular and trapezoidal pile caps (PC1–PC3)',
        'Sections A, B, and C detailing D10/D13/D16 rebar, 50mm lean concrete, and 100mm sand bedding',
        'Coordinated SFL -0.600 datum elevations and construction sheet numbering',
      ],
    },
  },
  {
    id: 'shop-drawing-superstructure-beams-stairs',
    name: {
      id: 'Shop Drawing Struktur — Detail Balok (G1–G4, B1–B2), Tangga & Kolom',
      en: 'Structural Shop Drawing — Beam Schedules, Staircase & Column Details',
    },
    category: 'Shop Drawing',
    description: {
      id: 'Tabel detail penulangan balok tumpuan & lapangan Lantai 2–3 dan Dak Atap (skala 1:30), detail penulangan tangga E–G (skala 1:15), serta detail kolom & balok 200x200.',
      en: 'Detailed beam reinforcement tables for support & midspan zones on Levels 2–3 & Roof (1:30 scale), staircase reinforcement details E–G (1:15 scale), and column/beam sections.',
    },
    softwareUsed: ['Autodesk AutoCAD', 'Autodesk Revit'],
    image: PORTFOLIO_ASSETS.shopDrawingBeamDetail,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.shopDrawingBeamDetail,
        caption: {
          id: 'Detail Penulangan Balok Lantai 2, 3 & Dak Atap (Skala 1:30)',
          en: 'Beam Reinforcement Schedule Levels 2, 3 & Roof (Scale 1:30)',
        },
      },
      {
        src: PORTFOLIO_ASSETS.shopDrawingStairColBeam,
        caption: {
          id: 'Detail Penulangan Tangga (E, F, G Skala 1:15) & Kolom/Balok 200x200',
          en: 'Staircase Reinforcement Details (E, F, G Scale 1:15) & Column/Beam Sections',
        },
      },
    ],
    imageAlt: {
      id: 'Shop drawing detail balok beton bertulang tumpuan lapangan dan detail tangga',
      en: 'Structural shop drawing showing concrete beam reinforcement tables and stair details',
    },
    lodLevel: 'Shop Drawing',
    scopeOfWork: {
      id: [
        'Penyusunan tabel detail balok G1.1–G4.1, B1.1–B2.1, dan BP1 lengkap posisi tumpuan & lapangan',
        'Rincian diameter tulangan utama atas/bawah, sengkang (D10-100/150), tulangan pinggang, dan selimut beton',
        'Detail pembesian anak tangga & bordes (Detail E, F, G) lengkap penyaluran >=40d ke pelat lantai',
        'Detail penampang praktis kolom & balok 200x200 siap pelaksanaan tukang',
      ],
      en: [
        'Tabulated beam schedules (G1.1–G4.1, B1.1–B2.1, BP1) separating support and midspan zones',
        'Top/bottom main bars, stirrup spacing (D10-100/150), side bars, and clear cover notes',
        'Staircase flight and landing rebar details (E, F, G) with >=40d anchorage into slabs',
        'Standardized 200x200 column and beam cross-section schedules for site execution',
      ],
    },
  },
  {
    id: 'tekla-steel-connection-detailing',
    name: {
      id: 'Tekla Structures & Steel Detailing — Sambungan Baja Baut A325',
      en: 'Tekla Structures & Steel Detailing — Bolted H-Beam Connection Details',
    },
    category: 'Tekla Structures',
    description: {
      id: 'Gambar detail sambungan struktur baja skala 1:10 antara kolom H 300x300x10x15 dan balok H 200x200x6x12 lengkap dengan pelat sambung t=12mm/15mm dan tata letak baut 5/8" & 3/4" A325.',
      en: '1:10 scale steel connection detailing between H 300x300x10x15 columns and H 200x200x6x12 beams with 12mm/15mm connection plates and 5/8" & 3/4" A325 bolt layouts.',
    },
    softwareUsed: ['Tekla Structures', 'Autodesk AutoCAD'],
    image: PORTFOLIO_ASSETS.shopDrawingSteelConn,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.shopDrawingSteelConn,
        caption: {
          id: 'Detail Sambungan Baja 1 & Potongan A, B, C (Skala 1:10)',
          en: 'Steel Connection 1 & Sections A, B, C (Scale 1:10)',
        },
      },
      {
        src: PORTFOLIO_ASSETS.analisisAtapPosJaga,
        caption: {
          id: 'Model 3D Rangka Atap Baja Terkait',
          en: 'Associated 3D Steel Roof Truss Analytical Model',
        },
      },
    ],
    imageAlt: {
      id: 'Detail sambungan struktur baja profil H-Beam dengan baut A325 dan pelat sambung',
      en: 'Structural steel H-beam bolted connection shop drawing with A325 bolts',
    },
    lodLevel: 'LOD 400',
    scopeOfWork: {
      id: [
        'Detailing sambungan balok-kolom baja H 300x300x10x15 ke H 200x200x6x12',
        'Penentuan jarak tepi dan jarak antar baut (50mm, 60mm, 100mm, 180mm) sesuai standar',
        'Spesifikasi mutu baut A325 diameter 5/8" dan 3/4" serta ketebalan pelat 12mm dan 15mm',
        'Penyajian tampak depan dan Potongan A, B, C pada elevasi Level 5 (+39700)',
      ],
      en: [
        'Steel beam-to-column connection detailing (H 300x300x10x15 to H 200x200x6x12)',
        'Precise bolt gauge, pitch, and edge distance dimensioning (50–180mm)',
        'Specification of 5/8" & 3/4" A325 structural bolts with 12mm & 15mm gusset/end plates',
        'Multi-angle elevation and Sections A, B, C referenced to Level 5 (+39700)',
      ],
    },
  },
  {
    id: 'rebar-detailing-3d-cage',
    name: {
      id: '3D Rebar Detailing — Model Penulangan Dinding & Pelat Beton Bertulang',
      en: '3D Rebar Detailing — Reinforced Concrete Wall & Slab Cage Model',
    },
    category: 'Rebar Detailing',
    description: {
      id: 'Pemodelan pembesian 3D lengkap meliputi tulangan utama vertikal/horizontal, sengkang pengikat, kait standar, serta distribusi tulangan pelat dan dinding beton.',
      en: 'Full 3D concrete reinforcement modeling illustrating vertical/horizontal wall bars, slab top/bottom mats, U-bars, and confinement ties.',
    },
    softwareUsed: ['Autodesk Revit Rebar', 'Tekla Structures'],
    image: PORTFOLIO_ASSETS.rebarDetailing3D,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.rebarDetailing3D,
        caption: {
          id: 'Model 3D Wireframe Penulangan Dinding & Pelat Beton',
          en: '3D Reinforcement Cage Model of Concrete Wall & Slab',
        },
      },
      {
        src: PORTFOLIO_ASSETS.qtoBbsFooting,
        caption: {
          id: 'Bar Bending Schedule (BBS) Output Terkait',
          en: 'Associated Bar Bending Schedule (BBS) Deliverable',
        },
      },
    ],
    imageAlt: {
      id: 'Model 3D rebar detailing jaringan tulangan beton bertulang dinding dan pelat',
      en: '3D rebar detailing model showing reinforced concrete wall and slab mesh',
    },
    lodLevel: 'LOD 400',
    scopeOfWork: {
      id: [
        'Pemodelan 3D seluruh lapisan tulangan utama, tulangan bagi, dan sengkang pengikat',
        'Verifikasi selimut beton dan jarak bersih antar batang besi untuk mencegah kongesti',
        'Penyelarasan tekukan kait (hook) dan sambungan tulangan antara pelat dan dinding',
        'Ekstraksi data geometri tulangan sebagai dasar penyusunan Bar Bending Schedule',
      ],
      en: [
        '3D modeling of primary flexural bars, distribution bars, and confinement ties',
        'Concrete cover and clear bar spacing checks to avoid reinforcement congestion',
        'Hook anchorage and L-bar continuity detailing across wall-slab intersections',
        'Direct extraction of bar geometry to feed Bar Bending Schedules',
      ],
    },
  },
  {
    id: 'qto-bar-bending-schedule',
    name: {
      id: 'Quantity Take Off (QTO) & Bar Bending Schedule (BBS) Pondasi Footing',
      en: 'Quantity Take Off (QTO) & Bar Bending Schedule (BBS) — Footing Works',
    },
    category: 'Quantity Take Off',
    description: {
      id: 'Dokumen Bar Bending Schedule (BBS) terperinci untuk pekerjaan pondasi Footing lengkap dengan kode diameter (D-13, D-10), panjang potong, jumlah batang, berat besi (kg), segmen A–G, dan sketsa tekukan.',
      en: 'Itemized Bar Bending Schedule (BBS) for footing foundations listing bar diameters (D-13, D-10), cutting lengths, bar counts, steel tonnage (kg), segments A–G, and bending sketches.',
    },
    softwareUsed: ['Autodesk Revit', 'Microsoft Excel', 'AutoCAD'],
    image: PORTFOLIO_ASSETS.qtoBbsFooting,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.qtoBbsFooting,
        caption: {
          id: 'Tabel Bar Bending Schedule (BBS) & Sketsa Tekukan Besi Footing',
          en: 'Bar Bending Schedule (BBS) Table & Footing Rebar Bending Details',
        },
      },
      {
        src: PORTFOLIO_ASSETS.rebarDetailing3D,
        caption: {
          id: 'Model 3D Pembesian Sebagai Sumber Data QTO',
          en: '3D Reinforcement Model Feeding QTO Takeoff',
        },
      },
    ],
    imageAlt: {
      id: 'Tabel Bar Bending Schedule dan Quantity Take Off besi tulangan pondasi footing',
      en: 'Bar Bending Schedule table with rebar quantities, weights, and bending details',
    },
    lodLevel: '5D BIM QTO / BBS',
    scopeOfWork: {
      id: [
        'Kalkulasi panjang potong total besi D-13 dan D-10 termasuk dimensi tekukan A sampai G',
        'Perhitungan jumlah batang (quantity) dan berat bersih besi (kg) per item lokasi',
        'Penggambaran sketsa detail bentuk tekukan (bending detail) untuk tim potong-tekuk',
        'Rekapitulasi total tonase besi guna mendukung pengadaan material dan kontrol RAB',
      ],
      en: [
        'Total cutting length calculation for D-13 and D-10 bars across segments A through G',
        'Exact bar count and net steel weight (kg) computation per foundation element',
        'Visual bending shape diagrams with leg dimensions for bar-bending teams',
        'Aggregated steel tonnage summaries supporting procurement and cost control (RAB)',
      ],
    },
  },
  {
    id: 'bim-coordination-analytical-integration',
    name: {
      id: 'BIM Coordination & Penyelarasan Model Analitis ke Struktur 3D',
      en: 'BIM Coordination — Analytical Wireframe to 3D Structural Alignment',
    },
    category: 'BIM Coordination',
    description: {
      id: 'Penyelarasan koordinat nodal antara model analitis elemen hingga (ETABS) dengan model fisik 3D BIM (Revit) guna memastikan konsistensi dimensi sebelum proses clash detection.',
      en: 'Spatial alignment between finite-element analytical wireframes and 3D BIM structural models ensuring dimensional consistency prior to multi-trade clash detection.',
    },
    softwareUsed: ['Autodesk Revit', 'CSI ETABS', 'Navisworks Manage'],
    image: PORTFOLIO_ASSETS.analisisWireframeMesh,
    galleryImages: [
      {
        src: PORTFOLIO_ASSETS.analisisWireframeMesh,
        caption: {
          id: 'Model Wireframe Analitis & Distribusi Pelat Bertingkat',
          en: '3D Analytical Wireframe & Multi-Level Floor Slab Mesh',
        },
      },
      {
        src: PORTFOLIO_ASSETS.bimMultiStoryFrame,
        caption: {
          id: 'Model Fisik 3D Struktur Terkoordinasi di Revit',
          en: 'Coordinated 3D Physical Structural Model in Revit',
        },
      },
    ],
    imageAlt: {
      id: 'Koordinasi model analitis wireframe struktur dengan model 3D BIM',
      en: '3D analytical structural wireframe coordinated with physical BIM model',
    },
    lodLevel: 'Federated LOD 350',
    scopeOfWork: {
      id: [
        'Validasi kesesuaian garis as, elevasi level, dan dimensi elemen antara model analisis dan BIM',
        'Deteksi perbedaan posisi bukaan lantai (void) dan balok transfer antar gambar',
        'Penyiapan model struktur bersih untuk federasi dengan disiplin arsitektur dan MEP',
        'Dokumentasi daftar isu koordinasi untuk disepakati bersama tim proyek',
      ],
      en: [
        'Grid, datum level, and section dimension verification between analysis and BIM models',
        'Early detection of slab opening (void) and transfer beam mismatches',
        'Preparation of clean structural models for Architectural and MEP federation',
        'Issue tracking documentation for coordinated project sign-off',
      ],
    },
  },
  {
    id: 'arch-bim-envelope-coordination',
    name: {
      id: 'Architectural BIM Modeling — Integrasi Fasad & Struktur Bangunan',
      en: 'Architectural BIM Modeling — Building Envelope & Structural Integration',
    },
    category: 'Architectural BIM Modeling',
    description: {
      id: 'Pemodelan arsitektur 3D terintegrasi dengan grid struktur bangunan untuk memastikan keselarasan elevasi plafon, dinding fasad, bukaan tangga, dan shaft bangunan.',
      en: '3D architectural modeling integrated with structural datum grids to verify ceiling clearances, facade envelopes, stairwells, and vertical shafts.',
    },
    softwareUsed: ['Autodesk Revit Architecture', 'Autodesk AutoCAD'],
    image: SITE_ASSETS.heroBuilding,
    galleryImages: [
      {
        src: SITE_ASSETS.heroBuilding,
        caption: {
          id: 'Visualisasi Fasad Arsitektur Gedung Modern',
          en: 'Modern Commercial Building Architectural Facade Visualization',
        },
      },
      {
        src: SITE_ASSETS.bimWireframe,
        caption: {
          id: 'Integrasi Model Arsitektur & Struktur Wireframe BIM',
          en: 'Architectural & Structural BIM Wireframe Integration',
        },
      },
    ],
    imageAlt: {
      id: 'Visualisasi gedung komersial modern untuk lingkup Architectural BIM Modeling',
      en: 'Modern commercial facade visualization representing Architectural BIM scope',
    },
    lodLevel: 'LOD 300 – 350',
    scopeOfWork: {
      id: [
        'Pemodelan elemen arsitektur dinding, curtain wall, lantai, dan plafon sesuai gambar arsitek',
        'Koordinasi batas ruang kepala (headroom) tangga dan elevasi struktur balok',
        'Penyusunan schedule pintu, jendela, dan material finishing ruang',
        'Penyelarasan shared coordinates bersama model struktur utama',
      ],
      en: [
        '3D modeling of architectural walls, curtain walls, floor finishes, and ceilings',
        'Staircase headroom and beam soffit clearance coordination with structure',
        'Automated door, window, and interior finish schedules',
        'Shared coordinate alignment with the primary structural BIM model',
      ],
    },
  },
];
