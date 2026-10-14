import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const routes = ['profil', 'pengajian', 'kemasukan', 'galeri', 'hubungi'];

for (const r of routes) {
  const srcHtml = path.join(distDir, r, 'index.html');
  const targetHtml = path.join(distDir, `${r}.html`);
  if (fs.existsSync(srcHtml)) {
    fs.copyFileSync(srcHtml, targetHtml);
    console.log(`[postbuild] Created ${r}.html fallback from ${r}/index.html`);
  }
}
