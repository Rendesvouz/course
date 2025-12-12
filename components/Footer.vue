<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Newsletter -->
      <div class="flex flex-col md:flex-row gap-8 mb-16">
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
          <p class="text-gray-400">Never miss out on important updates, subscribe to our Newsletter today!</p>
          
          <div v-if="showSuccess" class="mt-4 bg-green-600 text-white p-3 rounded-lg">
            Thanks for subscribing! Check your inbox soon.
          </div>
          <div v-if="showError" class="mt-4 bg-red-600 text-white p-3 rounded-lg">
            Failed to subscribe. Please try again.
          </div>
        </div>
        
        <div class="flex-1">
          <form @submit.prevent="handleSubmit" class="flex gap-2">
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter email address" 
              required
              class="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500"
            >
            <button 
              type="submit"
              class="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p class="text-sm text-gray-400 mt-2">
            By subscribing you agree to our 
            <a href="/privacy-policy" class="text-primary-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
      
      <!-- Footer Links -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <img 
            src="/assets/Logo-white-tagline.png" 
            alt="Logo" 
            class="h-10 mb-4"
          >
          <p class="text-gray-400 text-sm leading-relaxed">
            With our cutting-edge matching algorithms, personalized profiles, and user-friendly interface, finding your perfect match has never been easier.
          </p>
        </div>
        
        <div>
          <h3 class="font-bold mb-4">Rendezvous</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold mb-4">Rendezvous</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Events</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <hr class="border-gray-800 mb-8">
      
      <!-- Footer Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © Copyright {{ currentYear }} • All Rights Reserved by Rendezvous
        </p>
        
        <div class="flex gap-4">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            target="_blank" 
            rel="noopener noreferrer"
            :title="social.name"
            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')
const showSuccess = ref(false)
const showError = ref(false)
const currentYear = new Date().getFullYear()

const socials = [
  { name: 'X', icon: 'fab fa-twitter', url: 'https://x.com/Rendezvouscare' },
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1Yq4Sv7Fyo/?mibextid=wwXIfr' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/rendezvouscare?igsh=MWJ5c3A1ZWIycnh3NQ==' },
  { name: 'Youtube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@RendezvousLuxuryCare' },
  { name: 'Tiktok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@rendezvousluxurycare?_t=8sGpKAZ24u5&_r=1' },
  { name: 'Linkedin', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rendezvous-luxury-care-services' }
]

const handleSubmit = () => {
  // Simulate API call
  if (email.value) {
    showSuccess.value = true
    showError.value = false
    email.value = ''
    
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } else {
    showError.value = true
    showSuccess.value = false
  }
}
</script>