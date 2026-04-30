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
    title: 'GRAĐANSKO PRAVO',
    description:
        'zastupanje u parničnim postupcima, izvršnim postupcima i\n' +
        'vanparničnim postupcima pred nadležnim sudovima u Republici Srpskoj\n' +
        'i Federaciji Bosne i Hercegovine, a u postupcima iz svih oblasti\n' +
        'građanskog, odnosno civilnog prava;',
  },
  {
    icon: Briefcase,
    title: 'PORODIČNO I NASLJEDNO PRAVO',
    description:
        'zastupanje u postupcima razvoda braka, regulisanja imovinskih odnosa\n' +
        'supružnika, uređenja ličnih odnosa roditelja i djece, zakonskog\n' +
        'izdržavanja, kao i ostvarivanja roditeljskog prava, a pred nadležnim\n' +
        'sudovima, organom starateljstva i jedinici lokalne samouprave;\n' +
        '- zastupanje u ostavinskim postupcima, pred nadlženim sudom ili\n' +
        'postupajućim notarom, sačinjavanje testamenata i druge savjetodavne\n' +
        'usluge.',
  },
  {
    icon: FileText,
    title: 'RADNO PRAVO',
    description:
        'pružanje usluga zastupanja u radno-pravnim sporovima, izrada\n' +
        'dokumentacije i pravno savjetovanje u oblasti radno-pravnih odnosa.',
  },
  {
    icon: Home,
    title: 'IMOVINSKA PRAVA',
    description:
        'zastupanje u svim imovinsko-pravnim sporovima pred nadležnim\n' +
        'sudovima u Republici Srpskoj i Federaciji Bosne i Hercegovine,\n' +
        'zastupanje prilikom prometa nekretnina, registracije nekretnina kod\n' +
        'poreskih organa, zastupanja prilikom uknjižbe i brisanja prava u\n' +
        'zemljišnim knjigama, zastupanje u postupcima eksproprijacije zemljišta\n' +
        'i drugim postupcima pred organima uprave;',
  },
  {
    icon: Landmark,
    title: 'UPRAVNO PRAVO',
    description:
        'pokretanje i vođenje svih upravnih postupaka pred nadležnim organima\n' +
        'uprave u Republici Srpskoj i Federaciji Bosne i Hercegovine, posebno\n' +
        'uključujući postupke koji se odnose na legalizacije i odobrenja za\n' +
        'građenje, inspekcijske i poreske poslove, pribavljanje dozvola,\n' +
        'regulisanje statusnih pitanja, posebno državljanstva Bosne i\n' +
        'Hercegovine, postupke javnih nabavki i druge upravne postupke,\n' +
        'pokretanje upravnih sporova',
  },
  {
    icon: Users,
    title: 'DRUGE OBLASTI RADA',
    description:
        'zastupanje u krivičnim i prekršajnim postupcima pred nadležnim\n' +
        'sudovima u Republici Srpskoj i Federaciji Bosne i Hercegovine;\n' +
        '\n' +
        '- zastupanje u privrednim sporovima pred nadležnim sudovima u\n' +
        'Republici Srpskoj i Federaciji Bosne i Hercegovine;\n' +
        '- pružanje usluga registracije privrednih društava, kao i udruženja građana\n' +
        'i fondacija;\n' +
        '- izrada svih vrsta ugovora i pružanje savjetodavnih usluga.',
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