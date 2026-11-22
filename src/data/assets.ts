export const SITE_ASSETS = {
  heroBuilding: '/src/assets/images/hero_modern_building_1795249578157.jpg',
  bimWireframe: '/src/assets/images/bim_wireframe_construction_1795249577349.jpg',
  towerCrane: '/src/assets/images/tower_crane_construction_1795249577609.jpg',
  structuralBlueprint: '/src/assets/images/structural_blueprint_revit_1795249578426.jpg',
  steelStructure: '/src/assets/images/steel_structure_engineering_1795249578510.jpg',
} as const;

export const PORTFOLIO_ASSETS = {
  analisisRumah3Lt: '/assets/aistudio/Analisis_Struktur_2_6b9e0009.jpeg',
  analisisAtapPosJaga: '/assets/aistudio/Analisis_Struktur_3_15f7746a.jpeg',
  analisisGedungBajaBeton: '/assets/aistudio/Analisis_Struktur_5_a3d92af6.jpeg',
  analisisWireframeMesh: '/assets/aistudio/Analisis_Struktur_922f0ee3.jpeg',
  bimRampTower: '/assets/aistudio/BIM_Modeling_35219a5d.jpeg',
  bimMultiStoryFrame: '/assets/aistudio/BIM_Modeling_2_36483b5e.jpeg',
  qtoBbsFooting: '/assets/aistudio/Quantity_Takeoff_e2cafa99.jpeg',
  rebarDetailing3D: '/assets/aistudio/Rebar_Detailing_84ab183a.jpeg',
  shopDrawingPileCapPlan: '/assets/aistudio/Shop_Drawing_1_1effdab5.jpeg',
  shopDrawingPileCapDetail: '/assets/aistudio/Shop_Drawing_2_046d1ae8.jpeg',
  shopDrawingBeamDetail: '/assets/aistudio/Shop_Drawing_3_975d425c.jpeg',
  shopDrawingSteelConn: '/assets/aistudio/Shop_Drawing_4_5ba2e89b.jpeg',
  shopDrawingStairColBeam: '/assets/aistudio/Shop_Drawing_5_47712f56.jpeg',
} as const;

export const WHATSAPP_DEFAULT_MESSAGE_ID =
  'Halo J&J, saya ingin berkonsultasi mengenai layanan BIM & Structure Engineering untuk kebutuhan proyek perusahaan kami.';

export const WHATSAPP_DEFAULT_MESSAGE_EN =
  'Hello J&J, I would like to consult regarding BIM & Structure Engineering services for our company project.';

export function getWhatsAppUrl(customMessage?: string): string {
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281200000000';
  const cleanNumber = String(rawNumber).replace(/[^\d]/g, '') || '6281200000000';
  const text = encodeURIComponent(customMessage || WHATSAPP_DEFAULT_MESSAGE_ID);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}
