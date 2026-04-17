<script setup lang="ts">
const team = [
  { name: 'Snježana Puljak', role: 'Advokat' },
  { name: 'Novka Marjanovic', role: 'Advokat' },
  { name: 'Aleksandra Lugonja', role: 'Advokat' },
]
</script>

<template>
  <section id="team" class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <p class="text-sm font-medium uppercase tracking-[0.25em] text-primary">Tim</p>
      <h2 class="mt-4 font-serif text-4xl text-foreground">Ljudi koji stoje iza kancelarije.</h2>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article v-for="member in team" :key="member.name" class="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
          <div class="aspect-[4/5] bg-[linear-gradient(135deg,#f3f3f5,#e9ebef)]" />
          <div class="p-6">
            <h3 class="font-serif text-2xl text-foreground">{{ member.name }}</h3>
            <p class="mt-2 text-muted-foreground">{{ member.role }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
