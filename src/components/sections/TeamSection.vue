<script setup lang="ts">
import { Mail, Linkedin } from 'lucide-vue-next'

type TeamMember = {
  name: string
  title: string
  image: string
  description: string
}

const team: TeamMember[] = [
  {
    name: 'Snežana Puljak',
    title: 'Advokat - Partner',
    image: '/advokati/snezana-puljak.jpg',
    description:
        'Specijalizovana za građansko i porodično pravo sa preko 15 godina iskustva. Poznata po brižnom i detaljnom pristupu svakom.',
  },
  {
    name: 'Novka Marjanovic',
    title: 'Advokat - Partner',
    image: '/advokati/novka-marjanovic.jpg',
    description:
        'Ekspert u privrednom pravu i sudskim sporovima. Uspješno zastupa klijente u složenim privrednim predmetima.',
  },
  {
    name: 'Aleksandra Lugonja',
    title: 'Advokat - Saradnik',
    image: '/advokati/aleksandra-lugonja.jpg',
    description:
        'Mladi i dinamični advokat specijalizovan za ugovorno i imovinsko pravo. Donosi svjež pristup u rješavanju pravnih izazova.',
  },
]
</script>

<template>
  <section id="team" class="bg-[#F5F5DC] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div
            class="mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]"
        >
          Naš tim
        </div>

        <h2 class="mb-6 font-serif text-4xl text-gray-900 md:text-5xl">
          Upoznajte naše advokate
        </h2>

        <p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
          Tim iskusnih pravnika posvećenih postizanju najboljih rezultata za naše klijente
          sa profesionalnošću, integritetom i stručnošću.
        </p>
      </div>

      <!-- Team grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="member in team"
            :key="member.name"
            class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <!-- Image -->
          <div class="relative h-80 overflow-hidden">
            <img
                :src="member.image"
                :alt="member.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <!-- Social icons overlay -->
            <div
                class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <button
                  type="button"
                  class="rounded-lg bg-white/90 p-2 transition-colors hover:bg-white"
                  aria-label="Pošalji email"
              >
                <Mail class="h-5 w-5 text-[#556B2F]" />
              </button>

              <button
                  type="button"
                  class="rounded-lg bg-white/90 p-2 transition-colors hover:bg-white"
                  aria-label="LinkedIn profil"
              >
                <Linkedin class="h-5 w-5 text-[#556B2F]" />
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="mb-1 text-2xl font-semibold text-gray-900">
              {{ member.name }}
            </h3>

            <div class="mb-4 font-medium text-[#556B2F]">
              {{ member.title }}
            </div>

            <p class="leading-relaxed text-gray-600">
              {{ member.description }}
            </p>
          </div>

          <!-- Bottom accent -->
          <div
              class="h-1 origin-left scale-x-0 bg-gradient-to-r from-[#556B2F] to-[#6B8E23] transition-transform duration-300 group-hover:scale-x-100"
          />
        </article>
      </div>

      <!-- Bottom quote -->
      <div class="mt-16 text-center">
        <div class="mx-auto max-w-3xl border-l-4 border-[#556B2F] py-4 pl-8">
          <p class="mb-4 font-serif text-2xl italic text-gray-700">
            "Naša snaga leži u timu – kombinaciji iskustva, znanja i posvećenosti svakom klijentu."
          </p>
          <p class="text-gray-600">— Puljak &amp; Marjanovic</p>
        </div>
      </div>
    </div>
  </section>
</template>