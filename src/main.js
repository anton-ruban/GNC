import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import router from './router'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

exportingInit(Highcharts)

Vue.use(VueRouter)
Vue.use(HighchartsVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
