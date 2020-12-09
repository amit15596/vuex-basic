import Vue from 'vue'
import Vuex from 'vuex'

import Product from './product';
import Cart from './cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product:Product,
    cart:Cart
  }
})
