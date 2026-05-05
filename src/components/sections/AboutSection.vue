<script setup lang="ts">
import { Award, Users, Shield, Clock } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'

type Feature = {
  icon: Component
  titleKey: string
  descriptionKey: string
}

const { t } = useI18n()

const features: Feature[] = [
  {
    icon: Award,
    titleKey: 'about.features.experience.title',
    descriptionKey: 'about.features.experience.description',
  },
  {
    icon: Users,
    titleKey: 'about.features.clients.title',
    descriptionKey: 'about.features.clients.description',
  },
  {
    icon: Shield,
    titleKey: 'about.features.reliability.title',
    descriptionKey: 'about.features.reliability.description',
  },
  {
    icon: Clock,
    titleKey: 'about.features.availability.title',
    descriptionKey: 'about.features.availability.description',
  },
]

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
        threshold: 0.2,
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
      id="about"
      ref="sectionRef"
      class="bg-[#F5F5DC] py-24"
      :class="{ 'about-visible': isVisible }"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <!-- Image -->
        <div class="relative">
          <div class="about-image-wrap relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            <img
                src="/about-img.jpg"
                :alt="t('about.imageAlt')"
                class="about-image h-full w-full object-cover"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-[#556B2F]/30 to-transparent" />
          </div>

          <div
              class="about-badge absolute -bottom-8 -right-8 max-w-xs rounded-lg bg-[#556B2F] p-8 text-white shadow-xl"
          >
            <div class="mb-2 text-5xl font-bold">
              {{ t('about.badge.number') }}
            </div>

            <div class="text-lg font-light">
              {{ t('about.badge.text') }}
            </div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div
              class="reveal-item mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]"
              style="transition-delay: 120ms"
          >
            {{ t('about.label') }}
          </div>

          <h2
              class="reveal-item mb-6 font-serif text-4xl leading-tight text-gray-900 md:text-5xl"
              style="transition-delay: 220ms"
          >
            {{ t('about.title') }}
          </h2>

          <p
              class="reveal-item mb-6 text-lg leading-relaxed text-gray-700"
              style="transition-delay: 320ms"
          >
            {{ t('about.descriptionOne') }}
          </p>

          <p
              class="reveal-item mb-8 text-lg leading-relaxed text-gray-700"
              style="transition-delay: 420ms"
          >
            {{ t('about.descriptionTwo') }}
          </p>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
                v-for="(feature, index) in features"
                :key="feature.titleKey"
                class="feature-item flex items-start gap-4"
                :style="{ transitionDelay: `${520 + index * 120}ms` }"
            >
              <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#556B2F]"
              >
                <component :is="feature.icon" class="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 class="mb-1 text-lg font-semibold text-gray-900">
                  {{ t(feature.titleKey) }}
                </h3>

                <p class="text-sm leading-relaxed text-gray-600">
                  {{ t(feature.descriptionKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-item,
.feature-item {
  opacity: 0;
  transform: translateY(28px);
  transition:
      opacity 0.75s ease,
      transform 0.75s ease;
  will-change: opacity, transform;
}

.about-image-wrap {
  opacity: 0;
  transform: translateX(-36px) scale(0.96);
  transition:
      opacity 0.95s ease,
      transform 0.95s ease;
  transition-delay: 120ms;
  will-change: opacity, transform;
}

.about-image {
  transform: scale(1.08);
  transition: transform 1.2s ease;
  will-change: transform;
}

.about-badge {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
  transition:
      opacity 0.7s ease,
      transform 0.7s ease;
  transition-delay: 520ms;
  will-change: opacity, transform;
}

.about-visible .reveal-item,
.about-visible .feature-item {
  opacity: 1;
  transform: translateY(0);
}

.about-visible .about-image-wrap {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.about-visible .about-image {
  transform: scale(1);
}

.about-visible .about-badge {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>