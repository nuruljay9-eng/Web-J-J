import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, SITE_ASSETS, WHATSAPP_DEFAULT_MESSAGE_EN, WHATSAPP_DEFAULT_MESSAGE_ID } from '../data/assets';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  lang: Language;
  onLearnMore: () => void;
}

export function HeroSection({ lang, onLearnMore }: HeroSectionProps) {
  const t = TRANSLATIONS[lang].hero;
  const whatsappUrl = getWhatsAppUrl(
    lang === 'id' ? WHATSAPP_DEFAULT_MESSAGE_ID : WHATSAPP_DEFAULT_MESSAGE_EN
  );

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-[#F8F0E5] via-[#F4E8D9] to-[#EBD5BD] pt-24 lg:pt-28 min-h-[640px] lg:min-h-[720px] flex items-stretch border-b border-[#C6A477]/30"
    >
      {/* Diagonal Geometric Architectural Decoration */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-10"
        preserveAspectRatio="none"
        viewBox="0 0 1440 720"
        fill="none"
        aria-hidden="true"
      >
        <polygon points="0,0 760,0 580,720 0,720" fill="url(#heroCreamGrad)" />
        <line x1="655" y1="0" x2="475" y2="720" stroke="#C6A477" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="760" y1="0" x2="580" y2="720" stroke="#C6A477" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="0" y1="590" x2="520" y2="720" stroke="#292019" strokeOpacity="0.08" strokeWidth="1" />
        <defs>
          <linearGradient id="heroCreamGrad" x1="0" y1="0" x2="760" y2="720" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8F0E5" stopOpacity="0.96" />
            <stop offset="70%" stopColor="#F4E8D9" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#EBD5BD" stopOpacity="0.72" />
          </linearGradient>
        </defs>
      </svg>

      {/* Right-Side Full-Height Architectural Building Visual + Structural BIM Wireframe Overlay */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[62%] z-0">
        <ResilientImage
          src={SITE_ASSETS.heroBuilding}
          alt={
            lang === 'id'
              ? 'Gedung modern komersial dengan visualisasi wireframe struktur BIM J&J'
              : 'Modern architectural high-rise building with structural BIM wireframe overlay'
          }
          loading="eager"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft gradient blend from cream-beige left canvas into building photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #F4E8D9 0%, rgba(244,232,217,0.88) 18%, rgba(235,213,189,0.28) 44%, rgba(23,21,19,0.12) 100%)',
          }}
        />

        {/* Structural BIM Wireframe Vector Overlay over upper building facade */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 900 720"
          fill="none"
          aria-hidden="true"
        >
          {/* Structural Column & Floor Slab BIM Grid Lines */}
          <g stroke="#C6A477" strokeWidth="1.1" strokeOpacity="0.75">
            <line x1="420" y1="40" x2="420" y2="560" />
            <line x1="510" y1="20" x2="510" y2="590" />
            <line x1="600" y1="10" x2="600" y2="610" />
            <line x1="690" y1="20" x2="690" y2="620" />
            <line x1="780" y1="45" x2="780" y2="600" />
            <line x1="400" y1="110" x2="810" y2="140" />
            <line x1="400" y1="190" x2="810" y2="215" />
            <line x1="400" y1="270" x2="810" y2="290" />
            <line x1="400" y1="350" x2="810" y2="365" />
            <line x1="400" y1="430" x2="810" y2="440" />
          </g>
          {/* Diagonal Structural Bracing Wireframe */}
          <g stroke="#F8F0E5" strokeWidth="0.9" strokeOpacity="0.65" strokeDasharray="4 4">
            <line x1="420" y1="110" x2="510" y2="190" />
            <line x1="510" y1="110" x2="420" y2="190" />
            <line x1="510" y1="190" x2="600" y2="270" />
            <line x1="600" y1="190" x2="510" y2="270" />
            <line x1="600" y1="270" x2="690" y2="350" />
            <line x1="690" y1="270" x2="600" y2="350" />
            <line x1="690" y1="110" x2="780" y2="215" />
          </g>
          {/* Structural Node Markers */}
          <g fill="#F8F0E5" stroke="#C6A477" strokeWidth="1.2">
            <circle cx="420" cy="110" r="3" />
            <circle cx="510" cy="190" r="3" />
            <circle cx="600" cy="270" r="3" />
            <circle cx="690" cy="350" r="3" />
            <circle cx="600" cy="110" r="3" />
            <circle cx="690" cy="215" r="3" />
          </g>
        </svg>

        {/* Subtle Architectural Technical Coordinate Caption */}
        <div className="absolute bottom-6 right-8 bg-[#171513]/85 backdrop-blur-sm border border-[#C6A477]/50 px-4 py-2 rounded-md text-[#F8F0E5]">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#C6A477] font-medium">
            {t.wireframeCaption}
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-12 lg:py-16">
        <div className="max-w-[590px]">
          {/* Label: J&J BIM & STRUCTURE ENGINEERING */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-8 bg-[#C6A477]" aria-hidden="true" />
            <span className="text-xs font-medium tracking-[0.12em] text-[#292019] uppercase">
              {t.label}
            </span>
          </div>

          {/* Primary H1: Playfair Display Bold 700 */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#171513] leading-[1.12] text-balance mb-4">
            {t.h1}
          </h1>

          {/* Sub-Headline: Playfair Display Bold 700 */}
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#292019] leading-snug text-balance mb-5">
            {t.headline}
          </h2>

          {/* Description: Lora Regular 400 */}
          <p className="text-[16px] font-normal leading-[1.72] text-[#292019]/85 mb-8 max-w-[54ch]">
            {t.description}
          </p>

          {/* CTA Actions: Lora SemiBold 600 */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2.5 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 border border-[#C6A477]/45 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477]"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A477]" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#292019] hover:text-[#171513] px-3 py-2.5 border-b border-[#C6A477] hover:border-[#171513] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A477]" />
              <span>{t.secondaryCta}</span>
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Hero Building Frame */}
        <div className="lg:hidden mt-10 relative rounded-xl overflow-hidden border border-[#C6A477]/40 aspect-[16/10] shadow-sm">
          <ResilientImage
            src={SITE_ASSETS.heroBuilding}
            alt={
              lang === 'id'
                ? 'Gedung modern komersial layanan BIM J&J'
                : 'Modern commercial building for J&J BIM services'
            }
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-[#F8F0E5] text-xs font-medium tracking-wider uppercase">
            {t.wireframeCaption}
          </div>
        </div>
      </div>
    </section>
  );
}
