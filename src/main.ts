import { createApp } from 'vue'

import 'primevue/resources/themes/aura-dark-noir/theme.css'

import '@/style.css'
import App from '@/App.vue'

export const app = createApp(App)

/**
 *  PrimeVue components
 */
import Menubar from 'primevue/menubar'

app.component('Menubar', Menubar)

/**
 *  App uses & mount
 */
import PrimeVue from 'primevue/config'
import VueRouter from '@/router'

app.use(VueRouter).use(PrimeVue).mount('#app')
