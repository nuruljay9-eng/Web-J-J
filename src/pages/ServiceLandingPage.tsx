import React, { useMemo } from 'react';
import { ArrowRight, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/assets';
import { SEO_SERVICE_PAGES } from '../data/services';
import { Language, ServiceDetail } from '../types';
import { useSeoHead } from '../utils/seo';
import { ContactSection } from '../components/ContactSection';
import { ResilientImage } from '../components/ResilientImage';
import { ServiceLineIcon } from '../components/ServiceIcons';

interface ServiceLandingPageProps {
  service: ServiceDetail;
  lang: Language;
  onNavigate: (path: string) => void;
}

export function ServiceLandingPage({ service, lang, onNavigate }: ServiceLandingPageProps) {
  const seo = service.seoLanding!;
  const slugPath = `/${seo.slug}/`;

  const schemas = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.primaryKeyword[lang],
        serviceType: seo.primaryKeyword[lang],
        provider: {
          '@type': 'ProfessionalService',
          name: 'J&J BIM & Structure Engineering',
        },
        areaServed: ['Indonesia', 'International'],
        description: seo.metaDescription[lang],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'id' ? 'Beranda' : 'Home',
            item: `${origin}/${lang}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.primaryKeyword[lang],
            item: `${origin}${slugPath}`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seo.faqs[lang].map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ];
  }, [lang, seo, slugPath]);

  useSeoHead({
    title: seo.seoTitle[lang],
    description: seo.metaDescription[lang],
    path: slugPath,
    lang,
    idPath: `/id/${seo.slug}/`,
    enPath: `/en/${seo.slug}/`,
    ogImage: seo.image,
    schemas,
  });

  const whatsappUrl = getWhatsAppUrl(
    lang === 'id'
      ? `Halo J&J, saya ingin berkonsultasi mengenai layanan ${seo.primaryKeyword.id} untuk kebutuhan proyek perusahaan kami.`
      : `Hello J&J, I would like to consult regarding ${seo.primaryKeyword.en} for our company project.`
  );

  const relatedServices = SEO_SERVICE_PAGES.filter((s) =>
    seo.relatedSlugs.includes(s.seoLanding!.slug)
  );

  return (
    <div className="bg-[#F8F0E5]">
      {/* Hero Header for Dedicated Service SEO Landing Page */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#F8F0E5] via-[#F4E8D9] to-[#EBD5BD] border-b border-[#C6A477]/30">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#292019]/75 mb-6">
            <a
              href={`/${lang}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/${lang}/`);
              }}
              className="hover:text-[#171513] font-medium"
            >
              {lang === 'id' ? 'Beranda' : 'Home'}
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-[#C6A477]" />
            <span className="font-medium text-[#171513]">{seo.primaryKeyword[lang]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <ServiceLineIcon type={service.iconKey} className="w-8 h-8" />
                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#292019]">
                  {seo.primaryKeyword[lang]}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171513] leading-[1.15] text-balance">
                {seo.h1[lang]}
              </h1>

              <p className="text-base font-normal leading-relaxed text-[#292019]/85 max-w-2xl">
                {seo.intro[lang]}
              </p>

              <div className="flex flex-wrap items-center gap-2 text-xs text-[#292019]/75 pt-1">
                <span className="font-medium text-[#171513]">
                  {lang === 'id' ? 'Fokus Teknis:' : 'Technical Focus:'}
                </span>
                <span>{seo.supportingKeywords[lang].join(' · ')}</span>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A477]" />
                  <span>{lang === 'id' ? 'Konsultasi via WhatsApp' : 'Consult via WhatsApp'}</span>
                </a>
                <a
                  href="#kontak"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#171513] border-b border-[#C6A477] pb-1"
                >
                  <span>{lang === 'id' ? 'Minta Penawaran Proyek' : 'Request Project Proposal'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A477]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#C6A477]/50 shadow-md bg-[#292019]">
                <ResilientImage
                  src={seo.image}
                  alt={seo.imageAlt[lang]}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Service Description, Benefits, Deliverables */}
      <section className="py-16 lg:py-20 border-b border-[#C6A477]/25">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171513]">
              {lang === 'id' ? 'Deskripsi Layanan & Metodologi Kerja' : 'Service Overview & Methodology'}
            </h2>
            {seo.serviceDescription[lang].map((para, i) => (
              <p key={i} className="text-[15.5px] font-normal leading-[1.8] text-[#292019]/85">
                {para}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="font-display text-xl font-semibold text-[#171513] mb-4">
                {lang === 'id' ? 'Manfaat bagi Proyek Konstruksi Anda' : 'Engineering & Project Benefits'}
              </h3>
              <ul className="space-y-3">
                {seo.benefits[lang].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-normal text-[#292019]">
                    <Check className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F4E8D9] border border-[#C6A477]/45 rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#171513] mb-4">
                {lang === 'id' ? 'Deliverables & Output Teknis' : 'Technical Deliverables'}
              </h2>
              <ul className="space-y-3">
                {seo.deliverables[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-normal text-[#292019]">
                    <span className="font-display font-semibold text-[#C6A477] tabular-nums">
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-[#C6A477]/30">
                <div className="text-xs font-medium uppercase tracking-wider text-[#292019]/70 mb-2">
                  {lang === 'id' ? 'Perangkat Lunak Utama' : 'Primary Engineering Software'}
                </div>
                <p className="text-sm font-medium text-[#171513]">
                  {seo.softwareStack.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F4E8D9] border-b border-[#C6A477]/25">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171513] mb-8">
            {lang === 'id' ? 'Pertanyaan yang Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {seo.faqs[lang].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F8F0E5] border border-[#C6A477]/35 rounded-xl p-6"
              >
                <h3 className="font-display text-lg font-semibold text-[#171513] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-[#292019]/85">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Internal Linking */}
      <section className="py-14 bg-[#F8F0E5] border-b border-[#C6A477]/25">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171513] mb-6">
            {lang === 'id' ? 'Layanan Engineering J&J Terkait' : 'Related J&J Engineering Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((rel) => {
              const target = `/${rel.seoLanding!.slug}/`;
              return (
                <a
                  key={rel.id}
                  href={target}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(target);
                  }}
                  className="bg-[#EBD5BD]/80 hover:bg-[#EBD5BD] border border-[#C6A477]/40 rounded-xl p-5 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <ServiceLineIcon type={rel.iconKey} className="w-7 h-7" />
                      <span className="font-display text-base font-semibold text-[#C6A477]">
                        {rel.number}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#171513] mb-2">
                      {rel.cardTitle[lang]}
                    </h3>
                    <p className="text-xs font-normal text-[#292019]/85 leading-relaxed">
                      {rel.cardDescription[lang]}
                    </p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#171513]">
                    <span>{lang === 'id' ? 'Buka Halaman Layanan' : 'View Service Page'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A477]" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-filled Contact Form */}
      <ContactSection lang={lang} preselectedService={seo.primaryKeyword[lang]} />
    </div>
  );
}
