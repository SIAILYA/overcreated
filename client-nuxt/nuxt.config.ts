// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in', appear: true },
        layoutTransition: { name: 'fade', mode: 'out-in', appear: true },
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round'}
            ]
        }
    }
})
