<template>
  <section id="reviews" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20 fade-in">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
        >
          RESULTS YOU CAN EXPECT (WITH CONSISTENCY)
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="result in results"
          :key="result.text"
          class="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 fade-in"
        >
          <!-- Icon Circle -->
          <div
            class="w-20 h-20 flex items-center justify-center rounded-full bg-rendezvous-red/10 text-rendezvous-red mb-6 shadow-md transition-transform duration-300 hover:scale-110"
          >
            <i :class="result.icon" class="text-3xl sm:text-4xl"></i>
          </div>

          <!-- Text -->
          <p
            class="text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed"
          >
            {{ result.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const { observeElements } = useScrollAnimation();
onMounted(() => observeElements());

const results = [
  { icon: "fas fa-chart-line", text: "Daily lead flow" },
  { icon: "fas fa-cogs", text: "Automated marketing system" },
  { icon: "fas fa-stream", text: "Multiple income streams" },
  { icon: "fas fa-globe-americas", text: "Global payment opportunities" },
  { icon: "fas fa-laptop-code", text: "Real online income skill" },
  { icon: "fas fa-headset", text: "A system that works even when you rest" },
];
</script>
