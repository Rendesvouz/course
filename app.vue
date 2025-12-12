<template>
  <div>
    <Navbar />
    <Hero />
    <Courses />
    <Audience />
    <Testimonials />
    <Pricing />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    },
  ],
});
</script>
