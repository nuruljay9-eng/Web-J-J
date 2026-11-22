import React from 'react';
import { SITE_ASSETS } from '../data/assets';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ResilientImage } from './ResilientImage';
import { AdvantageLineIcon } from './ServiceIcons';

export function WhyChooseSection({ lang }: { lang: Language }) {
  const t = TRANSLATIONS[lang].whyChoose;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4E8D9] via-[#EBD5BD]/65 to-[#F4E8D9] py-16 lg:py-24 border-b border-[#C6A477]/25">
      {/* Subtle Diagonal Geometric Decoration */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-55"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        fill="none"
        aria-hidden="true"
      >
        <line x1="280" y1="0" x2="120" y2="600" stroke="#C6A477" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="1260" y1="0" x2="1080" y2="600" stroke="#C6A477" strokeOpacity="0.4" strokeWidth="1.2" />
        <polygon points="1260,0 1440,0 1440,600 1080,600" fill="#EBD5BD" fillOpacity="0.35" />
      </svg>

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Construction Building & Tower Crane Photo */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-[#C6A477]/45 min-h-[280px] lg:min-h-[380px] shadow-sm">
            <ResilientImage
              src={SITE_ASSETS.towerCrane}
              alt={t.imageAlt}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(23,21,19,0.05) 0%, rgba(23,21,19,0.55) 100%)',
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 border-t border-[#C6A477]/50 pt-3">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C6A477]">
                J&amp;J BIM &amp; Structure Engineering
              </p>
            </div>
          </div>

          {/* RIGHT: Title, Description, and 5 Horizontal Advantages */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1.5px] w-7 bg-[#C6A477]" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.12em] text-[#292019] uppercase">
                  Build • Develop • Grow
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171513] tracking-tight text-balance mb-3">
                {t.title}
              </h2>
              <p className="text-[15.5px] font-normal leading-relaxed text-[#292019]/85 max-w-2xl">
                {t.description}
              </p>
            </div>

            {/* 5 Horizontal Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {t.items.map((item, idx) => (
                <div
                  key={item.number}
                  className="bg-[#F8F0E5]/90 border border-[#C6A477]/35 rounded-xl p-4 flex flex-col justify-between transition-all duration-200 hover:border-[#C6A477] hover:bg-[#F8F0E5]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <AdvantageLineIcon index={idx} className="w-7 h-7" />
                      <span className="font-display text-sm font-semibold text-[#C6A477] tabular-nums">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="font-display text-[15.5px] font-semibold text-[#171513] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] font-normal leading-relaxed text-[#292019]/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
