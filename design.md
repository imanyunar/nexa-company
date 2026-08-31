---
version: 2.0
name: Nexa-Unified-Design-System
description: |
  A unified, cohesive Dark Studio system organized around a signature Deep Indigo canvas (`#0B0E2B`), elevated card surfaces (`#151A48`), and Nexa brand accents (Nexa Blue `#3A4CE0`, Cyan `#17C3F2`, and Magenta `#E620C5`). The theme is 100% consistent across all pages and sections without disjointed alternating black-and-white stripes.

colors:
  theme-base: "#0B0E2B"
  theme-elevated: "#11153B"
  theme-card: "#151A48"
  theme-card-hover: "#1B215C"
  
  primary: "#3A4CE0"
  primary-pressed: "#2F3EB8"
  cyan: "#17C3F2"
  cyan-pressed: "#0EA2CC"
  magenta: "#E620C5"
  magenta-pressed: "#C410A5"
  violet: "#8A2BE2"
  
  theme-text: "#FFFFFF"
  theme-text-muted: "rgba(255, 255, 255, 0.72)"
  theme-text-faint: "rgba(255, 255, 255, 0.45)"
  theme-border: "rgba(255, 255, 255, 0.10)"
  theme-border-hover: "rgba(23, 195, 242, 0.35)"

typography:
  display-xl:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.15
  display-lg:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.25
  heading-xl:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.3
  body-md:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  mono-metric:
    fontFamily: IBM Plex Mono, monospace
    fontSize: 16px
    fontWeight: 500

rounded:
  card: 8px
  pill: 9999px

components:
  card-unified:
    backgroundColor: "{colors.theme-card}"
    textColor: "{colors.theme-text}"
    rounded: "{rounded.card}"
    border: "1px solid {colors.theme-border}"
  btn-pill-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
---

# Nexa Unified Design System

Website Nexa menggunakan satu tema studio yang **100% konsisten, elegan, dan harmonis** di seluruh halaman dan bagian:

1. **Kanvas Studio Terpadu:**
   - Background utama: Deep Indigo `#0B0E2B`
   - Section bertingkat: Elevated Indigo `#11153B`
   - Kartu komponen: Card Surface `#151A48` dengan garis batas halus `rgba(255,255,255,0.10)`
   - Tidak ada lagi perpindahan warna hitam-putih yang kontras secara tiba-tiba antar section.

2. **Tipografi & Kontras:**
   - Judul utama menggunakan **Light Weight (300)** dengan warna putih murni `#FFFFFF`.
   - Body copy menggunakan warna putih dengan transparansi lembut `rgba(255, 255, 255, 0.72)`.
   - Angka dan label teknis menggunakan aksen **Cyan `#17C3F2`** dan **Magenta `#E620C5`**.

3. **Komponen Konsisten:**
   - **Pill Buttons (`rounded-full`):** Tombol aksi utama *Nexa Blue* `#3A4CE0` dan sekunder outline gelap.
   - **8px Radius Cards (`rounded-lg`):** Seluruh kartu layanan dan portofolio dengan hover glow biru/cyan yang halus.
   - **Preview Website:** Mockup browser terintegrasi langsung di dalam kartu portofolio.
