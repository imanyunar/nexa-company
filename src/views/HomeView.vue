<template>
  <div>
    <!-- Hero Section: Bersih, Ramah, Tanpa Jargon Berlebihan -->
    <section class="py-20 sm:py-28 bg-paper">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Teks Utama -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-muted-border rounded text-xs font-medium text-blue">
              <span class="w-2 h-2 rounded-full bg-blue"></span>
              Studio Web, Data & Game
            </div>

            <h1 class="text-4xl sm:text-5xl font-display font-bold text-ink leading-tight tracking-tight">
              Membangun Solusi Digital yang Bekerja & Berdampak.
            </h1>

            <p class="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Nexa membantu bisnis, UMKM, dan instansi mewujudkan kehadiran digital melalui pembuatan website profesional, pengolahan data praktis, serta game interaktif yang menarik.
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <router-link 
                to="/portofolio" 
                class="bg-blue hover:bg-blue-hover text-white text-sm font-semibold px-6 py-3.5 rounded-[4px] transition-all hover:translate-y-[-1px]"
              >
                Lihat Portofolio Kami
              </router-link>
              <router-link 
                to="/kontak" 
                class="bg-surface hover:bg-white text-ink text-sm font-semibold px-6 py-3.5 rounded-[4px] border border-muted-border hover:border-ink/20 transition-all"
              >
                Konsultasi Kebutuhan
              </router-link>
            </div>
          </div>

          <!-- Logo & Brand Visual Card -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-sm bg-surface border border-muted-border rounded-lg p-8 text-center space-y-4">
              <img 
                src="/assets/logo.png" 
                alt="Nexa Logo" 
                class="w-32 h-32 mx-auto object-contain transition-transform hover:scale-105 duration-300"
              />
              <div>
                <h3 class="font-display font-bold text-xl text-ink">Nexa Agency</h3>
                <p class="text-xs text-muted mt-1">Solusi Digital, Analisis Data & Media Interaktif</p>
              </div>
              <div class="pt-4 border-t border-muted-border flex justify-around text-center">
                <div>
                  <div class="font-bold text-ink text-lg">3+</div>
                  <div class="text-[11px] text-muted">Layanan Utama</div>
                </div>
                <div class="w-px bg-muted-border"></div>
                <div>
                  <div class="font-bold text-ink text-lg">100%</div>
                  <div class="text-[11px] text-muted">Dedikasi Proyek</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Ringkasan 3 Layanan Utama -->
    <section class="py-20 bg-surface border-t border-muted-border">
      <div class="max-w-6xl mx-auto px-6 space-y-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-ink">
              Apa yang Kami Kerjakan
            </h2>
            <p class="text-muted text-sm sm:text-base mt-1">
              Fokus keahlian kami untuk membantu mengembangkan visi Anda.
            </p>
          </div>
          <router-link to="/layanan" class="text-sm font-semibold text-blue hover:underline self-start sm:self-auto">
            Pelajari semua layanan
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Web Dev -->
          <div class="bg-paper border border-muted-border rounded-lg p-6 space-y-4 flex flex-col justify-between hover:border-blue transition-all">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded bg-blue-soft text-blue flex items-center justify-center font-bold text-lg">
                🌐
              </div>
              <h3 class="text-lg font-display font-bold text-ink">Web Development</h3>
              <p class="text-muted text-sm leading-relaxed">
                Pembuatan website company profile, landing page promosi, web app, dan sistem kustom yang cepat serta mudah dikelola.
              </p>
            </div>
            <router-link to="/layanan" class="text-xs font-semibold text-blue hover:underline pt-2">
              Selengkapnya
            </router-link>
          </div>

          <!-- Data Analysis -->
          <div class="bg-paper border border-muted-border rounded-lg p-6 space-y-4 flex flex-col justify-between hover:border-cyan-dark transition-all">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded bg-cyan/10 text-cyan-dark flex items-center justify-center font-bold text-lg">
                📊
              </div>
              <h3 class="text-lg font-display font-bold text-ink">Data Analysis</h3>
              <p class="text-muted text-sm leading-relaxed">
                Pengolahan data bisnis, pembuatan dashboard visual, dan interpretasi insight agar keputusan bisnis didasarkan pada fakta.
              </p>
            </div>
            <router-link to="/layanan" class="text-xs font-semibold text-cyan-dark hover:underline pt-2">
              Selengkapnya
            </router-link>
          </div>

          <!-- Game Dev -->
          <div class="bg-paper border border-muted-border rounded-lg p-6 space-y-4 flex flex-col justify-between hover:border-magenta transition-all">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded bg-magenta-soft text-magenta flex items-center justify-center font-bold text-lg">
                🎮
              </div>
              <h3 class="text-lg font-display font-bold text-ink">Game Development</h3>
              <p class="text-muted text-sm leading-relaxed">
                Pembuatan game 2D/3D untuk kebutuhan promosi interaktif brand, simulasi edukasi, maupun hiburan komersial.
              </p>
            </div>
            <router-link to="/layanan" class="text-xs font-semibold text-magenta hover:underline pt-2">
              Selengkapnya
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlight Portofolio Nyata -->
    <section class="py-20 bg-paper border-t border-muted-border">
      <div class="max-w-6xl mx-auto px-6 space-y-10">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-ink">
              Portofolio Terbaru
            </h2>
            <p class="text-muted text-sm sm:text-base mt-1">
              Beberapa proyek nyata yang sudah aktif digunakan.
            </p>
          </div>
          <router-link to="/portofolio" class="text-sm font-semibold text-blue hover:underline self-start sm:self-auto">
            Lihat semua proyek
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Project 1: Lentera -->
          <div class="bg-surface border border-muted-border rounded-lg p-6 flex flex-col justify-between hover:border-ink/20 transition-all">
            <div class="space-y-3">
              <span class="text-xs font-semibold text-blue bg-blue-soft px-2.5 py-1 rounded">Pemkab Indramayu</span>
              <h3 class="text-lg font-display font-bold text-ink">LENTERA Indramayu</h3>
              <p class="text-muted text-sm leading-relaxed">
                Portal informasi dan layanan terpadu berbasis PWA untuk masyarakat Kabupaten Indramayu.
              </p>
            </div>
            <div class="pt-5 border-t border-muted-border mt-5 flex items-center justify-between">
              <span class="text-xs text-muted">Website Resmi</span>
              <a 
                href="https://lentera.indramayukab.go.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-xs font-semibold text-blue hover:underline"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <!-- Project 2: Visit Gumiwang -->
          <div class="bg-surface border border-muted-border rounded-lg p-6 flex flex-col justify-between hover:border-ink/20 transition-all">
            <div class="space-y-3">
              <span class="text-xs font-semibold text-cyan-dark bg-cyan/10 px-2.5 py-1 rounded">Desa Wisata & UMKM</span>
              <h3 class="text-lg font-display font-bold text-ink">Visit Gumiwang</h3>
              <p class="text-muted text-sm leading-relaxed">
                Website promosi potensi agrikultur, perikanan, wisata alam, dan katalog produk UMKM Desa Gumiwang.
              </p>
            </div>
            <div class="pt-5 border-t border-muted-border mt-5 flex items-center justify-between">
              <span class="text-xs text-muted">Portal Desa</span>
              <a 
                href="https://visitgumiwang.web.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-xs font-semibold text-blue hover:underline"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <!-- Project 3: CatatKas -->
          <div class="bg-surface border border-muted-border rounded-lg p-6 flex flex-col justify-between hover:border-ink/20 transition-all">
            <div class="space-y-3">
              <span class="text-xs font-semibold text-magenta bg-magenta-soft px-2.5 py-1 rounded">Aplikasi Finansial</span>
              <h3 class="text-lg font-display font-bold text-ink">CatatKas UMKM</h3>
              <p class="text-muted text-sm leading-relaxed">
                Aplikasi pembukuan keuangan digital sederhana untuk mencatat kas masuk, kas keluar, dan laba-rugi.
              </p>
            </div>
            <div class="pt-5 border-t border-muted-border mt-5 flex items-center justify-between">
              <span class="text-xs text-muted">Web App</span>
              <a 
                href="https://catatkas-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-xs font-semibold text-blue hover:underline"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Banner CTA Sederhana -->
    <section class="py-16 bg-blue text-white">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-display font-bold text-white">
          Punya Rencana Proyek atau Ingin Diskusi?
        </h2>
        <p class="text-blue-soft text-base max-w-xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan website, data, atau game Anda secara gratis bersama tim kami.
        </p>
        <div class="pt-2">
          <router-link 
            to="/kontak" 
            class="inline-block bg-white text-blue hover:bg-paper text-sm font-semibold px-8 py-3.5 rounded-[4px] transition-all hover:translate-y-[-1px]"
          >
            Hubungi Kami Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
