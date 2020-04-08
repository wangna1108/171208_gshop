import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import  '../src/assets/font/iconfont.css'
import '../static/css/reset.css'
import router from './router'
import store from './store'
import loading from './common/imgs/loading.c1486d8.gif'
import './mock/mockServer' // 加载mockServer即可
import './filters'   //加载过滤器
// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,  //使用$route $router keep-alive router-link router-view
  store  //使用上vuex
})