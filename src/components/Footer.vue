<template>
  <footer 
    class="w-full mt-auto border-t transition-colors duration-300 relative z-20"
    :class="isDark 
      ? 'bg-[#0b0e11] border-[#2a2d31] text-[#f4f0ea]' 
      : 'bg-[#f8f9ff]/90 backdrop-blur-md border-slate-200 text-[#161c24] shadow-[0_1px_12px_rgba(0,0,0,0.03)]'"
  >
    <div class="max-w-7xl mx-auto px-6 py-16 sm:py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b" :class="isDark ? 'border-[#2a2d31]' : 'border-slate-200'">
        
        <!-- Column 1: Brand Info -->
        <div class="md:col-span-5 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img 
              src="/assets/logo.png" 
              alt="Nexa Logo" 
              class="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(194,57,216,0.35)]" 
            />
            <span class="font-headline font-bold text-2xl tracking-tight" :class="isDark ? 'text-white' : 'text-[#161c24]'">
              nexa<span :class="isDark ? 'text-stitch-magenta-light' : 'text-violet-600'">.</span>
            </span>
          </div>
          <p class="text-sm leading-relaxed max-w-sm" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">
            Studio rekayasa digital &amp; arsitektur produk perangkat lunak presisi tinggi. Mengembangkan platform web, aplikasi mobile, dan identitas digital kustom tanpa kompromi performa.
          </p>
          <div class="text-xs uppercase tracking-wider font-semibold mt-1" :class="isDark ? 'text-stitch-magenta' : 'text-fuchsia-700'">
            "Your brand deserves better than 'basic'."
          </div>
          <span class="text-xs uppercase tracking-wider mt-2 font-mono" :class="isDark ? 'text-[#646a74]' : 'text-[#75777b]'">
            &copy; {{ new Date().getFullYear() }} Nexa Digital Agency. Hak Cipta Dilindungi.
          </span>
        </div>

        <!-- Column 2: Navigasi -->
        <div class="md:col-span-2 flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-wider" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">Navigasi</span>
          <nav class="flex flex-col gap-2.5 text-sm">
            <router-link to="/" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Beranda</router-link>
            <router-link to="/portofolio" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Karya</router-link>
            <router-link to="/layanan" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Layanan</router-link>
            <router-link to="/kegiatan" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Kegiatan</router-link>
            <router-link to="/tentang" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Proses</router-link>
            <router-link to="/kontak" class="transition-colors" :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'">Kontak</router-link>
          </nav>
        </div>

        <!-- Column 3: Koneksi Sosial -->
        <div class="md:col-span-2 flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-wider" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">Koneksi</span>
          <div class="flex flex-col gap-3 text-sm">
            <a 
              href="https://www.instagram.com/nexalife.id/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 transition-colors group"
              :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'"
            >
              <svg 
                class="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" 
                :class="isDark ? 'text-stitch-magenta-light' : 'text-fuchsia-600'"
                viewBox="0 0 24 24" 
                aria-label="Instagram"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.441-1.44z"/>
              </svg>
              <span>@nexalife.id</span>
            </a>
            <a 
              href="https://www.tiktok.com/@nexalife.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 transition-colors group"
              :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'"
            >
              <svg 
                class="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" 
                :class="isDark ? 'text-stitch-cyan-light' : 'text-sky-600'"
                viewBox="0 0 24 24" 
                aria-label="TikTok"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.91-4.47V8.5a8.28 8.28 0 0 0 4.86 1.57v-3.38z"/>
              </svg>
              <span>@nexalife.id</span>
            </a>
            <a 
              href="https://wa.me/62895800286901" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 transition-colors group"
              :class="isDark ? 'text-[#9d9fa6] hover:text-white' : 'text-[#44474a] hover:text-[#161c24]'"
            >
              <svg 
                class="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" 
                :class="isDark ? 'text-emerald-400' : 'text-emerald-600'"
                viewBox="0 0 24 24" 
                aria-label="WhatsApp"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Column 4: Inisiasi Proyek -->
        <div class="md:col-span-3 flex flex-col gap-3">
          <span class="text-xs font-semibold uppercase tracking-wider" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">Inisiasi Proyek</span>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">
            Diskusikan kebutuhan arsitektur digital dan kolaborasi studio bersama tim perancang.
          </p>
          <a 
            href="mailto:nexadigitalagency40@gmail.com" 
            class="text-sm font-semibold hover:underline inline-flex items-center gap-1.5 transition-colors pt-1"
            :class="isDark ? 'text-white hover:text-stitch-cyan-light' : 'text-[#161c24] hover:text-stitch-purple'"
          >
            <span>nexadigitalagency40@gmail.com</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <div class="pt-2">
            <a 
              href="https://wa.me/62895800286901?text=Halo%20Nexa,%20saya%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              :class="isDark ? 'bg-white text-[#111417] hover:bg-[#e6e2dc]' : 'bg-[#111417] text-white hover:bg-[#2d3139]'"
            >
              <span>Chat WhatsApp</span>
              <span class="material-symbols-outlined text-[14px]">chat</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono" :class="isDark ? 'text-[#646a74]' : 'text-[#75777b]'">
        <div>Remote-First Digital Studio · Indonesia</div>
        <div class="flex items-center gap-4">
          <span>Zero Slop Architecture</span>
          <span>·</span>
          <span>Swiss Editorial Precision</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { isDark } from '../utils/theme'
</script>
