
<template>
  <section 
    id="home" 
    class="bg-gradient-to-b from-primary-600 to-primary-800 text-white py-16 md:py-24"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div class="flex-1 fade-in">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            How Everyday Nigerians Are Now Making $1,500+ Weekly Online Using Affiliate Marketing — Without Tech Skills, Without Guessing, and Without Long Experience
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl">
            I'm finally revealing the exact tools, systems, and automation strategy I personally use to earn online daily — and this December, you can start too.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#enroll" 
              class="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 text-center shadow-lg"
            >
              START EARNING THIS DECEMBER
            </a>
          </div>
          <p class="text-sm text-gray-200">
            Instant Access • Beginner Friendly • Limited Slots
          </p>
        </div>
        
        <div class="flex-1 fade-in">
          <img 
            src="/assets/IMG-20251210-WA0011.jpg" 
            alt="Professional working on laptop" 
            class="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation()
onMounted(() => observeElements())
</script>
