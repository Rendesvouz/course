<template>
  <div class="bg-gray-50 min-h-screen">
    <Navbar />

    <section v-if="course" class="pt-20 pb-24">
      <!-- HERO -->
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        <!-- Left -->
        <div class="lg:col-span-2 space-y-6">
          <div class="text-sm text-gray-500">
            <NuxtLink to="/" class="hover:text-rendezvous-red">Home</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-gray-700 font-medium">{{ course.title }}</span>
          </div>

          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {{ course.title }}
          </h1>

          <p class="text-xl text-gray-600 max-w-2xl">
            {{ course.description }}
          </p>

          <!-- Trust bar -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-check text-rendezvous-red-soft"></i>
              <span>Beginner friendly</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-check text-rendezvous-red-soft"></i>
              <span>Practical & real-world</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-check text-rendezvous-red-soft"></i>
              <span>Lifetime access</span>
            </div>
          </div>

          <!-- Learn section -->
          <div class="bg-white mt-10 p-8 rounded-2xl border shadow-sm">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">
              What you’ll learn
            </h2>

            <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              <li
                v-for="(item, index) in course.whatYouWillLearn"
                :key="index"
                class="flex items-start gap-3"
              >
                <i class="fa-solid fa-check text-rendezvous-red-soft mt-1.5"></i>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right / Pricing -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <div class="bg-white rounded-2xl border shadow-lg overflow-hidden">
              <img
                :src="course.image"
                :alt="course.title"
                class="h-56 w-full object-cover"
              />

              <div class="p-6 space-y-6">
                <div class="text-center">
                  <div class="text-gray-400 line-through text-lg">
                    ₦22,000
                  </div>
                  <div class="text-4xl font-extrabold text-gray-900">
                    ₦15,000
                  </div>
                  <div class="text-sm text-gray-500 mt-1">
                    One-time payment. No hidden fees.
                  </div>
                </div>

                <button
                  class="w-full bg-rendezvous-red hover:bg-rendezvous-red-hover text-white py-4 rounded-xl font-semibold text-lg transition shadow-lg"
                >
                  Get instant access
                </button>

                <div class="text-center text-xs text-gray-500">
                  30-day money-back guarantee · Secure checkout
                </div>

                <div class="border-t pt-4 text-sm text-gray-600 space-y-3">
                  <div class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-rendezvous-red-soft mt-1"></i>
                    <span>Full course access</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-rendezvous-red-soft mt-1"></i>
                    <span>Downloadable resources</span>
                  </div>
                   <div class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-rendezvous-red-soft mt-1"></i>
                    <span>Access on mobile & desktop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not found -->
    <section v-else class="py-32 text-center">
      <h1 class="text-4xl font-bold">Course not found</h1>
      <p class="text-gray-600 mt-4">
        The course you’re looking for doesn’t exist.
      </p>
      <NuxtLink to="/" class="text-rendezvous-red mt-6 inline-block">
        Back to home
      </NuxtLink>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const { courses } = useCourses()
const route = useRoute()
const slug = route.params.slug as string

const course = courses.find(c => c.slug === slug)

useHead({
  title: course ? `${course.title} | Learn & Grow` : 'Course Not Found',
  meta: [
    {
      name: 'description',
      content: course
        ? course.description
        : 'The course you are looking for was not found.'
    }
  ]
})
</script>
