<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink selection:bg-blue selection:text-white">
    <!-- Navbar Multi-Page -->
    <Navbar />

    <!-- Active Page Content via Vue Router -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Clean Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
