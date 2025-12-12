<template>
  <div>
    <Navbar />
    <Hero />
    <Hook />
    <Courses />
    <Audience />
    <Testimonials />
    <Pricing/>
    <Enroll />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Hook from './components/Hook.vue'
import Courses from './components/Courses.vue'
import Audience from './components/Audience.vue'
import Testimonials from './components/Testimonials.vue'
import Enroll from './components/Enroll.vue'
import Footer from './components/Footer.vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})
</script>
