<script setup lang="ts">
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'

type ContactInfoItem = {
  icon: Component
  titleKey: string
  detailKeys: string[]
}

const { t } = useI18n()

const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    titleKey: 'contact.info.address.title',
    detailKeys: ['contact.info.address.lineOne', 'contact.info.address.lineTwo'],
  },
  {
    icon: Phone,
    titleKey: 'contact.info.phone.title',
    detailKeys: ['contact.info.phone.lineOne', 'contact.info.phone.lineTwo'],
  },
  {
    icon: Mail,
    titleKey: 'contact.info.email.title',
    detailKeys: ['contact.info.email.lineOne', 'contact.info.email.lineTwo'],
  },
  {
    icon: Clock,
    titleKey: 'contact.info.workingHours.title',
    detailKeys: ['contact.info.workingHours.lineOne', 'contact.info.workingHours.lineTwo'],
  },
]

const form = reactive({
  name: '',
  email: '',
  message: '',
  botcheck: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  form.botcheck = ''
}

const submitForm = async () => {
  submitSuccess.value = false
  submitError.value = ''

  if (!accessKey) {
    submitError.value = t('contact.form.errors.missingAccessKey')
    return
  }

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    submitError.value = t('contact.form.errors.requiredFields')
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: t('contact.form.emailSubject'),
        from_name: 'Puljak & Marjanović Website',
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: form.botcheck,
      }),
    })

    const result = await response.json()

    if (result.success) {
      submitSuccess.value = true
      resetForm()
      return
    }

    submitError.value = result.message || t('contact.form.errors.submitFailed')
  } catch {
    submitError.value = t('contact.form.errors.network')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-white py-24 text-[#2F3A1F]">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#556B2F]/6 blur-3xl" />
      <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F5F5DC]/70 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-16 text-center">
        <div class="mb-6 inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-[#556B2F]">
          {{ t('contact.label') }}
        </div>

        <h2 class="mb-6 font-serif text-4xl text-[#2F3A1F] md:text-5xl">
          {{ t('contact.title') }}
        </h2>

        <p class="mx-auto max-w-3xl text-lg leading-relaxed text-[#5B624D]">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <article
            v-for="info in contactInfo"
            :key="info.titleKey"
            class="rounded-2xl border border-[#556B2F]/10 bg-[#F5F5DC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#556B2F]">
            <component :is="info.icon" class="h-6 w-6 text-white" />
          </div>

          <h3 class="mb-3 text-lg font-semibold text-[#2F3A1F]">
            {{ t(info.titleKey) }}
          </h3>

          <p
              v-for="detailKey in info.detailKeys"
              :key="detailKey"
              class="mb-1 text-sm leading-relaxed text-[#5B624D]"
          >
            {{ t(detailKey) }}
          </p>
        </article>
      </div>

      <div class="mb-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="max-w-xl pt-2">
          <p class="text-sm font-medium uppercase tracking-[0.25em] text-[#556B2F]/80">
            {{ t('contact.consultation.kicker') }}
          </p>

          <h3 class="mt-4 font-serif text-4xl leading-tight text-[#2F3A1F]">
            {{ t('contact.consultation.title') }}
          </h3>

          <p class="mt-6 text-lg leading-relaxed text-[#5B624D]">
            {{ t('contact.consultation.description') }}
          </p>

          <div class="mt-10 space-y-5 text-lg text-[#3D4332]">
            <div>
              <div class="text-sm uppercase tracking-[0.2em] text-[#556B2F]/70">
                {{ t('contact.side.addressLabel') }}
              </div>
              <p class="mt-1">
                {{ t('contact.side.address') }}
              </p>
            </div>

            <div>
              <div class="text-sm uppercase tracking-[0.2em] text-[#556B2F]/70">
                {{ t('contact.side.emailLabel') }}
              </div>
              <p class="mt-1">
                {{ t('contact.side.email') }}
              </p>
            </div>

            <div>
              <div class="text-sm uppercase tracking-[0.2em] text-[#556B2F]/70">
                {{ t('contact.side.phoneLabel') }}
              </div>
              <p class="mt-1">
                {{ t('contact.side.phone') }}
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] bg-[#6F8445] p-5 text-white shadow-2xl sm:p-7 lg:p-8">
          <form class="grid gap-4" @submit.prevent="submitForm">
            <input
                v-model="form.name"
                name="name"
                type="text"
                required
                class="h-14 rounded-2xl border border-white/20 bg-white/10 px-5 text-white outline-none transition-all duration-300 placeholder:text-white/70 focus:border-white/35 focus:bg-white/15"
                :placeholder="t('contact.form.namePlaceholder')"
            />

            <input
                v-model="form.email"
                name="email"
                type="email"
                required
                class="h-14 rounded-2xl border border-white/20 bg-white/10 px-5 text-white outline-none transition-all duration-300 placeholder:text-white/70 focus:border-white/35 focus:bg-white/15"
                :placeholder="t('contact.form.emailPlaceholder')"
            />

            <textarea
                v-model="form.message"
                name="message"
                required
                class="min-h-40 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/70 focus:border-white/35 focus:bg-white/15"
                :placeholder="t('contact.form.messagePlaceholder')"
            />

            <!-- Honeypot -->
            <input
                v-model="form.botcheck"
                type="checkbox"
                name="botcheck"
                class="hidden"
                tabindex="-1"
                autocomplete="off"
            />

            <button
                type="submit"
                :disabled="isSubmitting"
                class="mt-2 rounded-2xl bg-white px-6 py-4 font-medium text-[#556B2F] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F5DC] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
            </button>

            <p v-if="submitSuccess" class="text-sm text-[#F5F5DC]">
              {{ t('contact.form.success') }}
            </p>

            <p v-if="submitError" class="text-sm text-red-100">
              {{ submitError }}
            </p>
          </form>
        </div>
      </div>

      <div class="mt-16">
        <div class="mb-6 text-center">
          <div
              class="inline-block rounded-full bg-[#556B2F]/10 px-4 py-2 text-sm font-medium text-[#556B2F]"
          >
            {{ t('contact.map.label') }}
          </div>

          <h3 class="mt-4 font-serif text-3xl text-[#2F3A1F]">
            {{ t('contact.map.title') }}
          </h3>

          <p class="mt-3 text-[#5B624D]">
            {{ t('contact.map.address') }}
          </p>
        </div>

        <div class="rounded-[2.5rem] bg-[#F5F5DC] p-4 sm:p-5">
          <div
              class="overflow-hidden rounded-[2rem] border border-[#556B2F]/10 bg-white shadow-2xl"
          >
            <iframe
                src="https://www.google.com/maps?q=Atinska%2019,%20Bijeljina%2076300&z=16&output=embed"
                width="100%"
                height="480"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                :title="t('contact.map.iframeTitle')"
                class="block h-[480px] w-full"
                allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>