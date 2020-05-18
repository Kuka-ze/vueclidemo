import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/component/login/login.vue'

Vue.use(Router)
export default new Router({
    routes:[{
        name:'login',
        path:'/',
        component:Login
    }]
})