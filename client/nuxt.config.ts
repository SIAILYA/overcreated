// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            apiUrl: process.env.NUXT_API_URL || '/api/v3',
            apiHost: process.env.NUXT_OVC_API_BASE_URL || ''
        }
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in', appear: true},
        layoutTransition: {name: 'fade', mode: 'out-in', appear: true},
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round'},
                {rel: 'icon', type: 'image/png', href: '/favicon.png'}
            ],
        }
    },
    build: {
        transpile: ['gsap'],
    },
})
