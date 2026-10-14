# MADUM — PROMPT IMPLEMENTASI CODEX

**Versi:** 1.0 — 14 Oktober 2026  
**Status desain:** APPROVED untuk keenam halaman (oleh pemberi tugas); **konten resmi dan publikasi belum approved**  
**Tujuan:** mengubah prototipe UI/UX menjadi website institusi yang maintainable, cepat, responsif, aman dan siap untuk pemeriksaan owner, **tanpa deployment otomatis**.

> **Cara pakai:** Ekstrak `MADUM_UIUX_6_Halaman_Prototype_v1.0.zip` ke workspace Codex. Letakkan prompt ini di root workspace sebagai `CODEX_IMPLEMENTATION.md` atau tempel seluruh isinya ke Codex. Jika tersedia, tambahkan `MADUM_Masterplan_UIUX_v1.0.md`, `madum_audit_awal.md`, `madum_asset_manifest.csv`, serta ZIP aset asli `Archive.zip` **hanya dalam lingkungan kerja privat**. Jangan unggah materi yang memuat anak-anak atau data pribadi ke repo publik.

---

## PERINTAH UTAMA UNTUK CODEX

Kamu adalah senior frontend engineer + web architect + UI/UX implementation engineer yang bertanggung jawab mengimplementasikan **Maahad Tahfiz Al Quran Darul Muthiah (1) (MADUM)**. Ini proyek website institusi pendidikan Islam di Malaysia. **JANGAN memulai desain baru:** prototipe yang dilampirkan telah disetujui untuk semua enam halaman dan menjadi *visual source of truth*.

### A. Sources of truth dan urutan prioritas

1. **Visual dan interaksi:** enam file `MADUM_Design_v1_0/{index,profil,pengajian,kemasukan,galeri,hubungi}.html`, folder `MADUM_Design_v1_0/assets/`, serta screenshot `previews/*_Desktop_Full.png` dan `*_Mobile_Full.png` adalah acuan visual/UX yang telah disetujui. Perubahan struktur visual hanya untuk bug, keamanan, aksesibilitas, dan responsivitas; dokumentasikan setiap deviasi.
2. **Tujuan, copy dan aturan informasi:** `MADUM_Masterplan_UIUX_v1.0.md` adalah masterplan. Jika tidak ada di workspace, lanjutkan dengan HTML yang tersedia dan nyatakan keterbatasan sumber, jangan mengarang.
3. **Fakta institusi:** dokumen asal klien (`Archive.zip` termasuk PDF profil, HTML awal dan poster) menjadi sumber fakta, tetapi **klaim yang bertentangan atau belum disetujui tidak otomatis menjadi fakta publik**.
4. **Keputusan pemilik proyek:** website enam halaman berbahasa Melayu Malaysia, target `madum.ilmuniaga.com`, CTA WhatsApp sementara +60 12-310 8902, kredit ILMU NIAGA di footer, tanpa dashboard/database/pembayaran/zakat transaksi. Baseline ini diperbolehkan di development privat; verifikasi resmi masih diperlukan sebelum go-live.
5. Kode atau saran Gemini **bukan sumber kebenaran implementasi**, hanya referensi historis.

### B. Lingkup, URL dan definisi fitur

Website harus memiliki **enam halaman publik** (saat mendapat approval go-live):

| Route target | Nama menu | Sasaran utama |
| --- | --- | --- |
| `/` | Utama | Identitas, program utama, dokumentasi, CTA |
| `/profil` | Profil Maahad | Pengenalan, sejarah, matlamat, organisasi ringkas, legalitas terverifikasi |
| `/pengajian` | Pengajian | 3 program, 4 pilar kurikulum, rutinitas dan dokumentasi |
| `/kemasukan` | Kemasukan & Yuran | Persyaratan, proses, info biaya setelah approval, WhatsApp inquiry |
| `/galeri` | Galeri & Pencapaian | Galeri berfilter, lightbox, 2 video unik |
| `/hubungi` | Hubungi Kami | Kontak, lokasi dan FAQ |

Sediakan 404 yang bermanfaat. Link antarhalaman harus benar saat build statis dan setelah dipasang di subdomain. Jika rute clean URL tidak cocok dengan hosting, buat strategi output statis yang setara (`/profil/index.html`, dll.) atau redirect 301 yang benar. Jangan mengandalkan rewrite server tanpa menguji fasilitas hosting.

