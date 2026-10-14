# MASTERPLAN UI/UX WEBSITE MADUM — V1.0

**Proyek:** Maahad Tahfiz Al Quran Darul Muthiah (1)  
**Target domain:** `madum.ilmuniaga.com` (berdasarkan instruksi Cik Nor Hayati/Yatt)  
**Bahasa konten:** Bahasa Melayu Malaysia (`ms-MY`)  
**Jenis produk:** Website informasi institusi 6 halaman, mobile-first  
**Status:** Baseline perencanaan disetujui oleh pemberi tugas; belum dianggap persetujuan resmi institusi untuk isi yang bertanda *pending verification*, belum diimplementasikan atau di-deploy.  
**Referensi primer:** ZIP aset MADUM (39 file asli: 30 JPG, 1 PNG, 3 MP4, 4 HTML, 1 PDF 16 halaman); pesan WhatsApp Cik Yatt 14 Oktober 2026; ekspor konsultasi Gemini 39 halaman hanya sebagai referensi sekunder.

---

## 1. Tujuan, prinsip, dan batasan

### 1.1 Tujuan pengguna

- **Ibu bapa/penjaga calon pelajar:** menilai kesesuaian maahad, memahami program, syarat masuk, biaya, suasana lingkungan, dan menghubungi petugas.
- **Masyarakat/pihak luar:** menemukan profil, alamat, kontak, dan legalitas institusi dengan jelas.
- **Admin maahad:** menerima pertanyaan calon wali murid via WhatsApp dalam format mudah dipahami, tanpa sistem back-office baru.
- **Cik Yatt/ILMU NIAGA:** mendapatkan situs yang dapat dikelola dengan perubahan konten sederhana, mudah dikembangkan kemudian, dan memberi kredit pengembang sesuai permintaan.

### 1.2 Prinsip pengalaman

1. **Berwibawa dan ramah:** tampilan institusi pendidikan Islam, bukan toko online atau kampanye penjualan berlebihan.
2. **Jujur dan dapat diverifikasi:** jangan membuat statistik, prestasi, fasilitas, tanggal, atau testimonial yang tak didukung bahan klien.
3. **Foto autentik:** tampilkan kegiatan nyata, bukan foto stok. Header komposit adalah kandidat desain, bukan bukti kondisi fisik.
4. **Mudah untuk mobile:** pembacaan dan klik WhatsApp nyaman dari telepon.
5. **Satu tujuan utama tiap halaman:** memahami informasi dan/atau melanjutkan pertanyaan.
6. **Data anak diperlakukan hati-hati:** persetujuan penggunaan foto, nama, prestasi, dan video harus jelas.

### 1.3 Cakupan v1.0

Termasuk: 6 halaman publik, navbar/footer responsif, halaman pengajian, tabel biaya setelah diverifikasi, galeri terkurasi dengan filter ringan, FAQ, CTA WhatsApp, formulir *membuat pesan WhatsApp di perangkat* (tanpa menyimpan data di server), peta menuju lokasi, pengaturan metadata dasar SEO, optimisasi gambar/video, dan pengujian lintas perangkat.

Tidak termasuk: akun pelajar, portal wali murid, autentikasi, database pendaftaran, pembayaran online, integrasi zakat/transaksi, dashboard admin, CMS kompleks, AI chatbot, sistem berita besar, multi-bahasa, serta manajemen multi-cawangan (sampai rincian cabang disetujui).

## 2. Informasi terkunci dan informasi yang perlu pemeriksaan

| Area | Baseline untuk desain | Status sebelum go-live |
|---|---|---|
| Nama institusi | Maahad Tahfiz Al Quran Darul Muthiah (1) | Gunakan penulisan resmi terverifikasi |
| Target domain | `madum.ilmuniaga.com` | Konfirmasi DNS, SSL, dan hubungan dengan domain `madum.edu.my` pada poster |
| Bahasa | Bahasa Melayu Malaysia | Final copy-review oleh pihak lokal |
| Promosi | `Pengambilan Pelajar Sesi 2026/2027` | Materi poster terbaru menyebut `2027`, wajib konfirmasi sebelum publish |
| WhatsApp CTA | `+60 12-310 8902` → `https://wa.me/60123108902` | Ada `+60 12-202 3024` di profil/poster; wajib validasi tujuan resmi CTA |
| Telefon pejabat | `03-5524 7296` dari HTML yang disetujui Cik Yatt | Cek masih aktif |
| E-mel | `nunature@yahoo.com` dari dokumen awal | Cek apakah alamat publik saat ini |
| Alamat kampus | No. 61, Jalan Gunung Nuang U11/28, Bukit Bandaraya, Seksyen U11, 40170 Shah Alam, Selangor | Cek pin Google Maps dan alamat resmi pengunjung |
| Biaya dari profil sesi 2026/27 | Daftar/tahunan RM1,310; bulanan asrama RM500; harian RM450 | Jangan tayangkan sebagai harga resmi baru tanpa persetujuan |
| Legalitas | Kode sekolah BZH8026, perakuan JAIS, tauliah Penolong Amil LZS | Salin dari sertifikat, verifikasi masa berlaku dan izin penggunaan |
| Sejarah | PDF memuat keterangan April 2012 & perencanaan akhir 2012 yang perlu direkonsiliasi | Jangan membuat garis waktu rinci sampai jelas |
| Hak publikasi foto pelajar | Seluruh galeri perlu pemeriksaan izin | Foto bernama lengkap/graduan memerlukan perhatian tambahan |
| Kredit pengembang | `Website ini dibangunkan oleh ILMU NIAGA` → `https://ilmuniaga.com` | Disetujui dalam instruksi Cik Yatt |

