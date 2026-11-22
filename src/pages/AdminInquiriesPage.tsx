import React, { useEffect, useState } from 'react';
import { Download, Lock, LogOut, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface InquiryItem {
  id: string;
  referenceCode: string;
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  projectType: string;
  serviceRequired: string;
  projectDescription: string;
  status: 'new' | 'reviewed' | 'quoted' | 'archived';
  attachment?: {
    storedName: string;
    originalName: string;
    sizeBytes: number;
  };
  createdAt: string;
}

interface AdminTestimonial {
  id: string;
  clientName: string;
  companyName: string;
  projectType: string;
  review: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export function AdminInquiriesPage({ lang }: { lang: Language }) {
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [token, setToken] = useState<string>('');
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [testimonials, setTestimonials] = useState<AdminTestimonial[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetch('/api/admin/status')
      .then((res) => res.json())
      .then((data) => setConfigured(Boolean(data?.configured)))
      .catch(() => setConfigured(true));
  }, []);

  const fetchDashboard = async (authToken: string) => {
    setLoadingData(true);
    try {
      const [inqRes, testRes] = await Promise.all([
        fetch('/api/inquiries', { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch('/api/admin/testimonials', { headers: { Authorization: `Bearer ${authToken}` } }),
      ]);
      if (inqRes.status === 401) {
        setToken('');
        return;
      }
      const inqJson = await inqRes.json();
      const testJson = await testRes.json();
      setInquiries(Array.isArray(inqJson.inquiries) ? inqJson.inquiries : []);
      setTestimonials(Array.isArray(testJson.testimonials) ? testJson.testimonials : []);
    } finally {
      setLoadingData(false);
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const endpoint = configured ? '/api/admin/login' : '/api/admin/claim';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuthError(data?.error || 'Authentication failed.');
        return;
      }
      setConfigured(true);
      setToken(data.token);
      setPasscode('');
      fetchDashboard(data.token);
    } catch {
      setAuthError('Network error during authentication.');
    }
  };

  const handleStatusChange = async (id: string, status: InquiryItem['status']) => {
    const res = await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setInquiries((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
    }
  };

  const handleTestimonialModeration = async (id: string, status: AdminTestimonial['status']) => {
    const res = await fetch(`/api/admin/testimonials/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setTestimonials((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
    }
  };

  const handleDownloadAttachment = async (id: string, originalName: string) => {
    const res = await fetch(`/api/inquiries/${id}/attachment`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = originalName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-[80vh] bg-[#F8F0E5] pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {!token ? (
          <div className="max-w-md mx-auto bg-[#F4E8D9] border border-[#C6A477]/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#C6A477]" />
              <h1 className="font-display text-2xl font-bold text-[#171513]">
                {configured === false
                  ? lang === 'id'
                    ? 'Aktivasi Passcode Admin Pertama'
                    : 'First-Run Admin Passcode Setup'
                  : lang === 'id'
                  ? 'Portal Admin Inquiry J&J'
                  : 'J&J Admin Inquiry Portal'}
              </h1>
            </div>

            <p className="text-xs leading-relaxed text-[#292019]/80 mb-5">
              {configured === false
                ? lang === 'id'
                  ? 'Belum ada passcode admin yang dikonfigurasi. Buat passcode admin minimal 8 karakter untuk mengamankan kotak masuk inquiry dan dokumen proyek klien.'
                  : 'No admin passcode is configured yet. Claim an admin passcode (minimum 8 characters) to secure client inquiries and project document downloads.'
                : lang === 'id'
                ? 'Masukkan passcode admin untuk melihat data inquiry proyek dan mengelola verifikasi ulasan klien.'
                : 'Enter your admin passcode to review received project inquiries and moderate client reviews.'}
            </p>

            {authError && (
              <div className="mb-4 p-3 rounded bg-red-50 border border-red-300 text-xs text-red-900">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#292019] mb-1.5">
                  Admin Passcode
                </label>
                <input
                  type="password"
                  required
                  minLength={configured === false ? 8 : 1}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8F0E5] border border-[#C6A477]/50 rounded-md text-[#171513] focus:outline-none focus:border-[#171513]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#171513] text-[#F8F0E5] hover:bg-[#292019] py-3 rounded-md text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                {configured === false
                  ? lang === 'id'
                    ? 'Simpan & Buka Portal Admin'
                    : 'Claim & Open Admin Portal'
                  : lang === 'id'
                  ? 'Masuk ke Portal Admin'
                  : 'Sign In to Admin Portal'}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C6A477]/35 pb-5">
              <div>
                <h1 className="font-display text-3xl font-bold text-[#171513]">
                  {lang === 'id' ? 'Kotak Masuk Inquiry & Proyek' : 'Project Inquiries & Review Inbox'}
                </h1>
                <p className="text-xs text-[#292019]/75 mt-1">
                  J&amp;J BIM &amp; Structure Engineering Administration
                </p>
              </div>
              <button
                type="button"
                onClick={() => setToken('')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBD5BD] text-[#171513] rounded-md text-xs font-semibold cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>{lang === 'id' ? 'Keluar' : 'Sign Out'}</span>
              </button>
            </div>

            {loadingData ? (
              <p className="text-sm text-[#292019]/75">Loading records...</p>
            ) : (
              <>
                {/* Inquiries Table / Cards */}
                <div className="space-y-4">
                  <h2 className="font-display text-xl font-bold text-[#171513]">
                    Received Inquiries ({inquiries.length})
                  </h2>
                  {inquiries.length === 0 ? (
                    <div className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-xl p-6 text-sm text-[#292019]/75">
                      No inquiries submitted yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {inquiries.map((item) => (
                        <div
                          key={item.id}
                          className="bg-[#F4E8D9] border border-[#C6A477]/40 rounded-xl p-5 sm:p-6 space-y-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="text-xs font-medium text-[#292019]">
                              <span className="font-mono text-[#171513]">{item.referenceCode}</span>
                              <span className="mx-2 text-[#C6A477]">·</span>
                              <span>{item.serviceRequired}</span>
                              <span className="mx-2 text-[#C6A477]">·</span>
                              <span>{new Date(item.createdAt).toLocaleString()}</span>
                            </div>

                            <select
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(item.id, e.target.value as InquiryItem['status'])
                              }
                              className="px-3 py-1.5 text-xs font-medium bg-[#F8F0E5] border border-[#C6A477]/60 rounded text-[#171513]"
                            >
                              <option value="new">New</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="quoted">Quoted</option>
                              <option value="archived">Archived</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                            <div>
                              <span className="font-semibold text-[#171513]">{item.fullName}</span> (
                              {item.companyName})
                            </div>
                            <div className="text-[#292019]/85">{item.email}</div>
                            <div className="text-[#292019]/85">WhatsApp: {item.whatsappNumber}</div>
                          </div>

                          <p className="text-sm text-[#292019]/90 bg-[#F8F0E5] p-3.5 rounded-lg border border-[#C6A477]/25">
                            {item.projectDescription}
                          </p>

                          {item.attachment && (
                            <div>
                              <button
                                type="button"
                                onClick={() =>
                                  handleDownloadAttachment(item.id, item.attachment!.originalName)
                                }
                                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#171513] text-[#F8F0E5] rounded text-xs font-semibold cursor-pointer"
                              >
                                <Download className="w-3.5 h-3.5 text-[#C6A477]" />
                                <span>
                                  {item.attachment.originalName} (
                                  {Math.round(item.attachment.sizeBytes / 1024)} KB)
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Testimonial Moderation */}
                <div className="space-y-4 pt-4 border-t border-[#C6A477]/35">
                  <h2 className="font-display text-xl font-bold text-[#171513] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#C6A477]" />
                    <span>Client Review Verification ({testimonials.length})</span>
                  </h2>
                  {testimonials.length === 0 ? (
                    <div className="bg-[#F4E8D9] border border-[#C6A477]/35 rounded-xl p-6 text-sm text-[#292019]/75">
                      No client reviews submitted yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {testimonials.map((rev) => (
                        <div
                          key={rev.id}
                          className="bg-[#F4E8D9] border border-[#C6A477]/40 rounded-xl p-5 space-y-3"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-semibold text-[#171513]">
                              {rev.clientName} · {rev.companyName}
                            </span>
                            <select
                              value={rev.status}
                              onChange={(e) =>
                                handleTestimonialModeration(
                                  rev.id,
                                  e.target.value as AdminTestimonial['status']
                                )
                              }
                              className="px-2.5 py-1 text-xs font-medium bg-[#F8F0E5] border border-[#C6A477]/60 rounded"
                            >
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </div>
                          <div className="text-xs text-[#292019]/70">{rev.projectType}</div>
                          <p className="text-sm text-[#292019]">“{rev.review}”</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
