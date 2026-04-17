<script setup lang="ts">
const services = [
  'Građansko pravo',
  'Privredno pravo',
  'Radni sporovi',
  'Savjetovanje i zastupanje',
]
</script>

<template>
  <section id="services" class="bg-accent/40 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <p class="text-sm font-medium uppercase tracking-[0.25em] text-primary">Usluge</p>
      <h2 class="mt-4 max-w-2xl font-serif text-4xl text-foreground">Pravni servis prilagođen vašem slučaju.</h2>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="service in services" :key="service" class="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
          <div class="mb-4 h-12 w-12 rounded-2xl bg-primary/10" />
          <h3 class="font-serif text-2xl text-foreground">{{ service }}</h3>
          <p class="mt-3 text-muted-foreground">Placeholder kartica koju ćemo zamijeniti stvarnim sadržajem iz dizajna.</p>
        </article>
      </div>
    </div>
  </section>
</template>
