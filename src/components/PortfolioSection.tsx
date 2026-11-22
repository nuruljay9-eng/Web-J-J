import React, { useState } from 'react';
import { ArrowRight, Check, Layers, X } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { Language, PortfolioCategory, PortfolioItem } from '../types';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  lang: Language;
  isStandalonePage?: boolean;
  onNavigate: (path: string) => void;
}

export function PortfolioSection({ lang, isStandalonePage = false, onNavigate }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const t = TRANSLATIONS[lang].portfolio;

  const filteredItems =
    activeCategory === 'All'
      ? isStandalonePage
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.slice(0, 6)
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setActiveGalleryIndex(0);
  };

  const modalGallery = selectedItem
    ? selectedItem.galleryImages && selectedItem.galleryImages.length > 0
      ? selectedItem.galleryImages
      : [{ src: selectedItem.image, caption: selectedItem.name }]
    : [];

  return (
    <section
      id="portfolio"
      className={`bg-[#F8F0E5] border-b border-[#C6A477]/25 ${
        isStandalonePage ? 'pt-28 pb-20' : 'py-16 lg:py-24'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1.5px] w-7 bg-[#C6A477]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.12em] text-[#292019] uppercase">
                {t.eyebrow}
              </span>
            </div>
            {isStandalonePage ? (
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171513] tracking-tight text-balance mb-3">
                {t.title}
              </h1>
            ) : (
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171513] tracking-tight text-balance mb-3">
                {t.title}
              </h2>
            )}
            <p className="text-[15.5px] font-normal leading-relaxed text-[#292019]/85">{t.subtitle}</p>
          </div>

          {!isStandalonePage && (
            <button
              type="button"
              onClick={() => onNavigate(lang === 'id' ? '/id/portfolio' : '/en/portfolio')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171513] border-b border-[#C6A477] pb-1 hover:text-[#292019] shrink-0 self-start lg:self-end cursor-pointer"
            >
              <span>
                {lang === 'id'
                  ? `Lihat Semua ${PORTFOLIO_ITEMS.length} Proyek Portfolio`
                  : `View All ${PORTFOLIO_ITEMS.length} Portfolio Works`}
              </span>
              <ArrowRight className="w-4 h-4 text-[#C6A477]" />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#C6A477]/30">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const active = activeCategory === category;
            const label = category === 'All' ? t.allFilter : category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-[#171513] text-[#F8F0E5]'
                    : 'bg-[#F4E8D9] text-[#292019]/85 hover:bg-[#EBD5BD] border border-[#C6A477]/30'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isTechnicalSheet = item.image.startsWith('/assets/aistudio/');
            return (
              <article
                key={item.id}
                className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#C6A477] hover:shadow-md"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className={`w-full aspect-[16/10] overflow-hidden relative block cursor-pointer border-b border-[#C6A477]/25 ${
                      isTechnicalSheet ? 'bg-white' : 'bg-[#292019]'
                    }`}
                    aria-label={item.name[lang]}
                  >
                    <ResilientImage
                      src={item.image}
                      alt={item.imageAlt[lang]}
                      className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${
                        isTechnicalSheet ? 'object-contain p-2' : 'object-cover'
                      }`}
                    />
                  </button>

                  <div className="p-6">
                    {/* Unboxed Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#292019]/70 mb-2">
                      <span className="text-[#292019]">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.lodLevel}</span>
                      {item.galleryImages && item.galleryImages.length > 1 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>
                            {item.galleryImages.length}{' '}
                            {lang === 'id' ? 'Dokumentasi' : 'Sheets'}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-display text-lg font-semibold text-[#171513] leading-snug mb-2.5">
                      {item.name[lang]}
                    </h3>

                    <p className="text-sm font-normal leading-relaxed text-[#292019]/85 mb-4">
                      {item.description[lang]}
                    </p>

                    <div className="pt-3 border-t border-[#C6A477]/30 space-y-2 text-xs">
                      <div>
                        <span className="font-medium text-[#171513]">{t.softwareLabel}: </span>
                        <span className="text-[#292019]/85">{item.softwareUsed.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 flex items-center justify-between border-t border-[#C6A477]/20">
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-[#171513] hover:text-[#C6A477] transition-colors cursor-pointer py-1"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#C6A477]" />
                    <span>{t.inspectBtn}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transparency Note */}
        <p className="mt-8 text-xs leading-relaxed text-[#292019]/75 border-t border-[#C6A477]/25 pt-4">
          {t.honestyNote}
        </p>

        {/* Standalone Portfolio CTA Banner */}
        {isStandalonePage && (
          <div className="mt-12 bg-[#EBD5BD] border border-[#C6A477]/50 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-[#171513] mb-2">
                {t.ctaBannerTitle}
              </h2>
              <p className="text-sm font-normal text-[#292019]/85">{t.ctaBannerDesc}</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(lang === 'id' ? '/id/kontak' : '/en/contact')}
              className="bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] px-6 py-3.5 rounded-md text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.ctaBannerBtn}
            </button>
          </div>
        )}
      </div>

      {/* Technical Scope & Multi-Sheet Gallery Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#171513]/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#F8F0E5] border border-[#C6A477]/50 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Active Gallery Image */}
            <div className="relative bg-white border-b border-[#C6A477]/35">
              <div className="aspect-[16/9] w-full flex items-center justify-center p-3">
                <ResilientImage
                  src={modalGallery[activeGalleryIndex]?.src || selectedItem.image}
                  alt={modalGallery[activeGalleryIndex]?.caption[lang] || selectedItem.imageAlt[lang]}
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 bg-[#171513]/90 text-[#F8F0E5] p-2 rounded-full hover:bg-[#171513] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Gallery Sheet Switcher when > 1 sheet */}
            {modalGallery.length > 1 && (
              <div className="bg-[#F4E8D9] px-6 py-3 border-b border-[#C6A477]/30 flex flex-wrap items-center gap-3">
                {modalGallery.map((sheet, idx) => (
                  <button
                    key={sheet.src}
                    type="button"
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      activeGalleryIndex === idx
                        ? 'bg-[#171513] text-[#F8F0E5]'
                        : 'bg-[#F8F0E5] text-[#292019] border border-[#C6A477]/40 hover:bg-[#EBD5BD]'
                    }`}
                  >
                    <span className="tabular-nums">0{idx + 1}</span>
                    <span className="truncate max-w-[220px]">{sheet.caption[lang]}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-medium text-[#292019]/75">
                <span>{selectedItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.lodLevel}</span>
              </div>

              <h3 id="portfolio-modal-title" className="font-display text-2xl font-semibold text-[#171513]">
                {selectedItem.name[lang]}
              </h3>

              <p className="text-sm font-normal leading-relaxed text-[#292019]/85">
                {selectedItem.description[lang]}
              </p>

              <div className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-lg p-4">
                <h4 className="font-display text-sm font-semibold text-[#171513] mb-3">
                  {t.scopeLabel}
                </h4>
                <ul className="space-y-2">
                  {selectedItem.scopeOfWork[lang].map((line, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#292019]">
                      <Check className="w-4 h-4 text-[#C6A477] shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#C6A477]/30">
                <div className="text-xs text-[#292019]/80">
                  <span className="font-medium text-[#171513]">{t.softwareLabel}: </span>
                  {selectedItem.softwareUsed.join(', ')}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(null);
                    onNavigate(lang === 'id' ? '/id/kontak' : '/en/contact');
                  }}
                  className="bg-[#171513] text-[#F8F0E5] px-5 py-2.5 rounded-md text-xs font-semibold cursor-pointer"
                >
                  {t.ctaBannerBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
