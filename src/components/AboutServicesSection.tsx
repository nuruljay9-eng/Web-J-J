import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_ASSETS } from '../data/assets';
import { HOME_SERVICES } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ResilientImage } from './ResilientImage';
import { ServiceLineIcon } from './ServiceIcons';

interface AboutServicesSectionProps {
  lang: Language;
  onSelectService: (slug: string) => void;
}

export function AboutServicesSection({ lang, onSelectService }: AboutServicesSectionProps) {
  const t = TRANSLATIONS[lang].about;
  const rowOneServices = HOME_SERVICES.slice(0, 4);
  const rowTwoServices = HOME_SERVICES.slice(4, 7);

  return (
    <section
      id="tentang-kami"
      className="relative bg-[#F8F0E5] py-16 lg:py-24 border-b border-[#C6A477]/25 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          {/* KOLOM KIRI: 27% width + Vertical Divider Line */}
          <div className="lg:w-[27%] lg:border-r lg:border-[#C6A477]/45 lg:pr-9 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-7 bg-[#C6A477]" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.12em] text-[#292019] uppercase">
                  {t.eyebrow}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-[28px] font-bold text-[#171513] leading-[1.2] tracking-tight text-balance">
                {t.heading}
              </h2>

              <p className="text-[15.5px] font-normal leading-[1.78] text-[#292019]">{t.p1}</p>

              <p className="text-[15px] font-normal leading-[1.78] text-[#292019]/85">{t.p2}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C6A477]/30 hidden lg:block">
              <p className="font-display text-sm font-semibold text-[#292019]/80">
                Building Information Modeling &amp; Structural Engineering Precision
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: 73% width */}
          <div id="layanan" className="lg:w-[73%]">
            <div className="mb-8">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171513] tracking-tight text-balance mb-3">
                {t.title}
              </h2>
              <p className="text-[15.5px] font-normal text-[#292019]/85 max-w-2xl">{t.subtitle}</p>
            </div>

            {/* Row 1: 4 Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
              {rowOneServices.map((service) => {
                const targetSlug = `/${lang === 'id' ? service.slugId : service.slugEn}/`;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => onSelectService(targetSlug)}
                    className="group text-left bg-[#EBD5BD]/85 hover:bg-[#EBD5BD] border border-[#C6A477]/35 hover:border-[#C6A477] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between min-h-[210px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-[#F8F0E5]/80 border border-[#C6A477]/30">
                          <ServiceLineIcon type={service.iconKey} className="w-7 h-7" />
                        </div>
                        <span className="font-display text-lg font-semibold text-[#C6A477] tabular-nums">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="font-display text-[17px] font-semibold text-[#171513] leading-snug mb-2 group-hover:text-[#292019]">
                        {service.cardTitle[lang]}
                      </h3>
                      <p className="text-[13.5px] font-normal leading-relaxed text-[#292019]/80">
                        {service.cardDescription[lang]}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 flex items-center gap-1 text-[12px] font-semibold text-[#292019]/75 group-hover:text-[#171513]">
                      <span>{t.exploreService}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A477] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Row 2: 3 Service Cards + Construction BIM Wireframe Visual on the Right */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-stretch">
              <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {rowTwoServices.map((service) => {
                  const targetSlug = `/${lang === 'id' ? service.slugId : service.slugEn}/`;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => onSelectService(targetSlug)}
                      className="group text-left bg-[#EBD5BD]/85 hover:bg-[#EBD5BD] border border-[#C6A477]/35 hover:border-[#C6A477] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between min-h-[210px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-4">
                          <div className="p-2 rounded-lg bg-[#F8F0E5]/80 border border-[#C6A477]/30">
                            <ServiceLineIcon type={service.iconKey} className="w-7 h-7" />
                          </div>
                          <span className="font-display text-lg font-semibold text-[#C6A477] tabular-nums">
                            {service.number}
                          </span>
                        </div>
                        <h3 className="font-display text-[17px] font-semibold text-[#171513] leading-snug mb-2">
                          {service.cardTitle[lang]}
                        </h3>
                        <p className="text-[13.5px] font-normal leading-relaxed text-[#292019]/80">
                          {service.cardDescription[lang]}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 flex items-center gap-1 text-[12px] font-semibold text-[#292019]/75 group-hover:text-[#171513]">
                        <span>{t.exploreService}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A477] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Construction Building with BIM Wireframe Visual on Right Side */}
              <div className="xl:col-span-4 relative rounded-xl overflow-hidden border border-[#C6A477]/45 min-h-[210px] bg-[#292019] group">
                <ResilientImage
                  src={SITE_ASSETS.bimWireframe}
                  alt={
                    lang === 'id'
                      ? 'Foto konstruksi gedung dengan visual wireframe BIM 3D J&J'
                      : 'Building construction photo integrated with 3D BIM wireframe visualization'
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-[#171513]/35 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-[#F8F0E5]">
                  <p className="font-display text-sm font-semibold text-[#F8F0E5] leading-snug">
                    {t.wireframeTitle}
                  </p>
                  <p className="text-[11.5px] text-[#EBD5BD]/85 mt-1 leading-snug">
                    {t.wireframeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
