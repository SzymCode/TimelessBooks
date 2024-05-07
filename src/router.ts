import { createRouter, createWebHistory, Router } from 'vue-router'

import App from '@/App.vue'

const VueRouter: Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: App, name: 'Home' },
        { path: '/existential', component: App, name: 'Existential' },
        { path: '/philosophy', component: App, name: 'Philosophy' },
        { path: '/psychology', component: App, name: 'Psychology' },
        { path: '/business', component: App, name: 'Business' },
        { path: '/:pathMatch(.*)', redirect: '/home' },
    ],
})

export default VueRouter
