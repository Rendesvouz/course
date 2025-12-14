<template>
  <div class="bg-gray-50 min-h-screen">
    <Navbar />

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-12">
          All Courses
        </h1>

        <div class="grid md:grid-cols-2 gap-10">
          <div
            v-for="course in courses"
            :key="course.slug"
            class="bg-white rounded-2xl border shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <NuxtLink :to="'/courses/' + course.slug">
              <img
                :src="course.image"
                :alt="course.title"
                class="h-64 w-full object-cover"
              />

              <div class="p-6">
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">
                  {{ course.title }}
                </h2>
                <p class="text-gray-600 mb-4">
                  {{ course.description }}
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-rendezvous-red">₦15,000</span>
                  <span class="text-sm text-gray-500">View Details &rarr;</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const { courses } = useCourses()

useHead({
  title: 'All Courses | Learn & Grow',
  meta: [
    {
      name: 'description',
      content: 'Browse all available courses on Learn & Grow.'
    }
  ]
})
</script>
