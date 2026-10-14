# MADUM — Handoff Implementasi ke Codex

**Input yang telah approved:** desain/UI/UX enam halaman, desktop 1440 px dan mobile 390 px.

## Cara memulai

1. Buka Codex pada folder kerja baru **privat** atau repo yang telah disiapkan untuk MADUM.
2. Ekstrak `MADUM_UIUX_6_Halaman_Prototype_v1.0.zip` agar tersedia direktori `MADUM_Design_v1_0/`.
3. Salin `MADUM_Codex_Implementation_Prompt_v1.0.md` ke root proyek atau tempel isinya ke Codex.
4. Jika memerlukan data tambahan, tempatkan `MADUM_Masterplan_UIUX_v1.0.md`, `madum_audit_awal.md` dan `madum_asset_manifest.csv` di folder referensi privat. Arsip asal klien `Archive.zip` hanya bila perlu pemeriksaan fakta, dan **jangan commit/upload ke repo publik**.
5. Jalankan prompt. Biarkan Codex melakukan audit repo terlebih dahulu, lalu mengimplementasikan dan menguji secara lokal.
6. Review laporan, screenshot, dan blocker; **jangan deploy** sampai data dan izin media disahkan.

## Status

- Desain: approved oleh pemilik tugas.
- Deploy: belum diminta; dilarang dalam prompt.
- Konten: beberapa nilai masih menunggu persetujuan institusi (sesi, WA, domain, yuran, sejarah, legalitas, media anak-anak).
- Hosting: static-first, pilihan stack ditentukan setelah audit lingkungan.

## Referensi berkas

- `MADUM_Codex_Implementation_Prompt_v1.0.md` — instruksi lengkap implementasi.
- `MADUM_Masterplan_UIUX_v1.0.md` — tujuan, konten, UX dan aturan editorial.
- `madum_audit_awal.md` — fakta, anomali dan batas publikasi.
- `madum_asset_manifest.csv` — inventaris aset asli.
- `MADUM_UIUX_6_Halaman_Prototype_v1.0.zip` — acuan desain interaktif dan media terkurasi.

**Catatan keamanan:** Prototipe berisi foto/video pelajar. Simpan di lingkungan privat dan pastikan izin sebelum publikasi, termasuk bila akan dibuat staging online. Jangan memberi akses publik hanya dengan perlindungan `robots.txt` atau `noindex`.
