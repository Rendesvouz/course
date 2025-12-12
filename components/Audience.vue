<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Who This Is For -->
        <div
          class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-6"
        >
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who This Is For
          </h3>
          <ul class="space-y-4">
            <li
              v-for="item in forList"
              :key="item"
              class="flex items-start gap-4"
            >
              <span
                class="shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-lg shadow"
              >
                <i class="fas fa-check"></i>
              </span>
              <span class="text-gray-700 text-sm sm:text-base">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Who It Is NOT For -->
        <div
          class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-6"
        >
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who It Is NOT For
          </h3>
          <ul class="space-y-4">
            <li
              v-for="item in notForList"
              :key="item"
              class="flex items-start gap-4"
            >
              <span
                class="shrink-0 w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-lg shadow"
              >
                <i class="fas fa-times"></i>
              </span>
              <span class="text-gray-700 text-sm sm:text-base">{{ item }}</span>
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
