// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-swiper",
    "@sidebase/nuxt-auth",
    "nuxt-rating",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt3-leaflet',

  ],

  runtimeConfig: {
    app: {
      appSecret: process.env.NUXT_ENV_SECRET,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      bucketUrl: process.env.BUCKET_URL,
      jwtSecret: process.env.JWT_SECRET,
    },
    public: {
      appUrl: process.env.BASE_URL ?? "http://localhost:3000",
      apiurl: process.env.API_URL,

    },
  },

  pwa: {
    manifest: {
      name: 'Barong',
      short_name: 'Barong',
      description: 'Barong: aplikasi Jual Beli Rongsok',
      theme_color: '#ffff',
      icons: [
        {
          src: 'icons/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ],
      screenshots: [
        {
          "src": "screen/screen_360x800.png",
          "sizes": "360x800",
          "type": "image/png",
          "form_factor": "narrow",
          "label": "Mobile"
        },
        {
          "src": "screen/screen_1920x1080.png",
          "sizes": "1920x1080",
          "type": "image/png",
          "form_factor": "wide",
          "label": "Desktop"
        },
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    strategies: 'injectManifest',
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },

  auth: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://barong-psi.vercel.app/api/v1/_auth"
        : "http://localhost:3000/api/v1/_auth",
    provider: {
      type: "authjs",
    },
  },

  // veeValidate: {
  //   autoImports: true
  // },

  image: {
    inject: true,
    format: ["webp"],
    domains: [],
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
