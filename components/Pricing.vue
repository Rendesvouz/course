<template>
  <section id="enroll" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 fade-in">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight lg:w-full lg:text-center"
        >
          Why This Offer is Special (December Only)
        </h2>

        <p class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          December is the only time people take bold financial steps, prepare
          for the new year, and invest to change their income story. This
          opportunity is not for everyone — my team and I will personally guide
          you to ensure you never feel lost or confused.
        </p>
      </div>

      <!-- Call-to-Action Box -->
      <div
        class="bg-linear-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl fade-in transform transition-transform duration-300 hover:-translate-y-2"
      >
        <h3 class="text-2xl md:text-3xl font-bold mb-8 leading-snug">
          Don't let this December pass like the others. You either change your
          income story now — or repeat the same struggle in January.
        </h3>
        <a
          href="#"
          class="inline-block bg-rendezvous-red hover:bg-rendezvous-red-hover text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg mb-4"
        >
          ENROLL NOW
        </a>
        <p class="text-sm text-gray-500">
          Instant Access • Beginner Friendly • Limited Slots Available
        </p>
      </div>
    </div>
  </section>

  <section
    class="bg-linear-to-r from-[#1f1c2f] to-[#2a243f] text-white py-24 px-[5%]"
  >
    <div class="container mx-auto text-center max-w-3xl">
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-snug"
      >
        Ready to Build Your Own 7-Figure Affiliate Business?
      </h2>
      <p class="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
        Stop dreaming and start doing. Get instant access to the complete system
        and start your journey to financial freedom today.
      </p>
      <a
        href="#"
        class="bg-rendezvous-red text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl shadow-lg hover:shadow-2xl hover:bg-white hover:text-rendezvous-red transition-all duration-300 inline-block"
      >
        ENROLL NOW & GET INSTANT ACCESS
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation();
onMounted(() => observeElements());
</script>
