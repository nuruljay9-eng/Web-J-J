import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE_EN, WHATSAPP_DEFAULT_MESSAGE_ID } from '../data/assets';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { JJLogoMark, JJWordmark } from './ServiceIcons';

interface NavbarProps {
  lang: Language;
  currentPath: string;
  onNavigate: (path: string) => void;
  onToggleLanguage: (newLang: Language) => void;
}

export function Navbar({ lang, currentPath, onNavigate, onToggleLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const prefix = `/${lang}`;
  const navItems = [
    { label: t.nav.home, target: `${prefix}/`, match: ['/', '/id/', '/en/', '/id', '/en'] },
    { label: t.nav.about, target: `${prefix}/#tentang-kami`, match: ['#tentang-kami'] },
    { label: t.nav.services, target: `${prefix}/#layanan`, match: ['/jasa-'] },
    {
      label: t.nav.portfolio,
      target: lang === 'id' ? '/id/portfolio' : '/en/portfolio',
      match: ['/portfolio'],
    },
    {
      label: t.nav.testimonials,
      target: lang === 'id' ? '/id/testimoni' : '/en/testimonials',
      match: ['/testimoni', '/testimonials'],
    },
    { label: t.nav.blog, target: `${prefix}/blog`, match: ['/blog'] },
    {
      label: t.nav.contact,
      target: lang === 'id' ? '/id/kontak' : '/en/contact',
      match: ['/kontak', '/contact'],
    },
  ];

  const isActive = (matchList: string[]) => {
    return matchList.some((m) => {
      if (m === '/' || m === '/id/' || m === '/en/' || m === '/id' || m === '/en') {
        return currentPath === m;
      }
      return currentPath.includes(m);
    });
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(target);
  };

  const whatsappHref = getWhatsAppUrl(
    lang === 'id' ? WHATSAPP_DEFAULT_MESSAGE_ID : WHATSAPP_DEFAULT_MESSAGE_EN
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F0E5]/95 backdrop-blur-md border-b border-[#C6A477]/30 shadow-sm py-2.5'
          : 'bg-[#F8F0E5]/75 backdrop-blur-sm border-b border-[#C6A477]/15 py-3.5'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* LEFT: Logo J&J + Tagline Build • Develop • Grow */}
        <a
          href={`${prefix}/`}
          onClick={(e) => handleNavClick(e, `${prefix}/`)}
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477] rounded"
        >
          <JJLogoMark className="w-9 h-9 transition-transform duration-200 group-hover:scale-[1.03]" />
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-2">
              <JJWordmark variant="dark" className="h-[17px] w-auto" />
              <span className="sr-only">{t.brand.name}</span>
            </div>
            <span className="text-[10px] tracking-[0.12em] font-medium text-[#292019]/80 uppercase whitespace-nowrap mt-1">
              {t.brand.tagline}
            </span>
          </div>
        </a>

        {/* CENTER: Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <a
                key={item.label}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className={`group relative text-[13.5px] tracking-wide whitespace-nowrap shrink-0 py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477] rounded ${
                  active
                    ? 'font-semibold text-[#171513]'
                    : 'font-medium text-[#292019]/80 hover:text-[#171513]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#C6A477] transition-transform duration-200 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Language Switcher + Black WhatsApp CTA Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div
            className="flex items-center border border-[#C6A477]/45 rounded-md overflow-hidden bg-[#F4E8D9]/70"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => onToggleLanguage('id')}
              className={`px-2.5 py-1.5 text-[11px] font-medium tracking-wider transition-colors cursor-pointer ${
                lang === 'id'
                  ? 'bg-[#292019] text-[#F8F0E5] font-semibold'
                  : 'text-[#292019]/75 hover:text-[#171513]'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1.5 text-[11px] font-medium tracking-wider transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#292019] text-[#F8F0E5] font-semibold'
                  : 'text-[#292019]/75 hover:text-[#171513]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] px-4 py-2.5 rounded-md text-[13px] font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-200 border border-[#C6A477]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477]"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A477]" />
            <span>{t.nav.cta}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleLanguage(lang === 'id' ? 'en' : 'id')}
            className="px-2.5 py-2 text-xs font-semibold border border-[#C6A477]/50 rounded bg-[#F4E8D9] text-[#292019]"
            aria-label="Switch language"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-md text-[#171513] hover:bg-[#EBD5BD]/60 transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F0E5] border-t border-[#C6A477]/30 px-5 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="block py-2.5 text-sm font-medium text-[#292019] border-b border-[#EBD5BD]/60"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#171513] text-[#F8F0E5] px-4 py-3 rounded-md text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A477]" />
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
