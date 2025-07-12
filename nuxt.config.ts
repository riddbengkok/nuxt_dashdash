// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'Nuxt 3',
      meta: [
        { name: 'description', content: 'Nuxt 3' }
      ]
    },
    baseURL: '/nuxt_dashdash/',
  }
})
