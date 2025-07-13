// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/main.css'],
  
  // Bundle analyzer and optimization configuration
  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Firebase chunk
            if (id.includes('firebase')) {
              return 'firebase'
            }
            // Vue chunk
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue'
            }
            // UI libraries chunk
            if (id.includes('@heroicons') || id.includes('daisyui')) {
              return 'ui'
            }
            // Fonts chunk
            if (id.includes('@nuxtjs/google-fonts')) {
              return 'fonts'
            }
            // Default vendor chunk
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    },
    // Enable bundle analysis
    plugins: process.env.ANALYZE === 'true' ? [
      {
        name: 'bundle-analyzer',
        apply: 'build',
        generateBundle(options, bundle) {
          console.log('📊 Bundle Analysis:')
          console.log('==================')
          
          let totalSize = 0
          const chunks = []
          
          for (const [fileName, chunk] of Object.entries(bundle)) {
            if (chunk.type === 'chunk') {
              const size = chunk.code.length
              totalSize += size
              chunks.push({
                name: fileName,
                size: size,
                sizeKB: (size / 1024).toFixed(2)
              })
            }
          }
          
          // Sort by size (largest first)
          chunks.sort((a, b) => b.size - a.size)
          
          console.log(`Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`)
          console.log('\nLargest chunks:')
          chunks.slice(0, 10).forEach(chunk => {
            console.log(`  ${chunk.name}: ${chunk.sizeKB} KB`)
          })
          
          console.log('\n💡 Optimization tips:')
          console.log('- Consider code splitting for large components')
          console.log('- Use dynamic imports for routes')
          console.log('- Optimize images and assets')
          console.log('- Consider tree-shaking unused dependencies')
        }
      }
    ] : []
  },
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
    preset: 'static',
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
    // Set baseURL for all environments (same as local development)
    baseURL: '/nuxt_dashdash/',
    cdnURL: '/nuxt_dashdash/',
    // Define specific build assets directory (relative to baseURL)
    buildAssetsDir: '/nuxt_dashdash/_nuxt/',
  }
})