**Aturan kerja:** boleh membuat layout dengan data bertanda pending, tetapi gunakan penanda editorial di staging; jangan menempatkan fakta yang belum disahkan sebagai klaim publik.

## 3. Arsitektur informasi dan navigasi

### 3.1 Sitemap versi 1.0

- `/` — **Utama**
- `/profil` — **Profil Maahad**
- `/pengajian` — **Pengajian**
- `/kemasukan` — **Kemasukan & Yuran**
- `/galeri` — **Galeri & Pencapaian**
- `/hubungi` — **Hubungi Kami**
- `404` — Halaman tidak ditemui, dengan tautan kembali ke Utama

### 3.2 Header global

Desktop: satu baris sticky ringan, logo MADUM sebelah kiri (simbol tidak terpotong), link Utama / Profil Maahad / Pengajian / Kemasukan & Yuran / Galeri / Hubungi Kami dan CTA berwarna hijau **Tanya Kemasukan** di kanan. Hindari memasukkan terlalu banyak item sampai patah pada lebar tablet. Tidak perlu dropdown bersarang untuk 6 halaman.

Mobile: logo dan tombol menu yang jelas; menu membuka panel/lembar navigasi dengan seluruh 6 tujuan dan CTA, dapat ditutup dengan tombol dan Escape, state `aria-expanded` akurat, fokus dikelola, area sentuh minimal 44x44 px. Saat pengguna berpindah halaman, menu menutup dan fokus kembali relevan.

### 3.3 Footer global

Logo, nama institusi, ringkasan misi, link 6 halaman, alamat pengunjung, kontak (nomor resmi setelah verifikasi), Google Maps, tahun hak cipta dinamis, teks kredit kecil **Website ini dibangunkan oleh ILMU NIAGA** dengan tautan `https://ilmuniaga.com`. Hindari widget sosial kosong dan tautan yang belum ada. Nomor rekening tidak dimasukkan ke footer v1.

### 3.4 Jalur interaksi kunci

1. Pengunjung baru → Homepage → Pengajian → Kemasukan & Yuran → CTA WhatsApp.
2. Pengunjung ingin memastikan kredibilitas → Homepage → Profil/Legalitas → Galeri → Hubungi Kami.
3. Pengunjung dari poster/QR → Kemasukan → Syarat → Borang → WhatsApp.
4. Pengunjung yang hanya ingin lokasi → Hubungi Kami → Google Maps atau telepon.

## 4. Visual identity dan sistem desain

### 4.1 Warna utama

| Token | HEX | Fungsi |
|---|---|---|
| `brand.deep` | `#123F35` | Header accent, heading, primary CTA |
| `brand.emerald` | `#206452` | Hover, secondary accents |
| `surface.cream` | `#FBF8F0` | Latar halaman hangat |
| `accent.gold` | `#D2AD6A` | Ornamen, garis, highlight terbatas |
| `surface.white` | `#FFFFFF` | Area artikel/kartu/form |
| `text.primary` | `#1E332B` | Isi utama |
| `text.secondary` | `#576C62` | Metadata, penjelasan sekunder |
| `border.default` | `#DCE8DF` | Border seperlunya |

Warna adalah usulan turunan dari rancangan HTML dan logo, bukan manual identitas merek resmi. Kontras tombol/teks wajib diperiksa, khususnya emas untuk tulisan putih (jangan otomatis dipakai).

### 4.2 Tipografi

- Headline penting: `Georgia`/serif setara, dengan ukuran desktop `clamp(2.5rem, 4.2vw, 4rem)` dan mobile `2.1–2.6rem`, line height `1.12–1.2`.
- Subjudul H2: desktop `2–2.6rem`, mobile `1.7–2rem`.
- H3/card: `1.15–1.4rem`.
- Isi: `Plus Jakarta Sans` atau `Inter`, fallback `system-ui`, 16–18 px, line-height `1.55–1.75`.
- Caption dan metadata: minimal 13–14 px jika wajar; tetap terbaca.
- Teks Arab: jika ada dan diperlukan, `Noto Naskh Arabic` atau sistem Arab yang benar; hindari teks Arab dekoratif hasil AI yang tidak terverifikasi.
- Hindari lebih dari dua keluarga font utama.

### 4.3 Grid, spacing, dan komponen

- Kontainer konten: `max-width: 1160–1200px`, padding horizontal 20–32 px, mobile 16–20 px.
- Kontainer teks panjang: sekitar 680–760 px untuk keterbacaan.
- Grid 12 kolom konseptual di desktop; kartu 3 kolom desktop, 2 tablet, 1 ponsel.
- Section spacing: 72–104 px desktop; 44–64 px ponsel.
- Spacing token: 4/8/12/16/24/32/48/64/80.
- Radius: tombol 10–12 px, kartu 14–18 px, foto 14–20 px.
- Garis/bayangan minim; jangan semuanya berupa kartu berbayang.
- Motion: `150–250ms` untuk hover/transisi ringan; tidak perlu parallax agresif, auto-carousel, atau animasi terus-menerus.

### 4.4 Komponen reusable

