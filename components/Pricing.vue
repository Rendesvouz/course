
<template>
    <section id="enroll" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why This Offer is Special (December Only)
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            December is the only time people take bold financial steps, prepare for the new year, and invest to change their income story. This opportunity is not for everyone — and I cannot mentor unlimited people at once. My WhatsApp number is linked and my team and I will personally guide you. You won't be confused, alone, or lost.
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl fade-in">
          <h3 class="text-2xl md:text-3xl font-bold mb-8">
            Don't let this December pass like the others. You either change your income story now — or repeat the same struggle in January.
          </h3>
          <a 
            href="#" 
            class="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg mb-4"
          >
            ENROLL NOW & START EARNING THIS DECEMBER
          </a>
          <p class="text-sm text-gray-200">
            Instant Access • Beginner Friendly • Limited Slots Available
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const { observeElements } = useScrollAnimation()
  onMounted(() => observeElements())
  </script>