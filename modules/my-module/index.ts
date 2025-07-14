import { addLayout, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Register a component
    nuxt.hook('components:dirs', dirs => {
      dirs.push({
        path: resolve('runtime/components'),
        pathPrefix: false,
      })
    })
    // Register composables
    nuxt.hook('imports:dirs', (dirs: string[]) => {
      dirs.push(resolve('runtime/composables'))
    })
    // Register plugins
    nuxt.hook('plugins:dirs', (dirs: string[]) => {
      dirs.push(resolve('runtime/plugins'))
    })

    // Register server API
    nuxt.hook('nitro:config', config => {
      config.handlers = config.handlers || []
      config.handlers.push({
        route: '/api/my-module',
        handler: resolve('runtime/server/api/my-module.ts'),
      })
    })
    // Register the layout
    addLayout(
      {
        src: resolve('runtime/layouts/my-layout.vue'),
        filename: 'my-layout.vue',
      },
      'my-layout'
    )
  },
})
