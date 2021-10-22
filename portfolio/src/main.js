import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

// CSS
import './assets/main.scss'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter)