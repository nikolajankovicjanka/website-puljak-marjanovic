<script setup lang="ts">
import { ChevronRight, Scale } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
      id="home"
      class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{
          backgroundImage: `url('/background-hero.jpg')`
        }"
      />

      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-32 text-center lg:px-8">
      <div class="mb-8 flex justify-center">
        <div
            class="rounded-full border border-[#556B2F]/30 bg-[#556B2F]/20 p-4 backdrop-blur-sm"
        >
          <Scale class="h-12 w-12 text-[#F5F5DC]" />
        </div>
      </div>

      <h1
          class="mb-6 font-serif text-[3.2rem] leading-[0.95] tracking-tight text-white sm:text-[4.5rem] lg:text-[6.25rem]"
      >
        Puljak &amp; Marjanović
      </h1>

      <div class="mb-4 text-xl font-light text-[#F5F5DC] md:text-2xl">
        {{ t('hero.subtitle') }}
      </div>

      <p
          class="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-200 md:text-[2rem]"
      >
        {{ t('hero.description') }}
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
            type="button"
            class="group inline-flex items-center gap-2 rounded-lg bg-[#556B2F] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#6B8E23] hover:shadow-xl"
            @click="scrollToSection('#contact')"
        >
          {{ t('hero.primaryButton') }}

          <ChevronRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            @click="scrollToSection('#services')"
        >
          {{ t('hero.secondaryButton') }}
        </button>
      </div>
    </div>

    <!-- Bottom fade -->
    <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-32 bg-gradient-to-t from-[#F5F5DC] to-transparent"
    />
  </section>
</template>