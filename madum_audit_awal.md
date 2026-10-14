# Audit Awal Aset Website MADUM — 14 Oktober 2026

**Proyek:** Maahad Tahfiz Al Quran Darul Muthiah (1) (MADUM)  
**Calon subdomain:** `madum.ilmuniaga.com` (permintaan Cik Yatt, belum diverifikasi DNS/deploy)  
**Sumber:** ZIP asli dari klien + konteks percakapan Cik Yatt dan ekspor konsultasi Gemini.  
**Status:** Audit awal aset selesai; **belum ada coding, persetujuan klien, pengujian, atau deployment**.

## 1. Inventaris fakta

- ZIP berisi 39 berkas aktual selain 39 metadata `__MACOSX/` (bukan bahan website): **30 JPG**, **1 PNG**, **3 MP4**, **4 HTML**, **1 PDF**.
- JPG meliputi 1 logo MADUM, 4 materi poster/infografik, dan 25 foto dokumentasi (salah satunya duplikat tepat), sehingga **24 foto dokumentasi unik**.
- Ada **1 gambar header** berupa PNG komposit/desain.
- Ada **2 video unik** dari 3 MP4. `00000076` dan `00000088` persis sama (SHA-256 identik), berdurasi 10,0 detik dan berkualitas 1280×720. Video nasyid `00000115` berdurasi 32,2 detik dengan resolusi 848×480.
- PDF profil **16 halaman** dan HTML awal berjumlah **4 file** (`index`, `info`, `pendidikan`, `organisasi`), bukan website final.
- Duplikat foto persis: `00000117` dan `00000118`.

## 2. Temuan yang wajib diklarifikasi dengan Cik Yatt/klien

| Keputusan | Sumber/ketidaksesuaian | Status |
| --- | --- | --- |
| **Tahun promosi** | Pesan awal dan profil PDF h.10: **Sesi 2026/2027**; poster `00000125`: **Sesi 2027**. | **BLOCKER** untuk headline/CTA. |
| **Domain resmi** | Cik Yatt: `madum.ilmuniaga.com`; poster 2027: `www.madum.edu.my`. | **BLOCKER**: pastikan yang utama, website lama, dan strategi pengalihan/SEO. |
| **WhatsApp utama** | Cik Yatt menyetujui +60 12-310 8902 dari HTML; poster 2027 menunjukkan +60 12-202 3024 (Ustazah Raja), sama dengan telepon kontak pada PDF profil h.7. | **BLOCKER**: tentukan nomor tujuan CTA/form, nomor cadangan jika perlu. |
| **Cakupan kontrak** | Awalnya landing page satu halaman; 11.07 Cik Yatt menyampaikan permintaan berubah menjadi website. | **BLOCKER**: cakupan page, biaya, tenggat, revisi dan penanggung jawab konten harus disepakati sebelum implementasi. |
| **Jalur pendaftaran** | HTML: form menghasilkan pesan WhatsApp; poster sesi 2027 menampilkan QR untuk pendaftaran. Tujuan QR belum terverifikasi. | Tanyakan apakah form resmi eksternal dibutuhkan selain WhatsApp. |
| **Yuran** | Profil PDF h.10: pendaftaran/tahunan RM1.310, asrama RM500/bulan, harian RM450/bulan; catatan bantuan asnaf. | Minta persetujuan eksplisit untuk publikasi serta masa berlaku dan ketentuan masing-masing biaya. |
| **Legalitas** | Profil PDF h.13 memuat sertifikat JAIS dengan kode BZH8026 dan perakuan 13S(8)18/59, masa berlaku tertulis 13 Oktober 2028; h.14 memuat tauliah Penolong Amil LZS kode 1290. | Konsisten dengan lampiran, tetapi penggunaan logo/sertifikat pada website perlu disetujui. |
| **Kronologi institusi** | Profil PDF h.3 menyatakan rapat/perencanaan pada **akhir 2012**, sementara h.7 menyatakan kegiatan pembelajaran dimulai **April 2012**. | Minta klarifikasi narasi tahun/sejarah sebelum ditulis sebagai fakta publik. |
| **Kunjungan/fasilitas/asrama** | Poster 2027 menyebut asrama, makan/minum 3 kali sehari, kem motivasi; HTML awal masih ringkas. | Pastikan kondisi layanan saat ini dan apakah foto asrama resmi tersedia. |
| **Hak publikasi foto/video** | Banyak foto pelajar berusia 10–17 tahun; poster graduan menampilkan nama lengkap. | Persetujuan institusi dan izin orang tua/wali sesuai kebutuhan sebelum publikasi. |

