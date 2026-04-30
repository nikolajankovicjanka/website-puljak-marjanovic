<script setup lang="ts">
import { computed, ref } from 'vue'
import { Mail, Linkedin, X } from 'lucide-vue-next'

type TeamMember = {
  name: string
  title: string
  image: string
  description: string
}

const BIO_PREVIEW_LIMIT = 200

const selectedMember = ref<TeamMember | null>(null)

const isModalOpen = computed(() => selectedMember.value !== null)

const openMemberModal = (member: TeamMember) => {
  selectedMember.value = member
}

const closeMemberModal = () => {
  selectedMember.value = null
}

const getShortDescription = (description: string) => {
  const cleanText = description.replace(/\s+/g, ' ').trim()

  if (cleanText.length <= BIO_PREVIEW_LIMIT) {
    return cleanText
  }

  return `${cleanText.slice(0, BIO_PREVIEW_LIMIT).trim()}...`
}

const team: TeamMember[] = [
  {
    name: 'Snežana Puljak',
    title: 'Advokat - Partner',
    image: '/advokati/snezana-puljak.jpg',
    description:
        'Snežana Puljak rođena dana 12. decembra 1984. godine u Zadru, Republika Hrvatska, SFRJ,\n' +
        'završila Gimnaziju „Filip Višnjić“ u Bijeljini, majka troje djece. Diplomirala na Pravnom\n' +
        'fakultetu Univerziteta u Istočnom Sarajevu 2011. godine. Radni odnos u struci zasnovala kao\n' +
        'pripravnik kod advokata Vesne Stevanović iz Bijeljine, te upisana u Imenik advokatskih\n' +
        'pripravnika Advokatske komore Republike Srpske počev od 15.09.2011. godine pa do\n' +
        '06.07.2014. godine. Pravosudni ispit položila 04.07.2014. godine pred Ministarstvom pravde\n' +
        'Federacije BiH. Upisana u Imenik stručnih saradnika Advokatske komore Republike Srpske,\n' +
        'takođe kod advokata Vesne Stevanović iz Bijeljine u periodu od 07.07.2014. do 17.10.2022.\n' +
        'godine. Dana 01.04.2023. godine zasnovala radni odnos na poslovima stručnog saradnika za\n' +
        'pravne poslove kod advokata Novke Marjanović iz Bijeljine. Advokatski ispit pred\n' +
        'Advokatskom komorom Republike Srpske položila je 26.12.2022. godine u Banja Luci. Od\n' +
        '30.12.2025. godine se samostalno bavi advokaturom.',
  },
  {
    name: 'Novka Marjanovic',
    title: 'Advokat - Partner',
    image: '/advokati/novka-marjanovic.jpg',
    description:
        'Novka Marjanović rođena je 8.12.1990. godine u Bijeljini, gdje je završila osnovno i srednje\n' +
        'obrazovanje. Na Pravnom fakultetu Univerziteta u Istočnom Sarajevu diplomirala je 6.9.2013.\n' +
        'godine, koje godine u decembru mjesecu počinje raditi kao advokatski pripravnik kod\n' +
        'advokata Vesne Stevanović iz Bijeljine, kod koje je poslove advokatskog pripravnika, a\n' +
        'kasnije i stručnog saradnika za pravne poslove obavljala sve do 30.12.2022. godine.\n' +
        'Pravosudni ispit položila je 28.7.2016. godine pred Federalnim Ministarstvom pravde u\n' +
        'Sarajevu, a advokatski ispit pred Advokatskom komorom Republike Srpske položila je\n' +
        '25.12.2020. godine u Banja Luci. Od 28.2.2023. godine se samostalno bavi advokaturom.',
  },
  {
    name: 'Aleksandra Lugonja',
    title: 'Advokat - Saradnik',
    image: '/advokati/aleksandra-lugonja.jpg',
    description:
        'Aleksandra Lugonja rođena je 21.11.1989. godine u Sarajevu. Osnovno i srednje obrazovanje\n' +
        'završila je u Bijeljini, te je školovanje nastavila na Pravnom fakultetu Univerziteta u Istočnom\n' +
        'Sarajevu, gdje je diplomirala dana 28.02.2013. godine. U periodu od 25.03.2013. pa do\n' +
        '31.12.2015. godine obavljala je poslove advokatskog pripravnika, kada, nakon polaganja\n' +
        'pravosudnog ispita, nastavlja raditi kao stručni saradnik. U dugogodišnjem radu stekla je\n' +
        'iskustvo u svim oblastima prava. Od 14.03.2023. godine zaposlena je kod advokata Novke\n' +
        'Marjanović, na radnom mjestu stručnog saradnika.',
  },
]
</script>

<template>
  <section id="team" class="bg-[#F5F5DC] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div class="mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]">
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
            class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <!-- Image -->
          <div class="relative h-80 shrink-0 overflow-hidden">
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
          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-1 text-2xl font-semibold text-gray-900">
              {{ member.name }}
            </h3>

            <div class="mb-4 font-medium text-[#556B2F]">
              {{ member.title }}
            </div>

            <p class="mb-6 min-h-[140px] leading-relaxed text-gray-600">
              {{ getShortDescription(member.description) }}
            </p>

            <button
                type="button"
                class="mt-auto inline-flex w-fit items-center rounded-full border border-[#556B2F]/30 px-5 py-2 text-sm font-semibold text-[#556B2F] transition-all duration-300 hover:bg-[#556B2F] hover:text-white"
                @click="openMemberModal(member)"
            >
              Vidi detalje
            </button>
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

    <!-- Modal -->
    <Teleport to="body">
      <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div
            v-if="isModalOpen && selectedMember"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
            @click.self="closeMemberModal"
        >
          <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="translate-y-6 scale-95 opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="translate-y-0 scale-100 opacity-100"
              leave-to-class="translate-y-6 scale-95 opacity-0"
          >
            <div
                class="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                  type="button"
                  class="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow-md transition hover:bg-[#556B2F] hover:text-white"
                  aria-label="Zatvori modal"
                  @click="closeMemberModal"
              >
                <X class="h-5 w-5" />
              </button>

              <div class="grid max-h-[90vh] overflow-y-auto md:grid-cols-[320px_1fr]">
                <div class="relative h-80 md:h-full">
                  <img
                      :src="selectedMember.image"
                      :alt="selectedMember.name"
                      class="h-full w-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-black/10" />
                </div>

                <div class="p-6 md:p-8">
                  <div class="mb-6">
                    <p class="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#556B2F]">
                      Biografija
                    </p>

                    <h3 class="font-serif text-3xl text-gray-900 md:text-4xl">
                      {{ selectedMember.name }}
                    </h3>

                    <p class="mt-2 font-medium text-[#556B2F]">
                      {{ selectedMember.title }}
                    </p>
                  </div>

                  <p class="whitespace-pre-line text-base leading-8 text-gray-700">
                    {{ selectedMember.description }}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>