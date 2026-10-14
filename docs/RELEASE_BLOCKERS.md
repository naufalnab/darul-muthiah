# MADUM — Senarai Semak Sekatan Pelepasan (Release Blockers)

**Status Keseluruhan:** 🔴 **BLOCKED FOR PUBLIC DEPLOYMENT**  
**Mod Semasa:** `publicationMode = 'internal'` (Pratonton Dalaman Sahaja)  
**Tujuan Dokumen:** Memastikan tiada maklumat yang belum disahkan, media pelajar bawah umur tanpa izin, atau janji transaksi yang diterbitkan ke Internet awam.

---

## 1. Jadual Pintu Pelepasan (Release Gates Matrix)

| No | Bidang Maklumat | Nilai Semasa (Pratonton) | Sumber Asal | Punca Ketidakselarasan / Isu | Status | Tindakan Diperlukan Sebelum Go-Live | Polisi Paparan Semasa |
|:---:|---|---|---|---|:---:|---|---|
| **1** | **Tahun Sesi Kemasukan** | `2026/2027` | Pesan Cik Yatt & Profil PDF h.10 | Poster `00000125` memaparkan Sesi `2027`. | 🔴 **BLOCKED** | Dapatkan pengesahan rasmi sama ada sesi aktif adalah 2026/2027 atau 2027. | Papar dengan label penafian (`show_with_disclaimer`). |
| **2** | **Nombor WhatsApp CTA** | `+60 12-310 8902` | HTML dipersetujui Cik Yatt | Poster `00000125` & Profil h.7 memaparkan `+60 12-202 3024` (Ustazah Raja). | 🔴 **BLOCKED** | Tentukan nombor telefon rasmi yang memegang talian pertanyaan kemasukan. | Digunakan secara terhad untuk ujian draf lokal/staging tertutup. |
| **3** | **Domain & SSL** | `madum.ilmuniaga.com` | Arahan Cik Yatt | Poster mencatatkan `www.madum.edu.my`. | 🔴 **BLOCKED** | Sahkan domain utama, rekod DNS, status sijil SSL, dan dasar penghalaan (redirect) dari domain alternatif. | Ditetapkan sebagai canonical staging dalam mod internal. |
| **4** | **Jadual & Kadar Yuran** | Pendaftaran: RM1,310<br>Asrama: RM500/bln<br>Harian: RM450/bln | Profil PDF h.10 | Angka adalah rujukan sesi lepas; belum disahkan bagi ambilan terkini. | 🔴 **BLOCKED** | Minta persetujuan bertulis pihak maahad untuk menyiarkan angka yuran terkini. | Jika belum disahkan di mod awam: ganti dengan teks *"Sila hubungi pihak maahad untuk yuran terkini"*. |
| **5** | **Izin Penerbitan Media Pelajar** | 12 Foto Pelajar & 2 Video (Nasyid & Intro) | Dokumentasi aktiviti maahad | Melibatkan peserta didik di bawah umur (10–17 tahun). | 🔴 **BLOCKED** | Pengesahan hak cipta dan izin ibu bapa/penjaga (parental consent) mengikut undang-undang tempatan. | Dibenarkan dalam persekitaran pembangunan privat; **wajib disekat** sebelum sebarang penyiaran awam. |
| **6** | **Pendaftaran JAIS & LZS** | Kod JAIS: `BZH8026`<br>Amil LZS: `Kod 1290` | Salinan sijil dalam fail PDF h.13 & h.14 | Tempoh perakuan JAIS tercatat hingga 13 Okt 2028; penggunaan logo/kapsyen rasmi memerlukan keizinan. | 🟡 **PENDING VERIFICATION** | Sahkan klausa teks undang-undang bersama pihak pentadbiran maahad. | Papar teks kod sahaja; jangan siarkan imej imbasan sijil atau butiran peribadi penandatangan. |
| **7** | **Kronologi Sejarah 2012** | Mula aktiviti 2012, nama MADUM 2018 | Profil PDF h.3 vs h.7 | Halaman 3 menyebut perancangan akhir 2012; halaman 7 menyebut aktiviti bermula April 2012. | 🟡 **PENDING EDITORIAL** | Selaraskan naratif penubuhan agar konsisten sebelum disiarkan dalam teks profil. | Papar garis masa ringkas dengan nota semakan editorial. |
| **8** | **Lokasi & Pin Google Maps** | No. 61, Jalan Gunung Nuang U11/28, Shah Alam | Teks alamat PDF | Koordinat pin tepat premis maahad perlu disahkan agar ibu bapa tidak tersasar. | 🟡 **PENDING CONFIRMATION** | Pengesahan pin lokasi fizikal maahad di Google Maps. | Peta grafik ditandakan sebagai ilustrasi; pautan terus ke carian Google Maps disediakan. |
| **9** | **E-mel Pejabat** | `nunature@yahoo.com` | Dokumen asal | Domain emel komersial/lama; perlu kepastian sama ada ini saluran komunikasi awam rasmi. | 🟡 **PENDING CONFIRMATION** | Sahkan alamat e-mel rasmi yang dipantau oleh pengurusan maahad. | Dinyatakan dengan nota bahawa emel menunggu pengesahan institusi. |
| **10** | **Kutipan Sumbangan & Zakat** | Tiada integrasi kewangan | Sempadan skop V1.0 | Mengelakkan salah faham kutipan wang tanpa audit atau lesen sah. | 🟢 **CLEARED (OUT OF SCOPE)** | Tiada sebarang nombor akaun bank atau kemudahan pembayaran dalam talian dimasukkan ke dalam kod. | Dikekalkan di luar skop V1.0. |

---

## 2. Kriteria Pelepasan ke Pengeluaran (Go-Live Checklist)

Sebelum status `publicationMode` diubah daripada `'internal'` kepada `'public'`, semua langkah berikut **mesti diselesaikan**:

- [ ] Surat/mesej persetujuan bertulis daripada pemilik institusi Maahad Darul Muthiah mengenai 5 butiran kritikal (Tahun sesi, nombor WhatsApp, yuran rasmi, kebenaran foto/video pelajar, domain).
- [ ] Penukaran pemboleh ubah `publicationMode: 'public'` dalam `src/content/siteConfig.ts`.
- [ ] Pengemaskinian fail `public/robots.txt` kepada konfigurasi pengindeksan enjin carian awam (`Allow: /` dan peta tapak sitemap).
- [ ] Penyingkiran sepanduk `PreviewBanner` dan nota-nota semakan dalaman daripada reka letak halaman.
- [ ] Konfigurasi pelayan hosting ILMU NIAGA untuk menguatkuasakan sambungan HTTPS/SSL secara automatik.
