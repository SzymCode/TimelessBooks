import { createRouter, createWebHistory, Router } from 'vue-router'
import App from '@/App.vue'

const VueRouter: Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/en' },
        { path: '/en/', component: App, name: 'Home' },
        { path: '/en/existential', component: App, name: 'Existential' },
        { path: '/en/philosophy', component: App, name: 'Philosophy' },
        { path: '/en/psychology', component: App, name: 'Psychology' },
        { path: '/en/business', component: App, name: 'Business' },

        { path: '/pl/', component: App, name: 'Strona Główna' },
        { path: '/pl/egzystencjalne', component: App, name: 'Egzystencjalne' },
        { path: '/pl/filozofia', component: App, name: 'Filozofia' },
        { path: '/pl/psychologia', component: App, name: 'Psychologia' },
        { path: '/pl/biznes', component: App, name: 'Biznes' },

        { path: '/:pathMatch(.*)', redirect: '/en' },
        { path: '/en/:pathMatch(.*)', redirect: '/en' },
        { path: '/pl/:pathMatch(.*)', redirect: '/pl' },
    ],
})

export default VueRouter
