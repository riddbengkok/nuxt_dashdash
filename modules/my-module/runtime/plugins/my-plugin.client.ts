export default defineNuxtPlugin(() => {
  console.log('My module plugin loaded!')

  return {
    provide: {
      myModuleHelper: () => {
        return {
          version: '1.0.0',
          name: 'my-module',
        }
      },
    },
  }
})
