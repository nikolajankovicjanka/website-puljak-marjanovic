<template>
  <section id="contact" class="bg-primary py-24 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.25em] text-white/70">Kontakt</p>
        <h2 class="mt-4 font-serif text-4xl">Zatražite pravnu konsultaciju.</h2>
        <div class="mt-8 space-y-3 text-white/80">
          <p>Bijeljina, 76300</p>
          <p>office@example.com</p>
          <p>+387 XX XXX XXX</p>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white/10 p-8 backdrop-blur-sm">
        <form class="grid gap-4">
          <input class="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/45" placeholder="Ime i prezime" />
          <input class="h-12 rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/45" placeholder="Email" />
          <textarea class="min-h-36 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/45" placeholder="Vaša poruka" />
          <button type="button" class="rounded-xl bg-white px-6 py-4 font-medium text-primary">Pošalji upit</button>
        </form>
      </div>
    </div>
  </section>
</template>
