import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../pages/Home.vue'

Vue.use(VueRouter)
let originPush= VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;//和push同理

//重写push
// push的上下文就是VueRouter的实例对象：this.$router
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }
    else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

const routers=[
    {
        path: '/',
        name: 'Home',
        redirect: '/home',
        component: ()=>import('../pages/Home.vue')
    },
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