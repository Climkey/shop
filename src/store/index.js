import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import addressModule from './modules/address'
// import createPersistedState from 'vuex-persistedstate'
import shopModule from './modules/shop'
import savePlugin from './plugins/save'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 严格模式，生产环境下不要开启
  plugins: [savePlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule,
    address: addressModule,
    shop: shopModule,
  },
})
