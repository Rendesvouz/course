<template>
  <section class="mt-20 mb-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
      >
        <div class="flex-1 fade-in">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            How Everyday Nigerians Are Now Making $1,500+ Weekly Online Using
            Affiliate Marketing — Without Tech Skills, Without Guessing, and
            Without Long Experience
          </h1>
          <p class="text-lg sm:text-xl mb-8 max-w-2xl">
            I'm finally revealing the exact tools, systems, and automation
            strategy I personally use to earn online daily — and this December,
            you can start too.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="#enroll"
              class="bg-rendezvous-red text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 text-center shadow-lg"
            >
              START EARNING THIS DECEMBER
            </a>
          </div>
          <p class="text-sm text-gray-500">
            Instant Access • Beginner Friendly • Limited Slots
          </p>
        </div>

        <div class="flex-1 fade-in flex items-start justify-center">
          <img
            src="/assets/IMG-20251210-WA0011.jpg"
            alt="Professional working on laptop"
            class="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Hook -->
  <section class="bg-gray-100 py-20 px-[5%]">
    <div class="container mx-auto text-center max-w-4xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Still on the Fence? Here’s the Hook...
      </h2>
      <p class="text-lg">
        This is not another “guru” course. It's a simple, proven, and repeatable
        affiliate marketing system that works for anyone, regardless of your
        background. No fancy websites, no crazy ad spend — just a
        straightforward path to earning online.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation();
onMounted(() => observeElements());
</script>
