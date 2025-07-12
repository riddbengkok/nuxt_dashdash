// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Muli': [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      // Token expiration settings (in milliseconds)
      tokenCheckInterval: parseInt(process.env.NUXT_PUBLIC_TOKEN_CHECK_INTERVAL || '300000'), // 5 minutes
      tokenExpiryWarning: parseInt(process.env.NUXT_PUBLIC_TOKEN_EXPIRY_WARNING || '600000'), // 10 minutes
      tokenExpiryThreshold: parseInt(process.env.NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD || '300000'), // 5 minutes
    }
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'Nuxt 3 Dashboard',
      meta: [
        { name: 'description', content: 'Nuxt 3 Dashboard with Firebase Auth' }
      ],
      // Add preconnect for better performance
      link: [
        { rel: 'preconnect', href: 'https://accounts.google.com' },
        { rel: 'preconnect', href: 'https://www.googleapis.com' }
      ]
    },
    // Use environment variable for baseURL or default to root
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
  }
})
