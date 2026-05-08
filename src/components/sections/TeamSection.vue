<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail, X } from 'lucide-vue-next'

type TeamMember = {
  id: string
  nameKey: string
  titleKey: string
  image: string
  descriptionKey: string
  email: string
}

const { t } = useI18n()

const BIO_PREVIEW_LIMIT = 200
const AT = String.fromCharCode(64)

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
    id: 'snezana-puljak',
    nameKey: 'team.members.snezana.name',
    titleKey: 'team.members.snezana.title',
    image: '/advokati/snezana-puljak.png',
    descriptionKey: 'team.members.snezana.description',
    email: ['snezanapuljak.adv', 'gmail.com'].join(AT),
  },
  {
    id: 'novka-marjanovic',
    nameKey: 'team.members.novka.name',
    titleKey: 'team.members.novka.title',
    image: '/advokati/novka-marjanovic.png',
    descriptionKey: 'team.members.novka.description',
    email: ['advokatnovkamarjanovic', 'gmail.com'].join(AT),
  },
  {
    id: 'aleksandra-lugonja',
    nameKey: 'team.members.aleksandra.name',
    titleKey: 'team.members.aleksandra.title',
    image: '/advokati/aleksandra-lugonja.png',
    descriptionKey: 'team.members.aleksandra.description',
    email: ['adv.alensadralugonja', 'gmail.com'].join(AT),
  },
]
</script>

<template>
  <section id="team" class="bg-[#F5F5DC] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div class="mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]">
          {{ t('team.label') }}
        </div>

        <h2 class="mb-6 font-serif text-4xl text-gray-900 md:text-5xl">
          {{ t('team.title') }}
        </h2>

        <p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
          {{ t('team.description') }}
        </p>
      </div>

      <!-- Team grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="member in team"
            :key="member.id"
            class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <!-- Image -->
          <div class="relative aspect-[3/4] shrink-0 overflow-hidden bg-[#F5F5DC]">
            <img
                :src="member.image"
                :alt="t(member.nameKey)"
                class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <!-- Email icon overlay -->
            <div
                class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <a
                  :href="`mailto:${member.email}`"
                  class="rounded-lg bg-white/90 p-2 transition-colors hover:bg-white"
                  :aria-label="`${t('team.social.email')} - ${t(member.nameKey)}`"
              >
                <Mail class="h-5 w-5 text-[#556B2F]" />
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-1 text-2xl font-semibold text-gray-900">
              {{ t(member.nameKey) }}
            </h3>

            <div class="mb-4 font-medium text-[#556B2F]">
              {{ t(member.titleKey) }}
            </div>

            <p class="mb-6 min-h-[140px] leading-relaxed text-gray-600">
              {{ getShortDescription(t(member.descriptionKey)) }}
            </p>

            <button
                type="button"
                class="mt-auto inline-flex w-fit items-center rounded-full border border-[#556B2F]/30 px-5 py-2 text-sm font-semibold text-[#556B2F] transition-all duration-300 hover:bg-[#556B2F] hover:text-white"
                v-on:click="openMemberModal(member)"
            >
              {{ t('team.detailsButton') }}
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
            “{{ t('team.quote.text') }}”
          </p>

          <p class="text-gray-600">
            — {{ t('team.quote.author') }}
          </p>
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
            v-on:click.self="closeMemberModal"
        >
          <Transition
              appear
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
                  :aria-label="t('team.modal.close')"
                  v-on:click="closeMemberModal"
              >
                <X class="h-5 w-5" />
              </button>

              <div class="grid max-h-[90vh] overflow-y-auto md:grid-cols-[320px_1fr]">
                <div class="relative h-80 md:h-full">
                  <img
                      :src="selectedMember.image"
                      :alt="t(selectedMember.nameKey)"
                      class="h-full w-full object-cover"
                  />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-black/10" />
                </div>

                <div class="p-6 md:p-8">
                  <div class="mb-6">
                    <p class="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#556B2F]">
                      {{ t('team.modal.biography') }}
                    </p>

                    <h3 class="font-serif text-3xl text-gray-900 md:text-4xl">
                      {{ t(selectedMember.nameKey) }}
                    </h3>

                    <p class="mt-2 font-medium text-[#556B2F]">
                      {{ t(selectedMember.titleKey) }}
                    </p>
                  </div>

                  <p class="whitespace-pre-line text-base leading-8 text-gray-700">
                    {{ t(selectedMember.descriptionKey) }}
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