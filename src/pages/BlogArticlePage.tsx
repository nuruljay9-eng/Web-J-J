import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blog';
import { SEO_SERVICE_PAGES } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { BlogArticle, Language } from '../types';
import { useSeoHead } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';

interface BlogArticlePageProps {
  article: BlogArticle;
  lang: Language;
  onNavigate: (path: string) => void;
}

export function BlogArticlePage({ article, lang, onNavigate }: BlogArticlePageProps) {
  const t = TRANSLATIONS[lang].blog;
  const articlePath = `/${lang}/blog/${article.slug}`;

  const schemas = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.h1[lang],
        description: article.metaDescription[lang],
        datePublished: article.publishedDate,
        author: {
          '@type': 'Organization',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'J&J BIM & Structure Engineering',
        },
        image: `${origin}${article.featuredImage}`,
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
            name: 'Blog',
            item: `${origin}/${lang}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.h1[lang],
            item: `${origin}${articlePath}`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs[lang].map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ];
  }, [article, articlePath, lang]);

  useSeoHead({
    title: article.seoTitle[lang],
    description: article.metaDescription[lang],
    path: articlePath,
    lang,
    idPath: `/id/blog/${article.slug}`,
    enPath: `/en/blog/${article.slug}`,
    ogType: 'article',
    ogImage: article.featuredImage,
    schemas,
  });

  const internalServices = SEO_SERVICE_PAGES.filter((svc) =>
    article.internalServiceSlugs.includes(svc.seoLanding!.slug)
  );
  const relatedArticles = BLOG_ARTICLES.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <article className="bg-[#F8F0E5] pt-28 pb-20">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#292019]/75 mb-6">
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
          <a
            href={`/${lang}/blog`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(`/${lang}/blog`);
            }}
            className="hover:text-[#171513] font-medium"
          >
            Blog
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6A477]" />
          <span className="text-[#171513] font-medium truncate max-w-xs">{article.topicTag[lang]}</span>
        </nav>

        {/* Article Metadata (Zero-Pill) */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#292019]/75 mb-3">
          <span className="font-medium text-[#171513]">{article.topicTag[lang]}</span>
          <span aria-hidden="true">·</span>
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Single H1 */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171513] leading-[1.18] text-balance mb-6">
          {article.h1[lang]}
        </h1>

        <p className="text-lg font-normal text-[#292019]/90 leading-relaxed mb-8">
          {article.excerpt[lang]}
        </p>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#C6A477]/45 mb-10 bg-[#292019]">
          <ResilientImage
            src={article.featuredImage}
            alt={article.imageAlt[lang]}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Structured H2 / H3 Sections */}
        <div className="space-y-8">
          {article.sections[lang].map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171513]">
                {sec.h2}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[16px] font-normal leading-[1.82] text-[#292019]/90">
                  {p}
                </p>
              ))}
              {sec.subheadings?.map((sub, sIdx) => (
                <div key={sIdx} className="pt-2 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-[#171513]">{sub.h3}</h3>
                  <p className="text-[15.5px] font-normal leading-[1.8] text-[#292019]/85">{sub.text}</p>
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Internal Links to J&J Services */}
        <div className="mt-12 bg-[#F4E8D9] border border-[#C6A477]/45 rounded-xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-[#171513] mb-4">
            {t.relatedServices}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internalServices.map((svc) => {
              const target = `/${svc.seoLanding!.slug}/`;
              return (
                <a
                  key={svc.id}
                  href={target}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(target);
                  }}
                  className="bg-[#F8F0E5] border border-[#C6A477]/35 hover:border-[#C6A477] rounded-lg p-4 flex items-center justify-between transition-colors"
                >
                  <div>
                    <div className="font-display text-base font-semibold text-[#171513]">
                      {svc.cardTitle[lang]}
                    </div>
                    <div className="text-xs font-normal text-[#292019]/75 mt-1">
                      {svc.cardDescription[lang]}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C6A477] shrink-0 ml-3" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Article FAQs */}
        {article.faqs[lang].length > 0 && (
          <div className="mt-10 pt-8 border-t border-[#C6A477]/30">
            <h2 className="font-display text-2xl font-bold text-[#171513] mb-4">{t.faqTitle}</h2>
            <div className="space-y-4">
              {article.faqs[lang].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-xl p-5"
                >
                  <h3 className="font-display text-base font-semibold text-[#171513] mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-[#292019]/85">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-[#C6A477]/30">
          <h2 className="font-display text-2xl font-bold text-[#171513] mb-5">
            {t.relatedArticles}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedArticles.map((rel) => {
              const target = `/${lang}/blog/${rel.slug}`;
              return (
                <a
                  key={rel.slug}
                  href={target}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(target);
                  }}
                  className="bg-[#EBD5BD]/60 hover:bg-[#EBD5BD] border border-[#C6A477]/40 rounded-xl p-5 transition-colors"
                >
                  <div className="text-xs font-medium text-[#292019]/70 mb-1.5">
                    {rel.topicTag[lang]} · {rel.readTime}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#171513] leading-snug">
                    {rel.h1[lang]}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => onNavigate(`/${lang}/blog`)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#171513] hover:text-[#C6A477] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToBlog}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
