<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Scale, MapPin, Phone, Mail } from 'lucide-vue-next'

type NavItem = {
  name: string
  href: string
}

const { t } = useI18n()

const navigation = computed<NavItem[]>(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.team'), href: '#team' },
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.contact'), href: '#contact' },
])

const legalLinks = computed<NavItem[]>(() => [
  { name: t('footer.legal.privacy'), href: '#' },
  { name: t('footer.legal.terms'), href: '#' },
  { name: t('footer.legal.ethics'), href: '#' },
])

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#3F5321] text-white">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="mb-4 flex items-center gap-2">
            <Scale class="h-8 w-8 text-[#F5F5DC]" />

            <div class="font-serif text-2xl text-white">
              Puljak &amp; Marjanović
            </div>
          </div>

          <p class="mb-6 leading-relaxed text-white/80">
            {{ t('footer.description') }}
          </p>

          <div class="flex items-start gap-3 text-white/80">
            <MapPin class="mt-1 h-5 w-5 shrink-0" />

            <div>
              <p>{{ t('footer.address.city') }}</p>
              <p>{{ t('footer.address.country') }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-[#F5F5DC]">
            {{ t('footer.navigationTitle') }}
          </h3>

          <ul class="space-y-3">
            <li v-for="item in navigation" :key="item.href">
              <a
                  :href="item.href"
                  class="text-white/80 transition-colors duration-200 hover:text-white"
                  @click.prevent="scrollToSection(item.href)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-[#F5F5DC]">
            {{ t('footer.legalTitle') }}
          </h3>

          <ul class="space-y-3">
            <li v-for="link in legalLinks" :key="link.name">
              <a
                  :href="link.href"
                  class="text-white/80 transition-colors duration-200 hover:text-white"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-[#F5F5DC]">
            {{ t('footer.contactTitle') }}
          </h3>

          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-white/80">
              <Phone class="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p>{{ t('footer.contact.phoneOne') }}</p>
                <p>{{ t('footer.contact.phoneTwo') }}</p>
              </div>
            </li>

            <li class="flex items-start gap-3 text-white/80">
              <Mail class="mt-1 h-5 w-5 shrink-0" />

              <div>
                <p>{{ t('footer.contact.emailOne') }}</p>
                <p>{{ t('footer.contact.emailTwo') }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/20 pt-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p class="text-center text-sm text-white/70 md:text-left">
            © {{ year }} Puljak &amp; Marjanović. {{ t('footer.rights') }}
          </p>

          <p class="text-center text-sm text-white/70 md:text-right">
            {{ t('footer.bottomText') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>