<template>
  <div class="py-16 sm:py-20 bg-paper">
    <div class="max-w-4xl mx-auto px-6 space-y-14">
      
      <!-- Header Page -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-ink">
          Tentang Nexa
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Agency teknologi independen yang fokus pada kualitas pengerjaan, kejujuran komunikasi, dan hasil yang benar-benar bermanfaat.
        </p>
      </div>

      <!-- Cerita & Misi -->
      <div class="bg-surface border border-muted-border rounded-lg p-8 sm:p-10 space-y-6">
        <h2 class="text-2xl font-display font-bold text-ink">Siapa Kami</h2>
        <p class="text-muted text-sm sm:text-base leading-relaxed">
          Nexa berawal dari komitmen untuk membantu pemilik bisnis, pengelola komunitas desa, dan instansi agar memiliki infrastruktur digital yang handal tanpa proses yang berbelit-belit.
        </p>
        <p class="text-muted text-sm sm:text-base leading-relaxed">
          Kami percaya bahwa teknologi terbaik bukanlah yang paling rumit atau penuh istilah asing, melainkan teknologi yang <b>mudah digunakan</b>, <b>cepat diakses</b>, dan <b>memberikan solusi nyata</b> terhadap masalah sehari-hari.
        </p>
      </div>

      <!-- Nilai & Prinsip Kerja -->
      <div class="space-y-6">
        <h2 class="text-2xl font-display font-bold text-ink text-center">Prinsip Kerja Kami</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-surface border border-muted-border p-6 rounded-lg space-y-3">
            <div class="w-10 h-10 rounded bg-blue-soft text-blue flex items-center justify-center font-bold text-lg">
              ⚡
            </div>
            <h3 class="font-bold text-base text-ink">Kecepatan & Performa</h3>
            <p class="text-xs text-muted leading-relaxed">
              Website dan sistem yang kami bangun dioptimasi agar ringan, cepat dibuka di berbagai perangkat dan koneksi internet.
            </p>
          </div>

          <div class="bg-surface border border-muted-border p-6 rounded-lg space-y-3">
            <div class="w-10 h-10 rounded bg-cyan/10 text-cyan-dark flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h3 class="font-bold text-base text-ink">Tepat Guna</h3>
            <p class="text-xs text-muted leading-relaxed">
              Kami menyusun fitur sesuai kebutuhan riil Anda, tidak memaksakan hal yang tidak perlu agar biaya dan waktu tetap efisien.
            </p>
          </div>

          <div class="bg-surface border border-muted-border p-6 rounded-lg space-y-3">
            <div class="w-10 h-10 rounded bg-magenta-soft text-magenta flex items-center justify-center font-bold text-lg">
              🤝
            </div>
            <h3 class="font-bold text-base text-ink">Komunikasi Terbuka</h3>
            <p class="text-xs text-muted leading-relaxed">
              Transparansi progres pengerjaan dan pendampingan teknis yang ramah serta mudah dihubungi kapan saja.
            </p>
          </div>
        </div>
      </div>

      <!-- Ajakan Kerja Sama -->
      <div class="bg-blue text-white rounded-lg p-8 sm:p-10 text-center space-y-5">
        <h2 class="text-2xl font-display font-bold text-white">Mari Berkolaborasi Bersama Kami</h2>
        <p class="text-blue-soft text-sm max-w-lg mx-auto leading-relaxed">
          Siap mendiskusikan ide Anda? Hubungi kami untuk konsultasi santai dan dapatkan masukan teknis terbaik untuk proyek Anda.
        </p>
        <div class="pt-2">
          <router-link to="/kontak" class="inline-block bg-white text-blue font-semibold text-sm px-6 py-3 rounded hover:bg-paper transition-all">
            Halaman Kontak
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>
