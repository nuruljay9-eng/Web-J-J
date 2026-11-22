import React from 'react';
import { ArrowUpRight, Lock, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE_EN, WHATSAPP_DEFAULT_MESSAGE_ID } from '../data/assets';
import { SEO_SERVICE_PAGES } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { JJLogoMark, JJWordmark } from './ServiceIcons';

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export function Footer({ lang, onNavigate }: FooterProps) {
  const t = TRANSLATIONS[lang];
  const prefix = `/${lang}`;
  const whatsappUrl = getWhatsAppUrl(
    lang === 'id' ? WHATSAPP_DEFAULT_MESSAGE_ID : WHATSAPP_DEFAULT_MESSAGE_EN
  );

  const handleLink = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <footer className="bg-[#171513] text-[#F8F0E5] border-t border-[#C6A477]/30">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <JJLogoMark className="w-10 h-10" />
              <div>
                <div className="flex items-baseline gap-2.5">
                  <JJWordmark variant="light" className="h-[18px] w-auto" />
                  <span className="text-[11px] tracking-[0.1em] font-medium text-[#F8F0E5]/90 uppercase">
                    BIM &amp; Structure Engineering
                  </span>
                </div>
                <div className="text-[10.5px] tracking-[0.14em] font-medium text-[#C6A477] mt-1">
                  {t.brand.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm font-normal leading-relaxed text-[#EBD5BD]/80 max-w-sm">{t.footer.desc}</p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6A477] hover:text-[#F8F0E5] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 7 SEO Service Pages Links */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-base font-semibold text-[#C6A477] mb-4">
              {t.footer.servicesCol}
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm font-normal">
              {SEO_SERVICE_PAGES.map((svc) => {
                const href = `/${svc.seoLanding!.slug}/`;
                return (
                  <li key={svc.id}>
                    <a
                      href={href}
                      onClick={(e) => handleLink(e, href)}
                      className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="text-[11px] font-mono text-[#C6A477]/70">{svc.number}</span>
                      <span>{svc.cardTitle[lang]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-semibold text-[#C6A477] mb-4">
              {t.footer.navigationCol}
            </h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <a
                  href={`${prefix}/`}
                  onClick={(e) => handleLink(e, `${prefix}/`)}
                  className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href={lang === 'id' ? '/id/portfolio' : '/en/portfolio'}
                  onClick={(e) => handleLink(e, lang === 'id' ? '/id/portfolio' : '/en/portfolio')}
                  className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors"
                >
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a
                  href={lang === 'id' ? '/id/testimoni' : '/en/testimonials'}
                  onClick={(e) => handleLink(e, lang === 'id' ? '/id/testimoni' : '/en/testimonials')}
                  className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors"
                >
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/blog`}
                  onClick={(e) => handleLink(e, `${prefix}/blog`)}
                  className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors"
                >
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <a
                  href={lang === 'id' ? '/id/kontak' : '/en/contact'}
                  onClick={(e) => handleLink(e, lang === 'id' ? '/id/kontak' : '/en/contact')}
                  className="text-[#EBD5BD]/85 hover:text-[#C6A477] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Admin Portal */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-semibold text-[#C6A477] mb-4">
              {t.footer.contactCol}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EBD5BD]/85">
              <li>
                <a
                  href={lang === 'id' ? '/id/kontak' : '/en/contact'}
                  onClick={(e) => handleLink(e, lang === 'id' ? '/id/kontak' : '/en/contact')}
                  className="hover:text-[#C6A477] transition-colors"
                >
                  {t.contact.submitBtn}
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A477] transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/admin-inquiries"
                  onClick={(e) => handleLink(e, '/admin-inquiries')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#EBD5BD]/65 hover:text-[#C6A477] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{t.footer.adminLink}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#C6A477]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBD5BD]/65">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>Indonesia &amp; International Construction Engineering Services</p>
        </div>
      </div>
    </footer>
  );
}
