import Vue from 'vue'
import App from './App.vue'
import  '../src/assets/font/iconfont.css'
import '../static/css/reset.css'
import router from './router'
import store from './store'
new Vue({
  el: '#app',
  render: h => h(App),
  router,  //使用$route $router keep-alive router-link router-view
  store  //使用上vuex
})