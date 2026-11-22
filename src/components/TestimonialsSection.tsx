import React, { useEffect, useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { Language, VerifiedTestimonial } from '../types';

interface TestimonialsSectionProps {
  lang: Language;
  isStandalonePage?: boolean;
}

export function TestimonialsSection({ lang, isStandalonePage = false }: TestimonialsSectionProps) {
  const t = TRANSLATIONS[lang].testimonials;
  const [testimonials, setTestimonials] = useState<VerifiedTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [review, setReview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.testimonials)) {
          setTestimonials(data.testimonials);
        }
      })
      .catch(() => {
        // Keep clean empty state if unavailable
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientName, companyName, projectType, review }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitStatus({ type: 'error', text: data?.error || 'Submission failed.' });
      } else {
        setSubmitStatus({ type: 'success', text: t.formSuccess });
        setClientName('');
        setCompanyName('');
        setProjectType('');
        setReview('');
      }
    } catch {
      setSubmitStatus({ type: 'error', text: 'Network error while submitting review.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="testimoni"
      className={`bg-[#F4E8D9] border-b border-[#C6A477]/25 ${
        isStandalonePage ? 'pt-28 pb-20' : 'py-16 lg:py-24'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 columns: Verified Reviews OR Quality Assurance Commitments */}
          <div className="lg:col-span-7 space-y-6">
            {loading ? (
              <div className="bg-[#F8F0E5] border border-[#C6A477]/35 rounded-xl p-8 text-sm text-[#292019]/75">
                {lang === 'id' ? 'Memuat ulasan terverifikasi...' : 'Loading verified client reviews...'}
              </div>
            ) : testimonials.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {testimonials.map((item) => (
                  <blockquote
                    key={item.id}
                    className="bg-[#F8F0E5] border border-[#C6A477]/40 rounded-xl p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-[#292019]/70 mb-3">
                      <ShieldCheck className="w-4 h-4 text-[#C6A477]" />
                      <span>{item.projectType}</span>
                    </div>
                    <p className="text-base font-normal leading-relaxed text-[#171513] mb-4">
                      “{item.review}”
                    </p>
                    <footer className="text-sm">
                      <span className="font-semibold text-[#171513]">{item.clientName}</span>
                      <span className="mx-2 text-[#C6A477]">·</span>
                      <span className="text-[#292019]/80">{item.companyName}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="bg-[#F8F0E5] border border-[#C6A477]/40 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#C6A477]" />
                  <h3 className="font-display text-xl font-semibold text-[#171513]">{t.emptyTitle}</h3>
                </div>
                <p className="text-sm font-normal leading-relaxed text-[#292019]/85 mb-6">{t.emptyDesc}</p>

                <div className="pt-5 border-t border-[#C6A477]/30">
                  <h4 className="font-display text-base font-semibold text-[#171513] mb-4">
                    {t.standardsTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.standards.map((std) => (
                      <div key={std.title} className="bg-[#F4E8D9] border border-[#C6A477]/30 rounded-lg p-4">
                        <h5 className="font-display text-sm font-semibold text-[#171513] mb-1.5">
                          {std.title}
                        </h5>
                        <p className="text-xs font-normal leading-relaxed text-[#292019]/80">{std.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 columns: Verified Client Review Submission Form */}
          <div className="lg:col-span-5 bg-[#F8F0E5] border border-[#C6A477]/45 rounded-xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-[#171513] mb-2">{t.formTitle}</h3>
            <p className="text-xs text-[#292019]/75 mb-5">
              {lang === 'id'
                ? 'Ulasan yang dikirimkan akan melalui verifikasi proyek sebelum dipublikasikan.'
                : 'Submitted reviews undergo project verification before publication.'}
            </p>

            {submitStatus && (
              <div
                className={`mb-5 p-4 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 ${
                  submitStatus.type === 'success'
                    ? 'bg-[#EBD5BD]/60 border border-[#C6A477] text-[#171513]'
                    : 'bg-red-50 border border-red-300 text-red-900'
                }`}
              >
                {submitStatus.type === 'success' && (
                  <CheckCircle2 className="w-4 h-4 text-[#292019] shrink-0 mt-0.5" />
                )}
                <span>{submitStatus.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#292019] mb-1.5">
                  {t.formClientName}
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F4E8D9]/70 border border-[#C6A477]/45 rounded-md text-[#171513] focus:outline-none focus:border-[#292019]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#292019] mb-1.5">
                  {t.formCompanyName}
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F4E8D9]/70 border border-[#C6A477]/45 rounded-md text-[#171513] focus:outline-none focus:border-[#292019]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#292019] mb-1.5">
                  {t.formProjectType}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'id' ? 'Contoh: BIM Modeling Gedung Komersial' : 'e.g., Commercial Building BIM Modeling'}
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F4E8D9]/70 border border-[#C6A477]/45 rounded-md text-[#171513] focus:outline-none focus:border-[#292019]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#292019] mb-1.5">
                  {t.formReview}
                </label>
                <textarea
                  rows={3}
                  required
                  minLength={20}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F4E8D9]/70 border border-[#C6A477]/45 rounded-md text-[#171513] focus:outline-none focus:border-[#292019]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] disabled:opacity-60 py-3 px-4 rounded-md text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
              >
                {submitting ? '...' : t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
