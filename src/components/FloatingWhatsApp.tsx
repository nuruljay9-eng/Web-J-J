import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE_EN, WHATSAPP_DEFAULT_MESSAGE_ID } from '../data/assets';
import { Language } from '../types';

export function FloatingWhatsApp({ lang }: { lang: Language }) {
  const url = getWhatsAppUrl(
    lang === 'id' ? WHATSAPP_DEFAULT_MESSAGE_ID : WHATSAPP_DEFAULT_MESSAGE_EN
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'id' ? 'Konsultasi Gratis via WhatsApp' : 'Free Consultation via WhatsApp'}
      title={lang === 'id' ? 'Konsultasi Gratis via WhatsApp' : 'Free Consultation via WhatsApp'}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2.5 bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] border border-[#C6A477]/60 shadow-lg rounded-full px-4 py-3 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A477]"
    >
      <MessageCircle className="w-5 h-5 text-[#C6A477] shrink-0" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        {lang === 'id' ? 'Konsultasi WhatsApp' : 'WhatsApp Consultation'}
      </span>
    </a>
  );
}
