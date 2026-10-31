# MADUM — Pratonton Reka Bentuk 6 Halaman (UI/UX v1.0)

**Status: PRATONTON DALAMAN sahaja; bukan website yang diterbitkan atau implementasi produksi.**

## Cara menjalankan proyek

Proyek ini menggunakan Astro. Siapkan Node.js 24 LTS dan pnpm 10.32.1 (sesuai `packageManager` di `package.json`).

Jalankan perintah berikut dari folder proyek:

```bash
corepack enable
pnpm install
pnpm dev
```

Buka http://localhost:4321 di browser. Untuk menghentikan server, tekan `Ctrl+C` di terminal. Jika port tersebut sedang dipakai, gunakan alamat yang ditampilkan di terminal.

Untuk mengakses dari perangkat lain pada jaringan yang sama:

```bash
pnpm dev --host 0.0.0.0
```

Gunakan alamat `Network` yang ditampilkan di terminal.

Untuk membuat dan melihat hasil build:

```bash
pnpm build
pnpm preview
```

Buka alamat yang ditampilkan oleh perintah preview.

## Pratonton HTML asal

Untuk versi prototipe HTML asal, buka `index.html` dalam browser selepas ekstrak ZIP. Navigasi atas ke enam halaman telah disambungkan:

- `index.html` — Utama, menggunakan desain homepage yang disetujui sebagai asas
- `profil.html` — Profil Maahad
- `pengajian.html` — Pengajian
- `kemasukan.html` — Kemasukan & Yuran, dengan prototipe borang WhatsApp
- `galeri.html` — Galeri & Pencapaian dengan penapis dan lightbox
- `hubungi.html` — Hubungi Kami dengan FAQ interaktif

Foto digunakan daripada ZIP asal klien; tersedia sebagai WebP untuk tujuan demo. Dua video unik termasuk. Pengguna perlu mendapat izin publikasi foto/video peserta didik sebelum deployment. Sila jangan sebarkan ZIP prototipe berfoto pelajar tanpa izin.

Kandungan sesi 2026/2027 dan WhatsApp 012-310 8902 adalah baseline permintaan Cik Yatt tetapi terdapat versi berbeda pada poster asal. Kadar yuran RM1,310 / RM500 / RM450 hanyalah rujukan PDF 2026/2027 dan **BELUM DISAHKAN** untuk tayangan rasmi. Peta pada halaman Hubungi hanyalah ilustrasi dan menyediakan pautan Google Maps yang perlu disahkan titik lokasinya. Halaman galeri dan organisasi tidak menyiarkan nama penuh pelajar/kakitangan dalam pratinjau. Tiada database, pembayaran, integrasi zakat ataupun backend.

Untuk implementasi Codex: gunakan prototipe ini sebagai spesifikasi visual dan interaksi, bukan langsung sebagai kod production. Validasi data, keamanan, lintasan keyboard, aksesibiliti, perfomance dan kandungan hendaklah diperiksa lagi.
