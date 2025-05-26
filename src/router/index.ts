import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Recommend from '../views/Recommend.vue'
import Stats from '../views/Stats.vue'
import Settings from '../views/Settings.vue'

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {
        path: '/home',
        component:  Home,
        children: [
            {
                path: 'category',
                component:  Category
            },
            {
                path: 'recommend',
                component: Recommend
            },
            {
                path: 'stats',
                component: Stats
            },
            {
                path: 'settings',
                component: Settings
            }
        ]
    },
    // 其它路由未来可补充
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
