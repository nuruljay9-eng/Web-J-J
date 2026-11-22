import React, { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blog';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { useSeoHead } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';

interface BlogPageProps {
  lang: Language;
  isStandalonePage?: boolean;
  onNavigate: (path: string) => void;
}

export function BlogPage({ lang, isStandalonePage = true, onNavigate }: BlogPageProps) {
  const t = TRANSLATIONS[lang].blog;
  const [query, setQuery] = useState('');

  useSeoHead({
    title:
      lang === 'id'
        ? 'Blog & Wawasan BIM serta Structural Engineering | J&J Engineering'
        : 'BIM & Structural Engineering Insights Blog | J&J Engineering',
    description: t.subtitle,
    path: `/${lang}/blog`,
    lang,
    idPath: '/id/blog',
    enPath: '/en/blog',
    schemas: isStandalonePage
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: t.title,
            description: t.subtitle,
            publisher: {
              '@type': 'Organization',
              name: 'J&J BIM & Structure Engineering',
            },
          },
        ]
      : undefined,
  });

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = !q
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter(
          (a) =>
            a.h1[lang].toLowerCase().includes(q) ||
            a.excerpt[lang].toLowerCase().includes(q) ||
            a.topicTag[lang].toLowerCase().includes(q)
        );
    return isStandalonePage ? list : list.slice(0, 3);
  }, [query, lang, isStandalonePage]);

  return (
    <section
      id="blog"
      className={`bg-[#F4E8D9] border-b border-[#C6A477]/25 ${
        isStandalonePage ? 'pt-28 pb-20' : 'py-16 lg:py-24'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
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

          {isStandalonePage ? (
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-[#292019]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate(`/${lang}/blog`)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171513] border-b border-[#C6A477] pb-1 shrink-0 self-start lg:self-end cursor-pointer"
            >
              <span>{lang === 'id' ? 'Lihat Semua 12 Artikel Teknis' : 'View All 12 Technical Articles'}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A477]" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const href = `/${lang}/blog/${article.slug}`;
            return (
              <article
                key={article.slug}
                className="bg-[#F8F0E5] border border-[#C6A477]/35 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#C6A477] hover:shadow-md"
              >
                <div>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(href);
                    }}
                    className="block aspect-[4/3] overflow-hidden bg-[#292019]"
                  >
                    <ResilientImage
                      src={article.featuredImage}
                      alt={article.imageAlt[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </a>

                  <div className="p-6">
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#292019]/70 mb-2.5">
                      <span className="font-medium text-[#292019]">{article.topicTag[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#171513] leading-snug mb-2.5">
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(href);
                        }}
                        className="hover:text-[#292019] transition-colors"
                      >
                        {article.h1[lang]}
                      </a>
                    </h3>

                    <p className="text-sm font-normal leading-relaxed text-[#292019]/80">
                      {article.excerpt[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-[#C6A477]/20">
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(href);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171513] hover:text-[#C6A477] transition-colors"
                  >
                    <span>{t.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A477]" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
