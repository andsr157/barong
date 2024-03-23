// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@vee-validate/nuxt',
    '@nuxt/image',
    'nuxt-swiper',
    '@sidebase/nuxt-auth',
  ],


  runtimeConfig: {
    public: {
      appUrl: process.env.BASE_URL ?? 'http://localhost:3000',
      apiurl: process.env.API_URL
    }
  },

  veeValidate: {
    autoImports: true
  },

  image: {
    inject: true,
    format: ['webp'],
    domains: []
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
