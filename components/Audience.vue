<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 fade-in">
        <div class="bg-green-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Who This Is For
          </h3>
          <ul class="space-y-4">
            <li v-for="item in forList" :key="item" class="flex items-start gap-3">
              <i class="fas fa-check-circle text-green-600 text-xl mt-1"></i>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-red-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Who It Is NOT For
          </h3>
          <ul class="space-y-4">
            <li v-for="item in notForList" :key="item" class="flex items-start gap-3">
              <i class="fas fa-times-circle text-red-600 text-xl mt-1"></i>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation()
onMounted(() => observeElements())

const forList = [
  'Beginners with zero experience',
  'Struggling affiliate marketers',
  '9–5 workers looking for side income',
  'Students',
  'Hustlers who want global earning power',
  'Anyone tired of surviving month to month'
]

const notForList = [
  'People looking for free money',
  'People afraid of learning',
  'Lazy minds'
]
</script>