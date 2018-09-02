import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './layout/default.vue'
import router from './router'
import store from './store'
import './plugins/vue-primitives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