`SiteHeader`, `MobileNavigation`, `AnnouncementBar` (hanya ketika periode diumumkan sah), `Hero`, `SectionHeading`, `PrimaryButton`, `SecondaryButton`, `ProgramCard`, `FeatureList`, `PhotoCard`, `GalleryFilter`, `Lightbox`, `VideoPlayer`, `CredentialsStrip`, `FeeTable`, `FAQAccordion`, `WhatsAppInquiryForm`, `ContactCard`, `GoogleMapLink`, `SiteFooter`, `Breadcrumbs` (di halaman dalam), `BackToTop` opsional, dan `StatusNote` hanya untuk editorial internal.

Semua komponen harus mendukung keyboard, ikon fungsional, teks alternatif, dan tampilan responsif.

## 5. Halaman 1: UTAMA (`/`)

**Tujuan:** Pengunjung memahami dalam 5–10 detik identitas MADUM, sasaran pelajar, dan tindakan berikutnya. Homepage bukan duplikasi semua halaman.

### 5.1 Top announcement bar (opsional selama sesi disahkan)

Contoh: `Pengambilan Pelajar Perempuan Sesi 2026/2027 Kini Dibuka` → tautan `Maklumat Kemasukan`. Tidak perlu ticker berjalan. Dihilangkan saat sesi berakhir, tanpa perlu mengubah seluruh homepage.

### 5.2 Hero utama

Desktop dua kolom (teks 52–56%, foto 44–48%), mobile satu kolom. Foto autentik menjadi focal point, misalnya suasana hafazan/kelas yang telah disetujui; `00000080-header-maahad.png` dapat digunakan sebagai alternatif visual komposit bila disetujui, bukan bukti foto dokumentasi. Logo resmi ada di header, bukan overlay raksasa di wajah pelajar.

Copy berbahasa Melayu yang diusulkan:

- Eyebrow: `MAAHAD TAHFIZ AL QURAN DARUL MUTHIAH (1)`
- H1: `Membesar Bersama Al-Quran, Ilmu & Tarbiah.`
- Subcopy: `Pendidikan tahfiz dan pembinaan sahsiah untuk pelajar perempuan berumur 10 hingga 17 tahun di Shah Alam, Selangor.`
- CTA primer: `Tanya Kemasukan 2026/2027` → `/kemasukan` (atau CTA langsung WhatsApp setelah konfirmasi).
- CTA sekunder: `Kenali Pengajian Kami` → `/pengajian`.

Dilarang menambahkan badge `100% lulus`, `terbaik`, atau `berlesen` tanpa dasar dan persetujuan. Jika menampilkan JAIS, salin jenis dokumen/kode sesuai sertifikat dan hindari klaim akreditasi yang lebih luas dari faktanya.

### 5.3 Pengenalan ringkas

Heading: `Mengenali Darul Muthiah` + 2 paragraf singkat tentang tahfiz, tarbiah, pendidikan akademik dan akhlak, berdasarkan profil maahad. CTA `Ketahui Latar Belakang Kami` → `/profil`. Jangan memaksakan kronologi tahun yang masih kontradiktif.

### 5.4 Tiga fokus pengajian

Tiga kartu: `Hafazan Al-Quran 30 Juzuk` (tempoh sekitar 3–4 tahun), `Syahadah Al-Quran` (6–12 bulan), `SPM Fast Track JAIS` (sekitar 1 tahun). Semua angka durasi disebut sebagai **anggaran**; ketercapaian bergantung kepada perkembangan dan syarat pengajian. Kartu memuat penjelasan 1–2 kalimat, link `Lihat program` → anchor di `/pengajian`.

### 5.5 Pendidikan seimbang

Layout split dengan foto kelas di satu sisi, 4 prinsip ringkas di sisi lain: Al-Quran; Dinniyah/Fardhu Ain; Akademik; Kokurikulum & TVET. Gunakan ikon kecil seperlunya, bukan gambar stok.

### 5.6 Kehidupan pelajar

Mosaik 3–4 foto terpilih (kelas, TVET, rehlah, olahraga) dan caption faktual; CTA `Lihat Galeri Aktiviti`. Jangan memenuhi homepage dengan 24 foto sekaligus.

### 5.7 Pencapaian & keyakinan

Highlight maksimal 2–3 capaian terverifikasi. Poster graduan bernama lengkap ditahan sampai ada persetujuan; boleh menampilkan deskripsi generik `Sorotan Pencapaian Hafazan` bila dokumentasi diizinkan. Tidak membuat testimoni ibu bapa baru.

### 5.8 Penutup CTA

Blok latar deep-green, copy singkat `Ada pertanyaan mengenai syarat kemasukan, pengajian atau yuran?` + CTA `Tanya Pihak Maahad` dan `Lihat Yuran & Syarat`.

### 5.9 Footer

Mengikuti komponen global.

**Kriteria homepage:** satu H1; CTA terlihat tanpa scroll berlebihan di mobile; tidak ada teks di atas bagian foto yang membuatnya sulit terbaca; tidak ada klaim yang belum divalidasi.

## 6. Halaman 2: PROFIL MAAHAD (`/profil`)

**Tujuan:** membangun kredibilitas dan memperjelas identitas institusi.

Urutan:

