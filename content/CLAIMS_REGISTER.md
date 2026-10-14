# MADUM — Daftar Integriti Kandungan (Content Integrity Register)

**Peringatan Penting:** Dokumen ini merupakan inventori rasmi seluruh dakwaan fakta, nombor hubungan, tarikh promosi, yuran, status undang-undang, dan media berkaitan Maahad Tahfiz Al Quran Darul Muthiah (1). 

Setiap nilai dipisahkan secara tegas antara **Data Pendaftaran Aktif** dan **Data Rujukan Historis**, serta diklasifikasikan ke dalam status `VERIFIED`, `PENDING_APPROVAL`, `PENDING_VERIFICATION`, `PENDING_EDITORIAL_HARMONIZATION`, `PENDING_PARENTAL_INSTITUTIONAL_CONSENT`, atau `CONFLICTED`.

---

## 1. Jadual Integriti Kandungan (Content Integrity Register)

| No | Bidang & Nilai Dipaparkan | Lokasi Kod Sumber | Dokumen Sumber & Halaman | Status Integriti | Kategori Data | Tindakan Diperlukan Sebelum Publikasi |
|:---:|---|---|---|:---:|:---:|---|
| **1** | **Sesi Pengambilan Semasa:** `2026/2027` | [`src/content/siteConfig.ts:34`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Pesan Cik Yatt & Profil PDF h.10 vs Poster `00000125` (Sesi 2027) | `PENDING_VERIFICATION` | Data Pendaftaran Aktif | Pentadbiran maahad perlu mengesahkan sesi aktif rasmi sama ada 2026/2027 atau 2027. |
| **2** | **Klaim Sejarah Penubuhan 2003:** `DITOLAK / TIDAK BERASAS` | Ditolak dari seluruh kod sumber | Tiada dalam PDF profil atau poster rasmi; dokumen menyebut permulaan 2012 | `CONFLICTED` | Data Rujukan Historis | **DILARANG** menyiarkan tahun 2003 sebagai fakta sejarah tanpa dokumen bukti rasmi. |
| **3** | **Kronologi Sejarah Rasmi:** Mula aktiviti April 2012, perancangan akhir 2012, nama MADUM (1) pada 20 Feb 2018 | [`src/pages/profil.astro:107-120`](file:///Users/mac/Documents/darul-muthiah/src/pages/profil.astro) | Profil PDF h.3, h.6 & h.7 | `PENDING_EDITORIAL_HARMONIZATION` | Data Rujukan Historis | Sahkan sama ada permulaan dikira dari tarikh kelas pertama (April 2012) atau perakuan JAIS. |
| **4** | **WhatsApp Rasmi Kemasukan:** `+60 12-310 8902` | [`src/content/siteConfig.ts:37`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | HTML prototaip Cik Yatt vs Profil PDF h.7 (`+60 12-202 3024`) | `PENDING_VERIFICATION` | Data Pendaftaran Aktif | Sahkan talian rasmi penerima pertanyaan kemasukan (Cik Yatt vs Ustazah Raja). |
| **5** | **Telefon Pejabat:** `03-5524 7296` | [`src/content/siteConfig.ts:39`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Poster promosi `00000125` vs Profil PDF h.7 (`+60 12-202 3024`) | `PENDING_VERIFICATION` | Data Pendaftaran Aktif | Lakukan panggilan pengesahan ke talian pejabat. |
| **6** | **E-mel Rasmi:** `nunature@yahoo.com` | [`src/content/siteConfig.ts:40`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Profil PDF h.7 | `PENDING_VERIFICATION` | Data Pendaftaran Aktif | Sahkan sama ada peti surat Yahoo ini aktif dipantau untuk permohonan kemasukan. |
| **7** | **Domain Web Rasmi:** `madum.ilmuniaga.com` | [`src/content/siteConfig.ts:33`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Arahan staging ILMU NIAGA vs Poster (`www.madum.edu.my`) | `PENDING_VERIFICATION` | Data Pendaftaran Aktif | Tentukan domain produksi akhir sama ada subdomain projek atau domain rasmi `.edu.my`. |
| **8** | **Alamat Premis Fizikal:** `No. 61, Jalan Gunung Nuang U11/28, Bukit Bandaraya, Seksyen U11, 40170 Shah Alam, Selangor` | [`src/content/siteConfig.ts:42-45`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Profil PDF h.7 & Salinan Perakuan JAIS h.13 | `VERIFIED` | Data Pendaftaran Aktif | Sahkan ketepatan pin Google Maps dan aturan lawatan premis bagi ibu bapa. |
| **9** | **Alamat Surat-Menyurat:** `No. 7, Jalan Pilus Dua 27/24B, Seksyen 27, 40400 Shah Alam, Selangor` | [`src/content/siteConfig.ts:47-50`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Profil PDF h.7 | `VERIFIED` | Data Pendaftaran Aktif | Rekod rasmi surat-menyurat pentadbiran institusi. |
| **10** | **Yuran Pendaftaran & Tahunan:** `RM 1,310` | [`src/content/fees.ts:16`](file:///Users/mac/Documents/darul-muthiah/src/content/fees.ts) | Profil PDF h.10 (Jadual Terperinci Yuran Sesi 2026/2027) | `PENDING_APPROVAL` | Data Rujukan Historis | Dapatkan pengesahan bertulis pihak maahad sama ada angka RM 1,310 masih diguna pakai bagi ambilan berjalan. *(Fail-closed: ganti dengan 'Hubungi Kami' dalam mod public).* |
| **11** | **Yuran Asrama (Bulanan):** `RM 500` | [`src/content/fees.ts:25`](file:///Users/mac/Documents/darul-muthiah/src/content/fees.ts) | Profil PDF h.10 (Jadual Yuran Sesi 2026/2027) | `PENDING_APPROVAL` | Data Rujukan Historis | Sahkan sama ada kadar bulanan asrama RM 500 masih kekal. *(Fail-closed: ganti dengan 'Hubungi Kami' dalam mod public).* |
| **12** | **Yuran Harian (Bulanan):** `RM 450` | [`src/content/fees.ts:34`](file:///Users/mac/Documents/darul-muthiah/src/content/fees.ts) | Profil PDF h.10 (Jadual Yuran Sesi 2026/2027) | `PENDING_APPROVAL` | Data Rujukan Historis | Sahkan sama ada pilihan pengajian harian RM 450 masih ditawarkan. *(Fail-closed: ganti dengan 'Hubungi Kami' dalam mod public).* |
| **13** | **Dasar Kebajikan & Asnaf:** Pengecualian yuran bagi asnaf, diskaun mengikut kemampuan keluarga | [`src/pages/kemasukan.astro:106`](file:///Users/mac/Documents/darul-muthiah/src/pages/kemasukan.astro) | Profil PDF h.10 (Nota) & h.12 (AJK Kebajikan) | `VERIFIED_DOC_PENDING_USAGE_PERMISSION` | Data Rujukan Historis | Sahkan prosedur dan saluran permohonan bantuan asnaf bersama jawatankuasa kebajikan maahad. |
| **14** | **Pendaftaran JAIS:** Kod `BZH8026` / Perakuan `13S(8)18/59` (Luput: 13 Okt 2028) | [`src/content/siteConfig.ts:55-57`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Salinan Perakuan JAIS dalam Profil PDF h.13 | `VERIFIED_DOC_PENDING_USAGE_PERMISSION` | Data Pendaftaran Aktif | Dapatkan kebenaran penggunaan rasmi penulisan status JAIS di footer web awam. |
| **15** | **Tauliah Penolong Amil LZS:** Penolong Amil IPIS Kod `1290` | [`src/content/siteConfig.ts:58`](file:///Users/mac/Documents/darul-muthiah/src/content/siteConfig.ts) | Salinan Tauliah LZS dalam Profil PDF h.14 | `VERIFIED_DOC_PENDING_USAGE_PERMISSION` | Data Pendaftaran Aktif | Sahkan status pembaharuan tauliah tahunan; tegaskan tiada kutipan transaksi dalam talian. |
| **16** | **Media Pelajar Bawah Umur:** 12 Foto Aktiviti & 2 Klip Video | [`src/content/gallery.ts`](file:///Users/mac/Documents/darul-muthiah/src/content/gallery.ts) & [`src/pages/galeri.astro`](file:///Users/mac/Documents/darul-muthiah/src/pages/galeri.astro) | Profil PDF h.15 & arkib media klien | `PENDING_PARENTAL_INSTITUTIONAL_CONSENT` | Data Pendaftaran Aktif | Wajib peroleh kebenaran bertulis ibu bapa/penjaga (parental consent) dan pihak pengurusan. *(Fail-closed: foto/video tidak dirender & tidak disalin ke dist/assets jika public).* |

---

## 2. Penjelasan Perbezaan Angka Yuran & Rekod Sejarah

### A. Asal-Usul Angka Yuran: RM 1,310 vs "RM 1,300" & "RM 650"
1. **Bukti Sumber Asli:** Halaman 10 dokumen profil `00000124-profail MADUM 1 utk IK WEB.pdf` mengandungi jadual imej bernombor xref 86 dengan teks:
   - *Yuran Pendaftaran & Tahunan:* **RM 1,310.00** (Pendaftaran Pelajar Baru 450, Yuran Tahunan 250, Mutabaah Amal/Ujian 100, Yuran Selenggara & HEP 250, Insuran Pelajar 10, Program Motivasi/Rehlah 250).
   - *Yuran Pengajian Bulanan Asrama:* **RM 500.00** (termasuk kelas tuisyen & tadabbur).
   - *Yuran Pengajian Bulanan Harian:* **RM 450.00** (termasuk kelas tuisyen B.Arab & tadabbur).
2. **Punca Sebutan "RM 1,300" dan "RM 650":**
   - Dalam kod sumber (`src/content/claimsRegistry.ts` dan `src/content/fees.ts`) serta prototaip HTML (`kemasukan.html`), nilainya sentiasa tepat **RM 1,310**, **RM 500**, dan **RM 450**.
   - Munculnya "RM 1,300" dan "RM 650" berlaku semata-mata pada teks perenggan naratif ringkasan laporan awal (human typographical error / pembulatan tidak formal semasa mencatat senarai sekatan: RM 1,310 disebut RM 1,300 dan RM 650 tersilap asimilasi daripada anggaran pasaran maahad lain).
   - Seluruh dokumentasi telah diselaraskan semula kepada angka dokumen rasmi: **RM 1,310**, **RM 500**, dan **RM 450**.

### B. Klaim Sejarah Penubuhan 2003
1. **Status:** **TIDAK BERASAS / DITOLAK**.
2. **Fakta Dokumen:**
   - Halaman 7: Pengajian bermula pada **April 2012**.
   - Halaman 3: Mesyuarat perancangan jawatankuasa berlangsung pada **akhir 2012** (dahulunya Maahad Tahfiz Al Quran Sabil Al Rasyad Lil Banat).
   - Halaman 6: Pertukaran nama kepada Maahad Tahfiz Al Quran Darul Muthiah (1) didokumentasikan pada **20 Februari 2018**.
   - Halaman 13: Sijil Perakuan Pendaftaran JAIS tamat tempoh pada **13 Oktober 2028**.
3. **Ketetapan:** Tiada sebarang penyebutan tahun 2003 di mana-mana bahagian website ataupun kod sumber. Sebarang dakwaan tahun 2003 ditolak daripada pangkalan data integriti.
