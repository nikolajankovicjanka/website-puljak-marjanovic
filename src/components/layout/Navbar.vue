<script setup lang="ts">
import { Menu, Scale, X } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

type NavigationItem = {
  name: string
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'Početna', href: '#home' },
  { name: 'O nama', href: '#about' },
  { name: 'Usluge', href: '#services' },
  { name: 'Tim', href: '#team' },
  { name: 'Kontakt', href: '#contact' },
]

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isOpen.value = false
  }
}

watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'unset'
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'unset'
})
</script>

<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-white/80'
    ]"
  >
    <div class="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
      <a href="#home" class="flex items-center gap-3" @click.prevent="scrollToSection('#home')">
        <div
          :class="[
            'rounded-xl p-2 transition-colors duration-300',
            scrolled ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
          ]"
        >
          <Scale class="h-7 w-7" />
        </div>
        <div>
          <p class="font-serif text-2xl leading-none text-primary">Puljak & Marjanovic</p>
          <p class="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Advokatska kancelarija</p>
        </div>
      </a>

      <div class="hidden items-center gap-2 lg:flex">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-4 py-2 text-sm text-foreground/80 transition hover:bg-primary/5 hover:text-primary"
          @click.prevent="scrollToSection(item.href)"
        >
          {{ item.name }}
        </a>
        <button
          class="ml-3 rounded-xl bg-primary px-5 py-3 text-sm text-primary-foreground transition hover:opacity-90"
          @click="scrollToSection('#contact')"
        >
          Kontakt
        </button>
      </div>

      <button
        class="inline-flex rounded-lg p-3 text-foreground transition hover:bg-primary/5 lg:hidden"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="28" />
        <Menu v-else :size="28" />
      </button>
    </div>

    <div v-if="isOpen" class="border-t border-white/10 bg-primary text-white lg:hidden">
      <div class="flex min-h-[calc(100vh-96px)] flex-col justify-center gap-8 px-6 py-10">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="font-serif text-4xl"
          @click.prevent="scrollToSection(item.href)"
        >
          {{ item.name }}
        </a>

        <button
          class="mt-6 w-fit rounded-xl bg-white px-6 py-4 font-medium text-primary"
          @click="scrollToSection('#contact')"
        >
          Zakažite konsultaciju
        </button>
      </div>
    </div>
  </nav>
</template>