Di luar cakupan V1: login, database, CMS besar, pembayaran online, integrasi zakat, blog dinamis, multi-bahasa, chatbot, analytics/tracker, enrollment backend, dan dashboard admin. **Form WhatsApp hanya menyusun draft pesan dan membuka WhatsApp; bukan pendaftaran yang telah dikonfirmasi.**

### C. Fase 0 — wajib audit workspace lebih dulu

Sebelum mengubah kode:

1. Jalankan `pwd`, `git status --short --branch` jika tersedia; inventarisasi file dan dependencies. Deteksi apakah sudah ada repo dan toolchain. **Jangan overwrite pekerjaan yang sudah ada.**
2. Baca `README.md`, `REVIEW_CHECKLIST.md`, prototipe enam halaman, masterplan, screenshots dan file aset. Identifikasi shared section, CSS/JS inline yang berulang, dan fungsi: mobile nav, CTA, WhatsApp, galeri, dialog foto, FAQ.
3. Tentukan strategi teknologi **static-export first** sesuai hosting ILMU NIAGA (belum dipastikan). Jika tidak ada repo dan tidak ada batasan tambahan, **Astro static build + TypeScript untuk modul konten** adalah opsi default yang direkomendasikan, **bukan syarat**. Jika repo sudah memiliki framework dan memenuhi deployment statis, gunakan yang ada. Jangan menambah backend hanya karena memakai framework.
4. Laporkan temuan cepat dan rencana file sebelum membuat perubahan besar. Jika bekerja di repo Git, buat branch `feat/madum-site-v1` (atau gunakan branch kerja yang sudah disediakan tanpa memindahkan branch pemilik secara destruktif).
5. Jangan push, membuat PR, merge, mengubah DNS, deploy, menghubungi nomor klien, ataupun mempublikasikan media sampai saya memerintahkan secara eksplisit.

### D. Fase 1 — desain approved harus dijaga

Implementasikan desain berdasarkan prototipe, **tidak ada redesign sepihak**.

- Gunakan token utama: `#123F35` deep green, `#206452` emerald, `#FBF8F0` warm cream, `#D2AD6A` muted gold; kombinasikan dengan warna teks sekunder dan permukaan putih yang sudah ada.
- Pertahankan logo MADUM **utuh tanpa crop**, hierarki headline serif, tipografi body yang mudah dibaca, visual foto asli, pola hero/section/card/footer, dan gaya editorial institusi.
- Ikuti susunan section masing-masing enam halaman dan hierarki CTA yang ada pada prototipe.
- Tidak menggunakan stok foto, generative AI foto siswa, statistik palsu, testimonial palsu, angka keberhasilan palsu, atau klaim 'terbaik' yang tak didukung sumber.
- Desktop acuan: 1440 px. Mobile acuan: 390 px. Tambahkan QA 320 px, 375 px, 768 px, 1024 px, 1280 px, 1440 px. Komponen tidak boleh overflow horizontal.
- Hindari mengganti elemen berkomposisi khusus dengan template kartu generik. Pertahankan proporsi foto dan whitespace sedekat mungkin, sambil meningkatkan aksesibilitas.

### E. Fase 2 — struktur kode dan content model

Refaktor inline CSS/JS prototype menjadi struktur reusable; **jangan mengubah tampilannya secara tidak sengaja**. Contoh struktur konseptual (adaptasi sesuai stack):

```text
src/
  pages/
    index
    profil/index
    pengajian/index
    kemasukan/index
    galeri/index
    hubungi/index
    404
  layouts/
    SiteLayout
  components/
    SiteHeader
    MobileNavigation
    SiteFooter
    AnnouncementBar
    PrimaryCTA
    SectionHeading
    ProgramCard
    PhotoGrid
    GalleryFilter
    PhotoLightbox
    VideoCard
    FeeCards
    ContactCards
    FAQAccordion
    WhatsAppInquiryForm
  content/
    siteConfig
    programs
    fees
    gallery
    faq
    claimsRegistry
  styles/
    tokens.css
    global.css
    components.css
public/
  assets/
    ... files existing optimized and normalized ...
```

Komponen **boleh** menggunakan nama lain kalau konsisten dan maintainable. Jaga satu sumber data untuk nomor WhatsApp, tahun sesi, alamat, telepon, biaya, status izin media dan domain. Jangan hardcode string yang bisa berubah di enam tempat.

Contoh `siteConfig`:

```ts
export const siteConfig = {
  institutionName: 'Maahad Tahfiz Al Quran Darul Muthiah (1)',
  brandName: 'Darul Muthiah',
  locale: 'ms-MY',
  canonicalBase: 'https://madum.ilmuniaga.com',
  admissionsSession: '2026/2027',
  whatsappE164: '60123108902',
  developerName: 'ILMU NIAGA',
  developerUrl: 'https://ilmuniaga.com',
  publicationMode: 'internal', // DEFAULT; berubah ke public hanya setelah approval resmi
} as const;
```