1. **Inner hero** dengan judul `Mengenali Darul Muthiah`, deskripsi satu paragraf dan foto dokumentasi yang disetujui.
2. **Muqaddimah**: ringkasan visi pendidikan Islam syumul berteraskan Al-Quran dan as-Sunnah, mengikuti pemaknaan sumber tanpa menambah kutipan agama palsu.
3. **Matlamat & Objektif**: rangkum kategori dari profil PDF halaman 4–5 menjadi kartu prinsip: melahirkan huffaz, membina akhlak dan disiplin, keseimbangan mental-fizikal-rohani, peluang melanjutkan pengajian.
4. **Sejarah ringkas**: struktur narasi dan timeline disiapkan tetapi kronologi April vs akhir 2012 ditandai pending; nama sebelumnya serta perubahan nama 20 Februari 2018 dapat dirujuk ke profil setelah disetujui.
5. **Pengurusan & tenaga pengajar**: kategori peranan dan nama individu yang telah disetujui; tidak perlu mempublikasikan semua nama/kontak pribadi dari carta organisasi secara otomatis.
6. **Pendaftaran & tauliah**: kartu ringkas untuk pendaftaran JAIS dan pelantikan Penolong Amil LZS berdasarkan sertifikat halaman 13–14 profil; cek masa berlaku/izin logo. Fitur melihat dokumen/salinan hanya bila diizinkan.
7. **Maklumat lokasi**: alamat pengunjung, bukan otomatis alamat surat-menyurat.
8. **CTA** menuju `/pengajian` atau `/hubungi`.

**Catatan:** informasi `lebih 60 pelajar di 3 cawangan` tercantum pada dokumen profil, namun perlu dicek apakah masih mutakhir. Jangan tampilkan angka sebagai KPI live.

## 7. Halaman 3: PENGAJIAN (`/pengajian`)

**Tujuan:** membantu orang tua menilai program dan kehidupan pelajar, bukan menampilkan brosur kurikulum tanpa struktur.

1. Inner hero: `Pengajian & Kehidupan Pelajar`.
2. Tiga program terpisah dengan id `#hafazan`, `#syahadah`, `#spm`: sasaran, ringkasan, perkiraan masa belajar; jangan mengarang syarat akademik spesifik yang tidak tersedia.
3. Empat pilar sukatan: Al-Quran (hafalan, tadabbur, tajwid, khat), Dinniyah (fiqh, jawi, pengajian Islam, adab), Akademik (Bahasa Arab, Sirah, Bahasa Inggeris, Matematik, dan bidang lain hanya setelah diverifikasi), Kokurikulum/TVET (silat, memanah, sukan, kemahiran memasak/menjahit, dokumentasi TVET).
4. Kaedah pengajian: `Talaqqi`, `Tasme'`, `Tarannum` sebagaimana tercantum di profil; berikan deskripsi sederhana yang divalidasi maahad, bukan klaim sanad atau sertifikasi tanpa bukti.
5. Rutin pelajar: timeline ringkas `Pagi → Sesi Hafazan → Dinniyah/Akademik → Riadah → Ulang Kaji` dengan tombol `Lihat Jadual Terperinci`, jika jadual resmi disetujui. Di mobile jangan memaksa scroll horizontal raksasa untuk jadual PDF halaman 9.
6. Kehidupan & suasana pembelajaran: foto kelas, majlis ilmu, keselamatan, kegiatan luar terpilih.
7. CTA `Semak Kelayakan & Yuran` → `/kemasukan`.

**Prinsip:** jadwal adalah contoh dari dokumen sesi tertentu dan dapat berubah. Jangan menampilkan satu rutinitas sebagai janji operasional yang tak berubah.

## 8. Halaman 4: KEMASUKAN & YURAN (`/kemasukan`)

**Tujuan:** halaman konversi paling penting, diprioritaskan dalam navigasi dan SEO.

### 8.1 Hero dan pemberitahuan sesi

`Pengambilan Pelajar Sesi 2026/2027` dan ringkasan persyaratan. Tahun bersifat variabel konten yang mudah diperbarui; tidak ditanam keras di puluhan komponen. Tidak membuat tanggal tutup pendaftaran jika tidak diberikan.

### 8.2 Siapa yang boleh memohon

- Pelajar perempuan 10–17 tahun.
- Berminat hafazan Al-Quran.
- Boleh membaca, mengira dan mengeja (3M).
- Bersedia mengikuti tarbiah/amalan harian.
- Berakhlak baik dan sihat tubuh badan.

Jika ada asesmen masuk/wawancara, perlu konfirmasi terlebih dahulu; jangan menambah alur penerimaan buatan.

### 8.3 Program ditawarkan

Link cepat ke tiga program di `/pengajian`.

### 8.4 Struktur yuran

Desain: tabel desktop dengan nama biaya dan RM; di mobile gunakan kartu biaya yang mudah dibaca atau tabel dengan penyajian bertingkat. Dari PDF profil halaman 10: rincian pendaftaran/tahunan RM450 + RM250 + RM100 + RM250 + RM10 + RM250 = **RM1,310**; yuran asrama RM500/bulan, harian RM450/bulan. **Tampilkan hanya setelah tahun/perincian diverifikasi pihak maahad.** Pisahkan biaya satu kali/tahunan dan biaya bulanan; jangan menghitung `total tahun pertama` karena ketentuan jatuh tempo dan komponen belum dijelaskan. Bila belum disetujui, tampilkan ajakan `Hubungi kami untuk yuran terkini` dan tahan tabel.

### 8.5 Bantuan asnaf

Informasi sumber menyebut pengecualian yuran bagi kategori asnaf dan kelonggaran keluarga kurang berkemampuan atas persetujuan pengurusan. Format UI: catatan informatif dan tautan `Tanya Tentang Bantuan`, tanpa formulir untuk menyetor informasi sensitif/pendapatan keluarga ke website.

### 8.6 Proses pertanyaan

Tampilkan tiga langkah yang secara faktual sesuai alur website: `Semak Maklumat → Isi Borang Pertanyaan → Teruskan ke WhatsApp`. Jangan mengklaim `pendaftaran selesai` hanya dengan membuka WhatsApp; pesan harus benar-benar dikirim dan proses lanjutan ditentukan institusi.

