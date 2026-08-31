<p align="center">
  <img src="./assets/logo.png" alt="Nexa Logo" width="220">
</p>

<h1 align="center">Nexa — Web Profile Agency</h1>

<p align="center">
  Company profile website untuk agency IT yang bergerak di bidang <b>Web Development</b>, <b>Data Analysis</b>, dan <b>Game Development</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-in%20development-yellow" alt="status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="license">
</p>

---

## 📖 Tentang Nexa

**Nexa** adalah agency IT yang membantu bisnis membangun kehadiran digital dan mengambil keputusan berbasis data. Kami fokus pada tiga layanan utama:

- 🌐 **Web Development** — pembuatan website company profile, landing page, web app, hingga sistem custom (Laravel, Vue.js, dsb).
- 📊 **Data Analysis** — pengolahan, visualisasi, dan interpretasi data untuk mendukung pengambilan keputusan bisnis.
- 🎮 **Game Development** — pengembangan game 2D/3D untuk kebutuhan hiburan maupun edukasi (Unity).

Repositori ini berisi source code untuk website company profile Nexa — media promosi digital yang menampilkan layanan, portofolio, tim, dan kontak agency.

---

## ✨ Fitur Website

- [x] **Hero Section**: 3-line headline dengan SVG diagonal path drawing animation menggunakan [Anime.js](https://animejs.com/).
- [x] **Tiga Blok Layanan Spesialis**:
  - Web Development (browser preview miring 4° + reactive state)
  - Data Analysis (SVG line chart & pipeline metrics)
  - Game Development (interactive mini-canvas game controls)
- [x] **Portofolio Asimetris**: 1 studi kasus besar + 2 studi kasus pendukung dengan metrik hasil terukur.
- [x] **Metrik Kinerja & Akuntabilitas**: Angka performa teknis dalam `IBM Plex Mono`.
- [x] **Form Konsultasi Terintegrasi**: Direct WhatsApp generator & Email inquiries.
- [x] **Desain Bebas Ciri Khas Template AI**: Berdasarkan panduan [design.md](design.md) (warna gradien logo, font Cabinet Grotesk & Satoshi, no generic shadows).
- [x] **Responsive Mobile-First & Aksesibilitas WCAG** (`outline 2px #3A4CE0`).

---

## 🛠️ Tech Stack

| Layer | Teknologi |
| --- | --- |
| **Framework & Bundler** | [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) (Custom Nexa Tokens) |
| **Animation Engine** | [Anime.js](https://animejs.com/) |
| **Typography** | Cabinet Grotesk, Satoshi, IBM Plex Mono |
| **Icons & Media** | Lucide Icons, Clean SVG Components |

---

## 📁 Struktur Folder

```text
nexa-company/
├── assets/                  # Logo dan visual assets
├── src/
│   ├── components/
│   │   ├── Navbar.vue       # Header & navigasi responsif
│   │   ├── HeroSection.vue  # Hero dengan Anime.js SVG path drawing
│   │   ├── ServicesSection.vue # 3 blok layanan dengan visual unik
│   │   ├── PortfolioSection.vue# Asymmetrical portfolio grid
│   │   ├── MetricsSection.vue  # Metrik performa IBM Plex Mono
│   │   ├── ContactSection.vue  # Form konsultasi & WhatsApp direct
│   │   └── Footer.vue       # Minimal 3-service footer
│   ├── App.vue              # Main Vue application
│   ├── main.js              # Vue entrypoint
│   └── style.css            # Design tokens & base styles
├── design.md                # Dokumentasi Design System Nexa
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Menjalankan Proyek

```bash
# 1. Clone repository
git clone https://github.com/imanyunar/nexa-company.git
cd nexa-company

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Build untuk produksi
npm run build
```

---

## 🎯 Layanan Kami

### 🌐 Web Development
Pembuatan website profesional, landing page, hingga web app custom sesuai kebutuhan bisnis klien.

### 📊 Data Analysis
Analisis data bisnis, dashboard visualisasi, dan laporan insight untuk mendukung strategi berbasis data.

### 🎮 Game Development
Pengembangan game 2D/3D untuk kebutuhan komersial maupun edukasi menggunakan engine modern.

---

## 👥 Tim

| Nama | Peran |
| --- | --- |
| - | Founder / Full-stack Developer |
| - | - |

---

## 📬 Kontak

- 🌐 **Website:** -
- 📧 **Email:** -
- 💬 **WhatsApp:** -
- 📷 **Instagram:** -

---

## 📄 Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE) — bebas digunakan dan dimodifikasi dengan tetap mencantumkan atribusi.
