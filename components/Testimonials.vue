<template>
  <section id="reviews" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          RESULTS YOU CAN EXPECT (WITH CONSISTENCY)
        </h2>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="result in results" 
          :key="result.text"
          class="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all fade-in"
        >
          <i :class="result.icon" class="text-4xl text-primary-600 mb-4"></i>
          <p class="text-lg font-semibold text-gray-800">{{ result.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation()
onMounted(() => observeElements())

const results = [
  { icon: 'fas fa-chart-line', text: 'Daily lead flow' },
  { icon: 'fas fa-cogs', text: 'Automated marketing system' },
  { icon: 'fas fa-stream', text: 'Multiple income streams' },
  { icon: 'fas fa-globe-americas', text: 'Global payment opportunities' },
  { icon: 'fas fa-laptop-code', text: 'Real online income skill' },
  { icon: 'fas fa-headset', text: 'A system that works even when you rest' }
]
</script>

