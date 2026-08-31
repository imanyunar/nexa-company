<template>
  <div class="py-16 sm:py-20 bg-paper">
    <div class="max-w-5xl mx-auto px-6 space-y-16">
      
      <!-- Header Page -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-ink">
          Layanan Kami
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Kami menyediakan tiga layanan utama yang dirancang untuk menjawab kebutuhan digital bisnis Anda secara nyata dan terukur.
        </p>
      </div>

      <!-- Service 1: Web Development -->
      <div class="bg-surface border border-muted-border rounded-lg p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded bg-blue-soft text-blue flex items-center justify-center text-2xl font-bold">
            🌐
          </div>
          <div>
            <h2 class="text-2xl font-display font-bold text-ink">1. Web Development</h2>
            <p class="text-xs text-muted">Website Profesional, Landing Page & Aplikasi Web</p>
          </div>
        </div>

        <p class="text-muted text-sm sm:text-base leading-relaxed">
          Kami membuat website yang tidak hanya menarik secara visual, tetapi juga cepat dimuat, aman, dan nyaman diakses di smartphone maupun desktop.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Company Profile & Landing Page</h3>
            <p class="text-xs text-muted leading-relaxed">Website perkenalan perusahaan, instansi, atau produk untuk membangun reputasi dan kredibilitas di mata publik.</p>
          </div>
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Sistem & Web Application Custom</h3>
            <p class="text-xs text-muted leading-relaxed">Aplikasi berbasis web untuk otomasi alur kerja internal, dashboard manajemen, hingga portal transaksi bisnis.</p>
          </div>
        </div>

        <div class="pt-4 border-t border-muted-border flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-muted">
            Teknologi: <b>Vue.js, Laravel, TailwindCSS, MySQL, PWA</b>
          </div>
          <router-link to="/kontak" class="text-sm font-semibold text-blue hover:underline">
            Konsultasikan Web Anda
          </router-link>
        </div>
      </div>

      <!-- Service 2: Data Analysis -->
      <div class="bg-surface border border-muted-border rounded-lg p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded bg-cyan/10 text-cyan-dark flex items-center justify-center text-2xl font-bold">
            📊
          </div>
          <div>
            <h2 class="text-2xl font-display font-bold text-ink">2. Data Analysis</h2>
            <p class="text-xs text-muted">Pengolahan Data, Dashboard & Insight Bisnis</p>
          </div>
        </div>

        <p class="text-muted text-sm sm:text-base leading-relaxed">
          Data bisnis Anda adalah aset berharga. Kami membantu merapikan, mengolah, dan menampilkan data operasional Anda dalam bentuk visual yang mudah dipahami oleh pengambil keputusan.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Dashboard Visualisasi Interaktif</h3>
            <p class="text-xs text-muted leading-relaxed">Tampilan grafik metrik penjualan, tren pasar, dan kinerja bisnis secara real-time yang mudah dibaca kapan saja.</p>
          </div>
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Laporan & Insight Strategis</h3>
            <p class="text-xs text-muted leading-relaxed">Analisis mendalam terhadap perilaku konsumen, efisiensi operasional, dan rekomendasi perbaikan berbasis angka.</p>
          </div>
        </div>

        <div class="pt-4 border-t border-muted-border flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-muted">
            Tools: <b>Python, SQL, PowerBI, Tableau, Excel Advance</b>
          </div>
          <router-link to="/kontak" class="text-sm font-semibold text-blue hover:underline">
            Konsultasikan Kebutuhan Data
          </router-link>
        </div>
      </div>

      <!-- Service 3: Game Development -->
      <div class="bg-surface border border-muted-border rounded-lg p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded bg-magenta-soft text-magenta flex items-center justify-center text-2xl font-bold">
            🎮
          </div>
          <div>
            <h2 class="text-2xl font-display font-bold text-ink">3. Game Development</h2>
            <p class="text-xs text-muted">Game 2D/3D untuk Edukasi, Promosi & Hiburan</p>
          </div>
        </div>

        <p class="text-muted text-sm sm:text-base leading-relaxed">
          Menciptakan pengalaman interaktif yang menyenangkan. Cocok untuk meningkatkan *engagement* audiens melalui permainan edukatif atau campaign promosi brand.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Gamifikasi Promosi Brand</h3>
            <p class="text-xs text-muted leading-relaxed">Mini-game interaktif berbasis web (browser) yang seru untuk menarik perhatian pelanggan dan meningkatkan loyalitas.</p>
          </div>
          <div class="bg-paper p-4 rounded border border-muted-border/60">
            <h3 class="font-bold text-sm text-ink mb-1">Game Edukasi & Simulasi</h3>
            <p class="text-xs text-muted leading-relaxed">Media pembelajaran interaktif untuk sekolah, pelatihan institusi, maupun kebutuhan hiburan mandiri.</p>
          </div>
        </div>

        <div class="pt-4 border-t border-muted-border flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-muted">
            Engine: <b>Unity (2D/3D), C#, WebGL/WebGPU</b>
          </div>
          <router-link to="/kontak" class="text-sm font-semibold text-blue hover:underline">
            Konsultasikan Game Anda
          </router-link>
        </div>
      </div>

      <!-- Alur Kerja Kami yang Simpel -->
      <div class="bg-paper border border-muted-border rounded-lg p-8 space-y-8">
        <div class="text-center max-w-xl mx-auto">
          <h2 class="text-2xl font-display font-bold text-ink">Bagaimana Kami Bekerja</h2>
          <p class="text-xs sm:text-sm text-muted mt-1">Alur kerja sederhana dan transparan dari awal hingga selesai.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div class="space-y-2">
            <div class="text-blue font-mono font-bold text-xl">01</div>
            <h3 class="font-bold text-sm text-ink">Diskusi Kebutuhan</h3>
            <p class="text-xs text-muted leading-relaxed">Kami mendengarkan target proyek, fitur yang dibutuhkan, dan anggaran Anda.</p>
          </div>
          <div class="space-y-2">
            <div class="text-blue font-mono font-bold text-xl">02</div>
            <h3 class="font-bold text-sm text-ink">Perancangan</h3>
            <p class="text-xs text-muted leading-relaxed">Menyusun struktur layout, alur sistem, dan prototype visual awal.</p>
          </div>
          <div class="space-y-2">
            <div class="text-blue font-mono font-bold text-xl">03</div>
            <h3 class="font-bold text-sm text-ink">Pengembangan</h3>
            <p class="text-xs text-muted leading-relaxed">Pengerjaan kode yang bersih, cepat, dan pengujian fungsi secara teliti.</p>
          </div>
          <div class="space-y-2">
            <div class="text-blue font-mono font-bold text-xl">04</div>
            <h3 class="font-bold text-sm text-ink">Peluncuran & Support</h3>
            <p class="text-xs text-muted leading-relaxed">Deploy ke server live dan pendampingan teknis saat digunakan.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
