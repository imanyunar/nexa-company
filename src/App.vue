<template>
  <div class="min-h-screen flex flex-col bg-base text-white relative selection:bg-cyan selection:text-black">
    <!-- Continuous Ambient Animated Background (Particles + Aurora Orbs) -->
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
/* Smooth page transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
