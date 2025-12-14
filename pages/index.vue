<template>
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { useHead } from '#app';
  
  useHead({
    link: [],
  });
  </script>
  