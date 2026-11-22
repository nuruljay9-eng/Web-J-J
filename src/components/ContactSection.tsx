import React, { useState } from 'react';
import { CheckCircle2, FileUp, MessageCircle, Send } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE_EN, WHATSAPP_DEFAULT_MESSAGE_ID } from '../data/assets';
import { HOME_SERVICES } from '../data/services';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
  isStandalonePage?: boolean;
  preselectedService?: string;
}

export function ContactSection({
  lang,
  isStandalonePage = false,
  preselectedService = '',
}: ContactSectionProps) {
  const t = TRANSLATIONS[lang].contact;
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [projectType, setProjectType] = useState<string>(t.projectTypes[0]);
  const [serviceRequired, setServiceRequired] = useState(
    preselectedService || HOME_SERVICES[0].cardTitle[lang]
  );
  const [projectDescription, setProjectDescription] = useState('');
  const [attachment, setAttachment] = useState<{
    name: string;
    size: number;
    dataBase64: string;
  } | null>(null);
  const [fileError, setFileError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [receipt, setReceipt] = useState<{ referenceCode: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const file = e.target.files?.[0];
    if (!file) {
      setAttachment(null);
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setFileError(
        lang === 'id'
          ? 'Ukuran dokumen maksimal 8 MB.'
          : 'Maximum document size is 8 MB.'
      );
      setAttachment(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setAttachment({
          name: file.name,
          size: file.size,
          dataBase64: reader.result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          whatsappNumber,
          projectType,
          serviceRequired,
          projectDescription,
          language: lang,
          attachment: attachment
            ? { name: attachment.name, dataBase64: attachment.dataBase64 }
            : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data?.error || 'Failed to submit inquiry.');
      } else {
        setReceipt({ referenceCode: data.referenceCode });
      }
    } catch {
      setErrorMsg(
        lang === 'id'
          ? 'Terjadi kesalahan jaringan. Silakan hubungi kami langsung melalui WhatsApp.'
          : 'Network error. Please contact our engineering desk directly via WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappDirect = getWhatsAppUrl(
    lang === 'id' ? WHATSAPP_DEFAULT_MESSAGE_ID : WHATSAPP_DEFAULT_MESSAGE_EN
  );

  const whatsappWithRef = receipt
    ? getWhatsAppUrl(
        lang === 'id'
          ? `Halo J&J, saya baru saja mengirimkan form konsultasi (${receipt.referenceCode}) untuk layanan ${serviceRequired} atas nama ${fullName} (${companyName}).`
          : `Hello J&J, I just submitted an engineering inquiry (${receipt.referenceCode}) for ${serviceRequired} on behalf of ${fullName} (${companyName}).`
      )
    : whatsappDirect;

  return (
    <section
      id="kontak"
      className={`bg-[#F8F0E5] border-b border-[#C6A477]/25 ${
        isStandalonePage ? 'pt-28 pb-20' : 'py-16 lg:py-24'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Intro & Direct Engineering Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-7 bg-[#C6A477]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.12em] text-[#292019] uppercase">
                {t.eyebrow}
              </span>
            </div>

            {isStandalonePage ? (
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#171513] tracking-tight text-balance">
                {t.title}
              </h1>
            ) : (
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171513] tracking-tight text-balance">
                {t.title}
              </h2>
            )}

            <p className="text-[15.5px] font-normal leading-relaxed text-[#292019]/85">{t.subtitle}</p>

            {/* Direct WhatsApp Consultation Box */}
            <div className="bg-[#EBD5BD]/75 border border-[#C6A477]/45 rounded-xl p-6 space-y-3">
              <h3 className="font-display text-lg font-semibold text-[#171513]">
                {t.directChannelsTitle}
              </h3>
              <p className="text-sm font-normal text-[#292019]/85 leading-relaxed">{t.directWaDesc}</p>
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] px-5 py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A477]" />
                <span>{t.directWaLabel}</span>
              </a>
            </div>

            {/* Target Client Scope */}
            <div className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-xl p-6">
              <h3 className="font-display text-base font-semibold text-[#171513] mb-3">
                {t.directScopeLabel}
              </h3>
              <ul className="space-y-2 text-sm text-[#292019]/85">
                {t.directScopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A477] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7 bg-[#F4E8D9] border border-[#C6A477]/45 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {receipt ? (
              <div className="py-8 text-center space-y-5">
                <CheckCircle2 className="w-12 h-12 text-[#292019] mx-auto" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-[#171513]">
                  {t.successTitle}
                </h3>
                <p className="text-sm font-normal text-[#292019]/85 max-w-md mx-auto leading-relaxed">
                  {t.successDesc}
                </p>
                <div className="inline-block bg-[#F8F0E5] border border-[#C6A477] rounded-lg px-6 py-3">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[#292019]/70">
                    {t.referenceLabel}
                  </div>
                  <div className="font-mono text-lg font-semibold text-[#171513] mt-0.5 tabular-nums">
                    {receipt.referenceCode}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={whatsappWithRef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#171513] text-[#F8F0E5] px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C6A477]" />
                    <span>{t.whatsappContinue}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setReceipt(null);
                      setFullName('');
                      setCompanyName('');
                      setEmail('');
                      setWhatsappNumber('');
                      setProjectDescription('');
                      setAttachment(null);
                    }}
                    className="text-xs font-semibold text-[#292019] underline cursor-pointer"
                  >
                    {lang === 'id' ? 'Kirim Inquiry Lain' : 'Submit Another Inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-md bg-red-50 border border-red-300 text-xs text-red-900">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.whatsappNumber} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812..."
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.projectType} *
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    >
                      {t.projectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#292019] mb-1.5">
                      {t.serviceRequired} *
                    </label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                    >
                      {HOME_SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.cardTitle[lang]}>
                          {svc.cardTitle[lang]}
                        </option>
                      ))}
                      <option value="Tekla Structures Detailing">Tekla Structures Detailing</option>
                      <option value="Revit Modeling">Revit Modeling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292019] mb-1.5">
                    {t.projectDescription} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder={
                      lang === 'id'
                        ? 'Jelaskan luas bangunan, jumlah lantai, lingkup BIM/struktur yang dibutuhkan, serta target waktu...'
                        : 'Describe building floor area, number of stories, required BIM/structural scope, and target schedule...'
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292019] mb-1.5">
                    {t.uploadLabel}
                  </label>
                  <label className="flex items-center gap-3 px-4 py-3 bg-[#F8F0E5] border border-dashed border-[#C6A477] rounded-md cursor-pointer hover:bg-[#EBD5BD]/35 transition-colors">
                    <FileUp className="w-5 h-5 text-[#C6A477] shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-[#171513] truncate">
                        {attachment ? attachment.name : t.uploadLabel}
                      </div>
                      <div className="text-[11px] text-[#292019]/70">{t.uploadHint}</div>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.dwg,.rvt,.ifc,.xlsx,.xls,.zip,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  {fileError && <p className="text-xs text-red-700 mt-1.5">{fileError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] disabled:opacity-60 py-3.5 px-6 rounded-md text-xs font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C6A477]" />
                  <span>{submitting ? t.submitting : t.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
