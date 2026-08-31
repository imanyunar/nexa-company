---
version: 1.0
name: Nexa-Design-System
description: |
  A three-surface marketing and digital agency system organized around alternating Dark Canvas, Light Canvas, and Nexa Blue chapters. Each section has a single editorial purpose — hero vision, web engineering showcase, data intelligence pipeline, interactive game media, and client case study rails. The chrome is exceptionally calm and confident: signature Nexa Blue (`#3A4CE0`) carries primary CTAs as fully-rounded pills, display copy renders at a light weight (300) for an airy, premium editorial feel, and a crisp 8px-radius secondary card system carries project info on either canvas mode. The system never decorates arbitrarily — imagery and real production case studies do the storytelling.

colors:
  primary: "#3A4CE0"
  primary-pressed: "#2F3EB8"
  primary-active: "#253299"
  on-primary: "#ffffff"
  cyan: "#17C3F2"
  cyan-pressed: "#0EA2CC"
  magenta: "#E620C5"
  magenta-pressed: "#C410A5"
  violet: "#8A2BE2"
  link-light: "#3A4CE0"
  link-dark: "#42D1F7"
  
  ink: "#0B0E2B"
  ink-deep: "#07091D"
  ink-elevated: "#131842"
  charcoal: "#181B34"
  body-light: "rgba(11,14,43,0.7)"
  mute-light: "#5B6072"
  ash-light: "rgba(11,14,43,0.12)"
  
  body-dark: "rgba(255,255,255,0.75)"
  mute-dark: "rgba(246,247,251,0.6)"
  ash-dark: "rgba(255,255,255,0.15)"
  
  canvas-light: "#F6F7FB"
  surface-light: "#FFFFFF"
  surface-card: "#FFFFFF"
  surface-filter: "rgba(11,14,43,0.05)"
  
  canvas-dark: "#0B0E2B"
  surface-dark-elevated: "#131842"
  surface-dark-card: "#181B34"
  
  hairline-light: "rgba(11,14,43,0.08)"
  hairline-dark: "rgba(255,255,255,0.12)"
  on-dark: "#ffffff"
  on-dark-mute: "#9CA3AF"

typography:
  display-xl:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: -0.5px
  display-lg:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: -0.2px
  display-md:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 35px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0
  heading-xl:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: 0
  heading-lg:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  heading-md:
    fontFamily: Cabinet Grotesk, Plus Jakarta Sans, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  body-md:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1px
  body-strong:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  body-sm:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-md:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  mono-metric:
    fontFamily: IBM Plex Mono, monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button-lg:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.3px
  button-md:
    fontFamily: Satoshi, Inter, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
  button-action:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.ash-light}"
    padding: 14px 32px
    height: 48px
  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.hairline-dark}"
    padding: 14px 32px
    height: 48px
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline-light}"
    padding: 32px
  product-card-dark:
    backgroundColor: "{colors.surface-dark-card}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline-dark}"
    padding: 32px
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  hero-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  hero-band-blue:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  footer-section:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 48px 32px
---

# Design System — Nexa (PlayStation Architecture Adaptation)

Panduan desain Nexa mengadopsi arsitektur **Three-Surface Chapter System** dengan ritme full-bleed band yang bersih, tenang, dan sinematik:

1. **Tiga Kanvas Utama (Alternating Chapters):**
   - **Canvas Dark** (`#0B0E2B`): Kanvas gelap elegan untuk momen hero utama, showcase game interaktif, dan arsitektur data.
   - **Canvas Light** (`#F6F7FB` / `#FFFFFF`): Kanvas terang yang bersih dan airy untuk daftar layanan, showcase portofolio nyata, dan informasi tim.
   - **Nexa Blue Band** (`#3A4CE0`): Kanvas penutup berenergi tinggi untuk footer dan CTA tindakan penting ("Mulai Proyek").

2. **Tipografi Ringan (Light Weight 300):**
   - Menggunakan headline display dengan bobot **Light (300)** untuk menciptakan kesan eksklusif, lapang (*airy*), dan berkelas.
   - Angka data menggunakan **IBM Plex Mono**.
   - Body copy menggunakan **Satoshi / Inter** pada ukuran 16–18px dengan line-height 1.5.

3. **Bentuk & Komponen:**
   - **Pill Buttons (`rounded-full` / 9999px):** Digunakan untuk seluruh tombol utama dan sekunder (Nexa Blue `#3A4CE0`, Aksen Magenta `#E620C5`, atau Outline).
   - **8px Radius Cards (`rounded-md` / 8px):** Seluruh kartu studi kasus dan fitur menggunakan radius 8px dengan garis hairline 1px halus, tanpa resting drop-shadows berlebihan.
   - **Ritme Spasi 96px (`spacing.section`):** Pergantian antar chapter mengalir tegas tanpa elemen pemisah dekoratif berlebihan.
