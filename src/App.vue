<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink selection:bg-blue selection:text-white">
    <!-- Top Navigation Bar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- 1. Hero Section with SVG Arrow Anime.js Draw Animation -->
      <HeroSection />

      <!-- 2. Services Section: 3 distinct treatments (4° tilted browser, live data chart, interactive game canvas) -->
      <ServicesSection />

      <!-- 3. Asymmetrical Portfolio Grid with Measurable Metrics -->
      <PortfolioSection />

      <!-- 4. Technical Accountability Metrics in IBM Plex Mono -->
      <MetricsSection />

      <!-- 5. Minimalist Consultation & WhatsApp Contact Form -->
      <ContactSection />
    </main>

    <!-- Clean 3-Service Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import MetricsSection from './components/MetricsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>
