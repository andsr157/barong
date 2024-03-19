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
    '@vite-pwa/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'Barong',
      short_name: 'Barong',
      description: 'Baring adalah aplikasi yang memudahkan Anda untuk melakukan jual beli sampah atau rongsok secara mudah dan efisien. Temukan pengepul terdekat, jual sampah Anda, dan dapatkan keuntungan tambahan dengan Baring.',
      icons: [
        {
          "src": "/icon_192x192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "/icon_256x256.png",
          "type": "image/png",
          "sizes": "256x256"
        },
        {
          "src": "/icon_384x384.png",
          "type": "image/png",
          "sizes": "384x384"
        },
        {
          "src": "/icon_512x512.png",
          "type": "image/png",
          "sizes": "512x512"
        },
      ],
      screenshots: [
        {
          "src": "/screenshot1.png",
          "sizes": "640x1136",
          "type": "image/png"
        },
        {
          "src": "/screenshot2.png",
          "sizes": "1136x640",
          "type": "image/png"
        }

      ],
      "theme_color": "#307FF5",
      "background_color": "#ffffff"
    },
    workbox: {
      navigateFallback: '/user'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

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

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