`publicationMode=internal` harus default dan tetap menghasilkan build yang bisa diperiksa **secara lokal atau dalam lingkungan staging privat**. Staging publik tidak aman untuk foto anak; `noindex` **tidak menggantikan kontrol akses**.

### F. Fase 3 — validitas fakta dan release gates (CRITICAL)

Bedakan **approved design** dan **approved content**. Konten berikut masih belum boleh diperlakukan sebagai publikasi resmi tanpa verifikasi klien:

1. **Tahun penerimaan:** chat awal `2026/2027`, poster lain `2027`.
2. **Nomor WhatsApp:** instruksi Cik Yatt `+60 12-310 8902`, poster lain `+60 12-202 3024`.
3. **Domain:** target `madum.ilmuniaga.com`, poster mencantumkan `www.madum.edu.my`.
4. **Yuran:** PDF profil mencantumkan pendaftaran/tahunan RM1,310; asrama RM500/bulan; harian RM450/bulan; persetujuan angka saat publikasi belum ada.
5. **Alamat kampus/pin Maps, email dan telepon**: perlu konfirmasi saat ini.
6. **Kronologi 2012** dalam profil saling bertentangan (mulai April vs perencanaan akhir 2012).
7. **Sertifikat JAIS / tauliah LZS dan statusnya**: redaksi dan penggunaannya perlu izin/validasi.
8. **Kebajikan asnaf, mekanisme zakat, rekening bank**: tidak boleh menjadi janji atau ajakan transaksi tanpa approval.
9. **Hak penggunaan foto/video siswa di bawah umur, poster graduan dan nama lengkap**: butuh izin institusi/wali sesuai ketentuan yang berlaku.
10. **Batas komersial proyek**: website enam halaman adalah baseline desain yang saya setujui; kesepakatan biaya/scope dengan Cik Yatt/klien tetap dokumen terpisah.

Buat `content/CLAIMS_REGISTER.md` atau manifest terstruktur dengan kolom `field`, `value`, `source`, `status`, `approved_by`, `approved_at`, `public_display_policy` (`show` / `hide` / `replace_with_contact_cta`). Implementasikan fallback aman: biaya belum disahkan → tampilkan layout card dengan `Sila hubungi pihak maahad untuk yuran terkini`, bukan angka tidak pasti. Untuk tanggal/nomor dan bidang lain, pertahankan label INTERNAL pada preview privat dan hentikan *release-to-public* hingga approved; jangan diam-diam menebak atau 'memperbaiki' faktanya.

**Publikasi dilarang secara default**. Sebelum public build, pemeriksaan release gate perlu memverifikasi approval tertulis untuk semua nilai yang ditampilkan dan status izin media. Jika data tidak approved, terapkan fallback/hide. Jangan menyertakan sertifikat hasil pindai, nomor rekening, rincian pribadi staff/pelajar, atau file ZIP/PDF asal di folder public secara default.

### G. Fase 4 — fitur interaktif, UX dan keamanan

**Navbar**: sticky dan responsive; anchor aktif sesuai route; mobile menu aria-expanded/aria-controls, klik/tap menutup, tombol Escape menutup, fokus terkelola. Tidak ada nav dropdown yang tidak diminta.

**FAQ**: native `<details>`/`<summary>` bila memungkinkan, atau komponen aksesibel tombol dengan aria-expanded dan konten yang benar-benar dapat difokuskan. Jangan menyembunyikan jawaban hanya melalui CSS tanpa state semantik.

**Galeri**:
- Kurasi dari aset yang memang ada; jangan memasukkan duplikat. Prototype memakai 12 foto dan dua video unik; pertahankan kurasi approved sampai ada arahan lain.
- Filter kategori bekerja, memiliki state serta label jelas; bukan sekadar tombol dekoratif.
- Lightbox keyboard accessible: buka via button, Escape menutup, tombol close, focus trap atau `<dialog>` yang sesuai, fokus dikembalikan ke foto pemicu; scrolling halaman belakang dicegah selama modal aktif.
- Gunakan `alt` yang faktual dan tidak mengidentifikasi anak secara tidak perlu; caption dan poster bernama lengkap hanya jika approval eksplisit.

**Video**: format MP4 yang ada, manual `controls`, `playsinline`, `preload="metadata"`/`none`, poster yang cocok; **jangan autoplay dengan audio**. Ukuran file efisien, jangan load dua video besar sejak first paint homepage.