### 8.7 Borang pertanyaan → WhatsApp

Pilihan minimum yang aman:

- Nama ibu/bapa/penjaga (wajib).
- Telefon penjaga (opsional jika nomor pengirim WhatsApp sudah tersedia; bila diwajibkan, jelaskan tujuannya).
- Julat umur atau umur calon pelajar (wajib hanya jika diperlukan).
- Program diminati (wajib; termasuk `Belum pasti`).
- Pertanyaan tambahan (opsional).

**Nama penuh anak sebaiknya tidak wajib pada kontak pertama**, karena meminimalkan paparan identitas anak. Jika kemudian diminta institusi, persetujuan terpisah harus jelas. Tidak meminta identitas nasional, alamat rumah, foto anak atau dokumen medis di v1.

Validasi di browser; beritahu `Maklumat anda akan dibuka dalam WhatsApp dan hanya dihantar apabila anda menekan Hantar di WhatsApp`. Gunakan `encodeURIComponent`, `wa.me/60123108902`, tidak mengirim PII ke analytics/server/log. Jika popup diblokir, sediakan tautan biasa/fallback. Tracking konversi hanya event klik anonim (jika analitik diaktifkan dengan persetujuan), bukan isi formulir.

### 8.8 FAQ

Contoh yang didukung bahan: siapa boleh memohon, bagaimana memperoleh jadual yuran terkini, apakah kunjungan diizinkan dengan membuat janji terlebih dahulu; rincian asrama, proses interview, kuota dan tanggal belum diketahui → jangan mengarang.

### 8.9 CTA penutup

`Masih Ada Pertanyaan?` → WhatsApp.

## 9. Halaman 5: GALERI & PENCAPAIAN (`/galeri`)

**Tujuan:** menampilkan suasana belajar nyata, bukan seluruh file tanpa kurasi.

### 9.1 Pengelompokan

- **Semua**
- **Hafazan & Pembelajaran**
- **Majlis Ilmu & Pencapaian**
- **Kokurikulum & TVET**
- **Riadah & Lawatan**
- **Video** (dapat berupa seksi tersendiri)

Filter harus bekerja di ponsel dan desktop, termasuk keyboard; jumlah yang ditampilkan dinamis sesuai aset yang diizinkan, tidak hardcode `21` dari Gemini.

### 9.2 Aturan galeri

- Pada awal buka: tampilkan maksimal 9–12 foto pilihan + `Lihat Lagi` atau paginasi ringan; halaman tidak memuat 24 gambar resolusi asli sekaligus.
- Rasio umum landscape 4:3 untuk galeri, portrait 3:4 untuk poster/pencapaian; jangan memotong teks poster.
- Foto yang memuat orang ditampilkan dengan cropping yang tidak memotong subjek secara mengganggu.
- Lightbox dengan tombol tutup, navigasi keyboard, fokus kembali, keterangan akurat dan `aria-label`.
- Gambar `loading="lazy"` kecuali hero yang penting, `srcset/sizes`, `width/height` untuk mencegah CLS.
- Teks alternatif menjelaskan kegiatan, bukan menebak nama, status, atau identitas orang.
- Poster graduan bertuliskan nama lengkap **jangan tayang sampai hak publikasi dikonfirmasi**.

### 9.3 Video

- Intro logo: file `00000076` (10 detik); `00000088` adalah duplikat dan tidak perlu dipakai.
- Persembahan nasyid: `00000115` (~32,2 detik, 848x480); audit izin anak dan audio sebelum publikasi.
- Jangan autoplay bersuara; gunakan thumbnail poster, `controls`, `playsinline`, lazy-load setelah interaksi bila memungkinkan.
- Cantumkan judul/caption yang tidak menambahkan fakta di luar bahan.

### 9.4 Penempatan awal foto (berdasarkan ZIP)

| ID aset | Subjek dari hasil audit | Usulan |
|---|---|---|
| `00000109` | Tasmi'/bacaan Al-Quran (portrait) | Pengajian/Hafazan |
| `00000106` | Suasana kelas (landscape) | Homepage/Pengajian |
| `00000111` | Diskusi dan tarbiah kelompok | Pengajian/galeri |
| `00000112` | Kegiatan belajar di kelas | Homepage/Pengajian |
| `00000103` | Program TVET pembuatan sabun | Homepage/TVET |
| `00000104` | Taklimat keselamatan Bomba | Kokurikulum/galeri |
| `00000075` | Bola tampar | Galeri/riadah |
| `00000121` | Lawatan ladang strawberi | Galeri/lawatan |
| `00000107`, `00000120` | Dokumentasi pencapaian | Galeri/pencapaian setelah izin |
| `00000074`, `00000119` | Poster graduan bernama penuh | Tahan hingga izin eksplisit |
| `00000117` | Kunjungan ilmiah | Galeri; `00000118` duplikat, abaikan |
| `00000125` | Poster sesi 2027 | Referensi editorial saja; tidak tampil sebagai promosi 2026/27 |
| `00000136` | Infografik ilmu, bakat & pengalaman | Referensi pengelompokan isi |
| `00000080` | Visual komposit header | Kandidat hero dengan persetujuan, jangan diklaim foto nyata |

Nama file penuh dapat dipetakan melalui `/mnt/data/madum_asset_manifest.csv` pada lingkungan pengembangan; di aplikasi, normalisasi menjadi nama semantik seperti `hafazan-tasmi.webp` **tanpa kehilangan pemetaan ke file asli**.

