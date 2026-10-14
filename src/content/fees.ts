import { claimsRegistry } from './claimsRegistry';

export interface FeeItem {
  id: string;
  category: string;
  value: string;
  period: string;
  description: string;
  claimId: string;
}

export const feeItems: FeeItem[] = [
  {
    id: 'pendaftaran',
    category: 'Pendaftaran & Tahunan',
    value: claimsRegistry.fee_registration_annual.value,
    period: 'Sekali setahun / kemasukan',
    description: 'Berdasarkan rujukan sesi 2026/2027; yuran rasmi semasa tertakluk kepada pengesahan.',
    claimId: 'fee_registration_annual'
  },
  {
    id: 'asrama',
    category: 'Pengajian Asrama',
    value: claimsRegistry.fee_hostel_monthly.value,
    period: '/ bulan',
    description: 'Termasuk pengajian, asrama, makan minum dan bimbingan harian.',
    claimId: 'fee_hostel_monthly'
  },
  {
    id: 'harian',
    category: 'Pengajian Harian',
    value: claimsRegistry.fee_day_monthly.value,
    period: '/ bulan',
    description: 'Pilihan untuk pelajar harian yang pulang ke rumah.',
    claimId: 'fee_day_monthly'
  }
];

export const admissionsSteps = [
  {
    num: '01',
    title: 'Pertanyaan & Maklumat',
    description: 'Hubungi maahad untuk menyemak kekosongan, syarat asas dan jadual temu duga.'
  },
  {
    num: '02',
    title: 'Penilaian & Temu Duga',
    description: 'Calon pelajar menghadiri sesi penilaian membaca Al-Quran dan kesesuaian asas.'
  },
  {
    num: '03',
    title: 'Pendaftaran Rasmi',
    description: 'Penyelesaian borang rasmi dan taklimat kemasukan bersama pihak pengurusan.'
  }
];

export const admissionsChecklist = [
  'Warganegara Malaysia',
  'Pelajar perempuan berumur 10 hingga 17 tahun',
  'Boleh membaca asas Al-Quran',
  'Minat serta kesediaan mendalami hafazan',
  'Komitmen ibu bapa/penjaga terhadap peraturan maahad',
  'Pemeriksaan kesihatan asas'
];
