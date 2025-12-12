<template>
  <section id="courses" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          The Big Reveal
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          For the first time ever, I have packaged everything I use into a simple 3-Course Affiliate Marketing System that takes you from confused beginner to confident affiliate earner. With discipline and consistency, this system can help you build toward $1,500 per week and beyond.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="course in courses" 
          :key="course.title"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105 fade-in"
        >
          <div class="h-48 bg-gradient-to-br from-pink-50 to-red-100 flex items-center justify-center">
            <img 
              :src="course.image" 
              :alt="course.title"
              class="w-full h-full object-cover"
            >
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ course.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ course.description }}
            </p>
            <a 
              href="#enroll" 
              class="block w-full bg-secondary-500 hover:bg-secondary-600 text-white text-center py-3 rounded-full font-semibold transition-all"
            >
              {{ course.cta }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElements } = useScrollAnimation()
onMounted(() => observeElements())

const courses = [
  {
    title: 'Email Marketing Automation Using Zoho',
    description: 'Build automated income funnels, send campaigns that convert on autopilot, and learn how top earners follow up without stress. This is how money works while you sleep.',
    image: 'https://placehold.co/600x400/fdf2f2/bc0c34?text=Email+Automation',
    cta: 'Give Me Access'
  },
  {
    title: 'Lead Generation Using Scrappy',
    description: 'Learn how to find ready-to-buy prospects daily, stop begging people to buy, and build a real list of interested buyers. No leads = no money. This fixes that.',
    image: 'https://placehold.co/600x400/fdf2f2/bc0c34?text=Lead+Generation',
    cta: 'I Want to Earn Online'
  },
  {
    title: 'Social Media Automation Using Zoho Socials',
    description: 'Post across all platforms at once, stay consistent without stress, and turn your social media into a daily sales machine. No more burnout. Let automation work for you.',
    image: 'https://placehold.co/600x400/fdf2f2/bc0c34?text=Social+Media+Automation',
    cta: 'Start My Affiliate Journey Now'
  }
]
</script>