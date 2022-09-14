const routes = [
    {
        path: '/',
        component: require('./pages/blank.vue')
    },
    {
        path: '/post',
        component: require('./pages/post.vue')
    },
    {
        path: '/about',
        component: require('./pages/about.vue')
    },
]

import VueRouter from 'vue-router'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})