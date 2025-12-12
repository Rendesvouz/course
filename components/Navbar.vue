<template>
    <nav class="bg-gradient-to-r from-primary-600 to-primary-800 sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="#home" class="flex-shrink-0">
            <img 
              src="/assets/Logo-white-tagline.png" 
              alt="Rendezvouscare Logo" 
              class="h-12 w-auto"
            >
          </a>
          
          <button 
            @click="toggleMenu" 
            class="md:hidden text-white text-2xl"
          >
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
          
          <ul 
            class="hidden md:flex items-center space-x-8"
          >
            <li v-for="item in navItems" :key="item.href">
              <a 
                :href="item.href" 
                class="text-white hover:text-gray-200 transition-colors font-medium"
              >
                {{ item.label }}
              </a>
            </li>
            <li>
              <a 
                href="#enroll" 
                class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Mobile menu -->
        <div 
          v-if="isMenuOpen" 
          class="md:hidden pb-4"
        >
          <ul class="space-y-4">
            <li v-for="item in navItems" :key="item.href">
              <a 
                :href="item.href" 
                @click="closeMenu"
                class="block text-white hover:text-gray-200 transition-colors font-medium py-2"
              >
                {{ item.label }}
              </a>
            </li>
            <li>
              <a 
                href="#enroll" 
                @click="closeMenu"
                class="block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2.5 rounded-full font-semibold text-center transition-all"
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
  const isMenuOpen = ref(false)
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Courses', href: '#courses' },
    { label: 'Enroll', href: '#enroll' },
  ]
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>