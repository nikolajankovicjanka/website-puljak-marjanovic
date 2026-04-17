<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import BackToTopButton from '@/components/ui/BackToTopButton.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTopButton />
  </div>
</template>
