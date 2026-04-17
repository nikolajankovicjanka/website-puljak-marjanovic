<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Gavel } from 'lucide-vue-next'

const isVisible = ref(false)
const isAnimating = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  isAnimating.value = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  window.setTimeout(() => {
    isAnimating.value = false
  }, 550)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <transition name="back-to-top-fade">
    <button
        v-if="isVisible"
        type="button"
        aria-label="Nazad na vrh"
        class="group fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-[#556B2F]/20 bg-[#556B2F] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#6B8E23] hover:shadow-2xl"
        @click="scrollToTop"
    >
      <span
          class="flex items-center justify-center"
          :class="{ 'animate-gavel-strike': isAnimating }"
      >
        <Gavel class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      </span>

      <span
          class="pointer-events-none absolute inset-0 rounded-full ring-0 ring-[#556B2F]/20 transition-all duration-300 group-hover:ring-8"
      />
    </button>
  </transition>
</template>

<style scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: all 0.25s ease;
}

.back-to-top-fade-enter-from,
.back-to-top-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
}

@keyframes gavelStrike {
  0% {
    transform: rotate(0deg) translateY(0);
  }
  30% {
    transform: rotate(24deg) translateY(-2px);
  }
  55% {
    transform: rotate(-18deg) translateY(2px);
  }
  75% {
    transform: rotate(10deg) translateY(-1px);
  }
  100% {
    transform: rotate(0deg) translateY(0);
  }
}

.animate-gavel-strike {
  transform-origin: 70% 30%;
  animation: gavelStrike 0.55s ease;
}
</style>