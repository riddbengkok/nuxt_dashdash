import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faGoogle)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
