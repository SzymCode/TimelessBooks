import { createApp } from 'vue'

import 'primevue/resources/themes/aura-dark-noir/theme.css'

import '@/style.css'
import App from '@/App.vue'

export const app = createApp(App)

/**
 *  PrimeVue components
 */
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Image from 'primevue/image'
import Menubar from 'primevue/menubar'

app.component('Column', Column)
    .component('DataTable', DataTable)
    .component('Image', Image)
    .component('Menubar', Menubar)

/**
 *  App uses & mount
 */
import PrimeVue from 'primevue/config'
import VueRouter from '@/router'

app.use(VueRouter).use(PrimeVue).mount('#app')
