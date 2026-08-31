<template>
  <div class="py-16 sm:py-20 bg-paper">
    <div class="max-w-5xl mx-auto px-6 space-y-14">
      
      <!-- Header Page -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-ink">
          Portofolio Proyek
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Berikut adalah beberapa proyek nyata yang telah kami bangun dan sudah beroperasi di lingkungan live production.
        </p>
      </div>

      <!-- Projects List (Clean, readable cards) -->
      <div class="space-y-8">
        
        <!-- Project 1: Lentera Indramayu -->
        <div class="bg-surface border border-muted-border rounded-lg p-8 space-y-6 hover:border-blue transition-all">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-muted-border pb-4">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span class="text-xs font-semibold uppercase tracking-wider text-blue">Platform Pemerintahan & PWA</span>
            </div>
            <span class="text-xs text-muted">Kategori: Web Development & Sistem Informasi</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl font-display font-bold text-ink">
                LENTERA — Pemerintah Kabupaten Indramayu
              </h2>
              <p class="text-muted text-sm sm:text-base leading-relaxed">
                Platform digital resmi Pemerintah Kabupaten Indramayu yang mengintegrasikan layanan publik, keterbukaan informasi, dan potensi ekonomi kerakyatan ke dalam satu ekosistem web yang responsif dan dapat diinstall sebagai Progressive Web App (PWA) di smartphone warga.
              </p>

              <div class="space-y-2 pt-2 text-xs sm:text-sm text-ink">
                <div class="flex items-start gap-2">
                  <span class="text-blue font-bold">✔</span>
                  <span>Integrasi informasi sektoral & layanan publik 24/7.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-blue font-bold">✔</span>
                  <span>Arsitektur ringan berbasis PWA untuk akses cepat dari koneksi mobile.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper border border-muted-border p-5 rounded space-y-4">
              <div class="space-y-2 text-xs">
                <div class="text-muted">Klien:</div>
                <div class="font-bold text-ink">Pemkab Indramayu</div>
                <div class="text-muted pt-2">Teknologi:</div>
                <div class="font-medium text-ink">Laravel, PWA, REST API, MySQL</div>
                <div class="text-muted pt-2">Status:</div>
                <div class="text-[#27C93F] font-bold">Aktif & Beroperasi</div>
              </div>

              <a 
                href="https://lentera.indramayukab.go.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-center bg-blue hover:bg-blue-hover text-white text-xs font-semibold py-2.5 px-4 rounded transition-all"
              >
                Buka Website Langsung
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2: Visit Gumiwang -->
        <div class="bg-surface border border-muted-border rounded-lg p-8 space-y-6 hover:border-cyan-dark transition-all">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-muted-border pb-4">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span class="text-xs font-semibold uppercase tracking-wider text-cyan-dark">Portal Desa Wisata & UMKM</span>
            </div>
            <span class="text-xs text-muted">Kategori: Web Profil & Promosi Komunitas</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl font-display font-bold text-ink">
                Visit Gumiwang — Pertanian, Perikanan & UMKM
              </h2>
              <p class="text-muted text-sm sm:text-base leading-relaxed">
                Website profil dan promosi potensi lokal Desa Gumiwang. Memuat informasi lengkap mengenai agrikultur, perikanan, keindahan alam, serta katalog etalase digital untuk produk-produk UMKM warga desa agar mudah ditemukan pembeli secara online.
              </p>

              <div class="space-y-2 pt-2 text-xs sm:text-sm text-ink">
                <div class="flex items-start gap-2">
                  <span class="text-cyan-dark font-bold">✔</span>
                  <span>Tampilan visual modern dengan optimasi gambar cepat.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-cyan-dark font-bold">✔</span>
                  <span>Katalog UMKM yang rapi dan terhubung ke kontak pengrajin/penjual.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper border border-muted-border p-5 rounded space-y-4">
              <div class="space-y-2 text-xs">
                <div class="text-muted">Klien:</div>
                <div class="font-bold text-ink">Desa Wisata Gumiwang</div>
                <div class="text-muted pt-2">Teknologi:</div>
                <div class="font-medium text-ink">Responsive Web, Vite, TailwindCSS</div>
                <div class="text-muted pt-2">Status:</div>
                <div class="text-[#27C93F] font-bold">Aktif & Beroperasi</div>
              </div>

              <a 
                href="https://visitgumiwang.web.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-center bg-cyan-dark hover:bg-cyan text-white text-xs font-semibold py-2.5 px-4 rounded transition-all"
              >
                Buka Website Langsung
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3: CatatKas -->
        <div class="bg-surface border border-muted-border rounded-lg p-8 space-y-6 hover:border-magenta transition-all">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-muted-border pb-4">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span class="text-xs font-semibold uppercase tracking-wider text-magenta">Aplikasi Finansial UMKM</span>
            </div>
            <span class="text-xs text-muted">Kategori: Web Application & Utilitas Bisnis</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl font-display font-bold text-ink">
                CatatKas — Pembukuan Keuangan Digital UMKM
              </h2>
              <p class="text-muted text-sm sm:text-base leading-relaxed">
                Aplikasi web ringan untuk membantu pelaku usaha mikro mencatat pemasukan dan pengeluaran harian tanpa kerumitan software akuntansi besar. Menghasilkan ringkasan laba-rugi instan dan laporan keuangan yang siap cetak atau unduh.
              </p>

              <div class="space-y-2 pt-2 text-xs sm:text-sm text-ink">
                <div class="flex items-start gap-2">
                  <span class="text-magenta font-bold">✔</span>
                  <span>Perhitungan otomatis saldo kas dan laporan transaksi periodik.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-magenta font-bold">✔</span>
                  <span>Antarmuka simpel tanpa menu membingungkan, ramah pengguna pemula.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper border border-muted-border p-5 rounded space-y-4">
              <div class="space-y-2 text-xs">
                <div class="text-muted">Kategori:</div>
                <div class="font-bold text-ink">Digital Productivity App</div>
                <div class="text-muted pt-2">Teknologi:</div>
                <div class="font-medium text-ink">Single Page App, TailwindCSS, Client Storage</div>
                <div class="text-muted pt-2">Status:</div>
                <div class="text-[#27C93F] font-bold">Aktif & Beroperasi</div>
              </div>

              <a 
                href="https://catatkas-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-center bg-magenta hover:bg-magenta/90 text-white text-xs font-semibold py-2.5 px-4 rounded transition-all"
              >
                Buka Web App Langsung
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Ajakan Bikin Proyek Serupa -->
      <div class="bg-surface border border-muted-border rounded-lg p-8 text-center space-y-4">
        <h3 class="text-xl font-display font-bold text-ink">Ingin Membangun Website atau Aplikasi Serupa?</h3>
        <p class="text-sm text-muted max-w-md mx-auto">Diskusikan kebutuhan ide proyek Anda bersama tim Nexa. Kami siap membantu dari tahap rancangan awal.</p>
        <div class="pt-2">
          <router-link to="/kontak" class="inline-block bg-blue text-white text-sm font-semibold px-6 py-3 rounded hover:bg-blue-hover transition-all">
            Mulai Diskusi Proyek
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>
