import Vue from 'vue'
import App from './App.vue'
import  '../src/assets/font/iconfont.css'
 import '../static/css/reset.css'
import router from './router'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})