## 3. Audit HTML awal

- Empat HTML awal merupakan template statis (`index.html`, `info.html`, `pendidikan.html`, `organisasi.html`).
- Navbar masing-masing mereferensikan `pautan.html`, `sumbangan.html`, dan `zakat.html` yang **tidak terdapat dalam ZIP**. Jika men-deploy kode saat ini tanpa perbaikan, tautan-tautan tersebut berisiko 404.
- ZIP memberi nama berkas dengan prefiks ID, contohnya `00000077-LogoMaahad.jpg`, sedangkan HTML memanggil `LogoMaahad.jpg` dan `header-maahad.png`. **Perlu normalisasi nama/path saat implementasi**, tidak boleh mengunggah mentah-mentah lalu mengharapkan aset terhubung.
- Borang di HTML awal memakai JavaScript untuk menyusun pesan WhatsApp, **bukan** pendaftaran dengan database / admin dashboard.
- HTML belum berisi desain galeri komprehensif, detail yuran, dan berita/aktiviti yang terkelola secara dinamis.
- Perlakukan kode panjang yang dibuat Gemini sebagai *draft referensi*, bukan release yang sudah diuji.

## 4. Rekomendasi kurasi aset

**Hero:** gunakan `00000080-header-maahad.png` sebagai kandidat yang ditinjau, namun perlu konfirmasi karena merupakan visual komposit/desain. Untuk pengalaman yang lebih autentik, pertimbangkan memakai foto suasana kegiatan asli.  
**Hafazan & kelas:** `00000109`, `00000106`, `00000111`, `00000112`, `00000114`.  
**TVET:** `00000103` (program pembuatan sabun) dan `00000104` (Bomba).  
**Pencapaian:** `00000071`, `00000072`, `00000107`, `00000120`; poster graduan `00000074` dan `00000119` hanya dengan persetujuan.  
**Aktiviti & rehlah:** `00000073`, `00000075`, `00000121`, `00000122`.  
**Video:** hanya pakai `00000076` dan `00000115` sebagai video unik; tampilkan `controls`, `playsinline`, jangan autoplay dengan suara dan tidak perlu kedua intro duplikat.  
**Identitas:** logo `00000077` berformat JPG, disarankan meminta logo PNG transparan/SVG resmi bila ada.  
**Poster:** `00000125` khusus sebagai referensi detail sesi 2027 sampai tahun dan kontak dikonfirmasi; `00000136` dapat menjadi referensi konten kehidupan maahad, bukan menggantikan dokumentasi foto asli.

## 5. Usulan struktur website multi-halaman (belum disetujui)

1. **Utama** — identitas, informasi pendaftaran aktif, keunggulan, program, testimoni/pencapaian, CTA jelas.
2. **Profil Maahad** — sejarah terverifikasi, visi, pengurusan ringkas, lokasi, dokumen legalitas yang disetujui.
3. **Pengajian & Kehidupan Pelajar** — hafazan, syahadah, SPM, kurikulum, rutin, kokurikulum, TVET.
4. **Kemasukan & Yuran** — syarat 10–17 tahun, alur pendaftaran, rincian yuran sesuai sesi, bantuan asnaf, borang/CTA.
5. **Galeri & Pencapaian** — foto terpilih, graduan, kegiatan, video; kategorisasi galeri.
6. **Hubungi Kami** — nomor WhatsApp utama, kontak pejabat, lokasi dan pertanyaan lazim.

**Sumbangan/Zakat**: jangan membuat halaman pembayaran atau instruksi transfer otomatis sampai ruang lingkup, kewenangan penerimaan zakat, bank, dan penyaluran diverifikasi. Jika disetujui, dapat menjadi fase atau halaman terpisah.

## 6. Langkah berikutnya

1. Mintakan 4 keputusan blocker: cakupan website vs landing page, tahun sesi, domain utama, nomor WhatsApp.
2. Tentukan status QR pendaftaran; setujui data yuran, narasi sejarah, dan penggunaan foto/video anak.
3. Susun wireframe + design system; tampilkan kepada Cik Yatt dan klien sebelum mulai pembangunan penuh.
4. Implementasi di branch/repo terpisah; validasi desktop/mobile, semua tautan, aksesibilitas, performa media, metadata SEO, dan deploy setelah review.

**Catatan:** Laporan ini berasal dari berkas yang diserahkan; tidak ada verifikasi eksternal, konfirmasi ke pengelola, atau pengujian website live pada tahap ini. Jangan sebarkan berkas asli yang mengandung informasi pribadi pelajar tanpa izin.