**Form WhatsApp**:
- Field minimum: nama penjaga, telepon penjaga, umur pelajar (10–17), program diminati; pertanyaan tambahan opsional.
- Hindari mewajibkan nama lengkap siswa, nomor identitas, tanggal lahir, alamat rumah atau dokumen pribadi.
- Validasi client-side dan sanitasi/normalisasi input; pastikan maxlength masuk akal. Generate pesan Melayu yang jelas dan encode dengan `encodeURIComponent`.
- Tujuan sementara `https://wa.me/60123108902?text=...` **hanya untuk lokal/staging privat** sebelum verifikasi nomor.
- Jelaskan bahwa pengunjung masih harus menekan `Send` di WhatsApp; tidak berarti telah mendaftar.
- Jangan mencatat data form ke server, logs/analytics, localStorage, atau URL website; jangan mengirim ke layanan pihak ketiga selain WhatsApp setelah tindakan sadar pengunjung.
- Pertimbangkan popup blocker: gunakan anchor dinamis/fallback link yang dapat diklik bila membuka tab baru gagal.

**Kontak/peta**: gunakan tautan Google Maps ke alamat kampus yang diverifikasi; peta ilustrasi pada prototipe harus **ditandai ilustrasi**, jangan menggambarkannya sebagai peta lokasi yang akurat. Hindari API key/iframe berat jika link eksternal sudah cukup.

### H. Fase 5 — SEO, accessibility, performance

- Semua halaman memiliki `<html lang="ms-MY">`, tepat satu H1, title unik, description unik, canonical sesuai domain final yang disetujui (di staging jangan klaim canonical live tanpa mempertimbangkan konfigurasi), OG metadata yang sesuai dan tidak bocor foto anak, semantic landmarks (`header`, `main`, `nav`, `footer`).
- Robots/sitemap untuk public mode saja. Default development/internal wajib noindex, dan akses staging sensitif wajib diproteksi autentikasi bila online.
- SEO route yang diminta, link dan breadcrumbs bekerja. Tidak ada link ke `.html` yang hilang dan tidak ada broken external href.
- Target WCAG 2.2 AA (berdasarkan pengujian): kontras, fokus terlihat, tombol sentuh min 44x44 px jika memungkinkan, input dengan label, error validasi terbaca, tab order, Escape modal/menu, reduced motion.
- Gambar: WebP yang tersedia dipakai ulang, lazy-load below fold, width/height/aspect-ratio ditentukan, hero image prioritas secara tepat; jangan upsample foto kecil dan jangan crop wajah/aktivitas secara tidak semestinya.
- Target lab/performa pada mobile representatif: LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms; bila belum memenuhi, laporkan metrik serta penyebab tanpa mengklaim PASS.
- Zero nonessential third-party scripts; tidak memuat font remote jika merugikan privasi/performance tanpa kebutuhan.
- Periksa `npm audit`/dependency advisories relevan bila memakai dependency manager; jangan mengganti versi mayor secara acak.

### I. Fase 6 — QA dan bukti implementasi

Jalankan test dan catat hasil aktual. Minimal:

1. Build dan lint/typecheck jika stack mendukung.
2. Cek semua 6 route + 404; pastikan halaman langsung dapat diakses/reload, termasuk clean URL pada server static.
3. Visual compare terhadap approved screenshots di viewport 1440x900 dan 390x844, juga 320, 375, 768, 1024, 1280. Simpan before/after screenshot dengan nama jelas; audit deviasi visual, jangan mengklaim pixel-perfect tanpa perbandingan.
4. Tidak ada horizontal overflow, CSS/layout pecah, gambar atau video 404, console exception, dan dead link.
5. Menu mobile open/close via tap/Escape, focus/ARIA; navigasi keyboard dari awal sampai footer.
6. Semua filter galeri, lightbox Esc/focus return, accordion FAQ.
7. Form inquiry valid/invalid, encode karakter khusus Melayu, umur 10/17, nomor telepon dan fallback popup blocker; **jangan kirim pesan sungguhan**.
8. Review bahasa Melayu Malaysia, ejaan CTA, microcopy; tandai materi yang butuh persetujuan redaksi klien.
9. Security/privacy: cek output `dist` dan repo tidak memuat file profil PDF/ZIP sumber, dokumen pribadi, kredensial `.env`, API keys, ataupun media tidak disetujui untuk publik. Untuk preview lokal media diizinkan dalam workspace privat; release build harus memblokir media yang belum approved.
10. Tidak ada deployment/push/merge tanpa persetujuan.

