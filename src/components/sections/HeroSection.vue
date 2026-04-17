<template>
  <section id="home" class="relative overflow-hidden bg-[linear-gradient(135deg,rgba(85,107,47,0.96),rgba(107,142,35,0.9))] pt-36 text-white">
    <div class="absolute inset-0 opacity-20" style="background-image:url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80'); background-size:cover; background-position:center;" />
    <div class="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
      <div>
        <p class="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">Bijeljina · Advokatska kancelarija</p>
        <h1 class="font-serif text-5xl leading-tight md:text-6xl">Pouzdana pravna podrška za građane i privredu.</h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-white/80">
          Moderan, profesionalan i jasan pristup pravnim uslugama. Gradimo sajt na čistim Vue komponentama spremnim za dalji rad.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="rounded-xl bg-white px-6 py-4 font-medium text-primary transition hover:bg-accent">Zakažite konsultaciju</a>
          <a href="#services" class="rounded-xl border border-white/20 px-6 py-4 font-medium text-white transition hover:bg-white/10">Pogledajte usluge</a>
        </div>
      </div>
      <div class="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-md">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-2xl bg-white/10 p-6">
            <p class="text-3xl font-semibold">10+</p>
            <p class="mt-2 text-white/75">Godina iskustva</p>
          </div>
          <div class="rounded-2xl bg-white/10 p-6">
            <p class="text-3xl font-semibold">100+</p>
            <p class="mt-2 text-white/75">Riješenih predmeta</p>
          </div>
          <div class="rounded-2xl bg-white/10 p-6 sm:col-span-2">
            <p class="text-3xl font-semibold">Puljak · Marjanovic · Lugonja</p>
            <p class="mt-2 text-white/75">Osnovna početna sekcija spremna da je kasnije precizno uskladimo sa Figma dizajnom.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
