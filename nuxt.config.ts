// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            title: 'Favorite movies'
        }
    },
    modules: [
        '@pinia/nuxt'
    ],
    css: [
        '@/assets/scss/index.scss'
    ],
    typescript: {
        strict: true,
        tsConfig: {
            compilerOptions: {
                // If you want to change default compiler options, put new rules here
            }
        }
    },
})
