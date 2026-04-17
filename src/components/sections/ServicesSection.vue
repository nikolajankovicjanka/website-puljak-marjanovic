<script setup lang="ts">
import { Scale, Briefcase, FileText, Home, Landmark, Users } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Component } from 'vue'

type Service = {
  icon: Component
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Scale,
    title: 'Građansko pravo',
    description:
        'Kompletna pravna zaštita u oblasti građanskog prava, uključujući ugovore, naknadu štete i imovinsko-pravne odnose.',
  },
  {
    icon: Briefcase,
    title: 'Privredno pravo',
    description:
        'Savjetovanje i zastupanje u privrednim sporovima, osnivanje društava i pravna podrška poslovanju.',
  },
  {
    icon: FileText,
    title: 'Ugovorno pravo',
    description:
        'Izrada, provjera i pravni savjeti za sve vrste ugovora sa fokusom na zaštitu vaših interesa.',
  },
  {
    icon: Home,
    title: 'Imovinsko pravo',
    description:
        'Rješavanje pitanja svojinskih prava, kupoprodaje, naslijeđa i drugih imovinsko-pravnih odnosa.',
  },
  {
    icon: Landmark,
    title: 'Sudsko zastupanje',
    description:
        'Profesionalno zastupanje pred svim sudskim instancama sa dugogodišnjim iskustvom u sporovima.',
  },
  {
    icon: Users,
    title: 'Porodično pravo',
    description:
        'Diskretno i profesionalno rješavanje porodično-pravnih pitanja, razvoda, starateljstva i naslijeđa.',
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
          Naše usluge
        </div>

        <h2
            class="services-reveal mb-6 font-serif text-4xl text-gray-900 md:text-5xl"
            style="transition-delay: 200ms"
        >
          Pravne usluge visokog kvaliteta
        </h2>

        <p
            class="services-reveal mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            style="transition-delay: 320ms"
        >
          Nudimo sveobuhvatne pravne usluge prilagođene potrebama naših klijenata,
          sa stručnošću i posvećenošću u svakom segmentu rada.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card group relative rounded-2xl border border-transparent bg-[#F5F5DC] p-8 transition-all duration-300 hover:border-[#556B2F]/20 hover:-translate-y-1 hover:shadow-2xl"
            :style="{ transitionDelay: `${420 + index * 110}ms` }"
        >
          <div class="relative mb-6">
            <div
                class="service-icon flex h-16 w-16 items-center justify-center rounded-xl bg-[#556B2F] shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <component :is="service.icon" class="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 class="mb-4 text-2xl font-semibold text-gray-900">
            {{ service.title }}
          </h3>

          <p class="leading-relaxed text-gray-600">
            {{ service.description }}
          </p>

          <div
              class="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-[#556B2F]/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
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
            Potrebna vam je pravna pomoć?
          </h3>

          <p class="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Kontaktirajte nas za besplatnu inicijalnu konsultaciju i saznajte kako možemo pomoći.
          </p>

          <button
              class="rounded-lg bg-white px-8 py-4 text-[#556B2F] shadow-lg transition-colors duration-300 hover:bg-[#F5F5DC]"
              @click="scrollToSection('#contact')"
          >
            Zakažite konsultaciju
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
      transform 0.75s ease;
  will-change: opacity, transform;
}

.service-card .service-icon {
  transform: scale(0.9);
  transition:
      transform 0.7s ease,
      box-shadow 0.3s ease;
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