## 10. Halaman 6: HUBUNGI KAMI (`/hubungi`)

1. Inner hero `Hubungi & Lawati Kami`.
2. Kartu WhatsApp/telefon/e-mel resmi (semuanya diverifikasi terlebih dahulu).
3. Alamat kampus dan link `Buka Google Maps` dengan `target`, `rel` yang aman. Embed peta hanya bila tidak mengorbankan performa/privasi; tautan biasa cukup.
4. Waktu operasi: jangan tampilkan jika tidak tersedia.
5. FAQ ringkas untuk wali murid; tautan ke FAQ mendetail di `/kemasukan`.
6. CTA `Buat Pertanyaan Kemasukan` → `/kemasukan#borang` atau langsung WhatsApp.

Jika ada lebih dari satu cabang, hanya tampilkan alamat cabang yang benar-benar diverifikasi untuk calon wali murid; jangan mencampur alamat surat-menyurat sebagai alamat kunjungan.

## 11. Responsivitas, interaksi, dan aksesibilitas

### 11.1 Breakpoint acuan (bukan ukuran perangkat tunggal)

- Mobile compact: 320–399 px; pastikan tak ada horizontal overflow.
- Mobile standard: 400–639 px.
- Tablet: 640–1023 px.
- Desktop: 1024–1439 px.
- Wide: >=1440 px, dengan max-width konten agar tetap nyaman.

### 11.2 Pola responsive

- Hero dua kolom di desktop dan satu kolom di ponsel; urutan DOM mendahulukan H1/CTA.
- Navbar menu mobile dari lebar di mana semua link tak muat, bukan memaksakan 6 menu mengecil.
- Program tiga kolom desktop dan satu kolom ponsel.
- Fee table diubah jadi *stacked rows* bila tampilan tabel terlalu sempit.
- Galeri 3 kolom desktop, 2 tablet, 1 ponsel; foto penting tidak terlalu kecil.
- Sticky bottom `Tanya Kemasukan` di mobile boleh digunakan pada `/kemasukan` setelah diuji; jangan menutupi field/tombol/form, harus mempertimbangkan safe-area iOS.
- Semua target sentuh minimal 44 px bila praktis, jarak antar tombol cukup.

### 11.3 Aksesibilitas

Target **WCAG 2.2 AA** untuk fungsi utama: kontras warna memenuhi AA, label input jelas, pesan error terkait dengan field, heading semantik H1–H3, navigation landmark, skip link, menu keyboard operable, focus ring terlihat, media captions/transkrip bila tersedia, alt image informatif, preferensi reduced motion, pemilihan bahasa halaman `lang="ms"`.

### 11.4 State interaksi wajib

CTA hover/focus/disabled bila relevan, menu mobile buka-tutup, FAQ accordion dengan `aria-expanded`, filter galeri active state, lightbox close/focus return, form error/hint/success handoff ke WhatsApp (jangan mengklaim telah terkirim), gambar fallback ketika file gagal dimuat, 404 yang jelas.

## 12. UX writing — microcopy Bahasa Melayu

| Komponen | Copy yang diusulkan |
|---|---|
| H1 Homepage | `Membesar Bersama Al-Quran, Ilmu & Tarbiah.` |
| Subheadline | `Pendidikan tahfiz dan pembinaan sahsiah untuk pelajar perempuan di Shah Alam, Selangor.` |
| CTA Header | `Tanya Kemasukan` |
| CTA Sekunder | `Kenali Pengajian` |
| Label halaman | `Maklumat Kemasukan & Yuran` |
| Label formulir | `Nama Ibu Bapa / Penjaga`, `Umur Calon Pelajar`, `Program Diminati`, `Pertanyaan Tambahan` |
| Submit form | `Teruskan ke WhatsApp` |
| Keterangan privasi | `Maklumat ini digunakan untuk menyediakan mesej WhatsApp pada peranti anda. Mesej hanya dihantar apabila anda mengesahkannya di WhatsApp.` |
| Footer kredit | `Website ini dibangunkan oleh ILMU NIAGA` |
| Error form | `Sila lengkapkan maklumat yang diperlukan.` |
| 404 | `Halaman yang dicari tidak ditemui. Kembali ke Utama.` |

Tulisan dan istilah akhir perlu diperiksa oleh Cik Yatt/pihak lokal sebelum publikasi; jangan otomatis mengganti istilah resmi kurikulum.

## 13. Arsitektur teknis yang disarankan untuk Codex

### 13.1 Prinsip implementasi

Bangun website statis/SSG multi-halaman dengan komponen reusable; tanpa backend/database wajib untuk v1. Next.js App Router + TypeScript + Tailwind adalah **rekomendasi teknis**, bukan persyaratan mutlak jika hosting ILMU NIAGA lebih cocok dengan HTML statis. Jangan mengunci stack sampai cara deploy/subdomain terverifikasi. Alternatif Astro/HTML statis bisa lebih sederhana pada shared hosting.

### 13.2 Struktur folder konseptual

```text
src/
  app/                 # route publik: /, profil, pengajian, kemasukan, galeri, hubungi
  components/          # header, footer, program-card, fee-table, gallery, inquiry-form
  content/             # program, faq, contact, fees, accreditation, media index
  lib/                 # helpers: whatsapp, image mapping, metadata
public/
  assets/
    brand/
    hero/
    pengajian/
    aktiviti/
    pencapaian/
    video/
```

### 13.3 Model konten sederhana

