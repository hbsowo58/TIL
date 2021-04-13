import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
// The app.use(VueApexCharts) will make <apexchart> component available everywhere.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
