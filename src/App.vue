<template>
  <div class="min-h-screen flex flex-col bg-black text-white relative selection:bg-primary selection:text-white">
    <!-- Continuous Ambient Animated Background (Reinvented with Accenture Accents) -->
    <AmbientBackground />

    <!-- Navbar -->
    <Navbar class="relative z-50" />

    <!-- Active Page Content with Route Transition -->
    <main class="flex-grow relative z-10">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <Footer class="relative z-20" />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AmbientBackground from './components/AmbientBackground.vue'
</script>

<style>
/* Premium page transition */
.page-fade-enter-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-leave-active {
  transition: opacity 0.2s ease-out,
              transform 0.2s ease-out;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