Buat dokumen laporan:

- `docs/IMPLEMENTATION_REPORT.md` — ringkasan, berkas yang dibuat/diubah, arsitektur, cara run/build, hasil test yang benar-benar dijalankan, screenshot, penyimpangan dari desain dan alasannya.
- `docs/RELEASE_BLOCKERS.md` — tabel status semua konfirmasi konten serta deploy readiness; tandai **BLOCKED** jika syarat belum lengkap.
- `docs/CONTENT_EDIT_GUIDE.md` — cara mengganti tahun, WhatsApp, tarif, alamat, foto, caption, dan metadata di satu tempat tanpa memodifikasi halaman secara manual.
- `docs/HOSTING_HANDOFF.md` — panduan deploy statis ke hosting ILMU NIAGA setelah data hosting diketahui; identifikasi DNS/SSL/path dan cara rollback. Jangan membuat kredensial palsu atau berasumsi FTPS port 21 dapat diakses dari CI.

### J. Definition of Done

Pekerjaan CODE dianggap selesai untuk **owner review** bila:

- Keenam halaman benar-benar dapat digunakan dari build lokal, memakai desain visual approved.
- Shared component, content config dan assets organized; tidak ada 6 salinan CSS/JS inline besar.
- Fungsi menu, filter, lightbox, FAQ, form WA bekerja dan teruji.
- Build, lint/typecheck yang applicable, route, image, basic a11y dan browser tests dilaporkan transparan.
- Ada 12 screenshot minimal (6 desktop + 6 mobile) dari implementasi baru, dibandingkan dengan referensi.
- Status release tetap **NOT DEPLOYED — CONTENT APPROVAL PENDING** sampai verifikasi selesai.

Pekerjaan **belum production-ready** hanya karena build/test lulus. Tidak boleh mengklaim nomor kontak, tahun penerimaan, nilai yuran, legalitas, atau hak tayang media sudah disahkan tanpa bukti.

### K. Format jawaban Codex yang diwajibkan

Setelah bekerja, balas secara ringkas tetapi lengkap dengan:

1. **Git branch + commit/SHA** (jika ada Git; tidak boleh mengarang commit).
2. **Framework/arsitektur dan alasan** (sesuai hosting static-first).
3. **File yang dibuat/diubah** beserta path.
4. **Screenshots dan hasil perbandingan** dengan baseline visual.
5. **Checklist PASS/FAIL/NOT RUN** untuk build, test, responsive, navigation, a11y, performance, metadata, privacy.
6. **Apa yang belum approved/berpotensi menjadi blocker**.
7. **Langkah selanjutnya untuk owner review**.

**Jangan berhenti pada rencana kalau tidak ada blocker teknis; lakukan implementasi lokal dan pengujian. Jangan melakukan deployment.**

---

## LAMPIRAN: Peta referensi prototipe dan asset names

- `MADUM_Design_v1_0/index.html` -> route `/`, approved homepage.
- `MADUM_Design_v1_0/profil.html` -> `/profil`.
- `MADUM_Design_v1_0/pengajian.html` -> `/pengajian`.
- `MADUM_Design_v1_0/kemasukan.html` -> `/kemasukan`, id form `inquiry`, CTA anchor `#pertanyaan`.
- `MADUM_Design_v1_0/galeri.html` -> `/galeri`, filter + lightbox + video.
- `MADUM_Design_v1_0/hubungi.html` -> `/hubungi`, FAQ + peta ilustrasi.
- `MADUM_Design_v1_0/assets/logo-madum.webp` -> identitas.
- `MADUM_Design_v1_0/assets/hero-kelas.webp` -> foto hero.
- `MADUM_Design_v1_0/assets/intro-madum.mp4` -> animasi logo asli (1 unik).
- `MADUM_Design_v1_0/assets/nasyid-pelajar.mp4` -> video nasyid (1 unik).
- `MADUM_Design_v1_0/previews/qa.json` -> hasil QA sebelumnya **hanya baseline prototipe**, bukan bukti quality of new implementation.
- `MADUM_Design_v1_0/REVIEW_CHECKLIST.md` -> scope dan pending approval.
- `MADUM_Design_v1_0/README.md` -> cara menjalankan prototipe asal.

> Catatan: semua URL dan nomor pada berkas input adalah referensi proyek; jangan menafsirkan referensi itu sebagai persetujuan publikasi. Jangan mengirim pesan WhatsApp ataupun membuka akses publik ke aset anak-anak secara otomatis.
