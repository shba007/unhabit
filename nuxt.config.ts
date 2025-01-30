import { version } from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/colada-nuxt', '@pinia/nuxt', '@vite-pwa/nuxt', 'nuxt-auth-utils'],
  runtimeConfig: {
    public: {
      version,
    },
  },
})
