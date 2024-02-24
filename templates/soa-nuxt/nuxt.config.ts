// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
          title: '{{capital name}} | SortofaShowcase',
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
  },
  components: {
    dirs: [
      {
        path: "~/components/Soa",
        global: true,
      }
    ],
  },
  css: [
    "~/assets/css/app.css",
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
