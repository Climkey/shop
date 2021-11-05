import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import './utils/vant-import'
import './utils/flexible'

Vue.prototype.$http = request

Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
