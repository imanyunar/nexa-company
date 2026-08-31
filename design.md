# Design System — Nexa

Panduan desain untuk website company profile Nexa. Tujuannya satu: terlihat seperti agency teknis yang serius (web, data, game), bukan template landing page generik ber-AI. Setiap keputusan di bawah diambil dari elemen yang sudah ada di logo Nexa — panah yang menembus huruf "N" — bukan dari default estetika "AI startup" (cream + serif, atau dark + neon-green).

---

## 1. Fondasi Brand

Logo Nexa punya satu ide visual yang kuat: **garis diagonal (panah) yang memotong bentuk melingkar (loop "N")**. Itu representasi literal dari "progres/pertumbuhan yang menembus proses." Ide ini yang jadi acuan seluruh layout — bukan cuma dipakai di logo lalu dilupakan.

Gradien logo (cyan → biru → ungu → magenta) adalah satu-satunya elemen dekoratif mencolok yang boleh dipakai berulang. Selain itu, halaman harus tenang: banyak white space, sedikit warna solid, tipografi yang tegas.

---

## 2. Warna

Diambil langsung dari gradien logo, bukan palet generik AI (bukan cream #F4F1EA, bukan dark+acid-green).

| Token | Hex | Peran |
|---|---|---|
| `--ink` | `#0B0E2B` | Teks utama, background section gelap (deep indigo-black, bukan #111 generik) |
| `--paper` | `#F6F7FB` | Background dasar (putih dingin, sedikit tint biru — bukan cream) |
| `--surface` | `#FFFFFF` | Card/panel di atas paper |
| `--cyan` | `#17C3F2` | Aksen sekunder, dari ujung panah logo |
| `--blue` | `#3A4CE0` | Warna primer brand — dipakai paling sering |
| `--violet` | `#8A2BE2` | Aksen gradien tengah |
| `--magenta` | `#E620C5` | Aksen tegas, dipakai sangat sedikit (highlight, hover, CTA) |
| `--muted` | `#5B6072` | Teks sekunder/caption |

**Aturan pakai:**
- Gradien penuh (cyan→blue→violet→magenta) **hanya untuk satu elemen signature** per halaman (misalnya garis penuntun di hero). Jangan taruh gradien di setiap card/border/button — itu ciri khas template AI.
- 90% halaman netral (ink/paper/muted). Warna brand muncul sebagai aksen, bukan wallpaper.
- Tidak ada drop-shadow abu generik (`rgba(0,0,0,.1)` di semua card). Kalau perlu depth, pakai border 1px `--ink` opacity rendah, bukan shadow seragam.

---

## 3. Tipografi

Dua keluarga, peran jelas — bukan Inter+serif default.

| Peran | Font | Alasan |
|---|---|---|
| Display / heading | **Cabinet Grotesk** (atau General Sans jika tidak tersedia) | Grotesk modern, sudut tegas — cocok dengan bentuk geometris panah di logo |
| Body / UI | **Satoshi** | Netral, sangat terbaca, tidak bentrok dengan display |
| Angka / label data | **IBM Plex Mono** | Dipakai *khusus* untuk statistik, angka metrik, dan cuplikan data — relevan karena Nexa juga menyediakan jasa data analysis, bukan sekadar dekorasi monospace |

**Aturan:**
- Line length body text < 80 karakter.
- Heading besar: berat (700–800), tracking sedikit rapat, **bukan** semua huruf besar (no ALL-CAPS labels).
- Jangan menebalkan/mewarnai satu kata saja dalam headline untuk "penekanan" — itu tanda template AI paling umum. Kalau perlu penekanan, pakai ukuran atau posisi, bukan gaya per-kata.
- Tidak ada label eyebrow ALL-CAPS di atas tiap heading ("OUR SERVICES" dsb). Judul section langsung to the point.

Skala tipe (rem, base 16px):
```
Display   : 3.5rem / 1.05 / 800
H1        : 2.5rem  / 1.1  / 700
H2        : 1.75rem / 1.2  / 700
Body      : 1rem    / 1.6  / 400
Caption   : 0.875rem/ 1.4  / 500
Mono/data : 0.875rem/ 1.4  / 500 (IBM Plex Mono)
```

---

## 4. Layout

Ide struktural: **diagonal sebagai garis bantu**, bukan grid simetris kotak-kotak identik (yang jadi ciri khas "SaaS card kit" AI). Layout mengalir mengikuti arah panah logo — kiri-bawah ke kanan-atas — bukan tumpukan section rata tengah yang seragam.

### Hero
```
┌───────────────────────────────────────────┐
│  NEXA                              [menu]  │
│                                             │
│  Kami bangun web,                          │
│  baca data,                                │
│  dan rancang game.        ┆                │
│                            ╲ (garis diagonal│
│  [satu kalimat penjelas]    tipis, gradien, │
│  [CTA: Mulai proyek]         mengarah ke    │
│                                portofolio)  │
└───────────────────────────────────────────┘
```
- Headline **tiga baris pendek**, satu layanan per baris (web / data / game) — bukan satu kalimat marketing panjang.
- Garis diagonal tipis (elemen dari logo) jadi satu-satunya elemen dekoratif di hero, mengarah ke section berikutnya secara visual.

### Services — tiga blok, bukan tiga kartu identik
Karena tiga layanan (web, data, game) punya karakter berbeda, jangan taruh dalam kartu seragam rounded-shadow. Beri tiap layanan **treatment visual sendiri**:
```
┌──────────────────────┬───────────────────────┐
│  WEB DEVELOPMENT      │   ░░ preview browser  │
│  teks kiri, align kiri│   frame miring 4°     │
├──────────────────────┼───────────────────────┤
│   ▁▃▅▇ grafik garis   │   DATA ANALYSIS       │
│   (data asli/nyata)   │   teks kanan          │
├──────────────────────┼───────────────────────┤
│  GAME DEVELOPMENT     │   ▢ sprite/isometric  │
│  teks kiri            │   mockup game          │
└──────────────────────┴───────────────────────┘
```
- Alignment berselang-seling kiri/kanan mengikuti gerak zig-zag panah logo, bukan semua center-align.
- Border-radius **tidak seragam sebagai default** — pilih tajam (0–4px) untuk section teknis (web/data), sedikit lebih lunak untuk game (karakter lebih playful). Perbedaan ini disengaja, bukan template satu radius untuk semua.

### Portofolio
Grid asimetris (1 kolom besar + 2 kecil), bukan grid rata 3 kolom identik. Studi kasus nyata > mockup placeholder generik.

### Footer
Sederhana: logo, 3 link layanan, kontak. Tidak perlu mega-footer 5 kolom kalau kontennya belum ada.

---

## 5. Komponen

- **Tombol**: teks aktif langsung — "Mulai proyek", "Lihat portofolio". Tidak ada tanda panah "→" ditempel di akhir teks tombol/link (ciri khas AI-gen).
- **Card portofolio**: 1 border tipis + judul + 1 baris hasil terukur (mis. "load time turun 40%"), bukan badge/tag warna-warni berlebihan.
- **Statistik**: angka besar pakai IBM Plex Mono, label di bawahnya body font kecil — dan hanya pakai kalau angkanya nyata, bukan angka isian ("99% client satisfaction" tanpa sumber).
- **Form kontak**: field minimal (nama, email, kebutuhan, pesan), validasi inline, tanpa ilustrasi 3D generik.

---

## 6. Motion

Satu momen animasi yang disengaja, bukan fade-slide-up di tiap section:
- Saat halaman dimuat: garis panah pada logo di hero "digambar" sekali (SVG stroke-dashoffset animation), lalu berhenti.
- Hover pada elemen interaktif (tombol, link portofolio) boleh transisi warna/posisi halus (150–200ms).
- Tidak ada animasi scroll-triggered di setiap section. Reduced-motion (`prefers-reduced-motion`) wajib dihormati — matikan animasi draw-in jika user set itu.

---

## 7. Yang Sengaja Dihindari (checklist anti-AI-slop)

- ❌ Background cream `#F4F1EA` + serif display + aksen terracotta.
- ❌ Background gelap total + satu aksen neon hijau/vermilion.
- ❌ Semua card rounded sama rata + shadow abu-abu seragam di semuanya.
- ❌ Label eyebrow ALL-CAPS di atas tiap heading.
- ❌ Angka urutan "01 / 02 / 03" pada konten yang bukan proses berurutan.
- ❌ Satu kata di-bold/di-warnai dalam headline sebagai "penekanan".
- ❌ Tanda panah "→" ditempel di akhir teks tombol/link.
- ❌ Fade-in + slide-up di setiap section saat scroll.
- ❌ Meta text dengan titik tengah ("Web · Data · Game").

---

## 8. Aksesibilitas (minimum)

- Kontras teks ≥ 4.5:1 di atas `--paper` maupun `--ink`.
- Fokus keyboard terlihat jelas (outline 2px `--blue`, bukan dihilangkan).
- Semua gambar/ikon punya alt text deskriptif, bukan "image1.png".
- Layout tetap utuh & terbaca di lebar 360px (mobile-first).
