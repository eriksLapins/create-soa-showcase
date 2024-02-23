// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
    app: {
        head: {
            title: 'SortofaShowcase {{capital name}}',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image'
    ],
})
