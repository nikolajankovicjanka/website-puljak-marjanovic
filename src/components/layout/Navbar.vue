<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Menu, X, Scale } from 'lucide-vue-next'

type NavItem = {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'O nama', href: '#about' },
  { name: 'Tim', href: '#team' },
  { name: 'Usluge', href: '#services' },
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
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'unset'
})
</script>

<template>
  <>
  <nav
      :class="[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-[#556B2F]/10 bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-lg'
      ]"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-24 items-center justify-between">
        <!-- Logo -->
        <a
            href="#home"
            class="group flex items-center gap-3"
            @click.prevent="scrollToSection('#home')"
        >
          <div
              :class="[
                'relative rounded-lg p-2 transition-all duration-300',
                scrolled ? 'bg-[#556B2F]' : 'bg-[#556B2F]/10'
              ]"
          >
            <Scale
                :class="[
                  'h-7 w-7 transition-colors duration-300',
                  scrolled ? 'text-white' : 'text-[#556B2F]'
                ]"
            />
          </div>

          <div class="flex flex-col">
            <div class="font-serif text-2xl leading-none tracking-tight text-[#556B2F]">
              Puljak &amp; Marjanovic
            </div>
            <div class="text-xs uppercase tracking-wider text-gray-500">
              Advokatska kancelarija
            </div>
          </div>
        </a>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 lg:flex">
          <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="group relative px-5 py-2 font-medium text-gray-700 transition-all duration-300 hover:text-[#556B2F]"
              @click.prevent="scrollToSection(item.href)"
          >
            {{ item.name }}

            <!-- hover line -->
            <span
                class="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#556B2F] transition-all duration-300 group-hover:w-3/4"
            />
          </a>

          <button
              class="ml-4 rounded-lg bg-[#556B2F] px-6 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6B8E23] hover:shadow-xl"
              @click="scrollToSection('#contact')"
          >
            Kontakt
          </button>
        </div>

        <!-- Mobile button -->
        <button
            class="relative z-[70] p-3 text-gray-700 transition-colors hover:text-[#556B2F] lg:hidden"
            @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="32" :stroke-width="2" />
          <Menu v-else :size="32" :stroke-width="2" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile full-screen menu -->
  <transition name="menu-fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] lg:hidden"
    >
      <!-- Hero image background -->
      <div class="absolute inset-0 overflow-hidden">
        <img
            src="/background-hero.jpg"
            alt=""
            class="h-full w-full scale-105 object-cover opacity-30 blur-[2px]"
        />

        <!-- Dark fade layer -->
        <div class="absolute inset-0 bg-black/35" />

        <!-- Brand gradient overlay -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-[#2f3a1f]/92 via-[#556B2F]/88 to-[#6B8E23]/90"
        />

        <!-- Soft vignette -->
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]"
        />
      </div>

      <!-- Decorative glow -->
      <div class="absolute right-10 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div class="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <!-- Content -->
      <div class="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <!-- Logo block -->
        <div class="mb-16 animate-fade-up [animation-delay:120ms] [animation-fill-mode:both]">
          <div
              class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <Scale class="h-10 w-10 text-white" />
          </div>

          <div class="mb-2 font-serif text-3xl text-white">
            Puljak &amp; Marjanovic
          </div>
          <div class="text-sm uppercase tracking-wider text-white/75">
            Advokatska kancelarija
          </div>
        </div>

        <!-- Nav links -->
        <nav class="mb-16 flex flex-col items-center gap-6">
          <a
              v-for="(item, index) in navigation"
              :key="item.name"
              :href="item.href"
              class="group relative animate-fade-up font-serif text-4xl text-white transition-all duration-300 hover:text-[#F5F5DC] md:text-5xl [animation-fill-mode:both]"
              :style="{ animationDelay: `${220 + index * 120}ms` }"
              @click.prevent="scrollToSection(item.href)"
          >
            {{ item.name }}
            <span
                class="absolute -bottom-2 left-0 h-1 w-0 bg-[#F5F5DC] transition-all duration-500 group-hover:w-full"
            />
          </a>
        </nav>

        <!-- CTA -->
        <button
            class="animate-fade-up rounded-xl bg-white px-10 py-4 text-lg font-semibold text-[#556B2F] shadow-2xl transition-all duration-300 hover:bg-[#F5F5DC] [animation-delay:900ms] [animation-fill-mode:both]"
            @click="scrollToSection('#contact')"
        >
          Zakažite konsultaciju
        </button>

        <!-- Decorative line -->
        <div
            class="absolute bottom-8 left-1/2 h-1 w-32 -translate-x-1/2 animate-line-grow bg-gradient-to-r from-transparent via-white/40 to-transparent [animation-delay:1050ms] [animation-fill-mode:both]"
        />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.35s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineGrow {
  from {
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
  }
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.55s ease forwards;
}

.animate-line-grow {
  opacity: 0;
  transform-origin: center;
  animation: lineGrow 0.8s ease forwards;
}
</style>