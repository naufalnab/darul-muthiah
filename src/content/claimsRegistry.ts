export type ClaimStatus =
  | 'VERIFIED'
  | 'VERIFIED_DOC_PENDING_USAGE_PERMISSION'
  | 'PENDING_VERIFICATION'
  | 'PENDING_APPROVAL'
  | 'PENDING_EDITORIAL_HARMONIZATION'
  | 'PENDING_PARENTAL_INSTITUTIONAL_CONSENT';

export type PublicDisplayPolicy =
  | 'show'
  | 'hide'
  | 'replace_with_contact_cta'
  | 'show_with_disclaimer';

export interface ClaimItem {
  id: string;
  field: string;
  value: string;
  source: string;
  status: ClaimStatus;
  approved_by: string | null;
  approved_at: string | null;
  public_display_policy: PublicDisplayPolicy;
  disclaimerText?: string;
  fallbackText?: string;
}

export const claimsRegistry: Record<string, ClaimItem> = {
  admissions_session: {
    id: 'admissions_session',
    field: 'Sesi Pengambilan',
    value: '2026/2027',
    source: 'Pesan awal Cik Yatt & PDF profil h.10 vs Poster 00000125 (Sesi 2027)',
    status: 'PENDING_VERIFICATION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer',
    disclaimerText: 'Maklumat kemasukan tertakluk kepada pengesahan sesi rasmi pihak maahad.'
  },
  whatsapp_cta: {
    id: 'whatsapp_cta',
    field: 'Nombor WhatsApp Rasmi CTA',
    value: '+60 12-310 8902',
    source: 'HTML awal disetujui Cik Yatt vs Poster 00000125 & profil PDF h.7 (+60 12-202 3024)',
    status: 'PENDING_VERIFICATION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer',
    disclaimerText: 'Nombor pertanyaan sementara untuk fasa pratonton dalaman.'
  },
  domain_primary: {
    id: 'domain_primary',
    field: 'Domain Utama',
    value: 'madum.ilmuniaga.com',
    source: 'Instruksi Cik Yatt vs Poster 00000125 (www.madum.edu.my)',
    status: 'PENDING_VERIFICATION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer'
  },
  fee_registration_annual: {
    id: 'fee_registration_annual',
    field: 'Yuran Pendaftaran & Tahunan',
    value: 'RM 1,310',
    source: 'Profil PDF h.10 (Sesi 2026/2027)',
    status: 'PENDING_APPROVAL',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'replace_with_contact_cta',
    fallbackText: 'Sila hubungi pihak maahad untuk yuran terkini.'
  },
  fee_hostel_monthly: {
    id: 'fee_hostel_monthly',
    field: 'Yuran Pengajian Asrama (Bulanan)',
    value: 'RM 500',
    source: 'Profil PDF h.10 (Sesi 2026/2027)',
    status: 'PENDING_APPROVAL',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'replace_with_contact_cta',
    fallbackText: 'Sila hubungi pihak maahad untuk yuran terkini.'
  },
  fee_day_monthly: {
    id: 'fee_day_monthly',
    field: 'Yuran Pengajian Harian (Bulanan)',
    value: 'RM 450',
    source: 'Profil PDF h.10 (Sesi 2026/2027)',
    status: 'PENDING_APPROVAL',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'replace_with_contact_cta',
    fallbackText: 'Sila hubungi pihak maahad untuk yuran terkini.'
  },
  institution_timeline: {
    id: 'institution_timeline',
    field: 'Kronologi Sejarah 2012/2018',
    value: 'Permulaan aktiviti 2012, penamaan MADUM (1) 2018',
    source: 'Profil PDF h.3 (perancangan akhir 2012) vs h.7 (mula April 2012)',
    status: 'PENDING_EDITORIAL_HARMONIZATION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer',
    disclaimerText: 'Tarikh permulaan tahun 2012 dalam dokumen berbeza antara bahagian; kronologi penuh tidak diterbitkan sehingga disahkan.'
  },
  jais_registration: {
    id: 'jais_registration',
    field: 'Status Pendaftaran JAIS',
    value: 'BZH8026 / 13S(8)18/59 (tempoh hingga 13 Okt 2028)',
    source: 'Salinan Perakuan Pendaftaran JAIS dalam Profil PDF h.13',
    status: 'VERIFIED_DOC_PENDING_USAGE_PERMISSION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer',
    disclaimerText: 'Perincian & penggunaan logo rasmi perlu disemak bersama pihak maahad.'
  },
  lzs_amil: {
    id: 'lzs_amil',
    field: 'Tauliah Penolong Amil LZS',
    value: 'Penolong Amil IPIS Kod 1290',
    source: 'Salinan Tauliah LZS dalam Profil PDF h.14',
    status: 'VERIFIED_DOC_PENDING_USAGE_PERMISSION',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'show_with_disclaimer',
    disclaimerText: 'Status pelantikan terkini perlu disahkan; tiada transaksi zakat dalam talian.'
  },
  student_media_consent: {
    id: 'student_media_consent',
    field: 'Hak Penerbitan Media Pelajar Bawah Umur',
    value: 'Foto dan rakaman video aktiviti pelajar',
    source: 'Dokumentasi asal pihak maahad',
    status: 'PENDING_PARENTAL_INSTITUTIONAL_CONSENT',
    approved_by: null,
    approved_at: null,
    public_display_policy: 'hide', // In public build, must hide or require consent; allowed in internal preview
    disclaimerText: 'Pratonton dalaman · Kebenaran penerbitan foto/video pelajar diperlukan sebelum go-live.'
  }
};
