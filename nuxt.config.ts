// https://nuxt.com/docs/api/configuration/nuxt-config
import * as messages from './locales'
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Favorite movies'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  css: [
    '@/assets/scss/index.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/additionalData/index.scss";'
        }
      }
    }
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        // If you want to change default compiler options, put new rules here
      }
    }
  },
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'ru',
      messages
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  }
})
