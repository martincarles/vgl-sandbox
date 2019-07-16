import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vgl from 'vue-golden-layout'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
Vue.use(vgl)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