Simpan `siteSettings`, `admissionCycle`, `programs`, `feeSchedule`, `contactMethods`, `organization`, `galleryItems`, `faqItems`, dan `legalDocuments` sebagai data terstruktur. Tiap item galeri memuat `id`, `src`, `alt`, `category`, `caption`, `width`, `height`, `rightsStatus` dan `approvedForPublication`. Item bertanda pending tidak dibangun menjadi konten publik (fail-closed), bukan disembunyikan hanya lewat CSS.

Sesi pendaftaran, kontak WhatsApp, dan domain ditetapkan di satu sumber data; jangan duplikasi string ke semua halaman. Jangan memasukkan draft sertifikat/akun bank ke situs publik secara otomatis.

### 13.4 SEO & metadata

- Title dan description unik tiap route dalam Bahasa Melayu.
- Canonical ke domain yang disetujui dan benar-benar aktif setelah deployment; `noindex` pada preview/staging.
- Sitemap XML berisi 6 route publik dan `robots.txt` tepat.
- Structured data `EducationalOrganization`/`Organization` hanya dengan fakta yang diverifikasi; jangan menulis review atau bintang fiktif.
- Open Graph thumbnail memakai logo/foto yang punya izin.
- Breadcrumbs untuk halaman dalam jika meningkatkan orientasi.
- Pastikan tidak ada 404 aset, broken links, page duplikat, atau kebocoran URL staging ke indeks pencarian.

### 13.5 Performa

- Tujuan lapangan: LCP <=2,5 detik, CLS <=0,1, INP <=200 ms pada persentil ke-75; pengukuran riil perlu dilakukan setelah deploy.
- Gambar responsif dalam WebP/AVIF; jangan menghilangkan file asli dari arsip.
- Optimisasi hero dan preload hanya aset prioritas; galeri/video lazy-load.
- Tetapkan dimensi gambar, poster video, batas ukuran file, dan cache headers.
- Hindari slider berat, framework animasi besar, autoplay video background, dan third-party embeds tak perlu.

### 13.6 Analytics/privasi

Analitik opsional hanya untuk page views anonim dan klik CTA setelah keputusan pengelola; jangan melacak isi formulir, nama/umur anak, nomor telepon, atau dokumen. Tidak boleh mengunggah ZIP asli ke public repository tanpa seleksi media dan izin. Pisahkan file internal (PDF profil, sertifikat lengkap, rekening, data siswa) dari `public/`.

## 14. Pedoman editorial dan asset governance

### 14.1 Peta status publikasi

- **Approved:** siap pakai dan diizinkan institusi.
- **Pending:** deskripsi/izin/verifikasi belum selesai; tidak tampil di production.
- **Rejected:** duplikat, keliru, kualitas tidak layak atau tidak ada hak pakai.

### 14.2 Checklist setiap foto/video

Sumber jelas; deskripsi dan kategori sesuai; tidak duplikat; izin orang tua/wali dan institusi untuk anak di bawah umur; tidak menampilkan data sensitif (name tags/kontak pribadi) tanpa izin; crop rapi; alt/caption akurat; resolusi layak; ukuran teroptimasi. Untuk materi prestasi, penerbitan nama lengkap perlu persetujuan spesifik.

### 14.3 Gaya konten

Gunakan Melayu Malaysia konsisten (`Pengajian`, `Kemasukan`, `Yuran`, `Galeri`, `Hubungi Kami`), hindari campuran Indonesia/Melayu tidak sengaja. Klaim masa dan durasi diberi istilah `sekitar`/`bergantung kepada kemajuan`. Kutipan, ayat, hadis dan tauliah jangan ditambah tanpa sumber dan telaah.

## 15. Wireframe konseptual dalam teks

### Desktop: homepage

```text
┌────────────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT: Pengambilan ... [Maklumat Kemasukan]             │
├────────────────────────────────────────────────────────────────┤
│ [LOGO MADUM]   Utama  Profil  Pengajian  Kemasukan  Galeri ... │
│                                                   [TANYA]      │
├────────────────────────────────────────────────────────────────┤
│ H1 Membesar Bersama Al-Quran...   │ FOTO KEGIATAN ASLI         │
│ Keterangan singkat...             │                            │
│ [Tanya Kemasukan] [Pengajian]     │                            │
├────────────────────────────────────────────────────────────────┤
│ Mengenali Darul Muthiah + link profil                          │
├────────────────────────────────────────────────────────────────┤
│ [Hafazan 30 Juzuk] [Syahadah] [SPM Fast Track JAIS]           │
├────────────────────────────────────────────────────────────────┤
│ FOTO KELAS                     │ 4 PILAR PENDIDIKAN            │
├────────────────────────────────────────────────────────────────┤
│ 3–4 FOTO TERPILIH → GALERI                                      │
├────────────────────────────────────────────────────────────────┤
│ PENCAPAIAN TERPILIH (DIIZINKAN)                                 │
├────────────────────────────────────────────────────────────────┤
│ ADA PERTANYAAN? [TANYA KEMASUKAN]                              │
├────────────────────────────────────────────────────────────────┤
│ FOOTER + KREDIT ILMU NIAGA                                      │
└────────────────────────────────────────────────────────────────┘
```

### Mobile: homepage

