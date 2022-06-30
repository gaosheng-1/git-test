import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "首页",
        redrie: "/home"
    },
    {
        path:"/home",
        name: "首页", 
        component: () => import("@/views/home/index.vue")
    }
]
const router = new Router({ routes,/* mode:'history' */})
export default router