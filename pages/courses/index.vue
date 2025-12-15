<template>
  <div class="bg-gray-50 min-h-screen">
    <Navbar />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-16"
        >
          Explore Our Courses
        </h1>

        <div class="flex flex-wrap justify-center gap-10">
          <NuxtLink
            v-for="course in courses"
            :key="course.slug"
            :to="'/courses/' + course.slug"
            class="bg-white rounded-3xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 max-w-md flex flex-col"
          >
            <div class="relative">
              <img
                :src="course.image"
                :alt="course.title"
                class="h-64 w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
              ></div>
            </div>

            <div class="p-6 flex flex-col grow">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ course.title }}
              </h2>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ course.description }}
              </p>

              <div class="mt-auto pt-4 border-t border-gray-100">
                <div class="flex justify-between items-center">
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-bold text-rendezvous-red">₦15,000</span>
                    <span class="text-md text-gray-500 line-through">₦22,000</span>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const { courses } = useCourses();

useHead({
  title: "All Courses | Learn & Grow",
  meta: [
    {
      name: "description",
      content: "Browse all available courses on Learn & Grow.",
    },
  ],
});
</script>
