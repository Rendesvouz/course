<template>
  <nav class="bg-gradient-to-b from-[#de264c] to-[#ad0024] p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#home" class="nav-logo">
        <img src="/assets/Logo-white-tagline.png" alt="Rendezvouscare Logo" class="h-12">
      </a>
      <div class="hidden md:flex items-center space-x-4">
        <a href="#home" class="text-white hover:text-gray-200">Home</a>
        <a href="#reviews" class="text-white hover:text-gray-200">Reviews</a>
        <a href="#courses" class="text-white hover:text-gray-200">Courses</a>
        <a href="#enroll" class="text-white hover:text-gray-200">Enroll</a>
        <a href="#enroll" class="bg-white text-[#ad0024] px-4 py-2 rounded-full hover:bg-gray-200">Get Started</a>
      </div>
      <div class="md:hidden">
        <button id="mobile-menu" class="text-white">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script needed for this simple component
</script>
