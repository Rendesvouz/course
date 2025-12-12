// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/Main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
