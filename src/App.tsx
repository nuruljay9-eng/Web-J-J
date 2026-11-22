import React, { useEffect, useState } from 'react';
import { AboutServicesSection } from './components/AboutServicesSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BLOG_ARTICLES } from './data/blog';
import { SEO_SERVICE_PAGES } from './data/services';
import { AdminInquiriesPage } from './pages/AdminInquiriesPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { BlogPage } from './pages/BlogPage';
import { ServiceLandingPage } from './pages/ServiceLandingPage';
import { Language } from './types';
import { useSeoHead } from './utils/seo';

function detectInitialLang(pathname: string): Language {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'id';
}

function normalizePath(rawPath: string): string {
  const withoutOrigin = rawPath.split('#')[0] || '/';
  return withoutOrigin;
}

function HomePage({
  lang,
  onNavigate,
}: {
  lang: Language;
  onNavigate: (path: string) => void;
}) {
  useSeoHead({
    title:
      lang === 'id'
        ? 'J&J BIM & Structure Engineering | Jasa BIM Modeling & Analisis Struktur'
        : 'J&J BIM & Structure Engineering | BIM Modeling & Structural Services',
    description:
      lang === 'id'
        ? 'J&J BIM & Structure Engineering menyediakan jasa BIM Modeling, Revit, Tekla Structures, Shop Drawing, Rebar Detailing, BIM Coordination, QTO, RAB, dan Analisis Struktur.'
        : 'J&J BIM & Structure Engineering delivers professional BIM Modeling, Revit, Tekla Structures, Shop Drawings, Rebar Detailing, BIM Coordination, QTO, and Structural Analysis.',
    path: `/${lang}/`,
    lang,
    idPath: '/id/',
    enPath: '/en/',
  });

  const handleLearnMore = () => {
    const el = document.getElementById('tentang-kami');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection lang={lang} onLearnMore={handleLearnMore} />
      <AboutServicesSection lang={lang} onSelectService={onNavigate} />
      <WhyChooseSection lang={lang} />
      <PortfolioSection lang={lang} isStandalonePage={false} onNavigate={onNavigate} />
      <TestimonialsSection lang={lang} isStandalonePage={false} />
      <BlogPage lang={lang} isStandalonePage={false} onNavigate={onNavigate} />
      <ContactSection lang={lang} isStandalonePage={false} />
    </>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/id/'
  );
  const [lang, setLang] = useState<Language>(() =>
    typeof window !== 'undefined' ? detectInitialLang(window.location.pathname) : 'id'
  );

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      if (path === '/en' || path.startsWith('/en/')) {
        setLang('en');
      } else if (path === '/id' || path.startsWith('/id/')) {
        setLang('id');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (target: string) => {
    const [pathPart, hashPart] = target.split('#');
    const cleanPath = pathPart || `/${lang}/`;

    if (cleanPath !== window.location.pathname) {
      window.history.pushState({}, '', target);
      setCurrentPath(cleanPath);
    }

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleLanguage = (newLang: Language) => {
    setLang(newLang);
    const cleaned = normalizePath(currentPath);

    // Map current route seamlessly between /id/ and /en/
    let nextPath = `/${newLang}/`;
    if (cleaned.includes('/portfolio')) {
      nextPath = newLang === 'id' ? '/id/portfolio' : '/en/portfolio';
    } else if (cleaned.includes('/testimoni') || cleaned.includes('/testimonials')) {
      nextPath = newLang === 'id' ? '/id/testimoni' : '/en/testimonials';
    } else if (cleaned.includes('/kontak') || cleaned.includes('/contact')) {
      nextPath = newLang === 'id' ? '/id/kontak' : '/en/contact';
    } else if (cleaned.includes('/blog/')) {
      const slug = cleaned.split('/blog/')[1]?.replace(/\/$/, '');
      if (slug) nextPath = `/${newLang}/blog/${slug}`;
    } else if (cleaned.endsWith('/blog')) {
      nextPath = `/${newLang}/blog`;
    } else if (cleaned.includes('/jasa-')) {
      const matched = SEO_SERVICE_PAGES.find((s) => cleaned.includes(s.seoLanding!.slug));
      if (matched) {
        nextPath = `/${newLang}/${matched.seoLanding!.slug}/`;
      }
    }

    window.history.pushState({}, '', nextPath);
    setCurrentPath(nextPath);
  };

  // Resolve active route
  const cleanRoute = normalizePath(currentPath).replace(/\/+$/, '') || '/';

  // 1. Check 7 SEO Service Landing Pages (/jasa-..., /id/jasa-..., /en/jasa-...)
  const matchedServicePage = SEO_SERVICE_PAGES.find((svc) =>
    cleanRoute.endsWith(`/${svc.seoLanding!.slug}`)
  );

  // 2. Check Blog Article (/blog/:slug or /id/blog/:slug or /en/blog/:slug)
  const blogSlugMatch = cleanRoute.match(/\/blog\/([^/]+)$/);
  const matchedArticle = blogSlugMatch
    ? BLOG_ARTICLES.find((a) => a.slug === blogSlugMatch[1])
    : undefined;

  const renderMain = () => {
    if (cleanRoute === '/admin-inquiries') {
      return <AdminInquiriesPage lang={lang} />;
    }
    if (matchedServicePage) {
      return <ServiceLandingPage service={matchedServicePage} lang={lang} onNavigate={navigate} />;
    }
    if (matchedArticle) {
      return <BlogArticlePage article={matchedArticle} lang={lang} onNavigate={navigate} />;
    }
    if (cleanRoute === '/blog' || cleanRoute === '/id/blog' || cleanRoute === '/en/blog') {
      return <BlogPage lang={lang} isStandalonePage onNavigate={navigate} />;
    }
    if (
      cleanRoute === '/portfolio' ||
      cleanRoute === '/id/portfolio' ||
      cleanRoute === '/en/portfolio'
    ) {
      return <PortfolioSection lang={lang} isStandalonePage onNavigate={navigate} />;
    }
    if (
      cleanRoute === '/testimoni' ||
      cleanRoute === '/testimonials' ||
      cleanRoute === '/id/testimoni' ||
      cleanRoute === '/en/testimonials'
    ) {
      return <TestimonialsSection lang={lang} isStandalonePage />;
    }
    if (
      cleanRoute === '/kontak' ||
      cleanRoute === '/contact' ||
      cleanRoute === '/id/kontak' ||
      cleanRoute === '/en/contact'
    ) {
      return <ContactSection lang={lang} isStandalonePage />;
    }

    return <HomePage lang={lang} onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E5] text-[#292019]">
      <Navbar
        lang={lang}
        currentPath={currentPath}
        onNavigate={navigate}
        onToggleLanguage={handleToggleLanguage}
      />
      <main className="flex-1">{renderMain()}</main>
      <Footer lang={lang} onNavigate={navigate} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
