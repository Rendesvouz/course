<template>
  <section id="courses" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
        >
          The Big Reveal
        </h2>
        <p
          class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          For the first time ever, I have packaged everything I use into a
          simple 3-Course Affiliate Marketing System that takes you from
          confused beginner to confident affiliate earner.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="course in courses"
          :key="course.title"
          class="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
        >
          <!-- Image -->
          <div class="relative h-52 w-full overflow-hidden rounded-t-3xl shrink-0">
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <!-- Rating Badge -->
            <div
              class="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-semibold rounded-full shadow-md flex items-center gap-1"
            >
              ⭐ {{ course.rating }}
            </div>
            <!-- Short Title Overlay -->
            <div
              class="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/40 to-transparent p-4"
            >
              <h4 class="text-white text-lg font-semibold">{{ course.shortTitle }}</h4>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              {{ course.title }}
            </h3>
            <p
              class="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3"
            >
              {{ course.description }}
            </p>

            <!-- Bottom row: pricing + button -->
            <div class="flex items-center justify-between mt-auto">
              <!-- Pricing -->
              <div class="flex items-center space-x-2">
                <span class="text-gray-400 line-through text-sm">₦22,000</span>
                <span class="text-red-600 font-bold text-lg sm:text-xl">₦15,000</span>
              </div>

              <!-- CTA Button -->
              <a
                :href="course.link"
                class="bg-rendezvous-red hover:bg-rendezvous-red-hover text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 uppercase tracking-wide shadow-md hover:shadow-lg"
              >
                Get Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const { observeElements } = useScrollAnimation();
onMounted(() => observeElements());

const courses = [
  {
    title: "Email Marketing Automation Using Zoho",
    description:
      "Build automated income funnels, send campaigns that convert on autopilot, and learn how top earners follow up without stress. This is how money works while you sleep.",
    image: "https://placehold.co/600x400/fdf2f2/bc0c34?text=Email+Automation",
    link: "#enroll-email", // Added a link property for the CTA
    cta: "Give Me Access",
    rating: "4.8",
    shortTitle: "Email",
  },
  {
    title: "Lead Generation Using Scrappy",
    description:
      "Learn how to find ready-to-buy prospects daily, stop begging people to buy, and build a real list of interested buyers. No leads = no money. This fixes that.",
    image: "https://placehold.co/600x400/fdf2f2/bc0c34?text=Lead+Generation",
    link: "#enroll-lead", // Added a link property for the CTA
    cta: "Get Access",
    rating: "4.9",
    shortTitle: "Lead",
  },
  {
    title: "Social Media Automation Using Zoho Socials",
    description:
      "Post across all platforms at once, stay consistent without stress, and turn your social media into a daily sales machine. No more burnout. Let automation work for you.",
    image:
      "https://placehold.co/600x400/fdf2f2/bc0c34?text=Social+Media+Automation",
    link: "#enroll-social", // Added a link property for the CTA
    cta: "Join Now",
    rating: "4.7",
    shortTitle: "Social",
  },
];
</script>
