
import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

