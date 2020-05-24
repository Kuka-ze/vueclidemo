import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/css/reset.css'
import MyHttpServer from '@/plugins/http.js'
// Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MyHttpServer)

// Vue.use(axios);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

