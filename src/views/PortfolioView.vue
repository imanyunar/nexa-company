<template>
  <div class="py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)] transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <p class="text-xs uppercase tracking-widest text-primary font-semibold">
          Karya &amp; Rekam Jejak
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-[-1.5px]">
          Koleksi Portofolio Nexa Agency
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Daftar website, aplikasi, dan media interaktif yang telah kami kembangkan secara custom untuk mewujudkan kehadiran digital yang orisinal dan fungsional.
        </p>
      </div>

      <div class="space-y-12 sm:space-y-16">
        
        <!-- 1. PixelCraft Studio (New Release) -->
        <div id="pixelcraft" class="card-dark portfolio-item p-6 sm:p-10 space-y-8 border-[rgba(166,0,255,0.3)] hover:border-violet/60 transition-colors">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="w-2.5 h-2.5 rounded-full bg-violet"></span>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-violet">WEB APP &amp; CLIENT-SIDE GPU</span>
            </div>
            <span class="text-xs font-mono text-[#999999]">WEBGL &amp; IN-BROWSER GPU</span>
          </div>

          <!-- Live Preview Window -->
          <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black">
            <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
              <span class="text-xs font-mono text-[#999999] truncate max-w-sm">https://pixelcraft-psi-blue.vercel.app/</span>
              <span class="text-[11px] font-mono font-medium text-violet shrink-0">WebGL &amp; AI</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/pixelcraft.png" 
                alt="PixelCraft Studio AI Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">PixelCraft Studio: Editor Foto &amp; Grafis Berbasis Web</h2>
              <p class="text-[#999999] text-base leading-relaxed">
                Aplikasi web photo editor yang memproses gambar langsung di browser pengguna. Menawarkan fitur penajaman gambar, pengurangan noise spasial, kompresi multi-format WebP/PNG, live RGB histogram, dan efek retro pixel art tanpa perlu unggah file ke server eksternal sehingga privasi terjaga 100%.
              </p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-violet shrink-0">check_circle</span>
                  <span>Privasi 100% Terjaga: Seluruh komputasi visual diproses lokal di peramban pengguna menggunakan akselerasi GPU &amp; WebGL.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-violet shrink-0">check_circle</span>
                  <span>Fitur Lengkap: Penajaman gambar, filter denoise, kompresi ukuran file, split before-after preview, dan color adjustment.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">TIPE PRODUK:</div>
                <div class="font-medium text-white text-sm">Web Application</div>
                <div class="text-[#666666] pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-white">WebGL, Canvas API, WASM, Tailwind, Vite</div>
              </div>
              <div class="pt-2">
                <a href="https://pixelcraft-psi-blue.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group bg-violet hover:bg-violet/85 border-violet">
                  <span>Buka PixelCraft Studio</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Lentera Indramayu -->
        <div class="card-dark portfolio-item p-6 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-primary">PLATFORM PEMERINTAHAN &amp; PWA</span>
            </div>
            <span class="text-xs font-mono text-[#999999]">PORTAL LAYANAN PUBLIK</span>
          </div>

          <!-- Live Preview Window -->
          <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black">
            <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
              <span class="text-xs font-mono text-[#999999] truncate max-w-sm">https://lentera.indramayukab.go.id/</span>
              <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">PWA Live</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/lentera.png" 
                alt="Lentera Indramayu Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">LENTERA — Pemerintah Kabupaten Indramayu</h2>
              <p class="text-[#999999] text-base leading-relaxed">
                Platform digital sentral Pemkab Indramayu yang mengintegrasikan layanan administrasi publik, keterbukaan informasi pemerintah, dan sektor ekonomi kerakyatan ke dalam satu Progressive Web App (PWA) yang tangguh.
              </p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Aksesibilitas layanan informasi publik terpusat 24/7.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Dukungan instalasi PWA praktis di perangkat smartphone tanpa perlu app store.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">INSTANSI:</div>
                <div class="font-medium text-white text-sm">Pemerintah Kabupaten Indramayu</div>
                <div class="text-[#666666] pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-white">Laravel, PWA, REST API, MySQL</div>
              </div>
              <div class="pt-2">
                <a href="https://lentera.indramayukab.go.id/" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group">
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Portal Desa Tempursari -->
        <div class="card-dark portfolio-item p-6 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-primary">PORTAL PEMERINTAH DESA &amp; PETA</span>
            </div>
            <span class="text-xs font-mono text-[#999999]">LIVE PRODUCTION ENVIRONMENT</span>
          </div>

          <!-- Live Preview Window -->
          <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black">
            <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
              <span class="text-xs font-mono text-[#999999] truncate max-w-sm">https://portal-desa-tempursari-six.vercel.app/</span>
              <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">Portal Resmi</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/tempursari.png" 
                alt="Portal Desa Tempursari Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Portal Desa Tempursari: Tata Kelola &amp; Peta Digital</h2>
              <p class="text-[#999999] text-base leading-relaxed">
                Website resmi Pemerintah Desa Tempursari yang dirancang untuk mewujudkan transparansi tata kelola wilayah, infografis data kependudukan, serta katalog kebudayaan dan potensi ekonomi desa.
              </p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Infografis visual kependudukan dan luas area administratif interaktif.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Peta batas wilayah interaktif dan etalase produk unggulan desa.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">INSTANSI:</div>
                <div class="font-medium text-white text-sm">Pemerintah Desa Tempursari</div>
                <div class="text-[#666666] pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-white">Next.js, TailwindCSS, Interactive Maps</div>
              </div>
              <div class="pt-2">
                <a href="https://portal-desa-tempursari-six.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group">
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Visit Gumiwang -->
        <div class="card-dark portfolio-item p-6 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-primary">DESA WISATA &amp; UMKM</span>
            </div>
            <span class="text-xs font-mono text-[#999999]">PORTAL WISATA &amp; EKONOMI</span>
          </div>

          <!-- Live Preview Window -->
          <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black">
            <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
              <span class="text-xs font-mono text-[#999999] truncate max-w-sm">https://visitgumiwang.web.id/</span>
              <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">Desa Wisata</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/visitgumiwang.png" 
                alt="Visit Gumiwang Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Visit Gumiwang: Potensi Wisata &amp; Produk UMKM</h2>
              <p class="text-[#999999] text-base leading-relaxed">
                Website promosi potensi lokal Desa Gumiwang. Menampilkan kekayaan alam, sektor perikanan, agrikultur terpadu, dan etalase digital katalog produk UMKM setempat.
              </p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Katalog produk UMKM terstruktur dengan kontak pemesanan cepat.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                  <span>Desain responsif yang sangat ringan diakses di koneksi internet desa.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">KLIEN:</div>
                <div class="font-medium text-white text-sm">Pengelola Desa Wisata Gumiwang</div>
                <div class="text-[#666666] pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-white">Vite, TailwindCSS, Fast CDN Deployment</div>
              </div>
              <div class="pt-2">
                <a href="https://visitgumiwang.web.id/" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group">
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. CatatKas -->
        <div class="card-dark portfolio-item p-6 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-secondary">APLIKASI KEUANGAN FLUTTER</span>
            </div>
            <span class="text-xs font-mono text-[#999999]">CROSS-PLATFORM APP</span>
          </div>

          <!-- Live Preview Window -->
          <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black">
            <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
              <span class="text-xs font-mono text-[#999999] truncate max-w-sm">https://catatkas-web.vercel.app/</span>
              <span class="text-[11px] font-mono font-medium text-secondary shrink-0">Flutter Web</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/catatkas.png" 
                alt="CatatKas UMKM Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">CatatKas: Pembukuan Keuangan Digital UMKM</h2>
              <p class="text-[#999999] text-base leading-relaxed">
                Aplikasi pencatatan kas harian bagi pelaku usaha mikro yang dibangun secara komprehensif menggunakan Flutter. Membantu pencatatan kas masuk dan keluar secara instan, kalkulasi saldo otomatis, dan pencetakan laporan laba rugi.
              </p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-secondary shrink-0">check_circle</span>
                  <span>Pencatatan mutasi kas dan perhitungan saldo laba rugi instan.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-secondary shrink-0">check_circle</span>
                  <span>Antarmuka bersih responsif dengan arsitektur Full Flutter &amp; Dart.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">TIPE PRODUK:</div>
                <div class="font-medium text-white text-sm">Aplikasi Mobile &amp; Web</div>
                <div class="text-[#666666] pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-white">Full Flutter, Dart, Local Storage</div>
              </div>
              <div class="pt-2">
                <a href="https://catatkas-web.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-accent w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group">
                  <span>Buka Aplikasi Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Card -->
      <div class="card-dark p-8 sm:p-12 text-center space-y-4">
        <h3 class="text-2xl sm:text-3xl font-display font-medium text-white">Ingin Mewujudkan Solusi Serupa?</h3>
        <p class="text-[#999999] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Diskusikan tantangan teknis Anda bersama tim Nexa Digital Agency untuk mendapatkan arsitektur dan estimasi terbaik.
        </p>
        <div class="pt-3">
          <router-link to="/kontak" class="btn-primary text-xs uppercase font-medium py-3.5 px-8 group inline-flex items-center gap-2">
            <span>Mulai Diskusi Proyek</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { observeScrollReveal } from '../utils/animations'

onMounted(() => {
  observeScrollReveal('.portfolio-item', { stagger: 150, distance: 50 })
})
</script>
