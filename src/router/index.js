import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../pages/users.vue'
import Manner from '../pages/manner.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: '/Welcome',
        children: [
            { path: '/home', component: Welcome },
            { path: '/users', component: Users },
            { path: '/manner', component: Manner },
            // { path: '/roles', component: Roles },
            // { path: '/categories', component: Cate },
            // { path: '/params', component: Params },
            // { path: '/goods', component: GoodsList },
            // { path: '/goods/add', component: Add },
            // { path: '/orders', component: Order },
            // { path: '/reports', component: Report }
        ]
    }
    ]
})