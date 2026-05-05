<script setup lang="ts">
import { Scale, Briefcase, FileText, Home, Landmark, Users } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'

type Service = {
  icon: Component
  titleKey: string
  descriptionKey: string
}

const { t } = useI18n()

const services: Service[] = [
  {
    icon: Scale,
    titleKey: 'services.items.civil.title',
    descriptionKey: 'services.items.civil.description',
  },
  {
    icon: Briefcase,
    titleKey: 'services.items.familyInheritance.title',
    descriptionKey: 'services.items.familyInheritance.description',
  },
  {
    icon: FileText,
    titleKey: 'services.items.labor.title',
    descriptionKey: 'services.items.labor.description',
  },
  {
    icon: Home,
    titleKey: 'services.items.property.title',
    descriptionKey: 'services.items.property.description',
  },
  {
    icon: Landmark,
    titleKey: 'services.items.administrative.title',
    descriptionKey: 'services.items.administrative.description',
  },
  {
    icon: Users,
    titleKey: 'services.items.other.title',
    descriptionKey: 'services.items.other.description',
  },
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
      id="services"
      ref="sectionRef"
      class="bg-white py-24"
      :class="{ 'services-visible': isVisible }"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div
            class="services-reveal mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]"
            style="transition-delay: 100ms"
        >
          {{ t('services.label') }}
        </div>

        <h2
            class="services-reveal mb-6 font-serif text-4xl text-gray-900 md:text-5xl"
            style="transition-delay: 200ms"
        >
          {{ t('services.title') }}
        </h2>

        <p
            class="services-reveal mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            style="transition-delay: 320ms"
        >
          {{ t('services.description') }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="(service, index) in services"
            :key="service.titleKey"
            class="service-card group relative rounded-2xl bg-[#F5F5DC] p-8 shadow-none transition-all duration-800 ease-out hover:-translate-y-0.5 hover:shadow-sm"
            :style="{ transitionDelay: `${800 + index * 110}ms` }"
        >
          <div class="relative mb-6">
            <div
                class="service-icon flex h-16 w-16 items-center justify-center rounded-xl bg-[#556B2F] shadow-sm transition-all duration-700 ease-out group-hover:scale-105"
            >
              <component :is="service.icon" class="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 class="mb-4 text-2xl font-semibold text-gray-900">
            {{ t(service.titleKey) }}
          </h3>

          <p class="whitespace-pre-line leading-relaxed text-gray-600">
            {{ t(service.descriptionKey) }}
          </p>

          <div
              class="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-[#556B2F]/5 opacity-0 blur-3xl transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <div
            class="services-cta rounded-2xl bg-gradient-to-r from-[#556B2F] to-[#6B8E23] p-12 shadow-xl"
            style="transition-delay: 1120ms"
        >
          <h3 class="mb-4 font-serif text-3xl text-white">
            {{ t('services.cta.title') }}
          </h3>

          <p class="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            {{ t('services.cta.description') }}
          </p>

          <button
              type="button"
              class="rounded-lg bg-white px-8 py-4 text-[#556B2F] shadow-sm transition-colors duration-500 ease-out hover:bg-[#F5F5DC]"
              @click="scrollToSection('#contact')"
          >
            {{ t('services.cta.button') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-reveal,
.service-card,
.services-cta {
  opacity: 0;
  transform: translateY(28px);
  transition:
      opacity 0.75s ease,
      transform 0.75s ease,
      box-shadow 0.7s ease;
  will-change: opacity, transform;
}

.service-card .service-icon {
  transform: scale(0.94);
  transition:
      transform 0.7s ease,
      box-shadow 0.7s ease;
}

.services-visible .services-reveal,
.services-visible .service-card,
.services-visible .services-cta {
  opacity: 1;
  transform: translateY(0);
}

.services-visible .service-card .service-icon {
  transform: scale(1);
}
</style>