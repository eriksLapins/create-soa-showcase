// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
          title: '{{capital name}} | SortofaShowcase',
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
