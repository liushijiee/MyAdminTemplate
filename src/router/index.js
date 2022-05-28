import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routers=[
    {
        path: '/home',
        name: 'Home',
        component: ()=>import('../pages/Home.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: ()=>import('../pages/User.vue')
    }
]

const router=new VueRouter({
    mode: 'hash',
    routes: routers
})
export default router