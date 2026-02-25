// @ts-expect-error - lenis/vue is a valid module
import vuePlugin from 'lenis/vue'
import type { Plugin } from '#app'
import { defineNuxtPlugin } from '#imports'

const plugin = defineNuxtPlugin({
  name: 'lenis',
  setup(nuxtApp: any) {
    nuxtApp.vueApp.use(vuePlugin)
  },
}) satisfies Plugin

export default plugin
