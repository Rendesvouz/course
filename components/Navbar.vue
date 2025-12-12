<template>
  <nav class="bg-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="#home" class="shrink-0">
          <img
            src="/assets/Logo-white-tagline.png"
            alt="Rendezvouscare Logo"
            class="h-12 w-auto"
          />
        </a>

        <!-- Mobile toggle button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>

        <!-- Desktop menu -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-rendezvous-red font-medium transition-colors duration-200 ease-in-out"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <a
              href="#enroll"
              class="bg-rendezvous-red text-white px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105"
            >
              Get Courses
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-2 pb-4 border-t border-gray-200"
      >
        <ul class="space-y-4">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              @click="closeMenu"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <a
              href="#enroll"
              @click="closeMenu"
              class="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-center transition-transform hover:scale-105"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const navItems = [
  // { label: "Home", href: "#home" },
  // { label: "Reviews", href: "#reviews" },
  // { label: "Courses", href: "#courses" },
  // { label: "Enroll", href: "#enroll" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
