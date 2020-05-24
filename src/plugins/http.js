//插件模块
import axios from 'axios'
const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
    //添加实例方法
    // axios.defaults.baseURL = 'https://mockapi.eolinker.com/s5CFVvec061dcb0e6ae9baadf5562c84c31ff313b21578e/demo/user/register'


    Vue.prototype.$http = axios
}

export default MyHttpServer