```text
┌───────────────────────────┐
│ [LOGO]              [☰]  │
├───────────────────────────┤
│ Pengambilan 2026/2027... │
│ H1 headline ringkas       │
│ Penerangan ringkas        │
│ [Tanya Kemasukan]         │
│ [Kenali Pengajian]        │
│ [FOTO KEGIATAN]           │
├───────────────────────────┤
│ Mengenali Darul Muthiah   │
├───────────────────────────┤
│ [Hafazan]                 │
│ [Syahadah]                │
│ [SPM]                     │
├───────────────────────────┤
│ Pilar pendidikan         │
│ Galeri pilihan            │
│ CTA                      │
│ Footer                   │
└───────────────────────────┘
```

## 16. Fase implementasi dan quality gates

### Fase A — Desain terperinci (sebelum coding)

Finalisasi sitemap; wireframe desktop/mobile untuk 6 halaman; komponen global; brand tokens; draft copy dalam Melayu; peta aset; status izin; checkpoint review internal. **Output:** approved UI/UX spec, bukan website live.

### Fase B — Fondasi proyek

Buat repo/branch baru; pilih stack sesuai hosting; konfigurasi lint/typecheck/test; data model statis; sistem komponen; route 404; global header/footer; asset pipeline; preview environment. **Output:** build kerangka dengan data aman.

### Fase C — Halaman prioritas

Urutan disarankan: `Utama` → `Kemasukan` → `Pengajian` → `Profil` → `Galeri` → `Hubungi`. Bangun data terkunci/terverifikasi saja dan placeholder editorial internal untuk konten pending. **Output:** seluruh halaman dan navigasi bekerja di staging.

### Fase D — QA dan review

- Cek mobile lebar 320/375/390/428 px, tablet 768, desktop 1280/1440.
- Semua 6 route bisa dibuka langsung/refresh; tanpa 404 links/images.
- CTA WhatsApp benar, pesan terformat, fallback bekerja, tidak mengklaim pendaftaran selesai.
- Layout RTL? Tidak perlu kecuali konten Arab; uji rendering teks Arab jika ada.
- Navigasi keyboard, fokus, label form, validasi dan lightbox sesuai aksesibilitas.
- Audit Lighthouse dan pemeriksaan nyata minimal Chromium serta Safari mobile bila tersedia.
- SEO metadata/canonical/robots di staging dan production tepat.
- Semua materi pending tidak muncul dalam hasil build publik.
- Foto peserta didik yang tampil memiliki status izin approved.
- Cik Yatt + wakil institusi menyetujui screenshot desktop/mobile dan copy Melayu.

### Fase E — Deployment

Verifikasi kepemilikan hosting dan cara deploy (`madum.ilmuniaga.com`), DNS, HTTPS, routing subpath, asset cache, 404, rollback, sitemap; siapkan backup build; deploy setelah persetujuan. Jangan menebak koneksi FTPS/SSH, rahasia ataupun kredensial. Jika poster lama menampilkan `madum.edu.my`, strategi redirect hanya dilakukan bila ada hak akses dan otorisasi domain tersebut.

## 17. Acceptance criteria v1.0 (Definition of Done)

- [ ] Semua 6 halaman lengkap dengan navigasi yang konsisten dan footer ILMU NIAGA.
- [ ] Halaman bisa dibaca dengan baik di perangkat 320 px dan lebar desktop.
- [ ] Logo/logo text tidak terpotong, ikon dan warna konsisten.
- [ ] Tidak ada menu ke `pautan.html`, `sumbangan.html`, `zakat.html` yang tidak tersedia.
- [ ] Tahun pendaftaran, domain dan nomor kontak telah diverifikasi atau konten berisiko ditahan dari production.
- [ ] Biaya dan bantuan asnaf hanya ditampilkan berdasarkan persetujuan pengelola.
- [ ] Semua foto/video punya status izin; nama lengkap pelajar tidak muncul tanpa persetujuan spesifik.
- [ ] Tidak ada foto/video duplikat, file raw berukuran besar yang tidak dioptimasi, atau link patah.
- [ ] Form WhatsApp bekerja, tidak ada backend/penyimpanan PII tersembunyi, petunjuk handoff jelas.
- [ ] CTA utama mudah ditemukan, tanpa popup memaksa atau scarcity palsu.
- [ ] Pengujian keyboard, warna, form, responsivitas dan browser lulus.
- [ ] SEO, robots/sitemap, canonical dan HTTPS benar.
- [ ] Klien memberi persetujuan konten akhir dan owner menyetujui go-live.

## 18. Backlog di luar v1.0

Jika diminta/dianggarkan terpisah: berita & aktiviti dengan CMS; halaman cawangan; borang pendaftaran sungguhan dengan workflow dan basis data; janji temu lawatan; portal pelajar/penjaga; infak/zakat online yang berwenang; multi bahasa; laporan analitik; sistem manajemen galeri oleh admin; dan migrasi domain lain.

---

## 19. Keputusan desain yang bisa dijalankan sekarang

**GO untuk perencanaan dan mockup:** enam halaman, arah visual Forest/Emerald/Cream/Gold, komponen sistem desain, mobile-first, konten yang jelas sumbernya, contoh alur WhatsApp dan prioritas aset.  
**HOLD untuk publikasi konten:** kesesuaian sesi `2026/2027` vs `2027`, domain `madum.ilmuniaga.com` vs `madum.edu.my`, nomor `+60123108902` vs `+60122023024`, rincian yuran terbaru, kronologi sejarah, identitas/izin foto pelajar, dan penggunaan sertifikat/zakat.

**Kesimpulan:** bangun MADUM sebagai situs informasi pendidikan multi-halaman yang autentik dan mudah digunakan. Jangan menyamakan *website siap di-coding* dengan *konten siap dipublikasikan*: keduanya memiliki syarat kelulusan berbeda.
