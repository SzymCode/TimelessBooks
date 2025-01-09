import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'

import App from '@/App.vue'

const routePaths: [string, string][] = [
    ['/', 'Home'],
    ['/en/', 'Home'],
    ['/en/existential', 'Existential'],
    ['/en/philosophy', 'Philosophy'],
    ['/en/psychology', 'Psychology'],
    ['/en/business', 'Business'],
    ['/pl/', 'Strona Główna'],
    ['/pl/egzystencjalne', 'Egzystencjalne'],
    ['/pl/filozofia', 'Filozofia'],
    ['/pl/psychologia', 'Psychologia'],
    ['/pl/biznes', 'Biznes'],
]

const routes: RouteRecordRaw[] = routePaths.map(([path, name]) => ({
    path,
    component: App,
    name,
}))

routes.push({ path: '/:pathMatch(.*)*', redirect: '/en' })
routes.push({ path: '/en/:pathMatch(.*)*', redirect: '/en' })
routes.push({ path: '/pl/:pathMatch(.*)*', redirect: '/pl' })

const VueRouter: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default VueRouter
